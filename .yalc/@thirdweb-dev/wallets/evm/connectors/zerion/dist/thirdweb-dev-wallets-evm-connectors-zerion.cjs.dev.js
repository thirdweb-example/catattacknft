'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var evm_connectors_injected_dist_thirdwebDevWalletsEvmConnectorsInjected = require('../../injected/dist/thirdweb-dev-wallets-evm-connectors-injected.cjs.dev.js');
var assertWindowEthereum = require('../../../../dist/assertWindowEthereum-83395b2f.cjs.dev.js');
require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
require('../../../../dist/url-f53b640f.cjs.dev.js');
require('@thirdweb-dev/chains');
require('ethers');
require('../../../../dist/WagmiConnector-6ff7d562.cjs.dev.js');
require('eventemitter3');
require('../../../../dist/normalizeChainId-8778491e.cjs.dev.js');
require('../../../../dist/errors-323b40ec.cjs.dev.js');

class ZerionConnector extends evm_connectors_injected_dist_thirdwebDevWalletsEvmConnectorsInjected.InjectedConnector {
  constructor(arg) {
    const defaultOptions = {
      name: "Zerion",
      getProvider() {
        function getReady(ethereum) {
          const isZerion = !!ethereum?.isZerion;
          if (!isZerion) {
            return;
          }
          return ethereum;
        }
        if (typeof window === "undefined") {
          return;
        }
        if (assertWindowEthereum.assertWindowEthereum(globalThis.window)) {
          if (globalThis.window.ethereum?.providers) {
            return globalThis.window.ethereum.providers.find(getReady);
          }
          return getReady(globalThis.window.ethereum);
        }
      }
    };
    const options = {
      ...defaultOptions,
      ...arg.options
    };
    super({
      chains: arg.chains,
      options,
      connectorStorage: arg.connectorStorage
    });
  }
}

exports.ZerionConnector = ZerionConnector;
