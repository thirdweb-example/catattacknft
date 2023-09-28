import { _ as _classPrivateMethodInitSpec, a as _classPrivateMethodGet } from './classPrivateMethodGet-71fe23d8.esm.js';
import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from './classPrivateFieldSet-e25e1cec.esm.js';
import { _ as _defineProperty } from './defineProperty-e24c82ea.esm.js';
import { a as AbstractClientWallet } from './base-04cc6f4f.esm.js';
import { w as walletIds } from './walletIds-18a8e969.esm.js';
import { Core } from '@walletconnect/core';
import { Web3Wallet } from '@walletconnect/web3wallet';
import { utils } from 'ethers';
import EventEmitter from 'eventemitter3';
import { T as TW_WC_PROJECT_ID, W as WC_RELAY_URL, E as EIP155_SIGNING_METHODS } from './wc-c5b5676b.esm.js';
import { formatJsonRpcResult } from '@walletconnect/jsonrpc-utils';
import { isContractDeployed, ThirdwebSDK } from '@thirdweb-dev/sdk';

// connect dapp support through wcv2 protocol

class WalletConnectHandler extends EventEmitter {}

var _core = /*#__PURE__*/new WeakMap();
var _wcWallet$1 = /*#__PURE__*/new WeakMap();
var _session = /*#__PURE__*/new WeakMap();
var _wcMetadata = /*#__PURE__*/new WeakMap();
var _activeProposal = /*#__PURE__*/new WeakMap();
var _activeRequestEvent = /*#__PURE__*/new WeakMap();
var _setupWalletConnectEventsListeners$1 = /*#__PURE__*/new WeakSet();
var _getSignParamsMessage = /*#__PURE__*/new WeakSet();
class WalletConnectV2Handler extends WalletConnectHandler {
  constructor(options) {
    super();
    /**
     * Gets message from various signing request methods by filtering out
     * a value that is not an address (thus is a message).
     * If it is a hex string, it gets converted to utf8 string
     */
    _classPrivateMethodInitSpec(this, _getSignParamsMessage);
    _classPrivateMethodInitSpec(this, _setupWalletConnectEventsListeners$1);
    _classPrivateFieldInitSpec(this, _core, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _wcWallet$1, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _session, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _wcMetadata, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _activeProposal, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _activeRequestEvent, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldSet(this, _wcMetadata, options?.walletConnectWalletMetadata || {
      name: "Thirdweb Smart Wallet",
      description: "Thirdweb Smart Wallet",
      url: "https://thirdweb.com",
      icons: ["https://thirdweb.com/favicon.ico"]
    });
    _classPrivateFieldSet(this, _core, new Core({
      projectId: options?.walletConenctV2ProjectId || TW_WC_PROJECT_ID,
      relayUrl: options?.walletConnectV2RelayUrl || WC_RELAY_URL
    }));
  }
  async init() {
    _classPrivateFieldSet(this, _wcWallet$1, await Web3Wallet.init({
      core: _classPrivateFieldGet(this, _core),
      metadata: _classPrivateFieldGet(this, _wcMetadata)
    }));
    const sessions = _classPrivateFieldGet(this, _wcWallet$1).getActiveSessions();
    const keys = Object.keys(sessions);
    if (keys.length > 0) {
      _classPrivateFieldSet(this, _session, sessions[keys[0]]);
    }
    _classPrivateMethodGet(this, _setupWalletConnectEventsListeners$1, _setupWalletConnectEventsListeners2$1).call(this);
  }
  async connectApp(wcUri) {
    if (!_classPrivateFieldGet(this, _wcWallet$1)) {
      throw new Error("Please, init the wallet before connecting an app.");
    }
    await _classPrivateFieldGet(this, _wcWallet$1).core.pairing.pair({
      uri: wcUri
    });
  }
  async approveSession(wallet) {
    if (!_classPrivateFieldGet(this, _wcWallet$1)) {
      throw new Error("Please, init the wallet before making session requests.");
    }
    if (!_classPrivateFieldGet(this, _activeProposal)) {
      throw new Error("Please, pass a valid proposal.");
    }
    const account = await wallet.getAddress();
    const {
      id,
      params
    } = _classPrivateFieldGet(this, _activeProposal);
    const {
      requiredNamespaces,
      relays
    } = params;
    const namespaces = {};
    Object.keys(requiredNamespaces).forEach(key => {
      const accounts = [];
      requiredNamespaces[key].chains?.map(chain => {
        accounts.push(`${chain}:${account}`);
      });
      namespaces[key] = {
        accounts,
        methods: requiredNamespaces[key].methods,
        events: requiredNamespaces[key].events
      };
    });
    _classPrivateFieldSet(this, _session, await _classPrivateFieldGet(this, _wcWallet$1).approveSession({
      id,
      relayProtocol: relays[0].protocol,
      namespaces
    }));
    this.emit("session_approved");
  }
  async rejectSession() {
    if (!_classPrivateFieldGet(this, _wcWallet$1)) {
      throw new Error("Please, init the wallet before making session requests.");
    }
    if (!_classPrivateFieldGet(this, _activeProposal)) {
      throw new Error("Please, pass a valid proposal.");
    }
    const {
      id
    } = _classPrivateFieldGet(this, _activeProposal);
    await _classPrivateFieldGet(this, _wcWallet$1).rejectSession({
      id,
      reason: {
        message: "User rejected methods.",
        code: 5002
      }
    });
  }
  async approveEIP155Request(wallet) {
    if (!_classPrivateFieldGet(this, _activeRequestEvent)) {
      return;
    }
    const {
      topic,
      params,
      id
    } = _classPrivateFieldGet(this, _activeRequestEvent);
    const {
      request
    } = params;
    let response;
    switch (request.method) {
      case EIP155_SIGNING_METHODS.PERSONAL_SIGN:
      case EIP155_SIGNING_METHODS.ETH_SIGN:
        const message = _classPrivateMethodGet(this, _getSignParamsMessage, _getSignParamsMessage2).call(this, request.params);
        const signedMessage = await wallet.signMessage(message);
        response = formatJsonRpcResult(id, signedMessage);
        break;
      // case EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA:
      // case EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V3:
      // case EIP155_SIGNING_METHODS.ETH_SIGN_TYPED_DATA_V4:
      //   const {
      //     domain,
      //     types,
      //     message: data,
      //   } = getSignTypedDataParamsData(request.params);
      //   // https://github.com/ethers-io/ethers.js/issues/687#issuecomment-714069471
      //   delete types.EIP712Domain;
      //   const signedData = await wallet._signTypedData(domain, types, data);
      //   return formatJsonRpcResult(id, signedData);
      case EIP155_SIGNING_METHODS.ETH_SEND_TRANSACTION:
        const signer = await wallet.getSigner();
        const sendTransaction = request.params[0];
        const tx = await signer.sendTransaction(sendTransaction);
        const {
          transactionHash
        } = await tx.wait();
        response = formatJsonRpcResult(id, transactionHash);
        break;
      case EIP155_SIGNING_METHODS.ETH_SIGN_TRANSACTION:
        const signerSign = await wallet.getSigner();
        const signTransaction = request.params[0];
        const signature = await signerSign.signTransaction(signTransaction);
        response = formatJsonRpcResult(id, signature);
      default:
        const error = {
          id,
          jsonrpc: "2.0",
          error: {
            message: "Invalid event.",
            code: 1002
          }
        };
        return _classPrivateFieldGet(this, _wcWallet$1)?.respondSessionRequest({
          topic,
          response: error
        });
    }
    return _classPrivateFieldGet(this, _wcWallet$1)?.respondSessionRequest({
      topic,
      response
    });
  }
  async rejectEIP155Request() {
    if (!_classPrivateFieldGet(this, _activeRequestEvent)) {
      return;
    }
    const {
      topic,
      id
    } = _classPrivateFieldGet(this, _activeRequestEvent);
    const response = {
      id,
      jsonrpc: "2.0",
      error: {
        message: "User rejected methods.",
        code: 5002
      }
    };
    return _classPrivateFieldGet(this, _wcWallet$1)?.respondSessionRequest({
      topic,
      response
    });
  }
  getActiveSessions() {
    if (!_classPrivateFieldGet(this, _wcWallet$1)) {
      throw new Error("Please, init the wallet before getting sessions.");
    }
    const sessions = _classPrivateFieldGet(this, _wcWallet$1).getActiveSessions();
    const sessionKeys = Object.keys(sessions);
    if (!sessions || sessionKeys.length === 0) {
      return [];
    }
    const thisSessions = [];
    for (const sessionKey of sessionKeys) {
      const topic = sessions[sessionKey].topic;
      const peerMeta = sessions[sessionKey].peer.metadata;
      thisSessions.push({
        topic,
        peer: {
          metadata: peerMeta
        }
      });
    }
    return thisSessions;
  }
  disconnectSession() {
    if (!_classPrivateFieldGet(this, _wcWallet$1)) {
      throw new Error("Please, init the wallet before disconnecting sessions.");
    }
    if (!_classPrivateFieldGet(this, _session)) {
      return Promise.resolve();
    }
    const params = {
      topic: _classPrivateFieldGet(this, _session).topic,
      reason: {
        message: "User disconnected.",
        code: 6000
      }
    };
    return _classPrivateFieldGet(this, _wcWallet$1)?.disconnectSession(params);
  }
}
function _setupWalletConnectEventsListeners2$1() {
  if (!_classPrivateFieldGet(this, _wcWallet$1)) {
    throw new Error("Please, init the wallet before making session requests.");
  }
  _classPrivateFieldGet(this, _wcWallet$1).on("session_proposal", proposal => {
    _classPrivateFieldSet(this, _activeProposal, proposal);
    this.emit("session_proposal", {
      proposer: {
        metadata: proposal.params.proposer.metadata
      }
    });
  });
  _classPrivateFieldGet(this, _wcWallet$1).on("session_delete", session => {
    _classPrivateFieldSet(this, _session, undefined);
    _classPrivateFieldSet(this, _activeProposal, undefined);
    this.emit("session_delete", {
      topic: session.topic
    });
  });
  _classPrivateFieldGet(this, _wcWallet$1).on("session_request", async requestEvent => {
    if (!_classPrivateFieldGet(this, _session)) {
      return;
    }
    const {
      params: requestParams
    } = requestEvent;
    const {
      request
    } = requestParams;
    const {
      params
    } = request;
    switch (request.method) {
      case EIP155_SIGNING_METHODS.ETH_SIGN:
      case EIP155_SIGNING_METHODS.PERSONAL_SIGN:
        _classPrivateFieldSet(this, _activeRequestEvent, requestEvent);
        const message = params[0];
        const decodedMessage = new TextDecoder().decode(utils.arrayify(message));
        const paramsCopy = [...params];
        paramsCopy[0] = decodedMessage;
        this.emit("session_request", {
          topic: _classPrivateFieldGet(this, _session).topic,
          params: paramsCopy,
          peer: {
            metadata: _classPrivateFieldGet(this, _session).peer.metadata
          },
          method: request.method
        });
        return;
      case EIP155_SIGNING_METHODS.ETH_SEND_TRANSACTION:
      case EIP155_SIGNING_METHODS.ETH_SIGN_TRANSACTION:
        _classPrivateFieldSet(this, _activeRequestEvent, requestEvent);
        this.emit("session_request", {
          topic: _classPrivateFieldGet(this, _session).topic,
          params: requestEvent.params.request.params,
          peer: {
            metadata: _classPrivateFieldGet(this, _session).peer.metadata
          },
          method: request.method
        });
        return;
      default:
        throw new Error(`WCV2.Method not supported: ${request.method}`);
    }
  });
}
function _getSignParamsMessage2(params) {
  const message = params.filter(p => !utils.isAddress(p))[0];
  if (utils.isHexString(message)) {
    return utils.toUtf8String(message);
  }
  return message;
}

class NoOpWalletConnectHandler extends WalletConnectHandler {
  init() {
    return Promise.resolve();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  connectApp(uri) {
    return Promise.resolve();
  }
  approveSession(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  wallet) {
    return Promise.resolve();
  }
  rejectSession() {
    return Promise.resolve();
  }
  approveEIP155Request(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  wallet) {
    return Promise.resolve();
  }
  rejectEIP155Request() {
    return Promise.resolve();
  }
  getActiveSessions() {
    return [];
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  disconnectSession() {
    return Promise.resolve();
  }
}

const sdkCache = new Map();
function getSDK(chain) {
  const cached = sdkCache.get(chain);
  if (cached) {
    return cached;
  }
  const sdk = new ThirdwebSDK(chain);
  sdkCache.set(chain, sdk);
  return sdk;
}

/**
 * Get all the signers added to the given smart wallet (excluding owner)
 * @param chain
 * @param factoryAddress
 * @param smartWalletAddress
 * @returns
 */
async function getAllSigners(chain, factoryAddress, smartWalletAddress) {
  const readOnlySDK = getSDK(chain);
  const factoryContract = await readOnlySDK.getContract(factoryAddress);
  const signers = await factoryContract.call("getSignersOfAccount", [smartWalletAddress]);
  return signers;
}

/**
 * Get all the smart wallets associated with a personal wallet address
 * @param chain
 * @param factoryAddress
 * @param personalWalletAddress
 * @returns
 */
async function getAllSmartWallets(chain, factoryAddress, personalWalletAddress) {
  const readOnlySDK = getSDK(chain);
  const factoryContract = await readOnlySDK.getContract(factoryAddress);
  const ownedAccount = await getSmartWalletAddress(chain, factoryAddress, personalWalletAddress);
  const accessibleAccounts = await factoryContract.call("getAccountsOfSigner", [personalWalletAddress]);
  return {
    owned: ownedAccount,
    hasSignerRole: accessibleAccounts
  };
}

/**
 * Check if a smart wallet is deployed for a given personal wallet address
 * @param chain
 * @param factoryAddress
 * @param personalWalletAddress
 * @returns
 */
async function isSmartWalletDeployed(chain, factoryAddress, personalWalletAddress) {
  const readOnlySDK = getSDK(chain);
  const factoryContract = await readOnlySDK.getContract(factoryAddress);
  const accountAddress = await factoryContract.call("getAddress", [personalWalletAddress]);
  const isDeployed = await isContractDeployed(accountAddress, readOnlySDK.getProvider());
  return isDeployed;
}

/**
 * Get the associated smart wallet address for a given personal wallet address
 * @param chain
 * @param factoryAddress
 * @param personalWalletAddress
 * @returns
 */
async function getSmartWalletAddress(chain, factoryAddress, personalWalletAddress) {
  const readOnlySDK = getSDK(chain);
  const factoryContract = await readOnlySDK.getContract(factoryAddress);
  const accountAddress = await factoryContract.call("getAddress", [personalWalletAddress]);
  return accountAddress;
}

var _wcWallet = /*#__PURE__*/new WeakMap();
var _setupWalletConnectEventsListeners = /*#__PURE__*/new WeakSet();
class SmartWallet extends AbstractClientWallet {
  get walletName() {
    return "Smart Wallet";
  }
  constructor(options) {
    super(SmartWallet.id, {
      ...options
    });
    _classPrivateMethodInitSpec(this, _setupWalletConnectEventsListeners);
    _defineProperty(this, "enableConnectApp", false);
    _classPrivateFieldInitSpec(this, _wcWallet, {
      writable: true,
      value: void 0
    });
    this.enableConnectApp = options?.enableConnectApp || false;
    _classPrivateFieldSet(this, _wcWallet, this.enableConnectApp ? new WalletConnectV2Handler({
      walletConnectWalletMetadata: options?.walletConnectWalletMetadata,
      walletConenctV2ProjectId: options?.walletConenctV2ProjectId,
      walletConnectV2RelayUrl: options?.walletConnectV2RelayUrl
    }) : new NoOpWalletConnectHandler());
  }
  async getConnector() {
    if (!this.connector) {
      if (this.enableConnectApp) {
        await _classPrivateFieldGet(this, _wcWallet).init();
        _classPrivateMethodGet(this, _setupWalletConnectEventsListeners, _setupWalletConnectEventsListeners2).call(this);
      }
      const {
        SmartWalletConnector
      } = await import('../evm/connectors/smart-wallet/dist/thirdweb-dev-wallets-evm-connectors-smart-wallet.esm.js');
      this.connector = new SmartWalletConnector(this.options);
    }
    return this.connector;
  }
  getPersonalWallet() {
    return this.connector?.personalWallet;
  }

  /**
   * Check whether the connected signer can execute a given transaction using the smart wallet.
   * @param transaction the transaction to execute using the smart wallet.
   * @returns whether the connected signer can execute the transaction using the smart wallet.
   */
  async hasPermissionToExecute(transaction) {
    const connector = await this.getConnector();
    return connector.hasPermissionToExecute(transaction);
  }

  /**
   * Execute a single transaction
   * @param transactions
   * @returns the transaction receipt
   */
  async execute(transaction) {
    const connector = await this.getConnector();
    return connector.execute(transaction);
  }

  /**
   * Execute multiple transactions in a single batch
   * @param transactions
   * @returns the transaction receipt
   */
  async executeBatch(transactions) {
    const connector = await this.getConnector();
    return connector.executeBatch(transactions);
  }

  /**
   * Manually deploy the smart wallet contract. If already deployed this will throw an error.
   * Note that this is not necessary as the smart wallet will be deployed automatically on the first transaction the user makes.
   * @returns the transaction receipt
   */
  async deploy() {
    const connector = await this.getConnector();
    return connector.deploy();
  }

  /**
   * Check if the smart wallet contract is deployed
   * @returns true if the smart wallet contract is deployed
   */
  async isDeployed() {
    const connector = await this.getConnector();
    return connector.isDeployed();
  }

  /**
   * Get the underlying account contract of the smart wallet.
   * @returns the account contract of the smart wallet.
   */
  async getAccountContract() {
    const connector = await this.getConnector();
    return connector.getAccountContract();
  }

  /**
   * Get the underlying account factory contract of the smart wallet.
   * @returns the account factory contract.
   */
  async getFactoryContract() {
    const connector = await this.getConnector();
    return connector.getFactoryContract();
  }
  autoConnect(params) {
    return this.connect(params);
  }

  // wcv2
  async connectApp(uri) {
    if (!this.enableConnectApp) {
      throw new Error("enableConnectApp is set to false in this wallet config");
    }
    _classPrivateFieldGet(this, _wcWallet)?.connectApp(uri);
  }
  async approveSession() {
    await _classPrivateFieldGet(this, _wcWallet).approveSession(this);
    this.emit("message", {
      type: "session_approved"
    });
  }
  rejectSession() {
    return _classPrivateFieldGet(this, _wcWallet).rejectSession();
  }
  approveRequest() {
    return _classPrivateFieldGet(this, _wcWallet).approveEIP155Request(this);
  }
  rejectRequest() {
    return _classPrivateFieldGet(this, _wcWallet).rejectEIP155Request();
  }
  getActiveSessions() {
    if (!_classPrivateFieldGet(this, _wcWallet)) {
      throw new Error("Please, init the wallet before making session requests.");
    }
    return _classPrivateFieldGet(this, _wcWallet).getActiveSessions();
  }
  disconnectSession() {
    return _classPrivateFieldGet(this, _wcWallet)?.disconnectSession();
  }
  isWCReceiverEnabled() {
    return this.enableConnectApp;
  }
}
function _setupWalletConnectEventsListeners2() {
  if (!_classPrivateFieldGet(this, _wcWallet)) {
    throw new Error("Please, init the wallet before making session requests.");
  }
  _classPrivateFieldGet(this, _wcWallet).on("session_proposal", proposal => {
    this.emit("message", {
      type: "session_proposal",
      data: proposal
    });
  });
  _classPrivateFieldGet(this, _wcWallet).on("session_delete", () => {
    this.emit("message", {
      type: "session_delete"
    });
  });
  _classPrivateFieldGet(this, _wcWallet).on("switch_chain", request => {
    const chainId = request.params[0].chainId;
    this.emit("message", {
      type: "switch_chain",
      data: {
        chainId
      }
    });
    _classPrivateFieldGet(this, _wcWallet).disconnectSession();
  });
  _classPrivateFieldGet(this, _wcWallet).on("session_request", request => {
    this.emit("message", {
      type: "session_request",
      data: request
    });
  });
}
_defineProperty(SmartWallet, "meta", {
  name: "Smart Wallet",
  iconURL: "ipfs://QmeAJVqn17aDNQhjEU3kcWVZCFBrfta8LzaDGkS8Egdiyk/smart-wallet.svg"
});
_defineProperty(SmartWallet, "id", walletIds.smartWallet);

export { SmartWallet as S, WalletConnectV2Handler as W, WalletConnectHandler as a, getAllSmartWallets as b, getSmartWalletAddress as c, getAllSigners as g, isSmartWalletDeployed as i };
