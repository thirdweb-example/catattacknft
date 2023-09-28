import { Feature, FeatureWithEnabled } from "../../constants/contract-features";
import { AbiInput } from "../../schema/contracts/custom";
/**
 * Processes ALL supported features and sets whether the passed in abi supports each individual feature
 * @internal
 * @param abi
 * @param features
 * @returns the nested struct of all features and whether they're detected in the abi
 */
export declare function detectFeatures(abi: AbiInput, features?: Record<string, Feature>): Record<string, FeatureWithEnabled>;
export declare function detectFeaturesFromBytecode(bytecode: string, features?: Record<string, Feature>): Record<string, FeatureWithEnabled>;
//# sourceMappingURL=detectFeatures.d.ts.map