import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { ethers, utils } from 'ethers';
import { OAuthExtension } from '@magic-ext/oauth';
import { Magic } from 'magic-sdk';
import { W as WagmiConnector } from '../../../../dist/WagmiConnector-2f14002d.browser.esm.js';
import { n as normalizeChainId } from '../../../../dist/normalizeChainId-e4cc0175.browser.esm.js';
import '@thirdweb-dev/chains';
import 'eventemitter3';

const IS_SERVER = "object" === "undefined";
class MagicBaseConnector extends WagmiConnector {
  constructor(config) {
    super(config);
    _defineProperty(this, "id", "magic-link");
    _defineProperty(this, "name", "Magic Link");
    _defineProperty(this, "ready", !IS_SERVER);
    this.magicOptions = config.options;
  }
  async getAccount() {
    const provider = new ethers.providers.Web3Provider(await this.getProvider()) // TODO: fix type mismatch
    ;

    const signer = provider.getSigner();
    const account = await signer.getAddress();
    if (account.startsWith("0x")) {
      return account;
    }
    return `0x${account}`;
  }
  async getProvider() {
    if (this.provider) {
      return this.provider;
    }
    const magic = this.getMagicSDK();
    this.provider = magic.rpcProvider;
    return this.provider;
  }
  async getSigner() {
    const provider = new ethers.providers.Web3Provider(await this.getProvider()) // TODO: fix type mismatch
    ;

    const signer = await provider.getSigner();
    return signer;
  }
  async isAuthorized() {
    const magic = this.getMagicSDK();
    try {
      return await magic.user.isLoggedIn();
    } catch (e) {
      return false;
    }
  }
  onAccountsChanged(accounts) {
    if (accounts.length === 0) {
      this.emit("disconnect");
    } else {
      this.emit("change", {
        account: utils.getAddress(accounts[0])
      });
    }
  }
  onChainChanged(chainId) {
    const id = normalizeChainId(chainId);
    const unsupported = this.isChainUnsupported(id);
    this.emit("change", {
      chain: {
        id,
        unsupported
      }
    });
  }
  onDisconnect() {
    this.emit("disconnect");
  }
  async disconnect() {
    const magic = this.getMagicSDK();
    await magic.user.logout();
  }
}
var _connectedChainId = /*#__PURE__*/new WeakMap();
var _type = /*#__PURE__*/new WeakMap();
class MagicAuthConnector extends MagicBaseConnector {
  constructor(config) {
    super(config);
    _classPrivateFieldInitSpec(this, _connectedChainId, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _type, {
      writable: true,
      value: void 0
    });
    this.magicSdkConfiguration = config.options.magicSdkConfiguration;
    _classPrivateFieldSet(this, _type, config.options.type);
    this.oauthProviders = config.options.oauthOptions?.providers || [];
    this.oauthRedirectURI = config.options.oauthOptions?.redirectURI;
  }
  async connect(options) {
    if (!this.magicOptions.apiKey) {
      throw new Error("Magic API Key is not provided.");
    }
    try {
      if (options.chainId) {
        this.initializeMagicSDK({
          chainId: options.chainId
        });
      }
      const provider = await this.getProvider();
      this.setupListeners();
      this.emit("message", {
        type: "connecting"
      });

      // Check if there is a user logged in
      const isAuthenticated = await this.isAuthorized();

      // Check if we have a chainId, in case of error just assign 0 for legacy
      let chainId;
      try {
        chainId = await this.getChainId();
      } catch (e) {
        chainId = 0;
      }
      _classPrivateFieldSet(this, _connectedChainId, chainId);

      // if there is a user logged in, return the user
      if (isAuthenticated) {
        return {
          provider,
          chain: {
            id: chainId,
            unsupported: false
          },
          account: await this.getAccount()
        };
      }
      const magic = this.getMagicSDK();
      if (_classPrivateFieldGet(this, _type) === "connect") {
        if ("email" in options || "phoneNumber" in options) {
          console.warn("Passing email or phoneNumber is not required for Magic Connect");
        }
        await magic.wallet.connectWithUI();
      } else {
        // LOGIN WITH MAGIC LINK WITH OAUTH PROVIDER
        if ("oauthProvider" in options) {
          await magic.oauth.loginWithRedirect({
            provider: options.oauthProvider,
            redirectURI: this.oauthRedirectURI || window.location.href
          });
          await new Promise(res => {
            // never resolve - to keep the app in "connecting..." state until the redirect happens
            setTimeout(res, 10000); // timeout if takes if redirect doesn't happen for 10 seconds (will likely never happen)
          });
        }

        // LOGIN WITH MAGIC LINK WITH EMAIL
        else if ("email" in options) {
          await magic.auth.loginWithMagicLink({
            email: options.email,
            showUI: true
          });
        }

        // LOGIN WITH MAGIC LINK WITH PHONE NUMBER
        else if ("phoneNumber" in options) {
          await magic.auth.loginWithSMS({
            phoneNumber: options.phoneNumber
          });
        }

        // error
        else {
          throw new Error("Invalid options: Either provide and email, phoneNumber or oauthProvider when using Magic Auth");
        }
      }
      const signer = await this.getSigner();
      let account = await signer.getAddress();
      if (!account.startsWith("0x")) {
        account = `0x${account}`;
      }
      return {
        account,
        chain: {
          id: chainId,
          unsupported: false
        },
        provider
      };

      // throw new UserRejectedRequestError("User rejected request");
    } catch (error) {
      console.error(error);
      throw new Error("Something went wrong");
    }
  }
  async getChainId() {
    const networkOptions = this.magicSdkConfiguration?.network;
    if (typeof networkOptions === "object") {
      const chainID = networkOptions.chainId;
      if (chainID) {
        return normalizeChainId(chainID);
      }
    }
    throw new Error("Chain ID is not defined");
  }
  initializeMagicSDK() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const options = {
      ...this.magicSdkConfiguration,
      extensions: [new OAuthExtension()]
    };
    if (chainId) {
      const chain = this.chains.find(c => c.chainId === chainId);
      if (chain) {
        options.network = {
          rpcUrl: chain.rpc[0],
          chainId: chain.chainId
        };
      }
    }
    this.magicSDK = new Magic(this.magicOptions.apiKey, options);
    this.provider = this.magicSDK.rpcProvider;
    return this.magicSDK;
  }
  getMagicSDK() {
    if (!this.magicSDK) {
      return this.initializeMagicSDK();
    }
    return this.magicSDK;
  }
  async setupListeners() {
    const provider = await this.getProvider();
    provider.on("accountsChanged", this.onAccountsChanged);
    provider.on("chainChanged", this.onChainChanged);
    provider.on("disconnect", this.onDisconnect);
  }
  async switchChain(chainId) {
    const chain = this.chains.find(c => c.chainId === chainId);
    if (!chain) {
      throw new Error("Chain not found");
    }
    if (_classPrivateFieldGet(this, _connectedChainId) !== chainId) {
      this.initializeMagicSDK({
        chainId
      });
    }
    return chain;
  }
}

export { MagicAuthConnector, MagicBaseConnector };
