/// <reference types="bn.js" />
import { NFT } from "../../../core/schema/nft";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import { EditionMetadataOrUri } from "../../schema/tokens/edition";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResultWithId } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
import type { IMintableERC1155 } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, type BigNumberish } from "ethers";
import type { Erc1155 } from "./erc-1155";
import { Erc1155BatchMintable } from "./erc-1155-batch-mintable";
/**
 * Mint ERC1155 NFTs
 * @remarks NFT minting functionality that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.mint.to(walletAddress, nftMetadata);
 * ```
 * @public
 */
export declare class Erc1155Mintable implements DetectableFeature {
    featureName: "ERC1155Mintable";
    private contractWrapper;
    private erc1155;
    private storage;
    /**
     * Batch mint Tokens to many addresses
     */
    batch: Erc1155BatchMintable | undefined;
    constructor(erc1155: Erc1155, contractWrapper: ContractWrapper<IMintableERC1155>, storage: ThirdwebStorage);
    /**
     * Mint an NFT with a limited supply
     *
     * @remarks Mint an NFT with a limited supply to a specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const toAddress = "{{wallet_address}}"
     *
     * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
     * const metadata = {
     *   name: "Cool NFT",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * }
     *
     * const metadataWithSupply = {
     *   metadata,
     *   supply: 1000, // The number of this NFT you want to mint
     * }
     *
     * const tx = await contract.edition.mint.to(toAddress, metadataWithSupply);
     * const receipt = tx.receipt; // the transaction receipt
     * const tokenId = tx.id; // the id of the NFT minted
     * const nft = await tx.data(); // (optional) fetch details of minted NFT
     * ```
     *
     */
    to: {
        (to: string, metadataWithSupply: {
            supply: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
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
        }): Promise<TransactionResultWithId<NFT>>;
        prepare: (to: string, metadataWithSupply: {
            supply: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
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
        }) => Promise<Transaction<TransactionResultWithId<NFT>>>;
    };
    /**
     * @deprecated Use `contract.erc1155.mint.prepare(...args)` instead
     */
    getMintTransaction(to: AddressOrEns, metadataWithSupply: EditionMetadataOrUri): Promise<Transaction>;
    /**
     * Increase the supply of an existing NFT and mint it to a given wallet address
     *
     * @param to - the address to mint to
     * @param tokenId - the token id of the NFT to increase supply of
     * @param additionalSupply - the additional amount to mint
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to mint the NFT to
     * const toAddress = "{{wallet_address}}"
     * const tokenId = 0;
     * const additionalSupply = 1000;
     *
     * const tx = await contract.edition.mint.additionalSupplyTo(toAddress, tokenId, additionalSupply);
     * ```
     */
    additionalSupplyTo: {
        (to: string, tokenId: BigNumberish, additionalSupply: BigNumberish): Promise<TransactionResultWithId<NFT>>;
        prepare: (to: string, tokenId: BigNumberish, additionalSupply: BigNumberish) => Promise<Transaction<TransactionResultWithId<NFT>>>;
    };
    private detectErc1155BatchMintable;
}
//# sourceMappingURL=erc-1155-mintable.d.ts.map