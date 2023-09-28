export declare const AirdropContractInput: import("zod").ZodObject<{
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
    symbol: import("zod").ZodDefault<import("zod").ZodString>;
}, "strip", import("zod").ZodTypeAny, {
    symbol: string;
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
    symbol?: string | undefined;
}>;
export declare const AirdropContractOutput: import("zod").ZodObject<{
    name: import("zod").ZodString;
    description: import("zod").ZodOptional<import("zod").ZodString>;
    image: import("zod").ZodOptional<import("zod").ZodString>;
    external_link: import("zod").ZodOptional<import("zod").ZodString>;
    app_uri: import("zod").ZodOptional<import("zod").ZodString>;
    social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
    symbol: import("zod").ZodDefault<import("zod").ZodString>;
}, "strip", import("zod").ZodTypeAny, {
    symbol: string;
    name: string;
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
    symbol?: string | undefined;
}>;
export declare const AirdropContractDeploy: import("zod").ZodObject<{
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
    trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
}, "strip", import("zod").ZodTypeAny, {
    symbol: string;
    name: string;
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
    trusted_forwarders?: string[] | undefined;
}>;
//# sourceMappingURL=airdrop.d.ts.map