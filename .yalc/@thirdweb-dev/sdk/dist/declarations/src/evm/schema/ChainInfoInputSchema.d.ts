import { z } from "zod";
export declare const ChainInfoInputSchema: z.ZodObject<{
    rpc: z.ZodArray<z.ZodString, "many">;
    chainId: z.ZodNumber;
    nativeCurrency: z.ZodObject<{
        name: z.ZodString;
        symbol: z.ZodString;
        decimals: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        name: string;
        decimals: number;
    }, {
        symbol: string;
        name: string;
        decimals: number;
    }>;
    slug: z.ZodString;
}, "strip", z.ZodTypeAny, {
    rpc: string[];
    chainId: number;
    nativeCurrency: {
        symbol: string;
        name: string;
        decimals: number;
    };
    slug: string;
}, {
    rpc: string[];
    chainId: number;
    nativeCurrency: {
        symbol: string;
        name: string;
        decimals: number;
    };
    slug: string;
}>;
//# sourceMappingURL=ChainInfoInputSchema.d.ts.map