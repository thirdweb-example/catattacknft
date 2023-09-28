import { z } from "zod";
/**
 * @internal
 */
export declare const EnglishAuctionInputParamsSchema: z.ZodObject<{
    /**
     * The address of the asset being auctioned.
     */
    assetContractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    /**
     * The ID of the token to auction.
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
     * The minimum price that a bid must be in order to be accepted.
     */
    minimumBidAmount: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    /**
     * The buyout price of the auction.
     */
    buyoutBidAmount: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    /**
     * This is a buffer e.g. x seconds.
     *
     * If a new winning bid is made less than x seconds before expirationTimestamp, the
     * expirationTimestamp is increased by x seconds.
     */
    timeBufferInSeconds: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    /**
     * This is a buffer in basis points e.g. x%.
     *
     * To be considered as a new winning bid, a bid must be at least x% greater than
     * the current winning bid.
     */
    bidBufferBps: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    /**
     * The start time of the auction.
     */
    startTimestamp: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    /**
     * The end time of the auction.
     */
    endTimestamp: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
}, "strip", z.ZodTypeAny, {
    tokenId: string;
    startTimestamp: import("ethers").BigNumber;
    quantity: string;
    bidBufferBps: string;
    endTimestamp: import("ethers").BigNumber;
    minimumBidAmount: string;
    buyoutBidAmount: string;
    timeBufferInSeconds: string;
    assetContractAddress: string;
    currencyContractAddress: string;
}, {
    tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    minimumBidAmount: string | number;
    buyoutBidAmount: string | number;
    assetContractAddress: string;
    quantity?: string | number | bigint | import("ethers").BigNumber | undefined;
    currencyContractAddress?: string | undefined;
    timeBufferInSeconds?: string | number | bigint | import("ethers").BigNumber | undefined;
    bidBufferBps?: string | number | bigint | import("ethers").BigNumber | undefined;
    startTimestamp?: number | Date | undefined;
    endTimestamp?: number | Date | undefined;
}>;
/**
 * @public
 */
export type EnglishAuctionInputParams = z.input<typeof EnglishAuctionInputParamsSchema>;
//# sourceMappingURL=english-auctions.d.ts.map