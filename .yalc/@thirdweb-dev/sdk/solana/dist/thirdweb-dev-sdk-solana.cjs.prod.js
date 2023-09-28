'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var sdk = require('../../dist/sdk-c93e1bf3.cjs.prod.js');
var web3_js = require('@solana/web3.js');
var zod = require('zod');
require('../../dist/QueryParams-bf2cbec1.cjs.prod.js');
require('bn.js');
require('ethers');
require('@metaplex-foundation/js');
require('@metaplex-foundation/mpl-token-metadata');
require('@project-serum/anchor');
require('buffer/');
require('@solana/spl-token');
require('bs58');
require('eventemitter3');
require('tiny-invariant');
require('tweetnacl');
require('../../dist/urls-63436e86.cjs.prod.js');
require('@thirdweb-dev/storage');

/**
 * @internal
 */
const PropertiesInput = /* @__PURE__ */(() => zod.z.object({}).catchall(zod.z.unknown()))();

/**
 * @internal
 */
const OptionalPropertiesInput = /* @__PURE__ */(() => zod.z.union([zod.z.array(PropertiesInput), PropertiesInput]).optional())();

/**
 * @internal
 */
const RawDateSchema = /* @__PURE__ */(() => zod.z.date().transform(i => {
  return Math.floor(i.getTime() / 1000);
}))();

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

/**
 * @internal
 */
const AddressSchema = /* @__PURE__ */(() => zod.z.union([zod.z.string(), zod.z.instanceof(web3_js.PublicKey).transform(key => key.toBase58())]))();

exports.CommonContractOutputSchema = sdk.CommonContractOutputSchema;
exports.CommonContractSchema = sdk.CommonContractSchema;
exports.CreatorInputSchema = sdk.CreatorInputSchema;
exports.Deployer = sdk.Deployer;
exports.NFTCollection = sdk.NFTCollection;
exports.NFTCollectionMetadataInputSchema = sdk.NFTCollectionMetadataInputSchema;
exports.NFTDrop = sdk.NFTDrop;
exports.NFTDropContractInputSchema = sdk.NFTDropContractInputSchema;
exports.NFTDropInitialConditionsInputSchema = sdk.NFTDropInitialConditionsInputSchema;
exports.NFTDropUpdatableConditionsInputSchema = sdk.NFTDropUpdatableConditionsInputSchema;
exports.NFTDropUpdatableConditionsOutputSchema = sdk.NFTDropUpdatableConditionsOutputSchema;
exports.Program = sdk.Program;
exports.ThirdwebSDK = sdk.ThirdwebSDK;
exports.Token = sdk.Token;
exports.TokenMetadataInputSchema = sdk.TokenMetadataInputSchema;
exports.UserWallet = sdk.UserWallet;
exports.getNework = sdk.getNework;
exports.getPublicRpc = sdk.getPublicRpc;
exports.getUrlForNetwork = sdk.getUrlForNetwork;
exports.AddressSchema = AddressSchema;
exports.OptionalPropertiesInput = OptionalPropertiesInput;
exports.RawDateSchema = RawDateSchema;
