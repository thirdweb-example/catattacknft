import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { W as WagmiAdapter } from '../../../../dist/connector-05689d68.browser.esm.js';
import { a as AbstractClientWallet } from '../../../../dist/base-402f7b12.browser.esm.js';
import { w as walletIds } from '../../../../dist/walletIds-a64268ca.browser.esm.js';
import 'eventemitter3';
import '../../../../dist/classPrivateMethodGet-ea199cc3.browser.esm.js';
import '../../../../dist/classPrivateFieldSet-a5db7c83.browser.esm.js';
import '@thirdweb-dev/chains';
import '../../abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js';
import 'ethers';
import '@thirdweb-dev/sdk';

class MagicLink extends AbstractClientWallet {
  get walletName() {
    return "Magic Link";
  }
  constructor(options) {
    super(MagicLink.id, options);
    this.options = options;
  }
  async initializeConnector() {
    // import the connector dynamically
    const {
      MagicAuthConnector
    } = await import('../../../connectors/magic/dist/thirdweb-dev-wallets-evm-connectors-magic.browser.esm.js');
    const magicConnector = new MagicAuthConnector({
      chains: this.chains,
      options: this.options
    });
    this.magicConnector = magicConnector;
    this.connector = new WagmiAdapter(magicConnector);
    return this.connector;
  }
  async getConnector() {
    if (!this.connector) {
      return await this.initializeConnector();
    }
    return this.connector;
  }
  getMagic() {
    if (!this.magicConnector) {
      throw new Error("Magic connector is not initialized");
    }
    return this.magicConnector.getMagicSDK();
  }
  async autoConnect(options) {
    await this.initializeConnector();
    await this.magicConnector?.initializeMagicSDK(options);
    const magic = this.getMagic();
    {
      const url = new URL(window.location.href);
      const isMagicRedirect = url.searchParams.get("magic_credential");
      if (isMagicRedirect) {
        try {
          this.oAuthRedirectResult = await magic.oauth.getRedirectResult(); // required to do this for social login
        } catch {
          // ignore
        }
      }
    }
    const isLoggedIn = await magic.user.isLoggedIn();
    if (isLoggedIn) {
      return super.autoConnect(options);
    }
    throw new Error("Magic user is not logged in");
  }
  async disconnect() {
    this.oAuthRedirectResult = undefined;
    const magic = this.getMagic();
    await magic.user.logout();
    return super.disconnect();
  }
  async connect(options) {
    if ("email" in options && this.options.emailLogin === false) {
      throw new Error("Email login is disabled");
    }
    if ("phoneNumber" in options && this.options.smsLogin === false) {
      throw new Error("SMS login is disabled");
    }
    return super.connect(options);
  }
}
_defineProperty(MagicLink, "meta", {
  iconURL: "ipfs://QmUMBFZGXxBpgDmZzZAHhbcCL5nYvZnVaYLTajsNjLcxMU/1-Icon_Magic_Color.svg",
  name: "Magic Link"
});
_defineProperty(MagicLink, "id", walletIds.magicLink);

export { MagicLink };
