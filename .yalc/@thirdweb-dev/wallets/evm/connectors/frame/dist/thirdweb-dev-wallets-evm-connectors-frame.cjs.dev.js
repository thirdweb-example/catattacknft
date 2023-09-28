'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var ethers = require('ethers');
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

var _provider = /*#__PURE__*/new WeakMap();
class FrameConnector extends WagmiConnector.WagmiConnector {
  constructor(_ref) {
    let {
      chains,
      options: suppliedOptions,
      connectorStorage
    } = _ref;
    const options = {
      shimDisconnect: true,
      ...suppliedOptions
    };
    super({
      chains,
      options
    });
    defineProperty._defineProperty(this, "id", "frame");
    defineProperty._defineProperty(this, "name", "Frame");
    defineProperty._defineProperty(this, "ready", true);
    defineProperty._defineProperty(this, "shimDisconnectKey", `${this.id}.shimDisconnect`);
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
      // Remove shim signalling wallet is disconnected
      if (this.options.shimDisconnect) {
        this.connectorStorage.removeItem(this.shimDisconnectKey);
      }
    });
    this.connectorStorage = connectorStorage;
  }
  async connect(config) {
    try {
      const provider = await this.getProvider();
      if (!provider) {
        throw new errors.ConnectorNotFoundError();
      }
      this.setupListeners();
      this.emit("message", {
        type: "connecting"
      });
      const accounts = await provider.request({
        method: "eth_requestAccounts"
      });
      const account = ethers.utils.getAddress(accounts[0]);
      // Switch to chain if provided
      let id = await this.getChainId();
      let unsupported = this.isChainUnsupported(id);
      if (config?.chainId && id !== config?.chainId) {
        const chain = await this.switchChain(config?.chainId);
        id = chain.chainId;
        unsupported = this.isChainUnsupported(id);
      }

      // Add shim to storage signalling wallet is connected
      if (this.options.shimDisconnect) {
        this.connectorStorage.setItem(this.shimDisconnectKey, "true");
      }
      return {
        account,
        provider,
        chain: {
          id,
          unsupported
        }
      };
    } catch (error) {
      if (this.isUserRejectedRequestError(error)) {
        throw new errors.UserRejectedRequestError(error);
      }
      if (error.code === -32002) {
        throw new errors.ResourceUnavailableError(error);
      }
      throw error;
    }
  }
  async disconnect() {
    const provider = await this.getProvider();
    if (!provider?.removeListener) {
      return;
    }
    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("chainChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);
    if (!this.isInjected()) {
      provider.close();
    }

    // Remove shim signalling wallet is disconnected
    if (this.options.shimDisconnect) {
      this.connectorStorage.removeItem(this.shimDisconnectKey);
    }
  }
  async getAccount() {
    const provider = await this.getProvider();
    if (!provider) {
      throw new errors.ConnectorNotFoundError();
    }
    const accounts = await provider.request({
      method: "eth_accounts"
    });
    // return checksum address
    return ethers.utils.getAddress(accounts[0]);
  }
  async getChainId() {
    const provider = await this.getProvider();
    if (!provider) {
      throw new errors.ConnectorNotFoundError();
    }
    const chainId = await provider.request({
      method: "eth_chainId"
    });
    return normalizeChainId.normalizeChainId(chainId);
  }
  async getProvider() {
    classPrivateFieldSet._classPrivateFieldSet(this, _provider, this.isInjected() ? this.injectedProvider() : await this.createProvider());
    return classPrivateFieldSet._classPrivateFieldGet(this, _provider);
  }

  /**
   * get a `signer` for given `chainId`
   */
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider(), this.getAccount()]);

    // ethers.providers.Web3Provider
    return new ethers.providers.Web3Provider(provider, chainId).getSigner(account);
  }
  async isAuthorized() {
    try {
      if (this.options.shimDisconnect &&
      // If shim does not exist in storage, wallet is disconnected
      !this.connectorStorage.getItem(this.shimDisconnectKey)) {
        return false;
      }
      const provider = await this.getProvider();
      if (!provider) {
        throw new errors.ConnectorNotFoundError();
      }
      const account = await this.getAccount();
      return !!account;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    const provider = await this.getProvider();
    if (!provider) {
      throw new errors.ConnectorNotFoundError();
    }
    const chainIdHex = ethers.utils.hexValue(chainId);
    try {
      await Promise.all([provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: chainIdHex
        }]
      }), new Promise(res => this.on("change", _ref2 => {
        let {
          chain
        } = _ref2;
        if (chain?.id === chainId) {
          res();
        }
      }))]);
      return this.chains.find(x => x.chainId === chainId) ?? {
        chainId: chainId,
        name: `Chain ${chainIdHex}`,
        slug: `${chainIdHex}`,
        nativeCurrency: {
          name: "Ether",
          decimals: 18,
          symbol: "ETH"
        },
        rpc: [""],
        chain: "",
        shortName: "",
        testnet: true
      };
    } catch (switchChainError) {
      const chain = this.chains.find(x => x.chainId === chainId);
      if (!chain) {
        throw new errors.ChainNotConfiguredError({
          chainId,
          connectorId: this.id
        });
      }

      // Indicates chain is not added to provider
      if (switchChainError.code === 4902) {
        try {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: chainIdHex,
              chainName: chain.name,
              nativeCurrency: chain.nativeCurrency,
              rpcUrls: url.getValidPublicRPCUrl(chain),
              // no client id on purpose here
              blockExplorerUrls: this.getBlockExplorerUrls(chain)
            }]
          });
          const currentChainId = await this.getChainId();
          if (currentChainId !== chainId) {
            throw new errors.UserRejectedRequestError(new Error("User rejected switch after adding network."));
          }
          return chain;
        } catch (addChainError) {
          // if user rejects request to add chain
          if (this.isUserRejectedRequestError(addChainError)) {
            throw new errors.UserRejectedRequestError(addChainError);
          }

          // else other error
          throw new errors.AddChainError(addChainError.message);
        }
      }

      // if user rejects request to switch chain
      if (this.isUserRejectedRequestError(switchChainError)) {
        throw new errors.UserRejectedRequestError(switchChainError);
      }

      // else other error
      throw new errors.SwitchChainError(switchChainError);
    }
  }
  async watchAsset(_ref3) {
    let {
      address,
      decimals = 18,
      image,
      symbol
    } = _ref3;
    const provider = await this.getProvider();
    if (!provider) {
      throw new errors.ConnectorNotFoundError();
    }
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
  async setupListeners() {
    const provider = await this.getProvider();
    if (provider.on) {
      provider.on("accountsChanged", this.onAccountsChanged);
      provider.on("chainChanged", this.onChainChanged);
      provider.on("disconnect", this.onDisconnect);
    }
  }
  isUserRejectedRequestError(error) {
    return error.code === 4001;
  }
  injectedProvider() {
    return window?.ethereum;
  }
  isInjected() {
    return !!this.injectedProvider()?.isFrame;
  }
  async createProvider() {
    const ethProvider = (await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('eth-provider')); })).default;
    return ethProvider("frame");
  }
}

exports.FrameConnector = FrameConnector;
