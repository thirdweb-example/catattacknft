'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var connector = require('../../../../dist/connector-1b2fa06d.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-06270032.cjs.prod.js');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-cf746c9e.cjs.prod.js');
require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
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
      } = await Promise.resolve().then(function () { return require('../../../connectors/injected/dist/thirdweb-dev-wallets-evm-connectors-injected.cjs.prod.js'); });
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
