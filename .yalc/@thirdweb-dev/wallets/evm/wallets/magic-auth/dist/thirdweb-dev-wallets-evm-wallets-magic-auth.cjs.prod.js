'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var twConnector = require('../../../../dist/tw-connector-a7cbec67.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-9721fd67.cjs.prod.js');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-5131251f.cjs.prod.js');
require('../../../../dist/checkPrivateRedeclaration-fd0a01ed.cjs.prod.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
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
      } = await Promise.resolve().then(function () { return require('../../../connectors/magic/dist/thirdweb-dev-wallets-evm-connectors-magic.cjs.prod.js'); });
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
