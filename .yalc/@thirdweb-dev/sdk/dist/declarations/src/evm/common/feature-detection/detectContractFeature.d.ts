import { FeatureName } from "../../constants/contract-features";
import { ContractWrapper } from "../../core/classes/contract-wrapper";
import { BaseContract } from "ethers";
/**
 * Type guard for contractWrappers depending on passed feature name
 * @internal
 * @param contractWrapper
 * @param featureName
 */
export declare function detectContractFeature<T extends BaseContract>(contractWrapper: ContractWrapper<BaseContract>, featureName: FeatureName): contractWrapper is ContractWrapper<T>;
//# sourceMappingURL=detectContractFeature.d.ts.map