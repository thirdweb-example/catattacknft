/// <reference types="bn.js" />
import type { IMintableERC1155, IMulticall } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { NFT } from "../../../core/schema/nft";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResultWithId } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import type { Erc1155 } from "./erc-1155";
import { Transaction } from "./transactions";
/**
 * Mint Many ERC1155 NFTs at once
 * @remarks NFT batch minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.mint.batch.to(walletAddress, [nftMetadataWithSupply1, nftMetadataWithSupply2, ...]);
 * ```
 * @public
 */
export declare class Erc1155BatchMintable implements DetectableFeature {
    featureName: "ERC1155BatchMintable";
    private contractWrapper;
    private erc1155;
    private storage;
    constructor(erc1155: Erc1155, contractWrapper: ContractWrapper<IMintableERC1155 & IMulticall>, storage: ThirdwebStorage);
    /**
     * Mint Many NFTs with limited supplies
     *
     * @remarks Mint many different NFTs with limited supplies to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const toAddress = "{{wallet_address}}"
     *
     * // Custom metadata and supplies of your NFTs
     * const metadataWithSupply = [{
     *   supply: 50, // The number of this NFT you want to mint
     *   metadata: {
     *     name: "Cool NFT #1",
     *     description: "This is a cool NFT",
     *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     *   },
     * }, {
     *   supply: 100,
     *   metadata: {
     *     name: "Cool NFT #2",
     *     description: "This is a cool NFT",
     *     image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     *   },
     * }];
     *
     * const tx = await contract.edition.mint.batch.to(toAddress, metadataWithSupply);
     * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
     * const firstTokenId = tx[0].id; // token id of the first minted NFT
     * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
     * ```
     */
    to: {
        (to: string, metadataWithSupply: {
            supply: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
            metadata: (string | import("zod").objectInputType<{
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
            }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">) & (string | import("zod").objectInputType<{
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
            }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip"> | undefined);
        }[]): Promise<TransactionResultWithId<NFT>[]>;
        prepare: (to: string, metadataWithSupply: {
            supply: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
            metadata: (string | import("zod").objectInputType<{
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
            }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip">) & (string | import("zod").objectInputType<{
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
            }, import("zod").ZodUnion<[import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>, import("zod").ZodType<import("bn.js"), import("zod").ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, import("zod").ZodUnknown]>, "strip"> | undefined);
        }[]) => Promise<Transaction<TransactionResultWithId<NFT>[]>>;
    };
}
//# sourceMappingURL=erc-1155-batch-mintable.d.ts.map