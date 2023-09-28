import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { W as WagmiAdapter } from '../../../../dist/connector-05689d68.browser.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-402f7b12.browser.esm.js';
import 'eventemitter3';
import '../../../../dist/classPrivateMethodGet-ea199cc3.browser.esm.js';
import '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import 'ethers';
import '@thirdweb-dev/sdk';

class InjectedWallet extends AbstractClientWallet {
  get walletName() {
    return "Injected Wallet";
  }
  constructor(options) {
    super(InjectedWallet.id, options);
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        InjectedConnector
      } = await import('../../../connectors/injected/dist/thirdweb-dev-wallets-evm-connectors-injected.browser.esm.js');
      this.connector = new WagmiAdapter(new InjectedConnector({
        chains: this.chains,
        connectorStorage: this.walletStorage,
        options: {
          shimDisconnect: true
        }
      }));
    }
    return this.connector;
  }
}
_defineProperty(InjectedWallet, "id", "injected");

export { InjectedWallet };
