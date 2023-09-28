import { z } from "zod";
/**
 * @internal
 */
export declare const OfferInputParamsSchema: z.ZodObject<{
    /**
     * The address of the asset being sought.
     */
    assetContractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    /**
     * The ID of the token.
     */
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    /**
     * The quantity of tokens to buy.
     *
     * For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).
     */
    quantity: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    /**
     * The address of the currency offered for the NFTs.
     */
    currencyContractAddress: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    /**
     * The total offer amount for the NFTs.
     */
    totalPrice: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    /**
     * The end time of the offer.
     */
    endTimestamp: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
}, "strip", z.ZodTypeAny, {
    tokenId: string;
    quantity: string;
    endTimestamp: import("ethers").BigNumber;
    totalPrice: string;
    assetContractAddress: string;
    currencyContractAddress: string;
}, {
    tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    totalPrice: string | number;
    assetContractAddress: string;
    quantity?: string | number | bigint | import("ethers").BigNumber | undefined;
    currencyContractAddress?: string | undefined;
    endTimestamp?: number | Date | undefined;
}>;
/**
 * @public
 */
export type OfferInputParams = z.input<typeof OfferInputParamsSchema>;
//# sourceMappingURL=offer.d.ts.map