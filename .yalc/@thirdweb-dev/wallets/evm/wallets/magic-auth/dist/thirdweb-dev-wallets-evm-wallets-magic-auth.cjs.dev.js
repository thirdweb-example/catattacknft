'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var twConnector = require('../../../../dist/tw-connector-7917f56a.cjs.dev.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-004558d2.cjs.dev.js');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-13694527.cjs.dev.js');
require('../../../../dist/checkPrivateRedeclaration-09e2947a.cjs.dev.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
require('ethers');

class MagicAuthWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractBrowserWallet {
  get walletName() {
    return "MagicAuth";
  }
  constructor(options) {
    super(MagicAuthWallet.id, options);
    defineProperty._defineProperty(this, "connector", void 0);
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        MagicAuthConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/magic/dist/thirdweb-dev-wallets-evm-connectors-magic.cjs.dev.js'); });
      this.connector = new twConnector.WagmiAdapter(new MagicAuthConnector({
        chains: this.chains,
        options: this.options
      }));
    }
    return this.connector;
  }
}
defineProperty._defineProperty(MagicAuthWallet, "id", "magicAuth");

exports.MagicAuthWallet = MagicAuthWallet;
