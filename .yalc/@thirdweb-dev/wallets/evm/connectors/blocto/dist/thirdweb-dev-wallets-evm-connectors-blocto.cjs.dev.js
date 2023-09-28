'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateMethodGet = require('../../../../dist/classPrivateMethodGet-8801ecd5.cjs.dev.js');
var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var BloctoSDK = require('@blocto/sdk');
var ethers = require('ethers');
var walletIds = require('../../../../dist/walletIds-2f745506.cjs.dev.js');
var url = require('../../../../dist/url-f53b640f.cjs.dev.js');
var WagmiConnector = require('../../../../dist/WagmiConnector-6ff7d562.cjs.dev.js');
var errors = require('../../../../dist/errors-323b40ec.cjs.dev.js');
var normalizeChainId = require('../../../../dist/normalizeChainId-8778491e.cjs.dev.js');
require('@thirdweb-dev/chains');
require('eventemitter3');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var BloctoSDK__default = /*#__PURE__*/_interopDefault(BloctoSDK);

var _provider = /*#__PURE__*/new WeakMap();
var _onAccountsChangedBind = /*#__PURE__*/new WeakMap();
var _onChainChangedBind = /*#__PURE__*/new WeakMap();
var _onDisconnectBind = /*#__PURE__*/new WeakMap();
var _isUserRejectedRequestError = /*#__PURE__*/new WeakSet();
var _handleConnectReset = /*#__PURE__*/new WeakSet();
class BloctoConnector extends WagmiConnector.WagmiConnector {
  constructor(_ref) {
    let {
      chains,
      options = {}
    } = _ref;
    super({
      chains,
      options
    });
    classPrivateMethodGet._classPrivateMethodInitSpec(this, _handleConnectReset);
    classPrivateMethodGet._classPrivateMethodInitSpec(this, _isUserRejectedRequestError);
    defineProperty._defineProperty(this, "id", walletIds.walletIds.blocto);
    defineProperty._defineProperty(this, "name", "Blocto");
    defineProperty._defineProperty(this, "ready", true);
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _onAccountsChangedBind, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _onChainChangedBind, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _onDisconnectBind, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldSet(this, _onAccountsChangedBind, this.onAccountsChanged.bind(this));
    classPrivateFieldSet._classPrivateFieldSet(this, _onChainChangedBind, this.onChainChanged.bind(this));
    classPrivateFieldSet._classPrivateFieldSet(this, _onDisconnectBind, this.onDisconnect.bind(this));
  }
  async connect(config) {
    try {
      const provider = await this.getProvider(config);
      this.setupListeners();
      this.emit("message", {
        type: "connecting"
      });
      const accounts = await provider.request({
        method: "eth_requestAccounts"
      });
      const account = ethers.utils.getAddress(accounts[0]);
      const id = await this.getChainId();
      const unsupported = this.isChainUnsupported(id);
      return {
        account,
        chain: {
          id,
          unsupported
        },
        provider
      };
    } catch (error) {
      classPrivateMethodGet._classPrivateMethodGet(this, _handleConnectReset, _handleConnectReset2).call(this);
      if (classPrivateMethodGet._classPrivateMethodGet(this, _isUserRejectedRequestError, _isUserRejectedRequestError2).call(this, error)) {
        throw new errors.UserRejectedRequestError(error);
      }
      throw error;
    }
  }
  async disconnect() {
    const provider = await this.getProvider();
    await provider.request({
      method: "wallet_disconnect"
    });
    this.removeListeners();
    classPrivateMethodGet._classPrivateMethodGet(this, _handleConnectReset, _handleConnectReset2).call(this);
  }
  async getAccount() {
    const provider = await this.getProvider();
    const accounts = await provider.request({
      method: "eth_accounts"
    });
    const [address] = accounts || [];
    if (!address) {
      throw new Error("No accounts found");
    }
    return address;
  }
  async getChainId() {
    const provider = await this.getProvider();
    const chainId = await provider.request({
      method: "eth_chainId"
    });
    return normalizeChainId.normalizeChainId(chainId);
  }
  getProvider() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!classPrivateFieldSet._classPrivateFieldGet(this, _provider)) {
      const _chainId = chainId ?? this.options.chainId ?? this.chains[0].chainId;
      const _rpc = this.chains.find(x => x.chainId === _chainId)?.rpc[0];
      classPrivateFieldSet._classPrivateFieldSet(this, _provider, new BloctoSDK__default["default"]({
        ethereum: {
          chainId: _chainId,
          rpc: _rpc
        },
        appId: this.options.appId
      })?.ethereum);
    }
    if (!classPrivateFieldSet._classPrivateFieldGet(this, _provider)) {
      throw new errors.ConnectorNotFoundError();
    }
    return Promise.resolve(classPrivateFieldSet._classPrivateFieldGet(this, _provider));
  }
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider(), this.getAccount()]);
    return new ethers.providers.Web3Provider(provider, chainId).getSigner(account);
  }
  async isAuthorized() {
    return !!classPrivateFieldSet._classPrivateFieldGet(this, _provider)?._blocto?.sessionKey ?? false;
  }
  async switchChain(chainId) {
    const provider = await this.getProvider();
    const id = ethers.utils.hexValue(chainId);
    const chain = this.chains.find(x => x.chainId === chainId);
    if (!chain) {
      throw new errors.SwitchChainError(new Error("chain not found on connector."));
    }
    const isBloctoSupportChain = provider._blocto.supportNetworkList[`${chainId}`];
    if (!isBloctoSupportChain) {
      throw new errors.SwitchChainError(new Error(`Blocto unsupported chain: ${id}`));
    }
    try {
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [{
          chainId: id,
          rpcUrls: url.getValidPublicRPCUrl(chain) // no client id on purpose here
        }]
      });

      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: id
        }]
      });
      return chain;
    } catch (error) {
      if (classPrivateMethodGet._classPrivateMethodGet(this, _isUserRejectedRequestError, _isUserRejectedRequestError2).call(this, error)) {
        throw new errors.UserRejectedRequestError(error);
      }
      throw new errors.SwitchChainError(error);
    }
  }
  onAccountsChanged() {
    // not supported yet
  }
  async onChainChanged(chain) {
    const id = normalizeChainId.normalizeChainId(chain);
    const unsupported = this.isChainUnsupported(id);
    const account = await this.getAccount();
    this.emit("change", {
      chain: {
        id,
        unsupported
      },
      account
    });
  }
  onDisconnect() {
    this.emit("disconnect");
  }
  async setupListeners() {
    const provider = await this.getProvider();
    provider.on("accountsChanged", classPrivateFieldSet._classPrivateFieldGet(this, _onAccountsChangedBind));
    provider.on("chainChanged", classPrivateFieldSet._classPrivateFieldGet(this, _onChainChangedBind));
    provider.on("disconnect", classPrivateFieldSet._classPrivateFieldGet(this, _onDisconnectBind));
  }
  async removeListeners() {
    const provider = await this.getProvider();
    provider.off("accountsChanged", classPrivateFieldSet._classPrivateFieldGet(this, _onAccountsChangedBind));
    provider.off("chainChanged", classPrivateFieldSet._classPrivateFieldGet(this, _onChainChangedBind));
    provider.off("disconnect", classPrivateFieldSet._classPrivateFieldGet(this, _onDisconnectBind));
  }
}
function _isUserRejectedRequestError2(error) {
  return /(user rejected)/i.test(error.message);
}
function _handleConnectReset2() {
  classPrivateFieldSet._classPrivateFieldSet(this, _provider, undefined);
}

exports.BloctoConnector = BloctoConnector;
