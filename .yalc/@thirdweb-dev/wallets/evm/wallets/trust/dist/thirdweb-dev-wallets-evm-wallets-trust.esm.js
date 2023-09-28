import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { W as WagmiAdapter } from '../../../../dist/connector-20f7cf73.esm.js';
import { a as assertWindowEthereum } from '../../../../dist/assertWindowEthereum-7e869013.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-04cc6f4f.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-18a8e969.esm.js';
import { T as TW_WC_PROJECT_ID } from '../../../../dist/wc-c5b5676b.esm.js';
import 'eventemitter3';
import '../../../../dist/classPrivateMethodGet-71fe23d8.esm.js';
import '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import 'ethers';
import '@thirdweb-dev/sdk';

class TrustWallet extends AbstractClientWallet {
  get walletName() {
    return "Trust Wallet";
  }
  constructor(options) {
    super(TrustWallet.id, options);
    if (assertWindowEthereum(globalThis.window)) {
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
        } = await import('../../../connectors/trust/dist/thirdweb-dev-wallets-evm-connectors-trust.esm.js');
        const trustConnector = new TrustConnector({
          chains: this.chains,
          connectorStorage: this.walletStorage,
          options: {
            shimDisconnect: true
          }
        });
        this.trustConnector = trustConnector;
        this.connector = new WagmiAdapter(trustConnector);
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
_defineProperty(TrustWallet, "meta", {
  name: "Trust Wallet",
  iconURL: "ipfs://QmNigQbXk7wKZwDcgN38Znj1ZZQ3JEG3DD6fUKLBU8SUTP/trust%20wallet.svg",
  urls: {
    chrome: "https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph",
    android: "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",
    ios: "https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409"
  }
});
_defineProperty(TrustWallet, "id", walletIds.trust);

export { TrustWallet };
