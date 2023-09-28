import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-0ee02dfd.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { T as TWConnector } from '../../../../dist/tw-connector-d83550c7.esm.js';
import { providers } from 'ethers';
import { n as normalizeChainId } from '../../../../dist/normalizeChainId-dd5a6036.esm.js';
import '../../../../dist/checkPrivateRedeclaration-a6ec2e61.esm.js';
import 'eventemitter3';

var _provider = /*#__PURE__*/new WeakMap();
var _signer = /*#__PURE__*/new WeakMap();
class DeviceWalletConnector extends TWConnector {
  constructor(options) {
    super();
    _defineProperty(this, "id", "device_wallet");
    _defineProperty(this, "name", "Device Wallet");
    _defineProperty(this, "options", void 0);
    _classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "shimDisconnectKey", "deviceWallet.shimDisconnect");
    _defineProperty(this, "onChainChanged", chainId => {
      const id = normalizeChainId(chainId);
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
    _classPrivateFieldSet(this, _provider, undefined);
    _classPrivateFieldSet(this, _signer, undefined);
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
    if (!_classPrivateFieldGet(this, _provider)) {
      _classPrivateFieldSet(this, _provider, new providers.JsonRpcBatchProvider(this.options.chain.rpc[0]));
    }
    return _classPrivateFieldGet(this, _provider);
  }
  async getSigner() {
    if (!_classPrivateFieldGet(this, _signer)) {
      const provider = await this.getProvider();
      _classPrivateFieldSet(this, _signer, getSignerFromEthersWallet(this.options.ethersWallet, provider));
    }
    return _classPrivateFieldGet(this, _signer);
  }
  async switchChain(chainId) {
    const chain = this.options.chains.find(c => c.chainId === chainId);
    if (!chain) {
      throw new Error("Chain not found");
    }
    _classPrivateFieldSet(this, _provider, new providers.JsonRpcBatchProvider(chain.rpc[0]));
    _classPrivateFieldSet(this, _signer, getSignerFromEthersWallet(this.options.ethersWallet, _classPrivateFieldGet(this, _provider)));
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

export { DeviceWalletConnector };
