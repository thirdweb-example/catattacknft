import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { W as WagmiAdapter } from '../../../../dist/connector-05689d68.browser.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-402f7b12.browser.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-a64268ca.browser.esm.js';
import { g as getInjectedPhantomProvider } from '../../../../dist/getInjectedPhantomProvider-175b0596.browser.esm.js';
import 'eventemitter3';
import '../../../../dist/classPrivateMethodGet-ea199cc3.browser.esm.js';
import '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import 'ethers';
import '@thirdweb-dev/sdk';

class PhantomWallet extends AbstractClientWallet {
  get walletName() {
    return "Phantom";
  }
  constructor(options) {
    super(PhantomWallet.id, options);
    this.isInjected = !!getInjectedPhantomProvider();
  }
  async getConnector() {
    if (!this.connector) {
      const {
        PhantomConnector
      } = await import('../../../connectors/phantom/dist/thirdweb-dev-wallets-evm-connectors-phantom.browser.esm.js');
      const phantomConnector = new PhantomConnector({
        chains: this.chains,
        connectorStorage: this.walletStorage,
        options: {
          shimDisconnect: true
        }
      });
      this.phantomConnector = phantomConnector;
      this.connector = new WagmiAdapter(phantomConnector);
    }
    return this.connector;
  }
}
_defineProperty(PhantomWallet, "meta", {
  name: "Phantom",
  iconURL: "ipfs://bafybeibkpca5nwxpsjrtuxmz2ckb5lyc2sl2abg5f7dnvxku637vvffjti",
  urls: {
    chrome: "https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa"
    // not specifiying theme because they can't be used to connect
    // android: "https://play.google.com/store/apps/details?id=app.phantom",
    // ios: "https://apps.apple.com/us/app/phantom-crypto-wallet/id1598432977",
  }
});
_defineProperty(PhantomWallet, "id", walletIds.phantom);

export { PhantomWallet };
