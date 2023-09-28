/// <reference types="bn.js" />
import { z } from "zod";
/**
 * @internal
 */
export declare const BaseSignaturePayloadInput: z.ZodObject<{
    to: z.ZodEffects<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, string, string>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodType<string, z.ZodTypeDef, string>>;
    mintStartTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    mintEndTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    primarySaleRecipient: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
}, "strip", z.ZodTypeAny, {
    to: string;
    primarySaleRecipient: string;
    uid: string;
    price: string;
    currencyAddress: string;
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    to: string;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    mintStartTime?: number | Date | undefined;
    mintEndTime?: number | Date | undefined;
    uid?: string | undefined;
    primarySaleRecipient?: string | undefined;
}>;
/**
 * @internal
 */
export declare const Signature20PayloadInput: z.ZodObject<{
    to: z.ZodEffects<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, string, string>;
    primarySaleRecipient: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodType<string, z.ZodTypeDef, string>>;
    mintStartTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    mintEndTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
}, "strip", z.ZodTypeAny, {
    to: string;
    primarySaleRecipient: string;
    quantity: string;
    uid: string;
    price: string;
    currencyAddress: string;
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    to: string;
    quantity: string | number;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    mintStartTime?: number | Date | undefined;
    mintEndTime?: number | Date | undefined;
}>;
/**
 * @internal
 */
export declare const Signature20PayloadOutput: z.ZodObject<{
    to: z.ZodEffects<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, string, string>;
    primarySaleRecipient: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodType<string, z.ZodTypeDef, string>>;
    mintStartTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    mintEndTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
}, "strip", z.ZodTypeAny, {
    to: string;
    primarySaleRecipient: string;
    quantity: string;
    uid: string;
    price: string;
    currencyAddress: string;
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    to: string;
    quantity: string | number;
    mintStartTime: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    mintEndTime: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
}>;
/**
 * @internal
 */
export declare const Signature721PayloadInput: z.ZodObject<{
    to: z.ZodEffects<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, string, string>;
    primarySaleRecipient: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodType<string, z.ZodTypeDef, string>>;
    mintStartTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    mintEndTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    metadata: z.ZodUnion<[z.ZodObject<{
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
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    metadata: (string | z.objectOutputType<{
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
    royaltyRecipient: string;
    royaltyBps: number;
    to: string;
    primarySaleRecipient: string;
    uid: string;
    price: string;
    currencyAddress: string;
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    metadata: (string | z.objectInputType<{
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
    to: string;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    mintStartTime?: number | Date | undefined;
    mintEndTime?: number | Date | undefined;
    royaltyRecipient?: string | undefined;
    royaltyBps?: number | undefined;
}>;
/**
 * @internal
 */
export declare const Signature721PayloadOutput: z.ZodObject<{
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    to: z.ZodEffects<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, string, string>;
    primarySaleRecipient: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodType<string, z.ZodTypeDef, string>>;
    metadata: z.ZodDefault<z.ZodUnion<[z.ZodObject<{
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
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, z.ZodString]>>;
    uri: z.ZodString;
    royaltyBps: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    mintStartTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    mintEndTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
}, "strip", z.ZodTypeAny, {
    uri: string;
    metadata: (string | z.objectOutputType<{
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
    royaltyRecipient: string;
    royaltyBps: import("ethers").BigNumber;
    to: string;
    primarySaleRecipient: string;
    uid: string;
    price: string;
    currencyAddress: string;
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    uri: string;
    royaltyBps: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    to: string;
    mintStartTime: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    mintEndTime: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    royaltyRecipient?: string | undefined;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    metadata?: string | z.objectInputType<{
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
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip"> | undefined;
}>;
/**
 * @internal
 */
export declare const Signature1155PayloadInput: z.ZodObject<{
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
    to: z.ZodEffects<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, string, string>;
    primarySaleRecipient: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodType<string, z.ZodTypeDef, string>>;
    mintStartTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    mintEndTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    metadata: z.ZodDefault<z.ZodUnion<[z.ZodObject<{
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
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, z.ZodString]>>;
    quantity: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
}, "strip", z.ZodTypeAny, {
    metadata: (string | z.objectOutputType<{
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
    royaltyRecipient: string;
    royaltyBps: number;
    to: string;
    primarySaleRecipient: string;
    quantity: string;
    uid: string;
    price: string;
    currencyAddress: string;
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    to: string;
    quantity: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    royaltyRecipient?: string | undefined;
    royaltyBps?: number | undefined;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    mintStartTime?: number | Date | undefined;
    mintEndTime?: number | Date | undefined;
    metadata?: string | z.objectInputType<{
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
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip"> | undefined;
}>;
/**
 * @internal
 */
export declare const Signature1155PayloadInputWithTokenId: z.ZodObject<{
    metadata: z.ZodDefault<z.ZodUnion<[z.ZodObject<{
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
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, z.ZodString]>>;
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
    to: z.ZodEffects<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, string, string>;
    primarySaleRecipient: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    quantity: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodType<string, z.ZodTypeDef, string>>;
    mintStartTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    mintEndTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    tokenId: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>;
}, "strip", z.ZodTypeAny, {
    tokenId: string;
    metadata: (string | z.objectOutputType<{
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
    royaltyRecipient: string;
    royaltyBps: number;
    to: string;
    primarySaleRecipient: string;
    quantity: string;
    uid: string;
    price: string;
    currencyAddress: string;
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    to: string;
    quantity: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    metadata?: string | z.objectInputType<{
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
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip"> | undefined;
    royaltyRecipient?: string | undefined;
    royaltyBps?: number | undefined;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    mintStartTime?: number | Date | undefined;
    mintEndTime?: number | Date | undefined;
}>;
/**
 * @internal
 */
export declare const Signature1155PayloadOutput: z.ZodObject<{
    uri: z.ZodString;
    metadata: z.ZodDefault<z.ZodUnion<[z.ZodObject<{
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
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, z.ZodString]>>;
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    to: z.ZodEffects<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, string, string>;
    primarySaleRecipient: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodType<string, z.ZodTypeDef, string>>;
    mintStartTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    mintEndTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    tokenId: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    quantity: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
}, "strip", z.ZodTypeAny, {
    uri: string;
    tokenId: import("ethers").BigNumber;
    metadata: (string | z.objectOutputType<{
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
    royaltyRecipient: string;
    royaltyBps: import("ethers").BigNumber;
    to: string;
    primarySaleRecipient: string;
    quantity: import("ethers").BigNumber;
    uid: string;
    price: string;
    currencyAddress: string;
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    uri: string;
    tokenId: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    royaltyBps: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    to: string;
    quantity: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    mintStartTime: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    mintEndTime: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    metadata?: string | z.objectInputType<{
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
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip"> | undefined;
    royaltyRecipient?: string | undefined;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
}>;
/**
 * @internal
 */
export declare const Signature721WithQuantityInput: z.ZodObject<{
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
    to: z.ZodEffects<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, string, string>;
    primarySaleRecipient: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodType<string, z.ZodTypeDef, string>>;
    mintStartTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    mintEndTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    metadata: z.ZodDefault<z.ZodUnion<[z.ZodObject<{
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
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, z.ZodString]>>;
    quantity: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>>;
}, "strip", z.ZodTypeAny, {
    metadata: (string | z.objectOutputType<{
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
    royaltyRecipient: string;
    royaltyBps: number;
    to: string;
    primarySaleRecipient: string;
    quantity: import("ethers").BigNumber;
    uid: string;
    price: string;
    currencyAddress: string;
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    to: string;
    royaltyRecipient?: string | undefined;
    royaltyBps?: number | undefined;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    mintStartTime?: number | Date | undefined;
    mintEndTime?: number | Date | undefined;
    metadata?: string | z.objectInputType<{
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
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip"> | undefined;
    quantity?: string | number | bigint | import("ethers").BigNumber | undefined;
}>;
/**
 * @internal
 */
export declare const Signature721WithQuantityOutput: z.ZodObject<{
    uri: z.ZodString;
    metadata: z.ZodDefault<z.ZodUnion<[z.ZodObject<{
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
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip">>, z.ZodString]>>;
    royaltyRecipient: z.ZodDefault<z.ZodString>;
    royaltyBps: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    to: z.ZodEffects<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, string, string>;
    primarySaleRecipient: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodType<string, z.ZodTypeDef, string>>;
    mintStartTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    mintEndTime: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
    quantity: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>>;
}, "strip", z.ZodTypeAny, {
    uri: string;
    metadata: (string | z.objectOutputType<{
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
    royaltyRecipient: string;
    royaltyBps: import("ethers").BigNumber;
    to: string;
    primarySaleRecipient: string;
    quantity: import("ethers").BigNumber;
    uid: string;
    price: string;
    currencyAddress: string;
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
}, {
    uri: string;
    royaltyBps: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    to: string;
    mintStartTime: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    mintEndTime: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
    metadata?: string | z.objectInputType<{
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
    }, z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>, z.ZodType<import("bn.js"), z.ZodTypeDef, import("bn.js")>]>, string, bigint | import("ethers").BigNumber | import("bn.js")>, z.ZodUnknown]>, "strip"> | undefined;
    royaltyRecipient?: string | undefined;
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    quantity?: string | number | bigint | import("ethers").BigNumber | undefined;
}>;
/**
 * @public
 */
export type FilledSignaturePayload20 = z.output<typeof Signature20PayloadInput>;
/**
 * @public
 */
export type PayloadWithUri20 = z.output<typeof Signature20PayloadOutput>;
/**
 * @public
 */
export type PayloadToSign20 = z.input<typeof Signature20PayloadInput>;
/**
 * @public
 */
export type SignedPayload20 = {
    payload: PayloadWithUri20;
    signature: string;
};
/**
 * @public
 */
export type FilledSignaturePayload721 = z.output<typeof Signature721PayloadInput>;
/**
 * @public
 */
export type PayloadWithUri721 = z.output<typeof Signature721PayloadOutput>;
/**
 * @public
 */
export type PayloadToSign721 = z.input<typeof Signature721PayloadInput>;
/**
 * @public
 */
export type SignedPayload721 = {
    payload: PayloadWithUri721;
    signature: string;
};
/**
 * @public
 */
export type FilledSignaturePayload1155 = z.output<typeof Signature1155PayloadInput>;
/**
 * @public
 */
export type FilledSignaturePayload1155WithTokenId = z.output<typeof Signature1155PayloadInputWithTokenId>;
/**
 * @public
 */
export type FilledSignature721WithQuantity = z.output<typeof Signature721WithQuantityInput>;
/**
 * @public
 */
export type PayloadWithUri1155 = z.output<typeof Signature1155PayloadOutput>;
/**
 * @public
 */
export type PayloadWithUri721withQuantity = z.output<typeof Signature721WithQuantityOutput>;
/**
 * @public
 */
export type PayloadToSign1155 = z.input<typeof Signature1155PayloadInput>;
/**
 * @public
 */
export type PayloadToSign1155WithTokenId = z.input<typeof Signature1155PayloadInputWithTokenId>;
/**
 * @public
 */
export type PayloadToSign721withQuantity = z.input<typeof Signature721WithQuantityInput>;
/**
 * @public
 */
export type SignedPayload1155 = {
    payload: PayloadWithUri1155;
    signature: string;
};
/**
 * @public
 */
export type SignedPayload721WithQuantitySignature = {
    payload: PayloadWithUri721withQuantity;
    signature: string;
};
export declare const MintRequest20: {
    name: string;
    type: string;
}[];
export declare const MintRequest721: {
    name: string;
    type: string;
}[];
export declare const MintRequest1155: {
    name: string;
    type: string;
}[];
export declare const MintRequest721withQuantity: {
    name: string;
    type: string;
}[];
export declare const GenericRequest: {
    name: string;
    type: string;
}[];
//# sourceMappingURL=signature.d.ts.map