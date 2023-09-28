'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-6ca2d9a5.cjs.prod.js');
var useConnect = require('../../../../dist/useConnect-6f4c40e0.cjs.prod.js');
var ethers = require('ethers');
var invariant = require('tiny-invariant');
var wagmi = require('wagmi');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var invariant__default = /*#__PURE__*/_interopDefault(invariant);

// excerpt from https://docs.gnosis-safe.io/backend/available-services
const CHAIN_ID_TO_GNOSIS_SERVER_URL = {
  // mainnet
  1: "https://safe-transaction-mainnet.safe.global",
  // avalanche
  43114: "https://safe-transaction-avalanche.safe.global",
  // polygon
  137: "https://safe-transaction-polygon.safe.global",
  // goerli
  5: "https://safe-transaction-goerli.safe.global",
  // bsc
  56: "https://safe-transaction-bsc.safe.global",
  // optimism
  10: "https://safe-transaction-optimism.safe.global"
};
const __IS_SERVER__ = typeof window === "undefined";
class GnosisSafeConnector extends wagmi.Connector {
  // config

  constructor(config) {
    // filter out any chains that gnosis doesnt support before passing to connector
    config.chains = config.chains?.filter(c => c.id in CHAIN_ID_TO_GNOSIS_SERVER_URL);
    super({
      ...config,
      options: undefined
    });
    defineProperty._defineProperty(this, "supportedChains", GnosisSafeConnector.supportedChains);
    defineProperty._defineProperty(this, "id", "gnosis");
    defineProperty._defineProperty(this, "ready", __IS_SERVER__);
    defineProperty._defineProperty(this, "name", "Gnosis Safe");
    defineProperty._defineProperty(this, "previousConnector", void 0);
    defineProperty._defineProperty(this, "config", void 0);
    defineProperty._defineProperty(this, "safeSigner", void 0);
    if (!__IS_SERVER__) {
      this.ready = true;
    }
  }
  async connect() {
    this.safeSigner = await this.createSafeSigner();
    const account = await this.getAccount();
    const provider = await this.getProvider();
    const id = await this.getChainId();
    return {
      account,
      provider,
      chain: {
        id,
        unsupported: this.isChainUnsupported(id)
      }
    };
  }
  isChainSupported(chainId) {
    const id = wagmi.normalizeChainId(chainId);
    return !this.isChainUnsupported(id);
  }
  async createSafeSigner() {
    const signer = await this.previousConnector?.getSigner();
    const safeAddress = this.config?.safeAddress;
    const safeChainId = this.config?.safeChainId;
    invariant__default["default"](signer, "cannot create Gnosis Safe signer without a personal signer");
    const signerChainId = await signer.getChainId();
    invariant__default["default"](signerChainId === safeChainId, "chainId of personal signer has to match safe chainId");
    invariant__default["default"](safeAddress, "safeConfig.safeAddress is required, did you forget to call setSafeConfig?");
    invariant__default["default"](safeChainId, "safeConfig.safeChainId is required, did you forget to call setSafeConfig?");
    const serverUrl = CHAIN_ID_TO_GNOSIS_SERVER_URL[safeChainId];
    invariant__default["default"](serverUrl, "Chain not supported");
    const [safeEthersAdapters, safeCoreSdk, safeEthersLib] = await Promise.all([Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@safe-global/safe-ethers-adapters')); }), Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@safe-global/safe-core-sdk')); }), Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@safe-global/safe-ethers-lib')); })]);
    const ethAdapter = new safeEthersLib.default({
      ethers: ethers.ethers,
      signerOrProvider: signer
    });
    const safe = await safeCoreSdk.default.create({
      ethAdapter: ethAdapter,
      safeAddress
    });
    const service = new safeEthersAdapters.SafeService(serverUrl);
    const safeSigner = new safeEthersAdapters.SafeEthersSigner(safe, service, signer.provider);

    // See this test for more details:
    // https://github.com/safe-global/safe-contracts/blob/9d188d3ef514fb7391466a6b5f010db4cc0f3c8b/test/handlers/CompatibilityFallbackHandler.spec.ts#L86-L94
    safeSigner.signMessage = async message => {
      const EIP712_SAFE_MESSAGE_TYPE = {
        SafeMessage: [{
          type: "bytes",
          name: "message"
        }]
      };
      const encodedMessage = ethers.ethers.utils._TypedDataEncoder.hash({
        verifyingContract: safeAddress,
        chainId: await this.getChainId()
      }, EIP712_SAFE_MESSAGE_TYPE, {
        message: ethers.ethers.utils.hashMessage(message)
      });
      const safeMessage = ethers.ethers.utils.arrayify(encodedMessage);
      const signature = await signer.signMessage(safeMessage);
      return signature.replace(/1b$/, "1f").replace(/1c$/, "20");
    };
    return safeSigner;
  }
  async disconnect() {
    this.config = undefined;
    this.safeSigner = undefined;
    this.previousConnector = undefined;
    return undefined;
  }
  async getAccount() {
    const signer = await this.getSigner();
    return await signer.getAddress();
  }
  async getChainId() {
    return (await this.getSigner()).getChainId();
  }
  async getProvider() {
    return (await this.getSigner()).provider;
  }
  async getSigner() {
    if (!this.safeSigner) {
      this.safeSigner = await this.createSafeSigner();
    }
    return this.safeSigner;
  }
  async isAuthorized() {
    try {
      const account = await this.getAccount();
      return !!account;
    } catch {
      return false;
    }
  }
  onAccountsChanged(accounts) {
    if (accounts.length === 0) {
      this.emit("disconnect");
    } else {
      this.emit("change", {
        account: ethers.utils.getAddress(accounts[0])
      });
    }
  }
  isChainUnsupported(chainId) {
    return this.config?.safeChainId ? chainId === this.config.safeChainId : false;
  }
  onChainChanged(chainId) {
    const id = wagmi.normalizeChainId(chainId);
    const unsupported = this.isChainUnsupported(id);
    this.emit("change", {
      chain: {
        id,
        unsupported
      }
    });
  }
  onDisconnect() {
    this.emit("disconnect");
  }
  setConfiguration(connector, config) {
    this.previousConnector = connector;
    this.config = config;
  }
}

/**
 * Hook for connecting to a Gnosis Safe. This enables multisig wallets to connect to your application and sing transactions.
 *
 * ```javascript
 * import { useGnosis } from "@thirdweb-dev/react"
 * ```
 *
 *
 * @example
 * ```javascript
 * import { useGnosis } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const connectWithGnosis = useGnosis()
 *
 *   return (
 *     <button onClick={() => connectWithGnosis({ safeAddress: "0x...", safeChainId: 1 })}>
 *       Connect Gnosis Safe
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
defineProperty._defineProperty(GnosisSafeConnector, "supportedChains", Object.keys(CHAIN_ID_TO_GNOSIS_SERVER_URL));
function useGnosis() {
  const wagmiContext = wagmi.useContext();
  invariant__default["default"](wagmiContext, `useGnosis() can only be used inside <ThirdwebProvider />. If you are using <ThirdwebSDKProvider /> you will have to use your own wallet-connection logic.`);
  const [connectors, connect] = useConnect.useConnect();
  if (connectors.loading) {
    return () => Promise.reject("Gnosis connector not ready to be used, yet");
  }
  const connector = connectors.data.connectors.find(c => c.id === "gnosis");
  invariant__default["default"](connector, "Gnosis connector not found, please make sure it is provided to your <ThirdwebProvider />");
  return async config => {
    const previousConnector = connectors.data.connector;
    const previousConnectorChain = await previousConnector?.getChainId();
    invariant__default["default"](!!previousConnector, "Cannot connect to Gnosis Safe without first being connected to a personal wallet.");
    invariant__default["default"](previousConnectorChain === config.safeChainId, "Gnosis safe chain id must match personal wallet chain id.");
    invariant__default["default"](ethers.utils.isAddress(config.safeAddress), "Gnosis safe address must be a valid address.");
    connector.setConfiguration(previousConnector, config);
    return connect(connector);
  };
}

exports.GnosisSafeConnector = GnosisSafeConnector;
exports.useGnosis = useGnosis;
