import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { W as WagmiAdapter } from '../../../../dist/tw-connector-443c384d.browser.esm.js';
import { A as AbstractBrowserWallet } from '../../../../dist/base-c926e982.browser.esm.js';
import 'eventemitter3';
import '../../../../dist/classPrivateMethodGet-9d546189.browser.esm.js';
import '../../../../dist/checkPrivateRedeclaration-3aaaa21d.browser.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import 'ethers';

class MagicAuthWallet extends AbstractBrowserWallet {
  get walletName() {
    return "MagicAuth";
  }
  constructor(options) {
    super(MagicAuthWallet.id, options);
    _defineProperty(this, "connector", void 0);
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        MagicAuthConnector
      } = await import('../../../connectors/magic/dist/thirdweb-dev-wallets-evm-connectors-magic.browser.esm.js');
      this.connector = new WagmiAdapter(new MagicAuthConnector({
        chains: this.chains,
        options: this.options
      }));
    }
    return this.connector;
  }
}
_defineProperty(MagicAuthWallet, "id", "magicAuth");

export { MagicAuthWallet };
