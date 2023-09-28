import { z } from "zod";
/**
 * @internal
 */
export declare const TokenMintInputSchema: z.ZodObject<{
    toAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    amount: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
}, "strip", z.ZodTypeAny, {
    amount: string;
    toAddress: string;
}, {
    amount: string | number;
    toAddress: string;
}>;
/**
 * @public
 */
export type TokenMintInput = z.input<typeof TokenMintInputSchema>;
//# sourceMappingURL=token.d.ts.map