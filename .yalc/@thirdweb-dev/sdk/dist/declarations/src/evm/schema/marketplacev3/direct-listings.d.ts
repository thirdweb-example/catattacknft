import { z } from "zod";
/**
 * @internal
 */
export declare const DirectListingInputParamsSchema: z.ZodObject<{
    /**
     * The address of the asset being listed.
     */
    assetContractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    /**
     * The ID of the token to list.
     */
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    /**
     * The quantity of tokens to include in the listing.
     *
     * For ERC721s, this value should always be 1 (and will be forced internally regardless of what is passed here).
     */
    quantity: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    /**
     * The address of the currency to accept for the listing.
     */
    currencyContractAddress: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    /**
     * The price to pay per unit of NFTs listed.
     */
    pricePerToken: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    /**
     * The start time of the listing.
     */
    startTimestamp: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    /**
     * The end time of the listing.
     */
    endTimestamp: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    /**
     * Whether the listing is reserved to be bought from a specific set of buyers.
     */
    isReservedListing: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    tokenId: string;
    startTimestamp: import("ethers").BigNumber;
    pricePerToken: string;
    quantity: string;
    endTimestamp: import("ethers").BigNumber;
    assetContractAddress: string;
    currencyContractAddress: string;
    isReservedListing: boolean;
}, {
    tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    pricePerToken: string | number;
    assetContractAddress: string;
    quantity?: string | number | bigint | import("ethers").BigNumber | undefined;
    currencyContractAddress?: string | undefined;
    startTimestamp?: number | Date | undefined;
    endTimestamp?: number | Date | undefined;
    isReservedListing?: boolean | undefined;
}>;
/**
 * @public
 */
export type DirectListingInputParams = z.input<typeof DirectListingInputParamsSchema>;
//# sourceMappingURL=direct-listings.d.ts.map