import type { DirectListingsLogic, EnglishAuctionsLogic, MarketplaceV3 as MarketplaceV3Contract, OffersLogic } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { CallOverrides } from "ethers";
import { ContractAppURI } from "../../core/classes/contract-appuri";
import { ContractEncoder } from "../../core/classes/contract-encoder";
import { ContractEvents } from "../../core/classes/contract-events";
import { ContractInterceptor } from "../../core/classes/contract-interceptor";
import { ContractMetadata } from "../../core/classes/contract-metadata";
import { ContractPlatformFee } from "../../core/classes/contract-platform-fee";
import { ContractRoles } from "../../core/classes/contract-roles";
import { ContractWrapper } from "../../core/classes/contract-wrapper";
import { GasCostEstimator } from "../../core/classes/gas-cost-estimator";
import { MarketplaceV3DirectListings } from "../../core/classes/marketplacev3-direct-listings";
import { MarketplaceV3EnglishAuctions } from "../../core/classes/marketplacev3-english-auction";
import { MarketplaceV3Offers } from "../../core/classes/marketplacev3-offers";
import { Transaction } from "../../core/classes/transactions";
import { UpdateableNetwork } from "../../core/interfaces/contract";
import { NetworkInput } from "../../core/types";
import { Abi, AbiInput } from "../../schema/contracts/custom";
import { MarketplaceContractSchema } from "../../schema/contracts/marketplace";
import { Address } from "../../schema/shared/Address";
/**
 * Create your own whitelabel marketplace that enables users to buy and sell any digital assets.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "marketplace");
 * ```
 *
 * @public
 */
export declare class MarketplaceV3 implements UpdateableNetwork {
    static contractRoles: readonly ["admin", "lister", "asset"];
    abi: Abi;
    private contractWrapper;
    private storage;
    encoder: ContractEncoder<MarketplaceV3Contract>;
    events: ContractEvents<MarketplaceV3Contract>;
    estimator: GasCostEstimator<MarketplaceV3Contract>;
    platformFees: ContractPlatformFee<MarketplaceV3Contract>;
    metadata: ContractMetadata<MarketplaceV3Contract, typeof MarketplaceContractSchema>;
    app: ContractAppURI<MarketplaceV3Contract>;
    roles: ContractRoles<MarketplaceV3Contract, (typeof MarketplaceV3.contractRoles)[number]>;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<MarketplaceV3Contract>;
    /**
     * Direct listings
     * @remarks Create and manage direct listings in your marketplace.
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
     *
     * // And on the buyers side:
     * // The ID of the listing you want to buy from
     * const listingId = 0;
     * // Quantity of the asset you want to buy
     * const quantityDesired = 1;
     *
     * await contract.directListings.buyFromListing(listingId, quantityDesired);
     * ```
     */
    get directListings(): MarketplaceV3DirectListings<DirectListingsLogic>;
    /**
     * Auctions
     * @remarks Create and manage auctions in your marketplace.
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
     *   timeBufferInSeconds: "1000",
     *   // A bid must be at least this much bps greater than the current winning bid
     *   bidBufferBps: "100", // 100 bps stands for 1%
     *   // when should the auction open up for bidding
     *   startTimestamp: new Date(Date.now()),
     *   // end time of auction
     *   endTimestamp: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
     * }
     *
     * const tx = await contract.englishAuctions.createAuction(auction);
     * const receipt = tx.receipt; // the transaction receipt
     * const id = tx.id; // the id of the newly created auction
     *
     * // And on the buyers side:
     * // The auction ID of the asset you want to bid on
     * const auctionId = 0;
     * // The total amount you are willing to bid for auctioned tokens
     * const bidAmount = 1;
     *
     * await contract.englishAuctions.makeBid(auctionId, bidAmount);
     * ```
     */
    get englishAuctions(): MarketplaceV3EnglishAuctions<EnglishAuctionsLogic>;
    /**
     * Offers
     * @remarks Make and manage offers.
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
     *
     * // And on the seller's side:
     * // The ID of the offer you want to accept
     * const offerId = 0;
     * await contract.offers.acceptOffer(offerId);
     * ```
     */
    get offers(): MarketplaceV3Offers<OffersLogic>;
    private _chainId;
    get chainId(): number;
    constructor(network: NetworkInput, address: string, storage: ThirdwebStorage, options: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined, abi: AbiInput, chainId: number, contractWrapper?: ContractWrapper<MarketplaceV3Contract>);
    onNetworkUpdated(network: NetworkInput): void;
    getAddress(): Address;
    /**
     * @internal
     */
    prepare<TMethod extends keyof MarketplaceV3Contract["functions"] = keyof MarketplaceV3Contract["functions"]>(method: string & TMethod, args: any[] & Parameters<MarketplaceV3Contract["functions"][TMethod]>, overrides?: CallOverrides): Promise<Transaction<Omit<{
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<unknown>;
    }, "data">>>;
    /**
     * @internal
     */
    call<TMethod extends keyof MarketplaceV3Contract["functions"] = keyof MarketplaceV3Contract["functions"]>(functionName: string & TMethod, args?: Parameters<MarketplaceV3Contract["functions"][TMethod]>, overrides?: CallOverrides): Promise<ReturnType<MarketplaceV3Contract["functions"][TMethod]>>;
    /** ********************
     * FEATURE DETECTION
     * ********************/
    private detectDirectListings;
    private detectEnglishAuctions;
    private detectOffers;
}
//# sourceMappingURL=marketplacev3.d.ts.map