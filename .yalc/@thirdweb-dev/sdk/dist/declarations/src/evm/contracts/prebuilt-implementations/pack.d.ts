/// <reference types="bn.js" />
import type { Pack as PackContract } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, type BigNumberish, type CallOverrides } from "ethers";
import { QueryAllParams } from "../../../core/schema/QueryParams";
import { NFT } from "../../../core/schema/nft";
import { ContractAppURI } from "../../core/classes/contract-appuri";
import { ContractEncoder } from "../../core/classes/contract-encoder";
import { ContractEvents } from "../../core/classes/contract-events";
import { ContractInterceptor } from "../../core/classes/contract-interceptor";
import { ContractMetadata } from "../../core/classes/contract-metadata";
import { ContractOwner } from "../../core/classes/contract-owner";
import { ContractRoles } from "../../core/classes/contract-roles";
import { ContractRoyalty } from "../../core/classes/contract-royalty";
import { ContractWrapper } from "../../core/classes/contract-wrapper";
import { StandardErc1155 } from "../../core/classes/erc-1155-standard";
import { GasCostEstimator } from "../../core/classes/gas-cost-estimator";
import { PackVRF } from "../../core/classes/pack-vrf";
import { Transaction } from "../../core/classes/transactions";
import { NetworkInput, TransactionResultWithId } from "../../core/types";
import { Abi, AbiInput } from "../../schema/contracts/custom";
import { PackContractSchema } from "../../schema/contracts/packs";
import { Address } from "../../schema/shared/Address";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import { PackRewardsOutput } from "../../schema/tokens/pack";
/**
 * Create lootboxes of NFTs with rarity based open mechanics.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "pack");
 * ```
 *
 * @public
 */
export declare class Pack extends StandardErc1155<PackContract> {
    static contractRoles: readonly ["admin", "minter", "asset", "transfer"];
    abi: Abi;
    metadata: ContractMetadata<PackContract, typeof PackContractSchema>;
    app: ContractAppURI<PackContract>;
    roles: ContractRoles<PackContract, (typeof Pack.contractRoles)[number]>;
    encoder: ContractEncoder<PackContract>;
    events: ContractEvents<PackContract>;
    estimator: GasCostEstimator<PackContract>;
    /**
     * Configure royalties
     * @remarks Set your own royalties for the entire contract or per pack
     * @example
     * ```javascript
     * // royalties on the whole contract
     * contract.royalties.setDefaultRoyaltyInfo({
     *   seller_fee_basis_points: 100, // 1%
     *   fee_recipient: "0x..."
     * });
     * // override royalty for a particular pack
     * contract.royalties.setTokenRoyaltyInfo(packId, {
     *   seller_fee_basis_points: 500, // 5%
     *   fee_recipient: "0x..."
     * });
     * ```
     */
    royalties: ContractRoyalty<PackContract, typeof PackContractSchema>;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<PackContract>;
    owner: ContractOwner<PackContract>;
    private _vrf?;
    /**
     * If enabled in the contract, use the Chainlink VRF functionality to open packs
     */
    get vrf(): PackVRF;
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
    } | undefined, abi: AbiInput, chainId: number, contractWrapper?: ContractWrapper<PackContract>);
    /**
     * @internal
     */
    onNetworkUpdated(network: NetworkInput): void;
    getAddress(): Address;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get a single Pack
     *
     * @remarks Get all the data associated with every pack in this contract.
     *
     * By default, returns the first 100 packs, use queryParams to fetch more.
     *
     * @example
     * ```javascript
     * const pack = await contract.get(0);
     * console.log(packs;
     * ```
     */
    get(tokenId: BigNumberish): Promise<NFT>;
    /**
     * Get All Packs
     *
     * @remarks Get all the data associated with every pack in this contract.
     *
     * By default, returns the first 100 packs, use queryParams to fetch more.
     *
     * @example
     * ```javascript
     * const packs = await contract.getAll();
     * console.log(packs;
     * ```
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The pack metadata for all packs queried.
     */
    getAll(queryParams?: QueryAllParams): Promise<NFT[]>;
    /**
     * Get Owned Packs
     *
     * @remarks Get all the data associated with the packs owned by a specific wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet to get the packs of
     * const address = "{{wallet_address}}";
     * const packss = await contract.getOwned(address);
     * ```
     *
     * @returns The pack metadata for all the owned packs in the contract.
     */
    getOwned(walletAddress?: AddressOrEns): Promise<NFT[]>;
    /**
     * Get the number of packs created
     * @returns the total number of packs minted in this contract
     * @public
     */
    getTotalCount(): Promise<BigNumber>;
    /**
     * Get whether users can transfer packs from this contract
     */
    isTransferRestricted(): Promise<boolean>;
    /**
     * Get Pack Contents
     * @remarks Get the rewards contained inside a pack.
     *
     * @param packId - The id of the pack to get the contents of.
     * @returns - The contents of the pack.
     *
     * @example
     * ```javascript
     * const packId = 0;
     * const contents = await contract.getPackContents(packId);
     * console.log(contents.erc20Rewards);
     * console.log(contents.erc721Rewards);
     * console.log(contents.erc1155Rewards);
     * ```
     */
    getPackContents(packId: BigNumberish): Promise<PackRewardsOutput>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create Pack
     * @remarks Create a new pack with the given metadata and rewards and mint it to the connected wallet.
     * @remarks See {@link Pack.createTo}
     *
     * @param metadataWithRewards - the metadata and rewards to include in the pack
     * @example
     * ```javascript
     * const pack = {
     *   // The metadata for the pack NFT itself
     *   packMetadata: {
     *     name: "My Pack",
     *     description: "This is a new pack",
     *     image: "ipfs://...",
     *   },
     *   // ERC20 rewards to be included in the pack
     *   erc20Rewards: [
     *     {
     *       contractAddress: "0x...",
     *       quantityPerReward: 5,
     *       quantity: 100,
     *       totalRewards: 20,
     *     }
     *   ],
     *   // ERC721 rewards to be included in the pack
     *   erc721Rewards: [
     *     {
     *       contractAddress: "0x...",
     *       tokenId: 0,
     *     }
     *   ],
     *   // ERC1155 rewards to be included in the pack
     *   erc1155Rewards: [
     *     {
     *       contractAddress: "0x...",
     *       tokenId: 0,
     *       quantityPerReward: 1,
     *       totalRewards: 100,
     *     }
     *   ],
     *   openStartTime: new Date(), // the date that packs can start to be opened, defaults to now
     *   rewardsPerPack: 1, // the number of rewards in each pack, defaults to 1
     * }
     *
     * const tx = await contract.create(pack);
     * ```
     */
    create: {
        (metadataWithRewards: {
            packMetadata: (string | import("zod").objectInputType<{
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
            }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">) & (string | import("zod").objectInputType<{
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
            }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip"> | undefined);
            erc20Rewards?: {
                contractAddress: string;
                quantityPerReward: string | number;
                totalRewards?: string | number | bigint | BigNumber | undefined;
            }[] | undefined;
            erc721Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
            }[] | undefined;
            erc1155Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
                quantityPerReward: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                totalRewards?: string | number | bigint | BigNumber | undefined;
            }[] | undefined;
            rewardsPerPack?: string | number | bigint | BigNumber | undefined;
            openStartTime?: number | Date | undefined;
        }): Promise<TransactionResultWithId<NFT>>;
        prepare: (metadataWithRewards: {
            packMetadata: (string | import("zod").objectInputType<{
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
            }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">) & (string | import("zod").objectInputType<{
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
            }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip"> | undefined);
            erc20Rewards?: {
                contractAddress: string;
                quantityPerReward: string | number;
                totalRewards?: string | number | bigint | BigNumber | undefined;
            }[] | undefined;
            erc721Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
            }[] | undefined;
            erc1155Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
                quantityPerReward: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                totalRewards?: string | number | bigint | BigNumber | undefined;
            }[] | undefined;
            rewardsPerPack?: string | number | bigint | BigNumber | undefined;
            openStartTime?: number | Date | undefined;
        }) => Promise<Transaction<TransactionResultWithId<NFT>>>;
    };
    /**
     * Add Pack Contents
     * @remarks Add contents to an existing pack.
     * @remarks See {@link Pack.addPackContents}
     *
     * @param packId - token Id of the pack to add contents to
     * @param packContents - the rewards to include in the pack
     * @example
     * ```javascript
     * const packContents = {
     *   // ERC20 rewards to be included in the pack
     *   erc20Rewards: [
     *     {
     *       contractAddress: "0x...",
     *       quantityPerReward: 5,
     *       quantity: 100,
     *       totalRewards: 20,
     *     }
     *   ],
     *   // ERC721 rewards to be included in the pack
     *   erc721Rewards: [
     *     {
     *       contractAddress: "0x...",
     *       tokenId: 0,
     *     }
     *   ],
     *   // ERC1155 rewards to be included in the pack
     *   erc1155Rewards: [
     *     {
     *       contractAddress: "0x...",
     *       tokenId: 0,
     *       quantityPerReward: 1,
     *       totalRewards: 100,
     *     }
     *   ],
     * }
     *
     * const tx = await contract.addPackContents(packId, packContents);
     * ```
     */
    addPackContents: {
        (packId: BigNumberish, packContents: {
            erc20Rewards?: {
                contractAddress: string;
                quantityPerReward: string | number;
            }[] | undefined;
            erc721Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
            }[] | undefined;
            erc1155Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
                quantityPerReward: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            }[] | undefined;
        }): Promise<{
            id: BigNumber;
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<NFT>;
        }>;
        prepare: (packId: BigNumberish, packContents: {
            erc20Rewards?: {
                contractAddress: string;
                quantityPerReward: string | number;
            }[] | undefined;
            erc721Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
            }[] | undefined;
            erc1155Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
                quantityPerReward: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            }[] | undefined;
        }) => Promise<Transaction<{
            id: BigNumber;
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<NFT>;
        }>>;
    };
    /**
     * Create Pack To Wallet
     * @remarks Create a new pack with the given metadata and rewards and mint it to the specified address.
     *
     * @param to - the address to mint the pack to
     * @param metadataWithRewards - the metadata and rewards to include in the pack
     *
     * @example
     * ```javascript
     * const pack = {
     *   // The metadata for the pack NFT itself
     *   packMetadata: {
     *     name: "My Pack",
     *     description: "This is a new pack",
     *     image: "ipfs://...",
     *   },
     *   // ERC20 rewards to be included in the pack
     *   erc20Rewards: [
     *     {
     *       contractAddress: "0x...",
     *       quantityPerReward: 5,
     *       quantity: 100,
     *       totalRewards: 20,
     *     }
     *   ],
     *   // ERC721 rewards to be included in the pack
     *   erc721Rewards: [
     *     {
     *       contractAddress: "0x...",
     *       tokenId: 0,
     *     }
     *   ],
     *   // ERC1155 rewards to be included in the pack
     *   erc1155Rewards: [
     *     {
     *       contractAddress: "0x...",
     *       tokenId: 0,
     *       quantityPerReward: 1,
     *       totalRewards: 100,
     *     }
     *   ],
     *   openStartTime: new Date(), // the date that packs can start to be opened, defaults to now
     *   rewardsPerPack: 1, // the number of rewards in each pack, defaults to 1
     * }
     *
     * const tx = await contract.createTo("0x...", pack);
     * ```
     */
    createTo: {
        (to: string, metadataWithRewards: {
            packMetadata: (string | import("zod").objectInputType<{
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
            }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">) & (string | import("zod").objectInputType<{
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
            }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip"> | undefined);
            erc20Rewards?: {
                contractAddress: string;
                quantityPerReward: string | number;
                totalRewards?: string | number | bigint | BigNumber | undefined;
            }[] | undefined;
            erc721Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
            }[] | undefined;
            erc1155Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
                quantityPerReward: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                totalRewards?: string | number | bigint | BigNumber | undefined;
            }[] | undefined;
            rewardsPerPack?: string | number | bigint | BigNumber | undefined;
            openStartTime?: number | Date | undefined;
        }): Promise<TransactionResultWithId<NFT>>;
        prepare: (to: string, metadataWithRewards: {
            packMetadata: (string | import("zod").objectInputType<{
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
            }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">) & (string | import("zod").objectInputType<{
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
            }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<BigNumber, import("zod").ZodTypeDef, BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip"> | undefined);
            erc20Rewards?: {
                contractAddress: string;
                quantityPerReward: string | number;
                totalRewards?: string | number | bigint | BigNumber | undefined;
            }[] | undefined;
            erc721Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
            }[] | undefined;
            erc1155Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
                quantityPerReward: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                totalRewards?: string | number | bigint | BigNumber | undefined;
            }[] | undefined;
            rewardsPerPack?: string | number | bigint | BigNumber | undefined;
            openStartTime?: number | Date | undefined;
        }) => Promise<Transaction<TransactionResultWithId<NFT>>>;
    };
    /**
     * Open Pack
     *
     * @remarks - Open a pack to reveal the contained rewards. This will burn the specified pack and
     * the contained assets will be transferred to the opening users wallet.
     *
     * @param tokenId - the token ID of the pack you want to open
     * @param amount - the amount of packs you want to open
     *
     * @example
     * ```javascript
     * const tokenId = 0
     * const amount = 1
     * const tx = await contract.open(tokenId, amount);
     * ```
     */
    open: {
        (tokenId: BigNumberish, amount?: BigNumberish | undefined, gasLimit?: any): Promise<Promise<{
            erc20Rewards?: {
                contractAddress: string;
                quantityPerReward: string | number;
            }[] | undefined;
            erc721Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
            }[] | undefined;
            erc1155Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
                quantityPerReward: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            }[] | undefined;
        }>>;
        prepare: (tokenId: BigNumberish, amount?: BigNumberish | undefined, gasLimit?: any) => Promise<Transaction<Promise<{
            erc20Rewards?: {
                contractAddress: string;
                quantityPerReward: string | number;
            }[] | undefined;
            erc721Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
            }[] | undefined;
            erc1155Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
                quantityPerReward: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            }[] | undefined;
        }>>>;
    };
    /** *****************************
     * PRIVATE FUNCTIONS
     *******************************/
    private toPackContentArgs;
    /**
     * @internal
     */
    prepare<TMethod extends keyof PackContract["functions"] = keyof PackContract["functions"]>(method: string & TMethod, args: any[] & Parameters<PackContract["functions"][TMethod]>, overrides?: CallOverrides): Promise<Transaction<Omit<{
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<unknown>;
    }, "data">>>;
    /**
     * @internal
     */
    call<TMethod extends keyof PackContract["functions"] = keyof PackContract["functions"]>(functionName: string & TMethod, args?: any[] & Parameters<PackContract["functions"][TMethod]>, overrides?: CallOverrides): Promise<ReturnType<PackContract["functions"][TMethod]>>;
    private detectVrf;
}
//# sourceMappingURL=pack.d.ts.map