/// <reference types="bn.js" />
import type { Multiwrap as MultiwrapContract } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { type BigNumberish, type CallOverrides } from "ethers";
import { NFT } from "../../../core/schema/nft";
import { ContractAppURI } from "../../core/classes/contract-appuri";
import { ContractEncoder } from "../../core/classes/contract-encoder";
import { ContractEvents } from "../../core/classes/contract-events";
import { ContractMetadata } from "../../core/classes/contract-metadata";
import { ContractOwner } from "../../core/classes/contract-owner";
import { ContractRoles } from "../../core/classes/contract-roles";
import { ContractRoyalty } from "../../core/classes/contract-royalty";
import { ContractWrapper } from "../../core/classes/contract-wrapper";
import { StandardErc721 } from "../../core/classes/erc-721-standard";
import { GasCostEstimator } from "../../core/classes/gas-cost-estimator";
import { Transaction } from "../../core/classes/transactions";
import { NetworkInput, TransactionResultWithId } from "../../core/types";
import { Abi, AbiInput } from "../../schema/contracts/custom";
import { MultiwrapContractSchema } from "../../schema/contracts/multiwrap";
import { TokensToWrap, WrappedTokens } from "../../types/multiwrap";
/**
 * Multiwrap lets you wrap any number of ERC20, ERC721 and ERC1155 tokens you own into a single wrapped token bundle.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "multiwrap");
 * ```
 *
 * @beta
 */
export declare class Multiwrap extends StandardErc721<MultiwrapContract> {
    static contractRoles: readonly ["admin", "transfer", "minter", "unwrap", "asset"];
    abi: Abi;
    encoder: ContractEncoder<MultiwrapContract>;
    estimator: GasCostEstimator<MultiwrapContract>;
    metadata: ContractMetadata<MultiwrapContract, typeof MultiwrapContractSchema>;
    app: ContractAppURI<MultiwrapContract>;
    events: ContractEvents<MultiwrapContract>;
    roles: ContractRoles<MultiwrapContract, (typeof Multiwrap.contractRoles)[number]>;
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
    royalties: ContractRoyalty<MultiwrapContract, typeof MultiwrapContractSchema>;
    owner: ContractOwner<MultiwrapContract>;
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
    } | undefined, abi: AbiInput, chainId: number, contractWrapper?: ContractWrapper<MultiwrapContract>);
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get the contents of a wrapped token bundle
     * @example
     * ```javascript
     * const contents = await contract.getWrappedContents(wrappedTokenId);
     * console.log(contents.erc20Tokens);
     * console.log(contents.erc721Tokens);
     * console.log(contents.erc1155Tokens);
     * ```
     * @param wrappedTokenId - the id of the wrapped token bundle
     */
    getWrappedContents(wrappedTokenId: BigNumberish): Promise<WrappedTokens>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Wrap any number of ERC20/ERC721/ERC1155 tokens into a single wrapped token
     * @example
     * ```javascript
     * const tx = await contract.wrap({
     *   erc20Tokens: [{
     *     contractAddress: "0x...",
     *     quantity: "0.8"
     *   }],
     *   erc721Tokens: [{
     *     contractAddress: "0x...",
     *     tokenId: "0"
     *   }],
     *   erc1155Tokens: [{
     *     contractAddress: "0x...",
     *     tokenId: "1",
     *     quantity: "2"
     *   }]
     * }, {
     *     name: "Wrapped bundle",
     *     description: "This is a wrapped bundle of tokens and NFTs",
     *     image: "ipfs://...",
     * });
     * const receipt = tx.receipt(); // the transaction receipt
     * const wrappedTokenId = tx.id; // the id of the wrapped token bundle
     * ```
     * @param contents - the contents to wrap
     * @param wrappedTokenMetadata - metadata to represent the wrapped token bundle
     * @param recipientAddress - Optional. The address to send the wrapped token bundle to
     */
    wrap: {
        (contents: TokensToWrap, wrappedTokenMetadata: string | import("zod").objectInputType<{
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
            properties: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>, "many">, import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>]>>>;
            attributes: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>, "many">, import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>]>>>;
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, recipientAddress?: string | undefined): Promise<TransactionResultWithId<NFT>>;
        prepare: (contents: TokensToWrap, wrappedTokenMetadata: string | import("zod").objectInputType<{
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
            properties: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>, "many">, import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>]>>>;
            attributes: import("zod").ZodNullable<import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodArray<import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>, "many">, import("zod").ZodObject<{}, "strip", import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, import("zod").objectOutputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, import("zod").objectInputType<{}, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">>]>>>;
        }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">, recipientAddress?: string | undefined) => Promise<Transaction<TransactionResultWithId<NFT>>>;
    };
    /**
     * Unwrap a wrapped token bundle, and retrieve its contents
     * @example
     * ```javascript
     * await contract.unwrap(wrappedTokenId);
     * ```
     * @param wrappedTokenId - the id of the wrapped token bundle
     * @param recipientAddress - Optional. The address to send the unwrapped tokens to
     */
    unwrap: {
        (wrappedTokenId: BigNumberish, recipientAddress?: string | undefined): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (wrappedTokenId: BigNumberish, recipientAddress?: string | undefined) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    private toTokenStructList;
    /**
     * @internal
     */
    prepare<TMethod extends keyof MultiwrapContract["functions"] = keyof MultiwrapContract["functions"]>(method: string & TMethod, args: any[] & Parameters<MultiwrapContract["functions"][TMethod]>, overrides?: CallOverrides): Promise<Transaction<Omit<{
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<unknown>;
    }, "data">>>;
    /**
     * @internal
     */
    call<TMethod extends keyof MultiwrapContract["functions"] = keyof MultiwrapContract["functions"]>(functionName: string & TMethod, args?: Parameters<MultiwrapContract["functions"][TMethod]>, overrides?: CallOverrides): Promise<ReturnType<MultiwrapContract["functions"][TMethod]>>;
}
//# sourceMappingURL=multiwrap.d.ts.map