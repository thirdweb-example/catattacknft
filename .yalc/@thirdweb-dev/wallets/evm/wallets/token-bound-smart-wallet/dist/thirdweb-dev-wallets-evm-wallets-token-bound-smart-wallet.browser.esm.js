import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { S as SmartWallet } from '../../../../dist/smart-wallet-3f085752.browser.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-91124d82.browser.esm.js';
import '../../../../dist/base-dc3975d3.browser.esm.js';
import '../../../../dist/classPrivateMethodGet-ea199cc3.browser.esm.js';
import '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import 'ethers';
import 'eventemitter3';
import '@thirdweb-dev/sdk';
import '@thirdweb-dev/chains';
import '@walletconnect/core';
import '@walletconnect/web3wallet';
import '../../../../dist/wc-c6a6a61c.browser.esm.js';
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
      } = await import('../../../connectors/token-bound-smart-wallet/dist/thirdweb-dev-wallets-evm-connectors-token-bound-smart-wallet.browser.esm.js');
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
