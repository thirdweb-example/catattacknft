'use strict';

var contractPublisher = require('./contract-publisher-de532850.cjs.prod.js');
var storage = require('@thirdweb-dev/storage');
var TWRegistryABI = require('@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryLogic.json');
var TWRegistryRouterABI = require('@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryRouter.json');
var ethers = require('ethers');
var ERC20Abi = require('@thirdweb-dev/contracts-js/dist/abis/IERC20.json');
var EventEmitter = require('eventemitter3');
var invariant = require('tiny-invariant');
var chains = require('@thirdweb-dev/chains');
var IThirdwebContractABI = require('@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json');
var generatedAbis = require('@thirdweb-dev/generated-abis');
var fetch = require('cross-fetch');
var ContractPublisherAbi = require('@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json');
var TWFactoryAbi = require('@thirdweb-dev/contracts-js/dist/abis/TWFactory.json');
var TWRegistryABI$1 = require('@thirdweb-dev/contracts-js/dist/abis/TWRegistry.json');

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

var TWRegistryABI__default = /*#__PURE__*/_interopDefault(TWRegistryABI);
var TWRegistryRouterABI__default = /*#__PURE__*/_interopDefault(TWRegistryRouterABI);
var ERC20Abi__default = /*#__PURE__*/_interopDefault(ERC20Abi);
var EventEmitter__default = /*#__PURE__*/_interopDefault(EventEmitter);
var invariant__default = /*#__PURE__*/_interopDefault(invariant);
var IThirdwebContractABI__default = /*#__PURE__*/_interopDefault(IThirdwebContractABI);
var fetch__default = /*#__PURE__*/_interopDefault(fetch);
var ContractPublisherAbi__default = /*#__PURE__*/_interopDefault(ContractPublisherAbi);
var TWFactoryAbi__default = /*#__PURE__*/_interopDefault(TWFactoryAbi);
var TWRegistryABI__default$1 = /*#__PURE__*/_interopDefault(TWRegistryABI$1);

let alreadyChecked = false;
function checkClientIdOrSecretKey(message, clientId, secretKey) {
  if (alreadyChecked) {
    return;
  }
  alreadyChecked = true;
  if (clientId || secretKey) {
    return;
  }
  console.warn(message);
}

/**
 * publicly available wallet for local nodes
 */
const LOCAL_NODE_PKEY = "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

// @deprecated - should not be needed anymore, rely on the publish data instead
const APPROVED_IMPLEMENTATIONS = {
  [contractPublisher.ChainId.Mainnet]: {
    "nft-drop": "0x60fF9952e0084A6DEac44203838cDC91ABeC8736",
    "edition-drop": "0x74af262d0671F378F97a1EDC3d0970Dbe8A1C550",
    "token-drop": "0xE1eE43D23f247b6A9aF81fcE2766E76709482728",
    "signature-drop": "0x6fD690EB509BdE4C50028C5D9C0dE3750C2Fad6A"
  },
  [contractPublisher.ChainId.Polygon]: {
    "nft-drop": "0xB96508050Ba0925256184103560EBADA912Fcc69",
    "edition-drop": "0x74af262d0671F378F97a1EDC3d0970Dbe8A1C550",
    "token-drop": "0x5A8eA4Adad8289746D073947BA06D69A62499aaf",
    "signature-drop": "0xBE2fDc35410E268e41Bec62DBb01AEb43245c7d5"
  },
  [contractPublisher.ChainId.Fantom]: {
    "nft-drop": "0x2A396b2D90BAcEF19cDa973586B2633d22710fC2",
    "edition-drop": "0x06395FCF9AC6ED827f9dD6e776809cEF1Be0d21B",
    "token-drop": "0x0148b28a38efaaC31b6aa0a6D9FEb70FE7C91FFa",
    "signature-drop": "0xe135Ef65C2B2213C3fD56d0Bd6500A2cA147aC10"
  },
  [contractPublisher.ChainId.Avalanche]: {
    "nft-drop": "0x9cF91118C8ee2913F0588e0F10e36B3d63F68bF6",
    "edition-drop": "0x135fC9D26E5eC51260ece1DF4ED424E2f55c7766",
    "token-drop": "0xca0B071899E575BA86495D46c5066971b6f3A901",
    "signature-drop": "0x1d47526C3292B0130ef0afD5F02c1DA052A017B3"
  },
  [contractPublisher.ChainId.Optimism]: {
    "nft-drop": "0xFBd7D24d80ee005671E731a7287DEB6073264dD1",
    "edition-drop": "0xe135Ef65C2B2213C3fD56d0Bd6500A2cA147aC10",
    "token-drop": "0x902Dd246e66d8C3CE652375a723F2a52b43b9AAE",
    "signature-drop": "0x8a4cd3549e548bbEEb38C16E041FFf040a5acabD"
  },
  [contractPublisher.ChainId.Arbitrum]: {
    "nft-drop": "0xC4903c1Ff5367b9ac2c349B63DC2409421AaEE2a",
    "edition-drop": "0xCcddcec1831646Beff2753249f1B9C580327E89F",
    "token-drop": "0x1b5947e1a2d5a29D0df20931DeAB0B87818209B9",
    "signature-drop": "0x2dF9851af45dd41C8584ac55D983C604da985Bc7"
  },
  [contractPublisher.ChainId.BinanceSmartChainMainnet]: {
    "nft-drop": "0x902Dd246e66d8C3CE652375a723F2a52b43b9AAE",
    "edition-drop": "0x2A396b2D90BAcEF19cDa973586B2633d22710fC2",
    "token-drop": "0xe135Ef65C2B2213C3fD56d0Bd6500A2cA147aC10",
    "signature-drop": "0xFBd7D24d80ee005671E731a7287DEB6073264dD1"
  },
  [contractPublisher.ChainId.Goerli]: {
    "nft-drop": "0xD11c97DD5F5546B5bBd630D7D1d7327481B0b92C",
    "edition-drop": "0x5A8eA4Adad8289746D073947BA06D69A62499aaf",
    "token-drop": "0x5680933221B752EB443654a014f88B101F868d50",
    "signature-drop": "0x1b5947e1a2d5a29D0df20931DeAB0B87818209B9"
  },
  [contractPublisher.ChainId.Mumbai]: {
    "nft-drop": "0xC4903c1Ff5367b9ac2c349B63DC2409421AaEE2a",
    "edition-drop": "0xCcddcec1831646Beff2753249f1B9C580327E89F",
    "token-drop": "0x1b5947e1a2d5a29D0df20931DeAB0B87818209B9",
    "signature-drop": "0x2dF9851af45dd41C8584ac55D983C604da985Bc7"
  },
  [contractPublisher.ChainId.FantomTestnet]: {
    "nft-drop": "0x8a4cd3549e548bbEEb38C16E041FFf040a5acabD",
    "edition-drop": "0x902Dd246e66d8C3CE652375a723F2a52b43b9AAE",
    "token-drop": "0xFBd7D24d80ee005671E731a7287DEB6073264dD1",
    "signature-drop": "0x5A8eA4Adad8289746D073947BA06D69A62499aaf"
  },
  [contractPublisher.ChainId.AvalancheFujiTestnet]: {
    "nft-drop": "0xD11c97DD5F5546B5bBd630D7D1d7327481B0b92C",
    "edition-drop": "0xE1eE43D23f247b6A9aF81fcE2766E76709482728",
    "token-drop": "0x6fD690EB509BdE4C50028C5D9C0dE3750C2Fad6A",
    "signature-drop": "0xCcddcec1831646Beff2753249f1B9C580327E89F"
  },
  [contractPublisher.ChainId.OptimismGoerli]: {
    "nft-drop": "0xCcddcec1831646Beff2753249f1B9C580327E89F",
    "edition-drop": "0x6fD690EB509BdE4C50028C5D9C0dE3750C2Fad6A",
    "token-drop": "0xD11c97DD5F5546B5bBd630D7D1d7327481B0b92C",
    "signature-drop": "0x1b5947e1a2d5a29D0df20931DeAB0B87818209B9"
  },
  [contractPublisher.ChainId.ArbitrumGoerli]: {
    "nft-drop": "0x9CfE807a5b124b962064Fa8F7FD823Cc701255b6",
    "edition-drop": "0x9cF91118C8ee2913F0588e0F10e36B3d63F68bF6",
    "token-drop": "0x1d47526C3292B0130ef0afD5F02c1DA052A017B3",
    "signature-drop": "0xE1eE43D23f247b6A9aF81fcE2766E76709482728"
  },
  [contractPublisher.ChainId.BinanceSmartChainTestnet]: {
    "nft-drop": "",
    "edition-drop": "",
    "token-drop": "",
    "signature-drop": "" // TODO
  },

  [contractPublisher.ChainId.Hardhat]: {
    "nft-drop": "",
    "edition-drop": "",
    "token-drop": "",
    "signature-drop": "" // TODO
  },

  [contractPublisher.ChainId.Localhost]: {
    "nft-drop": "",
    "edition-drop": "",
    "token-drop": "",
    "signature-drop": "" // TODO
  }
};

/**
 * @internal
 * @param chainId
 * @param contractType
 */
function getApprovedImplementation(chainId,
// TODO use SupportedChainId once we deploy to all chains
contractType) {
  if (chainId in APPROVED_IMPLEMENTATIONS) {
    const approvedImpls = APPROVED_IMPLEMENTATIONS[chainId];
    if (contractType in approvedImpls) {
      return approvedImpls[contractType];
    }
  }
  return null;
}

/**
 * @public
 */
const SUPPORTED_CHAIN_IDS = [contractPublisher.ChainId.Mainnet, contractPublisher.ChainId.Goerli, contractPublisher.ChainId.Polygon, contractPublisher.ChainId.Mumbai, contractPublisher.ChainId.Fantom, contractPublisher.ChainId.FantomTestnet, contractPublisher.ChainId.Avalanche, contractPublisher.ChainId.AvalancheFujiTestnet, contractPublisher.ChainId.Optimism, contractPublisher.ChainId.OptimismGoerli, contractPublisher.ChainId.Arbitrum, contractPublisher.ChainId.ArbitrumGoerli, contractPublisher.ChainId.BinanceSmartChainMainnet, contractPublisher.ChainId.BinanceSmartChainTestnet, contractPublisher.ChainId.Hardhat, contractPublisher.ChainId.Localhost];

/**
 *
 * @param chainId - chain id
 * @returns the array of trusted forwarders for the given chain id
 * @internal
 */
function getDefaultTrustedForwarders(chainId) {
  const chainEnum = SUPPORTED_CHAIN_IDS.find(c => c === chainId);
  const biconomyForwarder = chainEnum ? contractPublisher.CONTRACT_ADDRESSES[chainEnum].biconomyForwarder : contractPublisher.AddressZero;
  const openzeppelinForwarder = chainEnum ? contractPublisher.CONTRACT_ADDRESSES[chainEnum].openzeppelinForwarder : contractPublisher.AddressZero;
  return [openzeppelinForwarder, biconomyForwarder].filter(a => a !== contractPublisher.AddressZero);
}

/**
 *
 * @param abi
 * @param functionName
 * @returns
 * @internal
 */
function extractFunctionParamsFromAbi(abi, functionName) {
  const parsedAbi = contractPublisher.AbiSchema.parse(abi || []);
  for (const input of parsedAbi) {
    if (input.type === "function" && input.name === functionName) {
      return input.inputs || [];
    }
  }
  return [];
}

/**
 * Return all the detected features names in the abi
 * @param abi - parsed array of abi entries
 * @returns array of all detected features names
 * @internal
 * @deprecated use getAllExtensionNames instead
 */
function getAllDetectedFeatureNames(abi) {
  const features = [];
  contractPublisher.extractFeatures(contractPublisher.detectFeatures(abi), features);
  return features.map(f => f.name);
}

/**
 * Return all the detected extension names in the abi
 * @param abi - parsed array of abi entries
 * @returns array of all detected features names
 * @public
 */
function getAllDetectedExtensionNames(abi) {
  return getAllDetectedFeatureNames(abi);
}

function getFunctionSignature(fnInputs) {
  return "(" + fnInputs.map(i => {
    return i.type === "tuple" ? getFunctionSignature(i.components) : i.type === "tuple[]" ? getFunctionSignature(i.components) + `[]` : i.type;
  }).join(",") + ")";
}
function generatePluginFunctions(pluginAddress, pluginAbi) {
  const pluginInterface = new ethers.utils.Interface(pluginAbi);
  const pluginFunctions = [];
  // TODO - filter out common functions like _msgSender(), contractType(), etc.
  for (const fnFragment of Object.values(pluginInterface.functions)) {
    const fn = pluginInterface.getFunction(pluginInterface.getSighash(fnFragment));
    if (fn.name.includes("_")) {
      continue;
    }
    pluginFunctions.push({
      functionSelector: pluginInterface.getSighash(fn),
      functionSignature: fn.name + getFunctionSignature(fn.inputs),
      pluginAddress: pluginAddress
    });
  }
  return pluginFunctions;
}
function generateExtensionFunctions(extensionAbi) {
  const extensionInterface = new ethers.utils.Interface(extensionAbi);
  const extensionFunctions = [];
  // TODO - filter out common functions like _msgSender(), contractType(), etc.

  for (const fnFragment of Object.values(extensionInterface.functions)) {
    const fn = extensionInterface.getFunction(extensionInterface.getSighash(fnFragment));
    if (fn.name.startsWith("_")) {
      continue;
    }
    extensionFunctions.push({
      functionSelector: extensionInterface.getSighash(fn),
      functionSignature: fn.name + getFunctionSignature(fn.inputs)
    });
  }
  return extensionFunctions;
}

/**
 *
 * Returns txn data for keyless deploys as well as signer deploys.
 * Also provides a list of infra contracts to deploy.
 *
 * @internal
 *
 * @param metadataUri
 * @param storage
 * @param provider
 * @param create2Factory
 */
async function getDeploymentInfo(metadataUri, storage, provider, create2Factory, clientId, secretKey) {
  contractPublisher.caches.deploymentPresets = {};
  const create2FactoryAddress = create2Factory ? create2Factory : await contractPublisher.getCreate2FactoryAddress(provider);
  const customParams = {};
  const finalDeploymentInfo = [];
  const {
    compilerMetadata,
    extendedMetadata
  } = await contractPublisher.fetchAndCacheDeployMetadata(metadataUri, storage);
  const defaultExtensions = extendedMetadata?.defaultExtensions;
  if (extendedMetadata?.routerType === "plugin" && defaultExtensions) {
    invariant__default["default"](clientId || secretKey, "Require Client Id / Secret Key");
    const publishedExtensions = await Promise.all(defaultExtensions.map(e => {
      return contractPublisher.fetchPublishedContractFromPolygon(e.publisherAddress, e.extensionName, e.extensionVersion, storage, clientId, secretKey);
    }));
    const pluginMetadata = (await Promise.all(publishedExtensions.map(async c => {
      return contractPublisher.fetchAndCacheDeployMetadata(c.metadataUri, storage);
    }))).map(fetchedMetadata => fetchedMetadata.compilerMetadata);

    // get deployment info for all plugins
    const pluginDeploymentInfo = await Promise.all(pluginMetadata.map(async metadata => {
      const info = await contractPublisher.computeDeploymentInfo("plugin", provider, storage, create2FactoryAddress, {
        metadata: metadata
      }, clientId, secretKey);
      return info;
    }));

    // create constructor param input for PluginMap
    const mapInput = [];
    pluginMetadata.forEach((metadata, index) => {
      const input = generatePluginFunctions(pluginDeploymentInfo[index].transaction.predictedAddress, metadata.abi);
      mapInput.push(...input);
    });

    // get PluginMap deployment transaction
    const pluginMapTransaction = await contractPublisher.computeDeploymentInfo("plugin", provider, storage, create2FactoryAddress, {
      contractName: "PluginMap",
      constructorParams: {
        _pluginsToAdd: {
          value: mapInput
        }
      }
    }, clientId, secretKey);

    // address of PluginMap is input for MarketplaceV3's constructor
    customParams["_pluginMap"] = {
      value: pluginMapTransaction.transaction.predictedAddress
    };
    finalDeploymentInfo.push(...pluginDeploymentInfo, pluginMapTransaction);
  } else if (extendedMetadata?.routerType === "dynamic" && defaultExtensions) {
    invariant__default["default"](clientId || secretKey, "Require Client Id / Secret Key");
    const publishedExtensions = await Promise.all(defaultExtensions.map(e => {
      return contractPublisher.fetchPublishedContractFromPolygon(e.publisherAddress, e.extensionName, e.extensionVersion, storage, clientId, secretKey);
    }));
    const extensionMetadata = (await Promise.all(publishedExtensions.map(async c => {
      return contractPublisher.fetchAndCacheDeployMetadata(c.metadataUri, storage);
    }))).map(fetchedMetadata => fetchedMetadata.compilerMetadata);

    // get deployment info for all extensions
    const extensionDeploymentInfo = await Promise.all(extensionMetadata.map(async metadata => {
      const info = await contractPublisher.computeDeploymentInfo("extension", provider, storage, create2FactoryAddress, {
        metadata: metadata
      }, clientId, secretKey);
      return info;
    }));

    // create constructor param input for BaseRouter
    const routerInput = [];
    extensionMetadata.forEach((metadata, index) => {
      const extensionFunctions = generateExtensionFunctions(metadata.abi);
      routerInput.push({
        metadata: {
          name: metadata.name,
          metadataURI: "",
          implementation: extensionDeploymentInfo[index].transaction.predictedAddress
        },
        functions: extensionFunctions
      });
    });

    // routerInput as constructor param for BaseRouter
    customParams["_extensions"] = {
      value: routerInput
    };
    finalDeploymentInfo.push(...extensionDeploymentInfo);
  }
  const implementationDeployInfo = await contractPublisher.computeDeploymentInfo("implementation", provider, storage, create2FactoryAddress, {
    metadata: compilerMetadata,
    constructorParams: customParams
  }, clientId, secretKey);

  // get clone factory
  const factoryInfo = await contractPublisher.computeDeploymentInfo("infra", provider, storage, create2FactoryAddress, {
    contractName: "TWCloneFactory"
  }, clientId, secretKey);
  finalDeploymentInfo.push(factoryInfo);
  finalDeploymentInfo.push(...Object.values(contractPublisher.caches.deploymentPresets));
  finalDeploymentInfo.push(implementationDeployInfo);
  return finalDeploymentInfo;
}

/**
 *
 * @internal
 * @param contractName
 * @param chainId
 * @param storage
 */
async function getEncodedConstructorParamsForThirdwebContract(contractName, chainId, storage) {
  let contractVersion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "latest";
  let clientId = arguments.length > 4 ? arguments[4] : undefined;
  let secretKey = arguments.length > 5 ? arguments[5] : undefined;
  let constructorParamMap = arguments.length > 6 ? arguments[6] : undefined;
  const provider = contractPublisher.getChainProvider(chainId, {
    clientId,
    secretKey
  });
  const publishedContract = await contractPublisher.fetchPublishedContractFromPolygon(contractPublisher.THIRDWEB_DEPLOYER, contractName, contractVersion, storage, clientId, secretKey);
  const publishUri = publishedContract.metadataUri;
  const metadata = await contractPublisher.fetchAndCacheDeployMetadata(publishUri, storage);
  const create2Factory = await contractPublisher.getCreate2FactoryAddress(provider);
  invariant__default["default"](create2Factory, "Thirdweb stack not found");
  const {
    extendedMetadata
  } = await contractPublisher.fetchAndCacheDeployMetadata(publishUri, storage);
  let encodedArgs;

  // if pluginMetadata is not empty, then it's a plugin-pattern router contract
  if (extendedMetadata?.routerType === "plugin" || extendedMetadata?.routerType === "dynamic") {
    const deploymentInfo = await getDeploymentInfo(publishUri, storage, provider, create2Factory, clientId, secretKey);
    encodedArgs = deploymentInfo.find(contract => contract.type === "implementation")?.encodedArgs;
  } else {
    encodedArgs = await contractPublisher.encodeConstructorParamsForImplementation(metadata.compilerMetadata, provider, storage, create2Factory, constructorParamMap, clientId, secretKey);
  }
  return encodedArgs;
}

/**
 *
 * @public
 * @param contractName
 * @param chainId
 * @param storage
 */
async function predictThirdwebContractAddress(contractName, chainId, storage) {
  let contractVersion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "latest";
  let clientId = arguments.length > 4 ? arguments[4] : undefined;
  let secretKey = arguments.length > 5 ? arguments[5] : undefined;
  const provider = contractPublisher.getChainProvider(chainId, {
    clientId,
    secretKey
  });
  const publishedContract = await contractPublisher.fetchPublishedContractFromPolygon(contractPublisher.THIRDWEB_DEPLOYER, contractName, contractVersion, storage, clientId, secretKey);
  const publishUri = publishedContract.metadataUri;
  const create2Factory = await contractPublisher.getCreate2FactoryAddress(provider);
  invariant__default["default"](create2Factory, "Thirdweb stack not found");
  const {
    extendedMetadata
  } = await contractPublisher.fetchAndCacheDeployMetadata(publishUri, storage);
  if (extendedMetadata?.routerType === "plugin" || extendedMetadata?.routerType === "dynamic") {
    const deploymentInfo = await getDeploymentInfo(publishUri, storage, provider, create2Factory, clientId, secretKey);
    const implementation = deploymentInfo.find(contract => contract.type === "implementation")?.transaction.predictedAddress;
    invariant__default["default"](implementation, "Error computing address for plugin router");
    return implementation;
  }
  const implementation = await contractPublisher.computeDeploymentInfo("implementation", provider, storage, create2Factory, {
    contractName: contractName
  }, clientId, secretKey);
  return implementation.transaction.predictedAddress;
}

/**
 *
 * @public
 * @param contractName
 * @param chainId
 * @param storage
 * @param clientId
 */
async function getThirdwebContractAddress(contractName, chainId, storage) {
  let contractVersion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "latest";
  let clientId = arguments.length > 4 ? arguments[4] : undefined;
  let secretKey = arguments.length > 5 ? arguments[5] : undefined;
  const provider = contractPublisher.getChainProvider(chainId, {
    clientId: clientId,
    secretKey: secretKey
  });
  const contractAddress = await predictThirdwebContractAddress(contractName, chainId, storage, contractVersion, clientId, secretKey);
  const isDeployed = await contractPublisher.isContractDeployed(contractAddress, provider);
  invariant__default["default"](isDeployed, "Contract not deployed yet");
  return contractAddress;
}

const VerificationStatus = {
  FAILED: "Fail - Unable to verify",
  SUCCESS: "Pass - Verified",
  PENDING: "Pending in queue",
  ALREADY_VERIFIED: "Contract source code already verified",
  AUTOMATICALLY_VERIFIED: "Already Verified"
};

const RequestStatus = {
  OK: "1",
  NOTOK: "0"
};

//
// ==================================
// ======== Core Functions ==========
// ==================================
//

/**
 * @public
 *
 * Verifies a Thirdweb Prebuilt Contract, e.g. Marketplace, DropERC721, etc
 *
 * @example
 * ```javascript
 *
 * const explorerAPIUrl = "" // e.g. https://api.etherscan.io/api
 * const explorerAPIKey = "" // Generate API key on the explorer
 * const chainId = 1 // Change according to the network
 *
 * await sdk.verifier.verifyThirdwebPrebuiltImplementation(
 *   "DropERC721",
 *   chainId,
 *   explorerAPIUrl,
 *   explorerAPIKey,
 *   storage // this could be used from the SDK instance, e.g. sdk.storage
 * );
 * ```
 * @param contractName
 * @param chainId
 * @param explorerAPIUrl
 * @param explorerAPIKey
 * @param storage
 */
async function verifyThirdwebPrebuiltImplementation(contractName, chainId, explorerAPIUrl, explorerAPIKey, storage) {
  let contractVersion = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "latest";
  let clientId = arguments.length > 6 ? arguments[6] : undefined;
  let secretKey = arguments.length > 7 ? arguments[7] : undefined;
  let constructorArgs = arguments.length > 8 ? arguments[8] : undefined;
  const contractAddress = await getThirdwebContractAddress(contractName, chainId, storage, contractVersion, clientId, secretKey);
  const encodedArgs = await getEncodedConstructorParamsForThirdwebContract(contractName, chainId, storage, contractVersion, clientId, secretKey, constructorArgs);
  console.info(`Verifying ${contractName} at address ${contractAddress}`);
  const guid = await verify(contractAddress, chainId, explorerAPIUrl, explorerAPIKey, storage, encodedArgs?.toString().replace("0x", ""));
  return guid;
}

/**
 * @public
 *
 * Verifies any contract
 *
 * @example
 * ```javascript
 *
 * const contractAddress = ""
 * const explorerAPIUrl = "" // e.g. https://api.etherscan.io/api
 * const explorerAPIKey = "" // Generate API key on the explorer
 * const chainId = 1 // Change according to the network
 *
 * await sdk.verifier.verify(
 *   contractAddress,
 *   chainId,
 *   explorerAPIUrl,
 *   explorerAPIKey,
 *   storage // this could be used from the SDK instance, e.g. sdk.storage
 * );
 * ```
 * @param contractAddress
 * @param chainId
 * @param explorerAPIUrl
 * @param explorerAPIKey
 * @param storage
 */
async function verify(contractAddress, chainId, explorerAPIUrl, explorerAPIKey, storage, encodedConstructorArgs) {
  try {
    const provider = contractPublisher.getChainProvider(chainId, {});
    const compilerMetadata = await contractPublisher.fetchContractMetadataFromAddress(contractAddress, provider, storage);
    const compilerVersion = compilerMetadata.metadata.compiler.version;
    const sources = await contractPublisher.fetchSourceFilesFromMetadata(compilerMetadata, storage);
    const sourcesWithUrl = compilerMetadata.metadata.sources;
    const sourcesWithContents = {};
    for (const path of Object.keys(sourcesWithUrl)) {
      const sourceCode = sources.find(source => path === source.filename);
      if (!sourceCode) {
        throw new Error(`Could not find source file for ${path}`);
      }
      sourcesWithContents[path] = {
        content: sourceCode.source
      };
    }
    const compilerInput = {
      language: "Solidity",
      sources: sourcesWithContents,
      settings: {
        optimizer: compilerMetadata.metadata.settings.optimizer,
        evmVersion: compilerMetadata.metadata.settings.evmVersion,
        remappings: compilerMetadata.metadata.settings.remappings,
        outputSelection: {
          "*": {
            "*": ["abi", "evm.bytecode", "evm.deployedBytecode", "evm.methodIdentifiers", "metadata"],
            "": ["ast"]
          }
        }
      }
    };
    const compilationTarget = compilerMetadata.metadata.settings.compilationTarget;
    const targets = Object.keys(compilationTarget);
    const contractPath = targets[0];
    const encodedArgs = encodedConstructorArgs ? encodedConstructorArgs : await fetchConstructorParams(explorerAPIUrl, explorerAPIKey, contractAddress, compilerMetadata.abi, provider, storage);
    const requestBody = {
      apikey: explorerAPIKey,
      module: "contract",
      action: "verifysourcecode",
      contractaddress: contractAddress,
      sourceCode: JSON.stringify(compilerInput),
      codeformat: "solidity-standard-json-input",
      contractname: `${contractPath}:${compilerMetadata.name}`,
      compilerversion: `v${compilerVersion}`,
      constructorArguements: encodedArgs
    };
    const parameters = new URLSearchParams({
      ...requestBody
    });
    const result = await fetch__default["default"](explorerAPIUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: parameters.toString()
    });
    const data = await result.json();
    if (data.status === RequestStatus.OK) {
      return data.result;
    } else {
      throw new Error(`${data.result}`);
    }
  } catch (e) {
    throw new Error(e.toString());
  }
}

//
// ==================================
// ======== Helper Functions ========
// ==================================
//

/**
 * @internal
 *
 * Check status of the contract submitted for verification to the explorer
 * @param explorerAPIUrl
 * @param explorerAPIKey
 * @param guid
 */
async function checkVerificationStatus(explorerAPIUrl, explorerAPIKey, guid) {
  const endpoint = `${explorerAPIUrl}?module=contract&action=checkverifystatus&guid=${guid}&apikey=${explorerAPIKey}"`;
  return new Promise((resolve, reject) => {
    const intervalId = setInterval(async () => {
      try {
        const result = await fetch__default["default"](endpoint, {
          method: "GET"
        });
        const data = await result.json();
        if (data?.result !== VerificationStatus.PENDING) {
          clearInterval(intervalId);
          resolve(data);
        }
      } catch (e) {
        clearInterval(intervalId);
        reject(e);
      }
    }, 3000);
  });
}

/**
 * @internal
 *
 * Check if the contract is already verified on etherscan
 * @param contractAddress
 * @param chainId
 * @param explorerAPIUrl
 * @param explorerAPIKey
 * ClientId get from https://thirdweb.com/create-api-key
 * @param clientId
 */
async function isVerifiedOnEtherscan(contractAddress, chainId, explorerAPIUrl, explorerAPIKey, clientId) {
  const provider = contractPublisher.getChainProvider(chainId, {
    clientId
  });
  invariant__default["default"](await contractPublisher.isContractDeployed(contractAddress, provider), "Contract not deployed yet.");
  const endpoint = `${explorerAPIUrl}?module=contract&action=getsourcecode&address=${contractAddress}&apikey=${explorerAPIKey}"`;
  try {
    const result = await fetch__default["default"](endpoint, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8"
      }
    });
    const data = await result.json();
    const etherscanResult = data.result[0];
    if (etherscanResult.ABI === "Contract source code not verified") {
      return false;
    }
    return true;
  } catch (e) {
    throw new Error(`Error checking verification for contract ${contractAddress}: ${e}`);
  }
}

/**
 * @internal
 *
 * Fetch the deploy transaction from the given contract address and extract the encoded constructor parameters
 * @param explorerAPIUrl
 * @param explorerAPIKey
 * @param contractAddress
 * @param abi
 * @param provider
 * @param storage
 */
async function fetchConstructorParams(explorerAPIUrl, explorerAPIKey, contractAddress, abi, provider, storage) {
  const constructorParamTypes = contractPublisher.extractConstructorParamsFromAbi(abi);
  if (constructorParamTypes.length === 0) {
    return "";
  }
  const requestBody = {
    apiKey: explorerAPIKey,
    module: "account",
    action: "txlist",
    address: contractAddress,
    page: "1",
    sort: "asc",
    offset: "1"
  };
  const parameters = new URLSearchParams({
    ...requestBody
  });
  const result = await fetch__default["default"](explorerAPIUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: parameters.toString()
  });
  const data = await result.json();
  if (data && data.status === RequestStatus.OK && data.result[0] !== undefined) {
    const contract = new ethers.utils.Interface(abi);
    const txDeployBytecode = data.result[0].input;
    let constructorArgs = "";
    if (contract.deploy.inputs.length === 0) {
      return "";
    }

    // first: attempt to get it from Publish
    try {
      const bytecode = await fetchDeployBytecodeFromPublishedContractMetadata(contractAddress, provider, storage);
      if (bytecode) {
        // contract was realeased, use the deployable bytecode method (proper solution)
        const bytecodeHex = bytecode.startsWith("0x") ? bytecode : `0x${bytecode}`;
        constructorArgs = txDeployBytecode.substring(bytecodeHex.length);
      }
    } catch (e) {
      // contracts not published through thirdweb
    }

    // second: attempt to decode it from solc metadata bytecode
    if (!constructorArgs) {
      // couldn't find bytecode from Publish, using regex to locate consturctor args thruogh solc metadata
      // https://docs.soliditylang.org/en/v0.8.17/metadata.html#encoding-of-the-metadata-hash-in-the-bytecode
      // {6} = solc version
      // {4} = 0033, but noticed some contracts have values other than 00 33. (uniswap)
      const matches = [...txDeployBytecode.matchAll(/(64736f6c6343[\w]{6}[\w]{4})(?!.*\1)(.*)$/g)];

      // regex finds the LAST occurence of solc metadata bytes, result always in same position
      if (matches.length > 0) {
        // TODO: we currently don't handle error string embedded in the bytecode, need to strip ascii (upgradeableProxy) in patterns[2]
        // https://etherscan.io/address/0xee6a57ec80ea46401049e92587e52f5ec1c24785#code
        constructorArgs = matches[0][2];
      }
    }

    // third: attempt to guess it from the ABI inputs
    if (!constructorArgs) {
      // TODO: need to guess array / struct properly
      const constructorParamByteLength = constructorParamTypes.length * 64;
      constructorArgs = txDeployBytecode.substring(txDeployBytecode.length - constructorParamByteLength);
    }
    try {
      // sanity check that the constructor params are valid
      // TODO: should we sanity check after each attempt?
      ethers.utils.defaultAbiCoder.decode(contract.deploy.inputs, `0x${constructorArgs}`);
    } catch (e) {
      throw new Error("Verifying this contract requires it to be published. Run `npx thirdweb publish` to publish this contract, then try again.");
    }
    return constructorArgs;
  } else {
    // Could not retrieve constructor parameters, using empty parameters as fallback
    return "";
  }
}

/**
 * @internal
 *
 * Fetches the Publish metadata on the ContractPublisher registry (on polygon) for the given contract address (on any chain)
 * @param contractAddress
 * @param provider
 * @param storage
 * @returns
 */
async function fetchDeployBytecodeFromPublishedContractMetadata(contractAddress, provider, storage) {
  const compilerMetaUri = await contractPublisher.resolveContractUriFromAddress(contractAddress, provider);
  if (compilerMetaUri) {
    const contract = new ethers.Contract(contractPublisher.getContractPublisherAddress(), ContractPublisherAbi__default["default"], contractPublisher.getChainProvider("polygon", {}));
    const publishedMetadataUri = await contract.getPublishedUriFromCompilerUri(compilerMetaUri);
    if (publishedMetadataUri.length === 0) {
      throw Error(`Could not resolve published metadata URI from ${compilerMetaUri}`);
    }
    const pubmeta = await Promise.all(publishedMetadataUri.filter(uri => uri.length > 0).map(uri => contractPublisher.fetchExtendedReleaseMetadata(uri, storage)));
    return pubmeta.length > 0 ? await (await storage.download(pubmeta[0].bytecodeUri)).text() : undefined;
  }
  return undefined;
}

/**
 *
 * @internal
 * @param provider
 * @param storage
 * @param create2Factory
 */
async function computeCloneFactoryAddress(provider, storage, create2Factory, clientId, secretKey) {
  if (!create2Factory) {
    create2Factory = await contractPublisher.getCreate2FactoryAddress(provider);
  }
  return (await contractPublisher.computeDeploymentInfo("infra", provider, storage, create2Factory, {
    contractName: "TWCloneFactory"
  }, clientId, secretKey)).transaction.predictedAddress;
}

/**
 * Deploy Nick's Create2 factory on a given network.
 * Deployment is keyless. Signer is needed to fund the keyless signer address.
 * Ref: https://github.com/Arachnid/deterministic-deployment-proxy
 *
 * @public
 * @param signer
 */
async function deployCreate2Factory(signer, options) {
  invariant__default["default"](signer.provider, "No provider");
  const commonFactoryExists = await contractPublisher.isContractDeployed(contractPublisher.COMMON_FACTORY, signer.provider);
  if (commonFactoryExists) {
    return contractPublisher.COMMON_FACTORY;
  }
  const enforceEip155 = await contractPublisher.isEIP155Enforced(signer.provider);
  const networkId = (await signer.provider.getNetwork()).chainId;
  const chainId = enforceEip155 ? networkId : 0;
  console.debug(`ChainId ${networkId} enforces EIP155: ${enforceEip155}`);
  const deploymentInfo = contractPublisher.CUSTOM_GAS_FOR_CHAIN[networkId] ? contractPublisher.getCreate2FactoryDeploymentInfo(chainId, contractPublisher.CUSTOM_GAS_FOR_CHAIN[networkId].gasPrice) : contractPublisher.getCreate2FactoryDeploymentInfo(chainId);
  const factoryExists = await contractPublisher.isContractDeployed(deploymentInfo.deployment, signer.provider);

  // deploy community factory if not already deployed
  if (!factoryExists) {
    // send balance to the keyless signer
    const valueToSend = contractPublisher.CUSTOM_GAS_FOR_CHAIN[networkId] ? ethers.BigNumber.from(contractPublisher.CUSTOM_GAS_FOR_CHAIN[networkId].gasPrice).mul(100000) : contractPublisher.toWei("0.01");
    if ((await signer.provider.getBalance(deploymentInfo.signer)).lt(valueToSend)) {
      await (await signer.sendTransaction({
        to: deploymentInfo.signer,
        value: valueToSend
      })).wait();
    }

    // deploy
    try {
      console.debug(`deploying CREATE2 factory at: ${deploymentInfo.deployment}`);
      options?.notifier?.("deploying", "create2Factory");
      await (await signer.provider.sendTransaction(deploymentInfo.transaction)).wait();
      options?.notifier?.("deployed", "create2Factory");
    } catch (err) {
      throw new Error(`Couldn't deploy CREATE2 factory: ${JSON.stringify(err)}`);
    }
  }
  return deploymentInfo.deployment;
}

function convertParamValues(constructorParamTypes, constructorParamValues) {
  // check that both arrays are same length
  if (constructorParamTypes.length !== constructorParamValues.length) {
    throw Error(`Passed the wrong number of constructor arguments: ${constructorParamValues.length}, expected ${constructorParamTypes.length}`);
  }
  return constructorParamTypes.map((p, index) => {
    if (p === "tuple" || p.endsWith("[]")) {
      if (typeof constructorParamValues[index] === "string") {
        return JSON.parse(constructorParamValues[index]);
      } else {
        return constructorParamValues[index];
      }
    }
    if (p === "bytes32") {
      invariant__default["default"](ethers.utils.isHexString(constructorParamValues[index]), `Could not parse bytes32 value. Expected valid hex string but got "${constructorParamValues[index]}".`);
      return ethers.utils.hexZeroPad(constructorParamValues[index], 32);
    }
    if (p.startsWith("bytes")) {
      invariant__default["default"](ethers.utils.isHexString(constructorParamValues[index]), `Could not parse bytes value. Expected valid hex string but got "${constructorParamValues[index]}".`);
      return constructorParamValues[index];
    }
    if (p.startsWith("uint") || p.startsWith("int")) {
      return ethers.BigNumber.from(constructorParamValues[index].toString());
    }
    return constructorParamValues[index];
  });
}

/**
 * Direct deploy a contract at a deterministic address, using Create2 method
 * Address depends on the Create2 factory address and salt (if provided).
 *
 * @public
 *
 * @param bytecode
 * @param abi
 * @param signer
 * @param constructorArgs
 * @param saltForCreate2
 */
async function directDeployDeterministic(bytecode, abi, signer, constructorArgs, saltForCreate2) {
  let gasLimit = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 7000000;
  invariant__default["default"](signer.provider, "Provider is required");
  const bytecodePrefixed = bytecode.startsWith("0x") ? bytecode : `0x${bytecode}`;

  // 1. Deploy CREATE2 factory (if not already exists)
  const create2Factory = await deployCreate2Factory(signer);

  // 2. Encode constructor params
  const constructorParams = contractPublisher.extractConstructorParamsFromAbi(abi);
  const constructorParamTypes = constructorParams.map(p => {
    return p.type;
  });
  const paramValues = convertParamValues(constructorParamTypes, constructorArgs);
  const paramTypesForEncoder = constructorParams.map(p => {
    if (p.type === "tuple[]") {
      return ethers.utils.ParamType.from(p);
    } else {
      return p.type;
    }
  });
  const encodedArgs = ethers.utils.defaultAbiCoder.encode(paramTypesForEncoder, paramValues);

  // 3. Construct deployment transaction
  const address = contractPublisher.computeDeploymentAddress(bytecodePrefixed, encodedArgs, create2Factory, saltForCreate2);
  const contractDeployed = await contractPublisher.isContractDeployed(address, signer.provider);
  let initBytecodeWithSalt = "";
  if (!contractDeployed) {
    console.debug(`deploying contract via create2 factory at: ${address}`);
    initBytecodeWithSalt = contractPublisher.getInitBytecodeWithSalt(bytecodePrefixed, encodedArgs, saltForCreate2);
    const tx = {
      to: create2Factory,
      data: initBytecodeWithSalt
    };
    try {
      await signer.estimateGas(tx);
    } catch (e) {
      console.debug("error estimating gas while deploying prebuilt: ", e);
      tx.gasLimit = ethers.BigNumber.from(gasLimit);
    }

    // 4. Deploy
    await (await signer.sendTransaction(tx)).wait();
  } else {
    throw new Error(`Contract already deployed at ${address}`);
  }
  return address;
}

/**
 * Direct deploy a contract at a deterministic address, using Create2 method
 * Address depends on the Create2 factory address and salt (if provided).
 *
 * @public
 *
 * @param publishMetadataUri
 * @param signer
 * @param storage
 * @param constructorArgs
 * @param saltForCreate2
 */
async function directDeployDeterministicWithUri(publishMetadataUri, signer, storage, constructorArgs, saltForCreate2) {
  let gasLimit = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 7000000;
  const {
    compilerMetadata,
    extendedMetadata
  } = await contractPublisher.fetchAndCacheDeployMetadata(publishMetadataUri, storage);
  invariant__default["default"](extendedMetadata?.deployType === "standard", "Must be direct deploy");
  return await directDeployDeterministic(compilerMetadata.bytecode, compilerMetadata.abi, signer, constructorArgs, saltForCreate2, gasLimit);
}

/**
 * Direct deploy a contract at a deterministic address, using Create2 method
 * Address depends on the Create2 factory address and salt (if provided).
 *
 * @public
 *
 * @param contractName
 * @param publisherAddress
 * @param contractVersion
 * @param constructorArgs
 * @param signer
 * @param storage
 * @param clientId
 * @param secretKey
 * @param constructorArgs
 * @param saltForCreate2
 */
async function directDeployDeterministicPublished(contractName, publisherAddress) {
  let contractVersion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "latest";
  let constructorArgs = arguments.length > 3 ? arguments[3] : undefined;
  let signer = arguments.length > 4 ? arguments[4] : undefined;
  let storage = arguments.length > 5 ? arguments[5] : undefined;
  let clientId = arguments.length > 6 ? arguments[6] : undefined;
  let secretKey = arguments.length > 7 ? arguments[7] : undefined;
  let saltForCreate2 = arguments.length > 8 ? arguments[8] : undefined;
  let gasLimit = arguments.length > 9 && arguments[9] !== undefined ? arguments[9] : 7000000;
  const publishMetadataUri = (await contractPublisher.fetchPublishedContractFromPolygon(publisherAddress, contractName, contractVersion, storage, clientId, secretKey)).metadataUri;
  const {
    compilerMetadata,
    extendedMetadata
  } = await contractPublisher.fetchAndCacheDeployMetadata(publishMetadataUri, storage);
  invariant__default["default"](extendedMetadata?.deployType === "standard", "Must be direct deploy");
  return await directDeployDeterministic(compilerMetadata.bytecode, compilerMetadata.abi, signer, constructorArgs, saltForCreate2, gasLimit);
}
async function predictAddressDeterministic(bytecode, abi, provider, constructorArgs, saltForCreate2) {
  const bytecodePrefixed = bytecode.startsWith("0x") ? bytecode : `0x${bytecode}`;

  // 1. Deploy CREATE2 factory (if not already exists)
  const create2Factory = await contractPublisher.getCreate2FactoryAddress(provider);

  // 2. Encode constructor params
  const constructorParams = contractPublisher.extractConstructorParamsFromAbi(abi);
  const constructorParamTypes = constructorParams.map(p => {
    return p.type;
  });
  const paramValues = convertParamValues(constructorParamTypes, constructorArgs);
  const paramTypesForEncoder = constructorParams.map(p => {
    if (p.type === "tuple[]") {
      return ethers.utils.ParamType.from(p);
    } else {
      return p.type;
    }
  });
  const encodedArgs = ethers.utils.defaultAbiCoder.encode(paramTypesForEncoder, paramValues);

  // 3. Construct deployment transaction
  const address = contractPublisher.computeDeploymentAddress(bytecodePrefixed, encodedArgs, create2Factory, saltForCreate2);
  return address;
}
async function predictAddressDeterministicWithUri(publishMetadataUri, provider, storage, constructorArgs, saltForCreate2) {
  const {
    compilerMetadata,
    extendedMetadata
  } = await contractPublisher.fetchAndCacheDeployMetadata(publishMetadataUri, storage);
  invariant__default["default"](extendedMetadata?.deployType === "standard", "Must be direct deploy");
  return await predictAddressDeterministic(compilerMetadata.bytecode, compilerMetadata.abi, provider, constructorArgs, saltForCreate2);
}
async function predictAddressDeterministicPublished(contractName, publisherAddress) {
  let contractVersion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "latest";
  let constructorArgs = arguments.length > 3 ? arguments[3] : undefined;
  let provider = arguments.length > 4 ? arguments[4] : undefined;
  let storage = arguments.length > 5 ? arguments[5] : undefined;
  let clientId = arguments.length > 6 ? arguments[6] : undefined;
  let secretKey = arguments.length > 7 ? arguments[7] : undefined;
  let saltForCreate2 = arguments.length > 8 ? arguments[8] : undefined;
  const publishMetadataUri = (await contractPublisher.fetchPublishedContractFromPolygon(publisherAddress, contractName, contractVersion, storage, clientId, secretKey)).metadataUri;
  const {
    compilerMetadata,
    extendedMetadata
  } = await contractPublisher.fetchAndCacheDeployMetadata(publishMetadataUri, storage);
  invariant__default["default"](extendedMetadata?.deployType === "standard", "Must be direct deploy");
  return await predictAddressDeterministic(compilerMetadata.bytecode, compilerMetadata.abi, provider, constructorArgs, saltForCreate2);
}

/**
 * Deploy a contract at a deterministic address, using Create2 method
 * Address depends on the Create2 factory address.
 *
 * @public
 *
 * @param signer
 * @param bytecode
 * @param encodedArgs
 * @param create2FactoryAddress
 */
async function deployContractDeterministic(signer, transaction, options) {
  let gasLimit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 7000000;
  // Check if the implementation contract is already deployed
  invariant__default["default"](signer.provider, "Provider required");
  const contractDeployed = await contractPublisher.isContractDeployed(transaction.predictedAddress, signer.provider);
  if (!contractDeployed) {
    console.debug(`deploying contract via create2 factory at: ${transaction.predictedAddress}`);
    const tx = {
      to: transaction.to,
      data: transaction.data
    };
    try {
      await signer.estimateGas(tx);
    } catch (e) {
      console.debug("error estimating gas while deploying prebuilt: ", e);
      tx.gasLimit = ethers.BigNumber.from(gasLimit);
    }
    options?.notifier?.("deploying", "preset");
    await (await signer.sendTransaction(tx)).wait();
    options?.notifier?.("deployed", "preset");
  }
}

function estimateGasForDeploy(initCode) {
  let gasLimit = ethers.utils.arrayify(initCode).map(x => x === 0 ? 4 : 16).reduce((sum, x) => sum + x) + 200 * initCode.length / 2 + 6 * Math.ceil(initCode.length / 64) + 32000 + 21000;
  gasLimit = Math.floor(gasLimit * 64 / 63);
  return gasLimit;
}

function createTransactionBatches(transactions) {
  let upperGasLimit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : contractPublisher.GAS_LIMIT_FOR_DEPLOYER;
  transactions = transactions.filter(tx => {
    return tx.data.length > 0;
  });
  if (transactions.length === 0) {
    return [];
  }
  const transactionBatches = [];
  let sum = 0;
  let batch = [];
  transactions.forEach(tx => {
    const gas = estimateGasForDeploy(tx.data);
    if (sum + gas > upperGasLimit) {
      if (batch.length === 0) {
        transactionBatches.push([tx]);
      } else {
        transactionBatches.push(batch);
        sum = gas;
        batch = [tx];
      }
    } else {
      sum += gas;
      batch.push(tx);
    }
  });
  if (batch.length > 0) {
    transactionBatches.push(batch);
  }
  return transactionBatches;
}

async function deployWithThrowawayDeployer(signer, transactions, options) {
  const transactionBatches = createTransactionBatches(transactions);
  if (transactionBatches.length === 0) {
    return;
  }
  options?.notifier?.("deploying", "infra");
  const deployTxns = await Promise.all(transactionBatches.map(txBatch => {
    // Using the deployer contract, send the deploy transactions to common factory with a signer
    const deployer = new ethers.ContractFactory(contractPublisher.DEPLOYER_ABI, contractPublisher.DEPLOYER_BYTECODE).connect(signer).deploy(txBatch);
    return deployer;
  }));
  await Promise.all(deployTxns.map(tx => {
    return tx.deployed();
  }));
  options?.notifier?.("deployed", "infra");
}

/**
 *
 * @param contractType
 * @param metadata
 * @param contractURI
 * @returns
 * @internal
 */
async function getDeployArguments(contractType, metadata, contractURI, signer, storage) {
  const chainId = await signer.getChainId();
  const signerAddress = await signer.getAddress();
  const chainEnum = SUPPORTED_CHAIN_IDS.find(c => c === chainId);
  let trustedForwarders = [];
  if (!chainEnum) {
    const forwarder = await contractPublisher.computeForwarderAddress(signer.provider, storage);
    trustedForwarders = [forwarder];
  } else {
    trustedForwarders = contractType === contractPublisher.PackInitializer.contractType ? [] : getDefaultTrustedForwarders(chainId);
  }

  // add default forwarders to any custom forwarders passed in
  if (metadata.trusted_forwarders && metadata.trusted_forwarders.length > 0) {
    trustedForwarders.push(...metadata.trusted_forwarders);
  }
  switch (contractType) {
    case contractPublisher.NFTDropInitializer.contractType:
    case contractPublisher.NFTCollectionInitializer.contractType:
      const erc721metadata = await contractPublisher.NFTDropInitializer.schema.deploy.parseAsync(metadata);
      return [signerAddress, erc721metadata.name, erc721metadata.symbol, contractURI, trustedForwarders, erc721metadata.primary_sale_recipient, erc721metadata.fee_recipient, erc721metadata.seller_fee_basis_points, erc721metadata.platform_fee_basis_points, erc721metadata.platform_fee_recipient];
    case contractPublisher.SignatureDropInitializer.contractType:
      const signatureDropmetadata = await contractPublisher.SignatureDropInitializer.schema.deploy.parseAsync(metadata);
      return [signerAddress, signatureDropmetadata.name, signatureDropmetadata.symbol, contractURI, trustedForwarders, signatureDropmetadata.primary_sale_recipient, signatureDropmetadata.fee_recipient, signatureDropmetadata.seller_fee_basis_points, signatureDropmetadata.platform_fee_basis_points, signatureDropmetadata.platform_fee_recipient];
    case contractPublisher.MultiwrapInitializer.contractType:
      const multiwrapMetadata = await contractPublisher.MultiwrapInitializer.schema.deploy.parseAsync(metadata);
      return [signerAddress, multiwrapMetadata.name, multiwrapMetadata.symbol, contractURI, trustedForwarders, multiwrapMetadata.fee_recipient, multiwrapMetadata.seller_fee_basis_points];
    case contractPublisher.EditionDropInitializer.contractType:
    case contractPublisher.EditionInitializer.contractType:
      const erc1155metadata = await contractPublisher.EditionDropInitializer.schema.deploy.parseAsync(metadata);
      return [signerAddress, erc1155metadata.name, erc1155metadata.symbol, contractURI, trustedForwarders, erc1155metadata.primary_sale_recipient, erc1155metadata.fee_recipient, erc1155metadata.seller_fee_basis_points, erc1155metadata.platform_fee_basis_points, erc1155metadata.platform_fee_recipient];
    case contractPublisher.TokenDropInitializer.contractType:
    case contractPublisher.TokenInitializer.contractType:
      const erc20metadata = await contractPublisher.TokenInitializer.schema.deploy.parseAsync(metadata);
      return [signerAddress, erc20metadata.name, erc20metadata.symbol, contractURI, trustedForwarders, erc20metadata.primary_sale_recipient, erc20metadata.platform_fee_recipient, erc20metadata.platform_fee_basis_points];
    case contractPublisher.VoteInitializer.contractType:
      const voteMetadata = await contractPublisher.VoteInitializer.schema.deploy.parseAsync(metadata);
      return [voteMetadata.name, contractURI, trustedForwarders, voteMetadata.voting_token_address, voteMetadata.voting_delay_in_blocks, voteMetadata.voting_period_in_blocks, ethers.BigNumber.from(voteMetadata.proposal_token_threshold), voteMetadata.voting_quorum_fraction];
    case contractPublisher.SplitInitializer.contractType:
      const splitsMetadata = await contractPublisher.SplitInitializer.schema.deploy.parseAsync(metadata);
      return [signerAddress, contractURI, trustedForwarders, splitsMetadata.recipients.map(s => s.address), splitsMetadata.recipients.map(s => ethers.BigNumber.from(s.sharesBps))];
    case contractPublisher.MarketplaceInitializer.contractType:
    case contractPublisher.MarketplaceV3Initializer.contractType:
      const marketplaceMetadata = await contractPublisher.MarketplaceInitializer.schema.deploy.parseAsync(metadata);
      return [signerAddress, contractURI, trustedForwarders, marketplaceMetadata.platform_fee_recipient, marketplaceMetadata.platform_fee_basis_points];
    case contractPublisher.PackInitializer.contractType:
      const packsMetadata = await contractPublisher.PackInitializer.schema.deploy.parseAsync(metadata);
      return [signerAddress, packsMetadata.name, packsMetadata.symbol, contractURI, trustedForwarders, packsMetadata.fee_recipient, packsMetadata.seller_fee_basis_points];
    default:
      return [];
  }
}
async function getTrustedForwarders(provider, storage, contractName) {
  const chainId = (await provider.getNetwork()).chainId;
  const chainEnum = SUPPORTED_CHAIN_IDS.find(c => c === chainId);
  const trustedForwarders = contractName && contractName === contractPublisher.PackInitializer.name ? [] : chainEnum ? getDefaultTrustedForwarders(chainId) : [await contractPublisher.computeForwarderAddress(provider, storage)]; // TODO: make this default for all chains (standard + others)

  return trustedForwarders;
}

/**
 *
 * {@link UserWallet} events that you can subscribe to using `sdk.wallet.events`.
 *
 * @public
 */

/**
 * Connect and Interact with a user wallet
 * @example
 * ```javascript
 * const balance = await sdk.wallet.balance();
 * ```
 * @public
 */
class UserWallet {
  events = new EventEmitter__default["default"]();
  constructor(network, options, storage) {
    this.connection = new contractPublisher.RPCConnectionHandler(network, options);
    this.options = options;
    this.events = new EventEmitter__default["default"]();
    this.storage = storage;
  }

  // TODO disconnect()
  // TODO switchChain()
  // TODO tokens()
  // TODO NFTs()

  // TODO this will become the source of truth of the signer and have every contract read from it
  // TODO separate signer and provider logics
  connect(network) {
    this.connection.updateSignerOrProvider(network);
    this.events.emit("signerChanged", this.connection.getSigner());
  }

  /**
   * Transfer native or ERC20 tokens from this wallet to another wallet
   * @example
   * ```javascript
   *  // transfer 0.8 ETH
   * await sdk.wallet.transfer("0x...", 0.8);
   *  // transfer 0.8 tokens of `tokenContractAddress`
   * await sdk.wallet.transfer("0x...", 0.8, tokenContractAddress);
   * ```
   * @param to - the account to send funds to
   * @param amount - the amount in tokens
   * @param currencyAddress - Optional - ERC20 contract address of the token to transfer
   */
  async transfer(to, amount) {
    let currencyAddress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : contractPublisher.NATIVE_TOKEN_ADDRESS;
    const resolvedTo = await contractPublisher.resolveAddress(to);
    const resolvedCurrency = await contractPublisher.resolveAddress(currencyAddress);
    const signer = this.requireWallet();
    const amountInWei = await contractPublisher.normalizePriceValue(this.connection.getProvider(), amount, currencyAddress);
    if (contractPublisher.isNativeToken(resolvedCurrency)) {
      // native token transfer
      const from = await signer.getAddress();
      const tx = await signer.sendTransaction({
        from,
        to: resolvedTo,
        value: amountInWei
      });
      return {
        receipt: await tx.wait()
      };
    } else {
      // ERC20 token transfer
      return {
        receipt: await this.createErc20(resolvedCurrency).sendTransaction("transfer", [resolvedTo, amountInWei])
      };
    }
  }

  /**
   * Fetch the native or ERC20 token balance of this wallet
   * @example
   * ```javascript
   * // native currency balance
   * const balance = await sdk.wallet.balance();
   * // ERC20 token balance
   * const erc20balance = await sdk.wallet.balance(tokenContractAddress);
   *
   * ```
   */
  async balance() {
    let currencyAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : contractPublisher.NATIVE_TOKEN_ADDRESS;
    this.requireWallet();
    const resolvedCurrency = await contractPublisher.resolveAddress(currencyAddress);
    const provider = this.connection.getProvider();
    let balance;
    if (contractPublisher.isNativeToken(resolvedCurrency)) {
      balance = await provider.getBalance(await this.getAddress());
    } else {
      balance = await this.createErc20(resolvedCurrency).read("balanceOf", [await this.getAddress()]);
    }
    return await contractPublisher.fetchCurrencyValue(provider, resolvedCurrency, balance);
  }

  /**
   * Get the currently connected address
   * @example
   * ```javascript
   * const address = await sdk.wallet.getAddress();
   * ```
   */
  async getAddress() {
    return await this.requireWallet().getAddress();
  }

  /**
   * Get the currently connected wallet's chainId
   * @internal
   */
  async getChainId() {
    return await this.requireWallet().getChainId();
  }

  /**
   * Get the number of transactions sent from this address.
   * @param blockTag - Optional - the block tag to read the nonce from
   */
  async getNonce(blockTag) {
    const txCount = await this.connection.getProvider().getTransactionCount(await this.getAddress(), blockTag);
    return txCount;
  }

  /**
   * Checks whether there's a signer connected with the SDK
   * @internal
   */
  isConnected() {
    try {
      this.requireWallet();
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Sign any message with the connected wallet private key
   * @param message - the message to sign
   * @returns the signed message
   *
   * @example
   * ```javascript
   * // This is the message to be signed
   * const message = "Sign this message...";
   *
   * // Now we can sign the message with the connected wallet
   * const signature = await sdk.wallet.sign(message);
   * ```
   */
  async sign(message) {
    const signer = this.requireWallet();
    return await signer.signMessage(message);
  }

  /**
   * Sign a typed data structure (EIP712) with the connected wallet private key
   * @param domain - the domain as EIP712 standard
   * @param types - the structure and data types as defined by the EIP712 standard
   * @param message - the data to sign
   * @returns the payload and its associated signature
   *
   * @example
   * ```javascript
   * // This is the message to be signed
   * // Now we can sign the message with the connected wallet
   * const { payload, signature } = await sdk.wallet.signTypedData(
   *   {
          name: "MyEIP721Domain",
          version: "1",
          chainId: 1,
          verifyingContract: "0x...",
        },
        { MyStruct: [ { name: "to", type: "address" }, { name: "quantity", type: "uint256" } ] },
        { to: "0x...", quantity: 1 },
   * );
   * ```
   */
  async signTypedData(domain, types, message) {
    return await contractPublisher.signTypedDataInternal(this.requireWallet(), domain, types, message);
  }

  /**
   * Recover the signing address from a signed message
   * @param message - the original message that was signed
   * @param signature - the signature to recover the address from
   * @returns the address that signed the message
   *
   * @example
   * ```javascript
   * const message = "Sign this message...";
   * const signature = await sdk.wallet.sign(message);
   *
   * // Now we can recover the signing address
   * const address = sdk.wallet.recoverAddress(message, signature);
   * ```
   */
  recoverAddress(message, signature) {
    const messageHash = ethers.utils.hashMessage(message);
    const messageHashBytes = ethers.utils.arrayify(messageHash);
    return ethers.utils.recoverAddress(messageHashBytes, signature);
  }

  /**
   * Send a raw transaction to the blockchain from the connected wallet
   * @param transactionRequest - raw transaction data to send to the blockchain
   */
  async sendRawTransaction(transactionRequest) {
    const signer = this.requireWallet();
    const hasGasPrice = !!transactionRequest.gasPrice;
    const hasFeeData = !!transactionRequest.maxFeePerGas && !!transactionRequest.maxPriorityFeePerGas;
    const hasGasData = hasGasPrice || hasFeeData;
    if (!hasGasData) {
      // set default gas values
      const defaultGas = await contractPublisher.getDefaultGasOverrides(this.connection.getProvider());
      transactionRequest.maxFeePerGas = defaultGas.maxFeePerGas;
      transactionRequest.maxPriorityFeePerGas = defaultGas.maxPriorityFeePerGas;
      transactionRequest.gasPrice = defaultGas.gasPrice;
    }
    return signer.sendTransaction(transactionRequest);
  }

  /**
   * Execute a raw transaction to the blockchain from the connected wallet and wait for it to be mined
   * @param transactionRequest - raw transaction data to send to the blockchain
   */
  async executeRawTransaction(transactionRequest) {
    const tx = await this.sendRawTransaction(transactionRequest);
    return {
      receipt: await tx.wait()
    };
  }

  /**
   * Request funds from a running local node to the currently connected wallet
   * @param amount the amount in native currency (in ETH) to request
   */
  async requestFunds(amount) {
    const chainId = await this.getChainId();
    if (chainId === contractPublisher.ChainId.Localhost || chainId === contractPublisher.ChainId.Hardhat) {
      const localWallet = new UserWallet(new ethers.Wallet(LOCAL_NODE_PKEY, contractPublisher.getChainProvider(chainId, this.options)), this.options, this.storage);
      return localWallet.transfer(await this.getAddress(), amount);
    } else {
      throw new Error(`Requesting funds is not supported on chain: '${chainId}'.`);
    }
  }

  /** ***********************
   * PRIVATE FUNCTIONS
   * ***********************/

  requireWallet() {
    const signer = this.connection.getSigner();
    invariant__default["default"](signer, "This action requires a connected wallet. Please pass a valid signer to the SDK.");
    return signer;
  }
  createErc20(currencyAddress) {
    return new contractPublisher.ContractWrapper(this.connection.getSignerOrProvider(), currencyAddress, ERC20Abi__default["default"], this.options, this.storage);
  }
}

function createStorage(storage$1, options) {
  if (storage$1) {
    return storage$1;
  } else if (options?.gatewayUrls) {
    return new storage.ThirdwebStorage({
      gatewayUrls: options.gatewayUrls,
      clientId: options.clientId,
      secretKey: options.secretKey
    });
  } else {
    return new storage.ThirdwebStorage({
      clientId: options?.clientId,
      secretKey: options?.secretKey
    });
  }
}

/**
 * @internal
 */
class MultichainRegistry {
  constructor(network, storage) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this.storage = storage;
    this.registryLogic = new contractPublisher.ContractWrapper(network, contractPublisher.getMultichainRegistryAddress(), TWRegistryABI__default["default"], options, storage);
    this.registryRouter = new contractPublisher.ContractWrapper(network, contractPublisher.getMultichainRegistryAddress(), TWRegistryRouterABI__default["default"], options, storage);
  }
  async updateSigner(signer) {
    this.registryLogic.updateSignerOrProvider(signer);
    this.registryRouter.updateSignerOrProvider(signer);
  }
  async getContractMetadataURI(chainId, address) {
    return await this.registryLogic.read("getMetadataUri", [chainId, await contractPublisher.resolveAddress(address)]);
  }
  async getContractMetadata(chainId, address) {
    const uri = await this.getContractMetadataURI(chainId, address);
    if (!uri) {
      throw new Error(`No metadata URI found for contract ${address} on chain ${chainId}`);
    }
    // TODO define the metadata JSON schema
    return await this.storage.downloadJSON(uri);
  }
  async getContractAddresses(walletAddress) {
    return (await this.registryLogic.read("getAll", [await contractPublisher.resolveAddress(walletAddress)])).filter(result => ethers.utils.isAddress(result.deploymentAddress) && result.deploymentAddress.toLowerCase() !== ethers.constants.AddressZero).map(result => ({
      address: result.deploymentAddress,
      chainId: result.chainId.toNumber()
    }));
  }
  addContract = /* @__PURE__ */contractPublisher.buildTransactionFunction(async contract => {
    return await this.addContracts.prepare([contract]);
  });
  addContracts = /* @__PURE__ */contractPublisher.buildTransactionFunction(async contracts => {
    const deployerAddress = await this.registryRouter.getSignerAddress();
    const encoded = [];
    const contractEncoder = new contractPublisher.ContractEncoder(this.registryLogic);
    contracts.forEach(contact => {
      encoded.push(contractEncoder.encode("add", [deployerAddress, contact.address, contact.chainId, contact.metadataURI || ""]));
    });
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.registryRouter,
      method: "multicall",
      args: [encoded]
    });
  });
  removeContract = /* @__PURE__ */contractPublisher.buildTransactionFunction(async contract => {
    return await this.removeContracts.prepare([contract]);
  });
  removeContracts = /* @__PURE__ */contractPublisher.buildTransactionFunction(async contracts => {
    const deployerAddress = await this.registryRouter.getSignerAddress();
    const contractEncoder = new contractPublisher.ContractEncoder(this.registryLogic);
    const encoded = await Promise.all(contracts.map(async contract => contractEncoder.encode("remove", [deployerAddress, await contractPublisher.resolveAddress(contract.address), contract.chainId])));
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.registryRouter,
      method: "multicall",
      args: [encoded]
    });
  });
}

/**
 * Handles verification of new contracts on any EVM
 * @public
 */
class ContractVerifier extends contractPublisher.RPCConnectionHandler {
  constructor(network, options, storage) {
    super(network, options);
    this.storage = storage;
  }
  updateSignerOrProvider(network) {
    super.updateSignerOrProvider(network);
  }

  /**
   * Verifies a Thirdweb contract
   *
   * @example
   * ```javascript
   *
   * // Note: If verifying on a network different from the SDK instance's network,
   * //       update the verifier's chain/network as below:
   * //
   * //       sdk.verifier.updateSignerOrProvider(chainId);
   *
   * const explorerAPIUrl = "" // e.g. https://api.etherscan.io/api
   * const explorerAPIKey = "" // Generate API key on the explorer
   *
   * await sdk.verifier.verifyThirdwebContract(
   *   "DropERC721",
   *   explorerAPIUrl,
   *   explorerAPIKey,
   * );
   * ```
   * @param contractName
   * @param explorerAPIUrl
   * @param explorerAPIKey
   */
  async verifyThirdwebContract(contractName, explorerAPIUrl, explorerAPIKey) {
    let contractVersion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "latest";
    let constructorArgs = arguments.length > 4 ? arguments[4] : undefined;
    const chainId = (await this.getProvider().getNetwork()).chainId;
    const guid = await verifyThirdwebPrebuiltImplementation(contractName, chainId, explorerAPIUrl, explorerAPIKey, this.storage, contractVersion, this.options.clientId, this.options.secretKey, constructorArgs);
    console.info("Checking verification status...");
    const verificationStatus = await checkVerificationStatus(explorerAPIUrl, explorerAPIKey, guid);
    console.info(verificationStatus);
  }

  /**
   * Verifies any contract
   *
   * @example
   * ```javascript
   *
   * // Note: If verifying on a network different from the SDK instance's network,
   * //       update the verifier's chain/network as below:
   * //
   * //       sdk.verifier.updateSignerOrProvider(chainId);
   *
   * const contractAddress = ""
   * const explorerAPIUrl = "" // e.g. https://api.etherscan.io/api
   * const explorerAPIKey = "" // Generate API key on the explorer
   *
   * await sdk.verifier.verifyContract(
   *   contractAddress,
   *   explorerAPIUrl,
   *   explorerAPIKey,
   * );
   * ```
   * @param contractAddress
   * @param explorerAPIUrl
   * @param explorerAPIKey
   */
  async verifyContract(contractAddress, explorerAPIUrl, explorerAPIKey, constructorArgs) {
    const chainId = (await this.getProvider().getNetwork()).chainId;
    let encodedArgs;
    if (constructorArgs) {
      const paramTypes = Object.values(constructorArgs).map(arg => {
        invariant__default["default"](arg.type, "Param type is required");
        return arg.type;
      });
      const paramValues = Object.values(constructorArgs).map(arg => {
        return arg.value;
      });
      encodedArgs = ethers.utils.defaultAbiCoder.encode(paramTypes, paramValues);
    }
    const guid = await verify(contractAddress, chainId, explorerAPIUrl, explorerAPIKey, this.storage, encodedArgs);
    console.info("Checking verification status...");
    const verificationStatus = await checkVerificationStatus(explorerAPIUrl, explorerAPIKey, guid);
    console.info(verificationStatus);
  }
}

/**
 * @internal
 */
class ContractFactory extends contractPublisher.ContractWrapper {
  // Map from contract type to version to deploy specific versions by default
  DEFAULT_VERSION_MAP = {
    [contractPublisher.NFTDropInitializer.contractType]: 3,
    [contractPublisher.NFTCollectionInitializer.contractType]: 1,
    [contractPublisher.SignatureDropInitializer.contractType]: 4,
    [contractPublisher.MultiwrapInitializer.contractType]: 1,
    [contractPublisher.EditionDropInitializer.contractType]: 2,
    [contractPublisher.EditionInitializer.contractType]: 1,
    [contractPublisher.TokenDropInitializer.contractType]: 2,
    [contractPublisher.TokenInitializer.contractType]: 1,
    [contractPublisher.VoteInitializer.contractType]: 1,
    [contractPublisher.SplitInitializer.contractType]: 1,
    [contractPublisher.MarketplaceInitializer.contractType]: 2,
    [contractPublisher.MarketplaceV3Initializer.contractType]: 1,
    [contractPublisher.PackInitializer.contractType]: 2
  };
  constructor(factoryAddr, network, storage, options) {
    super(network, factoryAddr, TWFactoryAbi__default["default"], options, storage);
    this.storage = storage;
  }
  deploy = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (contractType, contractMetadata, eventEmitter, version, options, onExecute) => {
    const contract = contractPublisher.PREBUILT_CONTRACTS_MAP[contractType];
    const metadata = await contract.schema.deploy.parseAsync(contractMetadata);

    // TODO: is there any special pre-processing we need to do before uploading?
    const contractURI = await this.storage.upload(metadata);
    const implementationAddress = (await this.getImplementation(contract, version)) || undefined;
    if (!implementationAddress || implementationAddress === ethers.constants.AddressZero) {
      throw new Error(`No implementation found for ${contractType}`);
    }
    const ABI = await contract.getAbi(implementationAddress, this.getProvider(), this.storage);
    const signer = this.getSigner();
    invariant__default["default"](signer, "A signer is required to deploy contracts");
    const args = await getDeployArguments(contractType, metadata, contractURI, signer, this.storage);
    const encodedFunc = ethers.Contract.getInterface(ABI).encodeFunctionData("initialize", args);
    const blockNumber = await this.getProvider().getBlockNumber();
    const salt = options?.saltForProxyDeploy ? ethers.utils.id(options.saltForProxyDeploy) : ethers.utils.formatBytes32String(blockNumber.toString());
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this,
      method: "deployProxyByImplementation",
      args: [implementationAddress, encodedFunc, salt],
      parse: receipt => {
        if (onExecute) {
          onExecute();
        }
        const events = this.parseLogs("ProxyDeployed", receipt.logs);
        if (events.length < 1) {
          throw new Error("No ProxyDeployed event found");
        }
        const contractAddress = events[0].args.proxy;
        eventEmitter.emit("contractDeployed", {
          status: "completed",
          contractAddress,
          transactionHash: receipt.transactionHash
        });
        return contractAddress;
      }
    });
  });

  // TODO once IContractFactory is implemented, this can be probably be moved to its own class
  deployProxyByImplementation = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (implementationAddress, implementationAbi, initializerFunction, initializerArgs, eventEmitter, saltForProxyDeploy, onExecute) => {
    const encodedFunc = ethers.Contract.getInterface(implementationAbi).encodeFunctionData(initializerFunction, initializerArgs);
    const blockNumber = await this.getProvider().getBlockNumber();
    const salt = saltForProxyDeploy ? ethers.utils.id(saltForProxyDeploy) : ethers.utils.formatBytes32String(blockNumber.toString());
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this,
      method: "deployProxyByImplementation",
      args: [implementationAddress, encodedFunc, salt],
      parse: receipt => {
        if (onExecute) {
          onExecute();
        }
        const events = this.parseLogs("ProxyDeployed", receipt.logs);
        if (events.length < 1) {
          throw new Error("No ProxyDeployed event found");
        }
        const contractAddress = events[0].args.proxy;
        eventEmitter.emit("contractDeployed", {
          status: "completed",
          contractAddress,
          transactionHash: receipt.transactionHash
        });
        return contractAddress;
      }
    });
  });

  /**
   *
   * @param contractType
   * @param metadata
   * @param contractURI
   * @returns
   * @internal
   */
  async getDeployArguments(contractType, metadata, contractURI) {
    let trustedForwarders = contractType === contractPublisher.PackInitializer.contractType ? [] : await this.getDefaultTrustedForwarders();
    // override default forwarders if custom ones are passed in
    if (metadata.trusted_forwarders && metadata.trusted_forwarders.length > 0) {
      trustedForwarders = metadata.trusted_forwarders;
    }
    switch (contractType) {
      case contractPublisher.NFTDropInitializer.contractType:
      case contractPublisher.NFTCollectionInitializer.contractType:
        const erc721metadata = await contractPublisher.NFTDropInitializer.schema.deploy.parseAsync(metadata);
        return [await this.getSignerAddress(), erc721metadata.name, erc721metadata.symbol, contractURI, trustedForwarders, erc721metadata.primary_sale_recipient, erc721metadata.fee_recipient, erc721metadata.seller_fee_basis_points, erc721metadata.platform_fee_basis_points, erc721metadata.platform_fee_recipient];
      case contractPublisher.SignatureDropInitializer.contractType:
        const signatureDropmetadata = await contractPublisher.SignatureDropInitializer.schema.deploy.parseAsync(metadata);
        return [await this.getSignerAddress(), signatureDropmetadata.name, signatureDropmetadata.symbol, contractURI, trustedForwarders, signatureDropmetadata.primary_sale_recipient, signatureDropmetadata.fee_recipient, signatureDropmetadata.seller_fee_basis_points, signatureDropmetadata.platform_fee_basis_points, signatureDropmetadata.platform_fee_recipient];
      case contractPublisher.MultiwrapInitializer.contractType:
        const multiwrapMetadata = await contractPublisher.MultiwrapInitializer.schema.deploy.parseAsync(metadata);
        return [await this.getSignerAddress(), multiwrapMetadata.name, multiwrapMetadata.symbol, contractURI, trustedForwarders, multiwrapMetadata.fee_recipient, multiwrapMetadata.seller_fee_basis_points];
      case contractPublisher.EditionDropInitializer.contractType:
      case contractPublisher.EditionInitializer.contractType:
        const erc1155metadata = await contractPublisher.EditionDropInitializer.schema.deploy.parseAsync(metadata);
        return [await this.getSignerAddress(), erc1155metadata.name, erc1155metadata.symbol, contractURI, trustedForwarders, erc1155metadata.primary_sale_recipient, erc1155metadata.fee_recipient, erc1155metadata.seller_fee_basis_points, erc1155metadata.platform_fee_basis_points, erc1155metadata.platform_fee_recipient];
      case contractPublisher.TokenDropInitializer.contractType:
      case contractPublisher.TokenInitializer.contractType:
        const erc20metadata = await contractPublisher.TokenInitializer.schema.deploy.parseAsync(metadata);
        return [await this.getSignerAddress(), erc20metadata.name, erc20metadata.symbol, contractURI, trustedForwarders, erc20metadata.primary_sale_recipient, erc20metadata.platform_fee_recipient, erc20metadata.platform_fee_basis_points];
      case contractPublisher.VoteInitializer.contractType:
        const voteMetadata = await contractPublisher.VoteInitializer.schema.deploy.parseAsync(metadata);
        return [voteMetadata.name, contractURI, trustedForwarders, voteMetadata.voting_token_address, voteMetadata.voting_delay_in_blocks, voteMetadata.voting_period_in_blocks, ethers.BigNumber.from(voteMetadata.proposal_token_threshold), voteMetadata.voting_quorum_fraction];
      case contractPublisher.SplitInitializer.contractType:
        const splitsMetadata = await contractPublisher.SplitInitializer.schema.deploy.parseAsync(metadata);
        return [await this.getSignerAddress(), contractURI, trustedForwarders, splitsMetadata.recipients.map(s => s.address), splitsMetadata.recipients.map(s => ethers.BigNumber.from(s.sharesBps))];
      case contractPublisher.MarketplaceInitializer.contractType:
        const marketplaceMetadata = await contractPublisher.MarketplaceInitializer.schema.deploy.parseAsync(metadata);
        return [await this.getSignerAddress(), contractURI, trustedForwarders, marketplaceMetadata.platform_fee_recipient, marketplaceMetadata.platform_fee_basis_points];
      case contractPublisher.MarketplaceV3Initializer.contractType:
        const marketplaceV3Metadata = await contractPublisher.MarketplaceV3Initializer.schema.deploy.parseAsync(metadata);
        return [await this.getSignerAddress(), contractURI, trustedForwarders, marketplaceV3Metadata.platform_fee_recipient, marketplaceV3Metadata.platform_fee_basis_points];
      case contractPublisher.PackInitializer.contractType:
        const packsMetadata = await contractPublisher.PackInitializer.schema.deploy.parseAsync(metadata);
        return [await this.getSignerAddress(), packsMetadata.name, packsMetadata.symbol, contractURI, trustedForwarders, packsMetadata.fee_recipient, packsMetadata.seller_fee_basis_points];
      default:
        return [];
    }
  }
  async getDefaultTrustedForwarders() {
    const chainId = await this.getChainID();
    return getDefaultTrustedForwarders(chainId);
  }
  async getImplementation(contract, version) {
    const encodedType = ethers.utils.formatBytes32String(contract.name);
    const chainId = await this.getChainID();
    const approvedImplementation = getApprovedImplementation(chainId, contract.contractType);
    // return approved implementation if it exists and we're not overriding the version
    if (approvedImplementation && approvedImplementation.length > 0 && version === undefined) {
      return approvedImplementation;
    }
    return this.read("getImplementation", [encodedType, version !== undefined ? version : this.DEFAULT_VERSION_MAP[contract.contractType]]);
  }
  async getLatestVersion(contractType) {
    const name = contractPublisher.getContractName(contractType);
    if (!name) {
      throw new Error(`Invalid contract type ${contractType}`);
    }
    const encodedType = ethers.utils.formatBytes32String(name);
    return this.read("currentVersion", [encodedType]);
  }
}

/**
 * @internal
 */
class ContractRegistry extends contractPublisher.ContractWrapper {
  constructor(registryAddress, network, storage, options) {
    super(network, registryAddress, TWRegistryABI__default$1["default"], options, storage);
  }
  async getContractAddresses(walletAddress) {
    // TODO @fixme the filter here is necessary because for some reason getAll returns a 0x0 address for the first entry
    return (await this.read("getAll", [await contractPublisher.resolveAddress(walletAddress)])).filter(adr => ethers.utils.isAddress(adr) && adr.toLowerCase() !== ethers.constants.AddressZero);
  }
  addContract = /* @__PURE__ */contractPublisher.buildTransactionFunction(async contractAddress => {
    return await this.addContracts.prepare([contractAddress]);
  });
  addContracts = /* @__PURE__ */contractPublisher.buildTransactionFunction(async contractAddresses => {
    const deployerAddress = await this.getSignerAddress();
    const contractEncoder = new contractPublisher.ContractEncoder(this);
    const encoded = await Promise.all(contractAddresses.map(async address => contractEncoder.encode("add", [deployerAddress, await contractPublisher.resolveAddress(address)])));
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this,
      method: "multicall",
      args: [encoded]
    });
  });
  removeContract = /* @__PURE__ */contractPublisher.buildTransactionFunction(async contractAddress => {
    return await this.removeContracts.prepare([contractAddress]);
  });
  removeContracts = /* @__PURE__ */contractPublisher.buildTransactionFunction(async contractAddresses => {
    const deployerAddress = await this.getSignerAddress();
    const contractEncoder = new contractPublisher.ContractEncoder(this);
    const encoded = await Promise.all(contractAddresses.map(async address => contractEncoder.encode("remove", [deployerAddress, await contractPublisher.resolveAddress(address)])));
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this,
      method: "multicall",
      args: [encoded]
    });
  });
}

const LoyaltyCardContractInput = /* @__PURE__ */contractPublisher.CommonContractSchema.merge(contractPublisher.CommonRoyaltySchema).merge(contractPublisher.CommonSymbolSchema);
const LoyaltyCardContractDeploy = /* @__PURE__ */LoyaltyCardContractInput.merge(contractPublisher.CommonPlatformFeeSchema).merge(contractPublisher.CommonPrimarySaleSchema).merge(contractPublisher.CommonTrustedForwarderSchema);

const AirdropContractInput = /* @__PURE__ */contractPublisher.CommonContractSchema.merge(contractPublisher.CommonSymbolSchema);
const AirdropContractDeploy = /* @__PURE__ */AirdropContractInput.merge(contractPublisher.CommonTrustedForwarderSchema);

/**
 * The main entry point for the thirdweb SDK
 * @public
 */
class ThirdwebSDK extends contractPublisher.RPCConnectionHandler {
  /**
   * Get an instance of the thirdweb SDK based on an AbstractWallet
   *
   * @example
   * ```javascript
   * import { ThirdwebSDK } from "@thirdweb-dev/sdk"
   *
   * const wallet = new AbstractWalletImplementation();
   * const sdk = await ThirdwebSDK.fromWallet(wallet, "mainnet");
   * ```
   *
   * @param wallet - the implementation of the AbstractWallet class to use for signing
   * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
   * @param options - the SDK options to use
   * @param storage - optional storage implementation to use
   * @returns an instance of the SDK
   *
   * @beta
   */
  static async fromWallet(wallet, network) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let storage = arguments.length > 3 ? arguments[3] : undefined;
    const signer = await wallet.getSigner();
    return ThirdwebSDK.fromSigner(signer, network, options, storage);
  }

  /**
   * Get an instance of the thirdweb SDK based on an existing ethers signer
   *
   * @example
   * ```javascript
   * // get a signer from somewhere (createRandom is being used purely for example purposes)
   * const signer = Wallet.createRandom();
   *
   * // get an instance of the SDK with the signer already setup
   * const sdk = ThirdwebSDK.fromSigner(signer, "mainnet");
   * ```
   *
   * @param signer - a ethers Signer to be used for transactions
   * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
   * @param options - the SDK options to use
   * @param storage - optional storage implementation to use
   * @returns an instance of the SDK
   *
   * @beta
   */
  static fromSigner(signer, network) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let storage = arguments.length > 3 ? arguments[3] : undefined;
    let signerWithProvider = signer;
    if (network) {
      try {
        const provider = contractPublisher.getChainProvider(network, options);
        signerWithProvider = signer.connect(provider);
      } catch {
        // We have to catch here because browser wallets throw when trying to override provider
      }
    }
    const sdk = new ThirdwebSDK(network || signerWithProvider, network ? addChainToSupportedChains(network, options) : options, storage);
    sdk.updateSignerOrProvider(signerWithProvider);
    return sdk;
  }

  /**
   * Get an instance of the thirdweb SDK based on a private key.
   *
   * @remarks
   * This should only be used for backend services or scripts, with the private key stored in a secure way.
   * **NEVER** expose your private key to the public in any way.
   *
   * @example
   * ```javascript
   * const sdk = ThirdwebSDK.fromPrivateKey("SecretPrivateKey", "mainnet");
   * ```
   *
   * @param privateKey - the private key - **DO NOT EXPOSE THIS TO THE PUBLIC**
   * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
   * @param options - the SDK options to use
   * @param storage - optional storage implementation to use
   * @returns an instance of the SDK
   *
   * @public
   */
  static fromPrivateKey(privateKey, network) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    let storage = arguments.length > 3 ? arguments[3] : undefined;
    const provider = contractPublisher.getChainProvider(network, options);
    const signer = new ethers.Wallet(privateKey, provider);
    return new ThirdwebSDK(signer, addChainToSupportedChains(network, options), storage);
  }

  /**
   * @internal
   * the cache of contracts that we have already seen
   */
  contractCache = new Map();
  /**
   * @internal
   * should never be accessed directly, use {@link ThirdwebSDK.getPublisher} instead
   */

  /**
   * Internal handler for uploading and downloading files
   */

  /**
   * New contract deployer
   */

  /**
   * Contract verifier
   */

  /**
   * The registry of deployed contracts
   */

  /**
   * Interact with the connected wallet
   */

  /**
   * Upload and download files from IPFS or from your own storage service
   */

  constructor(network) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let storage = arguments.length > 2 ? arguments[2] : undefined;
    const apiKeyType = typeof window !== "undefined" ? "clientId" : "secretKey";
    let warnMessage = `No API key. Please provide a ${apiKeyType}. It is required to access thirdweb's services. You can create a key at https://thirdweb.com/create-api-key`;
    if (typeof window === "undefined" && !options.secretKey && options.clientId) {
      warnMessage = `Please provide a secret key instead of the clientId. Create a new API Key at https://thirdweb.com/create-api-key`;
    }
    checkClientIdOrSecretKey(warnMessage, options.clientId, options.secretKey);
    options = addChainToSupportedChains(network, options);
    super(network, options);
    contractPublisher.setSupportedChains(options?.supportedChains);
    const configuredStorage = createStorage(storage, options);
    this.storage = configuredStorage;
    this.storageHandler = configuredStorage;
    this.wallet = new UserWallet(network, options, configuredStorage);
    this.deployer = new ContractDeployer(network, options, configuredStorage);
    this.verifier = new ContractVerifier(network, options, configuredStorage);
    this.multiChainRegistry = new MultichainRegistry(network, this.storageHandler, this.options);
    this._publisher = new contractPublisher.ContractPublisher(network, this.options, this.storageHandler);
  }
  get auth() {
    throw new Error(`The sdk.auth namespace has been moved to the @thirdweb-dev/auth package and is no longer available after @thirdweb-dev/sdk >= 3.7.0.
      Please visit https://portal.thirdweb.com/auth for instructions on how to switch to using the new auth package (@thirdweb-dev/auth@3.0.0).

      If you still want to use the old @thirdweb-dev/auth@2.0.0 package, you can downgrade the SDK to version 3.6.0.`);
  }

  /**
   * Get an instance of a NFT Drop contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const dropContract = await sdk.getDropContract("0x1234...");
   * + const dropContract = await sdk.getContract("0x1234...", "nft-drop");
   * ```
   */
  async getNFTDrop(contractAddress) {
    return await this.getContract(contractAddress, "nft-drop");
  }

  /**
   * Get an instance of a Signature Drop contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const signatureDrop = await sdk.getSignatureDrop("0x1234...");
   * + const signatureDrop = await sdk.getContract("0x1234...", "signature-drop");
   * ```
   */
  async getSignatureDrop(contractAddress) {
    return await this.getContract(contractAddress, "signature-drop");
  }

  /**
   * Get an instance of a NFT Collection Drop contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const signatureDrop = await sdk.getNFTCollection("0x1234...");
   * + const signatureDrop = await sdk.getContract("0x1234...", "nft-collection");
   * ```
   */
  async getNFTCollection(contractAddress) {
    return await this.getContract(contractAddress, "nft-collection");
  }

  /**
   * Get an instance of a Edition Drop contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const editionDrop = await sdk.getEditionDrop("0x1234...");
   * + const editionDrop = await sdk.getContract("0x1234...", "edition-drop");
   * ```
   */
  async getEditionDrop(contractAddress) {
    return await this.getContract(contractAddress, "edition-drop");
  }

  /**
   * Get an instance of a Edition contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const edition = await sdk.getEdition("0x1234...");
   * + const edition = await sdk.getContract("0x1234...", "edition");
   * ```
   */
  async getEdition(contractAddress) {
    return await this.getContract(contractAddress, "edition");
  }

  /**
   * Get an instance of a Token Drop contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const tokenDrop = await sdk.getTokenDrop("0x1234...");
   * + const tokenDrop = await sdk.getContract("0x1234...", "token-drop");
   * ```
   */
  async getTokenDrop(contractAddress) {
    return await this.getContract(contractAddress, "token-drop");
  }

  /**
   * Get an instance of a Token contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const token = await sdk.getToken("0x1234...");
   * + const token = await sdk.getContract("0x1234...", "token");
   * ```
   */
  async getToken(contractAddress) {
    return await this.getContract(contractAddress, "token");
  }

  /**
   * Get an instance of a Vote contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const vote = await sdk.getVote("0x1234...");
   * + const vote = await sdk.getContract("0x1234...", "vote");
   * ```
   */
  async getVote(contractAddress) {
    return await this.getContract(contractAddress, "vote");
  }

  /**
   * Get an instance of a Split contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const split = await sdk.getSplit("0x1234...");
   * + const split = await sdk.getContract("0x1234...", "split");
   * ```
   */
  async getSplit(contractAddress) {
    return await this.getContract(contractAddress, "split");
  }

  /**
   * Get an instance of a Marketplace contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const marketplace = await sdk.getMarketplace("0x1234...");
   * + const marketplace = await sdk.getContract("0x1234...", "marketplace");
   * ```
   */
  async getMarketplace(contractAddress) {
    return await this.getContract(contractAddress, "marketplace");
  }

  /**
   * Get an instance of a Marketplace contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const marketplace = await sdk.getMarketplaceV3("0x1234...");
   * + const marketplace = await sdk.getContract("0x1234...", "marketplace-v3");
   * ```
   */
  async getMarketplaceV3(contractAddress) {
    return await this.getContract(contractAddress, "marketplace-v3");
  }

  /**
   * Get an instance of a Pack contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const pack = await sdk.getPack("0x1234...");
   * + const pack = await sdk.getContract("0x1234...", "pack");
   * ```
   */
  async getPack(contractAddress) {
    return await this.getContract(contractAddress, "pack");
  }

  /**
   * Get an instance of a Pack contract
   * @param contractAddress - the address of the deployed contract
   * @deprecated
   * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
   * ```diff
   * - const multiWrap = await sdk.getMultiwrap("0x1234...");
   * + const multiWrap = await sdk.getContract("0x1234...", "multiwrap");
   * ```
   */
  async getMultiwrap(contractAddress) {
    return await this.getContract(contractAddress, "multiwrap");
  }

  /**
   * Get an instance of a Custom ThirdwebContract
   * @param address - the address of the deployed contract
   * @returns the contract
   * @public
   * @example
   * ```javascript
   * const contract = await sdk.getContract("{{contract_address}}");
   * ```
   */

  /**
   * Get an instance of a Custom ThirdwebContract
   * @param address - the address of the deployed contract
   * @param contractType - the {@link ContractType} of the contract to load
   * @returns the contract
   * @public
   * @example
   * ```javascript
   * const contract = await sdk.getContract("{{contract_address}}", "nft-drop");
   * ```
   */

  /**
   * Get an instance of a Custom ThirdwebContract
   * @param address - the address of the deployed contract
   * @param abi - the ABI ({@link ContractInterface}) of the contract to load
   * @returns the contract
   * @public
   * @example
   * ```javascript
   * const contract = await sdk.getContract("{{contract_address}}", ABI);
   * ```
   */

  async getContract(address, contractTypeOrABI) {
    const resolvedAddress = await contractPublisher.resolveAddress(address);

    // if we have a contract in the cache we will return it
    // we will do this **without** checking any contract type things for simplicity, this may have to change in the future?
    if (this.contractCache.has(resolvedAddress)) {
      // we know this will be there since we check the has above
      return this.contractCache.get(resolvedAddress);
    }
    if (resolvedAddress in generatedAbis.GENERATED_ABI) {
      return await this.getContractFromAbi(resolvedAddress, generatedAbis.GENERATED_ABI[resolvedAddress]);
    }
    let newContract;

    // if we don't have a contractType or ABI then we will have to resolve it regardless
    // we also handle it being "custom" just in case...
    if (!contractTypeOrABI || contractTypeOrABI === "custom") {
      try {
        const metadata = await this.getPublisher().fetchCompilerMetadataFromAddress(resolvedAddress);
        newContract = await this.getContractFromAbi(resolvedAddress, metadata.abi);
      } catch (e) {
        // fallback to
        // try resolving the contract type (legacy contracts)
        const resolvedContractType = await this.resolveContractType(resolvedAddress);
        if (resolvedContractType && resolvedContractType !== "custom") {
          // otherwise if it's a prebuilt contract we can just use the contract type
          const contractAbi = await contractPublisher.PREBUILT_CONTRACTS_MAP[resolvedContractType].getAbi(resolvedAddress, this.getProvider(), this.storage);
          newContract = await this.getContractFromAbi(resolvedAddress, contractAbi);
        } else {
          // we cant fetch the ABI, and we don't know the contract type, throw the original error
          throw e;
        }
      }
    }
    // if it's a builtin contract type we can just use the contract type to initialize the contract instance
    else if (typeof contractTypeOrABI === "string" && contractTypeOrABI in contractPublisher.PREBUILT_CONTRACTS_MAP) {
      newContract = await contractPublisher.PREBUILT_CONTRACTS_MAP[contractTypeOrABI].initialize(this.getSignerOrProvider(), resolvedAddress, this.storage, this.options);
    }
    // otherwise it has to be an ABI
    else {
      newContract = await this.getContractFromAbi(resolvedAddress, contractTypeOrABI);
    }

    // set whatever we have on the cache
    this.contractCache.set(resolvedAddress, newContract);
    // return it
    return newContract;
  }

  /**
   * @internal
   * @deprecated use {@link getContract} directly instead
   */
  async getBuiltInContract(address, contractType) {
    return await this.getContract(address, contractType);
  }

  /**
   * @param contractAddress - the address of the contract to attempt to resolve the contract type for
   * @returns the {@link ContractType} for the given contract address
   *
   */
  async resolveContractType(contractAddress) {
    try {
      const contract = new ethers.Contract(await contractPublisher.resolveAddress(contractAddress), IThirdwebContractABI__default["default"],
      // !provider only! - signer can break things here!
      this.getProvider());
      const remoteContractType = ethers.utils.toUtf8String(await contract.contractType())
      // eslint-disable-next-line no-control-regex
      .replace(/\x00/g, "");
      return contractPublisher.getContractTypeForRemoteName(remoteContractType);
    } catch (err) {
      return "custom";
    }
  }

  /**
   * Return all the contracts deployed by the specified address
   * @param walletAddress - the deployed address
   * @example
   * ```javascript
   * const contracts = sdk.getContractList("{{wallet_address}}");
   * ```
   */
  async getContractList(walletAddress) {
    // TODO - this only reads from the current registry chain, not the multichain registry
    const addresses = (await (await this.deployer.getRegistry())?.getContractAddresses(await contractPublisher.resolveAddress(walletAddress))) || [];
    const chainId = (await this.getProvider().getNetwork()).chainId;
    return await Promise.all(addresses.map(async address => {
      return {
        address: address,
        chainId,
        contractType: () => this.resolveContractType(address),
        metadata: async () => (await this.getContract(address)).metadata.get(),
        extensions: async () => getAllDetectedExtensionNames((await this.getContract(address)).abi)
      };
    }));
  }
  async getMultichainContractList(walletAddress) {
    let chains$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : chains.defaultChains;
    const contracts = await this.multiChainRegistry.getContractAddresses(walletAddress);
    const chainMap = chains$1.reduce((acc, chain) => {
      acc[chain.chainId] = chain;
      return acc;
    }, {});
    const sdkMap = {};
    return contracts.map(_ref => {
      let {
        address,
        chainId
      } = _ref;
      if (!chainMap[chainId]) {
        // if we don't have the chain in our list of supported chains then we can't resolve the contract type regardless, don't even try to set up the SDK
        return {
          address,
          chainId,
          contractType: async () => "custom",
          metadata: async () => ({
            name: ""
          }),
          extensions: async () => []
        };
      }
      try {
        let chainSDK = sdkMap[chainId];
        if (!chainSDK) {
          chainSDK = new ThirdwebSDK(chainId, {
            ...this.options,
            // need to disable readonly settings for this to work
            readonlySettings: undefined,
            // @ts-expect-error - zod doesn't like this
            supportedChains: chains$1
          }, this.storage);
          sdkMap[chainId] = chainSDK;
        }
        return {
          address,
          chainId,
          contractType: () => chainSDK.resolveContractType(address),
          metadata: async () => (await chainSDK.getContract(address)).metadata.get(),
          extensions: async () => getAllDetectedExtensionNames((await chainSDK.getContract(address)).abi)
        };
      } catch (e) {
        return {
          address,
          chainId,
          contractType: async () => "custom",
          metadata: async () => ({
            name: ""
          }),
          extensions: async () => []
        };
      }
    });
  }

  /**
   * Update the active signer or provider for all contracts
   * @param network - the new signer or provider
   */
  updateSignerOrProvider(network) {
    super.updateSignerOrProvider(network);
    this.updateContractSignerOrProvider();
  }
  updateContractSignerOrProvider() {
    this.wallet.connect(this.getSignerOrProvider());
    this.deployer.updateSignerOrProvider(this.getSignerOrProvider());
    this._publisher.updateSignerOrProvider(this.getSignerOrProvider());
    this.multiChainRegistry.updateSigner(this.getSignerOrProvider());
    this.verifier.updateSignerOrProvider(this.getSignerOrProvider());
    for (const [, contract] of this.contractCache) {
      contract.onNetworkUpdated(this.getSignerOrProvider());
    }
  }

  /**
   * Get an instance of a Custom contract from a json ABI
   * @param address - the address of the deployed contract
   * @param abi - the JSON abi
   * @returns the contract
   * @beta
   * @example
   * ```javascript
   * // Import your ABI from a JSON file
   * import myABI from "./path/to/myABI.json";
   *
   * const contract = sdk.getContractFromAbi(
   *   "{{contract_address}}",
   *   // Pass in the "abi" field from the JSON file
   *   myABI.abi
   * );
   * ```
   */
  async getContractFromAbi(address, abi) {
    const resolvedAddress = await contractPublisher.resolveAddress(address);
    if (this.contractCache.has(resolvedAddress)) {
      return this.contractCache.get(resolvedAddress);
    }
    const [, provider] = contractPublisher.getSignerAndProvider(this.getSignerOrProvider(), this.options);
    const parsedABI = typeof abi === "string" ? JSON.parse(abi) : abi;
    // TODO we still might want to lazy-fy this
    const contract = new contractPublisher.SmartContract(this.getSignerOrProvider(), resolvedAddress, await contractPublisher.getCompositePluginABI(resolvedAddress, contractPublisher.AbiSchema.parse(parsedABI), provider, this.options, this.storage), this.storageHandler, this.options, (await provider.getNetwork()).chainId);
    this.contractCache.set(resolvedAddress, contract);
    return contract;
  }

  /**
   * Get the native balance of a given address (wallet or contract)
   * @example
   * ```javascript
   * const balance = await sdk.getBalance("0x...");
   * console.log(balance.displayValue);
   * ```
   * @param address - the address to check the balance for
   */
  async getBalance(address) {
    return contractPublisher.fetchCurrencyValue(this.getProvider(), contractPublisher.NATIVE_TOKEN_ADDRESS, await this.getProvider().getBalance(await contractPublisher.resolveAddress(address)));
  }

  /**
   * @internal
   */
  getPublisher() {
    return this._publisher;
  }
}
function addChainToSupportedChains(network, options) {
  if (contractPublisher.isChainConfig(network)) {
    options = {
      ...options,
      // @ts-expect-error - we know that the network is assignable despite the readonly mismatch
      supportedChains: [...(options?.supportedChains || []), network]
    };
  }
  return options;
}
const THIRDWEB_DEPLOYER = "0xdd99b75f095d0c4d5112aCe938e4e6ed962fb024";

/**
 * Handles deploying new contracts
 * @public
 */
class ContractDeployer extends contractPublisher.RPCConnectionHandler {
  /**
   * @internal
   * should never be accessed directly, use {@link ContractDeployer.getFactory} instead
   */

  /**
   * @internal
   * should never be accessed directly, use {@link ContractDeployer.getRegistry} instead
   */

  transactionListener = event => {
    if (event.status === "submitted") {
      this.events.emit("contractDeployed", {
        status: "submitted",
        transactionHash: event.transactionHash
      });
    }
  };
  constructor(network, options, storage) {
    super(network, options);
    this.storage = storage;
    this.events = new EventEmitter__default["default"]();
    // Initialize factory and registry (we don't need to make these calls async)
    this.getFactory();
    this.getRegistry();
  }

  /**
   * Deploys an NFT Collection contract
   *
   * @remarks Deploys an NFT Collection contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployNFTCollection({
   *   name: "My Collection",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */
  deployNFTCollection = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    return await this.deployBuiltInContract.prepare(contractPublisher.NFTCollectionInitializer.contractType, metadata, "latest", options);
  });

  /**
   * Deploys a new NFTDrop contract
   *
   * @remarks Deploys an NFT Drop contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployNFTDrop({
   *   name: "My Drop",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */
  deployNFTDrop = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    return await this.deployBuiltInContract.prepare(contractPublisher.NFTDropInitializer.contractType, metadata, "latest", options);
  });

  /**
   * Deploys a new LoyaltyCard contract
   *
   * @remarks Deploys a LoyaltyCard contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployLoyaltyCard({
   *   name: "My Loyalty Program",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */
  deployLoyaltyCard = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    const parsedMetadata = await LoyaltyCardContractDeploy.parseAsync(metadata);
    const contractURI = await this.storage.upload(parsedMetadata);
    const chainId = (await this.getProvider().getNetwork()).chainId;
    const trustedForwarders = getDefaultTrustedForwarders(chainId);
    // add default forwarders to any custom forwarders passed in
    if (metadata.trusted_forwarders && metadata.trusted_forwarders.length > 0) {
      trustedForwarders.push(...metadata.trusted_forwarders);
    }
    const signerAddress = await this.getSigner()?.getAddress();
    const deployArgs = [signerAddress, parsedMetadata.name, parsedMetadata.symbol, contractURI, trustedForwarders, parsedMetadata.primary_sale_recipient, parsedMetadata.fee_recipient, parsedMetadata.seller_fee_basis_points, parsedMetadata.platform_fee_basis_points, parsedMetadata.platform_fee_recipient];
    return await this.deployReleasedContract.prepare(THIRDWEB_DEPLOYER, "LoyaltyCard", deployArgs, options);
  });

  /**
   * Deploys a new OpenEditionERC721 contract
   *
   * @remarks Deploys a OpenEdition contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployOpenEdition({
   *   name: "My Open Edition",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */
  deployOpenEdition = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    const parsedMetadata = await contractPublisher.DropErc721ContractSchema.deploy.parseAsync(metadata);
    const contractURI = await this.storage.upload(parsedMetadata);
    const chainId = (await this.getProvider().getNetwork()).chainId;
    const trustedForwarders = getDefaultTrustedForwarders(chainId);
    // add default forwarders to any custom forwarders passed in
    if (metadata.trusted_forwarders && metadata.trusted_forwarders.length > 0) {
      trustedForwarders.push(...metadata.trusted_forwarders);
    }
    const signerAddress = await this.getSigner()?.getAddress();
    const deployArgs = [signerAddress, parsedMetadata.name, parsedMetadata.symbol, contractURI, trustedForwarders, parsedMetadata.primary_sale_recipient, parsedMetadata.fee_recipient, parsedMetadata.seller_fee_basis_points];
    return await this.deployReleasedContract.prepare(THIRDWEB_DEPLOYER, "OpenEditionERC721", deployArgs, options);
  });

  /**
   * Deploys a new SignatureDrop contract
   *
   * @remarks Deploys a SignatureDrop contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deploySignatureDrop({
   *   name: "My Signature Drop",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */
  deploySignatureDrop = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    return await this.deployBuiltInContract.prepare(contractPublisher.SignatureDropInitializer.contractType, metadata, "latest", options);
  });

  /**
   * Deploys a new Multiwrap contract
   *
   * @remarks Deploys a Multiwrap contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployMultiwrap({
   *   name: "My Multiwrap",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   * @beta
   */
  deployMultiwrap = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    return await this.deployBuiltInContract.prepare(contractPublisher.MultiwrapInitializer.contractType, metadata, "latest", options);
  });

  /**
   * Deploys a new Edition contract
   *
   * @remarks Deploys an Edition contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployEdition({
   *   name: "My Edition",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */
  deployEdition = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    return await this.deployBuiltInContract.prepare(contractPublisher.EditionInitializer.contractType, metadata, "latest", options);
  });

  /**
   * Deploys a new EditionDrop contract
   *
   * @remarks Deploys an Edition Drop contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployEditionDrop({
   *   name: "My Edition Drop",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */
  deployEditionDrop = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    return await this.deployBuiltInContract.prepare(contractPublisher.EditionDropInitializer.contractType, metadata, "latest", options);
  });

  /**
   * Deploys a new Token contract
   *
   * @remarks Deploys a Token contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployToken({
   *   name: "My Token",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */
  deployToken = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    return await this.deployBuiltInContract.prepare(contractPublisher.TokenInitializer.contractType, metadata, "latest", options);
  });

  /**
   * Deploys a new Token Drop contract
   *
   * @remarks Deploys a Token Drop contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployTokenDrop({
   *   name: "My Token Drop",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */
  deployTokenDrop = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    return await this.deployBuiltInContract.prepare(contractPublisher.TokenDropInitializer.contractType, metadata, "latest", options);
  });

  /**
   * Deploys a new Marketplace contract
   *
   * @remarks Deploys a Marketplace contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployMarketplace({
   *   name: "My Marketplace",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */
  deployMarketplace = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    return await this.deployBuiltInContract.prepare(contractPublisher.MarketplaceInitializer.contractType, metadata, "latest", options);
  });

  /**
   * Deploys a new Marketplace-V3 contract
   *
   * @remarks Deploys a Marketplace-V3 contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployMarketplaceV3({
   *   name: "My Marketplace",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */
  deployMarketplaceV3 = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    return await this.deployBuiltInContract.prepare(contractPublisher.MarketplaceV3Initializer.contractType, metadata, "latest", options);
  });

  /**
   * Deploys a new Pack contract
   *
   * @remarks Deploys a Pack contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployPack({
   *   name: "My Pack",
   *   primary_sale_recipient: "your-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */
  deployPack = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    return await this.deployBuiltInContract.prepare(contractPublisher.PackInitializer.contractType, metadata, "latest", options);
  });

  /**
   * Deploys a new Split contract
   *
   * @remarks Deploys a Split contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deploySplit({
   *   name: "My Split",
   *   primary_sale_recipient: "your-address",
   *   recipients: [
   *    {
   *      address: "your-address",
   *      sharesBps: 80 * 100, // 80%
   *    },
   *    {
   *      address: "another-address",
   *      sharesBps: 20 * 100, // 20%
   *    },
   *   ],
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */
  deploySplit = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    return await this.deployBuiltInContract.prepare(contractPublisher.SplitInitializer.contractType, metadata, "latest", options);
  });

  /**
   * Deploys a new Vote contract
   *
   * @remarks Deploys an Vote contract and returns the address of the deployed contract
   *
   * @example
   * ```javascript
   * const contractAddress = await sdk.deployer.deployVote({
   *   name: "My Vote",
   *   primary_sale_recipient: "your-address",
   *   voting_token_address: "your-token-contract-address",
   * });
   * ```
   * @param metadata - the contract metadata
   * @returns the address of the deployed contract
   */
  deployVote = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    return await this.deployBuiltInContract.prepare(contractPublisher.VoteInitializer.contractType, metadata, "latest", options);
  });
  deployAirdropERC20 = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    const parsedMetadata = await AirdropContractDeploy.parseAsync(metadata);
    const contractURI = await this.storage.upload(parsedMetadata);
    const chainId = (await this.getProvider().getNetwork()).chainId;
    const trustedForwarders = getDefaultTrustedForwarders(chainId);
    // add default forwarders to any custom forwarders passed in
    if (metadata.trusted_forwarders && metadata.trusted_forwarders.length > 0) {
      trustedForwarders.push(...metadata.trusted_forwarders);
    }
    const signerAddress = await this.getSigner()?.getAddress();
    const deployArgs = [signerAddress, contractURI, trustedForwarders];
    return await this.deployReleasedContract.prepare(THIRDWEB_DEPLOYER, "AirdropERC20", deployArgs, options);
  });
  deployAirdropERC721 = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    const parsedMetadata = await AirdropContractDeploy.parseAsync(metadata);
    const contractURI = await this.storage.upload(parsedMetadata);
    const chainId = (await this.getProvider().getNetwork()).chainId;
    const trustedForwarders = getDefaultTrustedForwarders(chainId);
    // add default forwarders to any custom forwarders passed in
    if (metadata.trusted_forwarders && metadata.trusted_forwarders.length > 0) {
      trustedForwarders.push(...metadata.trusted_forwarders);
    }
    const signerAddress = await this.getSigner()?.getAddress();
    const deployArgs = [signerAddress, contractURI, trustedForwarders];
    return await this.deployReleasedContract.prepare(THIRDWEB_DEPLOYER, "AirdropERC721", deployArgs, options);
  });
  deployAirdropERC1155 = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (metadata, options) => {
    const parsedMetadata = await AirdropContractDeploy.parseAsync(metadata);
    const contractURI = await this.storage.upload(parsedMetadata);
    const chainId = (await this.getProvider().getNetwork()).chainId;
    const trustedForwarders = getDefaultTrustedForwarders(chainId);
    // add default forwarders to any custom forwarders passed in
    if (metadata.trusted_forwarders && metadata.trusted_forwarders.length > 0) {
      trustedForwarders.push(...metadata.trusted_forwarders);
    }
    const signerAddress = await this.getSigner()?.getAddress();
    const deployArgs = [signerAddress, contractURI, trustedForwarders];
    return await this.deployReleasedContract.prepare(THIRDWEB_DEPLOYER, "AirdropERC1155", deployArgs, options);
  });

  /**
   * Deploys a new contract
   *
   * @internal
   * @param contractType - the type of contract to deploy
   * @param contractMetadata - the metadata to deploy the contract with
   * @param version
   * @returns a promise of the address of the newly deployed contract
   */
  deployBuiltInContract = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction((() => {
    var _this = this;
    return async function (contractType, contractMetadata) {
      let version = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "latest";
      let options = arguments.length > 3 ? arguments[3] : undefined;
      const signer = _this.getSigner();
      invariant__default["default"](signer, "A signer is required to deploy contracts");
      const parsedMetadata = {
        app_uri: contractPublisher.PREBUILT_CONTRACTS_APPURI_MAP[contractType],
        ...(await contractPublisher.PREBUILT_CONTRACTS_MAP[contractType].schema.deploy.parseAsync(contractMetadata))
      };
      if (_this.hasLocalFactory()) {
        // old behavior for unit tests, deploy from local factory
        // parse version into the first number of the version string (or undefined if unparseable)
        let parsedVersion = undefined;
        try {
          parsedVersion = parseInt(version);
          if (isNaN(parsedVersion)) {
            parsedVersion = undefined;
          }
        } catch (e) {
          parsedVersion = undefined;
        }
        const factory = await _this.getFactory();
        if (!factory) {
          throw new Error("Factory not found");
        }
        factory.on(contractPublisher.EventType.Transaction, _this.transactionListener);
        return factory.deploy.prepare(contractType, parsedMetadata, _this.events, parsedVersion, options, () => {
          factory.off(contractPublisher.EventType.Transaction, _this.transactionListener);
        });
      }

      // For all other chains, fetch from published contracts
      // resolve contract name from type
      const contractName = contractPublisher.getContractName(contractType);
      invariant__default["default"](contractName, "Contract name not found");
      // first upload the contract metadata
      const contractURI = await _this.storage.upload(parsedMetadata);
      // then get the deploy arguments
      const constructorParams = await getDeployArguments(contractType, parsedMetadata, contractURI, signer, _this.storage);

      // fetch the publish URI from the ContractPublisher contract
      const publishedContract = await _this.fetchPublishedContractFromPolygon(THIRDWEB_DEPLOYER, contractName, version);
      return _this.deployContractFromUri.prepare(publishedContract.metadataUri, constructorParams, options);
    };
  })());

  /**
   * @internal
   * @param contractType
   */
  async getLatestBuiltInContractVersion(contractType) {
    const factory = await this.getFactory();
    if (!factory) {
      throw new Error("Factory not found");
    }
    return await factory.getLatestVersion(contractType);
  }

  /**
   * Deploy any published contract by its name
   * @param publisherAddress the address of the publisher
   * @param contractName the name of the contract to deploy
   * @param constructorParams the constructor params to pass to the contract
   *
   * @deprecated use deployPublishedContract instead
   */
  deployReleasedContract = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction((() => {
    var _this2 = this;
    return async function (publisherAddress, contractName, constructorParams) {
      let version = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "latest";
      let options = arguments.length > 4 ? arguments[4] : undefined;
      const publishedContract = await _this2.fetchPublishedContractFromPolygon(publisherAddress, contractName, version);
      return await _this2.deployContractFromUri.prepare(publishedContract.metadataUri, constructorParams, options);
    };
  })());

  /**
   * Deploy any published contract by its name
   * @param publisherAddress the address of the publisher
   * @param contractName the name of the contract to deploy
   * @param constructorParams the constructor params to pass to the contract
   * @param version Optional: the version of the contract to deploy or "latest"
   * @param options Optional: the deploy options
   */
  deployPublishedContract = this.deployReleasedContract;

  /**
   * Deploy any published contract by its name
   * @param contractName the name of the contract to deploy
   * @param constructorParams the constructor params to pass to the contract
   * @param publisherAddress the address of the publisher
   * @param version Optional: the version of the contract to deploy or "latest"
   * @param saltForCreate2 Optional: salt for create2 deployment, will determine deployment address
   */
  async deployPublishedContractDeterministic(contractName, constructorParams) {
    let publisherAddress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : THIRDWEB_DEPLOYER;
    let contractVersion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "latest";
    let saltForCreate2 = arguments.length > 4 ? arguments[4] : undefined;
    const signer = this.getSigner();
    invariant__default["default"](signer, "Signer is required");
    return directDeployDeterministicPublished(contractName, publisherAddress, contractVersion, constructorParams, signer, this.storage, this.options.clientId, this.options.secretKey, saltForCreate2);
  }

  /**
   * Predict Create2 address of a contract
   * @param contractName the name of the contract
   * @param constructorParams the constructor params to pass to the contract
   * @param publisherAddress the address of the publisher
   * @param version Optional: the version of the contract to deploy or "latest"
   * @param saltForCreate2 Optional: salt for create2 deployment, will determine deployment address
   */
  async predictAddressDeterministic(contractName, constructorParams) {
    let publisherAddress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : THIRDWEB_DEPLOYER;
    let contractVersion = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "latest";
    let saltForCreate2 = arguments.length > 4 ? arguments[4] : undefined;
    const provider = this.getProvider();
    invariant__default["default"](provider, "Provider is required");
    return predictAddressDeterministicPublished(contractName, publisherAddress, contractVersion, constructorParams, provider, this.storage, this.options.clientId, this.options.secretKey, saltForCreate2);
  }

  /**
   * Deploy a proxy contract of a given implementation via the given factory
   * @param factoryAddress
   * @param implementationAddress
   * @param implementationAbi
   * @param initializerFunction
   * @param initializerArgs
   */
  deployViaFactory = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (factoryAddress, implementationAddress, implementationAbi, initializerFunction, initializerArgs, saltForProxyDeploy) => {
    const resolvedFactoryAddress = await contractPublisher.resolveAddress(factoryAddress);
    const resolvedImplementationAddress = await contractPublisher.resolveAddress(implementationAddress);
    const signer = this.getSigner();
    invariant__default["default"](signer, "signer is required");
    // TODO only require factory interface here - IProxyFactory
    const proxyFactory = new ContractFactory(resolvedFactoryAddress, this.getSignerOrProvider(), this.storage, this.options);
    proxyFactory.on(contractPublisher.EventType.Transaction, this.transactionListener);
    return await proxyFactory.deployProxyByImplementation.prepare(resolvedImplementationAddress, implementationAbi, initializerFunction, initializerArgs, this.events, saltForProxyDeploy, () => {
      proxyFactory.off(contractPublisher.EventType.Transaction, this.transactionListener);
    });
  });

  /**
   * Deploy a proxy contract of a given implementation directly
   * @param implementationAddress
   * @param implementationAbi
   * @param initializerFunction
   * @param initializerArgs
   */
  deployProxy = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (implementationAddress, implementationAbi, initializerFunction, initializerArgs) => {
    const resolvedAddress = await contractPublisher.resolveAddress(implementationAddress);
    const encodedInitializer = ethers.Contract.getInterface(implementationAbi).encodeFunctionData(initializerFunction, initializerArgs);
    const {
      TWProxy__factory
    } = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@thirdweb-dev/contracts-js/factories/TWProxy__factory')); });
    return this.deployContractWithAbi.prepare(TWProxy__factory.abi, TWProxy__factory.bytecode, [resolvedAddress, encodedInitializer]);
  });

  /**
   * Deploy a proxy contract of a given implementation via thirdweb's Clone factory
   * @param publishMetadataUri
   * @param constructorParamValues
   * @param deployMetadata
   * @param signer
   * @param options
   */
  deployViaAutoFactory = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (publishMetadataUri, deployMetadata, signer, initializerFunction, paramValues, options) => {
    // any evm deployment flow

    // 1. Deploy CREATE2 factory (if not already exists)
    const create2Factory = await deployCreate2Factory(signer, options);

    // 2. get deployment info for any evm
    const deploymentInfo = await getDeploymentInfo(publishMetadataUri, this.storage, this.getProvider(), create2Factory, this.options.clientId, this.options.secretKey);
    const implementationAddress = deploymentInfo.find(i => i.type === "implementation")?.transaction.predictedAddress;

    // 3. deploy infra + plugins + implementation using a throwaway Deployer contract

    // filter out already deployed contracts (data is empty)
    const transactionsToSend = deploymentInfo.filter(i => i.transaction.data && i.transaction.data.length > 0);
    const transactionsforDirectDeploy = transactionsToSend.filter(i => {
      return i.type !== "infra";
    }).map(i => i.transaction);
    const transactionsForThrowawayDeployer = transactionsToSend.filter(i => {
      return i.type === "infra";
    }).map(i => i.transaction);

    // deploy via throwaway deployer, multiple infra contracts in one transaction
    await deployWithThrowawayDeployer(signer, transactionsForThrowawayDeployer, options);

    // send each transaction directly to Create2 factory
    // process txns one at a time
    for (const tx of transactionsforDirectDeploy) {
      try {
        await deployContractDeterministic(signer, tx, options);
      } catch (e) {
        console.debug(`Error deploying contract at ${tx.predictedAddress}`, e?.message);
      }
    }
    const resolvedImplementationAddress = await contractPublisher.resolveAddress(implementationAddress);

    // 4. deploy proxy with TWStatelessFactory (Clone factory) and return address
    const cloneFactory = await computeCloneFactoryAddress(this.getProvider(), this.storage, create2Factory, this.options.clientId, this.options.secretKey);
    options?.notifier?.("deploying", "proxy");
    const proxyDeployTransaction = await this.deployViaFactory.prepare(cloneFactory, resolvedImplementationAddress, deployMetadata.compilerMetadata.abi, initializerFunction, paramValues, options?.saltForProxyDeploy);
    options?.notifier?.("deployed", "proxy");
    return proxyDeployTransaction;
  });

  /**
   * Deploy a proxy contract of a given implementation via a custom factory
   * @param constructorParamValues
   * @param deployMetadata
   * @param signer
   * @param chainId
   */
  deployViaCustomFactory = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (constructorParamValues, deployMetadata, signer, chainId) => {
    const customFactoryAddress = deployMetadata.extendedMetadata?.factoryDeploymentData?.customFactoryInput?.customFactoryAddresses[chainId];
    const resolvedCustomFactoryAddress = await contractPublisher.resolveAddress(customFactoryAddress);
    invariant__default["default"](resolvedCustomFactoryAddress, `customFactoryAddress not found for chainId '${chainId}'`);
    invariant__default["default"](deployMetadata.extendedMetadata?.factoryDeploymentData?.customFactoryInput?.factoryFunction, `customFactoryFunction not set'`);
    const customFactoryMetadata = await contractPublisher.fetchContractMetadataFromAddress(resolvedCustomFactoryAddress, this.getProvider(), this.storage, this.options);
    const factoryFunctionParamTypes = extractFunctionParamsFromAbi(customFactoryMetadata.abi, deployMetadata.extendedMetadata.factoryDeploymentData.customFactoryInput.factoryFunction).map(p => p.type);
    const factoryFunctionparamValues = convertParamValues(factoryFunctionParamTypes, constructorParamValues);

    // eslint-disable-next-line prefer-const
    let deployedImplementationAddress;
    const deployTransaction = await contractPublisher.Transaction.fromContractInfo({
      contractAddress: resolvedCustomFactoryAddress,
      contractAbi: customFactoryMetadata.abi,
      provider: this.getProvider(),
      signer,
      method: deployMetadata.extendedMetadata.factoryDeploymentData.customFactoryInput.factoryFunction,
      args: factoryFunctionparamValues,
      parse: () => {
        return deployedImplementationAddress;
      },
      storage: this.storage
    });
    deployedImplementationAddress = await deployTransaction.simulate();
    return deployTransaction;
  });

  /**
   * @internal
   */
  async getRegistry() {
    // if we already have a registry just return it back
    if (this._registry) {
      return this._registry;
    }

    // otherwise get the registry address for the active chain and get a new one

    // have to do it like this otherwise we run it over and over and over
    // "this._registry" has to be assigned to the promise upfront.
    return this._registry = this.getProvider().getNetwork().then(async _ref2 => {
      let {
        chainId
      } = _ref2;
      const registryAddress = contractPublisher.getContractAddressByChainId(chainId, "twRegistry");
      if (!registryAddress) {
        return undefined;
      }
      return new ContractRegistry(registryAddress, this.getSignerOrProvider(), this.storage, this.options);
    });
  }
  async getFactory() {
    // if we already have a factory just return it back
    if (this._factory) {
      return this._factory;
    }

    // otherwise get the factory address for the active chain and get a new one

    // have to do it like this otherwise we run it over and over and over
    // "this._factory" has to be assigned to the promise upfront.
    return this._factory = this.getProvider().getNetwork().then(async _ref3 => {
      let {
        chainId
      } = _ref3;
      const factoryAddress = contractPublisher.getContractAddressByChainId(chainId, "twFactory");
      if (!factoryAddress) {
        return undefined;
      }
      const factory = new ContractFactory(factoryAddress, this.getSignerOrProvider(), this.storage, this.options);
      return factory;
    });
  }
  updateSignerOrProvider(network) {
    super.updateSignerOrProvider(network);
    this.updateContractSignerOrProvider();
  }
  updateContractSignerOrProvider() {
    // has to be promises now
    this._factory?.then(factory => {
      factory?.updateSignerOrProvider(this.getSignerOrProvider());
    }).catch(() => {
      // ignore
    });
    // has to be promises now
    this._registry?.then(registry => {
      registry?.updateSignerOrProvider(this.getSignerOrProvider());
    }).catch(() => {
      // ignore
    });
  }

  /**
   * @internal
   * @param publishMetadataUri
   * @param constructorParamValues
   * @param options
   */
  deployContractFromUri = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (publishMetadataUri, constructorParamValues, options) => {
    const signer = this.getSigner();
    invariant__default["default"](signer, "A signer is required");
    const {
      compilerMetadata,
      extendedMetadata
    } = await contractPublisher.fetchAndCacheDeployMetadata(publishMetadataUri, this.storage);
    const forceDirectDeploy = options?.forceDirectDeploy || false;
    const chainId = (await this.getProvider().getNetwork()).chainId;
    const isNetworkEnabled = extendedMetadata?.networksForDeployment?.networksEnabled.includes(chainId) || extendedMetadata?.networksForDeployment?.allNetworks;
    if (extendedMetadata?.networksForDeployment && !isNetworkEnabled) {
      throw new Error(`Deployments disabled on this network, with chainId: ${chainId}`);
    }
    if (extendedMetadata && extendedMetadata.factoryDeploymentData && (extendedMetadata.isDeployableViaProxy || extendedMetadata.isDeployableViaFactory || extendedMetadata.deployType && extendedMetadata.deployType !== "standard") && !forceDirectDeploy) {
      if (extendedMetadata.deployType === "customFactory") {
        return await this.deployViaCustomFactory.prepare(constructorParamValues, {
          compilerMetadata,
          extendedMetadata
        }, signer, chainId);
      } else {
        invariant__default["default"](extendedMetadata.factoryDeploymentData.implementationInitializerFunction, `implementationInitializerFunction not set'`);
        const initializerParamTypes = extractFunctionParamsFromAbi(compilerMetadata.abi, extendedMetadata.factoryDeploymentData.implementationInitializerFunction).map(p => p.type);
        const paramValues = convertParamValues(initializerParamTypes, constructorParamValues);
        const implementationAddress = extendedMetadata.factoryDeploymentData.implementationAddresses[chainId];
        if (!implementationAddress || extendedMetadata.deployType === "autoFactory") {
          return await this.deployViaAutoFactory.prepare(publishMetadataUri, {
            compilerMetadata,
            extendedMetadata
          }, signer, extendedMetadata.factoryDeploymentData.implementationInitializerFunction, paramValues, options);
        }
        const resolvedImplementationAddress = await contractPublisher.resolveAddress(implementationAddress);
        invariant__default["default"](resolvedImplementationAddress, `implementationAddress not found for chainId '${chainId}'`);
        if (extendedMetadata.isDeployableViaFactory) {
          // deploy via a factory (prioritise factory)
          invariant__default["default"](extendedMetadata.factoryDeploymentData.factoryAddresses, "isDeployableViaFactory is true so factoryAddresses is required");
          const factoryAddress = extendedMetadata.factoryDeploymentData.factoryAddresses[chainId];
          invariant__default["default"](factoryAddress, `isDeployableViaFactory is true and factoryAddress not found for chainId '${chainId}'`);
          const resolvedFactoryAddress = await contractPublisher.resolveAddress(factoryAddress);
          return await this.deployViaFactory.prepare(resolvedFactoryAddress, resolvedImplementationAddress, compilerMetadata.abi, extendedMetadata.factoryDeploymentData.implementationInitializerFunction, paramValues, options?.saltForProxyDeploy);
        } else if (extendedMetadata.isDeployableViaProxy) {
          // deploy a proxy directly
          return await this.deployProxy.prepare(resolvedImplementationAddress, compilerMetadata.abi, extendedMetadata.factoryDeploymentData.implementationInitializerFunction, paramValues);
        }
      }
    }
    const bytecode = compilerMetadata.bytecode.startsWith("0x") ? compilerMetadata.bytecode : `0x${compilerMetadata.bytecode}`;
    if (!ethers.utils.isHexString(bytecode)) {
      throw new Error(`Contract bytecode is invalid.\n\n${bytecode}`);
    }
    const constructorParamTypes = contractPublisher.extractConstructorParamsFromAbi(compilerMetadata.abi).map(p => p.type);
    const paramValues = convertParamValues(constructorParamTypes, constructorParamValues);
    return this.deployContractWithAbi.prepare(compilerMetadata.abi, bytecode, paramValues);
  });

  /**
   * @internal
   * @param abi
   * @param bytecode
   * @param constructorParams
   */
  deployContractWithAbi = /* @__PURE__ */contractPublisher.buildDeployTransactionFunction(async (abi, bytecode, constructorParams) => {
    const signer = this.getSigner();
    const provider = this.getProvider();
    invariant__default["default"](signer, "Signer is required to deploy contracts");
    const factory = new ethers.ContractFactory(abi, bytecode).connect(signer);
    return new contractPublisher.DeployTransaction({
      args: constructorParams,
      provider,
      signer,
      factory,
      storage: this.storage,
      events: this.events
    });
  });

  /**
   * @public
   * @param publishMetadataUri
   * @param options
   */
  async getTransactionsForDeploy(publishMetadataUri, options) {
    let transactions = [];
    const provider = this.getProvider();
    invariant__default["default"](provider, "A provider is required");
    const {
      extendedMetadata
    } = await contractPublisher.fetchAndCacheDeployMetadata(publishMetadataUri, this.storage);
    const forceDirectDeploy = options?.forceDirectDeploy || false;
    if (extendedMetadata && extendedMetadata.factoryDeploymentData && (extendedMetadata.isDeployableViaProxy || extendedMetadata.isDeployableViaFactory || extendedMetadata.deployType === "autoFactory") && !forceDirectDeploy) {
      const chainId = (await this.getProvider().getNetwork()).chainId;
      const implementationAddress = extendedMetadata.factoryDeploymentData.implementationAddresses[chainId];
      if (!implementationAddress || extendedMetadata.deployType === "autoFactory") {
        const create2FactoryAddress = await contractPublisher.getCreate2FactoryAddress(this.getProvider());
        transactions.push({
          contractType: "create2Factory",
          addresses: [create2FactoryAddress]
        });
        const deploymentInfo = await getDeploymentInfo(publishMetadataUri, this.storage, this.getProvider(), create2FactoryAddress, this.options.clientId, this.options.secretKey);
        const transactionsToSend = deploymentInfo.filter(i => i.transaction.data && i.transaction.data.length > 0);
        const transactionsforDirectDeploy = transactionsToSend.filter(i => {
          return i.type !== "infra";
        }).map(i => i.transaction);
        transactionsforDirectDeploy.forEach(tx => {
          transactions.push({
            contractType: "preset",
            addresses: [tx.predictedAddress]
          });
        });
        const transactionsForThrowawayDeployer = transactionsToSend.filter(i => {
          return i.type === "infra";
        }).map(i => i.transaction);
        const transactionBatches = createTransactionBatches(transactionsForThrowawayDeployer);
        transactionBatches.forEach(batch => {
          const addresses = batch.map(tx => tx.predictedAddress);
          transactions.push({
            contractType: "infra",
            addresses: addresses
          });
        });
      }
      transactions = (await Promise.all(transactions.map(async tx => {
        const addresses = (await Promise.all(tx.addresses.map(async address => {
          const isDeployed = await contractPublisher.isContractDeployed(address, provider);
          return isDeployed ? null : address;
        }))).filter(Boolean);
        return addresses.length > 0 ? tx : null;
      }))).filter(Boolean);
      transactions.push({
        contractType: "proxy",
        addresses: []
      });
    } else {
      transactions.push({
        contractType: "custom",
        addresses: []
      });
    }
    return transactions;
  }

  /**
   * Listen to all deploy transactions from this deployer
   * @param listener the listener to add
   */
  addDeployListener(listener) {
    this.events.on("contractDeployed", listener);
  }

  /**
   * Remove a deploy listener
   * @param listener the listener to remove
   */
  removeDeployListener(listener) {
    this.events.off("contractDeployed", listener);
  }

  /**
   * Remove all deploy listeners
   */
  removeAllDeployListeners() {
    this.events.removeAllListeners("contractDeployed");
  }

  // PRIVATE METHODS

  async fetchPublishedContractFromPolygon(publisherAddress, contractName, version) {
    const address = await contractPublisher.resolveAddress(publisherAddress);
    // TODO don't create a new sdk instance here, instead read from contract directly with provider
    // this will allow moving deployer out of this file and help with tree shaking
    const publishedContract = await new ThirdwebSDK("polygon", {
      clientId: this.options.clientId,
      secretKey: this.options.secretKey
    }, this.storage).getPublisher().getVersion(address, contractName, version);
    if (!publishedContract) {
      throw new Error(`No published contract found for '${contractName}' at version '${version}' by '${address}'`);
    }
    return publishedContract;
  }
  hasLocalFactory() {
    return !!contractPublisher.getProcessEnv("factoryAddress");
  }
}

exports.APPROVED_IMPLEMENTATIONS = APPROVED_IMPLEMENTATIONS;
exports.ContractDeployer = ContractDeployer;
exports.LOCAL_NODE_PKEY = LOCAL_NODE_PKEY;
exports.SUPPORTED_CHAIN_IDS = SUPPORTED_CHAIN_IDS;
exports.ThirdwebSDK = ThirdwebSDK;
exports.UserWallet = UserWallet;
exports.checkClientIdOrSecretKey = checkClientIdOrSecretKey;
exports.checkVerificationStatus = checkVerificationStatus;
exports.computeCloneFactoryAddress = computeCloneFactoryAddress;
exports.convertParamValues = convertParamValues;
exports.createTransactionBatches = createTransactionBatches;
exports.deployContractDeterministic = deployContractDeterministic;
exports.deployCreate2Factory = deployCreate2Factory;
exports.deployWithThrowawayDeployer = deployWithThrowawayDeployer;
exports.directDeployDeterministic = directDeployDeterministic;
exports.directDeployDeterministicPublished = directDeployDeterministicPublished;
exports.directDeployDeterministicWithUri = directDeployDeterministicWithUri;
exports.estimateGasForDeploy = estimateGasForDeploy;
exports.extractFunctionParamsFromAbi = extractFunctionParamsFromAbi;
exports.getAllDetectedExtensionNames = getAllDetectedExtensionNames;
exports.getAllDetectedFeatureNames = getAllDetectedFeatureNames;
exports.getApprovedImplementation = getApprovedImplementation;
exports.getDefaultTrustedForwarders = getDefaultTrustedForwarders;
exports.getDeployArguments = getDeployArguments;
exports.getDeploymentInfo = getDeploymentInfo;
exports.getEncodedConstructorParamsForThirdwebContract = getEncodedConstructorParamsForThirdwebContract;
exports.getThirdwebContractAddress = getThirdwebContractAddress;
exports.getTrustedForwarders = getTrustedForwarders;
exports.isVerifiedOnEtherscan = isVerifiedOnEtherscan;
exports.predictAddressDeterministic = predictAddressDeterministic;
exports.predictAddressDeterministicPublished = predictAddressDeterministicPublished;
exports.predictAddressDeterministicWithUri = predictAddressDeterministicWithUri;
exports.predictThirdwebContractAddress = predictThirdwebContractAddress;
exports.verify = verify;
exports.verifyThirdwebPrebuiltImplementation = verifyThirdwebPrebuiltImplementation;
