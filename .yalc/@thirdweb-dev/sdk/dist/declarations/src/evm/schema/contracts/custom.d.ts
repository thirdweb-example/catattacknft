import { BigNumberish } from "ethers";
import { z } from "zod";
/**
 * @internal
 */
export declare const BYOCContractMetadataSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, string, bigint | import("ethers").BigNumber>, z.ZodUnknown]>, z.objectOutputType<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, string, bigint | import("ethers").BigNumber>, z.ZodUnknown]>, "strip">, z.objectInputType<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, string, bigint | import("ethers").BigNumber>, z.ZodUnknown]>, "strip">>;
/**
 * @internal
 */
export type CustomContractMetadata = z.input<typeof BYOCContractMetadataSchema>;
/**
 * @internal
 */
export declare const CustomContractInput: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
}, "strip", z.ZodAny, z.objectOutputType<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
}, z.ZodAny, "strip">, z.objectInputType<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
}, z.ZodAny, "strip">>;
/**
 * @internal
 */
export declare const CustomContractOutput: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
}, "strip", z.ZodAny, z.objectOutputType<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
}, z.ZodAny, "strip">, z.objectInputType<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
}, z.ZodAny, "strip">>;
/**
 * @internal
 */
export declare const CustomContractDeploy: z.ZodObject<{
    symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
    merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
    platform_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
    platform_fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
    primary_sale_recipient: z.ZodOptional<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    trusted_forwarders: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    app_uri?: string | undefined;
    social_urls?: Record<string, string> | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    merkle?: Record<string, string> | undefined;
    platform_fee_basis_points?: number | undefined;
    platform_fee_recipient?: string | undefined;
    primary_sale_recipient?: string | undefined;
    trusted_forwarders?: string[] | undefined;
}, {
    name: string;
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    app_uri?: string | undefined;
    social_urls?: Record<string, string> | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    merkle?: Record<string, string> | undefined;
    platform_fee_basis_points?: number | undefined;
    platform_fee_recipient?: string | undefined;
    primary_sale_recipient?: string | undefined;
    trusted_forwarders?: string[] | undefined;
}>;
/**
 * @internal
 */
export declare const CustomContractSchema: {
    deploy: z.ZodObject<{
        symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
        app_uri: z.ZodOptional<z.ZodString>;
        social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        platform_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        platform_fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
        primary_sale_recipient: z.ZodOptional<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
        trusted_forwarders: z.ZodOptional<z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        symbol?: string | undefined;
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        app_uri?: string | undefined;
        social_urls?: Record<string, string> | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        merkle?: Record<string, string> | undefined;
        platform_fee_basis_points?: number | undefined;
        platform_fee_recipient?: string | undefined;
        primary_sale_recipient?: string | undefined;
        trusted_forwarders?: string[] | undefined;
    }, {
        name: string;
        symbol?: string | undefined;
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        app_uri?: string | undefined;
        social_urls?: Record<string, string> | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        merkle?: Record<string, string> | undefined;
        platform_fee_basis_points?: number | undefined;
        platform_fee_recipient?: string | undefined;
        primary_sale_recipient?: string | undefined;
        trusted_forwarders?: string[] | undefined;
    }>;
    output: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        external_link: z.ZodOptional<z.ZodString>;
        app_uri: z.ZodOptional<z.ZodString>;
        social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        external_link: z.ZodOptional<z.ZodString>;
        app_uri: z.ZodOptional<z.ZodString>;
        social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        external_link: z.ZodOptional<z.ZodString>;
        app_uri: z.ZodOptional<z.ZodString>;
        social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    }, z.ZodAny, "strip">>;
    input: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
        app_uri: z.ZodOptional<z.ZodString>;
        social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
        app_uri: z.ZodOptional<z.ZodString>;
        social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
            data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, z.ZodString]>>;
        external_link: z.ZodOptional<z.ZodString>;
        app_uri: z.ZodOptional<z.ZodString>;
        social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        seller_fee_basis_points: z.ZodOptional<z.ZodDefault<z.ZodNumber>>;
        fee_recipient: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
        merkle: z.ZodOptional<z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>>;
        symbol: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    }, z.ZodAny, "strip">>;
};
/**
 * @internal
 */
export declare const AbiTypeSchema: z.ZodObject<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    stateMutability: z.ZodOptional<z.ZodString>;
    components: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, z.ZodAny, "strip">>, "many">>;
}, "strip", z.ZodAny, z.objectOutputType<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    stateMutability: z.ZodOptional<z.ZodString>;
    components: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, z.ZodAny, "strip">>, "many">>;
}, z.ZodAny, "strip">, z.objectInputType<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    stateMutability: z.ZodOptional<z.ZodString>;
    components: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
    }, z.ZodAny, "strip">>, "many">>;
}, z.ZodAny, "strip">>;
/**
 * @internal
 */
export declare const AbiObjectSchema: z.ZodObject<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
}, "strip", z.ZodAny, z.objectOutputType<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
}, z.ZodAny, "strip">, z.objectInputType<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
}, z.ZodAny, "strip">>;
/**
 * @internal
 */
export declare const AbiSchema: z.ZodArray<z.ZodObject<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
}, "strip", z.ZodAny, z.objectOutputType<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
}, z.ZodAny, "strip">, z.objectInputType<{
    type: z.ZodString;
    name: z.ZodDefault<z.ZodString>;
    inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        stateMutability: z.ZodOptional<z.ZodString>;
        components: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
}, z.ZodAny, "strip">>, "many">;
export type Abi = z.output<typeof AbiSchema>;
/**
 * @internal
 */
export type AbiInput = z.input<typeof AbiSchema>;
/**
 * @internal
 */
export declare const PreDeployMetadata: z.ZodObject<{
    name: z.ZodString;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodAny, z.objectOutputType<{
    name: z.ZodString;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
}, z.ZodAny, "strip">, z.objectInputType<{
    name: z.ZodString;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
}, z.ZodAny, "strip">>;
/**
 * @internal
 */
export declare const ChainIdToAddressSchema: z.ZodRecord<z.ZodString, z.ZodString>;
/**
 * @internal
 */
export declare const CustomFactoryInput: z.ZodObject<{
    factoryFunction: z.ZodString;
    params: z.ZodDefault<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        name: string;
    }, {
        type: string;
        name: string;
    }>, "many">>;
    customFactoryAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
}, "strip", z.ZodTypeAny, {
    params: {
        type: string;
        name: string;
    }[];
    factoryFunction: string;
    customFactoryAddresses: Record<string, string>;
}, {
    factoryFunction: string;
    customFactoryAddresses: Record<string, string>;
    params?: {
        type: string;
        name: string;
    }[] | undefined;
}>;
/**
 * @internal
 */
export declare const FactoryDeploymentSchema: z.ZodObject<{
    implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
    implementationInitializerFunction: z.ZodDefault<z.ZodString>;
    customFactoryInput: z.ZodOptional<z.ZodObject<{
        factoryFunction: z.ZodString;
        params: z.ZodDefault<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            name: string;
        }, {
            type: string;
            name: string;
        }>, "many">>;
        customFactoryAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        params: {
            type: string;
            name: string;
        }[];
        factoryFunction: string;
        customFactoryAddresses: Record<string, string>;
    }, {
        factoryFunction: string;
        customFactoryAddresses: Record<string, string>;
        params?: {
            type: string;
            name: string;
        }[] | undefined;
    }>>;
    factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    implementationAddresses: Record<string, string>;
    implementationInitializerFunction: string;
    customFactoryInput?: {
        params: {
            type: string;
            name: string;
        }[];
        factoryFunction: string;
        customFactoryAddresses: Record<string, string>;
    } | undefined;
    factoryAddresses?: Record<string, string> | undefined;
}, {
    implementationAddresses: Record<string, string>;
    implementationInitializerFunction?: string | undefined;
    customFactoryInput?: {
        factoryFunction: string;
        customFactoryAddresses: Record<string, string>;
        params?: {
            type: string;
            name: string;
        }[] | undefined;
    } | undefined;
    factoryAddresses?: Record<string, string> | undefined;
}>;
/**
 * @internal
 */
export declare const DeployTypeInput: z.ZodUnion<[z.ZodLiteral<"standard">, z.ZodLiteral<"autoFactory">, z.ZodLiteral<"customFactory">]>;
/**
 * @internal
 */
export declare const RouterTypeInput: z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"plugin">, z.ZodLiteral<"dynamic">]>;
/**
 * @internal
 */
export declare const DeploymentNetworkInput: z.ZodObject<{
    allNetworks: z.ZodOptional<z.ZodBoolean>;
    networksEnabled: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
}, "strip", z.ZodTypeAny, {
    networksEnabled: number[];
    allNetworks?: boolean | undefined;
}, {
    allNetworks?: boolean | undefined;
    networksEnabled?: number[] | undefined;
}>;
/**
 * @internal
 */
export declare const ExtraPublishMetadataSchemaInput: z.ZodObject<{
    version: z.ZodEffects<z.ZodString, string, string>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        customFactoryInput: z.ZodOptional<z.ZodObject<{
            factoryFunction: z.ZodString;
            params: z.ZodDefault<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
            }, {
                type: string;
                name: string;
            }>, "many">>;
            customFactoryAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        }, {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        }>>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
        customFactoryInput?: {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction?: string | undefined;
        customFactoryInput?: {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }>>;
    deployType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"standard">, z.ZodLiteral<"autoFactory">, z.ZodLiteral<"customFactory">]>>;
    routerType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"plugin">, z.ZodLiteral<"dynamic">]>>;
    defaultExtensions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        extensionName: z.ZodString;
        extensionVersion: z.ZodDefault<z.ZodString>;
        publisherAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    }, "strip", z.ZodTypeAny, {
        extensionName: string;
        extensionVersion: string;
        publisherAddress: string;
    }, {
        extensionName: string;
        publisherAddress: string;
        extensionVersion?: string | undefined;
    }>, "many">>;
    networksForDeployment: z.ZodOptional<z.ZodObject<{
        allNetworks: z.ZodOptional<z.ZodBoolean>;
        networksEnabled: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        networksEnabled: number[];
        allNetworks?: boolean | undefined;
    }, {
        allNetworks?: boolean | undefined;
        networksEnabled?: number[] | undefined;
    }>>;
    constructorParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">>>>;
    compositeAbi: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
}, "strip", z.ZodAny, z.objectOutputType<{
    version: z.ZodEffects<z.ZodString, string, string>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        customFactoryInput: z.ZodOptional<z.ZodObject<{
            factoryFunction: z.ZodString;
            params: z.ZodDefault<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
            }, {
                type: string;
                name: string;
            }>, "many">>;
            customFactoryAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        }, {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        }>>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
        customFactoryInput?: {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction?: string | undefined;
        customFactoryInput?: {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }>>;
    deployType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"standard">, z.ZodLiteral<"autoFactory">, z.ZodLiteral<"customFactory">]>>;
    routerType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"plugin">, z.ZodLiteral<"dynamic">]>>;
    defaultExtensions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        extensionName: z.ZodString;
        extensionVersion: z.ZodDefault<z.ZodString>;
        publisherAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    }, "strip", z.ZodTypeAny, {
        extensionName: string;
        extensionVersion: string;
        publisherAddress: string;
    }, {
        extensionName: string;
        publisherAddress: string;
        extensionVersion?: string | undefined;
    }>, "many">>;
    networksForDeployment: z.ZodOptional<z.ZodObject<{
        allNetworks: z.ZodOptional<z.ZodBoolean>;
        networksEnabled: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        networksEnabled: number[];
        allNetworks?: boolean | undefined;
    }, {
        allNetworks?: boolean | undefined;
        networksEnabled?: number[] | undefined;
    }>>;
    constructorParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">>>>;
    compositeAbi: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
}, z.ZodAny, "strip">, z.objectInputType<{
    version: z.ZodEffects<z.ZodString, string, string>;
    displayName: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        customFactoryInput: z.ZodOptional<z.ZodObject<{
            factoryFunction: z.ZodString;
            params: z.ZodDefault<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
            }, {
                type: string;
                name: string;
            }>, "many">>;
            customFactoryAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        }, {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        }>>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
        customFactoryInput?: {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction?: string | undefined;
        customFactoryInput?: {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }>>;
    deployType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"standard">, z.ZodLiteral<"autoFactory">, z.ZodLiteral<"customFactory">]>>;
    routerType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"plugin">, z.ZodLiteral<"dynamic">]>>;
    defaultExtensions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        extensionName: z.ZodString;
        extensionVersion: z.ZodDefault<z.ZodString>;
        publisherAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    }, "strip", z.ZodTypeAny, {
        extensionName: string;
        extensionVersion: string;
        publisherAddress: string;
    }, {
        extensionName: string;
        publisherAddress: string;
        extensionVersion?: string | undefined;
    }>, "many">>;
    networksForDeployment: z.ZodOptional<z.ZodObject<{
        allNetworks: z.ZodOptional<z.ZodBoolean>;
        networksEnabled: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        networksEnabled: number[];
        allNetworks?: boolean | undefined;
    }, {
        allNetworks?: boolean | undefined;
        networksEnabled?: number[] | undefined;
    }>>;
    constructorParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">>>>;
    compositeAbi: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
}, z.ZodAny, "strip">>;
/**
 * @internal
 */
export declare const ExtraPublishMetadataSchemaOutput: z.ZodObject<{
    description: z.ZodOptional<z.ZodString>;
    version: z.ZodEffects<z.ZodString, string, string>;
    displayName: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        customFactoryInput: z.ZodOptional<z.ZodObject<{
            factoryFunction: z.ZodString;
            params: z.ZodDefault<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
            }, {
                type: string;
                name: string;
            }>, "many">>;
            customFactoryAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        }, {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        }>>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
        customFactoryInput?: {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction?: string | undefined;
        customFactoryInput?: {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }>>;
    deployType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"standard">, z.ZodLiteral<"autoFactory">, z.ZodLiteral<"customFactory">]>>;
    routerType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"plugin">, z.ZodLiteral<"dynamic">]>>;
    defaultExtensions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        extensionName: z.ZodString;
        extensionVersion: z.ZodDefault<z.ZodString>;
        publisherAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    }, "strip", z.ZodTypeAny, {
        extensionName: string;
        extensionVersion: string;
        publisherAddress: string;
    }, {
        extensionName: string;
        publisherAddress: string;
        extensionVersion?: string | undefined;
    }>, "many">>;
    networksForDeployment: z.ZodOptional<z.ZodObject<{
        allNetworks: z.ZodOptional<z.ZodBoolean>;
        networksEnabled: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        networksEnabled: number[];
        allNetworks?: boolean | undefined;
    }, {
        allNetworks?: boolean | undefined;
        networksEnabled?: number[] | undefined;
    }>>;
    constructorParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">>>>;
    compositeAbi: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodAny, z.objectOutputType<{
    description: z.ZodOptional<z.ZodString>;
    version: z.ZodEffects<z.ZodString, string, string>;
    displayName: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        customFactoryInput: z.ZodOptional<z.ZodObject<{
            factoryFunction: z.ZodString;
            params: z.ZodDefault<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
            }, {
                type: string;
                name: string;
            }>, "many">>;
            customFactoryAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        }, {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        }>>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
        customFactoryInput?: {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction?: string | undefined;
        customFactoryInput?: {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }>>;
    deployType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"standard">, z.ZodLiteral<"autoFactory">, z.ZodLiteral<"customFactory">]>>;
    routerType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"plugin">, z.ZodLiteral<"dynamic">]>>;
    defaultExtensions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        extensionName: z.ZodString;
        extensionVersion: z.ZodDefault<z.ZodString>;
        publisherAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    }, "strip", z.ZodTypeAny, {
        extensionName: string;
        extensionVersion: string;
        publisherAddress: string;
    }, {
        extensionName: string;
        publisherAddress: string;
        extensionVersion?: string | undefined;
    }>, "many">>;
    networksForDeployment: z.ZodOptional<z.ZodObject<{
        allNetworks: z.ZodOptional<z.ZodBoolean>;
        networksEnabled: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        networksEnabled: number[];
        allNetworks?: boolean | undefined;
    }, {
        allNetworks?: boolean | undefined;
        networksEnabled?: number[] | undefined;
    }>>;
    constructorParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">>>>;
    compositeAbi: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.ZodAny, "strip">, z.objectInputType<{
    description: z.ZodOptional<z.ZodString>;
    version: z.ZodEffects<z.ZodString, string, string>;
    displayName: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        customFactoryInput: z.ZodOptional<z.ZodObject<{
            factoryFunction: z.ZodString;
            params: z.ZodDefault<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
            }, {
                type: string;
                name: string;
            }>, "many">>;
            customFactoryAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        }, {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        }>>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
        customFactoryInput?: {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction?: string | undefined;
        customFactoryInput?: {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }>>;
    deployType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"standard">, z.ZodLiteral<"autoFactory">, z.ZodLiteral<"customFactory">]>>;
    routerType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"plugin">, z.ZodLiteral<"dynamic">]>>;
    defaultExtensions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        extensionName: z.ZodString;
        extensionVersion: z.ZodDefault<z.ZodString>;
        publisherAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    }, "strip", z.ZodTypeAny, {
        extensionName: string;
        extensionVersion: string;
        publisherAddress: string;
    }, {
        extensionName: string;
        publisherAddress: string;
        extensionVersion?: string | undefined;
    }>, "many">>;
    networksForDeployment: z.ZodOptional<z.ZodObject<{
        allNetworks: z.ZodOptional<z.ZodBoolean>;
        networksEnabled: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        networksEnabled: number[];
        allNetworks?: boolean | undefined;
    }, {
        allNetworks?: boolean | undefined;
        networksEnabled?: number[] | undefined;
    }>>;
    constructorParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">>>>;
    compositeAbi: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.ZodAny, "strip">>;
export type ExtraPublishMetadata = z.input<typeof ExtraPublishMetadataSchemaInput>;
/**
 * @internal
 */
export declare const FullPublishMetadataSchemaInput: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    version: z.ZodEffects<z.ZodString, string, string>;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
    displayName: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        customFactoryInput: z.ZodOptional<z.ZodObject<{
            factoryFunction: z.ZodString;
            params: z.ZodDefault<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
            }, {
                type: string;
                name: string;
            }>, "many">>;
            customFactoryAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        }, {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        }>>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
        customFactoryInput?: {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction?: string | undefined;
        customFactoryInput?: {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }>>;
    deployType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"standard">, z.ZodLiteral<"autoFactory">, z.ZodLiteral<"customFactory">]>>;
    routerType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"plugin">, z.ZodLiteral<"dynamic">]>>;
    defaultExtensions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        extensionName: z.ZodString;
        extensionVersion: z.ZodDefault<z.ZodString>;
        publisherAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    }, "strip", z.ZodTypeAny, {
        extensionName: string;
        extensionVersion: string;
        publisherAddress: string;
    }, {
        extensionName: string;
        publisherAddress: string;
        extensionVersion?: string | undefined;
    }>, "many">>;
    networksForDeployment: z.ZodOptional<z.ZodObject<{
        allNetworks: z.ZodOptional<z.ZodBoolean>;
        networksEnabled: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        networksEnabled: number[];
        allNetworks?: boolean | undefined;
    }, {
        allNetworks?: boolean | undefined;
        networksEnabled?: number[] | undefined;
    }>>;
    constructorParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">>>>;
    compositeAbi: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    publisher: z.ZodOptional<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
}, "strip", z.ZodAny, z.objectOutputType<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    version: z.ZodEffects<z.ZodString, string, string>;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
    displayName: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        customFactoryInput: z.ZodOptional<z.ZodObject<{
            factoryFunction: z.ZodString;
            params: z.ZodDefault<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
            }, {
                type: string;
                name: string;
            }>, "many">>;
            customFactoryAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        }, {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        }>>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
        customFactoryInput?: {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction?: string | undefined;
        customFactoryInput?: {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }>>;
    deployType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"standard">, z.ZodLiteral<"autoFactory">, z.ZodLiteral<"customFactory">]>>;
    routerType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"plugin">, z.ZodLiteral<"dynamic">]>>;
    defaultExtensions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        extensionName: z.ZodString;
        extensionVersion: z.ZodDefault<z.ZodString>;
        publisherAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    }, "strip", z.ZodTypeAny, {
        extensionName: string;
        extensionVersion: string;
        publisherAddress: string;
    }, {
        extensionName: string;
        publisherAddress: string;
        extensionVersion?: string | undefined;
    }>, "many">>;
    networksForDeployment: z.ZodOptional<z.ZodObject<{
        allNetworks: z.ZodOptional<z.ZodBoolean>;
        networksEnabled: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        networksEnabled: number[];
        allNetworks?: boolean | undefined;
    }, {
        allNetworks?: boolean | undefined;
        networksEnabled?: number[] | undefined;
    }>>;
    constructorParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">>>>;
    compositeAbi: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    publisher: z.ZodOptional<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
}, z.ZodAny, "strip">, z.objectInputType<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    version: z.ZodEffects<z.ZodString, string, string>;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
    displayName: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        customFactoryInput: z.ZodOptional<z.ZodObject<{
            factoryFunction: z.ZodString;
            params: z.ZodDefault<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
            }, {
                type: string;
                name: string;
            }>, "many">>;
            customFactoryAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        }, {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        }>>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
        customFactoryInput?: {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction?: string | undefined;
        customFactoryInput?: {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }>>;
    deployType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"standard">, z.ZodLiteral<"autoFactory">, z.ZodLiteral<"customFactory">]>>;
    routerType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"plugin">, z.ZodLiteral<"dynamic">]>>;
    defaultExtensions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        extensionName: z.ZodString;
        extensionVersion: z.ZodDefault<z.ZodString>;
        publisherAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    }, "strip", z.ZodTypeAny, {
        extensionName: string;
        extensionVersion: string;
        publisherAddress: string;
    }, {
        extensionName: string;
        publisherAddress: string;
        extensionVersion?: string | undefined;
    }>, "many">>;
    networksForDeployment: z.ZodOptional<z.ZodObject<{
        allNetworks: z.ZodOptional<z.ZodBoolean>;
        networksEnabled: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        networksEnabled: number[];
        allNetworks?: boolean | undefined;
    }, {
        allNetworks?: boolean | undefined;
        networksEnabled?: number[] | undefined;
    }>>;
    constructorParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">>>>;
    compositeAbi: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    publisher: z.ZodOptional<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
}, z.ZodAny, "strip">>;
/**
 * @internal
 */
export declare const FullPublishMetadataSchemaOutput: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    version: z.ZodEffects<z.ZodString, string, string>;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
    displayName: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        customFactoryInput: z.ZodOptional<z.ZodObject<{
            factoryFunction: z.ZodString;
            params: z.ZodDefault<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
            }, {
                type: string;
                name: string;
            }>, "many">>;
            customFactoryAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        }, {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        }>>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
        customFactoryInput?: {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction?: string | undefined;
        customFactoryInput?: {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }>>;
    deployType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"standard">, z.ZodLiteral<"autoFactory">, z.ZodLiteral<"customFactory">]>>;
    routerType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"plugin">, z.ZodLiteral<"dynamic">]>>;
    defaultExtensions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        extensionName: z.ZodString;
        extensionVersion: z.ZodDefault<z.ZodString>;
        publisherAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    }, "strip", z.ZodTypeAny, {
        extensionName: string;
        extensionVersion: string;
        publisherAddress: string;
    }, {
        extensionName: string;
        publisherAddress: string;
        extensionVersion?: string | undefined;
    }>, "many">>;
    networksForDeployment: z.ZodOptional<z.ZodObject<{
        allNetworks: z.ZodOptional<z.ZodBoolean>;
        networksEnabled: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        networksEnabled: number[];
        allNetworks?: boolean | undefined;
    }, {
        allNetworks?: boolean | undefined;
        networksEnabled?: number[] | undefined;
    }>>;
    constructorParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">>>>;
    compositeAbi: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    publisher: z.ZodOptional<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
}, "strip", z.ZodAny, z.objectOutputType<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    version: z.ZodEffects<z.ZodString, string, string>;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
    displayName: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        customFactoryInput: z.ZodOptional<z.ZodObject<{
            factoryFunction: z.ZodString;
            params: z.ZodDefault<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
            }, {
                type: string;
                name: string;
            }>, "many">>;
            customFactoryAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        }, {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        }>>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
        customFactoryInput?: {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction?: string | undefined;
        customFactoryInput?: {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }>>;
    deployType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"standard">, z.ZodLiteral<"autoFactory">, z.ZodLiteral<"customFactory">]>>;
    routerType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"plugin">, z.ZodLiteral<"dynamic">]>>;
    defaultExtensions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        extensionName: z.ZodString;
        extensionVersion: z.ZodDefault<z.ZodString>;
        publisherAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    }, "strip", z.ZodTypeAny, {
        extensionName: string;
        extensionVersion: string;
        publisherAddress: string;
    }, {
        extensionName: string;
        publisherAddress: string;
        extensionVersion?: string | undefined;
    }>, "many">>;
    networksForDeployment: z.ZodOptional<z.ZodObject<{
        allNetworks: z.ZodOptional<z.ZodBoolean>;
        networksEnabled: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        networksEnabled: number[];
        allNetworks?: boolean | undefined;
    }, {
        allNetworks?: boolean | undefined;
        networksEnabled?: number[] | undefined;
    }>>;
    constructorParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">>>>;
    compositeAbi: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    publisher: z.ZodOptional<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
}, z.ZodAny, "strip">, z.objectInputType<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    version: z.ZodEffects<z.ZodString, string, string>;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
    displayName: z.ZodOptional<z.ZodString>;
    readme: z.ZodOptional<z.ZodString>;
    license: z.ZodOptional<z.ZodString>;
    changelog: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    audit: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    logo: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    isDeployableViaFactory: z.ZodOptional<z.ZodBoolean>;
    isDeployableViaProxy: z.ZodOptional<z.ZodBoolean>;
    factoryDeploymentData: z.ZodOptional<z.ZodObject<{
        implementationAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        implementationInitializerFunction: z.ZodDefault<z.ZodString>;
        customFactoryInput: z.ZodOptional<z.ZodObject<{
            factoryFunction: z.ZodString;
            params: z.ZodDefault<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                name: string;
            }, {
                type: string;
                name: string;
            }>, "many">>;
            customFactoryAddresses: z.ZodRecord<z.ZodString, z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        }, {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        }>>;
        factoryAddresses: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction: string;
        customFactoryInput?: {
            params: {
                type: string;
                name: string;
            }[];
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }, {
        implementationAddresses: Record<string, string>;
        implementationInitializerFunction?: string | undefined;
        customFactoryInput?: {
            factoryFunction: string;
            customFactoryAddresses: Record<string, string>;
            params?: {
                type: string;
                name: string;
            }[] | undefined;
        } | undefined;
        factoryAddresses?: Record<string, string> | undefined;
    }>>;
    deployType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"standard">, z.ZodLiteral<"autoFactory">, z.ZodLiteral<"customFactory">]>>;
    routerType: z.ZodOptional<z.ZodUnion<[z.ZodLiteral<"none">, z.ZodLiteral<"plugin">, z.ZodLiteral<"dynamic">]>>;
    defaultExtensions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        extensionName: z.ZodString;
        extensionVersion: z.ZodDefault<z.ZodString>;
        publisherAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    }, "strip", z.ZodTypeAny, {
        extensionName: string;
        extensionVersion: string;
        publisherAddress: string;
    }, {
        extensionName: string;
        publisherAddress: string;
        extensionVersion?: string | undefined;
    }>, "many">>;
    networksForDeployment: z.ZodOptional<z.ZodObject<{
        allNetworks: z.ZodOptional<z.ZodBoolean>;
        networksEnabled: z.ZodDefault<z.ZodArray<z.ZodNumber, "many">>;
    }, "strip", z.ZodTypeAny, {
        networksEnabled: number[];
        allNetworks?: boolean | undefined;
    }, {
        allNetworks?: boolean | undefined;
        networksEnabled?: number[] | undefined;
    }>>;
    constructorParams: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        displayName: z.ZodOptional<z.ZodString>;
        description: z.ZodOptional<z.ZodString>;
        defaultValue: z.ZodOptional<z.ZodString>;
        hidden: z.ZodOptional<z.ZodBoolean>;
    }, z.ZodAny, "strip">>>>;
    compositeAbi: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">>;
    publisher: z.ZodOptional<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
}, z.ZodAny, "strip">>;
export type FullPublishMetadata = z.infer<typeof FullPublishMetadataSchemaOutput>;
/**
 * @internal
 */
export declare const ProfileSchemaInput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodNullable<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>>;
    website: z.ZodOptional<z.ZodString>;
    twitter: z.ZodOptional<z.ZodString>;
    telegram: z.ZodOptional<z.ZodString>;
    facebook: z.ZodOptional<z.ZodString>;
    github: z.ZodOptional<z.ZodString>;
    medium: z.ZodOptional<z.ZodString>;
    linkedin: z.ZodOptional<z.ZodString>;
    reddit: z.ZodOptional<z.ZodString>;
    discord: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    bio?: string | undefined;
    avatar?: any;
    website?: string | undefined;
    twitter?: string | undefined;
    telegram?: string | undefined;
    facebook?: string | undefined;
    github?: string | undefined;
    medium?: string | undefined;
    linkedin?: string | undefined;
    reddit?: string | undefined;
    discord?: string | undefined;
}, {
    name?: string | undefined;
    bio?: string | undefined;
    avatar?: any;
    website?: string | undefined;
    twitter?: string | undefined;
    telegram?: string | undefined;
    facebook?: string | undefined;
    github?: string | undefined;
    medium?: string | undefined;
    linkedin?: string | undefined;
    reddit?: string | undefined;
    discord?: string | undefined;
}>;
export declare const ProfileSchemaOutput: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    bio: z.ZodOptional<z.ZodString>;
    website: z.ZodOptional<z.ZodString>;
    twitter: z.ZodOptional<z.ZodString>;
    telegram: z.ZodOptional<z.ZodString>;
    facebook: z.ZodOptional<z.ZodString>;
    github: z.ZodOptional<z.ZodString>;
    medium: z.ZodOptional<z.ZodString>;
    linkedin: z.ZodOptional<z.ZodString>;
    reddit: z.ZodOptional<z.ZodString>;
    discord: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    bio?: string | undefined;
    website?: string | undefined;
    twitter?: string | undefined;
    telegram?: string | undefined;
    facebook?: string | undefined;
    github?: string | undefined;
    medium?: string | undefined;
    linkedin?: string | undefined;
    reddit?: string | undefined;
    discord?: string | undefined;
    avatar?: string | null | undefined;
}, {
    name?: string | undefined;
    bio?: string | undefined;
    website?: string | undefined;
    twitter?: string | undefined;
    telegram?: string | undefined;
    facebook?: string | undefined;
    github?: string | undefined;
    medium?: string | undefined;
    linkedin?: string | undefined;
    reddit?: string | undefined;
    discord?: string | undefined;
    avatar?: string | null | undefined;
}>;
export type ProfileMetadataInput = z.infer<typeof ProfileSchemaInput>;
export type ProfileMetadata = z.infer<typeof ProfileSchemaOutput>;
/**
 * @internal
 */
export declare const PublishedContractSchema: z.ZodObject<{
    id: z.ZodString;
    timestamp: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    metadataUri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    timestamp: string;
    metadataUri: string;
}, {
    id: string;
    timestamp: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    metadataUri: string;
}>;
/**
 * @internal
 * Follows https://docs.soliditylang.org/en/v0.8.15/natspec-format.html
 */
export declare const ContractInfoSchema: z.ZodObject<{
    title: z.ZodOptional<z.ZodString>;
    author: z.ZodOptional<z.ZodString>;
    details: z.ZodOptional<z.ZodString>;
    notice: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title?: string | undefined;
    author?: string | undefined;
    details?: string | undefined;
    notice?: string | undefined;
}, {
    title?: string | undefined;
    author?: string | undefined;
    details?: string | undefined;
    notice?: string | undefined;
}>;
/**
 * @internal
 */
export declare const CompilerMetadataFetchedSchema: z.ZodObject<{
    name: z.ZodString;
    abi: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    info: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        author: z.ZodOptional<z.ZodString>;
        details: z.ZodOptional<z.ZodString>;
        notice: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    }, {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    }>;
    licenses: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodOptional<z.ZodString>, "many">>, string[], (string | undefined)[] | undefined>;
    isPartialAbi: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name: string;
    metadata: Record<string, any>;
    abi: z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">[];
    info: {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    };
    licenses: string[];
    isPartialAbi?: boolean | undefined;
}, {
    name: string;
    metadata: Record<string, any>;
    abi: z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">[];
    info: {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    };
    licenses?: (string | undefined)[] | undefined;
    isPartialAbi?: boolean | undefined;
}>;
/**
 * @internal
 */
export declare const PreDeployMetadataFetchedSchema: z.ZodObject<{
    name: z.ZodString;
    metadata: z.ZodRecord<z.ZodString, z.ZodAny>;
    abi: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, "strip", z.ZodAny, z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">, z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">>, "many">;
    metadataUri: z.ZodString;
    bytecodeUri: z.ZodString;
    analytics: z.ZodOptional<z.ZodAny>;
    info: z.ZodObject<{
        title: z.ZodOptional<z.ZodString>;
        author: z.ZodOptional<z.ZodString>;
        details: z.ZodOptional<z.ZodString>;
        notice: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    }, {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    }>;
    licenses: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodOptional<z.ZodString>, "many">>, string[], (string | undefined)[] | undefined>;
    isPartialAbi: z.ZodOptional<z.ZodBoolean>;
    bytecode: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    metadata: Record<string, any>;
    abi: z.objectOutputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">[];
    metadataUri: string;
    bytecodeUri: string;
    info: {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    };
    licenses: string[];
    bytecode: string;
    analytics?: any;
    isPartialAbi?: boolean | undefined;
}, {
    name: string;
    metadata: Record<string, any>;
    abi: z.objectInputType<{
        type: z.ZodString;
        name: z.ZodDefault<z.ZodString>;
        inputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
        outputs: z.ZodDefault<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, "strip", z.ZodAny, z.objectOutputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">, z.objectInputType<{
            type: z.ZodString;
            name: z.ZodDefault<z.ZodString>;
            stateMutability: z.ZodOptional<z.ZodString>;
            components: z.ZodOptional<z.ZodArray<z.ZodObject<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, "strip", z.ZodAny, z.objectOutputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">, z.objectInputType<{
                type: z.ZodString;
                name: z.ZodDefault<z.ZodString>;
            }, z.ZodAny, "strip">>, "many">>;
        }, z.ZodAny, "strip">>, "many">>;
    }, z.ZodAny, "strip">[];
    metadataUri: string;
    bytecodeUri: string;
    info: {
        title?: string | undefined;
        author?: string | undefined;
        details?: string | undefined;
        notice?: string | undefined;
    };
    bytecode: string;
    analytics?: any;
    licenses?: (string | undefined)[] | undefined;
    isPartialAbi?: boolean | undefined;
}>;
export type PreDeployMetadataFetched = z.infer<typeof PreDeployMetadataFetchedSchema>;
export type ContractParam = z.input<typeof AbiTypeSchema>;
export type PublishedContract = z.infer<typeof PublishedContractSchema>;
export type PublishedContractFetched = {
    name: string;
    publishedTimestamp: BigNumberish;
    publishedMetadata: FullPublishMetadata;
};
export type AbiFunction = {
    name: string;
    inputs: z.output<typeof AbiTypeSchema>[];
    outputs: z.output<typeof AbiTypeSchema>[];
    signature: string;
    stateMutability: string;
    comment: string;
};
export type AbiEvent = {
    name: string;
    inputs: z.output<typeof AbiTypeSchema>[];
    outputs: z.output<typeof AbiTypeSchema>[];
    comment: string;
};
export type ContractSource = {
    filename: string;
    source: string;
};
export type PublishedMetadata = z.infer<typeof CompilerMetadataFetchedSchema>;
//# sourceMappingURL=custom.d.ts.map