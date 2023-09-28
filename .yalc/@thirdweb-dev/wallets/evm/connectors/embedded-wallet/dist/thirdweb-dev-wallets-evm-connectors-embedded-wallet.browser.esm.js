import { _ as _classPrivateFieldInitSpec, b as _classPrivateFieldGet, a as _classPrivateFieldSet } from '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { utils } from 'ethers';
import { w as walletIds } from '../../../../dist/walletIds-a64268ca.browser.esm.js';
import { C as Connector } from '../../../../dist/connector-05689d68.browser.esm.js';
import { n as normalizeChainId } from '../../../../dist/normalizeChainId-e4cc0175.browser.esm.js';
import { E as EmbeddedWalletSdk, U as UserStatus } from '../../../../dist/embedded-wallet-e4397148.browser.esm.js';
import 'eventemitter3';
import '@paperxyz/sdk-common-utilities';
import 'ethers/lib/utils';

var _embeddedWalletSdk = /*#__PURE__*/new WeakMap();
var _signer = /*#__PURE__*/new WeakMap();
class EmbeddedWalletConnector extends Connector {
  constructor(options) {
    super();
    _defineProperty(this, "id", walletIds.paper);
    _defineProperty(this, "name", "Paper Wallet");
    _defineProperty(this, "ready", true);
    _defineProperty(this, "user", null);
    _classPrivateFieldInitSpec(this, _embeddedWalletSdk, {
      writable: true,
      value: void 0
    });
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
  getEmbeddedWalletSDK() {
    if (!_classPrivateFieldGet(this, _embeddedWalletSdk)) {
      _classPrivateFieldSet(this, _embeddedWalletSdk, new EmbeddedWalletSdk({
        clientId: this.options.clientId,
        chain: "Ethereum",
        styles: this.options.styles
      }));
    }
    return _classPrivateFieldGet(this, _embeddedWalletSdk);
  }
  async connect(options) {
    const thirdwebSDK = await this.getEmbeddedWalletSDK();
    if (!thirdwebSDK) {
      throw new Error("EmbeddedWallet SDK not initialized");
    }
    const user = await thirdwebSDK.getUser();
    switch (user.status) {
      case UserStatus.LOGGED_OUT:
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
      case UserStatus.LOGGED_IN_WALLET_INITIALIZED:
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
    const paper = await _classPrivateFieldGet(this, _embeddedWalletSdk);
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
      const embeddedWalletSdk = await this.getEmbeddedWalletSDK();
      const user = await embeddedWalletSdk.getUser();
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

export { EmbeddedWalletConnector };
