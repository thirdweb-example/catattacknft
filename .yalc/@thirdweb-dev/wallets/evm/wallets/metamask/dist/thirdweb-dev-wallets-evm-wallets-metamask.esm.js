import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { W as WagmiAdapter } from '../../../../dist/connector-20f7cf73.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-04cc6f4f.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-18a8e969.esm.js';
import { T as TW_WC_PROJECT_ID } from '../../../../dist/wc-c5b5676b.esm.js';
import { g as getInjectedMetamaskProvider } from '../../../../dist/getInjectedMetamaskProvider-1785ca47.esm.js';
import 'eventemitter3';
import '../../../../dist/classPrivateMethodGet-71fe23d8.esm.js';
import '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import 'ethers';
import '@thirdweb-dev/sdk';
import '../../../../dist/assertWindowEthereum-7e869013.esm.js';

class MetaMaskWallet extends AbstractClientWallet {
  get walletName() {
    return "MetaMask";
  }
  constructor(options) {
    super(MetaMaskWallet.id, options);
    this.isInjected = !!getInjectedMetamaskProvider();
  }
  async getConnector() {
    if (!this.connector) {
      // if metamask is injected, use the injected connector
      // otherwise, use the wallet connect connector for using the metamask app on mobile via QR code scan

      if (this.isInjected) {
        // import the connector dynamically
        const {
          MetaMaskConnector
        } = await import('../../../connectors/metamask/dist/thirdweb-dev-wallets-evm-connectors-metamask.esm.js');
        const metamaskConnector = new MetaMaskConnector({
          chains: this.chains,
          connectorStorage: this.walletStorage,
          options: {
            shimDisconnect: true
          }
        });
        this.metamaskConnector = metamaskConnector;
        this.connector = new WagmiAdapter(metamaskConnector);
      } else {
        const {
          WalletConnectConnector
        } = await import('../../../connectors/wallet-connect/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect.esm.js');
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
_defineProperty(MetaMaskWallet, "meta", {
  name: "MetaMask",
  iconURL: "ipfs://QmZZHcw7zcXursywnLDAyY6Hfxzqop5GKgwoq8NB9jjrkN/metamask.svg",
  urls: {
    chrome: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
    android: "https://play.google.com/store/apps/details?id=io.metamask",
    ios: "https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202"
  }
});
_defineProperty(MetaMaskWallet, "id", walletIds.metamask);

export { MetaMaskWallet };
