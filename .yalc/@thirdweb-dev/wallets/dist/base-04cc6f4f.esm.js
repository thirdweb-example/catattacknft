import { _ as _classPrivateMethodInitSpec, a as _classPrivateMethodGet } from './classPrivateMethodGet-71fe23d8.esm.js';
import { _ as _classPrivateFieldInitSpec, a as _classPrivateFieldSet, b as _classPrivateFieldGet } from './classPrivateFieldSet-e25e1cec.esm.js';
import { defaultChains, updateChainRPCs } from '@thirdweb-dev/chains';
import { AbstractWallet } from '../evm/wallets/abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js';

const PREFIX = "__TW__";
class AsyncLocalStorage {
  constructor(name) {
    this.name = name;
  }
  getItem(key) {
    return new Promise(res => {
      res(localStorage.getItem(`${PREFIX}/${this.name}/${key}`));
    });
  }
  setItem(key, value) {
    return new Promise((res, rej) => {
      try {
        localStorage.setItem(`${PREFIX}/${this.name}/${key}`, value);
        res();
      } catch (e) {
        rej(e);
      }
    });
  }
  removeItem(key) {
    return new Promise(res => {
      localStorage.removeItem(`${PREFIX}/${this.name}/${key}`);
      res();
    });
  }
}
function createAsyncLocalStorage(name) {
  return new AsyncLocalStorage(name);
}

const DEFAULT_DAPP_META = {
  name: "thirdweb powered dApp",
  url: "https://thirdweb.com",
  description: "thirdweb powered dApp",
  logoUrl: "https://thirdweb.com/favicon.ico",
  isDarkMode: true
};

// eslint-disable-next-line @typescript-eslint/ban-types
var _connectParams = /*#__PURE__*/new WeakMap();
var _connect = /*#__PURE__*/new WeakSet();
var _subscribeToEvents = /*#__PURE__*/new WeakSet();
class AbstractClientWallet extends AbstractWallet {
  getMeta() {
    return this.constructor.meta;
  }
  constructor(walletId, options) {
    super();
    _classPrivateMethodInitSpec(this, _subscribeToEvents);
    _classPrivateMethodInitSpec(this, _connect);
    _classPrivateFieldInitSpec(this, _connectParams, {
      writable: true,
      value: void 0
    });
    this.walletId = walletId;
    this.options = options;
    this.chains = (options?.chains || defaultChains).map(c => updateChainRPCs(c, options?.clientId));
    this.dappMetadata = options?.dappMetadata || DEFAULT_DAPP_META;
    this.walletStorage = options?.walletStorage || createAsyncLocalStorage(this.walletId);
  }
  /**
   * tries to auto connect to the wallet
   */
  async autoConnect(connectOptions) {
    // remove chainId when autoconnecting to prevent switch-network popup on page load
    const options = connectOptions ? {
      ...connectOptions,
      chainId: undefined
    } : undefined;
    return _classPrivateMethodGet(this, _connect, _connect2).call(this, true, options);
  }

  /**
   * connect to the wallet
   */
  async connect(connectOptions) {
    _classPrivateFieldSet(this, _connectParams, connectOptions);
    const address = await _classPrivateMethodGet(this, _connect, _connect2).call(this, false, connectOptions);
    if (!address) {
      throw new Error("Failed to connect to the wallet.");
    }
    return address;
  }
  getConnectParams() {
    return _classPrivateFieldGet(this, _connectParams);
  }
  async getSigner() {
    const connector = await this.getConnector();
    if (!connector) {
      throw new Error("Wallet not connected");
    }
    return await connector.getSigner();
  }
  async disconnect() {
    const connector = await this.getConnector();
    if (connector) {
      await connector.disconnect();
      this.emit("disconnect");
      connector.removeAllListeners();
    }
  }
  async switchChain(chainId) {
    const connector = await this.getConnector();
    if (!connector) {
      throw new Error("Wallet not connected");
    }
    if (!connector.switchChain) {
      throw new Error("Wallet does not support switching chains");
    }
    return await connector.switchChain(chainId);
  }
  async updateChains(chains) {
    this.chains = chains.map(c => {
      return updateChainRPCs(c, this.options?.clientId);
    });
    const connector = await this.getConnector();
    connector.updateChains(this.chains);
  }

  /**
   * If the wallet uses a personal wallet under the hood, return it
   */
  getPersonalWallet() {
    return undefined;
  }
}
async function _connect2(isAutoConnect, connectOptions) {
  const connector = await this.getConnector();
  _classPrivateMethodGet(this, _subscribeToEvents, _subscribeToEvents2).call(this, connector);
  const isConnected = await connector.isConnected();

  // if already connected, return the address and setup listeners
  if (isConnected) {
    const address = await connector.getAddress();
    connector.setupListeners();

    // ensure that connector is connected to the correct chain
    if (connectOptions?.chainId) {
      await connector.switchChain(connectOptions?.chainId);
    }
    this.emit("connect", {
      address,
      chainId: await this.getChainId()
    });
    return address;
  }
  if (isAutoConnect) {
    throw new Error("Failed to auto connect to the wallet.");
  }
  try {
    const address = await connector.connect(connectOptions);
    return address;
  } catch (error) {
    throw new Error(error.message);
  }
}
async function _subscribeToEvents2(connector) {
  // subscribe to connector for events
  connector.on("connect", data => {
    this.emit("connect", {
      address: data.account,
      chainId: data.chain?.id
    });
  });
  connector.on("change", data => {
    this.emit("change", {
      address: data.account,
      chainId: data.chain?.id
    });
  });
  connector.on("message", data => {
    this.emit("message", data);
  });
  connector.on("disconnect", async () => {
    this.emit("disconnect");
  });
  connector.on("error", error => this.emit("error", error));
}

export { AsyncLocalStorage as A, DEFAULT_DAPP_META as D, AbstractClientWallet as a, createAsyncLocalStorage as c };
