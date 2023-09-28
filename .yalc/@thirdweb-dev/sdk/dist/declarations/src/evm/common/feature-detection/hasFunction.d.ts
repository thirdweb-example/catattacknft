import type { ContractWrapper } from "../../core/classes/contract-wrapper";
import type { BaseContract } from "ethers";
/**
 * @internal
 * @param contractWrapper
 * @param functionName
 */
export declare function hasFunction<TContract extends BaseContract>(functionName: string, contractWrapper: ContractWrapper<any>): contractWrapper is ContractWrapper<TContract>;
//# sourceMappingURL=hasFunction.d.ts.map