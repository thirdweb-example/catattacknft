import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { W as WagmiAdapter } from '../../../../dist/connector-05689d68.browser.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-a64268ca.browser.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-402f7b12.browser.esm.js';
import { Buffer } from 'buffer';
import 'eventemitter3';
import '../../../../dist/classPrivateMethodGet-ea199cc3.browser.esm.js';
import '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import 'ethers';
import '@thirdweb-dev/sdk';

{
  // Coinbase SDK uses Buffer for rendering the QRCode which requires a global polyfill
  window.Buffer = Buffer;
}
class CoinbaseWallet extends AbstractClientWallet {
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
      } = await import('../../../connectors/coinbase-wallet/dist/thirdweb-dev-wallets-evm-connectors-coinbase-wallet.browser.esm.js');
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
      this.connector = new WagmiAdapter(cbConnector);
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
_defineProperty(CoinbaseWallet, "meta", {
  iconURL: "ipfs://QmcJBHopbwfJcLqJpX2xEufSS84aLbF7bHavYhaXUcrLaH/coinbase.svg",
  name: "Coinbase Wallet",
  urls: {
    chrome: "https://chrome.google.com/webstore/detail/coinbase-wallet-extension/hnfanknocfeofbddgcijnmhnfnkdnaad",
    android: "https://play.google.com/store/apps/details?id=org.toshi",
    ios: "https://apps.apple.com/us/app/coinbase-wallet-nfts-crypto/id1278383455"
  }
});
_defineProperty(CoinbaseWallet, "id", walletIds.coinbase);

export { CoinbaseWallet };
