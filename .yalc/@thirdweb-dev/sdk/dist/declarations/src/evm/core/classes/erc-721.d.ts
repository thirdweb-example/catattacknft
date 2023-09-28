/// <reference types="bn.js" />
import type { DropERC721, Multiwrap, SignatureDrop, TokenERC721 } from "@thirdweb-dev/contracts-js";
import type { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, BigNumberish } from "ethers";
import type { QueryAllParams } from "../../../core/schema/QueryParams";
import type { NFT, NFTMetadata, NFTMetadataOrUri } from "../../../core/schema/nft";
import type { Address } from "../../schema/shared/Address";
import type { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import type { ClaimOptions } from "../../types/claim-conditions/claim-conditions";
import type { BaseClaimConditionERC721, BaseERC721 } from "../../types/eips";
import type { UploadProgressEvent } from "../../types/events";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { UpdateableNetwork } from "../interfaces/contract";
import type { NetworkInput, TransactionResultWithId } from "../types";
import type { ContractWrapper } from "./contract-wrapper";
import { Erc721SharedMetadata } from "./erc-721-shared-metadata";
import { Erc721TieredDrop } from "./erc-721-tiered-drop";
import { Erc721WithQuantitySignatureMintable } from "./erc-721-with-quantity-signature-mintable";
import { Transaction } from "./transactions";
/**
 * Standard ERC721 NFT functions
 * @remarks Basic functionality for a ERC721 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.transfer(walletAddress, tokenId);
 * ```
 * @public
 */
export declare class Erc721<T extends Multiwrap | SignatureDrop | DropERC721 | TokenERC721 | BaseERC721 = BaseERC721> implements UpdateableNetwork, DetectableFeature {
    featureName: "ERC721";
    private query;
    private mintable;
    private burnable;
    private lazyMintable;
    private tieredDropable;
    private signatureMintable;
    private claimWithConditions;
    private claimCustom;
    private erc721SharedMetadata;
    private claimZora;
    private loyaltyCard;
    private updatableMetadata;
    protected contractWrapper: ContractWrapper<T>;
    protected storage: ThirdwebStorage;
    private _chainId;
    get chainId(): number;
    constructor(contractWrapper: ContractWrapper<T>, storage: ThirdwebStorage, chainId: number);
    /**
     * @internal
     */
    onNetworkUpdated(network: NetworkInput): void;
    getAddress(): Address;
    /**
     * Get a single NFT
     *
     * @example
     * ```javascript
     * const tokenId = 0;
     * const nft = await contract.erc721.get(tokenId);
     * ```
     * @param tokenId - the tokenId of the NFT to retrieve
     * @returns The NFT metadata
     * @twfeature ERC721
     */
    get(tokenId: BigNumberish): Promise<NFT>;
    /**
     * Get the current owner of an NFT
     *
     * @param tokenId - the tokenId of the NFT
     * @returns the address of the owner
     * @twfeature ERC721
     */
    ownerOf(tokenId: BigNumberish): Promise<string>;
    /**
     * Get NFT balance of a specific wallet
     *
     * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
     *
     * @example
     * ```javascript
     * const walletAddress = "{{wallet_address}}";
     * const balance = await contract.erc721.balanceOf(walletAddress);
     * console.log(balance);
     * ```
     * @twfeature ERC721
     */
    balanceOf(address: AddressOrEns): Promise<BigNumber>;
    /**
     * Get NFT balance for the currently connected wallet
     */
    balance(): Promise<BigNumber>;
    /**
     * Get whether this wallet has approved transfers from the given operator
     * @param address - the wallet address
     * @param operator - the operator address
     */
    isApproved(address: AddressOrEns, operator: AddressOrEns): Promise<boolean>;
    /**
     * Transfer an NFT
     *
     * @remarks Transfer an NFT from the connected wallet to another wallet.
     *
     * @example
     * ```javascript
     * const walletAddress = "{{wallet_address}}";
     * const tokenId = 0;
     * await contract.erc721.transfer(walletAddress, tokenId);
     * ```
     * @twfeature ERC721
     */
    transfer: {
        (to: string, tokenId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (to: string, tokenId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Transfer an NFT from a specific wallet
     *
     * @remarks Transfer an NFT from the given wallet to another wallet.
     *
     * @example
     * ```javascript
     * const fromWalletAddress = "{{wallet_address}}";
     * const toWalletAddress = "{{wallet_address}}";
     * const tokenId = 0;
     * await contract.erc721.transferFrom(fromWalletAddress, toWalletAddress, tokenId);
     * ```
     * @twfeature ERC721
     */
    transferFrom: {
        (from: string, to: string, tokenId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (from: string, to: string, tokenId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Set approval for all NFTs
     * @remarks Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
     * @example
     * ```javascript
     * const operator = "{{wallet_address}}";
     * await contract.erc721.setApprovalForAll(operator, true);
     * ```
     * @param operator - the operator's address
     * @param approved - whether to approve or remove
     * @twfeature ERC721
     */
    setApprovalForAll: {
        (operator: string, approved: boolean): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (operator: string, approved: boolean) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Set approval for a single NFT
     * @remarks Approve an operator for the NFT owner. Operators can call transferFrom or safeTransferFrom for the specified token.
     * @example
     * ```javascript
     * const operator = "{{wallet_address}}";
     * const tokenId = 0;
     * await contract.erc721.setApprovalForToken(operator, tokenId);
     * ```
     * @param operator - the operator's address
     * @param tokenId - the tokenId to give approval for
     *
     * @internal
     */
    setApprovalForToken: {
        (operator: string, tokenId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (operator: string, tokenId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Get all NFTs
     *
     * @remarks Get all the data associated with every NFT in this contract.
     *
     * By default, returns the first 100 NFTs, use queryParams to fetch more.
     *
     * @example
     * ```javascript
     * const nfts = await contract.erc721.getAll();
     * console.log(nfts);
     * ```
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The NFT metadata for all NFTs queried.
     * @twfeature ERC721Supply | ERC721Enumerable
     */
    getAll(queryParams?: QueryAllParams): Promise<NFT[]>;
    /**
     * Get all NFT owners
     * @example
     * ```javascript
     * const owners = await contract.erc721.getAllOwners();
     * console.log(owners);
     * ```
     * @returns an array of token ids and owners
     * @twfeature ERC721Supply | ERC721Enumerable
     */
    getAllOwners(): Promise<{
        tokenId: number;
        owner: string;
    }[]>;
    /**
     * Get the total number of NFTs minted
     * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
     * @example
     * ```javascript
     * const count = await contract.erc721.totalCount();
     * console.log(count);
     * ```
     *
     * @returns the total number of NFTs minted in this contract
     * @public
     */
    totalCount(): Promise<BigNumber>;
    /**
     * Get the total count NFTs minted in this contract
     * @twfeature ERC721Supply | ERC721Enumerable
     */
    totalCirculatingSupply(): Promise<BigNumber>;
    /**
     * Get all NFTs owned by a specific wallet
     *
     * @remarks Get all the data associated with the NFTs owned by a specific wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet to get the NFTs of
     * const address = "{{wallet_address}}";
     * const nfts = await contract.erc721.getOwned(address);
     * console.log(nfts);
     * ```
     * @param walletAddress - the wallet address to query, defaults to the connected wallet
     * @returns The NFT metadata for all NFTs in the contract.
     * @twfeature ERC721Supply | ERC721Enumerable
     */
    getOwned(walletAddress?: AddressOrEns): Promise<NFT[]>;
    /**
     * Get all token ids of NFTs owned by a specific wallet.
     * @param walletAddress - the wallet address to query, defaults to the connected wallet
     */
    getOwnedTokenIds(walletAddress?: AddressOrEns): Promise<BigNumber[]>;
    /**
     * Mint an NFT
     *
     * @remarks Mint an NFT to the connected wallet.
     *
     * @example
     * ```javascript
     * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
     * const metadata = {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * };
     *
     * const tx = await contract.erc721.mint(metadata);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
     * @twfeature ERC721Mintable
     */
    mint: {
        (metadata: string | import("zod").objectInputType<{
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
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">): Promise<TransactionResultWithId<NFT>>;
        prepare: (metadata: string | import("zod").objectInputType<{
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
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">) => Promise<Transaction<TransactionResultWithId<NFT>>>;
    };
    /**
     * Mint an NFT to a specific wallet
     *
     * @remarks Mint a unique NFT to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const walletAddress = "{{wallet_address}}";
     *
     * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
     * const metadata = {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * };
     *
     * const tx = await contract.erc721.mintTo(walletAddress, metadata);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
     * @twfeature ERC721Mintable
     */
    mintTo: {
        (receiver: string, metadata: string | import("zod").objectInputType<{
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
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">): Promise<TransactionResultWithId<NFT>>;
        prepare: (receiver: string, metadata: string | import("zod").objectInputType<{
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
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">) => Promise<Transaction<TransactionResultWithId<NFT>>>;
    };
    /**
     * Construct a mint transaction without executing it.
     * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
     * @param receiver - Address you want to send the token to
     * @param metadata - The metadata of the NFT you want to mint
     *
     * @deprecated Use `contract.erc721.mint.prepare(...args)` instead
     * @twfeature ERC721Mintable
     */
    getMintTransaction(receiver: AddressOrEns, metadata: NFTMetadataOrUri): Promise<Transaction<TransactionResultWithId<NFT>>>;
    /**
     * Mint many NFTs
     *
     * @remarks Mint many unique NFTs at once to the connected wallet
     *
     * @example
     * ```javascript*
     * // Custom metadata of the NFTs you want to mint.
     * const metadatas = [{
     *   name: "Cool NFT #1",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }, {
     *   name: "Cool NFT #2",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/other/image.png"),
     * }];
     *
     * const tx = await contract.erc721.mintBatch(metadatas);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     * @twfeature ERC721BatchMintable
     */
    mintBatch: {
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
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">)[]): Promise<TransactionResultWithId<NFT>[]>;
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
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">)[]) => Promise<Transaction<TransactionResultWithId<NFT>[]>>;
    };
    /**
     * Mint many NFTs to a specific wallet
     *
     * @remarks Mint many unique NFTs at once to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const walletAddress = "{{wallet_address}}";
     *
     * // Custom metadata of the NFTs you want to mint.
     * const metadatas = [{
     *   name: "Cool NFT #1",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }, {
     *   name: "Cool NFT #2",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/other/image.png"),
     * }];
     *
     * const tx = await contract.erc721.mintBatchTo(walletAddress, metadatas);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     * @twfeature ERC721BatchMintable
     */
    mintBatchTo: {
        (receiver: string, metadatas: (string | import("zod").objectInputType<{
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
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">)[]): Promise<TransactionResultWithId<NFT>[]>;
        prepare: (receiver: string, metadatas: (string | import("zod").objectInputType<{
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
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">)[]) => Promise<Transaction<TransactionResultWithId<NFT>[]>>;
    };
    /**
     * Burn a single NFT
     * @param tokenId - the token Id to burn
     *
     * @example
     * ```javascript
     * const result = await contract.erc721.burn(tokenId);
     * ```
     * @twfeature ERC721Burnable
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
     * Cancel loyalty card NFTs
     *
     * @remarks Cancel loyalty card NFTs held by the connected wallet
     *
     * @example
     * ```javascript
     * // The token ID of the loyalty card you want to cancel
     * const tokenId = 0;
     *
     * const result = await contract.erc721.cancel(tokenId);
     * ```
     * @twfeature ERC721LoyaltyCard
     */
    cancel: {
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
     * Revoke loyalty card NFTs
     *
     * @remarks Revoke loyalty card NFTs held by some owner.
     *
     * @example
     * ```javascript
     * // The token ID of the loyalty card you want to revoke
     * const tokenId = 0;
     *
     * const result = await contract.erc721.revoke(tokenId);
     * ```
     * @twfeature ERC721LoyaltyCard
     */
    revoke: {
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
     * Lazy mint NFTs
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
     * const results = await contract.erc721.lazyMint(metadatas); // uploads and creates the NFTs on chain
     * const firstTokenId = results[0].id; // token id of the first created NFT
     * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
     * ```
     *
     * @param metadatas - The metadata to include in the batch.
     * @param options - optional upload progress callback
     * @twfeature ERC721LazyMintable
     */
    lazyMint: {
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
     * Update the metadata of an NFT
     *
     * @remarks Update the metadata of an NFT
     *
     * @example
     * ```javascript
     * // The token ID of the NFT whose metadata you want to update
     * const tokenId = 0;
     * // The new metadata
     * const metadata = { name: "My NFT", description: "My NFT description""}
     *
     * await contract.erc721.update(tokenId, metadata);
     * ```
     * @twfeature ERC721UpdatableMetadata
     */
    update: {
        (tokenId: BigNumberish, metadata: string | import("zod").objectInputType<{
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
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (tokenId: BigNumberish, metadata: string | import("zod").objectInputType<{
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
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Claim NFTs
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const quantity = 1; // how many unique NFTs you want to claim
     *
     * const tx = await contract.erc721.claim(quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * const claimedTokenId = tx.id; // the id of the NFT claimed
     * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
     * ```
     *
     * @param quantity - Quantity of the tokens you want to claim
     *
     * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC721ClaimZora
     */
    claim: {
        (quantity: BigNumberish, options?: ClaimOptions | undefined): Promise<TransactionResultWithId<NFT>[]>;
        prepare: (quantity: BigNumberish, options?: ClaimOptions | undefined) => Promise<Transaction<TransactionResultWithId<NFT>[]>>;
    };
    /**
     * Claim NFTs to a specific wallet
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const quantity = 1; // how many unique NFTs you want to claim
     *
     * const tx = await contract.erc721.claimTo(address, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * const claimedTokenId = tx.id; // the id of the NFT claimed
     * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param quantity - Quantity of the tokens you want to claim
     * @param options
     * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC721ClaimZora
     */
    claimTo: {
        (destinationAddress: string, quantity: BigNumberish, options?: ClaimOptions | undefined): Promise<TransactionResultWithId<NFT>[]>;
        prepare: (destinationAddress: string, quantity: BigNumberish, options?: ClaimOptions | undefined) => Promise<Transaction<TransactionResultWithId<NFT>[]>>;
    };
    /**
     * Construct a claim transaction without executing it.
     * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
     * @param destinationAddress
     * @param quantity
     * @param options
     *
     * @deprecated Use `contract.erc721.claim.prepare(...args)` instead
     * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1
     */
    getClaimTransaction(destinationAddress: AddressOrEns, quantity: BigNumberish, options?: ClaimOptions): Promise<Transaction>;
    /**
     * Get the claimed supply
     *
     * @remarks Get the number of claimed NFTs in this Drop.
     *
     * * @example
     * ```javascript
     * const claimedNFTCount = await contract.totalClaimedSupply();
     * console.log(`NFTs claimed: ${claimedNFTCount}`);
     * ```
     * @returns the unclaimed supply
     * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1
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
     * @twfeature ERC721ClaimCustom | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1
     */
    totalUnclaimedSupply(): Promise<BigNumber>;
    /**
     * Configure claim conditions
     * @remarks Define who can claim NFTs in the collection, when and how many.
     * @example
     * ```javascript
     * const presaleStartTime = new Date();
     * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
     * const claimConditions = [
     *   {
     *     startTime: presaleStartTime, // start the presale now
     *     maxClaimableSupply: 2, // limit how many mints for this presale
     *     price: 0.01, // presale price
     *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
     *   },
     *   {
     *     startTime: publicSaleStartTime, // 24h after presale, start public sale
     *     price: 0.08, // public sale price
     *   }
     * ]);
     * await contract.erc721.claimConditions.set(claimConditions);
     * ```
     * @twfeature ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1
     */
    get claimConditions(): import("./drop-claim-conditions").DropClaimConditions<BaseClaimConditionERC721>;
    /**
     * Tiered Drop
     * @remarks Drop lazy minted NFTs using a tiered drop mechanism.
     * @twfeature ERC721TieredDrop
     */
    get tieredDrop(): Erc721TieredDrop;
    /**
     * Mint with signature
     * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
     * @example
     * ```javascript
     * // see how to craft a payload to sign in the `contract.erc721.signature.generate()` documentation
     * const signedPayload = await contract.erc721.signature.generate(payload);
     *
     * // now anyone can mint the NFT
     * const tx = await contract.erc721.signature.mint(signedPayload);
     * const receipt = tx.receipt; // the mint transaction receipt
     * const mintedId = tx.id; // the id of the NFT minted
     * ```
     * @twfeature ERC721SignatureMintV1 | ERC721SignatureMintV2
     */
    get signature(): Erc721WithQuantitySignatureMintable;
    /**
     * Mint delayed reveal NFTs
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
     * await contract.erc721.revealer.createDelayedRevealBatch(
     *   placeholderNFT,
     *   realNFTs,
     *   "my secret password",
     * );
     * // Whenever you're ready, reveal your NFTs at any time
     * const batchId = 0; // the batch to reveal
     * await contract.erc721.revealer.reveal(batchId, "my secret password");
     * ```
     * @twfeature ERC721Revealable
     */
    get revealer(): import("./delayed-reveal").DelayedReveal<import("../../types/eips").BaseDelayedRevealERC721>;
    /**
     * Set shared metadata for all NFTs
     * @remarks Set shared metadata for all NFTs in the collection. (Open Edition)
     * @example
     * ```javascript
     * // defiine the metadata
     * const metadata = {
     *  name: "Shared Metadata",
     *  description: "Every NFT in this collection will share this metadata."
     * };
     *
     *
     * const tx = contract.erc721.sharedMetadata.set(metadata);
     * ```
     * @twfeature ERC721SharedMetadata
     */
    get sharedMetadata(): Erc721SharedMetadata;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    /**
     * @internal
     */
    getTokenMetadata(tokenId: BigNumberish): Promise<NFTMetadata>;
    /**
     * Return the next available token ID to mint
     * @internal
     */
    nextTokenIdToMint(): Promise<BigNumber>;
    private detectErc721Enumerable;
    private detectErc721Mintable;
    private detectErc721Burnable;
    private detectErc721LazyMintable;
    private detectErc721TieredDrop;
    private detectErc721SignatureMintable;
    private detectErc721ClaimableWithConditions;
    private detectErc721Claimable;
    private detectErc721ClaimableZora;
    private detectErc721SharedMetadata;
    private detectErc721LoyaltyCard;
    private detectErc721UpdatableMetadata;
}
//# sourceMappingURL=erc-721.d.ts.map