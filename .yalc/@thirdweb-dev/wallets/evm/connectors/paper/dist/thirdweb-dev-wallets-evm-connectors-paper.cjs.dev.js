'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var embeddedWalletServiceSdk = require('@paperxyz/embedded-wallet-service-sdk');
var ethers = require('ethers');
var walletIds = require('../../../../dist/walletIds-2f745506.cjs.dev.js');
var connector = require('../../../../dist/connector-a63dd9e7.cjs.dev.js');
var normalizeChainId = require('../../../../dist/normalizeChainId-8778491e.cjs.dev.js');
require('eventemitter3');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var _signer = /*#__PURE__*/new WeakMap();
class PaperWalletConnector extends connector.Connector {
  constructor(options) {
    super();
    defineProperty._defineProperty(this, "id", walletIds.walletIds.paper);
    defineProperty._defineProperty(this, "name", "Paper Wallet");
    defineProperty._defineProperty(this, "ready", true);
    defineProperty._defineProperty(this, "user", null);
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    defineProperty._defineProperty(this, "onAccountsChanged", async accounts => {
      if (accounts.length === 0) {
        await this.onDisconnect();
      } else {
        this.emit("change", {
          account: ethers.utils.getAddress(accounts[0])
        });
      }
    });
    defineProperty._defineProperty(this, "onChainChanged", chainId => {
      const id = normalizeChainId.normalizeChainId(chainId);
      const unsupported = this.options.chains.findIndex(c => c.chainId === id) === -1;
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    defineProperty._defineProperty(this, "onDisconnect", async () => {
      this.emit("disconnect");
    });
    this.options = options;
  }
  getPaperSDK() {
    if (!this.paper) {
      this.paper = new Promise(async (resolve, reject) => {
        const recoveryMethod = this.options.advancedOptions?.recoveryShareManagement;
        try {
          const {
            PaperEmbeddedWalletSdk
          } = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@paperxyz/embedded-wallet-service-sdk')); });
          const methodToEnum = {
            AWS_MANAGED: embeddedWalletServiceSdk.RecoveryShareManagement.AWS_MANAGED,
            USER_MANAGED: embeddedWalletServiceSdk.RecoveryShareManagement.USER_MANAGED
          };
          const recoveryShareManagement = recoveryMethod ? methodToEnum[recoveryMethod] : undefined;
          resolve(new PaperEmbeddedWalletSdk({
            advancedOptions: {
              recoveryShareManagement
            },
            clientId: this.options.clientId,
            chain: "Ethereum",
            styles: this.options.styles
          }));
        } catch (err) {
          reject(err);
        }
      });
    }
    return this.paper;
  }
  async connect(options) {
    const paperSDK = await this.getPaperSDK();
    if (!paperSDK) {
      throw new Error("Paper SDK not initialized");
    }
    const user = await paperSDK.getUser();
    switch (user.status) {
      case embeddedWalletServiceSdk.UserStatus.LOGGED_OUT:
        {
          let authResult;

          // Show Google popup
          if (options?.googleLogin) {
            const arg = options.googleLogin;
            authResult = await paperSDK.auth.loginWithGoogle(typeof arg === "object" ? arg : undefined);
          }

          // Headless
          else if (options?.email && options?.otp) {
            authResult = await paperSDK.auth.verifyPaperEmailLoginOtp({
              email: options.email,
              otp: options.otp,
              recoveryCode: options.recoveryCode
            });
          }

          // Show OTP modal
          else if (options?.email) {
            authResult = await paperSDK.auth.loginWithPaperEmailOtp({
              email: options.email
            });
          }

          // Show Full Modal
          else {
            authResult = await paperSDK.auth.loginWithPaperModal();
          }
          this.user = authResult.user;
          break;
        }
      case embeddedWalletServiceSdk.UserStatus.LOGGED_IN_WALLET_INITIALIZED:
        {
          if (typeof options?.googleLogin === "object") {
            if (options.googleLogin.closeOpenedWindow && options.googleLogin.openedWindow) {
              options.googleLogin.closeOpenedWindow(options.googleLogin.openedWindow);
            }
          }
          this.user = user;
          break;
        }
    }
    if (!this.user) {
      throw new Error("Error connecting User");
    }
    if (options?.chainId) {
      this.switchChain(options.chainId);
    }
    this.setupListeners();
    return this.getAddress();
  }
  async disconnect() {
    const paper = await this.paper;
    await paper?.auth.logout();
    classPrivateFieldSet._classPrivateFieldSet(this, _signer, undefined);
    this.user = null;
  }
  async getAddress() {
    const signer = await this.getSigner();
    return signer.getAddress();
  }
  async isConnected() {
    try {
      const addr = await this.getAddress();
      return !!addr;
    } catch (e) {
      return false;
    }
  }
  async getProvider() {
    const signer = await this.getSigner();
    if (!signer.provider) {
      throw new Error("Provider not found");
    }
    return signer.provider;
  }
  async getSigner() {
    if (classPrivateFieldSet._classPrivateFieldGet(this, _signer)) {
      return classPrivateFieldSet._classPrivateFieldGet(this, _signer);
    }
    if (!this.user) {
      const paperSDK = await this.getPaperSDK();
      const user = await paperSDK.getUser();
      switch (user.status) {
        case embeddedWalletServiceSdk.UserStatus.LOGGED_IN_WALLET_INITIALIZED:
          {
            this.user = user;
            break;
          }
      }
    }
    const signer = await this.user?.wallet.getEthersJsSigner({
      rpcEndpoint: this.options.chain.rpc[0]
    });
    if (!signer) {
      throw new Error("Signer not found");
    }
    classPrivateFieldSet._classPrivateFieldSet(this, _signer, signer);
    return signer;
  }
  async isAuthorized() {
    return false;
  }
  async switchChain(chainId) {
    const chain = this.options.chains.find(c => c.chainId === chainId);
    if (!chain) {
      throw new Error("Chain not configured");
    }

    // update chain in wallet
    await this.user?.wallet.setChain({
      chain: "Ethereum"
    }); // just pass Ethereum no matter what chain we are going to connect

    // update signer
    classPrivateFieldSet._classPrivateFieldSet(this, _signer, await this.user?.wallet.getEthersJsSigner({
      rpcEndpoint: chain.rpc[0]
    }));
    this.emit("change", {
      chain: {
        id: chainId,
        unsupported: false
      }
    });
  }

  // private getUser() {
  //   if (!this.user) {
  //     throw new Error("User not found");
  //   }
  //   return this.user;
  // }

  async setupListeners() {
    const provider = await this.getProvider();
    if (provider.on) {
      provider.on("accountsChanged", this.onAccountsChanged);
      provider.on("chainChanged", this.onChainChanged);
      provider.on("disconnect", this.onDisconnect);
    }
  }
  updateChains(chains) {
    this.options.chains = chains;
  }
  async getEmail() {
    await this.getProvider();
    if (!this.user) {
      throw new Error("No user found, Paper Wallet is not connected");
    }
    return this.user.authDetails.email;
  }
}

exports.PaperWalletConnector = PaperWalletConnector;
