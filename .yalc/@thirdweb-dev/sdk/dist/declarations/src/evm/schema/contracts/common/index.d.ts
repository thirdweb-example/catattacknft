import { z } from "zod";
/**
 * @internal
 */
export declare const CommonContractSchema: z.ZodObject<{
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
}, "strip", z.ZodTypeAny, {
    name: string;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    app_uri?: string | undefined;
    social_urls?: Record<string, string> | undefined;
}, {
    name: string;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    app_uri?: string | undefined;
    social_urls?: Record<string, string> | undefined;
}>;
export type CommonContractSchemaInput = z.input<typeof CommonContractSchema>;
/**
 * @internal
 */
export declare const CommonContractOutputSchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    image: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodUnknown, z.objectOutputType<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    image: z.ZodOptional<z.ZodString>;
}, z.ZodUnknown, "strip">, z.objectInputType<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    image: z.ZodOptional<z.ZodString>;
}, z.ZodUnknown, "strip">>;
/**
 * @internal
 */
export declare const CommonRoyaltySchema: z.ZodObject<{
    /**
     * The amount of royalty collected on all royalties represented as basis points.
     * The default is 0 (no royalties).
     *
     * 1 basis point = 0.01%
     *
     * For example: if this value is 100, then the royalty is 1% of the total sales.
     *
     *  @internalremarks used by OpenSea "seller_fee_basis_points"
     */
    seller_fee_basis_points: z.ZodDefault<z.ZodNumber>;
    /**
     * The address of the royalty recipient. All royalties will be sent
     * to this address.
     * @internalremarks used by OpenSea "fee_recipient"
     */
    fee_recipient: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
}, "strip", z.ZodTypeAny, {
    seller_fee_basis_points: number;
    fee_recipient: string;
}, {
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
}>;
/**
 * @internal
 */
export declare const CommonPrimarySaleSchema: z.ZodObject<{
    /**
     * primary sale recipient address
     */
    primary_sale_recipient: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
}, "strip", z.ZodTypeAny, {
    primary_sale_recipient: string;
}, {
    primary_sale_recipient: string;
}>;
/**
 * @internal
 */
export declare const CommonPlatformFeeSchema: z.ZodObject<{
    /**
     * platform fee basis points
     */
    platform_fee_basis_points: z.ZodDefault<z.ZodNumber>;
    /**
     * platform fee recipient address
     */
    platform_fee_recipient: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
}, "strip", z.ZodTypeAny, {
    platform_fee_basis_points: number;
    platform_fee_recipient: string;
}, {
    platform_fee_basis_points?: number | undefined;
    platform_fee_recipient?: string | undefined;
}>;
/**
 * @internal
 */
export declare const CommonTrustedForwarderSchema: z.ZodObject<{
    trusted_forwarders: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    trusted_forwarders: string[];
}, {
    trusted_forwarders?: string[] | undefined;
}>;
/**
 * @internal
 */
export declare const CommonSymbolSchema: z.ZodObject<{
    symbol: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
}, {
    symbol?: string | undefined;
}>;
export * from "./claim-conditions";
export * from "./currency";
export * from "./signature";
export * from "./snapshots";
//# sourceMappingURL=index.d.ts.map