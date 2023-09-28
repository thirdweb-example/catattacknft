import { a9 as BigNumberTransformSchema, ab as AddressOrEnsSchema, a7 as BigNumberSchema, a8 as BigNumberishSchema, bQ as hasMatchingAbi, e as AbiSchema, cs as getCreate2FactoryAddress, cz as computeDeploymentInfo, cq as isContractDeployed, cu as getInitBytecodeWithSalt } from './contract-publisher-7ea04dd3.esm.js';
import { z } from 'zod';
import { A as AmountSchema, C as CommonNFTOutput, b as CommonNFTInput, N as NFTInputOrUriSchema } from './QueryParams-a5ecb9ff.esm.js';
import { utils, BigNumber } from 'ethers';
import invariant from 'tiny-invariant';
import { GENERATED_ABI } from '@thirdweb-dev/generated-abis';

const PropertiesInput = /* @__PURE__ */(() => z.object({}).catchall(z.union([BigNumberTransformSchema, z.unknown()])))();

/**
 * @internal
 */
const OptionalPropertiesInput = /* @__PURE__ */(() => z.union([z.array(PropertiesInput), PropertiesInput]).optional())();

/**
 * @internal
 */
const TokenMintInputSchema = /* @__PURE__ */z.object({
  toAddress: AddressOrEnsSchema,
  amount: AmountSchema
});

/**
 * @public
 */

/**
 * @internal
 */
const EditionMetadataOutputSchema = /* @__PURE__ */z.object({
  supply: BigNumberSchema,
  metadata: CommonNFTOutput
});

/**
 * @internal
 */
const EditionMetadataWithOwnerOutputSchema = /* @__PURE__ */(() => EditionMetadataOutputSchema.extend({
  owner: z.string(),
  quantityOwned: BigNumberSchema
}))();

/**
 * @internal
 */
const EditionMetadataInputSchema = /* @__PURE__ */z.object({
  supply: BigNumberishSchema,
  metadata: CommonNFTInput
});

/**
 * @internal
 */
const EditionMetadataInputOrUriSchema = /* @__PURE__ */z.object({
  supply: BigNumberishSchema,
  metadata: NFTInputOrUriSchema
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
  return hasMatchingAbi(AbiSchema.parse(contractWrapper.abi || []), [abi]);
}

function toEther(amount) {
  return utils.formatEther(amount);
}

function toUnits(amount, decimals) {
  return utils.parseUnits(AmountSchema.parse(amount), decimals);
}

function toDisplayValue(amount, decimals) {
  return utils.formatUnits(amount, decimals);
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
    create2Factory = await getCreate2FactoryAddress(provider);
  }
  return (await computeDeploymentInfo("infra", provider, storage, create2Factory, {
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
  invariant(signer.provider, "Provider required");
  const contractDeployed = predictedAddress ? await isContractDeployed(predictedAddress, signer.provider) : false;
  if (!contractDeployed) {
    console.debug(`deploying contract via create2 factory at: ${predictedAddress}`);
    const initBytecodeWithSalt = getInitBytecodeWithSalt(bytecode, encodedArgs);
    const tx = {
      to: create2FactoryAddress,
      data: initBytecodeWithSalt
    };
    try {
      await signer.estimateGas(tx);
    } catch (e) {
      console.debug("error estimating gas while deploying prebuilt: ", e);
      tx.gasLimit = BigNumber.from(gasLimit);
    }
    await (await signer.sendTransaction(tx)).wait();
  }
}

function getCachedAbiForContract(address) {
  if (address in GENERATED_ABI) {
    return GENERATED_ABI[address];
  }
  return undefined;
}

export { EditionMetadataOutputSchema as E, OptionalPropertiesInput as O, ProposalState as P, TokenMintInputSchema as T, EditionMetadataWithOwnerOutputSchema as a, EditionMetadataInputSchema as b, EditionMetadataInputOrUriSchema as c, toUnits as d, toDisplayValue as e, computeNativeTokenAddress as f, getCachedAbiForContract as g, deployContractDeterministicRaw as h, matchesPrebuiltAbi as m, toEther as t };
