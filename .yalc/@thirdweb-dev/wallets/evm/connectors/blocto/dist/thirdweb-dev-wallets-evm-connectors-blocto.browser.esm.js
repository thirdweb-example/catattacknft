import { _ as _classPrivateMethodInitSpec, a as _classPrivateMethodGet } from '../../../../dist/classPrivateMethodGet-ea199cc3.browser.esm.js';
import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import BloctoSDK from '@blocto/sdk';
import { utils, providers } from 'ethers';
import { w as walletIds } from '../../../../dist/walletIds-a64268ca.browser.esm.js';
import { g as getValidPublicRPCUrl } from '../../../../dist/url-bc88b2b6.browser.esm.js';
import { W as WagmiConnector } from '../../../../dist/WagmiConnector-2f14002d.browser.esm.js';
import { U as UserRejectedRequestError, a as ConnectorNotFoundError, S as SwitchChainError } from '../../../../dist/errors-d961f852.browser.esm.js';
import { n as normalizeChainId } from '../../../../dist/normalizeChainId-e4cc0175.browser.esm.js';
import '@thirdweb-dev/chains';
import 'eventemitter3';

var _provider = /*#__PURE__*/new WeakMap();
var _onAccountsChangedBind = /*#__PURE__*/new WeakMap();
var _onChainChangedBind = /*#__PURE__*/new WeakMap();
var _onDisconnectBind = /*#__PURE__*/new WeakMap();
var _isUserRejectedRequestError = /*#__PURE__*/new WeakSet();
var _handleConnectReset = /*#__PURE__*/new WeakSet();
class BloctoConnector extends WagmiConnector {
  constructor(_ref) {
    let {
      chains,
      options = {}
    } = _ref;
    super({
      chains,
      options
    });
    _classPrivateMethodInitSpec(this, _handleConnectReset);
    _classPrivateMethodInitSpec(this, _isUserRejectedRequestError);
    _defineProperty(this, "id", walletIds.blocto);
    _defineProperty(this, "name", "Blocto");
    _defineProperty(this, "ready", true);
    _classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _onAccountsChangedBind, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _onChainChangedBind, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _onDisconnectBind, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _onAccountsChangedBind, this.onAccountsChanged.bind(this));
    _classPrivateFieldSet(this, _onChainChangedBind, this.onChainChanged.bind(this));
    _classPrivateFieldSet(this, _onDisconnectBind, this.onDisconnect.bind(this));
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
      const account = utils.getAddress(accounts[0]);
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
      _classPrivateMethodGet(this, _handleConnectReset, _handleConnectReset2).call(this);
      if (_classPrivateMethodGet(this, _isUserRejectedRequestError, _isUserRejectedRequestError2).call(this, error)) {
        throw new UserRejectedRequestError(error);
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
    _classPrivateMethodGet(this, _handleConnectReset, _handleConnectReset2).call(this);
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
    return normalizeChainId(chainId);
  }
  getProvider() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!_classPrivateFieldGet(this, _provider)) {
      const _chainId = chainId ?? this.options.chainId ?? this.chains[0].chainId;
      const _rpc = this.chains.find(x => x.chainId === _chainId)?.rpc[0];
      _classPrivateFieldSet(this, _provider, new BloctoSDK({
        ethereum: {
          chainId: _chainId,
          rpc: _rpc
        },
        appId: this.options.appId
      })?.ethereum);
    }
    if (!_classPrivateFieldGet(this, _provider)) {
      throw new ConnectorNotFoundError();
    }
    return Promise.resolve(_classPrivateFieldGet(this, _provider));
  }
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider(), this.getAccount()]);
    return new providers.Web3Provider(provider, chainId).getSigner(account);
  }
  async isAuthorized() {
    return !!_classPrivateFieldGet(this, _provider)?._blocto?.sessionKey ?? false;
  }
  async switchChain(chainId) {
    const provider = await this.getProvider();
    const id = utils.hexValue(chainId);
    const chain = this.chains.find(x => x.chainId === chainId);
    if (!chain) {
      throw new SwitchChainError(new Error("chain not found on connector."));
    }
    const isBloctoSupportChain = provider._blocto.supportNetworkList[`${chainId}`];
    if (!isBloctoSupportChain) {
      throw new SwitchChainError(new Error(`Blocto unsupported chain: ${id}`));
    }
    try {
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [{
          chainId: id,
          rpcUrls: getValidPublicRPCUrl(chain) // no client id on purpose here
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
      if (_classPrivateMethodGet(this, _isUserRejectedRequestError, _isUserRejectedRequestError2).call(this, error)) {
        throw new UserRejectedRequestError(error);
      }
      throw new SwitchChainError(error);
    }
  }
  onAccountsChanged() {
    // not supported yet
  }
  async onChainChanged(chain) {
    const id = normalizeChainId(chain);
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
    provider.on("accountsChanged", _classPrivateFieldGet(this, _onAccountsChangedBind));
    provider.on("chainChanged", _classPrivateFieldGet(this, _onChainChangedBind));
    provider.on("disconnect", _classPrivateFieldGet(this, _onDisconnectBind));
  }
  async removeListeners() {
    const provider = await this.getProvider();
    provider.off("accountsChanged", _classPrivateFieldGet(this, _onAccountsChangedBind));
    provider.off("chainChanged", _classPrivateFieldGet(this, _onChainChangedBind));
    provider.off("disconnect", _classPrivateFieldGet(this, _onDisconnectBind));
  }
}
function _isUserRejectedRequestError2(error) {
  return /(user rejected)/i.test(error.message);
}
function _handleConnectReset2() {
  _classPrivateFieldSet(this, _provider, undefined);
}

export { BloctoConnector };
