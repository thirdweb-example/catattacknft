'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var evm_connectors_embeddedWallet_dist_thirdwebDevWalletsEvmConnectorsEmbeddedWallet = require('../../../connectors/embedded-wallet/dist/thirdweb-dev-wallets-evm-connectors-embedded-wallet.cjs.prod.js');
var walletIds = require('../../../../dist/walletIds-e0cdfa11.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-06270032.cjs.prod.js');
require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
require('ethers');
require('../../../../dist/connector-1b2fa06d.cjs.prod.js');
require('eventemitter3');
require('../../../../dist/normalizeChainId-a44d9dec.cjs.prod.js');
require('../../../../dist/embedded-wallet-e843591a.cjs.prod.js');
require('@paperxyz/sdk-common-utilities');
require('ethers/lib/utils');
require('../../../../dist/classPrivateMethodGet-cf746c9e.cjs.prod.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
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
