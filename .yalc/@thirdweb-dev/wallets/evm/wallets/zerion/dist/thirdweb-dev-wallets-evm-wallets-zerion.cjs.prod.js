'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var connector = require('../../../../dist/connector-1b2fa06d.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-06270032.cjs.prod.js');
var assertWindowEthereum = require('../../../../dist/assertWindowEthereum-1a9cc710.cjs.prod.js');
var wc = require('../../../../dist/wc-1f862048.cjs.prod.js');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-cf746c9e.cjs.prod.js');
require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('ethers');
require('@thirdweb-dev/sdk');

class ZerionWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet {
  get walletName() {
    return "Zerion Wallet";
  }
  constructor(options) {
    super(ZerionWallet.id, options);
    if (assertWindowEthereum.assertWindowEthereum(globalThis.window)) {
      this.isInjected = !!globalThis.window.ethereum?.isZerion;
    } else {
      this.isInjected = false;
    }
  }
  async getConnector() {
    if (!this.connector) {
      if (this.isInjected) {
        // import the connector dynamically
        const {
          ZerionConnector
        } = await Promise.resolve().then(function () { return require('../../../connectors/zerion/dist/thirdweb-dev-wallets-evm-connectors-zerion.cjs.prod.js'); });
        const zerionConnector = new ZerionConnector({
          chains: this.chains,
          connectorStorage: this.walletStorage,
          options: {
            shimDisconnect: true
          }
        });
        this.zerionConnector = zerionConnector;
        this.connector = new connector.WagmiAdapter(zerionConnector);
      } else {
        const {
          WalletConnectConnector
        } = await Promise.resolve().then(function () { return require('../../../connectors/wallet-connect/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect.cjs.prod.js'); });
        const walletConnectConnector = new WalletConnectConnector({
          chains: this.chains,
          options: {
            projectId: this.options?.projectId || wc.TW_WC_PROJECT_ID,
            // TODO,
            storage: this.walletStorage,
            qrcode: this.options?.qrcode,
            dappMetadata: this.dappMetadata,
            qrModalOptions: this.options?.qrModalOptions
          }
        });
        walletConnectConnector.getProvider().then(provider => {
          provider.signer.client.on("session_request_sent", () => {
            this.emit("wc_session_request_sent");
          });
        });

        // need to save this for getting the QR code URI
        this.walletConnectConnector = walletConnectConnector;
        this.connector = new connector.WagmiAdapter(walletConnectConnector);
      }
    }
    return this.connector;
  }
  async connectWithQrCode(options) {
    await this.getConnector();
    const wcConnector = this.walletConnectConnector;
    if (!wcConnector) {
      throw new Error("WalletConnect connector not found");
    }
    const wcProvider = await wcConnector.getProvider();

    // set a listener for display_uri event
    wcProvider.on("display_uri", uri => {
      options.onQrCodeUri(uri);
    });

    // trigger connect flow
    this.connect({
      chainId: options.chainId
    }).then(options.onConnected);
  }
}
defineProperty._defineProperty(ZerionWallet, "id", "zerion");
defineProperty._defineProperty(ZerionWallet, "meta", {
  name: "Zerion Wallet",
  iconURL: "ipfs://Qmb1LhNtMUkzbgk1V8ZiUSRXjMJGRkS5HH3R71KyRgjdBG/zerion.png",
  urls: {
    chrome: "https://zerion.io/extension",
    android: "https://link.zerion.io/901o6IN0jqb",
    ios: "https://link.zerion.io/a11o6IN0jqb"
  }
});

exports.ZerionWallet = ZerionWallet;
