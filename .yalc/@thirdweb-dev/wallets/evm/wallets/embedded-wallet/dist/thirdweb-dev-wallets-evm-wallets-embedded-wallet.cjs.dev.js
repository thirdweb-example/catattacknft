'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var evm_connectors_embeddedWallet_dist_thirdwebDevWalletsEvmConnectorsEmbeddedWallet = require('../../../connectors/embedded-wallet/dist/thirdweb-dev-wallets-evm-connectors-embedded-wallet.cjs.dev.js');
var walletIds = require('../../../../dist/walletIds-2f745506.cjs.dev.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-61a301bf.cjs.dev.js');
require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
require('ethers');
require('../../../../dist/connector-a63dd9e7.cjs.dev.js');
require('eventemitter3');
require('../../../../dist/normalizeChainId-8778491e.cjs.dev.js');
require('../../../../dist/embedded-wallet-a8627807.cjs.dev.js');
require('@paperxyz/sdk-common-utilities');
require('ethers/lib/utils');
require('../../../../dist/classPrivateMethodGet-8801ecd5.cjs.dev.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
require('@thirdweb-dev/sdk');

class EmbeddedWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet {
  get walletName() {
    return "Embedded Wallet";
  }
  constructor(options) {
    super(EmbeddedWallet.id, {
      ...options
    });
    this.chain = options.chain;
  }
  async getConnector() {
    if (!this.connector) {
      this.connector = new evm_connectors_embeddedWallet_dist_thirdwebDevWalletsEvmConnectorsEmbeddedWallet.EmbeddedWalletConnector({
        clientId: this.options?.clientId ?? "",
        chain: this.chain,
        chains: this.chains,
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
    if (connectParams.loginType === "headless_google_oauth") {
      return {
        loginType: connectParams.loginType,
        chainId: connectParams.chainId
      };
    }
    return connectParams;
  }
  async getEmail() {
    const connector = await this.getConnector();
    return connector.getEmail();
  }
  async getEmbeddedWalletSDK() {
    const connector = await this.getConnector();
    return connector.getEmbeddedWalletSDK();
  }
}
defineProperty._defineProperty(EmbeddedWallet, "id", walletIds.walletIds.embeddedWallet);
defineProperty._defineProperty(EmbeddedWallet, "meta", {
  name: "Embedded Wallet",
  iconURL: "ipfs://QmNx2evQa6tcQs9VTd3YaDm31ckfStvgRGKFGELahUmrbV/emailIcon.svg"
});

exports.EmbeddedWallet = EmbeddedWallet;
