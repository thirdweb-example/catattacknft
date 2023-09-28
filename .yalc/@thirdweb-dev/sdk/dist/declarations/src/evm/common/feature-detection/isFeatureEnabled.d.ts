import { FeatureName } from "../../constants/contract-features";
import { AbiInput } from "../../schema/contracts/custom";
/**
 * Checks whether the given ABI supports a given feature
 * @deprecated use isExtensionEnabled instead
 * @param abi
 * @param featureName
 */
export declare function isFeatureEnabled(abi: AbiInput, featureName: FeatureName): boolean;
/**
 * Checks whether the given ABI supports a given extension
 * @public
 * @param abi
 * @param featureName
 */
export declare function isExtensionEnabled(abi: AbiInput, featureName: FeatureName): boolean;
//# sourceMappingURL=isFeatureEnabled.d.ts.map