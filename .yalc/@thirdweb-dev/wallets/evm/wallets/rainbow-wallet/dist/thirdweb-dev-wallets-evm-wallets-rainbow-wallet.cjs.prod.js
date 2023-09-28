'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var connector = require('../../../../dist/connector-1b2fa06d.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-06270032.cjs.prod.js');
var walletIds = require('../../../../dist/walletIds-e0cdfa11.cjs.prod.js');
var wc = require('../../../../dist/wc-1f862048.cjs.prod.js');
var getInjectedRainbowProvider = require('../../../../dist/getInjectedRainbowProvider-3818a166.cjs.prod.js');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-cf746c9e.cjs.prod.js');
require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('ethers');
require('@thirdweb-dev/sdk');
require('../../../../dist/assertWindowEthereum-1a9cc710.cjs.prod.js');

class RainbowWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet {
  get walletName() {
    return "Rainbow Wallet";
  }
  constructor(options) {
    super(RainbowWallet.id, options);
    this.isInjected = !!getInjectedRainbowProvider.getInjectedRainbowProvider();
  }
  async getConnector() {
    if (!this.connector) {
      // if rainbow is injected, use the injected connector
      // otherwise, use the wallet connect connector for using the rainbow app on mobile via QR code scan

      if (this.isInjected) {
        // import the connector dynamically
        const {
          RainbowConnector
        } = await Promise.resolve().then(function () { return require('../../../connectors/rainbow/dist/thirdweb-dev-wallets-evm-connectors-rainbow.cjs.prod.js'); });
        const rainbowConnector = new RainbowConnector({
          chains: this.chains,
          connectorStorage: this.walletStorage,
          options: {
            shimDisconnect: true
          }
        });
        this.rainbowConnector = rainbowConnector;
        this.connector = new connector.WagmiAdapter(rainbowConnector);
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

  /**
   * connect to wallet with QR code
   *
   * @example
   * ```typescript
   * rainbow.connectWithQrCode({
   *  chainId: 1,
   *  onQrCodeUri(qrCodeUri) {
   *    // render the QR code with `qrCodeUri`
   *  },
   *  onConnected(accountAddress)  {
   *    // update UI to show connected state
   *  },
   * })
   * ```
   */
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
defineProperty._defineProperty(RainbowWallet, "meta", {
  name: "Rainbow Wallet",
  iconURL: "ipfs://QmSZn47p4DVVBfzvg9BAX2EqwnPxkT1YAE7rUnrtd9CybQ/rainbow-logo.png",
  urls: {
    chrome: "https://chrome.google.com/webstore/detail/rainbow/opfgelmcmbiajamepnmloijbpoleiama",
    android: "https://rnbwapp.com/e/Va41HWS6Oxb",
    ios: "https://rnbwapp.com/e/OeMdmkJ6Oxb"
  }
});
defineProperty._defineProperty(RainbowWallet, "id", walletIds.walletIds.rainbow);

exports.RainbowWallet = RainbowWallet;
