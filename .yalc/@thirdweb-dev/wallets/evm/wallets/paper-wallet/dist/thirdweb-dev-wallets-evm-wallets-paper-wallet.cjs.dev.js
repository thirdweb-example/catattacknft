'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var walletIds = require('../../../../dist/walletIds-2f745506.cjs.dev.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-61a301bf.cjs.dev.js');
require('../../../../dist/classPrivateMethodGet-8801ecd5.cjs.dev.js');
require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
require('ethers');
require('eventemitter3');
require('@thirdweb-dev/sdk');

class PaperWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet {
  get walletName() {
    return "Paper Wallet";
  }
  constructor(options) {
    super(PaperWallet.id, {
      ...options
    });
    if (options.paperClientId && options.paperClientId === "uninitialized") {
      this.paperClientId = "00000000-0000-0000-0000-000000000000";
      this.chain = options.chain;
      return;
    }
    if (options.advancedOptions && options.advancedOptions?.recoveryShareManagement === "USER_MANAGED") {
      // checks to see if we are trying to use USER_MANAGED with thirdweb client ID. If so, we throw an error.
      if (options.paperClientId && !this.isClientIdLegacyPaper(options.paperClientId) || !options.paperClientId && options.clientId && !this.isClientIdLegacyPaper(options.clientId)) {
        throw new Error('RecoveryShareManagement option "USER_MANAGED" is not supported with thirdweb client ID');
      }
    }
    if (!options.clientId && !options.paperClientId) {
      throw new Error("clientId or paperClientId is required");
    }
    if (options.paperClientId && !this.isClientIdLegacyPaper(options.paperClientId)) {
      throw new Error("paperClientId must be a legacy paper client ID");
    }
    if (options.clientId && this.isClientIdLegacyPaper(options.clientId)) {
      throw new Error("clientId must be a thirdweb client ID");
    }

    // cast is okay because we assert that either clientId or paperClientId is defined above
    this.paperClientId = options.paperClientId ?? options.clientId;
    this.chain = options.chain;
  }
  isClientIdLegacyPaper(clientId) {
    return clientId.indexOf("-") > 0 && clientId.length === 36;
  }
  async getConnector() {
    if (!this.connector) {
      const {
        PaperWalletConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/paper/dist/thirdweb-dev-wallets-evm-connectors-paper.cjs.dev.js'); });
      this.connector = new PaperWalletConnector({
        clientId: this.paperClientId,
        chain: this.chain,
        chains: this.chains,
        advancedOptions: {
          recoveryShareManagement: this.options?.advancedOptions?.recoveryShareManagement
        },
        styles: this.options?.styles
      });
    }
    return this.connector;
  }
  getConnectParams() {
    const connectParams = super.getConnectParams();
    if (!connectParams) {
      return undefined;
    }

    // do not return non-serializable params to make auto-connect work
    if (typeof connectParams.googleLogin === "object") {
      return {
        ...connectParams,
        googleLogin: true
      };
    }
    return connectParams;
  }
  async getEmail() {
    const connector = await this.getConnector();
    return connector.getEmail();
  }
  async getPaperSDK() {
    const connector = await this.getConnector();
    return connector.getPaperSDK();
  }
}
defineProperty._defineProperty(PaperWallet, "id", walletIds.walletIds.paper);
defineProperty._defineProperty(PaperWallet, "meta", {
  name: "Paper Wallet",
  iconURL: "ipfs://QmNrLXtPoFrh4yjZbXui39zUMozS1oetpgU8dvZhFAxfRa/paper-logo-icon.svg"
});

exports.PaperWallet = PaperWallet;
