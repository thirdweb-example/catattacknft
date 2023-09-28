'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var ethers = require('ethers');
var walletIds = require('../../../../dist/walletIds-2f745506.cjs.dev.js');
var connector = require('../../../../dist/connector-a63dd9e7.cjs.dev.js');
var normalizeChainId = require('../../../../dist/normalizeChainId-8778491e.cjs.dev.js');
var embeddedWallet = require('../../../../dist/embedded-wallet-a8627807.cjs.dev.js');
require('eventemitter3');
require('@paperxyz/sdk-common-utilities');
require('ethers/lib/utils');

var _embeddedWalletSdk = /*#__PURE__*/new WeakMap();
var _signer = /*#__PURE__*/new WeakMap();
class EmbeddedWalletConnector extends connector.Connector {
  constructor(options) {
    super();
    defineProperty._defineProperty(this, "id", walletIds.walletIds.paper);
    defineProperty._defineProperty(this, "name", "Paper Wallet");
    defineProperty._defineProperty(this, "ready", true);
    defineProperty._defineProperty(this, "user", null);
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _embeddedWalletSdk, {
      writable: true,
      value: void 0
    });
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
  getEmbeddedWalletSDK() {
    if (!classPrivateFieldSet._classPrivateFieldGet(this, _embeddedWalletSdk)) {
      classPrivateFieldSet._classPrivateFieldSet(this, _embeddedWalletSdk, new embeddedWallet.EmbeddedWalletSdk({
        clientId: this.options.clientId,
        chain: "Ethereum",
        styles: this.options.styles
      }));
    }
    return classPrivateFieldSet._classPrivateFieldGet(this, _embeddedWalletSdk);
  }
  async connect(options) {
    const thirdwebSDK = await this.getEmbeddedWalletSDK();
    if (!thirdwebSDK) {
      throw new Error("EmbeddedWallet SDK not initialized");
    }
    const user = await thirdwebSDK.getUser();
    switch (user.status) {
      case embeddedWallet.UserStatus.LOGGED_OUT:
        {
          let authResult;
          switch (options?.loginType) {
            case "headless_google_oauth":
              {
                authResult = await thirdwebSDK.auth.loginWithGoogle({
                  closeOpenedWindow: options.closeOpenedWindow,
                  openedWindow: options.openedWindow
                });
                break;
              }
            case "headless_email_otp_verification":
              {
                authResult = await thirdwebSDK.auth.verifyEmailLoginOtp({
                  email: options.email,
                  otp: options.otp
                });
                break;
              }
            case "ui_email_otp":
              {
                authResult = await thirdwebSDK.auth.loginWithEmailOtp({
                  email: options.email
                });
                break;
              }
            default:
              {
                authResult = await thirdwebSDK.auth.loginWithModal();
                break;
              }
          }
          this.user = authResult.user;
          break;
        }
      case embeddedWallet.UserStatus.LOGGED_IN_WALLET_INITIALIZED:
        {
          if (options?.loginType === "headless_google_oauth") {
            if (options.closeOpenedWindow && options.openedWindow) {
              options.closeOpenedWindow(options.openedWindow);
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
    const paper = await classPrivateFieldSet._classPrivateFieldGet(this, _embeddedWalletSdk);
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
      const embeddedWalletSdk = await this.getEmbeddedWalletSDK();
      const user = await embeddedWalletSdk.getUser();
      switch (user.status) {
        case embeddedWallet.UserStatus.LOGGED_IN_WALLET_INITIALIZED:
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
    // implicit call to set the user
    await this.getSigner();
    if (!this.user) {
      throw new Error("No user found, Paper Wallet is not connected");
    }
    return this.user.authDetails.email;
  }
}

exports.EmbeddedWalletConnector = EmbeddedWalletConnector;
