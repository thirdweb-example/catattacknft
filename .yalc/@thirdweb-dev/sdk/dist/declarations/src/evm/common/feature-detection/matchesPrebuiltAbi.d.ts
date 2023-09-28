import { ContractWrapper } from "../../core/classes/contract-wrapper";
import { AbiInput } from "../../schema/contracts/custom";
import { BaseContract } from "ethers";
/**
 * @internal
 * @param contractWrapper
 * @param abi
 * @returns
 */
export declare function matchesPrebuiltAbi<T extends BaseContract>(contractWrapper: ContractWrapper<BaseContract>, abi: AbiInput): contractWrapper is ContractWrapper<T>;
//# sourceMappingURL=matchesPrebuiltAbi.d.ts.map