'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-d86606c4.cjs.dev.js');
var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var twConnector = require('../../../../dist/tw-connector-7917f56a.cjs.dev.js');
var ethers = require('ethers');
var normalizeChainId = require('../../../../dist/normalizeChainId-8778491e.cjs.dev.js');
require('../../../../dist/checkPrivateRedeclaration-09e2947a.cjs.dev.js');
require('eventemitter3');

var _provider = /*#__PURE__*/new WeakMap();
var _signer = /*#__PURE__*/new WeakMap();
class DeviceWalletConnector extends twConnector.TWConnector {
  constructor(options) {
    super();
    defineProperty._defineProperty(this, "id", "device_wallet");
    defineProperty._defineProperty(this, "name", "Device Wallet");
    defineProperty._defineProperty(this, "options", void 0);
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    defineProperty._defineProperty(this, "shimDisconnectKey", "deviceWallet.shimDisconnect");
    defineProperty._defineProperty(this, "onChainChanged", chainId => {
      const id = normalizeChainId.normalizeChainId(chainId);
      const unsupported = !this.options.chains.find(c => c.chainId === id);
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    this.options = options;
  }
  async connect(args) {
    if (args.chainId) {
      this.switchChain(args.chainId);
    }
    const signer = await this.getSigner();
    const address = await signer.getAddress();
    return address;
  }
  async disconnect() {
    classPrivateFieldSet._classPrivateFieldSet(this, _provider, undefined);
    classPrivateFieldSet._classPrivateFieldSet(this, _signer, undefined);
  }
  async getAddress() {
    const signer = await this.getSigner();
    if (!signer) {
      throw new Error("No signer found");
    }
    return await signer.getAddress();
  }
  async isConnected() {
    try {
      const addr = await this.getAddress();
      return !!addr;
    } catch {
      return false;
    }
  }
  async getProvider() {
    if (!classPrivateFieldSet._classPrivateFieldGet(this, _provider)) {
      classPrivateFieldSet._classPrivateFieldSet(this, _provider, new ethers.providers.JsonRpcBatchProvider(this.options.chain.rpc[0]));
    }
    return classPrivateFieldSet._classPrivateFieldGet(this, _provider);
  }
  async getSigner() {
    if (!classPrivateFieldSet._classPrivateFieldGet(this, _signer)) {
      const provider = await this.getProvider();
      classPrivateFieldSet._classPrivateFieldSet(this, _signer, getSignerFromEthersWallet(this.options.ethersWallet, provider));
    }
    return classPrivateFieldSet._classPrivateFieldGet(this, _signer);
  }
  async switchChain(chainId) {
    const chain = this.options.chains.find(c => c.chainId === chainId);
    if (!chain) {
      throw new Error("Chain not found");
    }
    classPrivateFieldSet._classPrivateFieldSet(this, _provider, new ethers.providers.JsonRpcBatchProvider(chain.rpc[0]));
    classPrivateFieldSet._classPrivateFieldSet(this, _signer, getSignerFromEthersWallet(this.options.ethersWallet, classPrivateFieldSet._classPrivateFieldGet(this, _provider)));
    this.onChainChanged(chainId);
  }
  async setupListeners() {}
  updateChains(chains) {
    this.options.chains = chains;
  }
}
function getSignerFromEthersWallet(ethersWallet, provider) {
  if (provider) {
    return ethersWallet.connect(provider);
  }
  return ethersWallet;
}

exports.DeviceWalletConnector = DeviceWalletConnector;
