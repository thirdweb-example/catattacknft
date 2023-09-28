import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-04cc6f4f.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-18a8e969.esm.js';
export { S as SafeSupportedChainsSet } from '../../../../dist/constants-8444c0b0.esm.js';
import '../../../../dist/classPrivateMethodGet-71fe23d8.esm.js';
import '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
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
      } = await import('../../../connectors/safe/dist/thirdweb-dev-wallets-evm-connectors-safe.esm.js');
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
