import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { W as WagmiAdapter } from '../../../../dist/connector-05689d68.browser.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-402f7b12.browser.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-a64268ca.browser.esm.js';
import { T as TW_WC_PROJECT_ID } from '../../../../dist/wc-c6a6a61c.browser.esm.js';
import { g as getInjectedRainbowProvider } from '../../../../dist/getInjectedRainbowProvider-33485100.browser.esm.js';
import 'eventemitter3';
import '../../../../dist/classPrivateMethodGet-ea199cc3.browser.esm.js';
import '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import 'ethers';
import '@thirdweb-dev/sdk';
import '../../../../dist/assertWindowEthereum-b48c1686.browser.esm.js';

class RainbowWallet extends AbstractClientWallet {
  get walletName() {
    return "Rainbow Wallet";
  }
  constructor(options) {
    super(RainbowWallet.id, options);
    this.isInjected = !!getInjectedRainbowProvider();
  }
  async getConnector() {
    if (!this.connector) {
      // if rainbow is injected, use the injected connector
      // otherwise, use the wallet connect connector for using the rainbow app on mobile via QR code scan

      if (this.isInjected) {
        // import the connector dynamically
        const {
          RainbowConnector
        } = await import('../../../connectors/rainbow/dist/thirdweb-dev-wallets-evm-connectors-rainbow.browser.esm.js');
        const rainbowConnector = new RainbowConnector({
          chains: this.chains,
          connectorStorage: this.walletStorage,
          options: {
            shimDisconnect: true
          }
        });
        this.rainbowConnector = rainbowConnector;
        this.connector = new WagmiAdapter(rainbowConnector);
      } else {
        const {
          WalletConnectConnector
        } = await import('../../../connectors/wallet-connect/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect.browser.esm.js');
        const walletConnectConnector = new WalletConnectConnector({
          chains: this.chains,
          options: {
            projectId: this.options?.projectId || TW_WC_PROJECT_ID,
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
        this.connector = new WagmiAdapter(walletConnectConnector);
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
_defineProperty(RainbowWallet, "meta", {
  name: "Rainbow Wallet",
  iconURL: "ipfs://QmSZn47p4DVVBfzvg9BAX2EqwnPxkT1YAE7rUnrtd9CybQ/rainbow-logo.png",
  urls: {
    chrome: "https://chrome.google.com/webstore/detail/rainbow/opfgelmcmbiajamepnmloijbpoleiama",
    android: "https://rnbwapp.com/e/Va41HWS6Oxb",
    ios: "https://rnbwapp.com/e/OeMdmkJ6Oxb"
  }
});
_defineProperty(RainbowWallet, "id", walletIds.rainbow);

export { RainbowWallet };
