'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var connector = require('../../../../dist/connector-a63dd9e7.cjs.dev.js');
var walletIds = require('../../../../dist/walletIds-2f745506.cjs.dev.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-61a301bf.cjs.dev.js');
var buffer = require('buffer');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-8801ecd5.cjs.dev.js');
require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
require('ethers');
require('@thirdweb-dev/sdk');

if (typeof window !== "undefined") {
  // Coinbase SDK uses Buffer for rendering the QRCode which requires a global polyfill
  window.Buffer = buffer.Buffer;
}
class CoinbaseWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet {
  get walletName() {
    return "Coinbase Wallet";
  }
  constructor(options) {
    super(CoinbaseWallet.id, options);
    this.headlessMode = options?.headlessMode || false;
    this.theme = options?.theme || this.dappMetadata.isDarkMode === false ? "light" : "dark";
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        CoinbaseWalletConnector
      } = await Promise.resolve().then(function () { return require('../../../connectors/coinbase-wallet/dist/thirdweb-dev-wallets-evm-connectors-coinbase-wallet.cjs.dev.js'); });
      const cbConnector = new CoinbaseWalletConnector({
        chains: this.chains,
        options: {
          appName: this.dappMetadata.name,
          reloadOnDisconnect: false,
          darkMode: this.theme === "dark",
          headlessMode: this.headlessMode
        }
      });
      cbConnector.on("connect", () => {});
      this.coinbaseConnector = cbConnector;
      this.connector = new connector.WagmiAdapter(cbConnector);
    }
    return this.connector;
  }
  async getQrUrl() {
    await this.getConnector();
    if (!this.coinbaseConnector) {
      throw new Error("Coinbase connector not initialized");
    }
    return this.coinbaseConnector.getQrUrl();
  }
}
// TODO: remove this
defineProperty._defineProperty(CoinbaseWallet, "meta", {
  iconURL: "ipfs://QmcJBHopbwfJcLqJpX2xEufSS84aLbF7bHavYhaXUcrLaH/coinbase.svg",
  name: "Coinbase Wallet",
  urls: {
    chrome: "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
    android: "https://play.google.com/store/apps/details?id=org.toshi",
    ios: "https://apps.apple.com/us/app/coinbase-wallet-nfts-crypto/id1278383455"
  }
});
defineProperty._defineProperty(CoinbaseWallet, "id", walletIds.walletIds.coinbase);

exports.CoinbaseWallet = CoinbaseWallet;
