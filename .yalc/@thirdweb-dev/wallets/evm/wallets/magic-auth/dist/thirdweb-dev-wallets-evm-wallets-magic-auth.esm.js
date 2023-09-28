import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { W as WagmiAdapter } from '../../../../dist/tw-connector-d83550c7.esm.js';
import { A as AbstractBrowserWallet } from '../../../../dist/base-7172cd22.esm.js';
import 'eventemitter3';
import '../../../../dist/classPrivateMethodGet-fb5087d9.esm.js';
import '../../../../dist/checkPrivateRedeclaration-a6ec2e61.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
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
      } = await import('../../../connectors/magic/dist/thirdweb-dev-wallets-evm-connectors-magic.esm.js');
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
