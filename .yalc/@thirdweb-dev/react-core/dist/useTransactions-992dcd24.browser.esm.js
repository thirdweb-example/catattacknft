import mime from 'mime/lite.js';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { signLoginPayload, ThirdwebAuth } from '@thirdweb-dev/auth';
import invariant from 'tiny-invariant';
import { createContext, useContext, useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { constants, utils, BigNumber } from 'ethers';
import { jsx, jsxs } from 'react/jsx-runtime';
import { updateChainRPCs, getValidChainRPCs, defaultChains } from '@thirdweb-dev/chains';
import { Q as QueryClientProviderWithDefault, r as requiredParamInvariant, n as neverPersist } from './required-param-d1f74675.browser.esm.js';
import { ThirdwebSDK } from '@thirdweb-dev/sdk/evm';
import { UserWallet, checkClientIdOrSecretKey, fetchCurrencyMetadata, fetchCurrencyValue, getCachedAbiForContract, ListingType, ThirdwebSDK as ThirdwebSDK$1 } from '@thirdweb-dev/sdk';
import { walletIds, createAsyncLocalStorage, assertWindowEthereum } from '@thirdweb-dev/wallets';
import { watchTransactions } from '@thirdweb-dev/sdk/evm/functions';

// TODO legacy remove this when possible

async function resolveMimeType(url) {
  if (!url) {
    return undefined;
  }
  const mimeType = mime.getType(url);
  if (mimeType) {
    return mimeType;
  }
  const res = await fetch(url, {
    method: "HEAD"
  });
  if (res.ok && res.headers.has("content-type")) {
    return res.headers.get("content-type") || undefined;
  }
  // we failed to resolve the mime type, return null
  return undefined;
}

const ThirdwebThemeContext = /* @__PURE__ */createContext(undefined);

/**
 * The configuration to use the react SDK with an [auth](https://portal.thirdweb.com/auth) server.
 *
 * @beta
 */

const ThirdwebAuthContext = /* @__PURE__ */createContext(undefined);
function useThirdwebAuthContext() {
  return useContext(ThirdwebAuthContext);
}

const LAST_CONNECTED_WALLET_STORAGE_KEY = "lastConnectedWallet";
let lastConnectedWalletStorage;
// maps wallet instance to it's wallet config
const walletInstanceToConfig = new Map();
const ThirdwebWalletContext = /* @__PURE__ */createContext(undefined);
function ThirdwebWalletProvider(props) {
  const [signer, setSigner] = useState(undefined);
  const [connectionStatus, setConnectionStatus] = useState("unknown");
  const autoConnectTimeout = props.autoConnectTimeout || 15000;
  const [activeWallet, setActiveWallet] = useState();
  const [createdWalletInstance, setCreatedWalletInstance] = useState();
  const [activeWalletConfig, setActiveWalletConfig] = useState();
  if (!lastConnectedWalletStorage) {
    lastConnectedWalletStorage = props.createWalletStorage("coordinatorStorage");
  }

  // if autoSwitch is enabled - enforce connection to activeChain
  const chainToConnect = props.autoSwitch ? props.activeChain : undefined;
  const walletParams = useMemo(() => {
    return {
      chains: props.chains,
      dappMetadata: props.dAppMeta,
      chain: props.activeChain || props.chains[0],
      clientId: props.clientId
    };
  }, [props.chains, props.dAppMeta, props.activeChain, props.clientId]);
  const createWalletInstance = useCallback(walletConfig => {
    const walletInstance = walletConfig.create(walletParams);
    if (walletInstance.walletId === walletIds.magicLink) {
      // NOTE: removing this if statement causes the component to re-render
      // Patch for magic link wallet in react native
      // needed because we need to add a component to the view tree
      // from the instance, right before calling connect.
      // Check it out in RN's DappContextProvider.
      setCreatedWalletInstance(walletInstance);
    }
    walletInstanceToConfig.set(walletInstance, walletConfig);
    return walletInstance;
  }, [walletParams]);

  // if props.chains is updated, update the active wallet's chains
  useEffect(() => {
    if (activeWallet) {
      activeWallet.updateChains(props.chains);
    }
  }, [activeWallet, props.chains]);
  const setConnectedWallet = useCallback(async function (wallet, connectParams) {
    let isAutoConnect = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    setActiveWallet(wallet);
    const walletConfig = walletInstanceToConfig.get(wallet);
    if (!walletConfig) {
      throw new Error("Wallet config not found for given wallet instance. Do not create a wallet instance manually - use the useCreateWalletInstance() hook instead");
    }
    setActiveWalletConfig(walletConfig);
    setConnectionStatus("connected");
    const _signer = await wallet.getSigner();
    setSigner(_signer);

    // it autoconnected, then the details is already saved in storage, no need to store again
    if (isAutoConnect) {
      return;
    }

    // save to storage

    const walletInfo = {
      walletId: walletConfig.id,
      connectParams
    };

    // if personal wallet exists, we need to replace the connectParams.personalWallet to a stringifiable version
    const personalWallet = wallet.getPersonalWallet();
    const personalWalletConfig = walletInstanceToConfig.get(personalWallet);
    if (personalWallet && personalWalletConfig) {
      walletInfo.connectParams = {
        ...walletInfo.connectParams,
        personalWallet: {
          walletId: personalWalletConfig.id,
          connectParams: personalWallet.getConnectParams()
        }
      };
      saveLastConnectedWalletInfo(walletInfo);
    } else {
      saveLastConnectedWalletInfo(walletInfo);
    }
  }, []);
  const storeLastActiveChainId = useCallback(async chainId => {
    const lastConnectedWallet = await lastConnectedWalletStorage.getItem(LAST_CONNECTED_WALLET_STORAGE_KEY);
    if (!lastConnectedWallet) {
      return;
    }
    try {
      const parsedWallet = JSON.parse(lastConnectedWallet);
      if (parsedWallet.connectParams) {
        parsedWallet.connectParams.chainId = chainId;
      } else {
        parsedWallet.connectParams = {
          chainId
        };
      }
      await lastConnectedWalletStorage.setItem(LAST_CONNECTED_WALLET_STORAGE_KEY, JSON.stringify(parsedWallet));
    } catch (error) {
      console.error(`Error saving the last active chain: ${error}`);
    }
  }, []);
  const switchChain = useCallback(async chainId => {
    if (!activeWallet) {
      throw new Error("No active wallet");
    }
    await activeWallet.switchChain(chainId);
    const _signer = await activeWallet.getSigner();
    await storeLastActiveChainId(chainId);
    setSigner(_signer);
  }, [activeWallet, storeLastActiveChainId]);
  const autoConnectTriggered = useRef(false);

  // Auto Connect
  useEffect(() => {
    if (autoConnectTriggered.current) {
      return;
    }
    // if explicitly set to false, don't auto connect
    // by default, auto connect
    if (props.shouldAutoConnect === false) {
      setConnectionStatus("disconnected");
      return;
    }
    if (activeWallet) {
      // there's already an active wallet, don't auto connect
      return;
    }
    if (connectionStatus !== "unknown") {
      // only try to auto connect if we're in the unknown state
      return;
    }
    autoConnectTriggered.current = true;
    async function autoconnect() {
      const walletInfo = await getLastConnectedWalletInfo();
      if (!walletInfo) {
        setConnectionStatus("disconnected");
        return;
      }
      const walletObj = props.supportedWallets.find(W => W.id === walletInfo.walletId);
      if (!walletObj) {
        // last connected wallet is no longer present in the supported wallets
        setConnectionStatus("disconnected");
        return;
      }
      const personalWalletInfo = walletInfo.connectParams?.personalWallet;
      if (personalWalletInfo) {
        const personalWallets = walletObj.personalWallets || [];
        const personalWalleObj = personalWallets.find(W => W.id === personalWalletInfo.walletId);
        if (personalWalleObj) {
          // create a personal wallet instance and auto connect it
          const personalWalletInstance = createWalletInstance(personalWalleObj);
          try {
            await timeoutPromise(personalWalletInstance.autoConnect(personalWalletInfo.connectParams), {
              ms: autoConnectTimeout,
              message: autoConnectTimeoutErrorMessage
            });
          } catch (e) {
            console.error("Failed to auto connect wallet");
            console.error(e);
            setConnectionStatus("disconnected");
            return;
          }

          // set the personal wallet instance to the connectParams
          walletInfo.connectParams = {
            ...walletInfo.connectParams,
            personalWallet: personalWalletInstance
          };
        } else {
          // last used personal wallet is no longer present in the supported wallets
          setConnectionStatus("disconnected");
          return;
        }
      }

      // create a wallet instance and auto connect it
      const wallet = createWalletInstance(walletObj);
      try {
        setConnectionStatus("connecting");
        await timeoutPromise(wallet.autoConnect(walletInfo.connectParams), {
          ms: autoConnectTimeout,
          message: autoConnectTimeoutErrorMessage
        });
        setConnectedWallet(wallet, walletInfo.connectParams, true);
      } catch (e) {
        console.error("Failed to auto connect wallet");
        console.error(e);
        lastConnectedWalletStorage.removeItem(LAST_CONNECTED_WALLET_STORAGE_KEY);
        setConnectionStatus("disconnected");
      }
    }
    autoconnect();
  }, [createWalletInstance, props.supportedWallets, setConnectedWallet, props.shouldAutoConnect, activeWallet, connectionStatus, autoConnectTimeout]);
  const connectWallet = useCallback(async function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const [WalletObj, connectParams] = args;
    const _connectedParams = {
      chainId: chainToConnect?.chainId,
      ...(connectParams || {})
    };
    const wallet = createWalletInstance(WalletObj);
    setConnectionStatus("connecting");
    try {
      // if magic is using social login - it will redirect the page - so need to save walletInfo before connecting
      // TODO: find a better way to handle this
      if (WalletObj.id === walletIds.magicLink) {
        saveLastConnectedWalletInfo({
          walletId: WalletObj.id,
          connectParams: _connectedParams
        });
      }
      await wallet.connect(_connectedParams);
      setConnectedWallet(wallet, _connectedParams);
    } catch (e) {
      console.error(`Error connecting to wallet: ${e}`);
      setConnectionStatus("disconnected");
      throw e;
    }
    return wallet;
  }, [createWalletInstance, setConnectedWallet, chainToConnect]);
  const onWalletDisconnect = useCallback(async () => {
    await lastConnectedWalletStorage.removeItem(LAST_CONNECTED_WALLET_STORAGE_KEY);
    setConnectionStatus("disconnected");
    setSigner(undefined);
    setActiveWallet(undefined);
    setActiveWalletConfig(undefined);
  }, []);
  const disconnectWallet = useCallback(async () => {
    // if disconnect is called before the wallet is connected
    if (!activeWallet) {
      onWalletDisconnect();
      return;
    }
    const personalWallet = activeWallet.getPersonalWallet();
    await activeWallet.disconnect();
    if (personalWallet) {
      await personalWallet?.disconnect();
    }
    onWalletDisconnect();
  }, [activeWallet, onWalletDisconnect]);

  // when wallet's network or account is changed using the extension, update UI
  useEffect(() => {
    if (!activeWallet) {
      return;
    }
    const update = async () => {
      const _signer = await activeWallet.getSigner();
      setSigner(_signer);
    };
    activeWallet.addListener("change", () => {
      update();
    });
    activeWallet.addListener("disconnect", () => {
      onWalletDisconnect();
    });
    return () => {
      activeWallet.removeListener("change");
      activeWallet.removeListener("disconnect");
    };
  }, [activeWallet, onWalletDisconnect]);
  return /*#__PURE__*/jsx(ThirdwebWalletContext.Provider, {
    value: {
      disconnect: disconnectWallet,
      wallets: props.supportedWallets,
      connect: connectWallet,
      signer,
      activeWallet,
      activeWalletConfig,
      connectionStatus,
      setConnectionStatus,
      createWalletInstance: createWalletInstance,
      createdWalletInstance: createdWalletInstance,
      createWalletStorage: props.createWalletStorage,
      switchChain,
      setConnectedWallet: setConnectedWallet,
      activeChain: props.activeChain,
      chainToConnect,
      getWalletConfig: walletInstance => {
        return walletInstanceToConfig.get(walletInstance);
      },
      activeChainSetExplicitly: props.activeChainSetExplicitly,
      clientId: props.clientId
    },
    children: props.children
  });
}
function useWalletContext() {
  const ctx = useContext(ThirdwebWalletContext);
  if (!ctx) {
    throw new Error(`useWalletContext() can only be used inside <ThirdwebProvider />`);
  }
  return ctx;
}
async function getLastConnectedWalletInfo() {
  const str = await lastConnectedWalletStorage.getItem(LAST_CONNECTED_WALLET_STORAGE_KEY);
  if (!str) {
    return null;
  }
  try {
    return JSON.parse(str);
  } catch {
    await lastConnectedWalletStorage.removeItem(LAST_CONNECTED_WALLET_STORAGE_KEY);
    return null;
  }
}
async function saveLastConnectedWalletInfo(walletInfo) {
  try {
    await lastConnectedWalletStorage.setItem(LAST_CONNECTED_WALLET_STORAGE_KEY, JSON.stringify(walletInfo));
  } catch (e) {
    console.error("Error saving the last connected wallet info", e);
  }
}

/**
 * Timeout a promise with a given Error message if the promise does not resolve in given time
 *
 * @param promise - Promise to track for timeout
 * @param option - timeout options
 * @returns
 */
function timeoutPromise(promise, option) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      reject(new Error(option.message));
    }, option.ms);
    promise.then(res => {
      clearTimeout(timeoutId);
      resolve(res);
    }, err => {
      clearTimeout(timeoutId);
      reject(err);
    });
  });
}
const autoConnectTimeoutErrorMessage = `Failed to Auto connect. Auto connect timed out. You can increase the timeout duration using the autoConnectTimeout prop on <ThirdwebProvider />`;

/**
 * @returns the current active wallet instance
 */
function useWallet() {
  const context = useWalletContext();
  invariant(context, "useWallet() hook must be used within a <ThirdwebProvider/>");
  return context.activeWallet;
}

/**
 * @returns the current active wallet's configuration object
 */
function useWalletConfig() {
  const context = useWalletContext();
  invariant(context, "useWallet() hook must be used within a <ThirdwebProvider/>");
  return context.activeWalletConfig;
}

/**
 *
 * @returns `supportedWallets` configured in the `<ThirdwebProvider/>`
 */
function useWallets() {
  const context = useWalletContext();
  invariant(context, "useWallets() hook must be used within a <ThirdwebProvider/>");
  return context.wallets;
}

/**
 *
 * @returns a method to connect to a wallet class
 */
function useConnect() {
  const context = useWalletContext();
  invariant(context, "useConnect() hook must be used within a <ThirdwebProvider/>");
  return context.connect;
}

/**
 *
 * @returns a method to disconnect from the current active wallet
 */
function useDisconnect() {
  const context = useWalletContext();
  invariant(context, "useDisconnect() hook must be used within a <ThirdwebProvider/>");
  return context.disconnect;
}

/**
 *
 * @returns the connection status of the wallet
 *
 * It can be one of the following:
 * 1. `unknown` - when wallet connection status is not yet known
 * 2. `connecting` - when wallet is connecting
 * 3. `connected` - when wallet is connected
 * 4. `disconnected` - when wallet is disconnected
 *
 */
function useConnectionStatus() {
  const context = useWalletContext();
  invariant(context, "useConnectionStatus() must be used within a <ThirdwebProvider/>");
  return context.connectionStatus;
}

/**
 *
 * @returns a method to create an instance of given wallet class
 */
function useSetConnectionStatus() {
  const context = useWalletContext();
  invariant(context, "useSetConnectionStatus() must be used within a <ThirdwebProvider/>");
  return context.setConnectionStatus;
}

/**
 *
 * @returns a method to create an instance of given wallet class
 */
function useCreateWalletInstance() {
  const context = useWalletContext();
  invariant(context, "useCreateWalletInstance() must be used within a <ThirdwebProvider/>");
  return context.createWalletInstance;
}

/**
 *
 * @returns a method to connect the wallet to network/chain with given chainId
 */
function useSwitchChain() {
  const context = useWalletContext();
  invariant(context, "useSwitchChain() must be used within a <ThirdwebProvider/>");
  return context.switchChain;
}

/**
 *
 * @returns a method to set a connected wallet instance
 */
function useSetConnectedWallet() {
  const context = useWalletContext();
  invariant(context, "useSwitchChain() must be used within a <ThirdwebProvider/>");
  return context.setConnectedWallet;
}

const TW_CACHE_KEY_PREFIX = "tw-cache";

/**
 * @internal
 */
function enforceCachePrefix(input) {
  return [TW_CACHE_KEY_PREFIX, ...input.filter(i => typeof i !== "string" || i !== TW_CACHE_KEY_PREFIX)];
}

/**
 * @internal
 */
function createContractCacheKey() {
  let contractAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : constants.AddressZero;
  let input = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return enforceCachePrefix(["contract", contractAddress, ...input]);
}

/**
 @internal
 */
function createCacheKeyWithNetwork(input, chainId) {
  return enforceCachePrefix(cacheKeys.network.active(chainId).concat(input));
}

/**
 * @internal
 */
function invalidateContractAndBalances(queryClient, contractAddress, chainId) {
  return Promise.all([queryClient.invalidateQueries(enforceCachePrefix(createCacheKeyWithNetwork(createContractCacheKey(contractAddress), chainId))), queryClient.invalidateQueries(enforceCachePrefix(createCacheKeyWithNetwork(["balance"], chainId)))]);
}

/**
 @internal
 */
const cacheKeys = {
  auth: {
    user: () => enforceCachePrefix(["user"])
  },
  network: {
    active: chainId => enforceCachePrefix(["chainId", chainId])
  },
  wallet: {
    balance: (chainId, walletAddress, tokenAddress) => enforceCachePrefix(createCacheKeyWithNetwork(enforceCachePrefix(["balance", {
      walletAddress,
      tokenAddress
    }]), chainId))
  },
  contract: {
    read: (contractAddress, fnIdentity) => createContractCacheKey(contractAddress, ["read", fnIdentity]),
    type: contractAddress => createContractCacheKey(contractAddress, ["contract-type"]),
    compilerMetadata: contractAddress => createContractCacheKey(contractAddress, ["publish-metadata"]),
    typeAndCompilerMetadata: contractAddress => createContractCacheKey(contractAddress, ["contract-type-and-metadata"]),
    metadata: contractAddress => createContractCacheKey(contractAddress, ["metadata"]),
    extractFunctions: contractAddress => createContractCacheKey(contractAddress, ["extractFunctions"]),
    call: (contractAddress, functionName, args, overrides) => createContractCacheKey(contractAddress, ["call", functionName, args, overrides]),
    accountFactory: {
      getAll: contractAddress => createContractCacheKey(contractAddress, ["accountFactory"]),
      isAccountDeployed: (contractAdress, admin) => createContractCacheKey(contractAdress, ["isAccountDeployed", admin]),
      getAllForAddress: (contractAdress, address) => createContractCacheKey(contractAdress, ["getAllForAddress", address])
    },
    account: {
      signers: contractAddress => createContractCacheKey(contractAddress, ["account", "signers"])
    },
    app: {
      get: contractAddress => createContractCacheKey(contractAddress, ["appURI"])
    },
    events: {
      getEvents: (contractAddress, eventName) => createContractCacheKey(contractAddress, ["events", "getEvents", {
        eventName
      }]),
      getAllEvents: contractAddress => createContractCacheKey(contractAddress, ["events", "getAllEvents"])
    },
    // specific contract types
    nft: {
      get: (contractAddress, tokenId) => createContractCacheKey(contractAddress, ["get", {
        tokenId
      }]),
      balanceOf: (contractAddress, owner, tokenId) => createContractCacheKey(contractAddress, ["balanceOf", {
        owner,
        tokenId
      }]),
      query: {
        all: (contractAddress, params) => createContractCacheKey(contractAddress, params ? ["query", "all", params] : ["query", "all"]),
        totalCirculatingSupply: contractAddress => createContractCacheKey(contractAddress, ["query", "totalCirculatingSupply"]),
        totalCount: contractAddress => createContractCacheKey(contractAddress, ["query", "totalCount"]),
        owned: {
          all: (contractAddress, owner) => createContractCacheKey(contractAddress, ["query", "owned", "all", owner])
        }
      },
      sharedMetadata: {
        get: contractAddress => createContractCacheKey(contractAddress)
      },
      drop: {
        getAllUnclaimed: (contractAddress, params) => createContractCacheKey(contractAddress, params ? ["getAllUnclaimed", params] : ["getAllUnclaimed"]),
        getAllClaimed: (contractAddress, params) => createContractCacheKey(contractAddress, params ? ["getAllClaimed", params] : ["getAllClaimed"]),
        totalUnclaimedSupply: contractAddress => createContractCacheKey(contractAddress, ["totalUnclaimedSupply"]),
        totalClaimedSupply: contractAddress => createContractCacheKey(contractAddress, ["totalClaimedSupply"]),
        revealer: {
          getBatchesToReveal: (contractAddress, params) => createContractCacheKey(contractAddress, params ? ["getBatchesToReveal", params] : ["getBatchesToReveal"])
        }
      }
    },
    token: {
      totalSupply: contractAddress => createContractCacheKey(contractAddress, ["totalSupply"]),
      decimals: contractAddress => createContractCacheKey(contractAddress, ["decimals"]),
      balanceOf: (contractAddress, walletAddress) => createContractCacheKey(contractAddress, ["balanceOf", {
        walletAddress
      }])
    },
    marketplace: {
      getListing: (contractAddress, listingId) => createContractCacheKey(contractAddress, ["getListing", {
        listingId
      }]),
      getAllListings: (contractAddress, params) => createContractCacheKey(contractAddress, params ? ["getAllListings", params] : ["getAllListings"]),
      getTotalCount: contractAddress => createContractCacheKey(contractAddress, ["getTotalCount"]),
      getActiveListings: (contractAddress, params) => createContractCacheKey(contractAddress, params ? ["getActiveListings", params] : ["getActiveListings"]),
      auction: {
        getBidBufferBps: (contractAddress, listingId) => createContractCacheKey(contractAddress, ["auction", "getBidBufferBps", {
          listingId
        }]),
        getWinningBid: (contractAddress, listingId) => createContractCacheKey(contractAddress, ["auction", "getWinningBid", {
          listingId
        }]),
        getMinimumNextBid: (contractAddress, listingId) => createContractCacheKey(contractAddress, ["auction", "getMinimumNextBid", {
          listingId
        }]),
        getWinner: (contractAddress, listingId) => createContractCacheKey(contractAddress, ["auction", "getWinner", {
          listingId
        }])
      },
      directListings: {
        getAll: (contractAddress, params) => createContractCacheKey(contractAddress, params ? ["directListings", "getAll", params] : ["directListings", "getAll"]),
        getAllValid: (contractAddress, params) => createContractCacheKey(contractAddress, params ? ["directListings", "getAllValid", params] : ["directListings", "getAllValid"]),
        getListing: (contractAddress, listingId) => createContractCacheKey(contractAddress, ["directListings", "getListing", {
          listingId
        }]),
        getTotalCount: contractAddress => createContractCacheKey(contractAddress, ["directListings", "getTotalCount"])
      },
      englishAuctions: {
        getAll: (contractAddress, params) => createContractCacheKey(contractAddress, params ? ["englishAuctions", "getAll", params] : ["englishAuctions", "getAll"]),
        getAllValid: (contractAddress, params) => createContractCacheKey(contractAddress, params ? ["englishAuctions", "getAllValid", params] : ["englishAuctions", "getAllValid"]),
        getAuction: (contractAddress, auctionId) => createContractCacheKey(contractAddress, ["englishAuctions", "getAuction", {
          auctionId
        }]),
        getWinningBid: (contractAddress, auctionId) => createContractCacheKey(contractAddress, ["englishAuctions", "getWinningBid", {
          auctionId
        }]),
        getTotalCount: contractAddress => createContractCacheKey(contractAddress, ["englishAuctions", "getTotalCount"])
      }
    }
  },
  // extensions
  extensions: {
    claimConditions: {
      getActive: (contractAddress, tokenId, options) => createContractCacheKey(contractAddress, tokenId ? ["claimConditions", "getActive", {
        tokenId
      }, options] : ["claimConditions", "getActive", options]),
      getAll: (contractAddress, tokenId, options) => createContractCacheKey(contractAddress, tokenId ? ["claimConditions", "getAll", {
        tokenId
      }, options] : ["claimConditions", "getAll", options]),
      getClaimerProofs: (contractAddress, tokenId) => createContractCacheKey(contractAddress, tokenId ? ["claimConditions", "getClaimerProofs", {
        tokenId
      }] : ["claimConditions", "getClaimerProofs"]),
      getClaimIneligibilityReasons: (contractAddress, params, tokenId) => createContractCacheKey(contractAddress, tokenId ? ["claimConditions", "getIneligibilityReasons", {
        tokenId
      }, params] : ["claimConditions", "getIneligibilityReasons", params]),
      // combinations of queries cache keys
      useActiveClaimConditionForWallet: (contractAddress, walletAddress, tokenId) => createContractCacheKey(contractAddress, tokenId ? ["claimConditions", "useActiveClaimConditionForWallet", {
        tokenId,
        walletAddress
      },,] : ["claimConditions", "getIneligibilityReasons", {
        walletAddress
      }])
    },
    // primary sale contracts
    sales: {
      getRecipient: contractAddress => createContractCacheKey(contractAddress, ["sales"])
    },
    // royalties
    royalties: {
      getDefaultRoyaltyInfo: contractAddress => createContractCacheKey(contractAddress, ["royalties"])
    },
    // platform fees
    platformFees: {
      get: contractAddress => createContractCacheKey(contractAddress, ["platformFees"])
    },
    // contract metadata
    metadata: {
      get: contractAddress => createContractCacheKey(contractAddress, ["metadata"])
    },
    roles: {
      getAll: contractAddress => createContractCacheKey(contractAddress, ["roles"]),
      get: (contractAddress, role) => createContractCacheKey(contractAddress, ["roles", {
        role
      }])
    }
  }
};

const AUTH_TOKEN_STORAGE_KEY = "auth_token_storage_key";

/**
 * Hook to securely login to a backend with the connected wallet. The backend
 * authentication URL must be configured on the ThirdwebProvider.
 *
 * @returns - A function to invoke to login with the connected wallet, and an isLoading state.
 *
 * @see {@link https://portal.thirdweb.com/react/react.uselogin?utm_source=sdk | Documentation}
 *
 * @beta
 */
function useLogin() {
  const queryClient = useQueryClient();
  const authConfig = useThirdwebAuthContext();
  const wallet = useWallet();
  const login = useMutation({
    mutationFn: async () => {
      invariant(authConfig, "Please specify an authConfig in the ThirdwebProvider");
      invariant(wallet, "You need a connected wallet to login.");
      invariant(authConfig.authUrl, "Please specify an authUrl in the authConfig.");
      const address = await wallet.getAddress();
      const chainId = await wallet.getChainId();
      let res = await fetch(`${authConfig.authUrl}/payload`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          address,
          chainId: chainId.toString()
        })
      });
      if (!res.ok) {
        throw new Error(`Failed to get payload with status code ${res.status}`);
      }
      let payloadData;
      try {
        ({
          payload: payloadData
        } = await res.json());
      } catch {
        throw new Error(`Failed to get payload`);
      }
      const payload = await signLoginPayload({
        wallet,
        payload: payloadData
      });
      res = await fetch(`${authConfig.authUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          payload
        }),
        credentials: "include"
      });
      if (!res.ok) {
        const data = await res.json();
        if (data.error) {
          throw new Error(data.error);
        }
        throw new Error(`Login request failed with status code ${res.status}`);
      }
      const {
        token
      } = await res.json();
      await authConfig.secureStorage?.setItem(AUTH_TOKEN_STORAGE_KEY, token);
      queryClient.invalidateQueries(cacheKeys.auth.user());
      return token;
    }
  });
  return {
    login: () => login.mutateAsync(),
    isLoading: login.isLoading
  };
}

/**
 * Hook to logout the connected wallet from the backend.
 * The backend logout URL must be configured on the ThirdwebProvider.
 *
 * @returns - A function to invoke to logout.
 *
 * @see {@link https://portal.thirdweb.com/react/react.uselogout?utm_source=sdk | Documentation}
 *
 * @beta
 */
function useLogout() {
  const queryClient = useQueryClient();
  const authConfig = useThirdwebAuthContext();
  const logout = useMutation({
    mutationFn: async () => {
      invariant(authConfig, "Please specify an authConfig in the ThirdwebProvider");
      invariant(authConfig.authUrl, "Please specify an authUrl in the authConfig.");
      await fetch(`${authConfig.authUrl}/logout`, {
        method: "POST",
        credentials: "include"
      });
      authConfig.secureStorage?.removeItem(AUTH_TOKEN_STORAGE_KEY);
      queryClient.invalidateQueries(cacheKeys.auth.user());
    }
  });
  return {
    logout: logout.mutateAsync,
    isLoading: logout.isLoading
  };
}

/**
 * Hook to get the currently logged in user.
 *
 * @returns - The currently logged in user or null if not logged in, as well as a loading state.
 *
 * @see {@link https://portal.thirdweb.com/react/react.useuser?utm_source=sdk | Documentation}
 *
 * @beta
 */
function useUser() {
  const authConfig = useThirdwebAuthContext();
  const {
    data: user,
    isLoading
  } = useQuery(cacheKeys.auth.user(), async () => {
    invariant(authConfig, "Please specify an authConfig in the ThirdwebProvider");
    invariant(authConfig.authUrl, "Please specify an authUrl in the authConfig.");
    const token = await authConfig.secureStorage?.getItem(AUTH_TOKEN_STORAGE_KEY);
    // We include credentials so we can getUser even if API is on different URL
    const params = {
      credentials: "include",
      ...(token ? {
        headers: {
          Authorization: `Bearer ${token}`
        }
      } : {})
    };
    const res = await fetch(`${authConfig.authUrl}/user`, params);
    return await res.json();
  }, {
    enabled: !!authConfig
  });
  return {
    user,
    isLoggedIn: !!user,
    isLoading
  };
}

/**
 * Hook to switch the account of the active wallet
 *
 * @returns - A function to invoke to switch account.
 *
 * @see {@link https://portal.thirdweb.com/react/react.useswitchaccount?utm_source=sdk | Documentation}
 *
 * @beta
 */
function useSwitchAccount() {
  const queryClient = useQueryClient();
  const authConfig = useThirdwebAuthContext();
  const switchAccount = useMutation({
    mutationFn: async address => {
      invariant(authConfig, "Please specify an authConfig in the ThirdwebProvider");
      invariant(authConfig.authUrl, "Please specify an authUrl in the authConfig.");
      await fetch(`${authConfig.authUrl}/switch-account`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          address
        })
      });
      queryClient.invalidateQueries(cacheKeys.auth.user());
    }
  });
  return {
    switchAccount: switchAccount.mutateAsync,
    isLoading: switchAccount.isLoading
  };
}

function useAuth() {
  const wallet = useWallet();
  const authConfig = useThirdwebAuthContext();
  return useMemo(() => {
    if (!authConfig?.domain) {
      return undefined;
    }
    if (!wallet) {
      return undefined;
    }
    return new ThirdwebAuth(wallet, authConfig.domain);
  }, [wallet, authConfig?.domain]);
}

const ThirdwebAuthProvider = _ref => {
  let {
    value,
    children
  } = _ref;
  // Remove trailing slash from URL if present
  const authContext = useMemo(() => {
    if (!value) {
      return undefined;
    }
    const context = {
      ...value,
      authUrl: value.authUrl?.replace(/\/$/, "")
    };
    return context;
  }, [value]);
  return /*#__PURE__*/jsxs(ThirdwebAuthContext.Provider, {
    value: authContext,
    children: [children, /*#__PURE__*/jsx(ChangeActiveWalletOnAccountSwitch, {})]
  });
};
function ChangeActiveWalletOnAccountSwitch() {
  const wallet = useWallet();
  const {
    logout
  } = useLogout();
  const {
    switchAccount
  } = useSwitchAccount();
  const authConfig = useThirdwebAuthContext();
  const queryClient = useQueryClient();

  // When active wallet switches, switch the active account cookie and invalidate user query
  useEffect(() => {
    const handleSwitchAccount = async data => {
      if (!data.address) {
        return;
      }
      try {
        await switchAccount(data.address);
      } catch (err) {
        console.debug(`[Auth] Failed to switch account to ${data.address} with error:\n`, err);
      }
    };
    const handleLogout = async () => {
      try {
        await logout();
      } catch (err) {
        console.debug(`[Auth] Failed to logout with error:\n`, err);
      }
    };
    const shouldAddListener = !!wallet && authConfig && authConfig.authUrl;
    if (shouldAddListener) {
      wallet.addListener("connect", handleSwitchAccount);
      wallet.addListener("change", handleSwitchAccount);
      wallet.addListener("disconnect", handleLogout);
    }
    return () => {
      if (shouldAddListener) {
        wallet.removeListener("connect", handleSwitchAccount);
        wallet.removeListener("change", handleSwitchAccount);
        wallet.removeListener("disconnect", handleLogout);
      }
    };
  }, [wallet, queryClient, authConfig, logout, switchAccount]);
  return null;
}

function useUpdateChainsWithClientId(supportedChains, activeChain, clientId) {
  const supportedChainsWithKey = useMemo(() => {
    return supportedChains.map(chain => updateChainRPCs(chain, clientId));
  }, [supportedChains, clientId]);
  const activeChainIdOrObjWithKey = useMemo(() => {
    if (!activeChain || typeof activeChain === "string" || typeof activeChain === "number") {
      return activeChain;
    }
    return updateChainRPCs(activeChain, clientId);
  }, [activeChain, clientId]);
  return [supportedChainsWithKey, activeChainIdOrObjWithKey];
}

const ThirdwebConfigContext = /* @__PURE__ */createContext(undefined);
const ThirdwebConfigProvider = _ref => {
  let {
    value,
    children
  } = _ref;
  return /*#__PURE__*/jsx(ThirdwebConfigContext.Provider, {
    value: value,
    children: children
  });
};
function useThirdwebConfigContext() {
  const context = useContext(ThirdwebConfigContext);
  invariant(context, "useThirdwebConfigContext() hook must be used within a <ThirdwebProvider/>");
  return context;
}

const ThirdwebSDKContext = /* @__PURE__ */createContext({});

// eslint-disable-next-line turbo/no-undeclared-env-vars, better-tree-shaking/no-top-level-side-effects
const __DEV__ = process.env.NODE_ENV !== "production";

/**
 * @internal
 */
function useSDKContext() {
  const ctx = useContext(ThirdwebSDKContext);
  invariant(ctx._inProvider, "useSDK must be called from within a ThirdwebProvider, did you forget to wrap your app in a <ThirdwebProvider />?");
  return ctx;
}

/**
 *
 * @returns {@link ThirdwebSDK}
 * Access the instance of the thirdweb SDK created by the ThirdwebProvider
 * to call methods using the connected wallet on the desiredChainId.
 * @example
 * ```javascript
 * const sdk = useSDK();
 * ```
 */
function useSDK() {
  const {
    sdk
  } = useSDKContext();
  return sdk;
}

/**
 * @internal
 */
function useSDKChainId() {
  const sdk = useSDK();
  return sdk?._chainId;
}

const INITIAL_CONTEXT_VALUE = {
  wallet: undefined,
  address: undefined,
  chainId: undefined,
  signer: undefined
};
const ThirdwebConnectedWalletContext = /* @__PURE__ */createContext(undefined);
const ThirdwebConnectedWalletProvider = _ref => {
  let {
    signer,
    children
  } = _ref;
  const {
    chains,
    clientId
  } = useThirdwebConfigContext();
  const storage = useSDK()?.storage;
  const [contextValue, setContextValue] = useState({
    ...INITIAL_CONTEXT_VALUE,
    signer: signer ? signer : undefined
  });
  useEffect(() => {
    setContextValue(val => ({
      ...val,
      signer: signer ? signer : undefined
    }));
  }, [signer]);
  useEffect(() => {
    if (!storage) {
      return;
    }
    let s = signer;
    if (signer) {
      // just get both of these up front and keep them around with the context
      Promise.all([signer.getAddress(), signer.getChainId()]).then(_ref2 => {
        let [address, chainId] = _ref2;
        const chain = chains.find(c => c.chainId === chainId);
        let rpcUrl = undefined;
        if (chain) {
          try {
            rpcUrl = getValidChainRPCs(chain, clientId)[0];
          } catch (e) {
            // failed to get a viable rpc url, nothing we can do
            console.error(e);
          }
        }

        // only if the signer is still the same!
        if (signer === s) {
          const wallet = new UserWallet(signer, {
            readonlySettings: rpcUrl ? {
              rpcUrl,
              chainId
            } : undefined
          }, storage);
          setContextValue({
            wallet,
            address,
            chainId,
            signer
          });
        }
      }).catch(err => {
        if (__DEV__) {
          console.warn("failed to get wallet instance in `<ThirdwebConnectedWalletProvider />`", err);
        }
      });
    } else {
      // if signer is not provided, re-set the context value to initial values
      setContextValue(INITIAL_CONTEXT_VALUE);
    }
    return () => {
      // set the previous signer to undefined because it is invalid now
      s = undefined;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [signer, clientId]);
  return /*#__PURE__*/jsx(ThirdwebConnectedWalletContext.Provider, {
    value: contextValue,
    children: children
  });
};
function useThirdwebConnectedWalletContext() {
  const context = useContext(ThirdwebConnectedWalletContext);
  invariant(context, "useThirdwebConnectedWalletContext() hook must be used within a <ThirdwebProvider/>");
  return context;
}

const WrappedThirdwebSDKProvider = _ref => {
  let {
    sdkOptions = {},
    storageInterface,
    supportedChains,
    activeChain,
    signer,
    children,
    clientId,
    secretKey
  } = _ref;
  const activeChainId = useMemo(() => {
    if (!activeChain) {
      return supportedChains[0]?.chainId;
    }
    if (typeof activeChain === "number") {
      return activeChain;
    }
    if (typeof activeChain === "string") {
      return supportedChains.find(c => c.slug === activeChain)?.chainId;
    }
    return activeChain.chainId;
  }, [activeChain, supportedChains]);
  const sdk = useMemo(() => {
    let chainId = activeChainId;
    const supportedChain = supportedChains.find(c => c.chainId === chainId);
    if (!supportedChain && chainId !== undefined) {
      console.warn(`The chainId ${chainId} is not in the configured chains, please add it to the ThirdwebProvider`);
      // reset the chainId as to not trigger an error in the sdk constructor
      chainId = undefined;
    }
    let readonlySettings = undefined;
    if (supportedChain && supportedChain.rpc.length > 0) {
      try {
        const rpcUrl = getValidChainRPCs(supportedChain, clientId)[0];
        readonlySettings = {
          chainId: supportedChain.chainId,
          rpcUrl
        };
      } catch (e) {
        // no-op
      }
    }

    // TODO: find a better way to fix the type error

    const mergedOptions = {
      readonlySettings,
      ...sdkOptions,
      supportedChains: supportedChains
    };
    let sdk_ = undefined;
    if (chainId) {
      // sdk from chainId
      sdk_ = new ThirdwebSDK(chainId, {
        ...mergedOptions,
        clientId,
        secretKey
      }, storageInterface);
    }
    // if we still have no sdk fall back to the first element in chains
    if (!sdk_) {
      if (supportedChains.length > 0) {
        chainId = supportedChains[0].chainId;
        sdk_ = new ThirdwebSDK(chainId, mergedOptions, storageInterface);
      } else {
        console.error("No chains configured, please pass a chain or chains to the ThirdwebProvider");
        return undefined;
      }
    }

    // set the chainId on the sdk instance to compare things later
    sdk_._chainId = chainId;
    return sdk_;
  }, [activeChainId, supportedChains, sdkOptions, storageInterface, clientId, secretKey]);
  useEffect(() => {
    // if we have an sdk and a signer update the signer
    if (sdk && sdk._chainId === activeChainId) {
      if (signer) {
        sdk.updateSignerOrProvider(signer);
      } else if (activeChainId) {
        sdk.updateSignerOrProvider(activeChainId);
      }
    }
    // we know what we're doing
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sdk, sdk?._chainId, signer, activeChainId]);
  const ctxValue = useMemo(() => ({
    sdk: sdk && sdk._chainId === activeChainId ? sdk : undefined,
    _inProvider: true
  }), [activeChainId, sdk]);
  return /*#__PURE__*/jsx(ThirdwebSDKContext.Provider, {
    value: ctxValue,
    children: children
  });
};

/**
 * A basic wrapper around the Thirdweb SDK.
 *
 * You can use this in order to be able to pass a provider & signer directly to the SDK.
 *
 * @remarks Utilizing this provider will mean hooks for wallet management are not available, if you need those please use the {@link ThirdwebProvider} instead.
 *
 * @public
 */
const ThirdwebSDKProvider = _ref2 => {
  let {
    signer,
    children,
    queryClient,
    supportedChains: _supportedChains,
    activeChain,
    clientId,
    ...restProps
  } = _ref2;
  if (!clientId) {
    checkClientIdOrSecretKey("No API key. Please provide a clientId. It is required to access thirdweb's services. You can create a key at https://thirdweb.com/create-api-key", clientId, undefined);
  }
  const supportedChains = _supportedChains || defaultChains;
  const supportedChainsNonNull = useMemo(() => {
    const isActiveChainObject = typeof activeChain === "object" && activeChain !== null;
    if (!isActiveChainObject) {
      return supportedChains;
    }
    const isActiveChainInSupportedChains = supportedChains.find(c => c.chainId === activeChain.chainId);

    // if activeChain is not in supportedChains - add it
    if (!isActiveChainInSupportedChains) {
      return [...supportedChains, activeChain];
    }

    // if active chain is in supportedChains - replace it with object in activeChain
    return supportedChains.map(c => c.chainId === activeChain.chainId ? activeChain : c);
  }, [supportedChains, activeChain]);
  const [supportedChainsWithKey, activeChainIdOrObjWithKey] = useUpdateChainsWithClientId(supportedChainsNonNull, activeChain || supportedChainsNonNull[0], clientId);
  const mergedChains = useMemo(() => {
    if (!activeChainIdOrObjWithKey || typeof activeChainIdOrObjWithKey === "string" || typeof activeChainIdOrObjWithKey === "number") {
      return supportedChainsWithKey;
    }
    const _mergedChains = [...supportedChainsWithKey.filter(c => c.chainId !== activeChainIdOrObjWithKey.chainId), activeChainIdOrObjWithKey];
    // return a _mergedChains uniqued by chainId key
    return _mergedChains.filter((chain, index, self) => index === self.findIndex(c => c.chainId === chain.chainId));
  }, [supportedChainsWithKey, activeChainIdOrObjWithKey]);
  return /*#__PURE__*/jsx(ThirdwebConfigProvider, {
    value: {
      chains: mergedChains,
      clientId
    },
    children: /*#__PURE__*/jsx(QueryClientProviderWithDefault, {
      queryClient: queryClient,
      children: /*#__PURE__*/jsx(WrappedThirdwebSDKProvider, {
        signer: signer,
        supportedChains: mergedChains,
        clientId: clientId,
        activeChain: activeChainIdOrObjWithKey,
        ...restProps,
        children: /*#__PURE__*/jsx(ThirdwebConnectedWalletProvider, {
          signer: signer,
          children: children
        })
      })
    })
  });
};

const ThirdwebProviderCore = _ref => {
  let {
    createWalletStorage = createAsyncLocalStorage,
    ...props
  } = _ref;
  const {
    activeChain
  } = props;
  const supportedChains = props.supportedChains || defaultChains;
  const supportedChainsNonNull = useMemo(() => {
    const isActiveChainObject = typeof activeChain === "object" && activeChain !== null;
    if (!isActiveChainObject) {
      return supportedChains;
    }
    const isActiveChainInSupportedChains = supportedChains.find(c => c.chainId === activeChain.chainId);

    // if activeChain is not in supportedChains - add it
    if (!isActiveChainInSupportedChains) {
      return [...supportedChains, activeChain];
    }

    // if active chain is in supportedChains - replace it with object in activeChain
    return supportedChains.map(c => c.chainId === activeChain.chainId ? activeChain : c);
  }, [supportedChains, activeChain]);
  const [supportedChainsWithKey, activeChainIdOrObjWithKey] = useUpdateChainsWithClientId(supportedChainsNonNull, props.activeChain || supportedChainsNonNull[0], props.clientId);
  const activeChainWithKey = useMemo(() => {
    if (typeof activeChainIdOrObjWithKey === "number") {
      const resolveChain = supportedChainsWithKey.find(chain => chain.chainId === activeChainIdOrObjWithKey);
      if (!resolveChain) {
        throw new Error(`Invalid chainId: ${activeChainIdOrObjWithKey}. It is not one of supportedChains`);
      }
      return resolveChain;
    }
    if (typeof activeChainIdOrObjWithKey === "string") {
      const resolvedChain = supportedChainsWithKey.find(chain => chain.slug === activeChainIdOrObjWithKey);
      if (!resolvedChain) {
        throw new Error(`Invalid chain: "${activeChainIdOrObjWithKey}". It is not one of supportedChains`);
      }
      return resolvedChain;
    }
    return activeChainIdOrObjWithKey;
  }, [activeChainIdOrObjWithKey, supportedChainsWithKey]);
  const dAppMeta = props.dAppMeta;
  return /*#__PURE__*/jsx(ThirdwebThemeContext.Provider, {
    value: props.theme,
    children: /*#__PURE__*/jsx(ThirdwebWalletProvider, {
      chains: supportedChainsWithKey,
      supportedWallets: props.supportedWallets,
      shouldAutoConnect: props.autoConnect,
      createWalletStorage: createWalletStorage,
      dAppMeta: dAppMeta,
      activeChain: activeChainWithKey,
      autoSwitch: props.autoSwitch,
      autoConnectTimeout: props.autoConnectTimeout,
      clientId: props.clientId,
      activeChainSetExplicitly: !!props.activeChain,
      children: /*#__PURE__*/jsx(ThirdwebSDKProviderWrapper, {
        queryClient: props.queryClient,
        sdkOptions: props.sdkOptions,
        supportedChains: supportedChainsWithKey,
        activeChain: activeChainWithKey,
        storageInterface: props.storageInterface,
        authConfig: props.authConfig,
        clientId: props.clientId,
        secretKey: props.secretKey,
        children: /*#__PURE__*/jsx(ThirdwebAuthProvider, {
          value: props.authConfig,
          children: props.children
        })
      })
    })
  });
};
const ThirdwebSDKProviderWrapper = _ref2 => {
  let {
    children,
    ...props
  } = _ref2;
  const signer = useWalletContext()?.signer;
  return /*#__PURE__*/jsx(ThirdwebSDKProvider, {
    signer: signer,
    ...props,
    children: children
  });
};

function useSupportedChains() {
  const context = useContext(ThirdwebConfigContext);
  invariant(context, "useSupportedChains() hook must be used within a <ThirdwebProvider/>");
  return context.chains;
}

/**
 * A hook to get the native or (optional) ERC20 token balance of the connected wallet.
 *
 * @param tokenAddress - the address of the token contract, if empty will use the chain's native token
 * @returns the balance of the connected wallet (native or ERC20)
 * @beta
 */
function useBalance(tokenAddress) {
  const walletAddress = useAddress();
  const {
    wallet,
    address,
    chainId
  } = useThirdwebConnectedWalletContext();
  const cacheKey = useMemo(() => {
    return cacheKeys.wallet.balance(chainId || -1, address, tokenAddress);
  }, [chainId, tokenAddress, address]);
  return useQuery(cacheKey, () => {
    return wallet?.balance(tokenAddress);
  }, {
    // if user is not logged in no reason to try to fetch
    enabled: !!wallet && !!walletAddress && !!chainId,
    retry: true,
    keepPreviousData: false
  });
}

/**
 * @internal
 */
function useConnectedWallet() {
  const context = useContext(ThirdwebConnectedWalletContext);
  invariant(context, "useConnectedWallet() hook must be used within a <ThirdwebProvider/>");
  return context.signer;
}

/**
 * Hook for accessing the address of the connected wallet
 *
 * ```javascript
 * import { useAddress } from "@thirdweb-dev/react"
 * ```
 *
 *
 * @example
 * To get the address of the connected wallet, you can use the hook as follows:
 *
 * ```javascript
 * import { useAddress } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const address = useAddress()
 *
 *   return <div>{address}</div>
 * }
 * ```
 *
 * The `address` variable will hold the address of the connected wallet if a user has connected using one of the supported wallet connection hooks.
 *
 * @see {@link https://portal.thirdweb.com/react/react.useaddress?utm_source=sdk | Documentation}
 *
 * @public
 */
function useAddress() {
  const context = useContext(ThirdwebConnectedWalletContext);
  invariant(context, "useAddress() hook must be used within a <ThirdwebProvider/>");
  return context.address;
}

/**
 * Hook for accessing the chain ID of the network the current wallet is connected to
 *
 * ```javascript
 * import { useChainId } from "@thirdweb-dev/react"
 * ```
 *
 * @example
 * You can get the chain ID of the connected wallet by using the hook as follows:
 * ```javascript
 * import { useChainId } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const chainId = useChainId()
 *
 *   return <div>{chainId}</div>
 * }
 * ```
 * @see {@link https://portal.thirdweb.com/react/react.usechainid?utm_source=sdk | Documentation}
 * @public
 */
function useChainId() {
  const context = useContext(ThirdwebConnectedWalletContext);
  invariant(context, "useChainId() hook must be used within a <ThirdwebProvider/>");
  return context.chainId;
}

/**
 * Hook for accessing the active Chain the current wallet is connected to
 *
 * ```javascript
 * import { useChain } from "@thirdweb-dev/react-core"
 * ```
 *
 * @example
 * You can get the chain of the connected wallet by using the hook as follows:
 * ```javascript
 * import { useChain } from "@thirdweb-dev/react-core"
 *
 * const App = () => {
 *   const chain = useChain()
 *
 *   return <div>{chain.chainId}</div>
 * }
 * ```
 * @see {@link https://portal.thirdweb.com/react/react.useActiveChain?utm_source=sdk | Documentation}
 * @public
 */
function useChain() {
  const chainId = useChainId();
  const chains = useSupportedChains();
  const chain = useMemo(() => {
    return chains.find(_chain => _chain.chainId === chainId);
  }, [chainId, chains]);
  const unknownChain = useMemo(() => {
    if (!chain) {
      return defaultChains.find(c => c.chainId === chainId);
    }
  }, [chainId, chain]);
  return chain || unknownChain;
}

/**
 * @deprecated
 *
 * This hook is renamed to `useChain`
 *
 * use the `useChain` hook instead
 */
function useActiveChain() {
  return useChain();
}

// this hook is only for backwards compatibility

/**
 *
 * @deprecated - use `useChain`, `useSwitchChain`, `useChainId` instead
 *
 * Hook for getting metadata about the network the current wallet is connected to and switching networks
 *
 * @example
 * ```javascript
 * import { useNetwork } from "@thirdweb-dev/react";
 *
 * const App = () => {
 *   const [, switchNetwork] = useNetwork();
 *   return (
 *      // switchNetwork is undefined if the wallet does not support programmatic network switching
 *      // 137 is the chainId for Polygon in this example
 *     <button onClick={() => switchNetwork(137)}>
 *        Switch Network
 *     </button>
 *   );
 * };
```
 *
 * It's important to note that some wallet apps do not support programmatic network switching and switchNetwork will be undefined.
 * For those situations, you can typically switch networks in the wallet app this hook will still work.
 *
 * @public
 */
function useNetwork() {
  const chain = useChain();
  const chainId = useChainId();
  const switchChain = useSwitchChain();
  const supportedChains = useSupportedChains();
  const wallet = useWallet();
  const isMetamaskInstalled = assertWindowEthereum(globalThis.window) ? globalThis.window.ethereum.isMetaMask : false;
  const isCoinbaseInstalled = assertWindowEthereum(globalThis.window) ? globalThis.window.ethereum.isCoinbaseWallet : false;

  // switch not supported if connected to a mobile wallet
  const switchChainNotSupported = !wallet || wallet.walletId === walletIds.walletConnectV1 || wallet.walletId === walletIds.walletConnect || wallet.walletId === walletIds.metamask && !isMetamaskInstalled || wallet.walletId === walletIds.coinbase && !isCoinbaseInstalled;

  // error when switching network
  const [error, setError] = useState(undefined);

  // loading: true when switching network
  const [loading, setLoading] = useState(false);
  const switchNetwork = useCallback(async _chainId => {
    // reset error and loading
    setLoading(true);
    setError(undefined);
    try {
      await switchChain(_chainId);
    } catch (e) {
      setError(e);
      setLoading(false);
      return {
        data: undefined,
        error: e
      };
    }
    setLoading(false);
    return {
      data: supportedChains.find(c => c.chainId === _chainId) || defaultChains.find(c => c.chainId === _chainId),
      error: undefined
    };
  }, [switchChain, supportedChains]);
  return [{
    data: {
      chain: chainId === undefined ? undefined : chain || {
        chainId,
        unsupported: true
      },
      chains: wallet ? supportedChains : []
    },
    error: error,
    loading
  }, switchChainNotSupported ? undefined : switchNetwork];
}

/**
 * A wallet address.
 * @beta
 */

/**
 * A contract address.
 * @beta
 */

/**
 * The parameters to pass to the mint and transfer functions.
 *
 * @beta
 */

/**
 * The parameters to pass to the burn function.
 *
 * @beta
 */

// NFTS //
/**
 * The possible NFT contract types.
 * @example
 * ```javascript
 * const { contract } = useContract("{{contract_address}}");
 * ```
 * @beta
 */
/**
 * The possible Token contract types.
 * @example
 * ```javascript
 * const { contract } = useContract("{{contract_address}}");
 * ```
 * @beta
 */
/**
 * Possible NFT contract types.
 * @beta
 */
/**
 * The params to pass to `useTransferNFT`.
 * @beta
 */
/**
 * The params to pass to `useTransferBatchNFT`.
 * @beta
 */
/**
 * The params to pass to `useMintNFTSupply`.
 * @beta
 */
/**
 * The params for the {@link useMintNFT} hook mutation.
 *
 * @beta
 */
/**
 * The return type of the {@link useMintNFT} hook.
 *
 * @beta
 */
/**
 * The params for the {@link useBurnNFT} hook mutation.
 *
 * @beta
 */
// DROPS //
/**
 * The possible DROP contract types.
 * @beta
 */
/**
 * The possible revealable contract types.
 * @beta
 */
/**
 * The params for the {@link useDelayedRevealLazyMint} hook mutation.
 *
 * @beta
 */
/**
 * The params for the {@link useRevealLazyMint} hook mutation.
 *
 * @beta
 */
/**
 * The params for the {@link useClaimNFT} hook mutation.
 *
 * @beta
 */
/**
 * The return type of the {@link useClaimNFT} hook.
 *
 * @beta
 */
// MARKETPLACE //
// TOKEN DROP //
// Helpers
function getErcs(contract) {
  return {
    erc1155: getErc1155(contract),
    erc721: getErc721(contract),
    erc20: getErc20(contract)
  };
}
function getErc1155(contract) {
  if (!contract) {
    return undefined;
  }
  try {
    if ("erc1155" in contract) {
      return contract.erc1155;
    }
  } catch (error) {
    return undefined;
  }
  return undefined;
}
function getErc721(contract) {
  if (!contract) {
    return undefined;
  }
  try {
    if ("erc721" in contract) {
      return contract.erc721;
    }
  } catch (error) {
    return undefined;
  }
  return undefined;
}
function getErc20(contract) {
  if (!contract) {
    return undefined;
  }
  try {
    if ("erc20" in contract) {
      return contract.erc20;
    }
  } catch (error) {
    return undefined;
  }
  return undefined;
}

/** @internal */
function useQueryWithNetwork(queryKey, queryFn, options) {
  const activeChainId = useSDKChainId();
  const mergedOptions = {
    ...options,
    enabled: !!(activeChainId && options?.enabled)
  };
  return useQuery(createCacheKeyWithNetwork(queryKey, activeChainId), queryFn, mergedOptions);
}

/**
 * The options to be passed as the second parameter to the {@link useClaimIneligibilityReasons}` hook.
 *
 * @beta
 */

/**
 * The params for the {@link useSetClaimConditions} hook mutation.
 *
 * @beta
 */

/** **********************/
/**     READ  HOOKS     **/
/** **********************/
/**
 * Get the active claim condition
 *
 * @example
 * ```javascript
 * const { data: activeClaimCondition, isLoading, error } = useActiveClaimCondition(contract);
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC721, ERC1155 or ERC20 spec and implements the `claimConditions` extension.
 * @param tokenId - the id of the token to fetch the claim conditions for (if the contract is an ERC1155 contract)
 * @returns a response object with the currently active claim condition
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1 | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.useactiveclaimcondition?utm_source=sdk | Documentation}
 * @beta
 */
function useActiveClaimCondition(contract, tokenId, options) {
  const contractAddress = contract?.getAddress();
  const {
    erc1155,
    erc721,
    erc20
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.extensions.claimConditions.getActive(contractAddress, tokenId, options), () => {
    if (erc1155) {
      requiredParamInvariant(tokenId, "tokenId is required for ERC1155 claim conditions");
      return erc1155.claimConditions.getActive(tokenId, options);
    }
    if (erc721) {
      return erc721.claimConditions.getActive(options);
    }
    if (erc20) {
      return erc20.claimConditions.getActive(options);
    }
    throw new Error("Contract must be ERC721, ERC1155 or ERC20");
  }, {
    // Checks that happen here:
    // 1. if the contract is based on ERC1155 contract => tokenId cannot be `undefined`
    // 2. if the contract is NOT based on ERC1155 => we have to have either an ERC721 or ERC20 contract
    enabled: erc1155 ? tokenId !== undefined : !!erc721 || !!erc20
  });
}

/**
 * Get claimer proofs
 *
 * @example
 * ```javascript
 * const { data: claimerProofs, isLoading, error } = useClaimerProofs(contract);
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC721, ERC1155 or ERC20 spec and implements the `claimConditions` extension.
 * @param claimerAddress - the address of the claimer to fetch the claimer proofs for
 * @param tokenId - the id of the token to fetch the claimer proofs for (if the contract is an ERC1155 contract)
 * @param claimConditionId - optional the claim condition id to get the proofs for
 * @returns a response object with the snapshot for the provided address
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1 | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.useclaimerproofs?utm_source=sdk | Documentation}
 * @beta
 */
function useClaimerProofs(contract, claimerAddress, tokenId, claimConditionId) {
  const contractAddress = contract?.getAddress();
  const {
    erc1155,
    erc721,
    erc20
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.extensions.claimConditions.getClaimerProofs(contractAddress, tokenId), () => {
    if (erc1155) {
      requiredParamInvariant(tokenId, "tokenId is required for ERC1155 claim conditions");
      return erc1155.claimConditions.getClaimerProofs(tokenId, claimerAddress, claimConditionId);
    }
    if (erc721) {
      return erc721.claimConditions.getClaimerProofs(claimerAddress, claimConditionId);
    }
    if (erc20) {
      return erc20.claimConditions.getClaimerProofs(claimerAddress, claimConditionId);
    }
    throw new Error("Contract must be ERC721, ERC1155 or ERC20");
  }, {
    // Checks that happen here:
    // 1. if the contract is based on ERC1155 contract => tokenId cannot be `undefined`
    // 2. if the contract is NOT based on ERC1155 => we have to have either an ERC721 or ERC20 contract
    enabled: erc1155 ? tokenId !== undefined : !!erc721 || !!erc20
  });
}

/**
 * Get all claim conditions
 *
 * @example
 * ```javascript
 * const { data: claimConditions, isLoading, error } = useClaimConditions(contract);
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC721, ERC1155 or ERC20 spec and implements the `claimConditions` extension.
 * @param tokenId - the id of the token to fetch the claim conditions for (if the contract is an ERC1155 contract)
 * @returns a response object with the list of claim conditions
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1 | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.useclaimconditions?utm_source=sdk | Documentation}
 * @beta
 */
function useClaimConditions(contract, tokenId, options) {
  const contractAddress = contract?.getAddress();
  const {
    erc1155,
    erc721,
    erc20
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.extensions.claimConditions.getAll(contractAddress, tokenId, options), () => {
    if (erc1155) {
      requiredParamInvariant(tokenId, "tokenId is required for ERC1155 claim conditions");
      return erc1155.claimConditions.getAll(tokenId, options);
    }
    if (erc721) {
      return erc721.claimConditions.getAll(options);
    }
    if (erc20) {
      return erc20.claimConditions.getAll(options);
    }
    throw new Error("Contract must be ERC721, ERC1155 or ERC20");
  }, {
    // Checks that happen here:
    // 1. if the contract is based on ERC1155 contract => tokenId cannot be `undefined`
    // 2. if the contract is NOT based on ERC1155 => we have to have either an ERC721 or ERC20 contract
    enabled: erc1155 ? tokenId !== undefined : !!erc721 || !!erc20
  });
}

/**
 * Get the reasons why a specific wallet can't claim
 *
 * @example
 * ```javascript
 * const { data: claimIneligibilityReasons, isLoading, error } = useClaimIneligibilityReasons(contract, { walletAddress: "{{wallet_address}}" });
 * ```
 *
 * @param contract - an instance of a contract that extends the  ERC20, ERC721 or ERC1155 spec and implements the `claimConditions` extension.
 * @param eligibilityParams - the parameters for the eligibility check, see: {@link ClaimIneligibilityParams}
 * @param tokenId - the id of the token to fetch the claim conditions for (if the contract is an ERC1155 contract)
 * @returns a response object with the reasons for the claim ineligibility
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1 | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.useclaimineligibilityreasons?utm_source=sdk | Documentation}
 * @beta
 */
function useClaimIneligibilityReasons(contract, params, tokenId) {
  const contractAddress = contract?.getAddress();
  const {
    erc1155,
    erc721,
    erc20
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.extensions.claimConditions.getClaimIneligibilityReasons(contractAddress, params, tokenId), () => {
    if (erc1155) {
      requiredParamInvariant(tokenId, "tokenId is required for ERC1155 claim ineligibility reasons");
      return erc1155.claimConditions.getClaimIneligibilityReasons(tokenId, params.quantity, params.walletAddress);
    }
    if (erc721) {
      return erc721.claimConditions.getClaimIneligibilityReasons(params.quantity, params.walletAddress);
    }
    if (erc20) {
      return erc20.claimConditions.getClaimIneligibilityReasons(params.quantity, params.walletAddress);
    }
    throw new Error("Contract must be ERC721, ERC1155 or ERC20");
  }, {
    // Checks that happen here:
    // 1. if the contract is based on ERC1155 contract => tokenId cannot be `undefined`
    // 2. if the contract is NOT based on ERC1155 => we have to have either an ERC721 or ERC20 contract
    // 3. has a params object been passed?
    // 4. does params have an address in it?
    enabled: (erc1155 ? tokenId !== undefined : !!erc721 || !!erc20) && !!params && !!params.walletAddress
  });
}

/**
 * Get the active claim condition for a specific wallet
 *
 * @example
 * ```javascript
 * const { data: activeClaimConditionForWallet, isLoading, error } = useActiveClaimConditionForWallet(contract, "{{wallet_address}}");
 * ```
 *
 * @param contract - an instance of a contract that extends the  ERC20, ERC721 or ERC1155 spec and implements the `claimConditions` extension.
 * @param walletAddress - the wallet address to check the active claim condition for
 * @param tokenId - the id of the token to fetch the claim conditions for (if the contract is an ERC1155 contract)
 * @returns the active claim conditon for the wallet address or null if there is no active claim condition
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1 | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.useactiveclaimconditionforwallet?utm_source=sdk | Documentation}
 * @beta
 */
function useActiveClaimConditionForWallet(contract, walletAddress, tokenId) {
  const sdk = useSDK();
  const contractAddress = contract?.getAddress();
  const {
    erc1155,
    erc721,
    erc20
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.extensions.claimConditions.useActiveClaimConditionForWallet(contractAddress, walletAddress || "_NO_WALLET_", tokenId), async () => {
    // if we do not have a walletAddress just do the same logic as basic useClaimCondition
    if (!walletAddress) {
      if (erc1155) {
        requiredParamInvariant(tokenId, "tokenId is required for ERC1155 claim conditions");
        return erc1155.claimConditions.getActive(tokenId);
      }
      if (erc721) {
        return erc721.claimConditions.getActive();
      }
      if (erc20) {
        return erc20.claimConditions.getActive();
      }
      throw new Error("Contract must be ERC721, ERC1155 or ERC20");
    }
    invariant(sdk, "sdk is required");
    let activeGeneralClaimCondition = null;
    let claimerProofForWallet = null;
    if (erc1155) {
      requiredParamInvariant(tokenId, "tokenId is required for ERC1155");
      const [cc, cp] = await Promise.all([erc1155.claimConditions.getActive(tokenId), erc1155.claimConditions.getClaimerProofs(tokenId, walletAddress)]);
      activeGeneralClaimCondition = cc;
      claimerProofForWallet = cp;
    }
    if (erc721) {
      const [cc, cp] = await Promise.all([erc721.claimConditions.getActive(), erc721.claimConditions.getClaimerProofs(walletAddress)]);
      activeGeneralClaimCondition = cc;
      claimerProofForWallet = cp;
    }
    if (erc20) {
      const [cc, cp] = await Promise.all([erc20.claimConditions.getActive(), erc20.claimConditions.getClaimerProofs(walletAddress)]);
      activeGeneralClaimCondition = cc;
      claimerProofForWallet = cp;
    }
    // if there is no active claim condition nothing matters, return null
    if (!activeGeneralClaimCondition) {
      return null;
    }

    // if there is no claimer proof then just fall back to the active general claim condition
    if (!claimerProofForWallet) {
      return activeGeneralClaimCondition;
    }
    const {
      maxClaimable,
      currencyAddress,
      price
    } = claimerProofForWallet;
    const currencyWithOverride = currencyAddress || activeGeneralClaimCondition.currencyAddress;
    const currencyMetadata = await fetchCurrencyMetadata(sdk.getProvider(), currencyWithOverride);
    const normalizedPrize = price ? price === "unlimited" ? constants.MaxUint256 : utils.parseUnits(price, currencyMetadata.decimals) : null;
    const priceWithOverride = normalizedPrize || activeGeneralClaimCondition.price;
    const maxClaimableWithOverride = maxClaimable || activeGeneralClaimCondition.maxClaimablePerWallet;
    const currencyValueWithOverride = await fetchCurrencyValue(sdk.getProvider(), currencyWithOverride, priceWithOverride);
    return {
      // inherit the entire claim condition
      ...activeGeneralClaimCondition,
      // overwrite all keys that could be changed based on overwrites
      maxClaimablePerWallet: maxClaimableWithOverride,
      price: priceWithOverride,
      currency: currencyWithOverride,
      currencyAddress: currencyWithOverride,
      currencyMetadata: currencyValueWithOverride
    };
  }, {
    // Checks that happen here:
    // 1. if the contract is based on ERC1155 contract => tokenId cannot be `undefined`
    // 2. if the contract is NOT based on ERC1155 => we have to have either an ERC721 or ERC20 contract
    enabled: erc1155 ? tokenId !== undefined : !!erc721 || !!erc20
  });
}

/** **********************/
/**     WRITE HOOKS     **/
/** **********************/

/**
 * Set claim conditions
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: setClaimConditions,
 *     isLoading,
 *     error,
 *   } = useSetClaimConditions(contract);
 *
 *   if (error) {
 *     console.error("failed to set claim conditions", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => setClaimConditions({ phases: [{ price: 2, maxClaimableSupply: 100 }] })}
 *     >
 *       Set Claim Conditions!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link DropContract}
 * @returns a mutation object that can be used to set claim conditions
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1 | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.usesetclaimconditions?utm_source=sdk | Documentation}
 * @beta
 */
function useSetClaimConditions(contract, tokenId) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const {
    erc1155,
    erc721,
    erc20
  } = getErcs(contract);
  return useMutation(async data => {
    requiredParamInvariant(contract, "No Contract instance provided");
    const {
      phases,
      reset = false
    } = data;
    invariant(phases, 'No "phases" provided');
    if (erc1155) {
      requiredParamInvariant(tokenId, "tokenId is required for ERC1155 claim conditions");
      return erc1155.claimConditions.set(tokenId, phases, reset);
    }
    if (erc721) {
      return erc721.claimConditions.set(phases, reset);
    }
    if (erc20) {
      return erc20.claimConditions.set(phases, reset);
    }
    throw new Error("Contract must be ERC721, ERC1155 or ERC20");
  }, {
    onSettled: () => {
      invalidateContractAndBalances(queryClient, contractAddress, activeChainId);
    }
  });
}

/**
 * Reset claim conditions
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: resetClaimConditions,
 *     isLoading,
 *     error,
 *   } = useResetClaimConditions(contract);
 *
 *   if (error) {
 *     console.error("failed to reset claim conditions", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={resetClaimConditions}
 *     >
 *       Reset Claim Conditions
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link DropContract}
 * @returns a mutation object that can be used to reset claim conditions
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1 | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @beta
 */
function useResetClaimConditions(contract, tokenId) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const {
    erc1155,
    erc721,
    erc20
  } = getErcs(contract);
  return useMutation(async () => {
    const cleanConditions = async conditions => {
      return conditions.map(c => ({
        ...c,
        price: c.currencyMetadata.displayValue
      }));
    };
    if (erc1155) {
      requiredParamInvariant(tokenId, "tokenId is required for ERC1155 claim conditions");
      const claimConditions = await erc1155.claimConditions.getAll(tokenId, {
        withAllowList: true
      });
      return erc1155.claimConditions.set(tokenId, await cleanConditions(claimConditions || []), true);
    }
    if (erc721) {
      const claimConditions = await erc721.claimConditions.getAll({
        withAllowList: true
      });
      return await erc721.claimConditions.set(await cleanConditions(claimConditions || []), true);
    }
    if (erc20) {
      const claimConditions = await erc20.claimConditions.getAll({
        withAllowList: true
      });
      return await erc20.claimConditions.set(await cleanConditions(claimConditions || []), true);
    }
    throw new Error("Contract must be ERC721, ERC1155 or ERC20");
  }, {
    onSettled: () => {
      invalidateContractAndBalances(queryClient, contractAddress, activeChainId);
    }
  });
}

// primary sales

/**
 * Get the primary sale recipient
 *
 * @example
 * ```jsx
 * const { data: primarySaleRecipient, isLoading, error } = usePrimarySalesRecipient(contract);
 * ```
 *
 * Use this to get the primary sales recipient of your {@link SmartContract}
 * @param contract - an instance of a {@link SmartContract}
 * @returns the wallet address of the primary sales recipient
 * @twfeature PrimarySale
 * @see {@link https://portal.thirdweb.com/react/react.useprimarysalerecipient?utm_source=sdk | Documentation}
 * @beta
 */
function usePrimarySaleRecipient(contract) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.extensions.sales.getRecipient(contractAddress), () => {
    requiredParamInvariant(contract, "No contract provided");
    invariant("sales" in contract && contract.sales, "Contract does not support primarySale");
    return contract.sales.getRecipient();
  }, {
    enabled: !!contract || !!contractAddress
  });
}

/**
 * Set the primary sale recipient
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: updatePrimarySalesRecipient,
 *     isLoading,
 *     error,
 *   } = useUpdatePrimarySaleRecipient(contract);
 *
 *   if (error) {
 *     console.error("failed to update recipient", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => updatePrimarySalesRecipient({ newRecipient: "{{wallet_address}}" })}
 *     >
 *       Update Recipient
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to update the primary sales recipient
 * @twfeature PrimarySale
 * @see {@link https://portal.thirdweb.com/react/react.useupdateprimarysalerecipient?utm_source=sdk | Documentation}
 * @beta
 */
function useUpdatePrimarySaleRecipient(contract) {
  const queryClient = useQueryClient();
  const contractAddress = contract?.getAddress();
  const activeChainId = useSDKChainId();
  return useMutation(newRecipient => {
    requiredParamInvariant(contract, "No contract provided");
    invariant("sales" in contract && contract.sales, "Contract does not support primarySale");
    return contract.sales.setRecipient(newRecipient);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

// end primary sales

// royalties

/**
 * Get the royalty recipient and fee
 *
 * @example
 * ```jsx
 * const { data: settings, isLoading, error } = useRoyaltySettings(contract);
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns an object containing recipient address and the royalty basis points
 * @twfeature Royalty
 * @see {@link https://portal.thirdweb.com/react/react.useroyaltysettings?utm_source=sdk | Documentation}
 * @beta
 */
function useRoyaltySettings(contract) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.extensions.royalties.getDefaultRoyaltyInfo(contractAddress), () => {
    requiredParamInvariant(contract, "No contract provided");
    invariant("royalties" in contract && contract.royalties, "Contract does not support royalties");
    return contract.royalties.getDefaultRoyaltyInfo();
  }, {
    enabled: !!contract || !!contractAddress
  });
}

/**
 * Set the royalty recipient and fee
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: updateRoyaltySettings,
 *     isLoading,
 *     error,
 *   } = useUpdateRoyaltySettings(contract);
 *
 *   if (error) {
 *     console.error("failed to update royalty settings", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => updateRoyaltySettings({ updatePayload: { fee_recipient: "{{wallet_address}}", seller_fee_basis_points: 5_00 } })}
 *     >
 *       Update Royalty Settings
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to update the royalty settings
 * @twfeature Royalty
 * @see {@link https://portal.thirdweb.com/react/react.useupdateroyaltysettings?utm_source=sdk | Documentation}
 * @beta
 */
function useUpdateRoyaltySettings(contract) {
  const queryClient = useQueryClient();
  const contractAddress = contract?.getAddress();
  const activeChainId = useSDKChainId();
  return useMutation(updatePayload => {
    requiredParamInvariant(contract, "No contract provided");
    invariant("royalties" in contract && contract.royalties, "Contract does not support royalties");
    return contract.royalties.setDefaultRoyaltyInfo(updatePayload);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

// end royalties

// platformFees

/**
 * Get the platform fee recipient and basis points
 *
 * @example
 * ```jsx
 * const { data: platformFees, isLoading, error } = usePlatformFees(contract);
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns an object containing the platform fee basis points and the fee recipient address
 * @twfeature PlatformFee
 * @see {@link https://portal.thirdweb.com/react/react.useplatformfees?utm_source=sdk | Documentation}
 * @beta
 */
function usePlatformFees(contract) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.extensions.platformFees.get(contractAddress), () => {
    requiredParamInvariant(contract, "No contract provided");
    invariant("platformFees" in contract && contract.platformFees, "Contract does not support platformFees");
    return contract.platformFees.get();
  }, {
    enabled: !!contract || !!contractAddress
  });
}

/**
 * Set the platform fee recipient and basis points
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: updatePlatformFees,
 *     isLoading,
 *     error,
 *   } = useUpdatePlatformFees(contract);
 *
 *   if (error) {
 *     console.error("failed to update platform fees", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => updatePlatformFees({ updatePayload: { fee_recipient: "{{wallet_address}}", platform_fee_basis_points: 5_00 } })}
 *     >
 *       Update Platform fees
 *     </button>
 *   );
 * };
 * ```
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to update the platform fees settings
 * @twfeature PlatformFee
 * @see {@link https://portal.thirdweb.com/react/react.useupdateplatformfees?utm_source=sdk | Documentation}
 * @beta
 */
function useUpdatePlatformFees(contract) {
  const queryClient = useQueryClient();
  const contractAddress = contract?.getAddress();
  const activeChainId = useSDKChainId();
  return useMutation(updatePayload => {
    requiredParamInvariant(contract, "No contract provided");
    invariant("platformFees" in contract && contract.platformFees, "Contract does not support platformFees");
    return contract.platformFees.set(updatePayload);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

// end platformFees

// metadata

/**
 * Get the metadata of this contract
 *
 * @example
 * ```jsx
 * const { data: metadata, isLoading, error } = useMetadata(contract);
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a {@link CustomContractMetadata} object containing the metadata
 * @see {@link https://portal.thirdweb.com/react/react.usemetadata?utm_source=sdk | Documentation}
 * @beta
 */
function useMetadata(contract
// TODO figure out UseQueryResult type better
) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.extensions.metadata.get(contractAddress), () => {
    requiredParamInvariant(contract, "No contract provided");
    invariant("metadata" in contract && contract.metadata, "Contract does not support metadata");
    return contract.metadata.get();
  }, {
    enabled: !!contract || !!contractAddress
  });
}

/**
 * Set the metadata of this contract
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: updateMetadata,
 *     isLoading,
 *     error,
 *   } = useUpdateMetadata(contract);
 *
 *   if (error) {
 *     console.error("failed to update metadata", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => updateMetadata({
 *        name: "My Contract",
 *        description: "This is my contract"
 *       })}
 *     >
 *       Update Contract Metadata
 *     </button>
 *   );
 * };
 * ```
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to update the metadata
 * @see {@link https://portal.thirdweb.com/react/react.useupdatemetadata?utm_source=sdk | Documentation}
 * @beta
 */
function useUpdateMetadata(contract
// TODO figure out UseMutationResult type better
) {
  const queryClient = useQueryClient();
  const contractAddress = contract?.getAddress();
  const activeChainId = useSDKChainId();
  return useMutation(updatePayload => {
    requiredParamInvariant(contract, "No contract provided");
    invariant("metadata" in contract && contract.metadata, "Contract does not support metadata");
    return contract.metadata.update(updatePayload);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

// end metadata

// contract type
async function fetchContractType(contractAddress, sdk) {
  if (!contractAddress || !sdk) {
    return null;
  }
  try {
    return await sdk.resolveContractType(contractAddress);
  } catch (err) {
    console.error("failed to resolve contract type", err);
    // this error can happen if the contract is a custom contract -> assume "custom"
    return "custom";
  }
}
function useContractType(contractAddress) {
  const sdk = useSDK();
  return useQueryWithNetwork(cacheKeys.contract.type(contractAddress), () => fetchContractType(contractAddress, sdk),
  // is immutable, so infinite stale time
  {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!contractAddress && !!sdk
  });
}
const contractType = {
  cacheKey: (contractAddress, chainId) => createCacheKeyWithNetwork(cacheKeys.contract.type(contractAddress), chainId),
  useQuery: useContractType,
  fetchQuery: fetchContractType
};

// end contract type

// contract compiler metadata
function fetchCompilerMetadata(contractAddress, sdk) {
  if (!contractAddress || !sdk) {
    return null;
  }
  try {
    return sdk.getPublisher().fetchCompilerMetadataFromAddress(contractAddress);
  } catch (err) {
    // if we fail to get contract metadata just return null;
    return null;
  }
}
function useCompilerMetadata(contractAddress) {
  const sdk = useSDK();
  return useQueryWithNetwork(cacheKeys.contract.compilerMetadata(contractAddress), () => fetchCompilerMetadata(contractAddress, sdk),
  // is immutable, so infinite stale time
  {
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!contractAddress && !!sdk
  });
}
const compilerMetadata = {
  cacheKey: (contractAddress, chainId) => createCacheKeyWithNetwork(cacheKeys.contract.compilerMetadata(contractAddress), chainId),
  useQuery: useCompilerMetadata,
  fetchQuery: fetchCompilerMetadata
};

// end compiler metadata

// useContract
/**
 * Use this resolve a contract address to a smart contract instance.
 *
 * @example
 * ```javascript
 * const { contract, isLoading, error } = useContract("{{contract_address}}");
 * ```
 *
 * @param contractAddress - the address of the deployed contract
 * @returns a response object that includes the contract once it is resolved
 * @see {@link https://portal.thirdweb.com/react/react.usecontract?utm_source=sdk | Documentation}
 * @public
 */
/**
 * Use this resolve a contract address to a smart contract instance.
 *
 * @example
 * ```javascript
 * const { contract, isLoading, error } = useContract("{{contract_address}}", "nft-drop");
 * ```
 *
 * @param contractAddress - the address of the deployed contract
 * @param _contractType - the type of the contract
 * @returns a response object that includes the contract once it is resolved
 * @see {@link https://portal.thirdweb.com/react/react.usecontract?utm_source=sdk | Documentation}
 * @public
 */
/**
 * Use this resolve a contract address to a smart contract instance.
 *
 * @example
 * ```javascript
 * const { contract, isLoading, error } = useContract("{{contract_address}}", ABI);
 * ```
 *
 * @param contractAddress - the address of the deployed contract
 * @param _abi - the ABI of the contract to use
 * @returns a response object that includes the contract once it is resolved
 * @see {@link https://portal.thirdweb.com/react/react.usecontract?utm_source=sdk | Documentation}
 * @public
 */
function useContract(contractAddress, contractTypeOrABI) {
  const sdk = useSDK();
  const queryClient = useQueryClient();
  const activeChainId = useSDKChainId();
  const wallet = useAddress();
  const walletChainId = useChainId();

  // it's there because we put it there.
  const sdkTimestamp = sdk?._constructedAt;
  const contractQuery = useQueryWithNetwork(
  // need to add the wallet and walletChainId into the query key so this gets refreshed when the wallet / chain changes!
  neverPersist(["contract-instance", contractAddress, {
    wallet,
    walletChainId,
    sdkTimestamp
  }]), async () => {
    requiredParamInvariant(contractAddress, "contract address is required");
    invariant(sdk, "SDK not initialized");
    invariant(activeChainId, "active chain id is required");

    // if we don't have a contractType or ABI then we will have to resolve it regardless
    // we also handle it being "custom" just in case...
    if (!contractTypeOrABI || contractTypeOrABI === "custom") {
      // First check local ABI cache
      const cachedAbi = getCachedAbiForContract(contractAddress);
      if (cachedAbi) {
        return sdk.getContract(contractAddress, cachedAbi);
      }

      // we just resolve here (sdk does this internally anyway)
      const resolvedContractType = await queryClient.fetchQuery(contractType.cacheKey(contractAddress, activeChainId), () => contractType.fetchQuery(contractAddress, sdk), {
        cacheTime: Infinity,
        staleTime: Infinity
      });
      let abi;
      if (resolvedContractType === "custom") {
        abi = (await queryClient.fetchQuery(compilerMetadata.cacheKey(contractAddress, activeChainId), () => compilerMetadata.fetchQuery(contractAddress, sdk), {
          cacheTime: Infinity,
          staleTime: Infinity,
          retry: 0
        }))?.abi;
      }
      invariant(resolvedContractType, "failed to resolve contract type");
      // just let the sdk handle the rest
      // if we have resolved an ABI for a custom contract, use that otherwise use contract type
      return sdk.getContract(contractAddress, abi || resolvedContractType);
    }
    // every other case can just be handled by the sdk directly
    return sdk.getContract(contractAddress, contractTypeOrABI);
  }, {
    // keep the previous value around while we fetch the new one
    // this is important because otherwise it can lead to flickering (because we need to re-fetch the contract when sdk things change)
    keepPreviousData: true,
    // is immutable, so infinite cache & stale time (for a given key)
    cacheTime: Infinity,
    staleTime: Infinity,
    enabled: !!contractAddress && !!sdk && !!activeChainId,
    // never retry
    retry: 0
  });

  // const previousCountract = usePrevious(contractQuery.data);

  return {
    ...contractQuery,
    data: contractQuery.data,
    contract: contractQuery.data
  };
}

/**
 * Get the metadata of this contract
 *
 * @example
 * ```javascript
 * const { data: contractMetadata, isLoading } = useContractMetadata(contract);
 * ```
 *
 * @param contract - the {@link ValidContractInstance} instance of the contract to get the metadata for
 * @returns a response object that includes the contract metadata of the deployed contract
 * @twfeature ContractMetadata
 * @beta
 */
function useContractMetadata(contract) {
  return useQueryWithNetwork(cacheKeys.contract.metadata(contract?.getAddress()), async () => {
    requiredParamInvariant(contract, "contract is required");
    return await contract.metadata.get(); // FIXME types
  }, {
    enabled: !!contract
  });
}

/**
 * Update the metadata of this contract
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: updateContractMetadata,
 *     isLoading,
 *     error,
 *   } = useContractMetadataUpdate(contract);
 *
 *   if (error) {
 *     console.error("failed to update contract metadata", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => updateContractMetadata({ name: "New name", description: "New description" })}
 *     >
 *       Update contract metadata
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - the {@link ValidContractInstance} instance of the contract to get the metadata for
 * @returns a response object that includes the contract metadata of the deployed contract
 * @twfeature ContractMetadata
 * @beta
 */
function useContractMetadataUpdate(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  return useMutation(async metadata => {
    requiredParamInvariant(contract, "contract must be defined");
    return contract.metadata.update(metadata);
  }, {
    onSettled: () => queryClient.invalidateQueries(createCacheKeyWithNetwork(createContractCacheKey(contractAddress), activeChainId))
  });
}

/**
 * CONTRACT EVENTS
 */

/**
 * Get or subscribe to contract events
 *
 * @example
 * ```javascript
 * const { data: contractEvents, isLoading } = useContractEvents(contract);
 * ```
 *
 * @param contract - the {@link ValidContractInstance} instance of the contract to listen to events for
 * @param eventName - the name of the event to query for (omit this or pass `undefined` to query for all events)
 * @param options - options includes the filters ({@link QueryAllEvents}) for the query as well as if you want to subscribe to real-time updates (default: true)
 * @returns a response object that includes the contract events
 * @see {@link https://portal.thirdweb.com/react/react.usecontractevents?utm_source=sdk | Documentation}
 * @beta
 */
function useContractEvents(contract, eventName) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    subscribe: true
  };
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const activeChainId = useSDKChainId();
  const cacheKey = useMemo(() => createCacheKeyWithNetwork(eventName ? cacheKeys.contract.events.getEvents(contractAddress, eventName) : cacheKeys.contract.events.getAllEvents(contractAddress), activeChainId), [activeChainId, contractAddress, eventName]);
  useEffect(() => {
    // if we're not subscribing or query is not enabled yet we can early exit
    if (!options.subscribe || !contract || !contract) {
      return;
    }
    const cleanupListener = contract.events.listenToAllEvents(contractEvent => {
      // if we have a specific event name we are looking for we can early exist if it doesn't match
      if (eventName && eventName !== contractEvent.eventName) {
        return;
      }
      // insert new event to the front of the array (no duplicates, though)
      queryClient.setQueryData(cacheKey, oldData => {
        if (!oldData) {
          return [contractEvent];
        }
        const eventIsNotAlreadyInEventsList = oldData.findIndex(e => e.transaction.transactionHash === contractEvent.transaction.transactionHash && e.transaction.logIndex === contractEvent.transaction.logIndex) === -1;
        if (eventIsNotAlreadyInEventsList) {
          return [contractEvent, ...oldData];
        }
        return oldData;
      });
    });
    // cleanup listener on unmount
    return cleanupListener;
  }, [options.subscribe, cacheKey, contract, queryClient, eventName]);
  return useQuery(cacheKey, () => {
    requiredParamInvariant(contract, "contract must be defined");
    if (eventName) {
      return contract.events.getEvents(eventName, options.queryFilter);
    }
    return contract.events.getAllEvents(options.queryFilter);
  }, {
    enabled: !!contract,
    // we do not need to re-fetch if we're subscribing
    refetchOnWindowFocus: !options.subscribe,
    refetchOnMount: true,
    refetchOnReconnect: true
  });
}

/**
 * Get data from a contract read-function call
 *
 * @example
 * ```javascript
 * const { contract } = useContract("{{contract_address}}");
 * const { data, isLoading, error } = useContractRead(contract, "functionName", ...args);
 *```
 *
 * @param contract - the contract instance of the contract to call a function on
 * @param functionName - the name of the function to call
 * @param args - The arguments to pass to the function (if any), with optional call arguments as the last parameter
 * @returns a response object that includes the data returned by the function call
 * @see {@link https://portal.thirdweb.com/react/react.usecontractread?utm_source=sdk | Documentation}
 * @beta
 */
function useContractRead(contract, functionName, args, overrides) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.call(contractAddress, functionName, args, overrides), () => {
    requiredParamInvariant(contract, "contract must be defined");
    requiredParamInvariant(functionName, "function name must be provided");
    return contract.call(functionName, args, overrides);
  }, {
    enabled: !!contract && !!functionName
  });
}

/**
 * Mke a write call to your contract
 *
 * @example
 * ```javascript
 * const { contract } = useContract("{{contract_address}}");
 * const { mutate: myFunction, isLoading, error } = useContractWrite(contract, "myFunction");
 *
 * // the function can be called as follows:
 * // myFunction(["param 1", "param 2", ...])
 *```
 *
 * @param contract - the contract instance of the contract to call a function on
 * @param functionName - the name of the function to call
 * @returns a response object that includes the write function to call
 * @see {@link https://portal.thirdweb.com/react/react.usecontractwrite?utm_source=sdk | Documentation}
 * @beta
 */
function useContractWrite(contract, functionName) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  return useMutation(async _ref => {
    let {
      args,
      overrides
    } = _ref;
    requiredParamInvariant(contract, "contract must be defined");
    requiredParamInvariant(functionName, "function name must be provided");
    return contract.call(functionName, args, overrides);
  }, {
    onSettled: () => queryClient.invalidateQueries(createCacheKeyWithNetwork(createContractCacheKey(contractAddress), activeChainId))
  });
}

/** **********************/
/**       READ HOOKS    **/
/** **********************/

/**
 * Get all unclaimed NFTs
 *
 * @example
 * ```javascript
 * const { data: unclaimedNfts, isLoading, error } = useUnclaimedNFTs(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC721 spec (NFT drop, Signature Drop, or any custom contract that extends the ERC721 spec)
 * @param queryParams - query params to pass to the query for the sake of pagination
 * @returns a response object that includes an array of NFTs that are unclaimed
 * @twfeature ERC721LazyMintable
 * @see {@link https://portal.thirdweb.com/react/react.useunclaimednfts?utm_source=sdk | Documentation}
 * @beta
 */
function useUnclaimedNFTs(contract, queryParams) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.nft.drop.getAllUnclaimed(contractAddress, queryParams), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    // TODO make this work for custom contracts (needs ABI change)
    invariant(contract.getAllUnclaimed, "Contract instance does not support getAllUnclaimed");
    return contract.getAllUnclaimed(queryParams);
  }, {
    enabled: !!contract
  });
}

/**
 * Get all claimed NFTs
 *
 * @remarks Equivalent to using {@link useNFTs}.
 *
 * @example
 * ```javascript
 * const { data: claimedNFTs, isLoading, error } = useClaimedNFTs(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC721 spec (NFT drop, Signature Drop, or any custom contract that extends the ERC721 spec)
 * @param queryParams - query params to pass to the query for the sake of pagination
 * @returns a response object that includes an array of NFTs that are claimed
 * @twfeature ERC721LazyMintable
 * @see {@link https://portal.thirdweb.com/react/react.useclaimednfts?utm_source=sdk | Documentation}
 * @beta
 */
function useClaimedNFTs(contract, queryParams) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.nft.drop.getAllClaimed(contractAddress, queryParams), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    // TODO make this work for custom contracts (needs ABI change)
    invariant(contract.getAllClaimed, "Contract instance does not support getAllClaimed");
    return contract.getAllClaimed(queryParams);
  }, {
    enabled: !!contract
  });
}

/**
 *
 * @param contract - an instance of a contract that extends the ERC721 spec (NFT drop, Signature Drop, or any custom contract that extends the ERC721 spec)
 * @returns a response object that includes the number of NFTs that are unclaimed
 * @twfeature ERC721LazyMintable
 * @see {@link https://portal.thirdweb.com/react/react.useunclaimednftsupply?utm_source=sdk | Documentation}
 */
function useUnclaimedNFTSupply(contract) {
  const contractAddress = contract?.getAddress();
  const {
    erc721
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.contract.nft.drop.totalUnclaimedSupply(contractAddress), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    if (erc721) {
      invariant(erc721, "No ERC721 Contract instance provided");
      return erc721.totalUnclaimedSupply();
    }
    invariant(false, "Contract is not an instance of ERC721");
  }, {
    enabled: !!erc721
  });
}

/**
 * Get the total number of claimed NFTs
 *
 * @param contract - an instance of a contract that extends the ERC721 spec (NFT drop, Signature Drop, or any custom contract that extends the ERC721 spec)
 * @returns a response object that includes the number of NFTs that are claimed
 * @twfeature ERC721LazyMintable
 * @see {@link https://portal.thirdweb.com/react/react.useclaimednftsupply?utm_source=sdk | Documentation}
 */
function useClaimedNFTSupply(contract) {
  const contractAddress = contract?.getAddress();
  const {
    erc721
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.contract.nft.drop.totalClaimedSupply(contractAddress), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    if (erc721) {
      return erc721.totalClaimedSupply();
    }
    invariant(false, "Contract is not an instance of ERC721");
  }, {
    enabled: !!erc721
  });
}

/**
 * Get all unrevealed batches
 *
 * @param contract - an instance of a {@link RevealableContract}
 * @returns a response object that gets the batches to still be revealed
 * @twfeature ERC721Revealable | ERC1155Revealable
 * @see {@link https://portal.thirdweb.com/react/react.usebatchestoreveal?utm_source=sdk | Documentation}
 */
function useBatchesToReveal(contract) {
  const contractAddress = contract?.getAddress();
  const {
    erc721,
    erc1155
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.contract.nft.drop.revealer.getBatchesToReveal(contractAddress), () => {
    if (erc721) {
      return erc721.revealer.getBatchesToReveal();
    }
    if (erc1155) {
      return erc1155.revealer.getBatchesToReveal();
    }
    invariant(false, "Contract instance does not support getBatchesToReveal");
  }, {
    enabled: !!erc721 || !!erc1155
  });
}

/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Claim an NFT to a specific wallet
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: claimNFT,
 *     isLoading,
 *     error,
 *   } = useClaimNFT(contract);
 *
 *   if (error) {
 *     console.error("failed to claim nft", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => claimNFT({ to: "{{wallet_address}}", quantity: 1 })}
 *     >
 *       Claim NFT!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link DropContract}
 * @returns a mutation object that can be used to claim a NFT to the wallet specificed in the params
 * @twfeature ERC721Claimable | ERC1155Claimable | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.useclaimnft?utm_source=sdk | Documentation}
 * @beta
 */
function useClaimNFT(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const {
    erc721,
    erc1155
  } = getErcs(contract);
  return useMutation(async data => {
    requiredParamInvariant(contract, "contract is undefined");
    if (erc1155) {
      requiredParamInvariant(data.tokenId, "tokenId not provided");
      if (!data.to) {
        return await erc1155.claim(data.tokenId, data.quantity, data.options);
      }
      return await erc1155.claimTo(data.to, data.tokenId, data.quantity, data.options);
    }
    if (erc721) {
      if (!data.to) {
        return await erc721.claim(data.quantity, data.options);
      }
      return await erc721.claimTo(data.to, data.quantity, data.options);
    }
    invariant(false, "contract is not an Erc721 or Erc1155");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Lazy mint NFTs
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: lazyMint,
 *     isLoading,
 *     error,
 *   } = useLazyMint(contract);
 *
 *   if (error) {
 *     console.error("failed to lazy mint NFT", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => lazyMint({ metadatas: [{ name: "My NFT!"}] })}
 *     >
 *       Lazy mint NFT!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link NFTContract} with the drop extension
 * @param onProgress - an optional callback that will be called with the progress of the upload
 * @returns a mutation object that can be used to lazy mint a batch of NFTs
 * @twfeature ERC721LazyMintable | ERC1155LazyMintable
 * @see {@link https://portal.thirdweb.com/react/react.uselazymint?utm_source=sdk | Documentation}
 * @beta
 */
function useLazyMint(contract, onProgress) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const {
    erc721,
    erc1155
  } = getErcs(contract);
  return useMutation(async data => {
    requiredParamInvariant(contract, "contract is undefined");
    let options;
    if (onProgress) {
      options = {
        onProgress
      };
    }
    if (erc721) {
      return erc721.lazyMint(data.metadatas, options);
    }
    if (erc1155) {
      return erc1155.lazyMint(data.metadatas, options);
    }
    invariant(false, "contract is not an Erc721 or Erc1155");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Lazy mint NFTs with delayed reveal
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: delayedRevealLazyMint,
 *     isLoading,
 *     error,
 *   } = useDelayedRevealLazyMint(contract);
 *
 *   if (error) {
 *     console.error("failed to lazy mint NFT", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => delayedRevealLazyMint({ metadatas: [{ name: "My NFT!"}] })}
 *     >
 *       Delayed Reveal Lazy mint NFT!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link DropContract}
 * @param onProgress - an optional callback that will be called with the progress of the upload
 * @returns a mutation object that can be used to lazy mint a batch of NFTs
 * @twfeature ERC721Revealable | ERC1155Revealable
 * @see {@link https://portal.thirdweb.com/react/react.usedelayedreveallazymint?utm_source=sdk | Documentation}
 * @beta
 */
function useDelayedRevealLazyMint(contract, onProgress) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  return useMutation(async data => {
    requiredParamInvariant(contract, "contract is undefined");
    let options;
    if (onProgress) {
      options = {
        onProgress
      };
    }
    const {
      erc721,
      erc1155
    } = getErcs(contract);
    if (erc721) {
      return await erc721.revealer.createDelayedRevealBatch(data.placeholder, data.metadatas, data.password, options);
    }
    if (erc1155) {
      return await erc1155.revealer.createDelayedRevealBatch(data.placeholder, data.metadatas, data.password, options);
    }
    invariant(false, "contract is not an Erc721 or Erc1155");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Reveal a batch of delayed reveal NFTs
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: revealLazyMint,
 *     isLoading,
 *     error,
 *   } = useRevealLazyMint(contract);
 *
 *   if (error) {
 *     console.error("failed to reveal batch", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => revealLazyMint({ batchId: "0", password: "my-password" })}
 *     >
 *       Reveal batch!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link RevealableContract}
 * @returns a mutation object that can be used to reveal a batch of delayed reveal NFTs
 * @twfeature ERC721Revealable | ERC1155Revealable
 * @see {@link https://portal.thirdweb.com/react/react.usereveallazymint?utm_source=sdk | Documentation}
 * @beta
 */
function useRevealLazyMint(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  return useMutation(async data => {
    requiredParamInvariant(contract, "contract is undefined");
    const {
      erc721,
      erc1155
    } = getErcs(contract);
    if (erc721) {
      return await erc721.revealer.reveal(data.batchId, data.password);
    }
    if (erc1155) {
      return await erc1155.revealer.reveal(data.batchId, data.password);
    }
    invariant(false, "contract is not an Erc721 or Erc1155");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/** **********************/
/**     READ  HOOKS     **/
/** **********************/

/**
 * Get a listing
 *
 * @example
 * ```javascript
 * const listingId = 0; // the listing id to check
 * const { data: listing, isLoading, error } = useListing(contract, listingId);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param listingId - the listing id to check
 * @returns a response object that includes the desired listing
 * @see {@link https://portal.thirdweb.com/react/react.uselisting?utm_source=sdk | Documentation}
 * @beta
 */
function useListing(contract, listingId) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.getListing(contractAddress, listingId), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    requiredParamInvariant(listingId, "No listing id provided");
    return contract.getListing(listingId);
  }, {
    enabled: !!contract,
    keepPreviousData: true
  });
}

/**
 * Get a direct listing
 *
 * @example
 * ```javascript
 * const listingId = 0; // the listing id to check
 * const { data: directListing, isLoading, error } = useListing(contract, listingId);
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @param listingId - the listing id to check
 * @returns a response object that includes the desired direct listing
 * @twfeature DirectListings
 * @see {@link https://portal.thirdweb.com/react/react.usedirectlisting?utm_source=sdk | Documentation}
 */
function useDirectListing(contract, listingId) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.directListings.getListing(contractAddress, listingId), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    requiredParamInvariant(listingId, "No listing id provided");
    return contract.directListings.getListing(listingId);
  }, {
    enabled: !!contract,
    keepPreviousData: true
  });
}

/**
 * Get an english auction
 *
 * @example
 * ```javascript
 * const auctionId = 0; // the listing id to check
 * const { data: englishAuction, isLoading, error } = useEnglishAuction(contract, auctionId);
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @param auctionId - the auction id to check
 * @returns a response object that includes the desired english auction
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.useenglishauctions?utm_source=sdk | Documentation}
 */
function useEnglishAuction(contract, auctionId) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.englishAuctions.getAuction(contractAddress, auctionId), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    requiredParamInvariant(auctionId, "No auction id provided");
    return contract.englishAuctions.getAuction(auctionId);
  }, {
    enabled: !!contract,
    keepPreviousData: true
  });
}

/**
 * Get all listings
 *
 * @example
 * ```javascript
 * const { data: listings, isLoading, error } = useListings(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param filter - filter to pass to the query for the sake of pagination & filtering
 * @returns a response object that includes an array of listings
 * @see {@link https://portal.thirdweb.com/react/react.uselistings?utm_source=sdk | Documentation}
 * @beta
 */
function useListings(contract, filter) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.getAllListings(contractAddress, filter), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    return contract.getAllListings(filter);
  }, {
    enabled: !!contract,
    keepPreviousData: true
  });
}

/**
 * Get all direct listings
 *
 * @example
 * ```javascript
 * const { data: directListings, isLoading, error } = useDirectListings(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @param filter - filter to pass to the query for the sake of pagination & filtering
 * @returns a response object that includes an array of direct listings
 * @twfeature DirectListings
 * @see {@link https://portal.thirdweb.com/react/react.usedirectlistings?utm_source=sdk | Documentation}
 */
function useDirectListings(contract, filter) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.directListings.getAll(contractAddress, filter), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    return contract.directListings.getAll(filter);
  }, {
    enabled: !!contract,
    keepPreviousData: true
  });
}

/**
 * Get all valid direct listings
 *
 * @example
 * ```javascript
 * const { data: validDirectListings, isLoading, error } = useValidDirectListings(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @param filter - filter to pass to the query for the sake of pagination & filtering
 * @returns a response object that includes an array of direct listings
 * @twfeature DirectListings
 * @see {@link https://portal.thirdweb.com/react/react.usevaliddirectlistings?utm_source=sdk | Documentation}
 */
function useValidDirectListings(contract, filter) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.directListings.getAllValid(contractAddress, filter), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    return contract.directListings.getAllValid(filter);
  }, {
    enabled: !!contract,
    keepPreviousData: true
  });
}

/**
 * Get all english auctions
 *
 * @example
 * ```javascript
 * const { data: englishAuctions, isLoading, error } = useEnglishAuctions(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @param filter - filter to pass to the query for the sake of pagination & filtering
 * @returns a response object that includes an array of english auctions
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.useenglishauctions?utm_source=sdk | Documentation}
 */
function useEnglishAuctions(contract, filter) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.englishAuctions.getAll(contractAddress, filter), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    return contract.englishAuctions.getAll(filter);
  }, {
    enabled: !!contract,
    keepPreviousData: true
  });
}

/**
 * Get all valid english auctions
 *
 * @example
 * ```javascript
 * const { data: validEnglishAuctions, isLoading, error } = useValidEnglishAuctions(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @param filter - filter to pass to the query for the sake of pagination & filtering
 * @returns a response object that includes an array of english auctions
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.usevalidenglishauctions?utm_source=sdk | Documentation}
 */
function useValidEnglishAuctions(contract, filter) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.englishAuctions.getAllValid(contractAddress, filter), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    return contract.englishAuctions.getAllValid(filter);
  }, {
    enabled: !!contract,
    keepPreviousData: true
  });
}

/**
 * Get the total count of listings
 *
 * @example
 * ```javascript
 * const { data: listingsCount, isLoading, error } = useListingsCount(contract);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @returns a response object that includes the listing count
 * @see {@link https://portal.thirdweb.com/react/react.uselistingscount?utm_source=sdk | Documentation}
 * @beta
 */
function useListingsCount(contract) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.getTotalCount(contractAddress), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    return contract.getTotalCount();
  }, {
    enabled: !!contract
  });
}

/**
 * Get the total count of direct listings
 *
 * @example
 * ```javascript
 * const { data: directListingsCount, isLoading, error } = useDirectListingsCount(contract);
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @returns a response object that includes the direct listings count
 * @twfeature DirectListings
 * @see {@link https://portal.thirdweb.com/react/react.usedirectlistingscount?utm_source=sdk | Documentation}
 */
function useDirectListingsCount(contract) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.directListings.getTotalCount(contractAddress), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    return contract.directListings.getTotalCount();
  }, {
    enabled: !!contract
  });
}

/**
 * Get the total count of english auctions
 *
 * @example
 * ```javascript
 * const { data: englishAuctionsCount, isLoading, error } = useEnglishAuctionsCount(contract);
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @returns a response object that includes the direct english actions count
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.useenglishauctionscount?utm_source=sdk | Documentation}
 */
function useEnglishAuctionsCount(contract) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.englishAuctions.getTotalCount(contractAddress), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    return contract.englishAuctions.getTotalCount();
  }, {
    enabled: !!contract
  });
}

/**
 * Get all active listings
 *
 * @example
 * ```javascript
 * const { data: listings, isLoading, error } = useActiveListings(contract, { seller: "{{wallet_adress}}", tokenContract: "0x...", tokenId: 1, start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param filter - filter to pass to the query for the sake of pagination & filtering
 * @returns a response object that includes an array of listings
 * @see {@link https://portal.thirdweb.com/react/react.useactivelistings?utm_source=sdk | Documentation}
 * @beta
 */
function useActiveListings(contract, filter) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.getActiveListings(contractAddress, filter), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    return contract.getActiveListings(filter);
  }, {
    enabled: !!contract,
    keepPreviousData: true
  });
}

/**
 * Get the winning bid for an auction
 *
 * @example
 * ```javascript
 * const listingId = 0;
 * const { data: winningBid, isLoading, error } = useWinningBid(contract, listingId);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param listingId - the listing id to check
 * @returns a response object that includes the {@link Offer} that is winning the auction
 * @see {@link https://portal.thirdweb.com/react/react.usewinningbid?utm_source=sdk | Documentation}
 * @beta
 */
function useWinningBid(contract, listingId) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.auction.getWinningBid(contractAddress, listingId), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    requiredParamInvariant(listingId, "No listing id provided");
    invariant(contract.auction.getWinningBid, "contract does not support auction.getWinningBid");
    return contract.auction.getWinningBid(listingId);
  }, {
    enabled: !!contract && listingId !== undefined
  });
}

/**
 * Get the winning bid for an english auction
 *
 * @example
 * ```javascript
 * const listingId = 0;
 * const { data: winningBid, isLoading, error } = useWinningBid(contract, listingId);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param auctionId - the auction id to check
 * @returns a response object that includes the {@link Bid} that is winning the auction
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.useenglishauctionwinningbid?utm_source=sdk | Documentation}
 */
function useEnglishAuctionWinningBid(contract, auctionId) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.englishAuctions.getWinningBid(contractAddress, auctionId), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    requiredParamInvariant(auctionId, "No auction id provided");
    invariant(contract.englishAuctions.getWinningBid, "contract does not support englishAuctions.getWinningBid");
    return contract.englishAuctions.getWinningBid(auctionId);
  }, {
    enabled: !!contract && auctionId !== undefined
  });
}

/**
 * Get the winner of an english auction
 *
 * @example
 * ```javascript
 * const listingId = 0;
 * const { data: auctionWinner, isLoading, error } = useAuctionWinner(contract, listingId);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param listingId - the listing id to check
 * @returns a response object that includes the address of the winner of the auction or undefined if there is no winner yet
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.useauctionwinner?utm_source=sdk | Documentation}
 */
function useAuctionWinner(contract, listingId) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.auction.getWinner(contractAddress, listingId), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    requiredParamInvariant(listingId, "No listing id provided");
    const isV1 = isMarketplaceV1(contract);
    if (isV1) {
      invariant(contract.auction.getWinner, "contract does not support auction.getWinner");
      return contract.auction.getWinner(listingId);
    } else if (!isV1) {
      invariant(contract.englishAuctions.getWinner, "contract does not support englishAuctions.getWinner");
      return contract.englishAuctions.getWinner(listingId);
    }
    invariant(false, "Contract is not a valid marketplace contract");
  }, {
    enabled: !!contract && listingId !== undefined
  });
}

/**
 * Get the bid buffer for an english auction
 *
 * @example
 * ```javascript
 * const { data: bidBuffer, isLoading, error } = useBidBuffer(contract);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param listingId - the listing id to check (only necessary for marketplace v3)

 * @returns a response object that includes an array of listings
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.usebidbuffer?utm_source=sdk | Documentation}
 */
function useBidBuffer(contract, listingId) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.auction.getBidBufferBps(contractAddress, listingId), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    const isV1 = isMarketplaceV1(contract);
    if (isV1) {
      invariant(contract.getBidBufferBps, "contract does not support getBidBufferBps");
      return contract.getBidBufferBps();
    } else if (!isV1) {
      invariant(contract.englishAuctions.getBidBufferBps, "contract does not support englishAuctions.getBidBufferBps");
      requiredParamInvariant(listingId, "No listing id provided");
      return BigNumber.from(contract.englishAuctions.getBidBufferBps(listingId));
    }
    invariant(false, "Contract is not a valid marketplace contract");
  }, {
    enabled: !!contract
  });
}

/**
 * Get the minimum next bid for an english auction
 *
 * @example
 * ```javascript
 * const listingId = 0;
 * const { data: minimumNextBid, isLoading, error } = useMinimumNextBid(contract, listingId);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param listingId - the listing id to check
 * @returns a response object that includes the minimum next bid for the auction listing
 * @twfeature EnglishAucton
 * @see {@link https://portal.thirdweb.com/react/react.useminimumnextbid?utm_source=sdk | Documentation}
 */
function useMinimumNextBid(contract, listingId) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.marketplace.auction.getMinimumNextBid(contractAddress, listingId), async () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    requiredParamInvariant(listingId, "No listing id provided");
    const isV1 = isMarketplaceV1(contract);
    if (isV1) {
      invariant(contract.auction.getMinimumNextBid, "contract does not support auction.getMinimumNextBid");
      return contract.auction.getMinimumNextBid(listingId);
    } else if (!isV1) {
      invariant(contract.englishAuctions.getMinimumNextBid, "contract does not support englishAuctions.getMinimumNextBid");
      return contract.englishAuctions.getMinimumNextBid(listingId);
    }
    invariant(false, "Contract is not a valid marketplace contract");
  }, {
    enabled: !!contract && listingId !== undefined
  });
}

/**
 * Get all the offers for a listing
 *
 * @remarks Fetch all the offers for a specified direct or auction listing.
 * @example
 * ```javascript
 * const listingId = 0;
 * const { data: offers, isLoading, error } = useOffers(contract, listingId);
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @param listingId - the id of the listing to fetch offers for
 * @see {@link https://portal.thirdweb.com/react/react.useoffers?utm_source=sdk | Documentation}
 * @beta
 */
function useOffers(contract, listingId) {
  const result = useContractEvents(contract, "NewOffer");
  return {
    ...result,
    data: result.data?.filter(ev => ev.data.listingId.eq(listingId))?.map(ev => ev.data)
  };
}

/** **********************/
/**     WRITE HOOKS     **/
/** **********************/

/**
 * Create a new direct listing
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: createDirectListing,
 *     isLoading,
 *     error,
 *   } = useCreateDirectListing(contract);
 *
 *   if (error) {
 *     console.error("failed to create direct listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => createDirectListing(directListingData)}
 *     >
 *       Create Direct Listing!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to create a new direct listing
 * @twfeature DirectListings
 * @see {@link https://portal.thirdweb.com/react/react.usecreatedirectlisting?utm_source=sdk | Documentation}
 */
function useCreateDirectListing(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const walletAddress = useAddress();
  return useMutation(async data => {
    invariant(walletAddress, "No wallet connected, cannot create listing");
    requiredParamInvariant(contract, "No Contract instance provided");
    const isV1 = isMarketplaceV1(contract);
    if (isV1) {
      invariant(contract.direct.createListing, "contract does not support direct.createListing");
      return await contract.direct.createListing(data);
    } else if (!isV1) {
      invariant(contract.directListings.createListing, "contract does not support directListings.createListing");
      return await contract.directListings.createListing(data);
    }
    invariant(false, "Contract is not a valid marketplace contract");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Create a new english auction
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: createAuctionListing,
 *     isLoading,
 *     error,
 *   } = useCreateAuctionListing(contract);
 *
 *   if (error) {
 *     console.error("failed to create auction listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => createAuctionListing(auctionListingData)}
 *     >
 *       Create Auction Listing!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to create a new auction listing
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.usecreateauctionlisting?utm_source=sdk | Documentation}
 */
function useCreateAuctionListing(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const walletAddress = useAddress();
  return useMutation(async data => {
    invariant(walletAddress, "no wallet connected, cannot create listing");
    requiredParamInvariant(contract, "No Contract instance provided");
    const isV1 = isMarketplaceV1(contract);
    if (isV1) {
      invariant(contract.auction.createListing, "contract does not support auction.createListing");
      return await contract.auction.createListing(data);
    } else if (!isV1) {
      invariant(contract.englishAuctions.createAuction, "contract does not support englishAuctions.createAuction");
      return await contract.englishAuctions.createAuction(data);
    }
    invariant(false, "Contract is not a valid marketplace contract");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Cancel a listing
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: cancelListing,
 *     isLoading,
 *     error,
 *   } = useCancelListing(contract);
 *
 *   if (error) {
 *     console.error("failed to cancel auction listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={cancelListing}
 *     >
 *       Cancel Auction Listing!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to cancel a listing
 * @see {@link https://portal.thirdweb.com/react/react.usecancellisting?utm_source=sdk | Documentation}
 * @beta
 */
function useCancelListing(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const walletAddress = useAddress();
  return useMutation(async data => {
    invariant(walletAddress, "no wallet connected, cannot create listing");
    requiredParamInvariant(contract, "No Contract instance provided");
    if (data.type === ListingType.Auction) {
      invariant(contract.auction.cancelListing, "contract does not support auction.cancelListing");
      return await contract.auction.cancelListing(data.id);
    } else {
      invariant(contract.direct.cancelListing, "contract does not support direct.cancelListing");
      return await contract.direct.cancelListing(data.id);
    }
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Cancel a direct listing
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: cancelDirectListing,
 *     isLoading,
 *     error,
 *   } = useCancelDirectListing(contract);
 *
 *   if (error) {
 *     console.error("failed to cancel direct listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={cancelDirectListing}
 *     >
 *       Cancel Direct Listing
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace v3 contract
 * @returns a mutation object that can be used to cancel a direct listing
 * @twfeature DirectListings
 * @see {@link https://portal.thirdweb.com/react/react.usecanceldirectlisting?utm_source=sdk | Documentation}
 */
function useCancelDirectListing(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const walletAddress = useAddress();
  return useMutation(async listingId => {
    invariant(walletAddress, "no wallet connected, cannot create listing");
    requiredParamInvariant(contract, "No Contract instance provided");
    requiredParamInvariant(listingId, "No listing id provided");
    invariant(contract.directListings.cancelListing, "contract does not support directListings.cancelListing");
    return await contract.directListings.cancelListing(listingId);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Cancel an english auction
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: cancelEnglishAuction,
 *     isLoading,
 *     error,
 *   } = useCancelEnglishAuction(contract);
 *
 *   if (error) {
 *     console.error("failed to cancel english auction", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={cancelEnglishAuction}
 *     >
 *       Cancel English Auction
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace v3 contract
 * @returns a mutation object that can be used to cancel an english auction
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.usecancelenglishauction?utm_source=sdk | Documentation}
 */
function useCancelEnglishAuction(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const walletAddress = useAddress();
  return useMutation(async auctionId => {
    invariant(walletAddress, "no wallet connected, cannot create listing");
    requiredParamInvariant(contract, "No Contract instance provided");
    requiredParamInvariant(auctionId, "No auction id provided");
    invariant(contract.englishAuctions.cancelAuction, "contract does not support englishAuctions.cancelAuction");
    return await contract.englishAuctions.cancelAuction(auctionId);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Make a bid on an auction listing
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: makeBid,
 *     isLoading,
 *     error,
 *   } = useMakeBid(contract);
 *
 *   if (error) {
 *     console.error("failed to make a bid", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => makeBid({ listingId: 1, bid: 2 })}
 *     >
 *       Bid!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to make a bid on an auction listing
 * @see {@link https://portal.thirdweb.com/react/react.usemakebid?utm_source=sdk | Documentation}
 * @beta
 */
function useMakeBid(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const walletAddress = useAddress();
  return useMutation(async data => {
    invariant(walletAddress, "no wallet connected, cannot make bid");
    requiredParamInvariant(contract, "No Contract instance provided");
    invariant(contract.auction.makeBid, "contract does not support auction.makeBid");
    return await contract.auction.makeBid(data.listingId, data.bid);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Nake an offer on a direct or auction listing
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: makeOffer,
 *     isLoading,
 *     error,
 *   } = useMakeOffer(contract);
 *
 *   if (error) {
 *     console.error("failed to make a bid", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => makeOffer({ listingId: 1, pricePerToken: 0.5, quantity: 1 })}
 *     >
 *       Bid!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to make a bid on an auction listing
 * @see {@link https://portal.thirdweb.com/react/react.usemakeoffer?utm_source=sdk | Documentation}
 * @beta
 */
function useMakeOffer(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const walletAddress = useAddress();
  return useMutation(async data => {
    invariant(walletAddress, "no wallet connected, cannot make bid");
    requiredParamInvariant(contract, "No Contract instance provided");
    return await contract.makeOffer(data.listingId, data.pricePerToken, data.quantity);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Accept a specific offer on a direct listing
 *
 * @remarks will accept the latest offer by the given offeror.
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: acceptOffer,
 *     isLoading,
 *     error,
 *   } = useAcceptDirectListingOffer(contract);
 *
 *   if (error) {
 *     console.error("failed to accept offer", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => acceptOffer({ listingId: 1, addressOfOfferor: "{{wallet_address}}" })}
 *     >
 *       Accept offer
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to accept an offer on a direct listing
 * @see {@link https://portal.thirdweb.com/react/react.useacceptdirectlistingoffer?utm_source=sdk | Documentation}
 */
function useAcceptDirectListingOffer(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const walletAddress = useAddress();
  return useMutation(async data => {
    invariant(walletAddress, "no wallet connected, cannot make bid");
    requiredParamInvariant(contract?.direct, "No Direct instance provided");
    return await contract.direct.acceptOffer(data.listingId, data.addressOfOfferor);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Execute an auction sale. Can only be executed once the auction has ended and the auction has a winning bid.
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: executeAuctionSale,
 *     isLoading,
 *     error,
 *   } = useExecuteAuctionSale(contract);
 *
 *   if (error) {
 *     console.error("failed to execute sale", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => executeAuctionSale({ listingId: 1 })}
 *     >
 *       Execute sale
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to accept an offer on a direct listing
 * @see {@link https://portal.thirdweb.com/react/react.useexecuteauctionsale?utm_source=sdk | Documentation}
 * @beta
 */
function useExecuteAuctionSale(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const walletAddress = useAddress();
  return useMutation(async data => {
    invariant(walletAddress, "no wallet connected, cannot make bid");
    requiredParamInvariant(contract?.auction, "No Auction marketplace instance provided");
    return await contract.auction.executeSale(data.listingId);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Buy out an auction listing
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: buyNow,
 *     isLoading,
 *     error,
 *   } = useBuyNow(contract);
 *
 *   if (error) {
 *     console.error("failed to buyout listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => buyNow({listingId: 1, type: ListingType.Auction})}
 *     >
 *       Buy listing!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to buy out an auction listing
 * @see {@link https://portal.thirdweb.com/react/react.usebuynow?utm_source=sdk | Documentation}
 * @beta
 */
function useBuyNow(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const walletAddress = useAddress();
  return useMutation(async data => {
    invariant(walletAddress, "no wallet connected, cannot make bid");
    requiredParamInvariant(contract, "No Contract instance provided");
    if (data.type === ListingType.Direct) {
      invariant(contract.direct.buyoutListing, "contract does not support direct.buyoutListing");
      return await contract.direct.buyoutListing(data.id, data.buyAmount, data.buyForWallet);
    }
    invariant(contract.auction.buyoutListing, "contract does not support auction.buyoutListing");
    return await contract.auction.buyoutListing(data.id);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Buy a direct listing
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}", "marketplace-v3");
 *   const {
 *     mutate: buyNow,
 *     isLoading,
 *     error,
 *   } = useBuyDirectListing(contract);
 *
 *   if (error) {
 *     console.error("failed to buy direct listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => buyNow({listingId: 1, quantity: 1, buyer: "{{address}}"})}
 *     >
 *       Buy listing!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a MarketplaceV3 contract
 * @returns a mutation object that can be used to buy out a direct listing
 * @see {@link https://portal.thirdweb.com/react/react.useBuyDirectListing?utm_source=sdk | Documentation}
 * @beta
 */
function useBuyDirectListing(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const walletAddress = useAddress();
  return useMutation(async data => {
    invariant(walletAddress, "no wallet connected, cannot buy from listing");
    requiredParamInvariant(contract, "No Contract instance provided");
    invariant(contract.directListings.buyFromListing, "contract does not support directListings.buyFromListing");
    return await contract.directListings.buyFromListing(data.listingId, data.quantity, data.buyer);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}
function isMarketplaceV1(contract) {
  return contract.getAllListings !== undefined;
}

/** **********************/
/**     READ  HOOKS     **/
/** **********************/

/**
 * Get a single NFT
 *
 * @example
 * ```javascript
 * const tokenId = 0; // the tokenId to look up
 * const { data: nft, isLoading, error } = useNFT(contract, tokenId);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @param tokenId - the tokenId to look up
 * @returns a response object that includes the metadata for the given tokenId
 * @beta
 * @twfeature ERC721 | ERC1155
 * @see {@link https://portal.thirdweb.com/react/react.usenft?utm_source=sdk | Documentation}
 */
function useNFT(contract, tokenId) {
  const contractAddress = contract?.getAddress();
  const {
    erc721,
    erc1155
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.contract.nft.get(contractAddress, tokenId), async () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    if (erc1155) {
      invariant(erc1155.get, "Contract instance does not support get");
      return await erc1155.get(BigNumber.from(tokenId || 0));
    }
    if (erc721) {
      invariant(erc721.get, "Contract instance does not support get");
      return await erc721.get(BigNumber.from(tokenId || 0));
    }
    invariant(false, "Unknown NFT type");
  }, {
    enabled: !!erc721 || !!erc1155 && tokenId !== undefined
  });
}

/**
 * Get all NFTs
 *
 * @example
 * ```javascript
 * const { data: nfts, isLoading, error } = useNFTs(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @param queryParams - query params to pass to the query for pagination
 * @returns a response object that includes an array of NFTs
 * @twfeature ERC721Supply | ERC721Enumerable | ERC1155Enumerable
 * @beta
 * @see {@link https://portal.thirdweb.com/react/react.usenfts?utm_source=sdk | Documentation}
 */
function useNFTs(contract, queryParams) {
  const contractAddress = contract?.getAddress();
  const {
    erc721,
    erc1155
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.contract.nft.query.all(contractAddress, queryParams), async () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    if (erc721) {
      invariant(erc721.getAll, "Contract instance does not support getAll");
      return await erc721.getAll(queryParams);
    }
    if (erc1155) {
      invariant(erc1155.getAll, "Contract instance does not support getAll");
      return await erc1155.getAll(queryParams);
    }
    invariant(false, "Unknown NFT type");
  }, {
    enabled: !!erc721 || !!erc1155
  });
}

/**
 * Get total supply count
 *
 * @example
 * ```javascript
 * const { contract } = useContract("{{contract_address}}");
 * const { data: count, isLoading, error } = useTotalCount(contract);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a response object that includes the total count of NFTs
 * @beta
 * @twfeature ERC721Supply | ERC1155Enumerable
 * @see {@link https://portal.thirdweb.com/react/react.usetotalcount?utm_source=sdk | Documentation}
 */
function useTotalCount(contract) {
  const contractAddress = contract?.getAddress();
  const {
    erc721,
    erc1155
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.contract.nft.query.totalCount(contractAddress), async () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    if (erc1155) {
      invariant(erc1155.totalCount, "Contract instance does not support totalCount");
      return await erc1155.totalCount();
    }
    if (erc721) {
      invariant(erc721.totalCount, "Contract instance does not support totalCount");
      return await erc721.totalCount();
    }
    invariant(false, "Unknown NFT type");
  }, {
    enabled: !!erc721 || !!erc1155
  });
}

/**
 * Get total minted supply count
 *
 * @example
 * ```javascript
 * const { contract } = useContract("{{contract_address}}");
 * const { data: totalCirculatingSupply, isLoading, error } = useTotalCirculatingSupply(contract);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @param tokenId - required for ERC1155, the tokenId to look up
 * @returns a response object that includes the total minted supply
 * @beta
 * @twfeature ERC721Supply | ERC1155Enumerable
 * @see {@link https://portal.thirdweb.com/react/react.usetotalcirculatingsupply?utm_source=sdk | Documentation}
 */
function useTotalCirculatingSupply(contract, tokenId) {
  const contractAddress = contract?.getAddress();
  const {
    erc721,
    erc1155
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.contract.nft.query.totalCirculatingSupply(contractAddress), async () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    if (erc1155) {
      invariant(erc1155.totalCirculatingSupply, "Contract instance does not support totalCirculatingSupply");
      requiredParamInvariant(tokenId, "No tokenId provided");
      return await erc1155.totalCirculatingSupply(tokenId);
    }
    if (erc721) {
      invariant(erc721.totalCirculatingSupply, "Contract instance does not support totalCirculatingSupply");
      return await erc721.totalCirculatingSupply();
    }
    invariant(false, "Unknown NFT type");
  }, {
    enabled: !!erc721 || !!erc1155 && tokenId !== undefined
  });
}

/**
 * Get all NFTs owned by a specific wallet
 *
 * @example
 * ```javascript
 * const { data: ownedNFTs, isLoading, error } = useOwnedNFTs(contract, "{{wallet_address}}");
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @param ownerWalletAddress - the wallet address to get owned tokens for
 * @returns a response object that includes the list of owned tokens
 * @beta
 * @twfeature ERC721Enumerable | ERC1155Enumerable | ERC721Supply
 * @see {@link https://portal.thirdweb.com/react/react.useownednfts?utm_source=sdk | Documentation}
 */
function useOwnedNFTs(contract, ownerWalletAddress) {
  const contractAddress = contract?.getAddress();
  const {
    erc721,
    erc1155
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.contract.nft.query.owned.all(contractAddress, ownerWalletAddress), async () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    invariant(ownerWalletAddress, "No wallet address provided");
    if (erc721) {
      return await erc721.getOwned(ownerWalletAddress);
    }
    if (erc1155) {
      return await erc1155.getOwned(ownerWalletAddress);
    }
    invariant(false, "Unknown NFT type");
  }, {
    enabled: (!!erc721 || !!erc1155) && !!ownerWalletAddress
  });
}

/**
 * Get NFT balance of a specific wallet
 *
 * @example
 * ```javascript
 * const { data: ownerBalance, isLoading, error } = useNFTBalance(contract, "{{wallet_address}}");
 * // for ERC1155 contracts, you can also pass a tokenId
 * const tokenId = 0;
 * const { data: ownerBalance, isLoading, error } = useNFTBalance(contract, "{{wallet_address}}", tokenId);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @param ownerWalletAddress - the wallet address to check the balance of
 * @param tokenId - required for ERC1155, the tokenId to look up
 * @returns a response object that includes the total balance of the owner
 * @twfeature ERC721 | ERC1155
 * @see {@link https://portal.thirdweb.com/react/react.usenftbalance?utm_source=sdk | Documentation}
 * @beta
 */
function useNFTBalance(contract, ownerWalletAddress, tokenId) {
  const contractAddress = contract?.getAddress();
  const {
    erc721,
    erc1155
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.contract.nft.balanceOf(contractAddress, ownerWalletAddress, tokenId), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    invariant(ownerWalletAddress, "No owner wallet address provided");
    if (erc1155) {
      requiredParamInvariant(tokenId, "No tokenId provided");
      invariant(erc1155.balanceOf, "Contract instance does not support balanceOf");
      return erc1155.balanceOf(ownerWalletAddress, tokenId);
    }
    if (erc721) {
      invariant(erc721.balanceOf, "Contract instance does not support balanceOf");
      return erc721.balanceOf(ownerWalletAddress);
    }
    invariant(false, "Unknown NFT type");
  }, {
    enabled: !!erc721 || !!erc1155 && !!ownerWalletAddress
  });
}

/**
 * Get the shared metadata of an Open Edition NFT contract
 *
 * @example
 * ```javascript
 * const { data: sharedMetadata, isLoading, error } = useSharedMetadata(contract);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a response object that includes the shared metadata of the contract
 * @twfeature ERC721SharedMetadata
 * @see {@link https://portal.thirdweb.com/react/react.usesharedmetadata?utm_source=sdk | Documentation}
 * @beta
 */
function useSharedMetadata(contract) {
  const contractAddress = contract?.getAddress();
  const {
    erc721
  } = getErcs(contract);
  return useQueryWithNetwork(cacheKeys.contract.nft.sharedMetadata.get(contractAddress), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    if (erc721) {
      invariant(erc721.sharedMetadata.get, "Contract instance does not support sharedMetadata.get");
      return erc721.sharedMetadata.get();
    }
    invariant(false, "Unknown NFT type");
  }, {
    enabled: !!contract
  });
}

/** **********************/
/**     WRITE HOOKS     **/
/** **********************/

/**
 * Mint an NFT to a specific wallet
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: mintNft,
 *     isLoading,
 *     error,
 *   } = useMintNFT(contract);
 *
 *   if (error) {
 *     console.error("failed to mint NFT", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => mintNft({ name: "My awesome NFT!", to: "{{wallet_address}}" })}
 *     >
 *       Mint!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a mutation object that can be used to mint a new NFT token to the connected wallet
 * @beta
 * @twfeature ERC721Mintable | ERC1155Mintable
 * @see {@link https://portal.thirdweb.com/react/react.usemintnft?utm_source=sdk | Documentation}
 */
function useMintNFT(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const {
    erc1155,
    erc721
  } = getErcs(contract);
  return useMutation(async data => {
    invariant(data.to, 'No "to" address provided');
    requiredParamInvariant(contract, "contract is undefined");
    if (erc1155) {
      invariant("supply" in data, "supply not provided");
      const {
        to,
        metadata,
        supply
      } = data;
      return await erc1155.mintTo(to, {
        metadata,
        supply: BigNumber.from(supply || 1)
      });
    }
    if (erc721) {
      return await erc721.mintTo(data.to, data.metadata);
    }
    invariant(false, "Unknown NFT type");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Increase the supply of an existing NFT
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: mintNftSupply,
 *     isLoading,
 *     error,
 *   } = useMintNFTSupply(contract);
 *
 *   if (error) {
 *     console.error("failed to mint additional supply", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => mintNftSupply({ tokenId: 0, additionalSupply: 100, to: "{{wallet_address}}"})}
 *     >
 *       Mint Additional Supply!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link Erc1155}
 * @returns a mutation object that can be used to mint a more supply of a token id to the provided wallet
 * @beta
 * @twfeature ERC1155Mintable
 * @see {@link https://portal.thirdweb.com/react/react.usemintnftsupply?utm_source=sdk | Documentation}
 */
function useMintNFTSupply(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  return useMutation(async data => {
    invariant(data.to, 'No "to" address provided');
    requiredParamInvariant(contract, "contract is undefined");
    requiredParamInvariant(data.tokenId, "tokenId not provided");
    invariant("additionalSupply" in data, "additionalSupply not provided");
    const {
      to,
      tokenId,
      additionalSupply
    } = data;
    return await contract.mintAdditionalSupplyTo(to, tokenId, additionalSupply);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Transfer an NFT
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: transferNFT,
 *     isLoading,
 *     error,
 *   } = useTransferNFT(contract);
 *
 *   if (error) {
 *     console.error("failed to transfer NFT", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => transferNFT({
 *         to: "{{wallet_address}}",
 *         tokenId: 2
 *       })}
 *     >
 *       Transfer
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a mutation object that can be used to transfer NFTs
 * @beta
 * @twfeature ERC721 | ERC1155
 * @see {@link https://portal.thirdweb.com/react/react.usetransfernft?utm_source=sdk | Documentation}
 */
function useTransferNFT(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const {
    erc1155,
    erc721
  } = getErcs(contract);
  return useMutation(data => {
    invariant("to" in data, "to not provided");
    if (erc1155) {
      invariant(erc1155.transfer, "contract does not support transfer");
      requiredParamInvariant(data.tokenId, "tokenId not provided");
      invariant("amount" in data, "amount not provided");
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return erc1155.transfer(data.to, data.tokenId, data.amount);
    }
    if (erc721) {
      return erc721.transfer(data.to, data.tokenId);
    }
    invariant(false, "Unknown NFT type");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Airdrop NFTs to a list of wallets
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: airdropNFT,
 *     isLoading,
 *     error,
 *   } = useAirdropNFT(contract);
 *
 *   if (error) {
 *     console.error("failed to transfer batch NFTs", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => airdropNFT({
 *          tokenId: 2,
 *          addresses: [
 *            { address: "{{wallet_address}}", quantity: 2 },
 *            { address: "{{wallet_address}}", quantity: 4 } }
 *          ]
 *       )}
 *     >
 *       Airdrop NFT
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link Erc1155}
 * @returns a mutation object that can be used to transfer batch NFTs
 * @twfeature ERC1155
 * @see {@link https://portal.thirdweb.com/react/react.useairdropnft?utm_source=sdk | Documentation}
 * @beta
 */
function useAirdropNFT(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  return useMutation(_ref => {
    let {
      tokenId,
      addresses
    } = _ref;
    requiredParamInvariant(contract, "contract is undefined");
    invariant(contract.airdrop, "contract does not support airdrop");
    return contract.airdrop(tokenId, addresses);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Burn an NFT
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: burnNFT,
 *     isLoading,
 *     error,
 *   } = useBurnNFT(contract);
 *
 *   if (error) {
 *     console.error("failed to burn NFT", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => burnNFT({ tokenId: 0, amount: 1 })}
 *     >
 *       Burn!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a mutation object that can be used to burn an NFT token from the connected wallet
 * @twfeature ERC721Burnable | ERC1155Burnable
 * @see {@link https://portal.thirdweb.com/react/react.useburnnft?utm_source=sdk | Documentation}
 * @beta
 */
function useBurnNFT(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const {
    erc1155,
    erc721
  } = getErcs(contract);
  return useMutation(async data => {
    requiredParamInvariant(data.tokenId, "No tokenId provided");
    requiredParamInvariant(contract, "contract is undefined");
    if (erc1155) {
      invariant("amount" in data, "amount not provided");
      const {
        tokenId,
        amount
      } = data;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return await erc1155.burn(tokenId, amount);
    }
    if (erc721) {
      const {
        tokenId
      } = data;
      return await erc721.burn(tokenId);
    }
    invariant(false, "Unknown NFT type");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Set shared metadata
 * TODO add docs
 * @private
 */
function useSetSharedMetadata(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const {
    erc721
  } = getErcs(contract);
  return useMutation(async data => {
    if (erc721) {
      return await erc721.sharedMetadata.set(data);
    }
    invariant(false, "Unknown NFT type");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/** **********************/
/**         UTILS       **/
/** **********************/

/**
 * @internal
 */
/**
 * @internal
 */
/**
 * @internal
 */
/** **********************/
/**     READ  HOOKS     **/
/** **********************/
/**
 * Get all members of all roles
 *
 * @example
 * ```jsx
 * const { data: roles, isLoading, error } = useAllRoleMembers(contract);
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a list of addresses for all supported roles on the contract.
 * @twfeature PermissionsEnumerable
 * @see {@link https://portal.thirdweb.com/react/react.useallrolemembers?utm_source=sdk | Documentation}
 * @beta
 */
function useAllRoleMembers(contract) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.extensions.roles.getAll(contractAddress), () => {
    requiredParamInvariant(contract, "No contract provided");
    invariant(contract.roles, "Contract does not support roles");
    // have to cast to any because of role bs, type is defined in the useQueryWithNetwork definition above
    return contract.roles.getAll();
  }, {
    enabled: !!contract && !!contractAddress
  });
}

/**
 * Get all members of a specific role
 *
 * @example
 * ```jsx
 * const { data: members, isLoading, error } = useRoleMembers(SmartContract, "admin");
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @param role - the role to get the members of, see {@link Role}
 * @returns a list of addresses that are members of the role
 * @twfeature Permissions
 * @see {@link https://portal.thirdweb.com/react/react.userolemembers?utm_source=sdk | Documentation}
 * @beta
 */
function useRoleMembers(contract, role) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.extensions.roles.get(contractAddress, role), () => {
    requiredParamInvariant(contract, "No contract provided");
    invariant(contract.roles, "Contract does not support roles");
    return contract.roles.get(role);
  }, {
    enabled: !!contract && !!contractAddress && !!role
  });
}

/**
 * Check if an address is a member of a specific role
 *
 * @example
 * ```jsx
 * const { data: isMember, isLoading, error } = useIsAddressRole(contract, "admin", "{{wallet_address}}");
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @param role - the role to check the member against, see {@link Role}
 * @param walletAddress - the address to check
 * @returns true if the address is a member of the role, or false if not
 * @twfeature PermissionsEnumerable
 * @see {@link https://portal.thirdweb.com/react/react.useisaddressrole?utm_source=sdk | Documentation}
 * @beta
 */
function useIsAddressRole(contract, role, walletAddress) {
  // TODO this might be possible to do with `verify` fn instead?
  const contractHasRoles = !!(contract && contract.roles);
  const {
    data
  } = useRoleMembers(contractHasRoles ? contract : undefined, role);

  // if the contract does not have roles then everything is allowed === true
  if (contractHasRoles === false) {
    return true;
  }

  // switch logic (if address 0 is in the role list then anyone has permissions to it)
  if (data?.includes(constants.AddressZero)) {
    return true;
  }

  // actual role check logic
  return !!(walletAddress && data?.includes(walletAddress));
}

/** **********************/
/**     WRITE HOOKS     **/
/** **********************/

/**
 * Overwrite the list of members for specific roles
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: overwriteRoles,
 *     isLoading,
 *     error,
 *   } = useSetAllRoleMembers(contract);
 *
 *   if (error) {
 *     console.error("failed to overwrite roles", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => overwriteRoles({ rolesWithAddresses: { minter: ["{{wallet_address}"] } })}
 *     >
 *       Overwrite Roles
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to overwrite all roles on the contract
 * @twfeature Permissions
 * @beta
 */
function useSetAllRoleMembers(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  return useMutation(async rolesWithAddresses => {
    requiredParamInvariant(contract, "No contract provided");
    invariant(contract.roles, "Contract does not support roles");
    await contract.roles.setAll(rolesWithAddresses);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Grant a role to a specific address
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: grantRole,
 *     isLoading,
 *     error,
 *   } = useGrantRole(contract);
 *
 *   if (error) {
 *     console.error("failed to grant role", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => grantRole({ role: "admin", address: {{wallet_address}} })}
 *     >
 *       Grant Role
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to grant a member of a role on the contract
 * @twfeature Permissions | PermissionsEnumerable
 * @see {@link https://portal.thirdweb.com/react/react.usegrantrole?utm_source=sdk | Documentation}
 * @beta
 */
function useGrantRole(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  return useMutation(async params => {
    requiredParamInvariant(contract, "No contract provided");
    invariant(contract.roles, "Contract does not support roles");
    await contract.roles.grant(params.role, params.address);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Revoke a role from a specific address
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: revokeRole,
 *     isLoading,
 *     error,
 *   } = useRevokeRole(contract);
 *
 *   if (error) {
 *     console.error("failed to revoke role", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => revokeRole({ role: "admin", address: {{wallet_address}} })}
 *     >
 *       Revoke Role
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to revoke a role from a member on the contract
 * @twfeature Permissions | PermissionsEnumerable
 * @see {@link https://portal.thirdweb.com/react/react.userevokerole?utm_source=sdk | Documentation}
 * @beta
 */
function useRevokeRole(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  return useMutation(async params => {
    requiredParamInvariant(contract, "No contract provided");
    invariant(contract.roles, "Contract does not support roles");
    await contract.roles.revoke(params.role, params.address);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/** **********************/
/**     READ  HOOKS     **/
/** **********************/

/**
 * Get the total supply for this token
 *
 * @example
 * ```javascript
 * const { data: totalSupply, isLoading, error } = useTokenSupply(contract);
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a response object that includes the total minted supply
 * @twfeature ERC20
 * @see {@link https://portal.thirdweb.com/react/react.usetokensupply?utm_source=sdk | Documentation}
 * @beta
 */
function useTokenSupply(contract) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.token.totalSupply(contractAddress), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    const erc20 = getErc20(contract);
    if (erc20) {
      return erc20.totalSupply();
    }
    invariant(false, "Smart contract is not a valid erc20 contract");
  }, {
    enabled: !!contract || !!contractAddress
  });
}

/**
 * Get token balance for a specific wallet
 *
 * @example
 * ```javascript
 * const { data: balance, isLoading, error } = useTokenBalance(contract, "{{wallet_address}}");
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a response object that includes the balance of the address
 * @twfeature ERC20
 * @see {@link https://portal.thirdweb.com/react/react.usetokenbalance?utm_source=sdk | Documentation}
 * @beta
 */
function useTokenBalance(contract, walletAddress) {
  const contractAddress = contract?.getAddress();
  const erc20 = getErc20(contract);
  return useQueryWithNetwork(cacheKeys.contract.token.balanceOf(contractAddress, walletAddress), async () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    invariant(walletAddress, "No address provided");
    if (erc20) {
      return await erc20.balanceOf(walletAddress);
    }
    invariant(false, "Smart contract is not a valid erc20 contract");
  }, {
    enabled: !!walletAddress && !!contract
  });
}

/**
 * Get token decimals
 *
 * @example
 * ```javascript
 * const { data: decimals, isLoading, error } = useTokenDecimals(contract);
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a response object that includes the decimals of the ERC20 token
 * @twfeature ERC20
 * @see {@link https://portal.thirdweb.com/react/react.usetokendecimals?utm_source=sdk | Documentation}
 * @beta
 */
function useTokenDecimals(contract) {
  const contractAddress = contract?.getAddress();
  const erc20 = getErc20(contract);
  return useQueryWithNetwork(cacheKeys.contract.token.decimals(contractAddress), async () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    if (erc20) {
      return (await erc20.get()).decimals;
    }
    invariant(false, "Smart contract is not a valid erc20 contract");
  }, {
    enabled: !!contract
  });
}

/** **********************/
/**     WRITE HOOKS     **/
/** **********************/

/**
 * Mint tokens
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: mintTokens,
 *     isLoading,
 *     error,
 *   } = useMintToken(contract);
 *
 *   if (error) {
 *     console.error("failed to mint tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => mintTokens({ to: "{{wallet_address}}", amount: 1000 })}
 *     >
 *       Mint!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a mutation object that can be used to mint new tokens to the connected wallet
 * @twfeature ERC20Mintable
 * @see {@link https://portal.thirdweb.com/react/react.useminttoken?utm_source=sdk | Documentation}
 * @beta
 */
function useMintToken(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const erc20 = getErc20(contract);
  return useMutation(data => {
    const {
      to,
      amount
    } = data;
    requiredParamInvariant(contract, "contract is undefined");
    if (erc20) {
      return erc20.mintTo(to, amount);
    }
    invariant(false, "Smart contract is not a valid erc20 contract");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Claim tokens to a specific wallet
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: claimTokens,
 *     isLoading,
 *     error,
 *   } = useClaimToken(contract);
 *
 *   if (error) {
 *     console.error("failed to claim tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => claimTokens({ to: "{{wallet_address}}", amount: 100 })}
 *     >
 *       Claim Tokens!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a mutation object that can be used to tokens to the wallet specified in the params
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.useclaimtoken?utm_source=sdk | Documentation}
 * @beta
 */
function useClaimToken(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const erc20 = getErc20(contract);
  return useMutation(async data => {
    invariant(data.to, 'No "to" address provided');
    if (erc20) {
      invariant(erc20?.claimTo, "contract does not support claimTo");
      return await erc20.claimTo(data.to, data.amount, {
        checkERC20Allowance: data.checkERC20Allowance
      });
    }
    invariant(false, "Smart contract is not a valid erc20 contract");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Transfer tokens to a specific wallet
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: transferTokens,
 *     isLoading,
 *     error,
 *   } = useTransferToken(contract);
 *
 *   if (error) {
 *     console.error("failed to transfer tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => transferTokens({ to: "{{wallet_address}}", amount: 1000 })}
 *     >
 *       Transfer
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a mutation object that can be used to transfer tokens
 * @twfeature ERC20
 * @see {@link https://portal.thirdweb.com/react/react.usetransfertoken?utm_source=sdk | Documentation}
 * @beta
 */
function useTransferToken(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const erc20 = getErc20(contract);
  return useMutation(data => {
    const {
      to,
      amount
    } = data;
    if (erc20) {
      invariant(erc20?.transfer, "contract does not support transfer");
      return erc20.transfer(to, amount);
    }
    invariant(false, "Smart contract is not a valid erc20 contract");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Airdrop tokens to a list of wallets
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: transferBatchTokens,
 *     isLoading,
 *     error,
 *   } = useTransferToken(contract);
 *
 *   if (error) {
 *     console.error("failed to transfer batch tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => transferBatchTokens([{ to: "{{wallet_address}}", amount: 1000 }, { to: "{{wallet_address}}", amount: 2000 }])}
 *     >
 *       Airdrop
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a mutation object that can be used to transfer batch tokens
 * @twfeature ERC20
 * @see {@link https://portal.thirdweb.com/react/react.usetransferbatchtoken?utm_source=sdk | Documentation}
 * @beta
 */
function useTransferBatchToken(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const erc20 = getErc20(contract);
  return useMutation(data => {
    if (erc20) {
      invariant(erc20.transferBatch, "contract does not support transferBatch");
      const convertedData = data.map(token => ({
        toAddress: token.to,
        amount: token.amount
      }));
      return erc20.transferBatch(convertedData);
    }
    invariant(false, "Smart contract is not a valid erc20 contract");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Burn tokens
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: burnTokens,
 *     isLoading,
 *     error,
 *   } = useBurnToken(contract);
 *
 *   if (error) {
 *     console.error("failed to burn tokens", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => burnTokens({ amount: 1000 })}
 *     >
 *       Burn!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link TokenContract}
 * @returns a mutation object that can be used to burn tokens from the connected wallet
 * @twfeature ERC20Burnable
 * @see {@link https://portal.thirdweb.com/react/react.useburntoken?utm_source=sdk | Documentation}
 * @beta
 */
function useBurnToken(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  const erc20 = getErc20(contract);
  return useMutation(data => {
    const {
      amount
    } = data;
    requiredParamInvariant(contract, "contract is undefined");
    if (erc20) {
      invariant(erc20.burn, "contract does not support burn");
      return erc20.burn(amount);
    }
    invariant(false, "Smart contract is not a valid erc20 contract");
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/** **********************/
/**       READ HOOKS    **/
/** **********************/

/**
 * Get all accounts
 *
 * @example
 * ```javascript
 * const { data: accounts, isLoading, error } = useAccounts(contract);
 * ```
 *
 * @param contract - an instance of a account factory contract
 * @returns a response object that includes an array of all accounts with their associated admin
 * @twfeature AccountFactory
 * @see {@link https://portal.thirdweb.com/react/react.useaccounts?utm_source=sdk | Documentation}
 * @beta
 */
function useAccounts(contract) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.accountFactory.getAll(contractAddress), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    invariant(contract.accountFactory.getAllAccounts, "Contract instance does not support contract.accountFactory.getAllAccounts");
    return contract.accountFactory.getAllAccounts();
  }, {
    enabled: !!contract
  });
}

/**
 * Get all accounts associated with the provided address
 *
 * @example
 * ```javascript
 * const { data: accountsForAddress, isLoading, error } = useAccountsForAddress(contract, "{{account_address}}");
 * ```
 *
 * @param contract - an instance of a account factory contract
 * @returns a response object that includes an array of all accounts associated with the adress
 * @twfeature AccountFactory
 * @see {@link https://portal.thirdweb.com/react/react.useaccountsforaddress?utm_source=sdk | Documentation}
 * @beta
 */
function useAccountsForAddress(contract, address) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.accountFactory.getAllForAddress(contractAddress, address), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    invariant(contract.accountFactory.getAssociatedAccounts, "Contract instance does not support contract.accountFactory.getAssociatedAccounts");
    return contract.accountFactory.getAssociatedAccounts(address || "");
  }, {
    enabled: !!contract
  });
}

/**
 * Check if a account has been deployed for the given admin
 *
 * @example
 * ```javascript
 * const { data: isAccountDeployed, isLoading, error } = useIsAccountDeployed(contract);
 * ```
 *
 * @param contract - an instance of a account factory contract
 * @returns a boolean indicating if a account has been deployed for the given admin
 * @twfeature AccountFactory
 * @see {@link https://portal.thirdweb.com/react/react.useisaccountdeployed?utm_source=sdk | Documentation}
 * @beta
 */
function useIsAccountDeployed(contract, admin, extraData) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.accountFactory.isAccountDeployed(contractAddress, admin), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    invariant(contract.accountFactory.isAccountDeployed, "Contract instance does not support contract.accountFactory.getAllAccounts");
    invariant(admin, "No account address provided");
    return contract.accountFactory.isAccountDeployed(admin, extraData);
  }, {
    enabled: !!contract
  });
}

/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Create a account
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: createAccount,
 *     isLoading,
 *     error,
 *   } = useCreateAccount(contract);
 *
 *   if (error) {
 *     console.error("failed to create account", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => createAccount("0x...")}
 *     >
 *       Create Account
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a account factory contract
 * @returns a mutation object that can be used to create a account
 * @twfeature AccountFactory
 * @see {@link https://portal.thirdweb.com/react/react.usecreateaccount?utm_source=sdk | Documentation}
 * @beta
 */
function useCreateAccount(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  return useMutation(async (admin, extraData) => {
    requiredParamInvariant(contract, "contract is undefined");
    return contract.accountFactory.createAccount(admin, extraData);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/** **********************/
/**       READ HOOKS    **/
/** **********************/
/**
 * Get all signers of account
 *
 * @example
 * ```javascript
 * const { data: accounts, isLoading, error } = useAccountSigners(contract);
 * ```
 *
 * @param contract - an instance of a account
 * @returns a response object that includes an array of all signers of the provided account
 * @twfeature Account
 * @see {@link https://portal.thirdweb.com/react/react.useaccountsigners?utm_source=sdk | Documentation}
 * @beta
 */
function useAccountSigners(contract) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.account.signers(contractAddress), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    invariant(contract.account.getAllSigners, "Contract instance does not support contract.account.getAllSigners");
    return contract.account.getAllSigners();
  }, {
    enabled: !!contract
  });
}

/**
 * Get all admins of account
 *
 * @example
 * ```javascript
 * const { data: accounts, isLoading, error } = useAccountSigners(contract);
 * ```
 *
 * @param contract - an instance of a account
 * @returns a response object that includes an array of all admins of the provided account
 * @twfeature Account
 * @see {@link https://portal.thirdweb.com/react/react.useaccountadmins?utm_source=sdk | Documentation}
 * @beta
 */
function useAccountAdmins(contract) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.account.signers(contractAddress), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    invariant(contract.account.getAllAdmins, "Contract instance does not support contract.account.getAllAdmins");
    return contract.account.getAllAdmins();
  }, {
    enabled: !!contract
  });
}

/**
 * Get all signers and admins of account
 *
 * @example
 * ```javascript
 * const { data: accounts, isLoading, error } = useAccountSigners(contract);
 * ```
 *
 * @param contract - an instance of a account
 * @returns a response object that includes an array of all admins of the provided account
 * @twfeature Account
 * @see {@link https://portal.thirdweb.com/react/react.useaccountadmins?utm_source=sdk | Documentation}
 * @beta
 */
function useAccountAdminsAndSigners(contract) {
  const contractAddress = contract?.getAddress();
  return useQueryWithNetwork(cacheKeys.contract.account.signers(contractAddress), () => {
    requiredParamInvariant(contract, "No Contract instance provided");
    invariant(contract.account.getAllAdminsAndSigners, "Contract instance does not support contract.account.getAllAdminsAndSigners");
    return contract.account.getAllAdminsAndSigners();
  }, {
    enabled: !!contract
  });
}

/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Set the account's entire snapshot of permissions
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: setAccountSigners,
 *     isLoading,
 *     error,
 *   } = useSetAccountSigners(contract);
 *
 *   if (error) {
 *     console.error("failed to set account signers", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => setAccountSigners("0x...")}
 *     >
 *       Set Account Signers
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a account contract
 * @returns a mutation object that can be used to set the account signers
 * @twfeature Account
 * @see {@link https://portal.thirdweb.com/react/react.usesetaccountsigners?utm_source=sdk | Documentation}
 * @beta
 */
function useSetAccountSigners(contract) {
  const activeChainId = useSDKChainId();
  const contractAddress = contract?.getAddress();
  const queryClient = useQueryClient();
  return useMutation(async permissionsSnapshot => {
    requiredParamInvariant(contract, "contract is undefined");
    return contract.account.resetAllPermissions(permissionsSnapshot);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

const warnSet = new Set();
function showDeprecationWarning(deprecated, replacement) {
  // deprecation warnings only in dev only in dev
  if (__DEV__) {
    if (warnSet.has(`${deprecated}:${replacement}`)) {
      return;
    }
    warnSet.add(`${deprecated}:${replacement}`);
    console.warn(`\`${deprecated}\` is deprecated and will be removed in a future major version. Please use \`${replacement}\` instead.`);
  }
}

/**
 * Hook for getting an instance of an `EditionDrop` contract. This contract is used to interface with ERC1155 compliant NFTs that can be lazily minted.
 * @param contractAddress - the address of the Edition Drop contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "edition-drop")
 *
 *   // Now you can use the edition drop contract in the rest of the component
 *
 *   // For example, this function will let the connected wallet claim a new NFT
 *   async function claim(tokenId, quantity) {
 *     await contract.claim(tokenId, quantity)
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const editionDrop = useEditionDrop("0x1234...");
 * + const editionDrop = useContract("0x1234...", "edition-drop").contract;
 * ```
 */
function useEditionDrop(contractAddress) {
  showDeprecationWarning(`useEditionDrop("${contractAddress || "0x..."}")`, `useContract("${contractAddress || "0x..."}", "edition-drop")`);
  return useContract(contractAddress, "edition-drop").contract;
}

/**
 * Hook for getting an instance of an `Edition` contract. This contract is used to interface with ERC1155 compliant NFTs.
 * @param contractAddress - the address of the Edition contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "edition")
 *
 *   // Now you can use the edition contract in the rest of the component
 *
 *   // For example, this function will return all the NFTs on this contract
 *   async function getNFTs() {
 *     const nfts = await contract.getAll()
 *     return nfts
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const edition = useEdition("0x1234...");
 * + const edition = useContract("0x1234...", "edition").contract;
 * ```
 */
function useEdition(contractAddress) {
  showDeprecationWarning(`useEdition("${contractAddress || "0x..."}")`, `useContract("${contractAddress || "0x..."}", "edition")`);
  return useContract(contractAddress, "edition").contract;
}

/**
 * Hook for getting an instance of an `NFTDrop` contract. This contract is meant to interface with ERC721 compliant NFTs that can be lazily minted.
 * @param contractAddress - the address of the NFT Drop contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "nft-drop")
 *
 *   // Now you can use the nft drop contract in the rest of the component
 *
 *   // For example, this function will let the connected wallet claim a new NFT
 *   async function claim(quantity) {
 *     await contract.claim(quantity)
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const nftDrop = useNFTDrop("0x1234...");
 * + const nftDrop = useContract("0x1234...", "nft-drop").contract;
 * ```
 */
function useNFTDrop(contractAddress) {
  showDeprecationWarning(`useNFTDrop("${contractAddress || "0x..."}")`, `useContract("${contractAddress || "0x..."}", "nft-drop")`);
  return useContract(contractAddress, "nft-drop").contract;
}

/**
 * Hook for getting an instance of a `Marketplace` contract. This contract is used to support marketplace for purchase and sale of on-chain assets.
 * @param contractAddress - the address of the Marketplace contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "marketplace")
 *
 *   // Now you can use the marketplace contract in the rest of the component
 *
 *   // For example, this function will return all the listings on the marketplace
 *   async function getListings() {
 *     const listings = await contract.getAll()
 *     return listings
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const marketplace = useMarketplace("0x1234...");
 * + const marketplace = useContract("0x1234...", "marketplace").contract;
 * ```
 */
function useMarketplace(contractAddress) {
  showDeprecationWarning(`useMarketplace("${contractAddress || "0x..."}")`, `useContract("${contractAddress || "0x..."}", "marketplace")`);
  return useContract(contractAddress, "marketplace").contract;
}

/**
 * Hook for getting an instance of an `NFTCollection` contract. This contract is meant to interface with ERC721 compliant NFTs.
 * @param contractAddress - the address of the NFT Collection contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract, isLoading, error } = useContract("<YOUR-CONTRACT-ADDRESS>", "nft-collection")
 *
 *   // Now you can use the nftCollection contract in the rest of the component
 *
 *   // For example, this function will return all the NFTs on this contract
 *   async function getNFTs() {
 *     const nfts = await contract.getAll()
 *     return nfts
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const nftCollection = useNFTCollection("0x1234...");
 * + const nftCollection = useContract("0x1234...", "nft-collection").contract;
 * ```
 */
function useNFTCollection(contractAddress) {
  showDeprecationWarning(`useNFTCollection("${contractAddress || "0x..."}")`, `useContract("${contractAddress || "0x..."}", "nft-collection")`);
  return useContract(contractAddress, "nft-collection").contract;
}

/**
 * Hook for getting an instance of a `Pack` contract. This contract supports the creation of on-chain luck-based lootboxes.
 * @param contractAddress - the address of the Pack contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract } = usePack("<YOUR-CONTRACT-ADDRESS>", "pack")
 *
 *   // Now you can use the pack contract in the rest of the component
 *
 *   // For example, this function will get all the packs on this contract
 *   async function getPacks() {
 *     const packs = await contract.getAll()
 *     return packs
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const pack = usePack("0x1234...");
 * + const pack = useContract("0x1234...", "pack").contract;
 * ```
 */
function usePack(contractAddress) {
  showDeprecationWarning(`usePack("${contractAddress || "0x..."}")`, `useContract("${contractAddress || "0x..."}", "pack")`);
  return useContract(contractAddress, "pack").contract;
}

/**
 * Hook for getting an instance of a `Token` contract. This contract supports ERC20 compliant tokens.
 * @param contractAddress - the address of the Token contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "token")
 *
 *   // Now you can use the token contract in the rest of the component
 *
 *   // For example, this function will get the connected wallets token balance
 *   async function balance() {
 *     const balance = await contract.balance()
 *     return balance
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const token = useToken("0x1234...");
 * + const token = useContract("0x1234...", "token").contract;
 * ```
 */
function useToken(contractAddress) {
  showDeprecationWarning(`useToken("${contractAddress || "0x..."}")`, `useContract("${contractAddress || "0x..."}", "token")`);
  return useContract(contractAddress, "token").contract;
}

/**
 * Hook for getting an instance of a `Token Drop` contract.
 * @param contractAddress - the address of the Token Drop contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "token-drop")
 *
 *   // Now you can use the token drop contract in the rest of the component
 *
 *   // For example, this function will get the connected wallets token balance
 *   async function balance() {
 *     const balance = await contract.balance()
 *     return balance
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const token = useTokenDrop("0x1234...");
 * + const token = useContract("0x1234...", "token-drop").contract;
 * ```
 */
function useTokenDrop(contractAddress) {
  showDeprecationWarning(`useTokenDrop("${contractAddress || "0x..."}")`, `useContract("${contractAddress || "0x..."}", "token-drop")`);
  return useContract(contractAddress, "token-drop").contract;
}

/**
 * Hook for getting an instance of an `Vote` contract. This contract enables fully featured voting-based decentralized governance systems.
 * @param contractAddress - the address of the Vote contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "vote")
 *
 *   // Now you can use the vote contract in the rest of the component
 *
 *   // For example, this function will get all the proposals on this contract
 *   async function getProposals() {
 *     const proposals = await contract.getAll()
 *     return proposals
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const vote = useVote("0x1234...");
 * + const vote = useContract("0x1234...", "vote").contract;
 * ```
 */
function useVote(contractAddress) {
  showDeprecationWarning(`useVote("${contractAddress || "0x..."}")`, `useContract("${contractAddress || "0x..."}", "vote")`);
  return useContract(contractAddress, "vote").contract;
}

/**
 * Hook for getting an instance of a `Split` contract. This contract supports fund distribution to multiple parties.
 * @param contractAddress - the address of the Split contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "split")
 *
 *   // Now you can use the split contract in the rest of the component
 *
 *   // For example, this function will return all the recipients of the split
 *   async function getRecipients() {
 *     const recipients = await contract.getAllRecipients()
 *     return recipients
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const split = useSplit("0x1234...");
 * + const split = useContract("0x1234...", "split").contract;
 * ```
 */
function useSplit(contractAddress) {
  showDeprecationWarning(`useSplit("${contractAddress || "0x..."}")`, `useContract("${contractAddress || "0x..."}", "split")`);
  return useContract(contractAddress, "split").contract;
}

/**
 * Hook for getting an instance of an `Multiwrap` contract. This contract is an ERC721 in which you can wrap ERC721, ERC1155 and ERC20 tokens.
 * @param contractAddress - the address of the Multiwrap contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "multiwrap")
 *
 *   // Now you can use the multiwrap contract in the rest of the component
 *
 *   // For example, this function will let the connected wallet wrap tokens
 *   async function wrap(tokensToWrap, wrappedNFTMetadata) {
 *     await contract.wrap(tokensToWrap, wrappedNFTMetadata)
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const multiwrap = useMultiwrap("0x1234...");
 * + const multiwrap = useContract("0x1234...", "multiwrap").contract;
 * ```
 */
function useMultiwrap(contractAddress) {
  showDeprecationWarning(`useMultiwrap("${contractAddress || "0x..."}")`, `useContract("${contractAddress || "0x..."}", "multiwrap")`);
  return useContract(contractAddress, "multiwrap").contract;
}

/**
 * Hook for getting an instance of an `SignatureDrop` contract. This contract is meant to interface with ERC721 compliant NFTs that can be lazily minted.
 * @param contractAddress - the address of the NFT Drop contract, found in your thirdweb dashboard
 *
 * @example
 * ```javascript
 * import { useContract } from '@thirdweb-dev/react'
 *
 * export default function Component() {
 *   const { contract } = useContract("<YOUR-CONTRACT-ADDRESS>", "signature-drop")
 *
 *   // Now you can use the Signature drop contract in the rest of the component
 *
 *   // For example, this function will let the connected wallet claim a new NFT
 *   async function claim(quantity) {
 *     await contract.claim(quantity)
 *   }
 *
 *   ...
 * }
 * ```
 * @public
 * @deprecated
 * This hook is deprecated and will be removed in a future major version. You should use {@link useContract} instead.
 * ```diff
 * - const signatureDrop = useSignatureDrop("0x1234...");
 * + const signatureDrop = useContract("0x1234...", "signature-drop").contract;
 * ```
 */
function useSignatureDrop(contractAddress) {
  showDeprecationWarning(`useSignatureDrop("${contractAddress || "0x..."}")`, `useContract("${contractAddress || "0x..."}", "signature-drop")`);
  return useContract(contractAddress, "signature-drop").contract;
}

/**
 * Hook used to upload any files or JSON data to decentralized storage systems like IPFS,
 * using the `storageInterface` configured on the `ThirdwebProvider`
 *
 * @param options - Configure the options for your upload
 * @returns Function used to upload files or JSON to decentralized storage systems
 *
 * @example
 * ```jsx
 * import { useStorageUpload } from "@thirdweb-dev/react";
 *
 * export default function Component() {
 *   const { mutateAsync: upload, isLoading } = useStorageUpload();
 *
 *   async function uploadData() {
 *     const filesToUpload = [...];
 *     const uris = await upload({ data: files });
 *     console.log(uris);
 *   }
 *
 *   return (
 *     <button onClick={uploadData}>
 *       Upload
 *     </button>
 *   )
 * }
 * ```
 * @see {@link https://portal.thirdweb.com/react/react.usestorageupload?utm_source=sdk | Documentation}
 */
function useStorageUpload(uploadOptions) {
  const sdk = useSDK();
  return useMutation(async _ref => {
    let {
      data,
      options
    } = _ref;
    invariant(sdk, "sdk must be defined");
    return await sdk.storage.uploadBatch(data, options || uploadOptions);
  });
}

/**
 * Get the configured `ThirdwebStorage` instance
 * @returns The `storageInterface` configured on the `ThirdwebProvider`
 * @see {@link https://portal.thirdweb.com/react/react.usestorage?utm_source=sdk | Documentation}
 */
function useStorage() {
  const sdk = useSDK();
  return sdk?.storage;
}

/**
 * Hook for checking whether the connected wallet is on the correct network specified by the `network` passed to the `<ThirdwebProvider />`.
 *
 * ```javascript
 * import { useNetworkMismatch } from "@thirdweb-dev/react"
 * ```
 *
 * @returns `true` if the chainId of the connected wallet is different from the chainId of the network passed into <ThirdwebProvider />
 *
 * @see {@link https://portal.thirdweb.com/react/react.usenetworkmismatch?utm_source=sdk | Documentation}
 *
 * @example
 * You can check if a users wallet is connected to the correct chain ID as follows:
 * ```javascript
 * import { useNetworkMismatch } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const isMismatched = useNetworkMismatch()
 *
 *   return <div>{isMismatched}</div>
 * }
 * ```
 *
 * From here, you can prompt users to switch their network using the `useNetwork` hook.
 *
 * @public
 */
function useNetworkMismatch() {
  const walletChainId = useChainId();
  const sdkChainId = useSDKChainId();
  if (!sdkChainId) {
    // we don't know yet
    return false;
  }
  if (sdkChainId === -1) {
    // means no network is set in the <ThirdwebProvider />, so we don't care about the network mismatch
    return false;
  }
  if (!walletChainId) {
    // means no wallet is connected yet, so we don't care about the network mismatch
    return false;
  }
  // check if the chainIds are different
  return sdkChainId !== walletChainId;
}

/**
 * @internal
 */
function useReadonlySDK(readonlyRpcUrl, sdkOptions, storageInterface) {
  return useMemo(() => {
    return new ThirdwebSDK$1(readonlyRpcUrl, sdkOptions, storageInterface);
    // storageInterface should be constant!
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [readonlyRpcUrl, sdkOptions]);
}

/**
 *
 * @internal
 */
function useSigner() {
  const context = useContext(ThirdwebConnectedWalletContext);
  invariant(context, "useSigner() hook must be used within a <ThirdwebProvider/>");
  return context.signer;
}

function useSupportedWallet(id) {
  const context = useWalletContext();
  const wallet = context?.wallets.find(_wallet => _wallet.id === id);
  if (!wallet) {
    throw new Error(`Wallet with id "${id}" is not supported`);
  }
  return wallet;
}

/**
 * Get App URI
 *
 * @example
 * ```javascript
 * const { data: contractMetadata, isLoading, error } = useAppURI(contract);
 * ```
 *
 * @param contract - the {@link SmartContract} instance of the contract to get the appURI of
 * @returns a response object that includes the appURI of the contract
 * @twfeature AppURI
 * @beta
 */
function useAppURI(contract) {
  return useQueryWithNetwork(cacheKeys.contract.app.get(contract?.getAddress()), async () => {
    requiredParamInvariant(contract, "Contract is required");
    invariant(contract.app, "Contract does not support app");
    return await contract.app.get();
  }, {
    enabled: !!contract
  });
}

/**
 * Set App URI
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: useSetAppURI,
 *     isLoading,
 *     error,
 *   } = useSetAppURI(contract);
 *
 *   if (error) {
 *     console.error("failed to update appURI", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => useSetAppURI({ uri })}
 *     >
 *       Update App URI
 *     </button>
 *   );
 * };
 * ```
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to update the appURI of a contract
 * @twfeature AppUR
 * @beta
 */
function useSetAppURI(contract) {
  const queryClient = useQueryClient();
  const contractAddress = contract?.getAddress();
  const activeChainId = useSDKChainId();
  return useMutation(params => {
    requiredParamInvariant(contract, "Contract is required");
    invariant(contract.app, "Contract does not support app");
    return contract.app.set(params.uri);
  }, {
    onSettled: () => invalidateContractAndBalances(queryClient, contractAddress, activeChainId)
  });
}

/**
 * Hook that listens to transactions on a given chain for a given address.
 *
 * ```javascript
 * import { useWatchTransactions } from "@thirdweb-dev/react"
 * ```
 *
 * @example
 * ```js
 * const transactions = useWatchTransactions({
 *  address: "0x1234",
 *  network: "ethereum",
 * });
 * ```
 *
 * @returns an array of {@link Transaction} objects
 */
function useWatchTransactions(watchTransactionParams) {
  const {
    address,
    network,
    sdkOptions,
    // default to 1000, max 10k
    limit: paramLimit = 1000
  } = watchTransactionParams;
  // max limit of 10k transactions to let the array grow to, then we'll start dropping the oldest ones
  const limit = Math.min(paramLimit, 10000);
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    if (!address || !network) {
      // cant run yet
      return;
    }
    // since this already returns a function to unsubscribe, we can just return it
    return watchTransactions({
      address,
      network,
      sdkOptions,
      onTransactions: newTransactions => {
        setTransactions(prevTransactions => {
          const mergedTxns = [...newTransactions, ...prevTransactions];
          // only keep the latest transactions
          return mergedTxns.slice(0, limit);
        });
      }
    });
  }, [address, limit, network, sdkOptions]);
  return transactions;
}

export { useUnclaimedNFTs as $, useActiveClaimCondition as A, useClaimerProofs as B, useClaimConditions as C, useClaimIneligibilityReasons as D, useActiveClaimConditionForWallet as E, useSetClaimConditions as F, useResetClaimConditions as G, usePrimarySaleRecipient as H, useUpdatePrimarySaleRecipient as I, useRoyaltySettings as J, useUpdateRoyaltySettings as K, usePlatformFees as L, useUpdatePlatformFees as M, useMetadata as N, useUpdateMetadata as O, useContractType as P, contractType as Q, useCompilerMetadata as R, compilerMetadata as S, ThirdwebThemeContext as T, useContract as U, useContractMetadata as V, useContractMetadataUpdate as W, useContractEvents as X, useContractRead as Y, useContractWrite as Z, __DEV__ as _, ThirdwebProviderCore as a, useBurnToken as a$, useClaimedNFTs as a0, useUnclaimedNFTSupply as a1, useClaimedNFTSupply as a2, useBatchesToReveal as a3, useClaimNFT as a4, useLazyMint as a5, useDelayedRevealLazyMint as a6, useRevealLazyMint as a7, useListing as a8, useDirectListing as a9, useBuyDirectListing as aA, useNFT as aB, useNFTs as aC, useTotalCount as aD, useTotalCirculatingSupply as aE, useOwnedNFTs as aF, useNFTBalance as aG, useMintNFT as aH, useMintNFTSupply as aI, useTransferNFT as aJ, useAirdropNFT as aK, useBurnNFT as aL, useSharedMetadata as aM, useSetSharedMetadata as aN, useAllRoleMembers as aO, useRoleMembers as aP, useIsAddressRole as aQ, useSetAllRoleMembers as aR, useGrantRole as aS, useRevokeRole as aT, useTokenSupply as aU, useTokenBalance as aV, useTokenDecimals as aW, useMintToken as aX, useClaimToken as aY, useTransferToken as aZ, useTransferBatchToken as a_, useEnglishAuction as aa, useListings as ab, useDirectListings as ac, useValidDirectListings as ad, useEnglishAuctions as ae, useValidEnglishAuctions as af, useListingsCount as ag, useDirectListingsCount as ah, useEnglishAuctionsCount as ai, useActiveListings as aj, useWinningBid as ak, useEnglishAuctionWinningBid as al, useAuctionWinner as am, useBidBuffer as an, useMinimumNextBid as ao, useCreateDirectListing as ap, useCreateAuctionListing as aq, useCancelListing as ar, useCancelDirectListing as as, useCancelEnglishAuction as at, useMakeBid as au, useMakeOffer as av, useAcceptDirectListingOffer as aw, useExecuteAuctionSale as ax, useOffers as ay, useBuyNow as az, useConnect as b, useIsAccountDeployed as b0, useAccounts as b1, useCreateAccount as b2, useAccountsForAddress as b3, useAccountSigners as b4, useSetAccountSigners as b5, useAccountAdmins as b6, useAccountAdminsAndSigners as b7, useLogin as b8, useLogout as b9, useSDKChainId as bA, invalidateContractAndBalances as bB, getErcs as bC, getErc1155 as bD, getErc721 as bE, getErc20 as bF, useWatchTransactions as bG, useUser as ba, useAuth as bb, useSwitchAccount as bc, useEditionDrop as bd, useEdition as be, useNFTDrop as bf, useMarketplace as bg, useNFTCollection as bh, usePack as bi, useToken as bj, useTokenDrop as bk, useVote as bl, useSplit as bm, useMultiwrap as bn, useSignatureDrop as bo, useStorageUpload as bp, useStorage as bq, useNetworkMismatch as br, useReadonlySDK as bs, useSigner as bt, useSupportedChains as bu, useSupportedWallet as bv, useAppURI as bw, useSetAppURI as bx, ThirdwebSDKProvider as by, useSDK as bz, useConnectionStatus as c, useCreateWalletInstance as d, useDisconnect as e, useSwitchChain as f, useWallets as g, useWalletConfig as h, useSetConnectionStatus as i, useSetConnectedWallet as j, useNetwork as k, useWalletContext as l, useBalance as m, useConnectedWallet as n, useAddress as o, useChainId as p, useActiveChain as q, resolveMimeType as r, useChain as s, useThirdwebAuthContext as t, useWallet as u, ThirdwebAuthProvider as v, ThirdwebConfigProvider as w, useThirdwebConfigContext as x, ThirdwebConnectedWalletProvider as y, useThirdwebConnectedWalletContext as z };
