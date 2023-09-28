import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { RecoveryShareManagement, UserStatus } from '@paperxyz/embedded-wallet-service-sdk';
import { utils } from 'ethers';
import { w as walletIds } from '../../../../dist/walletIds-18a8e969.esm.js';
import { C as Connector } from '../../../../dist/connector-20f7cf73.esm.js';
import { n as normalizeChainId } from '../../../../dist/normalizeChainId-dd5a6036.esm.js';
import 'eventemitter3';

var _signer = /*#__PURE__*/new WeakMap();
class PaperWalletConnector extends Connector {
  constructor(options) {
    super();
    _defineProperty(this, "id", walletIds.paper);
    _defineProperty(this, "name", "Paper Wallet");
    _defineProperty(this, "ready", true);
    _defineProperty(this, "user", null);
    _classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "onAccountsChanged", async accounts => {
      if (accounts.length === 0) {
        await this.onDisconnect();
      } else {
        this.emit("change", {
          account: utils.getAddress(accounts[0])
        });
      }
    });
    _defineProperty(this, "onChainChanged", chainId => {
      const id = normalizeChainId(chainId);
      const unsupported = this.options.chains.findIndex(c => c.chainId === id) === -1;
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    _defineProperty(this, "onDisconnect", async () => {
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
          } = await import('@paperxyz/embedded-wallet-service-sdk');
          const methodToEnum = {
            AWS_MANAGED: RecoveryShareManagement.AWS_MANAGED,
            USER_MANAGED: RecoveryShareManagement.USER_MANAGED
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
      case UserStatus.LOGGED_OUT:
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
      case UserStatus.LOGGED_IN_WALLET_INITIALIZED:
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
    _classPrivateFieldSet(this, _signer, undefined);
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
    if (_classPrivateFieldGet(this, _signer)) {
      return _classPrivateFieldGet(this, _signer);
    }
    if (!this.user) {
      const paperSDK = await this.getPaperSDK();
      const user = await paperSDK.getUser();
      switch (user.status) {
        case UserStatus.LOGGED_IN_WALLET_INITIALIZED:
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
    _classPrivateFieldSet(this, _signer, signer);
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
    _classPrivateFieldSet(this, _signer, await this.user?.wallet.getEthersJsSigner({
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

export { PaperWalletConnector };
