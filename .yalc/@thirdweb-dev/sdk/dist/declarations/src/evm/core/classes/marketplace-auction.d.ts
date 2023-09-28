import type { IMarketplace, Marketplace } from "@thirdweb-dev/contracts-js";
import { Marketplace as MarketplaceContract } from "@thirdweb-dev/contracts-js/dist/declarations/src/Marketplace";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, BigNumberish } from "ethers";
import { CurrencyValue } from "../../types/currency";
import { AuctionListing, NewAuctionListing, Offer } from "../../types/marketplace";
import { TransactionResultWithId } from "../types";
import { ContractEncoder } from "./contract-encoder";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * Handles auction listings
 * @public
 */
export declare class MarketplaceAuction {
    private contractWrapper;
    private storage;
    encoder: ContractEncoder<MarketplaceContract>;
    constructor(contractWrapper: ContractWrapper<Marketplace>, storage: ThirdwebStorage);
    getAddress(): string;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get an Auction listing by id
     *
     * @param listingId - the listing Id
     * @returns the Auction listing object
     */
    getListing(listingId: BigNumberish): Promise<AuctionListing>;
    /**
     * Get Highest Bid
     *
     * @remarks Get the current highest bid of an active auction.
     *
     * @example
     * ```javascript
     * // The listing ID of the auction that closed
     * const listingId = 0;
     *
     * contract.auction.
     *   .getWinningBid(listingId)
     *   .then((offer) => console.log(offer))
     *   .catch((err) => console.error(err));
     * ```
     */
    getWinningBid(listingId: BigNumberish): Promise<Offer | undefined>;
    /**
     * Get Auction Winner
     *
     * @remarks Get the winner of the auction after an auction ends.
     *
     * @example
     * ```javascript
     * // The listing ID of the auction that closed
     * const listingId = 0;
     *
     * contract.auction.
     *   .getWinner(listingId)
     *   .then((auctionWinner) => console.log(auctionWinner))
     *   .catch((err) => console.error(err));
     * ```
     */
    getWinner(listingId: BigNumberish): Promise<string>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create Auction
     *
     * @remarks Create a new auction where people can bid on an asset.
     *
     * @example
     * ```javascript
     * // Data of the auction you want to create
     * const auction = {
     *   // address of the contract the asset you want to list is on
     *   assetContractAddress: "0x...",
     *   // token ID of the asset you want to list
     *   tokenId: "0",
     *  // when should the listing open up for offers
     *   startTimestamp: new Date(),
     *   // how long the listing will be open for
     *   listingDurationInSeconds: 86400,
     *   // how many of the asset you want to list
     *   quantity: 1,
     *   // address of the currency contract that will be used to pay for the listing
     *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
     *   // how much people would have to bid to instantly buy the asset
     *   buyoutPricePerToken: "10",
     *   // the minimum bid that will be accepted for the token
     *   reservePricePerToken: "1.5",
     * }
     *
     * const tx = await contract.auction.createListing(auction);
     * const receipt = tx.receipt; // the transaction receipt
     * const id = tx.id; // the id of the newly created listing
     * ```
     */
    createListing: {
        (listing: NewAuctionListing): Promise<TransactionResultWithId>;
        prepare: (listing: NewAuctionListing) => Promise<Transaction<TransactionResultWithId>>;
    };
    /**
     * Create a batch of new auctions
     *
     * @remarks Create a batch of new auctions on the marketplace
     *
     * @example
     * ```javascript
     * const auctions = [...];
     * const tx = await contract.auction.createListingsBatch(auctions);
     * ```
     */
    createListingsBatch: {
        (listings: NewAuctionListing[]): Promise<TransactionResultWithId[]>;
        prepare: (listings: NewAuctionListing[]) => Promise<Transaction<TransactionResultWithId[]>>;
    };
    /**
     * Buyout Auction
     *
     * @remarks Buy a specific direct listing from the marketplace.
     *
     * @example
     * ```javascript
     * // The listing ID of the asset you want to buy
     * const listingId = 0;
     *
     * await contract.auction.buyoutListing(listingId);
     * ```
     */
    buyoutListing: {
        (listingId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (listingId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Bid On Auction
     *
     * @remarks Make a bid on an auction listing
     *
     * @example
     * ```javascript
     * // The listing ID of the asset you want to bid on
     * const listingId = 0;
     * // The price you are willing to bid for a single token of the listing
     * const pricePerToken = 1;
     *
     * await contract.auction.makeBid(listingId, pricePerToken);
     * ```
     */
    makeBid: {
        (listingId: BigNumberish, pricePerToken: string | number): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (listingId: BigNumberish, pricePerToken: string | number) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Cancel Auction Listing
     *
     * @remarks Cancel an auction listing on the marketplace
     *
     * @example
     * ```javascript
     * // The listing ID of the auction listing you want to cancel
     * const listingId = "0";
     *
     * await contract.auction.cancelListing(listingId);
     * ```
     */
    cancelListing: {
        (listingId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (listingId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Close the Auction for the buyer or the seller
     *
     * @remarks Closes the Auction and executes the sale for the buyer or the seller.
     *
     * @example
     * ```javascript
     * // The listing ID of the auction listing you want to close
     * const listingId = "0";
     * await contract.auction.closeListing(listingId);
     * ```
     *
     * @param listingId - the auction  listing ud to close
     * @param closeFor - optionally pass the auction creator address or winning bid offeror address to close the auction on their behalf
     */
    closeListing: {
        (listingId: BigNumberish, closeFor?: string | undefined): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (listingId: BigNumberish, closeFor?: string | undefined) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Execute the Auction Sale
     *
     * @remarks Closes the Auction and executes the sale for both parties.
     *
     * @example
     * ```javascript
     * // The listing ID of the auction listing you want to close
     * const listingId = "0";
     * await contract.auction.executeSale(listingId);
     * ```
     *
     * @param listingId - the auction  listing ud to close
     */
    executeSale: {
        (listingId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (listingId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Update an Auction listing with new metadata
     * @param listing - the listing id to update
     */
    updateListing: {
        (listing: AuctionListing): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (listing: AuctionListing) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Get the buffer in basis points between offers
     */
    getBidBufferBps(): Promise<BigNumber>;
    /**
     * returns the minimum bid a user can place to outbid the previous highest bid
     * @param listingId - the listing id of the auction
     */
    getMinimumNextBid(listingId: BigNumberish): Promise<CurrencyValue>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    /**
     * Throws error if listing could not be found
     *
     * @param listingId - Listing to check for
     */
    private validateListing;
    /**
     * Helper method maps the auction listing to the auction listing interface.
     *
     * @internal
     * @param listing - The listing to map, as returned from the contract.
     * @returns - The mapped interface.
     */
    mapListing(listing: IMarketplace.ListingStruct): Promise<AuctionListing>;
}
//# sourceMappingURL=marketplace-auction.d.ts.map