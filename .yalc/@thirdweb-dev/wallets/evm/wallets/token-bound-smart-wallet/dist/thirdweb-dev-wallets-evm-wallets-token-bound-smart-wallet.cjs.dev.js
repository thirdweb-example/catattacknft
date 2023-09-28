'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var evm_wallets_smartWallet_dist_thirdwebDevWalletsEvmWalletsSmartWallet = require('../../../../dist/smart-wallet-e1544c19.cjs.dev.js');
var walletIds = require('../../../../dist/walletIds-a3db1151.cjs.dev.js');
require('../../../../dist/base-3dfbb985.cjs.dev.js');
require('../../../../dist/classPrivateMethodGet-8801ecd5.cjs.dev.js');
require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
require('ethers');
require('eventemitter3');
require('@thirdweb-dev/sdk');
require('@thirdweb-dev/chains');
require('@walletconnect/core');
require('@walletconnect/web3wallet');
require('../../../../dist/wc-bf863bbf.cjs.dev.js');
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
      } = await Promise.resolve().then(function () { return require('../../../connectors/token-bound-smart-wallet/dist/thirdweb-dev-wallets-evm-connectors-token-bound-smart-wallet.cjs.dev.js'); });
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
