import { ExtensionWithEnabled, FeatureWithEnabled } from "../../constants/contract-features";
import { AbiInput } from "../../schema/contracts/custom";
/**
 * Return all the detected features in the abi
 * @param abi - parsed array of abi entries
 * @returns array of all detected extensions with full information on each feature
 * @internal
 * @deprecated use getAllDetectedExtensions instead
 */
export declare function getAllDetectedFeatures(abi: AbiInput): FeatureWithEnabled[];
export declare function getAllDetectedExtensionsFromBytecode(bytecode: string): FeatureWithEnabled[];
export declare function constructAbiFromBytecode(bytecode: string): AbiInput;
/**
 * Return all the detected extensions in the abi
 * @param abi - parsed array of abi entries
 * @returns array of all detected extensions with full information on each feature
 * @public
 */
export declare function getAllDetectedExtensions(abi: AbiInput): ExtensionWithEnabled[];
//# sourceMappingURL=getAllDetectedFeatures.d.ts.map