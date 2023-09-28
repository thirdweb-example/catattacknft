'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var evm_wallets_smartWallet_dist_thirdwebDevWalletsEvmWalletsSmartWallet = require('../../../../dist/smart-wallet-6ed2e2c3.cjs.prod.js');
var walletIds = require('../../../../dist/walletIds-9a7d481a.cjs.prod.js');
require('../../../../dist/base-8b4e14b2.cjs.prod.js');
require('../../../../dist/classPrivateMethodGet-cf746c9e.cjs.prod.js');
require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('ethers');
require('eventemitter3');
require('@thirdweb-dev/sdk');
require('@thirdweb-dev/chains');
require('@walletconnect/core');
require('@walletconnect/web3wallet');
require('../../../../dist/wc-1f862048.cjs.prod.js');
require('@walletconnect/jsonrpc-utils');

/**
 *
 */
class TokenBoundSmartWallet extends evm_wallets_smartWallet_dist_thirdwebDevWalletsEvmWalletsSmartWallet.SmartWallet {
  get walletName() {
    return "Token Bound Smart Wallet";
  }
  constructor(options) {
    super(options);
    defineProperty._defineProperty(this, "connector", void 0);
  }
  async getConnector() {
    if (!this.connector) {
      if (this.enableConnectApp) {
        await this.wcWallet.init();
        this.setupWalletConnectEventsListeners();
      }
      const {
        TokenBoundSmartWalletConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/token-bound-smart-wallet/dist/thirdweb-dev-wallets-evm-connectors-token-bound-smart-wallet.cjs.prod.js'); });
      this.connector = new TokenBoundSmartWalletConnector(this.options);
    }
    return this.connector;
  }
}
defineProperty._defineProperty(TokenBoundSmartWallet, "meta", {
  name: "Token Bound Smart Wallet",
  iconURL: "ipfs://QmeAJVqn17aDNQhjEU3kcWVZCFBrfta8LzaDGkS8Egdiyk/token-bound-smart-wallet.svg"
});
defineProperty._defineProperty(TokenBoundSmartWallet, "id", walletIds.walletIds.tokenBoundSmartWallet);

exports.TokenBoundSmartWallet = TokenBoundSmartWallet;
