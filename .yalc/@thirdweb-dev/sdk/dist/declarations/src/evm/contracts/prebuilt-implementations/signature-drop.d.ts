/// <reference types="bn.js" />
import type { SignatureDrop as SignatureDropContract } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, BigNumberish, CallOverrides } from "ethers";
import { QueryAllParams } from "../../../core/schema/QueryParams";
import { NFT, NFTMetadata } from "../../../core/schema/nft";
import { ContractAppURI } from "../../core/classes/contract-appuri";
import { ContractEncoder } from "../../core/classes/contract-encoder";
import { ContractEvents } from "../../core/classes/contract-events";
import { ContractInterceptor } from "../../core/classes/contract-interceptor";
import { ContractMetadata } from "../../core/classes/contract-metadata";
import { ContractOwner } from "../../core/classes/contract-owner";
import { ContractPlatformFee } from "../../core/classes/contract-platform-fee";
import { ContractRoles } from "../../core/classes/contract-roles";
import { ContractRoyalty } from "../../core/classes/contract-royalty";
import { ContractPrimarySale } from "../../core/classes/contract-sales";
import { ContractWrapper } from "../../core/classes/contract-wrapper";
import { DelayedReveal } from "../../core/classes/delayed-reveal";
import { DropClaimConditions } from "../../core/classes/drop-claim-conditions";
import { StandardErc721 } from "../../core/classes/erc-721-standard";
import { Erc721WithQuantitySignatureMintable } from "../../core/classes/erc-721-with-quantity-signature-mintable";
import { GasCostEstimator } from "../../core/classes/gas-cost-estimator";
import { Transaction } from "../../core/classes/transactions";
import { NetworkInput, TransactionResultWithId } from "../../core/types";
import { PaperCheckout } from "../../integrations/thirdweb-checkout";
import { Abi, AbiInput } from "../../schema/contracts/custom";
import { DropErc721ContractSchema } from "../../schema/contracts/drop-erc721";
import { Address } from "../../schema/shared/Address";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import { ClaimOptions } from "../../types/claim-conditions/claim-conditions";
import { UploadProgressEvent } from "../../types/events";
/**
 * Setup a collection of NFTs where when it comes to minting, you can authorize
 * some external party to mint tokens on your contract, and specify what exactly
 * will be minted by that external party..
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "signature-drop");
 * ```
 *
 * @public
 */
export declare class SignatureDrop extends StandardErc721<SignatureDropContract> {
    static contractRoles: readonly ["admin", "minter", "transfer"];
    abi: Abi;
    owner: ContractOwner<SignatureDropContract>;
    encoder: ContractEncoder<SignatureDropContract>;
    estimator: GasCostEstimator<SignatureDropContract>;
    metadata: ContractMetadata<SignatureDropContract, typeof DropErc721ContractSchema>;
    app: ContractAppURI<SignatureDropContract>;
    sales: ContractPrimarySale;
    platformFees: ContractPlatformFee<SignatureDropContract>;
    events: ContractEvents<SignatureDropContract>;
    roles: ContractRoles<SignatureDropContract, (typeof SignatureDrop.contractRoles)[number]>;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<SignatureDropContract>;
    /**
     * Configure royalties
     * @remarks Set your own royalties for the entire contract or per token
     * @example
     * ```javascript
     * // royalties on the whole contract
     * contract.royalties.setDefaultRoyaltyInfo({
     *   seller_fee_basis_points: 100, // 1%
     *   fee_recipient: "0x..."
     * });
     * // override royalty for a particular token
     * contract.royalties.setTokenRoyaltyInfo(tokenId, {
     *   seller_fee_basis_points: 500, // 5%
     *   fee_recipient: "0x..."
     * });
     * ```
     */
    royalties: ContractRoyalty<SignatureDropContract, typeof DropErc721ContractSchema>;
    /**
     * Configure claim conditions
     * @remarks Define who can claim NFTs in the collection, when and how many.
     * @example
     * ```javascript
     * const presaleStartTime = new Date();
     * const claimCondition = {
     *     startTime: presaleStartTime, // start the presale now
     *     maxClaimableSupply: 2, // limit how many mints for this presale
     *     price: 0.01, // presale price
     *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
     * };
     * await contract.claimConditions.set([claimCondition]);
     * ```
     */
    claimConditions: DropClaimConditions<SignatureDropContract>;
    /**
     * Delayed reveal
     * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
     * @example
     * ```javascript
     * // the real NFTs, these will be encrypted until you reveal them
     * const realNFTs = [{
     *   name: "Common NFT #1",
     *   description: "Common NFT, one of many.",
     *   image: fs.readFileSync("path/to/image.png"),
     * }, {
     *   name: "Super Rare NFT #2",
     *   description: "You got a Super Rare NFT!",
     *   image: fs.readFileSync("path/to/image.png"),
     * }];
     * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
     * const placeholderNFT = {
     *   name: "Hidden NFT",
     *   description: "Will be revealed next week!"
     * };
     * // Create and encrypt the NFTs
     * await contract.revealer.createDelayedRevealBatch(
     *   placeholderNFT,
     *   realNFTs,
     *   "my secret password",
     * );
     * // Whenever you're ready, reveal your NFTs at any time
     * const batchId = 0; // the batch to reveal
     * await contract.revealer.reveal(batchId, "my secret password");
     * ```
     */
    revealer: DelayedReveal<SignatureDropContract>;
    /**
     * Signature Minting
     * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
     * @example
     * ```javascript
     * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
     * const signedPayload = contract.signature.generate(payload);
     *
     * // now anyone can mint the NFT
     * const tx = contract.signature.mint(signedPayload);
     * const receipt = tx.receipt; // the mint transaction receipt
     * const mintedId = tx.id; // the id of the NFT minted
     * ```
     */
    signature: Erc721WithQuantitySignatureMintable;
    /**
     * Checkout
     * @remarks Create a FIAT currency checkout for your NFT drop.
     */
    checkout: PaperCheckout<SignatureDropContract>;
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
    } | undefined, abi: AbiInput, chainId: number, contractWrapper?: ContractWrapper<SignatureDropContract>);
    /**
     * @internal
     */
    onNetworkUpdated(network: NetworkInput): void;
    getAddress(): Address;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get the total count NFTs in this drop contract, both claimed and unclaimed
     */
    totalSupply(): Promise<BigNumber>;
    /**
     * Get All Claimed NFTs
     *
     * @remarks Fetch all the NFTs (and their owners) that have been claimed in this Drop.
     *
     * * @example
     * ```javascript
     * const claimedNFTs = await contract.getAllClaimed();
     * const firstOwner = claimedNFTs[0].owner;
     * ```
     *
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The NFT metadata and their ownersfor all NFTs queried.
     */
    getAllClaimed(queryParams?: QueryAllParams): Promise<NFT[]>;
    /**
     * Get All Unclaimed NFTs
     *
     * @remarks Fetch all the NFTs that have been not been claimed yet in this Drop.
     *
     * * @example
     * ```javascript
     * const unclaimedNFTs = await contract.getAllUnclaimed();
     * const firstUnclaimedNFT = unclaimedNFTs[0].name;
     * ```
     *
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The NFT metadata for all NFTs queried.
     */
    getAllUnclaimed(queryParams?: QueryAllParams): Promise<NFTMetadata[]>;
    /**
     * Get the claimed supply
     *
     * @remarks Get the number of claimed NFTs in this Drop.
     *
     * * @example
     * ```javascript
     * const claimedNFTCount = await contract.totalClaimedSupply();
     * console.log(`NFTs claimed so far: ${claimedNFTCount}`);
     * ```
     * @returns the claimed supply
     */
    totalClaimedSupply(): Promise<BigNumber>;
    /**
     * Get the unclaimed supply
     *
     * @remarks Get the number of unclaimed NFTs in this Drop.
     *
     * * @example
     * ```javascript
     * const unclaimedNFTCount = await contract.totalUnclaimedSupply();
     * console.log(`NFTs left to claim: ${unclaimedNFTCount}`);
     * ```
     * @returns the unclaimed supply
     */
    totalUnclaimedSupply(): Promise<BigNumber>;
    /**
     * Get whether users can transfer NFTs from this contract
     */
    isTransferRestricted(): Promise<boolean>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create a batch of unique NFTs to be claimed in the future
     *
     * @remarks Create batch allows you to create a batch of many unique NFTs in one transaction.
     *
     * @example
     * ```javascript
     * // Custom metadata of the NFTs to create
     * const metadatas = [{
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }, {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"),
     * }];
     *
     * const results = await contract.createBatch(metadatas); // uploads and creates the NFTs on chain
     * const firstTokenId = results[0].id; // token id of the first created NFT
     * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
     * ```
     *
     * @param metadatas - The metadata to include in the batch.
     * @param options - optional upload progress callback
     */
    createBatch: {
        (metadatas: (string | import("zod").objectInputType<{
            name: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber]>>>;
            description: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
            image: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                data?: any;
            }, {
                name: string;
                data?: any;
            }>]>, import("zod").ZodString]>>>;
            animation_url: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                data?: any;
            }, {
                name: string;
                data?: any;
            }>]>, import("zod").ZodString]>>>;
            external_url: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                data?: any;
            }, {
                name: string;
                data?: any;
            }>]>, import("zod").ZodString]>>>;
            background_color: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodEffects<import("zod").ZodString, string, string>, import("zod").ZodString]>>>;
            properties: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>, "many">, import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>]>>>;
            attributes: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>, "many">, import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>]>>>;
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">)[], options?: {
            onProgress: (event: UploadProgressEvent) => void;
        } | undefined): Promise<TransactionResultWithId<import("zod").objectOutputType<{
            name: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber]>>>;
            description: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
            background_color: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodEffects<import("zod").ZodString, string, string>, import("zod").ZodString]>>>;
            properties: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>, "many">, import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>]>>>;
            attributes: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>, "many">, import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>]>>>;
            id: import("zod").ZodString;
            uri: import("zod").ZodString;
            image: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            external_url: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            animation_url: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>[]>;
        prepare: (metadatas: (string | import("zod").objectInputType<{
            name: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber]>>>;
            description: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
            image: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                data?: any;
            }, {
                name: string;
                data?: any;
            }>]>, import("zod").ZodString]>>>;
            animation_url: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                data?: any;
            }, {
                name: string;
                data?: any;
            }>]>, import("zod").ZodString]>>>;
            external_url: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                data?: any;
            }, {
                name: string;
                data?: any;
            }>]>, import("zod").ZodString]>>>;
            background_color: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodEffects<import("zod").ZodString, string, string>, import("zod").ZodString]>>>;
            properties: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>, "many">, import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>]>>>;
            attributes: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>, "many">, import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>]>>>;
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">)[], options?: {
            onProgress: (event: UploadProgressEvent) => void;
        } | undefined) => Promise<Transaction<TransactionResultWithId<import("zod").objectOutputType<{
            name: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber]>>>;
            description: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>>;
            background_color: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodEffects<import("zod").ZodString, string, string>, import("zod").ZodString]>>>;
            properties: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>, "many">, import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>]>>>;
            attributes: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>, "many">, import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>]>>>;
            id: import("zod").ZodString;
            uri: import("zod").ZodString;
            image: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            external_url: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
            animation_url: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodString>>;
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>[]>>;
    };
    /**
     * Construct a claim transaction without executing it.
     * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
     * @param destinationAddress
     * @param quantity
     * @param checkERC20Allowance
     *
     * @deprecated Use `contract.erc721.claim.prepare(...args)` instead
     */
    getClaimTransaction(destinationAddress: AddressOrEns, quantity: BigNumberish, options?: ClaimOptions): Promise<Transaction>;
    /**
     * Claim unique NFTs to a specific Wallet
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const quantity = 1; // how many unique NFTs you want to claim
     *
     * const tx = await contract.claimTo(address, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * const claimedTokenId = tx.id; // the id of the NFT claimed
     * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param quantity - Quantity of the tokens you want to claim
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     *
     * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     */
    claimTo: {
        (destinationAddress: string, quantity: BigNumberish, options?: ClaimOptions | undefined): Promise<TransactionResultWithId<NFT>[]>;
        prepare: (destinationAddress: string, quantity: BigNumberish, options?: ClaimOptions | undefined) => Promise<Transaction<TransactionResultWithId<NFT>[]>>;
    };
    /**
     * Claim NFTs to the connected wallet.
     *
     * @remarks See {@link NFTDrop.claimTo}
     *
     * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     */
    claim: {
        (quantity: BigNumberish, options?: ClaimOptions | undefined): Promise<TransactionResultWithId<NFT>[]>;
        prepare: (quantity: BigNumberish, options?: ClaimOptions | undefined) => Promise<Transaction<TransactionResultWithId<NFT>[]>>;
    };
    /**
     * Burn a single NFT
     * @param tokenId - the token Id to burn
     * @example
     * ```javascript
     * const result = await contract.burnToken(tokenId);
     * ```
     */
    burn: {
        (tokenId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (tokenId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * @internal
     */
    prepare<TMethod extends keyof SignatureDropContract["functions"] = keyof SignatureDropContract["functions"]>(method: string & TMethod, args: any[] & Parameters<SignatureDropContract["functions"][TMethod]>, overrides?: CallOverrides): Promise<Transaction<Omit<{
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<unknown>;
    }, "data">>>;
    /**
     * @internal
     */
    call<TMethod extends keyof SignatureDropContract["functions"] = keyof SignatureDropContract["functions"]>(functionName: string & TMethod, args?: Parameters<SignatureDropContract["functions"][TMethod]>, overrides?: CallOverrides): Promise<ReturnType<SignatureDropContract["functions"][TMethod]>>;
}
//# sourceMappingURL=signature-drop.d.ts.map