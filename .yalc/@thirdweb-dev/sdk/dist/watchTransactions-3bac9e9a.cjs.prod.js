'use strict';

var contractPublisher = require('./contract-publisher-de532850.cjs.prod.js');
var storage = require('@thirdweb-dev/storage');
var IThirdwebContractABI = require('@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json');
var ethers = require('ethers');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var IThirdwebContractABI__default = /*#__PURE__*/_interopDefault(IThirdwebContractABI);

let STORAGE_CACHE = new storage.ThirdwebStorage();
const CONTRACT_CACHE = new Map();
function getContractCacheKey(address, chainId) {
  return `${address}-${chainId}`;
}
function inContractCache(address, chainId) {
  const cacheKey = getContractCacheKey(address, chainId);
  return CONTRACT_CACHE.has(cacheKey);
}
function getCachedContract(address, chainId) {
  if (!inContractCache(address, chainId)) {
    throw new Error(`Contract ${address} was not found in cache`);
  }
  const cacheKey = getContractCacheKey(address, chainId);
  return CONTRACT_CACHE.get(cacheKey);
}
function cacheContract(contract, address, chainId) {
  const cacheKey = getContractCacheKey(address, chainId);
  CONTRACT_CACHE.set(cacheKey, contract);
}
function getCachedStorage(storage) {
  return storage || STORAGE_CACHE;
}

async function getContractFromAbi(params) {
  const [signer, provider] = contractPublisher.getSignerAndProvider(params.network, params.sdkOptions);
  const [resolvedAddress, {
    chainId
  }] = await Promise.all([contractPublisher.resolveAddress(params.address), provider.getNetwork()]);
  if (inContractCache(resolvedAddress, chainId)) {
    return getCachedContract(resolvedAddress, chainId);
  }
  const parsedAbi = typeof params.abi === "string" ? JSON.parse(params.abi) : params.abi;
  const contract = new contractPublisher.SmartContract(signer || provider, resolvedAddress, await contractPublisher.getCompositePluginABI(resolvedAddress, contractPublisher.AbiSchema.parse(parsedAbi), provider, params.sdkOptions, getCachedStorage(params.storage)), getCachedStorage(params.storage), params.sdkOptions, chainId);
  cacheContract(contract, resolvedAddress, chainId);
  return contract;
}

async function resolveContractType(params) {
  try {
    const contract = new ethers.Contract(params.address, IThirdwebContractABI__default["default"], params.provider);
    const remoteContractType = ethers.utils.toUtf8String(await contract.contractType())
    // eslint-disable-next-line no-control-regex
    .replace(/\x00/g, "");
    return contractPublisher.getContractTypeForRemoteName(remoteContractType);
  } catch (err) {
    return "custom";
  }
}

async function getContract(params) {
  const [signer, provider] = contractPublisher.getSignerAndProvider(params.network, params.sdkOptions);
  const [resolvedAddress, {
    chainId
  }] = await Promise.all([contractPublisher.resolveAddress(params.address), provider.getNetwork()]);
  if (inContractCache(resolvedAddress, chainId)) {
    return getCachedContract(resolvedAddress, chainId);
  }
  if (!params.contractTypeOrAbi || params.contractTypeOrAbi === "custom") {
    const contractType = await resolveContractType({
      address: resolvedAddress,
      provider
    });
    if (contractType === "custom") {
      const publisher = new contractPublisher.ContractPublisher(params.network, params.sdkOptions, getCachedStorage(params.storage));
      try {
        const metadata = await publisher.fetchCompilerMetadataFromAddress(resolvedAddress);
        return getContractFromAbi({
          ...params,
          address: resolvedAddress,
          abi: metadata.abi
        });
      } catch {
        throw new Error(`No ABI found for this contract. Try importing it by visiting: https://thirdweb.com/${chainId}/${resolvedAddress}`);
      }
    } else {
      const abi = await contractPublisher.PREBUILT_CONTRACTS_MAP[contractType].getAbi(resolvedAddress, provider, getCachedStorage(params.storage));
      return getContractFromAbi({
        ...params,
        address: resolvedAddress,
        abi
      });
    }
  } else if (typeof params.contractTypeOrAbi === "string" && params.contractTypeOrAbi in contractPublisher.PREBUILT_CONTRACTS_MAP) {
    const contract = await contractPublisher.PREBUILT_CONTRACTS_MAP[params.contractTypeOrAbi].initialize(signer || provider, resolvedAddress, getCachedStorage(params.storage), params.sdkOptions);
    cacheContract(contract, resolvedAddress, chainId);
    return contract;
  } else {
    return getContractFromAbi({
      ...params,
      address: resolvedAddress,
      abi: params.contractTypeOrAbi
    });
  }
}

// weakmap because if we GC the provider somewhere else we don't need to hold onto the promise anymore
const CHAIN_ID_CACHE = new WeakMap();

/**
 * A function that returns the chainId for a given network input + sdk options combination.
 * This function will cache the promise for the chainId so that it can be reused.
 * You can call this function multiple times with the same params and it will only make one request to the provider.
 *
 * @returns the ChainId
 * @internal
 */
async function getChainId(params) {
  const [, provider] = contractPublisher.getSignerAndProvider(params.network, params.sdkOptions);
  let chainIdPromise;
  // if we already have a promise for the chainId, use that
  if (CHAIN_ID_CACHE.has(provider)) {
    chainIdPromise = CHAIN_ID_CACHE.get(provider);
  } else {
    chainIdPromise = provider.getNetwork()
    // we only want the chainId
    .then(network => network.chainId).catch(err => {
      // in the case where the provider fails we should remove the promise from the cache so we can try again
      CHAIN_ID_CACHE.delete(provider);
      // also re-throw the error so downstream can handle it
      throw err;
    });
    CHAIN_ID_CACHE.set(provider, chainIdPromise);
  }

  // finally await the promise (will resolve immediately if already in cache and resolved)
  return await chainIdPromise;
}

/**
 * Get the latest block number from a given network.
 *
 * @example
 * ```javascript
 * const block = await getBlockNumber({
 *  network: "ethereum"
 * });
 * ```
 * @returns the latest block number
 * @public
 */
async function getBlockNumber(params) {
  const [, provider] = contractPublisher.getSignerAndProvider(params.network, params.sdkOptions);
  return provider.getBlockNumber();
}
const BLOCK_PROMISE_CACHE = new Map();
/**
 * Get a specific block from a given network.
 *
 * @example
 * ```javascript
 * const block = await getBlock({
 *  network: "ethereum",
 *  block: 12345678
 * });
 * ```
 *
 * @returns the block for the given block number / block tag
 * @public
 */
async function getBlock(params) {
  // first off get the chainId so we can check if we have something in cache for the blockNumber already
  // this is 1 extra call once per possible provider
  const chainId = await getChainId(params);
  const blockTag = params.block;
  const cacheKey = `${chainId}_${blockTag}`;
  let blockPromise;
  if (BLOCK_PROMISE_CACHE.has(cacheKey)) {
    blockPromise = BLOCK_PROMISE_CACHE.get(cacheKey);
  } else {
    const [, provider] = contractPublisher.getSignerAndProvider(params.network, params.sdkOptions);
    blockPromise = provider.getBlock(blockTag).catch(err => {
      // in the case where the call fails we should remove the promise from the cache so we can try again
      BLOCK_PROMISE_CACHE.delete(cacheKey);
      // also re-throw the error so downstream can handle it
      throw err;
    });
    BLOCK_PROMISE_CACHE.set(cacheKey, blockPromise);
  }

  // finally await the promise (will resolve immediately if already in cache and resolved)
  return await blockPromise;
}
const BLOCK_WITH_TRANSACTIONS_PROMISE_CACHE = new Map();
/**
 * Get a specific block (with the transactions contained in it) from a given network.
 *
 * @example
 * ```javascript
 * const block = await getBlockWithTransactions({
 *  network: "ethereum",
 *  block: 12345678
 * });
 * ```
 *
 * @returns the block for the given block number / block tag
 * @public
 */
async function getBlockWithTransactions(params) {
  // first off get the chainId so we can check if we have something in cache for the blockNumber already
  // this is 1 extra call once per possible provider
  const chainId = await getChainId(params);
  const blockTag = params.block;
  const cacheKey = `${chainId}_${blockTag}`;
  let blockPromise;
  if (BLOCK_PROMISE_CACHE.has(cacheKey)) {
    blockPromise = BLOCK_WITH_TRANSACTIONS_PROMISE_CACHE.get(cacheKey);
  } else {
    const [, provider] = contractPublisher.getSignerAndProvider(params.network, params.sdkOptions);
    blockPromise = provider.getBlockWithTransactions(blockTag).catch(err => {
      // in the case where the call fails we should remove the promise from the cache so we can try again
      BLOCK_WITH_TRANSACTIONS_PROMISE_CACHE.delete(cacheKey);
      // also re-throw the error so downstream can handle it
      throw err;
    });
    BLOCK_WITH_TRANSACTIONS_PROMISE_CACHE.set(cacheKey, blockPromise);
  }

  // finally await the promise (will resolve immediately if already in cache and resolved)
  return await blockPromise;
}

/**
 * Watch for a new block number on a given network.
 *
 * @example
 * ```javascript
 * // this will log out the new block number every time a new block is finalized
 * const unsubscribe = watchBlockNumber({
 *   network: "ethereum",
 *   onBlockNumber: (blockNumber) => {
 *     console.log("new block number", blockNumber);
 *   }
 * });
 * // later on you can call unsubscribe to stop listening for new blocks
 * unsubscribe();
 * ```
 *
 * @returns an unsubscribe function that will stop listening for new blocks when called
 * @public
 */
function watchBlockNumber(params) {
  const [, provider] = contractPublisher.getSignerAndProvider(params.network, params.sdkOptions);
  // start listening
  provider.on("block", params.onBlockNumber);
  // return a function that unsubscribes the listener
  return () => {
    provider.off("block", params.onBlockNumber);
  };
}
/**
 * Watch for new blocks on a given network.
 *
 * @example
 * ```javascript
 * // this will log out the new block every time a new block is finalized
 * const unsubscribe = watchBlock({
 *   network: "ethereum",
 *   onBlock: (block) => {
 *     console.log("new block", block);
 *   }
 * });
 * // later on you can call unsubscribe to stop listening for new blocks
 * unsubscribe();
 * ```
 *
 * @returns an unsubscribe function that will stop listening for new blocks when called
 * @public
 */
function watchBlock(_ref) {
  let {
    onBlock,
    ...sharedBlockParams
  } = _ref;
  async function onBlockNumber(blockNumber) {
    try {
      onBlock(await getBlock({
        block: blockNumber,
        ...sharedBlockParams
      }));
    } catch (err) {
      // skip the block I guess?
    }
  }
  // start listening and return the unsubscribe function from within watchBlockNumber
  return watchBlockNumber({
    ...sharedBlockParams,
    onBlockNumber
  });
}
/**
 * Watch for new blocks on a given network. (Includes parsed transactions)
 *
 * @example
 * ```javascript
 * // this will log out the new block every time a new block is finalized
 * const unsubscribe = watchBlockWithTransactions({
 *   network: "ethereum",
 *   onBlock: (block) => {
 *     console.log("new block", block);
 *     console.log("new transactions", block.transactions)
 *   }
 * });
 * // later on you can call unsubscribe to stop listening for new blocks
 * unsubscribe();
 *
 * @returns an unsubscribe function that will stop listening for new blocks when called
 * @public
 */
function watchBlockWithTransactions(_ref2) {
  let {
    onBlock,
    ...sharedBlockParams
  } = _ref2;
  async function onBlockNumber(blockNumber) {
    try {
      onBlock(await getBlockWithTransactions({
        block: blockNumber,
        ...sharedBlockParams
      }));
    } catch (err) {
      // skip the block I guess?
    }
  }
  // start listening and return the unsubscribe function from within watchBlockNumber
  return watchBlockNumber({
    ...sharedBlockParams,
    onBlockNumber
  });
}

/**
 * Watch for transactions to or from a given address.
 *
 * @example
 * ```javascript
 * // this will log out the new transactions every time a new block is finalized
 * const unsubscribe = watchTransactions({
 *   network: "ethereum",
 *   address: "0x1234",
 *   onTransactions: (transactions) => {
 *     console.log("new transactions", transactions);
 *   }
 * });
 * // later on you can call unsubscribe to stop listening for new transactions
 * unsubscribe();
 * ```
 *
 * @returns an unsubscribe function that will stop listening for new transactions when called
 * @public
 */
function watchTransactions(_ref) {
  let {
    address,
    onTransactions,
    ...sharedBlockParams
  } = _ref;
  // compute the toLowerCase address once so we don't have to do it on every block / transaction
  const lcAddress = address.toLowerCase();
  function onBlock(block) {
    const transactions = block.transactions.filter(tx => {
      // match on from first because it's guaranteed to exist
      if (tx.from.toLowerCase() === lcAddress) {
        // if we have a from address match on that then return true and early exit
        return true;
      }
      // if we have a to address match on that and if it doesn't match then we want to return false anyways :)
      return tx.to?.toLowerCase() === lcAddress;
    });
    // only call the callback if we have transactions to report
    if (transactions.length > 0) {
      onTransactions(transactions);
    }
  }
  return watchBlockWithTransactions({
    ...sharedBlockParams,
    onBlock
  });
}

exports.getBlock = getBlock;
exports.getBlockNumber = getBlockNumber;
exports.getBlockWithTransactions = getBlockWithTransactions;
exports.getChainId = getChainId;
exports.getContract = getContract;
exports.getContractFromAbi = getContractFromAbi;
exports.watchBlock = watchBlock;
exports.watchBlockNumber = watchBlockNumber;
exports.watchBlockWithTransactions = watchBlockWithTransactions;
exports.watchTransactions = watchTransactions;
