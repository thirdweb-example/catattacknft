'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var connector = require('../../../../dist/connector-a63dd9e7.cjs.dev.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-61a301bf.cjs.dev.js');
var walletIds = require('../../../../dist/walletIds-2f745506.cjs.dev.js');
var getInjectedPhantomProvider = require('../../../../dist/getInjectedPhantomProvider-84b0e75f.cjs.dev.js');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-8801ecd5.cjs.dev.js');
require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
require('ethers');
require('@thirdweb-dev/sdk');

class PhantomWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet {
  get walletName() {
    return "Phantom";
  }
  constructor(options) {
    super(PhantomWallet.id, options);
    this.isInjected = !!getInjectedPhantomProvider.getInjectedPhantomProvider();
  }
  async getConnector() {
    if (!this.connector) {
      const {
        PhantomConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/phantom/dist/thirdweb-dev-wallets-evm-connectors-phantom.cjs.dev.js'); });
      const phantomConnector = new PhantomConnector({
        chains: this.chains,
        connectorStorage: this.walletStorage,
        options: {
          shimDisconnect: true
        }
      });
      this.phantomConnector = phantomConnector;
      this.connector = new connector.WagmiAdapter(phantomConnector);
    }
    return this.connector;
  }
}
defineProperty._defineProperty(PhantomWallet, "meta", {
  name: "Phantom",
  iconURL: "ipfs://bafybeibkpca5nwxpsjrtuxmz2ckb5lyc2sl2abg5f7dnvxku637vvffjti",
  urls: {
    chrome: "https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa"
    // not specifiying theme because they can't be used to connect
    // android: "https://play.google.com/store/apps/details?id=app.phantom",
    // ios: "https://apps.apple.com/us/app/phantom-crypto-wallet/id1598432977",
  }
});
defineProperty._defineProperty(PhantomWallet, "id", walletIds.walletIds.phantom);

exports.PhantomWallet = PhantomWallet;
