import type { IMarketplace, Marketplace } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, type BigNumberish } from "ethers";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import { DirectListing, NewDirectListing, Offer } from "../../types/marketplace";
import { TransactionResultWithId } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * Handles direct listings
 * @public
 */
export declare class MarketplaceDirect {
    private contractWrapper;
    private storage;
    constructor(contractWrapper: ContractWrapper<Marketplace>, storage: ThirdwebStorage);
    getAddress(): string;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get a direct listing by id
     *
     * @param listingId - the listing id
     * @returns the Direct listing object
     */
    getListing(listingId: BigNumberish): Promise<DirectListing>;
    /**
     * Get the active offer on a listing
     * @param listingId - the listing id
     * @param address - the address that made the offer
     */
    getActiveOffer(listingId: BigNumberish, address: AddressOrEns): Promise<Offer | undefined>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create Direct Listing
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
     *   // when should the listing open up for offers
     *   startTimestamp: new Date(),
     *   // how long the listing will be open for
     *   listingDurationInSeconds: 86400,
     *   // how many of the asset you want to list
     *   quantity: 1,
     *   // address of the currency contract that will be used to pay for the listing
     *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
     *   // how much the asset will be sold for
     *   buyoutPricePerToken: "1.5",
     * }
     *
     * const tx = await contract.direct.createListing(listing);
     * const receipt = tx.receipt; // the transaction receipt
     * const id = tx.id; // the id of the newly created listing
     * ```
     */
    createListing: {
        (listing: NewDirectListing): Promise<{
            id: BigNumber;
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        }>;
        prepare: (listing: NewDirectListing) => Promise<Transaction<{
            id: BigNumber;
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        }>>;
    };
    /**
     * Create a batch of new listings
     *
     * @remarks Create a batch of new listings on the marketplace
     *
     * @example
     * ```javascript
     * const listings = [...];
     * const tx = await contract.direct.createListingsBatch(listings);
     * ```
     */
    createListingsBatch: {
        (listings: NewDirectListing[]): Promise<TransactionResultWithId[]>;
        prepare: (listings: NewDirectListing[]) => Promise<Transaction<TransactionResultWithId[]>>;
    };
    /**
     * Make an offer for a Direct Listing
     *
     * @remarks Make an offer on a direct listing
     *
     * @example
     * ```javascript
     * import { ChainId, NATIVE_TOKENS } from "@thirdweb-dev/sdk";
     *
     * // The listing ID of the asset you want to offer on
     * const listingId = 0;
     * // The price you are willing to offer per token
     * const pricePerToken = 1;
     * // The quantity of tokens you want to receive for this offer
     * const quantity = 1;
     * // The address of the currency you are making the offer in (must be ERC-20)
     * const currencyContractAddress = NATIVE_TOKENS[ChainId.Rinkeby].wrapped.address
     *
     * await contract.direct.makeOffer(
     *   listingId,
     *   quantity,
     *   currencyContractAddress,
     *   pricePerToken
     * );
     * ```
     */
    makeOffer: {
        (listingId: BigNumberish, quantityDesired: BigNumberish, currencyContractAddress: string, pricePerToken: string | number, expirationDate?: Date | undefined): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (listingId: BigNumberish, quantityDesired: BigNumberish, currencyContractAddress: string, pricePerToken: string | number, expirationDate?: Date | undefined) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Accept an offer on a direct listing
     *
     * @remarks Accept an offer on a direct listing
     *
     * @example
     * ```javascript
     * // The listing ID of the asset you want to bid on
     * const listingId = 0;
     * // The price you are willing to bid for a single token of the listing
     * const offeror = "0x...";
     *
     * await contract.direct.acceptOffer(listingId, offeror);
     * ```
     */
    acceptOffer: {
        (listingId: BigNumberish, addressOfOfferor: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (listingId: BigNumberish, addressOfOfferor: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Buy a Listing
     *
     * @remarks Buy a specific direct listing from the marketplace.
     *
     * @example
     * ```javascript
     * // The listing ID of the asset you want to buy
     * const listingId = 0;
     * // Quantity of the asset you want to buy
     * const quantityDesired = 1;
     *
     * await contract.direct.buyoutListing(listingId, quantityDesired);
     * ```
     *
     * @param listingId - The listing id to buy
     * @param quantityDesired - the quantity to buy
     * @param receiver - optional receiver of the bought listing if different from the connected wallet
     */
    buyoutListing: {
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
     * Update a Direct listing with new metadata.
     *
     * Note: cannot update a listing with a new quantity of 0. Use `cancelDirectListing` to remove a listing instead.
     *
     * @param listing - the new listing information
     */
    updateListing: {
        (listing: DirectListing): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (listing: DirectListing) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Cancel Direct Listing
     *
     * @remarks Cancel a direct listing on the marketplace
     *
     * @example
     * ```javascript
     * // The listing ID of the direct listing you want to cancel
     * const listingId = "0";
     *
     * await contract.direct.cancelListing(listingId);
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
    mapListing(listing: IMarketplace.ListingStruct): Promise<DirectListing>;
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
    isStillValidListing(listing: DirectListing, quantity?: BigNumberish): Promise<{
        valid: boolean;
        error?: string;
    }>;
}
//# sourceMappingURL=marketplace-direct.d.ts.map