import { z } from "zod";
/**
 * @internal
 */
export declare const CurrencySchema: z.ZodObject<{
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
/**
 * @internal
 */
export declare const CurrencyValueSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodString;
    decimals: z.ZodNumber;
    value: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    displayValue: z.ZodString;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    value: import("ethers").BigNumber;
    name: string;
    decimals: number;
    displayValue: string;
}, {
    symbol: string;
    value: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    name: string;
    decimals: number;
    displayValue: string;
}>;
//# sourceMappingURL=currency.d.ts.map