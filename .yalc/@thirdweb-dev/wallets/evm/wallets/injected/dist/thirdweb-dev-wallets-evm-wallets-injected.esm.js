import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { W as WagmiAdapter } from '../../../../dist/connector-20f7cf73.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-04cc6f4f.esm.js';
import 'eventemitter3';
import '../../../../dist/classPrivateMethodGet-71fe23d8.esm.js';
import '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
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
      } = await import('../../../connectors/injected/dist/thirdweb-dev-wallets-evm-connectors-injected.esm.js');
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
