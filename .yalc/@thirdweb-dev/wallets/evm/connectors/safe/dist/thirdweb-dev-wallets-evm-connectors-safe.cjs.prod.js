'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var connector = require('../../../../dist/connector-1b2fa06d.cjs.prod.js');
var ethers = require('ethers');
var safeEthersAdapters = require('@safe-global/safe-ethers-adapters');
var safeCoreSdk = require('@safe-global/safe-core-sdk');
var safeEthersLib = require('@safe-global/safe-ethers-lib');
var constants = require('../../../../dist/constants-146b4500.cjs.prod.js');
require('eventemitter3');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var safeCoreSdk__default = /*#__PURE__*/_interopDefault(safeCoreSdk);
var safeEthersLib__default = /*#__PURE__*/_interopDefault(safeEthersLib);

const CHAIN_ID_TO_SIGN_MESSAGE_LIB_ADDRESS = {
  // mainnet
  1: "0xA65387F16B013cf2Af4605Ad8aA5ec25a2cbA3a2",
  // polygon
  137: "0xA65387F16B013cf2Af4605Ad8aA5ec25a2cbA3a2",
  // bsc
  56: "0xA65387F16B013cf2Af4605Ad8aA5ec25a2cbA3a2",
  // arbitrum
  42161: "0xA65387F16B013cf2Af4605Ad8aA5ec25a2cbA3a2",
  // aurora
  1313161554: "0xA65387F16B013cf2Af4605Ad8aA5ec25a2cbA3a2",
  // avalanche
  43114: "0x98FFBBF51bb33A056B08ddf711f289936AafF717",
  // optimism
  10: "0x98FFBBF51bb33A056B08ddf711f289936AafF717",
  // base goerli
  84531: "0x98FFBBF51bb33A056B08ddf711f289936AafF717",
  // celo
  42220: "0x98FFBBF51bb33A056B08ddf711f289936AafF717",
  // goerli
  5: "0x58FCe385Ed16beB4BCE49c8DF34c7d6975807520",
  // gnosis chain
  100: "0x58FCe385Ed16beB4BCE49c8DF34c7d6975807520"
};
const SIGN_MESSAGE_LIB_ABI = [{
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "bytes32",
    name: "msgHash",
    type: "bytes32"
  }],
  name: "SignMsg",
  type: "event"
}, {
  inputs: [{
    internalType: "bytes",
    name: "message",
    type: "bytes"
  }],
  name: "getMessageHash",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "bytes",
    name: "_data",
    type: "bytes"
  }],
  name: "signMessage",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}];
const __IS_SERVER__ = typeof window === "undefined";
class SafeConnector extends connector.Connector {
  // config

  // private options: SafeOptions;

  constructor() {
    super();
    defineProperty._defineProperty(this, "supportedChains", SafeConnector.supportedChains);
    defineProperty._defineProperty(this, "id", "safe-wallet");
    defineProperty._defineProperty(this, "ready", !__IS_SERVER__);
    defineProperty._defineProperty(this, "name", "Safe Wallet");
    if (!__IS_SERVER__) {
      this.ready = true;
    }
  }
  async connect(args) {
    if (!(args.chain.chainId in constants.CHAIN_ID_TO_GNOSIS_SERVER_URL)) {
      throw new Error("Chain not supported by Safe");
    }
    this.safeSigner = await this.createSafeSigner(args);
    return await this.getAddress();
  }
  async createSafeSigner(params) {
    this.personalWallet = params.personalWallet;
    const signer = await params.personalWallet.getSigner();
    const safeAddress = params.safeAddress;
    const safeChainId = params.chain.chainId;
    if (!signer) {
      throw new Error("cannot create Gnosis Safe signer without a personal signer");
    }
    const signerChainId = await signer.getChainId();
    if (signerChainId !== safeChainId) {
      throw new Error("chainId of personal signer has to match safe chainId");
    }
    if (!safeAddress) {
      throw new Error("safeAddress is required");
    }
    if (!safeChainId) {
      throw new Error("safeChainId is required");
    }
    const serverUrl = constants.CHAIN_ID_TO_GNOSIS_SERVER_URL[safeChainId];
    const signMessageLibAddress = CHAIN_ID_TO_SIGN_MESSAGE_LIB_ADDRESS[safeChainId];
    if (!serverUrl || !signMessageLibAddress) {
      throw new Error("Chain not supported");
    }
    const ethAdapter = new safeEthersLib__default["default"]({
      ethers: ethers.ethers,
      signerOrProvider: signer
    });
    const safe = await safeCoreSdk__default["default"].create({
      ethAdapter: ethAdapter,
      safeAddress
    });
    const service = new safeEthersAdapters.SafeService(serverUrl);
    const safeSigner = new safeEthersAdapters.SafeEthersSigner(safe, service, signer.provider);
    safeSigner.signMessage = async message => {
      // Encode the request to the signMessage function of the SafeMessageLib
      const contract = new ethers.ethers.BaseContract(signMessageLibAddress, SIGN_MESSAGE_LIB_ABI);
      const data = contract.interface.encodeFunctionData("signMessage", [ethers.ethers.utils.hashMessage(message)]);
      const to = signMessageLibAddress;
      const value = "0";
      const operation = 1; // 1 indicates a delegatecall
      const safeTxGas = 50000;
      const baseGas = 50000;
      const gasPrice = 0;
      const gasToken = ethers.ethers.constants.AddressZero;
      const refundReceiver = ethers.ethers.constants.AddressZero;

      // Create the safe transaction to approve the signature
      const safeTx = await safe.createTransaction({
        safeTransactionData: {
          to,
          value,
          operation,
          data,
          baseGas,
          safeTxGas,
          gasPrice,
          gasToken,
          refundReceiver
        }
      });

      // Sign and propose the safe transaction
      const safeTxHash = await safe.getTransactionHash(safeTx);
      const safeSignature = await safe.signTransactionHash(safeTxHash);
      await service.proposeTx(safe.getAddress(), safeTxHash, safeTx, safeSignature);

      // Poll while we wait for the safe transaction to reach minimum confirmations
      while (true) {
        try {
          const txDetails = await service.getSafeTxDetails(safeTxHash);
          if (txDetails.transactionHash) {
            await signer.provider?.waitForTransaction(txDetails.transactionHash);
            break;
          }
        } catch (e) {}
        await new Promise(resolve => setTimeout(resolve, 5000));
      }

      // For on-chain signatures, safe expects just "0x" as the signature
      return "0x";
    };

    // set the personal signer as "previous connector" so that we can re-connect to it later when disconnecting
    this.previousConnector = params.personalWallet;
    return safeSigner;
  }
  async disconnect() {
    this.safeSigner = undefined;
    this.previousConnector = undefined;
    return undefined;
  }
  async getAddress() {
    const signer = await this.getSigner();
    return await signer.getAddress();
  }
  async getChainId() {
    return (await this.getSigner()).getChainId();
  }
  async getProvider() {
    const provider = (await this.getSigner()).provider;
    if (!provider) {
      throw new Error("No provider available");
    }
    return provider;
  }
  async getSigner() {
    if (!this.safeSigner) {
      throw new Error("not connected - please call connect() first");
    }
    return this.safeSigner;
  }
  async isConnected() {
    try {
      const account = await this.getAddress();
      return !!account;
    } catch (e) {
      return false;
    }
  }
  onAccountsChanged(accounts) {
    if (accounts.length === 0) {
      this.emit("disconnect");
    } else {
      this.emit("change", {
        account: ethers.ethers.utils.getAddress(accounts[0])
      });
    }
  }
  onDisconnect() {
    this.emit("disconnect");
  }
  switchChain() {
    throw new Error("Safe connector does not support switching chains");
  }
  updateChains() {}
  async setupListeners() {}
}
defineProperty._defineProperty(SafeConnector, "supportedChains", /* @__PURE__ */Object.keys(constants.CHAIN_ID_TO_GNOSIS_SERVER_URL));

exports.SafeConnector = SafeConnector;
