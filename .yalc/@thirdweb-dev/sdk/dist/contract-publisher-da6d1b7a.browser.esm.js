import { Q as QuantitySchema, A as AmountSchema, B as BytesLikeSchema, N as NFTInputOrUriSchema, a as BasisPointsSchema, F as FileOrBufferOrStringSchema, P as PercentSchema, C as CommonNFTOutput, b as CommonNFTInput, D as DEFAULT_QUERY_ALL_COUNT, c as BasicNFTInput, M as MAX_BPS } from './QueryParams-39bcad7a.browser.esm.js';
import { z } from 'zod';
import { BigNumber, providers, utils, constants, Contract } from 'ethers';
import invariant from 'tiny-invariant';
import { v4 } from 'uuid';
import { isBrowser as isBrowser$1, isFileOrBuffer, replaceGatewayUrlWithScheme } from '@thirdweb-dev/storage';
import ERC165Abi from '@thirdweb-dev/contracts-js/dist/abis/IERC165.json';
import IERC721MetadataAbi from '@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json';
import Erc1155MetadataAbi from '@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json';
import ERC20Abi from '@thirdweb-dev/contracts-js/dist/abis/IERC20.json';
import IERC20MetadataAbi from '@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json';
import deepEqual from 'fast-deep-equal';
import { MerkleTree } from 'merkletreejs';
import IThirdwebContractABI from '@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json';
import DeprecatedAbi from '@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json';
import Erc1155Abi from '@thirdweb-dev/contracts-js/dist/abis/IERC1155.json';
import Erc721Abi from '@thirdweb-dev/contracts-js/dist/abis/IERC721.json';
import ContractPublisherAbi from '@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json';
import { defaultChains, getValidChainRPCs, Polygon, Mumbai } from '@thirdweb-dev/chains';
import bs58 from 'bs58';
import TWRegistryABI from '@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryLogic.json';
import IBurnableERC20Abi from '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json';
import IDrop from '@thirdweb-dev/contracts-js/dist/abis/IDrop.json';
import DropERC20_V2Abi from '@thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json';
import IDropSinglePhase from '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json';
import IDropSinglePhaseV1 from '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json';
import IERC20PermitAbi from '@thirdweb-dev/contracts-js/dist/abis/IERC20Permit.json';
import IMintableERC20Abi from '@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json';
import MulticallAbi from '@thirdweb-dev/contracts-js/dist/abis/IMulticall.json';
import ISignatureMintERC20Abi from '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json';
import IBurnableERC721Abi from '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json';
import IClaimableERC721 from '@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json';
import DelayedRevealAbi from '@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json';
import DropERC721_V3Abi from '@thirdweb-dev/contracts-js/dist/abis/IDropERC721_V3.json';
import Erc721EnumerableAbi from '@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json';
import Erc721AQueryableAbi from '@thirdweb-dev/contracts-js/dist/abis/IERC721AQueryableUpgradeable.json';
import Erc721SupplyAbi from '@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json';
import ILazyMintAbi from '@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json';
import IMintableERC721Abi from '@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json';
import SignatureMintERC721Abi from '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721.json';
import SignatureMintERC721_V1Abi from '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721_V1.json';
import TieredDropAbi from '@thirdweb-dev/contracts-js/dist/abis/LazyMintWithTier.json';
import SharedMetadataAbi from '@thirdweb-dev/contracts-js/dist/abis/SharedMetadata.json';
import zora_IDropERC721 from '@thirdweb-dev/contracts-js/dist/abis/zora_IERC721Drop.json';
import ILoyaltyCardAbi from '@thirdweb-dev/contracts-js/dist/abis/ILoyaltyCard.json';
import INFTMetadataAbi from '@thirdweb-dev/contracts-js/dist/abis/INFTMetadata.json';
import IBurnableERC1155Abi from '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json';
import IClaimableERC1155 from '@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json';
import IDropMultiPhase1155 from '@thirdweb-dev/contracts-js/dist/abis/IDrop1155.json';
import DropERC1155_V2Abi from '@thirdweb-dev/contracts-js/dist/abis/IDropERC1155_V2.json';
import IDropSinglePhase1155 from '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155.json';
import IDropSinglePhase1155_V1 from '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155_V1.json';
import Erc1155SupplyAbi from '@thirdweb-dev/contracts-js/dist/abis/IERC1155Supply.json';
import Erc1155EnumerableAbi from '@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json';
import IMintableERC1155Abi from '@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json';
import ISignatureMintERC1155Abi from '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json';
import IERC2771ContextAbi from '@thirdweb-dev/contracts-js/dist/abis/IERC2771Context.json';
import IAppURI from '@thirdweb-dev/contracts-js/dist/abis/IAppURI.json';
import IContractMetadataAbi from '@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json';
import IDirectListingsAbi from '@thirdweb-dev/contracts-js/dist/abis/IDirectListings.json';
import IEnglishAuctionsAbi from '@thirdweb-dev/contracts-js/dist/abis/IEnglishAuctions.json';
import IOffersAbi from '@thirdweb-dev/contracts-js/dist/abis/IOffers.json';
import IPackVRFAbi from '@thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json';
import IPermissionsAbi from '@thirdweb-dev/contracts-js/dist/abis/IPermissions.json';
import IPermissionsEnumerableAbi from '@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json';
import IThirdwebPlatformFeeAbi from '@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json';
import IThirdwebPrimarySaleAbi from '@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json';
import IThirdwebRoyaltyAbi from '@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json';
import IOwnableAbi from '@thirdweb-dev/contracts-js/dist/abis/Ownable.json';
import IAirdropERC20 from '@thirdweb-dev/contracts-js/dist/abis/IAirdropERC20.json';
import IAirdropERC721 from '@thirdweb-dev/contracts-js/dist/abis/IAirdropERC721.json';
import IAirdropERC1155 from '@thirdweb-dev/contracts-js/dist/abis/IAirdropERC1155.json';
import IAccountFactoryCore from '@thirdweb-dev/contracts-js/dist/abis/IAccountFactoryCore.json';
import IAccountPermissions from '@thirdweb-dev/contracts-js/dist/abis/IAccountPermissions.json';
import IAccount from '@thirdweb-dev/contracts-js/dist/abis/IAccount.json';
import { Interface } from 'ethers/lib/utils';
import ForwarderABI from '@thirdweb-dev/contracts-js/dist/abis/Forwarder.json';
import fetch from 'cross-fetch';
import EventEmitter from 'eventemitter3';

const MAX_LENGTH = 256;
const NUMERIC_IDENTIFIER = "0|[1-9]\\d*";
const MAIN_VERSION_IDENTIFIER = `(${NUMERIC_IDENTIFIER})\\.(${NUMERIC_IDENTIFIER})\\.(${NUMERIC_IDENTIFIER})`;
const REGEX_MAIN_VERSION = new RegExp(MAIN_VERSION_IDENTIFIER);

/**
 * @internal
 */

/**
 * @internal
 * @param version
 */
function toSemver(version) {
  if (version.length > MAX_LENGTH) {
    throw new Error(`version is longer than ${MAX_LENGTH} characters`);
  }
  const matches = version.trim().match(REGEX_MAIN_VERSION);
  if (!matches || matches?.length !== 4) {
    throw new Error(`${version} is not a valid semantic version. Should be in the format of major.minor.patch. Ex: 0.4.1`);
  }
  const major = Number(matches[1]);
  const minor = Number(matches[2]);
  const patch = Number(matches[3]);
  const versionString = [major, minor, patch].join(".");
  return {
    major,
    minor,
    patch,
    versionString
  };
}

/**
 * @internal
 * @param current
 * @param next
 */
function isIncrementalVersion(current, next) {
  const currentSemver = toSemver(current);
  const nextSemver = toSemver(next);
  if (nextSemver.major > currentSemver.major) {
    return true;
  }
  const eqMajor = nextSemver.major === currentSemver.major;
  if (eqMajor && nextSemver.minor > currentSemver.minor) {
    return true;
  }
  const eqMinor = nextSemver.minor === currentSemver.minor;
  return eqMajor && eqMinor && nextSemver.patch > currentSemver.patch;
}
function isDowngradeVersion(current, next) {
  const currentSemver = toSemver(current);
  const nextSemver = toSemver(next);
  if (nextSemver.major < currentSemver.major) {
    return true;
  }
  const eqMajor = nextSemver.major === currentSemver.major;
  if (eqMajor && nextSemver.minor < currentSemver.minor) {
    return true;
  }
  const eqMinor = nextSemver.minor === currentSemver.minor;
  return eqMajor && eqMinor && nextSemver.patch < currentSemver.patch;
}

const BigNumberSchema = /* @__PURE__ */(() => z.union([z.string(), z.number(), z.bigint(), z.custom(data => {
  return BigNumber.isBigNumber(data);
})]).transform(arg => BigNumber.from(arg)))();
const BigNumberishSchema = /* @__PURE__ */BigNumberSchema.transform(arg => arg.toString());
const BigNumberTransformSchema = /* @__PURE__ */(() => z.union([z.bigint(), z.custom(data => {
  return BigNumber.isBigNumber(data);
})]).transform(arg => {
  return BigNumber.from(arg).toString();
}))();

/**
 * util function to check for signer, ripped out of ethers Signer.isProvider
 *
 * @param value possible signer
 * @returns boolean if value is a signer
 * @internal
 */
function isSigner(value) {
  return !!(value && value._isSigner);
}

/**
 * util function to check for provider, ripped out of ethers providers.Provider.isProvider
 *
 * @param value possible provider
 * @returns boolean if value is a provider
 * @internal
 */
function isProvider(value) {
  return !!(value && value._isProvider);
}

const DEFAULT_BATCH_TIME_LIMIT_MS = 50;
const DEFAULT_BATCH_SIZE_LIMIT = 250;
const DEFAULT_BATCH_OPTIONS = {
  timeLimitMs: DEFAULT_BATCH_TIME_LIMIT_MS,
  sizeLimit: DEFAULT_BATCH_SIZE_LIMIT
};
// mostly copied from ethers.js directly but make it a StaticJsonRpcProvider
class StaticJsonRpcBatchProvider extends providers.StaticJsonRpcProvider {
  constructor(url, network) {
    let batchOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : DEFAULT_BATCH_OPTIONS;
    super(url, network);
    this._timeLimitMs = batchOptions.timeLimitMs || DEFAULT_BATCH_SIZE_LIMIT;
    this._sizeLimit = batchOptions.sizeLimit || DEFAULT_BATCH_TIME_LIMIT_MS;
    this._pendingBatchAggregator = null;
    this._pendingBatch = null;
  }
  sendCurrentBatch(request) {
    // if we still have a timeout clear that first
    if (this._pendingBatchAggregator) {
      clearTimeout(this._pendingBatchAggregator);
    }
    // Get the current batch and clear it, so new requests
    // go into the next batch
    const batch = this._pendingBatch || [];
    this._pendingBatch = null;
    this._pendingBatchAggregator = null;

    // Get the request as an array of requests
    const request_ = batch.map(inflight => inflight.request);
    this.emit("debug", {
      action: "requestBatch",
      request: utils.deepCopy(request),
      provider: this
    });
    return utils.fetchJson(this.connection, JSON.stringify(request_)).then(result => {
      this.emit("debug", {
        action: "response",
        request: request_,
        response: result,
        provider: this
      });

      // For each result, feed it to the correct Promise, depending
      // on whether it was a success or error
      batch.forEach((inflightRequest_, index) => {
        const payload = result[index];

        // there may *not* be a payload for a given request (typically RPC error level)
        if (payload) {
          // if there is a payload, check for an error
          if (payload.error) {
            const error = new Error(payload.error.message);
            error.code = payload.error.code;
            error.data = payload.error.data;
            inflightRequest_.reject(error);
          } else {
            // if there's no error resolve the request
            inflightRequest_.resolve(payload.result);
          }
        } else {
          // if there is no payload, reject the request
          inflightRequest_.reject(new Error("No response for request"));
        }
      });
    }, error => {
      this.emit("debug", {
        action: "response",
        error: error,
        request: request_,
        provider: this
      });

      // If there was an error, reject all the requests
      batch.forEach(inflightRequest_ => {
        inflightRequest_.reject(error);
      });
    });
  }
  send(method, params) {
    const request = {
      method: method,
      params: params,
      id: this._nextId++,
      jsonrpc: "2.0"
    };
    if (this._pendingBatch === null) {
      this._pendingBatch = [];
    }
    const inflightRequest = {
      request,
      resolve: null,
      reject: null
    };
    const promise = new Promise((resolve, reject) => {
      inflightRequest.resolve = resolve;
      inflightRequest.reject = reject;
    });
    this._pendingBatch.push(inflightRequest);

    // if we would go *over* the size limit of the batch with this request, send the batch now
    if (this._pendingBatch.length === this._sizeLimit) {
      this.sendCurrentBatch(request);
    }
    if (!this._pendingBatchAggregator) {
      // Schedule batch for next event loop + short duration
      this._pendingBatchAggregator = setTimeout(() => {
        this.sendCurrentBatch(request);
      }, this._timeLimitMs);
    }
    return promise;
  }
}

const ChainInfoInputSchema = /* @__PURE__ */(() => z.object({
  rpc: z.array(z.string().url()),
  chainId: z.number(),
  nativeCurrency: z.object({
    name: z.string(),
    symbol: z.string(),
    decimals: z.number()
  }),
  slug: z.string()
}))();

/**
 * @public
 */
const SDKOptionsSchema = /* @__PURE__ */(() => z.object({
  // @ts-expect-error - zod doesn't know anything about readonly
  supportedChains: z.array(ChainInfoInputSchema).default(defaultChains),
  clientId: z.string().optional(),
  secretKey: z.string().optional(),
  readonlySettings: z.object({
    rpcUrl: z.string().url(),
    chainId: z.number().optional()
  }).optional(),
  gasSettings: z.object({
    maxPriceInGwei: z.number().min(1, "gas price cannot be less than 1").default(300),
    speed: z.enum(["standard", "fast", "fastest"]).default("fastest")
  }).default({
    maxPriceInGwei: 300,
    speed: "fastest"
  }),
  gasless: z.union([z.object({
    openzeppelin: z.object({
      relayerUrl: z.string().url(),
      relayerForwarderAddress: z.string().optional(),
      useEOAForwarder: z.boolean().default(false),
      domainName: z.string().default("GSNv2 Forwarder"),
      domainVersion: z.string().default("0.0.1")
    }),
    experimentalChainlessSupport: z.boolean().default(false)
  }), z.object({
    biconomy: z.object({
      apiId: z.string(),
      apiKey: z.string(),
      deadlineSeconds: z.number().min(1, "deadlineSeconds cannot be les than 1").default(3600)
    })
  })]).optional(),
  gatewayUrls: z.array(z.string()).optional()
}).default({
  gasSettings: {
    maxPriceInGwei: 300,
    speed: "fastest"
  }
}))();

/**
 * @public
 * All these configuration options are optional with sane defaults:
 * @example
 * ```javascript
 * {
 *   readonlySettings: {
 *     rpcUrl, // force read calls to go through your own RPC url
 *     chainId, // reduce RPC calls by sepcifying your chain ID
 *   },
 *   gasSettings: {
 *     maxPriceInGwei, // Maximum gas price for transactions (default 300 gwei)
 *     speed, // the tx speed setting: 'standard'|'fast|'fastest' (default: 'fastest')
 *   },
 *   gasless: {
 *     // By specifying a gasless configuration - all transactions will get forwarded to enable gasless transactions
 *     openzeppelin: {
 *       relayerUrl, // your OZ Defender relayer URL
 *       relayerForwarderAddress, // the OZ defender relayer address (defaults to the standard one)
 *     },
 *     biconomy: {
 *       apiId, // your Biconomy API Id
 *       apiKey, // your Biconomy API Key
 *       deadlineSeconds, // your Biconomy timeout preference
 *     },
 *   },
 * }
 * ```
 */

/**
 * @internal
 */

/**
 * @public
 */

var pkg = {
	name: "@thirdweb-dev/sdk",
	version: "3.10.62",
	description: "The main thirdweb SDK.",
	repository: "https://github.com/thirdweb-dev/js/tree/main/packages/sdk",
	license: "Apache-2.0",
	main: "dist/thirdweb-dev-sdk.cjs.js",
	module: "dist/thirdweb-dev-sdk.esm.js",
	browser: {
		"./dist/thirdweb-dev-sdk.esm.js": "./dist/thirdweb-dev-sdk.browser.esm.js"
	},
	exports: {
		".": {
			module: {
				browser: "./dist/thirdweb-dev-sdk.browser.esm.js",
				"default": "./dist/thirdweb-dev-sdk.esm.js"
			},
			"default": "./dist/thirdweb-dev-sdk.cjs.js"
		},
		"./evm": {
			module: {
				browser: "./evm/dist/thirdweb-dev-sdk-evm.browser.esm.js",
				"default": "./evm/dist/thirdweb-dev-sdk-evm.esm.js"
			},
			"default": "./evm/dist/thirdweb-dev-sdk-evm.cjs.js"
		},
		"./solana": {
			module: {
				browser: "./solana/dist/thirdweb-dev-sdk-solana.browser.esm.js",
				"default": "./solana/dist/thirdweb-dev-sdk-solana.esm.js"
			},
			"default": "./solana/dist/thirdweb-dev-sdk-solana.cjs.js"
		},
		"./evm/zksync": {
			module: {
				browser: "./evm/zksync/dist/thirdweb-dev-sdk-evm-zksync.browser.esm.js",
				"default": "./evm/zksync/dist/thirdweb-dev-sdk-evm-zksync.esm.js"
			},
			"default": "./evm/zksync/dist/thirdweb-dev-sdk-evm-zksync.cjs.js"
		},
		"./evm/functions": {
			module: {
				browser: "./evm/functions/dist/thirdweb-dev-sdk-evm-functions.browser.esm.js",
				"default": "./evm/functions/dist/thirdweb-dev-sdk-evm-functions.esm.js"
			},
			"default": "./evm/functions/dist/thirdweb-dev-sdk-evm-functions.cjs.js"
		},
		"./solana/server": {
			module: {
				browser: "./solana/server/dist/thirdweb-dev-sdk-solana-server.browser.esm.js",
				"default": "./solana/server/dist/thirdweb-dev-sdk-solana-server.esm.js"
			},
			"default": "./solana/server/dist/thirdweb-dev-sdk-solana-server.cjs.js"
		},
		"./package.json": "./package.json"
	},
	files: [
		"dist/",
		"evm/",
		"solana/",
		"server/"
	],
	preconstruct: {
		entrypoints: [
			"index.ts",
			"evm/index.ts",
			"evm/functions/index.ts",
			"evm/zksync/index.ts",
			"solana/index.ts",
			"solana/server/index.ts"
		],
		exports: {
			envConditions: [
				"browser"
			]
		}
	},
	sideEffects: false,
	scripts: {
		format: "prettier --write 'src/**/*'",
		lint: "eslint src/",
		fix: "eslint src/ --fix",
		clean: "rm -rf dist/",
		"generate-docs": "pnpm generate-docs:evm && pnpm generate-docs:solana && pnpm generate-snippets",
		"generate-docs:evm": "api-extractor run --local --config ./config/api-extractor-evm.json && api-documenter markdown -i ./temp -o ./docs/evm && rm -rf ./temp-evm && mv ./temp ./temp-evm",
		"generate-docs:solana": "api-extractor run --local --config ./config/api-extractor-solana.json && api-documenter markdown -i ./temp -o ./docs/solana && rm -rf ./temp-solana && mv ./temp ./temp-solana",
		"generate-snippets": "node ./scripts/generate-snippets.mjs && node ./scripts/generate-feature-snippets-evm.mjs",
		build: "tsc && preconstruct build",
		"test:evm:all": "SWC_NODE_PROJECT=./tsconfig.test.json nyc --reporter lcovonly --report-dir ./coverage/evm mocha --config './test/evm/.mocharc.json' --timeout 90000 --parallel './test/evm/**/*.test.ts'",
		"test:evm": "make test-evm",
		"test:evm:single": "SWC_NODE_PROJECT=./tsconfig.test.json mocha --config './test/evm/.mocharc.json' --timeout 90000",
		"node:solana:start": "DEBUG='amman:(info|error|debug)' amman start --forceClone",
		"node:solana:stop": "amman stop",
		"test:solana:all": "SWC_NODE_PROJECT=./tsconfig.test.json nyc --reporter lcovonly --report-dir ./coverage/solana  mocha --config './test/solana/.mocharc.json' --timeout 30000 --parallel './test/solana/**/*.test.ts'",
		"test:solana": "make test-sol",
		"test:solana:single": "SWC_NODE_PROJECT=./tsconfig.test.json mocha --config './test/solana/.mocharc.json' --timeout 30000",
		push: "yalc push"
	},
	devDependencies: {
		"@aws-sdk/client-secrets-manager": "^3.378.0",
		"@ethersproject/abstract-provider": "^5.7.0",
		"@metaplex-foundation/amman": "^0.12.1",
		"@metaplex-foundation/amman-client": "^0.2.4",
		"@metaplex-foundation/js": "^0.19.2",
		"@metaplex-foundation/mpl-token-metadata": "^2.12.0",
		"@microsoft/api-documenter": "^7.22.30",
		"@microsoft/api-extractor": "^7.36.3",
		"@microsoft/tsdoc": "^0.14.1",
		"@nomiclabs/hardhat-ethers": "^2.2.3",
		"@preconstruct/cli": "2.7.0",
		"@project-serum/anchor": "^0.25.0",
		"@solana/spl-token": "^0.3.5",
		"@solana/web3.js": "^1.62.0",
		"@swc-node/register": "^1.6.6",
		"@swc/core": "^1.3.71",
		"@thirdweb-dev/tsconfig": "workspace:*",
		"@types/bn.js": "^5.1.1",
		"@types/chai": "^4.3.5",
		"@types/deep-equal-in-any-order": "^1.0.1",
		"@types/mocha": "^10.0.0",
		"@types/node": "^18.17.1",
		"@types/uuid": "^9.0.2",
		"@typescript-eslint/eslint-plugin": "^6.2.0",
		"@typescript-eslint/parser": "^6.2.0",
		chai: "^4.3.6",
		"deep-equal-in-any-order": "^1.1.18",
		"dotenv-mono": "^1.3.10",
		eslint: "^8.45.0",
		"eslint-config-prettier": "^8.9.0",
		"eslint-config-thirdweb": "workspace:*",
		"eslint-plugin-better-tree-shaking": "0.0.3",
		"eslint-plugin-import": "^2.26.0",
		"eslint-plugin-inclusive-language": "^2.2.0",
		"eslint-plugin-prettier": "^5.0.0",
		"eslint-plugin-tsdoc": "^0.2.16",
		ethers: "^5.7.2",
		"ethers-aws-kms-signer": "^1.3.2",
		hardhat: "^2.17.0",
		mocha: "^10.2.0",
		nyc: "^15.1.0",
		prettier: "^3.0.0",
		typescript: "^5.1.6",
		"zksync-web3": "^0.14.3"
	},
	peerDependencies: {
		"@aws-sdk/client-secrets-manager": "^3.215.0",
		"@metaplex-foundation/js": "^0.17.6",
		"@metaplex-foundation/mpl-token-metadata": "^2.3.3",
		"@project-serum/anchor": "^0.25.0",
		"@solana/spl-token": "^0.3.5",
		"@solana/web3.js": "^1.62.0",
		ethers: "^5",
		"ethers-aws-kms-signer": "^1.3.2",
		"zksync-web3": "^0.14.3"
	},
	peerDependenciesMeta: {
		"@aws-sdk/client-secrets-manager": {
			optional: true
		},
		"ethers-aws-kms-signer": {
			optional: true
		},
		"@solana/spl-token": {
			optional: true
		},
		"@solana/web3.js": {
			optional: true
		},
		"@project-serum/anchor": {
			optional: true
		},
		"@metaplex-foundation/mpl-token-metadata": {
			optional: true
		},
		"@metaplex-foundation/js": {
			optional: true
		},
		"zksync-web3": {
			optional: true
		}
	},
	dependencies: {
		"@thirdweb-dev/chains": "workspace:*",
		"@thirdweb-dev/contracts-js": "workspace:*",
		"@thirdweb-dev/generated-abis": "workspace:*",
		"@thirdweb-dev/storage": "workspace:*",
		abitype: "^0.2.5",
		"bn.js": "^5.2.1",
		bs58: "^5.0.0",
		buffer: "^6.0.3",
		"cross-fetch": "^3.1.8",
		eventemitter3: "^5.0.1",
		"fast-deep-equal": "^3.1.3",
		merkletreejs: "^0.2.24",
		"tiny-invariant": "^1.2.0",
		tweetnacl: "^1.0.3",
		uuid: "^9.0.0",
		yaml: "^2.3.1",
		zod: "^3.20.2"
	},
	bugs: {
		url: "https://github.com/thirdweb-dev/js/issues"
	},
	author: "thirdweb eng <eng@thirdweb.com>"
};

/**
 * @internal
 */
function buildDefaultMap(options) {
  return options.supportedChains.reduce((previousValue, currentValue) => {
    previousValue[currentValue.chainId] = currentValue;
    return previousValue;
  }, {});
}

/**
 * Get an ethers provider for the specified network
 *
 * @internal
 */
function getChainProvider(network, sdkOptions) {
  // If we have an RPC URL, use that for the provider
  if (typeof network === "string" && isRpcUrl(network)) {
    return getProviderFromRpcUrl(network, sdkOptions);
  }

  // Add the chain to the supportedChains
  const options = SDKOptionsSchema.parse(sdkOptions);
  if (isChainConfig(network)) {
    options.supportedChains = [
    // @ts-expect-error - we know this is a chain and it will work to build the map
    network, ...options.supportedChains.filter(c => c.chainId !== network.chainId)];
  }

  // Build a map of chainId -> ChainInfo based on the supportedChains
  const rpcMap = buildDefaultMap(options);
  let rpcUrl = "";
  let chainId;
  try {
    // Resolve the chain id from the network, which could be a chain, chain name, or chain id
    chainId = getChainIdFromNetwork(network, options);
    // Attempt to get the RPC url from the map based on the chainId
    rpcUrl = getValidChainRPCs(rpcMap[chainId], options.clientId)[0];
  } catch (e) {
    // no-op
  }

  // if we still don't have an url fall back to just using the chainId or slug in the rpc and try that
  if (!rpcUrl) {
    rpcUrl = `https://${chainId || network}.rpc.thirdweb.com/${options.clientId || ""}`;
  }
  if (!rpcUrl) {
    throw new Error(`No rpc url found for chain ${network}. Please provide a valid rpc url via the 'supportedChains' property of the sdk options.`);
  }
  return getProviderFromRpcUrl(rpcUrl, sdkOptions, chainId);
}
function getChainIdFromNetwork(network, options) {
  if (isChainConfig(network)) {
    // If it's a chain just return the chain id
    return network.chainId;
  } else if (typeof network === "number") {
    // If it's a number (chainId) return it directly
    return network;
  } else {
    // If it's a string (chain name) return the chain id from the map
    const chainNameToId = options.supportedChains.reduce((acc, curr) => {
      acc[curr.slug] = curr.chainId;
      return acc;
    }, {});
    if (network in chainNameToId) {
      return chainNameToId[network];
    }
  }
  throw new Error(`Cannot resolve chainId from: ${network} - please pass the chainId instead and specify it in the 'supportedChains' property of the SDK options.`);
}
async function getChainIdOrName(network) {
  if (isChainConfig(network)) {
    // If it's a chain just return the chain id
    return network.chainId;
  } else if (typeof network === "number") {
    // If it's a number (chainId) return it directly
    return network;
  } else if (typeof network === "number") {
    // If it's a string (chain name) return the chain id from the map
    return network;
  } else if (isProvider(network)) {
    return network.getNetwork().then(n => n.chainId);
  } else if (isSigner(network)) {
    if (!network.provider) {
      throw new Error("Signer does not have a provider");
    }
    return network.provider.getNetwork().then(n => n.chainId);
  }
  throw new Error(`Cannot resolve chainId from: ${network}.`);
}

/**
 * Check whether a NetworkInput value is a Chain config (naively, without parsing)
 */
function isChainConfig(network) {
  return typeof network !== "string" && typeof network !== "number" && !isSigner(network) && !isProvider(network);
}

/**
 * Returns whether the specified url is a valid RPC url, as implemented by ethers.getDefaultProvier():
 * - https://github.com/ethers-io/ethers.js/blob/ec1b9583039a14a0e0fa15d0a2a6082a2f41cf5b/packages/providers/src.ts/index.ts#L55
 *
 * @param url - The url to check
 *
 * @internal
 */
function isRpcUrl(url) {
  const match = url.match(/^(ws|http)s?:/i);
  if (match) {
    switch (match[1].toLowerCase()) {
      case "http":
      case "https":
      case "ws":
      case "wss":
        return true;
    }
  }
  return false;
}
const RPC_PROVIDER_MAP = new Map();

/**
 * Get an ethers provider based on the specified RPC URL
 *
 * @param rpcUrl - The RPC URL
 * @param chainId - The optional chain ID
 * @returns The provider for the specified RPC URL
 *
 * @internal
 */
function getProviderFromRpcUrl(rpcUrl, sdkOptions, chainId) {
  try {
    const headers = {};
    // will be used to make sure we don't cache providers with different auth strategies
    let authStrategy = "none";
    if (isTwUrl(rpcUrl)) {
      // if we have a secret key passed in the SDK options we want to always use that
      if (sdkOptions?.secretKey) {
        // compute the clientId from the secret key
        // should only be used on Node.js in a backend/script context
        if ("object" !== "undefined") {
          throw new Error("Cannot use secretKey in browser context");
        }
        // this is on purpose because we're using the crypto module only in node
        // try to trick webpack :)
        const pto = "pto";
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const crypto = require("cry" + pto);
        const hashedSecretKey = crypto.createHash("sha256").update(sdkOptions.secretKey).digest("hex");
        const derivedClientId = hashedSecretKey.slice(0, 32);
        const utilizedRpcUrl = new URL(rpcUrl);
        // always set the clientId on the path to the derived client id
        utilizedRpcUrl.pathname = derivedClientId;
        // set the headers
        headers["x-client-id"] = derivedClientId;
        headers["x-secret-key"] = sdkOptions.secretKey;
        // set the final rpc url
        rpcUrl = utilizedRpcUrl.toString();
        authStrategy = "secretKey";
      }
      // if we do NOT have a secret key but we have a client id we want to use that
      else if (sdkOptions?.clientId) {
        const utilizedRpcUrl = new URL(rpcUrl);
        // always set the clientId on the path to the client id
        utilizedRpcUrl.pathname = sdkOptions.clientId;
        // set the headers
        headers["x-client-id"] = sdkOptions.clientId;
        // set the final rpc url
        rpcUrl = utilizedRpcUrl.toString();
        authStrategy = "clientId";
      }

      // if we *also* have a tw auth token on global context add it to the headers (in addition to anything else)
      if (typeof globalThis !== "undefined" && "TW_AUTH_TOKEN" in globalThis && typeof globalThis.TW_AUTH_TOKEN === "string") {
        headers["authorization"] = `Bearer ${globalThis.TW_AUTH_TOKEN}`;
        authStrategy = "twAuthToken";
      }
      if (typeof globalThis !== "undefined" && "TW_CLI_AUTH_TOKEN" in globalThis && typeof globalThis.TW_CLI_AUTH_TOKEN === "string") {
        headers["x-authorize-wallet"] = "true";
      }
      const bundleId = typeof globalThis !== "undefined" && "APP_BUNDLE_ID" in globalThis ? globalThis.APP_BUNDLE_ID : undefined;
      if (!rpcUrl.includes("bundleId")) {
        rpcUrl = rpcUrl + (bundleId ? `?bundleId=${bundleId}` : "");
      }
      headers["x-sdk-version"] = pkg.version;
      headers["x-sdk-name"] = pkg.name;
      headers["x-sdk-platform"] = bundleId ? "react-native" : isBrowser$1() ? "browser" : "node";
    }
    const match = rpcUrl.match(/^(ws|http)s?:/i);
    // Try the JSON batch provider if available
    if (match) {
      switch (match[1].toLowerCase()) {
        case "http":
        case "https":
          // Create a unique cache key for these params
          const seralizedOpts = `${rpcUrl}-${chainId || -1}-${authStrategy}`;

          // Check if we have a provider in our cache already
          const existingProvider = RPC_PROVIDER_MAP.get(seralizedOpts);
          if (existingProvider) {
            return existingProvider;
          }

          // Otherwise, create a new provider on the specific network
          const newProvider = chainId ?
          // If we know the chainId we should use the StaticJsonRpcBatchProvider
          new StaticJsonRpcBatchProvider({
            url: rpcUrl,
            headers
          }, chainId) :
          // Otherwise fall back to the built in json rpc batch provider
          new providers.JsonRpcBatchProvider({
            url: rpcUrl,
            headers
          });

          // Save the provider in our cache
          RPC_PROVIDER_MAP.set(seralizedOpts, newProvider);
          return newProvider;
        case "ws":
        case "wss":
          // Use the WebSocketProvider for ws:// URLs
          // TODO: handle auth for WS at some point
          return new providers.WebSocketProvider(rpcUrl, chainId);
      }
    }
  } catch (e) {
    // no-op
  }

  // Always fallback to the default provider if no other option worked
  return providers.getDefaultProvider(rpcUrl);
}

// TODO move to utils package
function isTwUrl(url) {
  return new URL(url).hostname.endsWith(".thirdweb.com");
}

/**
 * @internal
 */
function getSignerAndProvider(network, options) {
  let signer;
  let provider;
  if (isSigner(network)) {
    // Here, we have an ethers.Signer
    signer = network;
    if (network.provider) {
      provider = network.provider;
    }
  } else if (isProvider(network)) {
    // Here, we have an ethers.providers.Provider
    provider = network;
  } else {
    // Here, we must have a ChainOrRpcUrl, which is a chain name, chain id, rpc url, or chain config
    // All of which, getChainProvider can handle for us
    provider = getChainProvider(network, options);
  }
  if (options?.readonlySettings) {
    // If readonly settings are specified, then overwrite the provider
    provider = getProviderFromRpcUrl(options.readonlySettings.rpcUrl, options, options.readonlySettings.chainId);
  }

  // At this point, if we don't have a provider, don't default to a random chain
  // Instead, just throw an error
  if (!provider) {
    if (signer) {
      throw new Error("No provider passed to the SDK! Please make sure that your signer is connected to a provider!");
    }
    throw new Error("No provider found! Make sure to specify which network to connect to, or pass a signer or provider to the SDK!");
  }
  return [signer, provider];
}

// TODO: Respect SDK RPC configuration and don't pull straight from ethers
let provider;
const ENS_CACHE = new Map();
async function resolveEns(ens) {
  let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  if (!provider) {
    // if we don't already have a provider then get one
    provider = getSignerAndProvider("ethereum")[1];
  }
  let ensPromise;
  if (ENS_CACHE.has(ens)) {
    ensPromise = ENS_CACHE.get(ens);
  } else {
    ensPromise = provider.resolveName(ens).then(address => {
      // If they don't have an ENS, only cache for 30s
      if (!address) {
        return {
          address: null,
          expirationTime: new Date(Date.now() + 1000 * 30)
        };
      }

      // Cache ENS for 1 hour
      return {
        address,
        expirationTime: new Date(Date.now() + 1000 * 60 * 5)
      };
    });
  }
  const resolvedPromise = await ensPromise;
  if (resolvedPromise.expirationTime < new Date()) {
    // delete the cache if it's expired
    ENS_CACHE.delete(ens);
    // then call ourselves again to refresh the cache, but don't block on the result
    if (depth === 0) {
      resolveEns(ens, depth + 1);
    }
  }
  return resolvedPromise.address;
}

// Only pass through to provider call if value ends with .eth or .cb.id
const EnsSchema = /* @__PURE__ */(() => z.custom(ens => typeof ens === "string" && (ens.endsWith(".eth") || ens.endsWith(".cb.id"))).transform(async ens => resolveEns(ens)).refine(address => !!address && utils.isAddress(address), {
  message: "Provided value was not a valid ENS name"
}))();

const AddressSchema = /* @__PURE__ */z.custom(address => typeof address === "string" && utils.isAddress(address), out => {
  return {
    message: `${out} is not a valid address`
  };
});

// Important for address check to come before ENS so network request is only made when necessary
const AddressOrEnsSchema = /* @__PURE__ */z.union([AddressSchema, EnsSchema], {
  invalid_type_error: "Provided value was not a valid address or ENS name"
});

// Use this everywhere even though it's just string so we can optionally switch it out
// more easily if we want to later

/**
 * @public
 */
let ChainId = /*#__PURE__*/function (ChainId) {
  ChainId[ChainId["Mainnet"] = 1] = "Mainnet";
  ChainId[ChainId["Goerli"] = 5] = "Goerli";
  ChainId[ChainId["Polygon"] = 137] = "Polygon";
  ChainId[ChainId["Mumbai"] = 80001] = "Mumbai";
  ChainId[ChainId["Localhost"] = 1337] = "Localhost";
  ChainId[ChainId["Hardhat"] = 31337] = "Hardhat";
  ChainId[ChainId["Fantom"] = 250] = "Fantom";
  ChainId[ChainId["FantomTestnet"] = 4002] = "FantomTestnet";
  ChainId[ChainId["Avalanche"] = 43114] = "Avalanche";
  ChainId[ChainId["AvalancheFujiTestnet"] = 43113] = "AvalancheFujiTestnet";
  ChainId[ChainId["Optimism"] = 10] = "Optimism";
  ChainId[ChainId["OptimismGoerli"] = 420] = "OptimismGoerli";
  ChainId[ChainId["Arbitrum"] = 42161] = "Arbitrum";
  ChainId[ChainId["ArbitrumGoerli"] = 421613] = "ArbitrumGoerli";
  ChainId[ChainId["BinanceSmartChainMainnet"] = 56] = "BinanceSmartChainMainnet";
  ChainId[ChainId["BinanceSmartChainTestnet"] = 97] = "BinanceSmartChainTestnet";
  return ChainId;
}({});

// @ts-expect-error - readonly vs not
let supportedChains = defaultChains;

/**
 * @internal
 */
function setSupportedChains(chains) {
  if (chains && chains.length > 0) {
    supportedChains = chains;
  } else {
    // @ts-expect-error - readonly vs not
    supportedChains = defaultChains;
  }
}

/**
 * @internal
 */
function getSupportedChains() {
  return supportedChains;
}

/**
 * @public
 */
const NATIVE_TOKEN_ADDRESS = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";

/**
 * @public
 */
const NATIVE_TOKENS = {
  [ChainId.Mainnet]: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    wrapped: {
      address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  [ChainId.Goerli]: {
    name: "Görli Ether",
    symbol: "GOR",
    decimals: 18,
    wrapped: {
      address: "0xb4fbf271143f4fbf7b91a5ded31805e42b2208d6",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  11155111: {
    name: "Sepolia Ether",
    symbol: "SEP",
    decimals: 18,
    wrapped: {
      address: "0x7b79995e5f793A07Bc00c21412e50Ecae098E7f9",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  [ChainId.Polygon]: {
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    wrapped: {
      address: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
      name: "Wrapped Matic",
      symbol: "WMATIC"
    }
  },
  [ChainId.Mumbai]: {
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
    wrapped: {
      address: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
      name: "Wrapped Matic",
      symbol: "WMATIC"
    }
  },
  [ChainId.Avalanche]: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
    wrapped: {
      address: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7",
      name: "Wrapped AVAX",
      symbol: "WAVAX"
    }
  },
  [ChainId.AvalancheFujiTestnet]: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
    wrapped: {
      address: "0xd00ae08403B9bbb9124bB305C09058E32C39A48c",
      name: "Wrapped AVAX",
      symbol: "WAVAX"
    }
  },
  [ChainId.Fantom]: {
    name: "Fantom",
    symbol: "FTM",
    decimals: 18,
    wrapped: {
      address: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
      name: "Wrapped Fantom",
      symbol: "WFTM"
    }
  },
  [ChainId.FantomTestnet]: {
    name: "Fantom",
    symbol: "FTM",
    decimals: 18,
    wrapped: {
      address: "0xf1277d1Ed8AD466beddF92ef448A132661956621",
      name: "Wrapped Fantom",
      symbol: "WFTM"
    }
  },
  [ChainId.Arbitrum]: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    wrapped: {
      address: "0x82af49447d8a07e3bd95bd0d56f35241523fbab1",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  [ChainId.ArbitrumGoerli]: {
    name: "Arbitrum Goerli Ether",
    symbol: "AGOR",
    decimals: 18,
    wrapped: {
      address: "0xe39Ab88f8A4777030A534146A9Ca3B52bd5D43A3",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  [ChainId.Optimism]: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    wrapped: {
      address: "0x4200000000000000000000000000000000000006",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  [ChainId.OptimismGoerli]: {
    name: "Goerli Ether",
    symbol: "ETH",
    decimals: 18,
    wrapped: {
      address: "0x4200000000000000000000000000000000000006",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  [ChainId.BinanceSmartChainMainnet]: {
    name: "Binance Chain Native Token",
    symbol: "BNB",
    decimals: 18,
    wrapped: {
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      name: "Wrapped Binance Chain Token",
      symbol: "WBNB"
    }
  },
  [ChainId.BinanceSmartChainTestnet]: {
    name: "Binance Chain Native Token",
    symbol: "TBNB",
    decimals: 18,
    wrapped: {
      address: "0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd",
      name: "Wrapped Binance Chain Testnet Token",
      symbol: "WBNB"
    }
  },
  [ChainId.Hardhat]: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    wrapped: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  [ChainId.Localhost]: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    wrapped: {
      address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  84531: {
    name: "Base Goerli Testnet",
    symbol: "ETH",
    decimals: 18,
    wrapped: {
      address: "0x4200000000000000000000000000000000000006",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  },
  // eslint-disable-next-line no-useless-computed-key
  [280]: {
    name: "zkSync Era Testnet",
    symbol: "ETH",
    decimals: 18,
    wrapped: {
      address: "0x5AEa5775959fBC2557Cc8789bC1bf90A239D9a91",
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  }
};

/**
 * Returns the native token for a given chain
 * @param chainId - the chain id
 * @public
 */
function getNativeTokenByChainId(chainId) {
  const chain = getSupportedChains().find(c => c.chainId === chainId);
  if (chain && chain.nativeCurrency) {
    return {
      name: chain.nativeCurrency.name,
      symbol: chain.nativeCurrency.symbol,
      decimals: 18,
      wrapped: {
        address: constants.AddressZero,
        name: `Wrapped ${chain.nativeCurrency.name}`,
        symbol: `W${chain.nativeCurrency.symbol}`
      }
    };
  }
  return NATIVE_TOKENS[chainId] || {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
    wrapped: {
      address: constants.AddressZero,
      name: "Wrapped Ether",
      symbol: "WETH"
    }
  };
}
const LINK_TOKEN_ADDRESS = {
  [ChainId.Mainnet]: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
  [ChainId.Goerli]: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
  [ChainId.BinanceSmartChainMainnet]: "0x404460C6A5EdE2D891e8297795264fDe62ADBB75",
  [ChainId.Polygon]: "0xb0897686c545045aFc77CF20eC7A532E3120E0F1",
  [ChainId.Mumbai]: "0x326C977E6efc84E512bB9C30f76E30c160eD06FB",
  [ChainId.Avalanche]: "0x5947BB275c521040051D82396192181b413227A3",
  [ChainId.AvalancheFujiTestnet]: "0x0b9d5D9136855f6FEc3c0993feE6E9CE8a297846",
  [ChainId.Fantom]: "0x6F43FF82CCA38001B6699a8AC47A2d0E66939407",
  [ChainId.FantomTestnet]: "0xfaFedb041c0DD4fA2Dc0d87a6B0979Ee6FA7af5F"
};

const RawDateSchema = /* @__PURE__ */(() => z.union([z.date().transform(i => {
  return BigNumber.from(Math.floor(i.getTime() / 1000));
}), z.number().transform(i => {
  return BigNumber.from(i);
})]))();

/**
 * Default to now
 */
const StartDateSchema = /* @__PURE__ */(() => RawDateSchema.default(new Date(0)))();

/**
 * Default to 10 years from now
 */
const EndDateSchema = /* @__PURE__ */(() => RawDateSchema.default(new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 10)))();

/**
 * @internal
 */
const CurrencySchema = /* @__PURE__ */(() => z.object({
  name: z.string(),
  symbol: z.string(),
  decimals: z.number()
}))();

/**
 * @internal
 */
const CurrencyValueSchema = /* @__PURE__ */(() => CurrencySchema.extend({
  value: BigNumberSchema,
  displayValue: z.string()
}))();

/**
 * @internal
 */
const MerkleSchema = /* @__PURE__ */(() => z.object({
  merkle: z.record(z.string()).default({})
}))();
const SnapshotEntryInput = /* @__PURE__ */(() => z.object({
  address: AddressOrEnsSchema,
  maxClaimable: QuantitySchema.default(0),
  // defaults to 0
  price: QuantitySchema.optional(),
  // defaults to unlimited, but can be undefined in old snapshots
  currencyAddress: AddressOrEnsSchema.default(constants.AddressZero).optional() // defaults to AddressZero, but can be undefined for old snapshots
}))();

/**
 * @internal
 */
const SnapshotInputSchema = /* @__PURE__ */(() => z.union([z.array(z.string()).transform(async strings => await Promise.all(strings.map(address => SnapshotEntryInput.parseAsync({
  address
})))), z.array(SnapshotEntryInput)]))();
const SnapshotEntryWithProofSchema = /* @__PURE__ */(() => SnapshotEntryInput.extend({
  proof: z.array(z.string())
}))();

/**
 * @internal
 */
const SnapshotSchema = /* @__PURE__ */(() => z.object({
  /**
   * The merkle root
   */
  merkleRoot: z.string(),
  claims: z.array(SnapshotEntryWithProofSchema)
}))();

/**
 * @internal
 */

/**
 * @internal
 */
const SnapshotInfoSchema = /* @__PURE__ */(() => z.object({
  merkleRoot: z.string(),
  snapshotUri: z.string()
}))();

/**
 * @internal
 */
const ClaimConditionMetadataSchema = /* @__PURE__ */(() => z.object({
  name: z.string().optional()
}).catchall(z.unknown()))();

/**
 * @internal
 */
const ClaimConditionInputSchema = /* @__PURE__ */(() => z.object({
  startTime: StartDateSchema,
  currencyAddress: z.string().default(NATIVE_TOKEN_ADDRESS),
  price: AmountSchema.default(0),
  maxClaimableSupply: QuantitySchema,
  maxClaimablePerWallet: QuantitySchema,
  waitInSeconds: BigNumberishSchema.default(0),
  merkleRootHash: BytesLikeSchema.default(utils.hexZeroPad([0], 32)),
  snapshot: z.optional(SnapshotInputSchema).nullable(),
  metadata: ClaimConditionMetadataSchema.optional()
}))();

/**
 * @internal
 */
const ClaimConditionInputArray = /* @__PURE__ */z.array(ClaimConditionInputSchema);

/**
 * @internal
 */
const PartialClaimConditionInputSchema = /* @__PURE__ */ClaimConditionInputSchema.partial();

/**
 * @internal
 */
const ClaimConditionOutputSchema = /* @__PURE__ */(() => ClaimConditionInputSchema.extend({
  availableSupply: QuantitySchema,
  currentMintSupply: QuantitySchema,
  currencyMetadata: CurrencyValueSchema.default({
    value: BigNumber.from("0"),
    displayValue: "0",
    symbol: "",
    decimals: 18,
    name: ""
  }),
  price: BigNumberSchema,
  waitInSeconds: BigNumberSchema,
  startTime: BigNumberSchema.transform(n => new Date(n.toNumber() * 1000)),
  snapshot: SnapshotInputSchema.optional().nullable()
}))();

function resolveOrGenerateId(requestUId) {
  if (requestUId === undefined) {
    const buffer = Buffer.alloc(16);
    v4({}, buffer);
    return utils.hexlify(utils.toUtf8Bytes(buffer.toString("hex")));
  } else {
    return utils.hexlify(requestUId);
  }
}

/**
 * @internal
 */
const BaseSignaturePayloadInput = /* @__PURE__ */(() => z.object({
  to: AddressOrEnsSchema.refine(address => address.toLowerCase() !== constants.AddressZero, {
    message: "Cannot create payload to mint to zero address"
  }),
  price: AmountSchema.default(0),
  currencyAddress: AddressSchema.default(NATIVE_TOKEN_ADDRESS),
  mintStartTime: StartDateSchema,
  mintEndTime: EndDateSchema,
  uid: z.string().optional().transform(arg => resolveOrGenerateId(arg)),
  primarySaleRecipient: AddressOrEnsSchema.default(constants.AddressZero)
}))();

/**
 * @internal
 */
const Signature20PayloadInput = /* @__PURE__ */BaseSignaturePayloadInput.extend({
  quantity: AmountSchema
});

/**
 * @internal
 */
const Signature20PayloadOutput = /* @__PURE__ */Signature20PayloadInput.extend({
  mintStartTime: BigNumberSchema,
  mintEndTime: BigNumberSchema
});

/**
 * @internal
 */
const Signature721PayloadInput = /* @__PURE__ */(() => BaseSignaturePayloadInput.extend({
  metadata: NFTInputOrUriSchema,
  royaltyRecipient: z.string().default(constants.AddressZero),
  royaltyBps: BasisPointsSchema.default(0)
}))();

/**
 * @internal
 */
const Signature721PayloadOutput = /* @__PURE__ */(() => Signature721PayloadInput.extend({
  metadata: NFTInputOrUriSchema.default(""),
  uri: z.string(),
  royaltyBps: BigNumberSchema,
  mintStartTime: BigNumberSchema,
  mintEndTime: BigNumberSchema
}))();

/**
 * @internal
 */
const Signature1155PayloadInput = /* @__PURE__ */(() => Signature721PayloadInput.extend({
  metadata: NFTInputOrUriSchema.default(""),
  quantity: BigNumberishSchema
}))();

/**
 * @internal
 */
const Signature1155PayloadInputWithTokenId = /* @__PURE__ */Signature1155PayloadInput.extend({
  tokenId: BigNumberishSchema
});

/**
 * @internal
 */
const Signature1155PayloadOutput = /* @__PURE__ */Signature721PayloadOutput.extend({
  tokenId: BigNumberSchema,
  quantity: BigNumberSchema
});

/**
 * @internal
 */
const Signature721WithQuantityInput = /* @__PURE__ */(() => Signature721PayloadInput.extend({
  metadata: NFTInputOrUriSchema.default(""),
  quantity: BigNumberSchema.default(1)
}))();

/**
 * @internal
 */
const Signature721WithQuantityOutput = /* @__PURE__ */(() => Signature721PayloadOutput.extend({
  quantity: BigNumberSchema.default(1)
}))();

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

const MintRequest20 = [{
  name: "to",
  type: "address"
}, {
  name: "primarySaleRecipient",
  type: "address"
}, {
  name: "quantity",
  type: "uint256"
}, {
  name: "price",
  type: "uint256"
}, {
  name: "currency",
  type: "address"
}, {
  name: "validityStartTimestamp",
  type: "uint128"
}, {
  name: "validityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];
const MintRequest721 = [{
  name: "to",
  type: "address"
}, {
  name: "royaltyRecipient",
  type: "address"
}, {
  name: "royaltyBps",
  type: "uint256"
}, {
  name: "primarySaleRecipient",
  type: "address"
}, {
  name: "uri",
  type: "string"
}, {
  name: "price",
  type: "uint256"
}, {
  name: "currency",
  type: "address"
}, {
  name: "validityStartTimestamp",
  type: "uint128"
}, {
  name: "validityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];
const MintRequest1155 = [{
  name: "to",
  type: "address"
}, {
  name: "royaltyRecipient",
  type: "address"
}, {
  name: "royaltyBps",
  type: "uint256"
}, {
  name: "primarySaleRecipient",
  type: "address"
}, {
  name: "tokenId",
  type: "uint256"
}, {
  name: "uri",
  type: "string"
}, {
  name: "quantity",
  type: "uint256"
}, {
  name: "pricePerToken",
  type: "uint256"
}, {
  name: "currency",
  type: "address"
}, {
  name: "validityStartTimestamp",
  type: "uint128"
}, {
  name: "validityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];
const MintRequest721withQuantity = [{
  name: "to",
  type: "address"
}, {
  name: "royaltyRecipient",
  type: "address"
}, {
  name: "royaltyBps",
  type: "uint256"
}, {
  name: "primarySaleRecipient",
  type: "address"
}, {
  name: "uri",
  type: "string"
}, {
  name: "quantity",
  type: "uint256"
}, {
  name: "pricePerToken",
  type: "uint256"
}, {
  name: "currency",
  type: "address"
}, {
  name: "validityStartTimestamp",
  type: "uint128"
}, {
  name: "validityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];
const GenericRequest = [{
  name: "validityStartTimestamp",
  type: "uint128"
}, {
  name: "validityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}, {
  name: "data",
  type: "bytes"
}];

/**
 * @internal
 */
const CommonContractSchema = /* @__PURE__ */(() => z.object({
  name: z.string(),
  description: z.string().optional(),
  image: FileOrBufferOrStringSchema.optional(),
  external_link: z.string().optional(),
  app_uri: z.string().optional(),
  social_urls: z.record(z.string()).optional()
}))();
/**
 * @internal
 */
const CommonContractOutputSchema = /* @__PURE__ */(() => CommonContractSchema.extend({
  image: z.string().optional()
}).catchall(z.unknown()))();

/**
 * @internal
 */
const CommonRoyaltySchema = /* @__PURE__ */(() => z.object({
  /**
   * The amount of royalty collected on all royalties represented as basis points.
   * The default is 0 (no royalties).
   *
   * 1 basis point = 0.01%
   *
   * For example: if this value is 100, then the royalty is 1% of the total sales.
   *
   *  @internalremarks used by OpenSea "seller_fee_basis_points"
   */
  seller_fee_basis_points: BasisPointsSchema.default(0),
  /**
   * The address of the royalty recipient. All royalties will be sent
   * to this address.
   * @internalremarks used by OpenSea "fee_recipient"
   */
  fee_recipient: AddressOrEnsSchema.default(constants.AddressZero)
}))();

/**
 * @internal
 */
const CommonPrimarySaleSchema = /* @__PURE__ */z.object({
  /**
   * primary sale recipient address
   */
  primary_sale_recipient: AddressOrEnsSchema
});

/**
 * @internal
 */
const CommonPlatformFeeSchema = /* @__PURE__ */(() => z.object({
  /**
   * platform fee basis points
   */
  platform_fee_basis_points: BasisPointsSchema.default(0),
  /**
   * platform fee recipient address
   */
  platform_fee_recipient: AddressOrEnsSchema.default(constants.AddressZero)
}))();

/**
 * @internal
 */
const CommonTrustedForwarderSchema = /* @__PURE__ */(() => z.object({
  trusted_forwarders: z.array(AddressOrEnsSchema).default([])
}))();

/**
 * @internal
 */
const CommonSymbolSchema = /* @__PURE__ */(() => z.object({
  symbol: z.string().default("")
}))();

/**
 * @internal
 */
const BYOCContractMetadataSchema = /* @__PURE__ */(() => CommonContractSchema.catchall(z.union([BigNumberTransformSchema, z.unknown()])))();

/**
 * @internal
 */

/**
 * @internal
 */
const CustomContractInput = /* @__PURE__ */(() => BYOCContractMetadataSchema.merge(CommonRoyaltySchema.merge(MerkleSchema).merge(CommonSymbolSchema).partial()).catchall(z.any()))();

/**
 * @internal
 */
const CustomContractOutput = /* @__PURE__ */(() => CommonContractOutputSchema.merge(CommonRoyaltySchema.merge(MerkleSchema).merge(CommonSymbolSchema).partial()).catchall(z.any()))();

/**
 * @internal
 */
const CustomContractDeploy = /* @__PURE__ */(() => CustomContractInput.merge(CommonPlatformFeeSchema.merge(CommonPrimarySaleSchema).merge(CommonTrustedForwarderSchema).partial()))();

/**
 * @internal
 */
const CustomContractSchema = {
  deploy: CustomContractDeploy,
  output: CustomContractOutput,
  input: CustomContractInput
};

/**
 * @internal
 */
const AbiTypeBaseSchema = /* @__PURE__ */(() => z.object({
  type: z.string(),
  name: z.string().default("")
}).catchall(z.any()))();

/**
 * @internal
 */
const AbiTypeSchema = /* @__PURE__ */(() => AbiTypeBaseSchema.extend({
  stateMutability: z.string().optional(),
  components: z.array(AbiTypeBaseSchema).optional()
}).catchall(z.any()))();

/**
 * @internal
 */
const AbiObjectSchema = /* @__PURE__ */(() => z.object({
  type: z.string(),
  name: z.string().default(""),
  inputs: z.array(AbiTypeSchema).default([]),
  outputs: z.array(AbiTypeSchema).default([])
}).catchall(z.any()))();

/**
 * @internal
 */
const AbiSchema = /* @__PURE__ */z.array(AbiObjectSchema);
// if we want to statically type this for external usage it has to *awlways* be the output type

// input type is only used internally
/**
 * @internal
 */
/**
 * @internal
 */
const PreDeployMetadata = /* @__PURE__ */(() => z.object({
  name: z.string(),
  metadataUri: z.string(),
  bytecodeUri: z.string(),
  analytics: z.any().optional()
}).catchall(z.any()))();

/**
 * @internal
 */
const ChainIdToAddressSchema = /* @__PURE__ */(() => z.record(z.string(), z.string()))();

/**
 * @internal
 */
const CustomFactoryInput = /* @__PURE__ */(() => z.object({
  factoryFunction: z.string(),
  params: z.array(z.object({
    name: z.string(),
    type: z.string()
  })).default([]),
  customFactoryAddresses: ChainIdToAddressSchema
}))();

/**
 * @internal
 */
const FactoryDeploymentSchema = /* @__PURE__ */(() => z.object({
  implementationAddresses: ChainIdToAddressSchema,
  implementationInitializerFunction: z.string().default("initialize"),
  customFactoryInput: CustomFactoryInput.optional(),
  factoryAddresses: ChainIdToAddressSchema.optional()
}))();

/**
 * @internal
 */
const DeployTypeInput = /* @__PURE__ */(() => z.union([z.literal("standard"), z.literal("autoFactory"), z.literal("customFactory")]))();

/**
 * @internal
 */
const RouterTypeInput = /* @__PURE__ */(() => z.union([z.literal("none"), z.literal("plugin"), z.literal("dynamic")]))();

/**
 * @internal
 */
const DeploymentNetworkInput = /* @__PURE__ */(() => z.object({
  allNetworks: z.boolean().optional(),
  networksEnabled: z.array(z.number()).default([])
}))();

/**
 * @internal
 */
const ExtraPublishMetadataSchemaInput = /* @__PURE__ */(() => z.object({
  version: z.string().refine(v => {
    try {
      toSemver(v);
      return true;
    } catch (e) {
      return false;
    }
  }, out => {
    return {
      message: `'${out}' is not a valid semantic version. Should be in the format of major.minor.patch. Ex: 0.4.1`
    };
  }),
  displayName: z.string().optional(),
  description: z.string().optional(),
  readme: z.string().optional(),
  license: z.string().optional(),
  changelog: z.string().optional(),
  tags: z.array(z.string()).optional(),
  audit: FileOrBufferOrStringSchema.nullable().optional(),
  logo: FileOrBufferOrStringSchema.nullable().optional(),
  isDeployableViaFactory: z.boolean().optional(),
  isDeployableViaProxy: z.boolean().optional(),
  factoryDeploymentData: FactoryDeploymentSchema.optional(),
  deployType: DeployTypeInput.optional(),
  routerType: RouterTypeInput.optional(),
  defaultExtensions: z.array(z.object({
    extensionName: z.string(),
    extensionVersion: z.string().default("latest"),
    publisherAddress: AddressOrEnsSchema
  })).optional(),
  networksForDeployment: DeploymentNetworkInput.optional(),
  constructorParams: z.record(z.string(), z.object({
    displayName: z.string().optional(),
    description: z.string().optional(),
    defaultValue: z.string().optional(),
    hidden: z.boolean().optional()
  }).catchall(z.any())).optional(),
  compositeAbi: AbiSchema.optional()
}).catchall(z.any()))();

/**
 * @internal
 */
const ExtraPublishMetadataSchemaOutput = /* @__PURE__ */(() => ExtraPublishMetadataSchemaInput.extend({
  audit: z.string().nullable().optional(),
  logo: z.string().nullable().optional()
}))();
/**
 * @internal
 */
const FullPublishMetadataSchemaInput = /* @__PURE__ */(() => PreDeployMetadata.merge(ExtraPublishMetadataSchemaInput).extend({
  publisher: AddressOrEnsSchema.optional()
}))();

/**
 * @internal
 */
const FullPublishMetadataSchemaOutput = /* @__PURE__ */(() => PreDeployMetadata.merge(ExtraPublishMetadataSchemaOutput).extend({
  publisher: AddressOrEnsSchema.optional()
}))();
/**
 * @internal
 */
const ProfileSchemaInput = /* @__PURE__ */(() => z.object({
  name: z.string().optional(),
  bio: z.string().optional(),
  avatar: FileOrBufferOrStringSchema.nullable().optional(),
  website: z.string().optional(),
  twitter: z.string().optional(),
  telegram: z.string().optional(),
  facebook: z.string().optional(),
  github: z.string().optional(),
  medium: z.string().optional(),
  linkedin: z.string().optional(),
  reddit: z.string().optional(),
  discord: z.string().optional()
}))();
const ProfileSchemaOutput = /* @__PURE__ */(() => ProfileSchemaInput.extend({
  avatar: z.string().nullable().optional()
}))();
/**
 * @internal
 */
const PublishedContractSchema = /* @__PURE__ */(() => z.object({
  id: z.string(),
  timestamp: BigNumberishSchema,
  metadataUri: z.string()
}))();

/**
 * @internal
 * Follows https://docs.soliditylang.org/en/v0.8.15/natspec-format.html
 */
const ContractInfoSchema = /* @__PURE__ */(() => z.object({
  title: z.string().optional(),
  author: z.string().optional(),
  details: z.string().optional(),
  notice: z.string().optional()
}))();

/**
 * @internal
 */
const CompilerMetadataFetchedSchema = /* @__PURE__ */(() => z.object({
  name: z.string(),
  abi: AbiSchema,
  metadata: z.record(z.string(), z.any()),
  info: ContractInfoSchema,
  licenses: z.array(z.string().optional()).default([]).transform(v => {
    return v.filter(license => license !== undefined);
  }),
  isPartialAbi: z.boolean().optional()
}))();

/**
 * @internal
 */
const PreDeployMetadataFetchedSchema = /* @__PURE__ */(() => PreDeployMetadata.merge(CompilerMetadataFetchedSchema).extend({
  bytecode: z.string()
}))();

const CallOverrideSchema = /* @__PURE__ */(() => z.object({
  gasLimit: BigNumberishSchema.optional(),
  gasPrice: BigNumberishSchema.optional(),
  maxFeePerGas: BigNumberishSchema.optional(),
  maxPriorityFeePerGas: BigNumberishSchema.optional(),
  nonce: BigNumberishSchema.optional(),
  value: BigNumberishSchema.optional(),
  blockTag: z.union([z.string(), z.number()]).optional(),
  from: AddressOrEnsSchema.optional(),
  type: z.number().optional()
}).strict())();

/**
 * Encodes and decodes Contract functions
 * @public
 */
class ContractEncoder {
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Encodes the given contract function with argument
   * @returns the encoded data
   */
  encode(fn, args) {
    return this.contractWrapper.readContract.interface.encodeFunctionData(fn, args);
  }

  /**
   * Decode encoded call data for a given function
   * @param fn - the function to decode
   * @param encodedArgs - the encoded arguments
   */
  decode(fn, encodedArgs) {
    return this.contractWrapper.readContract.interface.decodeFunctionData(fn, encodedArgs);
  }
}

/**
 * Error that may get thrown if IPFS returns nothing for a given uri.
 * @internal
 */
class NotFoundError extends Error {
  /** @internal */
  constructor(identifier) {
    super(identifier ? `Object with id ${identifier} NOT FOUND` : "NOT_FOUND");
  }
}

/**
 * Error that may get thrown if an invalid address was passed
 * @internal
 */
class InvalidAddressError extends Error {
  /** @internal */
  constructor(address) {
    super(address ? `'${address}' is an invalid address` : "Invalid address passed");
  }
}

/**
 * @internal
 */
class MissingRoleError extends Error {
  /** @internal */
  /** @internal */
  constructor(address, role) {
    super(`MISSING ROLE: ${address} does not have the '${role}' role`);
  }
}

/**
 * @internal
 */
class AssetNotFoundError extends Error {
  /** @internal */
  /** @internal */
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "The asset you're trying to use could not be found.";
    super(`message: ${message}`);
  }
}

/**
 * @internal
 */
class UploadError extends Error {
  /** @internal */
  constructor(message) {
    super(`UPLOAD_FAILED: ${message}`);
  }
}

/**
 * @internal
 */
class FileNameMissingError extends Error {
  /** @internal */
  constructor() {
    super("File name is required when object is not a `File` type object.");
  }
}

/**
 * @internal
 */
class DuplicateFileNameError extends Error {
  /** @internal */
  constructor(fileName) {
    super(`DUPLICATE_FILE_NAME_ERROR: File name ${fileName} was passed for more than one file.`);
  }
}

/**
 * @internal
 */
class NotEnoughTokensError extends Error {
  /** @internal */
  constructor(contractAddress, quantity, available) {
    super(`BALANCE ERROR: you do not have enough balance on contract ${contractAddress} to use ${quantity} tokens. You have ${available} tokens available.`);
  }
}

/**
 * @internal
 */
class MissingOwnerRoleError extends Error {
  /** @internal */
  constructor() {
    super(`LIST ERROR: you should be the owner of the token to list it.`);
  }
}

/**
 * @internal
 */
class QuantityAboveLimitError extends Error {
  /** @internal */
  constructor(quantity) {
    super(`BUY ERROR: You cannot buy more than ${quantity} tokens`);
  }
}

/**
 * Thrown when data fails to fetch from storage.
 * @internal
 */
class FetchError extends Error {
  /** @internal */
  constructor(message, innerError) {
    super(`FETCH_FAILED: ${message}`);
    this.innerError = innerError;
  }
}

/**
 * Thrown when attempting to create a snapshot with duplicate leafs
 * @internal
 */
class DuplicateLeafsError extends Error {
  constructor(message) {
    super(`DUPLICATE_LEAFS${message ? ` : ${message}` : ""}`);
  }
}

/**
 * Thrown when attempting to update/cancel an auction that already started
 * @internal
 */
class AuctionAlreadyStartedError extends Error {
  constructor(id) {
    super(`Auction already started with existing bid${id ? `, id: ${id}` : ""}`);
  }
}

/**
 * @internal
 */
class FunctionDeprecatedError extends Error {
  /** @internal */
  constructor(message) {
    super(`FUNCTION DEPRECATED. ${message ? `Use ${message} instead` : ""}`);
  }
}

/**
 * Thrown when trying to retrieve a listing from a marketplace that doesn't exist
 * @internal
 */
class ListingNotFoundError extends Error {
  constructor(marketplaceContractAddress, listingId) {
    super(`Could not find listing.${marketplaceContractAddress ? ` marketplace address: ${marketplaceContractAddress}` : ""}${listingId ? ` listing id: ${listingId}` : ""}`);
  }
}

/**
 * Thrown when trying to retrieve a listing of the wrong type
 * @internal
 */
class WrongListingTypeError extends Error {
  constructor(marketplaceContractAddress, listingId, actualType, expectedType) {
    super(`Incorrect listing type. Are you sure you're using the right method?.${marketplaceContractAddress ? ` marketplace address: ${marketplaceContractAddress}` : ""}${listingId ? ` listing id: ${listingId}` : ""}${expectedType ? ` expected type: ${expectedType}` : ""}${actualType ? ` actual type: ${actualType}` : ""}`);
  }
}

/**
 * Thrown when attempting to transfer an asset that has restricted transferability
 * @internal
 */
class RestrictedTransferError extends Error {
  constructor(assetAddress) {
    super(`Failed to transfer asset, transfer is restricted.${assetAddress ? ` Address : ${assetAddress}` : ""}`);
  }
}

/**
 * Thrown when attempting to execute an admin-role function.
 * @internal
 */
class AdminRoleMissingError extends Error {
  constructor(address, contractAddress) {
    let message = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "Failed to execute transaction";
    super(`${message}, admin role is missing${address ? ` on address: ${address}` : ""}${contractAddress ? ` on contract: ${contractAddress}` : ""}`);
  }
}

/**
 * Thrown when attempting to close an auction that has not ended
 * @internal
 */
class AuctionHasNotEndedError extends Error {
  constructor(id, endTime) {
    super(`Auction has not ended yet${id ? `, id: ${id}` : ""}${endTime ? `, end time: ${endTime.toString()}` : ""}`);
  }
}

/**
 * Thrown when attempting to call a contract function that is not implemented
 * @internal
 */
class ExtensionNotImplementedError extends Error {
  constructor(feature) {
    super(`This functionality is not available because the contract does not implement the '${feature.docLinks.contracts}' Extension. Learn how to unlock this functionality at https://portal.thirdweb.com/extensions `);
  }
}

/**
 * @internal
 */

/**
 * @public
 */
class TransactionError extends Error {
  #reason;
  #info;
  #raw;
  constructor(info, raw) {
    let errorMessage = `\n\n\n╔═══════════════════╗\n║ TRANSACTION ERROR ║\n╚═══════════════════╝\n\n`;
    errorMessage += `Reason: ${info.reason}`;
    errorMessage += `\n\n\n╔═════════════════════════╗\n║ TRANSACTION INFORMATION ║\n╚═════════════════════════╝\n`;
    errorMessage += withSpaces("from", info.from);
    if (info.to) {
      errorMessage += withSpaces("to", info.contractName ? `${info.to} (${info.contractName})` : info.to);
    }
    errorMessage += withSpaces(`chain`, `${info.network.name} (${info.network.chainId})`);
    if (info.rpcUrl) {
      try {
        const url = new URL(info.rpcUrl);
        errorMessage += withSpaces(`rpc`, url.hostname);
      } catch (e2) {
        // ignore if can't parse URL
      }
    }
    if (info.hash) {
      errorMessage += withSpaces(`tx hash`, info.hash);
    }
    if (info.value && info.value.gt(0)) {
      errorMessage += withSpaces("value", `${utils.formatEther(info.value)} ${NATIVE_TOKENS[info.network.chainId]?.symbol || ""}`);
    }
    errorMessage += withSpaces(`data`, `${info.data}`);
    if (info.method) {
      errorMessage += withSpaces("method", info.method);
    }
    if (info.sources) {
      const revertFile = info.sources.find(file => file.source.includes(info.reason));
      if (revertFile) {
        const lines = revertFile.source.split("\n").map((line, index) => `${index + 1}  ${line}`);
        const revertLine = lines.findIndex(line => line.includes(info.reason));
        lines[revertLine] += "   <-- REVERT";
        const errorLines = lines.slice(revertLine - 8, revertLine + 4);
        errorMessage += `\n\n\n╔══════════════════════╗\n║ SOLIDITY STACK TRACE ║\n╚══════════════════════╝\n\n`;
        errorMessage += `File: ${revertFile.filename.replace("node_modules/", "")}\n\n`;
        errorMessage += errorLines.join("\n");
      }
    }
    errorMessage += `\n\n\n╔═════════════════════╗\n║ DEBUGGING RESOURCES ║\n╚═════════════════════╝\n\n`;
    errorMessage += `Need helping debugging? Join our Discord: https://discord.gg/thirdweb`;
    errorMessage += `\n\n`;
    super(errorMessage);
    this.#reason = info.reason;
    this.#info = info;
    this.#raw = raw;
  }

  // Keep reason here for backwards compatibility
  get reason() {
    return this.#reason;
  }
  get raw() {
    return this.#raw;
  }
  get info() {
    return this.#info;
  }
}

/**
 * @internal
 */
function parseRevertReason(error) {
  if (error.reason && !error.reason.includes("cannot estimate gas")) {
    return error.reason;
  }
  if (error.error) {
    return error.error;
  }

  // I think this code path should never be hit, but just in case

  let errorString = error;
  if (typeof error === "object") {
    // MetaMask errors come as objects so parse them first
    errorString = JSON.stringify(error);
  } else if (typeof error !== "string") {
    errorString = error.toString();
  }
  return parseMessageParts(/.*?"message":"([^"\\]*).*?/, errorString) || parseMessageParts(/.*?"reason":"([^"\\]*).*?/, errorString) || error.message || "";
}
function withSpaces(label, content) {
  if (content === "") {
    return content;
  }
  const spaces = Array(10 - label.length).fill(" ").join("");
  if (content.includes("\n")) {
    content = "\n\n  " + content.split("\n").join(`\n  `);
  } else {
    content = `${spaces}${content}`;
  }
  return `\n${label}:${content}`;
}
function parseMessageParts(regex, raw) {
  const msgMatches = raw.match(regex) || [];
  let extracted = "";
  if (msgMatches?.length > 0) {
    extracted += msgMatches[1];
  }
  return extracted;
}

/**
 * @internal
 * @param err
 * @param message
 */
function includesErrorMessage(err, message) {
  if (!err) {
    return false;
  }
  return err && err.toString().includes(message) || err && err.message && err.message.toString().includes(message) || err && err.error && err.error.toString().includes(message);
}

const FEATURE_TOKEN_CLAIM_CONDITIONS_V1 = {
  name: "ERC20ClaimConditionsV1",
  namespace: "token.drop.claim",
  docLinks: {
    sdk: "sdk.erc20dclaimable",
    contracts: "erc20claimconditions"
  },
  abis: [ERC20Abi, IDropSinglePhaseV1],
  features: {}
};
const FEATURE_TOKEN_CLAIM_CONDITIONS_V2 = {
  name: "ERC20ClaimConditionsV2",
  namespace: "token.drop.claim",
  docLinks: {
    sdk: "sdk.erc20dclaimable",
    contracts: "erc20claimconditions"
  },
  abis: [ERC20Abi, IDropSinglePhase],
  features: {}
};
const FEATURE_TOKEN_CLAIM_PHASES_V2 = {
  name: "ERC20ClaimPhasesV2",
  namespace: "token.drop.claim",
  docLinks: {
    sdk: "sdk.erc20dclaimable",
    contracts: "erc20claimphases"
  },
  abis: [ERC20Abi, IDrop],
  features: {}
};
const FEATURE_TOKEN_CLAIM_PHASES_V1 = {
  name: "ERC20ClaimPhasesV1",
  namespace: "token.drop.claim",
  docLinks: {
    sdk: "sdk.erc20dclaimable",
    contracts: "erc20claimphases"
  },
  abis: [DropERC20_V2Abi],
  features: {}
};
const FEATURE_TOKEN_BURNABLE = {
  name: "ERC20Burnable",
  namespace: "token.burn",
  docLinks: {
    sdk: "sdk.erc20burnable",
    contracts: "erc20burnable"
  },
  abis: [ERC20Abi, IBurnableERC20Abi],
  features: {}
};
const FEATURE_TOKEN_SIGNATURE_MINTABLE = {
  name: "ERC20SignatureMintable",
  namespace: "token.signature",
  docLinks: {
    sdk: "sdk.erc20signaturemintable",
    contracts: "erc20signaturemint"
  },
  abis: [ERC20Abi, ISignatureMintERC20Abi],
  features: {}
};
const FEATURE_TOKEN_BATCH_MINTABLE = {
  name: "ERC20BatchMintable",
  namespace: "token.mint.batch",
  docLinks: {
    sdk: "sdk.erc20batchmintable",
    contracts: "erc20batchmintable"
  },
  abis: [ERC20Abi, IMintableERC20Abi, MulticallAbi],
  features: {}
};
const FEATURE_TOKEN_MINTABLE = {
  name: "ERC20Mintable",
  namespace: "token.mint",
  docLinks: {
    sdk: "sdk.erc20mintable",
    contracts: "erc20mintable"
  },
  abis: [ERC20Abi, IMintableERC20Abi],
  features: {
    [FEATURE_TOKEN_BATCH_MINTABLE.name]: FEATURE_TOKEN_BATCH_MINTABLE
  }
};
const FEATURE_TOKEN_PERMIT = {
  name: "ERC20Permit",
  namespace: "token.permit",
  docLinks: {
    sdk: "sdk.erc20permit",
    contracts: "erc20permit"
  },
  abis: [ERC20Abi, IERC20PermitAbi],
  features: {}
};
const FEATURE_TOKEN = {
  name: "ERC20",
  namespace: "token",
  docLinks: {
    sdk: "sdk.erc20",
    contracts: "erc20"
  },
  abis: [ERC20Abi, IERC20MetadataAbi],
  features: {
    [FEATURE_TOKEN_BURNABLE.name]: FEATURE_TOKEN_BURNABLE,
    [FEATURE_TOKEN_MINTABLE.name]: FEATURE_TOKEN_MINTABLE,
    [FEATURE_TOKEN_CLAIM_CONDITIONS_V1.name]: FEATURE_TOKEN_CLAIM_CONDITIONS_V1,
    [FEATURE_TOKEN_CLAIM_CONDITIONS_V2.name]: FEATURE_TOKEN_CLAIM_CONDITIONS_V2,
    [FEATURE_TOKEN_CLAIM_PHASES_V1.name]: FEATURE_TOKEN_CLAIM_PHASES_V1,
    [FEATURE_TOKEN_CLAIM_PHASES_V2.name]: FEATURE_TOKEN_CLAIM_PHASES_V2,
    [FEATURE_TOKEN_SIGNATURE_MINTABLE.name]: FEATURE_TOKEN_SIGNATURE_MINTABLE,
    [FEATURE_TOKEN_PERMIT.name]: FEATURE_TOKEN_PERMIT
  }
};

const FEATURE_NFT_BURNABLE = {
  name: "ERC721Burnable",
  namespace: "nft.burn",
  docLinks: {
    sdk: "sdk.erc721burnable",
    contracts: "erc721burnable"
  },
  abis: [Erc721Abi, IBurnableERC721Abi],
  features: {}
};
const FEATURE_NFT_REVEALABLE = {
  name: "ERC721Revealable",
  namespace: "nft.drop.revealer",
  docLinks: {
    sdk: "sdk.delayedreveal",
    contracts: "erc721revealable"
  },
  abis: [Erc721Abi, ILazyMintAbi, DelayedRevealAbi],
  features: {}
};
const FEATURE_NFT_TIERED_DROP = {
  name: "ERC721TieredDrop",
  namespace: "nft.tieredDrop",
  docLinks: {
    sdk: "sdk.erc721tiereddrop",
    //TODO
    contracts: ""
  },
  abis: [Erc721Abi, TieredDropAbi],
  features: {}
};
const FEATURE_NFT_CLAIM_CONDITIONS_V1 = {
  name: "ERC721ClaimConditionsV1",
  namespace: "nft.drop.claim",
  docLinks: {
    sdk: "sdk.erc721claimable",
    contracts: "erc721claimconditions"
  },
  abis: [Erc721Abi, IDropSinglePhaseV1],
  features: {}
};
const FEATURE_NFT_CLAIM_CONDITIONS_V2 = {
  name: "ERC721ClaimConditionsV2",
  namespace: "nft.drop.claim",
  docLinks: {
    sdk: "sdk.erc721claimable",
    contracts: "erc721claimconditions"
  },
  abis: [Erc721Abi, IDropSinglePhase],
  features: {}
};
const FEATURE_NFT_CLAIM_PHASES_V1 = {
  name: "ERC721ClaimPhasesV1",
  namespace: "nft.drop.claim",
  docLinks: {
    sdk: "sdk.erc721claimable",
    contracts: "erc721claimphases"
  },
  abis: [DropERC721_V3Abi],
  features: {}
};
const FEATURE_NFT_CLAIM_PHASES_V2 = {
  name: "ERC721ClaimPhasesV2",
  namespace: "nft.drop.claim",
  docLinks: {
    sdk: "sdk.erc721claimable",
    contracts: "erc721claimphases"
  },
  abis: [Erc721Abi, IDrop],
  features: {}
};
const FEATURE_NFT_CLAIM_CUSTOM = {
  name: "ERC721ClaimCustom",
  namespace: "nft.drop.claim",
  docLinks: {
    sdk: "sdk.erc721claimable",
    contracts: "erc721claimcustom"
  },
  abis: [Erc721Abi, IClaimableERC721],
  features: {}
};
const FEATURE_NFT_CLAIM_ZORA = {
  name: "ERC721ClaimZora",
  namespace: "nft.drop.claim",
  docLinks: {
    sdk: "sdk.erc721claimable",
    contracts: "erc721claimzora"
  },
  abis: [Erc721Abi, zora_IDropERC721],
  features: {}
};
const FEATURE_NFT_LAZY_MINTABLE = {
  name: "ERC721LazyMintable",
  namespace: "nft.drop",
  docLinks: {
    sdk: "sdk.erc721lazymintable",
    contracts: "lazymint"
  },
  abis: [Erc721Abi, ILazyMintAbi],
  features: {
    [FEATURE_NFT_REVEALABLE.name]: FEATURE_NFT_REVEALABLE
  }
};
const FEATURE_NFT_BATCH_MINTABLE = {
  name: "ERC721BatchMintable",
  namespace: "nft.mint.batch",
  docLinks: {
    sdk: "sdk.erc721batchmintable",
    contracts: "erc721batchmintable"
  },
  abis: [Erc721Abi, IMintableERC721Abi, MulticallAbi],
  features: {}
};
const FEATURE_NFT_MINTABLE = {
  name: "ERC721Mintable",
  namespace: "nft.mint",
  docLinks: {
    sdk: "sdk.erc721mintable",
    contracts: "erc721mintable"
  },
  abis: [Erc721Abi, IMintableERC721Abi],
  features: {
    [FEATURE_NFT_BATCH_MINTABLE.name]: FEATURE_NFT_BATCH_MINTABLE
  }
};
const FEATURE_NFT_SIGNATURE_MINTABLE_V2 = {
  name: "ERC721SignatureMintV2",
  namespace: "nft.signature",
  docLinks: {
    sdk: "sdk.erc721signaturemint",
    contracts: "erc721signaturemint"
  },
  abis: [Erc721Abi, SignatureMintERC721Abi],
  features: {}
};
const FEATURE_NFT_SIGNATURE_MINTABLE_V1 = {
  name: "ERC721SignatureMintV1",
  namespace: "nft.signature",
  docLinks: {
    sdk: "sdk.erc721signaturemint",
    contracts: "erc721signaturemint"
  },
  abis: [SignatureMintERC721_V1Abi],
  features: {}
};
const FEATURE_NFT_ENUMERABLE = {
  name: "ERC721Enumerable",
  namespace: "nft.query.owned",
  docLinks: {
    sdk: "sdk.erc721enumerable",
    contracts: "erc721enumerable"
  },
  abis: [Erc721Abi, Erc721EnumerableAbi],
  features: {}
};
const FEATURE_NFT_QUERYABLE = {
  name: "ERC721AQueryable",
  namespace: "nft.query.owned",
  docLinks: {
    sdk: "",
    contracts: ""
  },
  abis: [Erc721AQueryableAbi],
  features: {}
};
const FEATURE_NFT_SUPPLY = {
  name: "ERC721Supply",
  namespace: "nft.query",
  docLinks: {
    sdk: "sdk.erc721supply",
    contracts: "erc721supply"
  },
  abis: [Erc721Abi, Erc721SupplyAbi],
  features: {
    [FEATURE_NFT_ENUMERABLE.name]: FEATURE_NFT_ENUMERABLE,
    [FEATURE_NFT_QUERYABLE.name]: FEATURE_NFT_QUERYABLE
  }
};
const FEATURE_NFT_SHARED_METADATA = {
  name: "ERC721SharedMetadata",
  namespace: "nft.sharedmetadata",
  docLinks: {
    sdk: "sdk.sharedmetadata",
    contracts: "SharedMetadata"
  },
  abis: [Erc721Abi, SharedMetadataAbi],
  features: {}
};
const FEATURE_NFT_LOYALTY_CARD = {
  name: "ERC721LoyaltyCard",
  namespace: "nft.loyaltyCard",
  docLinks: {
    // TODO
    sdk: "",
    contracts: ""
  },
  abis: [ILoyaltyCardAbi],
  features: {}
};
const FEATURE_NFT_UPDATABLE_METADATA = {
  name: "ERC721UpdatableMetadata",
  namespace: "nft.metadata",
  docLinks: {
    // TODO
    sdk: "",
    contracts: ""
  },
  abis: [Erc721Abi, INFTMetadataAbi],
  features: {}
};
const FEATURE_NFT = {
  name: "ERC721",
  namespace: "nft",
  docLinks: {
    sdk: "sdk.erc721",
    contracts: "erc721"
  },
  abis: [Erc721Abi, IERC721MetadataAbi],
  features: {
    [FEATURE_NFT_BURNABLE.name]: FEATURE_NFT_BURNABLE,
    [FEATURE_NFT_SUPPLY.name]: FEATURE_NFT_SUPPLY,
    [FEATURE_NFT_MINTABLE.name]: FEATURE_NFT_MINTABLE,
    [FEATURE_NFT_LAZY_MINTABLE.name]: FEATURE_NFT_LAZY_MINTABLE,
    [FEATURE_NFT_SIGNATURE_MINTABLE_V1.name]: FEATURE_NFT_SIGNATURE_MINTABLE_V1,
    [FEATURE_NFT_SIGNATURE_MINTABLE_V2.name]: FEATURE_NFT_SIGNATURE_MINTABLE_V2,
    [FEATURE_NFT_TIERED_DROP.name]: FEATURE_NFT_TIERED_DROP,
    [FEATURE_NFT_CLAIM_CUSTOM.name]: FEATURE_NFT_CLAIM_CUSTOM,
    [FEATURE_NFT_CLAIM_ZORA.name]: FEATURE_NFT_CLAIM_ZORA,
    [FEATURE_NFT_CLAIM_CONDITIONS_V1.name]: FEATURE_NFT_CLAIM_CONDITIONS_V1,
    [FEATURE_NFT_CLAIM_CONDITIONS_V2.name]: FEATURE_NFT_CLAIM_CONDITIONS_V2,
    [FEATURE_NFT_CLAIM_PHASES_V1.name]: FEATURE_NFT_CLAIM_PHASES_V1,
    [FEATURE_NFT_CLAIM_PHASES_V2.name]: FEATURE_NFT_CLAIM_PHASES_V2,
    [FEATURE_NFT_SHARED_METADATA.name]: FEATURE_NFT_SHARED_METADATA,
    [FEATURE_NFT_LOYALTY_CARD.name]: FEATURE_NFT_LOYALTY_CARD,
    [FEATURE_NFT_UPDATABLE_METADATA.name]: FEATURE_NFT_UPDATABLE_METADATA
  }
};

// TODO could be part of IERC1155Metadata even though its not in the spec
const NAME_SYMBOL_ABI = [{
  inputs: [],
  name: "name",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "symbol",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}];
const FEATURE_EDITION_BURNABLE = {
  name: "ERC1155Burnable",
  namespace: "edition.burn",
  docLinks: {
    sdk: "sdk.erc1155burnable",
    contracts: "erc1155burnable"
  },
  abis: [Erc1155Abi, IBurnableERC1155Abi],
  features: {}
};
const FEATURE_EDITION_CLAIM_CONDITIONS_V1 = {
  name: "ERC1155ClaimConditionsV1",
  namespace: "edition.drop.claim",
  docLinks: {
    sdk: "sdk.erc1155claimable",
    contracts: "erc1155dropsinglephase"
  },
  abis: [Erc1155Abi, IDropSinglePhase1155_V1],
  features: {}
};
const FEATURE_EDITION_CLAIM_CONDITIONS_V2 = {
  name: "ERC1155ClaimConditionsV2",
  namespace: "edition.drop.claim",
  docLinks: {
    sdk: "sdk.erc1155claimable",
    contracts: "erc1155claimconditions"
  },
  abis: [Erc1155Abi, IDropSinglePhase1155],
  features: {}
};
const FEATURE_EDITION_CLAIM_PHASES_V2 = {
  name: "ERC1155ClaimPhasesV2",
  namespace: "edition.drop.claim",
  docLinks: {
    sdk: "sdk.erc1155claimable",
    contracts: "erc1155claimphases"
  },
  abis: [Erc1155Abi, IDropMultiPhase1155],
  features: {}
};
const FEATURE_EDITION_CLAIM_PHASES_V1 = {
  name: "ERC1155ClaimPhasesV1",
  namespace: "edition.drop.claim",
  docLinks: {
    sdk: "sdk.erc1155claimable",
    contracts: "erc1155claimphases"
  },
  abis: [DropERC1155_V2Abi],
  features: {}
};
const FEATURE_EDITION_CLAIM_CUSTOM = {
  name: "ERC1155ClaimCustom",
  namespace: "edition.drop.claim",
  docLinks: {
    sdk: "sdk.erc1155claimable",
    contracts: "erc1155claimcustom"
  },
  abis: [Erc1155Abi, IClaimableERC1155],
  features: {}
};
const FEATURE_EDITION_REVEALABLE = {
  name: "ERC1155Revealable",
  namespace: "edition.drop.revealer",
  docLinks: {
    sdk: "sdk.drop.delayedreveal",
    contracts: "erc1155revealable"
  },
  abis: [Erc1155Abi, ILazyMintAbi, DelayedRevealAbi],
  features: {}
};
const FEATURE_EDITION_LAZY_MINTABLE_V2 = {
  name: "ERC1155LazyMintableV2",
  namespace: "edition.drop",
  docLinks: {
    sdk: "sdk.erc1155droppable",
    contracts: "lazymint"
  },
  abis: [Erc1155Abi, ILazyMintAbi],
  features: {
    [FEATURE_EDITION_REVEALABLE.name]: FEATURE_EDITION_REVEALABLE
  }
};
const FEATURE_EDITION_LAZY_MINTABLE_V1 = {
  name: "ERC1155LazyMintableV1",
  namespace: "edition.drop",
  docLinks: {
    sdk: "sdk.erc1155droppable",
    contracts: "lazymint"
  },
  abis: [DropERC1155_V2Abi],
  features: {
    [FEATURE_EDITION_CLAIM_PHASES_V1.name]: FEATURE_EDITION_CLAIM_PHASES_V1
  }
};
const FEATURE_EDITION_SIGNATURE_MINTABLE = {
  name: "ERC1155SignatureMintable",
  namespace: "edition.signature",
  docLinks: {
    sdk: "sdk.erc1155signaturemintable",
    contracts: "erc1155signaturemint"
  },
  abis: [Erc1155Abi, ISignatureMintERC1155Abi],
  features: {}
};
const FEATURE_EDITION_BATCH_MINTABLE = {
  name: "ERC1155BatchMintable",
  namespace: "edition.mint.batch",
  docLinks: {
    sdk: "sdk.erc1155batchmintable",
    contracts: "erc1155batchmintable"
  },
  abis: [Erc1155Abi, IMintableERC1155Abi, MulticallAbi],
  features: {}
};
const FEATURE_EDITION_MINTABLE = {
  name: "ERC1155Mintable",
  namespace: "edition.mint",
  docLinks: {
    sdk: "sdk.erc1155mintable",
    contracts: "erc1155mintable"
  },
  abis: [Erc1155Abi, IMintableERC1155Abi],
  features: {
    [FEATURE_EDITION_BATCH_MINTABLE.name]: FEATURE_EDITION_BATCH_MINTABLE
  }
};
const FEATURE_EDITION_ENUMERABLE = {
  name: "ERC1155Enumerable",
  namespace: "edition.query",
  docLinks: {
    sdk: "sdk.erc1155",
    contracts: "erc1155enumerable"
  },
  abis: [Erc1155Abi, Erc1155EnumerableAbi],
  features: {}
};
const FEATURE_EDITION_UPDATABLE_METADATA = {
  name: "ERC1155UpdatableMetadata",
  namespace: "edition.metadata",
  docLinks: {
    // TODO
    sdk: "",
    contracts: ""
  },
  abis: [Erc1155Abi, INFTMetadataAbi],
  features: {}
};
const FEATURE_EDITION_SUPPLY = {
  name: "ERC1155Supply",
  namespace: "edition.supply",
  docLinks: {
    sdk: "",
    contracts: ""
  },
  abis: [Erc1155Abi, Erc1155SupplyAbi],
  features: {}
};
const FEATURE_EDITION = {
  name: "ERC1155",
  namespace: "edition",
  docLinks: {
    sdk: "sdk.erc1155enumerable",
    contracts: "erc1155"
  },
  abis: [Erc1155Abi, Erc1155MetadataAbi, NAME_SYMBOL_ABI],
  features: {
    [FEATURE_EDITION_SUPPLY.name]: FEATURE_EDITION_SUPPLY,
    [FEATURE_EDITION_BURNABLE.name]: FEATURE_EDITION_BURNABLE,
    [FEATURE_EDITION_ENUMERABLE.name]: FEATURE_EDITION_ENUMERABLE,
    [FEATURE_EDITION_MINTABLE.name]: FEATURE_EDITION_MINTABLE,
    [FEATURE_EDITION_LAZY_MINTABLE_V1.name]: FEATURE_EDITION_LAZY_MINTABLE_V1,
    [FEATURE_EDITION_LAZY_MINTABLE_V2.name]: FEATURE_EDITION_LAZY_MINTABLE_V2,
    [FEATURE_EDITION_REVEALABLE.name]: FEATURE_EDITION_REVEALABLE,
    [FEATURE_EDITION_SIGNATURE_MINTABLE.name]: FEATURE_EDITION_SIGNATURE_MINTABLE,
    [FEATURE_EDITION_CLAIM_CUSTOM.name]: FEATURE_EDITION_CLAIM_CUSTOM,
    [FEATURE_EDITION_CLAIM_CONDITIONS_V1.name]: FEATURE_EDITION_CLAIM_CONDITIONS_V1,
    [FEATURE_EDITION_CLAIM_CONDITIONS_V2.name]: FEATURE_EDITION_CLAIM_CONDITIONS_V2,
    [FEATURE_EDITION_CLAIM_PHASES_V2.name]: FEATURE_EDITION_CLAIM_PHASES_V2,
    [FEATURE_EDITION_UPDATABLE_METADATA.name]: FEATURE_EDITION_UPDATABLE_METADATA
  }
};

const getAllPluginsAbi = [{
  inputs: [],
  name: "getAllPlugins",
  outputs: [{
    components: [{
      internalType: "bytes4",
      name: "functionSelector",
      type: "bytes4"
    }, {
      internalType: "string",
      name: "functionSignature",
      type: "string"
    }, {
      internalType: "address",
      name: "pluginAddress",
      type: "address"
    }],
    internalType: "struct IPluginMap.Plugin[]",
    name: "registered",
    type: "tuple[]"
  }],
  stateMutability: "view",
  type: "function"
}];
const getAllExtensionsAbi = [{
  inputs: [],
  name: "getAllExtensions",
  outputs: [{
    components: [{
      components: [{
        internalType: "string",
        name: "name",
        type: "string"
      }, {
        internalType: "string",
        name: "metadataURI",
        type: "string"
      }, {
        internalType: "address",
        name: "implementation",
        type: "address"
      }],
      internalType: "struct IExtension.ExtensionMetadata",
      name: "metadata",
      type: "tuple"
    }, {
      components: [{
        internalType: "bytes4",
        name: "functionSelector",
        type: "bytes4"
      }, {
        internalType: "string",
        name: "functionSignature",
        type: "string"
      }],
      internalType: "struct IExtension.ExtensionFunction[]",
      name: "functions",
      type: "tuple[]"
    }],
    internalType: "struct IExtension.Extension[]",
    name: "allExtensions",
    type: "tuple[]"
  }],
  stateMutability: "view",
  type: "function"
}];
const FEATURE_ROYALTY = {
  name: "Royalty",
  namespace: "royalty",
  docLinks: {
    sdk: "sdk.contractroyalty",
    contracts: "royalty"
  },
  abis: [IThirdwebRoyaltyAbi],
  features: {}
};
const FEATURE_PRIMARY_SALE = {
  name: "PrimarySale",
  namespace: "sales",
  docLinks: {
    sdk: "sdk.contractprimarysale",
    contracts: "primarysale"
  },
  abis: [IThirdwebPrimarySaleAbi],
  features: {}
};
const FEATURE_PLATFORM_FEE = {
  name: "PlatformFee",
  namespace: "platformFees",
  docLinks: {
    sdk: "sdk.platformfee",
    contracts: "platformfee"
  },
  abis: [IThirdwebPlatformFeeAbi],
  features: {}
};
const FEATURE_PERMISSIONS_ENUMERABLE = {
  name: "PermissionsEnumerable",
  namespace: "roles",
  docLinks: {
    sdk: "sdk.contractroles",
    contracts: "permissionsenumerable"
  },
  abis: [IPermissionsEnumerableAbi],
  features: {}
};
const FEATURE_PERMISSIONS = {
  name: "Permissions",
  namespace: "roles",
  docLinks: {
    sdk: "sdk.contractroles",
    contracts: "permissions"
  },
  abis: [IPermissionsAbi],
  features: {
    [FEATURE_PERMISSIONS_ENUMERABLE.name]: FEATURE_PERMISSIONS_ENUMERABLE
  }
};
const FEATURE_METADATA = {
  name: "ContractMetadata",
  namespace: "metadata",
  docLinks: {
    sdk: "sdk.contractmetadata",
    contracts: "contractmetadata"
  },
  abis: [IContractMetadataAbi],
  features: {}
};
const FEATURE_APPURI = {
  name: "AppURI",
  namespace: "appURI",
  docLinks: {
    sdk: "sdk.appURI",
    //TODO
    contracts: ""
  },
  abis: [IAppURI],
  features: {}
};
const FEATURE_OWNER = {
  name: "Ownable",
  namespace: "owner",
  docLinks: {
    sdk: "sdk.owner",
    contracts: "ownable"
  },
  abis: [IOwnableAbi],
  features: {}
};
const FEATURE_GASLESS = {
  name: "Gasless",
  namespace: "gasless",
  docLinks: {
    sdk: "sdk.gaslesstransaction",
    // TODO add the correct name for this once it's added to portal
    contracts: ""
  },
  abis: [IERC2771ContextAbi],
  features: {}
};
const FEATURE_PACK_VRF = {
  name: "PackVRF",
  namespace: "pack.vrf",
  docLinks: {
    sdk: "sdk.packvrf",
    //TODO
    contracts: ""
  },
  abis: [IPackVRFAbi],
  features: {}
};
const FEATURE_PLUGIN_ROUTER = {
  name: "PluginRouter",
  namespace: "plugin.router",
  docLinks: {
    sdk: "sdk.pluginrouter",
    //TODO
    contracts: ""
  },
  abis: [getAllPluginsAbi],
  features: {}
};
const FEATURE_DYNAMIC_CONTRACT = {
  name: "DynamicContract",
  namespace: "dynamic.contract",
  docLinks: {
    sdk: "",
    //TODO
    contracts: ""
  },
  abis: [getAllExtensionsAbi],
  features: {}
};
const FEATURE_DIRECT_LISTINGS = {
  name: "DirectListings",
  namespace: "direct.listings",
  docLinks: {
    // TODO
    sdk: "",
    contracts: ""
  },
  abis: [IDirectListingsAbi],
  features: {}
};
const FEATURE_ENGLISH_AUCTIONS = {
  name: "EnglishAuctions",
  namespace: "english.auctions",
  docLinks: {
    // TODO
    sdk: "",
    contracts: ""
  },
  abis: [IEnglishAuctionsAbi],
  features: {}
};
const FEATURE_OFFERS = {
  name: "Offers",
  namespace: "offers",
  docLinks: {
    // TODO
    sdk: "",
    contracts: ""
  },
  abis: [IOffersAbi],
  features: {}
};
const FEATURE_ACCOUNT_FACTORY = {
  name: "AccountFactory",
  namespace: "accountFactory",
  docLinks: {
    // TODO
    sdk: "sdk.accountFactory",
    contracts: ""
  },
  abis: [IAccountFactoryCore],
  features: {}
};
const FEATURE_ACCOUNT_PERMISSIONS = {
  name: "AccountPermissions",
  namespace: "accountPermissions",
  docLinks: {
    // TODO
    sdk: "sdk.account",
    contracts: ""
  },
  abis: [IAccountPermissions],
  features: {}
};
const FEATURE_ACCOUNT = {
  name: "Account",
  namespace: "account",
  docLinks: {
    // TODO
    sdk: "sdk.account",
    contracts: ""
  },
  abis: [IAccount],
  features: {
    [FEATURE_ACCOUNT_PERMISSIONS.name]: FEATURE_ACCOUNT_PERMISSIONS
  }
};
const FEATURE_AIRDROP_ERC20 = {
  name: "AirdropERC20",
  namespace: "airdrop20",
  docLinks: {
    // TODO
    sdk: "",
    contracts: ""
  },
  abis: [IAirdropERC20],
  features: {}
};
const FEATURE_AIRDROP_ERC721 = {
  name: "AirdropERC721",
  namespace: "airdrop721",
  docLinks: {
    // TODO
    sdk: "",
    contracts: ""
  },
  abis: [IAirdropERC721],
  features: {}
};
const FEATURE_AIRDROP_ERC1155 = {
  name: "AirdropERC1155",
  namespace: "airdrop1155",
  docLinks: {
    // TODO
    sdk: "",
    contracts: ""
  },
  abis: [IAirdropERC1155],
  features: {}
};

/**
 * @internal
 */

/**
 * @internal
 */

/**
 * @internal
 */

/**
 * @internal
 */
const SUPPORTED_FEATURES = {
  [FEATURE_TOKEN.name]: FEATURE_TOKEN,
  [FEATURE_NFT.name]: FEATURE_NFT,
  [FEATURE_EDITION.name]: FEATURE_EDITION,
  [FEATURE_ROYALTY.name]: FEATURE_ROYALTY,
  [FEATURE_PLATFORM_FEE.name]: FEATURE_PLATFORM_FEE,
  [FEATURE_PRIMARY_SALE.name]: FEATURE_PRIMARY_SALE,
  [FEATURE_PERMISSIONS.name]: FEATURE_PERMISSIONS,
  [FEATURE_METADATA.name]: FEATURE_METADATA,
  [FEATURE_APPURI.name]: FEATURE_APPURI,
  [FEATURE_OWNER.name]: FEATURE_OWNER,
  [FEATURE_GASLESS.name]: FEATURE_GASLESS,
  [FEATURE_PACK_VRF.name]: FEATURE_PACK_VRF,
  [FEATURE_PLUGIN_ROUTER.name]: FEATURE_PLUGIN_ROUTER,
  [FEATURE_DYNAMIC_CONTRACT.name]: FEATURE_DYNAMIC_CONTRACT,
  [FEATURE_DIRECT_LISTINGS.name]: FEATURE_DIRECT_LISTINGS,
  [FEATURE_ENGLISH_AUCTIONS.name]: FEATURE_ENGLISH_AUCTIONS,
  [FEATURE_OFFERS.name]: FEATURE_OFFERS,
  [FEATURE_AIRDROP_ERC20.name]: FEATURE_AIRDROP_ERC20,
  [FEATURE_AIRDROP_ERC721.name]: FEATURE_AIRDROP_ERC721,
  [FEATURE_AIRDROP_ERC1155.name]: FEATURE_AIRDROP_ERC1155,
  [FEATURE_ACCOUNT_FACTORY.name]: FEATURE_ACCOUNT_FACTORY,
  [FEATURE_ACCOUNT.name]: FEATURE_ACCOUNT,
  [FEATURE_NFT_LOYALTY_CARD.name]: FEATURE_NFT_LOYALTY_CARD,
  [FEATURE_NFT_UPDATABLE_METADATA.name]: FEATURE_NFT_UPDATABLE_METADATA
};

function toJSType(contractType) {
  let isReturnType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let withName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let jsType = contractType.type;
  let isArray = false;
  if (jsType.endsWith("[]")) {
    isArray = true;
    jsType = jsType.slice(0, -2);
  }
  if (jsType.startsWith("bytes")) {
    jsType = "BytesLike";
  }
  if (jsType.startsWith("uint") || jsType.startsWith("int")) {
    jsType = isReturnType ? "BigNumber" : "BigNumberish";
  }
  if (jsType.startsWith("bool")) {
    jsType = "boolean";
  }
  if (jsType === "address") {
    jsType = "string";
  }
  if (jsType === "tuple") {
    if (contractType.components) {
      jsType = `{ ${contractType.components.map(a => toJSType(a, false, true)).join(", ")} }`;
    }
  }
  if (isArray) {
    jsType += "[]";
  }
  if (withName) {
    jsType = `${contractType.name}: ${jsType}`;
  }
  return jsType;
}

/**
 * @internal
 * @param name
 * @param metadata
 * @param type
 */
function extractCommentFromMetadata(name, metadata, type) {
  return metadata?.output?.userdoc?.[type]?.[Object.keys(metadata?.output?.userdoc[type] || {}).find(fn => fn.includes(name || "unknown")) || ""]?.notice || metadata?.output?.devdoc?.[type]?.[Object.keys(metadata?.output?.devdoc[type] || {}).find(fn => fn.includes(name || "unknown")) || ""]?.details;
}

/**
 * @internal
 * @param abi
 * @param metadata
 */
function extractFunctionsFromAbi(abi, metadata) {
  const functions = (abi || []).filter(el => el.type === "function");
  const parsed = [];
  for (const f of functions) {
    const doc = extractCommentFromMetadata(f.name, metadata, "methods");
    const args = f.inputs?.map(i => `${i.name || "key"}: ${toJSType(i)}`)?.join(", ") || "";
    const fargs = args ? `, [${args}]` : "";
    const out = f.outputs?.map(o => toJSType(o, true))?.join(", ");
    const promise = out ? `: Promise<${out}>` : `: Promise<TransactionResult>`;
    const signature = `contract.call("${f.name}"${fargs})${promise}`;
    parsed.push({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore we know AbiTypeBaseSchema.name is not going to be undefined since we're doing `.default("")`
      inputs: f.inputs || [],
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore we know the AbiTypeBaseSchema.name is not going to be undefined since we're doing `.default("")`
      outputs: f.outputs || [],
      name: f.name || "unknown",
      signature,
      stateMutability: f.stateMutability || "",
      comment: doc
    });
  }
  return parsed;
}

/**
 * @internal
 * @param contractAbi
 * @param featureAbis
 * @returns
 */
function hasMatchingAbi(contractAbi, featureAbis) {
  const contractFn = extractFunctionsFromAbi(contractAbi);
  const interfaceFn = featureAbis.flatMap(i => extractFunctionsFromAbi(i));
  // match every function and their arguments
  const intersection = contractFn.filter(fn => {
    const match = interfaceFn.find(iFn => iFn.name === fn.name && iFn.inputs.length === fn.inputs.length && iFn.inputs.every((i, index) => {
      if (i.type === "tuple" || i.type === "tuple[]") {
        // check that all properties in the tuple are the same type
        return i.type === fn.inputs[index].type && i.components?.every((c, cIndex) => {
          return c.type === fn.inputs[index].components?.[cIndex]?.type;
        });
      }
      return i.type === fn.inputs[index].type;
    }));
    return match !== undefined;
  });
  return intersection.length === interfaceFn.length;
}
function matchesAbiFromBytecode(contractBytecode, featureAbis) {
  const interfaces = featureAbis.map(abi => new Interface(abi));
  const selectors = interfaces.flatMap(i => {
    return Object.values(i.functions).map(fn => Number(i.getSighash(fn)).toString(16));
  });
  const uniqueSelectors = [...new Set(selectors)];
  // checks that all unique selectors are found in the bytecode
  return uniqueSelectors.every(selector => contractBytecode.includes(selector));
}

/**
 * Processes ALL supported features and sets whether the passed in abi supports each individual feature
 * @internal
 * @param abi
 * @param features
 * @returns the nested struct of all features and whether they're detected in the abi
 */
function detectFeatures(abi) {
  let features = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SUPPORTED_FEATURES;
  const results = {};
  for (const featureKey in features) {
    const feature = features[featureKey];
    const enabled = matchesAbiInterface(abi, feature);
    const childResults = detectFeatures(abi, feature.features);
    results[featureKey] = {
      ...feature,
      features: childResults,
      enabled
    };
  }
  return results;
}
function detectFeaturesFromBytecode(bytecode) {
  let features = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SUPPORTED_FEATURES;
  const results = {};
  for (const featureKey in features) {
    const feature = features[featureKey];
    const enabled = matchesAbiFromBytecode(bytecode, feature.abis);
    const childResults = detectFeaturesFromBytecode(bytecode, feature.features);
    results[featureKey] = {
      ...feature,
      features: childResults,
      enabled
    };
  }
  return results;
}

/**
 * @internal
 * @param abi
 * @param feature
 */
function matchesAbiInterface(abi, feature) {
  // returns true if all the functions in `interfaceToMatch` are found in `contract` (removing any duplicates)
  return hasMatchingAbi(abi, feature.abis);
}

/**
 * Checks whether the given ABI supports a given feature
 * @deprecated use isExtensionEnabled instead
 * @param abi
 * @param featureName
 */
function isFeatureEnabled(abi, featureName) {
  const features = detectFeatures(abi);
  return _featureEnabled(features, featureName);
}

/**
 * Checks whether the given ABI supports a given extension
 * @public
 * @param abi
 * @param featureName
 */
function isExtensionEnabled(abi, featureName) {
  return isFeatureEnabled(abi, featureName);
}

/**
 * Searches the feature map for featureName and returns whether its enabled
 * @internal
 * @param features
 * @param featureName
 */
function _featureEnabled(features, featureName) {
  const keys = Object.keys(features);
  if (!keys.includes(featureName)) {
    let found = false;
    for (const key of keys) {
      const f = features[key];
      found = _featureEnabled(f.features, featureName);
      if (found) {
        break;
      }
    }
    return found;
  }
  const feature = features[featureName];
  return feature.enabled;
}

/**
 * Type guard for contractWrappers depending on passed feature name
 * @internal
 * @param contractWrapper
 * @param featureName
 */
function detectContractFeature(contractWrapper, featureName) {
  return isExtensionEnabled(AbiSchema.parse(contractWrapper.abi), featureName);
}

/**
 * @internal
 * @param contractWrapper
 * @param functionName
 */
function hasFunction(functionName, contractWrapper) {
  return functionName in contractWrapper.readContract.functions;
}

/* eslint-disable eqeqeq */
/* eslint-disable better-tree-shaking/no-top-level-side-effects  */
let decoder;
try {
  decoder = new TextDecoder();
} catch (error) {}
let src;
let srcEnd;
let position = 0;
const LEGACY_RECORD_INLINE_ID = 105;
const RECORD_DEFINITIONS_ID = 0xdffe;
const RECORD_INLINE_ID = 0xdfff; // temporary first-come first-serve tag // proposed tag: 0x7265 // 're'
const BUNDLED_STRINGS_ID = 0xdff9;
const PACKED_REFERENCE_TAG_ID = 6;
const STOP_CODE = {};
let currentDecoder = {};
let currentStructures;
let srcString;
let srcStringStart = 0;
let srcStringEnd = 0;
let bundledStrings;
let referenceMap;
let currentExtensions = [];
let currentExtensionRanges = [];
let packedValues;
let dataView;
let restoreMapsAsObject;
let defaultOptions = {
  useRecords: false,
  mapsAsObjects: true
};
let sequentialMode = false;
class Decoder {
  constructor(options) {
    if (options) {
      if ((options.keyMap || options._keyMap) && !options.useRecords) {
        options.useRecords = false;
        options.mapsAsObjects = true;
      }
      if (options.useRecords === false && options.mapsAsObjects === undefined) {
        options.mapsAsObjects = true;
      }
      if (options.getStructures) {
        options.getShared = options.getStructures;
      }
      if (options.getShared && !options.structures) {
        (options.structures = []).uninitialized = true;
      } // this is what we use to denote an uninitialized structures
      if (options.keyMap) {
        this.mapKey = new Map();
        for (let [k, v] of Object.entries(options.keyMap)) {
          this.mapKey.set(v, k);
        }
      }
    }
    Object.assign(this, options);
  }
  decodeKey(key) {
    return this.keyMap ? this.mapKey.get(key) || key : key;
  }
  decode(source, end) {
    if (src) {
      // re-entrant execution, save the state and restore it after we do this decode
      return saveState(() => {
        clearSource();
        return this ? this.decode(source, end) : Decoder.prototype.decode.call(defaultOptions, source, end);
      });
    }
    srcEnd = end > -1 ? end : source.length;
    position = 0;
    srcStringEnd = 0;
    srcString = null;
    bundledStrings = null;
    src = source;
    // this provides cached access to the data view for a buffer if it is getting reused, which is a recommend
    // technique for getting data from a database where it can be copied into an existing buffer instead of creating
    // new ones
    try {
      dataView = source.dataView || (source.dataView = new DataView(source.buffer, source.byteOffset, source.byteLength));
    } catch (error) {
      // if it doesn't have a buffer, maybe it is the wrong type of object
      src = null;
      if (source instanceof Uint8Array) {
        throw error;
      }
      throw new Error("Source must be a Uint8Array or Buffer but was a " + (source && typeof source === "object" ? source.constructor.name : typeof source));
    }
    if (this instanceof Decoder) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      currentDecoder = this;
      packedValues = this.sharedValues && (this.pack ? new Array(this.maxPrivatePackedValues || 16).concat(this.sharedValues) : this.sharedValues);
      if (this.structures) {
        currentStructures = this.structures;
        return checkedRead();
      } else if (!currentStructures || currentStructures.length > 0) {
        currentStructures = [];
      }
    } else {
      currentDecoder = defaultOptions;
      if (!currentStructures || currentStructures.length > 0) {
        currentStructures = [];
      }
      packedValues = null;
    }
    return checkedRead();
  }
}
function checkedRead() {
  try {
    let result = read();
    if (bundledStrings) {
      if (position >= bundledStrings.postBundlePosition) {
        let error = new Error("Unexpected bundle position");
        error.incomplete = true;
        throw error;
      }
      // bundled strings to skip past
      position = bundledStrings.postBundlePosition;
      bundledStrings = null;
    }
    if (position == srcEnd) {
      // finished reading this source, cleanup references
      currentStructures = null;
      src = null;
      if (referenceMap) {
        referenceMap = null;
      }
    } else if (position > srcEnd) {
      // over read
      let error = new Error("Unexpected end of CBOR data");
      error.incomplete = true;
      throw error;
    } else if (!sequentialMode) {
      throw new Error("Data read, but end of buffer not reached");
    }
    // else more to read, but we are reading sequentially, so don't clear source yet
    return result;
  } catch (error) {
    clearSource();
    if (error instanceof RangeError || error.message.startsWith("Unexpected end of buffer")) {
      error.incomplete = true;
    }
    throw error;
  }
}
function read() {
  let token = src[position++];
  let majorType = token >> 5;
  token = token & 0x1f;
  if (token > 0x17) {
    switch (token) {
      case 0x18:
        token = src[position++];
        break;
      case 0x19:
        if (majorType == 7) {
          return getFloat16();
        }
        token = dataView.getUint16(position);
        position += 2;
        break;
      case 0x1a:
        if (majorType == 7) {
          let value = dataView.getFloat32(position);
          if (currentDecoder.useFloat32 > 2) {
            // this does rounding of numbers that were encoded in 32-bit float to nearest significant decimal digit that could be preserved
            let multiplier = mult10[(src[position] & 0x7f) << 1 | src[position + 1] >> 7];
            position += 4;
            return (multiplier * value + (value > 0 ? 0.5 : -0.5) >> 0) / multiplier;
          }
          position += 4;
          return value;
        }
        token = dataView.getUint32(position);
        position += 4;
        break;
      case 0x1b:
        if (majorType == 7) {
          let value = dataView.getFloat64(position);
          position += 8;
          return value;
        }
        if (majorType > 1) {
          if (dataView.getUint32(position) > 0) {
            throw new Error("JavaScript does not support arrays, maps, or strings with length over 4294967295");
          }
          token = dataView.getUint32(position + 4);
        } else if (currentDecoder.int64AsNumber) {
          token = dataView.getUint32(position) * 0x100000000;
          token += dataView.getUint32(position + 4);
        } else {
          token = dataView.getBigUint64(position);
        }
        position += 8;
        break;
      case 0x1f:
        // indefinite length
        switch (majorType) {
          case 2: // byte string
          case 3:
            // text string
            throw new Error("Indefinite length not supported for byte or text strings");
          case 4:
            // array
            let array = [];
            let value,
              i = 0;
            while ((value = read()) != STOP_CODE) {
              array[i++] = value;
            }
            return majorType == 4 ? array : majorType == 3 ? array.join("") : Buffer.concat(array);
          case 5:
            // map
            let key;
            if (currentDecoder.mapsAsObjects) {
              let object = {};
              if (currentDecoder.keyMap) {
                while ((key = read()) != STOP_CODE) {
                  object[safeKey(currentDecoder.decodeKey(key))] = read();
                }
              } else {
                while ((key = read()) != STOP_CODE) {
                  object[safeKey(key)] = read();
                }
              }
              return object;
            } else {
              if (restoreMapsAsObject) {
                currentDecoder.mapsAsObjects = true;
                restoreMapsAsObject = false;
              }
              let map = new Map();
              if (currentDecoder.keyMap) {
                while ((key = read()) != STOP_CODE) {
                  map.set(currentDecoder.decodeKey(key), read());
                }
              } else {
                while ((key = read()) != STOP_CODE) {
                  map.set(key, read());
                }
              }
              return map;
            }
          case 7:
            return STOP_CODE;
          default:
            throw new Error("Invalid major type for indefinite length " + majorType);
        }
      default:
        throw new Error("Unknown token " + token);
    }
  }
  switch (majorType) {
    case 0:
      // positive int
      return token;
    case 1:
      // negative int
      return ~token;
    case 2:
      // buffer
      return readBin(token);
    case 3:
      // string
      if (srcStringEnd >= position) {
        return srcString.slice(position - srcStringStart, (position += token) - srcStringStart);
      }
      if (srcStringEnd == 0 && srcEnd < 140 && token < 32) {
        // for small blocks, avoiding the overhead of the extract call is helpful
        let string = token < 16 ? shortStringInJS(token) : longStringInJS(token);
        if (string != null) {
          return string;
        }
      }
      return readFixedString(token);
    case 4:
      // array
      let array = new Array(token);
      //if (currentDecoder.keyMap) for (let i = 0; i < token; i++) array[i] = currentDecoder.decodeKey(read())
      //else
      for (let i = 0; i < token; i++) {
        array[i] = read();
      }
      return array;
    case 5:
      // map
      if (currentDecoder.mapsAsObjects) {
        let object = {};
        if (currentDecoder.keyMap) {
          for (let i = 0; i < token; i++) {
            object[safeKey(currentDecoder.decodeKey(read()))] = read();
          }
        } else {
          for (let i = 0; i < token; i++) {
            object[safeKey(read())] = read();
          }
        }
        return object;
      } else {
        if (restoreMapsAsObject) {
          currentDecoder.mapsAsObjects = true;
          restoreMapsAsObject = false;
        }
        let map = new Map();
        if (currentDecoder.keyMap) {
          for (let i = 0; i < token; i++) {
            map.set(currentDecoder.decodeKey(read()), read());
          }
        } else {
          for (let i = 0; i < token; i++) {
            map.set(read(), read());
          }
        }
        return map;
      }
    case 6:
      // extension
      if (token >= BUNDLED_STRINGS_ID) {
        let structure = currentStructures[token & 0x1fff]; // check record structures first
        // At some point we may provide an option for dynamic tag assignment with a range like token >= 8 && (token < 16 || (token > 0x80 && token < 0xc0) || (token > 0x130 && token < 0x4000))
        if (structure) {
          if (!structure.read) {
            structure.read = createStructureReader(structure);
          }
          return structure.read();
        }
        if (token < 0x10000) {
          if (token == RECORD_INLINE_ID) {
            // we do a special check for this so that we can keep the currentExtensions as densely stored array (v8 stores arrays densely under about 3000 elements)
            return recordDefinition(read());
          } else if (token == RECORD_DEFINITIONS_ID) {
            let length = readJustLength();
            let id = read();
            for (let i = 2; i < length; i++) {
              recordDefinition([id++, read()]);
            }
            return read();
          } else if (token == BUNDLED_STRINGS_ID) {
            return readBundleExt();
          }
          if (currentDecoder.getShared) {
            loadShared();
            structure = currentStructures[token & 0x1fff];
            if (structure) {
              if (!structure.read) {
                structure.read = createStructureReader(structure);
              }
              return structure.read();
            }
          }
        }
      }
      let extension = currentExtensions[token];
      if (extension) {
        if (extension.handlesRead) {
          return extension(read);
        } else {
          return extension(read());
        }
      } else {
        let input = read();
        for (let i = 0; i < currentExtensionRanges.length; i++) {
          let value = currentExtensionRanges[i](token, input);
          if (value !== undefined) {
            return value;
          }
        }
        return new Tag(input, token);
      }
    case 7:
      // fixed value
      switch (token) {
        case 0x14:
          return false;
        case 0x15:
          return true;
        case 0x16:
          return null;
        case 0x17:
          return;
        // undefined
        case 0x1f:
        default:
          let packedValue = (packedValues || getPackedValues())[token];
          if (packedValue !== undefined) {
            return packedValue;
          }
          throw new Error("Unknown token " + token);
      }
    default:
      // negative int
      if (isNaN(token)) {
        let error = new Error("Unexpected end of CBOR data");
        error.incomplete = true;
        throw error;
      }
      throw new Error("Unknown CBOR token " + token);
  }
}
const validName = /^[a-zA-Z_$][a-zA-Z\d_$]*$/;
function createStructureReader(structure) {
  function readObject() {
    // get the array size from the header
    let length = src[position++];
    //let majorType = token >> 5
    length = length & 0x1f;
    if (length > 0x17) {
      switch (length) {
        case 0x18:
          length = src[position++];
          break;
        case 0x19:
          length = dataView.getUint16(position);
          position += 2;
          break;
        case 0x1a:
          length = dataView.getUint32(position);
          position += 4;
          break;
        default:
          throw new Error("Expected array header, but got " + src[position - 1]);
      }
    }
    // This initial function is quick to instantiate, but runs slower. After several iterations pay the cost to build the faster function
    let compiledReader = this.compiledReader; // first look to see if we have the fast compiled function
    while (compiledReader) {
      // we have a fast compiled object literal reader
      if (compiledReader.propertyCount === length) {
        return compiledReader(read);
      } // with the right length, so we use it
      compiledReader = compiledReader.next; // see if there is another reader with the right length
    }

    if (this.slowReads++ >= 3) {
      // create a fast compiled reader
      let array = this.length == length ? this : this.slice(0, length);
      compiledReader = currentDecoder.keyMap ? new Function("r", "return {" + array.map(k => currentDecoder.decodeKey(k)).map(k => validName.test(k) ? safeKey(k) + ":r()" : "[" + JSON.stringify(k) + "]:r()").join(",") + "}") : new Function("r", "return {" + array.map(key => validName.test(key) ? safeKey(key) + ":r()" : "[" + JSON.stringify(key) + "]:r()").join(",") + "}");
      if (this.compiledReader) {
        compiledReader.next = this.compiledReader;
      } // if there is an existing one, we store multiple readers as a linked list because it is usually pretty rare to have multiple readers (of different length) for the same structure
      compiledReader.propertyCount = length;
      this.compiledReader = compiledReader;
      return compiledReader(read);
    }
    let object = {};
    if (currentDecoder.keyMap) {
      for (let i = 0; i < length; i++) {
        object[safeKey(currentDecoder.decodeKey(this[i]))] = read();
      }
    } else {
      for (let i = 0; i < length; i++) {
        object[safeKey(this[i])] = read();
      }
    }
    return object;
  }
  structure.slowReads = 0;
  return readObject;
}
function safeKey(key) {
  return key === "__proto__" ? "__proto_" : key;
}
let readFixedString = readStringJS;
function readStringJS(length) {
  let result;
  if (length < 16) {
    if (result = shortStringInJS(length)) {
      return result;
    }
  }
  if (length > 64 && decoder) {
    return decoder.decode(src.subarray(position, position += length));
  }
  const end = position + length;
  const units = [];
  result = "";
  while (position < end) {
    const byte1 = src[position++];
    if ((byte1 & 0x80) === 0) {
      // 1 byte
      units.push(byte1);
    } else if ((byte1 & 0xe0) === 0xc0) {
      // 2 bytes
      const byte2 = src[position++] & 0x3f;
      units.push((byte1 & 0x1f) << 6 | byte2);
    } else if ((byte1 & 0xf0) === 0xe0) {
      // 3 bytes
      const byte2 = src[position++] & 0x3f;
      const byte3 = src[position++] & 0x3f;
      units.push((byte1 & 0x1f) << 12 | byte2 << 6 | byte3);
    } else if ((byte1 & 0xf8) === 0xf0) {
      // 4 bytes
      const byte2 = src[position++] & 0x3f;
      const byte3 = src[position++] & 0x3f;
      const byte4 = src[position++] & 0x3f;
      let unit = (byte1 & 0x07) << 0x12 | byte2 << 0x0c | byte3 << 0x06 | byte4;
      if (unit > 0xffff) {
        unit -= 0x10000;
        units.push(unit >>> 10 & 0x3ff | 0xd800);
        unit = 0xdc00 | unit & 0x3ff;
      }
      units.push(unit);
    } else {
      units.push(byte1);
    }
    if (units.length >= 0x1000) {
      result += fromCharCode.apply(String, units);
      units.length = 0;
    }
  }
  if (units.length > 0) {
    result += fromCharCode.apply(String, units);
  }
  return result;
}
let fromCharCode = String.fromCharCode;
function longStringInJS(length) {
  let start = position;
  let bytes = new Array(length);
  for (let i = 0; i < length; i++) {
    const byte = src[position++];
    if ((byte & 0x80) > 0) {
      position = start;
      return;
    }
    bytes[i] = byte;
  }
  return fromCharCode.apply(String, bytes);
}
function shortStringInJS(length) {
  if (length < 4) {
    if (length < 2) {
      if (length === 0) {
        return "";
      } else {
        let a = src[position++];
        if ((a & 0x80) > 1) {
          position -= 1;
          return;
        }
        return fromCharCode(a);
      }
    } else {
      let a = src[position++];
      let b = src[position++];
      if ((a & 0x80) > 0 || (b & 0x80) > 0) {
        position -= 2;
        return;
      }
      if (length < 3) {
        return fromCharCode(a, b);
      }
      let c = src[position++];
      if ((c & 0x80) > 0) {
        position -= 3;
        return;
      }
      return fromCharCode(a, b, c);
    }
  } else {
    let a = src[position++];
    let b = src[position++];
    let c = src[position++];
    let d = src[position++];
    if ((a & 0x80) > 0 || (b & 0x80) > 0 || (c & 0x80) > 0 || (d & 0x80) > 0) {
      position -= 4;
      return;
    }
    if (length < 6) {
      if (length === 4) {
        return fromCharCode(a, b, c, d);
      } else {
        let e = src[position++];
        if ((e & 0x80) > 0) {
          position -= 5;
          return;
        }
        return fromCharCode(a, b, c, d, e);
      }
    } else if (length < 8) {
      let e = src[position++];
      let f = src[position++];
      if ((e & 0x80) > 0 || (f & 0x80) > 0) {
        position -= 6;
        return;
      }
      if (length < 7) {
        return fromCharCode(a, b, c, d, e, f);
      }
      let g = src[position++];
      if ((g & 0x80) > 0) {
        position -= 7;
        return;
      }
      return fromCharCode(a, b, c, d, e, f, g);
    } else {
      let e = src[position++];
      let f = src[position++];
      let g = src[position++];
      let h = src[position++];
      if ((e & 0x80) > 0 || (f & 0x80) > 0 || (g & 0x80) > 0 || (h & 0x80) > 0) {
        position -= 8;
        return;
      }
      if (length < 10) {
        if (length === 8) {
          return fromCharCode(a, b, c, d, e, f, g, h);
        } else {
          let i = src[position++];
          if ((i & 0x80) > 0) {
            position -= 9;
            return;
          }
          return fromCharCode(a, b, c, d, e, f, g, h, i);
        }
      } else if (length < 12) {
        let i = src[position++];
        let j = src[position++];
        if ((i & 0x80) > 0 || (j & 0x80) > 0) {
          position -= 10;
          return;
        }
        if (length < 11) {
          return fromCharCode(a, b, c, d, e, f, g, h, i, j);
        }
        let k = src[position++];
        if ((k & 0x80) > 0) {
          position -= 11;
          return;
        }
        return fromCharCode(a, b, c, d, e, f, g, h, i, j, k);
      } else {
        let i = src[position++];
        let j = src[position++];
        let k = src[position++];
        let l = src[position++];
        if ((i & 0x80) > 0 || (j & 0x80) > 0 || (k & 0x80) > 0 || (l & 0x80) > 0) {
          position -= 12;
          return;
        }
        if (length < 14) {
          if (length === 12) {
            return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l);
          } else {
            let m = src[position++];
            if ((m & 0x80) > 0) {
              position -= 13;
              return;
            }
            return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m);
          }
        } else {
          let m = src[position++];
          let n = src[position++];
          if ((m & 0x80) > 0 || (n & 0x80) > 0) {
            position -= 14;
            return;
          }
          if (length < 15) {
            return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n);
          }
          let o = src[position++];
          if ((o & 0x80) > 0) {
            position -= 15;
            return;
          }
          return fromCharCode(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o);
        }
      }
    }
  }
}
function readBin(length) {
  return currentDecoder.copyBuffers ?
  // specifically use the copying slice (not the node one)
  Uint8Array.prototype.slice.call(src, position, position += length) : src.subarray(position, position += length);
}
let f32Array = new Float32Array(1);
let u8Array = new Uint8Array(f32Array.buffer, 0, 4);
function getFloat16() {
  let byte0 = src[position++];
  let byte1 = src[position++];
  let exponent = (byte0 & 0x7f) >> 2;
  if (exponent === 0x1f) {
    // specials
    if (byte1 || byte0 & 3) {
      return NaN;
    }
    return byte0 & 0x80 ? -Infinity : Infinity;
  }
  if (exponent === 0) {
    // sub-normals
    // significand with 10 fractional bits and divided by 2^14
    let abs = ((byte0 & 3) << 8 | byte1) / (1 << 24);
    return byte0 & 0x80 ? -abs : abs;
  }
  u8Array[3] = byte0 & 0x80 |
  // sign bit
  (exponent >> 1) + 56; // 4 of 5 of the exponent bits, re-offset-ed
  u8Array[2] = (byte0 & 7) << 5 |
  // last exponent bit and first two mantissa bits
  byte1 >> 3; // next 5 bits of mantissa
  u8Array[1] = byte1 << 5; // last three bits of mantissa
  u8Array[0] = 0;
  return f32Array[0];
}
class Tag {
  constructor(value, tag) {
    this.value = value;
    this.tag = tag;
  }
}
currentExtensions[0] = dateString => {
  // string date extension
  return new Date(dateString);
};
currentExtensions[1] = epochSec => {
  // numeric date extension
  return new Date(Math.round(epochSec * 1000));
};
currentExtensions[2] = buffer => {
  // bigint extension
  let value = BigInt(0);
  for (let i = 0, l = buffer.byteLength; i < l; i++) {
    value = BigInt(buffer[i]) + value << BigInt(8);
  }
  return value;
};
currentExtensions[3] = buffer => {
  // negative bigint extension
  return BigInt(-1) - currentExtensions[2](buffer);
};
currentExtensions[4] = fraction => {
  // best to reparse to maintain accuracy
  return Number(fraction[1] + "e" + fraction[0]);
};
currentExtensions[5] = fraction => {
  // probably not sufficiently accurate
  return fraction[1] * Math.exp(fraction[0] * Math.log(2));
};

// the registration of the record definition extension
const recordDefinition = definition => {
  let id = definition[0] - 0xe000;
  let structure = definition[1];
  let existingStructure = currentStructures[id];
  if (existingStructure && existingStructure.isShared) {
    (currentStructures.restoreStructures || (currentStructures.restoreStructures = []))[id] = existingStructure;
  }
  currentStructures[id] = structure;
  structure.read = createStructureReader(structure);
  let object = {};
  if (currentDecoder.keyMap) {
    for (let i = 2, l = definition.length; i < l; i++) {
      let key = currentDecoder.decodeKey(structure[i - 2]);
      object[safeKey(key)] = definition[i];
    }
  } else {
    for (let i = 2, l = definition.length; i < l; i++) {
      let key = structure[i - 2];
      object[safeKey(key)] = definition[i];
    }
  }
  return object;
};
currentExtensions[LEGACY_RECORD_INLINE_ID] = recordDefinition;
currentExtensions[14] = value => {
  if (bundledStrings) {
    return bundledStrings[0].slice(bundledStrings.position0, bundledStrings.position0 += value);
  }
  return new Tag(value, 14);
};
currentExtensions[15] = value => {
  if (bundledStrings) {
    return bundledStrings[1].slice(bundledStrings.position1, bundledStrings.position1 += value);
  }
  return new Tag(value, 15);
};
let glbl = {
  Error,
  RegExp
};
currentExtensions[27] = data => {
  // http://cbor.schmorp.de/generic-object
  return (glbl[data[0]] || Error)(data[1], data[2]);
};
const packedTable = _read => {
  if (src[position++] != 0x84) {
    throw new Error("Packed values structure must be followed by a 4 element array");
  }
  let newPackedValues = _read(); // packed values
  packedValues = packedValues ? newPackedValues.concat(packedValues.slice(newPackedValues.length)) : newPackedValues;
  packedValues.prefixes = _read();
  packedValues.suffixes = _read();
  return _read(); // read the rump
};

packedTable.handlesRead = true;
currentExtensions[51] = packedTable;
currentExtensions[PACKED_REFERENCE_TAG_ID] = data => {
  // packed reference
  if (!packedValues) {
    if (currentDecoder.getShared) {
      loadShared();
    } else {
      return new Tag(data, PACKED_REFERENCE_TAG_ID);
    }
  }
  if (typeof data === "number") {
    return packedValues[16 + (data >= 0 ? 2 * data : -2 * data - 1)];
  }
  throw new Error("No support for non-integer packed references yet");
};
currentExtensions[25] = id => {
  return stringRefs[id];
};
currentExtensions[256] = _read => {
  stringRefs = [];
  try {
    return _read();
  } finally {
    stringRefs = null;
  }
};
currentExtensions[256].handlesRead = true;
currentExtensions[28] = _read => {
  // shareable http://cbor.schmorp.de/value-sharing (for structured clones)
  if (!referenceMap) {
    referenceMap = new Map();
    referenceMap.id = 0;
  }
  let id = referenceMap.id++;
  let token = src[position];
  let target;
  // TODO: handle Maps, Sets, and other types that can cycle; this is complicated, because you potentially need to read
  // ahead past references to record structure definitions
  if (token >> 5 == 4) {
    target = [];
  } else {
    target = {};
  }
  let refEntry = {
    target
  }; // a placeholder object
  referenceMap.set(id, refEntry);
  let targetProperties = _read(); // read the next value as the target object to id
  if (refEntry.used) {
    // there is a cycle, so we have to assign properties to original target
    return Object.assign(target, targetProperties);
  }
  refEntry.target = targetProperties; // the placeholder wasn't used, replace with the deserialized one
  return targetProperties; // no cycle, can just use the returned read object
};

currentExtensions[28].handlesRead = true;
currentExtensions[29] = id => {
  // sharedref http://cbor.schmorp.de/value-sharing (for structured clones)
  let refEntry = referenceMap.get(id);
  refEntry.used = true;
  return refEntry.target;
};
currentExtensions[258] = array => new Set(array); // https://github.com/input-output-hk/cbor-sets-spec/blob/master/CBOR_SETS.md
(currentExtensions[259] = _read => {
  // https://github.com/shanewholloway/js-cbor-codec/blob/master/docs/CBOR-259-spec
  // for decoding as a standard Map
  if (currentDecoder.mapsAsObjects) {
    currentDecoder.mapsAsObjects = false;
    restoreMapsAsObject = true;
  }
  return _read();
}).handlesRead = true;
function combine(a, b) {
  if (typeof a === "string") {
    return a + b;
  }
  if (a instanceof Array) {
    return a.concat(b);
  }
  return Object.assign({}, a, b);
}
function getPackedValues() {
  if (!packedValues) {
    if (currentDecoder.getShared) {
      loadShared();
    } else {
      throw new Error("No packed values available");
    }
  }
  return packedValues;
}
const SHARED_DATA_TAG_ID = 0x53687264; // ascii 'Shrd'
currentExtensionRanges.push((tag, input) => {
  if (tag >= 225 && tag <= 255) {
    return combine(getPackedValues().prefixes[tag - 224], input);
  }
  if (tag >= 28704 && tag <= 32767) {
    return combine(getPackedValues().prefixes[tag - 28672], input);
  }
  if (tag >= 1879052288 && tag <= 2147483647) {
    return combine(getPackedValues().prefixes[tag - 1879048192], input);
  }
  if (tag >= 216 && tag <= 223) {
    return combine(input, getPackedValues().suffixes[tag - 216]);
  }
  if (tag >= 27647 && tag <= 28671) {
    return combine(input, getPackedValues().suffixes[tag - 27639]);
  }
  if (tag >= 1811940352 && tag <= 1879048191) {
    return combine(input, getPackedValues().suffixes[tag - 1811939328]);
  }
  if (tag == SHARED_DATA_TAG_ID) {
    // we do a special check for this so that we can keep the currentExtensions as densely stored array (v8 stores arrays densely under about 3000 elements)
    return {
      packedValues: packedValues,
      structures: currentStructures.slice(0),
      version: input
    };
  }
  if (tag == 55799) {
    // self-descriptive CBOR tag, just return input value
    return input;
  }
});
const isLittleEndianMachine = new Uint8Array(new Uint16Array([1]).buffer)[0] == 1;
const typedArrays = [Uint8Array];
const typedArrayTags = [64];
for (let i = 0; i < typedArrays.length; i++) {
  registerTypedArray(typedArrays[i], typedArrayTags[i]);
}
function registerTypedArray(TypedArray, tag) {
  let dvMethod = "get" + TypedArray.name.slice(0, -5);
  if (typeof TypedArray !== "function") {
    TypedArray = null;
  }
  let bytesPerElement = TypedArray.BYTES_PER_ELEMENT;
  for (let littleEndian = 0; littleEndian < 2; littleEndian++) {
    if (!littleEndian && bytesPerElement == 1) {
      continue;
    }
    let sizeShift = bytesPerElement == 2 ? 1 : bytesPerElement == 4 ? 2 : 3;
    currentExtensions[littleEndian ? tag : tag - 4] = bytesPerElement == 1 || littleEndian == isLittleEndianMachine ? buffer => {
      if (!TypedArray) {
        throw new Error("Could not find typed array for code " + tag);
      }
      // we have to always slice/copy here to get a new ArrayBuffer that is word/byte aligned
      return new TypedArray(Uint8Array.prototype.slice.call(buffer, 0).buffer);
    } : buffer => {
      if (!TypedArray) {
        throw new Error("Could not find typed array for code " + tag);
      }
      let dv = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
      let elements = buffer.length >> sizeShift;
      let ta = new TypedArray(elements);
      let method = dv[dvMethod];
      for (let i = 0; i < elements; i++) {
        ta[i] = method.call(dv, i << sizeShift, littleEndian);
      }
      return ta;
    };
  }
}
function readBundleExt() {
  let length = readJustLength();
  let bundlePosition = position + read();
  for (let i = 2; i < length; i++) {
    // skip past bundles that were already read
    let bundleLength = readJustLength(); // this will increment position, so must add to position afterwards
    position += bundleLength;
  }
  let dataPosition = position;
  position = bundlePosition;
  bundledStrings = [readStringJS(readJustLength()), readStringJS(readJustLength())];
  bundledStrings.position0 = 0;
  bundledStrings.position1 = 0;
  bundledStrings.postBundlePosition = position;
  position = dataPosition;
  return read();
}
function readJustLength() {
  let token = src[position++] & 0x1f;
  if (token > 0x17) {
    switch (token) {
      case 0x18:
        token = src[position++];
        break;
      case 0x19:
        token = dataView.getUint16(position);
        position += 2;
        break;
      case 0x1a:
        token = dataView.getUint32(position);
        position += 4;
        break;
    }
  }
  return token;
}
function loadShared() {
  if (currentDecoder.getShared) {
    let sharedData = saveState(() => {
      // save the state in case getShared modifies our buffer
      src = null;
      return currentDecoder.getShared();
    }) || {};
    let updatedStructures = sharedData.structures || [];
    currentDecoder.sharedVersion = sharedData.version;
    packedValues = currentDecoder.sharedValues = sharedData.packedValues;
    if (currentStructures === true) {
      currentDecoder.structures = currentStructures = updatedStructures;
    } else {
      currentStructures.splice.apply(currentStructures, [0, updatedStructures.length].concat(updatedStructures));
    }
  }
}
function saveState(callback) {
  let savedSrcEnd = srcEnd;
  let savedPosition = position;
  let savedSrcStringStart = srcStringStart;
  let savedSrcStringEnd = srcStringEnd;
  let savedSrcString = srcString;
  let savedReferenceMap = referenceMap;
  let savedBundledStrings = bundledStrings;

  // TODO: We may need to revisit this if we do more external calls to user code (since it could be slow)
  let savedSrc = new Uint8Array(src.slice(0, srcEnd)); // we copy the data in case it changes while external data is processed
  let savedStructures = currentStructures;
  let savedDecoder = currentDecoder;
  let savedSequentialMode = sequentialMode;
  let value = callback();
  srcEnd = savedSrcEnd;
  position = savedPosition;
  srcStringStart = savedSrcStringStart;
  srcStringEnd = savedSrcStringEnd;
  srcString = savedSrcString;
  referenceMap = savedReferenceMap;
  bundledStrings = savedBundledStrings;
  src = savedSrc;
  sequentialMode = savedSequentialMode;
  currentStructures = savedStructures;
  currentDecoder = savedDecoder;
  dataView = new DataView(src.buffer, src.byteOffset, src.byteLength);
  return value;
}
function clearSource() {
  src = null;
  referenceMap = null;
  currentStructures = null;
}
const mult10 = new Array(147); // this is a table matching binary exponents to the multiplier to determine significant digit rounding
for (let i = 0; i < 256; i++) {
  mult10[i] = Number("1e" + Math.floor(45.15 - i * 0.30103));
}
const defaultDecoder = new Decoder({
  useRecords: false
});
const decode = defaultDecoder.decode;

/**
 * @internal
 * @param hex
 */
function hexToBytes(hex) {
  hex = hex.toString(16);
  if (!hex.startsWith("0x")) {
    hex = `0x${hex}`;
  }
  if (!isHexStrict(hex)) {
    throw new Error(`Given value "${hex}" is not a valid hex string.`);
  }
  hex = hex.replace(/^0x/i, "");
  const bytes = [];
  for (let c = 0; c < hex.length; c += 2) {
    bytes.push(parseInt(hex.slice(c, c + 2), 16));
  }
  return bytes;
}

/**
 * @internal
 * @param hex
 */
function isHexStrict(hex) {
  return (typeof hex === "string" || typeof hex === "number") && /^(-)?0x[0-9a-f]*$/i.test(hex.toString());
}

/**
 * @internal
 * @param bytecode
 */
function extractIPFSHashFromBytecode(bytecode) {
  const numericBytecode = hexToBytes(bytecode);
  const cborLength = numericBytecode[numericBytecode.length - 2] * 0x100 + numericBytecode[numericBytecode.length - 1];
  const bytecodeBuffer = Uint8Array.from(numericBytecode.slice(numericBytecode.length - 2 - cborLength, -2));
  const cborData = decode(bytecodeBuffer);
  if ("ipfs" in cborData && cborData["ipfs"]) {
    try {
      return `ipfs://${bs58.encode(cborData["ipfs"])}`;
    } catch (e) {
      console.warn("feature-detection ipfs cbor failed", e);
    }
  }
  return undefined;
}

/**
 * @internal
 * @param bytecode
 */
function extractMinimalProxyImplementationAddress(bytecode) {
  // EIP-1167 clone minimal proxy - https://eips.ethereum.org/EIPS/eip-1167
  if (bytecode.startsWith("0x363d3d373d3d3d363d73")) {
    const implementationAddress = bytecode.slice(22, 62);
    return `0x${implementationAddress}`;
  }

  // Minimal Proxy with receive() from 0xSplits - https://github.com/0xSplits/splits-contracts/blob/c7b741926ec9746182d0d1e2c4c2046102e5d337/contracts/libraries/Clones.sol
  if (bytecode.startsWith("0x36603057343d5230")) {
    // +40 = size of addr
    const implementationAddress = bytecode.slice(122, 122 + 40);
    return `0x${implementationAddress}`;
  }

  // 0age's minimal proxy - https://medium.com/coinmonks/the-more-minimal-proxy-5756ae08ee48
  if (bytecode.startsWith("0x3d3d3d3d363d3d37363d73")) {
    // +40 = size of addr
    const implementationAddress = bytecode.slice(24, 24 + 40);
    return `0x${implementationAddress}`;
  }

  // vyper's minimal proxy (uniswap v1) - https://etherscan.io/address/0x09cabec1ead1c0ba254b09efb3ee13841712be14#code
  if (bytecode.startsWith("0x366000600037611000600036600073")) {
    const implementationAddress = bytecode.slice(32, 32 + 40);
    return `0x${implementationAddress}`;
  }
  return undefined;
}

/**
 * @internal
 * @param address
 * @param provider
 */
async function resolveContractUriFromAddress(address, provider) {
  const {
    bytecode
  } = await resolveImplementation(address, provider);
  return extractIPFSHashFromBytecode(bytecode);
}
async function resolveContractUriAndBytecode(address, provider) {
  const {
    bytecode
  } = await resolveImplementation(address, provider);
  return {
    uri: extractIPFSHashFromBytecode(bytecode),
    bytecode
  };
}

/**
 * Resolve the implementation address of a proxy contract and its bytecode
 * @param address the contract address
 * @param provider RPC provider
 * @returns the implementation address and its bytecode
 */
async function resolveImplementation(address, provider) {
  let bytecode;
  try {
    bytecode = await provider.getCode(address);
  } catch (e) {
    throw new Error(`Failed to get bytecode for address ${address}: ${e}`);
  }
  if (bytecode === "0x") {
    const chain = await provider.getNetwork();
    throw new Error(`Contract at ${address} does not exist on chain '${chain.name}' (chainId: ${chain.chainId})`);
  }
  try {
    // TODO support other types of proxies
    const implementationAddress = extractMinimalProxyImplementationAddress(bytecode);
    if (implementationAddress) {
      return await resolveImplementation(implementationAddress, provider);
    }
  } catch (e) {
    // ignore
  }

  // EIP-1967 proxy storage slots - https://eips.ethereum.org/EIPS/eip-1967
  try {
    const proxyStorage = await provider.getStorageAt(address, BigNumber.from("0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc"));
    const implementationAddress = `0x${proxyStorage.slice(-40)}`;
    if (utils.isAddress(implementationAddress) && implementationAddress !== constants.AddressZero) {
      return await resolveImplementation(implementationAddress, provider);
    }
  } catch (e) {
    // ignore
  }
  if (!bytecode) {
    throw new Error(`Error fetching bytecode for ${address}`);
  }
  return {
    address,
    bytecode
  };
}

const CONTRACT_METADATA_TIMEOUT_SEC = 2;

/**
 * @internal
 * @param compilerMetadataUri
 * @param storage
 */
async function fetchContractMetadata(compilerMetadataUri, storage) {
  // short timeout to avoid hanging on unpinned contract metadata CIDs
  const metadata = await storage.downloadJSON(compilerMetadataUri, {
    timeoutInSeconds: CONTRACT_METADATA_TIMEOUT_SEC
  });
  if (!metadata || !metadata.output) {
    throw new Error(`Could not resolve metadata for contract at ${compilerMetadataUri}`);
  }
  const abi = AbiSchema.parse(metadata.output.abi);
  const compilationTarget = metadata.settings.compilationTarget;
  const targets = Object.keys(compilationTarget);
  const name = compilationTarget[targets[0]];
  const info = ContractInfoSchema.parse({
    title: metadata.output.devdoc.title,
    author: metadata.output.devdoc.author,
    details: metadata.output.devdoc.detail,
    notice: metadata.output.userdoc.notice
  });
  const licenses = [...new Set(Object.entries(metadata.sources).map(_ref => {
    let [, src] = _ref;
    return src.license;
  }))];
  return {
    name,
    abi,
    metadata,
    info,
    licenses
  };
}

function getProcessEnv(key) {
  let defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  if (typeof process !== "undefined") {
    if (process.env[key]) {
      return process.env[key];
    }
  }
  return defaultValue;
}

const MultichainRegistry_address = "0xcdAD8FA86e18538aC207872E8ff3536501431B73"; // Polygon only

/**
 * @internal
 */
function getMultichainRegistryAddress() {
  return getProcessEnv("multiChainRegistryAddress", MultichainRegistry_address);
}

/**
 * @internal
 */
const isBrowser = () => "object" !== "undefined";

/**
 * @internal
 */
const isNode = () => !isBrowser();

/**
 * @internal
 */
function unique(a, fn) {
  if (a.length === 0 || a.length === 1) {
    return a;
  }
  if (!fn) {
    return a;
  }
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (fn(a[i], a[j])) {
        a.splice(j, 1);
      }
    }
  }
  return a;
}

/**
 * @internal
 */
function joinABIs(abis) {
  const parsedABIs = abis.map(abi => AbiSchema.parse(abi)).flat();
  const filteredABIs = unique(parsedABIs, (a, b) => {
    return a.name === b.name && a.type === b.type && a.inputs.length === b.inputs.length;
  });
  const finalABIs = filteredABIs.filter(item => item.type !== "constructor");
  return AbiSchema.parse(finalABIs);
}

function extractFeatures(input, enabledExtensions) {
  if (!input) {
    return;
  }
  for (const extensionKey in input) {
    const extension = input[extensionKey];
    // if extension is enabled, then add it to enabledFeatures
    if (extension.enabled) {
      enabledExtensions.push(extension);
    }
    // recurse
    extractFeatures(extension.features, enabledExtensions);
  }
}

/**
 * Return all the detected features in the abi
 * @param abi - parsed array of abi entries
 * @returns array of all detected extensions with full information on each feature
 * @internal
 * @deprecated use getAllDetectedExtensions instead
 */
function getAllDetectedFeatures(abi) {
  const features = [];
  extractFeatures(detectFeatures(abi), features);
  return features;
}
function getAllDetectedExtensionsFromBytecode(bytecode) {
  const features = [];
  extractFeatures(detectFeaturesFromBytecode(bytecode), features);
  return features;
}
function constructAbiFromBytecode(bytecode) {
  let extensions = getAllDetectedExtensionsFromBytecode(bytecode);
  // special deduping for ERC721 and ERC20
  if (extensions.find(f => f.name === "ERC721")) {
    extensions = extensions.filter(f => f.name !== "ERC20");
  }
  const abi = joinABIs(extensions.map(f => joinABIs(f.abis)));
  return abi;
}

/**
 * Return all the detected extensions in the abi
 * @param abi - parsed array of abi entries
 * @returns array of all detected extensions with full information on each feature
 * @public
 */
function getAllDetectedExtensions(abi) {
  return getAllDetectedFeatures(abi).map(f => ({
    ...f,
    extensions: f.features
  }));
}

// Internal static cache
const metadataCache = {};
let multichainRegistry = undefined;
function getCacheKey(address, chainId) {
  return `${address}-${chainId}`;
}
function putInCache(address, chainId, metadata) {
  metadataCache[getCacheKey(address, chainId)] = metadata;
}
function getFromCache(address, chainId) {
  return metadataCache[getCacheKey(address, chainId)];
}

/**
 * @internal
 * @param address
 * @param provider
 * @param storage
 */
async function fetchContractMetadataFromAddress(address, provider, storage) {
  let sdkOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  const chainId = (await provider.getNetwork()).chainId; // TODO resolve from sdk network
  const cached = getFromCache(address, chainId);
  if (cached) {
    return cached;
  }
  let metadata;

  // we can't race here, because the contract URI might resolve first with a non pinned URI
  const [ipfsData, registryData] = await Promise.all([resolveContractUriAndBytecode(address, provider).catch(() => undefined), getMetadataUriFromMultichainRegistry(address, chainId, sdkOptions).then(uri => {
    if (!uri) {
      return undefined;
    }
    return {
      uri,
      bytecode: ""
    };
  }).catch(() => undefined)]);
  const bytecode = ipfsData?.bytecode;
  const metadataUri = registryData?.uri || ipfsData?.uri;
  if (!metadataUri && !bytecode) {
    throw new Error(`Could not fetch bytecode for contract at ${address} on chain ${chainId}, double check that the address and chainId are correct.`);
  }
  try {
    metadata = await fetchContractMetadata(metadataUri, storage);
  } catch (e) {
    // Don't warn here, its common to not have IPFS metadata for a contract, fallback to bytecode
  }
  if (!metadata && bytecode) {
    const abi = constructAbiFromBytecode(bytecode);
    if (abi && abi.length > 0) {
      console.warn(`Contract metadata could only be partially resolved, some contract functions might be unavailable. Try importing the contract by visiting: https://thirdweb.com/${chainId}/${address}`);
      // return partial ABI
      metadata = {
        name: "Unimported Contract",
        abi: abi,
        metadata: {},
        info: {},
        licenses: [],
        isPartialAbi: true
      };
      // return without caching
      return metadata;
    }
  }
  if (!metadata) {
    throw new Error(`Could not resolve contract. Try importing it by visiting: https://thirdweb.com/${chainId}/${address}`);
  }
  putInCache(address, chainId, metadata);
  return metadata;
}
async function getMetadataUriFromMultichainRegistry(address, chainId, sdkOptions) {
  if (!multichainRegistry) {
    const polygonChain = sdkOptions?.supportedChains?.find(c => c.chainId === 137);
    const chain = polygonChain || Polygon;
    multichainRegistry = new Contract(getMultichainRegistryAddress(), TWRegistryABI, getChainProvider(chain, sdkOptions));
  }
  const importedUri = await multichainRegistry.getMetadataUri(chainId, address);
  return importedUri;
}

/**
 * @internal
 * @param address
 * @param provider
 * @param storage
 * @returns
 */
async function fetchAbiFromAddress(address, provider, storage) {
  try {
    const metadata = await fetchContractMetadataFromAddress(address, provider, storage);
    if (metadata && metadata.abi) {
      return metadata.abi;
    }
  } catch (e) {
    // ignore and return undefined
    // will fallback to embedded ABIs for prebuilts
  }
  return undefined;
}

function buildDeployTransactionFunction(fn) {
  async function executeFn() {
    const tx = await fn(...arguments);
    return tx.execute();
  }
  executeFn.prepare = fn;
  return executeFn;
}
function buildTransactionFunction(fn) {
  async function executeFn() {
    const tx = await fn(...arguments);
    return tx.execute();
  }
  executeFn.prepare = fn;
  return executeFn;
}

async function getDefaultGasOverrides(provider) {
  // If we're running in the browser, let users configure gas price in their wallet UI
  if (isBrowser()) {
    return {};
  }

  // handle smart wallet provider
  if (provider.originalProvider) {
    provider = provider.originalProvider;
  }
  const feeData = await getDynamicFeeData(provider);
  if (feeData.maxFeePerGas && feeData.maxPriorityFeePerGas) {
    return {
      maxFeePerGas: feeData.maxFeePerGas,
      maxPriorityFeePerGas: feeData.maxPriorityFeePerGas
    };
  } else {
    return {
      gasPrice: await getGasPrice(provider)
    };
  }
}
async function getDynamicFeeData(provider) {
  let maxFeePerGas = null;
  let maxPriorityFeePerGas = null;
  const [{
    chainId
  }, block, eth_maxPriorityFeePerGas] = await Promise.all([provider.getNetwork(), provider.getBlock("latest"), provider.send("eth_maxPriorityFeePerGas", []).catch(() => null)]);
  const baseBlockFee = block && block.baseFeePerGas ? block.baseFeePerGas : utils.parseUnits("100", "wei");
  if (chainId === Mumbai.chainId || chainId === Polygon.chainId) {
    // for polygon, get fee data from gas station
    maxPriorityFeePerGas = await getPolygonGasPriorityFee(chainId);
  } else if (eth_maxPriorityFeePerGas) {
    // prioritize fee from eth_maxPriorityFeePerGas
    maxPriorityFeePerGas = BigNumber.from(eth_maxPriorityFeePerGas);
  } else {
    // if eth_maxPriorityFeePerGas is not available, use 1.5 gwei default
    const feeData = await provider.getFeeData();
    maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
    if (!maxPriorityFeePerGas) {
      // chain does not support eip-1559, return null for both
      return {
        maxFeePerGas: null,
        maxPriorityFeePerGas: null
      };
    }
  }

  // eip-1559 formula, with an extra 10% tip to account for gas volatility
  maxFeePerGas = baseBlockFee.mul(2).add(getPreferredPriorityFee(maxPriorityFeePerGas));
  return {
    maxFeePerGas,
    maxPriorityFeePerGas
  };
}
function getPreferredPriorityFee(defaultPriorityFeePerGas) {
  let percentMultiplier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  const extraTip = defaultPriorityFeePerGas.div(100).mul(percentMultiplier); // + 10%
  const txGasPrice = defaultPriorityFeePerGas.add(extraTip);
  return txGasPrice;
}
async function getGasPrice(provider) {
  const gasPrice = await provider.getGasPrice();
  const maxGasPrice = utils.parseUnits("300", "gwei"); // 300 gwei
  const extraTip = gasPrice.div(100).mul(10); // + 10%
  const txGasPrice = gasPrice.add(extraTip);
  if (txGasPrice.gt(maxGasPrice)) {
    return maxGasPrice;
  }
  return txGasPrice;
}

/**
 * @internal
 */
function getGasStationUrl(chainId) {
  switch (chainId) {
    case ChainId.Polygon:
      return "https://gasstation.polygon.technology/v2";
    case ChainId.Mumbai:
      return "https://gasstation-testnet.polygon.technology/v2";
  }
}
const MIN_POLYGON_GAS_PRICE = /* @__PURE__ */utils.parseUnits("31", "gwei");
const MIN_MUMBAI_GAS_PRICE = /* @__PURE__ */utils.parseUnits("1", "gwei");

/**
 * @internal
 */
function getDefaultGasFee(chainId) {
  switch (chainId) {
    case ChainId.Polygon:
      return MIN_POLYGON_GAS_PRICE;
    case ChainId.Mumbai:
      return MIN_MUMBAI_GAS_PRICE;
  }
}

/**
 *
 * @returns the gas price
 * @internal
 */
async function getPolygonGasPriorityFee(chainId) {
  const gasStationUrl = getGasStationUrl(chainId);
  try {
    const data = await (await fetch(gasStationUrl)).json();
    // take the standard speed here, SDK options will define the extra tip
    const priorityFee = data["fast"]["maxPriorityFee"];
    if (priorityFee > 0) {
      const fixedFee = parseFloat(priorityFee).toFixed(9);
      return utils.parseUnits(fixedFee, "gwei");
    }
  } catch (e) {
    console.error("failed to fetch gas", e);
  }
  return getDefaultGasFee(chainId);
}

/**
 * @internal
 * @param publishedMetadata
 * @param storage
 */

async function fetchSourceFilesFromMetadata(publishedMetadata, storage) {
  return await Promise.all(Object.entries(publishedMetadata.metadata.sources).map(async _ref => {
    let [path, info] = _ref;
    const urls = info.urls;
    const ipfsLink = urls ? urls.find(url => url.includes("ipfs")) : undefined;
    if (ipfsLink) {
      const ipfsHash = ipfsLink.split("ipfs/")[1];
      // 3 sec timeout for sources that haven't been uploaded to ipfs
      const timeout = new Promise((_r, rej) => setTimeout(() => rej("timeout"), 3000));
      const source = await Promise.race([(await storage.download(`ipfs://${ipfsHash}`)).text(), timeout]);
      return {
        filename: path,
        source
      };
    } else {
      return {
        filename: path,
        source: info.content || "Could not find source for this contract"
      };
    }
  }));
}

function isRouterContract(abi) {
  const isPluginRouter = isFeatureEnabled(AbiSchema.parse(abi), "PluginRouter");
  const isBaseRouter = isFeatureEnabled(AbiSchema.parse(abi), "DynamicContract");
  return isBaseRouter || isPluginRouter;
}

const ERROR_SUBSTRINGS = ["eip-155", "eip155", "protected", "invalid chain id for signer", "chain id none", "chain_id mismatch", "recovered sender mismatch", "transaction hash mismatch", "chainid no support", "chainid (0)", "chainid(0)"];
const ERROR_SUBSTRINGS_COMPOSITE = [["account", "not found"], ["wrong", "chainid"]];

/* eslint-disable no-useless-computed-key */
const CUSTOM_GAS_FOR_CHAIN = {
  [5001]: {
    name: "Mantle Testnet",
    gasPrice: 1
  },
  [71402]: {
    name: "Godwoken Mainnet",
    gasPrice: 40_000 * 10 ** 9
  },
  [1351057110]: {
    name: "Chaos (SKALE Testnet)",
    gasPrice: 100000
  },
  [361]: {
    name: "Theta Mainnet",
    gasPrice: 4000 * 10 ** 9
  },
  [365]: {
    name: "Theta Testnet",
    gasPrice: 4000 * 10 ** 9
  },
  [7700]: {
    name: "Canto",
    gasPrice: 1000 * 10 ** 9
  },
  [7701]: {
    name: "Canto Testnet",
    gasPrice: 1000 * 10 ** 9
  },
  [338]: {
    name: "Cronos Testnet",
    gasPrice: 2000 * 10 ** 9
  },
  [199]: {
    name: "BitTorrent Chain",
    gasPrice: 300_000 * 10 ** 9
  }
};
/* eslint-enable no-useless-computed-key */

function matchError(error) {
  const errorIndex = ERROR_SUBSTRINGS.findIndex(substring => error.includes(substring));
  const compositeErrorIndex = ERROR_SUBSTRINGS_COMPOSITE.findIndex(arr => {
    let foundError = true;
    arr.forEach(substring => {
      foundError &&= error.includes(substring);
    });
    return foundError;
  });
  return errorIndex !== -1 || compositeErrorIndex !== -1;
}

const CREATE2_FACTORY_BYTECODE = "0x604580600e600039806000f350fe7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf3";
const SIGNATURE = {
  v: 27,
  r: "0x2222222222222222222222222222222222222222222222222222222222222222",
  s: "0x2222222222222222222222222222222222222222222222222222222222222222"
};
const COMMON_FACTORY = "0x4e59b44847b379578588920cA78FbF26c0B4956C"; // for pre-eip-155 supporting chains

const GAS_LIMIT_FOR_DEPLOYER = 5_000_000;
const DEPLOYER_BYTECODE = "0x60806040526040516107f33803806107f383398101604081905261002291610359565b805160005b818110156100c157828181518110610041576100416104c9565b6020026020010151600001516001600160a01b03163b600014156100af576100ad838281518110610074576100746104c9565b602002602001015160200151848381518110610092576100926104c9565b6020026020010151604001516100c960201b6100091760201c565b505b806100b9816104df565b915050610027565b505050610557565b606061011183836040518060400160405280601e81526020017f416464726573733a206c6f772d6c6576656c2063616c6c206661696c6564000081525061011860201b60201c565b9392505050565b6060610127848460008561012f565b949350505050565b6060824710156101955760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084015b60405180910390fd5b6001600160a01b0385163b6101ec5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161018c565b600080866001600160a01b031685876040516102089190610508565b60006040518083038185875af1925050503d8060008114610245576040519150601f19603f3d011682016040523d82523d6000602084013e61024a565b606091505b50909250905061025b828286610266565b979650505050505050565b60608315610275575081610111565b8251156102855782518084602001fd5b8160405162461bcd60e51b815260040161018c9190610524565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b03811182821017156102d7576102d761029f565b60405290565b604051601f8201601f191681016001600160401b03811182821017156103055761030561029f565b604052919050565b80516001600160a01b038116811461032457600080fd5b919050565b60005b8381101561034457818101518382015260200161032c565b83811115610353576000848401525b50505050565b6000602080838503121561036c57600080fd5b82516001600160401b038082111561038357600080fd5b818501915085601f83011261039757600080fd5b8151818111156103a9576103a961029f565b8060051b6103b88582016102dd565b91825283810185019185810190898411156103d257600080fd5b86860192505b838310156104bc578251858111156103f05760008081fd5b86016060601f19828d0381018213156104095760008081fd5b6104116102b5565b61041c8b850161030d565b8152604061042b81860161030d565b828d01529284015192898411156104425760008081fd5b83850194508e603f86011261045957600093508384fd5b8b85015193508984111561046f5761046f61029f565b61047f8c84601f870116016102dd565b92508383528e818587010111156104965760008081fd5b6104a5848d8501838801610329565b8101919091528452505091860191908601906103d8565b9998505050505050505050565b634e487b7160e01b600052603260045260246000fd5b600060001982141561050157634e487b7160e01b600052601160045260246000fd5b5060010190565b6000825161051a818460208701610329565b9190910192915050565b6020815260008251806020840152610543816040850160208701610329565b601f01601f19169190910160400192915050565b61028d806105666000396000f3fe6080604052600080fd5b606061004b83836040518060400160405280601e81526020017f416464726573733a206c6f772d6c6576656c2063616c6c206661696c65640000815250610052565b9392505050565b60606100618484600085610069565b949350505050565b6060824710156100cf5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084015b60405180910390fd5b6001600160a01b0385163b6101265760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016100c6565b600080866001600160a01b031685876040516101429190610208565b60006040518083038185875af1925050503d806000811461017f576040519150601f19603f3d011682016040523d82523d6000602084013e610184565b606091505b509150915061019482828661019f565b979650505050505050565b606083156101ae57508161004b565b8251156101be5782518084602001fd5b8160405162461bcd60e51b81526004016100c69190610224565b60005b838110156101f35781810151838201526020016101db565b83811115610202576000848401525b50505050565b6000825161021a8184602087016101d8565b9190910192915050565b60208152600082518060208401526102438160408501602087016101d8565b601f01601f1916919091016040019291505056fea26469706673582212200b524eb8ceaafe6c603273ee859fddbc2d6f1b7860c3d853dcf6f129f9d9371364736f6c634300080c0033";
const DEPLOYER_ABI = [{
  inputs: [{
    components: [{
      internalType: "address",
      name: "predictedAddress",
      type: "address"
    }, {
      internalType: "address",
      name: "to",
      type: "address"
    }, {
      internalType: "bytes",
      name: "data",
      type: "bytes"
    }],
    internalType: "struct IDeployer.Transaction[]",
    name: "transactions",
    type: "tuple[]"
  }],
  stateMutability: "payable",
  type: "constructor"
}];

/**
 * Check if a contract exists at the given address
 *
 * @internal
 * @param address
 * @param provider
 */
async function isContractDeployed(address, provider) {
  const code = await provider.getCode(address);
  return code !== "0x" && code !== "0x0";
}

/**
 * Check if a chain enforces EIP-155 transactions
 * Ref: https://eips.ethereum.org/EIPS/eip-155
 *
 * @internal
 * @param provider
 */
async function isEIP155Enforced(provider) {
  try {
    // TODO: Find a better way to check this.

    // Send a random transaction of legacy type (pre-eip-155).
    // It will fail. Parse the error message to check whether eip-155 is enforced.
    await provider.sendTransaction("0xf8a58085174876e800830186a08080b853604580600e600039806000f350fe7fffffffffffffffafffffffffffffffffffffffffffffffffffffffffffffffe03601600081602082378035828234f58015156039578182fd5b8082525050506014600cf31ba02222222222222222222222222222222222222222222222222222222222222222a02222222222222222222222222222222222222222222222222222222222222222");
  } catch (e) {
    const errorMsg = e.toString().toLowerCase();
    const errorJson = JSON.stringify(e).toLowerCase();
    if (matchError(errorMsg) || matchError(errorJson)) {
      return true;
    }
    return false;
  }
  return false;
}

/**
 * Generate a transaction to be sent with a keyless signer.
 *
 * @public
 * @param transaction: Unsigned transaction object
 * @param signature: Signature bytes
 */
function getKeylessTxn(transaction, signature) {
  // 1. Create serialized txn string
  const digest = utils.arrayify(utils.keccak256(utils.serializeTransaction(transaction)));

  // 2. Determine signer address from custom signature + txn
  const signer = utils.recoverAddress(digest, signature);

  // 3. Create the signed serialized txn string.
  // To be sent directly to the chain using a provider.
  const signedSerializedTx = utils.serializeTransaction(transaction, signature);
  return {
    signer: signer,
    transaction: signedSerializedTx
  };
}

/**
 *
 * @public
 * @param transaction: Unsigned transaction object
 * @param signature: Signature bytes
 */
function getCreate2FactoryDeploymentInfo(chainId, gasPrice) {
  const signature = utils.joinSignature(SIGNATURE);
  const deploymentTransaction = getKeylessTxn({
    gasPrice: gasPrice ? gasPrice : 100 * 10 ** 9,
    gasLimit: 100000,
    nonce: 0,
    data: CREATE2_FACTORY_BYTECODE,
    chainId: chainId
  }, signature);
  const create2FactoryAddress = utils.getContractAddress({
    from: deploymentTransaction.signer,
    nonce: 0
  });
  return {
    ...deploymentTransaction,
    deployment: create2FactoryAddress
  };
}

/**
 * Get the CREATE2 Factory address for a network
 * Source code of the factory:
 * https://github.com/Arachnid/deterministic-deployment-proxy/blob/master/source/deterministic-deployment-proxy.yul
 *
 * @internal
 * @param provider
 */
async function getCreate2FactoryAddress(provider) {
  const commonFactoryExists = await isContractDeployed(COMMON_FACTORY, provider);
  if (commonFactoryExists) {
    return COMMON_FACTORY;
  }
  const enforceEip155 = await isEIP155Enforced(provider);
  const networkId = (await provider.getNetwork()).chainId;
  const chainId = enforceEip155 ? networkId : 0;
  const deploymentInfo = CUSTOM_GAS_FOR_CHAIN[networkId] ? getCreate2FactoryDeploymentInfo(chainId, CUSTOM_GAS_FOR_CHAIN[networkId].gasPrice) : getCreate2FactoryDeploymentInfo(chainId);
  return deploymentInfo.deployment;
}

const bytecode = "0x60606040526040805190810160405280600d81526020017f57726170706564204574686572000000000000000000000000000000000000008152506000908051906020019061004f9291906100c8565b506040805190810160405280600481526020017f57455448000000000000000000000000000000000000000000000000000000008152506001908051906020019061009b9291906100c8565b506012600260006101000a81548160ff021916908360ff16021790555034156100c357600080fd5b61016d565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061010957805160ff1916838001178555610137565b82800160010185558215610137579182015b8281111561013657825182559160200191906001019061011b565b5b5090506101449190610148565b5090565b61016a91905b8082111561016657600081600090555060010161014e565b5090565b90565b610c348061017c6000396000f3006060604052600436106100af576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100b9578063095ea7b31461014757806318160ddd146101a157806323b872dd146101ca5780632e1a7d4d14610243578063313ce5671461026657806370a082311461029557806395d89b41146102e2578063a9059cbb14610370578063d0e30db0146103ca578063dd62ed3e146103d4575b6100b7610440565b005b34156100c457600080fd5b6100cc6104dd565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561010c5780820151818401526020810190506100f1565b50505050905090810190601f1680156101395780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561015257600080fd5b610187600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061057b565b604051808215151515815260200191505060405180910390f35b34156101ac57600080fd5b6101b461066d565b6040518082815260200191505060405180910390f35b34156101d557600080fd5b610229600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061068c565b604051808215151515815260200191505060405180910390f35b341561024e57600080fd5b61026460048080359060200190919050506109d9565b005b341561027157600080fd5b610279610b05565b604051808260ff1660ff16815260200191505060405180910390f35b34156102a057600080fd5b6102cc600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610b18565b6040518082815260200191505060405180910390f35b34156102ed57600080fd5b6102f5610b30565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561033557808201518184015260208101905061031a565b50505050905090810190601f1680156103625780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561037b57600080fd5b6103b0600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610bce565b604051808215151515815260200191505060405180910390f35b6103d2610440565b005b34156103df57600080fd5b61042a600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610be3565b6040518082815260200191505060405180910390f35b34600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055503373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c346040518082815260200191505060405180910390a2565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105735780601f1061054857610100808354040283529160200191610573565b820191906000526020600020905b81548152906001019060200180831161055657829003601f168201915b505050505081565b600081600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a36001905092915050565b60003073ffffffffffffffffffffffffffffffffffffffff1631905090565b600081600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054101515156106dc57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141580156107b457507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414155b156108cf5781600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541015151561084457600080fd5b81600460008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b81600360008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555081600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190509392505050565b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410151515610a2757600080fd5b80600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055503373ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501515610ab457600080fd5b3373ffffffffffffffffffffffffffffffffffffffff167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b65826040518082815260200191505060405180910390a250565b600260009054906101000a900460ff1681565b60036020528060005260406000206000915090505481565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610bc65780601f10610b9b57610100808354040283529160200191610bc6565b820191906000526020600020905b815481529060010190602001808311610ba957829003601f168201915b505050505081565b6000610bdb33848461068c565b905092915050565b60046020528160005260406000206020528060005260406000206000915091505054815600a165627a7a72305820deb4c2ccab3c2fdca32ab3f46728389c2fe2c165d5fafa07661e4e004f6c344a0029";

const ContractPublisher_address = "0x664244560eBa21Bf82d7150C791bE1AbcD5B4cd7"; // Polygon only

/**
 * @internal
 */
function getContractPublisherAddress() {
  return getProcessEnv("contractPublisherAddress", ContractPublisher_address);
}

const DropErc721ContractInput = /* @__PURE__ */CommonContractSchema.merge(CommonRoyaltySchema).merge(MerkleSchema).merge(CommonSymbolSchema);
const DropErc721ContractOutput = /* @__PURE__ */CommonContractOutputSchema.merge(CommonRoyaltySchema).merge(MerkleSchema).merge(CommonSymbolSchema);
const DropErc721ContractDeploy = /* @__PURE__ */DropErc721ContractInput.merge(CommonPlatformFeeSchema).merge(CommonPrimarySaleSchema).merge(CommonTrustedForwarderSchema);
const DropErc721ContractSchema = {
  deploy: DropErc721ContractDeploy,
  output: DropErc721ContractOutput,
  input: DropErc721ContractInput
};

const DropErc1155ContractInput = /* @__PURE__ */CommonContractSchema.merge(CommonRoyaltySchema).merge(MerkleSchema).merge(CommonSymbolSchema);
const DropErc1155ContractOutput = /* @__PURE__ */CommonContractOutputSchema.merge(CommonRoyaltySchema).merge(MerkleSchema).merge(CommonSymbolSchema);
const DropErc1155ContractDeploy = /* @__PURE__ */DropErc1155ContractInput.merge(CommonPlatformFeeSchema).merge(CommonPrimarySaleSchema).merge(CommonTrustedForwarderSchema);
const DropErc1155ContractSchema = {
  deploy: DropErc1155ContractDeploy,
  output: DropErc1155ContractOutput,
  input: DropErc1155ContractInput
};

const MarketplaceContractInput = CommonContractSchema;
const MarketplaceContractOutput = CommonContractOutputSchema;
const MarketplaceContractDeploy = /* @__PURE__ */MarketplaceContractInput.merge(CommonPlatformFeeSchema).merge(CommonTrustedForwarderSchema);
const MarketplaceContractSchema = {
  deploy: MarketplaceContractDeploy,
  output: MarketplaceContractOutput,
  input: MarketplaceContractInput
};

const PackContractInput = /* @__PURE__ */CommonContractSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const PackContractOutput = /* @__PURE__ */CommonContractOutputSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const PackContractDeploy = /* @__PURE__ */PackContractInput.merge(CommonPlatformFeeSchema).merge(CommonTrustedForwarderSchema);
const PackContractSchema = {
  deploy: PackContractDeploy,
  output: PackContractOutput,
  input: PackContractInput
};

const SplitRecipientInputSchema = /* @__PURE__ */(() => z.object({
  address: AddressOrEnsSchema,
  sharesBps: BasisPointsSchema.gt(0, "Shares must be greater than 0")
}))();
const SplitRecipientOuputSchema = /* @__PURE__ */SplitRecipientInputSchema.extend({
  address: AddressOrEnsSchema,
  sharesBps: BasisPointsSchema
});
const SplitsContractInput = /* @__PURE__ */(() => CommonContractSchema.extend({
  recipients: z.array(SplitRecipientInputSchema).default([]).superRefine((val, context) => {
    const addressMap = {};
    let totalShares = 0;
    for (let index = 0; index < val.length; index++) {
      const entry = val[index];
      if (addressMap[entry.address]) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Duplicate address.`,
          path: [index, `address`]
        });
      }
      addressMap[entry.address] = true;
      totalShares += entry.sharesBps;
      if (totalShares > 10000) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Total shares cannot go over 100%.`,
          path: [index, `sharesBps`]
        });
      }
    }
    if (totalShares !== 10000) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Total shares need to add up to 100%. Total shares are currently ${totalShares / 100}%`,
        path: []
      });
    }
  })
}))();
const SplitsContractOutput = /* @__PURE__ */(() => CommonContractOutputSchema.extend({
  recipients: z.array(SplitRecipientOuputSchema)
}))();
const SplitsContractDeploy = /* @__PURE__ */SplitsContractInput.merge(SplitsContractInput).merge(CommonTrustedForwarderSchema);
const SplitsContractSchema = {
  deploy: SplitsContractDeploy,
  output: SplitsContractOutput,
  input: SplitsContractInput
};

const TokenErc20ContractInput = /* @__PURE__ */CommonContractSchema.merge(CommonSymbolSchema);
const TokenErc20ContractOutput = /* @__PURE__ */CommonContractOutputSchema.merge(CommonSymbolSchema);
const TokenErc20ContractDeploy = /* @__PURE__ */TokenErc20ContractInput.merge(CommonPlatformFeeSchema).merge(CommonPrimarySaleSchema).merge(CommonTrustedForwarderSchema);
const TokenErc20ContractSchema = {
  deploy: TokenErc20ContractDeploy,
  output: TokenErc20ContractOutput,
  input: TokenErc20ContractInput
};

const TokenErc721ContractInput = /* @__PURE__ */CommonContractSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const TokenErc721ContractOutput = /* @__PURE__ */CommonContractOutputSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const TokenErc721ContractDeploy = /* @__PURE__ */TokenErc721ContractInput.merge(CommonPlatformFeeSchema).merge(CommonPrimarySaleSchema).merge(CommonTrustedForwarderSchema);
const TokenErc721ContractSchema = {
  deploy: TokenErc721ContractDeploy,
  output: TokenErc721ContractOutput,
  input: TokenErc721ContractInput
};

const TokenErc1155ContractInput = /* @__PURE__ */CommonContractSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const TokenErc1155ContractOutput = /* @__PURE__ */CommonContractOutputSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const TokenErc1155ContractDeploy = /* @__PURE__ */TokenErc1155ContractInput.merge(CommonPlatformFeeSchema).merge(CommonPrimarySaleSchema).merge(CommonTrustedForwarderSchema);
const TokenErc1155ContractSchema = {
  deploy: TokenErc1155ContractDeploy,
  output: TokenErc1155ContractOutput,
  input: TokenErc1155ContractInput
};

const VoteSettingsInputSchema = /* @__PURE__ */(() => z.object({
  voting_delay_in_blocks: z.number().min(0).default(0),
  voting_period_in_blocks: z.number().min(1).default(1),
  voting_token_address: AddressOrEnsSchema,
  voting_quorum_fraction: PercentSchema.default(0),
  proposal_token_threshold: BigNumberishSchema.default(1)
}))();
const VoteSettingsOuputSchema = /* @__PURE__ */VoteSettingsInputSchema.extend({
  proposal_token_threshold: BigNumberSchema
});
const VoteContractInput = /* @__PURE__ */CommonContractSchema.merge(VoteSettingsInputSchema);
const VoteContractOutput = /* @__PURE__ */CommonContractOutputSchema.merge(VoteSettingsOuputSchema);
const VoteContractDeploy = /* @__PURE__ */VoteContractInput.merge(CommonTrustedForwarderSchema);
const VoteContractSchema = {
  deploy: VoteContractDeploy,
  output: VoteContractOutput,
  input: VoteContractInput
};

async function resolveAddress(addressOrEns) {
  return AddressOrEnsSchema.parseAsync(addressOrEns);
}

/**
 * Fetch and parse the full metadata AFTER publishing a contract, with all the extra information (version, readme, etc)
 * @internal
 * @param publishMetadataUri
 * @param storage
 */
async function fetchExtendedReleaseMetadata(publishMetadataUri, storage) {
  const meta = await (await storage.download(publishMetadataUri)).text();
  return FullPublishMetadataSchemaOutput.parse(JSON.parse(meta));
}

/**
 * @internal
 * @param publishMetadataUri
 * @param storage
 */
async function fetchRawPredeployMetadata(publishMetadataUri, storage) {
  return PreDeployMetadata.parse(JSON.parse(await (await storage.download(publishMetadataUri)).text()));
}

/**
 * Fetch the metadata coming from CLI, this is before deploying or releasing the contract.
 * @internal
 * @param publishMetadataUri
 * @param storage
 */
async function fetchPreDeployMetadata(publishMetadataUri, storage) {
  const rawMeta = await fetchRawPredeployMetadata(publishMetadataUri, storage);
  const deployBytecode = await (await storage.download(rawMeta.bytecodeUri)).text();
  const parsedMeta = await fetchContractMetadata(rawMeta.metadataUri, storage);
  return PreDeployMetadataFetchedSchema.parse({
    ...rawMeta,
    ...parsedMeta,
    bytecode: deployBytecode
  });
}

const deployMetadataCache = {};
async function fetchAndCacheDeployMetadata(publishMetadataUri, storage) {
  if (deployMetadataCache[publishMetadataUri]) {
    return deployMetadataCache[publishMetadataUri];
  }
  const compilerMetadata = await fetchPreDeployMetadata(publishMetadataUri, storage);
  let extendedMetadata;
  try {
    extendedMetadata = await fetchExtendedReleaseMetadata(publishMetadataUri, storage);
  } catch (e) {
    // not a factory deployment, ignore
  }
  const data = {
    compilerMetadata,
    extendedMetadata
  };
  deployMetadataCache[publishMetadataUri] = data;
  return data;
}

const AddressZero = "0x0000000000000000000000000000000000000000";

const TWRegistry_address = "0x7c487845f98938Bb955B1D5AD069d9a30e4131fd";
const TWFactory_address = "0x5DBC7B840baa9daBcBe9D2492E45D7244B54A2A0";

/**
 * @internal
 */
const OZ_DEFENDER_FORWARDER_ADDRESS = "0xc82BbE41f2cF04e3a8efA18F7032BDD7f6d98a81";

/**
 * @internal
 */
const CONTRACT_ADDRESSES = {
  [ChainId.Mainnet]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x76ce2CB1Ae48Fa067f4fb8c5f803111AE0B24BEA",
    biconomyForwarder: "0x84a0856b038eaAd1cC7E297cF34A7e72685A8693",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: AddressZero
  },
  [ChainId.Goerli]: {
    openzeppelinForwarder: "0x5001A14CA6163143316a7C614e30e6041033Ac20",
    openzeppelinForwarderEOA: "0xe73c50cB9c5B378627ff625BB6e6725A4A5D65d2",
    biconomyForwarder: "0xE041608922d06a4F26C0d4c27d8bCD01daf1f792",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0xB1Bd9d7942A250BA2Dce27DD601F2ED4211A60C4"
  },
  [ChainId.Polygon]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x4f247c69184ad61036EC2Bb3213b69F10FbEDe1F",
    biconomyForwarder: "0x86C80a8aa58e0A4fa09A69624c31Ab2a6CAD56b8",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x308473Be900F4185A56587dE54bDFF5E8f7a6AE7"
  },
  [ChainId.Mumbai]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0xb1A2883fc4d287d9cB8Dbb96cFF60C76BEf2D250",
    biconomyForwarder: "0x9399BB24DBB5C4b782C70c2969F58716Ebbd6a3b",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x3F17972CB27506eb4a6a3D59659e0B57a43fd16C"
  },
  [ChainId.Avalanche]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0xb1A2883fc4d287d9cB8Dbb96cFF60C76BEf2D250",
    biconomyForwarder: "0x64CD353384109423a966dCd3Aa30D884C9b2E057",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: AddressZero
  },
  [ChainId.AvalancheFujiTestnet]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0xe73c50cB9c5B378627ff625BB6e6725A4A5D65d2",
    biconomyForwarder: "0x6271Ca63D30507f2Dcbf99B52787032506D75BBF",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x3E6eE864f850F5e5A98bc950B68E181Cf4010F23"
  },
  [ChainId.Fantom]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0xb1A2883fc4d287d9cB8Dbb96cFF60C76BEf2D250",
    biconomyForwarder: "0x64CD353384109423a966dCd3Aa30D884C9b2E057",
    twFactory: "0x97EA0Fcc552D5A8Fb5e9101316AAd0D62Ea0876B",
    twRegistry: TWRegistry_address,
    twBYOCRegistry: AddressZero
  },
  [ChainId.FantomTestnet]: {
    openzeppelinForwarder: OZ_DEFENDER_FORWARDER_ADDRESS,
    openzeppelinForwarderEOA: "0x42D3048b595B6e1c28a588d70366CcC2AA4dB47b",
    biconomyForwarder: "0x69FB8Dca8067A5D38703b9e8b39cf2D51473E4b4",
    twFactory: TWFactory_address,
    twRegistry: TWRegistry_address,
    twBYOCRegistry: "0x3E6eE864f850F5e5A98bc950B68E181Cf4010F23"
  },
  [ChainId.Arbitrum]: {
    openzeppelinForwarder: "0x4a8AC7f22DeD2CF923A51e4A1c67490bd8868add",
    openzeppelinForwarderEOA: "0x4f247c69184ad61036EC2Bb3213b69F10FbEDe1F",
    biconomyForwarder: "0xfe0fa3C06d03bDC7fb49c892BbB39113B534fB57",
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: TWRegistry_address,
    twBYOCRegistry: AddressZero
  },
  [ChainId.ArbitrumGoerli]: {
    openzeppelinForwarder: "0x8cbc8B5d71702032904750A66AEfE8B603eBC538",
    openzeppelinForwarderEOA: "0x119704314Ef304EaAAE4b3c7C9ABd59272A28310",
    biconomyForwarder: AddressZero,
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: TWRegistry_address,
    twBYOCRegistry: AddressZero
  },
  [ChainId.Optimism]: {
    openzeppelinForwarder: "0xd85da690EF288A6976DE0E85Fb2Aad512eBAfbf7",
    openzeppelinForwarderEOA: "0x7e80648EB2071E26937F9D42A513ccf4815fc702",
    biconomyForwarder: "0xefba8a2a82ec1fb1273806174f5e28fbb917cf95",
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: TWRegistry_address,
    twBYOCRegistry: AddressZero
  },
  [ChainId.OptimismGoerli]: {
    openzeppelinForwarder: "0x8cbc8B5d71702032904750A66AEfE8B603eBC538",
    openzeppelinForwarderEOA: "0x119704314Ef304EaAAE4b3c7C9ABd59272A28310",
    biconomyForwarder: AddressZero,
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: TWRegistry_address,
    twBYOCRegistry: AddressZero
  },
  [ChainId.BinanceSmartChainMainnet]: {
    openzeppelinForwarder: "0x7C4717039B89d5859c4Fbb85EDB19A6E2ce61171",
    openzeppelinForwarderEOA: "0xE8dd2Ff0212F86d3197b4AfDC6dAC6ac47eb10aC",
    biconomyForwarder: "0x86C80a8aa58e0A4fa09A69624c31Ab2a6CAD56b8",
    twBYOCRegistry: AddressZero,
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: TWRegistry_address
  },
  [ChainId.BinanceSmartChainTestnet]: {
    openzeppelinForwarder: "0x44bE9D54B9C8b5e57a3325E8Ec9154640e7c6955",
    openzeppelinForwarderEOA: "0x7e80648EB2071E26937F9D42A513ccf4815fc702",
    biconomyForwarder: "0x61456BF1715C1415730076BB79ae118E806E74d2",
    twBYOCRegistry: AddressZero,
    twFactory: "0xd24b3de085CFd8c54b94feAD08a7962D343E6DE0",
    twRegistry: TWRegistry_address
  },
  [ChainId.Hardhat]: {
    openzeppelinForwarder: AddressZero,
    openzeppelinForwarderEOA: AddressZero,
    biconomyForwarder: AddressZero,
    twFactory: AddressZero,
    twRegistry: AddressZero,
    twBYOCRegistry: AddressZero
  },
  [ChainId.Localhost]: {
    openzeppelinForwarder: AddressZero,
    openzeppelinForwarderEOA: AddressZero,
    biconomyForwarder: AddressZero,
    twFactory: AddressZero,
    twRegistry: AddressZero,
    twBYOCRegistry: AddressZero
  }
};

/**
 * @internal
 */
function getContractAddressByChainId(chainId, contractName) {
  // for testing only
  if (chainId === ChainId.Hardhat || chainId === ChainId.Localhost) {
    if (contractName === "twFactory") {
      return getProcessEnv("factoryAddress");
    } else if (contractName === "twRegistry") {
      return getProcessEnv("registryAddress");
    } else {
      return AddressZero;
    }
  }
  // real output here
  return CONTRACT_ADDRESSES[chainId]?.[contractName];
}

/**
 * @internal
 */

/**
 * @internal
 */
const InterfaceId_IERC721 = /* @__PURE__ */utils.arrayify("0x80ac58cd");

/**
 * @internal
 */
const InterfaceId_IERC1155 = /* @__PURE__ */utils.arrayify("0xd9b67a26");

/**
 * @public
 */
let EventType = /*#__PURE__*/function (EventType) {
  EventType["Transaction"] = "transaction";
  EventType["Signature"] = "signature";
  return EventType;
}({});

const THIRDWEB_DEPLOYER = "0xdd99b75f095d0c4d5112aCe938e4e6ed962fb024";
async function fetchPublishedContractFromPolygon(publisherAddress, contractName) {
  let version = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "latest";
  let storage = arguments.length > 3 ? arguments[3] : undefined;
  let clientId = arguments.length > 4 ? arguments[4] : undefined;
  let secretKey = arguments.length > 5 ? arguments[5] : undefined;
  const polygonChain = getSupportedChains().find(c => c.chainId === 137);
  const chain = polygonChain || Polygon;
  const publisher = await resolveAddress(publisherAddress);
  const contract = new Contract(getContractPublisherAddress(), ContractPublisherAbi, getChainProvider(chain, {
    clientId,
    secretKey
  }));
  let publishedContract;
  if (!version || version === "latest") {
    const model = await contract.getPublishedContract(publisher, contractName);
    publishedContract = PublishedContractSchema.parse({
      id: model.contractId,
      timestamp: model.publishTimestamp,
      metadataUri: model.publishMetadataUri
    });
  } else {
    const allVersions = (await contract.getPublishedContractVersions(publisher, contractName)).map(c => {
      return PublishedContractSchema.parse({
        id: c.contractId,
        timestamp: c.publishTimestamp,
        metadataUri: c.publishMetadataUri
      });
    });

    // get the metadata for each version
    const versionMetadata = await Promise.all(allVersions.map(async c => {
      return {
        name: c.id,
        publishedTimestamp: c.timestamp,
        publishedMetadata: await fetchAndCacheDeployMetadata(c.metadataUri, storage)
      };
    }));
    // find the version that matches the version string
    const versionMatch = versionMetadata.find(metadata => metadata.publishedMetadata.extendedMetadata?.version === version);
    invariant(versionMatch, "Contract version not found");
    // match the version back to the contract based on the published timestamp
    publishedContract = allVersions.find(c => c.timestamp === versionMatch.publishedTimestamp);
  }
  if (!publishedContract) {
    throw new Error(`No published contract found for ${contractName} at version by '${THIRDWEB_DEPLOYER}'`);
  }
  return publishedContract;
}

/**
 * Generate salt for deployment with Create2
 * Note: Salt component is generated by appending `tw` (thirdweb) to the bytecode
 *
 * @internal
 * @param bytecode: Creation bytecode of the contract to deploy
 */
function getSaltHash(bytecode) {
  const bytecodePrefixed = bytecode.startsWith("0x") ? bytecode : `0x${bytecode}`;
  const bytecodeHash = utils.id(bytecodePrefixed);
  const salt = `tw.${bytecodeHash}`;
  const saltHash = utils.id(salt);
  return saltHash;
}

/**
 *
 * Construct init-bytecode, packed with salthash.
 * This hex data is intended to be sent to the CREATE2 factory address
 *
 * @internal
 * @param bytecode: Creation bytecode of the contract to deploy
 * @param encodedArgs: Abi-encoded constructor params
 */
function getInitBytecodeWithSalt(bytecode, encodedArgs, salt) {
  const bytecodePrefixed = bytecode.startsWith("0x") ? bytecode : `0x${bytecode}`;
  const saltHash = salt ? utils.id(salt) : getSaltHash(bytecodePrefixed);
  const initBytecodeWithSalt = utils.solidityPack(["bytes32", "bytes", "bytes"], [saltHash, bytecodePrefixed, encodedArgs]);
  return initBytecodeWithSalt;
}

/**
 * Pre-compute a contract's deployment address for a CREATE2 deployment.
 *
 * @public
 * @param bytecode: Creation bytecode of the contract to deploy
 * @param encodedArgs: Abi-encoded constructor params
 * @param create2FactoryAddress
 */
function computeDeploymentAddress(bytecode, encodedArgs, create2FactoryAddress, salt) {
  const bytecodePrefixed = bytecode.startsWith("0x") ? bytecode : `0x${bytecode}`;
  const saltHash = salt ? utils.id(salt) : getSaltHash(bytecodePrefixed);

  // 1. create init bytecode hash with contract's bytecode and encoded args
  const initBytecode = utils.solidityPack(["bytes", "bytes"], [bytecodePrefixed, encodedArgs]);

  // 2. abi-encode pack the deployer address, salt, and bytecode hash
  const deployInfoPacked = utils.solidityPack(["bytes1", "address", "bytes32", "bytes32"], ["0xff", create2FactoryAddress, saltHash, utils.solidityKeccak256(["bytes"], [initBytecode])]);

  // 3. hash the packed deploy info
  const hashedDeployInfo = utils.solidityKeccak256(["bytes"], [deployInfoPacked]);

  // 4. return last 20 bytes (40 characters) of the hash -- this is the predicted address
  return `0x${hashedDeployInfo.slice(26)}`;
}

/**
 *
 * @param abi
 * @returns
 * @internal
 */
function extractConstructorParamsFromAbi(abi) {
  const parsedAbi = AbiSchema.parse(abi || []);
  for (const input of parsedAbi) {
    if (input.type === "constructor") {
      return input.inputs || [];
    }
  }
  return [];
}

const caches = {
  deploymentPresets: {}
};

/**
 * Returns the RoyaltyEngineV1 address for a given chain
 * @param chainId - the chain id
 * @public
 */
function getRoyaltyEngineV1ByChainId(chainId) {
  return ROYALTY_ENGINE_V1_ADDRESS[chainId] || constants.AddressZero;
}
const ROYALTY_ENGINE_V1_ADDRESS = {
  [ChainId.Mainnet]: "0x0385603ab55642cb4dd5de3ae9e306809991804f",
  [ChainId.Goerli]: "0xEF770dFb6D5620977213f55f99bfd781D04BBE15",
  [ChainId.BinanceSmartChainMainnet]: "0xEF770dFb6D5620977213f55f99bfd781D04BBE15",
  [ChainId.Polygon]: "0x28EdFcF0Be7E86b07493466e7631a213bDe8eEF2",
  [ChainId.Mumbai]: "0x0a01E11887f727D1b1Cd81251eeEE9BEE4262D07",
  [ChainId.Avalanche]: "0xEF770dFb6D5620977213f55f99bfd781D04BBE15",
  [ChainId.Optimism]: "0xEF770dFb6D5620977213f55f99bfd781D04BBE15",
  [ChainId.Arbitrum]: "0xEF770dFb6D5620977213f55f99bfd781D04BBE15"
};

async function computeDeploymentInfo(contractType, provider, storage, create2Factory, contractOptions, clientId, secretKey) {
  const contractName = contractOptions && contractOptions.contractName;
  const version = contractOptions && contractOptions.version;
  let publisherAddress = contractOptions && contractOptions.publisherAddress;
  let metadata = contractOptions && contractOptions.metadata;
  invariant(contractName || metadata, "Require contract name or metadata");
  if (contractName && caches.deploymentPresets[contractName]) {
    return caches.deploymentPresets[contractName];
  }

  // Different treatment for WETH contract
  if (contractName === "WETH9") {
    const address = computeDeploymentAddress(bytecode, [], create2Factory);
    const contractDeployed = await isContractDeployed(address, provider);
    let initBytecodeWithSalt = "";
    if (!contractDeployed) {
      initBytecodeWithSalt = getInitBytecodeWithSalt(bytecode, []);
    }
    return {
      name: contractName,
      type: contractType,
      transaction: {
        predictedAddress: address,
        to: create2Factory,
        data: initBytecodeWithSalt
      }
    };
  }
  if (!metadata) {
    invariant(contractName, "Require contract name");
    if (!publisherAddress) {
      publisherAddress = THIRDWEB_DEPLOYER;
    }
    const publishedContract = await fetchPublishedContractFromPolygon(publisherAddress, contractName, version, storage, clientId, secretKey);
    metadata = (await fetchAndCacheDeployMetadata(publishedContract.metadataUri, storage)).compilerMetadata;
  }
  const encodedArgs = await encodeConstructorParamsForImplementation(metadata, provider, storage, create2Factory, contractOptions?.constructorParams, clientId, secretKey);
  const address = computeDeploymentAddress(metadata.bytecode, encodedArgs, create2Factory);
  const contractDeployed = await isContractDeployed(address, provider);
  let initBytecodeWithSalt = "";
  if (!contractDeployed) {
    initBytecodeWithSalt = getInitBytecodeWithSalt(metadata.bytecode, encodedArgs);
  }
  return {
    name: contractName,
    type: contractType,
    transaction: {
      predictedAddress: address,
      to: create2Factory,
      data: initBytecodeWithSalt
    },
    encodedArgs
  };
}

/**
 * @internal
 *
 * Determine constructor params required by an implementation contract.
 * Return abi-encoded params.
 */
async function encodeConstructorParamsForImplementation(compilerMetadata, provider, storage, create2Factory, constructorParamMap, clientId, secretKey) {
  const constructorParams = extractConstructorParamsFromAbi(compilerMetadata.abi);
  const constructorParamTypes = constructorParams.map(p => {
    if (p.type === "tuple[]") {
      return utils.ParamType.from(p);
    } else {
      return p.type;
    }
  });
  const constructorParamValues = await Promise.all(constructorParams.map(async p => {
    if (constructorParamMap && constructorParamMap[p.name]) {
      if (constructorParamMap[p.name].type) {
        invariant(constructorParamMap[p.name].type === p.type, `Provided type ${constructorParamMap[p.name].type} doesn't match the actual type ${p.type} from Abi`);
      }
      return constructorParamMap[p.name].value;
    }
    if (p.name && p.name.includes("nativeTokenWrapper")) {
      const chainId = (await provider.getNetwork()).chainId;
      let nativeTokenWrapperAddress = getNativeTokenByChainId(chainId).wrapped.address;
      if (nativeTokenWrapperAddress === constants.AddressZero) {
        const deploymentInfo = await computeDeploymentInfo("infra", provider, storage, create2Factory, {
          contractName: "WETH9"
        }, clientId, secretKey);
        if (!caches.deploymentPresets["WETH9"]) {
          caches.deploymentPresets["WETH9"] = deploymentInfo;
        }
        nativeTokenWrapperAddress = deploymentInfo.transaction.predictedAddress;
      }
      return nativeTokenWrapperAddress;
    } else if (p.name && p.name.includes("trustedForwarder")) {
      if (compilerMetadata.name === "Pack") {
        // EOAForwarder for Pack
        const deploymentInfo = await computeDeploymentInfo("infra", provider, storage, create2Factory, {
          contractName: "ForwarderEOAOnly"
        }, clientId, secretKey);
        if (!caches.deploymentPresets["ForwarderEOAOnly"]) {
          caches.deploymentPresets["ForwarderEOAOnly"] = deploymentInfo;
        }
        return deploymentInfo.transaction.predictedAddress;
      }
      const deploymentInfo = await computeDeploymentInfo("infra", provider, storage, create2Factory, {
        contractName: "Forwarder"
      }, clientId, secretKey);
      if (!caches.deploymentPresets["Forwarder"]) {
        caches.deploymentPresets["Forwarder"] = deploymentInfo;
      }
      return deploymentInfo.transaction.predictedAddress;
    } else if (p.name && p.name.includes("royaltyEngineAddress")) {
      const chainId = (await provider.getNetwork()).chainId;
      return getRoyaltyEngineV1ByChainId(chainId);
    } else {
      throw new Error("Can't resolve constructor arguments");
    }
  }));
  const encodedArgs = utils.defaultAbiCoder.encode(constructorParamTypes, constructorParamValues);
  return encodedArgs;
}

/**
 *
 * @internal
 * @param provider
 * @param storage
 * @param create2Factory
 */
async function computeEOAForwarderAddress(provider, storage, create2Factory, clientId, secretKey) {
  if (!create2Factory || create2Factory === "") {
    create2Factory = await getCreate2FactoryAddress(provider);
  }
  return (await computeDeploymentInfo("infra", provider, storage, create2Factory, {
    contractName: "ForwarderEOAOnly"
  }, clientId, secretKey)).transaction.predictedAddress;
}

/**
 *
 * @internal
 * @param provider
 * @param storage
 * @param create2Factory
 */
async function computeForwarderAddress(provider, storage, create2Factory, clientId, secretKey) {
  if (!create2Factory || create2Factory === "") {
    create2Factory = await getCreate2FactoryAddress(provider);
  }
  return (await computeDeploymentInfo("infra", provider, storage, create2Factory, {
    contractName: "Forwarder"
  }, clientId, secretKey)).transaction.predictedAddress;
}

/**
 * @internal
 */
const ForwardRequest = [{
  name: "from",
  type: "address"
}, {
  name: "to",
  type: "address"
}, {
  name: "value",
  type: "uint256"
}, {
  name: "gas",
  type: "uint256"
}, {
  name: "nonce",
  type: "uint256"
}, {
  name: "data",
  type: "bytes"
}];
const ChainAwareForwardRequest = [{
  name: "from",
  type: "address"
}, {
  name: "to",
  type: "address"
}, {
  name: "value",
  type: "uint256"
}, {
  name: "gas",
  type: "uint256"
}, {
  name: "nonce",
  type: "uint256"
}, {
  name: "data",
  type: "bytes"
}, {
  name: "chainid",
  type: "uint256"
}];

/**
 * @internal
 */
const BiconomyForwarderAbi = [{
  inputs: [{
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    internalType: "uint256",
    name: "batchId",
    type: "uint256"
  }],
  name: "getNonce",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}];
const _nonces = {};
const _noncesSyncTimestamp = {};

/**
 * @internal
 */
async function getAndIncrementNonce(forwarder, forwarderFunction, forwarderArgs) {
  // address is only used for internal caching :)
  const address = forwarderArgs.join("|");
  const timestamp = _noncesSyncTimestamp[address];
  // if it's within 2 seconds we're optimistically increment the nonce
  // should we always sync?
  const shouldSync = Date.now() - timestamp >= 2000;
  if (!(address in _nonces) || shouldSync) {
    const nonceResult = await forwarder.functions[forwarderFunction](...forwarderArgs);
    if (Array.isArray(nonceResult) && nonceResult.length > 0) {
      _nonces[address] = BigNumber.from(nonceResult[0]);
    } else {
      _nonces[address] = BigNumber.from(nonceResult);
    }
    _noncesSyncTimestamp[address] = Date.now();
  }
  const nonce = _nonces[address];
  _nonces[address] = BigNumber.from(_nonces[address]).add(1);
  return nonce;
}

/**
 * @internal
 */

/**
 * @internal
 */

/**
 * @internal
 */

/**
 * eip712 sign typed data with different wallet handling including ledger live
 * @internal
 */
async function signTypedDataInternal(signerInput, domain, types, message) {
  // Handle ERC4337Signer
  let signer = signerInput;
  if (signerInput.originalSigner) {
    signer = signerInput.originalSigner;
  }
  const provider = signer?.provider;
  if (!provider) {
    throw new Error("missing provider");
  }
  const payload = utils._TypedDataEncoder.getPayload(domain, types, message);
  let signature = "";
  const signerAddress = (await signer.getAddress()).toLowerCase();

  // an indirect way for accessing walletconnect's underlying provider
  if (provider?.provider?.isWalletConnect) {
    signature = await provider.send("eth_signTypedData", [(await signer.getAddress()).toLowerCase(), JSON.stringify(payload)]);
  } else {
    try {
      signature = await signer._signTypedData(domain, types, message);
    } catch (err) {
      if (err?.message?.includes("eth_signTypedData_v4")) {
        signature = await provider.send("eth_signTypedData", [signerAddress, JSON.stringify(payload)]);
      } else {
        // magic.link signer only supports this way
        try {
          await provider.send("eth_signTypedData_v4", [signerAddress, JSON.stringify(payload)]);
        } catch (finalErr) {
          throw finalErr;
        }
      }
    }
  }

  // fix ledger live where signature result in v = 0, 1. ethers magically fix it in split/join.
  return {
    payload,
    signature: utils.joinSignature(utils.splitSignature(signature))
  };
}

const NAME_ABI = [{
  inputs: [],
  name: "name",
  outputs: [{
    internalType: "string",
    name: "",
    type: "string"
  }],
  stateMutability: "view",
  type: "function"
}];
const DOMAIN_SEPARATOR_ABI = [{
  constant: true,
  inputs: [],
  name: "DOMAIN_SEPARATOR",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  payable: false,
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "getDomainSeperator",
  outputs: [{
    internalType: "bytes32",
    name: "",
    type: "bytes32"
  }],
  stateMutability: "view",
  type: "function"
}];
const NONCES_ABI = [{
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }],
  name: "nonces",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "user",
    type: "address"
  }],
  name: "getNonce",
  outputs: [{
    internalType: "uint256",
    name: "nonce",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}];
async function getSignerNonce(signer, contractAddress) {
  const contract = new Contract(contractAddress, NONCES_ABI, signer);
  try {
    return await contract.nonces(await signer.getAddress());
  } catch (err) {
    return await contract.getNonce(await signer.getAddress());
  }
}
async function getDomainSeperator(signer, contractAddress) {
  const contract = new Contract(contractAddress, DOMAIN_SEPARATOR_ABI, signer);
  try {
    return await contract.DOMAIN_SEPARATOR();
  } catch (err) {
    try {
      return await contract.getDomainSeperator();
    } catch (err2) {
      console.error("Error getting domain separator", err2);
    }
  }
}
async function getTokenName(signer, contractAddress) {
  return new Contract(contractAddress, NAME_ABI, signer).name();
}

/**
 * Polygon chain has different EIP712 domain separator for USDC, DAI compared to other chains and slightly different than EIP-2612.
 */
async function getChainDomainSeperator(signer, domain) {
  const contractDomainSeparator = await getDomainSeperator(signer, domain.verifyingContract);
  const polygonDomain = {
    name: domain.name,
    version: domain.version,
    verifyingContract: domain.verifyingContract,
    salt: utils.hexZeroPad(BigNumber.from(domain.chainId).toHexString(), 32)
  };
  if (utils._TypedDataEncoder.hashDomain(polygonDomain) === contractDomainSeparator) {
    return polygonDomain;
  }
  return domain;
}

/**
 * @internal
 */
async function signEIP2612Permit(signer, currencyAddress, owner, spender, value, deadline, nonce) {
  const domain = await getChainDomainSeperator(signer, {
    name: await getTokenName(signer, currencyAddress),
    version: "1",
    chainId: await signer.getChainId(),
    verifyingContract: currencyAddress
  });
  nonce = nonce || (await getSignerNonce(signer, currencyAddress)).toString();
  deadline = deadline || constants.MaxUint256;
  const message = {
    owner,
    spender,
    value,
    nonce,
    deadline
  };
  const types = {
    Permit: [{
      name: "owner",
      type: "address"
    }, {
      name: "spender",
      type: "address"
    }, {
      name: "value",
      type: "uint256"
    }, {
      name: "nonce",
      type: "uint256"
    }, {
      name: "deadline",
      type: "uint256"
    }]
  };
  const {
    signature
  } = await signTypedDataInternal(signer, domain, types, message);
  return {
    message,
    signature
  };
}

class TransactionContext {
  constructor(options) {
    this.args = options.args;
    this.overrides = options.overrides || {};
    this.provider = options.provider;
    this.signer = options.signer;
    this.storage = options.storage;

    // Connect provider to signer if it isn't already connected
    if (!this.signer.provider) {
      this.signer = this.signer.connect(this.provider);
    }
  }
  get getSigner() {
    return this.signer;
  }
  get getProvider() {
    return this.provider;
  }
  get getStorage() {
    return this.storage;
  }
  getArgs() {
    return this.args;
  }
  getOverrides() {
    return this.overrides;
  }
  getValue() {
    return this.overrides.value || 0;
  }
  setArgs(args) {
    this.args = args;
    return this;
  }
  setOverrides(overrides) {
    this.overrides = overrides;
    return this;
  }
  updateOverrides(overrides) {
    this.overrides = {
      ...this.overrides,
      ...overrides
    };
    return this;
  }
  setValue(value) {
    this.updateOverrides({
      value
    });
    return this;
  }
  setGasLimit(gasLimit) {
    this.updateOverrides({
      gasLimit
    });
    return this;
  }
  setGasPrice(gasPrice) {
    this.updateOverrides({
      gasPrice
    });
    return this;
  }
  setNonce(nonce) {
    this.updateOverrides({
      nonce
    });
    return this;
  }
  setMaxFeePerGas(maxFeePerGas) {
    this.updateOverrides({
      maxFeePerGas
    });
    return this;
  }
  setMaxPriorityFeePerGas(maxPriorityFeePerGas) {
    this.updateOverrides({
      maxPriorityFeePerGas
    });
    return this;
  }
  setType(type) {
    this.updateOverrides({
      type
    });
    return this;
  }
  setAccessList(accessList) {
    this.updateOverrides({
      accessList
    });
    return this;
  }
  setCustomData(customData) {
    this.updateOverrides({
      customData
    });
    return this;
  }
  setCcipReadEnabled(ccipReadEnabled) {
    this.updateOverrides({
      ccipReadEnabled
    });
    return this;
  }
  /**
   * Set a multiple to multiply the gas limit by
   *
   * @example
   * ```js
   * // Set the gas limit multiple to 1.2 (increase by 20%)
   * tx.setGasLimitMultiple(1.2)
   * ```
   */
  setGasLimitMultiple(factor) {
    // If gasLimit override is set, we can just set it synchronously
    if (BigNumber.isBigNumber(this.overrides.gasLimit)) {
      this.overrides.gasLimit = BigNumber.from(Math.floor(BigNumber.from(this.overrides.gasLimit).toNumber() * factor));
    } else {
      // Otherwise, set a gas multiple to use later
      this.gasMultiple = factor;
    }
  }

  /**
   * Estimate the total gas cost of this transaction (in both ether and wei)
   */
  async estimateGasCost() {
    const [gasLimit, gasPrice] = await Promise.all([this.estimateGasLimit(), this.getGasPrice()]);
    const gasCost = gasLimit.mul(gasPrice);
    return {
      ether: utils.formatEther(gasCost),
      wei: gasCost
    };
  }

  /**
   * Calculates the gas price for transactions (adding a 10% tip buffer)
   */
  async getGasPrice() {
    return getGasPrice(this.provider);
  }

  /**
   * Get the address of the transaction signer
   */
  async getSignerAddress() {
    return this.signer.getAddress();
  }

  /**
   * Get gas overrides for the transaction
   */
  async getGasOverrides() {
    return getDefaultGasOverrides(this.provider);
  }

  /**
   * Calculates the priority fee per gas according (adding a 10% buffer)
   */
  getPreferredPriorityFee(defaultPriorityFeePerGas) {
    const extraTip = defaultPriorityFeePerGas.div(100).mul(10); // + 10%
    const txGasPrice = defaultPriorityFeePerGas.add(extraTip);
    return txGasPrice;
  }
}
class Transaction extends TransactionContext {
  static fromContractWrapper(options) {
    const signer = options.contractWrapper.getSigner();
    if (!signer) {
      throw new Error("Cannot create a transaction without a signer. Please ensure that you have a connected signer.");
    }
    const optionsWithContract = {
      ...options,
      contract: options.contractWrapper.writeContract,
      provider: options.contractWrapper.getProvider(),
      signer,
      gasless: options.contractWrapper.options.gasless,
      storage: options.contractWrapper.storage
    };
    return new Transaction(optionsWithContract);
  }
  static async fromContractInfo(options) {
    const storage = options.storage;
    let contractAbi = options.contractAbi;
    if (!contractAbi) {
      try {
        const metadata = await fetchContractMetadataFromAddress(options.contractAddress, options.provider, storage);
        contractAbi = metadata.abi;
      } catch {
        throw new Error(`Could resolve contract metadata for address ${options.contractAddress}. Please pass the contract ABI manually with the 'contractAbi' option.`);
      }
    }
    const contract = new Contract(options.contractAddress, contractAbi, options.provider);
    const optionsWithContract = {
      ...options,
      storage,
      contract
    };
    return new Transaction(optionsWithContract);
  }
  constructor(options) {
    super({
      args: options.args,
      overrides: options.overrides,
      provider: options.provider,
      signer: options.signer,
      storage: options.storage
    });
    this.method = options.method;
    this.gaslessOptions = options.gasless;
    this.parse = options.parse;

    // Always connect the signer to the contract
    this.contract = options.contract.connect(this.signer);

    // Create new storage instance if one isn't provided
    this.storage = options.storage;
  }
  getTarget() {
    return this.contract.address;
  }
  getMethod() {
    return this.method;
  }
  getGaslessOptions() {
    return this.gaslessOptions;
  }
  setGaslessOptions(options) {
    this.gaslessOptions = options;
    return this;
  }
  setParse(parse) {
    this.parse = parse;
    return this;
  }

  /**
   * Encode the function data for this transaction
   */
  encode() {
    return this.contract.interface.encodeFunctionData(this.method, this.args);
  }

  /**
   * Get the signed transaction
   */
  async sign() {
    const populatedTx = await this.populateTransaction();
    const signedTx = await this.contract.signer.signTransaction(populatedTx);
    return signedTx;
  }
  async populateTransaction() {
    const gasOverrides = await this.getGasOverrides();
    const overrides = {
      ...gasOverrides,
      ...this.overrides
    };

    // First, if no gasLimit is passed, call estimate gas ourselves
    if (!overrides.gasLimit) {
      overrides.gasLimit = await this.estimateGasLimit();
    }
    const tx = await this.contract.populateTransaction[this.method](...this.args, overrides);
    const populatedTx = await this.contract.signer.populateTransaction(tx);
    return populatedTx;
  }

  /**
   * Simulate the transaction on-chain without executing
   */
  async simulate() {
    if (!this.contract.callStatic[this.method]) {
      throw this.functionError();
    }
    try {
      return await this.contract.callStatic[this.method](...this.args, ...(this.overrides.value ? [{
        value: this.overrides.value
      }] : []));
    } catch (err) {
      throw await this.transactionError(err);
    }
  }

  /**
   * Estimate the gas limit of this transaction
   */
  async estimateGasLimit() {
    if (!this.contract.estimateGas[this.method]) {
      throw this.functionError();
    }
    try {
      const gasEstimate = await this.contract.estimateGas[this.method](...this.args, this.overrides);
      if (this.gasMultiple) {
        return BigNumber.from(Math.floor(BigNumber.from(gasEstimate).toNumber() * this.gasMultiple));
      }
      return gasEstimate;
    } catch (err) {
      // If gas estimation fails, we'll call static to get a better error message
      await this.simulate();

      // If transaction simulation (static call) doesn't throw, then throw a generic error
      throw await this.transactionError(err);
    }
  }

  /**
   * Send the transaction without waiting for it to be mined.
   */
  async send() {
    if (!this.contract.functions[this.method]) {
      throw this.functionError();
    }
    if (this.gaslessOptions && ("openzeppelin" in this.gaslessOptions || "biconomy" in this.gaslessOptions)) {
      return this.sendGasless();
    }
    const gasOverrides = await this.getGasOverrides();
    const overrides = {
      ...gasOverrides,
      ...this.overrides
    };

    // First, if no gasLimit is passed, call estimate gas ourselves
    if (!overrides.gasLimit) {
      overrides.gasLimit = await this.estimateGasLimit();
      try {
        // for dynamic contracts, add 30% to the gas limit to account for multiple delegate calls
        const abi = JSON.parse(this.contract.interface.format("json"));
        if (isRouterContract(abi)) {
          overrides.gasLimit = overrides.gasLimit.mul(110).div(100);
        }
      } catch (err) {
        console.warn("Error raising gas limit", err);
      }
    }

    // Now there should be no gas estimate errors
    try {
      return await this.contract.functions[this.method](...this.args, overrides);
    } catch (err) {
      throw await this.transactionError(err);
    }
  }

  /**
   * Send the transaction and wait for it to be mined
   */
  async execute() {
    const tx = await this.send();
    let receipt;
    try {
      receipt = await tx.wait();
    } catch (err) {
      // If tx.wait() fails, it just gives us a generic "transaction failed"
      // error. So instead, we need to call static to get an informative error message
      await this.simulate();

      // If transaction simulation (static call) doesn't throw, then throw with the message that we have
      throw await this.transactionError(err);
    }
    if (this.parse) {
      return this.parse(receipt);
    }
    return {
      receipt
    };
  }

  /**
   * Execute the transaction with gasless
   */
  async sendGasless() {
    const tx = await this.prepareGasless();
    const txHash = await defaultGaslessSendFunction(tx, this.signer, this.provider, this.storage, this.gaslessOptions);

    // Need to poll here because ethers.provider.getTransaction lies about the type
    // It can actually return null, which can happen if we're still in gasless API send queue
    let sentTx;
    let iteration = 1;
    while (!sentTx) {
      try {
        sentTx = await this.provider.getTransaction(txHash);
      } catch (err) {
        // some providers can throw an error if the tx is very recent
      }
      // Exponential (ish) backoff for polling
      if (!sentTx) {
        await new Promise(resolve => setTimeout(resolve, Math.min(iteration * 1000, 10000)));
        iteration++;
      }

      // Timeout if we still don't have it after a while
      if (iteration > 20) {
        throw new Error(`Unable to retrieve transaction with hash ${txHash}`);
      }
    }
    return sentTx;
  }

  /**
   * @internal
   * @returns
   */
  async prepareGasless() {
    invariant(this.gaslessOptions && ("openzeppelin" in this.gaslessOptions || "biconomy" in this.gaslessOptions), "No gasless options set on this transaction!");
    const signerAddress = await this.getSignerAddress();
    const args = [...this.args];
    if (this.method === "multicall" && Array.isArray(this.args[0]) && args[0].length > 0) {
      args[0] = args[0].map(tx => utils.solidityPack(["bytes", "address"], [tx, signerAddress]));
    }
    invariant(this.signer, "Cannot execute gasless transaction without valid signer");
    const [{
      chainId
    }, from] = await Promise.all([this.provider.getNetwork(), this.overrides.from || signerAddress]);
    const to = this.contract.address;
    const value = this.overrides?.value || 0;
    if (BigNumber.from(value).gt(0)) {
      throw new Error("Cannot send native token value with gasless transaction");
    }
    const data = this.contract.interface.encodeFunctionData(this.method, args);
    let gas = BigNumber.from(0);
    try {
      const gasEstimate = await this.contract.estimateGas[this.method](...args);
      gas = gasEstimate.mul(2);
    } catch (e) {
      // ignore
    }

    // in some cases WalletConnect doesn't properly give an estimate for how much gas it would actually use.
    // as a fix, we're setting it to a high arbitrary number (500k) as the gas limit that should cover for most function calls.
    if (gas.lt(100000)) {
      gas = BigNumber.from(500000);
    }

    // check for gas override in callOverrides
    if (this.overrides.gasLimit && BigNumber.from(this.overrides.gasLimit).gt(gas)) {
      gas = BigNumber.from(this.overrides.gasLimit);
    }
    return {
      from,
      to,
      data,
      chainId,
      gasLimit: gas,
      functionName: this.method,
      functionArgs: args,
      callOverrides: this.overrides
    };
  }
  functionError() {
    return new Error(`Contract "${this.contract.address}" does not have function "${this.method}"`);
  }

  /**
   * Create a nicely formatted error message with tx metadata and solidity stack trace
   */
  async transactionError(error) {
    const provider = this.provider;

    // Get metadata for transaction to populate into error
    const [network, from] = await Promise.all([provider.getNetwork(), this.overrides.from || this.getSignerAddress()]);
    const to = this.contract.address;
    const data = this.encode();
    const value = BigNumber.from(this.overrides.value || 0);
    const rpcUrl = provider.connection?.url;

    // Render function signature with arguments filled in
    const functionSignature = this.contract.interface.getFunction(this.method);
    const methodArgs = this.args.map(arg => {
      if (JSON.stringify(arg).length <= 80) {
        return JSON.stringify(arg);
      }
      return JSON.stringify(arg, undefined, 2);
    });
    const joinedArgs = methodArgs.join(", ").length <= 80 ? methodArgs.join(", ") : "\n" + methodArgs.map(arg => "  " + arg.split("\n").join("\n  ")).join(",\n") + "\n";
    const method = `${functionSignature.name}(${joinedArgs})`;
    const hash = error.transactionHash || error.transaction?.hash || error.receipt?.transactionHash;

    // Parse the revert reason from the error
    const reason = parseRevertReason(error);

    // Get contract sources for stack trace
    let sources = undefined;
    let contractName = undefined;
    try {
      const metadata = await fetchContractMetadataFromAddress(this.contract.address, this.provider, this.storage);
      if (metadata.name) {
        contractName = metadata.name;
      }
      if (metadata.metadata.sources) {
        sources = await fetchSourceFilesFromMetadata(metadata, this.storage);
      }
    } catch (err) {
      // no-op
    }
    return new TransactionError({
      reason,
      from,
      to,
      method,
      data,
      network,
      rpcUrl,
      value,
      hash,
      contractName,
      sources
    }, error);
  }
}
class DeployTransaction extends TransactionContext {
  constructor(options) {
    super(options);
    this.factory = options.factory;
    this.events = options.events;
  }
  encode() {
    return utils.hexlify(utils.concat([this.factory.bytecode, this.factory.interface.encodeDeploy(this.args)]));
  }
  getTarget() {
    return constants.AddressZero;
  }
  getMethod() {
    return "deploy";
  }
  async sign() {
    const populatedTx = await this.populateTransaction();
    return this.signer.signTransaction(populatedTx);
  }
  async simulate() {
    const populatedTx = await this.populateTransaction();
    return this.signer.call(populatedTx);
  }
  async estimateGasLimit() {
    try {
      const gasOverrides = await this.getGasOverrides();
      const overrides = {
        ...gasOverrides,
        ...this.overrides
      };
      const populatedTx = this.factory.getDeployTransaction(...this.args, overrides);
      return this.signer.estimateGas(populatedTx);
    } catch (err) {
      // No need to do simulation here, since there can't be revert errors
      throw await this.deployError(err);
    }
  }
  async send() {
    try {
      const populatedTx = await this.populateTransaction();
      return await this.signer.sendTransaction(populatedTx);
    } catch (err) {
      throw await this.deployError(err);
    }
  }
  async execute() {
    const tx = await this.send();
    try {
      await tx.wait();
    } catch (err) {
      // If tx.wait() fails, it just gives us a generic "transaction failed"
      // error. So instead, we need to call static to get an informative error message
      await this.simulate();

      // If transaction simulation (static call) doesn't throw, then throw with the message that we have
      throw await this.deployError(err);
    }
    const contractAddress = utils.getContractAddress({
      from: tx.from,
      nonce: tx.nonce
    });

    // TODO: Remove when we delete events from deploy
    if (this.events) {
      this.events.emit("contractDeployed", {
        status: "completed",
        contractAddress,
        transactionHash: tx.hash
      });
    }
    return contractAddress;
  }
  async populateTransaction() {
    const gasOverrides = await this.getGasOverrides();
    const overrides = {
      ...gasOverrides,
      ...this.overrides
    };

    // First, if no gasLimit is passed, call estimate gas ourselves
    if (!overrides.gasLimit) {
      overrides.gasLimit = await this.estimateGasLimit();
    }
    return this.factory.getDeployTransaction(...this.args, overrides);
  }

  /**
   * Create a nicely formatted error message with tx metadata and solidity stack trace
   */
  async deployError(error) {
    const provider = this.provider;

    // Get metadata for transaction to populate into error
    const [network, from] = await Promise.all([provider.getNetwork(), this.overrides.from || this.getSignerAddress()]);
    const data = this.encode();
    const value = BigNumber.from(this.overrides.value || 0);
    const rpcUrl = provider.connection?.url;
    const methodArgs = this.args.map(arg => {
      if (JSON.stringify(arg).length <= 80) {
        return JSON.stringify(arg);
      }
      return JSON.stringify(arg, undefined, 2);
    });
    const joinedArgs = methodArgs.join(", ").length <= 80 ? methodArgs.join(", ") : "\n" + methodArgs.map(arg => "  " + arg.split("\n").join("\n  ")).join(",\n") + "\n";
    const method = `deployContract(${joinedArgs})`;
    const hash = error.transactionHash || error.transaction?.hash || error.receipt?.transactionHash;

    // Parse the revert reason from the error
    const reason = parseRevertReason(error);
    return new TransactionError({
      reason,
      from,
      method,
      data,
      network,
      rpcUrl,
      value,
      hash
    }, error);
  }
}
async function defaultGaslessSendFunction(transaction, signer, provider, storage, gaslessOptions) {
  if (gaslessOptions && "biconomy" in gaslessOptions) {
    return biconomySendFunction(transaction, signer, provider, gaslessOptions);
  }
  return defenderSendFunction(transaction, signer, provider, storage, gaslessOptions);
}
async function biconomySendFunction(transaction, signer, provider, gaslessOptions) {
  const request = await biconomyPrepareRequest(transaction, signer, provider, gaslessOptions);
  const response = await fetch("https://api.biconomy.io/api/v2/meta-tx/native", request);
  if (response.ok) {
    const resp = await response.json();
    if (!resp.txHash) {
      throw new Error(`relay transaction failed: ${resp.log}`);
    }
    return resp.txHash;
  }
  throw new Error(`relay transaction failed with status: ${response.status} (${response.statusText})`);
}
async function defenderSendFunction(transaction, signer, provider, storage, gaslessOptions) {
  invariant(gaslessOptions && "openzeppelin" in gaslessOptions, "calling openzeppelin gasless transaction without openzeppelin config in the SDK options");
  const request = await defenderPrepareRequest(transaction, signer, provider, storage, gaslessOptions);
  const response = await fetch(gaslessOptions.openzeppelin.relayerUrl, request);
  if (response.ok) {
    const resp = await response.json();
    if (!resp.result) {
      throw new Error(`Relay transaction failed: ${resp.message}`);
    }
    const result = JSON.parse(resp.result);
    return result.txHash;
  }
  throw new Error(`relay transaction failed with status: ${response.status} (${response.statusText})`);
}
async function defenderPrepareRequest(transaction, signer, provider, storage, gaslessOptions) {
  invariant(gaslessOptions && "openzeppelin" in gaslessOptions, "calling openzeppelin gasless transaction without openzeppelin config in the SDK options");
  invariant(signer, "provider is not set");
  invariant(provider, "provider is not set");
  const forwarderAddress = gaslessOptions.openzeppelin.relayerForwarderAddress || (gaslessOptions.openzeppelin.useEOAForwarder ? CONTRACT_ADDRESSES[transaction.chainId].openzeppelinForwarderEOA || (await computeEOAForwarderAddress(provider, storage)) : CONTRACT_ADDRESSES[transaction.chainId].openzeppelinForwarder || (await computeForwarderAddress(provider, storage)));
  const forwarder = new Contract(forwarderAddress, ForwarderABI, provider);
  const nonce = await getAndIncrementNonce(forwarder, "getNonce", [transaction.from]);
  let domain;
  let types;
  let message;
  if (gaslessOptions.experimentalChainlessSupport) {
    domain = {
      name: "GSNv2 Forwarder",
      version: "0.0.1",
      verifyingContract: forwarderAddress
    };
    types = {
      ForwardRequest: ChainAwareForwardRequest
    };
    message = {
      from: transaction.from,
      to: transaction.to,
      value: BigNumber.from(0).toString(),
      gas: BigNumber.from(transaction.gasLimit).toString(),
      nonce: BigNumber.from(nonce).toString(),
      data: transaction.data,
      chainid: BigNumber.from(transaction.chainId).toString()
    };
  } else {
    domain = {
      name: gaslessOptions.openzeppelin.domainName,
      version: gaslessOptions.openzeppelin.domainVersion,
      chainId: transaction.chainId,
      verifyingContract: forwarderAddress
    };
    types = {
      ForwardRequest
    };
    message = {
      from: transaction.from,
      to: transaction.to,
      value: BigNumber.from(0).toString(),
      gas: BigNumber.from(transaction.gasLimit).toString(),
      nonce: BigNumber.from(nonce).toString(),
      data: transaction.data
    };
  }
  let signature;

  // if the executing function is "approve" and matches with erc20 approve signature
  // and if the token supports permit, then we use permit for gasless instead of approve.
  if (transaction.functionName === "approve" && transaction.functionArgs.length === 2) {
    const spender = transaction.functionArgs[0];
    const amount = transaction.functionArgs[1];
    // TODO: support DAI permit by signDAIPermit
    const {
      message: permit,
      signature: sig
    } = await signEIP2612Permit(signer, transaction.to, transaction.from, spender, amount);
    const {
      r,
      s,
      v
    } = utils.splitSignature(sig);
    message = {
      to: transaction.to,
      owner: permit.owner,
      spender: permit.spender,
      value: BigNumber.from(permit.value).toString(),
      nonce: BigNumber.from(permit.nonce).toString(),
      deadline: BigNumber.from(permit.deadline).toString(),
      r,
      s,
      v
    };
    signature = sig;
  } else {
    const {
      signature: sig
    } = await signTypedDataInternal(signer, domain, types, message);
    signature = sig;
  }
  let messageType = "forward";

  // if has owner property then it's permit :)
  if (message?.owner) {
    messageType = "permit";
  }
  return {
    method: "POST",
    body: JSON.stringify({
      request: message,
      signature,
      forwarderAddress,
      type: messageType
    })
  };
}
async function prepareGaslessRequest(tx) {
  const gaslessTx = await tx.prepareGasless();
  const gaslessOptions = tx.getGaslessOptions();
  if (gaslessOptions && "biconomy" in gaslessOptions) {
    const request = await biconomyPrepareRequest(gaslessTx, tx.getSigner, tx.getProvider, gaslessOptions);
    return {
      url: "https://api.biconomy.io/api/v2/meta-tx/native",
      ...request
    };
  } else {
    invariant(gaslessOptions && "openzeppelin" in gaslessOptions, "calling openzeppelin gasless transaction without openzeppelin config in the SDK options");
    const request = await defenderPrepareRequest(gaslessTx, tx.getSigner, tx.getProvider, tx.getStorage, gaslessOptions);
    return {
      url: gaslessOptions.openzeppelin.relayerUrl,
      ...request
    };
  }
}
async function biconomyPrepareRequest(transaction, signer, provider, gaslessOptions) {
  invariant(gaslessOptions && "biconomy" in gaslessOptions, "calling biconomySendFunction without biconomy");
  invariant(signer && provider, "signer and provider must be set");
  const forwarder = new Contract(getContractAddressByChainId(transaction.chainId, "biconomyForwarder"), BiconomyForwarderAbi, provider);
  const batchId = 0;
  const batchNonce = await getAndIncrementNonce(forwarder, "getNonce", [transaction.from, batchId]);
  const request = {
    from: transaction.from,
    to: transaction.to,
    token: constants.AddressZero,
    txGas: transaction.gasLimit.toNumber(),
    tokenGasPrice: "0",
    batchId,
    batchNonce: batchNonce.toNumber(),
    deadline: Math.floor(Date.now() / 1000 + (gaslessOptions && "biconomy" in gaslessOptions && gaslessOptions.biconomy?.deadlineSeconds || 3600)),
    data: transaction.data
  };
  const hashToSign = utils.arrayify(utils.solidityKeccak256(["address", "address", "address", "uint256", "uint256", "uint256", "uint256", "uint256", "bytes32"], [request.from, request.to, request.token, request.txGas, request.tokenGasPrice, request.batchId, request.batchNonce, request.deadline, utils.keccak256(request.data)]));
  const signature = await signer.signMessage(hashToSign);
  return {
    method: "POST",
    body: JSON.stringify({
      from: transaction.from,
      apiId: gaslessOptions.biconomy.apiId,
      params: [request, signature],
      to: transaction.to,
      gasLimit: transaction.gasLimit.toHexString()
    }),
    headers: {
      "x-api-key": gaslessOptions.biconomy.apiKey,
      "Content-Type": "application/json;charset=utf-8"
    }
  };
}

/**
 * @internal
 */

/**
 * Handles metadata for a Contract
 * @remarks Read and update metadata for this contract
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const metadata = await contract.metadata.get();
 * await contract.metadata.set({
 *   name: "My Contract",
 *   description: "My contract description"
 * })
 * ```
 * @public
 */
class ContractMetadata {
  featureName = FEATURE_METADATA.name;
  constructor(contractWrapper, schema, storage) {
    this.contractWrapper = contractWrapper;
    this.schema = schema;
    this.storage = storage;
  }
  /**
   * @internal
   */
  parseOutputMetadata(metadata) {
    return this.schema.output.parseAsync(metadata);
  }

  /**
   * @internal
   */
  parseInputMetadata(metadata) {
    return this.schema.input.parseAsync(metadata);
  }
  /**
   * Get the metadata of this contract
   * @remarks Get the metadata of a contract
   * @example
   * ```javascript
   * const metadata = await contract.metadata.get();
   * console.log(metadata);
   * ```
   * @public
   * @returns the metadata of the given contract
   * @twfeature ContractMetadata
   */
  async get() {
    let data;
    if (this.supportsContractMetadata(this.contractWrapper)) {
      const uri = await this.contractWrapper.read("contractURI", []);
      if (uri && uri.includes("://")) {
        data = await this.storage.downloadJSON(uri);
      }
    }
    if (!data) {
      try {
        // try fetching metadata from bytecode and / or contract itself
        let contractName;
        try {
          if (hasFunction("name", this.contractWrapper)) {
            contractName = await this.contractWrapper.read("name", []);
          }
        } catch (err) {
          // no-op
        }
        let contractSymbol;
        try {
          if (hasFunction("symbol", this.contractWrapper)) {
            contractSymbol = await this.contractWrapper.read("symbol", []);
          }
        } catch (err) {
          // no-op
        }
        let publishedMetadata;
        try {
          publishedMetadata = await fetchContractMetadataFromAddress(this.contractWrapper.address, this.contractWrapper.getProvider(), this.storage, this.contractWrapper.options);
        } catch (err) {}
        data = {
          name: contractName || publishedMetadata?.name,
          symbol: contractSymbol,
          description: publishedMetadata?.info.title
        };
      } catch (e) {
        throw new Error("Could not fetch contract metadata");
      }
    }
    return this.parseOutputMetadata(data);
  }

  /**
   * Set the metadata of this contract
   * @remarks OVERWRITE the metadata of a contract
   * @example
   * ```javascript
   * await contract.metadata.set({
   *   name: "My Contract",
   *   description: "My contract description"
   * })
   * ```
   * @public
   * @param metadata - the metadata to set
   * @twfeature ContractMetadata
   */
  set = /* @__PURE__ */buildTransactionFunction(async metadata => {
    const uri = await this._parseAndUploadMetadata(metadata);
    const wrapper = this.contractWrapper;
    if (this.supportsContractMetadata(wrapper)) {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "setContractURI",
        args: [uri],
        parse: receipt => {
          return {
            receipt,
            data: this.get
          };
        }
      });
    } else {
      throw new ExtensionNotImplementedError(FEATURE_METADATA);
    }
  });

  /**
   * Update the metadata of a contract
   * @remarks Update the metadata of a contract
   * @example
   * ```javascript
   * await contract.metadata.update({
   *   description: "My new contract description"
   * })
   * ```
   * @public
   * @param metadata - the metadata to update
   * @twfeature ContractMetadata
   * */
  update = /* @__PURE__ */buildTransactionFunction(async metadata => {
    return await this.set.prepare({
      ...(await this.get()),
      ...metadata
    });
  });

  /**
   *
   * @internal
   * @param metadata - the metadata to set
   * @returns
   */
  async _parseAndUploadMetadata(metadata) {
    const parsedMetadata = await this.parseInputMetadata(metadata);
    return this.storage.upload(parsedMetadata);
  }
  supportsContractMetadata(contractWrapper) {
    return detectContractFeature(contractWrapper, "ContractMetadata");
  }
}

/**
 *
 * @internal
 */
const roleMap = {
  admin: "",
  transfer: "TRANSFER_ROLE",
  minter: "MINTER_ROLE",
  pauser: "PAUSER_ROLE",
  lister: "LISTER_ROLE",
  asset: "ASSET_ROLE",
  unwrap: "UNWRAP_ROLE",
  factory: "FACTORY_ROLE",
  signer: "SIGNER_ROLE"
};

/**
 * @public
 */

/**
 * @public
 */
const ALL_ROLES = /* @__PURE__ */Object.keys(roleMap);

/**
 * @internal
 */
function getRoleHash(role) {
  if (role === "admin") {
    return utils.hexZeroPad([0], 32);
  }
  return utils.id(roleMap[role]);
}

/**
 * Handle contract permissions
 * @remarks Configure roles and permissions for a contract, to restrict certain actions.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const rolesAndMembers = await contract.roles.getAll();
 * await contract.roles.grantRole("admin", "0x...");
 * ```
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TO BE REMOVED IN V4
class ContractRoles {
  featureName = FEATURE_PERMISSIONS.name;

  /**
   * @internal
   * @remarks This is used for typing inside react hooks which is why it has to be public.
   */

  constructor(contractWrapper, roles) {
    this.contractWrapper = contractWrapper;
    this.roles = roles;
  }

  /** **************************
   * READ FUNCTIONS
   ****************************/

  /**
   * Get all members of all roles
   * @remarks See {@link ContractRoles.get} to get a list of addresses that are members of a specific role.
   * @example
   * ```javascript
   * const rolesAndMembers = await contract.roles.getAll();
   * ```
   * @returns A record of {@link Role}s to lists of addresses that are members of the given role.
   * @throws If the contract does not support roles this will throw an error.
   *
   * @public
   * @twfeature PermissionsEnumerable
   */
  async getAll() {
    invariant(this.roles.length, "this contract has no support for roles");
    const roles = {};
    for (const role of this.roles) {
      roles[role] = await this.get(role);
    }
    return roles;
  }

  /**
   * Get all members of a specific role
   * @remarks See {@link ContractRoles.getAll} to get get a list of addresses for all supported roles on the contract.
   * @param role - The Role to to get a memberlist for.
   * @returns The list of addresses that are members of the specific role.
   * @throws If you are requesting a role that does not exist on the contract this will throw an error.
   *
   * @example Say you want to get the list of addresses that are members of the minter role.
   * ```javascript
   * const minterAddresses = await contract.roles.get("minter");
   * ```
   *
   * @public
   * @twfeature Permissions
   */
  async get(role) {
    invariant(this.roles.includes(role), `this contract does not support the "${role}" role`);
    const wrapper = this.contractWrapper;
    if (hasFunction("getRoleMemberCount", wrapper) && hasFunction("getRoleMember", wrapper)) {
      const roleHash = getRoleHash(role);
      const count = (await wrapper.read("getRoleMemberCount", [roleHash])).toNumber();
      return await Promise.all(Array.from(Array(count).keys()).map(i => wrapper.read("getRoleMember", [roleHash, i])));
    }
    throw new Error("Contract does not support enumerating roles. Please implement IPermissionsEnumerable to unlock this functionality.");
  }

  /**
   * Overwrite the list of members for specific roles
   *
   * @remarks Every role in the list will be overwritten with the new list of addresses provided with them.
   * If you want to add or remove addresses for a single address use {@link ContractRoles.grant} and {@link ContractRoles.revoke} respectively instead.
   * @param rolesWithAddresses - A record of {@link Role}s to lists of addresses that should be members of the given role.
   * @throws If you are requesting a role that does not exist on the contract this will throw an error.
   * @example Say you want to overwrite the list of addresses that are members of the minter role.
   * ```javascript
   * const minterAddresses = await contract.roles.get("minter");
   * await contract.roles.setAll({
   *  minter: []
   * });
   * console.log(await contract.roles.get("minter")); // No matter what members had the role before, the new list will be set to []
   * ```
   * @public
   * @twfeature Permissions
   *
   * */
  setAll = /* @__PURE__ */buildTransactionFunction(async rolesWithAddresses => {
    const contractEncoder = new ContractEncoder(this.contractWrapper);
    const roles = Object.keys(rolesWithAddresses);
    invariant(roles.length, "you must provide at least one role to set");
    invariant(roles.every(role => this.roles.includes(role)), "this contract does not support the given role");
    const currentRoles = await this.getAll();
    const encoded = [];
    // add / remove admin role at the end so we don't revoke admin then grant
    const sortedRoles = roles.sort(role => role === "admin" ? 1 : -1);
    for (let i = 0; i < sortedRoles.length; i++) {
      const role = sortedRoles[i];
      const addresses = await Promise.all(rolesWithAddresses[role]?.map(async addressOrEns => await resolveAddress(addressOrEns)) || []);
      const currentAddresses = await Promise.all(currentRoles[role]?.map(async addressOrEns => await resolveAddress(addressOrEns)) || []);
      const toAdd = addresses.filter(address => !currentAddresses.includes(address));
      const toRemove = currentAddresses.filter(address => !addresses.includes(address));
      if (toAdd.length) {
        toAdd.forEach(address => {
          encoded.push(contractEncoder.encode("grantRole", [getRoleHash(role), address]));
        });
      }
      if (toRemove.length) {
        for (let j = 0; j < toRemove.length; j++) {
          const address = toRemove[j];
          const revokeFunctionName = await this.getRevokeRoleFunctionName(address);
          encoded.push(contractEncoder.encode(revokeFunctionName, [getRoleHash(role), address]));
        }
      }
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [encoded]
    });
  });

  /**
   * Throws an error if an address is missing the roles specified.
   *
   * @param roles - The roles to check
   * @param address - The address to check
   *
   * @internal
   */
  async verify(roles, address) {
    await Promise.all(roles.map(async role => {
      const members = await this.get(role);
      const resolvedAddress = await resolveAddress(address);
      if (!members.map(a => a.toLowerCase()).includes(resolvedAddress.toLowerCase())) {
        throw new MissingRoleError(resolvedAddress, role);
      }
    }));
  }

  /** **************************
   * WRITE FUNCTIONS
   ****************************/

  /**
   * Grant a role to a specific address
   *
   * @remarks Make sure you are sure you want to grant the role to the address.
   *
   * @example
   * ```javascript
   * await contract.roles.grant("minter", "{{wallet_address}}");
   * ```
   *
   * @param role - The {@link Role} to grant to the address
   * @param address - The address to grant the role to
   * @returns The transaction receipt
   * @throws If you are trying to grant does not exist on the contract this will throw an error.
   *
   * @public
   * @twfeature Permissions
   */
  grant = /* @__PURE__ */buildTransactionFunction(async (role, address) => {
    invariant(this.roles.includes(role), `this contract does not support the "${role}" role`);
    const resolvedAddress = await resolveAddress(address);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "grantRole",
      args: [getRoleHash(role), resolvedAddress]
    });
  });

  /**
   * Revoke a role from a specific address
   *
   * @remarks
   *
   * -- Caution --
   *
   * This will let you remove yourself from the role, too.
   * If you remove yourself from the admin role, you will no longer be able to administer the contract.
   * There is no way to recover from this.
   *
   * @example
   * ```javascript
   * await contract.roles.revoke("minter", "{{wallet_address}}");
   * ```
   *
   * @param role - The {@link Role} to revoke
   * @param address - The address to revoke the role from
   * @returns The transaction receipt
   * @throws If you are trying to revoke does not exist on the module this will throw an error.
   *
   * @public
   * @twfeature Permissions
   */
  revoke = /* @__PURE__ */buildTransactionFunction(async (role, address) => {
    invariant(this.roles.includes(role), `this contract does not support the "${role}" role`);
    const resolvedAddress = await resolveAddress(address);
    const revokeFunctionName = await this.getRevokeRoleFunctionName(resolvedAddress);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: revokeFunctionName,
      args: [getRoleHash(role), resolvedAddress]
    });
  });

  /** **************************
   * PRIVATE FUNCTIONS
   ****************************/

  async getRevokeRoleFunctionName(address) {
    const resolvedAddress = await resolveAddress(address);
    const signerAddress = await this.contractWrapper.getSignerAddress();
    if (signerAddress.toLowerCase() === resolvedAddress.toLowerCase()) {
      return "renounceRole";
    }
    return "revokeRole";
  }
}

/**
 * Handle contract royalties
 * @remarks Configure royalties for an entire contract or a particular token.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
 * await contract.roles.setTokenRoyaltyInfo(tokenId, {
 *   seller_fee_basis_points: 100, // 1% royalty fee
 *   fee_recipient: "0x...", // the fee recipient
 * });
 * ```
 * @public
 */
class ContractRoyalty {
  featureName = FEATURE_ROYALTY.name;
  constructor(contractWrapper, metadata) {
    this.contractWrapper = contractWrapper;
    this.metadata = metadata;
  }

  /**
   * Get the royalty recipient and fee
   * @returns - The royalty recipient and BPS
   * @example
   * ```javascript
   * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
   * console.log(royaltyInfo.fee_recipient);
   * console.log(royaltyInfo.seller_fee_basis_points);
   * ```
   * @public
   * @twfeature Royalty
   */
  async getDefaultRoyaltyInfo() {
    const [royaltyRecipient, royaltyBps] = await this.contractWrapper.read("getDefaultRoyaltyInfo", []);
    // parse it on the way out to make sure we default things if they are not set
    return CommonRoyaltySchema.parseAsync({
      fee_recipient: royaltyRecipient,
      seller_fee_basis_points: royaltyBps
    });
  }

  /**
   * Get the royalty recipient and fee of a particular token
   * @returns - The royalty recipient and BPS
   * @example
   * ```javascript
   * const royaltyInfo = await contract.royalties.getDefaultRoyaltyInfo();
   * console.log(royaltyInfo.fee_recipient);
   * console.log(royaltyInfo.seller_fee_basis_points);
   * ```
   * @public
   * @twfeature Royalty
   */
  async getTokenRoyaltyInfo(tokenId) {
    const [royaltyRecipient, royaltyBps] = await this.contractWrapper.read("getRoyaltyInfoForToken", [tokenId]);
    return CommonRoyaltySchema.parseAsync({
      fee_recipient: royaltyRecipient,
      seller_fee_basis_points: royaltyBps
    });
  }

  /**
   * Set the royalty recipient and fee
   * @param royaltyData - the royalty recipient and fee
   *  @example
   * ```javascript
   * await contract.roles.setDefaultRoyaltyInfo({
   *   seller_fee_basis_points: 100, // 1% royalty fee
   *   fee_recipient: "0x...", // the fee recipient
   * });
   * ```
   * @public
   * @twfeature Royalty
   */
  setDefaultRoyaltyInfo = /* @__PURE__ */buildTransactionFunction(async royaltyData => {
    // read the metadata from the contract
    const oldMetadata = await this.metadata.get();

    // update the metadata with the new royalty data
    // if one of the keys is "undefined" it will be ignored (which is the desired behavior)
    const mergedMetadata = await this.metadata.parseInputMetadata({
      ...oldMetadata,
      ...royaltyData
    });

    // why not use this.metadata.set()? - because that would end up sending it's own separate transaction to `setContractURI`
    // but we want to send both the `setRoyaltyInfo` and `setContractURI` in one transaction!
    const contractURI = await this.metadata._parseAndUploadMetadata(mergedMetadata);
    if (hasFunction("setContractURI", this.contractWrapper)) {
      const contractEncoder = new ContractEncoder(this.contractWrapper);
      // encode both the functions we want to send
      const encoded = [contractEncoder.encode("setDefaultRoyaltyInfo", [mergedMetadata.fee_recipient, mergedMetadata.seller_fee_basis_points]), contractEncoder.encode("setContractURI", [contractURI])];
      // actually send the transaction and return the receipt + a way to get the new royalty info

      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "multicall",
        args: [encoded],
        parse: receipt => ({
          receipt,
          data: () => this.getDefaultRoyaltyInfo()
        })
      });
    } else {
      throw new Error("Updating royalties requires implementing ContractMetadata in your contract to support marketplaces like OpenSea.");
    }
  });

  /**
   * Set the royalty recipient and fee for a particular token
   * @param tokenId - the token id
   * @param royaltyData - the royalty recipient and fee
   * @example
   * ```javascript
   * const tokenId = 0;
   * await contract.roles.setTokenRoyaltyInfo(tokenId, {
   *   seller_fee_basis_points: 100, // 1% royalty fee
   *   fee_recipient: "0x...", // the fee recipient
   * });
   * ```
   * @public
   * @twfeature Royalty
   */
  setTokenRoyaltyInfo = /* @__PURE__ */buildTransactionFunction(async (tokenId, royaltyData) => {
    const parsedRoyaltyData = CommonRoyaltySchema.parse(royaltyData);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setRoyaltyInfoForToken",
      args: [tokenId, parsedRoyaltyData.fee_recipient, parsedRoyaltyData.seller_fee_basis_points],
      parse: receipt => ({
        receipt,
        data: () => this.getDefaultRoyaltyInfo()
      })
    });
  });
}

/**
 * Handle primary sales recipients
 * @remarks Configure primary sale recipients for an entire contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const salesRecipient = await contract.sales.getRecipient();
 * await contract.sales.setRecipient(recipientWalletAddress);
 * ```
 * @public
 */
class ContractPrimarySale {
  featureName = FEATURE_PRIMARY_SALE.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Get the primary sale recipient
   * @returns the wallet address.
   * @example
   * ```javascript
   * const salesRecipient = await contract.sales.getRecipient();
   * ```
   * @public
   * @twfeature PrimarySale
   */
  async getRecipient() {
    const result = await this.contractWrapper.read("primarySaleRecipient", []);
    return result;
  }

  /**
   * Set the primary sale recipient
   * @param recipient - the wallet address
   * @example
   * ```javascript
   * await contract.sales.setRecipient(recipientWalletAddress);
   * ```
   * @public
   * @twfeature PrimarySale
   */
  setRecipient = /* @__PURE__ */buildTransactionFunction(async recipient => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setPrimarySaleRecipient",
      args: [recipient]
    });
  });
}

const FALLBACK_METADATA = {
  name: "Failed to load NFT metadata"
};

/**
 * fetches the token metadata
 * @param tokenId - the id (to get it back in the output)
 * @param tokenUri - the uri to fetch
 * @param storage - which storage to fetch from
 *
 * @internal
 */
async function fetchTokenMetadata(tokenId, tokenUri, storage) {
  // check for base64 encoded JSON
  if (tokenUri.startsWith("data:application/json;base64") && typeof Buffer !== "undefined") {
    const base64 = tokenUri.split(",")[1];
    const jsonMetadata = JSON.parse(Buffer.from(base64, "base64").toString("utf-8"));
    return CommonNFTOutput.parse({
      ...jsonMetadata,
      id: BigNumber.from(tokenId).toString(),
      uri: tokenUri
    });
  }
  // handle dynamic id URIs (2 possible formats)
  const parsedUri = tokenUri.replace("{id}", utils.hexZeroPad(BigNumber.from(tokenId).toHexString(), 32).slice(2));
  let jsonMetadata;
  try {
    jsonMetadata = await storage.downloadJSON(parsedUri);
  } catch (err) {
    const unparsedTokenIdUri = tokenUri.replace("{id}", BigNumber.from(tokenId).toString());
    try {
      jsonMetadata = await storage.downloadJSON(unparsedTokenIdUri);
    } catch (e) {
      console.warn(`failed to get token metadata: ${JSON.stringify({
        tokenId: tokenId.toString(),
        tokenUri
      })} -- falling back to default metadata`);
      jsonMetadata = FALLBACK_METADATA;
    }
  }
  return CommonNFTOutput.parse({
    ...jsonMetadata,
    id: BigNumber.from(tokenId).toString(),
    uri: tokenUri
  });
}

// Used for marketplace to fetch NFT metadata from contract address + tokenId
/**
 * @internal
 * @param contractAddress
 * @param provider
 * @param tokenId
 * @param storage
 */
async function fetchTokenMetadataForContract(contractAddress, provider, tokenId, storage) {
  let uri;
  const erc165 = new Contract(contractAddress, ERC165Abi, provider);
  const isERC721 = await erc165.supportsInterface(InterfaceId_IERC721);
  const isERC1155 = await erc165.supportsInterface(InterfaceId_IERC1155);
  if (isERC721) {
    const erc721 = new Contract(contractAddress, IERC721MetadataAbi, provider);
    uri = await erc721.tokenURI(tokenId);
  } else if (isERC1155) {
    const erc1155 = new Contract(contractAddress, Erc1155MetadataAbi, provider);
    uri = await erc1155.uri(tokenId);
  } else {
    throw Error("Contract must implement ERC 1155 or ERC 721.");
  }
  if (!uri) {
    // no uri found, return fallback metadata
    return CommonNFTOutput.parse({
      ...FALLBACK_METADATA,
      id: BigNumber.from(tokenId).toString(),
      uri: ""
    });
  }
  return fetchTokenMetadata(tokenId, uri, storage);
}

/**
 * @internal
 * @param metadata
 * @param storage
 */
async function uploadOrExtractURI(metadata, storage) {
  if (typeof metadata === "string") {
    return metadata;
  } else {
    return await storage.upload(CommonNFTInput.parse(metadata));
  }
}

/**
 * @internal
 * @param metadatas
 * @param storage
 * @param startNumber
 * @param contractAddress
 * @param signerAddress
 * @param options
 */
async function uploadOrExtractURIs(metadatas, storage, startNumber, options) {
  if (isUriList(metadatas)) {
    return metadatas;
  } else if (isMetadataList(metadatas)) {
    const uris = await storage.uploadBatch(metadatas.map(m => CommonNFTInput.parse(m)), {
      rewriteFileNames: {
        fileStartNumber: startNumber || 0
      },
      onProgress: options?.onProgress
    });
    return uris;
  } else {
    throw new Error("NFT metadatas must all be of the same type (all URI or all NFTMetadataInput)");
  }
}
function getBaseUriFromBatch(uris) {
  const baseUri = uris[0].substring(0, uris[0].lastIndexOf("/"));
  for (let i = 0; i < uris.length; i++) {
    const uri = uris[i].substring(0, uris[i].lastIndexOf("/"));
    if (baseUri !== uri) {
      throw new Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${baseUri}' but got '${uri}'`);
    }
  }

  // Ensure that baseUri ends with trailing slash
  return baseUri.replace(/\/$/, "") + "/";
}
function isUriList(metadatas) {
  return metadatas.find(m => typeof m !== "string") === undefined;
}
function isMetadataList(metadatas) {
  return metadatas.find(m => typeof m !== "object") === undefined;
}

/**
 * Handles delayed reveal logic
 * @public
 */
class DelayedReveal {
  constructor(contractWrapper, storage, featureName, nextTokenIdToMintFn) {
    this.featureName = featureName;
    this.nextTokenIdToMintFn = nextTokenIdToMintFn;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  /**
   * Create a batch of encrypted NFTs that can be revealed at a later time.
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until your reveal them!
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, until the reveal happens!
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * ```
   * @public
   * @param placeholder - the placeholder NFT to show before the reveal
   * @param metadatas - the final NFTs that will be hidden
   * @param password - the password that will be used to reveal these NFTs
   * @param options - additional options like upload progress
   */
  createDelayedRevealBatch = /* @__PURE__ */buildTransactionFunction(async (placeholder, metadatas, password, options) => {
    if (!password) {
      throw new Error("Password is required");
    }
    const placeholderUris = await this.storage.uploadBatch([CommonNFTInput.parse(placeholder)], {
      rewriteFileNames: {
        fileStartNumber: 0
      }
    });
    const placeholderUri = getBaseUriFromBatch(placeholderUris);
    const startFileNumber = await this.nextTokenIdToMintFn();
    const uris = await this.storage.uploadBatch(metadatas.map(m => CommonNFTInput.parse(m)), {
      onProgress: options?.onProgress,
      rewriteFileNames: {
        fileStartNumber: startFileNumber.toNumber()
      }
    });
    const baseUri = getBaseUriFromBatch(uris);
    const baseUriId = await this.contractWrapper.read("getBaseURICount", []);
    const hashedPassword = await this.hashDelayRevealPassword(baseUriId, password);
    const encryptedBaseUri = await this.contractWrapper.read("encryptDecrypt", [utils.toUtf8Bytes(baseUri), hashedPassword]);
    let data;
    const legacyContract = await this.isLegacyContract();
    if (legacyContract) {
      data = encryptedBaseUri;
    } else {
      const chainId = await this.contractWrapper.getChainID();
      const provenanceHash = utils.solidityKeccak256(["bytes", "bytes", "uint256"], [utils.toUtf8Bytes(baseUri), hashedPassword, chainId]);
      data = utils.defaultAbiCoder.encode(["bytes", "bytes32"], [encryptedBaseUri, provenanceHash]);
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "lazyMint",
      args: [uris.length, placeholderUri.endsWith("/") ? placeholderUri : `${placeholderUri}/`, data],
      parse: receipt => {
        const events = this.contractWrapper.parseLogs("TokensLazyMinted", receipt?.logs);
        const startingIndex = events[0].args.startTokenId;
        const endingIndex = events[0].args.endTokenId;
        const results = [];
        for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
          results.push({
            id,
            receipt
          });
        }
        return results;
      }
    });
  });

  /**
   * Reveal a batch of hidden NFTs
   * @remarks Reveal the NFTs of a batch using the password.
   * @example
   * ```javascript
   * // the batch to reveal
   * const batchId = 0;
   * // reveal the batch
   * await contract.revealer.reveal(batchId, "my secret password");
   * ```
   * @public
   * @param batchId - the id of the batch to reveal
   * @param password - the password
   */
  reveal = /* @__PURE__ */buildTransactionFunction(async (batchId, password) => {
    if (!password) {
      throw new Error("Password is required");
    }
    const key = await this.hashDelayRevealPassword(batchId, password);
    // performing the reveal locally to make sure it'd succeed before sending the transaction
    try {
      const decryptedUri = await this.contractWrapper.callStatic().reveal(batchId, key);
      // basic sanity check for making sure decryptedUri is valid
      // this is optional because invalid decryption key would result in non-utf8 bytes and
      // ethers would throw when trying to decode it
      if (!decryptedUri.includes("://") || !decryptedUri.endsWith("/")) {
        throw new Error("invalid password");
      }
    } catch (e) {
      throw new Error("invalid password");
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "reveal",
      args: [batchId, key]
    });
  });

  /**
   * Gets the list of unrevealed NFT batches.
   * @remarks Gets the list of unrevealed NFT batches.
   * @example
   * ```javascript
   * const batches = await contract.revealer.getBatchesToReveal();
   * ```
   * @public
   */
  async getBatchesToReveal() {
    const count = await this.contractWrapper.read("getBaseURICount", []);
    if (count.isZero()) {
      return [];
    }
    const countRangeArray = Array.from(Array(count.toNumber()).keys());
    // map over to get the base uri indices, which should be the end token id of every batch
    const uriIndices = await Promise.all(countRangeArray.map(i => {
      if (hasFunction("getBatchIdAtIndex", this.contractWrapper)) {
        return this.contractWrapper.read("getBatchIdAtIndex", [i]);
      }
      if (hasFunction("baseURIIndices", this.contractWrapper)) {
        return this.contractWrapper.read("baseURIIndices", [i]);
      }
      throw new Error("Contract does not have getBatchIdAtIndex or baseURIIndices.");
    }));

    // first batch always start from 0. don't need to fetch the last batch so pop it from the range array
    const uriIndicesWithZeroStart = uriIndices.slice(0, uriIndices.length - 1);

    // returns the token uri for each batches. first batch always starts from token id 0.
    const tokenMetadatas = await Promise.all(Array.from([0, ...uriIndicesWithZeroStart]).map(i => this.getNftMetadata(i.toString())));

    // index is the uri indices, which is end token id. different from uris
    const legacyContract = await this.isLegacyContract();
    const encryptedUriData = await Promise.all(Array.from([...uriIndices]).map(i => legacyContract ? this.getLegacyEncryptedData(i) : this.contractWrapper.read("encryptedData", [i])));
    const encryptedBaseUris = encryptedUriData.map(data => {
      if (utils.hexDataLength(data) > 0) {
        if (legacyContract) {
          return data;
        }
        const result = utils.defaultAbiCoder.decode(["bytes", "bytes32"], data);
        return result[0];
      } else {
        return data;
      }
    });
    return tokenMetadatas.map((meta, index) => ({
      batchId: BigNumber.from(index),
      batchUri: meta.uri,
      placeholderMetadata: meta
    })).filter((_, index) => utils.hexDataLength(encryptedBaseUris[index]) > 0);
  }

  /**
   * Algorithm to hash delay reveal password, so we don't broadcast the input password on-chain.
   *
   * @internal
   */
  async hashDelayRevealPassword(batchTokenIndex, password) {
    const chainId = await this.contractWrapper.getChainID();
    const contractAddress = this.contractWrapper.address;
    return utils.solidityKeccak256(["string", "uint256", "uint256", "address"], [password, chainId, batchTokenIndex, contractAddress]);
  }
  async getNftMetadata(tokenId) {
    return fetchTokenMetadataForContract(this.contractWrapper.address, this.contractWrapper.getProvider(), tokenId, this.storage);
  }
  async isLegacyContract() {
    if (hasFunction("contractVersion", this.contractWrapper)) {
      try {
        const version = await this.contractWrapper.read("contractVersion", []);
        return version <= 2;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  async getLegacyEncryptedData(index) {
    const legacy = new Contract(this.contractWrapper.address, DeprecatedAbi, this.contractWrapper.getProvider());
    const result = await legacy.functions["encryptedBaseURI"](index);
    if (result.length > 0) {
      return result[0];
    } else {
      return "0x";
    }
  }
}

function abstractContractModelToLegacy(model) {
  return {
    startTimestamp: model.startTimestamp,
    maxClaimableSupply: model.maxClaimableSupply,
    supplyClaimed: model.supplyClaimed,
    merkleRoot: model.merkleRoot,
    pricePerToken: model.pricePerToken,
    currency: model.currency,
    quantityLimitPerTransaction: model.maxClaimablePerWallet,
    waitTimeInSecondsBetweenClaims: model.waitTimeInSecondsBetweenClaims || 0
  };
}

function abstractContractModelToNew(model) {
  return {
    startTimestamp: model.startTimestamp,
    maxClaimableSupply: model.maxClaimableSupply,
    supplyClaimed: model.supplyClaimed,
    merkleRoot: model.merkleRoot,
    pricePerToken: model.pricePerToken,
    currency: model.currency,
    quantityLimitPerWallet: model.maxClaimablePerWallet,
    metadata: model.metadata || ""
  };
}

/**
 * @internal
 * @param quantity
 * @param tokenDecimals
 */
function convertQuantityToBigNumber(quantity, tokenDecimals) {
  if (quantity === "unlimited") {
    return constants.MaxUint256;
  } else {
    return utils.parseUnits(quantity, tokenDecimals);
  }
}

function isNativeToken(tokenAddress) {
  return tokenAddress.toLowerCase() === NATIVE_TOKEN_ADDRESS || tokenAddress.toLowerCase() === constants.AddressZero;
}

/**
 *
 * @param provider
 * @param asset
 * @returns
 * @internal
 */
async function fetchCurrencyMetadata(provider, asset) {
  if (isNativeToken(asset)) {
    const network = await provider.getNetwork();
    const nativeToken = getNativeTokenByChainId(network.chainId);
    return {
      name: nativeToken.name,
      symbol: nativeToken.symbol,
      decimals: nativeToken.decimals
    };
  } else {
    const erc20 = new Contract(asset, IERC20MetadataAbi, provider);
    const [name, symbol, decimals] = await Promise.all([erc20.name(), erc20.symbol(), erc20.decimals()]);
    return {
      name,
      symbol,
      decimals
    };
  }
}

async function parseSnapshotInputs(inputs) {
  const chunkSize = 25000;
  const chunks = Array.from({
    length: Math.ceil(inputs.length / chunkSize)
  }, (_, i) => inputs.slice(i * chunkSize, i * chunkSize + chunkSize));
  const results = [];
  for (const chunk of chunks) {
    results.push(...(await SnapshotInputSchema.parseAsync(chunk)));
  }
  return results;
}

// shard using the first 2 hex character of the address
// this splits the merkle tree into 256 shards
// shard files will be 00.json, 01.json, 02.json, ..., ff.json
const SHARD_NYBBLES = 2;
let SnapshotFormatVersion = /*#__PURE__*/function (SnapshotFormatVersion) {
  SnapshotFormatVersion[SnapshotFormatVersion["V1"] = 1] = "V1";
  SnapshotFormatVersion[SnapshotFormatVersion["V2"] = 2] = "V2";
  return SnapshotFormatVersion;
}({}); // address, maxClaimable, price, currencyAddress
class ShardedMerkleTree {
  constructor(storage, baseUri, originalEntriesUri, shardNybbles, tokenDecimals) {
    this.storage = storage;
    this.shardNybbles = shardNybbles;
    this.baseUri = baseUri;
    this.originalEntriesUri = originalEntriesUri;
    this.tokenDecimals = tokenDecimals;
    this.shards = {};
    this.trees = {};
  }
  static async fromUri(uri, storage) {
    try {
      const shardedMerkleTreeInfo = await storage.downloadJSON(uri);
      if (shardedMerkleTreeInfo.isShardedMerkleTree) {
        return ShardedMerkleTree.fromShardedMerkleTreeInfo(shardedMerkleTreeInfo, storage);
      }
    } catch (e) {
      return undefined;
    }
  }
  static async fromShardedMerkleTreeInfo(info, storage) {
    return new ShardedMerkleTree(storage, info.baseUri, info.originalEntriesUri, info.shardNybbles, info.tokenDecimals);
  }
  static hashEntry(entry, tokenDecimals, currencyDecimals, snapshotFormatVersion) {
    switch (snapshotFormatVersion) {
      case SnapshotFormatVersion.V1:
        return utils.solidityKeccak256(["address", "uint256"], [entry.address, convertQuantityToBigNumber(entry.maxClaimable, tokenDecimals)]);
      case SnapshotFormatVersion.V2:
        return utils.solidityKeccak256(["address", "uint256", "uint256", "address"], [entry.address, convertQuantityToBigNumber(entry.maxClaimable, tokenDecimals), convertQuantityToBigNumber(entry.price || "unlimited", currencyDecimals), entry.currencyAddress || constants.AddressZero]);
    }
  }
  static async fetchAndCacheDecimals(cache, provider, currencyAddress) {
    if (!currencyAddress) {
      return 18;
    }
    // cache decimals for each currency to avoid refetching for every address
    let currencyDecimals = cache[currencyAddress];
    if (currencyDecimals === undefined) {
      const currencyMetadata = await fetchCurrencyMetadata(provider, currencyAddress);
      currencyDecimals = currencyMetadata.decimals;
      cache[currencyAddress] = currencyDecimals;
    }
    return currencyDecimals;
  }
  static async buildAndUpload(snapshotInput, tokenDecimals, provider, storage, snapshotFormatVersion) {
    let shardNybbles = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : SHARD_NYBBLES;
    const inputs = await parseSnapshotInputs(snapshotInput);

    // TODO Could also derive shardNybbles from input size
    const shards = {};
    for (const snapshotEntry of inputs) {
      const shard = snapshotEntry.address.slice(2, 2 + shardNybbles).toLowerCase();
      if (shards[shard] === undefined) {
        shards[shard] = [];
      }
      shards[shard].push(snapshotEntry);
    }
    const currencyDecimalMap = {};
    // create shard => subtree root map
    const subTrees = await Promise.all(Object.entries(shards).map(async _ref => {
      let [shard, entries] = _ref;
      return [shard, new MerkleTree(await Promise.all(entries.map(async entry => {
        // cache decimals for each currency to avoid refetching for every address
        const currencyDecimals = await ShardedMerkleTree.fetchAndCacheDecimals(currencyDecimalMap, provider, entry.currencyAddress);
        return ShardedMerkleTree.hashEntry(entry, tokenDecimals, currencyDecimals, snapshotFormatVersion);
      })), utils.keccak256, {
        sort: true
      }).getHexRoot()];
    }));
    const roots = Object.fromEntries(subTrees);
    // create master tree from shard => subtree root map
    const tree = new MerkleTree(Object.values(roots), utils.keccak256, {
      sort: true
    });
    const shardsToUpload = [];
    for (const [shardId, entries] of Object.entries(shards)) {
      const data = {
        proofs: tree.getProof(roots[shardId]).map(value => "0x" + value.data.toString("hex")),
        entries
      };
      shardsToUpload.push({
        data: JSON.stringify(data),
        name: `${shardId}.json`
      });
    }
    const uris = await storage.uploadBatch(shardsToUpload);
    const baseUri = uris[0].slice(0, uris[0].lastIndexOf("/"));
    const originalEntriesUri = await storage.upload(inputs);
    const shardedMerkleInfo = {
      merkleRoot: tree.getHexRoot(),
      baseUri,
      originalEntriesUri,
      shardNybbles,
      tokenDecimals,
      isShardedMerkleTree: true
    };
    const masterUri = await storage.upload(shardedMerkleInfo);
    return {
      shardedMerkleInfo,
      uri: masterUri
    };
  }
  async getProof(address, provider, snapshotFormatVersion) {
    const shardId = address.slice(2, 2 + this.shardNybbles).toLowerCase();
    let shard = this.shards[shardId];
    const currencyDecimalMap = {};
    if (shard === undefined) {
      try {
        shard = this.shards[shardId] = await this.storage.downloadJSON(`${this.baseUri}/${shardId}.json`);
        const hashedEntries = await Promise.all(shard.entries.map(async entry => {
          // cache decimals for each currency to avoid refetching for every address
          const currencyDecimals = await ShardedMerkleTree.fetchAndCacheDecimals(currencyDecimalMap, provider, entry.currencyAddress);
          return ShardedMerkleTree.hashEntry(entry, this.tokenDecimals, currencyDecimals, snapshotFormatVersion);
        }));
        this.trees[shardId] = new MerkleTree(hashedEntries, utils.keccak256, {
          sort: true
        });
      } catch (e) {
        return null;
      }
    }
    const entry = shard.entries.find(i => i.address.toLowerCase() === address.toLowerCase());
    if (!entry) {
      return null;
    }
    const currencyDecimals = await ShardedMerkleTree.fetchAndCacheDecimals(currencyDecimalMap, provider, entry.currencyAddress);
    const leaf = ShardedMerkleTree.hashEntry(entry, this.tokenDecimals, currencyDecimals, snapshotFormatVersion);
    const proof = this.trees[shardId].getProof(leaf).map(i => "0x" + i.data.toString("hex"));
    return SnapshotEntryWithProofSchema.parseAsync({
      ...entry,
      proof: proof.concat(shard.proofs)
    });
  }
  async getAllEntries() {
    try {
      return await this.storage.downloadJSON(this.originalEntriesUri);
    } catch (e) {
      console.warn("Could not fetch original snapshot entries", e);
      return [];
    }
  }
}

async function fetchSnapshotEntryForAddress(address, merkleRoot, merkleMetadata, provider, storage, snapshotFormatVersion) {
  if (!merkleMetadata) {
    return null;
  }
  const snapshotUri = merkleMetadata[merkleRoot];
  if (snapshotUri) {
    const raw = await storage.downloadJSON(snapshotUri);
    if (raw.isShardedMerkleTree && raw.merkleRoot === merkleRoot) {
      const merkleTree = await ShardedMerkleTree.fromShardedMerkleTreeInfo(raw, storage);
      return await merkleTree.getProof(address, provider, snapshotFormatVersion);
    }
    // legacy non-sharded, just fetch it all and filter out
    const snapshotData = await SnapshotSchema.parseAsync(raw);
    if (merkleRoot === snapshotData.merkleRoot) {
      return snapshotData.claims.find(c => c.address.toLowerCase() === address.toLowerCase()) || null;
    }
  }
  return null;
}

function legacyContractModelToAbstract(model) {
  return {
    startTimestamp: model.startTimestamp,
    maxClaimableSupply: model.maxClaimableSupply,
    supplyClaimed: model.supplyClaimed,
    merkleRoot: model.merkleRoot.toString(),
    pricePerToken: model.pricePerToken,
    currency: model.currency,
    maxClaimablePerWallet: model.quantityLimitPerTransaction,
    waitTimeInSecondsBetweenClaims: model.waitTimeInSecondsBetweenClaims
  };
}

function newContractModelToAbstract(model) {
  return {
    startTimestamp: model.startTimestamp,
    maxClaimableSupply: model.maxClaimableSupply,
    supplyClaimed: model.supplyClaimed,
    merkleRoot: model.merkleRoot.toString(),
    pricePerToken: model.pricePerToken,
    currency: model.currency,
    maxClaimablePerWallet: model.quantityLimitPerWallet,
    waitTimeInSecondsBetweenClaims: 0,
    metadata: model.metadata
  };
}

/**
 * @internal
 */
class RPCConnectionHandler extends EventEmitter {
  constructor(network, options) {
    super();
    try {
      this.options = SDKOptionsSchema.parse(options);
    } catch (optionParseError) {
      console.error("invalid sdk options object passed, falling back to default options", optionParseError);
      this.options = SDKOptionsSchema.parse({});
    }
    const [signer, provider] = getSignerAndProvider(network, this.options);
    this.network = network;
    this.signer = signer;
    this.provider = provider;
  }
  /**
   * The function to call whenever the network changes, such as when the users connects their wallet, disconnects their wallet, the connected chain changes, etc.
   *
   * @param network - a network, signer or provider that ethers js can interpret
   */
  updateSignerOrProvider(network) {
    const [signer, provider] = getSignerAndProvider(network, this.options);
    this.network = network;
    this.signer = signer;
    this.provider = provider;
  }
  /**
   *
   * @returns whether or not a signer is set, `true` if there is no signer so the class is in "read only" mode
   */
  isReadOnly() {
    return !isSigner(this.signer);
  }

  /**
   * Explicitly get the active signer.
   * @returns the active signer, if there is one
   */
  getSigner() {
    return this.signer;
  }

  /**
   * Explicitly get the active provider.
   * @returns the active provider
   */
  getProvider() {
    return this.provider;
  }

  /**
   *
   * @returns the current signer if there is one, otherwise the active provider
   */
  getSignerOrProvider() {
    return this.getSigner() || this.getProvider();
  }
}

/**
 * @internal
 */
class ContractWrapper extends RPCConnectionHandler {
  isValidContract = false;
  customOverrides = () => ({});
  /**
   * @internal
   */

  constructor(network, contractAddress, contractAbi, options, storage) {
    super(network, options);
    this.abi = contractAbi;
    this.address = contractAddress;
    // set up the contract
    this.writeContract = new Contract(contractAddress, contractAbi, this.getSignerOrProvider());
    // setup the read only contract
    this.readContract = this.writeContract.connect(this.getProvider());
    this.storage = storage;
  }
  updateSignerOrProvider(network) {
    // update the underlying base class
    super.updateSignerOrProvider(network);
    // re-connect the contract with the new signer / provider
    this.writeContract = this.writeContract.connect(this.getSignerOrProvider());
    // setup the read only contract
    this.readContract = this.writeContract.connect(this.getProvider());
  }

  /**
   * @internal
   */
  async getChainID() {
    const provider = this.getProvider();
    const {
      chainId
    } = await provider.getNetwork();
    return chainId;
  }
  /**
   * @internal
   */
  async getSignerAddress() {
    const signer = this.getSigner();
    if (!signer) {
      throw new Error("This action requires a connected wallet to sign the transaction. Please pass a valid signer to the SDK.");
    }
    return await signer.getAddress();
  }

  /**
   * @internal
   */
  callStatic() {
    return this.writeContract.callStatic;
  }

  /**
   * @internal
   */
  async getCallOverrides() {
    return getDefaultGasOverrides(this.getProvider());
  }

  /**
   * @internal
   */
  emitTransactionEvent(status, transactionHash) {
    this.emit(EventType.Transaction, {
      status,
      transactionHash
    });
  }

  /**
   * @internal
   */
  async multiCall(encoded) {
    return this.sendTransaction("multicall", [encoded]);
  }

  /**
   * @internal
   */
  async estimateGas(fn, args) {
    return this.writeContract.estimateGas[fn](...args);
  }

  /**
   * @internal
   */
  withTransactionOverride(hook) {
    this.customOverrides = hook;
  }

  /**
   *
   * @param functionName The function name on the contract to call
   * @param args The arguments to be passed to the functionName
   * @returns The return value of the function call
   */
  async read(functionName, args) {
    const functions = extractFunctionsFromAbi(AbiSchema.parse(this.abi)).filter(f => f.name === functionName);
    if (!functions.length) {
      throw new Error(`Function "${functionName.toString()}" not found in contract. Check your dashboard for the list of functions available`);
    }
    const fn = functions.find(f => f.name === functionName && f.inputs.length === args.length);

    // TODO extract this and re-use for deploy function to check constructor args
    if (!fn) {
      throw new Error(`Function "${functionName.toString()}" requires ${functions[0].inputs.length} arguments, but ${args.length} were provided.\nExpected function signature: ${functions[0].signature}`);
    }
    const ethersFnName = `${functionName.toString()}(${fn.inputs.map(i => i.type).join()})`;

    // check if the function exists on the contract, otherwise use the name passed in
    const fnName = ethersFnName in this.readContract.functions ? ethersFnName : functionName;
    if (fn.stateMutability === "view" || fn.stateMutability === "pure") {
      // read function
      const result = await this.readContract[fnName.toString()](...args);
      return result;
    }
    throw new Error("Cannot call a write function with read()");
  }

  /**
   * @internal
   */
  async call(functionName) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let overrides = arguments.length > 2 ? arguments[2] : undefined;
    // parse last arg as tx options if present
    const txOptions = overrides ? await CallOverrideSchema.parseAsync(overrides) : undefined;
    const functions = extractFunctionsFromAbi(AbiSchema.parse(this.abi)).filter(f => f.name === functionName);
    if (!functions.length) {
      throw new Error(`Function "${functionName}" not found in contract. Check your dashboard for the list of functions available`);
    }
    const fn = functions.find(f => f.name === functionName && f.inputs.length === args.length);

    // TODO extract this and re-use for deploy function to check constructor args
    if (!fn) {
      throw new Error(`Function "${functionName}" requires ${functions[0].inputs.length} arguments, but ${args.length} were provided.\nExpected function signature: ${functions[0].signature}`);
    }
    const ethersFnName = `${functionName}(${fn.inputs.map(i => i.type).join()})`;

    // check if the function exists on the contract, otherwise use the name passed in
    const fnName = ethersFnName in this.readContract.functions ? ethersFnName : functionName;

    // TODO validate each argument
    if (fn.stateMutability === "view" || fn.stateMutability === "pure") {
      // read function
      return txOptions ? this.readContract[fnName](...args, txOptions) : this.readContract[fnName](...args);
    } else {
      // write function
      const receipt = await this.sendTransaction(fnName, args, txOptions);
      return {
        receipt
      };
    }
  }

  /**
   * @internal
   */
  async sendTransaction(
  // eslint-disable-next-line @typescript-eslint/ban-types
  fn, args, callOverrides) {
    if (!callOverrides) {
      callOverrides = await this.getCallOverrides();
    }
    // if a custom override is set, merge our override with the custom one
    callOverrides = {
      ...callOverrides,
      ...this.customOverrides()
    };
    // clear up the override (single use)
    this.customOverrides = () => ({});
    if (this.options?.gasless && ("openzeppelin" in this.options.gasless || "biconomy" in this.options.gasless)) {
      if (fn === "multicall" && Array.isArray(args[0]) && args[0].length > 0) {
        const from = await this.getSignerAddress();
        args[0] = args[0].map(tx => utils.solidityPack(["bytes", "address"], [tx, from]));
      }
      const provider = this.getProvider();
      const txHash = await this.sendGaslessTransaction(fn, args, callOverrides);
      this.emitTransactionEvent("submitted", txHash);
      const receipt = await provider.waitForTransaction(txHash);
      this.emitTransactionEvent("completed", txHash);
      return receipt;
    } else {
      // one time verification that this is a valid contract (to avoid sending funds to wrong addresses)
      if (!this.isValidContract) {
        const code = await this.getProvider().getCode(this.address);
        this.isValidContract = code !== "0x";
        if (!this.isValidContract) {
          throw new Error("The address you're trying to send a transaction to is not a smart contract. Make sure you are on the correct network and the contract address is correct");
        }
      }
      const tx = await this.sendTransactionByFunction(fn, args, callOverrides);
      this.emitTransactionEvent("submitted", tx.hash);

      // tx.wait() can fail so we need to wrap it with a catch
      let receipt;
      try {
        receipt = await tx.wait();
      } catch (err) {
        try {
          // If tx.wait() fails, it just gives us a generic "transaction failed"
          // error. So instead, we need to call static to get an informative error message
          await this.writeContract.callStatic[fn](...args, ...(callOverrides.value ? [{
            value: callOverrides.value
          }] : []));
        } catch (staticErr) {
          throw await this.formatError(staticErr, fn, args, callOverrides);
        }
        throw await this.formatError(err, fn, args, callOverrides);
      }
      this.emitTransactionEvent("completed", tx.hash);
      return receipt;
    }
  }

  /**
   * @internal
   */
  async sendTransactionByFunction(fn, args, callOverrides) {
    const func = this.writeContract.functions[fn];
    if (!func) {
      throw new Error(`invalid function: "${fn.toString()}"`);
    }

    // First, if no gasLimit is passed, call estimate gas ourselves
    if (!callOverrides.gasLimit) {
      try {
        callOverrides.gasLimit = await this.writeContract.estimateGas[fn](...args, callOverrides);
      } catch (e) {
        // If gas estimation fails, we'll call static to get a better error message
        try {
          await this.writeContract.callStatic[fn](...args, ...(callOverrides.value ? [{
            value: callOverrides.value
          }] : []));
        } catch (err) {
          throw await this.formatError(err, fn, args, callOverrides);
        }
      }
    }

    // Now there should be no gas estimate errors
    try {
      return await func(...args, callOverrides);
    } catch (err) {
      const from = await (callOverrides.from || this.getSignerAddress());
      const value = await (callOverrides.value ? callOverrides.value : 0);
      const balance = await this.getProvider().getBalance(from);
      if (balance.eq(0) || value && balance.lt(value)) {
        throw await this.formatError(new Error("You have insufficient funds in your account to execute this transaction."), fn, args, callOverrides);
      }
      throw await this.formatError(err, fn, args, callOverrides);
    }
  }
  async formatError(error, fn, args, callOverrides) {
    const provider = this.getProvider();

    // Get metadata for transaction to populate into error
    const network = await provider.getNetwork();
    const from = await (callOverrides.from || this.getSignerAddress());
    const to = this.address;
    const data = this.readContract.interface.encodeFunctionData(fn, args);
    const value = BigNumber.from(callOverrides.value || 0);
    const rpcUrl = provider.connection?.url;

    // Render function signature with arguments filled in
    const functionSignature = this.readContract.interface.getFunction(fn);
    const methodArgs = args.map(arg => {
      if (JSON.stringify(arg).length <= 80) {
        return JSON.stringify(arg);
      }
      return JSON.stringify(arg, undefined, 2);
    });
    const joinedArgs = methodArgs.join(", ").length <= 80 ? methodArgs.join(", ") : "\n" + methodArgs.map(arg => "  " + arg.split("\n").join("\n  ")).join(",\n") + "\n";
    const method = `${functionSignature.name}(${joinedArgs})`;
    const hash = error.transactionHash || error.transaction?.hash || error.receipt?.transactionHash;

    // Parse the revert reason from the error
    const reason = parseRevertReason(error);

    // Get contract sources for stack trace
    let sources = undefined;
    let contractName = undefined;
    try {
      const metadata = await fetchContractMetadataFromAddress(this.address, this.getProvider(), this.storage, this.options);
      if (metadata.name) {
        contractName = metadata.name;
      }
      if (metadata.metadata.sources) {
        sources = await fetchSourceFilesFromMetadata(metadata, this.storage);
      }
    } catch (err) {
      // no-op
    }
    return new TransactionError({
      reason,
      from,
      to,
      method,
      data,
      network,
      rpcUrl,
      value,
      hash,
      contractName,
      sources
    }, error);
  }

  /**
   * @internal
   */
  async sendGaslessTransaction(fn) {
    let args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    let callOverrides = arguments.length > 2 ? arguments[2] : undefined;
    const signer = this.getSigner();
    invariant(signer, "Cannot execute gasless transaction without valid signer");
    const chainId = await this.getChainID();
    const from = await this.getSignerAddress();
    const to = this.writeContract.address;
    const value = callOverrides?.value || 0;
    if (BigNumber.from(value).gt(0)) {
      throw new Error("Cannot send native token value with gasless transaction");
    }
    const data = this.writeContract.interface.encodeFunctionData(fn, args);
    let gas = BigNumber.from(0);
    try {
      const gasEstimate = await this.readContract.estimateGas[fn](...args);
      gas = gasEstimate.mul(2);
    } catch (e) {
      // ignore
    }

    // in some cases WalletConnect doesn't properly gives an estimate for how much gas it would actually use.
    // as a fix, we're setting it to a high arbitrary number (500k) as the gas limit that should cover for most function calls.
    if (gas.lt(100000)) {
      gas = BigNumber.from(500000);
    }

    // check for gas override in callOverrides
    if (callOverrides.gasLimit && BigNumber.from(callOverrides.gasLimit).gt(gas)) {
      gas = BigNumber.from(callOverrides.gasLimit);
    }
    const tx = {
      from,
      to,
      data,
      chainId,
      gasLimit: gas,
      functionName: fn.toString(),
      functionArgs: args,
      callOverrides
    };
    return await this.defaultGaslessSendFunction(tx);
  }
  async signTypedData(signer, domain, types, message) {
    this.emit(EventType.Signature, {
      status: "submitted",
      message,
      signature: ""
    });
    const {
      signature: sig
    } = await signTypedDataInternal(signer, domain, types, message);
    this.emit(EventType.Signature, {
      status: "completed",
      message,
      signature: sig
    });
    return sig;
  }
  parseLogs(eventName, logs) {
    if (!logs || logs.length === 0) {
      return [];
    }
    const topic = this.writeContract.interface.getEventTopic(eventName);
    const parsedLogs = logs.filter(x => x.topics.indexOf(topic) >= 0);
    return parsedLogs.map(l => this.writeContract.interface.parseLog(l));
  }
  async defaultGaslessSendFunction(transaction) {
    if (this.options.gasless && "biconomy" in this.options.gasless) {
      return this.biconomySendFunction(transaction);
    }
    return this.defenderSendFunction(transaction);
  }
  async biconomySendFunction(transaction) {
    invariant(this.options.gasless && "biconomy" in this.options.gasless, "calling biconomySendFunction without biconomy");
    const signer = this.getSigner();
    const provider = this.getProvider();
    invariant(signer && provider, "signer and provider must be set");
    const forwarder = new Contract(getContractAddressByChainId(transaction.chainId, "biconomyForwarder"), BiconomyForwarderAbi, provider);
    const batchId = 0;
    const batchNonce = await getAndIncrementNonce(forwarder, "getNonce", [transaction.from, batchId]);
    const request = {
      from: transaction.from,
      to: transaction.to,
      token: constants.AddressZero,
      txGas: transaction.gasLimit.toNumber(),
      tokenGasPrice: "0",
      batchId,
      batchNonce: batchNonce.toNumber(),
      deadline: Math.floor(Date.now() / 1000 + (this.options?.gasless && "biconomy" in this.options.gasless && this.options.gasless.biconomy?.deadlineSeconds || 3600)),
      data: transaction.data
    };
    const hashToSign = utils.arrayify(utils.solidityKeccak256(["address", "address", "address", "uint256", "uint256", "uint256", "uint256", "uint256", "bytes32"], [request.from, request.to, request.token, request.txGas, request.tokenGasPrice, request.batchId, request.batchNonce, request.deadline, utils.keccak256(request.data)]));
    this.emit(EventType.Signature, {
      status: "submitted",
      message: hashToSign,
      signature: ""
    });
    const signature = await signer.signMessage(hashToSign);
    this.emit(EventType.Signature, {
      status: "completed",
      message: hashToSign,
      signature
    });
    const response = await fetch("https://api.biconomy.io/api/v2/meta-tx/native", {
      method: "POST",
      body: JSON.stringify({
        from: transaction.from,
        apiId: this.options.gasless.biconomy.apiId,
        params: [request, signature],
        to: transaction.to,
        gasLimit: transaction.gasLimit.toHexString()
      }),
      headers: {
        "x-api-key": this.options.gasless.biconomy.apiKey,
        "Content-Type": "application/json;charset=utf-8"
      }
    });
    if (response.ok) {
      const resp = await response.json();
      if (!resp.txHash) {
        throw new Error(`relay transaction failed: ${resp.log}`);
      }
      return resp.txHash;
    }
    throw new Error(`relay transaction failed with status: ${response.status} (${response.statusText})`);
  }
  async defenderSendFunction(transaction) {
    invariant(this.options.gasless && "openzeppelin" in this.options.gasless, "calling openzeppelin gasless transaction without openzeppelin config in the SDK options");
    const signer = this.getSigner();
    const provider = this.getProvider();
    invariant(signer, "provider is not set");
    invariant(provider, "provider is not set");
    const forwarderAddress = this.options.gasless.openzeppelin.relayerForwarderAddress || (this.options.gasless.openzeppelin.useEOAForwarder ? CONTRACT_ADDRESSES[transaction.chainId].openzeppelinForwarderEOA || (await computeEOAForwarderAddress(this.getProvider(), this.storage, "", this.options.clientId, this.options.secretKey)) : CONTRACT_ADDRESSES[transaction.chainId].openzeppelinForwarder || (await computeForwarderAddress(this.getProvider(), this.storage, "", this.options.clientId, this.options.secretKey)));
    const forwarder = new Contract(forwarderAddress, ForwarderABI, provider);
    const nonce = await getAndIncrementNonce(forwarder, "getNonce", [transaction.from]);
    let domain;
    let types;
    let message;
    if (this.options.gasless.experimentalChainlessSupport) {
      domain = {
        name: "GSNv2 Forwarder",
        version: "0.0.1",
        verifyingContract: forwarderAddress
      };
      types = {
        ForwardRequest: ChainAwareForwardRequest
      };
      message = {
        from: transaction.from,
        to: transaction.to,
        value: BigNumber.from(0).toString(),
        gas: BigNumber.from(transaction.gasLimit).toString(),
        nonce: BigNumber.from(nonce).toString(),
        data: transaction.data,
        chainid: BigNumber.from(transaction.chainId).toString()
      };
    } else {
      domain = {
        name: this.options.gasless.openzeppelin.domainName,
        version: this.options.gasless.openzeppelin.domainVersion,
        chainId: transaction.chainId,
        verifyingContract: forwarderAddress
      };
      types = {
        ForwardRequest
      };
      message = {
        from: transaction.from,
        to: transaction.to,
        value: BigNumber.from(0).toString(),
        gas: BigNumber.from(transaction.gasLimit).toString(),
        nonce: BigNumber.from(nonce).toString(),
        data: transaction.data
      };
    }
    let signature;
    this.emit(EventType.Signature, {
      status: "submitted",
      message,
      signature: ""
    });

    // if the executing function is "approve" and matches with erc20 approve signature
    // and if the token supports permit, then we use permit for gasless instead of approve.
    if (transaction.functionName === "approve" && transaction.functionArgs.length === 2) {
      const spender = transaction.functionArgs[0];
      const amount = transaction.functionArgs[1];
      // TODO: support DAI permit by signDAIPermit
      const {
        message: permit,
        signature: sig
      } = await signEIP2612Permit(signer, this.writeContract.address, transaction.from, spender, amount);
      const {
        r,
        s,
        v
      } = utils.splitSignature(sig);
      message = {
        to: this.address,
        owner: permit.owner,
        spender: permit.spender,
        value: BigNumber.from(permit.value).toString(),
        nonce: BigNumber.from(permit.nonce).toString(),
        deadline: BigNumber.from(permit.deadline).toString(),
        r,
        s,
        v
      };
      signature = sig;
    } else {
      const {
        signature: sig
      } = await signTypedDataInternal(signer, domain, types, message);
      signature = sig;
    }
    let messageType = "forward";

    // if has owner property then it's permit :)
    if (message?.owner) {
      messageType = "permit";
    }
    const body = JSON.stringify({
      request: message,
      signature,
      forwarderAddress,
      type: messageType
    });
    this.emit(EventType.Signature, {
      status: "completed",
      message,
      signature
    });
    const response = await fetch(this.options.gasless.openzeppelin.relayerUrl, {
      method: "POST",
      body
    });
    if (response.ok) {
      const resp = await response.json();
      if (!resp.result) {
        throw new Error(`Relay transaction failed: ${resp.message}`);
      }
      const result = JSON.parse(resp.result);
      return result.txHash;
    }
    throw new Error(`relay transaction failed with status: ${response.status} (${response.statusText})`);
  }
}

async function approveErc20Allowance(contractToApprove, currencyAddress, price, quantity, tokenDecimals) {
  const signer = contractToApprove.getSigner();
  const provider = contractToApprove.getProvider();
  const erc20 = new ContractWrapper(signer || provider, currencyAddress, ERC20Abi, contractToApprove.options, contractToApprove.storage);
  const owner = await contractToApprove.getSignerAddress();
  const spender = contractToApprove.address;
  const allowance = await erc20.read("allowance", [owner, spender]);
  const totalPrice = BigNumber.from(price).mul(BigNumber.from(quantity)).div(utils.parseUnits("1", tokenDecimals));
  if (allowance.lt(totalPrice)) {
    await erc20.sendTransaction("approve", [spender, allowance.add(totalPrice)]);
  }
}

/**
 *
 * @param provider
 * @param inputPrice
 * @param currencyAddress
 * @returns
 * @internal
 */
async function normalizePriceValue(provider, inputPrice, currencyAddress) {
  const metadata = await fetchCurrencyMetadata(provider, currencyAddress);
  return utils.parseUnits(AmountSchema.parse(inputPrice), metadata.decimals);
}

/**
 * Returns proofs and the overrides required for the transaction.
 * @internal
 * @returns - `overrides` and `proofs` as an object.
 */
async function prepareClaim(addressToClaim, quantity, activeClaimCondition, merkleMetadataFetcher, tokenDecimals, contractWrapper, storage, checkERC20Allowance, snapshotFormatVersion) {
  let maxClaimable = convertQuantityToBigNumber(activeClaimCondition.maxClaimablePerWallet, tokenDecimals);
  let proofs = [utils.hexZeroPad([0], 32)];
  let priceInProof = activeClaimCondition.price; // the price to send to the contract in claim proofs
  let currencyAddressInProof = activeClaimCondition.currencyAddress;
  try {
    if (!activeClaimCondition.merkleRootHash.toString().startsWith(constants.AddressZero)) {
      const snapshotEntry = await fetchSnapshotEntryForAddress(addressToClaim, activeClaimCondition.merkleRootHash.toString(), await merkleMetadataFetcher(), contractWrapper.getProvider(), storage, snapshotFormatVersion);
      if (snapshotEntry) {
        proofs = snapshotEntry.proof;
        // override only if not default values (unlimited for quantity, zero addr for currency)
        maxClaimable = snapshotEntry.maxClaimable === "unlimited" ? constants.MaxUint256 : utils.parseUnits(snapshotEntry.maxClaimable, tokenDecimals);
        priceInProof = snapshotEntry.price === undefined || snapshotEntry.price === "unlimited" ? constants.MaxUint256 : await normalizePriceValue(contractWrapper.getProvider(), snapshotEntry.price, snapshotEntry.currencyAddress || constants.AddressZero);
        currencyAddressInProof = snapshotEntry.currencyAddress || constants.AddressZero;
      } else {
        // if no snapshot entry, and it's a v1 format (exclusive allowlist) then address can't claim
        if (snapshotFormatVersion === SnapshotFormatVersion.V1) {
          throw new Error("No claim found for this address");
        }
        // but if its snapshot v2 (override list behavior) then address can still claim with default settings
      }
    }
  } catch (e) {
    // have to handle the valid error case that we *do* want to throw on
    if (e?.message === "No claim found for this address") {
      throw e;
    }
    // other errors we wanna ignore and try to continue
    console.warn("failed to check claim condition merkle root hash, continuing anyways", e);
  }
  const overrides = (await contractWrapper.getCallOverrides()) || {};
  // the actual price to check allowance against
  // if proof price is unlimited, then we use the price from the claim condition
  // this mimics the contract behavior
  const pricePerToken = priceInProof.toString() !== constants.MaxUint256.toString() ? priceInProof : activeClaimCondition.price;
  // same for currency address
  const currencyAddress = currencyAddressInProof !== constants.AddressZero ? currencyAddressInProof : activeClaimCondition.currencyAddress;
  if (pricePerToken.gt(0)) {
    if (isNativeToken(currencyAddress)) {
      overrides["value"] = BigNumber.from(pricePerToken).mul(quantity).div(utils.parseUnits("1", tokenDecimals));
    } else if (checkERC20Allowance) {
      await approveErc20Allowance(contractWrapper, currencyAddress, pricePerToken, quantity, tokenDecimals);
    }
  }
  return {
    overrides,
    proofs,
    maxClaimable,
    price: pricePerToken,
    currencyAddress: currencyAddress,
    priceInProof,
    currencyAddressInProof
  };
}

/**
 * Create a snapshot (merkle tree) from a list of addresses and uploads it to IPFS
 * @param snapshotInput - the list of addresses to hash
 * @param tokenDecimals - the token decimals
 * @param provider
 * @param storage - the storage to upload to
 * @param snapshotFormatVersion
 * @returns the generated snapshot and URI
 * @internal
 */
async function createSnapshot(snapshotInput, tokenDecimals, provider, storage, snapshotFormatVersion) {
  const input = await parseSnapshotInputs(snapshotInput);
  const addresses = input.map(i => i.address);
  const hasDuplicates = new Set(addresses).size < addresses.length;
  if (hasDuplicates) {
    throw new DuplicateLeafsError();
  }
  const tree = await ShardedMerkleTree.buildAndUpload(input, tokenDecimals, provider, storage, snapshotFormatVersion);
  return {
    merkleRoot: tree.shardedMerkleInfo.merkleRoot,
    snapshotUri: tree.uri
  };
}

function compare(a, b) {
  const left = BigNumber.from(a);
  const right = BigNumber.from(b);
  if (left.eq(right)) {
    return 0;
  } else if (left.gt(right)) {
    return 1;
  } else {
    return -1;
  }
}

/**
 * @internal
 * Decorates claim conditions with merkle roots from snapshots if present
 * @param claimConditionInputs
 * @param tokenDecimals
 * @param provider
 * @param storage
 * @param snapshotFormatVersion
 */
async function processSnapshotData(claimConditionInputs, tokenDecimals, provider, storage, snapshotFormatVersion) {
  const snapshotInfos = [];
  const inputsWithSnapshots = await Promise.all(claimConditionInputs.map(async conditionInput => {
    // check snapshots and upload if provided
    if (conditionInput.snapshot && conditionInput.snapshot.length > 0) {
      const snapshotInfo = await createSnapshot(conditionInput.snapshot, tokenDecimals, provider, storage, snapshotFormatVersion);
      snapshotInfos.push(snapshotInfo);
      conditionInput.merkleRootHash = snapshotInfo.merkleRoot;
    } else {
      // if no snapshot is passed or empty, reset the merkle root
      conditionInput.merkleRootHash = utils.hexZeroPad([0], 32);
    }
    // fill condition with defaults values if not provided
    return conditionInput;
  }));
  return {
    inputsWithSnapshots,
    snapshotInfos
  };
}

/**
 * Converts a local SDK model to contract model
 * @param c
 * @param tokenDecimals
 * @param provider
 * @param storage
 * @internal
 */
async function convertToContractModel(c, tokenDecimals, provider, storage) {
  const currency = c.currencyAddress === constants.AddressZero ? NATIVE_TOKEN_ADDRESS : c.currencyAddress;
  const maxClaimableSupply = convertQuantityToBigNumber(c.maxClaimableSupply, tokenDecimals);
  const maxClaimablePerWallet = convertQuantityToBigNumber(c.maxClaimablePerWallet, tokenDecimals);
  let metadataOrUri;
  if (c.metadata) {
    if (typeof c.metadata === "string") {
      metadataOrUri = c.metadata;
    } else {
      metadataOrUri = await storage.upload(c.metadata);
    }
  }
  return {
    startTimestamp: c.startTime,
    maxClaimableSupply,
    supplyClaimed: 0,
    maxClaimablePerWallet,
    pricePerToken: await normalizePriceValue(provider, c.price, currency),
    currency,
    merkleRoot: c.merkleRootHash.toString(),
    waitTimeInSecondsBetweenClaims: c.waitInSeconds || 0,
    metadata: metadataOrUri
  };
}

/**
 * Create and uploads snapshots + converts claim conditions to contract format
 * @param claimConditionInputs
 * @param tokenDecimals
 * @param provider
 * @param storage
 * @param snapshotFormatVersion
 * @internal
 */
async function processClaimConditionInputs(claimConditionInputs, tokenDecimals, provider, storage, snapshotFormatVersion) {
  const {
    inputsWithSnapshots,
    snapshotInfos
  } = await processSnapshotData(claimConditionInputs, tokenDecimals, provider, storage, snapshotFormatVersion);
  const parsedInputs = await ClaimConditionInputArray.parseAsync(inputsWithSnapshots);
  // Convert processed inputs to the format the contract expects, and sort by timestamp
  const sortedConditions = (await Promise.all(parsedInputs.map(c => convertToContractModel(c, tokenDecimals, provider, storage)))).sort((a, b) => {
    return compare(a.startTimestamp, b.startTimestamp);
  });
  return {
    snapshotInfos,
    sortedConditions
  };
}

/**
 *
 * @param providerOrSigner
 * @param asset
 * @param price
 * @returns
 * @internal
 */
async function fetchCurrencyValue(providerOrSigner, asset, price) {
  const metadata = await fetchCurrencyMetadata(providerOrSigner, asset);
  return {
    ...metadata,
    value: BigNumber.from(price),
    displayValue: utils.formatUnits(price, metadata.decimals)
  };
}

/**
 * @internal
 * @param merkleRoot
 * @param merkleMetadata
 * @param storage
 */
async function fetchSnapshot(merkleRoot, merkleMetadata, storage) {
  if (!merkleMetadata) {
    return null;
  }
  const snapshotUri = merkleMetadata[merkleRoot];
  if (snapshotUri) {
    const raw = await storage.downloadJSON(snapshotUri);
    if (raw.isShardedMerkleTree && raw.merkleRoot === merkleRoot) {
      const smt = await ShardedMerkleTree.fromUri(snapshotUri, storage);
      return smt?.getAllEntries() || null;
    } else {
      const snapshotData = await SnapshotSchema.parseAsync(raw);
      if (merkleRoot === snapshotData.merkleRoot) {
        return snapshotData.claims.map(claim => ({
          address: claim.address,
          maxClaimable: claim.maxClaimable,
          price: claim.price,
          currencyAddress: claim.currencyAddress
        }));
      }
    }
  }
  return null;
}

/**
 * @internal
 * @param bn
 * @param tokenDecimals
 */
function convertToReadableQuantity(bn, tokenDecimals) {
  if (bn.toString() === constants.MaxUint256.toString()) {
    return "unlimited";
  } else {
    return utils.formatUnits(bn, tokenDecimals);
  }
}

/**
 * Transforms a contract model to local model
 * @param pm
 * @param tokenDecimals
 * @param provider
 * @param merkleMetadata
 * @param storage
 * @param shouldDownloadSnapshot
 * @internal
 */
async function transformResultToClaimCondition(pm, tokenDecimals, provider, merkleMetadata, storage, shouldDownloadSnapshot) {
  const cv = await fetchCurrencyValue(provider, pm.currency, pm.pricePerToken);
  const maxClaimableSupply = convertToReadableQuantity(pm.maxClaimableSupply, tokenDecimals);
  const maxClaimablePerWallet = convertToReadableQuantity(pm.maxClaimablePerWallet, tokenDecimals);
  const availableSupply = convertToReadableQuantity(BigNumber.from(pm.maxClaimableSupply).sub(pm.supplyClaimed), tokenDecimals);
  const currentMintSupply = convertToReadableQuantity(pm.supplyClaimed, tokenDecimals);
  let resolvedMetadata;
  if (pm.metadata) {
    resolvedMetadata = await storage.downloadJSON(pm.metadata);
  }
  return ClaimConditionOutputSchema.parseAsync({
    startTime: pm.startTimestamp,
    maxClaimableSupply,
    maxClaimablePerWallet,
    currentMintSupply,
    availableSupply,
    waitInSeconds: pm.waitTimeInSecondsBetweenClaims?.toString(),
    price: BigNumber.from(pm.pricePerToken),
    currency: pm.currency,
    currencyAddress: pm.currency,
    currencyMetadata: cv,
    merkleRootHash: pm.merkleRoot,
    snapshot: shouldDownloadSnapshot ? await fetchSnapshot(pm.merkleRoot, merkleMetadata, storage) : undefined,
    metadata: resolvedMetadata
  });
}

/**
 * @internal
 * @param index
 * @param claimConditionInput
 * @param existingConditions
 */
async function updateExistingClaimConditions(index, claimConditionInput, existingConditions) {
  if (index >= existingConditions.length) {
    throw Error(`Index out of bounds - got index: ${index} with ${existingConditions.length} conditions`);
  }
  // merge input with existing claim condition
  const priceDecimals = existingConditions[index].currencyMetadata.decimals;
  const priceInWei = existingConditions[index].price;
  const priceInTokens = utils.formatUnits(priceInWei, priceDecimals);

  // merge existing (output format) with incoming (input format)
  const newConditionParsed = await ClaimConditionInputSchema.parseAsync({
    ...existingConditions[index],
    price: priceInTokens,
    ...claimConditionInput
  });

  // convert to output claim condition
  const mergedConditionOutput = await ClaimConditionOutputSchema.parseAsync({
    ...newConditionParsed,
    price: priceInWei
  });
  return existingConditions.map((existingOutput, i) => {
    let newConditionAtIndex;
    if (i === index) {
      newConditionAtIndex = mergedConditionOutput;
    } else {
      newConditionAtIndex = existingOutput;
    }
    const formattedPrice = utils.formatUnits(newConditionAtIndex.price, priceDecimals);
    return {
      ...newConditionAtIndex,
      price: formattedPrice // manually transform back to input price type
    };
  });
}

let Status = /*#__PURE__*/function (Status) {
  Status[Status["UNSET"] = 0] = "UNSET";
  Status[Status["Created"] = 1] = "Created";
  Status[Status["Completed"] = 2] = "Completed";
  Status[Status["Cancelled"] = 3] = "Cancelled";
  Status[Status["Active"] = 4] = "Active";
  Status[Status["Expired"] = 5] = "Expired";
  return Status;
}({});

let ClaimEligibility = /*#__PURE__*/function (ClaimEligibility) {
  ClaimEligibility["NotEnoughSupply"] = "There is not enough supply to claim.";
  ClaimEligibility["AddressNotAllowed"] = "This address is not on the allowlist.";
  ClaimEligibility["WaitBeforeNextClaimTransaction"] = "Not enough time since last claim transaction. Please wait.";
  ClaimEligibility["ClaimPhaseNotStarted"] = "Claim phase has not started yet.";
  ClaimEligibility["AlreadyClaimed"] = "You have already claimed the token.";
  ClaimEligibility["WrongPriceOrCurrency"] = "Incorrect price or currency.";
  ClaimEligibility["OverMaxClaimablePerWallet"] = "Cannot claim more than maximum allowed quantity.";
  ClaimEligibility["NotEnoughTokens"] = "There are not enough tokens in the wallet to pay for the claim.";
  ClaimEligibility["NoActiveClaimPhase"] = "There is no active claim phase at the moment. Please check back in later.";
  ClaimEligibility["NoClaimConditionSet"] = "There is no claim condition set.";
  ClaimEligibility["NoWallet"] = "No wallet connected.";
  ClaimEligibility["Unknown"] = "No claim conditions found.";
  return ClaimEligibility;
}({});

/**
 * Manages claim conditions for NFT Drop contracts
 * @public
 */
class DropClaimConditions {
  constructor(contractWrapper, metadata, storage) {
    this.storage = storage;
    this.contractWrapper = contractWrapper;
    this.metadata = metadata;
  }

  /** ***************************************
   * READ FUNCTIONS
   *****************************************/

  /**
   * Get the currently active claim condition
   *
   * @returns the claim condition metadata
   */
  async getActive(options) {
    const cc = await this.get();
    const metadata = await this.metadata.get();
    return await transformResultToClaimCondition(cc, await this.getTokenDecimals(), this.contractWrapper.getProvider(), metadata.merkle || {}, this.storage, options?.withAllowList || false);
  }
  async get(conditionId) {
    if (this.isLegacySinglePhaseDrop(this.contractWrapper)) {
      const contractModel = await this.contractWrapper.read("claimCondition", []);
      return legacyContractModelToAbstract(contractModel);
    } else if (this.isLegacyMultiPhaseDrop(this.contractWrapper)) {
      const id = conditionId !== undefined ? conditionId : await this.contractWrapper.read("getActiveClaimConditionId", []);
      const contractModel = await this.contractWrapper.read("getClaimConditionById", [id]);
      return legacyContractModelToAbstract(contractModel);
    } else if (this.isNewSinglePhaseDrop(this.contractWrapper)) {
      const contractModel = await this.contractWrapper.read("claimCondition", []);
      return newContractModelToAbstract(contractModel);
    } else if (this.isNewMultiphaseDrop(this.contractWrapper)) {
      const id = conditionId !== undefined ? conditionId : await this.contractWrapper.read("getActiveClaimConditionId", []);
      const contractModel = await this.contractWrapper.read("getClaimConditionById", [id]);
      return newContractModelToAbstract(contractModel);
    } else {
      throw new Error("Contract does not support claim conditions");
    }
  }

  /**
   * Get all the claim conditions
   *
   * @returns the claim conditions metadata
   */
  async getAll(options) {
    if (this.isLegacyMultiPhaseDrop(this.contractWrapper) || this.isNewMultiphaseDrop(this.contractWrapper)) {
      const [currentStartId, countBn] = await this.contractWrapper.read("claimCondition", []);
      const startId = currentStartId.toNumber();
      const count = countBn.toNumber();
      const conditions = [];
      for (let i = startId; i < startId + count; i++) {
        conditions.push(this.get(i));
      }
      const [metadata, decimals, ...fetchedConditions] = await Promise.all([this.metadata.get(), this.getTokenDecimals(), ...conditions]);
      return Promise.all(fetchedConditions.map(c => transformResultToClaimCondition(c, decimals, this.contractWrapper.getProvider(), metadata.merkle, this.storage, options?.withAllowList || false)));
    } else {
      return [await this.getActive(options)];
    }
  }

  /**
   * Can Claim
   *
   * @remarks Check if the drop can currently be claimed.
   *
   * @example
   * ```javascript
   * // Quantity of tokens to check claimability of
   * const quantity = 1;
   * const canClaim = await contract.canClaim(quantity);
   * ```
   */
  async canClaim(quantity, addressToCheck) {
    // TODO switch to use verifyClaim
    if (addressToCheck) {
      addressToCheck = await resolveAddress(addressToCheck);
    }
    return (await this.getClaimIneligibilityReasons(quantity, addressToCheck)).length === 0;
  }

  /**
   * For any claim conditions that a particular wallet is violating,
   * this function returns human readable information about the
   * breaks in the condition that can be used to inform the user.
   *
   * @param quantity - The desired quantity that would be claimed.
   * @param addressToCheck - The wallet address, defaults to the connected wallet.
   *
   */
  async getClaimIneligibilityReasons(quantity, addressToCheck) {
    const reasons = [];
    let activeConditionIndex;
    let claimCondition;
    const decimals = await this.getTokenDecimals();
    const quantityWithDecimals = utils.parseUnits(AmountSchema.parse(quantity), decimals);
    if (addressToCheck === undefined) {
      try {
        addressToCheck = await this.contractWrapper.getSignerAddress();
      } catch (err) {
        console.warn("failed to get signer address", err);
      }
    }

    // if we have been unable to get a signer address, we can't check eligibility, so return a NoWallet error reason
    if (!addressToCheck) {
      return [ClaimEligibility.NoWallet];
    }
    const resolvedAddress = await resolveAddress(addressToCheck);
    try {
      claimCondition = await this.getActive();
    } catch (err) {
      if (includesErrorMessage(err, "!CONDITION") || includesErrorMessage(err, "no active mint condition")) {
        reasons.push(ClaimEligibility.NoClaimConditionSet);
        return reasons;
      }
      console.warn("failed to get active claim condition", err);
      reasons.push(ClaimEligibility.Unknown);
      return reasons;
    }
    if (claimCondition.availableSupply !== "unlimited") {
      const supplyWithDecimals = utils.parseUnits(claimCondition.availableSupply, decimals);
      if (supplyWithDecimals.lt(quantityWithDecimals)) {
        reasons.push(ClaimEligibility.NotEnoughSupply);
        return reasons;
      }
    }

    // check for merkle root inclusion
    const merkleRootArray = utils.stripZeros(claimCondition.merkleRootHash);
    const hasAllowList = merkleRootArray.length > 0;
    let allowListEntry = null;
    if (hasAllowList) {
      allowListEntry = await this.getClaimerProofs(resolvedAddress);
      if (!allowListEntry && (this.isLegacySinglePhaseDrop(this.contractWrapper) || this.isLegacyMultiPhaseDrop(this.contractWrapper))) {
        // exclusive allowlist behavior
        reasons.push(ClaimEligibility.AddressNotAllowed);
        return reasons;
      }
      if (allowListEntry) {
        try {
          const claimVerification = await this.prepareClaim(quantity, false, decimals, resolvedAddress);
          let validMerkleProof;
          if (this.isLegacyMultiPhaseDrop(this.contractWrapper)) {
            activeConditionIndex = await this.contractWrapper.read("getActiveClaimConditionId", []);
            // legacy verifyClaimerMerkleProofs function
            [validMerkleProof] = await this.contractWrapper.read("verifyClaimMerkleProof", [activeConditionIndex, resolvedAddress, quantity, claimVerification.proofs, claimVerification.maxClaimable]);
            if (!validMerkleProof) {
              reasons.push(ClaimEligibility.AddressNotAllowed);
              return reasons;
            }
          } else if (this.isLegacySinglePhaseDrop(this.contractWrapper)) {
            [validMerkleProof] = await this.contractWrapper.read("verifyClaimMerkleProof", [resolvedAddress, quantity, {
              proof: claimVerification.proofs,
              maxQuantityInAllowlist: claimVerification.maxClaimable
            }]);
            if (!validMerkleProof) {
              reasons.push(ClaimEligibility.AddressNotAllowed);
              return reasons;
            }
          } else if (this.isNewSinglePhaseDrop(this.contractWrapper)) {
            await this.contractWrapper.read("verifyClaim", [resolvedAddress, quantity, claimVerification.currencyAddress, claimVerification.price, {
              proof: claimVerification.proofs,
              quantityLimitPerWallet: claimVerification.maxClaimable,
              currency: claimVerification.currencyAddressInProof,
              pricePerToken: claimVerification.priceInProof
            }]);
          } else if (this.isNewMultiphaseDrop(this.contractWrapper)) {
            activeConditionIndex = await this.contractWrapper.read("getActiveClaimConditionId", []);
            await this.contractWrapper.read("verifyClaim", [activeConditionIndex, resolvedAddress, quantity, claimVerification.currencyAddress, claimVerification.price, {
              proof: claimVerification.proofs,
              quantityLimitPerWallet: claimVerification.maxClaimable,
              currency: claimVerification.currencyAddressInProof,
              pricePerToken: claimVerification.priceInProof
            }]);
          }
        } catch (e) {
          console.warn("Merkle proof verification failed:", "reason" in e ? e.reason : e);
          const reason = e.reason;
          switch (reason) {
            case "!Qty":
              reasons.push(ClaimEligibility.OverMaxClaimablePerWallet);
              break;
            case "!PriceOrCurrency":
              reasons.push(ClaimEligibility.WrongPriceOrCurrency);
              break;
            case "!MaxSupply":
              reasons.push(ClaimEligibility.NotEnoughSupply);
              break;
            case "cant claim yet":
              reasons.push(ClaimEligibility.ClaimPhaseNotStarted);
              break;
            default:
              {
                reasons.push(ClaimEligibility.AddressNotAllowed);
                break;
              }
          }
          return reasons;
        }
      }
    }
    if (this.isNewSinglePhaseDrop(this.contractWrapper) || this.isNewMultiphaseDrop(this.contractWrapper)) {
      let claimedSupply = BigNumber.from(0);
      let maxClaimable = convertQuantityToBigNumber(claimCondition.maxClaimablePerWallet, decimals);
      try {
        claimedSupply = await this.getSupplyClaimedByWallet(resolvedAddress);
      } catch (e) {
        // no-op
      }
      if (allowListEntry) {
        maxClaimable = convertQuantityToBigNumber(allowListEntry.maxClaimable, decimals);
      }
      if (maxClaimable.gt(0) && maxClaimable.lt(claimedSupply.add(quantityWithDecimals))) {
        reasons.push(ClaimEligibility.OverMaxClaimablePerWallet);
        return reasons;
      }

      // if there is no allowlist, or if there is an allowlist and the address is not in it
      // if maxClaimable is 0, we consider it as the address is not allowed
      if (!hasAllowList || hasAllowList && !allowListEntry) {
        if (maxClaimable.lte(claimedSupply) || maxClaimable.eq(0)) {
          reasons.push(ClaimEligibility.AddressNotAllowed);
          return reasons;
        }
      }
    }

    // check for claim timestamp between claims (ONLY FOR LEGACY)
    if (this.isLegacySinglePhaseDrop(this.contractWrapper) || this.isLegacyMultiPhaseDrop(this.contractWrapper)) {
      let [lastClaimedTimestamp, timestampForNextClaim] = [BigNumber.from(0), BigNumber.from(0)];
      if (this.isLegacyMultiPhaseDrop(this.contractWrapper)) {
        activeConditionIndex = await this.contractWrapper.read("getActiveClaimConditionId", []);
        [lastClaimedTimestamp, timestampForNextClaim] = await this.contractWrapper.read("getClaimTimestamp", [activeConditionIndex, resolvedAddress]);
      } else if (this.isLegacySinglePhaseDrop(this.contractWrapper)) {
        // check for claim timestamp between claims
        [lastClaimedTimestamp, timestampForNextClaim] = await this.contractWrapper.read("getClaimTimestamp", [resolvedAddress]);
      }
      const now = BigNumber.from(Date.now()).div(1000);
      if (lastClaimedTimestamp.gt(0) && now.lt(timestampForNextClaim)) {
        // contract will return MaxUint256 if user has already claimed and cannot claim again
        if (timestampForNextClaim.eq(constants.MaxUint256)) {
          reasons.push(ClaimEligibility.AlreadyClaimed);
        } else {
          reasons.push(ClaimEligibility.WaitBeforeNextClaimTransaction);
        }
        return reasons;
      }
    }

    // if not within a browser conetext, check for wallet balance.
    // In browser context, let the wallet do that job
    if (claimCondition.price.gt(0) && isNode()) {
      const totalPrice = claimCondition.price.mul(BigNumber.from(quantity));
      const provider = this.contractWrapper.getProvider();
      if (isNativeToken(claimCondition.currencyAddress)) {
        const balance = await provider.getBalance(resolvedAddress);
        if (balance.lt(totalPrice)) {
          reasons.push(ClaimEligibility.NotEnoughTokens);
        }
      } else {
        const erc20 = new ContractWrapper(provider, claimCondition.currencyAddress, ERC20Abi, {}, this.storage);
        const balance = await erc20.read("balanceOf", [resolvedAddress]);
        if (balance.lt(totalPrice)) {
          reasons.push(ClaimEligibility.NotEnoughTokens);
        }
      }
    }
    return reasons;
  }

  /**
   * Returns allow list information and merkle proofs for the given address.
   * @param claimerAddress - the claimer address
   * @param claimConditionId - optional the claim condition id to get the proofs for
   */
  async getClaimerProofs(claimerAddress, claimConditionId) {
    const claimCondition = await this.get(claimConditionId);
    const merkleRoot = claimCondition.merkleRoot;
    const merkleRootArray = utils.stripZeros(merkleRoot);
    if (merkleRootArray.length > 0) {
      const metadata = await this.metadata.get();
      const resolvedAddress = await resolveAddress(claimerAddress);
      return await fetchSnapshotEntryForAddress(resolvedAddress, merkleRoot.toString(), metadata.merkle, this.contractWrapper.getProvider(), this.storage, this.getSnapshotFormatVersion());
    } else {
      return null;
    }
  }

  /**
   * Get the total supply claimed by a specific wallet
   * @param walletAddress the wallet address to check
   * @returns the total supply claimed
   */
  async getSupplyClaimedByWallet(walletAddress) {
    const resolvedAddress = await resolveAddress(walletAddress);
    if (this.isNewSinglePhaseDrop(this.contractWrapper)) {
      return await this.contractWrapper.read("getSupplyClaimedByWallet", [resolvedAddress]);
    }
    if (this.isNewMultiphaseDrop(this.contractWrapper)) {
      const activeClaimConditionId = await this.contractWrapper.read("getActiveClaimConditionId", []);
      return await this.contractWrapper.read("getSupplyClaimedByWallet", [activeClaimConditionId, resolvedAddress]);
    }
    throw new Error("This contract does not support the getSupplyClaimedByWallet function");
  }

  /** ***************************************
   * WRITE FUNCTIONS
   *****************************************/

  /**
   * Set public mint conditions
   *
   * @remarks Sets the public mint conditions that need to be fullfiled by users to claim NFTs.
   *
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   *
   * // Optionally specify addresses that can claim
   * const snapshots = ['0x...', '0x...']
   *
   * // Or alternatively, you can pass snapshots with the max number of NFTs each address can claim
   * // const snapshots = [{ address: '0x...', maxClaimable: 1 }, { address: '0x...', maxClaimable: 2 }]
   *
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: snapshots, // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   *
   * await dropContract.claimConditions.set(claimConditions);
   * ```
   *
   * @param claimConditionInputs - The claim conditions
   * @param resetClaimEligibilityForAll - Whether to reset the state of who already claimed NFTs previously
   */
  set = /* @__PURE__ */buildTransactionFunction((() => {
    var _this = this;
    return async function (claimConditionInputs) {
      let resetClaimEligibilityForAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      let claimConditionsProcessed = claimConditionInputs;
      if (_this.isLegacySinglePhaseDrop(_this.contractWrapper) || _this.isNewSinglePhaseDrop(_this.contractWrapper)) {
        resetClaimEligibilityForAll = true;
        if (claimConditionInputs.length === 0) {
          claimConditionsProcessed = [{
            startTime: new Date(0),
            currencyAddress: constants.AddressZero,
            price: 0,
            maxClaimableSupply: 0,
            maxClaimablePerWallet: 0,
            waitInSeconds: 0,
            merkleRootHash: utils.hexZeroPad([0], 32),
            snapshot: []
          }];
        } else if (claimConditionInputs.length > 1) {
          throw new Error("Single phase drop contract cannot have multiple claim conditions, only one is allowed");
        }
      }

      // if using new snapshot format, make sure that maxClaimablePerWallet is set if allowlist is set as well
      if (_this.isNewSinglePhaseDrop(_this.contractWrapper) || _this.isNewMultiphaseDrop(_this.contractWrapper)) {
        claimConditionsProcessed.forEach(cc => {
          if (cc.snapshot && cc.snapshot.length > 0 && (cc.maxClaimablePerWallet === undefined || cc.maxClaimablePerWallet === "unlimited")) {
            throw new Error("maxClaimablePerWallet must be set to a specific value when an allowlist is set.\n" + "Example: Set it to 0 to only allow addresses in the allowlist to claim the amount specified in the allowlist.\n" + "contract.claimConditions.set([{ snapshot: [{ address: '0x...', maxClaimable: 1 }], maxClaimablePerWallet: 0 }])");
          }
          if (cc.snapshot && cc.snapshot.length > 0 && cc.maxClaimablePerWallet?.toString() === "0" && cc.snapshot.map(s => {
            if (typeof s === "string") {
              return 0;
            } else {
              return Number(s.maxClaimable?.toString() || 0);
            }
          }).reduce((acc, current) => {
            return acc + current;
          }, 0) === 0) {
            throw new Error("maxClaimablePerWallet is set to 0, and all addresses in the allowlist have max claimable 0. This means that no one can claim.");
          }
        });
      }

      // process inputs
      const {
        snapshotInfos,
        sortedConditions
      } = await processClaimConditionInputs(claimConditionsProcessed, await _this.getTokenDecimals(), _this.contractWrapper.getProvider(), _this.storage, _this.getSnapshotFormatVersion());
      const merkleInfo = {};
      snapshotInfos.forEach(s => {
        merkleInfo[s.merkleRoot] = s.snapshotUri;
      });
      const metadata = await _this.metadata.get();
      const encoded = [];

      // upload new merkle roots to snapshot URIs if updated
      if (!deepEqual(metadata.merkle, merkleInfo)) {
        const mergedMetadata = await _this.metadata.parseInputMetadata({
          ...metadata,
          merkle: merkleInfo
        });
        // using internal method to just upload, avoids one contract call
        const contractURI = await _this.metadata._parseAndUploadMetadata(mergedMetadata);

        // TODO (cc) we could write the merkle tree info on the claim condition metadata instead
        // TODO (cc) but we still need to maintain the behavior here for older contracts
        if (hasFunction("setContractURI", _this.contractWrapper)) {
          const contractEncoder = new ContractEncoder(_this.contractWrapper);
          encoded.push(contractEncoder.encode("setContractURI", [contractURI]));
        } else {
          throw new Error("Setting a merkle root requires implementing ContractMetadata in your contract to support storing a merkle root.");
        }
      }
      const cw = _this.contractWrapper;
      const baseContractEncoder = new ContractEncoder(cw);
      if (_this.isLegacySinglePhaseDrop(cw)) {
        const contractEncoderLegacy = new ContractEncoder(cw);
        encoded.push(contractEncoderLegacy.encode("setClaimConditions", [abstractContractModelToLegacy(sortedConditions[0]), resetClaimEligibilityForAll]));
      } else if (_this.isLegacyMultiPhaseDrop(cw)) {
        encoded.push(baseContractEncoder.encode("setClaimConditions", [sortedConditions.map(abstractContractModelToLegacy), resetClaimEligibilityForAll]));
      } else if (_this.isNewSinglePhaseDrop(cw)) {
        encoded.push(baseContractEncoder.encode("setClaimConditions", [abstractContractModelToNew(sortedConditions[0]), resetClaimEligibilityForAll]));
      } else if (_this.isNewMultiphaseDrop(cw)) {
        encoded.push(baseContractEncoder.encode("setClaimConditions", [sortedConditions.map(abstractContractModelToNew), resetClaimEligibilityForAll]));
      } else {
        throw new Error("Contract does not support claim conditions");
      }
      if (hasFunction("multicall", _this.contractWrapper)) {
        return Transaction.fromContractWrapper({
          contractWrapper: _this.contractWrapper,
          method: "multicall",
          args: [encoded]
        });
      }
      throw new Error("Contract does not support multicall");
    };
  })());

  /**
   * Update a single claim condition with new data.
   *
   * @param index - the index of the claim condition to update, as given by the index from the result of `getAll()`
   * @param claimConditionInput - the new data to update, previous data will be retained
   */
  update = /* @__PURE__ */buildTransactionFunction(async (index, claimConditionInput) => {
    const existingConditions = await this.getAll();
    const newConditionInputs = await updateExistingClaimConditions(index, claimConditionInput, existingConditions);
    return await this.set.prepare(newConditionInputs);
  });

  /** ***************************************
   * PRIVATE FUNCTIONS
   *****************************************/

  async getTokenDecimals() {
    if (detectContractFeature(this.contractWrapper, "ERC20")) {
      return this.contractWrapper.read("decimals", []);
    } else {
      return Promise.resolve(0);
    }
  }

  /**
   * Returns proofs and the overrides required for the transaction.
   *
   * @returns - `overrides` and `proofs` as an object.
   * @internal
   */
  async prepareClaim(quantity, checkERC20Allowance) {
    let decimals = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    let address = arguments.length > 3 ? arguments[3] : undefined;
    const addressToClaim = address ? address : await this.contractWrapper.getSignerAddress();
    return prepareClaim(addressToClaim, quantity, await this.getActive(), async () => (await this.metadata.get()).merkle, decimals, this.contractWrapper, this.storage, checkERC20Allowance, this.getSnapshotFormatVersion());
  }
  async getClaimArguments(destinationAddress, quantity, claimVerification) {
    const resolvedAddress = await resolveAddress(destinationAddress);
    if (this.isLegacyMultiPhaseDrop(this.contractWrapper)) {
      return [resolvedAddress, quantity, claimVerification.currencyAddress, claimVerification.price, claimVerification.proofs, claimVerification.maxClaimable];
    } else if (this.isLegacySinglePhaseDrop(this.contractWrapper)) {
      return [resolvedAddress, quantity, claimVerification.currencyAddress, claimVerification.price, {
        proof: claimVerification.proofs,
        maxQuantityInAllowlist: claimVerification.maxClaimable
      }, utils.toUtf8Bytes("")];
    }
    return [resolvedAddress, quantity, claimVerification.currencyAddress, claimVerification.price, {
      proof: claimVerification.proofs,
      quantityLimitPerWallet: claimVerification.maxClaimable,
      pricePerToken: claimVerification.priceInProof,
      currency: claimVerification.currencyAddressInProof
    }, utils.toUtf8Bytes("")];
  }

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress
   * @param quantity
   * @param options
   *
   * @deprecated Use `contract.erc721.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, quantity, options) {
    // TODO: Transaction Sequence Pattern
    if (options?.pricePerToken) {
      throw new Error("Price per token is be set via claim conditions by calling `contract.erc721.claimConditions.set()`");
    }
    const claimVerification = await this.prepareClaim(quantity, options?.checkERC20Allowance === undefined ? true : options.checkERC20Allowance, await this.getTokenDecimals());
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "claim",
      args: await this.getClaimArguments(destinationAddress, quantity, claimVerification),
      overrides: claimVerification.overrides
    });
  }
  isNewSinglePhaseDrop(contractWrapper) {
    return detectContractFeature(contractWrapper, "ERC721ClaimConditionsV2") || detectContractFeature(contractWrapper, "ERC20ClaimConditionsV2");
  }
  isNewMultiphaseDrop(contractWrapper) {
    return detectContractFeature(contractWrapper, "ERC721ClaimPhasesV2") || detectContractFeature(contractWrapper, "ERC20ClaimPhasesV2");
  }
  isLegacySinglePhaseDrop(contractWrapper) {
    return detectContractFeature(contractWrapper, "ERC721ClaimConditionsV1") || detectContractFeature(contractWrapper, "ERC20ClaimConditionsV1");
  }
  isLegacyMultiPhaseDrop(contractWrapper) {
    return detectContractFeature(contractWrapper, "ERC721ClaimPhasesV1") || detectContractFeature(contractWrapper, "ERC20ClaimPhasesV1");
  }
  getSnapshotFormatVersion() {
    return this.isLegacyMultiPhaseDrop(this.contractWrapper) || this.isLegacySinglePhaseDrop(this.contractWrapper) ? SnapshotFormatVersion.V1 : SnapshotFormatVersion.V2;
  }
}

/**
 * Manages claim conditions for Edition Drop contracts
 * @public
 */
class DropErc1155ClaimConditions {
  constructor(contractWrapper, metadata, storage) {
    this.storage = storage;
    this.contractWrapper = contractWrapper;
    this.metadata = metadata;
  }

  /** ***************************************
   * READ FUNCTIONS
   *****************************************/

  /**
   * Get the currently active claim condition
   *
   * @returns the claim condition metadata
   */
  async getActive(tokenId, options) {
    const mc = await this.get(tokenId);
    const metadata = await this.metadata.get();
    return await transformResultToClaimCondition(mc, 0, this.contractWrapper.getProvider(), metadata.merkle, this.storage, options?.withAllowList || false);
  }
  async get(tokenId, conditionId) {
    if (this.isLegacySinglePhaseDrop(this.contractWrapper)) {
      const contractModel = await this.contractWrapper.read("claimCondition", [tokenId]);
      return legacyContractModelToAbstract(contractModel);
    } else if (this.isLegacyMultiPhaseDrop(this.contractWrapper)) {
      const id = conditionId !== undefined ? conditionId : await this.contractWrapper.read("getActiveClaimConditionId", [tokenId]);
      const contractModel = await this.contractWrapper.read("getClaimConditionById", [tokenId, id]);
      return legacyContractModelToAbstract(contractModel);
    } else if (this.isNewSinglePhaseDrop(this.contractWrapper)) {
      const contractModel = await this.contractWrapper.read("claimCondition", [tokenId]);
      return newContractModelToAbstract(contractModel);
    } else if (this.isNewMultiphaseDrop(this.contractWrapper)) {
      const id = conditionId !== undefined ? conditionId : await this.contractWrapper.read("getActiveClaimConditionId", [tokenId]);
      const contractModel = await this.contractWrapper.read("getClaimConditionById", [tokenId, id]);
      return newContractModelToAbstract(contractModel);
    } else {
      throw new Error("Contract does not support claim conditions");
    }
  }

  /**
   * Get all the claim conditions
   *
   * @returns the claim conditions metadata
   */
  async getAll(tokenId, options) {
    if (this.isLegacyMultiPhaseDrop(this.contractWrapper) || this.isNewMultiphaseDrop(this.contractWrapper)) {
      const claimCondition = await this.contractWrapper.read("claimCondition", [tokenId]);
      const startId = claimCondition.currentStartId.toNumber();
      const count = claimCondition.count.toNumber();
      const conditions = [];
      for (let i = startId; i < startId + count; i++) {
        conditions.push(await this.get(tokenId, i));
      }
      const metadata = await this.metadata.get();
      return Promise.all(conditions.map(c => transformResultToClaimCondition(c, 0, this.contractWrapper.getProvider(), metadata.merkle, this.storage, options?.withAllowList || false)));
    } else {
      return [await this.getActive(tokenId, options)];
    }
  }

  /**
   * Can Claim
   *
   * @remarks Check if a particular NFT can currently be claimed by a given user.
   *
   * @example
   * ```javascript
   * // Quantity of tokens to check claimability of
   * const quantity = 1;
   * const canClaim = await contract.canClaim(quantity);
   * ```
   */
  async canClaim(tokenId, quantity, addressToCheck) {
    // TODO switch to use verifyClaim
    if (addressToCheck) {
      addressToCheck = await resolveAddress(addressToCheck);
    }
    return (await this.getClaimIneligibilityReasons(tokenId, quantity, addressToCheck)).length === 0;
  }

  /**
   * For any claim conditions that a particular wallet is violating,
   * this function returns human-readable information about the
   * breaks in the condition that can be used to inform the user.
   *
   * @param tokenId - the token id to check
   * @param quantity - The desired quantity that would be claimed.
   * @param addressToCheck - The wallet address, defaults to the connected wallet.
   *
   */
  async getClaimIneligibilityReasons(tokenId, quantity, addressToCheck) {
    const reasons = [];
    let activeConditionIndex;
    let claimCondition;
    if (addressToCheck === undefined) {
      try {
        addressToCheck = await this.contractWrapper.getSignerAddress();
      } catch (err) {
        console.warn("failed to get signer address", err);
      }
    }

    // if we have been unable to get a signer address, we can't check eligibility, so return a NoWallet error reason
    if (!addressToCheck) {
      return [ClaimEligibility.NoWallet];
    }
    const resolvedAddress = await resolveAddress(addressToCheck);
    try {
      claimCondition = await this.getActive(tokenId);
    } catch (err) {
      if (includesErrorMessage(err, "!CONDITION") || includesErrorMessage(err, "no active mint condition")) {
        reasons.push(ClaimEligibility.NoClaimConditionSet);
        return reasons;
      }
      reasons.push(ClaimEligibility.Unknown);
      return reasons;
    }
    if (claimCondition.availableSupply !== "unlimited") {
      if (BigNumber.from(claimCondition.availableSupply).lt(quantity)) {
        reasons.push(ClaimEligibility.NotEnoughSupply);
        return reasons;
      }
    }

    // check for merkle root inclusion
    const merkleRootArray = utils.stripZeros(claimCondition.merkleRootHash);
    const hasAllowList = merkleRootArray.length > 0;
    let allowListEntry = null;
    if (hasAllowList) {
      allowListEntry = await this.getClaimerProofs(tokenId, resolvedAddress);
      if (!allowListEntry && (this.isLegacySinglePhaseDrop(this.contractWrapper) || this.isLegacyMultiPhaseDrop(this.contractWrapper))) {
        // exclusive allowlist behavior
        reasons.push(ClaimEligibility.AddressNotAllowed);
        return reasons;
      }
      if (allowListEntry) {
        try {
          const claimVerification = await this.prepareClaim(tokenId, quantity, false, resolvedAddress);
          let validMerkleProof;
          if (this.isLegacyMultiPhaseDrop(this.contractWrapper)) {
            activeConditionIndex = await this.contractWrapper.read("getActiveClaimConditionId", [tokenId]);
            // legacy verifyClaimerMerkleProofs function
            [validMerkleProof] = await this.contractWrapper.read("verifyClaimMerkleProof", [activeConditionIndex, resolvedAddress, tokenId, quantity, claimVerification.proofs, claimVerification.maxClaimable]);
            if (!validMerkleProof) {
              reasons.push(ClaimEligibility.AddressNotAllowed);
              return reasons;
            }
          } else if (this.isLegacySinglePhaseDrop(this.contractWrapper)) {
            [validMerkleProof] = await this.contractWrapper.read("verifyClaimMerkleProof", [tokenId, resolvedAddress, quantity, {
              proof: claimVerification.proofs,
              maxQuantityInAllowlist: claimVerification.maxClaimable
            }]);
            if (!validMerkleProof) {
              reasons.push(ClaimEligibility.AddressNotAllowed);
              return reasons;
            }
          } else if (this.isNewSinglePhaseDrop(this.contractWrapper)) {
            await this.contractWrapper.read("verifyClaim", [tokenId, resolvedAddress, quantity, claimVerification.currencyAddress, claimVerification.price, {
              proof: claimVerification.proofs,
              quantityLimitPerWallet: claimVerification.maxClaimable,
              currency: claimVerification.currencyAddressInProof,
              pricePerToken: claimVerification.priceInProof
            }]);
          } else if (this.isNewMultiphaseDrop(this.contractWrapper)) {
            activeConditionIndex = await this.contractWrapper.read("getActiveClaimConditionId", [tokenId]);
            await this.contractWrapper.read("verifyClaim", [activeConditionIndex, resolvedAddress, tokenId, quantity, claimVerification.currencyAddress, claimVerification.price, {
              proof: claimVerification.proofs,
              quantityLimitPerWallet: claimVerification.maxClaimable,
              currency: claimVerification.currencyAddressInProof,
              pricePerToken: claimVerification.priceInProof
            }]);
          }
        } catch (e) {
          console.warn("Merkle proof verification failed:", "reason" in e ? e.reason : e);
          const reason = e.reason;
          switch (reason) {
            case "!Qty":
              reasons.push(ClaimEligibility.OverMaxClaimablePerWallet);
              break;
            case "!PriceOrCurrency":
              reasons.push(ClaimEligibility.WrongPriceOrCurrency);
              break;
            case "!MaxSupply":
              reasons.push(ClaimEligibility.NotEnoughSupply);
              break;
            case "cant claim yet":
              reasons.push(ClaimEligibility.ClaimPhaseNotStarted);
              break;
            default:
              {
                reasons.push(ClaimEligibility.AddressNotAllowed);
                break;
              }
          }
          return reasons;
        }
      }
    }
    if (this.isNewSinglePhaseDrop(this.contractWrapper) || this.isNewMultiphaseDrop(this.contractWrapper)) {
      let claimedSupply = BigNumber.from(0);
      let maxClaimable = convertQuantityToBigNumber(claimCondition.maxClaimablePerWallet, 0);
      try {
        claimedSupply = await this.getSupplyClaimedByWallet(tokenId, resolvedAddress);
      } catch (e) {
        // no-op
      }
      if (allowListEntry) {
        maxClaimable = convertQuantityToBigNumber(allowListEntry.maxClaimable, 0);
      }
      if (maxClaimable.gt(0) && maxClaimable.lt(claimedSupply.add(quantity))) {
        reasons.push(ClaimEligibility.OverMaxClaimablePerWallet);
        return reasons;
      }

      // if there is no allowlist, or if there is an allowlist and the address is not in it
      // if maxClaimable is 0, we consider it as the address is not allowed
      if (!hasAllowList || hasAllowList && !allowListEntry) {
        if (maxClaimable.lte(claimedSupply) || maxClaimable.eq(0)) {
          reasons.push(ClaimEligibility.AddressNotAllowed);
          return reasons;
        }
      }
    }

    // check for claim timestamp between claims
    let [lastClaimedTimestamp, timestampForNextClaim] = [BigNumber.from(0), BigNumber.from(0)];
    if (this.isLegacyMultiPhaseDrop(this.contractWrapper)) {
      activeConditionIndex = await this.contractWrapper.read("getActiveClaimConditionId", [tokenId]);
      [lastClaimedTimestamp, timestampForNextClaim] = await this.contractWrapper.read("getClaimTimestamp", [tokenId, activeConditionIndex, resolvedAddress]);
    } else if (this.isLegacySinglePhaseDrop(this.contractWrapper)) {
      [lastClaimedTimestamp, timestampForNextClaim] = await this.contractWrapper.read("getClaimTimestamp", [tokenId, resolvedAddress]);
    }
    const now = BigNumber.from(Date.now()).div(1000);
    if (lastClaimedTimestamp.gt(0) && now.lt(timestampForNextClaim)) {
      // contract will return MaxUint256 if user has already claimed and cannot claim again
      if (timestampForNextClaim.eq(constants.MaxUint256)) {
        reasons.push(ClaimEligibility.AlreadyClaimed);
      } else {
        reasons.push(ClaimEligibility.WaitBeforeNextClaimTransaction);
      }
      return reasons;
    }

    // if not within a browser conetext, check for wallet balance.
    // In browser context, let the wallet do that job
    if (claimCondition.price.gt(0) && isNode()) {
      const totalPrice = claimCondition.price.mul(quantity);
      const provider = this.contractWrapper.getProvider();
      if (isNativeToken(claimCondition.currencyAddress)) {
        const balance = await provider.getBalance(resolvedAddress);
        if (balance.lt(totalPrice)) {
          reasons.push(ClaimEligibility.NotEnoughTokens);
        }
      } else {
        const erc20 = new ContractWrapper(provider, claimCondition.currencyAddress, ERC20Abi, {}, this.storage);
        const balance = await erc20.read("balanceOf", [resolvedAddress]);
        if (balance.lt(totalPrice)) {
          reasons.push(ClaimEligibility.NotEnoughTokens);
        }
      }
    }
    return reasons;
  }

  /**
   * Returns allow list information and merkle proofs for the given address.
   * @param tokenId - the token ID to check
   * @param claimerAddress - the claimer address
   * @param claimConditionId - optional the claim condition id to get the proofs for
   */
  async getClaimerProofs(tokenId, claimerAddress, claimConditionId) {
    const claimCondition = await this.get(tokenId, claimConditionId);
    const merkleRoot = claimCondition.merkleRoot;
    const merkleRootArray = utils.stripZeros(merkleRoot);
    if (merkleRootArray.length > 0) {
      const metadata = await this.metadata.get();
      const resolvedAddress = await resolveAddress(claimerAddress);
      return await fetchSnapshotEntryForAddress(resolvedAddress, merkleRoot.toString(), metadata.merkle, this.contractWrapper.getProvider(), this.storage, this.getSnapshotFormatVersion());
    } else {
      return null;
    }
  }

  /**
   * Get the total supply claimed by a specific wallet
   * @param walletAddress the wallet address to check
   * @returns the total supply claimed
   */
  async getSupplyClaimedByWallet(tokenId, walletAddress) {
    const resolvedAddress = await resolveAddress(walletAddress);
    if (this.isNewSinglePhaseDrop(this.contractWrapper)) {
      return await this.contractWrapper.read("getSupplyClaimedByWallet", [tokenId, resolvedAddress]);
    }
    if (this.isNewMultiphaseDrop(this.contractWrapper)) {
      const activeClaimConditionId = await this.contractWrapper.read("getActiveClaimConditionId", [tokenId]);
      return await this.contractWrapper.read("getSupplyClaimedByWallet", [tokenId, activeClaimConditionId, resolvedAddress]);
    }
    throw new Error("This contract does not support the getSupplyClaimedByWallet function");
  }

  /** ***************************************
   * WRITE FUNCTIONS
   *****************************************/

  /**
   * Set claim conditions on a single NFT
   *
   * @remarks Sets the public mint conditions that need to be fulfilled by users to claim a particular NFT in this contract.
   *
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   *
   * // Optionally specify addresses that can claim
   * const snapshots = ['0x...', '0x...']
   *
   * // Or alternatively, you can pass snapshots with the max number of NFTs each address can claim
   * // const snapshots = [{ address: '0x...', maxClaimable: 1 }, { address: '0x...', maxClaimable: 2 }]
   *
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: snapshots, // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   *
   * const tokenId = 0; // the id of the NFT to set claim conditions on
   * await dropContract.claimConditions.set(tokenId, claimConditions);
   * ```
   *
   * @param tokenId - The id of the NFT to set the claim conditions on
   * @param claimConditionInputs - The claim conditions
   * @param resetClaimEligibilityForAll - Whether to reset the state of who already claimed NFTs previously
   */
  set = /* @__PURE__ */buildTransactionFunction((() => {
    var _this = this;
    return async function (tokenId, claimConditionInputs) {
      let resetClaimEligibilityForAll = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return _this.setBatch.prepare([{
        tokenId,
        claimConditions: claimConditionInputs
      }], resetClaimEligibilityForAll);
    };
  })());

  /**
   * Set claim conditions on multiple NFTs at once
   *
   * @remarks Sets the claim conditions that need to be fulfilled by users to claim the given NFTs in this contract.
   *
   * @example
   * ```javascript
   * const claimConditionsForTokens = [
   *   {
   *     tokenId: 0,
   *     claimConditions: [{
   *       startTime: new Date(), // start the claim phase now
   *       maxClaimableSupply: 2, // limit how many mints for this tokenId
   *       price: 0.01, // price for this tokenId
   *       snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *     }]
   *   },
   *   {
   *     tokenId: 1,
   *     claimConditions: [{
   *       startTime: new Date(),
   *       price: 0.08, // different price for this tokenId
   *     }]
   *   },
   * ];
   *
   * await dropContract.claimConditions.setBatch(claimConditionsForTokens);
   * ```
   *
   * @param claimConditionsForToken - The claim conditions for each NFT
   * @param resetClaimEligibilityForAll - Whether to reset the state of who already claimed NFTs previously
   */
  setBatch = /* @__PURE__ */buildTransactionFunction((() => {
    var _this2 = this;
    return async function (claimConditionsForToken) {
      let resetClaimEligibilityForAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      const merkleInfo = {};
      const processedClaimConditions = await Promise.all(claimConditionsForToken.map(async _ref => {
        let {
          tokenId,
          claimConditions
        } = _ref;
        // sanitize for single phase deletions
        let claimConditionsProcessed = claimConditions;
        if (_this2.isLegacySinglePhaseDrop(_this2.contractWrapper)) {
          resetClaimEligibilityForAll = true;
          if (claimConditions.length === 0) {
            claimConditionsProcessed = [{
              startTime: new Date(0),
              currencyAddress: constants.AddressZero,
              price: 0,
              maxClaimableSupply: 0,
              maxClaimablePerWallet: 0,
              waitInSeconds: 0,
              merkleRootHash: utils.hexZeroPad([0], 32),
              snapshot: []
            }];
          } else if (claimConditions.length > 1) {
            throw new Error("Single phase drop contract cannot have multiple claim conditions, only one is allowed");
          }
        }
        // if using new snapshot format, make sure that maxClaimablePerWallet is set if allowlist is set as well
        if (_this2.isNewSinglePhaseDrop(_this2.contractWrapper) || _this2.isNewMultiphaseDrop(_this2.contractWrapper)) {
          claimConditionsProcessed.forEach(cc => {
            if (cc.snapshot && cc.snapshot.length > 0 && (cc.maxClaimablePerWallet === undefined || cc.maxClaimablePerWallet === "unlimited")) {
              throw new Error("maxClaimablePerWallet must be set to a specific value when an allowlist is set.\n" + "Set it to 0 to only allow addresses in the allowlist to claim the amount specified in the allowlist." + "\n\nex:\n" + "contract.claimConditions.set(tokenId, [{ snapshot: [{ address: '0x...', maxClaimable: 1 }], maxClaimablePerWallet: 0 }])");
            }
            if (cc.snapshot && cc.snapshot.length > 0 && cc.maxClaimablePerWallet?.toString() === "0" && cc.snapshot.map(s => {
              if (typeof s === "string") {
                return 0;
              } else {
                return Number(s.maxClaimable?.toString() || 0);
              }
            }).reduce((acc, current) => {
              return acc + current;
            }, 0) === 0) {
              throw new Error("maxClaimablePerWallet is set to 0, and all addresses in the allowlist have max claimable 0. This means that no one can claim.");
            }
          });
        }
        // process inputs
        const {
          snapshotInfos,
          sortedConditions
        } = await processClaimConditionInputs(claimConditionsProcessed, 0, _this2.contractWrapper.getProvider(), _this2.storage, _this2.getSnapshotFormatVersion());
        snapshotInfos.forEach(s => {
          merkleInfo[s.merkleRoot] = s.snapshotUri;
        });
        return {
          tokenId,
          sortedConditions
        };
      }));
      const metadata = await _this2.metadata.get();
      const encoded = [];

      // keep the old merkle roots from other tokenIds
      for (const key of Object.keys(metadata.merkle || {})) {
        merkleInfo[key] = metadata.merkle[key];
      }

      // upload new merkle roots to snapshot URIs if updated
      if (!deepEqual(metadata.merkle, merkleInfo)) {
        const mergedMetadata = await _this2.metadata.parseInputMetadata({
          ...metadata,
          merkle: merkleInfo
        });
        // using internal method to just upload, avoids one contract call
        const contractURI = await _this2.metadata._parseAndUploadMetadata(mergedMetadata);
        if (hasFunction("setContractURI", _this2.contractWrapper)) {
          const contractEncoder = new ContractEncoder(_this2.contractWrapper);
          encoded.push(contractEncoder.encode("setContractURI", [contractURI]));
        } else {
          throw new Error("Setting a merkle root requires implementing ContractMetadata in your contract to support storing a merkle root.");
        }
      }
      processedClaimConditions.forEach(_ref2 => {
        let {
          tokenId,
          sortedConditions
        } = _ref2;
        const baseContractEncoder = new ContractEncoder(_this2.contractWrapper);
        if (_this2.isLegacySinglePhaseDrop(_this2.contractWrapper)) {
          const legacyContractEncoder = new ContractEncoder(_this2.contractWrapper);
          encoded.push(legacyContractEncoder.encode("setClaimConditions", [tokenId, abstractContractModelToLegacy(sortedConditions[0]), resetClaimEligibilityForAll]));
        } else if (_this2.isLegacyMultiPhaseDrop(_this2.contractWrapper)) {
          encoded.push(baseContractEncoder.encode("setClaimConditions", [tokenId, sortedConditions.map(abstractContractModelToLegacy), resetClaimEligibilityForAll]));
        } else if (_this2.isNewSinglePhaseDrop(_this2.contractWrapper)) {
          encoded.push(baseContractEncoder.encode("setClaimConditions", [tokenId, abstractContractModelToNew(sortedConditions[0]), resetClaimEligibilityForAll]));
        } else if (_this2.isNewMultiphaseDrop(_this2.contractWrapper)) {
          encoded.push(baseContractEncoder.encode("setClaimConditions", [tokenId, sortedConditions.map(abstractContractModelToNew), resetClaimEligibilityForAll]));
        } else {
          throw new Error("Contract does not support claim conditions");
        }
      });
      if (hasFunction("multicall", _this2.contractWrapper)) {
        return Transaction.fromContractWrapper({
          contractWrapper: _this2.contractWrapper,
          method: "multicall",
          args: [encoded]
        });
      }
      throw new Error("Contract does not support multicall");
    };
  })());

  /**
   * Update a single claim condition with new data.
   * @param tokenId - the token id to update
   * @param index - the index of the claim condition to update, as given by the index from the result of `getAll()`
   * @param claimConditionInput - the new data to update, previous data will be retained
   */
  update = /* @__PURE__ */buildTransactionFunction(async (tokenId, index, claimConditionInput) => {
    const existingConditions = await this.getAll(tokenId);
    const newConditionInputs = await updateExistingClaimConditions(index, claimConditionInput, existingConditions);
    return await this.set.prepare(tokenId, newConditionInputs);
  });

  /**
   * Returns proofs and the overrides required for the transaction.
   *
   * @returns - `overrides` and `proofs` as an object.
   */
  async prepareClaim(tokenId, quantity, checkERC20Allowance, address) {
    const addressToClaim = await resolveAddress(address ? address : await this.contractWrapper.getSignerAddress());
    return prepareClaim(addressToClaim, quantity, await this.getActive(tokenId), async () => (await this.metadata.get()).merkle, 0, this.contractWrapper, this.storage, checkERC20Allowance, this.getSnapshotFormatVersion());
  }
  async getClaimArguments(tokenId, destinationAddress, quantity, claimVerification) {
    const resolvedAddress = await resolveAddress(destinationAddress);
    if (this.isLegacyMultiPhaseDrop(this.contractWrapper)) {
      return [resolvedAddress, tokenId, quantity, claimVerification.currencyAddress, claimVerification.price, claimVerification.proofs, claimVerification.maxClaimable];
    } else if (this.isLegacySinglePhaseDrop(this.contractWrapper)) {
      return [resolvedAddress, tokenId, quantity, claimVerification.currencyAddress, claimVerification.price, {
        proof: claimVerification.proofs,
        maxQuantityInAllowlist: claimVerification.maxClaimable
      }, utils.toUtf8Bytes("")];
    }
    return [resolvedAddress, tokenId, quantity, claimVerification.currencyAddress, claimVerification.price, {
      proof: claimVerification.proofs,
      quantityLimitPerWallet: claimVerification.maxClaimable,
      pricePerToken: claimVerification.priceInProof,
      currency: claimVerification.currencyAddressInProof
    }, utils.toUtf8Bytes("")];
  }

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   *
   * @deprecated Use `contract.erc1155.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, tokenId, quantity, options) {
    if (options?.pricePerToken) {
      throw new Error("Price per token should be set via claim conditions by calling `contract.erc1155.claimConditions.set()`");
    }
    const claimVerification = await this.prepareClaim(tokenId, quantity, options?.checkERC20Allowance || true);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "claim",
      args: await this.getClaimArguments(tokenId, destinationAddress, quantity, claimVerification),
      overrides: claimVerification.overrides
    });
  }
  isNewSinglePhaseDrop(contractWrapper) {
    return detectContractFeature(contractWrapper, "ERC1155ClaimConditionsV2");
  }
  isNewMultiphaseDrop(contractWrapper) {
    return detectContractFeature(contractWrapper, "ERC1155ClaimPhasesV2");
  }
  isLegacySinglePhaseDrop(contractWrapper) {
    return detectContractFeature(contractWrapper, "ERC1155ClaimConditionsV1");
  }
  isLegacyMultiPhaseDrop(contractWrapper) {
    return detectContractFeature(contractWrapper, "ERC1155ClaimPhasesV1");
  }
  getSnapshotFormatVersion() {
    return this.isLegacyMultiPhaseDrop(this.contractWrapper) || this.isLegacySinglePhaseDrop(this.contractWrapper) ? SnapshotFormatVersion.V1 : SnapshotFormatVersion.V2;
  }
}

/**
 * Mint Many ERC20 Tokens at once
 * @remarks Token batch minting functionality that handles unit parsing for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.token.mint.batch.to(walletAddress, [nftMetadata1, nftMetadata2, ...]);
 * ```
 * @public
 */

class Erc20BatchMintable {
  featureName = FEATURE_TOKEN_BATCH_MINTABLE.name;
  constructor(erc20, contractWrapper) {
    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
  }

  /**
   * Mint Tokens To Many Wallets
   *
   * @remarks Mint tokens to many wallets in one transaction.
   *
   * @example
   * ```javascript
   * // Data of the tokens you want to mint
   * const data = [
   *   {
   *     toAddress: "{{wallet_address}}", // Address to mint tokens to
   *     amount: 0.2, // How many tokens to mint to specified address
   *   },
   *  {
   *    toAddress: "0x...",
   *    amount: 1.4,
   *  }
   * ]
   *
   * await contract.token.mint.batch(data);
   * ```
   */
  to = /* @__PURE__ */buildTransactionFunction(async args => {
    const encoded = [];
    const contractEncoder = new ContractEncoder(this.contractWrapper);
    for (const arg of args) {
      encoded.push(contractEncoder.encode("mintTo", [await resolveAddress(arg.toAddress), await this.erc20.normalizeAmount(arg.amount)]));
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [encoded]
    });
  });
}

class Erc20Burnable {
  featureName = FEATURE_TOKEN_BURNABLE.name;
  constructor(erc20, contractWrapper) {
    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
  }

  /**
   * Burn Tokens
   *
   * @remarks Burn tokens held by the connected wallet
   *
   * @example
   * ```javascript
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.token.burn.tokens(amount);
   * ```
   */
  tokens = /* @__PURE__ */buildTransactionFunction(async amount => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "burn",
      args: [await this.erc20.normalizeAmount(amount)]
    });
  });

  /**
   * Burn Tokens
   *
   * @remarks Burn tokens held by the specified wallet
   *
   * @example
   * ```javascript
   * // Address of the wallet sending the tokens
   * const holderAddress = "{{wallet_address}}";
   *
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.token.burn.from(holderAddress, amount);
   * ```
   */
  from = /* @__PURE__ */buildTransactionFunction(async (holder, amount) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "burnFrom",
      args: [await resolveAddress(holder), await this.erc20.normalizeAmount(amount)]
    });
  });
}

/**
 * Configure and claim ERC20 tokens
 * @remarks Manage claim phases and claim ERC20 tokens that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.token.drop.claim.to("0x...", quantity);
 * ```
 */

class Erc20ClaimableWithConditions {
  featureName = FEATURE_TOKEN_CLAIM_CONDITIONS_V2.name;
  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   * await contract.token.drop.claim.conditions.set(claimConditions);
   * ```
   */

  constructor(erc20, contractWrapper, storage) {
    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    const metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
    this.conditions = new DropClaimConditions(this.contractWrapper, metadata, this.storage);
  }

  /**
   * Claim a certain amount of tokens to a specific Wallet
   *
   * @remarks Let the specified wallet claim Tokens.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 42.69; // how many tokens you want to claim
   *
   * const tx = await contract.token.drop.claim.to(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param amount - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param claimData
   * @returns - The transaction receipt
   */
  to = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, amount, options) => {
    const quantity = await this.erc20.normalizeAmount(amount);
    return await this.conditions.getClaimTransaction(destinationAddress, quantity, options);
  });
}

/**
 * Configure and claim ERC20 tokens
 * @remarks Manage claim phases and claim ERC20 tokens that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.token.drop.claim.to("0x...", quantity);
 * ```
 */

class Erc20Droppable {
  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   * await contract.nft.drop.claim.conditions.set(claimConditions);
   * ```
   */

  constructor(erc20, contractWrapper, storage) {
    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.claim = new Erc20ClaimableWithConditions(this.erc20, this.contractWrapper, this.storage);
  }
}

/**
 * Mint ERC20 Tokens
 * @remarks Token minting functionality that handles unit parsing for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.mint.to(walletAddress, nftMetadata);
 * ```
 * @public
 */

class Erc20Mintable {
  featureName = FEATURE_TOKEN_MINTABLE.name;

  /**
   * Batch mint Tokens to many addresses
   */

  constructor(erc20, contractWrapper) {
    this.erc20 = erc20;
    this.contractWrapper = contractWrapper;
    this.batch = this.detectErc20BatchMintable();
  }

  /**
   * Mint Tokens
   *
   * @remarks Mint tokens to a specified address.
   *
   * @example
   * ```javascript
   * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
   * const amount = "1.5"; // The amount of this token you want to mint
   * await contract.token.mint.to(toAddress, amount);
   * ```
   */
  to = /* @__PURE__ */buildTransactionFunction(async (to, amount) => {
    return await this.getMintTransaction(to, amount);
  });

  /**
   * @deprecated Use `contract.erc20.mint.prepare(...args)` instead
   */
  async getMintTransaction(to, amount) {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "mintTo",
      args: [await resolveAddress(to), await this.erc20.normalizeAmount(amount)]
    });
  }
  detectErc20BatchMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC20BatchMintable")) {
      return new Erc20BatchMintable(this.erc20, this.contractWrapper);
    }
    return undefined;
  }
}

async function setErc20Allowance(contractToApprove, value, currencyAddress, overrides) {
  if (isNativeToken(currencyAddress)) {
    overrides["value"] = value;
  } else {
    const signer = contractToApprove.getSigner();
    const provider = contractToApprove.getProvider();
    const erc20 = new ContractWrapper(signer || provider, currencyAddress, ERC20Abi, contractToApprove.options, contractToApprove.storage);
    const owner = await contractToApprove.getSignerAddress();
    const spender = contractToApprove.address;
    const allowance = await erc20.read("allowance", [owner, spender]);
    if (allowance.lt(value)) {
      // approve overrides the previous allowance, set it to the minimum required for this tx
      await erc20.sendTransaction("approve", [spender, value]);
    }
    return overrides;
  }
}

/**
 * Enables generating ERC20 Tokens with rules and an associated signature, which can then be minted by anyone securely
 * @public
 */
// TODO consolidate into a single class

class Erc20SignatureMintable {
  featureName = FEATURE_TOKEN_SIGNATURE_MINTABLE.name;
  constructor(contractWrapper, roles) {
    this.contractWrapper = contractWrapper;
    this.roles = roles;
  }

  /**
   * Mint tokens from a signature
   *
   * @remarks Mint a certain amount of tokens from a previously generated signature.
   *
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `generate()` documentation
   * const signedPayload = contract.erc20.signature.generate(payload);
   *
   * // Use the signed payload to mint the tokens
   * const tx = contract.erc20.signature.mint(signedPayload);
   * ```
   * @param signedPayload - the previously generated payload and signature with {@link Erc20SignatureMintable.generate}
   * @twfeature ERC20SignatureMintable
   */
  mint = /* @__PURE__ */buildTransactionFunction(async signedPayload => {
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    const message = await this.mapPayloadToContractStruct(mintRequest);
    const overrides = await this.contractWrapper.getCallOverrides();
    // TODO: Transaction Sequence Pattern
    await setErc20Allowance(this.contractWrapper, BigNumber.from(message.price), mintRequest.currencyAddress, overrides);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "mintWithSignature",
      args: [message, signature],
      overrides
    });
  });

  /**
   * Mint any number of generated tokens signatures at once
   * @remarks Mint multiple token signatures in one transaction. Note that this is only possible for free mints (cannot batch mints with a price attached to it for security reasons)
   * @param signedPayloads - the array of signed payloads to mint
   * @twfeature ERC20SignatureMintable
   */
  mintBatch = /* @__PURE__ */buildTransactionFunction(async signedPayloads => {
    const contractPayloads = await Promise.all(signedPayloads.map(async s => {
      const message = await this.mapPayloadToContractStruct(s.payload);
      const signature = s.signature;
      const price = s.payload.price;
      if (BigNumber.from(price).gt(0)) {
        throw new Error("Can only batch free mints. For mints with a price, use regular mint()");
      }
      return {
        message,
        signature
      };
    }));
    const contractEncoder = new ContractEncoder(this.contractWrapper);
    const encoded = contractPayloads.map(p => {
      return contractEncoder.encode("mintWithSignature", [p.message, p.signature]);
    });
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [encoded]
    });
  });

  /**
   * Verify that a payload is correctly signed
   * @param signedPayload - the payload to verify
   * @twfeature ERC20SignatureMintable
   *
   * ```javascript
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   quantity: 4.2, // The quantity of tokens to be minted
   *   to: {{wallet_address}}, // Who will receive the tokens
   *   price: 0.5, // the price to pay for minting those tokens
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now,
   *   primarySaleRecipient: "0x...", // custom sale recipient for this token mint
   * };
   *
   * const signedPayload = await contract.erc20.signature.generate(payload);
   * // Now you can verify if the signed payload is valid
   * const isValid = await contract.erc20.signature.verify(signedPayload);
   * ```
   */
  async verify(signedPayload) {
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    const message = await this.mapPayloadToContractStruct(mintRequest);
    const verification = await this.contractWrapper.read("verify", [message, signature]);
    return verification[0];
  }

  /**
   * Generate a signature that can be used to mint a certain amount of tokens
   *
   * @remarks Takes in a quantity of tokens, some conditions for how it can be minted and signs it with your private key. The generated signature can then be used to mint those tokens using the exact payload and signature generated.
   *
   * @example
   * ```javascript
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   quantity: 4.2, // The quantity of tokens to be minted
   *   to: {{wallet_address}}, // Who will receive the tokens
   *   price: 0.5, // the price to pay for minting those tokens
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now,
   *   primarySaleRecipient: "0x...", // custom sale recipient for this token mint
   * };
   *
   * const signedPayload = await contract.erc20.signature.generate(payload);
   * // now anyone can use these to mint the NFT using `contract.erc20.signature.mint(signedPayload)`
   * ```
   * @param mintRequest - the payload to sign
   * @returns the signed payload and the corresponding signature
   * @twfeature ERC20SignatureMintable
   */
  async generate(mintRequest) {
    return (await this.generateBatch([mintRequest]))[0];
  }

  /**
   * Generate a batch of signatures that can be used to mint many token signatures.
   *
   * @remarks See {@link Erc20SignatureMintable.generate}
   *
   * @param payloadsToSign - the payloads to sign
   * @returns an array of payloads and signatures
   * @twfeature ERC20SignatureMintable
   */
  async generateBatch(payloadsToSign) {
    await this.roles?.verify(["minter"], await this.contractWrapper.getSignerAddress());
    const parsedRequests = await Promise.all(payloadsToSign.map(m => Signature20PayloadInput.parseAsync(m)));
    const chainId = await this.contractWrapper.getChainID();
    const signer = this.contractWrapper.getSigner();
    invariant(signer, "No signer available");

    // ERC20Permit (EIP-712) spec differs from signature mint 721, 1155.
    const name = await this.contractWrapper.read("name", []);
    return await Promise.all(parsedRequests.map(async m => {
      const finalPayload = await Signature20PayloadOutput.parseAsync(m);
      const signature = await this.contractWrapper.signTypedData(signer, {
        name,
        version: "1",
        chainId,
        verifyingContract: this.contractWrapper.address
      }, {
        MintRequest: MintRequest20
      }, await this.mapPayloadToContractStruct(finalPayload));
      return {
        payload: finalPayload,
        signature: signature.toString()
      };
    }));
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/
  /**
   * Maps a payload to the format expected by the contract
   *
   * @internal
   *
   * @param mintRequest - The payload to map.
   * @returns - The mapped payload.
   */
  async mapPayloadToContractStruct(mintRequest) {
    const normalizedPrice = await normalizePriceValue(this.contractWrapper.getProvider(), mintRequest.price, mintRequest.currencyAddress);
    const amountWithDecimals = utils.parseUnits(mintRequest.quantity, await this.contractWrapper.read("decimals", []));
    return {
      to: mintRequest.to,
      primarySaleRecipient: mintRequest.primarySaleRecipient,
      quantity: amountWithDecimals,
      price: normalizedPrice,
      currency: mintRequest.currencyAddress,
      validityEndTimestamp: mintRequest.mintEndTime,
      validityStartTimestamp: mintRequest.mintStartTime,
      uid: mintRequest.uid
    };
  }
}

/**
 * Checks whether the given DetectableFeature is defined
 * @internal
 * @param namespace The namespace to check
 * @param feature The corresponding feature
 */
function assertEnabled(namespace, feature) {
  if (!namespace) {
    throw new ExtensionNotImplementedError(feature);
  }
  return namespace;
}

async function normalizeAmount(contractWrapper, amount) {
  const decimals = await contractWrapper.read("decimals", []);
  return utils.parseUnits(AmountSchema.parse(amount), decimals);
}

/**
 * Standard ERC20 Token functions
 * @remarks Basic functionality for a ERC20 contract that handles all unit transformation for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc20.transfer(walletAddress, amount);
 * ```
 * @public
 */
class Erc20 {
  featureName = FEATURE_TOKEN.name;
  /**
   * Mint tokens
   */

  get chainId() {
    return this._chainId;
  }
  constructor(contractWrapper, storage, chainId) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.mintable = this.detectErc20Mintable();
    this.burnable = this.detectErc20Burnable();
    this.droppable = this.detectErc20Droppable();
    this.signatureMintable = this.detectErc20SignatureMintable();
    this._chainId = chainId;
  }

  /**
   * @internal
   */
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }

  /**
   * @internal
   */
  getAddress() {
    return this.contractWrapper.address;
  }

  ////// Standard ERC20 Extension //////

  /**
   * Get the token metadata
   * @remarks name, symbol, etc...
   * @example
   * ```javascript
   * const token = await contract.erc20.get();
   * ```
   * @returns The token metadata
   * @twfeature ERC20
   */
  async get() {
    return await fetchCurrencyMetadata(this.contractWrapper.getProvider(), this.getAddress());
  }

  /**
   * Get token balance for the currently connected wallet
   *
   * @remarks Get a wallets token balance.
   *
   * @example
   * ```javascript
   * const balance = await contract.erc20.balance();
   * ```
   *
   * @returns The balance of a specific wallet.
   * @twfeature ERC20
   */
  async balance() {
    return await this.balanceOf(await this.contractWrapper.getSignerAddress());
  }

  /**
   * Get token balance for a specific wallet
   *
   * @remarks Get a wallets token balance.
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const balance = await contract.erc20.balanceOf(walletAddress);
   * ```
   *
   * @returns The balance of a specific wallet.
   * @twfeature ERC20
   */
  async balanceOf(address) {
    return this.getValue(await this.contractWrapper.read("balanceOf", [await resolveAddress(address)]));
  }

  /**
   * Get the total supply for this token
   * @remarks Get how much supply has been minted
   * @example
   * ```javascript
   * const balance = await contract.erc20.totalSupply();
   * ```
   * @twfeature ERC20
   */
  async totalSupply() {
    return await this.getValue(await this.contractWrapper.read("totalSupply", []));
  }

  /**
   * Get token allowance
   *
   * @remarks Get the allowance of a 'spender' wallet over the connected wallet's funds - the allowance of a different address for a token is the amount of tokens that the `spender` wallet is allowed to spend on behalf of the connected wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to check token allowance
   * const spenderAddress = "0x...";
   * const allowance = await contract.erc20.allowance(spenderAddress);
   * ```
   *
   * @returns The allowance of one wallet over anothers funds.
   * @twfeature ERC20
   */
  async allowance(spender) {
    const [owner, spenderAddress] = await Promise.all([this.contractWrapper.getSignerAddress(), resolveAddress(spender)]);
    return await this.allowanceOf(owner, spenderAddress);
  }

  /**
   * Get token allowance of a specific wallet
   *
   * @remarks Get the allowance of one wallet over another wallet's funds - the allowance of a different address for a token is the amount of tokens that the wallet is allowed to spend on behalf of the specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet who owns the funds
   * const owner = "{{wallet_address}}";
   * // Address of the wallet to check token allowance
   * const spender = "0x...";
   * const allowance = await contract.erc20.allowanceOf(owner, spender);
   * ```
   *
   * @returns The allowance of one wallet over anothers funds.
   * @twfeature ERC20
   */
  async allowanceOf(owner, spender) {
    const args = await Promise.all([resolveAddress(owner), resolveAddress(spender)]);
    return await this.getValue(await this.contractWrapper.read("allowance", args));
  }

  /**
   * Transfer tokens
   *
   * @remarks Transfer tokens from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to send the tokens to
   * const toAddress = "0x...";
   * // The amount of tokens you want to send
   * const amount = 0.1;
   * await contract.erc20.transfer(toAddress, amount);
   * ```
   * @twfeature ERC20
   */
  transfer = /* @__PURE__ */buildTransactionFunction(async (to, amount) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "transfer",
      args: await Promise.all([resolveAddress(to), this.normalizeAmount(amount)])
    });
  });

  /**
   * Transfer tokens from a specific address
   *
   * @remarks Transfer tokens from one wallet to another
   *
   * @example
   * ```javascript
   * // Address of the wallet sending the tokens
   * const fromAddress = "{{wallet_address}}";
   * // Address of the wallet you want to send the tokens to
   * const toAddress = "0x...";
   * // The number of tokens you want to send
   * const amount = 1.2
   * // Note that the connected wallet must have approval to transfer the tokens of the fromAddress
   * await contract.erc20.transferFrom(fromAddress, toAddress, amount);
   * ```
   * @twfeature ERC20
   */
  transferFrom = /* @__PURE__ */buildTransactionFunction(async (from, to, amount) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "transferFrom",
      args: await Promise.all([resolveAddress(from), resolveAddress(to), this.normalizeAmount(amount)])
    });
  });

  /**
   * Set token allowance
   * @remarks Allows the specified `spender` wallet to transfer the given `amount` of tokens to another wallet
   * @example
   * ```javascript
   * // Address of the wallet to allow transfers from
   * const spenderAddress = "0x...";
   * // The number of tokens to give as allowance
   * const amount = 100
   * await contract.erc20.setAllowance(spenderAddress, amount);
   * ```
   * @twfeature ERC20
   */
  setAllowance = /* @__PURE__ */buildTransactionFunction(async (spender, amount) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "approve",
      args: await Promise.all([resolveAddress(spender), this.normalizeAmount(amount)])
    });
  });

  /**
   * Transfer tokens to many wallets
   *
   * @remarks Mint tokens from the connected wallet to many wallets
   *
   * @example
   * ```javascript
   * // Data of the tokens you want to mint
   * const data = [
   *   {
   *     toAddress: "{{wallet_address}}", // Address to mint tokens to
   *     amount: 100, // How many tokens to mint to specified address
   *   },
   *  {
   *    toAddress: "0x...",
   *    amount: 100,
   *  }
   * ]
   *
   * await contract.erc20.transferBatch(data);
   * ```
   */
  transferBatch = /* @__PURE__ */buildTransactionFunction(async args => {
    const contractEncoder = new ContractEncoder(this.contractWrapper);
    const encoded = (await Promise.all(args.map(arg => Promise.all([this.normalizeAmount(arg.amount), resolveAddress(arg.toAddress)])))).map(_ref => {
      let [amountWithDecimals, address] = _ref;
      return contractEncoder.encode("transfer", [address, amountWithDecimals]);
    });
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [encoded]
    });
  });

  ////// ERC20 Mintable Extension //////

  /**
   * Mint tokens
   *
   * @remarks Mint tokens to the connected wallet.
   *
   * @example
   * ```javascript
   * const amount = "1.5"; // The amount of this token you want to mint
   * await contract.erc20.mint(amount);
   * ```
   * @twfeature ERC20Mintable
   */
  mint = /* @__PURE__ */buildTransactionFunction(async amount => {
    return this.mintTo.prepare(await this.contractWrapper.getSignerAddress(), amount);
  });

  /**
   * Mint tokens to a specific wallet
   *
   * @remarks Mint tokens to a specified address.
   *
   * @example
   * ```javascript
   * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
   * const amount = "1.5"; // The amount of this token you want to mint
   * await contract.erc20.mintTo(toAddress, amount);
   * ```
   * @twfeature ERC20Mintable
   */
  mintTo = /* @__PURE__ */buildTransactionFunction(async (receiver, amount) => {
    return assertEnabled(this.mintable, FEATURE_TOKEN_MINTABLE).to.prepare(receiver, amount);
  });

  /**
   * Construct a mint transaction without executing it
   * @remarks This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param amount - The amount of tokens you want to mint
   *
   * @deprecated Use `contract.erc20.mint.prepare(...args)` instead
   * @twfeature ERC20Mintable
   */
  async getMintTransaction(receiver, amount) {
    return assertEnabled(this.mintable, FEATURE_TOKEN_MINTABLE).getMintTransaction(receiver, amount);
  }

  ////// ERC20 BatchMintable Extension //////

  /**
   * Mint tokens to many wallets
   *
   * @remarks Mint tokens to many wallets in one transaction.
   *
   * @example
   * ```javascript
   * // Data of the tokens you want to mint
   * const data = [
   *   {
   *     toAddress: "{{wallet_address}}", // Address to mint tokens to
   *     amount: 0.2, // How many tokens to mint to specified address
   *   },
   *  {
   *    toAddress: "0x...",
   *    amount: 1.4,
   *  }
   * ]
   *
   * await contract.mintBatchTo(data);
   * ```
   * @twfeature ERC20BatchMintable
   */
  mintBatchTo = /* @__PURE__ */buildTransactionFunction(async args => {
    return assertEnabled(this.mintable?.batch, FEATURE_TOKEN_BATCH_MINTABLE).to.prepare(args);
  });

  ////// ERC20 Burnable Extension //////

  /**
   * Burn tokens
   *
   * @remarks Burn tokens held by the connected wallet
   *
   * @example
   * ```javascript
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.erc20.burn(amount);
   * ```
   * @twfeature ERC20Burnable
   */
  burn = /* @__PURE__ */buildTransactionFunction(async amount => {
    return assertEnabled(this.burnable, FEATURE_TOKEN_BURNABLE).tokens.prepare(amount);
  });

  /**
   * Burn tokens from a specific wallet
   *
   * @remarks Burn tokens held by the specified wallet
   *
   * @example
   * ```javascript
   * // Address of the wallet sending the tokens
   * const holderAddress = "{{wallet_address}}";
   *
   * // The amount of this token you want to burn
   * const amount = 1.2;
   *
   * await contract.erc20.burnFrom(holderAddress, amount);
   * ```
   * @twfeature ERC20Burnable
   */
  burnFrom = /* @__PURE__ */buildTransactionFunction(async (holder, amount) => {
    return assertEnabled(this.burnable, FEATURE_TOKEN_BURNABLE).from.prepare(holder, amount);
  });

  ////// ERC20 Claimable Extension //////

  /**
   * Claim tokens
   *
   * @remarks Let the specified wallet claim Tokens.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 42.69; // how many tokens you want to claim
   *
   * const tx = await contract.erc20.claim(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param amount - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param claimData
   * @returns - The transaction receipt
   * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1
   */
  claim = /* @__PURE__ */buildTransactionFunction(async (amount, options) => {
    return this.claimTo.prepare(await this.contractWrapper.getSignerAddress(), amount, options);
  });

  /**
   * Claim tokens to a specific wallet
   *
   * @remarks Let the specified wallet claim Tokens.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 42.69; // how many tokens you want to claim
   *
   * const tx = await contract.erc20.claim(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param amount - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param claimData
   * @returns - The transaction receipt
   * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1
   */
  claimTo = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, amount, options) => {
    return assertEnabled(this.droppable?.claim, FEATURE_TOKEN_CLAIM_CONDITIONS_V2).to.prepare(destinationAddress, amount, options);
  });

  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   * await contract.erc20.claimConditions.set(claimConditions);
   * ```
   * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1
   */
  get claimConditions() {
    return assertEnabled(this.droppable?.claim, FEATURE_TOKEN_CLAIM_CONDITIONS_V2).conditions;
  }

  ////// ERC20 SignatureMint Extension //////

  /**
   * Mint with signature
   * @remarks Generate dynamic tokens with your own signature, and let others mint them using that signature.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.erc20.signature.generate()` documentation
   * const signedPayload = contract.erc20.signature().generate(payload);
   *
   * // now the payload can be used to mint tokens
   * const tx = contract.erc20.signature.mint(signedPayload);
   * ```
   * @twfeature ERC20SignatureMintable
   */
  get signature() {
    return assertEnabled(this.signatureMintable, FEATURE_TOKEN_SIGNATURE_MINTABLE);
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * returns the wei amount from a token amount
   * @internal
   * @param amount
   */
  async normalizeAmount(amount) {
    return normalizeAmount(this.contractWrapper, amount);
  }

  /**
   * @internal
   */
  async getValue(value) {
    return await fetchCurrencyValue(this.contractWrapper.getProvider(), this.getAddress(), BigNumber.from(value));
  }
  detectErc20Mintable() {
    if (detectContractFeature(this.contractWrapper, "ERC20")) {
      return new Erc20Mintable(this, this.contractWrapper);
    }
    return undefined;
  }
  detectErc20Burnable() {
    if (detectContractFeature(this.contractWrapper, "ERC20Burnable")) {
      return new Erc20Burnable(this, this.contractWrapper);
    }
    return undefined;
  }
  detectErc20Droppable() {
    if (detectContractFeature(this.contractWrapper, "ERC20ClaimConditionsV1") || detectContractFeature(this.contractWrapper, "ERC20ClaimConditionsV2") || detectContractFeature(this.contractWrapper, "ERC20ClaimPhasesV1") || detectContractFeature(this.contractWrapper, "ERC20ClaimPhasesV2")) {
      return new Erc20Droppable(this, this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc20SignatureMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC20SignatureMintable")) {
      return new Erc20SignatureMintable(this.contractWrapper);
    }
    return undefined;
  }
}

/**
 * Mint Many ERC721 NFTs at once
 * @remarks NFT batch minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.mint.batch.to(walletAddress, [nftMetadata1, nftMetadata2, ...]);
 * ```
 * @public
 */

class Erc721BatchMintable {
  featureName = FEATURE_NFT_BATCH_MINTABLE.name;
  constructor(erc721, contractWrapper, storage) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  /**
   * Mint Many unique NFTs
   *
   * @remarks Mint many unique NFTs at once to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFTs you want to mint.
   * const metadatas = [{
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT #2",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/other/image.png"),
   * }];
   *
   * const tx = await contract.mint.batch.to(walletAddress, metadatas);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   */
  to = /* @__PURE__ */buildTransactionFunction(async (to, metadatas) => {
    const [uris, resolvedAddress] = await Promise.all([uploadOrExtractURIs(metadatas, this.storage), resolveAddress(to)]);
    const contractEncoder = new ContractEncoder(this.contractWrapper);
    const encoded = uris.map(uri => contractEncoder.encode("mintTo", [resolvedAddress, uri]));
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [encoded],
      parse: receipt => {
        const events = this.contractWrapper.parseLogs("TokensMinted", receipt.logs);
        if (events.length === 0 || events.length < metadatas.length) {
          throw new Error("TokenMinted event not found, minting failed");
        }
        return events.map(e => {
          const id = e.args.tokenIdMinted;
          return {
            id,
            receipt,
            data: () => this.erc721.get(id)
          };
        });
      }
    });
  });
}

/**
 * Configure and claim ERC721 NFTs
 * @remarks Manage claim phases and claim ERC721 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.claim(quantity);
 * await contract.erc721.claimConditions.getActive();
 * ```
 */

class Erc721ClaimableWithConditions {
  featureName = FEATURE_NFT_CLAIM_CONDITIONS_V2.name;

  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   * await contract.erc721.claimConditions.set(claimConditions);
   * ```
   */

  constructor(erc721, contractWrapper, storage) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    const metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
    this.conditions = new DropClaimConditions(this.contractWrapper, metadata, this.storage);
  }

  /**
   * Claim unique NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 1; // how many unique NFTs you want to claim
   *
   * const tx = await contract.erc721.claimTo(address, quantity);
   * const receipt = tx[0].receipt; // the transaction receipt
   * const claimedTokenId = tx[0].id; // the id of the first NFT claimed
   * const claimedNFT = await tx[0].data(); // (optional) get the first claimed NFT metadata
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param options
   * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   */
  to = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, quantity, options) => {
    // TODO: Transaction Sequence Pattern
    const tx = await this.conditions.getClaimTransaction(destinationAddress, quantity, options);
    tx.setParse(receipt => {
      const event = this.contractWrapper.parseLogs("TokensClaimed", receipt?.logs);
      const startingIndex = event[0].args.startTokenId;
      const endingIndex = startingIndex.add(quantity);
      const results = [];
      for (let id = startingIndex; id.lt(endingIndex); id = id.add(1)) {
        results.push({
          id,
          receipt,
          data: () => this.erc721.get(id)
        });
      }
      return results;
    });
    return tx;
  });
}

async function calculateClaimCost(contractWrapper, pricePerToken, quantity, currencyAddress, checkERC20Allowance) {
  let overrides = {};
  const currency = currencyAddress || NATIVE_TOKEN_ADDRESS;
  const normalizedPrice = await normalizePriceValue(contractWrapper.getProvider(), pricePerToken, currency);
  const totalCost = normalizedPrice.mul(quantity);
  if (totalCost.gt(0)) {
    if (currency === NATIVE_TOKEN_ADDRESS) {
      overrides = {
        value: totalCost
      };
    } else if (currency !== NATIVE_TOKEN_ADDRESS && checkERC20Allowance) {
      await approveErc20Allowance(contractWrapper, currency, totalCost, quantity, 0);
    }
  }
  return overrides;
}

/**
 * Configure and claim ERC721 NFTs
 * @remarks Manage claim phases and claim ERC721 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.claim(tokenId, quantity);
 * ```
 */

class Erc721Claimable {
  featureName = FEATURE_NFT_CLAIM_CUSTOM.name;
  constructor(erc721, contractWrapper) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
  }

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Options for claiming the NFTs
   *
   * @deprecated Use `contract.erc721.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, quantity, options) {
    // TODO: Transaction Sequence Pattern
    let overrides = {};
    if (options && options.pricePerToken) {
      overrides = await calculateClaimCost(this.contractWrapper, options.pricePerToken, quantity, options.currencyAddress, options.checkERC20Allowance);
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "claim",
      args: [destinationAddress, quantity],
      overrides
    });
  }

  /**
   * Claim NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc721.claimTo(address, quantity);
   * const receipt = tx[0].receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Options for claiming the NFTs
   *
   * @returns - Receipt for the transaction
   */
  to = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, quantity, options) => {
    // TODO: Transaction Sequence Pattern
    const tx = await this.getClaimTransaction(destinationAddress, quantity, options);
    tx.setParse(receipt => {
      const event = this.contractWrapper.parseLogs("TokensClaimed", receipt?.logs);
      const startingIndex = event[0].args.startTokenId;
      const endingIndex = startingIndex.add(quantity);
      const results = [];
      for (let id = startingIndex; id.lt(endingIndex); id = id.add(1)) {
        results.push({
          id,
          receipt,
          data: () => this.erc721.get(id)
        });
      }
      return results;
    });
    return tx;
  });
}

/**
 * Lazily mint and claim ERC721 NFTs
 * @remarks Manage claim phases and claim ERC721 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.drop.claim(quantity);
 * ```
 */

class Erc721LazyMintable {
  featureName = FEATURE_NFT_LAZY_MINTABLE.name;

  /**
   * Delayed reveal
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until you reveal them
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.nft.drop.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.erc721.revealer.reveal(batchId, "my secret password");
   * ```
   */

  constructor(erc721, contractWrapper, storage) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.revealer = this.detectErc721Revealable();
  }

  /**
   * Create a batch of unique NFTs to be claimed in the future
   *
   * @remarks Create batch allows you to create a batch of many unique NFTs in one transaction.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFTs to create
   * const metadatas = [{
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   *
   * const results = await contract.erc721.lazyMint(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   */
  lazyMint = /* @__PURE__ */buildTransactionFunction(async (metadatas, options) => {
    const startFileNumber = await this.erc721.nextTokenIdToMint();
    const batch = await uploadOrExtractURIs(metadatas, this.storage, startFileNumber.toNumber(), options);
    // ensure baseUri is the same for the entire batch
    const baseUri = getBaseUriFromBatch(batch);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "lazyMint",
      args: [batch.length, baseUri.endsWith("/") ? baseUri : `${baseUri}/`, utils.toUtf8Bytes("")],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("TokensLazyMinted", receipt?.logs);
        const startingIndex = event[0].args.startTokenId;
        const endingIndex = event[0].args.endTokenId;
        const results = [];
        for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
          results.push({
            id,
            receipt,
            data: () => this.erc721.getTokenMetadata(id)
          });
        }
        return results;
      }
    });
  });

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/
  detectErc721Revealable() {
    if (detectContractFeature(this.contractWrapper, "ERC721Revealable")) {
      return new DelayedReveal(this.contractWrapper, this.storage, FEATURE_NFT_REVEALABLE.name, () => this.erc721.nextTokenIdToMint());
    }
    return undefined;
  }
}

/**
 * Mint ERC721 NFTs
 * @remarks NFT minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.mint.to(walletAddress, nftMetadata);
 * ```
 * @public
 */

class Erc721Mintable {
  featureName = FEATURE_NFT_MINTABLE.name;
  constructor(erc721, contractWrapper, storage) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.batch = this.detectErc721BatchMintable();
  }

  /**
   * Mint a unique NFT
   *
   * @remarks Mint a unique NFT to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const tx = await contract.nft.mint.to(walletAddress, metadata);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   */
  to = /* @__PURE__ */buildTransactionFunction(async (to, metadata) => {
    const [uri, toAddress] = await Promise.all([uploadOrExtractURI(metadata, this.storage), resolveAddress(to)]);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "mintTo",
      args: [toAddress, uri],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("Transfer", receipt?.logs);
        if (event.length === 0) {
          throw new Error("TransferEvent event not found");
        }
        const id = event[0].args.tokenId;
        return {
          id,
          receipt,
          data: () => this.erc721.get(id)
        };
      }
    });
  });

  /**
   * @deprecated Use `contract.erc721.mint.prepare(...args)` instead
   */
  async getMintTransaction(to, metadata) {
    return this.to.prepare(await resolveAddress(to), metadata);
  }
  detectErc721BatchMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC721BatchMintable")) {
      return new Erc721BatchMintable(this.erc721, this.contractWrapper, this.storage);
    }
    return undefined;
  }
}

/**
 * List owned ERC721 NFTs
 * @remarks Easily list all the NFTs from a ERC721 contract, owned by a certain wallet.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const walletAddress = "0x...";
 * const ownedNFTs = await contract.nft.query.owned.all(walletAddress);
 * ```
 * @public
 */

class Erc721Enumerable {
  featureName = FEATURE_NFT_ENUMERABLE.name;
  constructor(erc721, contractWrapper) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
  }

  /**
   * Get all NFTs owned by a specific wallet
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.nft.query.owned.all(address);
   * ```
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   * @returns The NFT metadata for all NFTs in the contract.
   */
  async all(walletAddress) {
    const tokenIds = await this.tokenIds(walletAddress);
    return await Promise.all(tokenIds.map(tokenId => this.erc721.get(tokenId.toString())));
  }

  /**
   * Get all token ids of NFTs owned by a specific wallet.
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   */
  async tokenIds(walletAddress) {
    const address = await resolveAddress(walletAddress || (await this.contractWrapper.getSignerAddress()));
    const balance = await this.contractWrapper.read("balanceOf", [address]);
    const indices = Array.from(Array(balance.toNumber()).keys());
    return await Promise.all(indices.map(i => this.contractWrapper.read("tokenOfOwnerByIndex", [address, i])));
  }
}

/**
 * List owned ERC721 NFTs
 * @remarks Easily list all the NFTs from a ERC721 contract, owned by a certain wallet.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const walletAddress = "0x...";
 * const ownedNFTs = await contract.nft.query.owned.all(walletAddress);
 * ```
 * @public
 */

class Erc721AQueryable {
  featureName = FEATURE_NFT_QUERYABLE.name;
  constructor(erc721, contractWrapper) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
  }

  /**
   * Get all NFTs owned by a specific wallet
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.nft.query.owned.all(address);
   * ```
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   * @returns The NFT metadata for all NFTs in the contract.
   */
  async all(walletAddress) {
    const tokenIds = await this.tokenIds(walletAddress);
    return await Promise.all(tokenIds.map(tokenId => this.erc721.get(tokenId.toString())));
  }

  /**
   * Get all token ids of NFTs owned by a specific wallet.
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   */
  async tokenIds(walletAddress) {
    const address = await resolveAddress(walletAddress || (await this.contractWrapper.getSignerAddress()));
    return await this.contractWrapper.read("tokensOfOwner", [address]);
  }
}

/**
 * List ERC721 NFTs
 * @remarks Easily list all the NFTs in a ERC721 contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const nfts = await contract.nft.query.all();
 * ```
 * @public
 */

class Erc721Supply {
  featureName = FEATURE_NFT_SUPPLY.name;
  constructor(erc721, contractWrapper) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.owned = this.detectErc721Owned();
  }

  /**
   * Get all NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.nft.query.all();
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */
  async all(queryParams) {
    let startTokenId = BigNumber.from(0);
    if (hasFunction("startTokenId", this.contractWrapper)) {
      startTokenId = await this.contractWrapper.read("startTokenId", []);
    }
    const start = BigNumber.from(queryParams?.start || 0).add(startTokenId).toNumber();
    const count = BigNumber.from(queryParams?.count || DEFAULT_QUERY_ALL_COUNT).toNumber();
    const maxSupply = await this.erc721.nextTokenIdToMint();
    const maxId = Math.min(maxSupply.add(startTokenId).toNumber(), start + count);
    return await Promise.all([...Array(maxId - start).keys()].map(i => this.erc721.get((start + i).toString())));
  }

  /**
   * Return all the owners of each token id in this contract
   * @returns
   */
  async allOwners() {
    let totalCount;
    let startTokenId = BigNumber.from(0);
    if (hasFunction("startTokenId", this.contractWrapper)) {
      startTokenId = await this.contractWrapper.read("startTokenId", []);
    }
    try {
      totalCount = await this.erc721.totalClaimedSupply();
    } catch (e) {
      totalCount = await this.totalCount();
    }
    totalCount = totalCount.add(startTokenId);

    // TODO use multicall3 if available
    // TODO can't call toNumber() here, this can be a very large number
    const arr = [...new Array(totalCount.toNumber()).keys()];
    const owners = await Promise.all(arr.map(i => this.erc721.ownerOf(i).catch(() => constants.AddressZero)));
    return arr.map(i => ({
      tokenId: i,
      owner: owners[i]
    })).filter(o => o.owner !== constants.AddressZero);
  }

  /**
   * Get the number of NFTs minted
   * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
   *
   * @returns the total number of NFTs minted in this contract
   * @public
   */
  async totalCount() {
    return await this.erc721.nextTokenIdToMint();
  }

  /**
   * Get the number of NFTs of this contract currently owned by end users
   * @returns the total number of NFTs of this contract in circulation (minted & not burned)
   * @public
   */
  async totalCirculatingSupply() {
    return await this.contractWrapper.read("totalSupply", []);
  }
  detectErc721Owned() {
    if (detectContractFeature(this.contractWrapper, "ERC721Enumerable")) {
      return new Erc721Enumerable(this.erc721, this.contractWrapper);
    } else if (detectContractFeature(this.contractWrapper, "ERC721AQueryable")) {
      return new Erc721AQueryable(this.erc721, this.contractWrapper);
    }
    return undefined;
  }
}

/**
 * @internal
 */
const TieredDropPayloadSchema = /* @__PURE__ */(() => BaseSignaturePayloadInput.extend({
  tierPriority: z.array(z.string()),
  royaltyRecipient: AddressOrEnsSchema.default(constants.AddressZero),
  royaltyBps: BasisPointsSchema.default(0),
  quantity: BigNumberSchema.default(1)
}))();

class Erc721TieredDrop {
  featureName = FEATURE_NFT_TIERED_DROP.name;
  constructor(erc721, contractWrapper, storage) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }
  async getMetadataInTier(tier) {
    const tiers = await this.contractWrapper.read("getMetadataForAllTiers", []);
    const batches = tiers.find(t => t.tier === tier);
    if (!batches) {
      throw new Error("Tier not found in contract.");
    }
    const nfts = await Promise.all(batches.ranges.map((range, i) => {
      const nftsInRange = [];
      const baseUri = batches.baseURIs[i];
      for (let j = range.startIdInclusive.toNumber(); j < range.endIdNonInclusive.toNumber(); j++) {
        const uri = baseUri.endsWith("/") ? `${baseUri}${j}` : `${baseUri}/${j}`;
        const metadata = this.storage.downloadJSON(uri);
        nftsInRange.push(metadata);
      }
      return nftsInRange;
    }).flat());
    return nfts;
  }
  async getTokensInTier(tier) {
    const endIndex = await this.contractWrapper.read("getTokensInTierLen", []);
    if (endIndex.eq(0)) {
      return [];
    }
    const ranges = await this.contractWrapper.read("getTokensInTier", [tier, 0, endIndex]);
    const nfts = await Promise.all(ranges.map(range => {
      const nftsInRange = [];
      for (let i = range.startIdInclusive.toNumber(); i < range.endIdNonInclusive.toNumber(); i++) {
        nftsInRange.push(this.erc721.get(i));
      }
      return nftsInRange;
    }).flat());
    return nfts;
  }
  createBatchWithTier = /* @__PURE__ */buildTransactionFunction(async (metadatas, tier, options) => {
    // TODO: Change this to on extension
    const startFileNumber = await this.erc721.nextTokenIdToMint();
    const batch = await uploadOrExtractURIs(metadatas, this.storage, startFileNumber.toNumber(), options);
    const baseUri = getBaseUriFromBatch(batch);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "lazyMint",
      args: [batch.length, baseUri.endsWith("/") ? baseUri : `${baseUri}/`, tier, utils.toUtf8Bytes("")],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("TokensLazyMinted", receipt?.logs);
        const startingIndex = event[0].args[1];
        const endingIndex = event[0].args[2];
        const results = [];
        for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
          results.push({
            id,
            receipt,
            data: () => this.erc721.getTokenMetadata(id)
          });
        }
        return results;
      }
    });
  });
  createDelayedRevealBatchWithTier = /* @__PURE__ */buildTransactionFunction(async (placeholder, metadatas, password, tier, options) => {
    if (!password) {
      throw new Error("Password is required");
    }
    const placeholderUris = await this.storage.uploadBatch([CommonNFTInput.parse(placeholder)], {
      rewriteFileNames: {
        fileStartNumber: 0
      }
    });
    const placeholderUri = getBaseUriFromBatch(placeholderUris);
    const startFileNumber = await this.erc721.nextTokenIdToMint();
    const uris = await this.storage.uploadBatch(metadatas.map(m => CommonNFTInput.parse(m)), {
      onProgress: options?.onProgress,
      rewriteFileNames: {
        fileStartNumber: startFileNumber.toNumber()
      }
    });
    const baseUri = getBaseUriFromBatch(uris);
    const baseUriId = await this.contractWrapper.read("getBaseURICount", []);
    const chainId = await this.contractWrapper.getChainID();
    const hashedPassword = utils.solidityKeccak256(["string", "uint256", "uint256", "address"], [password, chainId, baseUriId, this.contractWrapper.address]);
    const encryptedBaseUri = await this.contractWrapper.read("encryptDecrypt", [utils.toUtf8Bytes(baseUri), hashedPassword]);
    const provenanceHash = utils.solidityKeccak256(["bytes", "bytes", "uint256"], [utils.toUtf8Bytes(baseUri), hashedPassword, chainId]);
    const data = utils.defaultAbiCoder.encode(["bytes", "bytes32"], [encryptedBaseUri, provenanceHash]);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "lazyMint",
      args: [uris.length, placeholderUri.endsWith("/") ? placeholderUri : `${placeholderUri}/`, tier, data],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("TokensLazyMinted", receipt?.logs);
        const startingIndex = event[0].args[1];
        const endingIndex = event[0].args[2];
        const results = [];
        for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
          results.push({
            id,
            receipt,
            data: () => this.erc721.getTokenMetadata(id)
          });
        }
        return results;
      }
    });
  });
  reveal = /* @__PURE__ */buildTransactionFunction(async (batchId, password) => {
    if (!password) {
      throw new Error("Password is required");
    }
    const chainId = await this.contractWrapper.getChainID();
    const key = utils.solidityKeccak256(["string", "uint256", "uint256", "address"], [password, chainId, batchId, this.contractWrapper.address]);
    // performing the reveal locally to make sure it'd succeed before sending the transaction
    try {
      const decryptedUri = await this.contractWrapper.callStatic().reveal(batchId, key);
      // basic sanity check for making sure decryptedUri is valid
      // this is optional because invalid decryption key would result in non-utf8 bytes and
      // ethers would throw when trying to decode it
      if (!decryptedUri.includes("://") || !decryptedUri.endsWith("/")) {
        throw new Error("invalid password");
      }
    } catch (e) {
      throw new Error("invalid password");
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "reveal",
      args: [batchId, key]
    });
  });
  async generate(payloadToSign) {
    const [payload] = await this.generateBatch([payloadToSign]);
    return payload;
  }
  async generateBatch(payloadsToSign) {
    const parsedPayloads = await Promise.all(payloadsToSign.map(payload => TieredDropPayloadSchema.parseAsync(payload)));
    const chainId = await this.contractWrapper.getChainID();
    const signer = this.contractWrapper.getSigner();
    invariant(signer, "No signer available");
    return await Promise.all(parsedPayloads.map(async payload => {
      const signature = await this.contractWrapper.signTypedData(signer, {
        name: "SignatureAction",
        version: "1",
        chainId,
        verifyingContract: this.contractWrapper.address
      }, {
        GenericRequest: GenericRequest
      }, await this.mapPayloadToContractStruct(payload));
      return {
        payload,
        signature: signature.toString()
      };
    }));
  }
  async verify(signedPayload) {
    const message = await this.mapPayloadToContractStruct(signedPayload.payload);
    const verification = await this.contractWrapper.read("verify", [message, signedPayload.signature]);
    return verification[0];
  }
  async claimWithSignature(signedPayload) {
    const message = await this.mapPayloadToContractStruct(signedPayload.payload);
    const normalizedTotalPrice = await normalizePriceValue(this.contractWrapper.getProvider(), signedPayload.payload.price, signedPayload.payload.currencyAddress);
    const overrides = await this.contractWrapper.getCallOverrides();
    await setErc20Allowance(this.contractWrapper, normalizedTotalPrice, signedPayload.payload.currencyAddress, overrides);
    const receipt = await this.contractWrapper.sendTransaction("claimWithSignature", [message, signedPayload.signature], overrides);
    const event = this.contractWrapper.parseLogs("TokensClaimed", receipt?.logs);
    const startingIndex = event[0].args.startTokenId;
    const endingIndex = startingIndex.add(event[0].args.quantityClaimed);
    const results = [];
    for (let id = startingIndex; id.lt(endingIndex); id = id.add(1)) {
      results.push({
        id,
        receipt,
        data: () => this.erc721.get(id)
      });
    }
    return results;
  }
  async mapPayloadToContractStruct(payload) {
    const normalizedTotalPrice = await normalizePriceValue(this.contractWrapper.getProvider(), payload.price, payload.currencyAddress);
    const data = utils.defaultAbiCoder.encode(["string[]", "address", "address", "uint256", "address", "uint256", "uint256", "address"], [payload.tierPriority, payload.to, payload.royaltyRecipient, payload.royaltyBps, payload.primarySaleRecipient, payload.quantity, normalizedTotalPrice, payload.currencyAddress]);
    return {
      uid: payload.uid,
      validityStartTimestamp: payload.mintStartTime,
      validityEndTimestamp: payload.mintEndTime,
      data
    };
  }
}

class Erc721Burnable {
  featureName = FEATURE_NFT_BURNABLE.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Burn NFTs
   *
   * @remarks Burn NFTs held by the connected wallet
   *
   * @example
   * ```javascript
   * // The token ID of the NFT you want to burn
   * const tokenId = 0;
   *
   * await contract.nft.burn.token(tokenId);
   * ```
   */
  token = /* @__PURE__ */buildTransactionFunction(async tokenId => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "burn",
      args: [tokenId]
    });
  });
}

function toWei(amount) {
  return utils.parseEther(AmountSchema.parse(amount));
}

/**
 * Claim ERC721 NFTs from a Zora Drop
 * @remarks Purchase NFTs on a Zora Drop
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.claim(tokenId, quantity);
 * ```
 */
class Erc721ClaimableZora {
  featureName = FEATURE_NFT_CLAIM_ZORA.name;
  constructor(erc721, contractWrapper) {
    this.erc721 = erc721;
    this.contractWrapper = contractWrapper;
  }

  /**
   * Claim NFT
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc721.claimTo(address, quantity);
   * const receipt = tx[0].receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to, needs to be the connected wallet address
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Not applicable
   *
   * @returns - Receipt for the transaction
   */
  to = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, quantity, options) => {
    // TODO validation on destinationAddr / options
    const signerAddress = await this.contractWrapper.getSigner()?.getAddress();
    if (destinationAddress !== signerAddress) {
      throw new Error("Zora Drop: Destination address must match connected wallet address");
    }
    if (options?.pricePerToken) {
      throw new Error("Zora Drop: Custom pricePerToken is not supported. Price is automatically calculated");
    }
    const saleDetails = await this.getSaleDetails();
    const price = saleDetails.publicSalePrice;
    const zoraFee = toWei("0.000777");
    const totalPrice = BigNumber.from(price).add(zoraFee).mul(quantity);
    const tx = Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "purchase",
      args: [quantity],
      overrides: {
        value: totalPrice
      }
    });
    tx.setParse(receipt => {
      const event = this.contractWrapper.parseLogs("Sale", receipt?.logs);
      const startingIndex = event[0].args.firstPurchasedTokenId;
      const endingIndex = startingIndex.add(quantity);
      const results = [];
      for (let id = startingIndex; id.lt(endingIndex); id = id.add(1)) {
        results.push({
          id,
          receipt,
          data: () => this.erc721.get(id)
        });
      }
      return results;
    });
    return tx;
  });
  async getSaleDetails() {
    return this.contractWrapper.read("saleDetails", []);
  }
}

class Erc721LoyaltyCard {
  featureName = FEATURE_NFT_LOYALTY_CARD.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Cancel loyalty card NFTs
   *
   * @remarks Cancel loyalty card NFTs held by the connected wallet
   *
   * @example
   * ```javascript
   * // The token ID of the loyalty card you want to cancel
   * const tokenId = 0;
   *
   * await contract.nft.loyaltyCard.cancel(tokenId);
   * ```
   */
  cancel = /* @__PURE__ */buildTransactionFunction(async tokenId => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "cancel",
      args: [tokenId]
    });
  });

  /**
   * Revoke loyalty card NFTs
   *
   * @remarks Revoke loyalty card NFTs held by some owner.
   *
   * @example
   * ```javascript
   * // The token ID of the loyalty card you want to revoke
   * const tokenId = 0;
   *
   * await contract.nft.loyaltyCard.revoke(tokenId);
   * ```
   */
  revoke = /* @__PURE__ */buildTransactionFunction(async tokenId => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "revoke",
      args: [tokenId]
    });
  });
}

class Erc721UpdatableMetadata {
  featureName = FEATURE_NFT_UPDATABLE_METADATA.name;
  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  /**
   * Update the metadata of an NFT
   *
   * @remarks Update the metadata of an NFT
   *
   * @example
   * ```javascript
   * // The token ID of the NFT whose metadata you want to update
   * const tokenId = 0;
   * // The new metadata
   * const metadata = { name: "My NFT", description: "My NFT description""}
   *
   * await contract.nft.metadata.update(tokenId, metadata);
   * ```
   */
  update = /* @__PURE__ */buildTransactionFunction(async (tokenId, metadata) => {
    const uri = await uploadOrExtractURI(metadata, this.storage);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setTokenURI",
      args: [tokenId, uri]
    });
  });
}

/**
 * Set shared metadata for ERC721 NFTs (Open Edition)
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.sharedMetadata.set(metadata);
 * ```
 */
class Erc721SharedMetadata {
  featureName = FEATURE_NFT_SHARED_METADATA.name;
  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  /**
   * Get Shared Metadata
   *
   * @remarks Get the shared metadata for the Open Edition NFTs.
   *
   * @example
   * ```javascript
   * const contract = await sdk.getContract("{{contract_address}}");
   *
   * const tx = await contract.erc721.sharedMetadata.get();
   * ```
   *
   * @returns - The shared metadata for the Open Edition NFTs.
   */
  async get() {
    const metadata = await this.contractWrapper.read("sharedMetadata", []);
    if (metadata.every(value => value === "")) {
      return undefined;
    }
    return {
      name: metadata.name,
      description: metadata.description,
      image: metadata.imageURI,
      animation_url: metadata.animationURI
    };
  }

  /**
   * Set Shared Metadata
   *
   * @remarks Set the shared metadata for the Open Edition NFTs.
   *
   * @example
   * ```javascript
   * const metadata = {
   *  name: "My NFT",
   *  description: "This is my NFT",
   *  image: ...
   *  animation_url: ...
   * };
   *
   * const contract = await sdk.getContract("{{contract_address}}");
   *
   * const tx = await contract.erc721.sharedMetadata.set(metadata);
   * ```
   *
   * @param metadata - The metadata you want to set for the shared metadata.
   *
   * @returns - Receipt for the transaction
   */
  set = /* @__PURE__ */buildTransactionFunction(async metadata => {
    const parsedMetadata = BasicNFTInput.parse(metadata);
    // cleanup description
    parsedMetadata.description = this.sanitizeJSONString(parsedMetadata.description);

    // take the input and upload image and animation if it is not a URI already
    const batch = [];
    if (isFileOrBuffer(parsedMetadata.image)) {
      batch.push(this.storage.upload(parsedMetadata.image));
    } else if (typeof parsedMetadata.image === "string") {
      batch.push(Promise.resolve(parsedMetadata.image));
    } else {
      batch.push(Promise.resolve(undefined));
    }
    if (isFileOrBuffer(parsedMetadata.animation_url)) {
      batch.push(this.storage.upload(parsedMetadata.animation_url));
    } else if (typeof parsedMetadata.animation_url === "string") {
      batch.push(Promise.resolve(parsedMetadata.animation_url));
    } else {
      batch.push(Promise.resolve(undefined));
    }
    const [imageUri, animationUri] = await Promise.all(batch);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setSharedMetadata",
      args: [{
        name: `${parsedMetadata.name || ""}`,
        description: parsedMetadata.description || "",
        imageURI: imageUri || "",
        animationURI: animationUri || ""
      }]
    });
  });
  sanitizeJSONString(val) {
    if (!val) {
      return val;
    }
    const sanitized = JSON.stringify(val);
    return sanitized.slice(1, sanitized.length - 1);
  }
}

/**
 * Enables generating dynamic ERC721 NFTs with rules and an associated signature, which can then be minted by anyone securely
 * @public
 */
class Erc721WithQuantitySignatureMintable {
  featureName = FEATURE_NFT_SIGNATURE_MINTABLE_V2.name;
  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  /**
   * Mint a dynamically generated NFT
   *
   * @remarks Mint a dynamic NFT with a previously generated signature.
   *
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `generate()` documentation
   * const signedPayload = contract.erc721.signature.generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.erc721.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
   * @param signedPayload - the previously generated payload and signature with {@link Erc721WithQuantitySignatureMintable.generate}
   * @twfeature ERC721SignatureMint
   */
  mint = /* @__PURE__ */buildTransactionFunction(async signedPayload => {
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    const overrides = await this.contractWrapper.getCallOverrides();
    const parse = receipt => {
      const t = this.contractWrapper.parseLogs("TokensMintedWithSignature", receipt.logs);
      if (t.length === 0) {
        throw new Error("No MintWithSignature event found");
      }
      const id = t[0].args.tokenIdMinted;
      return {
        id,
        receipt
      };
    };
    if (await this.isLegacyNFTContract()) {
      const message = await this.mapLegacyPayloadToContractStruct(mintRequest);
      const price = message.price;

      // TODO: Transaction Sequence Pattern
      await setErc20Allowance(this.contractWrapper, price, mintRequest.currencyAddress, overrides);
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "mintWithSignature",
        args: [message, signature],
        overrides,
        parse
      });
    } else {
      const message = await this.mapPayloadToContractStruct(mintRequest);
      const price = message.pricePerToken.mul(message.quantity);

      // TODO: Transaction Sequence Pattern
      await setErc20Allowance(this.contractWrapper, price, mintRequest.currencyAddress, overrides);
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "mintWithSignature",
        args: [message, signature],
        overrides,
        parse
      });
    }
  });

  /**
   * Mint any number of dynamically generated NFT at once
   * @remarks Mint multiple dynamic NFTs in one transaction. Note that this is only possible for free mints (cannot batch mints with a price attached to it for security reasons)
   * @param signedPayloads - the array of signed payloads to mint
   * @twfeature ERC721SignatureMint
   */
  mintBatch = /* @__PURE__ */buildTransactionFunction(async signedPayloads => {
    const isLegacyNFTContract = await this.isLegacyNFTContract();
    const contractPayloads = (await Promise.all(signedPayloads.map(s => isLegacyNFTContract ? this.mapLegacyPayloadToContractStruct(s.payload) : this.mapPayloadToContractStruct(s.payload)))).map((message, index) => {
      const s = signedPayloads[index];
      const signature = s.signature;
      const price = s.payload.price;
      if (BigNumber.from(price).gt(0)) {
        throw new Error("Can only batch free mints. For mints with a price, use regular mint()");
      }
      return {
        message,
        signature
      };
    });
    const contractEncoder = new ContractEncoder(this.contractWrapper);
    const encoded = contractPayloads.map(p => {
      if (isLegacyNFTContract) {
        return contractEncoder.encode("mintWithSignature", [p.message, p.signature]);
      } else {
        return contractEncoder.encode("mintWithSignature", [p.message, p.signature]);
      }
    });
    if (hasFunction("multicall", this.contractWrapper)) {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "multicall",
        args: [encoded],
        parse: receipt => {
          const events = this.contractWrapper.parseLogs("TokensMintedWithSignature", receipt.logs);
          if (events.length === 0) {
            throw new Error("No MintWithSignature event found");
          }
          return events.map(log => ({
            id: log.args.tokenIdMinted,
            receipt
          }));
        }
      });
    } else {
      throw new Error("Multicall not available on this contract!");
    }
  });

  /**
   * Verify that a payload is correctly signed
   * @param signedPayload - the payload to verify
   * @twfeature ERC721SignatureMint
   *
   * @example
   * ```javascript
   * const nftMetadata = {
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   metadata: nftMetadata, // The NFT to mint
   *   to: {{wallet_address}}, // Who will receive the NFT
   *   quantity: 2, // the quantity of NFTs to mint
   *   price: 0.5, // the price per NFT
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now
   *   royaltyRecipient: "0x...", // custom royalty recipient for this NFT
   *   royaltyBps: 100, // custom royalty fees for this NFT (in bps)
   *   primarySaleRecipient: "0x...", // custom sale recipient for this NFT
   * };
   *
   * const signedPayload = await contract.erc721.signature.generate(payload);
   * // Now you can verify if the signed payload is valid
   * const isValid = await contract.erc721.signature.verify(signedPayload);
   * ```
   */
  async verify(signedPayload) {
    const isLegacyNFTContract = await this.isLegacyNFTContract();
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    let message;
    let verification;
    if (isLegacyNFTContract) {
      message = await this.mapLegacyPayloadToContractStruct(mintRequest);
      verification = await this.contractWrapper.read("verify", [message, signature]);
    } else {
      message = await this.mapPayloadToContractStruct(mintRequest);
      verification = await this.contractWrapper.read("verify", [message, signature]);
    }
    return verification[0];
  }

  /**
   * Generate a signature that can be used to mint a dynamic NFT
   *
   * @remarks Takes in an NFT and some information about how it can be minted, uploads the metadata and signs it with your private key. The generated signature can then be used to mint an NFT using the exact payload and signature generated.
   *
   * @example
   * ```javascript
   * const nftMetadata = {
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   metadata: nftMetadata, // The NFT to mint
   *   to: {{wallet_address}}, // Who will receive the NFT
   *   quantity: 2, // the quantity of NFTs to mint
   *   price: 0.5, // the price per NFT
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now
   *   royaltyRecipient: "0x...", // custom royalty recipient for this NFT
   *   royaltyBps: 100, // custom royalty fees for this NFT (in bps)
   *   primarySaleRecipient: "0x...", // custom sale recipient for this NFT
   * };
   *
   * const signedPayload = await contract.erc721.signature.generate(payload);
   * // now anyone can use these to mint the NFT using `contract.erc721.signature.mint(signedPayload)`
   * ```
   * @param mintRequest - the payload to sign
   * @returns the signed payload and the corresponding signature
   * @twfeature ERC721SignatureMint
   */
  async generate(mintRequest) {
    return (await this.generateBatch([mintRequest]))[0];
  }

  /**
   * Genrate a batch of signatures that can be used to mint many dynamic NFTs.
   *
   * @remarks See {@link Erc721WithQuantitySignatureMintable.generate}
   *
   * @param payloadsToSign - the payloads to sign
   * @returns an array of payloads and signatures
   * @twfeature ERC721SignatureMint
   */
  async generateBatch(payloadsToSign) {
    const isLegacyNFTContract = await this.isLegacyNFTContract();
    const parsedRequests = await Promise.all(payloadsToSign.map(m => Signature721WithQuantityInput.parseAsync(m)));
    const metadatas = parsedRequests.map(r => r.metadata);
    const uris = await uploadOrExtractURIs(metadatas, this.storage);
    const chainId = await this.contractWrapper.getChainID();
    const signer = this.contractWrapper.getSigner();
    invariant(signer, "No signer available");
    return await Promise.all(parsedRequests.map(async (m, i) => {
      const uri = uris[i];
      const finalPayload = await Signature721WithQuantityOutput.parseAsync({
        ...m,
        uri
      });
      let signature;
      if (isLegacyNFTContract) {
        signature = await this.contractWrapper.signTypedData(signer, {
          name: "TokenERC721",
          version: "1",
          chainId,
          verifyingContract: this.contractWrapper.address
        }, {
          MintRequest: MintRequest721
        }, await this.mapLegacyPayloadToContractStruct(finalPayload));
      } else {
        signature = await this.contractWrapper.signTypedData(signer, {
          name: "SignatureMintERC721",
          version: "1",
          chainId,
          verifyingContract: await this.contractWrapper.address
        }, {
          MintRequest: MintRequest721withQuantity
        },
        // TYPEHASH
        await this.mapPayloadToContractStruct(finalPayload));
      }
      return {
        payload: finalPayload,
        signature: signature.toString()
      };
    }));
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Maps a payload to the format expected by the contract
   *
   * @internal
   *
   * @param mintRequest - The payload to map.
   * @returns - The mapped payload.
   */
  async mapPayloadToContractStruct(mintRequest) {
    const normalizedPricePerToken = await normalizePriceValue(this.contractWrapper.getProvider(), mintRequest.price, mintRequest.currencyAddress);
    return {
      to: mintRequest.to,
      royaltyRecipient: mintRequest.royaltyRecipient,
      royaltyBps: mintRequest.royaltyBps,
      primarySaleRecipient: mintRequest.primarySaleRecipient,
      uri: mintRequest.uri,
      quantity: mintRequest.quantity,
      pricePerToken: normalizedPricePerToken,
      currency: mintRequest.currencyAddress,
      validityStartTimestamp: mintRequest.mintStartTime,
      validityEndTimestamp: mintRequest.mintEndTime,
      uid: mintRequest.uid
    };
  }
  async mapLegacyPayloadToContractStruct(mintRequest) {
    const normalizedPricePerToken = await normalizePriceValue(this.contractWrapper.getProvider(), mintRequest.price, mintRequest.currencyAddress);
    return {
      to: mintRequest.to,
      price: normalizedPricePerToken,
      uri: mintRequest.uri,
      currency: mintRequest.currencyAddress,
      validityEndTimestamp: mintRequest.mintEndTime,
      validityStartTimestamp: mintRequest.mintStartTime,
      uid: mintRequest.uid,
      royaltyRecipient: mintRequest.royaltyRecipient,
      royaltyBps: mintRequest.royaltyBps,
      primarySaleRecipient: mintRequest.primarySaleRecipient
    };
  }
  async isLegacyNFTContract() {
    return detectContractFeature(this.contractWrapper, "ERC721SignatureMintV1");
  }
}

/**
 * Standard ERC721 NFT functions
 * @remarks Basic functionality for a ERC721 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.transfer(walletAddress, tokenId);
 * ```
 * @public
 */
class Erc721 {
  featureName = FEATURE_NFT.name;
  get chainId() {
    return this._chainId;
  }
  constructor(contractWrapper, storage, chainId) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.query = this.detectErc721Enumerable();
    this.mintable = this.detectErc721Mintable();
    this.burnable = this.detectErc721Burnable();
    this.lazyMintable = this.detectErc721LazyMintable();
    this.tieredDropable = this.detectErc721TieredDrop();
    this.signatureMintable = this.detectErc721SignatureMintable();
    this.claimWithConditions = this.detectErc721ClaimableWithConditions();
    this.claimCustom = this.detectErc721Claimable();
    this.claimZora = this.detectErc721ClaimableZora();
    this.erc721SharedMetadata = this.detectErc721SharedMetadata();
    this.loyaltyCard = this.detectErc721LoyaltyCard();
    this.updatableMetadata = this.detectErc721UpdatableMetadata();
    this._chainId = chainId;
  }

  /**
   * @internal
   */
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  ////// Standard ERC721 Extension //////

  /**
   * Get a single NFT
   *
   * @example
   * ```javascript
   * const tokenId = 0;
   * const nft = await contract.erc721.get(tokenId);
   * ```
   * @param tokenId - the tokenId of the NFT to retrieve
   * @returns The NFT metadata
   * @twfeature ERC721
   */
  async get(tokenId) {
    const [owner, metadata] = await Promise.all([this.ownerOf(tokenId).catch(() => constants.AddressZero), this.getTokenMetadata(tokenId).catch(() => ({
      id: tokenId.toString(),
      uri: "",
      ...FALLBACK_METADATA
    }))]);
    return {
      owner,
      metadata,
      type: "ERC721",
      supply: "1"
    };
  }

  /**
   * Get the current owner of an NFT
   *
   * @param tokenId - the tokenId of the NFT
   * @returns the address of the owner
   * @twfeature ERC721
   */
  async ownerOf(tokenId) {
    return await this.contractWrapper.read("ownerOf", [tokenId]);
  }

  /**
   * Get NFT balance of a specific wallet
   *
   * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const balance = await contract.erc721.balanceOf(walletAddress);
   * console.log(balance);
   * ```
   * @twfeature ERC721
   */
  async balanceOf(address) {
    return await this.contractWrapper.read("balanceOf", [await resolveAddress(address)]);
  }

  /**
   * Get NFT balance for the currently connected wallet
   */
  async balance() {
    return await this.balanceOf(await this.contractWrapper.getSignerAddress());
  }

  /**
   * Get whether this wallet has approved transfers from the given operator
   * @param address - the wallet address
   * @param operator - the operator address
   */
  async isApproved(address, operator) {
    const [_address, _operator] = await Promise.all([resolveAddress(address), resolveAddress(operator)]);
    return await this.contractWrapper.read("isApprovedForAll", [_address, _operator]);
  }

  /**
   * Transfer an NFT
   *
   * @remarks Transfer an NFT from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * const walletAddress = "{{wallet_address}}";
   * const tokenId = 0;
   * await contract.erc721.transfer(walletAddress, tokenId);
   * ```
   * @twfeature ERC721
   */
  transfer = /* @__PURE__ */buildTransactionFunction(async (to, tokenId) => {
    const [from, _to] = await Promise.all([this.contractWrapper.getSignerAddress(), resolveAddress(to)]);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "transferFrom(address,address,uint256)",
      args: [from, _to, tokenId]
    });
  });

  /**
   * Transfer an NFT from a specific wallet
   *
   * @remarks Transfer an NFT from the given wallet to another wallet.
   *
   * @example
   * ```javascript
   * const fromWalletAddress = "{{wallet_address}}";
   * const toWalletAddress = "{{wallet_address}}";
   * const tokenId = 0;
   * await contract.erc721.transferFrom(fromWalletAddress, toWalletAddress, tokenId);
   * ```
   * @twfeature ERC721
   */
  transferFrom = /* @__PURE__ */buildTransactionFunction(async (from, to, tokenId) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "transferFrom(address,address,uint256)",
      args: [await resolveAddress(from), await resolveAddress(to), tokenId]
    });
  });

  /**
   * Set approval for all NFTs
   * @remarks Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
   * @example
   * ```javascript
   * const operator = "{{wallet_address}}";
   * await contract.erc721.setApprovalForAll(operator, true);
   * ```
   * @param operator - the operator's address
   * @param approved - whether to approve or remove
   * @twfeature ERC721
   */
  setApprovalForAll = /* @__PURE__ */buildTransactionFunction(async (operator, approved) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setApprovalForAll",
      args: [await resolveAddress(operator), approved]
    });
  });

  /**
   * Set approval for a single NFT
   * @remarks Approve an operator for the NFT owner. Operators can call transferFrom or safeTransferFrom for the specified token.
   * @example
   * ```javascript
   * const operator = "{{wallet_address}}";
   * const tokenId = 0;
   * await contract.erc721.setApprovalForToken(operator, tokenId);
   * ```
   * @param operator - the operator's address
   * @param tokenId - the tokenId to give approval for
   *
   * @internal
   */
  setApprovalForToken = /* @__PURE__ */buildTransactionFunction(async (operator, tokenId) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "approve",
      args: [await resolveAddress(operator), tokenId]
    });
  });

  ////// ERC721 Supply Extension //////

  /**
   * Get all NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.erc721.getAll();
   * console.log(nfts);
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   * @twfeature ERC721Supply | ERC721Enumerable
   */
  async getAll(queryParams) {
    return assertEnabled(this.query, FEATURE_NFT_SUPPLY).all(queryParams);
  }

  /**
   * Get all NFT owners
   * @example
   * ```javascript
   * const owners = await contract.erc721.getAllOwners();
   * console.log(owners);
   * ```
   * @returns an array of token ids and owners
   * @twfeature ERC721Supply | ERC721Enumerable
   */
  async getAllOwners() {
    return assertEnabled(this.query, FEATURE_NFT_SUPPLY).allOwners();
  }

  /**
   * Get the total number of NFTs minted
   * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
   * @example
   * ```javascript
   * const count = await contract.erc721.totalCount();
   * console.log(count);
   * ```
   *
   * @returns the total number of NFTs minted in this contract
   * @public
   */
  async totalCount() {
    return this.nextTokenIdToMint();
  }

  /**
   * Get the total count NFTs minted in this contract
   * @twfeature ERC721Supply | ERC721Enumerable
   */
  async totalCirculatingSupply() {
    return assertEnabled(this.query, FEATURE_NFT_SUPPLY).totalCirculatingSupply();
  }

  ////// ERC721 Enumerable Extension //////

  /**
   * Get all NFTs owned by a specific wallet
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.erc721.getOwned(address);
   * console.log(nfts);
   * ```
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   * @returns The NFT metadata for all NFTs in the contract.
   * @twfeature ERC721Supply | ERC721Enumerable
   */
  async getOwned(walletAddress) {
    if (walletAddress) {
      walletAddress = await resolveAddress(walletAddress);
    }
    if (this.query?.owned) {
      return this.query.owned.all(walletAddress);
    } else {
      const address = walletAddress || (await this.contractWrapper.getSignerAddress());
      const allOwners = await this.getAllOwners();
      return Promise.all((allOwners || []).filter(i => address?.toLowerCase() === i.owner?.toLowerCase()).map(async i => await this.get(i.tokenId)));
    }
  }

  /**
   * Get all token ids of NFTs owned by a specific wallet.
   * @param walletAddress - the wallet address to query, defaults to the connected wallet
   */
  async getOwnedTokenIds(walletAddress) {
    if (walletAddress) {
      walletAddress = await resolveAddress(walletAddress);
    }
    if (this.query?.owned) {
      return this.query.owned.tokenIds(walletAddress);
    } else {
      const address = walletAddress || (await this.contractWrapper.getSignerAddress());
      const allOwners = await this.getAllOwners();
      return (allOwners || []).filter(i => address?.toLowerCase() === i.owner?.toLowerCase()).map(i => BigNumber.from(i.tokenId));
    }
  }

  ////// ERC721 Mintable Extension //////

  /**
   * Mint an NFT
   *
   * @remarks Mint an NFT to the connected wallet.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const tx = await contract.erc721.mint(metadata);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   * @twfeature ERC721Mintable
   */
  mint = /* @__PURE__ */buildTransactionFunction(async metadata => {
    return this.mintTo.prepare(await this.contractWrapper.getSignerAddress(), metadata);
  });

  /**
   * Mint an NFT to a specific wallet
   *
   * @remarks Mint a unique NFT to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const tx = await contract.erc721.mintTo(walletAddress, metadata);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   * @twfeature ERC721Mintable
   */
  mintTo = /* @__PURE__ */buildTransactionFunction(async (receiver, metadata) => {
    return assertEnabled(this.mintable, FEATURE_NFT_MINTABLE).to.prepare(receiver, metadata);
  });

  /**
   * Construct a mint transaction without executing it.
   * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param metadata - The metadata of the NFT you want to mint
   *
   * @deprecated Use `contract.erc721.mint.prepare(...args)` instead
   * @twfeature ERC721Mintable
   */
  async getMintTransaction(receiver, metadata) {
    return this.mintTo.prepare(receiver, metadata);
  }

  ////// ERC721 Batch Mintable Extension //////

  /**
   * Mint many NFTs
   *
   * @remarks Mint many unique NFTs at once to the connected wallet
   *
   * @example
   * ```javascript*
   * // Custom metadata of the NFTs you want to mint.
   * const metadatas = [{
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT #2",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/other/image.png"),
   * }];
   *
   * const tx = await contract.erc721.mintBatch(metadatas);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   * @twfeature ERC721BatchMintable
   */
  mintBatch = /* @__PURE__ */buildTransactionFunction(async metadatas => {
    return this.mintBatchTo.prepare(await this.contractWrapper.getSignerAddress(), metadatas);
  });

  /**
   * Mint many NFTs to a specific wallet
   *
   * @remarks Mint many unique NFTs at once to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFTs you want to mint.
   * const metadatas = [{
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT #2",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/other/image.png"),
   * }];
   *
   * const tx = await contract.erc721.mintBatchTo(walletAddress, metadatas);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   * @twfeature ERC721BatchMintable
   */
  mintBatchTo = /* @__PURE__ */buildTransactionFunction(async (receiver, metadatas) => {
    return assertEnabled(this.mintable?.batch, FEATURE_NFT_BATCH_MINTABLE).to.prepare(receiver, metadatas);
  });

  ////// ERC721 Burnable Extension //////

  /**
   * Burn a single NFT
   * @param tokenId - the token Id to burn
   *
   * @example
   * ```javascript
   * const result = await contract.erc721.burn(tokenId);
   * ```
   * @twfeature ERC721Burnable
   */
  burn = /* @__PURE__ */buildTransactionFunction(async tokenId => {
    return assertEnabled(this.burnable, FEATURE_NFT_BURNABLE).token.prepare(tokenId);
  });

  ////// ERC721 Loyalty Card Extension //////

  /**
   * Cancel loyalty card NFTs
   *
   * @remarks Cancel loyalty card NFTs held by the connected wallet
   *
   * @example
   * ```javascript
   * // The token ID of the loyalty card you want to cancel
   * const tokenId = 0;
   *
   * const result = await contract.erc721.cancel(tokenId);
   * ```
   * @twfeature ERC721LoyaltyCard
   */
  cancel = /* @__PURE__ */buildTransactionFunction(async tokenId => {
    return assertEnabled(this.loyaltyCard, FEATURE_NFT_LOYALTY_CARD).cancel.prepare(tokenId);
  });

  /**
   * Revoke loyalty card NFTs
   *
   * @remarks Revoke loyalty card NFTs held by some owner.
   *
   * @example
   * ```javascript
   * // The token ID of the loyalty card you want to revoke
   * const tokenId = 0;
   *
   * const result = await contract.erc721.revoke(tokenId);
   * ```
   * @twfeature ERC721LoyaltyCard
   */
  revoke = /* @__PURE__ */buildTransactionFunction(async tokenId => {
    return assertEnabled(this.loyaltyCard, FEATURE_NFT_LOYALTY_CARD).revoke.prepare(tokenId);
  });

  ////// ERC721 LazyMint Extension //////

  /**
   * Lazy mint NFTs
   *
   * @remarks Create batch allows you to create a batch of many unique NFTs in one transaction.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFTs to create
   * const metadatas = [{
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   *
   * const results = await contract.erc721.lazyMint(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   * @twfeature ERC721LazyMintable
   */
  lazyMint = /* @__PURE__ */buildTransactionFunction(async (metadatas, options) => {
    return assertEnabled(this.lazyMintable, FEATURE_NFT_LAZY_MINTABLE).lazyMint.prepare(metadatas, options);
  });

  ////// ERC721 Metadata Extension //////

  /**
   * Update the metadata of an NFT
   *
   * @remarks Update the metadata of an NFT
   *
   * @example
   * ```javascript
   * // The token ID of the NFT whose metadata you want to update
   * const tokenId = 0;
   * // The new metadata
   * const metadata = { name: "My NFT", description: "My NFT description""}
   *
   * await contract.erc721.update(tokenId, metadata);
   * ```
   * @twfeature ERC721UpdatableMetadata
   */
  update = /* @__PURE__ */buildTransactionFunction(async (tokenId, metadata) => {
    return assertEnabled(this.updatableMetadata, FEATURE_NFT_UPDATABLE_METADATA).update.prepare(tokenId, metadata);
  });

  ////// ERC721 Claimable Extension //////

  /**
   * Claim NFTs
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const quantity = 1; // how many unique NFTs you want to claim
   *
   * const tx = await contract.erc721.claim(quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * const claimedTokenId = tx.id; // the id of the NFT claimed
   * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
   * ```
   *
   * @param quantity - Quantity of the tokens you want to claim
   *
   * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC721ClaimZora
   */
  claim = /* @__PURE__ */buildTransactionFunction(async (quantity, options) => {
    return this.claimTo.prepare(await this.contractWrapper.getSignerAddress(), quantity, options);
  });

  /**
   * Claim NFTs to a specific wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 1; // how many unique NFTs you want to claim
   *
   * const tx = await contract.erc721.claimTo(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * const claimedTokenId = tx.id; // the id of the NFT claimed
   * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param options
   * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC721ClaimZora
   */
  claimTo = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, quantity, options) => {
    const claimWithConditions = this.claimWithConditions;
    const claim = this.claimCustom;
    const claimZora = this.claimZora;
    if (claimWithConditions) {
      return claimWithConditions.to.prepare(destinationAddress, quantity, options);
    }
    if (claim) {
      return claim.to.prepare(destinationAddress, quantity, options);
    }
    if (claimZora) {
      return claimZora.to.prepare(destinationAddress, quantity, options);
    }
    throw new ExtensionNotImplementedError(FEATURE_NFT_CLAIM_CUSTOM);
  });

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress
   * @param quantity
   * @param options
   *
   * @deprecated Use `contract.erc721.claim.prepare(...args)` instead
   * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1
   */
  async getClaimTransaction(destinationAddress, quantity, options) {
    const claimWithConditions = this.claimWithConditions;
    const claim = this.claimCustom;
    if (claimWithConditions) {
      return claimWithConditions.conditions.getClaimTransaction(destinationAddress, quantity, options);
    }
    if (claim) {
      return claim.getClaimTransaction(destinationAddress, quantity, options);
    }
    throw new ExtensionNotImplementedError(FEATURE_NFT_CLAIM_CUSTOM);
  }

  /**
   * Get the claimed supply
   *
   * @remarks Get the number of claimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const claimedNFTCount = await contract.totalClaimedSupply();
   * console.log(`NFTs claimed: ${claimedNFTCount}`);
   * ```
   * @returns the unclaimed supply
   * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1
   */
  async totalClaimedSupply() {
    const contract = this.contractWrapper;
    if (hasFunction("totalMinted", contract)) {
      return this.contractWrapper.read("totalMinted", []);
    }
    if (hasFunction("nextTokenIdToClaim", contract)) {
      return this.contractWrapper.read("nextTokenIdToClaim", []);
    }
    throw new Error("No function found on contract to get total claimed supply");
  }

  /**
   * Get the unclaimed supply
   *
   * @remarks Get the number of unclaimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const unclaimedNFTCount = await contract.totalUnclaimedSupply();
   * console.log(`NFTs left to claim: ${unclaimedNFTCount}`);
   * ```
   * @returns the unclaimed supply
   * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1
   */
  async totalUnclaimedSupply() {
    return (await this.nextTokenIdToMint()).sub(await this.totalClaimedSupply());
  }

  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   * await contract.erc721.claimConditions.set(claimConditions);
   * ```
   * @twfeature ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1
   */
  get claimConditions() {
    return assertEnabled(this.claimWithConditions, FEATURE_NFT_CLAIM_CONDITIONS_V2).conditions;
  }

  ////// ERC721 Tiered Drop Extension //////

  /**
   * Tiered Drop
   * @remarks Drop lazy minted NFTs using a tiered drop mechanism.
   * @twfeature ERC721TieredDrop
   */
  get tieredDrop() {
    return assertEnabled(this.tieredDropable, FEATURE_NFT_TIERED_DROP);
  }

  ////// ERC721 SignatureMint Extension //////

  /**
   * Mint with signature
   * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.erc721.signature.generate()` documentation
   * const signedPayload = await contract.erc721.signature.generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = await contract.erc721.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
   * @twfeature ERC721SignatureMintV1 | ERC721SignatureMintV2
   */
  get signature() {
    return assertEnabled(this.signatureMintable, FEATURE_NFT_SIGNATURE_MINTABLE_V2);
  }

  ////// ERC721 DelayedReveal Extension //////

  /**
   * Mint delayed reveal NFTs
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until you reveal them
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.erc721.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.erc721.revealer.reveal(batchId, "my secret password");
   * ```
   * @twfeature ERC721Revealable
   */
  get revealer() {
    return assertEnabled(this.lazyMintable?.revealer, FEATURE_NFT_REVEALABLE);
  }

  ////// ERC721 Shared Metadata Extension (Open Edition) //////

  /**
   * Set shared metadata for all NFTs
   * @remarks Set shared metadata for all NFTs in the collection. (Open Edition)
   * @example
   * ```javascript
   * // defiine the metadata
   * const metadata = {
   *  name: "Shared Metadata",
   *  description: "Every NFT in this collection will share this metadata."
   * };
   *
   *
   * const tx = contract.erc721.sharedMetadata.set(metadata);
   * ```
   * @twfeature ERC721SharedMetadata
   */
  get sharedMetadata() {
    return assertEnabled(this.erc721SharedMetadata, FEATURE_NFT_SHARED_METADATA);
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * @internal
   */
  async getTokenMetadata(tokenId) {
    const tokenUri = await this.contractWrapper.read("tokenURI", [tokenId]);
    if (!tokenUri) {
      throw new NotFoundError();
    }
    return fetchTokenMetadata(tokenId, tokenUri, this.storage);
  }

  /**
   * Return the next available token ID to mint
   * @internal
   */
  async nextTokenIdToMint() {
    if (hasFunction("nextTokenIdToMint", this.contractWrapper)) {
      let nextTokenIdToMint = await this.contractWrapper.read("nextTokenIdToMint", []);
      // handle open editions and contracts with startTokenId
      if (hasFunction("startTokenId", this.contractWrapper)) {
        nextTokenIdToMint = nextTokenIdToMint.sub(await this.contractWrapper.read("startTokenId", []));
      }
      return nextTokenIdToMint;
    } else if (hasFunction("totalSupply", this.contractWrapper)) {
      return await this.contractWrapper.read("totalSupply", []);
    } else {
      throw new Error("Contract requires either `nextTokenIdToMint` or `totalSupply` function available to determine the next token ID to mint");
    }
  }
  detectErc721Enumerable() {
    if (detectContractFeature(this.contractWrapper, "ERC721Supply") || hasFunction("nextTokenIdToMint", this.contractWrapper)) {
      return new Erc721Supply(this, this.contractWrapper);
    }
    return undefined;
  }
  detectErc721Mintable() {
    if (detectContractFeature(this.contractWrapper, "ERC721Mintable")) {
      return new Erc721Mintable(this, this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc721Burnable() {
    if (detectContractFeature(this.contractWrapper, "ERC721Burnable")) {
      return new Erc721Burnable(this.contractWrapper);
    }
    return undefined;
  }
  detectErc721LazyMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC721LazyMintable")) {
      return new Erc721LazyMintable(this, this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc721TieredDrop() {
    if (detectContractFeature(this.contractWrapper, "ERC721TieredDrop")) {
      return new Erc721TieredDrop(this, this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc721SignatureMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC721SignatureMintV1") || detectContractFeature(this.contractWrapper, "ERC721SignatureMintV2")) {
      return new Erc721WithQuantitySignatureMintable(this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc721ClaimableWithConditions() {
    if (detectContractFeature(this.contractWrapper, "ERC721ClaimConditionsV1") || detectContractFeature(this.contractWrapper, "ERC721ClaimConditionsV2") || detectContractFeature(this.contractWrapper, "ERC721ClaimPhasesV1") || detectContractFeature(this.contractWrapper, "ERC721ClaimPhasesV2")) {
      return new Erc721ClaimableWithConditions(this, this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc721Claimable() {
    if (detectContractFeature(this.contractWrapper, "ERC721ClaimCustom")) {
      return new Erc721Claimable(this, this.contractWrapper);
    }
    return undefined;
  }
  detectErc721ClaimableZora() {
    if (detectContractFeature(this.contractWrapper, "ERC721ClaimZora")) {
      return new Erc721ClaimableZora(this, this.contractWrapper);
    }
    return undefined;
  }
  detectErc721SharedMetadata() {
    if (detectContractFeature(this.contractWrapper, "ERC721SharedMetadata")) {
      return new Erc721SharedMetadata(this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc721LoyaltyCard() {
    if (detectContractFeature(this.contractWrapper, "ERC721LoyaltyCard")) {
      return new Erc721LoyaltyCard(this.contractWrapper);
    }
    return undefined;
  }
  detectErc721UpdatableMetadata() {
    if (detectContractFeature(this.contractWrapper, "ERC721UpdatableMetadata")) {
      return new Erc721UpdatableMetadata(this.contractWrapper, this.storage);
    }
    return undefined;
  }
}

/**
 * Mint Many ERC1155 NFTs at once
 * @remarks NFT batch minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.mint.batch.to(walletAddress, [nftMetadataWithSupply1, nftMetadataWithSupply2, ...]);
 * ```
 * @public
 */

class Erc1155BatchMintable {
  featureName = FEATURE_EDITION_BATCH_MINTABLE.name;
  constructor(erc1155, contractWrapper, storage) {
    this.erc1155 = erc1155;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  /**
   * Mint Many NFTs with limited supplies
   *
   * @remarks Mint many different NFTs with limited supplies to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata and supplies of your NFTs
   * const metadataWithSupply = [{
   *   supply: 50, // The number of this NFT you want to mint
   *   metadata: {
   *     name: "Cool NFT #1",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }, {
   *   supply: 100,
   *   metadata: {
   *     name: "Cool NFT #2",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }];
   *
   * const tx = await contract.edition.mint.batch.to(toAddress, metadataWithSupply);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   */
  to = /* @__PURE__ */buildTransactionFunction(async (to, metadataWithSupply) => {
    const metadatas = metadataWithSupply.map(a => a.metadata);
    const supplies = metadataWithSupply.map(a => a.supply);
    const uris = await uploadOrExtractURIs(metadatas, this.storage);
    const resolvedAddress = await resolveAddress(to);
    const contractEncoder = new ContractEncoder(this.contractWrapper);
    const encoded = await Promise.all(uris.map(async (uri, index) => contractEncoder.encode("mintTo", [resolvedAddress, constants.MaxUint256, uri, supplies[index]])));
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [encoded],
      parse: receipt => {
        const events = this.contractWrapper.parseLogs("TokensMinted", receipt.logs);
        if (events.length === 0 || events.length < metadatas.length) {
          throw new Error("TokenMinted event not found, minting failed");
        }
        return events.map(e => {
          const id = e.args.tokenIdMinted;
          return {
            id,
            receipt,
            data: () => this.erc1155.get(id)
          };
        });
      }
    });
  });
}

class Erc1155Burnable {
  featureName = FEATURE_EDITION_BURNABLE.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Burn a specified amount of a NFTs
   *
   * @remarks Burn the specified NFTs from the connected wallet
   *
   * @param tokenId - the token Id to burn
   * @param amount - amount to burn
   *
   * @example
   * ```javascript
   * // The token ID to burn NFTs of
   * const tokenId = 0;
   * // The amount of the NFT you want to burn
   * const amount = 2;
   *
   * const result = await contract.edition.burn.tokens(tokenId, amount);
   * ```
   */
  tokens = /* @__PURE__ */buildTransactionFunction(async (tokenId, amount) => {
    const account = await this.contractWrapper.getSignerAddress();
    return this.from.prepare(account, tokenId, amount);
  });

  /**
   * Burn a specified amount of a NFTs
   *
   * @remarks Burn the specified NFTs from a specified wallet
   *
   * @param account - the address to burn NFTs from
   * @param tokenId - the tokenId to burn
   * @param amount - amount to burn
   *
   * @example
   * ```javascript
   * // The address of the wallet to burn NFTS from
   * const account = "0x...";
   * // The token ID to burn NFTs of
   * const tokenId = 0;
   * // The amount of this NFT you want to burn
   * const amount = 2;
   *
   * const result = await contract.edition.burn.from(account, tokenId, amount);
   * ```
   */
  from = /* @__PURE__ */buildTransactionFunction(async (account, tokenId, amount) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "burn",
      args: [await resolveAddress(account), tokenId, amount]
    });
  });

  /**
   * Burn a batch of NFTs
   *
   * @remarks Burn the batch NFTs from the connected wallet
   *
   * @param tokenIds - the tokenIds to burn
   * @param amounts - amount of each token to burn
   *
   * @example
   * ```javascript
   * // The token IDs to burn NFTs of
   * const tokenIds = [0, 1];
   * // The amounts of each NFT you want to burn
   * const amounts = [2, 2];
   *
   * const result = await contract.edition.burn.batch(tokenIds, amounts);
   * ```
   */
  batch = /* @__PURE__ */buildTransactionFunction(async (tokenIds, amounts) => {
    const account = await this.contractWrapper.getSignerAddress();
    return this.batchFrom.prepare(account, tokenIds, amounts);
  });

  /**
   * Burn a batch of NFTs
   *
   * @remarks Burn the batch NFTs from the specified wallet
   *
   * @param account - the address to burn NFTs from
   * @param tokenIds - the tokenIds to burn
   * @param amounts - amount of each token to burn
   *
   * @example
   * ```javascript
   * // The address of the wallet to burn NFTS from
   * const account = "0x...";
   * // The token IDs to burn NFTs of
   * const tokenIds = [0, 1];
   * // The amounts of each NFT you want to burn
   * const amounts = [2, 2];
   *
   * const result = await contract.edition.burn.batchFrom(account, tokenIds, amounts);
   * ```
   */
  batchFrom = /* @__PURE__ */buildTransactionFunction(async (account, tokenIds, amounts) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "burnBatch",
      args: [await resolveAddress(account), tokenIds, amounts]
    });
  });
}

/**
 * List ERC1155 NFTs
 * @remarks Easily list all the NFTs in a ERC1155 contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const nfts = await contract.edition.query.all();
 * ```
 * @public
 */

class Erc1155Enumerable {
  featureName = FEATURE_EDITION_ENUMERABLE.name;
  constructor(erc1155, contractWrapper) {
    this.erc1155 = erc1155;
    this.contractWrapper = contractWrapper;
  }

  /**
   * Get All NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.edition.query.all();
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */
  async all(queryParams) {
    const start = BigNumber.from(queryParams?.start || 0).toNumber();
    const count = BigNumber.from(queryParams?.count || DEFAULT_QUERY_ALL_COUNT).toNumber();
    const maxId = Math.min((await this.totalCount()).toNumber(), start + count);
    return await Promise.all([...Array(maxId - start).keys()].map(i => this.erc1155.get((start + i).toString())));
  }

  /**
   * Get the number of NFTs minted
   * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
   *
   * @returns the total number of NFTs minted in this contract
   * @public
   */
  async totalCount() {
    return await this.contractWrapper.read("nextTokenIdToMint", []);
  }

  /**
   * Get the supply of token for a given tokenId.
   * @remarks This is **not** the sum of supply of all NFTs in the contract.
   *
   * @returns the total number of NFTs minted in this contract
   * @public
   */
  async totalCirculatingSupply(tokenId) {
    return await this.contractWrapper.read("totalSupply", [tokenId]);
  }

  /**
   * Get all NFTs owned by a specific wallet
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.edition.query.owned(address);
   * ```
   *
   * @returns The NFT metadata for all NFTs in the contract.
   */
  async owned(walletAddress) {
    const address = await resolveAddress(walletAddress || (await this.contractWrapper.getSignerAddress()));
    const maxId = await this.contractWrapper.read("nextTokenIdToMint", []);
    const balances = await this.contractWrapper.read("balanceOfBatch", [Array(maxId.toNumber()).fill(address), Array.from(Array(maxId.toNumber()).keys())]);
    const ownedBalances = balances.map((b, i) => {
      return {
        tokenId: i,
        balance: b
      };
    }).filter(b => b.balance.gt(0));
    return await Promise.all(ownedBalances.map(async b => {
      const editionMetadata = await this.erc1155.get(b.tokenId.toString());
      return {
        ...editionMetadata,
        owner: address,
        quantityOwned: b.balance.toString()
      };
    }));
  }
}

async function getPrebuiltInfo(address, provider) {
  try {
    const contract = new Contract(address, IThirdwebContractABI, provider);
    const [type, version] = await Promise.all([utils.toUtf8String(await contract.contractType()) // eslint-disable-next-line no-control-regex
    .replace(/\x00/g, ""), await contract.contractVersion()]);
    return {
      type,
      version
    };
  } catch (e) {
    return undefined;
  }
}

class Erc1155LazyMintable {
  featureName = FEATURE_EDITION_LAZY_MINTABLE_V2.name;

  /**
   * Delayed reveal
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until you reveal them
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.edition.drop.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.edition.drop.revealer.reveal(batchId, "my secret password");
   * ```
   */

  constructor(erc1155, contractWrapper, storage) {
    this.erc1155 = erc1155;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.revealer = this.detectErc1155Revealable();
  }

  /**
   * Create a batch of NFTs to be claimed in the future
   *
   * @remarks Create batch allows you to create a batch of many NFTs in one transaction.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFTs to create
   * const metadatas = [{
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   *
   * const results = await contract.erc1155.lazyMint(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   */
  lazyMint = /* @__PURE__ */buildTransactionFunction(async (metadatas, options) => {
    const startFileNumber = await this.erc1155.nextTokenIdToMint();
    const batch = await uploadOrExtractURIs(metadatas, this.storage, startFileNumber.toNumber(), options);
    // ensure baseUri is the same for the entire batch
    const baseUri = batch[0].substring(0, batch[0].lastIndexOf("/"));
    for (let i = 0; i < batch.length; i++) {
      const uri = batch[i].substring(0, batch[i].lastIndexOf("/"));
      if (baseUri !== uri) {
        throw new Error(`Can only create batches with the same base URI for every entry in the batch. Expected '${baseUri}' but got '${uri}'`);
      }
    }
    const parse = receipt => {
      const event = this.contractWrapper.parseLogs("TokensLazyMinted", receipt?.logs);
      const startingIndex = event[0].args.startTokenId;
      const endingIndex = event[0].args.endTokenId;
      const results = [];
      for (let id = startingIndex; id.lte(endingIndex); id = id.add(1)) {
        results.push({
          id,
          receipt,
          data: () => this.erc1155.getTokenMetadata(id)
        });
      }
      return results;
    };
    const prebuiltInfo = await getPrebuiltInfo(this.contractWrapper.address, this.contractWrapper.getProvider());
    if (this.isLegacyEditionDropContract(this.contractWrapper, prebuiltInfo)) {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "lazyMint",
        args: [batch.length, `${baseUri.endsWith("/") ? baseUri : `${baseUri}/`}`],
        parse
      });
    } else {
      // new contracts/extensions have support for delayed reveal that adds an extra parameter to lazyMint
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "lazyMint",
        args: [batch.length, `${baseUri.endsWith("/") ? baseUri : `${baseUri}/`}`, utils.toUtf8Bytes("")],
        parse
      });
    }
  });

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/
  detectErc1155Revealable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155Revealable")) {
      return new DelayedReveal(this.contractWrapper, this.storage, FEATURE_EDITION_REVEALABLE.name, () => this.erc1155.nextTokenIdToMint());
    }
    return undefined;
  }
  isLegacyEditionDropContract(contractWrapper, info) {
    return info && info.type === "DropERC1155" && info.version < 3 || false;
  }
}

/**
 * Mint ERC1155 NFTs
 * @remarks NFT minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.mint.to(walletAddress, nftMetadata);
 * ```
 * @public
 */

class Erc1155Mintable {
  featureName = FEATURE_EDITION_MINTABLE.name;

  /**
   * Batch mint Tokens to many addresses
   */

  constructor(erc1155, contractWrapper, storage) {
    this.erc1155 = erc1155;
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.batch = this.detectErc1155BatchMintable();
  }

  /**
   * Mint an NFT with a limited supply
   *
   * @remarks Mint an NFT with a limited supply to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }
   *
   * const metadataWithSupply = {
   *   metadata,
   *   supply: 1000, // The number of this NFT you want to mint
   * }
   *
   * const tx = await contract.edition.mint.to(toAddress, metadataWithSupply);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   *
   */
  to = /* @__PURE__ */buildTransactionFunction(async (to, metadataWithSupply) => {
    const tx = await this.getMintTransaction(to, metadataWithSupply);
    tx.setParse(receipt => {
      const event = this.contractWrapper.parseLogs("TransferSingle", receipt?.logs);
      if (event.length === 0) {
        throw new Error("TransferSingleEvent event not found");
      }
      const id = event[0].args.id;
      return {
        id,
        receipt,
        data: () => this.erc1155.get(id.toString())
      };
    });
    return tx;
  });

  /**
   * @deprecated Use `contract.erc1155.mint.prepare(...args)` instead
   */
  async getMintTransaction(to, metadataWithSupply) {
    const uri = await uploadOrExtractURI(metadataWithSupply.metadata, this.storage);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "mintTo",
      args: [await resolveAddress(to), constants.MaxUint256, uri, metadataWithSupply.supply]
    });
  }

  /**
   * Increase the supply of an existing NFT and mint it to a given wallet address
   *
   * @param to - the address to mint to
   * @param tokenId - the token id of the NFT to increase supply of
   * @param additionalSupply - the additional amount to mint
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   * const tokenId = 0;
   * const additionalSupply = 1000;
   *
   * const tx = await contract.edition.mint.additionalSupplyTo(toAddress, tokenId, additionalSupply);
   * ```
   */
  additionalSupplyTo = /* @__PURE__ */buildTransactionFunction(async (to, tokenId, additionalSupply) => {
    const metadata = await this.erc1155.getTokenMetadata(tokenId);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "mintTo",
      args: [await resolveAddress(to), tokenId, metadata.uri, additionalSupply],
      parse: receipt => {
        return {
          id: BigNumber.from(tokenId),
          receipt,
          data: () => this.erc1155.get(tokenId)
        };
      }
    });
  });
  detectErc1155BatchMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155BatchMintable")) {
      return new Erc1155BatchMintable(this.erc1155, this.contractWrapper, this.storage);
    }
  }
}

/**
 * @internal
 */
const AirdropAddressInput = /* @__PURE__ */(() => z.object({
  address: AddressOrEnsSchema,
  quantity: AmountSchema.default(1)
}))();

/**
 * @internal
 */
const AirdropInputSchema = /* @__PURE__ */(() => z.union([z.array(z.string()).transform(async strings => await Promise.all(strings.map(address => AirdropAddressInput.parseAsync({
  address
})))), z.array(AirdropAddressInput)]))();

/**
 * Configure and claim ERC1155 NFTs
 * @remarks Manage claim phases and claim ERC1155 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.drop.claim.to("0x...", tokenId, quantity);
 * ```
 */
class ERC1155Claimable {
  featureName = FEATURE_EDITION_CLAIM_CUSTOM.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Options for claiming the NFTs
   *
   * @deprecated Use `contract.erc1155.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, tokenId, quantity, options) {
    let overrides = {};
    if (options && options.pricePerToken) {
      overrides = await calculateClaimCost(this.contractWrapper, options.pricePerToken, quantity, options.currencyAddress, options.checkERC20Allowance);
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "claim",
      args: [await resolveAddress(destinationAddress), tokenId, quantity],
      overrides
    });
  }

  /**
   * Claim NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc1155.claimTo(address, tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Options for claiming the NFTs
   *
   * @returns - Receipt for the transaction
   */
  to = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, tokenId, quantity, options) => {
    return await this.getClaimTransaction(destinationAddress, tokenId, quantity, options);
  });
}

/**
 * Configure and claim ERC1155 NFTs
 * @remarks Manage claim phases and claim ERC1155 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc1155.claim(tokenId, quantity);
 * await contract.erc1155.claimConditions.getActive(tokenId);
 * ```
 */
class Erc1155ClaimableWithConditions {
  featureName = FEATURE_EDITION_CLAIM_CONDITIONS_V2.name;
  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    const metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
    this.conditions = new DropErc1155ClaimConditions(contractWrapper, metadata, this.storage);
  }

  /**
   * Claim NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc1155.claimTo(address, tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   *
   * @returns - Receipt for the transaction
   */
  to = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, tokenId, quantity, options) => {
    return await this.conditions.getClaimTransaction(destinationAddress, tokenId, quantity, options);
  });
}

/**
 * Enables generating dynamic ERC1155 NFTs with rules and an associated signature, which can then be minted by anyone securely
 * @public
 */
class Erc1155SignatureMintable {
  featureName = FEATURE_EDITION_SIGNATURE_MINTABLE.name;
  constructor(contractWrapper, storage, roles) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.roles = roles;
  }

  /**
   * Mint a dynamically generated NFT
   *
   * @remarks Mint a dynamic NFT with a previously generated signature.
   *
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `generate()` documentation
   * const signedPayload = contract.erc1155.signature.generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.erc1155.signature.mint(signedPayload);
   * ```
   * @param signedPayload - the previously generated payload and signature with {@link Erc1155SignatureMintable.generate}
   * @twfeature ERC1155SignatureMintable
   */
  mint = /* @__PURE__ */buildTransactionFunction(async signedPayload => {
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    const message = await this.mapPayloadToContractStruct(mintRequest);
    const overrides = await this.contractWrapper.getCallOverrides();
    // TODO: Transaction Sequence Pattern
    await setErc20Allowance(this.contractWrapper, message.pricePerToken.mul(message.quantity), mintRequest.currencyAddress, overrides);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "mintWithSignature",
      args: [message, signature],
      overrides,
      parse: receipt => {
        const t = this.contractWrapper.parseLogs("TokensMintedWithSignature", receipt.logs);
        if (t.length === 0) {
          throw new Error("No MintWithSignature event found");
        }
        const id = t[0].args.tokenIdMinted;
        return {
          id,
          receipt
        };
      }
    });
  });

  /**
   * Mint any number of dynamically generated NFT at once
   * @remarks Mint multiple dynamic NFTs in one transaction. Note that this is only possible for free mints (cannot batch mints with a price attached to it for security reasons)
   *
   * @example
   * ```javascript
   * // see how to craft a batch of payloads to sign in the `generateBatch()` documentation
   * const signedPayloads = contract.erc1155.signature.generateBatch(payloads);
   *
   * // now anyone can mint the NFT
   * const tx = contract.erc1155.signature.mintBatch(signedPayloads);
   * ```
   *
   * @param signedPayloads - the array of signed payloads to mint
   * @twfeature ERC1155SignatureMintable
   */
  mintBatch = /* @__PURE__ */buildTransactionFunction(async signedPayloads => {
    const contractPayloads = await Promise.all(signedPayloads.map(async s => {
      const message = await this.mapPayloadToContractStruct(s.payload);
      const signature = s.signature;
      const price = s.payload.price;
      if (BigNumber.from(price).gt(0)) {
        throw new Error("Can only batch free mints. For mints with a price, use regular mint()");
      }
      return {
        message,
        signature
      };
    }));
    const contractEncoder = new ContractEncoder(this.contractWrapper);
    const encoded = contractPayloads.map(p => {
      return contractEncoder.encode("mintWithSignature", [p.message, p.signature]);
    });
    if (hasFunction("multicall", this.contractWrapper)) {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "multicall",
        args: [encoded],
        parse: receipt => {
          const events = this.contractWrapper.parseLogs("TokensMintedWithSignature", receipt.logs);
          if (events.length === 0) {
            throw new Error("No MintWithSignature event found");
          }
          return events.map(log => ({
            id: log.args.tokenIdMinted,
            receipt
          }));
        }
      });
    } else {
      throw new Error("Multicall not supported on this contract!");
    }
  });

  /**
   * Verify that a payload is correctly signed
   * @param signedPayload - the payload to verify
   * @twfeature ERC1155SignatureMintable
   *
   * @example
   * ```javascript
   * const nftMetadata = {
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   metadata: nftMetadata, // The NFT to mint
   *   to: {{wallet_address}}, // Who will receive the NFT
   *   quantity: 2, // the quantity of NFTs to mint
   *   price: 0.5, // the price per NFT
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now
   *   royaltyRecipient: "0x...", // custom royalty recipient for this NFT
   *   royaltyBps: 100, // custom royalty fees for this NFT (in bps)
   *   primarySaleRecipient: "0x...", // custom sale recipient for this NFT
   * };
   *
   * const signedPayload = contract.erc1155.signature.generate(payload);
   * // Now you can verify that the payload is valid
   * const isValid = await contract.erc1155.signature.verify(signedPayload);
   * ```
   */
  async verify(signedPayload) {
    const mintRequest = signedPayload.payload;
    const signature = signedPayload.signature;
    const message = await this.mapPayloadToContractStruct(mintRequest);
    const verification = await this.contractWrapper.read("verify", [message, signature]);
    return verification[0];
  }

  /**
   * Generate a signature that can be used to mint an NFT dynamically.
   *
   * @remarks Takes in an NFT and some information about how it can be minted, uploads the metadata and signs it with your private key. The generated signature can then be used to mint an NFT using the exact payload and signature generated.
   *
   * @example
   * ```javascript
   * const nftMetadata = {
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   metadata: nftMetadata, // The NFT to mint
   *   to: {{wallet_address}}, // Who will receive the NFT
   *   quantity: 2, // the quantity of NFTs to mint
   *   price: 0.5, // the price per NFT
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now
   *   royaltyRecipient: "0x...", // custom royalty recipient for this NFT
   *   royaltyBps: 100, // custom royalty fees for this NFT (in bps)
   *   primarySaleRecipient: "0x...", // custom sale recipient for this NFT
   * };
   *
   * const signedPayload = await contract.erc1155.signature.generate(payload);
   * // now anyone can use these to mint the NFT using `contract.erc1155.signature.mint(signedPayload)`
   * ```
   * @param payloadToSign - the payload to sign
   * @returns the signed payload and the corresponding signature
   * @twfeature ERC1155SignatureMintable
   */
  async generate(payloadToSign) {
    const payload = {
      ...payloadToSign,
      tokenId: constants.MaxUint256
    };
    return this.generateFromTokenId(payload);
  }

  /**
   * Generate a signature that can be used to mint additionaly supply to an existing NFT.
   *
   * @remarks Takes in a payload with the token ID of an existing NFT, and signs it with your private key. The generated signature can then be used to mint additional supply to the NFT using the exact payload and signature generated.
   *
   * @example
   * ```javascript
   * const nftMetadata = {
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const startTime = new Date();
   * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const payload = {
   *   tokenId: 0, // Instead of metadata, we specificy the token ID of the NFT to mint supply to
   *   to: {{wallet_address}}, // Who will receive the NFT (or AddressZero for anyone)
   *   quantity: 2, // the quantity of NFTs to mint
   *   price: 0.5, // the price per NFT
   *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
   *   mintStartTime: startTime, // can mint anytime from now
   *   mintEndTime: endTime, // to 24h from now
   *   royaltyRecipient: "0x...", // custom royalty recipient for this NFT
   *   royaltyBps: 100, // custom royalty fees for this NFT (in bps)
   *   primarySaleRecipient: "0x...", // custom sale recipient for this NFT
   * };
   *
   * const signedPayload = await contract.erc1155.signature.generateFromTokenId(payload);
   * // now anyone can use these to mint the NFT using `contract.erc1155.signature.mint(signedPayload)`
   * ```
   * @param payloadToSign - the payload to sign
   * @returns the signed payload and the corresponding signature
   * @twfeature ERC1155SignatureMintable
   */
  async generateFromTokenId(payloadToSign) {
    const payloads = await this.generateBatchFromTokenIds([payloadToSign]);
    return payloads[0];
  }

  /**
   * Generate a batch of signatures that can be used to mint many new NFTs dynamically.
   *
   * @remarks See {@link Erc1155SignatureMintable.generate}
   *
   * @param payloadsToSign - the payloads to sign
   * @returns an array of payloads and signatures
   * @twfeature ERC1155SignatureMintable
   */
  async generateBatch(payloadsToSign) {
    const payloads = payloadsToSign.map(payload => ({
      ...payload,
      tokenId: constants.MaxUint256
    }));
    return this.generateBatchFromTokenIds(payloads);
  }

  /**
   * Genrate a batch of signatures that can be used to mint new NFTs or additionaly supply to existing NFTs dynamically.
   *
   * @remarks See {@link Erc1155SignatureMintable.generateFromTokenId}
   *
   * @param payloadsToSign - the payloads to sign with tokenIds specified
   * @returns an array of payloads and signatures
   * @twfeature ERC1155SignatureMintable
   */
  async generateBatchFromTokenIds(payloadsToSign) {
    await this.roles?.verify(["minter"], await this.contractWrapper.getSignerAddress());
    const parsedRequests = await Promise.all(payloadsToSign.map(m => Signature1155PayloadInputWithTokenId.parseAsync(m)));
    const metadatas = parsedRequests.map(r => r.metadata);
    const uris = await uploadOrExtractURIs(metadatas, this.storage);
    const chainId = await this.contractWrapper.getChainID();
    const signer = this.contractWrapper.getSigner();
    invariant(signer, "No signer available");
    const contractInfo = await getPrebuiltInfo(this.contractWrapper.address, this.contractWrapper.getProvider());
    const isLegacyContract = contractInfo?.type === "TokenERC1155";
    return await Promise.all(parsedRequests.map(async (m, i) => {
      const uri = uris[i];
      const finalPayload = await Signature1155PayloadOutput.parseAsync({
        ...m,
        uri
      });
      const signature = await this.contractWrapper.signTypedData(signer, {
        name: isLegacyContract ? "TokenERC1155" : "SignatureMintERC1155",
        version: "1",
        chainId,
        verifyingContract: this.contractWrapper.address
      }, {
        MintRequest: MintRequest1155
      },
      // TYPEHASH
      await this.mapPayloadToContractStruct(finalPayload));
      return {
        payload: finalPayload,
        signature: signature.toString()
      };
    }));
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Maps a payload to the format expected by the contract
   *
   * @internal
   *
   * @param mintRequest - The payload to map.
   * @returns - The mapped payload.
   */
  async mapPayloadToContractStruct(mintRequest) {
    const normalizedPricePerToken = await normalizePriceValue(this.contractWrapper.getProvider(), mintRequest.price, mintRequest.currencyAddress);
    return {
      to: mintRequest.to,
      tokenId: mintRequest.tokenId,
      uri: mintRequest.uri,
      quantity: mintRequest.quantity,
      pricePerToken: normalizedPricePerToken,
      currency: mintRequest.currencyAddress,
      validityStartTimestamp: mintRequest.mintStartTime,
      validityEndTimestamp: mintRequest.mintEndTime,
      uid: mintRequest.uid,
      royaltyRecipient: mintRequest.royaltyRecipient,
      royaltyBps: mintRequest.royaltyBps,
      primarySaleRecipient: mintRequest.primarySaleRecipient
    };
  }
}

/**
 * Standard ERC1155 NFT functions
 * @remarks Basic functionality for a ERC1155 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc1155.transfer(walletAddress, tokenId, quantity);
 * ```
 * @public
 */
class Erc1155 {
  featureName = FEATURE_EDITION.name;
  get chainId() {
    return this._chainId;
  }
  constructor(contractWrapper, storage, chainId) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.query = this.detectErc1155Enumerable();
    this.mintable = this.detectErc1155Mintable();
    this.burnable = this.detectErc1155Burnable();
    this.lazyMintable = this.detectErc1155LazyMintable();
    this.signatureMintable = this.detectErc1155SignatureMintable();
    this.claimCustom = this.detectErc1155Claimable();
    this.claimWithConditions = this.detectErc1155ClaimableWithConditions();
    this._chainId = chainId;
  }

  /**
   * @internal
   */
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  ////// Standard ERC1155 functions //////

  /**
   * Get a single NFT
   *
   * @example
   * ```javascript
   * const tokenId = 0;
   * const nft = await contract.erc1155.get(tokenId);
   * ```
   * @param tokenId - the tokenId of the NFT to retrieve
   * @returns The NFT metadata
   * @twfeature ERC1155
   */
  async get(tokenId) {
    const [supply, metadata] = await Promise.all([this.contractWrapper.read("totalSupply", [tokenId]).catch(() => BigNumber.from(0)), this.getTokenMetadata(tokenId).catch(() => ({
      id: tokenId.toString(),
      uri: "",
      ...FALLBACK_METADATA
    }))]);
    return {
      owner: constants.AddressZero,
      metadata,
      type: "ERC1155",
      supply: supply.toString()
    };
  }

  /**
   * Get the total supply of a specific token
   * @example
   * ```javascript
   * const tokenId = 0;
   * const nft = await contract.erc1155.totalSupply(tokenId);
   * ```
   * @param tokenId - The token ID to get the total supply of
   * @returns the total supply
   * @twfeature ERC1155
   */
  async totalSupply(tokenId) {
    if (detectContractFeature(this.contractWrapper, "ERC1155Supply")) {
      return await this.contractWrapper.read("totalSupply", [tokenId]);
    } else {
      throw new ExtensionNotImplementedError(FEATURE_EDITION_SUPPLY);
    }
  }

  /**
   * Get NFT balance of a specific wallet
   *
   * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
   *
   * @example
   * ```javascript
   * // Address of the wallet to check NFT balance
   * const walletAddress = "{{wallet_address}}";
   * const tokenId = 0; // Id of the NFT to check
   * const balance = await contract.erc1155.balanceOf(walletAddress, tokenId);
   * ```
   * @twfeature ERC1155
   */
  async balanceOf(address, tokenId) {
    return await this.contractWrapper.read("balanceOf", [await resolveAddress(address), tokenId]);
  }

  /**
   * Get NFT balance for the currently connected wallet
   */
  async balance(tokenId) {
    return await this.balanceOf(await this.contractWrapper.getSignerAddress(), tokenId);
  }

  /**
   * Get whether this wallet has approved transfers from the given operator
   * @param address - the wallet address
   * @param operator - the operator address
   */
  async isApproved(address, operator) {
    return await this.contractWrapper.read("isApprovedForAll", [await resolveAddress(address), await resolveAddress(operator)]);
  }

  /**
   * Transfer an NFT
   *
   * @remarks Transfer an NFT from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to send the NFT to
   * const toAddress = "{{wallet_address}}";
   * const tokenId = "0"; // The token ID of the NFT you want to send
   * const amount = 3; // How many copies of the NFTs to transfer
   * await contract.erc1155.transfer(toAddress, tokenId, amount);
   * ```
   * @twfeature ERC1155
   */
  transfer = /* @__PURE__ */buildTransactionFunction((() => {
    var _this = this;
    return async function (to, tokenId, amount) {
      let data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0];
      const from = await _this.contractWrapper.getSignerAddress();
      return Transaction.fromContractWrapper({
        contractWrapper: _this.contractWrapper,
        method: "safeTransferFrom",
        args: [from, await resolveAddress(to), tokenId, amount, data]
      });
    };
  })());

  /**
   * Transfer an NFT from a specific wallet
   *
   * @remarks Transfer an NFT from a specific wallet to another wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to send the NFT to
   * const toAddress = "{{wallet_address}}";
   * const tokenId = "0"; // The token ID of the NFT you want to send
   * const amount = 3; // How many copies of the NFTs to transfer
   * await contract.erc1155.transfer(toAddress, tokenId, amount);
   * ```
   * @twfeature ERC1155
   */
  transferFrom = /* @__PURE__ */buildTransactionFunction((() => {
    var _this2 = this;
    return async function (from, to, tokenId, amount) {
      let data = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [0];
      return Transaction.fromContractWrapper({
        contractWrapper: _this2.contractWrapper,
        method: "safeTransferFrom",
        args: [await resolveAddress(from), await resolveAddress(to), tokenId, amount, data]
      });
    };
  })());

  /**
   * Set approval for all NFTs
   * @remarks Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
   * @example
   * ```javascript
   * const operator = "{{wallet_address}}";
   * await contract.erc1155.setApprovalForAll(operator, true);
   * ```
   * @param operator - the operator's address
   * @param approved - whether to approve or remove
   * @twfeature ERC1155
   */
  setApprovalForAll = /* @__PURE__ */buildTransactionFunction(async (operator, approved) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setApprovalForAll",
      args: [operator, approved]
    });
  });

  /**
   * Airdrop multiple NFTs
   *
   * @remarks Airdrop one or multiple NFTs to the provided wallet addresses.
   *
   * @example
   * ```javascript
   * // The token ID of the NFT you want to airdrop
   * const tokenId = "0";
   * // Array of objects of addresses and quantities to airdrop NFTs to
   * const addresses = [
   *  {
   *    address: "0x...",
   *    quantity: 2,
   *  },
   *  {
   *   address: "0x...",
   *    quantity: 3,
   *  },
   * ];
   * await contract.erc1155.airdrop(tokenId, addresses);
   *
   * // You can also pass an array of addresses, it will airdrop 1 NFT per address
   * const tokenId = "0";
   * const addresses = [
   *  "0x...", "0x...", "0x...",
   * ]
   * await contract.erc1155.airdrop(tokenId, addresses);
   * ```
   * @twfeature ERC1155BatchTransferable
   */
  airdrop = /* @__PURE__ */buildTransactionFunction((() => {
    var _this3 = this;
    return async function (tokenId, addresses, fromAddress) {
      let data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0];
      const from = fromAddress ? await resolveAddress(fromAddress) : await _this3.contractWrapper.getSignerAddress();
      const balanceOf = await _this3.balanceOf(from, tokenId);
      const input = await AirdropInputSchema.parseAsync(addresses);
      const totalToAirdrop = input.reduce((prev, curr) => {
        return BigNumber.from(prev).add(BigNumber.from(curr?.quantity || 1));
      }, BigNumber.from(0));
      if (balanceOf.lt(BigNumber.from(totalToAirdrop))) {
        throw new Error(`The caller owns ${balanceOf.toString()} NFTs, but wants to airdrop ${totalToAirdrop.toString()} NFTs.`);
      }
      const contractEncoder = new ContractEncoder(_this3.contractWrapper);
      const encoded = input.map(_ref => {
        let {
          address: to,
          quantity
        } = _ref;
        return contractEncoder.encode("safeTransferFrom", [from, to, tokenId, quantity, data]);
      });
      return Transaction.fromContractWrapper({
        contractWrapper: _this3.contractWrapper,
        method: "multicall",
        args: [encoded]
      });
    };
  })());

  /**
   * Return the next available token ID to mint
   * @internal
   */
  async nextTokenIdToMint() {
    if (hasFunction("nextTokenIdToMint", this.contractWrapper)) {
      return await this.contractWrapper.read("nextTokenIdToMint", []);
    } else {
      throw new Error("Contract requires the `nextTokenIdToMint` function available to determine the next token ID to mint");
    }
  }

  ////// ERC1155 Enumerable Extension //////

  /**
   * Get all NFTs
   *
   * @remarks Get all the data associated with every NFT in this contract.
   *
   * By default, returns the first 100 NFTs, use queryParams to fetch more.
   *
   * @example
   * ```javascript
   * const nfts = await contract.erc1155.getAll();
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   * @twfeature ERC1155Enumerable
   */
  async getAll(queryParams) {
    return assertEnabled(this.query, FEATURE_EDITION_ENUMERABLE).all(queryParams);
  }

  /**
   * Get the total number of NFTs minted
   * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
   * @example
   * ```javascript
   * const count = await contract.erc1155.totalCount();
   * console.log(count);
   * ```
   * @returns the total number of NFTs minted in this contract
   * @public
   * @twfeature ERC1155Enumerable
   */
  async totalCount() {
    return assertEnabled(this.query, FEATURE_EDITION_ENUMERABLE).totalCount();
  }

  /**
   * Get the total supply of a specific NFT
   * @remarks This is **not** the sum of supply of all NFTs in the contract.
   *
   * @returns the total number of NFTs minted in this contract
   * @public
   * @twfeature ERC1155Enumerable
   */
  async totalCirculatingSupply(tokenId) {
    return assertEnabled(this.query, FEATURE_EDITION_ENUMERABLE).totalCirculatingSupply(tokenId);
  }

  /**
   * Get all NFTs owned by a specific wallet
   *
   * @remarks Get all the data associated with the NFTs owned by a specific wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to get the NFTs of
   * const address = "{{wallet_address}}";
   * const nfts = await contract.erc1155.getOwned(address);
   * ```
   *
   * @returns The NFT metadata for all NFTs in the contract.
   * @twfeature ERC1155Enumerable
   */
  async getOwned(walletAddress) {
    if (walletAddress) {
      walletAddress = await resolveAddress(walletAddress);
    }
    return assertEnabled(this.query, FEATURE_EDITION_ENUMERABLE).owned(walletAddress);
  }

  ////// ERC1155 Mintable Extension //////

  /**
   * Mint an NFT
   *
   * @remarks Mint an NFT with a limited supply to the connected wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }
   *
   * const metadataWithSupply = {
   *   metadata,
   *   supply: 1000, // The number of this NFT you want to mint
   * }
   *
   * const tx = await contract.erc1155.mint(toAddress, metadataWithSupply);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   * @twfeature ERC1155Mintable
   */
  mint = /* @__PURE__ */buildTransactionFunction(async metadataWithSupply => {
    return this.mintTo.prepare(await this.contractWrapper.getSignerAddress(), metadataWithSupply);
  });

  /**
   * Mint an NFT to a specific wallet
   *
   * @remarks Mint an NFT with a limited supply to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }
   *
   * const metadataWithSupply = {
   *   metadata,
   *   supply: 1000, // The number of this NFT you want to mint
   * }
   *
   * const tx = await contract.erc1155.mintTo(toAddress, metadataWithSupply);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   * @twfeature ERC1155Mintable
   */
  mintTo = /* @__PURE__ */buildTransactionFunction(async (receiver, metadataWithSupply) => {
    return assertEnabled(this.mintable, FEATURE_EDITION_MINTABLE).to.prepare(receiver, metadataWithSupply);
  });

  /**
   * Construct a mint transaction without executing it.
   * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param metadataWithSupply - The metadata of the NFT you want to mint
   *
   * @deprecated Use `contract.erc1155.mint.prepare(...args)` instead
   * @twfeature ERC1155Mintable
   */
  async getMintTransaction(receiver, metadataWithSupply) {
    return assertEnabled(this.mintable, FEATURE_EDITION_MINTABLE).getMintTransaction(receiver, metadataWithSupply);
  }

  /**
   * Increase the supply of an existing NFT
   * @remarks Increase the supply of an existing NFT and mint it to the connected wallet address
   * @example
   * ```javascript
   * const tokenId = 0;
   * const additionalSupply = 1000;
   * await contract.erc1155.mintAdditionalSupply(tokenId, additionalSupply);
   * ```
   *
   * @param tokenId - the token id of the NFT to increase supply of
   * @param additionalSupply - the additional amount to mint
   * @twfeature ERC1155Mintable
   */
  mintAdditionalSupply = /* @__PURE__ */buildTransactionFunction(async (tokenId, additionalSupply) => {
    return assertEnabled(this.mintable, FEATURE_EDITION_MINTABLE).additionalSupplyTo.prepare(await this.contractWrapper.getSignerAddress(), tokenId, additionalSupply);
  });

  /**
   * Increase the supply of an existing NFT and mint it to a given wallet address
   *
   * @param to - the address to mint to
   * @param tokenId - the token id of the NFT to increase supply of
   * @param additionalSupply - the additional amount to mint
   * @twfeature ERC1155Mintable
   */
  mintAdditionalSupplyTo = /* @__PURE__ */buildTransactionFunction(async (receiver, tokenId, additionalSupply) => {
    return assertEnabled(this.mintable, FEATURE_EDITION_MINTABLE).additionalSupplyTo.prepare(receiver, tokenId, additionalSupply);
  });

  ////// ERC1155 BatchMintable Extension //////

  /**
   * Mint multiple NFTs at once
   *
   * @remarks Mint multiple different NFTs with limited supplies to the connected wallet.
   *
   * @example
   * ```javascript
   * // Custom metadata and supplies of your NFTs
   * const metadataWithSupply = [{
   *   supply: 50, // The number of this NFT you want to mint
   *   metadata: {
   *     name: "Cool NFT #1",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }, {
   *   supply: 100,
   *   metadata: {
   *     name: "Cool NFT #2",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }];
   *
   * const tx = await contract.erc1155.mintBatch(metadataWithSupply);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   * @twfeature ERC1155BatchMintable
   */
  mintBatch = /* @__PURE__ */buildTransactionFunction(async metadataWithSupply => {
    return this.mintBatchTo.prepare(await this.contractWrapper.getSignerAddress(), metadataWithSupply);
  });

  /**
   * Mint multiple NFTs at once to a specific wallet
   *
   * @remarks Mint multiple different NFTs with limited supplies to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const toAddress = "{{wallet_address}}"
   *
   * // Custom metadata and supplies of your NFTs
   * const metadataWithSupply = [{
   *   supply: 50, // The number of this NFT you want to mint
   *   metadata: {
   *     name: "Cool NFT #1",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }, {
   *   supply: 100,
   *   metadata: {
   *     name: "Cool NFT #2",
   *     description: "This is a cool NFT",
   *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   *   },
   * }];
   *
   * const tx = await contract.erc1155.mintBatchTo(toAddress, metadataWithSupply);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   * @twfeature ERC1155BatchMintable
   */
  mintBatchTo = /* @__PURE__ */buildTransactionFunction(async (receiver, metadataWithSupply) => {
    return assertEnabled(this.mintable?.batch, FEATURE_EDITION_BATCH_MINTABLE).to.prepare(receiver, metadataWithSupply);
  });

  ////// ERC1155 Burnable Extension //////

  /**
   * Burn NFTs
   *
   * @remarks Burn the specified NFTs from the connected wallet
   *
   * @param tokenId - the token Id to burn
   * @param amount - amount to burn
   *
   * @example
   * ```javascript
   * // The token ID to burn NFTs of
   * const tokenId = 0;
   * // The amount of the NFT you want to burn
   * const amount = 2;
   *
   * const result = await contract.erc1155.burn(tokenId, amount);
   * ```
   * @twfeature ERC1155Burnable
   */
  burn = /* @__PURE__ */buildTransactionFunction(async (tokenId, amount) => {
    return assertEnabled(this.burnable, FEATURE_EDITION_BURNABLE).tokens.prepare(tokenId, amount);
  });

  /**
   * Burn NFTs from a specific wallet
   *
   * @remarks Burn the specified NFTs from a specified wallet
   *
   * @param account - the address to burn NFTs from
   * @param tokenId - the tokenId to burn
   * @param amount - amount to burn
   *
   * @example
   * ```javascript
   * // The address of the wallet to burn NFTS from
   * const account = "0x...";
   * // The token ID to burn NFTs of
   * const tokenId = 0;
   * // The amount of this NFT you want to burn
   * const amount = 2;
   *
   * const result = await contract.erc1155.burnFrom(account, tokenId, amount);
   * ```
   * @twfeature ERC1155Burnable
   */
  burnFrom = /* @__PURE__ */buildTransactionFunction(async (account, tokenId, amount) => {
    return assertEnabled(this.burnable, FEATURE_EDITION_BURNABLE).from.prepare(account, tokenId, amount);
  });

  /**
   * Burn a batch of NFTs
   *
   * @remarks Burn the batch NFTs from the connected wallet
   *
   * @param tokenIds - the tokenIds to burn
   * @param amounts - amount of each token to burn
   *
   * @example
   * ```javascript
   * // The token IDs to burn NFTs of
   * const tokenIds = [0, 1];
   * // The amounts of each NFT you want to burn
   * const amounts = [2, 2];
   *
   * const result = await contract.erc1155.burnBatch(tokenIds, amounts);
   * ```
   * @twfeature ERC1155Burnable
   */
  burnBatch = /* @__PURE__ */buildTransactionFunction(async (tokenIds, amounts) => {
    return assertEnabled(this.burnable, FEATURE_EDITION_BURNABLE).batch.prepare(tokenIds, amounts);
  });

  /**
   * Burn a batch of NFTs from a specific wallet
   *
   * @remarks Burn the batch NFTs from the specified wallet
   *
   * @param account - the address to burn NFTs from
   * @param tokenIds - the tokenIds to burn
   * @param amounts - amount of each token to burn
   *
   * @example
   * ```javascript
   * // The address of the wallet to burn NFTS from
   * const account = "0x...";
   * // The token IDs to burn NFTs of
   * const tokenIds = [0, 1];
   * // The amounts of each NFT you want to burn
   * const amounts = [2, 2];
   *
   * const result = await contract.erc1155.burnBatchFrom(account, tokenIds, amounts);
   * ```
   * @twfeature ERC1155Burnable
   */
  burnBatchFrom = /* @__PURE__ */buildTransactionFunction(async (account, tokenIds, amounts) => {
    return assertEnabled(this.burnable, FEATURE_EDITION_BURNABLE).batchFrom.prepare(account, tokenIds, amounts);
  });

  ////// ERC721 LazyMint Extension //////

  /**
   * Lazy mint NFTs
   *
   * @remarks Create batch allows you to create a batch of many NFTs in one transaction.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFTs to create
   * const metadatas = [{
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   *
   * const results = await contract.erc1155.lazyMint(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   * @twfeature ERC1155LazyMintableV1 | ERC1155LazyMintableV2
   */
  lazyMint = /* @__PURE__ */buildTransactionFunction(async (metadatas, options) => {
    return assertEnabled(this.lazyMintable, FEATURE_EDITION_LAZY_MINTABLE_V2).lazyMint.prepare(metadatas, options);
  });

  ////// ERC1155 Claimable Extension //////

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Optional claim verification data (e.g. price, currency, etc...)
   *
   * @deprecated Use `contract.erc1155.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, tokenId, quantity, options) {
    const claimWithConditions = this.claimWithConditions;
    const claim = this.claimCustom;
    if (claimWithConditions) {
      return claimWithConditions.conditions.getClaimTransaction(destinationAddress, tokenId, quantity, options);
    }
    if (claim) {
      return claim.getClaimTransaction(destinationAddress, tokenId, quantity, options);
    }
    throw new ExtensionNotImplementedError(FEATURE_EDITION_CLAIM_CUSTOM);
  }

  /**
   * Claim NFTs
   *
   * @remarks Let the connected wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc1155.claim(tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Optional claim verification data (e.g. price, currency, etc...)
   *
   * @returns - Receipt for the transaction
   * @twfeature ERC1155ClaimCustom | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
   */
  claim = /* @__PURE__ */buildTransactionFunction(async (tokenId, quantity, options) => {
    return this.claimTo.prepare(await this.contractWrapper.getSignerAddress(), tokenId, quantity, options);
  });

  /**
   * Claim NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.erc1155.claimTo(address, tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param options - Optional claim verification data (e.g. price, currency, etc...)
   *
   * @returns - Receipt for the transaction
   * @twfeature ERC1155ClaimCustom | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
   */
  claimTo = /* @__PURE__ */buildTransactionFunction(async (destinationAddress, tokenId, quantity, options) => {
    const claimWithConditions = this.claimWithConditions;
    const claim = this.claimCustom;
    if (claimWithConditions) {
      return claimWithConditions.to.prepare(destinationAddress, tokenId, quantity, options);
    }
    if (claim) {
      return claim.to.prepare(destinationAddress, tokenId, quantity, options);
    }
    throw new ExtensionNotImplementedError(FEATURE_EDITION_CLAIM_CUSTOM);
  });

  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   * await contract.erc1155.claimConditions.set(tokenId, claimConditions);
   * ```
   * @twfeature ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
   */
  get claimConditions() {
    return assertEnabled(this.claimWithConditions, FEATURE_EDITION_CLAIM_CONDITIONS_V2).conditions;
  }

  ////// ERC1155 SignatureMintable Extension //////

  /**
   * Mint with signature
   * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.erc1155.signature.generate()` documentation
   * const signedPayload = contract.erc1155.signature().generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.erc1155.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
   * @twfeature ERC1155SignatureMintable
   */
  get signature() {
    return assertEnabled(this.signatureMintable, FEATURE_EDITION_SIGNATURE_MINTABLE);
  }

  ////// ERC1155 DelayedReveal Extension //////

  /**
   * Mint delayed reveal NFTs
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until you reveal them
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.erc1155.drop.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.erc1155.revealer.reveal(batchId, "my secret password");
   * ```
   * @twfeature ERC1155Revealable
   */
  get revealer() {
    return assertEnabled(this.lazyMintable?.revealer, FEATURE_EDITION_REVEALABLE);
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * @internal
   * @param tokenId - the token Id to fetch
   */
  async getTokenMetadata(tokenId) {
    const tokenUri = await this.contractWrapper.read("uri", [tokenId]);
    if (!tokenUri) {
      throw new NotFoundError();
    }
    return fetchTokenMetadata(tokenId, tokenUri, this.storage);
  }
  detectErc1155Enumerable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155Enumerable")) {
      return new Erc1155Enumerable(this, this.contractWrapper);
    }
  }
  detectErc1155Mintable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155Mintable")) {
      return new Erc1155Mintable(this, this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc1155Burnable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155Burnable")) {
      return new Erc1155Burnable(this.contractWrapper);
    }
    return undefined;
  }
  detectErc1155LazyMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155LazyMintableV1") || detectContractFeature(this.contractWrapper, "ERC1155LazyMintableV2")) {
      return new Erc1155LazyMintable(this, this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc1155SignatureMintable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155SignatureMintable")) {
      return new Erc1155SignatureMintable(this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectErc1155Claimable() {
    if (detectContractFeature(this.contractWrapper, "ERC1155ClaimCustom")) {
      return new ERC1155Claimable(this.contractWrapper);
    }
    return undefined;
  }
  detectErc1155ClaimableWithConditions() {
    if (detectContractFeature(this.contractWrapper, "ERC1155ClaimConditionsV1") || detectContractFeature(this.contractWrapper, "ERC1155ClaimConditionsV2") || detectContractFeature(this.contractWrapper, "ERC1155ClaimPhasesV1") || detectContractFeature(this.contractWrapper, "ERC1155ClaimPhasesV2")) {
      return new Erc1155ClaimableWithConditions(this.contractWrapper, this.storage);
    }
    return undefined;
  }
}

function cleanCurrencyAddress(currencyAddress) {
  if (isNativeToken(currencyAddress)) {
    return NATIVE_TOKEN_ADDRESS;
  }
  return currencyAddress;
}

/**
 * This method checks if the given token is approved for the transferrerContractAddress contract.
 * This is particularly useful for contracts that need to transfer NFTs on the users' behalf
 *
 * @internal
 * @param provider - The connected provider
 * @param transferrerContractAddress - The address of the marketplace contract
 * @param assetContract - The address of the asset contract.
 * @param tokenId - The token id of the token.
 * @param owner - The address of the account that owns the token.
 * @returns - True if the transferrerContractAddress is approved on the token, false otherwise.
 */
async function isTokenApprovedForTransfer(provider, transferrerContractAddress, assetContract, tokenId, owner) {
  try {
    const erc165 = new Contract(assetContract, ERC165Abi, provider);
    const isERC721 = await erc165.supportsInterface(InterfaceId_IERC721);
    const isERC1155 = await erc165.supportsInterface(InterfaceId_IERC1155);
    if (isERC721) {
      const asset = new Contract(assetContract, Erc721Abi, provider);
      const approved = await asset.isApprovedForAll(owner, transferrerContractAddress);
      if (approved) {
        return true;
      }

      // Handle reverts in case of non-existent tokens
      let approvedAddress;
      try {
        approvedAddress = await asset.getApproved(tokenId);
      } catch (e) {}
      return approvedAddress?.toLowerCase() === transferrerContractAddress.toLowerCase();
    } else if (isERC1155) {
      const asset = new Contract(assetContract, Erc1155Abi, provider);
      return await asset.isApprovedForAll(owner, transferrerContractAddress);
    } else {
      console.error("Contract does not implement ERC 1155 or ERC 721.");
      return false;
    }
  } catch (err) {
    console.error("Failed to check if token is approved", err);
    return false;
  }
}

/**
 * Checks if the marketplace is approved to make transfers on the assetContract
 * If not, it tries to set the approval.
 * @param contractWrapper
 * @param marketplaceAddress
 * @param assetContract
 * @param tokenId
 * @param from
 */
async function handleTokenApproval(contractWrapper, marketplaceAddress, assetContract, tokenId, from) {
  const erc165 = new ContractWrapper(contractWrapper.getSignerOrProvider(), assetContract, ERC165Abi, contractWrapper.options, contractWrapper.storage);
  const isERC721 = await erc165.read("supportsInterface", [InterfaceId_IERC721]);
  const isERC1155 = await erc165.read("supportsInterface", [InterfaceId_IERC1155]);
  // check for token approval
  if (isERC721) {
    const asset = new ContractWrapper(contractWrapper.getSignerOrProvider(), assetContract, Erc721Abi, contractWrapper.options, contractWrapper.storage);
    const approved = await asset.read("isApprovedForAll", [from, marketplaceAddress]);
    if (!approved) {
      const isTokenApproved = (await asset.read("getApproved", [tokenId])).toLowerCase() === marketplaceAddress.toLowerCase();
      if (!isTokenApproved) {
        await asset.sendTransaction("setApprovalForAll", [marketplaceAddress, true]);
      }
    }
  } else if (isERC1155) {
    const asset = new ContractWrapper(contractWrapper.getSignerOrProvider(), assetContract, Erc1155Abi, contractWrapper.options, contractWrapper.storage);
    const approved = await asset.read("isApprovedForAll", [from, marketplaceAddress]);
    if (!approved) {
      await asset.sendTransaction("setApprovalForAll", [marketplaceAddress, true]);
    }
  } else {
    throw Error("Contract must implement ERC 1155 or ERC 721.");
  }
}

/**
 * Used to verify fields in new listing.
 * @internal
 */
// TODO this should be done in zod
function validateNewListingParam(param) {
  invariant(param.assetContractAddress !== undefined && param.assetContractAddress !== null, "Asset contract address is required");
  invariant(param.buyoutPricePerToken !== undefined && param.buyoutPricePerToken !== null, "Buyout price is required");
  invariant(param.listingDurationInSeconds !== undefined && param.listingDurationInSeconds !== null, "Listing duration is required");
  invariant(param.startTimestamp !== undefined && param.startTimestamp !== null, "Start time is required");
  invariant(param.tokenId !== undefined && param.tokenId !== null, "Token ID is required");
  invariant(param.quantity !== undefined && param.quantity !== null, "Quantity is required");
  switch (param.type) {
    case "NewAuctionListing":
      {
        invariant(param.reservePricePerToken !== undefined && param.reservePricePerToken !== null, "Reserve price is required");
      }
  }
}

/**
 * Maps a contract offer to the strict interface
 *
 * @internal
 * @param offer
 * @returns - An `Offer` object
 */
async function mapOffer(provider, listingId, offer) {
  return {
    quantity: offer.quantityDesired,
    pricePerToken: offer.pricePerToken,
    currencyContractAddress: offer.currency,
    buyerAddress: offer.offeror,
    quantityDesired: offer.quantityWanted,
    currencyValue: await fetchCurrencyValue(provider, offer.currency, offer.quantityWanted.mul(offer.pricePerToken)),
    listingId
  };
}
function isWinningBid(winningPrice, newBidPrice, bidBuffer) {
  bidBuffer = BigNumber.from(bidBuffer);
  winningPrice = BigNumber.from(winningPrice);
  newBidPrice = BigNumber.from(newBidPrice);
  if (winningPrice.eq(BigNumber.from(0))) {
    return false;
  }
  const buffer = newBidPrice.sub(winningPrice).mul(MAX_BPS).div(winningPrice);
  return buffer.gte(bidBuffer);
}
async function getAllInBatches(start, end, fn) {
  const batches = [];
  while (end - start > DEFAULT_QUERY_ALL_COUNT) {
    batches.push(fn(start, start + DEFAULT_QUERY_ALL_COUNT - 1));
    start += DEFAULT_QUERY_ALL_COUNT;
  }
  batches.push(fn(start, end - 1));
  return await Promise.all(batches);
}

/**
 * Listen to Contract events in real time
 * @public
 */
class ContractEvents {
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Subscribe to transactions in this contract.
   * @remarks Will emit an "event" object containing the transaction status ('submitted' and 'completed') and hash
   * @example
   * ```javascript
   * contract.events.addTransactionListener((event) => {
   *   console.log(event);
   * }
   * ```
   * @param listener - the callback function that will be called on every transaction
   * @public
   */
  addTransactionListener(listener) {
    this.contractWrapper.addListener(EventType.Transaction, listener);
  }

  /**
   * Remove a transaction listener
   * @remarks Remove a listener that was added with addTransactionListener
   * @example
   * ```javascript
   * contract.events.removeTransactionListener((event) => {
   *  console.log(event);
   * }
   * ```
   * @param listener - the callback function to remove
   * @public
   */
  removeTransactionListener(listener) {
    this.contractWrapper.off(EventType.Transaction, listener);
  }

  /**
   * Subscribe to contract events
   * @remarks You can add a listener for any contract event to run a function when
   * the event is emitted. For example, if you wanted to listen for a "TokensMinted" event,
   * you could do the following:
   * @example
   * ```javascript
   * contract.events.addEventListener("TokensMinted", (event) => {
   *   console.log(event);
   * });
   * ```
   * @public
   * @param eventName - the event name as defined in the contract
   * @param listener - the callback function that will be called on every new event
   * @returns a function to un-subscribe from the event
   */
  addEventListener(
  // eslint-disable-next-line @typescript-eslint/ban-types
  eventName, listener) {
    // validates event, throws error if not found
    const event = this.contractWrapper.readContract.interface.getEvent(eventName);
    const address = this.contractWrapper.address;
    const filter = {
      address,
      topics: [this.contractWrapper.readContract.interface.getEventTopic(event)]
    };
    const wrappedListener = log => {
      const parsedLog = this.contractWrapper.readContract.interface.parseLog(log);
      listener(this.toContractEvent(parsedLog.eventFragment, parsedLog.args, log));
    };
    this.contractWrapper.getProvider().on(filter, wrappedListener);
    return () => {
      this.contractWrapper.getProvider().off(filter, wrappedListener);
    };
  }

  /**
   * Listen to all events emitted from this contract
   *
   * @example
   * ```javascript
   * contract.events.listenToAllEvents((event) => {
   *   console.log(event.eventName) // the name of the emitted event
   *   console.log(event.data) // event payload
   * }
   * ```
   * @public
   * @param listener - the callback function that will be called on every new event
   * @returns A function that can be called to stop listening to events
   */
  listenToAllEvents(listener) {
    const address = this.contractWrapper.address;
    const filter = {
      address
    };
    const wrappedListener = log => {
      try {
        const parsedLog = this.contractWrapper.readContract.interface.parseLog(log);
        listener(this.toContractEvent(parsedLog.eventFragment, parsedLog.args, log));
      } catch (e) {
        console.error("Could not parse event:", log, e);
      }
    };
    this.contractWrapper.getProvider().on(filter, wrappedListener);
    return () => {
      this.contractWrapper.getProvider().off(filter, wrappedListener);
    };
  }

  /**
   * Remove an event listener from this contract
   * @remarks Remove a listener that was added with addEventListener
   * @example
   * ```javascript
   * contract.events.removeEventListener("TokensMinted", (event) => {
   *   console.log(event);
   * });
   * ```
   * @public
   * @param eventName - the event name as defined in the contract
   * @param listener - the listener to unregister
   */
  removeEventListener(
  // eslint-disable-next-line @typescript-eslint/ban-types
  eventName, listener) {
    // validates event, throws error if not found
    const event = this.contractWrapper.readContract.interface.getEvent(eventName);
    this.contractWrapper.readContract.off(event.name, listener);
  }

  /**
   * Remove all listeners on this contract
   * @remarks Remove all listeners from a contract
   * @example
   * ```javascript
   * contract.events.removeAllListeners();
   * ```
   * @public
   */
  removeAllListeners() {
    this.contractWrapper.readContract.removeAllListeners();
    const address = this.contractWrapper.address;
    const filter = {
      address
    };
    this.contractWrapper.getProvider().removeAllListeners(filter);
  }

  /**
   * Get All Events
   * @remarks Get a list of all the events emitted from this contract during the specified time period
   * @example
   * ```javascript
   * // Optionally pass in filters to limit the blocks from which events are retrieved
   * const filters = {
   *   fromBlock: 0,
   *   toBlock: 1000000,
   * }
   * const events = await contract.events.getAllEvents(filters);
   * console.log(events[0].eventName);
   * console.log(events[0].data);
   * ```
   *
   * @param filters - Specify the from and to block numbers to get events for, defaults to all blocks
   * @returns The event objects of the events emitted with event names and data for each event
   */
  async getAllEvents() {
    let filters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      fromBlock: 0,
      toBlock: "latest",
      order: "desc"
    };
    const events = await this.contractWrapper.readContract.queryFilter({}, filters.fromBlock, filters.toBlock);
    const orderedEvents = events.sort((a, b) => {
      return filters.order === "desc" ? b.blockNumber - a.blockNumber : a.blockNumber - b.blockNumber;
    });
    return this.parseEvents(orderedEvents);
  }

  /**
   * Get Events
   * @remarks Get a list of the events of a specific type emitted from this contract during the specified time period
   * @example
   * ```javascript
   * // The name of the event to get logs for
   * const eventName = "Transfer";
   *
   * // Optionally pass in options to limit the blocks from which events are retrieved
   * const options = {
   *   fromBlock: 0,
   *   toBlock: 1000000, // can also pass "latest"
   *   order: "desc",
   *   // Configure event filters (filter on indexed event parameters)
   *   filters: {
   *     from: "0x...",
   *     to: "0x..."
   *   }
   * };
   *
   * const events = await contract.events.getEvents(eventName, options);
   * console.log(events[0].eventName);
   * console.log(events[0].data);
   * ```
   *
   * @param eventName - The name of the event to get logs for
   * @param options - Specify the from and to block numbers to get events for, defaults to all blocks. @see EventQueryOptions
   * @returns The requested event objects with event data
   */
  async getEvents(eventName) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      fromBlock: 0,
      toBlock: "latest",
      order: "desc"
    };
    const eventInterface = this.contractWrapper.readContract.interface.getEvent(eventName);
    const args = options.filters ? eventInterface.inputs.map(e => options.filters[e.name]) : [];
    const filter = this.contractWrapper.readContract.filters[eventInterface.name](...args);
    const events = await this.contractWrapper.readContract.queryFilter(filter, options.fromBlock, options.toBlock);
    const orderedEvents = events.sort((a, b) => {
      return options.order === "desc" ? b.blockNumber - a.blockNumber : a.blockNumber - b.blockNumber;
    });
    return this.parseEvents(orderedEvents);
  }
  parseEvents(events) {
    return events.map(e => {
      const transaction = Object.fromEntries(Object.entries(e).filter(a => typeof a[1] !== "function" && a[0] !== "args"));
      if (e.args) {
        const entries = Object.entries(e.args);
        const args = entries.slice(entries.length / 2, entries.length);
        const data = {};
        for (const [key, value] of args) {
          data[key] = value;
        }
        return {
          eventName: e.event || "",
          data: data,
          transaction
        };
      }
      return {
        eventName: e.event || "",
        data: {},
        transaction
      };
    });
  }
  toContractEvent(event, args, rawLog) {
    const transaction = Object.fromEntries(Object.entries(rawLog).filter(a => typeof a[1] !== "function" && a[0] !== "args"));
    const results = {};
    event.inputs.forEach((param, index) => {
      if (Array.isArray(args[index])) {
        const components = param.components;
        if (components) {
          const arr = args[index];
          if (param.type === "tuple[]") {
            // tuple[]
            const objArray = [];
            for (let i = 0; i < arr.length; i++) {
              const tuple = arr[i];
              const obj = {};
              for (let j = 0; j < components.length; j++) {
                const name = components[j].name;
                obj[name] = tuple[j];
              }
              objArray.push(obj);
            }
            results[param.name] = objArray;
          } else {
            // simple tuple
            const obj = {};
            for (let i = 0; i < components.length; i++) {
              const name = components[i].name;
              obj[name] = arr[i];
            }
            results[param.name] = obj;
          }
        }
      } else {
        results[param.name] = args[index];
      }
    });
    return {
      eventName: event.name,
      data: results,
      transaction
    };
  }
}

/**
 * @internal
 */
const DirectListingInputParamsSchema = /* @__PURE__ */(() => z.object({
  /**
   * The address of the asset being listed.
   */
  assetContractAddress: AddressOrEnsSchema,
  /**
   * The ID of the token to list.
   */
  tokenId: BigNumberishSchema,
  /**
   * The quantity of tokens to include in the listing.
   *
   * For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).
   */
  quantity: BigNumberishSchema.default(1),
  /**
   * The address of the currency to accept for the listing.
   */
  currencyContractAddress: AddressOrEnsSchema.default(NATIVE_TOKEN_ADDRESS),
  /**
   * The price to pay per unit of NFTs listed.
   */
  pricePerToken: AmountSchema,
  /**
   * The start time of the listing.
   */
  startTimestamp: RawDateSchema.default(new Date()),
  /**
   * The end time of the listing.
   */
  endTimestamp: EndDateSchema,
  /**
   * Whether the listing is reserved to be bought from a specific set of buyers.
   */
  isReservedListing: z.boolean().default(false)
}))();

/**
 * @public
 */

/**
 * Allows overriding transaction behavior for this contract
 * @public
 */
class ContractInterceptor {
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * The next transaction executed will add/replace any overrides passed via the passed in hook.
   * @remarks Overridden values will be applied to the next transaction executed.
   * @example
   * ```javascript
   * contract.interceptor.overrideNextTransaction(() => ({
   *   gasLimit: 3000000,
   * }));
   * ```
   * @param hook - the hook to add or replace any CallOverrides (gas limit, gas price, nonce, from, value, etc...)
   * @public
   */
  overrideNextTransaction(hook) {
    this.contractWrapper.withTransactionOverride(hook);
  }
}

/**
 * Estimates the gas cost of Contract calls
 * @public
 */
class GasCostEstimator {
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Estimates the cost of gas in native token of the current chain
   * Pass in the same parameters as the contract's function.
   * @remarks Estimate the cost of gas in native token of the current chain
   * @example
   * ```javascript
   * const costOfClaim = await nftDrop?.estimator.gasCostOf("claim", [
   *   "0x...", // receiver
   *   1, // quantity
   *   "0x...", // currency
   *   1, // price per token
   *   [], // proofs
   *   1, // proof max quantity per transaction
   * ]);
   * ```
   * @returns the estimated price in native currency (ETH, MATIC, etc) of calling this function
   * @public
   */
  async gasCostOf(
  // eslint-disable-next-line @typescript-eslint/ban-types
  fn, args) {
    const [price, gasUnits] = await Promise.all([this.contractWrapper.getProvider().getGasPrice(), this.contractWrapper.estimateGas(fn, args)]);
    return utils.formatEther(gasUnits.mul(price));
  }

  /**
   * Estimates the gas limit of a transaction
   * Pass in the same parameters as the contract's function.
   * @remarks Estimates the gas limit of a transaction
   * @example
   * ```javascript
   * const gasLimitOfClaim = await nftDrop?.estimator.gasLimitOf("claim", [
   *   "0x...", // receiver
   *   1, // quantity
   *   "0x...", // currency
   *   1, // price per token
   *   [], // proofs
   *   1, // proof max quantity per transaction
   * ]);
   * ```
   * @returns the estimated gas limit of the transaction
   * @public
   */
  async gasLimitOf(
  // eslint-disable-next-line @typescript-eslint/ban-types
  fn, args) {
    return this.contractWrapper.estimateGas(fn, args);
  }

  /**
   * Returns the current gas price in gwei
   * @remarks Get the current gas price in gwei
   * @example
   * ```javascript
   * const gasCostInGwei = await contract.estimator.currentGasPriceInGwei();
   * ```
   * @returns the current gas price in gwei
   * @public
   */
  async currentGasPriceInGwei() {
    const price = await this.contractWrapper.getProvider().getGasPrice();
    return utils.formatUnits(price, "gwei");
  }
}

/**
 * Handles direct listings
 * @public
 */
class MarketplaceV3DirectListings {
  featureName = FEATURE_DIRECT_LISTINGS.name;

  // utilities

  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.events = new ContractEvents(this.contractWrapper);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the total number of direct listings
   *
   * @returns Returns the total number of direct listings created.
   * @public
   *
   * @example
   * ```javascript
   * const totalListings = await contract.directListings.getTotalCount();
   * ```
   * @twfeature DirectListings
   */
  async getTotalCount() {
    return await this.contractWrapper.read("totalListings", []);
  }

  /**
   * Get all direct listings
   *
   * @example
   * ```javascript
   * const listings = await contract.directListings.getAll();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns the Direct listing object array
   * @twfeature DirectListings
   */
  async getAll(filter) {
    const totalListings = await this.getTotalCount();
    const start = BigNumber.from(filter?.start || 0).toNumber();
    const end = totalListings.toNumber();
    if (end === 0) {
      throw new Error(`No listings exist on the contract.`);
    }
    let rawListings = [];
    const batches = await getAllInBatches(start, end, (startId, endId) => this.contractWrapper.read("getAllListings", [startId, endId]));
    rawListings = batches.flat();
    const filteredListings = await this.applyFilter(rawListings, filter);
    return await Promise.all(filteredListings.map(listing => this.mapListing(listing)));
  }

  /**
   * Get all valid direct listings
   *
   * @remarks A valid listing is where the listing is active, and the creator still owns & has approved Marketplace to transfer the listed NFTs.
   *
   * @example
   * ```javascript
   * const listings = await contract.directListings.getAllValid();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns the Direct listing object array
   * @twfeature DirectListings
   */
  async getAllValid(filter) {
    const totalListings = await this.getTotalCount();
    const start = BigNumber.from(filter?.start || 0).toNumber();
    const end = totalListings.toNumber();
    if (end === 0) {
      throw new Error(`No listings exist on the contract.`);
    }
    let rawListings = [];
    const batches = await getAllInBatches(start, end, (startId, endId) => this.contractWrapper.read("getAllValidListings", [startId, endId]));
    rawListings = batches.flat();
    const filteredListings = await this.applyFilter(rawListings, filter);
    return await Promise.all(filteredListings.map(listing => this.mapListing(listing)));
  }

  /**
   * Get a single direct listing
   *
   * @example
   * ```javascript
   * const listingId = 0;
   * const listing = await contract.directListings.getListing(listingId);
   * ```
   *
   * @param listingId - the listing id
   * @returns the Direct listing object
   *
   * @example
   * ```javascript
   * const listingId = 0;
   * const listing = await contract.directListings.getListing(listingId);
   * ```
   * @twfeature DirectListings
   */
  async getListing(listingId) {
    const listing = await this.contractWrapper.read("getListing", [listingId]);
    return await this.mapListing(listing);
  }

  /**
   * Check if a buyer is approved for a specific direct listing
   *
   * @example
   * ```javascript
   * const listingId = 0;
   * const isBuyerApproved = await contract.directListings.isBuyerApprovedForListing(listingId, "{{wallet_address}}");
   *
   * @param listingId - the listing id
   * @param buyer - buyer address
   * @twfeature DirectListings
   */
  async isBuyerApprovedForListing(listingId, buyer) {
    const listing = await this.validateListing(BigNumber.from(listingId));
    if (!listing.isReservedListing) {
      throw new Error(`Listing ${listingId} is not a reserved listing.`);
    }
    return await this.contractWrapper.read("isBuyerApprovedForListing", [listingId, await resolveAddress(buyer)]);
  }

  /**
   * Check if a currency is approved for a specific direct listing
   *
   * @example
   * ```javascript
   * const listingId = 0;
   * const currencyContractAddress = '0x1234';
   * const isApproved = await contract.directListings.isCurrencyApprovedForListing(listingId, currencyContractAddress);
   * ```
   *
   * @param listingId - the listing id
   * @param currency - currency address
   * @twfeature DirectListings
   */
  async isCurrencyApprovedForListing(listingId, currency) {
    await this.validateListing(BigNumber.from(listingId));
    return await this.contractWrapper.read("isCurrencyApprovedForListing", [listingId, await resolveAddress(currency)]);
  }

  /**
   * Check price per token for an approved currency
   *
   * @example
   * ```javascript
   * const listingId = 0;
   * const currencyContractAddress = '0x1234';
   * const price = await contract.directListings.currencyPriceForListing(listingId, currencyContractAddress);
   * ```
   *
   * @param listingId - the listing id
   * @param currencyContractAddress - currency contract address
   * @twfeature DirectListings
   */
  async currencyPriceForListing(listingId, currencyContractAddress) {
    const listing = await this.validateListing(BigNumber.from(listingId));
    const resolvedCurrencyAddress = await resolveAddress(currencyContractAddress);
    if (resolvedCurrencyAddress === listing.currencyContractAddress) {
      return listing.pricePerToken;
    }
    const isApprovedCurrency = await this.isCurrencyApprovedForListing(listingId, resolvedCurrencyAddress);
    if (!isApprovedCurrency) {
      throw new Error(`Currency ${resolvedCurrencyAddress} is not approved for Listing ${listingId}.`);
    }
    return await this.contractWrapper.read("currencyPriceForListing", [listingId, resolvedCurrencyAddress]);
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create new direct listing
   *
   * @remarks Create a new listing on the marketplace where people can buy an asset directly.
   *
   * @example
   * ```javascript
   * // Data of the listing you want to create
   * const listing = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // The price to pay per unit of NFTs listed.
   *   pricePerToken: 1.5,
   *   // when should the listing open up for offers
   *   startTimestamp: new Date(Date.now()),
   *   // how long the listing will be open for
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   *   // Whether the listing is reserved for a specific set of buyers.
   *   isReservedListing: false
   * }
   *
   * const tx = await contract.directListings.createListing(listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created listing
   * ```
   * @twfeature DirectListings
   */
  createListing = /* @__PURE__ */buildTransactionFunction(async listing => {
    const parsedListing = await DirectListingInputParamsSchema.parseAsync(listing);
    await handleTokenApproval(this.contractWrapper, this.getAddress(), parsedListing.assetContractAddress, parsedListing.tokenId, await this.contractWrapper.getSignerAddress());
    const normalizedPricePerToken = await normalizePriceValue(this.contractWrapper.getProvider(), parsedListing.pricePerToken, parsedListing.currencyContractAddress);
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    if (parsedListing.startTimestamp.lt(blockTime)) {
      parsedListing.startTimestamp = BigNumber.from(blockTime);
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "createListing",
      args: [{
        assetContract: parsedListing.assetContractAddress,
        tokenId: parsedListing.tokenId,
        quantity: parsedListing.quantity,
        currency: cleanCurrencyAddress(parsedListing.currencyContractAddress),
        pricePerToken: normalizedPricePerToken,
        startTimestamp: parsedListing.startTimestamp,
        endTimestamp: parsedListing.endTimestamp,
        reserved: parsedListing.isReservedListing
      }],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("NewListing", receipt?.logs);
        return {
          id: event[0].args.listingId,
          receipt
        };
      }
    });
  });

  /**
   * Create a batch of new listings
   *
   * @remarks Create a batch of new listings on the marketplace
   *
   * @example
   * ```javascript
   * const listings = [...];
   * const tx = await contract.directListings.createListingsBatch(listings);
   * ```
   */
  createListingsBatch = /* @__PURE__ */buildTransactionFunction(async listings => {
    const data = await Promise.all(listings.map(async listing => {
      const tx = await this.createListing.prepare(listing);
      return tx.encode();
    }));
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [data],
      parse: receipt => {
        const events = this.contractWrapper.parseLogs("NewListing", receipt?.logs);
        return events.map(event => {
          return {
            id: event.args.listingId,
            receipt
          };
        });
      }
    });
  });

  /**
   * Update a direct listing
   *
   * @param listing - the new listing information
   *
   * @example
   * ```javascript
   * // Data of the listing you want to update
   *
   * const listingId = 0; // ID of the listing you want to update
   *
   * const listing = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...", // should be same as original listing
   *   // token ID of the asset you want to list
   *   tokenId: "0", // should be same as original listing
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // The price to pay per unit of NFTs listed.
   *   pricePerToken: 1.5,
   *   // when should the listing open up for offers
   *   startTimestamp: new Date(Date.now()), // can't change this if listing already active
   *   // how long the listing will be open for
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   *   // Whether the listing is reserved for a specific set of buyers.
   *   isReservedListing: false
   * }
   *
   * const tx = await contract.directListings.updateListing(listingId, listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created listing
   * ```
   * @twfeature DirectListings
   */
  updateListing = /* @__PURE__ */buildTransactionFunction(async (listingId, listing) => {
    const parsedListing = await DirectListingInputParamsSchema.parseAsync(listing);
    await handleTokenApproval(this.contractWrapper, this.getAddress(), parsedListing.assetContractAddress, parsedListing.tokenId, await this.contractWrapper.getSignerAddress());
    const normalizedPricePerToken = await normalizePriceValue(this.contractWrapper.getProvider(), parsedListing.pricePerToken, parsedListing.currencyContractAddress);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "updateListing",
      args: [listingId, {
        assetContract: parsedListing.assetContractAddress,
        tokenId: parsedListing.tokenId,
        quantity: parsedListing.quantity,
        currency: cleanCurrencyAddress(parsedListing.currencyContractAddress),
        pricePerToken: normalizedPricePerToken,
        startTimestamp: parsedListing.startTimestamp,
        endTimestamp: parsedListing.endTimestamp,
        reserved: parsedListing.isReservedListing
      }],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("UpdatedListing", receipt?.logs);
        return {
          id: event[0].args.listingId,
          receipt
        };
      }
    });
  });

  /**
   * Cancel Direct Listing
   *
   * @remarks Cancel a direct listing on the marketplace
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want to cancel
   * const listingId = 0;
   *
   * await contract.directListings.cancelListing(listingId);
   * ```
   * @twfeature DirectListings
   */
  cancelListing = /* @__PURE__ */buildTransactionFunction(async listingId => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "cancelListing",
      args: [listingId]
    });
  });

  /**
   * Buy direct listing for a specific wallet
   *
   * @remarks Buy from a specific direct listing from the marketplace.
   *
   * @example
   * ```javascript
   * // The ID of the listing you want to buy from
   * const listingId = 0;
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   *
   * await contract.directListings.buyFromListing(listingId, quantityDesired, "{{wallet_address}}");
   * ```
   *
   * @param listingId - The listing id to buy
   * @param quantityDesired - the quantity to buy
   * @param receiver - optional receiver of the bought listing if different from the connected wallet
   * @twfeature DirectListings
   */
  buyFromListing = /* @__PURE__ */buildTransactionFunction(async (listingId, quantityDesired, receiver) => {
    if (receiver) {
      receiver = await resolveAddress(receiver);
    }
    const listing = await this.validateListing(BigNumber.from(listingId));
    const {
      valid,
      error
    } = await this.isStillValidListing(listing, quantityDesired);
    if (!valid) {
      throw new Error(`Listing ${listingId} is no longer valid. ${error}`);
    }
    const buyFor = receiver ? receiver : await this.contractWrapper.getSignerAddress();
    const quantity = BigNumber.from(quantityDesired);
    const value = BigNumber.from(listing.pricePerToken).mul(quantity);
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await setErc20Allowance(this.contractWrapper, value, listing.currencyContractAddress, overrides);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "buyFromListing",
      args: [listingId, buyFor, quantity, listing.currencyContractAddress, value],
      overrides
    });
  });

  /**
   * Approve buyer for a reserved direct listing
   *
   * @remarks Approve a buyer to buy from a reserved listing.
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want to approve buyer for
   * const listingId = "0";
   *
   * await contract.directListings.approveBuyerForReservedListing(listingId, "{{wallet_address}}");
   * ```
   *
   * @param listingId - The listing id to buy
   * @param buyer - Address of buyer being approved
   * @twfeature DirectListings
   */
  approveBuyerForReservedListing = /* @__PURE__ */buildTransactionFunction(async (listingId, buyer) => {
    const isApproved = await this.isBuyerApprovedForListing(listingId, buyer);
    if (!isApproved) {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "approveBuyerForListing",
        args: [listingId, buyer, true]
      });
    } else {
      throw new Error(`Buyer ${buyer} already approved for listing ${listingId}.`);
    }
  });

  /**
   * Revoke approval of a buyer for a reserved direct listing
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want to approve buyer for
   * const listingId = "0";
   *
   * await contract.directListings.revokeBuyerApprovalForReservedListing(listingId, "{{wallet_address}}");
   * ```
   *
   * @param listingId - The listing id to buy
   * @param buyer - Address of buyer being approved
   */
  revokeBuyerApprovalForReservedListing = /* @__PURE__ */buildTransactionFunction(async (listingId, buyer) => {
    const isApproved = await this.isBuyerApprovedForListing(listingId, buyer);
    if (isApproved) {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "approveBuyerForListing",
        args: [listingId, buyer, false]
      });
    } else {
      throw new Error(`Buyer ${buyer} not approved for listing ${listingId}.`);
    }
  });

  /**
   * Approve a currency for a direct listing
   *
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want to approve currency for
   * const listingId = "0";
   *
   * await contract.directListings.approveCurrencyForListing(listingId, currencyContractAddress, pricePerTokenInCurrency);
   * ```
   *
   * @param listingId - The listing id to buy
   * @param currencyContractAddress - Address of currency being approved
   * @param pricePerTokenInCurrency - Price per token in the currency
   * @twfeature DirectListings
   */
  approveCurrencyForListing = /* @__PURE__ */buildTransactionFunction(async (listingId, currencyContractAddress, pricePerTokenInCurrency) => {
    const listing = await this.validateListing(BigNumber.from(listingId));
    const resolvedCurrencyAddress = await resolveAddress(currencyContractAddress);
    if (resolvedCurrencyAddress === listing.currencyContractAddress) {
      invariant(pricePerTokenInCurrency === listing.pricePerToken, "Approving listing currency with a different price.");
    }
    const currencyPrice = await this.contractWrapper.read("currencyPriceForListing", [listingId, resolvedCurrencyAddress]);
    invariant(pricePerTokenInCurrency === currencyPrice, "Currency already approved with this price.");
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "approveCurrencyForListing",
      args: [listingId, resolvedCurrencyAddress, pricePerTokenInCurrency]
    });
  });

  /**
   * Revoke approval of a currency for a direct listing
   *
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want to revoke currency for
   * const listingId = "0";
   *
   * await contract.directListings.revokeCurrencyApprovalForListing(listingId, currencyContractAddress);
   * ```
   *
   * @param listingId - The listing id to buy
   * @param currencyContractAddress - Address of currency
   * @twfeature DirectListings
   */
  revokeCurrencyApprovalForListing = /* @__PURE__ */buildTransactionFunction(async (listingId, currencyContractAddress) => {
    const listing = await this.validateListing(BigNumber.from(listingId));
    const resolvedCurrencyAddress = await resolveAddress(currencyContractAddress);
    if (resolvedCurrencyAddress === listing.currencyContractAddress) {
      throw new Error(`Can't revoke approval for main listing currency.`);
    }
    const currencyPrice = await this.contractWrapper.read("currencyPriceForListing", [listingId, resolvedCurrencyAddress]);
    invariant(!currencyPrice.isZero(), "Currency not approved.");
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "approveCurrencyForListing",
      args: [listingId, resolvedCurrencyAddress, BigNumber.from(0)]
    });
  });

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Throws error if listing could not be found
   *
   * @param listingId - Listing to check for
   */
  async validateListing(listingId) {
    try {
      return await this.getListing(listingId);
    } catch (err) {
      console.error(`Error getting the listing with id ${listingId}`);
      throw err;
    }
  }

  /**
   * Helper method maps the auction listing to the direct listing interface.
   *
   * @internal
   * @param listing - The listing to map, as returned from the contract.
   * @returns - The mapped interface.
   */
  async mapListing(listing) {
    let status = Status.UNSET;
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    switch (listing.status) {
      case 1:
        status = BigNumber.from(listing.startTimestamp).gt(blockTime) ? Status.Created : BigNumber.from(listing.endTimestamp).lt(blockTime) ? Status.Expired : Status.Active;
        break;
      case 2:
        status = Status.Completed;
        break;
      case 3:
        status = Status.Cancelled;
        break;
    }
    return {
      assetContractAddress: listing.assetContract,
      currencyContractAddress: listing.currency,
      pricePerToken: listing.pricePerToken.toString(),
      currencyValuePerToken: await fetchCurrencyValue(this.contractWrapper.getProvider(), listing.currency, listing.pricePerToken),
      id: listing.listingId.toString(),
      tokenId: listing.tokenId.toString(),
      quantity: listing.quantity.toString(),
      startTimeInSeconds: BigNumber.from(listing.startTimestamp).toNumber(),
      asset: await fetchTokenMetadataForContract(listing.assetContract, this.contractWrapper.getProvider(), listing.tokenId, this.storage),
      endTimeInSeconds: BigNumber.from(listing.endTimestamp).toNumber(),
      creatorAddress: listing.listingCreator,
      isReservedListing: listing.reserved,
      status: status
    };
  }

  /**
   * Use this method to check if a direct listing is still valid.
   *
   * Ways a direct listing can become invalid:
   * 1. The asset holder transferred the asset to another wallet
   * 2. The asset holder burned the asset
   * 3. The asset holder removed the approval on the marketplace
   *
   * @internal
   * @param listing - The listing to check.
   * @returns - True if the listing is valid, false otherwise.
   */
  async isStillValidListing(listing, quantity) {
    const approved = await isTokenApprovedForTransfer(this.contractWrapper.getProvider(), this.getAddress(), listing.assetContractAddress, listing.tokenId, listing.creatorAddress);
    if (!approved) {
      return {
        valid: false,
        error: `Token '${listing.tokenId}' from contract '${listing.assetContractAddress}' is not approved for transfer`
      };
    }
    const provider = this.contractWrapper.getProvider();
    const erc165 = new Contract(listing.assetContractAddress, ERC165Abi, provider);
    const isERC721 = await erc165.supportsInterface(InterfaceId_IERC721);
    const isERC1155 = await erc165.supportsInterface(InterfaceId_IERC1155);
    if (isERC721) {
      const asset = new Contract(listing.assetContractAddress, Erc721Abi, provider);

      // Handle reverts in case of non-existent tokens
      let owner;
      try {
        owner = await asset.ownerOf(listing.tokenId);
      } catch (e) {}
      const valid = owner?.toLowerCase() === listing.creatorAddress.toLowerCase();
      return {
        valid,
        error: valid ? undefined : `Seller is not the owner of Token '${listing.tokenId}' from contract '${listing.assetContractAddress} anymore'`
      };
    } else if (isERC1155) {
      const asset = new Contract(listing.assetContractAddress, Erc1155Abi, provider);
      const balance = await asset.balanceOf(listing.creatorAddress, listing.tokenId);
      const valid = balance.gte(quantity || listing.quantity);
      return {
        valid,
        error: valid ? undefined : `Seller does not have enough balance of Token '${listing.tokenId}' from contract '${listing.assetContractAddress} to fulfill the listing`
      };
    } else {
      return {
        valid: false,
        error: "Contract does not implement ERC 1155 or ERC 721."
      };
    }
  }
  async applyFilter(listings, filter) {
    let rawListings = [...listings];
    if (filter) {
      if (filter.seller) {
        const resolvedSeller = await resolveAddress(filter.seller);
        rawListings = rawListings.filter(seller => seller.listingCreator.toString().toLowerCase() === resolvedSeller?.toString().toLowerCase());
      }
      if (filter.tokenContract) {
        const resolvedToken = await resolveAddress(filter.tokenContract);
        rawListings = rawListings.filter(tokenContract => tokenContract.assetContract.toString().toLowerCase() === resolvedToken?.toString().toLowerCase());
      }
      if (filter.tokenId !== undefined) {
        rawListings = rawListings.filter(tokenContract => tokenContract.tokenId.toString() === filter?.tokenId?.toString());
      }
    }
    return filter?.count && filter.count < rawListings.length ? rawListings.slice(0, filter.count) : rawListings;
  }
}

/**
 * @internal
 */
const EnglishAuctionInputParamsSchema = /* @__PURE__ */(() => z.object({
  /**
   * The address of the asset being auctioned.
   */
  assetContractAddress: AddressOrEnsSchema,
  /**
   * The ID of the token to auction.
   */
  tokenId: BigNumberishSchema,
  /**
   * The quantity of tokens to include in the listing.
   *
   * For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).
   */
  quantity: BigNumberishSchema.default(1),
  /**
   * The address of the currency to accept for the listing.
   */
  currencyContractAddress: AddressOrEnsSchema.default(NATIVE_TOKEN_ADDRESS),
  /**
   * The minimum price that a bid must be in order to be accepted.
   */
  minimumBidAmount: AmountSchema,
  /**
   * The buyout price of the auction.
   */
  buyoutBidAmount: AmountSchema,
  /**
   * This is a buffer e.g. x seconds.
   *
   * If a new winning bid is made less than x seconds before expirationTimestamp, the
   * expirationTimestamp is increased by x seconds.
   */
  timeBufferInSeconds: BigNumberishSchema.default(900),
  // 15 minutes by default

  /**
   * This is a buffer in basis points e.g. x%.
   *
   * To be considered as a new winning bid, a bid must be at least x% greater than
   * the current winning bid.
   */
  bidBufferBps: BigNumberishSchema.default(500),
  // 5% by default

  /**
   * The start time of the auction.
   */
  startTimestamp: RawDateSchema.default(new Date()),
  /**
   * The end time of the auction.
   */
  endTimestamp: EndDateSchema
}))();

/**
 * @public
 */

/**
 * Handles auctions
 * @public
 */
class MarketplaceV3EnglishAuctions {
  featureName = FEATURE_ENGLISH_AUCTIONS.name;

  // utilities

  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.events = new ContractEvents(this.contractWrapper);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the total number of english auctions
   *
   * @returns Returns the total number of auctions created.
   * @public
   *
   * @example
   * ```javascript
   * const totalAuctions = await contract.englishAuctions.getTotalCount();
   * ```
   * @twfeature EnglishAuctions
   */
  async getTotalCount() {
    return await this.contractWrapper.read("totalAuctions", []);
  }

  /**
   * Get all english auctions
   *
   * @example
   * ```javascript
   * const auctions = await contract.englishAuctions.getAll();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns the Auction object array
   * @twfeature EnglishAuctions
   */
  async getAll(filter) {
    const totalAuctions = await this.getTotalCount();
    const start = BigNumber.from(filter?.start || 0).toNumber();
    const end = totalAuctions.toNumber();
    if (end === 0) {
      throw new Error(`No auctions exist on the contract.`);
    }
    let rawAuctions = [];
    const batches = await getAllInBatches(start, end, (startId, endId) => this.contractWrapper.read("getAllAuctions", [startId, endId]));
    rawAuctions = batches.flat();
    const filteredAuctions = await this.applyFilter(rawAuctions, filter);
    return await Promise.all(filteredAuctions.map(auction => this.mapAuction(auction)));
  }

  /**
   * Get all valid english auctions
   *
   * @example
   * ```javascript
   * const auctions = await contract.englishAuctions.getAllValid();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns the Auction object array
   * @twfeature EnglishAuctions
   */
  async getAllValid(filter) {
    const totalAuctions = await this.getTotalCount();
    const start = BigNumber.from(filter?.start || 0).toNumber();
    const end = totalAuctions.toNumber();
    if (end === 0) {
      throw new Error(`No auctions exist on the contract.`);
    }
    let rawAuctions = [];
    const batches = await getAllInBatches(start, end, (startId, endId) => this.contractWrapper.read("getAllValidAuctions", [startId, endId]));
    rawAuctions = batches.flat();
    const filteredAuctions = await this.applyFilter(rawAuctions, filter);
    return await Promise.all(filteredAuctions.map(auction => this.mapAuction(auction)));
  }

  /**
   * Get a single english auction
   *
   * @example
   * ```javascript
   * const auctionId = 0;
   * const auction = await contract.englishAuctions.getAuction(auctionId);
   * ```
   *
   * @param auctionId - the auction Id
   * @returns the Auction object
   * @twfeature EnglishAuctions
   */
  async getAuction(auctionId) {
    const auction = await this.contractWrapper.read("getAuction", [auctionId]);
    return await this.mapAuction(auction);
  }

  /**
   * Get winning bid of an english auction
   *
   * @remarks Get the current highest bid of an active auction.
   *
   * @example
   * ```javascript
   * // The ID of the auction
   * const auctionId = 0;
   * const winningBid = await contract.englishAuctions.getWinningBid(auctionId);
   * ```
   * @param auctionId - the auction Id
   * @twfeature EnglishAuctions
   */
  async getWinningBid(auctionId) {
    await this.validateAuction(BigNumber.from(auctionId));
    const bid = await this.contractWrapper.read("getWinningBid", [auctionId]);
    if (bid._bidder === constants.AddressZero) {
      return undefined;
    }
    return await this.mapBid(auctionId.toString(), bid._bidder, bid._currency, bid._bidAmount.toString());
  }

  /**
   * Check if a bid is or will be a winning bid
   *
   * @example
   * ```javascript
   * const auctionId = 0;
   * const bidAmount = 100;
   * const isWinningBid = await contract.englishAuctions.isWinningBid(auctionId, bidAmount);
   * ```
   *
   * @param auctionId - Auction Id
   * @param bidAmount - Amount to bid
   * @returns true if the bid is or will be a winning bid
   * @twfeature EnglishAuctions
   */
  async isWinningBid(auctionId, bidAmount) {
    return await this.contractWrapper.read("isNewWinningBid", [auctionId, bidAmount]);
  }

  /**
   * Get the winner for a specific english auction
   *
   * @remarks Get the winner of the auction after an auction ends.
   *
   * @example
   * ```javascript
   * // The auction ID of a closed english auction
   * const auctionId = 0;
   * const auctionWinner = await contract.englishAuctions.getWinner(auctionId);
   * ```
   * @param auctionId - the auction Id
   * @returns the address of the auction winner
   * @twfeature EnglishAuctions
   */
  async getWinner(auctionId) {
    const auction = await this.validateAuction(BigNumber.from(auctionId));
    const bid = await this.contractWrapper.read("getWinningBid", [auctionId]);
    const now = BigNumber.from(Math.floor(Date.now() / 1000));
    const endTime = BigNumber.from(auction.endTimeInSeconds);

    // if we have a winner in the map and the current time is past the endtime of the auction return the address of the winner
    if (now.gt(endTime) && bid._bidder !== constants.AddressZero) {
      return bid._bidder;
    }
    // otherwise fall back to query filter things

    // TODO this should be via indexer or direct contract call
    const contractEvent = new ContractEvents(this.contractWrapper);
    const closedAuctions = await contractEvent.getEvents("AuctionClosed");
    const closed = closedAuctions.find(a => a.data.auctionId.eq(BigNumber.from(auctionId)));
    if (!closed) {
      throw new Error(`Could not find auction with ID ${auctionId} in closed auctions`);
    }
    return closed.data.winningBidder;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create an english auction
   *
   * @remarks Create a new auction where people can bid on an asset.
   *
   * @example
   * ```javascript
   * // Data of the auction you want to create
   * const auction = {
   *   // address of the contract of the asset you want to auction
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to auction
   *   tokenId: "0",
   *   // how many of the asset you want to auction
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the auctioned tokens
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // the minimum bid that will be accepted for the token
   *   minimumBidAmount: "1.5",
   *   // how much people would have to bid to instantly buy the asset
   *   buyoutBidAmount: "10",
   *   // If a bid is made less than these many seconds before expiration, the expiration time is increased by this.
   *   timeBufferInSeconds: "900", // 15 minutes by default
   *   // A bid must be at least this much bps greater than the current winning bid
   *   bidBufferBps: "500", // 5% by default
   *   // when should the auction open up for bidding
   *   startTimestamp: new Date(Date.now()),
   *   // end time of auction
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   * }
   *
   * const tx = await contract.englishAuctions.createAuction(auction);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created auction
   * ```
   * @param auction - the auction data
   * @returns the transaction hash and the auction id
   * @twfeature EnglishAuctions
   */
  createAuction = /* @__PURE__ */buildTransactionFunction(async auction => {
    const parsedAuction = EnglishAuctionInputParamsSchema.parse(auction);
    await handleTokenApproval(this.contractWrapper, this.getAddress(), parsedAuction.assetContractAddress, parsedAuction.tokenId, await this.contractWrapper.getSignerAddress());
    const normalizedBuyoutAmount = await normalizePriceValue(this.contractWrapper.getProvider(), parsedAuction.buyoutBidAmount, parsedAuction.currencyContractAddress);
    const normalizedMinBidAmount = await normalizePriceValue(this.contractWrapper.getProvider(), parsedAuction.minimumBidAmount, parsedAuction.currencyContractAddress);
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    if (parsedAuction.startTimestamp.lt(blockTime)) {
      parsedAuction.startTimestamp = BigNumber.from(blockTime);
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "createAuction",
      args: [{
        assetContract: parsedAuction.assetContractAddress,
        tokenId: parsedAuction.tokenId,
        quantity: parsedAuction.quantity,
        currency: cleanCurrencyAddress(parsedAuction.currencyContractAddress),
        minimumBidAmount: normalizedMinBidAmount,
        buyoutBidAmount: normalizedBuyoutAmount,
        timeBufferInSeconds: parsedAuction.timeBufferInSeconds,
        bidBufferBps: parsedAuction.bidBufferBps,
        startTimestamp: parsedAuction.startTimestamp,
        endTimestamp: parsedAuction.endTimestamp
      }],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("NewAuction", receipt.logs)[0];
        return {
          id: event.args.auctionId,
          receipt
        };
      }
    });
  });

  /**
   * Create a batch of new auctions
   *
   * @remarks Create a batch of new auctions on the marketplace
   *
   * @example
   * ```javascript
   * const auctions = [...];
   * const tx = await contract.englishAuctions.createAuctionsBatch(auctions);
   * ```
   */
  createAuctionsBatch = /* @__PURE__ */buildTransactionFunction(async listings => {
    const data = await Promise.all(listings.map(async listing => {
      const tx = await this.createAuction.prepare(listing);
      return tx.encode();
    }));
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [data],
      parse: receipt => {
        const events = this.contractWrapper.parseLogs("NewAuction", receipt?.logs);
        return events.map(event => {
          return {
            id: event.args.auctionId,
            receipt
          };
        });
      }
    });
  });

  /**
   * Buyout an english auction
   *
   * @remarks Buy a specific auction from the marketplace.
   *
   * @example
   * ```javascript
   * // The auction ID you want to buy
   * const auctionId = 0;
   *
   * await contract.englishAuctions.buyoutAuction(auctionId);
   * ```
   * @param auctionId - the auction id
   * @returns the transaction result
   * @twfeature EnglishAuctions
   */
  buyoutAuction = /* @__PURE__ */buildTransactionFunction(async auctionId => {
    const auction = await this.validateAuction(BigNumber.from(auctionId));
    const currencyMetadata = await fetchCurrencyMetadata(this.contractWrapper.getProvider(), auction.currencyContractAddress);
    return this.makeBid.prepare(auctionId, utils.formatUnits(auction.buyoutBidAmount, currencyMetadata.decimals));
  });

  /**
   * Bid on an english auction
   *
   * @remarks Make a bid on an auction
   *
   * @example
   * ```javascript
   * // The auction ID of the asset you want to bid on
   * const auctionId = 0;
   * // The total amount you are willing to bid for auctioned tokens
   * const bidAmount = 1;
   *
   * await contract.englishAuctions.makeBid(auctionId, bidAmount);
   * ```
   * @param auctionId - the auction id
   * @param bidAmount - the amount you are willing to bid
   * @returns the transaction result
   * @twfeature EnglishAuctions
   */
  makeBid = /* @__PURE__ */buildTransactionFunction(async (auctionId, bidAmount) => {
    const auction = await this.validateAuction(BigNumber.from(auctionId));
    const normalizedBidAmount = await normalizePriceValue(this.contractWrapper.getProvider(), bidAmount, auction.currencyContractAddress);
    if (normalizedBidAmount.eq(BigNumber.from(0))) {
      throw new Error("Cannot make a bid with 0 value");
    }
    if (BigNumber.from(auction.buyoutBidAmount).gt(0) && normalizedBidAmount.gt(auction.buyoutBidAmount)) {
      throw new Error("Bid amount must be less than or equal to buyoutBidAmount");
    }
    const winningBid = await this.getWinningBid(auctionId);
    if (winningBid) {
      const isWinnner = await this.isWinningBid(auctionId, normalizedBidAmount);
      invariant(isWinnner, "Bid price is too low based on the current winning bid and the bid buffer");
    } else {
      const tokenPrice = normalizedBidAmount;
      const minimumBidAmount = BigNumber.from(auction.minimumBidAmount);
      invariant(tokenPrice.gte(minimumBidAmount), "Bid price is too low based on minimum bid amount");
    }
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await setErc20Allowance(this.contractWrapper, normalizedBidAmount, auction.currencyContractAddress, overrides);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "bidInAuction",
      args: [auctionId, normalizedBidAmount],
      overrides
    });
  });

  /**
   * Cancel an english auction
   *
   * @remarks Cancel an auction on the marketplace
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to cancel
   * const auctionId = "0";
   *
   * await contract.englishAuctions.cancelAuction(auctionId);
   * ```
   * @param auctionId - the auction id
   * @returns the transaction result
   * @twfeature EnglishAuctions
   */
  cancelAuction = /* @__PURE__ */buildTransactionFunction(async auctionId => {
    const winningBid = await this.getWinningBid(auctionId);
    if (winningBid) {
      throw new Error(`Bids already made.`);
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "cancelAuction",
      args: [auctionId]
    });
  });

  /**
   * Close the english auction for the bidder
   *
   * @remarks Closes the Auction and executes the sale for the buyer.
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to close
   * const auction = "0";
   * await contract.englishAuctions.closeAuctionForBidder(auctionId);
   * ```
   *
   * @param auctionId - the auction id to close
   * @param closeFor - optionally pass the winning bid offeror address to close the auction on their behalf
   * @returns the transaction result
   * @twfeature EnglishAuctions
   */
  closeAuctionForBidder = /* @__PURE__ */buildTransactionFunction(async (auctionId, closeFor) => {
    if (!closeFor) {
      closeFor = await this.contractWrapper.getSignerAddress();
    }
    const auction = await this.validateAuction(BigNumber.from(auctionId));
    try {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "collectAuctionTokens",
        args: [BigNumber.from(auctionId)]
      });
    } catch (err) {
      if (err.message.includes("Marketplace: auction still active.")) {
        throw new AuctionHasNotEndedError(auctionId.toString(), auction.endTimeInSeconds.toString());
      } else {
        throw err;
      }
    }
  });

  /**
   * Close the english auction for the seller
   *
   * @remarks Closes the Auction and executes the sale for the seller.
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to close
   * const auctionId = "0";
   * await contract.englishAuctions.closeAuctionForSeller(auctionId);
   * ```
   *
   * @param auctionId - the auction id to close
   * @returns the transaction result
   * @twfeature EnglishAuctions
   */
  closeAuctionForSeller = /* @__PURE__ */buildTransactionFunction(async auctionId => {
    const auction = await this.validateAuction(BigNumber.from(auctionId));
    try {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "collectAuctionPayout",
        args: [BigNumber.from(auctionId)]
      });
    } catch (err) {
      if (err.message.includes("Marketplace: auction still active.")) {
        throw new AuctionHasNotEndedError(auctionId.toString(), auction.endTimeInSeconds.toString());
      } else {
        throw err;
      }
    }
  });

  /**
   * Close the english auction for both the seller and the bidder
   *
   * @remarks Closes the Auction and executes the sale for both parties.
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to close
   * const auction = "0";
   * await contract.englishAuctions.executeSale(auctionId);
   * ```
   *
   * @param auctionId - the auction to close
   * @returns the transaction result
   * @twfeature EnglishAuctions
   */
  executeSale = /* @__PURE__ */buildTransactionFunction(async auctionId => {
    const auction = await this.validateAuction(BigNumber.from(auctionId));
    try {
      const winningBid = await this.getWinningBid(auctionId);
      invariant(winningBid, "No winning bid found");
      const closeForSeller = this.encoder.encode("collectAuctionPayout", [auctionId]);
      const closeForBuyer = this.encoder.encode("collectAuctionTokens", [auctionId]);
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "multicall",
        args: [[closeForSeller, closeForBuyer]]
      });
    } catch (err) {
      if (err.message.includes("Marketplace: auction still active.")) {
        throw new AuctionHasNotEndedError(auctionId.toString(), auction.endTimeInSeconds.toString());
      } else {
        throw err;
      }
    }
  });

  /**
   * Get the buffer for an english auction
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to get the buffer for
   * const auctionId = "0";
   * const buffer = await contract.englishAuctions.getBidBufferBps(auctionId);
   * ```
   *
   * @param auctionId - id of the auction
   * @returns the buffer in basis points
   * @twfeature EnglishAuctions
   */
  async getBidBufferBps(auctionId) {
    return (await this.getAuction(auctionId)).bidBufferBps;
  }

  /**
   * Get the minimum next bid for an english auction
   *
   * @example
   * ```javascript
   * // The ID of the auction you want to get the minimum next bid for
   * const auctionId = "0";
   * const minimumNextBid = await contract.englishAuctions.getMinimumNextBid(auctionId);
   * ```
   *
   * @returns the minimum bid a user can place to outbid the previous highest bid
   * @param auctionId - id of the auction
   * @twfeature EnglishAuctions
   */
  async getMinimumNextBid(auctionId) {
    // we can fetch all of these at the same time using promise.all
    const [currentBidBufferBps, winningBid, auction] = await Promise.all([this.getBidBufferBps(auctionId), this.getWinningBid(auctionId), this.validateAuction(BigNumber.from(auctionId))]);
    const currentBidOrReservePrice = winningBid ?
    // if there is a winning bid use the value of it
    BigNumber.from(winningBid.bidAmount) :
    // if there is no winning bid use the reserve price
    BigNumber.from(auction.minimumBidAmount);
    const minimumNextBid = currentBidOrReservePrice.add(
    // the addition of the current bid and the buffer
    // (have to divide by 10000 to get the fraction of the buffer (since it's in basis points))
    currentBidOrReservePrice.mul(currentBidBufferBps).div(10000));

    // it's more useful to return a currency value here
    return fetchCurrencyValue(this.contractWrapper.getProvider(), auction.currencyContractAddress, minimumNextBid);
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Throws error if auction could not be found
   *
   * @param auctionId - Auction to check for
   */
  async validateAuction(auctionId) {
    try {
      return await this.getAuction(auctionId);
    } catch (err) {
      console.error(`Error getting the auction with id ${auctionId}`);
      throw err;
    }
  }

  /**
   * Helper method maps the auction to the auction interface.
   *
   * @internal
   * @param auction - The auction to map, as returned from the contract.
   * @returns - The mapped interface.
   */
  async mapAuction(auction) {
    let status = Status.UNSET;
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    switch (auction.status) {
      case 1:
        status = BigNumber.from(auction.startTimestamp).gt(blockTime) ? Status.Created : BigNumber.from(auction.endTimestamp).lt(blockTime) ? Status.Expired : Status.Active;
        break;
      case 2:
        status = Status.Completed;
        break;
      case 3:
        status = Status.Cancelled;
        break;
    }
    return {
      id: auction.auctionId.toString(),
      creatorAddress: auction.auctionCreator,
      assetContractAddress: auction.assetContract,
      tokenId: auction.tokenId.toString(),
      quantity: auction.quantity.toString(),
      currencyContractAddress: auction.currency,
      minimumBidAmount: auction.minimumBidAmount.toString(),
      minimumBidCurrencyValue: await fetchCurrencyValue(this.contractWrapper.getProvider(), auction.currency, auction.minimumBidAmount),
      buyoutBidAmount: auction.buyoutBidAmount.toString(),
      buyoutCurrencyValue: await fetchCurrencyValue(this.contractWrapper.getProvider(), auction.currency, auction.buyoutBidAmount),
      timeBufferInSeconds: BigNumber.from(auction.timeBufferInSeconds).toNumber(),
      bidBufferBps: BigNumber.from(auction.bidBufferBps).toNumber(),
      startTimeInSeconds: BigNumber.from(auction.startTimestamp).toNumber(),
      endTimeInSeconds: BigNumber.from(auction.endTimestamp).toNumber(),
      asset: await fetchTokenMetadataForContract(auction.assetContract, this.contractWrapper.getProvider(), auction.tokenId, this.storage),
      status: status
    };
  }

  /**
   * Maps an auction-bid to the strict interface
   *
   * @internal
   * @param bid
   * @returns - A `Bid` object
   */
  async mapBid(auctionId, bidderAddress, currencyContractAddress, bidAmount) {
    const resolvedBidderAddress = await resolveAddress(bidderAddress);
    const resolvedCurrencyAddress = await resolveAddress(currencyContractAddress);
    return {
      auctionId,
      bidderAddress: resolvedBidderAddress,
      currencyContractAddress: resolvedCurrencyAddress,
      bidAmount,
      bidAmountCurrencyValue: await fetchCurrencyValue(this.contractWrapper.getProvider(), resolvedCurrencyAddress, bidAmount)
    };
  }
  async applyFilter(auctions, filter) {
    let rawAuctions = [...auctions];
    if (filter) {
      if (filter.seller) {
        const resolvedSeller = await resolveAddress(filter.seller);
        rawAuctions = rawAuctions.filter(seller => seller.auctionCreator.toString().toLowerCase() === resolvedSeller?.toString().toLowerCase());
      }
      if (filter.tokenContract) {
        const resolvedToken = await resolveAddress(filter.tokenContract);
        rawAuctions = rawAuctions.filter(tokenContract => tokenContract.assetContract.toString().toLowerCase() === resolvedToken?.toString().toLowerCase());
      }
      if (filter.tokenId !== undefined) {
        rawAuctions = rawAuctions.filter(tokenContract => tokenContract.tokenId.toString() === filter?.tokenId?.toString());
      }
    }
    return filter?.count && filter.count < rawAuctions.length ? rawAuctions.slice(0, filter.count) : rawAuctions;
  }
}

/**
 * @internal
 */
const OfferInputParamsSchema = /* @__PURE__ */(() => z.object({
  /**
   * The address of the asset being sought.
   */
  assetContractAddress: AddressOrEnsSchema,
  /**
   * The ID of the token.
   */
  tokenId: BigNumberishSchema,
  /**
   * The quantity of tokens to buy.
   *
   * For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).
   */
  quantity: BigNumberishSchema.default(1),
  /**
   * The address of the currency offered for the NFTs.
   */
  currencyContractAddress: AddressOrEnsSchema.default(NATIVE_TOKEN_ADDRESS),
  /**
   * The total offer amount for the NFTs.
   */
  totalPrice: AmountSchema,
  /**
   * The end time of the offer.
   */
  endTimestamp: EndDateSchema
}))();

/**
 * @public
 */

/**
 * Handles marketplace offers
 * @public
 */
class MarketplaceV3Offers {
  featureName = FEATURE_OFFERS.name;

  // utilities

  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.events = new ContractEvents(this.contractWrapper);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the total number of offers
   *
   * @returns Returns the total number of offers created.
   * @public
   *
   * @example
   * ```javascript
   * const totalOffers = await contract.offers.getTotalCount();
   * ```
   * @twfeature Offers
   */
  async getTotalCount() {
    return await this.contractWrapper.read("totalOffers", []);
  }

  /**
   * Get all offers
   *
   * @example
   * ```javascript
   * const offers = await contract.offers.getAll();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns the Offer object array
   * @twfeature Offers
   */
  async getAll(filter) {
    const totalOffers = await this.getTotalCount();
    const start = BigNumber.from(filter?.start || 0).toNumber();
    const end = totalOffers.toNumber();
    if (end === 0) {
      throw new Error(`No offers exist on the contract.`);
    }
    let rawOffers = [];
    const batches = await getAllInBatches(start, end, (startId, endId) => this.contractWrapper.read("getAllOffers", [startId, endId]));
    rawOffers = batches.flat();
    const filteredOffers = await this.applyFilter(rawOffers, filter);
    return await Promise.all(filteredOffers.map(offer => this.mapOffer(offer)));
  }

  /**
   * Get all valid offers
   *
   * @example
   * ```javascript
   * const offers = await contract.offers.getAllValid();
   * ```
   *
   * @param filter - optional filter parameters
   * @returns the Offer object array
   * @twfeature Offers
   */
  async getAllValid(filter) {
    const totalOffers = await this.getTotalCount();
    const start = BigNumber.from(filter?.start || 0).toNumber();
    const end = totalOffers.toNumber();
    if (end === 0) {
      throw new Error(`No offers exist on the contract.`);
    }
    let rawOffers = [];
    const batches = await getAllInBatches(start, end, (startId, endId) => this.contractWrapper.read("getAllValidOffers", [startId, endId]));
    rawOffers = batches.flat();
    const filteredOffers = await this.applyFilter(rawOffers, filter);
    return await Promise.all(filteredOffers.map(offer => this.mapOffer(offer)));
  }

  /**
   * Get a single offer
   *
   * @example
   * ```javascript
   * const offerId = 0;
   * const offer = await contract.offers.getOffer(offerId);
   * ```
   *
   * @param offerId - the listing id
   * @returns the Direct listing object
   * @twfeature Offers
   */
  async getOffer(offerId) {
    const offer = await this.contractWrapper.read("getOffer", [offerId]);
    return await this.mapOffer(offer);
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Make an offer
   *
   * @remarks Make an offer on the marketplace for an asset.
   *
   * @example
   * ```javascript
   * // Data of the offer you want to make
   * const offer = {
   *   // address of the contract the asset you want to make an offer for
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to buy
   *   tokenId: "0",
   *   // how many of the asset you want to buy
   *   quantity: 1,
   *   // address of the currency contract that you offer to pay in
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // Total price you offer to pay for the mentioned token(s)
   *   totalPrice: "1.5",
   *   // Offer valid until
   *   endTimestamp: new Date(),
   * }
   *
   * const tx = await contract.offers.makeOffer(offer);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created offer
   * ```
   * @param offer - the offer data
   * @returns the transaction receipt and the id of the newly created offer
   * @twfeature Offers
   */
  makeOffer = /* @__PURE__ */buildTransactionFunction(async offer => {
    const parsedOffer = await OfferInputParamsSchema.parseAsync(offer);
    const chainId = await this.contractWrapper.getChainID();
    const currency = isNativeToken(parsedOffer.currencyContractAddress) ? NATIVE_TOKENS[chainId].wrapped.address : parsedOffer.currencyContractAddress;
    const normalizedTotalPrice = await normalizePriceValue(this.contractWrapper.getProvider(), parsedOffer.totalPrice, currency);
    const overrides = await this.contractWrapper.getCallOverrides();
    await setErc20Allowance(this.contractWrapper, normalizedTotalPrice, currency, overrides);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "makeOffer",
      args: [{
        assetContract: parsedOffer.assetContractAddress,
        tokenId: parsedOffer.tokenId,
        quantity: parsedOffer.quantity,
        currency: currency,
        totalPrice: normalizedTotalPrice,
        expirationTimestamp: parsedOffer.endTimestamp
      }],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("NewOffer", receipt?.logs);
        return {
          id: event[0].args.offerId,
          receipt
        };
      }
    });
  });

  /**
   * Cancel an offer
   *
   * @remarks Cancel an offer on the marketplace
   *
   * @example
   * ```javascript
   * // The ID of the offer you want to cancel
   * const offerId = "0";
   *
   * await contract.offers.cancelOffer(offerId);
   * ```
   * @param offerId - the offer id
   * @returns the transaction receipt
   * @twfeature Offers
   */
  cancelOffer = /* @__PURE__ */buildTransactionFunction(async offerId => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "cancelOffer",
      args: [offerId]
    });
  });

  /**
   * Accept an offer
   *
   * @example
   * ```javascript
   * // The ID of the offer you want to accept
   * const offerId = 0;
   *
   * await contract.offers.acceptOffer(offerId);
   * ```
   *
   * @param offerId - The offer id
   * @returns the transaction receipt
   * @twfeature Offers
   */
  acceptOffer = /* @__PURE__ */buildTransactionFunction(async offerId => {
    const offer = await this.validateOffer(BigNumber.from(offerId));
    const {
      valid,
      error
    } = await this.isStillValidOffer(offer);
    if (!valid) {
      throw new Error(`Offer ${offerId} is no longer valid. ${error}`);
    }
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await handleTokenApproval(this.contractWrapper, this.getAddress(), offer.assetContractAddress, offer.tokenId, await this.contractWrapper.getSignerAddress());
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "acceptOffer",
      args: [offerId],
      overrides
    });
  });

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Throws error if offer could not be found
   *
   * @param offerId - offer to check for
   */
  async validateOffer(offerId) {
    try {
      return await this.getOffer(offerId);
    } catch (err) {
      console.error(`Error getting the offer with id ${offerId}`);
      throw err;
    }
  }

  /**
   * Helper method maps the offer to the offer interface.
   *
   * @internal
   * @param offer - The offer to map, as returned from the contract.
   * @returns - The mapped interface.
   */
  async mapOffer(offer) {
    let status = Status.UNSET;
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    switch (offer.status) {
      case 1:
        status = BigNumber.from(offer.expirationTimestamp).lt(blockTime) ? Status.Expired : Status.Active;
        break;
      case 2:
        status = Status.Completed;
        break;
      case 3:
        status = Status.Cancelled;
        break;
    }
    return {
      id: offer.offerId.toString(),
      offerorAddress: offer.offeror,
      assetContractAddress: offer.assetContract,
      currencyContractAddress: offer.currency,
      tokenId: offer.tokenId.toString(),
      quantity: offer.quantity.toString(),
      totalPrice: offer.totalPrice.toString(),
      currencyValue: await fetchCurrencyValue(this.contractWrapper.getProvider(), offer.currency, offer.totalPrice),
      asset: await fetchTokenMetadataForContract(offer.assetContract, this.contractWrapper.getProvider(), offer.tokenId, this.storage),
      endTimeInSeconds: BigNumber.from(offer.expirationTimestamp).toNumber(),
      status: status
    };
  }

  /**
   * Use this method to check if an offer is still valid.
   *
   * Ways an offer can become invalid:
   * 1. The offer has expired
   * 2. The offeror doesn't have enough balance of currency tokens
   * 3. The offeror removed the approval of currency tokens on the marketplace
   *
   * @internal
   * @param offer - The offer to check.
   * @returns - True if the offer is valid, false otherwise.
   */
  async isStillValidOffer(offer) {
    const now = BigNumber.from(Math.floor(Date.now() / 1000));
    if (now.gt(offer.endTimeInSeconds)) {
      return {
        valid: false,
        error: `Offer with ID ${offer.id} has expired`
      };
    }
    const chainId = await this.contractWrapper.getChainID();
    const currency = isNativeToken(offer.currencyContractAddress) ? NATIVE_TOKENS[chainId].wrapped.address : offer.currencyContractAddress;
    const provider = this.contractWrapper.getProvider();
    const erc20 = new ContractWrapper(provider, currency, ERC20Abi, {}, this.storage);
    const offerorBalance = await erc20.read("balanceOf", [offer.offerorAddress]);
    if (offerorBalance.lt(offer.totalPrice)) {
      return {
        valid: false,
        error: `Offeror ${offer.offerorAddress} doesn't have enough balance of token ${currency}`
      };
    }
    const offerorAllowance = await erc20.read("allowance", [offer.offerorAddress, this.getAddress()]);
    if (offerorAllowance.lt(offer.totalPrice)) {
      return {
        valid: false,
        error: `Offeror ${offer.offerorAddress} hasn't approved enough amount of token ${currency}`
      };
    }
    return {
      valid: true,
      error: ""
    };
  }
  async applyFilter(offers, filter) {
    let rawOffers = [...offers];
    if (filter) {
      if (filter.offeror) {
        const resolvedOfferor = await resolveAddress(filter.offeror);
        rawOffers = rawOffers.filter(offeror => offeror.offeror.toString().toLowerCase() === resolvedOfferor?.toString().toLowerCase());
      }
      if (filter.tokenContract) {
        const resolvedToken = await resolveAddress(filter.tokenContract);
        rawOffers = rawOffers.filter(tokenContract => tokenContract.assetContract.toString().toLowerCase() === resolvedToken?.toString().toLowerCase());
      }
      if (filter.tokenId !== undefined) {
        rawOffers = rawOffers.filter(tokenContract => tokenContract.tokenId.toString() === filter?.tokenId?.toString());
      }
    }
    return filter?.count && filter.count < rawOffers.length ? rawOffers.slice(0, filter.count) : rawOffers;
  }
}

/**
 * Handle platform fees and recipients
 * @remarks Configure platform fees for a contract, which can be applied on certain paid transactions
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const feeInfo = await contract.platformFees.get();
 * await contract.platformFees.set({
 *   platform_fee_basis_points: 100, // 1% fee
 *   platform_fee_recipient: "0x..." // the fee recipient
 * })
 * ```
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TO BE REMOVED IN V4
class ContractPlatformFee {
  featureName = FEATURE_PLATFORM_FEE.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Get the platform fee recipient and basis points
   *
   * @example
   * ```javascript
   * const feeInfo = await contract.platformFees.get();
   * console.log(feeInfo.platform_fee_recipient);
   * console.log(feeInfo.platform_fee_basis_points);
   * ```
   * @twfeature PlatformFee
   */
  async get() {
    const [platformFeeRecipient, platformFeeBps] = await this.contractWrapper.read("getPlatformFeeInfo", []);
    return CommonPlatformFeeSchema.parseAsync({
      platform_fee_recipient: platformFeeRecipient,
      platform_fee_basis_points: platformFeeBps
    });
  }

  /**
   * Set the platform fee recipient and basis points
   *
   * @example
   * ```javascript
   * await contract.platformFees.set({
   *   platform_fee_basis_points: 100, // 1% fee
   *   platform_fee_recipient: "0x..." // the fee recipient
   * })
   * ```
   *
   * @param platformFeeInfo - the platform fee information
   * @twfeature PlatformFee
   */
  set = /* @__PURE__ */buildTransactionFunction(async platformFeeInfo => {
    const parsed = await CommonPlatformFeeSchema.parseAsync(platformFeeInfo);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setPlatformFeeInfo",
      args: [parsed.platform_fee_recipient, parsed.platform_fee_basis_points]
    });
  });
}

/**
 * @internal
 * @param abi
 * @param metadata
 */
function extractEventsFromAbi(abi, metadata) {
  const parsedAbi = AbiSchema.parse(abi || []);
  const events = parsedAbi.filter(el => el.type === "event");
  const parsed = [];
  for (const e of events) {
    const doc = extractCommentFromMetadata(e.name, metadata, "events");
    parsed.push({
      inputs: e.inputs || [],
      outputs: e.outputs || [],
      name: e.name || "unknown",
      comment: doc
    });
  }
  return parsed;
}

/**
 * Handles publish metadata for a contract
 * @internal
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars -- TO BE REMOVED IN V4
class ContractPublishedMetadata {
  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }

  /**
   * Get the published metadata for this contract
   * @public
   */
  async get() {
    if (this._cachedMetadata) {
      return this._cachedMetadata;
    }
    this._cachedMetadata = await fetchContractMetadataFromAddress(this.contractWrapper.address, this.contractWrapper.getProvider(), this.storage, this.contractWrapper.options);
    return this._cachedMetadata;
  }

  /**
   * @public
   */
  async extractFunctions() {
    let publishedMetadata;
    try {
      publishedMetadata = await this.get();
    } catch (e) {
      // ignore for built-in contracts
    }
    // to construct a contract we already **have** to have the abi on the contract wrapper, so there is no reason to look fetch it again (means this function can become synchronous as well!)
    return extractFunctionsFromAbi(AbiSchema.parse(this.contractWrapper.abi), publishedMetadata?.metadata);
  }

  /**
   * @public
   */
  async extractEvents() {
    let publishedMetadata;
    try {
      publishedMetadata = await this.get();
    } catch (e) {
      // ignore for built-in contracts
    }
    // to construct a contract we already **have** to have the abi on the contract wrapper, so there is no reason to look fetch it again (means this function can become synchronous as well!)
    return extractEventsFromAbi(AbiSchema.parse(this.contractWrapper.abi), publishedMetadata?.metadata);
  }
}

/**
 * Encodes and decodes Contract functions
 * @public
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TO BE REMOVED IN V4
class ContractOwner {
  featureName = FEATURE_OWNER.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * Get the current owner of the contract
   * @example
   * ```javascript
   * await contract.owner.get();
   * console.log("Owner address: ", ownerAddress);
   * ```
   * @returns the owner address
   * @twfeature Ownable
   */
  async get() {
    return this.contractWrapper.read("owner", []);
  }

  /**
   * Set the new owner of the contract
   * @remarks Can only be called by the current owner.
   *
   * @param address - the address of the new owner
   *
   * @example
   * ```javascript
   * const newOwnerAddress = "{{wallet_address}}";
   * await contract.owner.set(newOwnerAddress);
   * ```
   * @twfeature Ownable
   */
  set = /* @__PURE__ */buildTransactionFunction(async address => {
    const resolvedAddress = await resolveAddress(address);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setOwner",
      args: [resolvedAddress]
    });
  });
}

/**
 * Have an official Application URI for this contract.
 * @remarks Configure an official Application URI for this contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const appURI = await contract.app.get();
 * appURI = "ipfs://some_ipfs_hash";
 *
 * await contract.app.set(appURI)
 * ```
 * @public
 */
class ContractAppURI {
  featureName = FEATURE_APPURI.name;
  constructor(contractWrapper, metadata, storage) {
    this.contractWrapper = contractWrapper;
    this.metadata = metadata;
    this.storage = storage;
  }

  /**
   * Get App URI
   * @returns the appURI (typically an IPFS hash)
   * @example
   * ```javascript
   * const appURI = await contract.app.get();
   * console.log(appURI) // "ipfs://some_ipfs_hash";
   * ```
   * @twfeature AppURI
   */
  async get() {
    if (detectContractFeature(this.contractWrapper, "AppURI")) {
      return await this.contractWrapper.read("appURI", []);
    }
    return replaceGatewayUrlWithScheme((await this.metadata.get()).app_uri || "", this.storage.getGatewayUrls());
  }

  /**
   * Set App URI
   * @param appURI - the uri to set (typically an IPFS hash)
   * @example
   * ```javascript
   * const appURI = "ipfs://some_ipfs_hash";
   * await contract.app.set(appURI);
   * ```
   * @twfeature AppURI
   */
  set = /* @__PURE__ */buildTransactionFunction(async appURI => {
    if (detectContractFeature(this.contractWrapper, "AppURI")) {
      return Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "setAppURI",
        args: [appURI]
      });
    }
    return await this.metadata.update.prepare({
      app_uri: appURI
    });
  });
}

/**
 * @internal
 */
async function extractConstructorParams(predeployMetadataUri, storage) {
  const meta = await fetchPreDeployMetadata(predeployMetadataUri, storage);
  return extractConstructorParamsFromAbi(meta.abi);
}

/**
 * @internal
 * @param predeployMetadataUri
 * @param storage
 */
async function extractFunctions(predeployMetadataUri, storage) {
  const metadata = await fetchPreDeployMetadata(predeployMetadataUri, storage);
  return extractFunctionsFromAbi(metadata.abi, metadata.metadata);
}

async function getCompositeABIfromRelease(publishMetadataUri, storage) {
  const {
    extendedMetadata
  } = await fetchAndCacheDeployMetadata(publishMetadataUri, storage);
  const compositeAbi = extendedMetadata?.compositeAbi || [];
  return compositeAbi;
}

/**
 * @internal
 */
async function getPluginABI(addresses, provider, storage) {
  return (await Promise.all(addresses.map(address => fetchContractMetadataFromAddress(address, provider, storage).catch(err => {
    console.error(`Failed to fetch plug-in for ${address}`, err);
    return {
      abi: []
    };
  })))).map(metadata => metadata.abi);
}

/**
 * @internal
 */
async function getCompositePluginABI(address, abi, provider, options, storage) {
  let pluginABIs = [];
  try {
    // check if contract is plugin-pattern
    const isPluginRouter = isFeatureEnabled(AbiSchema.parse(abi), "PluginRouter");
    const isbaseRouter = isFeatureEnabled(AbiSchema.parse(abi), "DynamicContract");
    if (isbaseRouter) {
      const contract = new ContractWrapper(provider, address, getAllExtensionsAbi, options, storage);
      const plugins = await contract.call("getAllExtensions");

      // get extension addresses
      const pluginAddresses = plugins.map(item => item.metadata.implementation);

      // get ABIs of extension contracts --
      pluginABIs = await getPluginABI(pluginAddresses, provider, storage);
    } else if (isPluginRouter) {
      const contract = new ContractWrapper(provider, address, getAllPluginsAbi, options, storage);
      const pluginMap = await contract.call("getAllPlugins");

      // get extension addresses
      const allPlugins = pluginMap.map(item => item.pluginAddress);
      const plugins = Array.from(new Set(allPlugins));

      // get ABIs of extension contracts
      pluginABIs = await getPluginABI(plugins, provider, storage);
    }
  } catch (err) {}
  return pluginABIs.length > 0 ? joinABIs([abi, ...pluginABIs]) : abi;
}

const DropErc20ContractInput = /* @__PURE__ */CommonContractSchema.merge(MerkleSchema).merge(CommonSymbolSchema);
const DropErc20ContractOutput = /* @__PURE__ */CommonContractOutputSchema.merge(MerkleSchema).merge(CommonSymbolSchema);
const DropErc20ContractDeploy = /* @__PURE__ */DropErc20ContractInput.merge(CommonPlatformFeeSchema).merge(CommonPrimarySaleSchema).merge(CommonTrustedForwarderSchema);
const DropErc20ContractSchema = {
  deploy: DropErc20ContractDeploy,
  output: DropErc20ContractOutput,
  input: DropErc20ContractInput
};

const MultiwrapContractInput = /* @__PURE__ */CommonContractSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const MultiwrapContractOutput = /* @__PURE__ */CommonContractOutputSchema.merge(CommonRoyaltySchema).merge(CommonSymbolSchema);
const MultiwrapContractDeploy = /* @__PURE__ */MultiwrapContractInput.merge(CommonTrustedForwarderSchema);
const MultiwrapContractSchema = {
  deploy: MultiwrapContractDeploy,
  output: MultiwrapContractOutput,
  input: MultiwrapContractInput
};

const ADMIN_ROLE = ["admin"];
const NFT_BASE_CONTRACT_ROLES = ["admin", "minter", "transfer"];
const MARKETPLACE_CONTRACT_ROLES = ["admin", "lister", "asset"];
const PACK_CONTRACT_ROLES = ["admin", "minter", "asset", "transfer"];
const TOKEN_DROP_CONTRACT_ROLES = ["admin", "transfer"];
const MULTIWRAP_CONTRACT_ROLES = ["admin", "transfer", "minter", "unwrap", "asset"];

const prebuiltContractTypes = {
  vote: "vote",
  token: "token",
  "edition-drop": "edition-drop",
  edition: "edition",
  marketplace: "marketplace",
  "marketplace-v3": "marketplace-v3",
  multiwrap: "multiwrap",
  "nft-collection": "nft-collection",
  "nft-drop": "nft-drop",
  pack: "pack",
  "signature-drop": "signature-drop",
  split: "split",
  "token-drop": "token-drop"
};
const EditionDropInitializer = {
  name: "DropERC1155",
  contractType: prebuiltContractTypes["edition-drop"],
  schema: DropErc1155ContractSchema,
  roles: NFT_BASE_CONTRACT_ROLES,
  initialize: async function () {
    for (var _len = arguments.length, _ref = new Array(_len), _key = 0; _key < _len; _key++) {
      _ref[_key] = arguments[_key];
    }
    let [network, address, storage, options] = _ref;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([EditionDropInitializer.getAbi(address, provider, storage), import('./edition-drop-e462b6a4.browser.esm.js'), provider.getNetwork()]);
    return new contract.EditionDrop(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async (address, provider, storage) => {
    const abi = await fetchAbiFromAddress(address, provider, storage);
    if (abi) {
      return abi;
    }
    // Deprecated - only needed for backwards compatibility with non-published contracts - should remove in v4
    const contractInfo = await getContractInfo(address, provider);
    return !contractInfo || contractInfo.version > 2 ? (await import('@thirdweb-dev/contracts-js/dist/abis/DropERC1155.json')).default : (await import('@thirdweb-dev/contracts-js/dist/abis/DropERC1155_V2.json')).default;
  }
};
const EditionInitializer = {
  name: "TokenERC1155",
  contractType: prebuiltContractTypes["edition"],
  schema: TokenErc1155ContractSchema,
  roles: NFT_BASE_CONTRACT_ROLES,
  initialize: async function () {
    for (var _len2 = arguments.length, _ref2 = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      _ref2[_key2] = arguments[_key2];
    }
    let [network, address, storage, options] = _ref2;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([EditionInitializer.getAbi(address, provider, storage), import('./edition-48f54818.browser.esm.js'), provider.getNetwork()]);
    return new contract.Edition(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async (address, provider, storage) => {
    const abi = await fetchAbiFromAddress(address, provider, storage);
    if (abi) {
      return abi;
    }
    // Deprecated - only needed for backwards compatibility with non-published contracts - should remove in v4
    return (await import('@thirdweb-dev/contracts-js/dist/abis/TokenERC1155.json')).default;
  }
};
const MarketplaceInitializer = {
  name: "Marketplace",
  contractType: prebuiltContractTypes.marketplace,
  schema: MarketplaceContractSchema,
  roles: MARKETPLACE_CONTRACT_ROLES,
  initialize: async function () {
    for (var _len3 = arguments.length, _ref3 = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      _ref3[_key3] = arguments[_key3];
    }
    let [network, address, storage, options] = _ref3;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([MarketplaceInitializer.getAbi(address, provider, storage), import('./marketplace-2390d49e.browser.esm.js'), provider.getNetwork()]);
    return new contract.Marketplace(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async (address, provider, storage) => {
    const abi = await fetchAbiFromAddress(address, provider, storage);
    if (abi) {
      return abi;
    }

    // Deprecated - only needed for backwards compatibility with non-published contracts - should remove in v4
    return (await import('@thirdweb-dev/contracts-js/dist/abis/Marketplace.json')).default;
  }
};
const MarketplaceV3Initializer = {
  name: "MarketplaceV3",
  contractType: prebuiltContractTypes["marketplace-v3"],
  schema: MarketplaceContractSchema,
  roles: MARKETPLACE_CONTRACT_ROLES,
  initialize: async function () {
    for (var _len4 = arguments.length, _ref4 = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      _ref4[_key4] = arguments[_key4];
    }
    let [network, address, storage, options] = _ref4;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([MarketplaceV3Initializer.getAbi(address, provider, storage, options), import('./marketplacev3-dba1bc35.browser.esm.js'), provider.getNetwork()]);
    return new contract.MarketplaceV3(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async (address, provider, storage, options) => {
    const chainId = (await provider.getNetwork()).chainId;
    const isZkSync = chainId === 280 || chainId === 324;

    // Can't resolve IPFS hash from plugin bytecode on ZkSync
    // Thus, pull the composite ABI from the release page
    if (isZkSync) {
      const publishedContract = await fetchPublishedContractFromPolygon(THIRDWEB_DEPLOYER, "MarketplaceV3", "latest", storage, options?.clientId, options?.secretKey);
      const uri = publishedContract.metadataUri;
      const compositeAbi = await getCompositeABIfromRelease(uri, storage);
      return compositeAbi;
    }
    const abi = await fetchAbiFromAddress(address, provider, storage);
    if (abi) {
      return await getCompositePluginABI(address, abi, provider, {}, storage);
    }

    // Deprecated - only needed for backwards compatibility with non-published contracts - should remove in v4
    const localAbi = (await import('@thirdweb-dev/contracts-js/dist/abis/MarketplaceV3.json')).default;
    return await getCompositePluginABI(address, AbiSchema.parse(localAbi || []), provider, {}, storage);
  }
};
const MultiwrapInitializer = {
  name: "Multiwrap",
  contractType: prebuiltContractTypes.multiwrap,
  schema: MultiwrapContractSchema,
  roles: MULTIWRAP_CONTRACT_ROLES,
  initialize: async function () {
    for (var _len5 = arguments.length, _ref5 = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      _ref5[_key5] = arguments[_key5];
    }
    let [network, address, storage, options] = _ref5;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([MultiwrapInitializer.getAbi(address, provider, storage), import('./multiwrap-27c199e0.browser.esm.js'), provider.getNetwork()]);
    return new contract.Multiwrap(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async (address, provider, storage) => {
    const abi = await fetchAbiFromAddress(address, provider, storage);
    if (abi) {
      return abi;
    }
    // Deprecated - only needed for backwards compatibility with non-published contracts - should remove in v4
    return (await import('@thirdweb-dev/contracts-js/dist/abis/Multiwrap.json')).default;
  }
};
const NFTCollectionInitializer = {
  name: "TokenERC721",
  contractType: prebuiltContractTypes["nft-collection"],
  schema: TokenErc721ContractSchema,
  roles: NFT_BASE_CONTRACT_ROLES,
  initialize: async function () {
    for (var _len6 = arguments.length, _ref6 = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      _ref6[_key6] = arguments[_key6];
    }
    let [network, address, storage, options] = _ref6;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([NFTCollectionInitializer.getAbi(address, provider, storage), import('./nft-collection-9448911a.browser.esm.js'), provider.getNetwork()]);
    return new contract.NFTCollection(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async (address, provider, storage) => {
    const abi = await fetchAbiFromAddress(address, provider, storage);
    if (abi) {
      return abi;
    }
    // Deprecated - only needed for backwards compatibility with non-published contracts - should remove in v4
    return (await import('@thirdweb-dev/contracts-js/dist/abis/TokenERC721.json')).default;
  }
};
const NFTDropInitializer = {
  name: "DropERC721",
  contractType: prebuiltContractTypes["nft-drop"],
  schema: DropErc721ContractSchema,
  roles: NFT_BASE_CONTRACT_ROLES,
  initialize: async function () {
    for (var _len7 = arguments.length, _ref7 = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      _ref7[_key7] = arguments[_key7];
    }
    let [network, address, storage, options] = _ref7;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([NFTDropInitializer.getAbi(address, provider, storage), import('./nft-drop-0b6bceed.browser.esm.js'), provider.getNetwork()]);
    return new contract.NFTDrop(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async (address, provider, storage) => {
    const abi = await fetchAbiFromAddress(address, provider, storage);
    if (abi) {
      return abi;
    }
    // Deprecated - only needed for backwards compatibility with non-published contracts - should remove in v4
    const contractInfo = await getContractInfo(address, provider);
    return !contractInfo || contractInfo.version > 3 ? (await import('@thirdweb-dev/contracts-js/dist/abis/DropERC721.json')).default : (await import('@thirdweb-dev/contracts-js/dist/abis/DropERC721_V3.json')).default;
  }
};
const PackInitializer = {
  name: "Pack",
  contractType: prebuiltContractTypes["pack"],
  schema: PackContractSchema,
  roles: PACK_CONTRACT_ROLES,
  initialize: async function () {
    for (var _len8 = arguments.length, _ref8 = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      _ref8[_key8] = arguments[_key8];
    }
    let [network, address, storage, options] = _ref8;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([PackInitializer.getAbi(address, provider, storage), import('./pack-d3f8c1d0.browser.esm.js'), provider.getNetwork()]);
    return new contract.Pack(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async (address, provider, storage) => {
    const abi = await fetchAbiFromAddress(address, provider, storage);
    if (abi) {
      return abi;
    }
    // Deprecated - only needed for backwards compatibility with non-published contracts - should remove in v4
    return AbiSchema.parse((await import('@thirdweb-dev/contracts-js/dist/abis/Pack.json')).default || []);
  }
};
const SignatureDropInitializer = {
  name: "SignatureDrop",
  contractType: prebuiltContractTypes["signature-drop"],
  schema: DropErc721ContractSchema,
  roles: NFT_BASE_CONTRACT_ROLES,
  initialize: async function () {
    for (var _len9 = arguments.length, _ref9 = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      _ref9[_key9] = arguments[_key9];
    }
    let [network, address, storage, options] = _ref9;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([SignatureDropInitializer.getAbi(address, provider, storage), import('./signature-drop-d8b2c1ed.browser.esm.js'), provider.getNetwork()]);
    return new contract.SignatureDrop(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async (address, provider, storage) => {
    const abi = await fetchAbiFromAddress(address, provider, storage);
    if (abi) {
      return abi;
    }
    // Deprecated - only needed for backwards compatibility with non-published contracts - should remove in v4
    const contractInfo = await getContractInfo(address, provider);
    return !contractInfo || contractInfo.version > 4 ? (await import('@thirdweb-dev/contracts-js/dist/abis/SignatureDrop.json')).default : (await import('@thirdweb-dev/contracts-js/dist/abis/SignatureDrop_V4.json')).default;
  }
};
const SplitInitializer = {
  name: "Split",
  contractType: prebuiltContractTypes["split"],
  schema: SplitsContractSchema,
  roles: ADMIN_ROLE,
  initialize: async function () {
    for (var _len10 = arguments.length, _ref10 = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      _ref10[_key10] = arguments[_key10];
    }
    let [network, address, storage, options] = _ref10;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([SplitInitializer.getAbi(address, provider, storage), import('./split-4cabc21b.browser.esm.js'), provider.getNetwork()]);
    return new contract.Split(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async (address, provider, storage) => {
    const abi = await fetchAbiFromAddress(address, provider, storage);
    if (abi) {
      return abi;
    }
    // Deprecated - only needed for backwards compatibility with non-published contracts - should remove in v4
    return (await import('@thirdweb-dev/contracts-js/dist/abis/Split.json')).default;
  }
};
const TokenDropInitializer = {
  name: "DropERC20",
  contractType: prebuiltContractTypes["token-drop"],
  schema: DropErc20ContractSchema,
  roles: TOKEN_DROP_CONTRACT_ROLES,
  initialize: async function () {
    for (var _len11 = arguments.length, _ref11 = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      _ref11[_key11] = arguments[_key11];
    }
    let [network, address, storage, options] = _ref11;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([TokenDropInitializer.getAbi(address, provider, storage), import('./token-drop-0ff3c441.browser.esm.js'), provider.getNetwork()]);
    return new contract.TokenDrop(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async (address, provider, storage) => {
    const abi = await fetchAbiFromAddress(address, provider, storage);
    if (abi) {
      return abi;
    }
    // Deprecated - only needed for backwards compatibility with non-published contracts - should remove in v4
    const contractInfo = await getContractInfo(address, provider);
    return !contractInfo || contractInfo.version > 2 ? (await import('@thirdweb-dev/contracts-js/dist/abis/DropERC20.json')).default : (await import('@thirdweb-dev/contracts-js/dist/abis/DropERC20_V2.json')).default;
  }
};
const TokenInitializer = {
  name: "TokenERC20",
  contractType: prebuiltContractTypes.token,
  schema: TokenErc20ContractSchema,
  roles: NFT_BASE_CONTRACT_ROLES,
  initialize: async function () {
    for (var _len12 = arguments.length, _ref12 = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      _ref12[_key12] = arguments[_key12];
    }
    let [network, address, storage, options] = _ref12;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([TokenInitializer.getAbi(address, provider, storage), import('./token-7bc1a4ba.browser.esm.js'), provider.getNetwork()]);
    return new contract.Token(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async (address, provider, storage) => {
    const abi = await fetchAbiFromAddress(address, provider, storage);
    if (abi) {
      return abi;
    }
    // Deprecated - only needed for backwards compatibility with non-published contracts - should remove in v4
    return (await import('@thirdweb-dev/contracts-js/dist/abis/TokenERC20.json')).default;
  }
};
const VoteInitializer = {
  name: "VoteERC20",
  contractType: prebuiltContractTypes.vote,
  schema: VoteContractSchema,
  roles: [],
  initialize: async function () {
    for (var _len13 = arguments.length, _ref13 = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
      _ref13[_key13] = arguments[_key13];
    }
    let [network, address, storage, options] = _ref13;
    const [, provider] = getSignerAndProvider(network, options);
    const [abi, contract, _network] = await Promise.all([VoteInitializer.getAbi(address, provider, storage), import('./vote-8d332984.browser.esm.js'), provider.getNetwork()]);
    return new contract.Vote(network, address, storage, options, abi, _network.chainId);
  },
  getAbi: async (address, provider, storage) => {
    const abi = await fetchAbiFromAddress(address, provider, storage);
    if (abi) {
      return abi;
    }
    // Deprecated - only needed for backwards compatibility with non-published contracts - should remove in v4
    return (await import('@thirdweb-dev/contracts-js/dist/abis/VoteERC20.json')).default;
  }
};
async function getContractInfo(address, provider) {
  try {
    return await getPrebuiltInfo(address, provider);
  } catch (e) {
    return undefined;
  }
}

/**
 * a map from contractType -> contract metadata
 * @internal
 */
const PREBUILT_CONTRACTS_MAP = {
  [prebuiltContractTypes["edition-drop"]]: EditionDropInitializer,
  [prebuiltContractTypes.edition]: EditionInitializer,
  [prebuiltContractTypes.marketplace]: MarketplaceInitializer,
  [prebuiltContractTypes["marketplace-v3"]]: MarketplaceV3Initializer,
  [prebuiltContractTypes.multiwrap]: MultiwrapInitializer,
  [prebuiltContractTypes["nft-collection"]]: NFTCollectionInitializer,
  [prebuiltContractTypes["nft-drop"]]: NFTDropInitializer,
  [prebuiltContractTypes.pack]: PackInitializer,
  [prebuiltContractTypes["signature-drop"]]: SignatureDropInitializer,
  [prebuiltContractTypes.split]: SplitInitializer,
  [prebuiltContractTypes["token-drop"]]: TokenDropInitializer,
  [prebuiltContractTypes.token]: TokenInitializer,
  [prebuiltContractTypes.vote]: VoteInitializer
};
const PREBUILT_CONTRACTS_APPURI_MAP = {
  [prebuiltContractTypes["edition-drop"]]: "ipfs://QmNm3wRzpKYWo1SRtJfgfxtvudp5p2nXD6EttcsQJHwTmk",
  [prebuiltContractTypes.edition]: "",
  [prebuiltContractTypes.marketplace]: "ipfs://QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/marketplace.html",
  [prebuiltContractTypes["marketplace-v3"]]: "ipfs://QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/marketplace-v3.html",
  [prebuiltContractTypes.multiwrap]: "",
  [prebuiltContractTypes["nft-collection"]]: "",
  [prebuiltContractTypes["nft-drop"]]: "ipfs://QmZptmVipc6SGFbKAyXcxGgohzTwYRXZ9LauRX5ite1xDK",
  [prebuiltContractTypes.pack]: "",
  [prebuiltContractTypes["signature-drop"]]: "ipfs://QmZptmVipc6SGFbKAyXcxGgohzTwYRXZ9LauRX5ite1xDK",
  [prebuiltContractTypes.split]: "",
  [prebuiltContractTypes["token-drop"]]: "ipfs://QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc20.html",
  [prebuiltContractTypes.token]: "",
  [prebuiltContractTypes.vote]: ""
};
const SmartContract$1 = {
  name: "SmartContract",
  contractType: "custom",
  schema: {},
  roles: ALL_ROLES
};
const CONTRACTS_MAP = {
  ...PREBUILT_CONTRACTS_MAP,
  [SmartContract$1.contractType]: SmartContract$1
};

/**
 * @internal
 */
function getContractTypeForRemoteName(name) {
  return Object.values(CONTRACTS_MAP).find(contract => contract.name === name)?.contractType || "custom";
}
function getContractName(type) {
  return Object.values(CONTRACTS_MAP).find(contract => contract.contractType === type)?.name;
}

const SignerPermissionsSchema = /* @__PURE__ */z.object({
  startDate: StartDateSchema,
  expirationDate: EndDateSchema,
  nativeTokenLimitPerTransaction: /* @__PURE__ */AmountSchema.default(0),
  approvedCallTargets: /* @__PURE__ */z.array(AddressOrEnsSchema)
});
const PermissionSnapshotSchema = /* @__PURE__ */z.array( /* @__PURE__ */z.object({
  signer: AddressOrEnsSchema,
  makeAdmin: /* @__PURE__ */z.boolean(),
  permissions: SignerPermissionsSchema
}));
const SignerPermissionRequest = [{
  name: "signer",
  type: "address"
}, {
  name: "approvedTargets",
  type: "address[]"
}, {
  name: "nativeTokenLimitPerTransaction",
  type: "uint256"
}, {
  name: "permissionStartTimestamp",
  type: "uint128"
}, {
  name: "permissionEndTimestamp",
  type: "uint128"
}, {
  name: "reqValidityStartTimestamp",
  type: "uint128"
}, {
  name: "reqValidityEndTimestamp",
  type: "uint128"
}, {
  name: "uid",
  type: "bytes32"
}];

class AccountPermissions {
  featureName = FEATURE_ACCOUNT_PERMISSIONS.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /*********************************
   * HELPER FUNCTIONS
   ********************************/

  hasDuplicateSigners(snapshot) {
    const checkedSigner = {};
    const signers = snapshot.map(item => item.signer);
    for (const signer of signers) {
      if (!checkedSigner[signer]) {
        checkedSigner[signer] = true;
      } else {
        return true;
      }
    }
    return false;
  }

  /**
   * Format the access restrictions for a given role
   *
   * @param restrictions - The access restrictions for a given role
   * @returns formatted role restrictions
   *
   */
  parseSignerPermissionsStruct(permissions) {
    return {
      startDate: new Date(parseInt(permissions.startTimestamp.toString()) * 1000),
      expirationDate: new Date(parseInt(permissions.endTimestamp.toString()) * 1000),
      nativeTokenLimitPerTransaction: BigNumber.from(permissions.nativeTokenLimitPerTransaction),
      approvedCallTargets: permissions.approvedTargets
    };
  }
  async sendSignerPermissionRequest(signerAddress, permissions) {
    const {
      payload,
      signature
    } = await this.generatePayload(signerAddress, permissions);
    const [success] = await this.contractWrapper.read("verifySignerPermissionRequest", [payload, signature]);
    if (!success) {
      throw new Error(`Invalid signature.`);
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setPermissionsForSigner",
      args: [payload, signature]
    });
  }
  async buildSignerPermissionRequest(signerAddress, permissions) {
    const {
      payload,
      signature
    } = await this.generatePayload(signerAddress, permissions);
    const isValidSigner = await this.contractWrapper.read("verifySignerPermissionRequest", [payload, signature]);
    if (!isValidSigner) {
      throw new Error(`Invalid signature.`);
    }
    return this.contractWrapper.writeContract.interface.encodeFunctionData("setPermissionsForSigner", [payload, signature]);
  }

  /**
   * Generate and sign a payload to grant or revoke a signer's access to the account.
   *
   * @param signer - The address of the signer
   * @param roleAction - The address of the signer
   * @returns The generated payload and signature produced on signing that payload.
   *
   */
  async generatePayload(signerAddress, permissions) {
    // Get payload struct.
    const payload = {
      signer: signerAddress,
      approvedTargets: permissions.approvedCallTargets,
      nativeTokenLimitPerTransaction: utils.parseEther(permissions.nativeTokenLimitPerTransaction),
      permissionStartTimestamp: permissions.startDate,
      permissionEndTimestamp: permissions.expirationDate,
      reqValidityStartTimestamp: 0,
      // Req validity ends 10 years from now.
      reqValidityEndTimestamp: BigNumber.from(Math.floor(new Date(Date.now() + 1000 * 60 * 60 * 24 * 365 * 10).getTime() / 1000)),
      uid: resolveOrGenerateId(undefined)
    };

    // Generate signature
    const chainId = await this.contractWrapper.getChainID();
    const connectedSigner = this.contractWrapper.getSigner();
    invariant(connectedSigner, "No signer available");
    const signature = await this.contractWrapper.signTypedData(connectedSigner, {
      name: "Account",
      version: "1",
      chainId,
      verifyingContract: this.getAddress()
    }, {
      SignerPermissionRequest
    }, payload);
    return {
      payload,
      signature
    };
  }

  /*********************************
   * READ FUNCTIONS
   ********************************/

  /**
   * Get whether a signer is an admin on the account.
   *
   * @example
   * ```javascript
   * const isAdmin = await contract.account.isAdmin(signer);
   * ```
   * @param signer - The address of a signer of the account.
   * @returns whether a signer is an admin on the account.
   *
   * @twfeature AccountPermissions
   */
  async isAdmin(signerAddress) {
    const resolvedSignerAddress = await resolveAddress(signerAddress);
    return await this.contractWrapper.read("isAdmin", [resolvedSignerAddress]);
  }

  /**
   * Get whether a signer has permissions to use the account.
   *
   * @example
   * ```javascript
   * const isAdmin = await contract.account.isSigner(signer);
   * ```
   * @param signer - The address of a signer of the account.
   * @returns whether a signer has permissions to use the account.
   *
   * @twfeature AccountPermissions
   */
  async isSigner(signerAddress) {
    const resolvedSignerAddress = await resolveAddress(signerAddress);
    return await this.contractWrapper.read("isActiveSigner", [resolvedSignerAddress]);
  }

  /**
   * Get all admins of the account.
   *
   * @example
   * ```javascript
   * const allAdmins = await contract.account.getAllAdmins();
   * ```
   *
   * @returns all admins of the account.
   *
   * @twfeature AccountPermissions
   */
  async getAllAdmins() {
    return await this.contractWrapper.read("getAllAdmins", []);
  }

  /**
   * Get all (non-admin) signers with permissions to use the account.
   *
   * @example
   * ```javascript
   * const allSigners = await contract.account.getAllSigners();
   * ```
   *
   * @returns all (non-admin) signers with permissions to use the account.
   *
   * @twfeature AccountPermissions
   */
  async getAllSigners() {
    const activeSignersWithPerms = await this.contractWrapper.read("getAllActiveSigners", []);
    return await Promise.all(activeSignersWithPerms.map(async signerWithPermissions => {
      const signer = signerWithPermissions.signer;
      const permissions = this.parseSignerPermissionsStruct(signerWithPermissions);
      return {
        signer,
        permissions
      };
    }));
  }

  /**
   * Get all admins and non-admin signers with permissions to use the account.
   *
   * @example
   * ```javascript
   * const allAdminsAndSigners = await contract.account.getAllAdminsAndSigners();
   * ```
   *
   * @returns all admins and non-admin signers with permissions to use the account.
   *
   * @twfeature AccountPermissions
   */
  async getAllAdminsAndSigners() {
    const allAdmins = await this.getAllAdmins();
    const transformedAdmins = allAdmins.map(admin => {
      return {
        isAdmin: true,
        signer: admin,
        permissions: {
          startDate: new Date(0),
          expirationDate: new Date(0),
          nativeTokenLimitPerTransaction: BigNumber.from(0),
          approvedCallTargets: []
        }
      };
    });
    const allSigners = await this.getAllSigners();
    return [...transformedAdmins, ...allSigners];
  }

  /*********************************
   * WRITE FUNCTIONS
   ********************************/

  /**
   * Grant an address admin access to the account.
   *
   * @remarks Grants an address admin access to the account. The admin will have complete authority over the account.
   *
   * @param signer - The address to be granted admin access to the account.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.grantAdminAccess(signer);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  grantAdminPermissions = /* @__PURE__ */buildTransactionFunction(async signerAddress => {
    const resolvedSignerAddress = await resolveAddress(signerAddress);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setAdmin",
      args: [resolvedSignerAddress, true]
    });
  });

  /**
   * Revoke an address' admin access to the account.
   *
   * @remarks Revokes an address' admin access to the account.
   *
   * @param signer - The address of an admin of the account.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.revokeAdminAccess(signer);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  revokeAdminPermissions = /* @__PURE__ */buildTransactionFunction(async signerAddress => {
    const resolvedSignerAddress = await resolveAddress(signerAddress);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setAdmin",
      args: [resolvedSignerAddress, false]
    });
  });

  /**
   * Grant a signer permissions to use the account.
   *
   * @remarks Grants a signer permissions to use the account.
   *
   * @param signer - The signer to be granted permissions to use the account.
   * @param permissions - The permissions to be applied to the signer's use of the account.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.grantPermissions(signer, permissions);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  grantPermissions = /* @__PURE__ */buildTransactionFunction(async (signerAddress, permissions) => {
    const resolvedSignerAddress = await resolveAddress(signerAddress);
    const resolvedPermissions = await SignerPermissionsSchema.parseAsync(permissions);
    if (await this.isAdmin(resolvedSignerAddress)) {
      throw new Error("Signer is already an admin. Cannot grant permissions to an existing admin.");
    }
    if (await this.isSigner(resolvedSignerAddress)) {
      throw new Error("Signer already has permissions. Cannot grant permissions to an existing signer. You can update permissions using `updatePermissions`.");
    }
    return await this.sendSignerPermissionRequest(resolvedSignerAddress, resolvedPermissions);
  });

  /**
   * Update the permissions of a signer for using the account.
   *
   * @remarks Updates the permissions of a signer for using the account.
   *
   * @param signer - The signer whose permissions to use the account are to be updated.
   * @param permissions - The permissions to be applied to the signer's use of the account.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.updateAccess(signer, restrictions);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  updatePermissions = /* @__PURE__ */buildTransactionFunction(async (signerAddress, permissions) => {
    const resolvedSignerAddress = await resolveAddress(signerAddress);
    const resolvedPermissions = await SignerPermissionsSchema.parseAsync(permissions);
    if (await this.isAdmin(resolvedSignerAddress)) {
      throw new Error("Signer is already an admin. Cannot update permissions of an existing admin.");
    }
    if (!(await this.isSigner(resolvedSignerAddress))) {
      throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");
    }
    return await this.sendSignerPermissionRequest(resolvedSignerAddress, resolvedPermissions);
  });

  /**
   * Revoke a scoped access address to the account
   *
   * @remarks Revokes an address' access to the account.
   *
   * @param signer - The address whose access to the account is to be revoked.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.revokeAccess(signer);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  revokeAccess = /* @__PURE__ */buildTransactionFunction(async signerAddress => {
    const resolvedSignerAddress = await resolveAddress(signerAddress);
    if (await this.isAdmin(resolvedSignerAddress)) {
      throw new Error("Signer is already an admin. Cannot revoke permissions of an admin.");
    }
    if (!(await this.isSigner(resolvedSignerAddress))) {
      throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");
    }
    return await this.sendSignerPermissionRequest(resolvedSignerAddress, {
      startDate: BigNumber.from(0),
      expirationDate: BigNumber.from(0),
      approvedCallTargets: [],
      nativeTokenLimitPerTransaction: "0"
    });
  });

  /**
   * Approve an address as a call target for a given signer on the account
   *
   * @remarks Approves an address as a call target for a given signer on the account.
   *
   * @param signer - A signer with restricted access to the account.
   * @param target - The address to approve as a call target for the signer.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.approveTargetForSigner(signer, target);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  approveTargetForSigner = /* @__PURE__ */buildTransactionFunction(async (signerAddress, target) => {
    const resolvedSignerAddress = await resolveAddress(signerAddress);
    const resolvedTarget = await resolveAddress(target);
    if (await this.isAdmin(resolvedSignerAddress)) {
      throw new Error("Signer is already an admin. Cannot approve targets for an admin.");
    }
    if (!(await this.isSigner(resolvedSignerAddress))) {
      throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");
    }
    const permissions = await this.contractWrapper.read("getPermissionsForSigner", [resolvedSignerAddress]);
    if (permissions.approvedTargets.includes(target)) {
      throw new Error("Target is already approved");
    }
    const newTargets = [...permissions.approvedTargets, resolvedTarget];
    return await this.sendSignerPermissionRequest(resolvedSignerAddress, {
      startDate: BigNumber.from(permissions.startTimestamp),
      expirationDate: BigNumber.from(permissions.endTimestamp),
      approvedCallTargets: newTargets,
      nativeTokenLimitPerTransaction: permissions.nativeTokenLimitPerTransaction.toString()
    });
  });

  /**
   * Disapprove an address as a call target for a given signer on the account
   *
   * @remarks Disapprove an address as a call target for a given signer on the account.
   *
   * @param signer - A signer with restricted access to the account.
   * @param target - The address to disapprove as a call target for the signer.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.disapproveTargetForSigner(signer, target);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  disapproveTargetForSigner = /* @__PURE__ */buildTransactionFunction(async (signerAddress, target) => {
    const resolvedSignerAddress = await resolveAddress(signerAddress);
    const resolvedTarget = await resolveAddress(target);
    if (await this.isAdmin(resolvedSignerAddress)) {
      throw new Error("Signer is already an admin. Cannot approve targets for an admin.");
    }
    if (!(await this.isSigner(resolvedSignerAddress))) {
      throw new Error("Signer does not already have permissions. You can grant permissions using `grantPermissions`.");
    }
    const permissions = await this.contractWrapper.read("getPermissionsForSigner", [resolvedSignerAddress]);
    if (!permissions.approvedTargets.includes(resolvedTarget)) {
      throw new Error("Target is currently not approved");
    }
    const newTargets = permissions.approvedTargets.filter(approvedTarget => utils.getAddress(approvedTarget) !== utils.getAddress(resolvedTarget));
    return await this.sendSignerPermissionRequest(resolvedSignerAddress, {
      startDate: BigNumber.from(permissions.startTimestamp),
      expirationDate: BigNumber.from(permissions.endTimestamp),
      approvedCallTargets: newTargets,
      nativeTokenLimitPerTransaction: permissions.nativeTokenLimitPerTransaction.toString()
    });
  });

  /**
   * Set the account's entire snapshot of permissions.
   *
   * @remarks Sets the account's entire snapshot of permissions.
   *
   * @param permissionSnapshot - the snapshot to set as the account's entire permission snapshot.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.setAccess(permissionSnapshot);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  resetAllPermissions = /* @__PURE__ */buildTransactionFunction(async permissionSnapshot => {
    const resolvedSnapshot = await PermissionSnapshotSchema.parseAsync(permissionSnapshot);

    /**
     * All cases
     *
     * - Add new admin :check:
     * - Remove current admin :check:
     * - Add new scoped :check:
     * - Remove current scoped :check:
     * - Update current scoped :check:
     * - Current admin -> new scoped :check:
     * - Current scoped -> new admin :check:
     **/

    // No duplicate signers in input!
    if (this.hasDuplicateSigners(resolvedSnapshot)) {
      throw new Error("Duplicate signers found in input.");
    }
    const addAdminData = [];
    const removeAdminData = [];
    const addOrUpdateSignerData = [];
    const removeSignerData = [];

    // Remove all existing admins not included in the passed snapshot.
    const allAdmins = await this.getAllAdmins();
    const allToMakeAdmin = resolvedSnapshot.filter(item => item.makeAdmin).map(item => item.signer);
    allAdmins.forEach(admin => {
      if (!allToMakeAdmin.includes(admin)) {
        removeAdminData.push(this.contractWrapper.writeContract.interface.encodeFunctionData("setAdmin", [admin, false]));
      }
    });

    // Remove all existing signers not included in the passed snapshot.
    const allSigners = await this.getAllSigners();
    const allToMakeSigners = resolvedSnapshot.filter(item => {
      return !item.makeAdmin;
    }).map(item => item.signer);
    await Promise.all(allSigners.map(async item => {
      if (!allToMakeSigners.includes(item.signer)) {
        const data = await this.buildSignerPermissionRequest(item.signer, {
          startDate: BigNumber.from(0),
          expirationDate: BigNumber.from(0),
          approvedCallTargets: [],
          nativeTokenLimitPerTransaction: "0"
        });
        removeSignerData.push(data);
      }
    }));
    for (const member of resolvedSnapshot) {
      // Add new admin
      if (member.makeAdmin) {
        addAdminData.push(this.contractWrapper.writeContract.interface.encodeFunctionData("setAdmin", [member.signer, true]));
      } else {
        // Add new scoped
        const data = await this.buildSignerPermissionRequest(member.signer, member.permissions);
        addOrUpdateSignerData.push(data);
      }
    }
    const data = [];
    removeAdminData.forEach(item => {
      data.push(item);
    });
    removeSignerData.forEach(item => {
      data.push(item);
    });
    addOrUpdateSignerData.forEach(item => {
      data.push(item);
    });
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [data]
    });
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TO BE REMOVED IN V4
class Account {
  featureName = FEATURE_ACCOUNT.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
    this.accountPermissions = this.detectAccountPermissions();
  }
  detectAccountPermissions() {
    if (detectContractFeature(this.contractWrapper, "AccountPermissions")) {
      return new AccountPermissions(this.contractWrapper);
    }
    return undefined;
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /*********************************
   * READ FUNCTIONS
   ********************************/

  /**
   * Get whether a signer is an admin on the account.
   *
   * @example
   * ```javascript
   * const isAdmin = await contract.account.isAdmin(signer);
   * ```
   * @param signer - The address of a signer of the account.
   * @returns whether a signer is an admin on the account.
   *
   * @twfeature AccountPermissions
   */
  async isAdmin(signerAddress) {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).isAdmin(signerAddress);
  }

  /**
   * Get whether a signer has permissions to use the account.
   *
   * @example
   * ```javascript
   * const isAdmin = await contract.account.isSigner(signer);
   * ```
   * @param signer - The address of a signer of the account.
   * @returns whether a signer has permissions to use the account.
   *
   * @twfeature AccountPermissions
   */
  async isSigner(signerAddress) {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).isSigner(signerAddress);
  }

  /**
   * Get all admins of the account.
   *
   * @example
   * ```javascript
   * const allAdmins = await contract.account.getAllAdmins();
   * ```
   *
   * @returns all admins of the account.
   *
   * @twfeature AccountPermissions
   */
  async getAllAdmins() {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).getAllAdmins();
  }

  /**
   * Get all (non-admin) signers with permissions to use the account.
   *
   * @example
   * ```javascript
   * const allSigners = await contract.account.getAllSigners();
   * ```
   *
   * @returns all (non-admin) signers with permissions to use the account.
   *
   * @twfeature AccountPermissions
   */
  async getAllSigners() {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).getAllSigners();
  }

  /**
   * Get all admins and non-admin signers with permissions to use the account.
   *
   * @example
   * ```javascript
   * const allAdminsAndSigners = await contract.account.getAllAdminsAndSigners();
   * ```
   *
   * @returns all admins and non-admin signers with permissions to use the account.
   *
   * @twfeature AccountPermissions
   */
  async getAllAdminsAndSigners() {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).getAllAdminsAndSigners();
  }

  /*********************************
   * WRITE FUNCTIONS
   ********************************/

  /**
   * Grant an address admin access to the account.
   *
   * @remarks Grants an address admin access to the account. The admin will have complete authority over the account.
   *
   * @param signer - The address to be granted admin access to the account.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.grantAdminAccess(signer);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  grantAdminPermissions = /* @__PURE__ */buildTransactionFunction(async signerAddress => {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).grantAdminPermissions.prepare(signerAddress);
  });

  /**
   * Revoke an address' admin access to the account.
   *
   * @remarks Revokes an address' admin access to the account.
   *
   * @param signer - The address of an admin of the account.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.revokeAdminAccess(signer);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  revokeAdminPermissions = /* @__PURE__ */buildTransactionFunction(async signerAddress => {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).revokeAdminPermissions.prepare(signerAddress);
  });

  /**
   * Grant a signer permissions to use the account.
   *
   * @remarks Grants a signer permissions to use the account.
   *
   * @param signer - The signer to be granted permissions to use the account.
   * @param permissions - The permissions to be applied to the signer's use of the account.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.grantPermissions(signer, permissions);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  grantPermissions = /* @__PURE__ */buildTransactionFunction(async (signerAddress, permissions) => {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).grantPermissions.prepare(signerAddress, permissions);
  });

  /**
   * Update the permissions of a signer for using the account.
   *
   * @remarks Updates the permissions of a signer for using the account.
   *
   * @param signer - The signer whose permissions to use the account are to be updated.
   * @param permissions - The permissions to be applied to the signer's use of the account.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.updateAccess(signer, restrictions);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  updatePermissions = /* @__PURE__ */buildTransactionFunction(async (signerAddress, permissions) => {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).updatePermissions.prepare(signerAddress, permissions);
  });

  /**
   * Revoke a scoped access address to the account
   *
   * @remarks Revokes an address' access to the account.
   *
   * @param signer - The address whose access to the account is to be revoked.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.revokeAccess(signer);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  revokeAccess = /* @__PURE__ */buildTransactionFunction(async signerAddress => {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).revokeAccess.prepare(signerAddress);
  });

  /**
   * Approve an address as a call target for a given signer on the account
   *
   * @remarks Approves an address as a call target for a given signer on the account.
   *
   * @param signer - A signer with restricted access to the account.
   * @param target - The address to approve as a call target for the signer.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.approveTargetForSigner(signer, target);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  approveTargetForSigner = /* @__PURE__ */buildTransactionFunction(async (signerAddress, target) => {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).approveTargetForSigner.prepare(signerAddress, target);
  });

  /**
   * Disapprove an address as a call target for a given signer on the account
   *
   * @remarks Disapprove an address as a call target for a given signer on the account.
   *
   * @param signer - A signer with restricted access to the account.
   * @param target - The address to disapprove as a call target for the signer.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.disapproveTargetForSigner(signer, target);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  disapproveTargetForSigner = /* @__PURE__ */buildTransactionFunction(async (signerAddress, target) => {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).disapproveTargetForSigner.prepare(signerAddress, target);
  });

  /**
   * Set the account's entire snapshot of permissions.
   *
   * @remarks Sets the account's entire snapshot of permissions.
   *
   * @param permissionSnapshot - the snapshot to set as the account's entire permission snapshot.
   *
   * @example
   * ```javascript
   * const tx = await contract.account.setAccess(permissionSnapshot);
   * const receipt = tx.receipt();
   * ```
   *
   * @twfeature AccountPermissions
   */
  resetAllPermissions = /* @__PURE__ */buildTransactionFunction(async permissionSnapshot => {
    return assertEnabled(this.accountPermissions, FEATURE_ACCOUNT_PERMISSIONS).resetAllPermissions.prepare(permissionSnapshot);
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars -- TO BE REMOVED IN V4
class AccountFactory {
  featureName = FEATURE_ACCOUNT_FACTORY.name;

  // utilities

  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
    this.events = new ContractEvents(this.contractWrapper);
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /*********************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the deterministic address of the account that will be created
   *
   * @example
   * ```javascript
   * const accountAddress = await contract.accountFactory.predictAccountAddress(admin);
   * ```
   * @param admin - The admin of the account.
   * @param extraData - (Optional) Extra data to be passed to the account on creation.
   * @returns the deterministic address of the account that will be created for the given admin.
   *
   * @twfeature AccountFactory
   */
  async predictAccountAddress(admin, extraData) {
    let data = utils.toUtf8Bytes("");
    if (extraData) {
      data = extraData;
    }
    return this.contractWrapper.read("getAddress", [admin, data]);
  }

  /**
   * Get all accounts on which the given signer has authority
   *
   * @example
   * ```javascript
   * const allAccounts = await contract.accountFactory.getAssociatedAccounts(admin);
   * ```
   * @param signer - The account address.
   * @returns all accounts on which the given signer has authority.
   *
   * @twfeature AccountFactory
   */
  async getAssociatedAccounts(signer) {
    return this.contractWrapper.read("getAccountsOfSigner", [signer]);
  }

  /**
   * Get all accounts
   *
   * @example
   * ```javascript
   * const allAccounts = await contract.accountFactory.getAllAccounts();
   * ```
   *
   * @returns all accounts created via the account factory.
   *
   * @twfeature AccountFactory
   */
  async getAllAccounts() {
    return await this.contractWrapper.read("getAllAccounts", []);
  }

  /**
   * Check if a account has been deployed for the given admin
   *
   * @param admin - The admin of the account.
   * @param extraData - (Optional) Extra data to be passed to the account on creation.
   * @returns whether the account has been deployed for the given admin.
   */
  async isAccountDeployed(admin, extraData) {
    const addr = await this.predictAccountAddress(admin, extraData);
    return isContractDeployed(addr, this.contractWrapper.getProvider());
  }

  /*********************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create a account
   *
   * @remarks Create a account for an admin. The admin will have complete authority over the account.
   *
   * @param admin - The admin of the account.
   * @param extraData - (Optional) Extra data to be passed to the account on creation.
   *
   * @example
   *  ```javascript
   * const tx = await contract.accountFactory.createAccount(admin, extraData);
   * const receipt = tx.receipt();
   * const accountAddress = tx.address;
   * ```
   *
   * @twfeature AccountFactory
   */
  createAccount = /* @__PURE__ */buildTransactionFunction(async (accountAdmin, extraData) => {
    if (await this.isAccountDeployed(accountAdmin, extraData)) {
      throw new Error(`Account already deployed for admin: ${accountAdmin}`);
    }
    let data = utils.toUtf8Bytes("");
    if (extraData) {
      data = extraData;
    }
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "createAccount",
      args: [accountAdmin, data],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("AccountCreated", receipt?.logs);
        return {
          address: event[0].args.account,
          receipt
        };
      }
    });
  });
}

/**
 * @public
 */
class Airdrop1155 {
  featureName = FEATURE_AIRDROP_ERC1155.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * @internal
   */
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Perform airdrop of ERC1155 tokens
   *
   * @example
   * ```javascript
   * // Airdrop content array, with recipients and tokenIds
   * const contents = [
   *      {
   *        recipient: "0xabc...", // first recipient address
   *        tokenId: 0,
   *        amount: "10" // number of tokens
   *      },
   *      {
   *        recipient: "0x123...", // second recipient address
   *        tokenId: 0
   *        amount: "20" // number of tokens
   *      }
   *   ]
   *
   * const tokenAddress = "0x..." // Address of the ERC1155 token being airdropped
   * const tokenOwner = "0x..." // Address of the owner of the tokens being airdropped
   *
   * const output = await contract.airdrop1155.drop(tokenAddress, tokenOwner, contents);
   *
   * // the `output` return value above contains:
   * //     - count of successful and failed drops
   * //     - array containing failed drops, if any
   *
   * ```
   * @param tokenAddress
   * @param tokenOwner
   * @param contents
   *
   * @returns an array of recipients for who the airdrop failed (empty means all transfers were successful)
   * @twfeature AirdropERC1155
   */
  drop = /* @__PURE__ */buildTransactionFunction(async (tokenAddress, tokenOwner, contents) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "airdropERC1155",
      args: [tokenAddress, tokenOwner, contents],
      parse: receipt => {
        const events = this.contractWrapper.parseLogs("AirdropFailed", receipt.logs);
        const failedDrops = events.map(e => {
          return {
            recipient: e.args.recipient,
            tokenId: e.args.tokenId.toNumber(),
            amount: e.args.amount.toString()
          };
        });
        return {
          successfulDropCount: contents.length - failedDrops.length,
          failedDropCount: failedDrops.length,
          failedDrops
        };
      }
    });
  });
}

/**
 * @public
 */
class Airdrop20 {
  featureName = FEATURE_AIRDROP_ERC20.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * @internal
   */
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Perform airdrop of ERC20 tokens
   *
   * @example
   * ```javascript
   * // Airdrop content array, with recipients and token amounts
   * const contents = [
   *      {
   *        recipient: "0xabc...", // first recipient address
   *        amount: "10" // number of tokens in wei units
   *      },
   *      {
   *        recipient: "0x123...", // second recipient address
   *        amount: "20" // number of tokens in wei units
   *      }
   *   ]
   *
   * const tokenAddress = "0x..." // Address of the ERC20 token being airdropped
   * const tokenOwner = "0x..." // Address of the owner of the tokens being airdropped
   *
   * const output = await contract.airdrop20.drop(tokenAddress, tokenOwner, contents);
   *
   * // the `output` return value above contains:
   * //     - count of successful and failed drops
   * //     - array containing failed drops, if any
   *
   * ```
   * @param tokenAddress
   * @param tokenOwner
   * @param contents
   *
   * @returns an array of recipients for who the airdrop failed (empty means all transfers were successful)
   * @twfeature AirdropERC20
   */
  drop = /* @__PURE__ */buildTransactionFunction(async (tokenAddress, tokenOwner, contents) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "airdropERC20",
      args: [tokenAddress, tokenOwner, contents],
      parse: receipt => {
        const events = this.contractWrapper.parseLogs("AirdropFailed", receipt.logs);
        const failedDrops = events.map(e => {
          return {
            recipient: e.args.recipient,
            amount: e.args.amount.toString()
          };
        });
        return {
          successfulDropCount: contents.length - failedDrops.length,
          failedDropCount: failedDrops.length,
          failedDrops
        };
      }
    });
  });
}

/**
 * @public
 */
class Airdrop721 {
  featureName = FEATURE_AIRDROP_ERC721.name;
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }

  /**
   * @internal
   */
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Perform airdrop of ERC721 tokens
   *
   * @example
   * ```javascript
   * // Airdrop content array, with recipients and tokenIds
   * const contents = [
   *      {
   *        recipient: "0xabc...", // first recipient address
   *        tokenId: 0
   *      },
   *      {
   *        recipient: "0x123...", // second recipient address
   *        tokenId: 2
   *      }
   *   ]
   *
   * const tokenAddress = "0x..." // Address of the ERC721 token being airdropped
   * const tokenOwner = "0x..." // Address of the owner of the tokens being airdropped
   *
   * const output = await contract.airdrop721.drop(tokenAddress, tokenOwner, contents);
   *
   * // the `output` return value above contains:
   * //     - count of successful and failed drops
   * //     - array containing failed drops, if any
   *
   * ```
   * @param tokenAddress
   * @param tokenOwner
   * @param contents
   *
   * @returns an array of recipients for who the airdrop failed (empty means all transfers were successful)
   * @twfeature AirdropERC721
   */
  drop = /* @__PURE__ */buildTransactionFunction(async (tokenAddress, tokenOwner, contents) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "airdropERC721",
      args: [tokenAddress, tokenOwner, contents],
      parse: receipt => {
        const events = this.contractWrapper.parseLogs("AirdropFailed", receipt.logs);
        const failedDrops = events.map(e => {
          return {
            recipient: e.args.recipient,
            tokenId: e.args.tokenId.toNumber()
          };
        });
        return {
          successfulDropCount: contents.length - failedDrops.length,
          failedDropCount: failedDrops.length,
          failedDrops
        };
      }
    });
  });
}

/**
 * Custom contract dynamic class with feature detection
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK(provider);
 * const contract = await sdk.getContract("{{contract_address}}");
 *
 * // call any function in your contract
 * await contract.call("myCustomFunction", [param1, param2]);
 *
 * // if your contract follows the ERC721 standard, contract.nft will be present
 * const allNFTs = await contract.erc721.query.all()
 *
 * // if your contract extends IMintableERC721, contract.nft.mint() will be available
 * const tx = await contract.erc721.mint({
 *     name: "Cool NFT",
 *     image: readFileSync("some_image.png"),
 *   });
 * ```
 *
 * @beta
 */
class SmartContract {
  // utilities

  /**
   * Handle royalties
   */
  get royalties() {
    return assertEnabled(this.detectRoyalties(), FEATURE_ROYALTY);
  }

  /**
   * Handle permissions
   */
  get roles() {
    return assertEnabled(this.detectRoles(), FEATURE_PERMISSIONS);
  }

  /**
   * Handle primary sales
   */
  get sales() {
    return assertEnabled(this.detectPrimarySales(), FEATURE_PRIMARY_SALE);
  }

  /**
   * Handle platform fees
   */
  get platformFees() {
    return assertEnabled(this.detectPlatformFees(), FEATURE_PLATFORM_FEE);
  }

  /**
   * Set and get the owner of the contract
   */
  get owner() {
    return assertEnabled(this.detectOwnable(), FEATURE_OWNER);
  }

  /**
   * Auto-detects ERC20 standard functions.
   */
  get erc20() {
    return assertEnabled(this.detectErc20(), FEATURE_TOKEN);
  }

  /**
   * Auto-detects ERC721 standard functions.
   */
  get erc721() {
    return assertEnabled(this.detectErc721(), FEATURE_NFT);
  }

  /**
   * Auto-detects ERC1155 standard functions.
   */
  get erc1155() {
    return assertEnabled(this.detectErc1155(), FEATURE_EDITION);
  }

  /**
   * Auto-detects AppURI standard functions.
   */
  get app() {
    return assertEnabled(this.detectApp(), FEATURE_APPURI);
  }

  /**
   * Direct listings
   * @remarks Create and manage direct listings in your marketplace.
   * ```javascript
   * // Data of the listing you want to create
   * const listing = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // The price to pay per unit of NFTs listed.
   *   pricePerToken: 1.5,
   *   // when should the listing open up for offers
   *   startTimestamp: new Date(Date.now()),
   *   // how long the listing will be open for
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   *   // Whether the listing is reserved for a specific set of buyers.
   *   isReservedListing: false
   * }
   *
   * const tx = await contract.directListings.createListing(listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created listing
   *
   * // And on the buyers side:
   * // The ID of the listing you want to buy from
   * const listingId = 0;
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   *
   * await contract.directListings.buyFromListing(listingId, quantityDesired);
   * ```
   */
  get directListings() {
    return assertEnabled(this.detectDirectListings(), FEATURE_DIRECT_LISTINGS);
  }
  /**
   * Auctions
   * @remarks Create and manage auctions in your marketplace.
   * @example
   * ```javascript
   * // Data of the auction you want to create
   * const auction = {
   *   // address of the contract of the asset you want to auction
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to auction
   *   tokenId: "0",
   *   // how many of the asset you want to auction
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the auctioned tokens
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // the minimum bid that will be accepted for the token
   *   minimumBidAmount: "1.5",
   *   // how much people would have to bid to instantly buy the asset
   *   buyoutBidAmount: "10",
   *   // If a bid is made less than these many seconds before expiration, the expiration time is increased by this.
   *   timeBufferInSeconds: "1000",
   *   // A bid must be at least this much bps greater than the current winning bid
   *   bidBufferBps: "100", // 100 bps stands for 1%
   *   // when should the auction open up for bidding
   *   startTimestamp: new Date(Date.now()),
   *   // end time of auction
   *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
   * }
   *
   * const tx = await contract.englishAuctions.createAuction(auction);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created auction
   *
   * // And on the buyers side:
   * // The auction ID of the asset you want to bid on
   * const auctionId = 0;
   * // The total amount you are willing to bid for auctioned tokens
   * const bidAmount = 1;
   *
   * await contract.englishAuctions.makeBid(auctionId, bidAmount);
   * ```
   */
  get englishAuctions() {
    return assertEnabled(this.detectEnglishAuctions(), FEATURE_ENGLISH_AUCTIONS);
  }

  /**
   * Offers
   * @remarks Make and manage offers.
   * @example
   * ```javascript
   * // Data of the offer you want to make
   * const offer = {
   *   // address of the contract the asset you want to make an offer for
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to buy
   *   tokenId: "0",
   *   // how many of the asset you want to buy
   *   quantity: 1,
   *   // address of the currency contract that you offer to pay in
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // Total price you offer to pay for the mentioned token(s)
   *   totalPrice: "1.5",
   *   // Offer valid until
   *   endTimestamp: new Date(),
   * }
   *
   * const tx = await contract.offers.makeOffer(offer);
   * const receipt = tx.receipt; // the transaction receipt
   * const id = tx.id; // the id of the newly created offer
   *
   * // And on the seller's side:
   * // The ID of the offer you want to accept
   * const offerId = 0;
   * await contract.offers.acceptOffer(offerId);
   * ```
   */
  get offers() {
    return assertEnabled(this.detectOffers(), FEATURE_OFFERS);
  }
  get airdrop20() {
    return assertEnabled(this.detectAirdrop20(), FEATURE_AIRDROP_ERC20);
  }
  get airdrop721() {
    return assertEnabled(this.detectAirdrop721(), FEATURE_AIRDROP_ERC721);
  }
  get airdrop1155() {
    return assertEnabled(this.detectAirdrop1155(), FEATURE_AIRDROP_ERC1155);
  }

  /**
   * Account Factory
   *
   * @remarks Create accounts and fetch data about them.
   * @example
   * ```javascript
   *
   * // Predict the address of the account that will be created for an admin.
   * const deterministicAddress = await contract.accountFactory.predictAccountAddress(admin, extraData);
   *
   * // Create accounts
   * const tx = await contract.accountFactory.createAccount(admin, extraData);
   * // the same as `deterministicAddress`
   * const accountAddress = tx.address;
   *
   * // Get all accounts created by the factory
   * const allAccounts = await contract.accountFactory.getAllAccounts();
   *
   * // Get all accounts on which a signer has been given authority.
   * const associatedAccounts = await contract.accountFactory.getAssociatedAccounts(signer);
   *
   * // Get all signers who have been given authority on a account.
   * const associatedSigners = await contract.accountFactory.getAssociatedSigners(accountAddress);
   *
   * // Check whether a account has already been created for a given admin.
   * const isAccountDeployed = await contract.accountFactory.isAccountDeployed(admin, extraData);
   * ```
   */
  get accountFactory() {
    return assertEnabled(this.detectAccountFactory(), FEATURE_ACCOUNT_FACTORY);
  }

  // TODO documentation
  get account() {
    return assertEnabled(this.detectAccount(), FEATURE_ACCOUNT);
  }
  get chainId() {
    return this._chainId;
  }
  constructor(network, address, abi, storage) {
    let options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new ContractWrapper(network, address, abi, options, storage);
    this._chainId = chainId;
    this.storage = storage;
    this.contractWrapper = contractWrapper;
    this.abi = AbiSchema.parse(abi || []);
    this.events = new ContractEvents(this.contractWrapper);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.publishedMetadata = new ContractPublishedMetadata(this.contractWrapper, this.storage);
    this.metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
  }
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /**
   * Prepare a transaction for sending
   */
  prepare(method, args, overrides) {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method,
      args,
      overrides
    });
  }

  /**
   * Call any function on this contract
   * @example
   * ```javascript
   * // read functions will return the data from the contract
   * const myValue = await contract.call("myReadFunction");
   * console.log(myValue);
   *
   * // write functions will return the transaction receipt
   * const tx = await contract.call("myWriteFunction", [arg1, arg2]);
   * const receipt = tx.receipt;
   *
   * // Optionally override transaction options
   * await contract.call("myWriteFunction", [arg1, arg2], {
   *  gasLimit: 1000000, // override default gas limit
   *  value: ethers.utils.parseEther("0.1"), // send 0.1 ether with the contract call
   * };
   * ```
   * @param functionName - the name of the function to call
   * @param args - the arguments of the function
   */
  async call(functionName, args, overrides) {
    return this.contractWrapper.call(functionName, args, overrides);
  }

  /** ********************
   * FEATURE DETECTION
   * ********************/

  detectRoyalties() {
    if (detectContractFeature(this.contractWrapper, "Royalty")) {
      // ContractMetadata is stateless, it's fine to create a new one here
      // This also makes it not order dependent in the feature detection process
      const metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
      return new ContractRoyalty(this.contractWrapper, metadata);
    }
    return undefined;
  }
  detectRoles() {
    if (detectContractFeature(this.contractWrapper, "Permissions")) {
      return new ContractRoles(this.contractWrapper, ALL_ROLES);
    }
    return undefined;
  }
  detectPrimarySales() {
    if (detectContractFeature(this.contractWrapper, "PrimarySale")) {
      return new ContractPrimarySale(this.contractWrapper);
    }
    return undefined;
  }
  detectPlatformFees() {
    if (detectContractFeature(this.contractWrapper, "PlatformFee")) {
      return new ContractPlatformFee(this.contractWrapper);
    }
    return undefined;
  }
  detectErc20() {
    if (detectContractFeature(this.contractWrapper, "ERC20")) {
      return new Erc20(this.contractWrapper, this.storage, this.chainId);
    }
    return undefined;
  }
  detectErc721() {
    if (detectContractFeature(this.contractWrapper, "ERC721")) {
      return new Erc721(this.contractWrapper, this.storage, this.chainId);
    }
    return undefined;
  }
  detectErc1155() {
    if (detectContractFeature(this.contractWrapper, "ERC1155")) {
      return new Erc1155(this.contractWrapper, this.storage, this.chainId);
    }
    return undefined;
  }
  detectOwnable() {
    if (detectContractFeature(this.contractWrapper, "Ownable")) {
      return new ContractOwner(this.contractWrapper);
    }
    return undefined;
  }
  detectApp() {
    const metadata = new ContractMetadata(this.contractWrapper, CustomContractSchema, this.storage);
    if (detectContractFeature(this.contractWrapper, "AppURI")) {
      return new ContractAppURI(this.contractWrapper, metadata, this.storage);
    } else if (detectContractFeature(this.contractWrapper, "ContractMetadata")) {
      return new ContractAppURI(this.contractWrapper, metadata, this.storage);
    }
    return undefined;
  }
  detectDirectListings() {
    if (detectContractFeature(this.contractWrapper, "DirectListings")) {
      return new MarketplaceV3DirectListings(this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectEnglishAuctions() {
    if (detectContractFeature(this.contractWrapper, "EnglishAuctions")) {
      return new MarketplaceV3EnglishAuctions(this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectOffers() {
    if (detectContractFeature(this.contractWrapper, "Offers")) {
      return new MarketplaceV3Offers(this.contractWrapper, this.storage);
    }
    return undefined;
  }
  detectAirdrop20() {
    if (detectContractFeature(this.contractWrapper, "AirdropERC20")) {
      return new Airdrop20(this.contractWrapper);
    }
    return undefined;
  }
  detectAirdrop721() {
    if (detectContractFeature(this.contractWrapper, "AirdropERC721")) {
      return new Airdrop721(this.contractWrapper);
    }
    return undefined;
  }
  detectAirdrop1155() {
    if (detectContractFeature(this.contractWrapper, "AirdropERC1155")) {
      return new Airdrop1155(this.contractWrapper);
    }
    return undefined;
  }

  // ========== Account features ==========

  detectAccountFactory() {
    if (detectContractFeature(this.contractWrapper, FEATURE_ACCOUNT_FACTORY.name)) {
      return new AccountFactory(this.contractWrapper);
    }
    return undefined;
  }
  detectAccount() {
    if (detectContractFeature(this.contractWrapper, FEATURE_ACCOUNT.name)) {
      return new Account(this.contractWrapper);
    }
    return undefined;
  }
}

/**
 * Handles publishing contracts (EXPERIMENTAL)
 * @internal
 */
class ContractPublisher extends RPCConnectionHandler {
  constructor(network, options, storage) {
    super(network, options);
    this.storage = storage;
    this.publisher = new ContractWrapper(network, getContractPublisherAddress(), ContractPublisherAbi, options, storage);
  }
  updateSignerOrProvider(network) {
    super.updateSignerOrProvider(network);
    this.publisher.updateSignerOrProvider(network);
  }

  /**
   * @internal
   * @param metadataUri
   */
  async extractConstructorParams(metadataUri) {
    return extractConstructorParams(metadataUri, this.storage);
  }

  /**
   * @internal
   * @param predeployMetadataUri
   */
  async extractFunctions(predeployMetadataUri) {
    return extractFunctions(predeployMetadataUri, this.storage);
  }

  /**
   * @internal
   * @param predeployUri
   */
  async fetchCompilerMetadataFromPredeployURI(predeployUri) {
    return fetchPreDeployMetadata(predeployUri, this.storage);
  }

  /**
   * @internal
   * @param prepublishUri
   * @param publisherAddress
   */
  async fetchPrePublishMetadata(prepublishUri, publisherAddress) {
    const preDeployMetadataFetched = await fetchPreDeployMetadata(prepublishUri, this.storage);
    const latestPublishedContract = publisherAddress ? await this.getLatest(publisherAddress, preDeployMetadataFetched.name) : undefined;
    const latestPublishedContractMetadata = latestPublishedContract ? await this.fetchPublishedContractInfo(latestPublishedContract) : undefined;
    return {
      preDeployMetadata: preDeployMetadataFetched,
      latestPublishedContractMetadata
    };
  }

  /**
   * @internal
   * @param address
   */
  async fetchCompilerMetadataFromAddress(address) {
    const resolvedAddress = await resolveAddress(address);
    return fetchContractMetadataFromAddress(resolvedAddress, this.getProvider(), this.storage, this.options);
  }

  /**
   * @internal
   * Get the full information about a published contract
   * @param contract
   */
  async fetchPublishedContractInfo(contract) {
    return {
      name: contract.id,
      publishedTimestamp: contract.timestamp,
      publishedMetadata: await this.fetchFullPublishMetadata(contract.metadataUri)
    };
  }

  /**
   * @internal
   * @param publishedMetadataUri
   */
  async fetchFullPublishMetadata(publishedMetadataUri) {
    return fetchExtendedReleaseMetadata(publishedMetadataUri, this.storage);
  }

  /**
   * @internal
   * // TODO expose a resolvePublishMetadata(contractAddress, chainId) that handles the dual chain case
   * // TODO will be easy to do with the multichain pattern of 3.0
   * @param compilerMetadataUri
   */
  async resolvePublishMetadataFromCompilerMetadata(compilerMetadataUri) {
    const publishedMetadataUri = await this.publisher.read("getPublishedUriFromCompilerUri", [compilerMetadataUri]);
    if (publishedMetadataUri.length === 0) {
      throw Error(`Could not resolve published metadata URI from ${compilerMetadataUri}`);
    }
    return await Promise.all(publishedMetadataUri.filter(uri => uri.length > 0).map(uri => this.fetchFullPublishMetadata(uri)));
  }

  /**
   * @internal
   * TODO clean this up (see method above, too)
   */
  async resolveContractUriFromAddress(address) {
    const resolvedAddress = await resolveAddress(address);
    const contractUri = await resolveContractUriFromAddress(resolvedAddress, this.getProvider());
    invariant(contractUri, "Could not resolve contract URI from address");
    return contractUri;
  }

  /**
   * @internal
   * @param address
   */
  async fetchContractSourcesFromAddress(address) {
    const resolvedAddress = await resolveAddress(address);
    const metadata = await this.fetchCompilerMetadataFromAddress(resolvedAddress);
    return await fetchSourceFilesFromMetadata(metadata, this.storage);
  }

  /**
   * @internal
   * @param profileMetadata
   */
  updatePublisherProfile = /* @__PURE__ */buildTransactionFunction(async profileMetadata => {
    const signer = this.getSigner();
    invariant(signer, "A signer is required");
    const publisher = await signer.getAddress();
    const profileUri = await this.storage.upload(profileMetadata);
    return Transaction.fromContractWrapper({
      contractWrapper: this.publisher,
      method: "setPublisherProfileUri",
      args: [publisher, profileUri]
    });
  });

  /**
   * @internal
   * @param publisherAddress
   */
  async getPublisherProfile(publisherAddress) {
    const resolvedPublisherAddress = await resolveAddress(publisherAddress);
    const profileUri = await this.publisher.read("getPublisherProfileUri", [resolvedPublisherAddress]);
    if (!profileUri || profileUri.length === 0) {
      return {};
    }
    return ProfileSchemaOutput.parse(await this.storage.downloadJSON(profileUri));
  }

  /**
   * @internal
   * @param publisherAddress
   */
  async getAll(publisherAddress) {
    const resolvedPublisherAddress = await resolveAddress(publisherAddress);
    const data = await this.publisher.read("getAllPublishedContracts", [resolvedPublisherAddress]);
    // since we can fetch from multiple publisher contracts, just keep the latest one in the list
    const map = data.reduce((acc, curr) => {
      // replaces the previous contract with the latest one
      acc[curr.contractId] = curr;
      return acc;
    }, {});
    return Object.entries(map).map(_ref => {
      let [, struct] = _ref;
      return this.toPublishedContract(struct);
    });
  }

  /**
   * @internal
   * @param publisherAddress
   * @param contractId
   */
  async getAllVersions(publisherAddress, contractId) {
    const resolvedPublisherAddress = await resolveAddress(publisherAddress);
    const contractStructs = await this.publisher.read("getPublishedContractVersions", [resolvedPublisherAddress, contractId]);
    if (contractStructs.length === 0) {
      throw Error("Not found");
    }
    return contractStructs.map(d => this.toPublishedContract(d));
  }
  async getVersion(publisherAddress, contractId) {
    let version = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "latest";
    const resolvedPublisherAddress = await resolveAddress(publisherAddress);
    if (version === "latest") {
      return this.getLatest(resolvedPublisherAddress, contractId);
    }
    const allVersions = await this.getAllVersions(resolvedPublisherAddress, contractId);
    // get the metadata for each version
    const versionMetadata = await Promise.all(allVersions.map(contract => this.fetchPublishedContractInfo(contract)));
    // find the version that matches the version string
    const versionMatch = versionMetadata.find(metadata => metadata.publishedMetadata.version === version);
    invariant(versionMatch, "Contract version not found");
    // match the version back to the contract based on the published timestamp
    return allVersions.find(contract => contract.timestamp === versionMatch.publishedTimestamp);
  }
  async getLatest(publisherAddress, contractId) {
    const resolvedPublisherAddress = await resolveAddress(publisherAddress);
    const model = await this.publisher.read("getPublishedContract", [resolvedPublisherAddress, contractId]);
    if (model && model.publishMetadataUri) {
      return this.toPublishedContract(model);
    }
    return undefined;
  }
  publish = /* @__PURE__ */buildTransactionFunction(async (predeployUri, extraMetadata) => {
    const signer = this.getSigner();
    invariant(signer, "A signer is required");
    const publisher = await signer.getAddress();
    const predeployMetadata = await fetchRawPredeployMetadata(predeployUri, this.storage);
    const compilerMetadata = await fetchContractMetadata(predeployMetadata.metadataUri, this.storage);
    const isPlugin = isFeatureEnabled(AbiSchema.parse(compilerMetadata.abi), "PluginRouter");
    const isDynamic = isFeatureEnabled(AbiSchema.parse(compilerMetadata.abi), "DynamicContract");
    extraMetadata.routerType = isPlugin ? "plugin" : isDynamic ? "dynamic" : "none";

    // For a dynamic contract Router, try to fetch plugin/extension metadata
    if (isDynamic || isPlugin) {
      const defaultExtensions = extraMetadata.defaultExtensions;
      if (defaultExtensions && defaultExtensions.length > 0) {
        try {
          const publishedExtensions = await Promise.all(defaultExtensions.map(e => {
            return fetchPublishedContractFromPolygon(e.publisherAddress, e.extensionName, e.extensionVersion, this.storage, this.options.clientId, this.options.secretKey);
          }));
          const publishedExtensionUris = publishedExtensions.map(ext => ext.metadataUri);
          const extensionABIs = (await Promise.all(publishedExtensionUris.map(async uri => {
            return fetchAndCacheDeployMetadata(uri, this.storage);
          }))).map(fetchedMetadata => fetchedMetadata.compilerMetadata.abi);
          const composite = joinABIs([compilerMetadata.abi, ...extensionABIs]);
          extraMetadata.compositeAbi = AbiSchema.parse(composite);
        } catch {}
      }
    }

    // ensure version is incremental
    const latestContract = await this.getLatest(publisher, predeployMetadata.name);
    if (latestContract && latestContract.metadataUri) {
      const latestMetadata = await this.fetchPublishedContractInfo(latestContract);
      const latestVersion = latestMetadata.publishedMetadata.version;
      if (!isIncrementalVersion(latestVersion, extraMetadata.version)) {
        throw Error(`Version ${extraMetadata.version} is not greater than ${latestVersion}`);
      }
    }
    const fetchedBytecode = await (await this.storage.download(predeployMetadata.bytecodeUri)).text();
    const bytecode = fetchedBytecode.startsWith("0x") ? fetchedBytecode : `0x${fetchedBytecode}`;
    const bytecodeHash = utils.solidityKeccak256(["bytes"], [bytecode]);
    const contractId = predeployMetadata.name;
    const fullMetadata = await FullPublishMetadataSchemaInput.parseAsync({
      ...extraMetadata,
      metadataUri: predeployMetadata.metadataUri,
      bytecodeUri: predeployMetadata.bytecodeUri,
      name: predeployMetadata.name,
      analytics: predeployMetadata.analytics,
      publisher
    });
    const fullMetadataUri = await this.storage.upload(fullMetadata);
    return Transaction.fromContractWrapper({
      contractWrapper: this.publisher,
      method: "publishContract",
      args: [publisher, contractId, fullMetadataUri, predeployMetadata.metadataUri, bytecodeHash, constants.AddressZero],
      parse: receipt => {
        const events = this.publisher.parseLogs("ContractPublished", receipt.logs);
        if (events.length < 1) {
          throw new Error("No ContractPublished event found");
        }
        const contract = events[0].args.publishedContract;
        return {
          receipt,
          data: async () => this.toPublishedContract(contract)
        };
      }
    });
  });
  unpublish = /* @__PURE__ */buildTransactionFunction(async (publisher, contractId) => {
    const resolvedPublisher = await resolveAddress(publisher);
    return Transaction.fromContractWrapper({
      contractWrapper: this.publisher,
      method: "unpublishContract",
      args: [resolvedPublisher, contractId]
    });
  });
  toPublishedContract(contractModel) {
    return PublishedContractSchema.parse({
      id: contractModel.contractId,
      timestamp: contractModel.publishTimestamp,
      metadataUri: contractModel.publishMetadataUri
    });
  }
}

export { MintRequest721withQuantity as $, AbiTypeSchema as A, BYOCContractMetadataSchema as B, CustomContractInput as C, DeployTypeInput as D, ExtraPublishMetadataSchemaInput as E, FactoryDeploymentSchema as F, CommonPlatformFeeSchema as G, CommonTrustedForwarderSchema as H, CommonSymbolSchema as I, CurrencySchema as J, CurrencyValueSchema as K, BaseSignaturePayloadInput as L, Signature20PayloadInput as M, Signature20PayloadOutput as N, Signature721PayloadInput as O, PreDeployMetadata as P, Signature721PayloadOutput as Q, RouterTypeInput as R, StaticJsonRpcBatchProvider as S, Signature1155PayloadInput as T, Signature1155PayloadInputWithTokenId as U, Signature1155PayloadOutput as V, Signature721WithQuantityInput as W, Signature721WithQuantityOutput as X, MintRequest20 as Y, MintRequest721 as Z, MintRequest1155 as _, CustomContractOutput as a, prepareGaslessRequest as a$, GenericRequest as a0, MerkleSchema as a1, SnapshotEntryInput as a2, SnapshotInputSchema as a3, SnapshotEntryWithProofSchema as a4, SnapshotSchema as a5, SnapshotInfoSchema as a6, BigNumberSchema as a7, BigNumberishSchema as a8, BigNumberTransformSchema as a9, Erc721Supply as aA, Erc721Enumerable as aB, Erc721TieredDrop as aC, Erc721 as aD, Erc721WithQuantitySignatureMintable as aE, Erc721Burnable as aF, Erc1155BatchMintable as aG, Erc1155Burnable as aH, Erc1155Enumerable as aI, Erc1155LazyMintable as aJ, Erc1155Mintable as aK, Erc1155 as aL, Erc1155SignatureMintable as aM, MarketplaceV3DirectListings as aN, MarketplaceV3EnglishAuctions as aO, MarketplaceV3Offers as aP, GasCostEstimator as aQ, ContractEvents as aR, ContractInterceptor as aS, ContractPlatformFee as aT, ContractPublishedMetadata as aU, ContractOwner as aV, Transaction as aW, DeployTransaction as aX, defaultGaslessSendFunction as aY, biconomySendFunction as aZ, defenderSendFunction as a_, AddressSchema as aa, AddressOrEnsSchema as ab, RawDateSchema as ac, StartDateSchema as ad, EndDateSchema as ae, CallOverrideSchema as af, ContractEncoder as ag, ContractMetadata as ah, ContractRoles as ai, ContractRoyalty as aj, ContractPrimarySale as ak, DelayedReveal as al, DropClaimConditions as am, DropErc1155ClaimConditions as an, Erc20BatchMintable as ao, Erc20Burnable as ap, Erc20ClaimableWithConditions as aq, Erc20Droppable as ar, Erc20Mintable as as, Erc20SignatureMintable as at, Erc20 as au, Erc721BatchMintable as av, Erc721ClaimableWithConditions as aw, Erc721Claimable as ax, Erc721LazyMintable as ay, Erc721Mintable as az, CustomContractDeploy as b, resolveImplementation as b$, ContractAppURI as b0, Account as b1, AccountFactory as b2, SignerPermissionsSchema as b3, PermissionSnapshotSchema as b4, SignerPermissionRequest as b5, Status as b6, ClaimEligibility as b7, isNativeToken as b8, cleanCurrencyAddress as b9, AdminRoleMissingError as bA, AuctionHasNotEndedError as bB, ExtensionNotImplementedError as bC, TransactionError as bD, parseRevertReason as bE, includesErrorMessage as bF, createSnapshot as bG, ALL_ROLES as bH, getRoleHash as bI, fetchContractMetadataFromAddress as bJ, fetchAbiFromAddress as bK, getDefaultGasOverrides as bL, getDynamicFeeData as bM, getGasPrice as bN, getPolygonGasPriorityFee as bO, fetchContractMetadata as bP, hasMatchingAbi as bQ, matchesAbiFromBytecode as bR, extractConstructorParams as bS, extractFunctions as bT, extractCommentFromMetadata as bU, extractConstructorParamsFromAbi as bV, extractFunctionsFromAbi as bW, extractEventsFromAbi as bX, extractMinimalProxyImplementationAddress as bY, resolveContractUriFromAddress as bZ, resolveContractUriAndBytecode as b_, normalizePriceValue as ba, fetchCurrencyMetadata as bb, fetchCurrencyValue as bc, setErc20Allowance as bd, approveErc20Allowance as be, normalizeAmount as bf, toWei as bg, convertToReadableQuantity as bh, fetchSnapshotEntryForAddress as bi, NotFoundError as bj, InvalidAddressError as bk, MissingRoleError as bl, AssetNotFoundError as bm, UploadError as bn, FileNameMissingError as bo, DuplicateFileNameError as bp, NotEnoughTokensError as bq, MissingOwnerRoleError as br, QuantityAboveLimitError as bs, FetchError as bt, DuplicateLeafsError as bu, AuctionAlreadyStartedError as bv, FunctionDeprecatedError as bw, ListingNotFoundError as bx, WrongListingTypeError as by, RestrictedTransferError as bz, CustomContractSchema as c, getSignerAndProvider as c$, extractIPFSHashFromBytecode as c0, fetchRawPredeployMetadata as c1, fetchPreDeployMetadata as c2, fetchExtendedReleaseMetadata as c3, detectFeatures as c4, detectFeaturesFromBytecode as c5, getAllDetectedFeatures as c6, getAllDetectedExtensionsFromBytecode as c7, constructAbiFromBytecode as c8, getAllDetectedExtensions as c9, encodeConstructorParamsForImplementation as cA, getCreate2FactoryDeploymentInfo as cB, THIRDWEB_DEPLOYER as cC, fetchPublishedContractFromPolygon as cD, fetchAndCacheDeployMetadata as cE, resolveEns as cF, resolveAddress as cG, OZ_DEFENDER_FORWARDER_ADDRESS as cH, CONTRACT_ADDRESSES as cI, getContractAddressByChainId as cJ, getContractPublisherAddress as cK, getMultichainRegistryAddress as cL, ChainId as cM, setSupportedChains as cN, getSupportedChains as cO, InterfaceId_IERC721 as cP, InterfaceId_IERC1155 as cQ, NATIVE_TOKEN_ADDRESS as cR, NATIVE_TOKENS as cS, getNativeTokenByChainId as cT, LINK_TOKEN_ADDRESS as cU, EventType as cV, getChainProvider as cW, getChainIdFromNetwork as cX, getChainIdOrName as cY, isChainConfig as cZ, getProviderFromRpcUrl as c_, isFeatureEnabled as ca, isExtensionEnabled as cb, assertEnabled as cc, detectContractFeature as cd, hasFunction as ce, joinABIs as cf, toSemver as cg, isIncrementalVersion as ch, isDowngradeVersion as ci, fetchSourceFilesFromMetadata as cj, CREATE2_FACTORY_BYTECODE as ck, SIGNATURE as cl, COMMON_FACTORY as cm, GAS_LIMIT_FOR_DEPLOYER as cn, DEPLOYER_BYTECODE as co, DEPLOYER_ABI as cp, isContractDeployed as cq, isEIP155Enforced as cr, getCreate2FactoryAddress as cs, getSaltHash as ct, getInitBytecodeWithSalt as cu, computeDeploymentAddress as cv, computeEOAForwarderAddress as cw, computeForwarderAddress as cx, getKeylessTxn as cy, computeDeploymentInfo as cz, AbiObjectSchema as d, VoteContractSchema as d$, SUPPORTED_FEATURES as d0, EditionDropInitializer as d1, EditionInitializer as d2, MarketplaceInitializer as d3, MarketplaceV3Initializer as d4, MultiwrapInitializer as d5, NFTCollectionInitializer as d6, NFTDropInitializer as d7, PackInitializer as d8, SignatureDropInitializer as d9, mapOffer as dA, fetchTokenMetadataForContract as dB, isTokenApprovedForTransfer as dC, validateNewListingParam as dD, handleTokenApproval as dE, isWinningBid as dF, NFT_BASE_CONTRACT_ROLES as dG, DropErc1155ContractSchema as dH, TokenErc1155ContractSchema as dI, MARKETPLACE_CONTRACT_ROLES as dJ, MarketplaceContractSchema as dK, FEATURE_DIRECT_LISTINGS as dL, FEATURE_ENGLISH_AUCTIONS as dM, FEATURE_OFFERS as dN, MULTIWRAP_CONTRACT_ROLES as dO, MultiwrapContractSchema as dP, uploadOrExtractURI as dQ, TokenErc721ContractSchema as dR, FEATURE_NFT_REVEALABLE as dS, FEATURE_PACK_VRF as dT, PACK_CONTRACT_ROLES as dU, PackContractSchema as dV, ADMIN_ROLE as dW, SplitsContractSchema as dX, TOKEN_DROP_CONTRACT_ROLES as dY, DropErc20ContractSchema as dZ, TokenErc20ContractSchema as d_, SplitInitializer as da, TokenDropInitializer as db, TokenInitializer as dc, VoteInitializer as dd, PREBUILT_CONTRACTS_MAP as de, PREBUILT_CONTRACTS_APPURI_MAP as df, CONTRACTS_MAP as dg, getContractTypeForRemoteName as dh, getContractName as di, isProvider as dj, isSigner as dk, AddressZero as dl, extractFeatures as dm, caches as dn, CUSTOM_GAS_FOR_CHAIN as dp, RPCConnectionHandler as dq, signTypedDataInternal as dr, ContractWrapper as ds, buildTransactionFunction as dt, ContractPublisher as du, SmartContract as dv, getCompositePluginABI as dw, buildDeployTransactionFunction as dx, getProcessEnv as dy, DropErc721ContractSchema as dz, AbiSchema as e, ChainIdToAddressSchema as f, CustomFactoryInput as g, DeploymentNetworkInput as h, ExtraPublishMetadataSchemaOutput as i, FullPublishMetadataSchemaInput as j, FullPublishMetadataSchemaOutput as k, ProfileSchemaInput as l, ProfileSchemaOutput as m, PublishedContractSchema as n, ContractInfoSchema as o, CompilerMetadataFetchedSchema as p, PreDeployMetadataFetchedSchema as q, ClaimConditionMetadataSchema as r, ClaimConditionInputSchema as s, ClaimConditionInputArray as t, PartialClaimConditionInputSchema as u, ClaimConditionOutputSchema as v, CommonContractSchema as w, CommonContractOutputSchema as x, CommonRoyaltySchema as y, CommonPrimarySaleSchema as z };
