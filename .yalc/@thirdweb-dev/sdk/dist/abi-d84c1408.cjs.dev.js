'use strict';

var contractPublisher = require('./contract-publisher-e9595070.cjs.dev.js');
var zod = require('zod');
var QueryParams = require('./QueryParams-012ec906.cjs.dev.js');
var ethers = require('ethers');
var invariant = require('tiny-invariant');
var generatedAbis = require('@thirdweb-dev/generated-abis');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var invariant__default = /*#__PURE__*/_interopDefault(invariant);

const PropertiesInput = /* @__PURE__ */(() => zod.z.object({}).catchall(zod.z.union([contractPublisher.BigNumberTransformSchema, zod.z.unknown()])))();

/**
 * @internal
 */
const OptionalPropertiesInput = /* @__PURE__ */(() => zod.z.union([zod.z.array(PropertiesInput), PropertiesInput]).optional())();

/**
 * @internal
 */
const TokenMintInputSchema = /* @__PURE__ */zod.z.object({
  toAddress: contractPublisher.AddressOrEnsSchema,
  amount: QueryParams.AmountSchema
});

/**
 * @public
 */

/**
 * @internal
 */
const EditionMetadataOutputSchema = /* @__PURE__ */zod.z.object({
  supply: contractPublisher.BigNumberSchema,
  metadata: QueryParams.CommonNFTOutput
});

/**
 * @internal
 */
const EditionMetadataWithOwnerOutputSchema = /* @__PURE__ */(() => EditionMetadataOutputSchema.extend({
  owner: zod.z.string(),
  quantityOwned: contractPublisher.BigNumberSchema
}))();

/**
 * @internal
 */
const EditionMetadataInputSchema = /* @__PURE__ */zod.z.object({
  supply: contractPublisher.BigNumberishSchema,
  metadata: QueryParams.CommonNFTInput
});

/**
 * @internal
 */
const EditionMetadataInputOrUriSchema = /* @__PURE__ */zod.z.object({
  supply: contractPublisher.BigNumberishSchema,
  metadata: QueryParams.NFTInputOrUriSchema
});

/**
 * @public
 */

/**
 * @public
 */

let ProposalState = /*#__PURE__*/function (ProposalState) {
  ProposalState[ProposalState["Pending"] = 0] = "Pending";
  ProposalState[ProposalState["Active"] = 1] = "Active";
  ProposalState[ProposalState["Canceled"] = 2] = "Canceled";
  ProposalState[ProposalState["Defeated"] = 3] = "Defeated";
  ProposalState[ProposalState["Succeeded"] = 4] = "Succeeded";
  ProposalState[ProposalState["Queued"] = 5] = "Queued";
  ProposalState[ProposalState["Expired"] = 6] = "Expired";
  ProposalState[ProposalState["Executed"] = 7] = "Executed";
  return ProposalState;
}({});

/**
 * @internal
 * @param contractWrapper
 * @param abi
 * @returns
 */
function matchesPrebuiltAbi(contractWrapper, abi) {
  return contractPublisher.hasMatchingAbi(contractPublisher.AbiSchema.parse(contractWrapper.abi || []), [abi]);
}

function toEther(amount) {
  return ethers.utils.formatEther(amount);
}

function toUnits(amount, decimals) {
  return ethers.utils.parseUnits(QueryParams.AmountSchema.parse(amount), decimals);
}

function toDisplayValue(amount, decimals) {
  return ethers.utils.formatUnits(amount, decimals);
}

/**
 *
 * @internal
 * @param provider
 * @param storage
 * @param create2Factory
 */
async function computeNativeTokenAddress(provider, storage, create2Factory, clientId, secretKey) {
  if (!create2Factory || create2Factory === "") {
    create2Factory = await contractPublisher.getCreate2FactoryAddress(provider);
  }
  return (await contractPublisher.computeDeploymentInfo("infra", provider, storage, create2Factory, {
    contractName: "WETH9"
  }, clientId, secretKey)).transaction.predictedAddress;
}

/**
 * Deploy a contract at a deterministic address, using Create2 method
 * Address depends on the Create2 factory address.
 *
 * @public
 *
 * @param type signer
 * @param bytecode
 * @param encodedArgs
 * @param create2FactoryAddress
 */
async function deployContractDeterministicRaw(signer, bytecode, encodedArgs, create2FactoryAddress, options, predictedAddress) {
  let gasLimit = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 7000000;
  // Check if the implementation contract is already deployed
  invariant__default["default"](signer.provider, "Provider required");
  const contractDeployed = predictedAddress ? await contractPublisher.isContractDeployed(predictedAddress, signer.provider) : false;
  if (!contractDeployed) {
    console.debug(`deploying contract via create2 factory at: ${predictedAddress}`);
    const initBytecodeWithSalt = contractPublisher.getInitBytecodeWithSalt(bytecode, encodedArgs);
    const tx = {
      to: create2FactoryAddress,
      data: initBytecodeWithSalt
    };
    try {
      await signer.estimateGas(tx);
    } catch (e) {
      console.debug("error estimating gas while deploying prebuilt: ", e);
      tx.gasLimit = ethers.BigNumber.from(gasLimit);
    }
    await (await signer.sendTransaction(tx)).wait();
  }
}

function getCachedAbiForContract(address) {
  if (address in generatedAbis.GENERATED_ABI) {
    return generatedAbis.GENERATED_ABI[address];
  }
  return undefined;
}

exports.EditionMetadataInputOrUriSchema = EditionMetadataInputOrUriSchema;
exports.EditionMetadataInputSchema = EditionMetadataInputSchema;
exports.EditionMetadataOutputSchema = EditionMetadataOutputSchema;
exports.EditionMetadataWithOwnerOutputSchema = EditionMetadataWithOwnerOutputSchema;
exports.OptionalPropertiesInput = OptionalPropertiesInput;
exports.ProposalState = ProposalState;
exports.TokenMintInputSchema = TokenMintInputSchema;
exports.computeNativeTokenAddress = computeNativeTokenAddress;
exports.deployContractDeterministicRaw = deployContractDeterministicRaw;
exports.getCachedAbiForContract = getCachedAbiForContract;
exports.matchesPrebuiltAbi = matchesPrebuiltAbi;
exports.toDisplayValue = toDisplayValue;
exports.toEther = toEther;
exports.toUnits = toUnits;
