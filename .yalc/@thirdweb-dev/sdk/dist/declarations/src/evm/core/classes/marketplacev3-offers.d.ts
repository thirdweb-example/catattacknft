import type { OffersLogic } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, BigNumberish } from "ethers";
import type { MarketplaceFilterWithoutSeller } from "../../types/marketplace";
import { OfferV3 } from "../../types/marketplacev3";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResultWithId } from "../types";
import { ContractEncoder } from "./contract-encoder";
import { ContractEvents } from "./contract-events";
import { ContractInterceptor } from "./contract-interceptor";
import { ContractWrapper } from "./contract-wrapper";
import { GasCostEstimator } from "./gas-cost-estimator";
import { Transaction } from "./transactions";
/**
 * Handles marketplace offers
 * @public
 */
export declare class MarketplaceV3Offers<TContract extends OffersLogic> implements DetectableFeature {
    featureName: "Offers";
    private contractWrapper;
    private storage;
    events: ContractEvents<OffersLogic>;
    interceptor: ContractInterceptor<OffersLogic>;
    encoder: ContractEncoder<OffersLogic>;
    estimator: GasCostEstimator<OffersLogic>;
    constructor(contractWrapper: ContractWrapper<TContract>, storage: ThirdwebStorage);
    getAddress(): string;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get the total number of offers
     *
     * @returns Returns the total number of offers created.
     * @public
     *
     * @example
     * ```javascript
     * const totalOffers = await contract.offers.getTotalCount();
     * ```
     * @twfeature Offers
     */
    getTotalCount(): Promise<BigNumber>;
    /**
     * Get all offers
     *
     * @example
     * ```javascript
     * const offers = await contract.offers.getAll();
     * ```
     *
     * @param filter - optional filter parameters
     * @returns the Offer object array
     * @twfeature Offers
     */
    getAll(filter?: MarketplaceFilterWithoutSeller): Promise<OfferV3[]>;
    /**
     * Get all valid offers
     *
     * @example
     * ```javascript
     * const offers = await contract.offers.getAllValid();
     * ```
     *
     * @param filter - optional filter parameters
     * @returns the Offer object array
     * @twfeature Offers
     */
    getAllValid(filter?: MarketplaceFilterWithoutSeller): Promise<OfferV3[]>;
    /**
     * Get a single offer
     *
     * @example
     * ```javascript
     * const offerId = 0;
     * const offer = await contract.offers.getOffer(offerId);
     * ```
     *
     * @param offerId - the listing id
     * @returns the Direct listing object
     * @twfeature Offers
     */
    getOffer(offerId: BigNumberish): Promise<OfferV3>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Make an offer
     *
     * @remarks Make an offer on the marketplace for an asset.
     *
     * @example
     * ```javascript
     * // Data of the offer you want to make
     * const offer = {
     *   // address of the contract the asset you want to make an offer for
     *   assetContractAddress: "0x...",
     *   // token ID of the asset you want to buy
     *   tokenId: "0",
     *   // how many of the asset you want to buy
     *   quantity: 1,
     *   // address of the currency contract that you offer to pay in
     *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
     *   // Total price you offer to pay for the mentioned token(s)
     *   totalPrice: "1.5",
     *   // Offer valid until
     *   endTimestamp: new Date(),
     * }
     *
     * const tx = await contract.offers.makeOffer(offer);
     * const receipt = tx.receipt; // the transaction receipt
     * const id = tx.id; // the id of the newly created offer
     * ```
     * @param offer - the offer data
     * @returns the transaction receipt and the id of the newly created offer
     * @twfeature Offers
     */
    makeOffer: {
        (offer: {
            tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            totalPrice: string | number;
            assetContractAddress: string;
            quantity?: string | number | bigint | BigNumber | undefined;
            currencyContractAddress?: string | undefined;
            endTimestamp?: number | Date | undefined;
        }): Promise<TransactionResultWithId>;
        prepare: (offer: {
            tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            totalPrice: string | number;
            assetContractAddress: string;
            quantity?: string | number | bigint | BigNumber | undefined;
            currencyContractAddress?: string | undefined;
            endTimestamp?: number | Date | undefined;
        }) => Promise<Transaction<TransactionResultWithId>>;
    };
    /**
     * Cancel an offer
     *
     * @remarks Cancel an offer on the marketplace
     *
     * @example
     * ```javascript
     * // The ID of the offer you want to cancel
     * const offerId = "0";
     *
     * await contract.offers.cancelOffer(offerId);
     * ```
     * @param offerId - the offer id
     * @returns the transaction receipt
     * @twfeature Offers
     */
    cancelOffer: {
        (offerId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (offerId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Accept an offer
     *
     * @example
     * ```javascript
     * // The ID of the offer you want to accept
     * const offerId = 0;
     *
     * await contract.offers.acceptOffer(offerId);
     * ```
     *
     * @param offerId - The offer id
     * @returns the transaction receipt
     * @twfeature Offers
     */
    acceptOffer: {
        (offerId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (offerId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    /**
     * Throws error if offer could not be found
     *
     * @param offerId - offer to check for
     */
    private validateOffer;
    /**
     * Helper method maps the offer to the offer interface.
     *
     * @internal
     * @param offer - The offer to map, as returned from the contract.
     * @returns - The mapped interface.
     */
    private mapOffer;
    /**
     * Use this method to check if an offer is still valid.
     *
     * Ways an offer can become invalid:
     * 1. The offer has expired
     * 2. The offeror doesn't have enough balance of currency tokens
     * 3. The offeror removed the approval of currency tokens on the marketplace
     *
     * @internal
     * @param offer - The offer to check.
     * @returns - True if the offer is valid, false otherwise.
     */
    private isStillValidOffer;
    private applyFilter;
}
//# sourceMappingURL=marketplacev3-offers.d.ts.map