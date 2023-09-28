'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var connector = require('../../../../dist/connector-1b2fa06d.cjs.prod.js');
var sdk = require('@thirdweb-dev/sdk');
var normalizeChainId = require('../../../../dist/normalizeChainId-a44d9dec.cjs.prod.js');
require('eventemitter3');

var _provider = /*#__PURE__*/new WeakMap();
var _signer = /*#__PURE__*/new WeakMap();
class LocalWalletConnector extends connector.Connector {
  constructor(options) {
    super();
    defineProperty._defineProperty(this, "id", "local_wallet");
    defineProperty._defineProperty(this, "name", "Local Wallet");
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    defineProperty._defineProperty(this, "shimDisconnectKey", "localWallet.shimDisconnect");
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
      classPrivateFieldSet._classPrivateFieldSet(this, _provider, sdk.getChainProvider(this.options.chain, {
        clientId: this.options.clientId,
        secretKey: this.options.secretKey
      }));
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
      throw new Error(`Chain not found for chainId ${chainId}, please add it to the chains property when creating this wallet`);
    }
    classPrivateFieldSet._classPrivateFieldSet(this, _provider, sdk.getChainProvider(chain, {
      clientId: this.options.clientId,
      secretKey: this.options.secretKey
    }));
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

exports.LocalWalletConnector = LocalWalletConnector;
