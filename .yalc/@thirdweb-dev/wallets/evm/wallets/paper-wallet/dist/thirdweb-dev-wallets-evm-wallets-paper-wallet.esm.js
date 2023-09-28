import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-18a8e969.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-04cc6f4f.esm.js';
import '../../../../dist/classPrivateMethodGet-71fe23d8.esm.js';
import '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';
import 'ethers';
import 'eventemitter3';
import '@thirdweb-dev/sdk';

class PaperWallet extends AbstractClientWallet {
  get walletName() {
    return "Paper Wallet";
  }
  constructor(options) {
    super(PaperWallet.id, {
      ...options
    });
    if (options.paperClientId && options.paperClientId === "uninitialized") {
      this.paperClientId = "00000000-0000-0000-0000-000000000000";
      this.chain = options.chain;
      return;
    }
    if (options.advancedOptions && options.advancedOptions?.recoveryShareManagement === "USER_MANAGED") {
      // checks to see if we are trying to use USER_MANAGED with thirdweb client ID. If so, we throw an error.
      if (options.paperClientId && !this.isClientIdLegacyPaper(options.paperClientId) || !options.paperClientId && options.clientId && !this.isClientIdLegacyPaper(options.clientId)) {
        throw new Error('RecoveryShareManagement option "USER_MANAGED" is not supported with thirdweb client ID');
      }
    }
    if (!options.clientId && !options.paperClientId) {
      throw new Error("clientId or paperClientId is required");
    }
    if (options.paperClientId && !this.isClientIdLegacyPaper(options.paperClientId)) {
      throw new Error("paperClientId must be a legacy paper client ID");
    }
    if (options.clientId && this.isClientIdLegacyPaper(options.clientId)) {
      throw new Error("clientId must be a thirdweb client ID");
    }

    // cast is okay because we assert that either clientId or paperClientId is defined above
    this.paperClientId = options.paperClientId ?? options.clientId;
    this.chain = options.chain;
  }
  isClientIdLegacyPaper(clientId) {
    return clientId.indexOf("-") > 0 && clientId.length === 36;
  }
  async getConnector() {
    if (!this.connector) {
      const {
        PaperWalletConnector
      } = await import('../../../connectors/paper/dist/thirdweb-dev-wallets-evm-connectors-paper.esm.js');
      this.connector = new PaperWalletConnector({
        clientId: this.paperClientId,
        chain: this.chain,
        chains: this.chains,
        advancedOptions: {
          recoveryShareManagement: this.options?.advancedOptions?.recoveryShareManagement
        },
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
    if (typeof connectParams.googleLogin === "object") {
      return {
        ...connectParams,
        googleLogin: true
      };
    }
    return connectParams;
  }
  async getEmail() {
    const connector = await this.getConnector();
    return connector.getEmail();
  }
  async getPaperSDK() {
    const connector = await this.getConnector();
    return connector.getPaperSDK();
  }
}
_defineProperty(PaperWallet, "id", walletIds.paper);
_defineProperty(PaperWallet, "meta", {
  name: "Paper Wallet",
  iconURL: "ipfs://QmNrLXtPoFrh4yjZbXui39zUMozS1oetpgU8dvZhFAxfRa/paper-logo-icon.svg"
});

export { PaperWallet };
