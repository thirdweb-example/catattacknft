import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-402f7b12.browser.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-a64268ca.browser.esm.js';
export { S as SafeSupportedChainsSet } from '../../../../dist/constants-9cc70a7d.browser.esm.js';
import '../../../../dist/classPrivateMethodGet-ea199cc3.browser.esm.js';
import '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import 'ethers';
import 'eventemitter3';
import '@thirdweb-dev/sdk';

// re-export the connection args for convenience

class SafeWallet extends AbstractClientWallet {
  get walletName() {
    return "Safe Wallet";
  }
  constructor(options) {
    super(SafeWallet.id, {
      ...options
    });
  }
  async getConnector() {
    if (!this.connector) {
      const {
        SafeConnector
      } = await import('../../../connectors/safe/dist/thirdweb-dev-wallets-evm-connectors-safe.browser.esm.js');
      this.connector = new SafeConnector();
    }
    return this.connector;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async updateChains(chains) {
    // no op
  }
  getPersonalWallet() {
    return this.connector?.personalWallet;
  }
  autoConnect(params) {
    return this.connect(params);
  }
}
_defineProperty(SafeWallet, "meta", {
  name: "Safe",
  iconURL: "ipfs://QmbbyxDDmmLQh8DzzeUR6X6B75bESsNUFmbdvS3ZsQ2pN1/SafeToken.svg"
});
_defineProperty(SafeWallet, "id", walletIds.safe);

export { SafeWallet };
