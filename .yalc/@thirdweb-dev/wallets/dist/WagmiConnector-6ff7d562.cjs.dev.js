'use strict';

var chains = require('@thirdweb-dev/chains');
var EventEmitter = require('eventemitter3');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefault(EventEmitter);

class WagmiConnector extends EventEmitter__default["default"] {
  /** Unique connector id */

  /** Connector name */

  /** Chains connector supports */

  /** Options to use with connector */

  /** Whether connector is usable */

  constructor(_ref) {
    let {
      chains: chains$1 = chains.defaultChains,
      options
    } = _ref;
    super();
    this.chains = chains$1;
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

exports.WagmiConnector = WagmiConnector;
