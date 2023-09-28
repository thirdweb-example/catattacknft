import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { EmbeddedWalletConnector } from '../../../connectors/embedded-wallet/dist/thirdweb-dev-wallets-evm-connectors-embedded-wallet.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-18a8e969.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-04cc6f4f.esm.js';
import '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import 'ethers';
import '../../../../dist/connector-20f7cf73.esm.js';
import 'eventemitter3';
import '../../../../dist/normalizeChainId-dd5a6036.esm.js';
import '../../../../dist/embedded-wallet-3e27c9eb.esm.js';
import '@paperxyz/sdk-common-utilities';
import 'ethers/lib/utils';
import '../../../../dist/classPrivateMethodGet-71fe23d8.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import '@thirdweb-dev/sdk';

class EmbeddedWallet extends AbstractClientWallet {
  get walletName() {
    return "Embedded Wallet";
  }
  constructor(options) {
    super(EmbeddedWallet.id, {
      ...options
    });
    this.chain = options.chain;
  }
  async getConnector() {
    if (!this.connector) {
      this.connector = new EmbeddedWalletConnector({
        clientId: this.options?.clientId ?? "",
        chain: this.chain,
        chains: this.chains,
        styles: this.options?.styles
      });
    }
    return this.connector;
  }
  getConnectParams() {
    const connectParams = super.getConnectParams();
    if (!connectParams) {
      return undefined;
    }

    // do not return non-serializable params to make auto-connect work
    if (connectParams.loginType === "headless_google_oauth") {
      return {
        loginType: connectParams.loginType,
        chainId: connectParams.chainId
      };
    }
    return connectParams;
  }
  async getEmail() {
    const connector = await this.getConnector();
    return connector.getEmail();
  }
  async getEmbeddedWalletSDK() {
    const connector = await this.getConnector();
    return connector.getEmbeddedWalletSDK();
  }
}
_defineProperty(EmbeddedWallet, "id", walletIds.embeddedWallet);
_defineProperty(EmbeddedWallet, "meta", {
  name: "Embedded Wallet",
  iconURL: "ipfs://QmNx2evQa6tcQs9VTd3YaDm31ckfStvgRGKFGELahUmrbV/emailIcon.svg"
});

export { EmbeddedWallet };
