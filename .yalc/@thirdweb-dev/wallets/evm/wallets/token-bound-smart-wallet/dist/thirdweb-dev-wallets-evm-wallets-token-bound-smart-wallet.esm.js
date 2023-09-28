import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { S as SmartWallet } from '../../../../dist/smart-wallet-942d86de.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-05184559.esm.js';
import '../../../../dist/base-657370c2.esm.js';
import '../../../../dist/classPrivateMethodGet-71fe23d8.esm.js';
import '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import 'ethers';
import 'eventemitter3';
import '@thirdweb-dev/sdk';
import '@thirdweb-dev/chains';
import '@walletconnect/core';
import '@walletconnect/web3wallet';
import '../../../../dist/wc-c5b5676b.esm.js';
import '@walletconnect/jsonrpc-utils';

/**
 *
 */
class TokenBoundSmartWallet extends SmartWallet {
  get walletName() {
    return "Token Bound Smart Wallet";
  }
  constructor(options) {
    super(options);
    _defineProperty(this, "connector", void 0);
  }
  async getConnector() {
    if (!this.connector) {
      if (this.enableConnectApp) {
        await this.wcWallet.init();
        this.setupWalletConnectEventsListeners();
      }
      const {
        TokenBoundSmartWalletConnector
      } = await import('../../../connectors/token-bound-smart-wallet/dist/thirdweb-dev-wallets-evm-connectors-token-bound-smart-wallet.esm.js');
      this.connector = new TokenBoundSmartWalletConnector(this.options);
    }
    return this.connector;
  }
}
_defineProperty(TokenBoundSmartWallet, "meta", {
  name: "Token Bound Smart Wallet",
  iconURL: "ipfs://QmeAJVqn17aDNQhjEU3kcWVZCFBrfta8LzaDGkS8Egdiyk/token-bound-smart-wallet.svg"
});
_defineProperty(TokenBoundSmartWallet, "id", walletIds.tokenBoundSmartWallet);

export { TokenBoundSmartWallet };
