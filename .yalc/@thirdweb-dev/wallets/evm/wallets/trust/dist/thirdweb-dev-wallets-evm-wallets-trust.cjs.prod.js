'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var connector = require('../../../../dist/connector-1b2fa06d.cjs.prod.js');
var assertWindowEthereum = require('../../../../dist/assertWindowEthereum-1a9cc710.cjs.prod.js');
var evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase = require('../../../../dist/base-06270032.cjs.prod.js');
var walletIds = require('../../../../dist/walletIds-e0cdfa11.cjs.prod.js');
var wc = require('../../../../dist/wc-1f862048.cjs.prod.js');
require('eventemitter3');
require('../../../../dist/classPrivateMethodGet-cf746c9e.cjs.prod.js');
require('../../../../dist/classPrivateFieldSet-4a4973f9.cjs.prod.js');
require('@thirdweb-dev/chains');
require('../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.prod.js');
require('ethers');
require('@thirdweb-dev/sdk');

class TrustWallet extends evm_wallets_base_dist_thirdwebDevWalletsEvmWalletsBase.AbstractClientWallet {
  get walletName() {
    return "Trust Wallet";
  }
  constructor(options) {
    super(TrustWallet.id, options);
    if (assertWindowEthereum.assertWindowEthereum(globalThis.window)) {
      this.isInjected = !!globalThis.window.ethereum?.isTrust;
    } else {
      this.isInjected = false;
    }
  }
  async getConnector() {
    if (!this.connector) {
      // if trust is injected, use the injected connector
      // otherwise, use the wallet connect connector for using the trust app on mobile via QR code scan

      if (this.isInjected) {
        // import the connector dynamically
        const {
          TrustConnector
        } = await Promise.resolve().then(function () { return require('../../../connectors/trust/dist/thirdweb-dev-wallets-evm-connectors-trust.cjs.prod.js'); });
        const trustConnector = new TrustConnector({
          chains: this.chains,
          connectorStorage: this.walletStorage,
          options: {
            shimDisconnect: true
          }
        });
        this.trustConnector = trustConnector;
        this.connector = new connector.WagmiAdapter(trustConnector);
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
   * trust.connectWithQrCode({
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
defineProperty._defineProperty(TrustWallet, "meta", {
  name: "Trust Wallet",
  iconURL: "ipfs://QmNigQbXk7wKZwDcgN38Znj1ZZQ3JEG3DD6fUKLBU8SUTP/trust%20wallet.svg",
  urls: {
    chrome: "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph",
    android: "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",
    ios: "https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409"
  }
});
defineProperty._defineProperty(TrustWallet, "id", walletIds.walletIds.trust);

exports.TrustWallet = TrustWallet;
