import { AbiInput } from "../../schema/contracts/custom";
/**
 * Return all the detected features names in the abi
 * @param abi - parsed array of abi entries
 * @returns array of all detected features names
 * @internal
 * @deprecated use getAllExtensionNames instead
 */
export declare function getAllDetectedFeatureNames(abi: AbiInput): string[];
/**
 * Return all the detected extension names in the abi
 * @param abi - parsed array of abi entries
 * @returns array of all detected features names
 * @public
 */
export declare function getAllDetectedExtensionNames(abi: AbiInput): string[];
//# sourceMappingURL=getAllDetectedFeatureNames.d.ts.map