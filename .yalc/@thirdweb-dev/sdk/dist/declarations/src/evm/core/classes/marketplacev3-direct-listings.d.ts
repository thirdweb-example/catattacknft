import type { DirectListingsLogic } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, BigNumberish } from "ethers";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import type { MarketplaceFilterWithoutOfferor } from "../../types/marketplace";
import type { DirectListingV3 } from "../../types/marketplacev3";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResultWithId } from "../types";
import { ContractEncoder } from "./contract-encoder";
import { ContractEvents } from "./contract-events";
import { ContractInterceptor } from "./contract-interceptor";
import { ContractWrapper } from "./contract-wrapper";
import { GasCostEstimator } from "./gas-cost-estimator";
import { Transaction } from "./transactions";
/**
 * Handles direct listings
 * @public
 */
export declare class MarketplaceV3DirectListings<TContract extends DirectListingsLogic> implements DetectableFeature {
    featureName: "DirectListings";
    private contractWrapper;
    private storage;
    events: ContractEvents<DirectListingsLogic>;
    interceptor: ContractInterceptor<DirectListingsLogic>;
    encoder: ContractEncoder<DirectListingsLogic>;
    estimator: GasCostEstimator<DirectListingsLogic>;
    constructor(contractWrapper: ContractWrapper<TContract>, storage: ThirdwebStorage);
    getAddress(): string;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get the total number of direct listings
     *
     * @returns Returns the total number of direct listings created.
     * @public
     *
     * @example
     * ```javascript
     * const totalListings = await contract.directListings.getTotalCount();
     * ```
     * @twfeature DirectListings
     */
    getTotalCount(): Promise<BigNumber>;
    /**
     * Get all direct listings
     *
     * @example
     * ```javascript
     * const listings = await contract.directListings.getAll();
     * ```
     *
     * @param filter - optional filter parameters
     * @returns the Direct listing object array
     * @twfeature DirectListings
     */
    getAll(filter?: MarketplaceFilterWithoutOfferor): Promise<DirectListingV3[]>;
    /**
     * Get all valid direct listings
     *
     * @remarks A valid listing is where the listing is active, and the creator still owns & has approved Marketplace to transfer the listed NFTs.
     *
     * @example
     * ```javascript
     * const listings = await contract.directListings.getAllValid();
     * ```
     *
     * @param filter - optional filter parameters
     * @returns the Direct listing object array
     * @twfeature DirectListings
     */
    getAllValid(filter?: MarketplaceFilterWithoutOfferor): Promise<DirectListingV3[]>;
    /**
     * Get a single direct listing
     *
     * @example
     * ```javascript
     * const listingId = 0;
     * const listing = await contract.directListings.getListing(listingId);
     * ```
     *
     * @param listingId - the listing id
     * @returns the Direct listing object
     *
     * @example
     * ```javascript
     * const listingId = 0;
     * const listing = await contract.directListings.getListing(listingId);
     * ```
     * @twfeature DirectListings
     */
    getListing(listingId: BigNumberish): Promise<DirectListingV3>;
    /**
     * Check if a buyer is approved for a specific direct listing
     *
     * @example
     * ```javascript
     * const listingId = 0;
     * const isBuyerApproved = await contract.directListings.isBuyerApprovedForListing(listingId, "{{wallet_address}}");
     *
     * @param listingId - the listing id
     * @param buyer - buyer address
     * @twfeature DirectListings
     */
    isBuyerApprovedForListing(listingId: BigNumberish, buyer: AddressOrEns): Promise<boolean>;
    /**
     * Check if a currency is approved for a specific direct listing
     *
     * @example
     * ```javascript
     * const listingId = 0;
     * const currencyContractAddress = '0x1234';
     * const isApproved = await contract.directListings.isCurrencyApprovedForListing(listingId, currencyContractAddress);
     * ```
     *
     * @param listingId - the listing id
     * @param currency - currency address
     * @twfeature DirectListings
     */
    isCurrencyApprovedForListing(listingId: BigNumberish, currency: AddressOrEns): Promise<boolean>;
    /**
     * Check price per token for an approved currency
     *
     * @example
     * ```javascript
     * const listingId = 0;
     * const currencyContractAddress = '0x1234';
     * const price = await contract.directListings.currencyPriceForListing(listingId, currencyContractAddress);
     * ```
     *
     * @param listingId - the listing id
     * @param currencyContractAddress - currency contract address
     * @twfeature DirectListings
     */
    currencyPriceForListing(listingId: BigNumberish, currencyContractAddress: AddressOrEns): Promise<BigNumberish>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create new direct listing
     *
     * @remarks Create a new listing on the marketplace where people can buy an asset directly.
     *
     * @example
     * ```javascript
     * // Data of the listing you want to create
     * const listing = {
     *   // address of the contract the asset you want to list is on
     *   assetContractAddress: "0x...",
     *   // token ID of the asset you want to list
     *   tokenId: "0",
     *   // how many of the asset you want to list
     *   quantity: 1,
     *   // address of the currency contract that will be used to pay for the listing
     *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
     *   // The price to pay per unit of NFTs listed.
     *   pricePerToken: 1.5,
     *   // when should the listing open up for offers
     *   startTimestamp: new Date(Date.now()),
     *   // how long the listing will be open for
     *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
     *   // Whether the listing is reserved for a specific set of buyers.
     *   isReservedListing: false
     * }
     *
     * const tx = await contract.directListings.createListing(listing);
     * const receipt = tx.receipt; // the transaction receipt
     * const id = tx.id; // the id of the newly created listing
     * ```
     * @twfeature DirectListings
     */
    createListing: {
        (listing: {
            tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            pricePerToken: string | number;
            assetContractAddress: string;
            quantity?: string | number | bigint | BigNumber | undefined;
            currencyContractAddress?: string | undefined;
            startTimestamp?: number | Date | undefined;
            endTimestamp?: number | Date | undefined;
            isReservedListing?: boolean | undefined;
        }): Promise<TransactionResultWithId>;
        prepare: (listing: {
            tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            pricePerToken: string | number;
            assetContractAddress: string;
            quantity?: string | number | bigint | BigNumber | undefined;
            currencyContractAddress?: string | undefined;
            startTimestamp?: number | Date | undefined;
            endTimestamp?: number | Date | undefined;
            isReservedListing?: boolean | undefined;
        }) => Promise<Transaction<TransactionResultWithId>>;
    };
    /**
     * Create a batch of new listings
     *
     * @remarks Create a batch of new listings on the marketplace
     *
     * @example
     * ```javascript
     * const listings = [...];
     * const tx = await contract.directListings.createListingsBatch(listings);
     * ```
     */
    createListingsBatch: {
        (listings: {
            tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            pricePerToken: string | number;
            assetContractAddress: string;
            quantity?: string | number | bigint | BigNumber | undefined;
            currencyContractAddress?: string | undefined;
            startTimestamp?: number | Date | undefined;
            endTimestamp?: number | Date | undefined;
            isReservedListing?: boolean | undefined;
        }[]): Promise<TransactionResultWithId[]>;
        prepare: (listings: {
            tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            pricePerToken: string | number;
            assetContractAddress: string;
            quantity?: string | number | bigint | BigNumber | undefined;
            currencyContractAddress?: string | undefined;
            startTimestamp?: number | Date | undefined;
            endTimestamp?: number | Date | undefined;
            isReservedListing?: boolean | undefined;
        }[]) => Promise<Transaction<TransactionResultWithId[]>>;
    };
    /**
     * Update a direct listing
     *
     * @param listing - the new listing information
     *
     * @example
     * ```javascript
     * // Data of the listing you want to update
     *
     * const listingId = 0; // ID of the listing you want to update
     *
     * const listing = {
     *   // address of the contract the asset you want to list is on
     *   assetContractAddress: "0x...", // should be same as original listing
     *   // token ID of the asset you want to list
     *   tokenId: "0", // should be same as original listing
     *   // how many of the asset you want to list
     *   quantity: 1,
     *   // address of the currency contract that will be used to pay for the listing
     *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
     *   // The price to pay per unit of NFTs listed.
     *   pricePerToken: 1.5,
     *   // when should the listing open up for offers
     *   startTimestamp: new Date(Date.now()), // can't change this if listing already active
     *   // how long the listing will be open for
     *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
     *   // Whether the listing is reserved for a specific set of buyers.
     *   isReservedListing: false
     * }
     *
     * const tx = await contract.directListings.updateListing(listingId, listing);
     * const receipt = tx.receipt; // the transaction receipt
     * const id = tx.id; // the id of the newly created listing
     * ```
     * @twfeature DirectListings
     */
    updateListing: {
        (listingId: BigNumberish, listing: {
            tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            pricePerToken: string | number;
            assetContractAddress: string;
            quantity?: string | number | bigint | BigNumber | undefined;
            currencyContractAddress?: string | undefined;
            startTimestamp?: number | Date | undefined;
            endTimestamp?: number | Date | undefined;
            isReservedListing?: boolean | undefined;
        }): Promise<TransactionResultWithId>;
        prepare: (listingId: BigNumberish, listing: {
            tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            pricePerToken: string | number;
            assetContractAddress: string;
            quantity?: string | number | bigint | BigNumber | undefined;
            currencyContractAddress?: string | undefined;
            startTimestamp?: number | Date | undefined;
            endTimestamp?: number | Date | undefined;
            isReservedListing?: boolean | undefined;
        }) => Promise<Transaction<TransactionResultWithId>>;
    };
    /**
     * Cancel Direct Listing
     *
     * @remarks Cancel a direct listing on the marketplace
     *
     * @example
     * ```javascript
     * // The listing ID of the direct listing you want to cancel
     * const listingId = 0;
     *
     * await contract.directListings.cancelListing(listingId);
     * ```
     * @twfeature DirectListings
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
     * Buy direct listing for a specific wallet
     *
     * @remarks Buy from a specific direct listing from the marketplace.
     *
     * @example
     * ```javascript
     * // The ID of the listing you want to buy from
     * const listingId = 0;
     * // Quantity of the asset you want to buy
     * const quantityDesired = 1;
     *
     * await contract.directListings.buyFromListing(listingId, quantityDesired, "{{wallet_address}}");
     * ```
     *
     * @param listingId - The listing id to buy
     * @param quantityDesired - the quantity to buy
     * @param receiver - optional receiver of the bought listing if different from the connected wallet
     * @twfeature DirectListings
     */
    buyFromListing: {
        (listingId: BigNumberish, quantityDesired: BigNumberish, receiver?: string | undefined): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (listingId: BigNumberish, quantityDesired: BigNumberish, receiver?: string | undefined) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Approve buyer for a reserved direct listing
     *
     * @remarks Approve a buyer to buy from a reserved listing.
     *
     * @example
     * ```javascript
     * // The listing ID of the direct listing you want to approve buyer for
     * const listingId = "0";
     *
     * await contract.directListings.approveBuyerForReservedListing(listingId, "{{wallet_address}}");
     * ```
     *
     * @param listingId - The listing id to buy
     * @param buyer - Address of buyer being approved
     * @twfeature DirectListings
     */
    approveBuyerForReservedListing: {
        (listingId: BigNumberish, buyer: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (listingId: BigNumberish, buyer: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Revoke approval of a buyer for a reserved direct listing
     *
     * @example
     * ```javascript
     * // The listing ID of the direct listing you want to approve buyer for
     * const listingId = "0";
     *
     * await contract.directListings.revokeBuyerApprovalForReservedListing(listingId, "{{wallet_address}}");
     * ```
     *
     * @param listingId - The listing id to buy
     * @param buyer - Address of buyer being approved
     */
    revokeBuyerApprovalForReservedListing: {
        (listingId: BigNumberish, buyer: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (listingId: BigNumberish, buyer: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Approve a currency for a direct listing
     *
     *
     * @example
     * ```javascript
     * // The listing ID of the direct listing you want to approve currency for
     * const listingId = "0";
     *
     * await contract.directListings.approveCurrencyForListing(listingId, currencyContractAddress, pricePerTokenInCurrency);
     * ```
     *
     * @param listingId - The listing id to buy
     * @param currencyContractAddress - Address of currency being approved
     * @param pricePerTokenInCurrency - Price per token in the currency
     * @twfeature DirectListings
     */
    approveCurrencyForListing: {
        (listingId: BigNumberish, currencyContractAddress: string, pricePerTokenInCurrency: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (listingId: BigNumberish, currencyContractAddress: string, pricePerTokenInCurrency: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Revoke approval of a currency for a direct listing
     *
     *
     * @example
     * ```javascript
     * // The listing ID of the direct listing you want to revoke currency for
     * const listingId = "0";
     *
     * await contract.directListings.revokeCurrencyApprovalForListing(listingId, currencyContractAddress);
     * ```
     *
     * @param listingId - The listing id to buy
     * @param currencyContractAddress - Address of currency
     * @twfeature DirectListings
     */
    revokeCurrencyApprovalForListing: {
        (listingId: BigNumberish, currencyContractAddress: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (listingId: BigNumberish, currencyContractAddress: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
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
     * Helper method maps the auction listing to the direct listing interface.
     *
     * @internal
     * @param listing - The listing to map, as returned from the contract.
     * @returns - The mapped interface.
     */
    private mapListing;
    /**
     * Use this method to check if a direct listing is still valid.
     *
     * Ways a direct listing can become invalid:
     * 1. The asset holder transferred the asset to another wallet
     * 2. The asset holder burned the asset
     * 3. The asset holder removed the approval on the marketplace
     *
     * @internal
     * @param listing - The listing to check.
     * @returns - True if the listing is valid, false otherwise.
     */
    private isStillValidListing;
    private applyFilter;
}
//# sourceMappingURL=marketplacev3-direct-listings.d.ts.map