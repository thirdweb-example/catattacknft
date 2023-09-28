/**
 * @internal
 */
export declare const CONTRACT_ADDRESSES: Record<number, {
    openzeppelinForwarder: string;
    openzeppelinForwarderEOA: string;
    biconomyForwarder: string;
}>;
export declare const IMPLEMENTATIONS: Record<number, Record<string, string>>;
/**
 * @internal
 * @param chainId
 * @param contractType
 */
export declare function getImplementation(chainId: number, contractName: string, version?: string): string | null;
/**
 *
 * @param chainId - chain id
 * @returns the array of trusted forwarders for the given chain id
 * @internal
 */
export declare function zkGetDefaultTrustedForwarders(chainId: number, contractName?: string): string[];
//# sourceMappingURL=addresses.d.ts.map