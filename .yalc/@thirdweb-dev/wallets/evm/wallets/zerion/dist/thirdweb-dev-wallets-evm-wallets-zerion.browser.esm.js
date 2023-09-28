import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { W as WagmiAdapter } from '../../../../dist/connector-05689d68.browser.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-402f7b12.browser.esm.js';
import { a as assertWindowEthereum } from '../../../../dist/assertWindowEthereum-b48c1686.browser.esm.js';
import { T as TW_WC_PROJECT_ID } from '../../../../dist/wc-c6a6a61c.browser.esm.js';
import 'eventemitter3';
import '../../../../dist/classPrivateMethodGet-ea199cc3.browser.esm.js';
import '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import 'ethers';
import '@thirdweb-dev/sdk';

class ZerionWallet extends AbstractClientWallet {
  get walletName() {
    return "Zerion Wallet";
  }
  constructor(options) {
    super(ZerionWallet.id, options);
    if (assertWindowEthereum(globalThis.window)) {
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
        } = await import('../../../connectors/zerion/dist/thirdweb-dev-wallets-evm-connectors-zerion.browser.esm.js');
        const zerionConnector = new ZerionConnector({
          chains: this.chains,
          connectorStorage: this.walletStorage,
          options: {
            shimDisconnect: true
          }
        });
        this.zerionConnector = zerionConnector;
        this.connector = new WagmiAdapter(zerionConnector);
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
_defineProperty(ZerionWallet, "id", "zerion");
_defineProperty(ZerionWallet, "meta", {
  name: "Zerion Wallet",
  iconURL: "ipfs://Qmb1LhNtMUkzbgk1V8ZiUSRXjMJGRkS5HH3R71KyRgjdBG/zerion.png",
  urls: {
    chrome: "https://zerion.io/extension",
    android: "https://link.zerion.io/901o6IN0jqb",
    ios: "https://link.zerion.io/a11o6IN0jqb"
  }
});

export { ZerionWallet };
