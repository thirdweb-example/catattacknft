'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateMethodGet = require('../../../../dist/classPrivateMethodGet-8801ecd5.cjs.dev.js');
var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var ethers = require('ethers');
var walletIds = require('../../../../dist/walletIds-2f745506.cjs.dev.js');
var url = require('../../../../dist/url-f53b640f.cjs.dev.js');
var WagmiConnector = require('../../../../dist/WagmiConnector-6ff7d562.cjs.dev.js');
var normalizeChainId = require('../../../../dist/normalizeChainId-8778491e.cjs.dev.js');
var errors = require('../../../../dist/errors-323b40ec.cjs.dev.js');
require('@thirdweb-dev/chains');
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

var _client = /*#__PURE__*/new WeakMap();
var _provider = /*#__PURE__*/new WeakMap();
var _isUserRejectedRequestError = /*#__PURE__*/new WeakSet();
class CoinbaseWalletConnector extends WagmiConnector.WagmiConnector {
  constructor(_ref) {
    let {
      chains,
      options
    } = _ref;
    super({
      chains,
      options: {
        reloadOnDisconnect: false,
        ...options
      }
    });
    classPrivateMethodGet._classPrivateMethodInitSpec(this, _isUserRejectedRequestError);
    defineProperty._defineProperty(this, "id", walletIds.walletIds.coinbase);
    defineProperty._defineProperty(this, "name", "Coinbase Wallet");
    defineProperty._defineProperty(this, "ready", true);
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _client, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    defineProperty._defineProperty(this, "onAccountsChanged", accounts => {
      if (accounts.length === 0) {
        this.emit("disconnect");
      } else {
        this.emit("change", {
          account: ethers.utils.getAddress(accounts[0])
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
  }
  async connect() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      const provider = await this.getProvider();
      this.setupListeners();
      this.emit("message", {
        type: "connecting"
      });
      const accounts = await provider.enable();
      const account = ethers.utils.getAddress(accounts[0]);
      // Switch to chain if provided
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (chainId && id !== chainId) {
        try {
          const chain = await this.switchChain(chainId);
          id = chain.chainId;
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
        throw new errors.UserRejectedRequestError(error);
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
    provider.close();
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
    return ethers.utils.getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    const chainId = normalizeChainId.normalizeChainId(provider.chainId);
    return chainId;
  }
  async getProvider() {
    if (!classPrivateFieldSet._classPrivateFieldGet(this, _provider)) {
      let CoinbaseWalletSDK = (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@coinbase/wallet-sdk')); })).default;
      // Workaround for Vite dev import errors
      // https://github.com/vitejs/vite/issues/7112
      if (typeof CoinbaseWalletSDK !== "function" &&
      // @ts-expect-error This import error is not visible to TypeScript
      typeof CoinbaseWalletSDK.default === "function") {
        CoinbaseWalletSDK = CoinbaseWalletSDK.default;
      }
      classPrivateFieldSet._classPrivateFieldSet(this, _client, new CoinbaseWalletSDK(this.options));
      const walletExtensionChainId = classPrivateFieldSet._classPrivateFieldGet(this, _client).walletExtension?.getChainId();
      const chain = this.chains.find(chain_ => this.options.chainId ? chain_.chainId === this.options.chainId : chain_.chainId === walletExtensionChainId) || this.chains[0];
      const chainId = this.options.chainId || chain?.chainId;
      const jsonRpcUrl = this.options.jsonRpcUrl || chain?.rpc[0];
      classPrivateFieldSet._classPrivateFieldSet(this, _provider, classPrivateFieldSet._classPrivateFieldGet(this, _client).makeWeb3Provider(jsonRpcUrl, chainId));
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
    const id = ethers.utils.hexValue(chainId);
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: id
        }]
      });
      return this.chains.find(x => x.chainId === chainId) ?? {
        chainId: chainId,
        name: `Chain ${id}`,
        slug: `${id}`,
        nativeCurrency: {
          name: "Ether",
          decimals: 18,
          symbol: "ETH"
        },
        rpc: [""],
        testnet: false,
        chain: "ethereum",
        shortName: "eth"
      };
    } catch (error) {
      const chain = this.chains.find(x => x.chainId === chainId);
      if (!chain) {
        throw new errors.ChainNotConfiguredError({
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
              rpcUrls: url.getValidPublicRPCUrl(chain),
              // no client id on purpose here
              blockExplorerUrls: this.getBlockExplorerUrls(chain)
            }]
          });
          return chain;
        } catch (addError) {
          if (classPrivateMethodGet._classPrivateMethodGet(this, _isUserRejectedRequestError, _isUserRejectedRequestError2).call(this, addError)) {
            throw new errors.UserRejectedRequestError(addError);
          }
          throw new errors.AddChainError();
        }
      }
      if (classPrivateMethodGet._classPrivateMethodGet(this, _isUserRejectedRequestError, _isUserRejectedRequestError2).call(this, error)) {
        throw new errors.UserRejectedRequestError(error);
      }
      throw new errors.SwitchChainError(error);
    }
  }
  async setupListeners() {
    const provider = await this.getProvider();
    provider.on("accountsChanged", this.onAccountsChanged);
    provider.on("chainChanged", this.onChainChanged);
    provider.on("disconnect", this.onDisconnect);
  }
  async getQrUrl() {
    await this.getProvider();
    if (!classPrivateFieldSet._classPrivateFieldGet(this, _client)) {
      throw new Error("Coinbase Wallet SDK not initialized");
    }
    return classPrivateFieldSet._classPrivateFieldGet(this, _client).getQrUrl();
  }
}
function _isUserRejectedRequestError2(error) {
  return /(user rejected)/i.test(error.message);
}

exports.CoinbaseWalletConnector = CoinbaseWalletConnector;
