'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var evm_connectors_injected_dist_thirdwebDevWalletsEvmConnectorsInjected = require('../../injected/dist/thirdweb-dev-wallets-evm-connectors-injected.cjs.prod.js');
var assertWindowEthereum = require('../../../../dist/assertWindowEthereum-1a9cc710.cjs.prod.js');
require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
require('../../../../dist/url-f55506f3.cjs.prod.js');
require('@thirdweb-dev/chains');
require('ethers');
require('../../../../dist/WagmiConnector-17577fd3.cjs.prod.js');
require('eventemitter3');
require('../../../../dist/normalizeChainId-a44d9dec.cjs.prod.js');
require('../../../../dist/errors-9cece35a.cjs.prod.js');

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
