/// <reference types="bn.js" />
import { z } from "zod";
/**
 * @internal
 */
export declare const PackRewardsSchema: z.ZodObject<{
    erc20Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<{
        contractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        quantityPerReward: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    }, "strip", z.ZodTypeAny, {
        contractAddress: string;
        quantityPerReward: string;
    }, {
        contractAddress: string;
        quantityPerReward: string | number;
    }>, "many">>;
    erc721Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<{
        contractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
    }, {
        tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        contractAddress: string;
    }>, "many">>;
    erc1155Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<{
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
        contractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        quantityPerReward: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
    }, {
        tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        contractAddress: string;
        quantityPerReward: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    erc20Rewards: {
        contractAddress: string;
        quantityPerReward: string;
    }[];
    erc721Rewards: {
        tokenId: string;
        contractAddress: string;
    }[];
    erc1155Rewards: {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
    }[];
}, {
    erc20Rewards?: {
        contractAddress: string;
        quantityPerReward: string | number;
    }[] | undefined;
    erc721Rewards?: {
        tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        contractAddress: string;
    }[] | undefined;
    erc1155Rewards?: {
        tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        contractAddress: string;
        quantityPerReward: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    }[] | undefined;
}>;
/**
 * @internal
 */
export declare const PackRewardsOutputSchema: z.ZodObject<{
    erc20Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<{
        contractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        quantityPerReward: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
        totalRewards: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }, "strip", z.ZodTypeAny, {
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }, {
        contractAddress: string;
        quantityPerReward: string | number;
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
    }>, "many">>;
    erc721Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<{
        contractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
    }, {
        tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        contractAddress: string;
    }>, "many">>;
    erc1155Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<{
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
        contractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        quantityPerReward: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
        totalRewards: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }, {
        tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        contractAddress: string;
        quantityPerReward: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    erc20Rewards: {
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }[];
    erc721Rewards: {
        tokenId: string;
        contractAddress: string;
    }[];
    erc1155Rewards: {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }[];
}, {
    erc20Rewards?: {
        contractAddress: string;
        quantityPerReward: string | number;
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
    }[] | undefined;
    erc721Rewards?: {
        tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        contractAddress: string;
    }[] | undefined;
    erc1155Rewards?: {
        tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        contractAddress: string;
        quantityPerReward: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
    }[] | undefined;
}>;
/**
 * @internal
 */
export declare const PackMetadataInputSchema: z.ZodObject<{
    erc20Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<{
        contractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        quantityPerReward: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
        totalRewards: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }, "strip", z.ZodTypeAny, {
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }, {
        contractAddress: string;
        quantityPerReward: string | number;
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
    }>, "many">>;
    erc721Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<{
        contractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    }, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
    }, {
        tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        contractAddress: string;
    }>, "many">>;
    erc1155Rewards: z.ZodDefault<z.ZodArray<z.ZodObject<{
        tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
        contractAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        quantityPerReward: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
        totalRewards: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    }, "strip", z.ZodTypeAny, {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }, {
        tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        contractAddress: string;
        quantityPerReward: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
    }>, "many">>;
    packMetadata: z.ZodUnion<[z.ZodObject<{
        name: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
        description: z.ZodNullable<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        background_color: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>>;
        properties: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>]>>>;
        attributes: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>]>>>;
    }, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{
        name: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
        description: z.ZodNullable<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        background_color: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>>;
        properties: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>]>>>;
        attributes: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>]>>>;
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{
        name: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
        description: z.ZodNullable<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        background_color: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>>;
        properties: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>]>>>;
        attributes: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>]>>>;
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, z.ZodString]>;
    rewardsPerPack: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
    openStartTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
}, "strip", z.ZodTypeAny, {
    erc20Rewards: {
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }[];
    erc721Rewards: {
        tokenId: string;
        contractAddress: string;
    }[];
    erc1155Rewards: {
        tokenId: string;
        contractAddress: string;
        quantityPerReward: string;
        totalRewards: string;
    }[];
    packMetadata: (string | z.objectOutputType<{
        name: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
        description: z.ZodNullable<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        background_color: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>>;
        properties: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>]>>>;
        attributes: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>]>>>;
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">) & (string | z.objectOutputType<{
        name: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
        description: z.ZodNullable<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        background_color: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>>;
        properties: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>]>>>;
        attributes: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>]>>>;
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip"> | undefined);
    rewardsPerPack: string;
    openStartTime: import("ethers").BigNumber;
}, {
    packMetadata: (string | z.objectInputType<{
        name: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
        description: z.ZodNullable<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        background_color: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>>;
        properties: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>]>>>;
        attributes: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>]>>>;
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">) & (string | z.objectInputType<{
        name: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber]>>>;
        description: z.ZodNullable<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
        image: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        animation_url: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        external_url: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>>;
        background_color: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>>>;
        properties: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>]>>>;
        attributes: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, "many">, z.ZodObject<{}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, z.objectOutputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">, z.objectInputType<{}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>]>>>;
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip"> | undefined);
    erc20Rewards?: {
        contractAddress: string;
        quantityPerReward: string | number;
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
    }[] | undefined;
    erc721Rewards?: {
        tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        contractAddress: string;
    }[] | undefined;
    erc1155Rewards?: {
        tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        contractAddress: string;
        quantityPerReward: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
        totalRewards?: string | number | bigint | import("ethers").BigNumber | undefined;
    }[] | undefined;
    rewardsPerPack?: string | number | bigint | import("ethers").BigNumber | undefined;
    openStartTime?: number | Date | undefined;
}>;
/**
 * @public
 */
export type PackMetadataInput = z.input<typeof PackMetadataInputSchema>;
/**
 * @public
 */
export type PackMetadataOutput = z.output<typeof PackMetadataInputSchema>;
/**
 * @public
 */
export type PackRewards = z.input<typeof PackRewardsSchema>;
/**
 * @public
 */
export type PackRewardsOutput = z.output<typeof PackRewardsOutputSchema>;
//# sourceMappingURL=pack.d.ts.map