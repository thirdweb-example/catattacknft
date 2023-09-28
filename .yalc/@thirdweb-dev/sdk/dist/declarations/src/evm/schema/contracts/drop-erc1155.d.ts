export declare const DropErc1155ContractInput: import("zod").ZodObject<{
    name: import("zod").ZodString;
    description: import("zod").ZodOptional<import("zod").ZodString>;
    image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
        data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
        name: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, import("zod").ZodString]>>;
    external_link: import("zod").ZodOptional<import("zod").ZodString>;
    app_uri: import("zod").ZodOptional<import("zod").ZodString>;
    social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
    seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
    fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
    symbol: import("zod").ZodDefault<import("zod").ZodString>;
}, "strip", import("zod").ZodTypeAny, {
    symbol: string;
    name: string;
    seller_fee_basis_points: number;
    fee_recipient: string;
    merkle: Record<string, string>;
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
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    merkle?: Record<string, string> | undefined;
    symbol?: string | undefined;
}>;
export declare const DropErc1155ContractOutput: import("zod").ZodObject<{
    name: import("zod").ZodString;
    description: import("zod").ZodOptional<import("zod").ZodString>;
    image: import("zod").ZodOptional<import("zod").ZodString>;
    external_link: import("zod").ZodOptional<import("zod").ZodString>;
    app_uri: import("zod").ZodOptional<import("zod").ZodString>;
    social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
    seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
    fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
    symbol: import("zod").ZodDefault<import("zod").ZodString>;
}, "strip", import("zod").ZodTypeAny, {
    symbol: string;
    name: string;
    seller_fee_basis_points: number;
    fee_recipient: string;
    merkle: Record<string, string>;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    app_uri?: string | undefined;
    social_urls?: Record<string, string> | undefined;
}, {
    name: string;
    description?: string | undefined;
    image?: string | undefined;
    external_link?: string | undefined;
    app_uri?: string | undefined;
    social_urls?: Record<string, string> | undefined;
    seller_fee_basis_points?: number | undefined;
    fee_recipient?: string | undefined;
    merkle?: Record<string, string> | undefined;
    symbol?: string | undefined;
}>;
export declare const DropErc1155ContractDeploy: import("zod").ZodObject<{
    symbol: import("zod").ZodDefault<import("zod").ZodString>;
    name: import("zod").ZodString;
    description: import("zod").ZodOptional<import("zod").ZodString>;
    image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
        data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
        name: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, import("zod").ZodString]>>;
    external_link: import("zod").ZodOptional<import("zod").ZodString>;
    app_uri: import("zod").ZodOptional<import("zod").ZodString>;
    social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
    seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
    fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
    platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
    platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    primary_sale_recipient: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
}, "strip", import("zod").ZodTypeAny, {
    symbol: string;
    name: string;
    seller_fee_basis_points: number;
    fee_recipient: string;
    merkle: Record<string, string>;
    platform_fee_basis_points: number;
    platform_fee_recipient: string;
    primary_sale_recipient: string;
    trusted_forwarders: string[];
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    app_uri?: string | undefined;
    social_urls?: Record<string, string> | undefined;
}, {
    name: string;
    primary_sale_recipient: string;
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
    trusted_forwarders?: string[] | undefined;
}>;
export declare const DropErc1155ContractSchema: {
    deploy: import("zod").ZodObject<{
        symbol: import("zod").ZodDefault<import("zod").ZodString>;
        name: import("zod").ZodString;
        description: import("zod").ZodOptional<import("zod").ZodString>;
        image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
            data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
            name: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, import("zod").ZodString]>>;
        external_link: import("zod").ZodOptional<import("zod").ZodString>;
        app_uri: import("zod").ZodOptional<import("zod").ZodString>;
        social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
        fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
        merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
        platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
        primary_sale_recipient: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
    }, "strip", import("zod").ZodTypeAny, {
        symbol: string;
        name: string;
        seller_fee_basis_points: number;
        fee_recipient: string;
        merkle: Record<string, string>;
        platform_fee_basis_points: number;
        platform_fee_recipient: string;
        primary_sale_recipient: string;
        trusted_forwarders: string[];
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        app_uri?: string | undefined;
        social_urls?: Record<string, string> | undefined;
    }, {
        name: string;
        primary_sale_recipient: string;
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
        trusted_forwarders?: string[] | undefined;
    }>;
    output: import("zod").ZodObject<{
        name: import("zod").ZodString;
        description: import("zod").ZodOptional<import("zod").ZodString>;
        image: import("zod").ZodOptional<import("zod").ZodString>;
        external_link: import("zod").ZodOptional<import("zod").ZodString>;
        app_uri: import("zod").ZodOptional<import("zod").ZodString>;
        social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
        fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
        merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        symbol: import("zod").ZodDefault<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        symbol: string;
        name: string;
        seller_fee_basis_points: number;
        fee_recipient: string;
        merkle: Record<string, string>;
        description?: string | undefined;
        image?: string | undefined;
        external_link?: string | undefined;
        app_uri?: string | undefined;
        social_urls?: Record<string, string> | undefined;
    }, {
        name: string;
        description?: string | undefined;
        image?: string | undefined;
        external_link?: string | undefined;
        app_uri?: string | undefined;
        social_urls?: Record<string, string> | undefined;
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        merkle?: Record<string, string> | undefined;
        symbol?: string | undefined;
    }>;
    input: import("zod").ZodObject<{
        name: import("zod").ZodString;
        description: import("zod").ZodOptional<import("zod").ZodString>;
        image: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
            data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
            name: import("zod").ZodString;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            data?: any;
        }, {
            name: string;
            data?: any;
        }>]>, import("zod").ZodString]>>;
        external_link: import("zod").ZodOptional<import("zod").ZodString>;
        app_uri: import("zod").ZodOptional<import("zod").ZodString>;
        social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
        fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
        merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
        symbol: import("zod").ZodDefault<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        symbol: string;
        name: string;
        seller_fee_basis_points: number;
        fee_recipient: string;
        merkle: Record<string, string>;
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
        seller_fee_basis_points?: number | undefined;
        fee_recipient?: string | undefined;
        merkle?: Record<string, string> | undefined;
        symbol?: string | undefined;
    }>;
};
//# sourceMappingURL=drop-erc1155.d.ts.map