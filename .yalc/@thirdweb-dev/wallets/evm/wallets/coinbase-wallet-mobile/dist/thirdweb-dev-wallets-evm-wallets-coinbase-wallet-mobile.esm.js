import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { W as WagmiAdapter } from '../../../../dist/tw-connector-f0235fbf.esm.js';
import { AbstractBrowserWallet } from '../../base/dist/thirdweb-dev-wallets-evm-wallets-base.esm.js';
import 'eventemitter3';
import '../../../../dist/classPrivateMethodGet-fb5087d9.esm.js';
import '../../../../dist/checkPrivateRedeclaration-a6ec2e61.esm.js';
import '../../../../dist/abstract-bc95d6cf.esm.js';
import 'ethers';

class CoinbaseWalletMobile extends AbstractBrowserWallet {
  get walletName() {
    return "Coinbase Wallet Mobile";
  }
  constructor(options) {
    super(CoinbaseWalletMobile.id, options);
    _defineProperty(this, "connector", void 0);
    _defineProperty(this, "coinbaseConnector", void 0);
  }
  async getConnector() {
    if (!this.connector) {
      // import the connector dynamically
      const {
        CoinbaseMobileWalletConnector
      } = await import('../../../connectors/coinbase-wallet-mobile/dist/thirdweb-dev-wallets-evm-connectors-coinbase-wallet-mobile.esm.js');
      const cbConnector = new CoinbaseMobileWalletConnector({
        chains: this.chains,
        options: {
          ...this.options
        }
      });
      cbConnector.on("connect", () => {
        console.log("Coinbase Wallet connected");
      });
      this.coinbaseConnector = cbConnector;
      this.connector = new WagmiAdapter(cbConnector);
    }
    return this.connector;
  }
}
_defineProperty(CoinbaseWalletMobile, "id", "coinbaseWalletMobile");

export { CoinbaseWalletMobile };
