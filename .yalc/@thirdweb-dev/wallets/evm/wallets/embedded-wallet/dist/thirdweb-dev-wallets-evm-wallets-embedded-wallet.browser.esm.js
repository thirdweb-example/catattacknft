import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { EmbeddedWalletConnector } from '../../../connectors/embedded-wallet/dist/thirdweb-dev-wallets-evm-connectors-embedded-wallet.browser.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-a64268ca.browser.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-402f7b12.browser.esm.js';
import '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import 'ethers';
import '../../../../dist/connector-05689d68.browser.esm.js';
import 'eventemitter3';
import '../../../../dist/normalizeChainId-e4cc0175.browser.esm.js';
import '../../../../dist/embedded-wallet-e4397148.browser.esm.js';
import '@paperxyz/sdk-common-utilities';
import 'ethers/lib/utils';
import '../../../../dist/classPrivateMethodGet-ea199cc3.browser.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
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
