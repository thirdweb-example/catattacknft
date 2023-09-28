import { _ as _classPrivateMethodInitSpec, a as _classPrivateMethodGet } from '../../../../dist/classPrivateMethodGet-71fe23d8.esm.js';
import { _ as _classPrivateFieldInitSpec, b as _classPrivateFieldGet, a as _classPrivateFieldSet } from '../../../../dist/classPrivateFieldSet-e25e1cec.esm.js';
import { _ as _defineProperty } from '../../../../dist/defineProperty-e24c82ea.esm.js';
import { utils, providers } from 'ethers';
import { w as walletIds } from '../../../../dist/walletIds-18a8e969.esm.js';
import { g as getValidPublicRPCUrl } from '../../../../dist/url-453bcd09.esm.js';
import { W as WagmiConnector } from '../../../../dist/WagmiConnector-6011bbb1.esm.js';
import { U as UserRejectedRequestError, S as SwitchChainError } from '../../../../dist/errors-b9032b4e.esm.js';
import '@thirdweb-dev/chains';
import 'eventemitter3';

const chainsToRequest = new Set([1, 137, 10, 42161, 56]);
const NAMESPACE = "eip155";
const REQUESTED_CHAINS_KEY = "wagmi.requestedChains";
const ADD_ETH_CHAIN_METHOD = "wallet_addEthereumChain";
const LAST_USED_CHAIN_ID = "last-used-chain-id";
var _provider = /*#__PURE__*/new WeakMap();
var _initProviderPromise = /*#__PURE__*/new WeakMap();
var _storage = /*#__PURE__*/new WeakMap();
var _createProvider = /*#__PURE__*/new WeakSet();
var _initProvider = /*#__PURE__*/new WeakSet();
var _isChainsStale = /*#__PURE__*/new WeakSet();
var _removeListeners = /*#__PURE__*/new WeakSet();
var _setRequestedChainsIds = /*#__PURE__*/new WeakSet();
var _getRequestedChainsIds = /*#__PURE__*/new WeakSet();
var _getNamespaceChainsIds = /*#__PURE__*/new WeakSet();
var _getNamespaceMethods = /*#__PURE__*/new WeakSet();
class WalletConnectConnector extends WagmiConnector {
  constructor(config) {
    super({
      ...config,
      options: {
        isNewChainsStale: true,
        ...config.options
      }
    });
    _classPrivateMethodInitSpec(this, _getNamespaceMethods);
    _classPrivateMethodInitSpec(this, _getNamespaceChainsIds);
    _classPrivateMethodInitSpec(this, _getRequestedChainsIds);
    _classPrivateMethodInitSpec(this, _setRequestedChainsIds);
    _classPrivateMethodInitSpec(this, _removeListeners);
    /**
     * Checks if the target chains match the chains that were
     * initially requested by the connector for the WalletConnect session.
     * If there is a mismatch, this means that the chains on the connector
     * are considered stale, and need to be revalidated at a later point (via
     * connection).
     *
     * There may be a scenario where a dapp adds a chain to the
     * connector later on, however, this chain will not have been approved or rejected
     * by the wallet. In this case, the chain is considered stale.
     *
     * There are exceptions however:
     * -  If the wallet supports dynamic chain addition via `eth_addEthereumChain`,
     *    then the chain is not considered stale.
     * -  If the `isNewChainsStale` flag is falsy on the connector, then the chain is
     *    not considered stale.
     *
     * For the above cases, chain validation occurs dynamically when the user
     * attempts to switch chain.
     *
     * Also check that dapp supports at least 1 chain from previously approved session.
     */
    _classPrivateMethodInitSpec(this, _isChainsStale);
    _classPrivateMethodInitSpec(this, _initProvider);
    _classPrivateMethodInitSpec(this, _createProvider);
    _defineProperty(this, "id", walletIds.walletConnect);
    _defineProperty(this, "name", "WalletConnect");
    _defineProperty(this, "ready", true);
    _classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _initProviderPromise, {
      writable: true,
      value: void 0
    });
    _classPrivateFieldInitSpec(this, _storage, {
      writable: true,
      value: void 0
    });
    _defineProperty(this, "onAccountsChanged", accounts => {
      if (accounts.length === 0) {
        this.emit("disconnect");
      } else {
        this.emit("change", {
          account: utils.getAddress(accounts[0])
        });
      }
    });
    _defineProperty(this, "onChainChanged", async chainId => {
      const id = Number(chainId);
      const unsupported = this.isChainUnsupported(id);
      await _classPrivateFieldGet(this, _storage).setItem(LAST_USED_CHAIN_ID, String(chainId));
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    _defineProperty(this, "onDisconnect", async () => {
      await _classPrivateMethodGet(this, _setRequestedChainsIds, _setRequestedChainsIds2).call(this, []);
      await _classPrivateFieldGet(this, _storage).removeItem(LAST_USED_CHAIN_ID);
      this.emit("disconnect");
    });
    _defineProperty(this, "onDisplayUri", uri => {
      this.emit("message", {
        type: "display_uri",
        data: uri
      });
    });
    _defineProperty(this, "onConnect", () => {
      this.emit("connect", {
        provider: _classPrivateFieldGet(this, _provider)
      });
    });
    _classPrivateFieldSet(this, _storage, config.options.storage);
    _classPrivateMethodGet(this, _createProvider, _createProvider2).call(this);
    this.filteredChains = this.chains.length > 50 ? this.chains.filter(c => {
      return chainsToRequest.has(c.chainId);
    }) : this.chains;
  }
  async connect() {
    let {
      chainId: chainIdP,
      pairingTopic
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      let targetChainId = chainIdP;
      if (!targetChainId) {
        const lastUsedChainIdStr = await _classPrivateFieldGet(this, _storage).getItem(LAST_USED_CHAIN_ID);
        const lastUsedChainId = lastUsedChainIdStr ? parseInt(lastUsedChainIdStr) : undefined;
        if (lastUsedChainId && !this.isChainUnsupported(lastUsedChainId)) {
          targetChainId = lastUsedChainId;
        } else {
          targetChainId = this.filteredChains[0]?.chainId;
        }
      }
      if (!targetChainId) {
        throw new Error("No chains found on connector.");
      }
      const provider = await this.getProvider();
      this.setupListeners();
      const isChainsStale = await _classPrivateMethodGet(this, _isChainsStale, _isChainsStale2).call(this);

      // If there is an active session with stale chains, disconnect the current session.
      if (provider.session && isChainsStale) {
        await provider.disconnect();
      }

      // If there no active session, or the chains are stale, connect.
      if (!provider.session || isChainsStale) {
        const optionalChains = this.filteredChains.filter(chain => chain.chainId !== targetChainId).map(optionalChain => optionalChain.chainId);
        this.emit("message", {
          type: "connecting"
        });
        await provider.connect({
          pairingTopic,
          chains: [targetChainId],
          optionalChains: optionalChains.length > 0 ? optionalChains : [targetChainId]
        });
        await _classPrivateMethodGet(this, _setRequestedChainsIds, _setRequestedChainsIds2).call(this, this.filteredChains.map(_ref => {
          let {
            chainId
          } = _ref;
          return chainId;
        }));
      }

      // If session exists and chains are authorized, enable provider for required chain
      const accounts = await provider.enable();
      if (accounts.length === 0) {
        throw new Error("No accounts found on provider.");
      }
      const account = utils.getAddress(accounts[0]);
      const id = await this.getChainId();
      const unsupported = this.isChainUnsupported(id);
      return {
        account,
        chain: {
          id,
          unsupported
        },
        provider: new providers.Web3Provider(provider)
      };
    } catch (error) {
      if (/user rejected/i.test(error?.message)) {
        throw new UserRejectedRequestError(error);
      }
      throw error;
    }
  }
  async disconnect() {
    const cleanup = () => {
      if (typeof localStorage === "undefined") {
        return;
      }
      for (const key in localStorage) {
        if (key.startsWith("wc@2")) {
          localStorage.removeItem(key);
        }
      }
    };
    cleanup();
    const provider = await this.getProvider();
    const disconnectProvider = async () => {
      try {
        await provider.disconnect();
      } catch (error) {
        if (!/No matching key/i.test(error.message)) {
          throw error;
        }
      } finally {
        _classPrivateMethodGet(this, _removeListeners, _removeListeners2).call(this);
        await _classPrivateMethodGet(this, _setRequestedChainsIds, _setRequestedChainsIds2).call(this, []);
        cleanup();
      }
    };
    disconnectProvider();
  }
  async getAccount() {
    const {
      accounts
    } = await this.getProvider();
    if (accounts.length === 0) {
      throw new Error("No accounts found on provider.");
    }
    return utils.getAddress(accounts[0]);
  }
  async getChainId() {
    const {
      chainId
    } = await this.getProvider();
    return chainId;
  }
  async getProvider() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (!_classPrivateFieldGet(this, _provider)) {
      await _classPrivateMethodGet(this, _createProvider, _createProvider2).call(this);
    }
    if (chainId) {
      await this.switchChain(chainId);
    }
    if (!_classPrivateFieldGet(this, _provider)) {
      throw new Error("No provider found.");
    }
    return _classPrivateFieldGet(this, _provider);
  }
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider({
      chainId
    }), this.getAccount()]);
    return new providers.Web3Provider(provider, chainId).getSigner(account);
  }
  async isAuthorized() {
    try {
      const [account, provider] = await Promise.all([this.getAccount(), this.getProvider()]);
      const isChainsStale = await _classPrivateMethodGet(this, _isChainsStale, _isChainsStale2).call(this);

      // If an account does not exist on the session, then the connector is unauthorized.
      if (!account) {
        return false;
      }

      // If the chains are stale on the session, then the connector is unauthorized.
      if (isChainsStale && provider.session) {
        try {
          await provider.disconnect();
        } catch {} // eslint-disable-line no-empty
        return false;
      }
      return true;
    } catch {
      return false;
    }
  }
  async switchChain(chainId) {
    const chain = this.chains.find(chain_ => chain_.chainId === chainId);
    if (!chain) {
      throw new SwitchChainError(`Chain with ID: ${chainId}, not found on connector.`);
    }
    try {
      const provider = await this.getProvider();
      const namespaceChains = _classPrivateMethodGet(this, _getNamespaceChainsIds, _getNamespaceChainsIds2).call(this);
      const namespaceMethods = _classPrivateMethodGet(this, _getNamespaceMethods, _getNamespaceMethods2).call(this);
      const isChainApproved = namespaceChains.includes(chainId);
      if (!isChainApproved && namespaceMethods.includes(ADD_ETH_CHAIN_METHOD)) {
        const blockExplorerUrls = chain.explorers?.length ? {
          blockExplorerUrls: [chain.explorers[0].url]
        } : {};
        await provider.request({
          method: ADD_ETH_CHAIN_METHOD,
          params: [{
            chainId: utils.hexValue(chain.chainId),
            chainName: chain.name,
            nativeCurrency: chain.nativeCurrency,
            rpcUrls: getValidPublicRPCUrl(chain),
            // no clientId on purpose
            ...blockExplorerUrls
          }]
        });
        const requestedChains = await _classPrivateMethodGet(this, _getRequestedChainsIds, _getRequestedChainsIds2).call(this);
        requestedChains.push(chainId);
        await _classPrivateMethodGet(this, _setRequestedChainsIds, _setRequestedChainsIds2).call(this, requestedChains);
      }
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: utils.hexValue(chainId)
        }]
      });
      return chain;
    } catch (error) {
      const message = typeof error === "string" ? error : error?.message;
      if (/user rejected request/i.test(message)) {
        throw new UserRejectedRequestError(error);
      }
      throw new SwitchChainError(error);
    }
  }
  async setupListeners() {
    if (!_classPrivateFieldGet(this, _provider)) {
      return;
    }
    _classPrivateMethodGet(this, _removeListeners, _removeListeners2).call(this);
    _classPrivateFieldGet(this, _provider).on("accountsChanged", this.onAccountsChanged);
    _classPrivateFieldGet(this, _provider).on("chainChanged", this.onChainChanged);
    _classPrivateFieldGet(this, _provider).on("disconnect", this.onDisconnect);
    _classPrivateFieldGet(this, _provider).on("session_delete", this.onDisconnect);
    _classPrivateFieldGet(this, _provider).on("display_uri", this.onDisplayUri);
    _classPrivateFieldGet(this, _provider).on("connect", this.onConnect);
  }
}
async function _createProvider2() {
  if (!_classPrivateFieldGet(this, _initProviderPromise) && typeof window !== "undefined") {
    _classPrivateFieldSet(this, _initProviderPromise, _classPrivateMethodGet(this, _initProvider, _initProvider2).call(this));
  }
  return _classPrivateFieldGet(this, _initProviderPromise);
}
async function _initProvider2() {
  const {
    default: EthereumProvider,
    OPTIONAL_EVENTS,
    OPTIONAL_METHODS
  } = await import('@walletconnect/ethereum-provider');
  const [defaultChain, ...optionalChains] = this.filteredChains.map(_ref2 => {
    let {
      chainId
    } = _ref2;
    return chainId;
  });
  if (defaultChain) {
    // EthereumProvider populates & deduplicates required methods and events internally
    _classPrivateFieldSet(this, _provider, await EthereumProvider.init({
      showQrModal: this.options.qrcode !== false,
      projectId: this.options.projectId,
      optionalMethods: OPTIONAL_METHODS,
      optionalEvents: OPTIONAL_EVENTS,
      chains: [defaultChain],
      optionalChains: optionalChains,
      metadata: {
        name: this.options.dappMetadata.name,
        description: this.options.dappMetadata.description || "",
        url: this.options.dappMetadata.url,
        icons: [this.options.dappMetadata.logoUrl || ""]
      },
      rpcMap: Object.fromEntries(this.filteredChains.map(chain => [chain.chainId, chain.rpc[0]])),
      qrModalOptions: this.options.qrModalOptions
    }));
  }
}
async function _isChainsStale2() {
  const namespaceMethods = _classPrivateMethodGet(this, _getNamespaceMethods, _getNamespaceMethods2).call(this);
  if (namespaceMethods.includes(ADD_ETH_CHAIN_METHOD)) {
    return false;
  }
  if (!this.options.isNewChainsStale) {
    return false;
  }
  const requestedChains = await _classPrivateMethodGet(this, _getRequestedChainsIds, _getRequestedChainsIds2).call(this);
  const connectorChains = this.filteredChains.map(_ref3 => {
    let {
      chainId
    } = _ref3;
    return chainId;
  });
  const namespaceChains = _classPrivateMethodGet(this, _getNamespaceChainsIds, _getNamespaceChainsIds2).call(this);
  if (namespaceChains.length && !namespaceChains.some(id => connectorChains.includes(id))) {
    return false;
  }
  return !connectorChains.every(id => requestedChains.includes(id));
}
function _removeListeners2() {
  if (!_classPrivateFieldGet(this, _provider)) {
    return;
  }
  _classPrivateFieldGet(this, _provider).removeListener("accountsChanged", this.onAccountsChanged);
  _classPrivateFieldGet(this, _provider).removeListener("chainChanged", this.onChainChanged);
  _classPrivateFieldGet(this, _provider).removeListener("disconnect", this.onDisconnect);
  _classPrivateFieldGet(this, _provider).removeListener("session_delete", this.onDisconnect);
  _classPrivateFieldGet(this, _provider).removeListener("display_uri", this.onDisplayUri);
  _classPrivateFieldGet(this, _provider).removeListener("connect", this.onConnect);
}
async function _setRequestedChainsIds2(chains) {
  await _classPrivateFieldGet(this, _storage).setItem(REQUESTED_CHAINS_KEY, JSON.stringify(chains));
}
async function _getRequestedChainsIds2() {
  const data = await _classPrivateFieldGet(this, _storage).getItem(REQUESTED_CHAINS_KEY);
  return data ? JSON.parse(data) : [];
}
function _getNamespaceChainsIds2() {
  if (!_classPrivateFieldGet(this, _provider)) {
    return [];
  }
  const chainIds = _classPrivateFieldGet(this, _provider).session?.namespaces[NAMESPACE]?.chains?.map(chain => parseInt(chain.split(":")[1] || ""));
  return chainIds ?? [];
}
function _getNamespaceMethods2() {
  if (!_classPrivateFieldGet(this, _provider)) {
    return [];
  }
  const methods = _classPrivateFieldGet(this, _provider).session?.namespaces[NAMESPACE]?.methods;
  return methods ?? [];
}

export { WalletConnectConnector };
