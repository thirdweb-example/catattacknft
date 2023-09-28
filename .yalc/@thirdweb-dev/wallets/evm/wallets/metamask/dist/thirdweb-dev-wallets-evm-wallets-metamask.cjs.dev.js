'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var connector = require('../../../../dist/connector-a63dd9e7.cjs.dev.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-61a301bf.cjs.dev.js');
var walletIds = require('../../../../dist/walletIds-2f745506.cjs.dev.js');
var wc = require('../../../../dist/wc-bf863bbf.cjs.dev.js');
var getInjectedMetamaskProvider = require('../../../../dist/getInjectedMetamaskProvider-4e3b30b1.cjs.dev.js');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-8801ecd5.cjs.dev.js');
require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.dev.js');
require('ethers');
require('@thirdweb-dev/sdk');
require('../../../../dist/assertWindowEthereum-83395b2f.cjs.dev.js');

class MetaMaskWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet {
  get walletName() {
    return "MetaMask";
  }
  constructor(options) {
    super(MetaMaskWallet.id, options);
    this.isInjected = !!getInjectedMetamaskProvider.getInjectedMetamaskProvider();
  }
  async getConnector() {
    if (!this.connector) {
      // if metamask is injected, use the injected connector
      // otherwise, use the wallet connect connector for using the metamask app on mobile via QR code scan

      if (this.isInjected) {
        // import the connector dynamically
        const {
          MetaMaskConnector
        } = await Promise.resolve().then(function () { return require('../../../connectors/metamask/dist/thirdweb-dev-wallets-evm-connectors-metamask.cjs.dev.js'); });
        const metamaskConnector = new MetaMaskConnector({
          chains: this.chains,
          connectorStorage: this.walletStorage,
          options: {
            shimDisconnect: true
          }
        });
        this.metamaskConnector = metamaskConnector;
        this.connector = new connector.WagmiAdapter(metamaskConnector);
      } else {
        const {
          WalletConnectConnector
        } = await Promise.resolve().then(function () { return require('../../../connectors/wallet-connect/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect.cjs.dev.js'); });
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
   * metamask.connectWithQrCode({
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
  async switchAccount() {
    if (!this.metamaskConnector) {
      throw new Error("Can not switch Account");
    }
    await this.metamaskConnector.switchAccount();
  }
}
defineProperty._defineProperty(MetaMaskWallet, "meta", {
  name: "MetaMask",
  iconURL: "ipfs://QmZZHcw7zcXursywnLDAyY6Hfxzqop5GKgwoq8NB9jjrkN/metamask.svg",
  urls: {
    chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
    android: "https://play.google.com/store/apps/details?id=io.metamask",
    ios: "https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202"
  }
});
defineProperty._defineProperty(MetaMaskWallet, "id", walletIds.walletIds.metamask);

exports.MetaMaskWallet = MetaMaskWallet;
