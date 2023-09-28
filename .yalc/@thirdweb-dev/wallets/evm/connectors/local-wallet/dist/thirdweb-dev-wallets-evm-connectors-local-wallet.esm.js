import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { C as Connector } from '../../../../dist/connector-20f7cf73.esm.js';
import { getChainProvider } from '@thirdweb-dev/sdk';
import { n as normalizeChainId } from '../../../../dist/normalizeChainId-dd5a6036.esm.js';
import 'eventemitter3';

var _provider = /*#__PURE__*/new WeakMap();
var _signer = /*#__PURE__*/new WeakMap();
class LocalWalletConnector extends Connector {
  constructor(options) {
    super();
    _defineProperty(this, "id", "local_wallet");
    _defineProperty(this, "name", "Local Wallet");
    _classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _signer, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "shimDisconnectKey", "localWallet.shimDisconnect");
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
      _classPrivateFieldSet(this, _provider, getChainProvider(this.options.chain, {
        clientId: this.options.clientId,
        secretKey: this.options.secretKey
      }));
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
      throw new Error(`Chain not found for chainId ${chainId}, please add it to the chains property when creating this wallet`);
    }
    _classPrivateFieldSet(this, _provider, getChainProvider(chain, {
      clientId: this.options.clientId,
      secretKey: this.options.secretKey
    }));
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

export { LocalWalletConnector };
