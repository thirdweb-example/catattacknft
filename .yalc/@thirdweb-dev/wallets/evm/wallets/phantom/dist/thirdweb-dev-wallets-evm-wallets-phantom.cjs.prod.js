'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var connector = require('../../../../dist/connector-1b2fa06d.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-06270032.cjs.prod.js');
var walletIds = require('../../../../dist/walletIds-e0cdfa11.cjs.prod.js');
var getInjectedPhantomProvider = require('../../../../dist/getInjectedPhantomProvider-e94e26c9.cjs.prod.js');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-cf746c9e.cjs.prod.js');
require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
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
      } = await Promise.resolve().then(function () { return require('../../../connectors/phantom/dist/thirdweb-dev-wallets-evm-connectors-phantom.cjs.prod.js'); });
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
