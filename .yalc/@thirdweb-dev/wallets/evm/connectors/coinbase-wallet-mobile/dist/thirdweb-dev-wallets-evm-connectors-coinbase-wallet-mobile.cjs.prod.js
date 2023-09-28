'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateMethodGet = require('../../../../dist/classPrivateMethodGet-5131251f.cjs.prod.js');
var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-422af97a.cjs.prod.js');
var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var walletMobileSdk = require('@coinbase/wallet-mobile-sdk');
var ethers = require('ethers');
var utils_js = require('ethers/lib/utils.js');
var Connector = require('../../../../dist/Connector-5d031ab6.cjs.prod.js');
var normalizeChainId = require('../../../../dist/normalizeChainId-fe056e1f.cjs.prod.js');
require('../../../../dist/checkPrivateRedeclaration-fd0a01ed.cjs.prod.js');
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

var _provider = /*#__PURE__*/new WeakMap();
var _isUserRejectedRequestError = /*#__PURE__*/new WeakSet();
class CoinbaseMobileWalletConnector extends Connector.Connector {
  constructor(_ref) {
    let {
      chains,
      options
    } = _ref;
    super({
      chains,
      options: {
        ...options
      }
    });
    classPrivateMethodGet._classPrivateMethodInitSpec(this, _isUserRejectedRequestError);
    defineProperty._defineProperty(this, "id", "coinbaseWallet");
    defineProperty._defineProperty(this, "name", "Coinbase Wallet");
    defineProperty._defineProperty(this, "ready", true);
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    defineProperty._defineProperty(this, "onAccountsChanged", accounts => {
      if (accounts.length === 0) {
        this.emit("disconnect");
      } else {
        this.emit("change", {
          account: utils_js.getAddress(accounts[0])
        });
      }
    });
    defineProperty._defineProperty(this, "onChainChanged", chainId => {
      const id = normalizeChainId.normalizeChainId(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    defineProperty._defineProperty(this, "onDisconnect", () => {
      this.emit("disconnect");
    });
    walletMobileSdk.configure({
      callbackURL: options.callbackURL,
      hostURL: options.hostURL,
      hostPackageName: options.hostPackageName
    });
  }
  async connect() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      const provider = await this.getProvider();
      provider.on("accountsChanged", this.onAccountsChanged);
      provider.on("chainChanged", this.onChainChanged);
      provider.on("disconnect", this.onDisconnect);
      this.emit("message", {
        type: "connecting"
      });
      const account = await provider.request({
        method: "eth_requestAccounts",
        params: []
      });
      // Switch to chain if provided
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (chainId && id !== chainId) {
        try {
          const chain = await this.switchChain(chainId);
          id = chain.id;
          unsupported = this.isChainUnsupported(id);
        } catch (e) {
          console.error(`Connected but failed to switch to desired chain ${chainId}`, e);
        }
      }
      return {
        account,
        chain: {
          id,
          unsupported
        },
        provider: new ethers.providers.Web3Provider(provider)
      };
    } catch (error) {
      if (/(user closed modal|accounts received is empty)/i.test(error.message)) {
        throw new Connector.UserRejectedRequestError(error);
      }
      throw error;
    }
  }
  async disconnect() {
    if (!classPrivateFieldSet._classPrivateFieldGet(this, _provider)) {
      return;
    }
    const provider = await this.getProvider();
    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("chainChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);
    provider.disconnect();
  }
  async getAccount() {
    const provider = await this.getProvider();
    const accounts = await provider.request({
      method: "eth_accounts"
    });
    if (accounts.length === 0) {
      throw new Error("No accounts found");
    }
    // return checksum address
    return utils_js.getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    const chainId = normalizeChainId.normalizeChainId(provider.chainId);
    return chainId;
  }
  async getProvider() {
    if (!classPrivateFieldSet._classPrivateFieldGet(this, _provider)) {
      let CoinbaseWalletMobileSDK = (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@coinbase/wallet-mobile-sdk/build/WalletMobileSDKEVMProvider')); })).WalletMobileSDKEVMProvider;
      if (typeof CoinbaseWalletMobileSDK !== "function" &&
      // @ts-expect-error This import error is not visible to TypeScript
      typeof CoinbaseWalletMobileSDK.default === "function") {
        CoinbaseWalletMobileSDK = CoinbaseWalletMobileSDK.default;
      }
      const chain = this.chains.find(chain_ => chain_.id === this.options.chainId) || this.chains[0];
      const chainId = this.options.chainId;
      const jsonRpcUrl = this.options.jsonRpcUrl || chain?.rpcUrls.default.http[0];
      classPrivateFieldSet._classPrivateFieldSet(this, _provider, new CoinbaseWalletMobileSDK({
        jsonRpcUrl,
        chainId
      }));
    }
    return classPrivateFieldSet._classPrivateFieldGet(this, _provider);
  }
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider(), this.getAccount()]);
    return new ethers.providers.Web3Provider(provider, chainId).getSigner(account);
  }
  async isAuthorized() {
    try {
      const account = await this.getAccount();
      return !!account;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    const provider = await this.getProvider();
    const id = utils_js.hexValue(chainId);
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: id
        }]
      });
      return this.chains.find(x => x.id === chainId) ?? {
        id: chainId,
        name: `Chain ${id}`,
        network: `${id}`,
        nativeCurrency: {
          name: "Ether",
          decimals: 18,
          symbol: "ETH"
        },
        rpcUrls: {
          default: {
            http: [""]
          },
          public: {
            http: [""]
          }
        }
      };
    } catch (error) {
      const chain = this.chains.find(x => x.id === chainId);
      if (!chain) {
        throw new Connector.ChainNotConfiguredError({
          chainId,
          connectorId: this.id
        });
      }

      // Indicates chain is not added to provider
      if (error.code === 4902) {
        try {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: id,
              chainName: chain.name,
              nativeCurrency: chain.nativeCurrency,
              rpcUrls: [chain.rpcUrls.public?.http[0] ?? chain.rpcUrls.default.http[0]],
              blockExplorerUrls: this.getBlockExplorerUrls(chain)
            }]
          });
          return chain;
        } catch (addError) {
          if (classPrivateMethodGet._classPrivateMethodGet(this, _isUserRejectedRequestError, _isUserRejectedRequestError2).call(this, addError)) {
            throw new Connector.UserRejectedRequestError(addError);
          }
          throw new Connector.AddChainError();
        }
      }
      if (classPrivateMethodGet._classPrivateMethodGet(this, _isUserRejectedRequestError, _isUserRejectedRequestError2).call(this, error)) {
        throw new Connector.UserRejectedRequestError(error);
      }
      throw new Connector.SwitchChainError(error);
    }
  }
  async watchAsset(_ref2) {
    let {
      address,
      decimals = 18,
      image,
      symbol
    } = _ref2;
    const provider = await this.getProvider();
    return provider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address,
          decimals,
          image,
          symbol
        }
      }
    });
  }
}
function _isUserRejectedRequestError2(error) {
  return /(user rejected)/i.test(error.message);
}

exports.CoinbaseMobileWalletConnector = CoinbaseMobileWalletConnector;
