export declare const MultiwrapContractInput: import("zod").ZodObject<{
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
    symbol: import("zod").ZodDefault<import("zod").ZodString>;
}, "strip", import("zod").ZodTypeAny, {
    symbol: string;
    name: string;
    seller_fee_basis_points: number;
    fee_recipient: string;
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
    symbol?: string | undefined;
}>;
export declare const MultiwrapContractOutput: import("zod").ZodObject<{
    name: import("zod").ZodString;
    description: import("zod").ZodOptional<import("zod").ZodString>;
    image: import("zod").ZodOptional<import("zod").ZodString>;
    external_link: import("zod").ZodOptional<import("zod").ZodString>;
    app_uri: import("zod").ZodOptional<import("zod").ZodString>;
    social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
    seller_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
    fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    symbol: import("zod").ZodDefault<import("zod").ZodString>;
}, "strip", import("zod").ZodTypeAny, {
    symbol: string;
    name: string;
    seller_fee_basis_points: number;
    fee_recipient: string;
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
    symbol?: string | undefined;
}>;
export declare const MultiwrapContractDeploy: import("zod").ZodObject<{
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
    trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
}, "strip", import("zod").ZodTypeAny, {
    symbol: string;
    name: string;
    seller_fee_basis_points: number;
    fee_recipient: string;
    trusted_forwarders: string[];
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    app_uri?: string | undefined;
    social_urls?: Record<string, string> | undefined;
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
    trusted_forwarders?: string[] | undefined;
}>;
export declare const MultiwrapContractSchema: {
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
        trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
    }, "strip", import("zod").ZodTypeAny, {
        symbol: string;
        name: string;
        seller_fee_basis_points: number;
        fee_recipient: string;
        trusted_forwarders: string[];
        description?: string | undefined;
        image?: any;
        external_link?: string | undefined;
        app_uri?: string | undefined;
        social_urls?: Record<string, string> | undefined;
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
        symbol: import("zod").ZodDefault<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        symbol: string;
        name: string;
        seller_fee_basis_points: number;
        fee_recipient: string;
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
        symbol: import("zod").ZodDefault<import("zod").ZodString>;
    }, "strip", import("zod").ZodTypeAny, {
        symbol: string;
        name: string;
        seller_fee_basis_points: number;
        fee_recipient: string;
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
        symbol?: string | undefined;
    }>;
};
//# sourceMappingURL=multiwrap.d.ts.map