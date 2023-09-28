'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-06270032.cjs.prod.js');
var walletIds = require('../../../../dist/walletIds-e0cdfa11.cjs.prod.js');
var constants = require('../../../../dist/constants-146b4500.cjs.prod.js');
require('../../../../dist/classPrivateMethodGet-cf746c9e.cjs.prod.js');
require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('ethers');
require('eventemitter3');
require('@thirdweb-dev/sdk');

// re-export the connection args for convenience

class SafeWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet {
  get walletName() {
    return "Safe Wallet";
  }
  constructor(options) {
    super(SafeWallet.id, {
      ...options
    });
  }
  async getConnector() {
    if (!this.connector) {
      const {
        SafeConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/safe/dist/thirdweb-dev-wallets-evm-connectors-safe.cjs.prod.js'); });
      this.connector = new SafeConnector();
    }
    return this.connector;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateChains(chains) {
    // no op
  }
  getPersonalWallet() {
    return this.connector?.personalWallet;
  }
  autoConnect(params) {
    return this.connect(params);
  }
}
defineProperty._defineProperty(SafeWallet, "meta", {
  name: "Safe",
  iconURL: "ipfs://QmbbyxDDmmLQh8DzzeUR6X6B75bESsNUFmbdvS3ZsQ2pN1/SafeToken.svg"
});
defineProperty._defineProperty(SafeWallet, "id", walletIds.walletIds.safe);

exports.SafeSupportedChainsSet = constants.SafeSupportedChainsSet;
exports.SafeWallet = SafeWallet;
