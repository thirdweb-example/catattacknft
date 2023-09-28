import { z } from "zod";
export declare const SplitsContractInput: z.ZodObject<{
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
    recipients: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        sharesBps: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        address: string;
        sharesBps: number;
    }, {
        address: string;
        sharesBps: number;
    }>, "many">>, {
        address: string;
        sharesBps: number;
    }[], {
        address: string;
        sharesBps: number;
    }[] | undefined>;
}, "strip", z.ZodTypeAny, {
    name: string;
    recipients: {
        address: string;
        sharesBps: number;
    }[];
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
    recipients?: {
        address: string;
        sharesBps: number;
    }[] | undefined;
}>;
export declare const SplitsContractOutput: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    recipients: z.ZodArray<z.ZodObject<{
        address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        sharesBps: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        address: string;
        sharesBps: number;
    }, {
        address: string;
        sharesBps: number;
    }>, "many">;
}, "strip", z.ZodUnknown, z.objectOutputType<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    recipients: z.ZodArray<z.ZodObject<{
        address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        sharesBps: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        address: string;
        sharesBps: number;
    }, {
        address: string;
        sharesBps: number;
    }>, "many">;
}, z.ZodUnknown, "strip">, z.objectInputType<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    external_link: z.ZodOptional<z.ZodString>;
    app_uri: z.ZodOptional<z.ZodString>;
    social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
    recipients: z.ZodArray<z.ZodObject<{
        address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        sharesBps: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        address: string;
        sharesBps: number;
    }, {
        address: string;
        sharesBps: number;
    }>, "many">;
}, z.ZodUnknown, "strip">>;
export declare const SplitsContractDeploy: z.ZodObject<{
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
    recipients: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
        address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        sharesBps: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        address: string;
        sharesBps: number;
    }, {
        address: string;
        sharesBps: number;
    }>, "many">>, {
        address: string;
        sharesBps: number;
    }[], {
        address: string;
        sharesBps: number;
    }[] | undefined>;
    trusted_forwarders: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    trusted_forwarders: string[];
    recipients: {
        address: string;
        sharesBps: number;
    }[];
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
    recipients?: {
        address: string;
        sharesBps: number;
    }[] | undefined;
    trusted_forwarders?: string[] | undefined;
}>;
export declare const SplitsContractSchema: {
    deploy: z.ZodObject<{
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
        recipients: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
            sharesBps: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            address: string;
            sharesBps: number;
        }, {
            address: string;
            sharesBps: number;
        }>, "many">>, {
            address: string;
            sharesBps: number;
        }[], {
            address: string;
            sharesBps: number;
        }[] | undefined>;
        trusted_forwarders: z.ZodDefault<z.ZodArray<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        trusted_forwarders: string[];
        recipients: {
            address: string;
            sharesBps: number;
        }[];
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
        recipients?: {
            address: string;
            sharesBps: number;
        }[] | undefined;
        trusted_forwarders?: string[] | undefined;
    }>;
    output: z.ZodObject<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        external_link: z.ZodOptional<z.ZodString>;
        app_uri: z.ZodOptional<z.ZodString>;
        social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        recipients: z.ZodArray<z.ZodObject<{
            address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
            sharesBps: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            address: string;
            sharesBps: number;
        }, {
            address: string;
            sharesBps: number;
        }>, "many">;
    }, "strip", z.ZodUnknown, z.objectOutputType<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        external_link: z.ZodOptional<z.ZodString>;
        app_uri: z.ZodOptional<z.ZodString>;
        social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        recipients: z.ZodArray<z.ZodObject<{
            address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
            sharesBps: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            address: string;
            sharesBps: number;
        }, {
            address: string;
            sharesBps: number;
        }>, "many">;
    }, z.ZodUnknown, "strip">, z.objectInputType<{
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        image: z.ZodOptional<z.ZodString>;
        external_link: z.ZodOptional<z.ZodString>;
        app_uri: z.ZodOptional<z.ZodString>;
        social_urls: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodString>>;
        recipients: z.ZodArray<z.ZodObject<{
            address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
            sharesBps: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            address: string;
            sharesBps: number;
        }, {
            address: string;
            sharesBps: number;
        }>, "many">;
    }, z.ZodUnknown, "strip">>;
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
        recipients: z.ZodEffects<z.ZodDefault<z.ZodArray<z.ZodObject<{
            address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
            sharesBps: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            address: string;
            sharesBps: number;
        }, {
            address: string;
            sharesBps: number;
        }>, "many">>, {
            address: string;
            sharesBps: number;
        }[], {
            address: string;
            sharesBps: number;
        }[] | undefined>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        recipients: {
            address: string;
            sharesBps: number;
        }[];
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
        recipients?: {
            address: string;
            sharesBps: number;
        }[] | undefined;
    }>;
};
//# sourceMappingURL=splits.d.ts.map