'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var connector = require('../../../../dist/connector-a63dd9e7.cjs.dev.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-61a301bf.cjs.dev.js');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-8801ecd5.cjs.dev.js');
require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
require('ethers');
require('@thirdweb-dev/sdk');

class InjectedWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet {
  get walletName() {
    return "Injected Wallet";
  }
  constructor(options) {
    super(InjectedWallet.id, options);
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        InjectedConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/injected/dist/thirdweb-dev-wallets-evm-connectors-injected.cjs.dev.js'); });
      this.connector = new connector.WagmiAdapter(new InjectedConnector({
        chains: this.chains,
        connectorStorage: this.walletStorage,
        options: {
          shimDisconnect: true
        }
      }));
    }
    return this.connector;
  }
}
defineProperty._defineProperty(InjectedWallet, "id", "injected");

exports.InjectedWallet = InjectedWallet;
