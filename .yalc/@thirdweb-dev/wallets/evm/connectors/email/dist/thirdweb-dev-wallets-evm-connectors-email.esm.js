import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { T as TWConnector } from '../../../../dist/tw-connector-e44dbd6f.esm.js';
import { PaperEmbeddedWalletSdk, UserStatus } from '@paperxyz/embedded-wallet-service-sdk';
import 'eventemitter3';

const PaperChainMap = {
  1: "Ethereum",
  5: "Goerli",
  137: "Polygon",
  80001: "Mumbai"
};
class EmailWalletConnector extends TWConnector {
  constructor(options) {
    super();
    _defineProperty(this, "id", "email-wallet");
    _defineProperty(this, "name", "Email Wallet");
    _defineProperty(this, "ready", true);
    _defineProperty(this, "user", null);
    _defineProperty(this, "paper", void 0);
    _defineProperty(this, "options", void 0);
    this.options = options;
  }
  initPaperSDK() {
    if (!this.paper) {
      const chainName = PaperChainMap[this.options.chain.chainId];
      if (!chainName) {
        throw new Error("Unsupported chain id: " + this.options.chain.chainId);
      }
      this.paper = new PaperEmbeddedWalletSdk({
        clientId: this.options.clientId,
        chain: chainName
      });
    }
  }
  async connect(args) {
    const email = args?.email;
    if (!email) {
      throw new Error("No Email provided");
    }
    this.initPaperSDK();
    if (!this.paper) {
      throw new Error("Paper SDK not initialized");
    }
    let user = await this.paper.getUser();
    switch (user.status) {
      case UserStatus.LOGGED_OUT:
        {
          const authResult = await this.paper.auth.loginWithPaperEmailOtp({
            email
          });
          this.user = authResult.user;
          /**
            TODO headless support
            await Paper.auth.sendPaperEmailLoginOtp({ email });
            const otp = await args?.handleOTP();
            const user = await Paper.auth.verifyPaperEmailLoginOtp({ email, otp });
           */
          break;
        }
      case UserStatus.LOGGED_IN_WALLET_INITIALIZED:
        {
          this.user = user;
          break;
        }
    }
    if (!this.user) {
      throw new Error("Error connecting User");
    }
    return this.getAddress();
  }
  async disconnect() {
    this.user = null;
  }
  async getAddress() {
    return await this.getUser().wallet.getAddress();
  }
  async isConnected() {
    try {
      const addr = await this.getAddress();
      return !!addr;
    } catch (e) {
      return false;
    }
  }
  async getProvider() {
    const signer = await this.getSigner();
    if (!signer.provider) {
      throw new Error("Provider not found");
    }
    return signer.provider;
  }
  async getSigner() {
    const signer = this.user?.wallet.getEthersJsSigner({
      rpcEndpoint: this.options.chain.rpc[0]
    });
    if (!signer) {
      throw new Error("Signer not found");
    }
    return signer;
  }
  async isAuthorized() {
    return false;
  }
  async switchChain(chainId) {
    const chainName = PaperChainMap[chainId];
    if (!chainName) {
      throw new Error("Chain not supported");
    }
    // TODO this needs to update the signer, and emit events
    // this.user?.wallet.setChain({ chain: chainName });
    // throw for now
    throw new Error("Chain switch not supported");
  }
  getUser() {
    if (!this.user) {
      throw new Error("User not found");
    }
    return this.user;
  }
}

export { EmailWalletConnector, PaperChainMap };
