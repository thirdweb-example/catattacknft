'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var twConnector = require('../../../../dist/tw-connector-45d96df2.cjs.dev.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../base/dist/thirdweb-dev-wallets-evm-wallets-base.cjs.dev.js');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-13694527.cjs.dev.js');
require('../../../../dist/checkPrivateRedeclaration-09e2947a.cjs.dev.js');
require('../../../../dist/abstract-fde63816.cjs.dev.js');
require('ethers');

class CoinbaseWalletMobile extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractBrowserWallet {
  get walletName() {
    return "Coinbase Wallet Mobile";
  }
  constructor(options) {
    super(CoinbaseWalletMobile.id, options);
    defineProperty._defineProperty(this, "connector", void 0);
    defineProperty._defineProperty(this, "coinbaseConnector", void 0);
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        CoinbaseMobileWalletConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/coinbase-wallet-mobile/dist/thirdweb-dev-wallets-evm-connectors-coinbase-wallet-mobile.cjs.dev.js'); });
      const cbConnector = new CoinbaseMobileWalletConnector({
        chains: this.chains,
        options: {
          ...this.options
        }
      });
      cbConnector.on("connect", () => {
        console.log("Coinbase Wallet connected");
      });
      this.coinbaseConnector = cbConnector;
      this.connector = new twConnector.WagmiAdapter(cbConnector);
    }
    return this.connector;
  }
}
defineProperty._defineProperty(CoinbaseWalletMobile, "id", "coinbaseWalletMobile");

exports.CoinbaseWalletMobile = CoinbaseWalletMobile;
