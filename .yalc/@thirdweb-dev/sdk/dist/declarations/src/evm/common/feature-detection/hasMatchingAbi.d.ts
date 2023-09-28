import { AbiInput } from "../../schema/contracts/custom";
/**
 * @internal
 * @param contractAbi
 * @param featureAbis
 * @returns
 */
export declare function hasMatchingAbi(contractAbi: AbiInput, featureAbis: readonly AbiInput[]): boolean;
export declare function matchesAbiFromBytecode(contractBytecode: string, featureAbis: readonly AbiInput[]): boolean;
//# sourceMappingURL=hasMatchingAbi.d.ts.map