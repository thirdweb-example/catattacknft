import { z } from "zod";
/**
 * @internal
 */
export declare const ERC20WrappableSchema: z.ZodObject<{
    contractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
}, "strip", z.ZodTypeAny, {
    quantity: string;
    contractAddress: string;
}, {
    quantity: string | number;
    contractAddress: string;
}>;
/**
 * @internal
 */
export declare const ERC721WrappableSchema: z.ZodObject<{
    contractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
}, "strip", z.ZodTypeAny, {
    tokenId: string;
    contractAddress: string;
}, {
    tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    contractAddress: string;
}>;
/**
 * @internal
 */
export declare const ERC1155WrappableSchema: z.ZodObject<{
    contractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    quantity: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
}, "strip", z.ZodTypeAny, {
    tokenId: string;
    quantity: string;
    contractAddress: string;
}, {
    tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    quantity: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    contractAddress: string;
}>;
//# sourceMappingURL=wrap.d.ts.map