'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var connector = require('../../../../dist/connector-1b2fa06d.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-06270032.cjs.prod.js');
var walletIds = require('../../../../dist/walletIds-e0cdfa11.cjs.prod.js');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-cf746c9e.cjs.prod.js');
require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('ethers');
require('@thirdweb-dev/sdk');

class MagicLink extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet {
  get walletName() {
    return "Magic Link";
  }
  constructor(options) {
    super(MagicLink.id, options);
    this.options = options;
  }
  async initializeConnector() {
    // import the connector dynamically
    const {
      MagicAuthConnector
    } = await Promise.resolve().then(function () { return require('../../../connectors/magic/dist/thirdweb-dev-wallets-evm-connectors-magic.cjs.prod.js'); });
    const magicConnector = new MagicAuthConnector({
      chains: this.chains,
      options: this.options
    });
    this.magicConnector = magicConnector;
    this.connector = new connector.WagmiAdapter(magicConnector);
    return this.connector;
  }
  async getConnector() {
    if (!this.connector) {
      return await this.initializeConnector();
    }
    return this.connector;
  }
  getMagic() {
    if (!this.magicConnector) {
      throw new Error("Magic connector is not initialized");
    }
    return this.magicConnector.getMagicSDK();
  }
  async autoConnect(options) {
    await this.initializeConnector();
    await this.magicConnector?.initializeMagicSDK(options);
    const magic = this.getMagic();
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      const isMagicRedirect = url.searchParams.get("magic_credential");
      if (isMagicRedirect) {
        try {
          this.oAuthRedirectResult = await magic.oauth.getRedirectResult(); // required to do this for social login
        } catch {
          // ignore
        }
      }
    }
    const isLoggedIn = await magic.user.isLoggedIn();
    if (isLoggedIn) {
      return super.autoConnect(options);
    }
    throw new Error("Magic user is not logged in");
  }
  async disconnect() {
    this.oAuthRedirectResult = undefined;
    const magic = this.getMagic();
    await magic.user.logout();
    return super.disconnect();
  }
  async connect(options) {
    if ("email" in options && this.options.emailLogin === false) {
      throw new Error("Email login is disabled");
    }
    if ("phoneNumber" in options && this.options.smsLogin === false) {
      throw new Error("SMS login is disabled");
    }
    return super.connect(options);
  }
}
defineProperty._defineProperty(MagicLink, "meta", {
  iconURL: "ipfs://QmUMBFZGXxBpgDmZzZAHhbcCL5nYvZnVaYLTajsNjLcxMU/1-Icon_Magic_Color.svg",
  name: "Magic Link"
});
defineProperty._defineProperty(MagicLink, "id", walletIds.walletIds.magicLink);

exports.MagicLink = MagicLink;
