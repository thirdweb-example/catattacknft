import type { ChainInfo } from "../../schema/shared/ChainInfo";
/**
 * @internal
 */
export declare function setSupportedChains(chains: ChainInfo[] | undefined): void;
/**
 * @internal
 */
export declare function getSupportedChains(): {
    rpc: string[];
    chainId: number;
    nativeCurrency: {
        symbol: string;
        name: string;
        decimals: number;
    };
    slug: string;
}[];
//# sourceMappingURL=supportedChains.d.ts.map