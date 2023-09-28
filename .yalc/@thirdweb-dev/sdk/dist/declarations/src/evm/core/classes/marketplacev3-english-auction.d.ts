import type { EnglishAuctionsLogic } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, type BigNumberish } from "ethers";
import { Address } from "../../schema/shared/Address";
import { CurrencyValue } from "../../types/currency";
import type { MarketplaceFilterWithoutOfferor } from "../../types/marketplace";
import { Bid, EnglishAuction } from "../../types/marketplacev3";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResultWithId } from "../types";
import { ContractEncoder } from "./contract-encoder";
import { ContractEvents } from "./contract-events";
import { ContractInterceptor } from "./contract-interceptor";
import { ContractWrapper } from "./contract-wrapper";
import { GasCostEstimator } from "./gas-cost-estimator";
import { Transaction } from "./transactions";
/**
 * Handles auctions
 * @public
 */
export declare class MarketplaceV3EnglishAuctions<TContract extends EnglishAuctionsLogic> implements DetectableFeature {
    featureName: "EnglishAuctions";
    private contractWrapper;
    private storage;
    events: ContractEvents<EnglishAuctionsLogic>;
    interceptor: ContractInterceptor<EnglishAuctionsLogic>;
    encoder: ContractEncoder<EnglishAuctionsLogic>;
    estimator: GasCostEstimator<EnglishAuctionsLogic>;
    constructor(contractWrapper: ContractWrapper<TContract>, storage: ThirdwebStorage);
    getAddress(): string;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get the total number of english auctions
     *
     * @returns Returns the total number of auctions created.
     * @public
     *
     * @example
     * ```javascript
     * const totalAuctions = await contract.englishAuctions.getTotalCount();
     * ```
     * @twfeature EnglishAuctions
     */
    getTotalCount(): Promise<BigNumber>;
    /**
     * Get all english auctions
     *
     * @example
     * ```javascript
     * const auctions = await contract.englishAuctions.getAll();
     * ```
     *
     * @param filter - optional filter parameters
     * @returns the Auction object array
     * @twfeature EnglishAuctions
     */
    getAll(filter?: MarketplaceFilterWithoutOfferor): Promise<EnglishAuction[]>;
    /**
     * Get all valid english auctions
     *
     * @example
     * ```javascript
     * const auctions = await contract.englishAuctions.getAllValid();
     * ```
     *
     * @param filter - optional filter parameters
     * @returns the Auction object array
     * @twfeature EnglishAuctions
     */
    getAllValid(filter?: MarketplaceFilterWithoutOfferor): Promise<EnglishAuction[]>;
    /**
     * Get a single english auction
     *
     * @example
     * ```javascript
     * const auctionId = 0;
     * const auction = await contract.englishAuctions.getAuction(auctionId);
     * ```
     *
     * @param auctionId - the auction Id
     * @returns the Auction object
     * @twfeature EnglishAuctions
     */
    getAuction(auctionId: BigNumberish): Promise<EnglishAuction>;
    /**
     * Get winning bid of an english auction
     *
     * @remarks Get the current highest bid of an active auction.
     *
     * @example
     * ```javascript
     * // The ID of the auction
     * const auctionId = 0;
     * const winningBid = await contract.englishAuctions.getWinningBid(auctionId);
     * ```
     * @param auctionId - the auction Id
     * @twfeature EnglishAuctions
     */
    getWinningBid(auctionId: BigNumberish): Promise<Bid | undefined>;
    /**
     * Check if a bid is or will be a winning bid
     *
     * @example
     * ```javascript
     * const auctionId = 0;
     * const bidAmount = 100;
     * const isWinningBid = await contract.englishAuctions.isWinningBid(auctionId, bidAmount);
     * ```
     *
     * @param auctionId - Auction Id
     * @param bidAmount - Amount to bid
     * @returns true if the bid is or will be a winning bid
     * @twfeature EnglishAuctions
     */
    isWinningBid(auctionId: BigNumberish, bidAmount: BigNumberish): Promise<boolean>;
    /**
     * Get the winner for a specific english auction
     *
     * @remarks Get the winner of the auction after an auction ends.
     *
     * @example
     * ```javascript
     * // The auction ID of a closed english auction
     * const auctionId = 0;
     * const auctionWinner = await contract.englishAuctions.getWinner(auctionId);
     * ```
     * @param auctionId - the auction Id
     * @returns the address of the auction winner
     * @twfeature EnglishAuctions
     */
    getWinner(auctionId: BigNumberish): Promise<Address>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create an english auction
     *
     * @remarks Create a new auction where people can bid on an asset.
     *
     * @example
     * ```javascript
     * // Data of the auction you want to create
     * const auction = {
     *   // address of the contract of the asset you want to auction
     *   assetContractAddress: "0x...",
     *   // token ID of the asset you want to auction
     *   tokenId: "0",
     *   // how many of the asset you want to auction
     *   quantity: 1,
     *   // address of the currency contract that will be used to pay for the auctioned tokens
     *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
     *   // the minimum bid that will be accepted for the token
     *   minimumBidAmount: "1.5",
     *   // how much people would have to bid to instantly buy the asset
     *   buyoutBidAmount: "10",
     *   // If a bid is made less than these many seconds before expiration, the expiration time is increased by this.
     *   timeBufferInSeconds: "900", // 15 minutes by default
     *   // A bid must be at least this much bps greater than the current winning bid
     *   bidBufferBps: "500", // 5% by default
     *   // when should the auction open up for bidding
     *   startTimestamp: new Date(Date.now()),
     *   // end time of auction
     *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
     * }
     *
     * const tx = await contract.englishAuctions.createAuction(auction);
     * const receipt = tx.receipt; // the transaction receipt
     * const id = tx.id; // the id of the newly created auction
     * ```
     * @param auction - the auction data
     * @returns the transaction hash and the auction id
     * @twfeature EnglishAuctions
     */
    createAuction: {
        (auction: {
            tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            minimumBidAmount: string | number;
            buyoutBidAmount: string | number;
            assetContractAddress: string;
            quantity?: string | number | bigint | BigNumber | undefined;
            currencyContractAddress?: string | undefined;
            timeBufferInSeconds?: string | number | bigint | BigNumber | undefined;
            bidBufferBps?: string | number | bigint | BigNumber | undefined;
            startTimestamp?: number | Date | undefined;
            endTimestamp?: number | Date | undefined;
        }): Promise<TransactionResultWithId>;
        prepare: (auction: {
            tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            minimumBidAmount: string | number;
            buyoutBidAmount: string | number;
            assetContractAddress: string;
            quantity?: string | number | bigint | BigNumber | undefined;
            currencyContractAddress?: string | undefined;
            timeBufferInSeconds?: string | number | bigint | BigNumber | undefined;
            bidBufferBps?: string | number | bigint | BigNumber | undefined;
            startTimestamp?: number | Date | undefined;
            endTimestamp?: number | Date | undefined;
        }) => Promise<Transaction<TransactionResultWithId>>;
    };
    /**
     * Create a batch of new auctions
     *
     * @remarks Create a batch of new auctions on the marketplace
     *
     * @example
     * ```javascript
     * const auctions = [...];
     * const tx = await contract.englishAuctions.createAuctionsBatch(auctions);
     * ```
     */
    createAuctionsBatch: {
        (listings: {
            tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            minimumBidAmount: string | number;
            buyoutBidAmount: string | number;
            assetContractAddress: string;
            quantity?: string | number | bigint | BigNumber | undefined;
            currencyContractAddress?: string | undefined;
            timeBufferInSeconds?: string | number | bigint | BigNumber | undefined;
            bidBufferBps?: string | number | bigint | BigNumber | undefined;
            startTimestamp?: number | Date | undefined;
            endTimestamp?: number | Date | undefined;
        }[]): Promise<TransactionResultWithId[]>;
        prepare: (listings: {
            tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            minimumBidAmount: string | number;
            buyoutBidAmount: string | number;
            assetContractAddress: string;
            quantity?: string | number | bigint | BigNumber | undefined;
            currencyContractAddress?: string | undefined;
            timeBufferInSeconds?: string | number | bigint | BigNumber | undefined;
            bidBufferBps?: string | number | bigint | BigNumber | undefined;
            startTimestamp?: number | Date | undefined;
            endTimestamp?: number | Date | undefined;
        }[]) => Promise<Transaction<TransactionResultWithId[]>>;
    };
    /**
     * Buyout an english auction
     *
     * @remarks Buy a specific auction from the marketplace.
     *
     * @example
     * ```javascript
     * // The auction ID you want to buy
     * const auctionId = 0;
     *
     * await contract.englishAuctions.buyoutAuction(auctionId);
     * ```
     * @param auctionId - the auction id
     * @returns the transaction result
     * @twfeature EnglishAuctions
     */
    buyoutAuction: {
        (auctionId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (auctionId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Bid on an english auction
     *
     * @remarks Make a bid on an auction
     *
     * @example
     * ```javascript
     * // The auction ID of the asset you want to bid on
     * const auctionId = 0;
     * // The total amount you are willing to bid for auctioned tokens
     * const bidAmount = 1;
     *
     * await contract.englishAuctions.makeBid(auctionId, bidAmount);
     * ```
     * @param auctionId - the auction id
     * @param bidAmount - the amount you are willing to bid
     * @returns the transaction result
     * @twfeature EnglishAuctions
     */
    makeBid: {
        (auctionId: BigNumberish, bidAmount: string | number): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (auctionId: BigNumberish, bidAmount: string | number) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Cancel an english auction
     *
     * @remarks Cancel an auction on the marketplace
     *
     * @example
     * ```javascript
     * // The ID of the auction you want to cancel
     * const auctionId = "0";
     *
     * await contract.englishAuctions.cancelAuction(auctionId);
     * ```
     * @param auctionId - the auction id
     * @returns the transaction result
     * @twfeature EnglishAuctions
     */
    cancelAuction: {
        (auctionId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (auctionId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Close the english auction for the bidder
     *
     * @remarks Closes the Auction and executes the sale for the buyer.
     *
     * @example
     * ```javascript
     * // The ID of the auction you want to close
     * const auction = "0";
     * await contract.englishAuctions.closeAuctionForBidder(auctionId);
     * ```
     *
     * @param auctionId - the auction id to close
     * @param closeFor - optionally pass the winning bid offeror address to close the auction on their behalf
     * @returns the transaction result
     * @twfeature EnglishAuctions
     */
    closeAuctionForBidder: {
        (auctionId: BigNumberish, closeFor?: string | undefined): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (auctionId: BigNumberish, closeFor?: string | undefined) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Close the english auction for the seller
     *
     * @remarks Closes the Auction and executes the sale for the seller.
     *
     * @example
     * ```javascript
     * // The ID of the auction you want to close
     * const auctionId = "0";
     * await contract.englishAuctions.closeAuctionForSeller(auctionId);
     * ```
     *
     * @param auctionId - the auction id to close
     * @returns the transaction result
     * @twfeature EnglishAuctions
     */
    closeAuctionForSeller: {
        (auctionId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (auctionId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Close the english auction for both the seller and the bidder
     *
     * @remarks Closes the Auction and executes the sale for both parties.
     *
     * @example
     * ```javascript
     * // The ID of the auction you want to close
     * const auction = "0";
     * await contract.englishAuctions.executeSale(auctionId);
     * ```
     *
     * @param auctionId - the auction to close
     * @returns the transaction result
     * @twfeature EnglishAuctions
     */
    executeSale: {
        (auctionId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (auctionId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Get the buffer for an english auction
     *
     * @example
     * ```javascript
     * // The ID of the auction you want to get the buffer for
     * const auctionId = "0";
     * const buffer = await contract.englishAuctions.getBidBufferBps(auctionId);
     * ```
     *
     * @param auctionId - id of the auction
     * @returns the buffer in basis points
     * @twfeature EnglishAuctions
     */
    getBidBufferBps(auctionId: BigNumberish): Promise<number>;
    /**
     * Get the minimum next bid for an english auction
     *
     * @example
     * ```javascript
     * // The ID of the auction you want to get the minimum next bid for
     * const auctionId = "0";
     * const minimumNextBid = await contract.englishAuctions.getMinimumNextBid(auctionId);
     * ```
     *
     * @returns the minimum bid a user can place to outbid the previous highest bid
     * @param auctionId - id of the auction
     * @twfeature EnglishAuctions
     */
    getMinimumNextBid(auctionId: BigNumberish): Promise<CurrencyValue>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    /**
     * Throws error if auction could not be found
     *
     * @param auctionId - Auction to check for
     */
    private validateAuction;
    /**
     * Helper method maps the auction to the auction interface.
     *
     * @internal
     * @param auction - The auction to map, as returned from the contract.
     * @returns - The mapped interface.
     */
    private mapAuction;
    /**
     * Maps an auction-bid to the strict interface
     *
     * @internal
     * @param bid
     * @returns - A `Bid` object
     */
    private mapBid;
    private applyFilter;
}
//# sourceMappingURL=marketplacev3-english-auction.d.ts.map