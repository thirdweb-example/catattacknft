import type { AirdropERC1155, AirdropERC20, AirdropERC721, DirectListingsLogic, EnglishAuctionsLogic, IAccountCore, IAccountFactory, IAppURI, IContractMetadata, IPermissions, IPlatformFee, IRoyalty, OffersLogic, Ownable } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BaseContract, CallOverrides } from "ethers";
import { Account } from "../core/classes/account";
import { AccountFactory } from "../core/classes/account-factory";
import { Airdrop1155 } from "../core/classes/airdrop-erc1155";
import { Airdrop20 } from "../core/classes/airdrop-erc20";
import { Airdrop721 } from "../core/classes/airdrop-erc721";
import { ContractAppURI } from "../core/classes/contract-appuri";
import { ContractEncoder } from "../core/classes/contract-encoder";
import { ContractEvents } from "../core/classes/contract-events";
import { ContractInterceptor } from "../core/classes/contract-interceptor";
import { ContractMetadata } from "../core/classes/contract-metadata";
import { ContractOwner } from "../core/classes/contract-owner";
import { ContractPlatformFee } from "../core/classes/contract-platform-fee";
import { ContractPublishedMetadata } from "../core/classes/contract-published-metadata";
import { ContractRoles } from "../core/classes/contract-roles";
import { ContractRoyalty } from "../core/classes/contract-royalty";
import { ContractPrimarySale } from "../core/classes/contract-sales";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { Erc1155 } from "../core/classes/erc-1155";
import { Erc20 } from "../core/classes/erc-20";
import { Erc721 } from "../core/classes/erc-721";
import { GasCostEstimator } from "../core/classes/gas-cost-estimator";
import { MarketplaceV3DirectListings } from "../core/classes/marketplacev3-direct-listings";
import { MarketplaceV3EnglishAuctions } from "../core/classes/marketplacev3-english-auction";
import { MarketplaceV3Offers } from "../core/classes/marketplacev3-offers";
import { Transaction } from "../core/classes/transactions";
import { UpdateableNetwork } from "../core/interfaces/contract";
import { NetworkInput } from "../core/types";
import { Abi, AbiInput, CustomContractSchema } from "../schema/contracts/custom";
import { Address } from "../schema/shared/Address";
import { BaseContractInterface } from "../types/contract";
/**
 * Custom contract dynamic class with feature detection
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK(provider);
 * const contract = await sdk.getContract("{{contract_address}}");
 *
 * // call any function in your contract
 * await contract.call("myCustomFunction", [param1, param2]);
 *
 * // if your contract follows the ERC721 standard, contract.nft will be present
 * const allNFTs = await contract.erc721.query.all()
 *
 * // if your contract extends IMintableERC721, contract.nft.mint() will be available
 * const tx = await contract.erc721.mint({
 *     name: "Cool NFT",
 *     image: readFileSync("some_image.png"),
 *   });
 * ```
 *
 * @beta
 */
export declare class SmartContract<TContract extends BaseContractInterface = BaseContract> implements UpdateableNetwork {
    private contractWrapper;
    private storage;
    events: ContractEvents<TContract>;
    interceptor: ContractInterceptor<TContract>;
    encoder: ContractEncoder<TContract>;
    estimator: GasCostEstimator<TContract>;
    publishedMetadata: ContractPublishedMetadata<TContract>;
    abi: Abi;
    metadata: ContractMetadata<BaseContract, typeof CustomContractSchema>;
    /**
     * Handle royalties
     */
    get royalties(): ContractRoyalty<IRoyalty, any>;
    /**
     * Handle permissions
     */
    get roles(): ContractRoles<IPermissions, any>;
    /**
     * Handle primary sales
     */
    get sales(): ContractPrimarySale;
    /**
     * Handle platform fees
     */
    get platformFees(): ContractPlatformFee<IPlatformFee>;
    /**
     * Set and get the owner of the contract
     */
    get owner(): ContractOwner<Ownable>;
    /**
     * Auto-detects ERC20 standard functions.
     */
    get erc20(): Erc20;
    /**
     * Auto-detects ERC721 standard functions.
     */
    get erc721(): Erc721;
    /**
     * Auto-detects ERC1155 standard functions.
     */
    get erc1155(): Erc1155;
    /**
     * Auto-detects AppURI standard functions.
     */
    get app(): ContractAppURI<IAppURI | IContractMetadata>;
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
    get airdrop20(): Airdrop20<AirdropERC20>;
    get airdrop721(): Airdrop721<AirdropERC721>;
    get airdrop1155(): Airdrop1155<AirdropERC1155>;
    /**
     * Account Factory
     *
     * @remarks Create accounts and fetch data about them.
     * @example
     * ```javascript
     *
     * // Predict the address of the account that will be created for an admin.
     * const deterministicAddress = await contract.accountFactory.predictAccountAddress(admin, extraData);
     *
     * // Create accounts
     * const tx = await contract.accountFactory.createAccount(admin, extraData);
     * // the same as `deterministicAddress`
     * const accountAddress = tx.address;
     *
     * // Get all accounts created by the factory
     * const allAccounts = await contract.accountFactory.getAllAccounts();
     *
     * // Get all accounts on which a signer has been given authority.
     * const associatedAccounts = await contract.accountFactory.getAssociatedAccounts(signer);
     *
     * // Get all signers who have been given authority on a account.
     * const associatedSigners = await contract.accountFactory.getAssociatedSigners(accountAddress);
     *
     * // Check whether a account has already been created for a given admin.
     * const isAccountDeployed = await contract.accountFactory.isAccountDeployed(admin, extraData);
     * ```
     */
    get accountFactory(): AccountFactory<IAccountFactory>;
    get account(): Account<IAccountCore>;
    private _chainId;
    get chainId(): number;
    constructor(network: NetworkInput, address: string, abi: AbiInput, storage: ThirdwebStorage, options: {
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
    } | undefined, chainId: number, contractWrapper?: ContractWrapper<TContract>);
    onNetworkUpdated(network: NetworkInput): void;
    getAddress(): Address;
    /**
     * Prepare a transaction for sending
     */
    prepare<TMethod extends keyof TContract["functions"] = keyof TContract["functions"]>(method: string & TMethod, args: any[] & Parameters<TContract["functions"][TMethod]>, overrides?: CallOverrides): Transaction<Omit<{
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<unknown>;
    }, "data">>;
    /**
     * Call any function on this contract
     * @example
     * ```javascript
     * // read functions will return the data from the contract
     * const myValue = await contract.call("myReadFunction");
     * console.log(myValue);
     *
     * // write functions will return the transaction receipt
     * const tx = await contract.call("myWriteFunction", [arg1, arg2]);
     * const receipt = tx.receipt;
     *
     * // Optionally override transaction options
     * await contract.call("myWriteFunction", [arg1, arg2], {
     *  gasLimit: 1000000, // override default gas limit
     *  value: ethers.utils.parseEther("0.1"), // send 0.1 ether with the contract call
     * };
     * ```
     * @param functionName - the name of the function to call
     * @param args - the arguments of the function
     */
    call<TMethod extends keyof TContract["functions"] = keyof TContract["functions"]>(functionName: string & TMethod, args?: Parameters<TContract["functions"][TMethod]>, overrides?: CallOverrides): Promise<ReturnType<TContract["functions"][TMethod]>>;
    /** ********************
     * FEATURE DETECTION
     * ********************/
    private detectRoyalties;
    private detectRoles;
    private detectPrimarySales;
    private detectPlatformFees;
    private detectErc20;
    private detectErc721;
    private detectErc1155;
    private detectOwnable;
    private detectApp;
    private detectDirectListings;
    private detectEnglishAuctions;
    private detectOffers;
    private detectAirdrop20;
    private detectAirdrop721;
    private detectAirdrop1155;
    private detectAccountFactory;
    private detectAccount;
}
//# sourceMappingURL=smart-contract.d.ts.map