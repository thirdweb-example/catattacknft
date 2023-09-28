import { defaultChains } from '@thirdweb-dev/chains';
import EventEmitter from 'eventemitter3';

class WagmiConnector extends EventEmitter {
  /** Unique connector id */

  /** Connector name */

  /** Chains connector supports */

  /** Options to use with connector */

  /** Whether connector is usable */

  constructor(_ref) {
    let {
      chains = defaultChains,
      options
    } = _ref;
    super();
    this.chains = chains;
    this.options = options;
  }
  getBlockExplorerUrls(chain) {
    const explorers = chain.explorers?.map(x => x.url) ?? [];
    return explorers.length > 0 ? explorers : undefined;
  }
  isChainUnsupported(chainId) {
    return !this.chains.some(x => x.chainId === chainId);
  }
  updateChains(chains) {
    this.chains = chains;
  }
}

export { WagmiConnector as W };
