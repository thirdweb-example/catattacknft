'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var classPrivateFieldGet = require('../../../../dist/classPrivateFieldGet-6e4ddeb2.cjs.dev.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../base/dist/thirdweb-dev-wallets-evm-wallets-base.cjs.dev.js');
require('../../../../dist/abstract-87f231fe.cjs.dev.js');
require('ethers');
require('eventemitter3');
require('../../../../dist/storage-b818cf72.cjs.dev.js');
require('localforage');

var _connector = /*#__PURE__*/new WeakMap();
class EmailWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractBrowserWallet {
  get walletName() {
    return "Email Wallet";
  }
  constructor(options) {
    super(EmailWallet.id, {
      ...options,
      shouldAutoConnect: false // TODO figure the autoconnect flow
    });
    classPrivateFieldGet._classPrivateFieldInitSpec(this, _connector, {
      writable: true,
      value: void 0
    });
  }
  async getConnector() {
    if (!classPrivateFieldGet._classPrivateFieldGet(this, _connector)) {
      const {
        EmailWalletConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/email/dist/thirdweb-dev-wallets-evm-connectors-email.cjs.dev.js'); });
      classPrivateFieldGet._classPrivateFieldSet(this, _connector, new EmailWalletConnector({
        clientId: this.options.clientId,
        chain: this.options.chain
      }));
    }
    return classPrivateFieldGet._classPrivateFieldGet(this, _connector);
  }
}
defineProperty._defineProperty(EmailWallet, "id", "email-wallet");

exports.EmailWallet = EmailWallet;
