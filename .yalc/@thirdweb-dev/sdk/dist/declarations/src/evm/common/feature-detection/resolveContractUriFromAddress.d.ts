import { providers } from "ethers";
/**
 * @internal
 * @param address
 * @param provider
 */
export declare function resolveContractUriFromAddress(address: string, provider: providers.Provider): Promise<string | undefined>;
export declare function resolveContractUriAndBytecode(address: string, provider: providers.Provider): Promise<{
    uri: string | undefined;
    bytecode: string;
}>;
/**
 * Resolve the implementation address of a proxy contract and its bytecode
 * @param address the contract address
 * @param provider RPC provider
 * @returns the implementation address and its bytecode
 */
export declare function resolveImplementation(address: string, provider: providers.Provider): Promise<{
    address: string;
    bytecode: string;
}>;
//# sourceMappingURL=resolveContractUriFromAddress.d.ts.map