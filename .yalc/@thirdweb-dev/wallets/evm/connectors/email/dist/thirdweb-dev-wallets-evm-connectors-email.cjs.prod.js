'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var twConnector = require('../../../../dist/tw-connector-180d18e7.cjs.prod.js');
var embeddedWalletServiceSdk = require('@paperxyz/embedded-wallet-service-sdk');
require('eventemitter3');

const PaperChainMap = {
  1: "Ethereum",
  5: "Goerli",
  137: "Polygon",
  80001: "Mumbai"
};
class EmailWalletConnector extends twConnector.TWConnector {
  constructor(options) {
    super();
    defineProperty._defineProperty(this, "id", "email-wallet");
    defineProperty._defineProperty(this, "name", "Email Wallet");
    defineProperty._defineProperty(this, "ready", true);
    defineProperty._defineProperty(this, "user", null);
    defineProperty._defineProperty(this, "paper", void 0);
    defineProperty._defineProperty(this, "options", void 0);
    this.options = options;
  }
  initPaperSDK() {
    if (!this.paper) {
      const chainName = PaperChainMap[this.options.chain.chainId];
      if (!chainName) {
        throw new Error("Unsupported chain id: " + this.options.chain.chainId);
      }
      this.paper = new embeddedWalletServiceSdk.PaperEmbeddedWalletSdk({
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
      case embeddedWalletServiceSdk.UserStatus.LOGGED_OUT:
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
      case embeddedWalletServiceSdk.UserStatus.LOGGED_IN_WALLET_INITIALIZED:
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

exports.EmailWalletConnector = EmailWalletConnector;
exports.PaperChainMap = PaperChainMap;
