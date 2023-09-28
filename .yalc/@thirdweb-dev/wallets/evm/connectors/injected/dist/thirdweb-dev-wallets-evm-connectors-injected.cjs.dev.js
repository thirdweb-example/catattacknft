'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var classPrivateFieldSet = require('../../../../dist/classPrivateFieldSet-f0dc2a42.cjs.dev.js');
var assertWindowEthereum = require('../../../../dist/assertWindowEthereum-83395b2f.cjs.dev.js');
var url = require('../../../../dist/url-f53b640f.cjs.dev.js');
var ethers = require('ethers');
var WagmiConnector = require('../../../../dist/WagmiConnector-6ff7d562.cjs.dev.js');
var normalizeChainId = require('../../../../dist/normalizeChainId-8778491e.cjs.dev.js');
var errors = require('../../../../dist/errors-323b40ec.cjs.dev.js');
require('@thirdweb-dev/chains');
require('eventemitter3');

function getInjectedName(ethereum) {
  if (!ethereum) {
    return "Injected";
  }
  const getName = provider => {
    if (provider.isAvalanche) {
      return "Core Wallet";
    }
    if (provider.isBitKeep) {
      return "BitKeep";
    }
    if (provider.isBraveWallet) {
      return "Brave Wallet";
    }
    if (provider.isCoinbaseWallet) {
      return "Coinbase Wallet";
    }
    if (provider.isExodus) {
      return "Exodus";
    }
    if (provider.isFrame) {
      return "Frame";
    }
    if (provider.isKuCoinWallet) {
      return "KuCoin Wallet";
    }
    if (provider.isMathWallet) {
      return "MathWallet";
    }
    if (provider.isOneInchIOSWallet || provider.isOneInchAndroidWallet) {
      return "1inch Wallet";
    }
    if (provider.isOpera) {
      return "Opera";
    }
    if (provider.isPortal) {
      return "Ripio Portal";
    }
    if (provider.isTally) {
      return "Tally";
    }
    if (provider.isTokenPocket) {
      return "TokenPocket";
    }
    if (provider.isTokenary) {
      return "Tokenary";
    }
    if (provider.isTrust || provider.isTrustWallet) {
      return "Trust Wallet";
    }
    if (provider.isMetaMask) {
      return "MetaMask";
    }
  };

  // Some injected providers detect multiple other providers and create a list at `ethers.providers`
  if (ethereum.providers?.length) {
    // Deduplicate names using Set
    // Coinbase Wallet puts multiple providers in `ethereum.providers`
    const nameSet = new Set();
    let unknownCount = 1;
    for (const provider of ethereum.providers) {
      let name = getName(provider);
      if (!name) {
        name = `Unknown Wallet #${unknownCount}`;
        unknownCount += 1;
      }
      nameSet.add(name);
    }
    const names = [...nameSet];
    if (names.length) {
      return names;
    }
    return names[0] ?? "Injected";
  }
  return getName(ethereum) ?? "Injected";
}

var _provider = /*#__PURE__*/new WeakMap();
class InjectedConnector extends WagmiConnector.WagmiConnector {
  constructor(arg) {
    const defaultOptions = {
      shimDisconnect: true,
      getProvider: () => {
        if (assertWindowEthereum.assertWindowEthereum(globalThis.window)) {
          return globalThis.window.ethereum;
        }
      }
    };
    const options = {
      ...defaultOptions,
      ...arg.options
    };
    super({
      chains: arg.chains,
      options
    });
    /**
     * Name of the injected connector
     */
    /**
     * Whether the connector is ready to be used
     *
     * `true` if the injected provider is found
     */
    classPrivateFieldSet._classPrivateFieldInitSpec(this, _provider, {
      writable: true,
      value: void 0
    });
    defineProperty._defineProperty(this, "shimDisconnectKey", "injected.shimDisconnect");
    /**
     * handles the `accountsChanged` event from the provider
     * * emits `change` event if connected to a different account
     * * emits `disconnect` event if no accounts available
     */
    defineProperty._defineProperty(this, "onAccountsChanged", async accounts => {
      if (accounts.length === 0) {
        this.emit("disconnect");
      } else {
        this.emit("change", {
          account: ethers.utils.getAddress(accounts[0])
        });
      }
    });
    /**
     * handles the `chainChanged` event from the provider
     * * emits `change` event if connected to a different chain
     */
    defineProperty._defineProperty(this, "onChainChanged", chainId => {
      const id = normalizeChainId.normalizeChainId(chainId);
      const unsupported = this.isChainUnsupported(id);
      this.emit("change", {
        chain: {
          id,
          unsupported
        }
      });
    });
    /**
     * handles the `disconnect` event from the provider
     * * emits `disconnect` event
     */
    defineProperty._defineProperty(this, "onDisconnect", async error => {
      // We need this as MetaMask can emit the "disconnect" event upon switching chains.
      // If MetaMask emits a `code: 1013` error, wait for reconnection before disconnecting
      // https://github.com/MetaMask/providers/pull/120
      if (error.code === 1013) {
        const provider = await this.getProvider();
        if (provider) {
          try {
            const isAuthorized = await this.getAccount();
            if (isAuthorized) {
              return;
            }
          } catch {
            // If we can't get the account anymore, continue with disconnect
          }
        }
      }
      this.emit("disconnect");

      // Remove `shimDisconnect` => it signals that wallet is disconnected
      if (this.options.shimDisconnect) {
        await this.connectorStorage.removeItem(this.shimDisconnectKey);
      }
    });
    const _provider2 = options.getProvider();

    // set the name of the connector
    if (typeof options.name === "string") {
      // if name is given, use that
      this.name = options.name;
    } else if (_provider2) {
      // if injected provider is detected, get name from it
      const detectedName = getInjectedName(_provider2);
      if (options.name) {
        this.name = options.name(detectedName);
      } else {
        if (typeof detectedName === "string") {
          this.name = detectedName;
        } else {
          this.name = detectedName[0];
        }
      }
    } else {
      // else default to "Injected"
      this.name = "Injected";
    }
    this.id = "injected";
    this.ready = !!_provider2;
    this.connectorStorage = arg.connectorStorage;
  }

  /**
   * * Connect to the injected provider
   * * switch to the given chain if `chainId` is specified as an argument
   */
  async connect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    try {
      const provider = await this.getProvider();
      if (!provider) {
        throw new errors.ConnectorNotFoundError();
      }
      this.setupListeners();

      // emit "connecting" event
      this.emit("message", {
        type: "connecting"
      });

      // request account addresses from injected provider
      const accountAddresses = await provider.request({
        method: "eth_requestAccounts"
      });

      // get the first account address
      const firstAccountAddress = ethers.utils.getAddress(accountAddresses[0]);

      // Switch to given chain if a chainId is specified
      let connectedChainId = await this.getChainId();
      // Check if currently connected chain is unsupported
      // chainId is considered unsupported if chainId is not in the list of this.chains array
      let isUnsupported = this.isChainUnsupported(connectedChainId);

      // if chainId is specified and it is not the same as the currently connected chain
      if (options.chainId && connectedChainId !== options.chainId) {
        // switch to the given chain
        try {
          await this.switchChain(options.chainId);
          // recalculate connectedChainId and isUnsupported
          connectedChainId = options.chainId;
          isUnsupported = this.isChainUnsupported(options.chainId);
        } catch (e) {
          console.error(`Could not switch to chain id: ${options.chainId}`, e);
        }
      }

      // if shimDisconnect is enabled
      if (this.options.shimDisconnect) {
        // add the shim shimDisconnectKey => it signals that wallet is connected
        await this.connectorStorage.setItem(this.shimDisconnectKey, "true");
      }
      const connectionInfo = {
        account: firstAccountAddress,
        chain: {
          id: connectedChainId,
          unsupported: isUnsupported
        },
        provider
      };
      this.emit("connect", connectionInfo);
      return connectionInfo;
    } catch (error) {
      if (this.isUserRejectedRequestError(error)) {
        throw new errors.UserRejectedRequestError(error);
      }
      if (error.code === -32002) {
        throw new errors.ResourceUnavailableError(error);
      }
      throw error;
    }
  }

  /**
   * disconnect from the injected provider
   */
  async disconnect() {
    // perform cleanup
    const provider = await this.getProvider();
    if (!provider?.removeListener) {
      return;
    }
    provider.removeListener("accountsChanged", this.onAccountsChanged);
    provider.removeListener("chainChanged", this.onChainChanged);
    provider.removeListener("disconnect", this.onDisconnect);

    // if shimDisconnect is enabled
    if (this.options.shimDisconnect) {
      // Remove the shimDisconnectKey => it signals that wallet is disconnected
      await this.connectorStorage.removeItem(this.shimDisconnectKey);
    }
  }

  /**
   * @returns The first account address from the injected provider
   */
  async getAccount() {
    const provider = await this.getProvider();
    if (!provider) {
      throw new errors.ConnectorNotFoundError();
    }
    const accounts = await provider.request({
      method: "eth_accounts"
    });

    // return checksum address
    // https://docs.ethers.org/v5/api/utils/address/#utils-getAddress
    return ethers.utils.getAddress(accounts[0]);
  }

  /**
   * @returns The `chainId` of the currently connected chain from injected provider normalized to a `number`
   */
  async getChainId() {
    const provider = await this.getProvider();
    if (!provider) {
      throw new errors.ConnectorNotFoundError();
    }
    return provider.request({
      method: "eth_chainId"
    }).then(normalizeChainId.normalizeChainId);
  }

  /**
   * get the injected provider
   */
  async getProvider() {
    const provider = this.options.getProvider();
    if (provider) {
      classPrivateFieldSet._classPrivateFieldSet(this, _provider, provider);
      // setting listeners
    }

    return classPrivateFieldSet._classPrivateFieldGet(this, _provider);
  }

  /**
   * get a `signer` for given `chainId`
   */
  async getSigner() {
    let {
      chainId
    } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const [provider, account] = await Promise.all([this.getProvider(), this.getAccount()]);

    // ethers.providers.Web3Provider
    return new ethers.providers.Web3Provider(provider, chainId).getSigner(account);
  }

  /**
   *
   * @returns `true` if the connector is connected and address is available, else `false`
   */
  async isAuthorized() {
    try {
      // `false` if connector is disconnected
      if (this.options.shimDisconnect &&
      // If shim does not exist in storage, wallet is disconnected
      !Boolean(await this.connectorStorage.getItem(this.shimDisconnectKey))) {
        return false;
      }
      const provider = await this.getProvider();
      if (!provider) {
        throw new errors.ConnectorNotFoundError();
      }
      // `false` if no account address available, else `true`
      const account = await this.getAccount();
      return !!account;
    } catch {
      // `false` if any error thrown
      return false;
    }
  }

  /**
   * switch to given chain
   */
  async switchChain(chainId) {
    const provider = await this.getProvider();
    if (!provider) {
      throw new errors.ConnectorNotFoundError();
    }
    const chainIdHex = ethers.utils.hexValue(chainId);
    try {
      // request provider to switch to given chainIdHex
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: chainIdHex
        }]
      });
      const chain = this.chains.find(_chain => _chain.chainId === chainId);
      if (chain) {
        return chain;
      }
      return {
        chainId: chainId,
        name: `Chain ${chainIdHex}`,
        slug: `${chainIdHex}`,
        nativeCurrency: {
          name: "Ether",
          decimals: 18,
          symbol: "ETH"
        },
        rpc: [""],
        chain: "",
        shortName: "",
        testnet: true
      };
    } catch (error) {
      // if could not switch to given chainIdHex

      // if tried to connect to a chain that is not configured
      const chain = this.chains.find(_chain => _chain.chainId === chainId);
      if (!chain) {
        throw new errors.ChainNotConfiguredError({
          chainId,
          connectorId: this.id
        });
      }

      // if chain is not added to provider
      if (error.code === 4902 ||
      // Unwrapping for MetaMask Mobile
      // https://github.com/MetaMask/metamask-mobile/issues/2944#issuecomment-976988719
      error?.data?.originalError?.code === 4902) {
        try {
          // request provider to add chain
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [{
              chainId: chainIdHex,
              chainName: chain.name,
              nativeCurrency: chain.nativeCurrency,
              rpcUrls: url.getValidPublicRPCUrl(chain),
              // no client id on purpose here
              blockExplorerUrls: this.getBlockExplorerUrls(chain)
            }]
          });
          return chain;
        } catch (addError) {
          // if user rejects request to add chain
          if (this.isUserRejectedRequestError(addError)) {
            throw new errors.UserRejectedRequestError(error);
          }

          // else other error
          throw new errors.AddChainError();
        }
      }
      if (this.isUserRejectedRequestError(error)) {
        throw new errors.UserRejectedRequestError(error);
      }
      throw new errors.SwitchChainError(error);
    }
  }
  async setupListeners() {
    const provider = await this.getProvider();
    if (provider.on) {
      provider.on("accountsChanged", this.onAccountsChanged);
      provider.on("chainChanged", this.onChainChanged);
      provider.on("disconnect", this.onDisconnect);
    }
  }
  isUserRejectedRequestError(error) {
    return error.code === 4001;
  }
}

exports.InjectedConnector = InjectedConnector;
