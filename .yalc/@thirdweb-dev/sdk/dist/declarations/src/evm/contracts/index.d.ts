import { ThirdwebStorage } from "@thirdweb-dev/storage";
import type { providers } from "ethers";
import type { NetworkInput } from "../core/types";
import { Abi } from "../schema/contracts/custom";
import { SDKOptions } from "../schema/sdk-options";
import { Address } from "../schema/shared/Address";
import type { SmartContract as SmartContractType } from "./smart-contract";
declare const prebuiltContractTypes: {
    readonly vote: "vote";
    readonly token: "token";
    readonly "edition-drop": "edition-drop";
    readonly edition: "edition";
    readonly marketplace: "marketplace";
    readonly "marketplace-v3": "marketplace-v3";
    readonly multiwrap: "multiwrap";
    readonly "nft-collection": "nft-collection";
    readonly "nft-drop": "nft-drop";
    readonly pack: "pack";
    readonly "signature-drop": "signature-drop";
    readonly split: "split";
    readonly "token-drop": "token-drop";
};
export type PrebuiltContractType = keyof typeof prebuiltContractTypes;
export declare const EditionDropInitializer: {
    name: "DropERC1155";
    contractType: "edition-drop";
    schema: {
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
    roles: readonly ["admin", "minter", "transfer"];
    initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/edition-drop").EditionDrop>;
    getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
        inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
        outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
    }, import("zod").ZodAny, "strip">[] | ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[] | ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
};
export declare const EditionInitializer: {
    name: "TokenERC1155";
    contractType: "edition";
    schema: {
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
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
            primary_sale_recipient: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
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
    roles: readonly ["admin", "minter", "transfer"];
    initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/edition").Edition>;
    getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
        inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
        outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
    }, import("zod").ZodAny, "strip">[] | ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
};
export declare const MarketplaceInitializer: {
    name: "Marketplace";
    contractType: "marketplace";
    schema: {
        deploy: import("zod").ZodObject<{
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
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
            trusted_forwarders: string[];
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
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
        }>;
        output: import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
            app_uri: import("zod").ZodOptional<import("zod").ZodString>;
            social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodUnknown, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
            app_uri: import("zod").ZodOptional<import("zod").ZodString>;
            social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodUnknown, "strip">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
            app_uri: import("zod").ZodOptional<import("zod").ZodString>;
            social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodUnknown, "strip">>;
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
        }, "strip", import("zod").ZodTypeAny, {
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
    };
    roles: readonly ["admin", "lister", "asset"];
    initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/marketplace").Marketplace>;
    getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
        inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
        outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
    }, import("zod").ZodAny, "strip">[] | ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[]>;
};
export declare const MarketplaceV3Initializer: {
    name: "MarketplaceV3";
    contractType: "marketplace-v3";
    schema: {
        deploy: import("zod").ZodObject<{
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
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
            trusted_forwarders: string[];
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
            platform_fee_basis_points?: number | undefined;
            platform_fee_recipient?: string | undefined;
            trusted_forwarders?: string[] | undefined;
        }>;
        output: import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
            app_uri: import("zod").ZodOptional<import("zod").ZodString>;
            social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }, "strip", import("zod").ZodUnknown, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
            app_uri: import("zod").ZodOptional<import("zod").ZodString>;
            social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodUnknown, "strip">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
            app_uri: import("zod").ZodOptional<import("zod").ZodString>;
            social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            image: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodUnknown, "strip">>;
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
        }, "strip", import("zod").ZodTypeAny, {
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
    };
    roles: readonly ["admin", "lister", "asset"];
    initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/marketplacev3").MarketplaceV3>;
    getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage, options?: SDKOptions) => Promise<import("zod").objectOutputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
        inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
        outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
    }, import("zod").ZodAny, "strip">[]>;
};
export declare const MultiwrapInitializer: {
    name: "Multiwrap";
    contractType: "multiwrap";
    schema: {
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
    roles: readonly ["admin", "transfer", "minter", "unwrap", "asset"];
    initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/multiwrap").Multiwrap>;
    getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
        inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
        outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
    }, import("zod").ZodAny, "strip">[] | ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[]>;
};
export declare const NFTCollectionInitializer: {
    name: "TokenERC721";
    contractType: "nft-collection";
    schema: {
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
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
            primary_sale_recipient: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
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
    roles: readonly ["admin", "minter", "transfer"];
    initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/nft-collection").NFTCollection>;
    getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
        inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
        outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
    }, import("zod").ZodAny, "strip">[] | ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
};
export declare const NFTDropInitializer: {
    name: "DropERC721";
    contractType: "nft-drop";
    schema: {
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
    roles: readonly ["admin", "minter", "transfer"];
    initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/nft-drop").NFTDrop>;
    getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
        inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
        outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
    }, import("zod").ZodAny, "strip">[] | ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        } | {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[] | ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
};
export declare const PackInitializer: {
    name: "Pack";
    contractType: "pack";
    schema: {
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
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
            symbol: string;
            name: string;
            seller_fee_basis_points: number;
            fee_recipient: string;
            platform_fee_basis_points: number;
            platform_fee_recipient: string;
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
    roles: readonly ["admin", "minter", "asset", "transfer"];
    initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/pack").Pack>;
    getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<Abi>;
};
export declare const SignatureDropInitializer: {
    name: "SignatureDrop";
    contractType: "signature-drop";
    schema: {
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
    roles: readonly ["admin", "minter", "transfer"];
    initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/signature-drop").SignatureDrop>;
    getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
        inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
        outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
    }, import("zod").ZodAny, "strip">[] | ({
        inputs: never[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        } | {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
};
export declare const SplitInitializer: {
    name: "Split";
    contractType: "split";
    schema: {
        deploy: import("zod").ZodObject<{
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
            recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                sharesBps: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
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
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
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
        output: import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodString>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
            app_uri: import("zod").ZodOptional<import("zod").ZodString>;
            social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            recipients: import("zod").ZodArray<import("zod").ZodObject<{
                address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                sharesBps: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                address: string;
                sharesBps: number;
            }, {
                address: string;
                sharesBps: number;
            }>, "many">;
        }, "strip", import("zod").ZodUnknown, import("zod").objectOutputType<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodString>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
            app_uri: import("zod").ZodOptional<import("zod").ZodString>;
            social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            recipients: import("zod").ZodArray<import("zod").ZodObject<{
                address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                sharesBps: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                address: string;
                sharesBps: number;
            }, {
                address: string;
                sharesBps: number;
            }>, "many">;
        }, import("zod").ZodUnknown, "strip">, import("zod").objectInputType<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodString>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
            app_uri: import("zod").ZodOptional<import("zod").ZodString>;
            social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            recipients: import("zod").ZodArray<import("zod").ZodObject<{
                address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                sharesBps: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
                address: string;
                sharesBps: number;
            }, {
                address: string;
                sharesBps: number;
            }>, "many">;
        }, import("zod").ZodUnknown, "strip">>;
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
            recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                sharesBps: import("zod").ZodNumber;
            }, "strip", import("zod").ZodTypeAny, {
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
        }, "strip", import("zod").ZodTypeAny, {
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
    roles: readonly ["admin"];
    initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/split").Split>;
    getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
        inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
        outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
    }, import("zod").ZodAny, "strip">[] | ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[]>;
};
export declare const TokenDropInitializer: {
    name: "DropERC20";
    contractType: "token-drop";
    schema: {
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
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
            primary_sale_recipient: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
            symbol: string;
            name: string;
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
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            symbol: import("zod").ZodDefault<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            symbol: string;
            name: string;
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
            merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            symbol: import("zod").ZodDefault<import("zod").ZodString>;
        }, "strip", import("zod").ZodTypeAny, {
            symbol: string;
            name: string;
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
            merkle?: Record<string, string> | undefined;
            symbol?: string | undefined;
        }>;
    };
    roles: readonly ["admin", "transfer"];
    initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/token-drop").TokenDrop>;
    getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
        inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
        outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
    }, import("zod").ZodAny, "strip">[] | ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
};
export declare const TokenInitializer: {
    name: "TokenERC20";
    contractType: "token";
    schema: {
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
            platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
            platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
            primary_sale_recipient: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
            symbol: string;
            name: string;
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
    };
    roles: readonly ["admin", "minter", "transfer"];
    initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/token").Token>;
    getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
        inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
        outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
    }, import("zod").ZodAny, "strip">[] | ({
        inputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
        name?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[]>;
};
export declare const VoteInitializer: {
    name: "VoteERC20";
    contractType: "vote";
    schema: {
        deploy: import("zod").ZodObject<{
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
            voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
            voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
            voting_token_address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
            voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
            proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
            trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            trusted_forwarders: string[];
            voting_delay_in_blocks: number;
            voting_period_in_blocks: number;
            voting_token_address: string;
            voting_quorum_fraction: number;
            proposal_token_threshold: string;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            app_uri?: string | undefined;
            social_urls?: Record<string, string> | undefined;
        }, {
            name: string;
            voting_token_address: string;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            app_uri?: string | undefined;
            social_urls?: Record<string, string> | undefined;
            voting_delay_in_blocks?: number | undefined;
            voting_period_in_blocks?: number | undefined;
            voting_quorum_fraction?: number | undefined;
            proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
            trusted_forwarders?: string[] | undefined;
        }>;
        output: import("zod").ZodObject<{
            name: import("zod").ZodString;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            image: import("zod").ZodOptional<import("zod").ZodString>;
            external_link: import("zod").ZodOptional<import("zod").ZodString>;
            app_uri: import("zod").ZodOptional<import("zod").ZodString>;
            social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
            voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
            voting_token_address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
            voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
            proposal_token_threshold: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            voting_delay_in_blocks: number;
            voting_period_in_blocks: number;
            voting_token_address: string;
            voting_quorum_fraction: number;
            proposal_token_threshold: import("ethers").BigNumber;
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            app_uri?: string | undefined;
            social_urls?: Record<string, string> | undefined;
        }, {
            name: string;
            voting_token_address: string;
            proposal_token_threshold: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
            description?: string | undefined;
            image?: string | undefined;
            external_link?: string | undefined;
            app_uri?: string | undefined;
            social_urls?: Record<string, string> | undefined;
            voting_delay_in_blocks?: number | undefined;
            voting_period_in_blocks?: number | undefined;
            voting_quorum_fraction?: number | undefined;
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
            voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
            voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
            voting_token_address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
            voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
            proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
        }, "strip", import("zod").ZodTypeAny, {
            name: string;
            voting_delay_in_blocks: number;
            voting_period_in_blocks: number;
            voting_token_address: string;
            voting_quorum_fraction: number;
            proposal_token_threshold: string;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            app_uri?: string | undefined;
            social_urls?: Record<string, string> | undefined;
        }, {
            name: string;
            voting_token_address: string;
            description?: string | undefined;
            image?: any;
            external_link?: string | undefined;
            app_uri?: string | undefined;
            social_urls?: Record<string, string> | undefined;
            voting_delay_in_blocks?: number | undefined;
            voting_period_in_blocks?: number | undefined;
            voting_quorum_fraction?: number | undefined;
            proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
        }>;
    };
    roles: readonly [];
    initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined) => Promise<import("./prebuilt-implementations/vote").Vote>;
    getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
        inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
        outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
            components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">>, "many">>;
    }, import("zod").ZodAny, "strip">[] | ({
        inputs: never[];
        stateMutability: string;
        type: string;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        inputs: never[];
        name: string;
        type: string;
        stateMutability?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        stateMutability?: undefined;
        outputs?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: never[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        anonymous?: undefined;
        outputs?: undefined;
    })[]>;
};
/**
 * a map from contractType -> contract metadata
 * @internal
 */
export declare const PREBUILT_CONTRACTS_MAP: {
    readonly "edition-drop": {
        name: "DropERC1155";
        contractType: "edition-drop";
        schema: {
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
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/edition-drop").EditionDrop>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            name?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly edition: {
        name: "TokenERC1155";
        contractType: "edition";
        schema: {
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
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
                primary_sale_recipient: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
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
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/edition").Edition>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            name?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly marketplace: {
        name: "Marketplace";
        contractType: "marketplace";
        schema: {
            deploy: import("zod").ZodObject<{
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
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                trusted_forwarders: string[];
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
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
            }>;
            output: import("zod").ZodObject<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodUnknown, import("zod").objectOutputType<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod").ZodUnknown, "strip">, import("zod").objectInputType<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod").ZodUnknown, "strip">>;
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
            }, "strip", import("zod").ZodTypeAny, {
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
        };
        roles: readonly ["admin", "lister", "asset"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/marketplace").Marketplace>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
    readonly "marketplace-v3": {
        name: "MarketplaceV3";
        contractType: "marketplace-v3";
        schema: {
            deploy: import("zod").ZodObject<{
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
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                trusted_forwarders: string[];
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
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
            }>;
            output: import("zod").ZodObject<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodUnknown, import("zod").objectOutputType<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod").ZodUnknown, "strip">, import("zod").objectInputType<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod").ZodUnknown, "strip">>;
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
            }, "strip", import("zod").ZodTypeAny, {
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
        };
        roles: readonly ["admin", "lister", "asset"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/marketplacev3").MarketplaceV3>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage, options?: SDKOptions) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[]>;
    };
    readonly multiwrap: {
        name: "Multiwrap";
        contractType: "multiwrap";
        schema: {
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
        roles: readonly ["admin", "transfer", "minter", "unwrap", "asset"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/multiwrap").Multiwrap>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
    readonly "nft-collection": {
        name: "TokenERC721";
        contractType: "nft-collection";
        schema: {
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
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
                primary_sale_recipient: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
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
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/nft-collection").NFTCollection>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            name?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly "nft-drop": {
        name: "DropERC721";
        contractType: "nft-drop";
        schema: {
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
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/nft-drop").NFTDrop>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            name?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            } | {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly pack: {
        name: "Pack";
        contractType: "pack";
        schema: {
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
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
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
        roles: readonly ["admin", "minter", "asset", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/pack").Pack>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<Abi>;
    };
    readonly "signature-drop": {
        name: "SignatureDrop";
        contractType: "signature-drop";
        schema: {
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
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/signature-drop").SignatureDrop>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            name: string;
            type: string;
            anonymous?: undefined;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            } | {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly split: {
        name: "Split";
        contractType: "split";
        schema: {
            deploy: import("zod").ZodObject<{
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
                recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
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
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
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
            output: import("zod").ZodObject<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                recipients: import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    address: string;
                    sharesBps: number;
                }, {
                    address: string;
                    sharesBps: number;
                }>, "many">;
            }, "strip", import("zod").ZodUnknown, import("zod").objectOutputType<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                recipients: import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    address: string;
                    sharesBps: number;
                }, {
                    address: string;
                    sharesBps: number;
                }>, "many">;
            }, import("zod").ZodUnknown, "strip">, import("zod").objectInputType<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                recipients: import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    address: string;
                    sharesBps: number;
                }, {
                    address: string;
                    sharesBps: number;
                }>, "many">;
            }, import("zod").ZodUnknown, "strip">>;
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
                recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
        roles: readonly ["admin"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/split").Split>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
    readonly "token-drop": {
        name: "DropERC20";
        contractType: "token-drop";
        schema: {
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
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
                primary_sale_recipient: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                symbol: string;
                name: string;
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
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                symbol: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                symbol: string;
                name: string;
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
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                symbol: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                symbol: string;
                name: string;
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
                merkle?: Record<string, string> | undefined;
                symbol?: string | undefined;
            }>;
        };
        roles: readonly ["admin", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/token-drop").TokenDrop>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly token: {
        name: "TokenERC20";
        contractType: "token";
        schema: {
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
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
                primary_sale_recipient: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                symbol: string;
                name: string;
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
        };
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/token").Token>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly vote: {
        name: "VoteERC20";
        contractType: "vote";
        schema: {
            deploy: import("zod").ZodObject<{
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
                voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_token_address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
                proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                trusted_forwarders: string[];
                voting_delay_in_blocks: number;
                voting_period_in_blocks: number;
                voting_token_address: string;
                voting_quorum_fraction: number;
                proposal_token_threshold: string;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                app_uri?: string | undefined;
                social_urls?: Record<string, string> | undefined;
            }, {
                name: string;
                voting_token_address: string;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                app_uri?: string | undefined;
                social_urls?: Record<string, string> | undefined;
                voting_delay_in_blocks?: number | undefined;
                voting_period_in_blocks?: number | undefined;
                voting_quorum_fraction?: number | undefined;
                proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
                trusted_forwarders?: string[] | undefined;
            }>;
            output: import("zod").ZodObject<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_token_address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
                proposal_token_threshold: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                voting_delay_in_blocks: number;
                voting_period_in_blocks: number;
                voting_token_address: string;
                voting_quorum_fraction: number;
                proposal_token_threshold: import("ethers").BigNumber;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                app_uri?: string | undefined;
                social_urls?: Record<string, string> | undefined;
            }, {
                name: string;
                voting_token_address: string;
                proposal_token_threshold: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                app_uri?: string | undefined;
                social_urls?: Record<string, string> | undefined;
                voting_delay_in_blocks?: number | undefined;
                voting_period_in_blocks?: number | undefined;
                voting_quorum_fraction?: number | undefined;
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
                voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_token_address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
                proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                voting_delay_in_blocks: number;
                voting_period_in_blocks: number;
                voting_token_address: string;
                voting_quorum_fraction: number;
                proposal_token_threshold: string;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                app_uri?: string | undefined;
                social_urls?: Record<string, string> | undefined;
            }, {
                name: string;
                voting_token_address: string;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                app_uri?: string | undefined;
                social_urls?: Record<string, string> | undefined;
                voting_delay_in_blocks?: number | undefined;
                voting_period_in_blocks?: number | undefined;
                voting_quorum_fraction?: number | undefined;
                proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
            }>;
        };
        roles: readonly [];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/vote").Vote>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            name?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            inputs: never[];
            name: string;
            type: string;
            stateMutability?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: never[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        })[]>;
    };
};
export declare const PREBUILT_CONTRACTS_APPURI_MAP: {
    readonly "edition-drop": "ipfs://QmNm3wRzpKYWo1SRtJfgfxtvudp5p2nXD6EttcsQJHwTmk";
    readonly edition: "";
    readonly marketplace: "ipfs://QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/marketplace.html";
    readonly "marketplace-v3": "ipfs://QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/marketplace-v3.html";
    readonly multiwrap: "";
    readonly "nft-collection": "";
    readonly "nft-drop": "ipfs://QmZptmVipc6SGFbKAyXcxGgohzTwYRXZ9LauRX5ite1xDK";
    readonly pack: "";
    readonly "signature-drop": "ipfs://QmZptmVipc6SGFbKAyXcxGgohzTwYRXZ9LauRX5ite1xDK";
    readonly split: "";
    readonly "token-drop": "ipfs://QmbAgC8YwY36n8H2kuvSWsRisxDZ15QZw3xGZyk9aDvcv7/erc20.html";
    readonly token: "";
    readonly vote: "";
};
export declare const CONTRACTS_MAP: {
    readonly custom: {
        name: "SmartContract";
        contractType: "custom";
        schema: {};
        roles: ("admin" | "minter" | "transfer" | "lister" | "asset" | "unwrap" | "pauser" | "factory" | "signer")[];
    };
    readonly "edition-drop": {
        name: "DropERC1155";
        contractType: "edition-drop";
        schema: {
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
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/edition-drop").EditionDrop>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            name?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly edition: {
        name: "TokenERC1155";
        contractType: "edition";
        schema: {
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
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
                primary_sale_recipient: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
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
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/edition").Edition>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            name?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly marketplace: {
        name: "Marketplace";
        contractType: "marketplace";
        schema: {
            deploy: import("zod").ZodObject<{
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
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                trusted_forwarders: string[];
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
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
            }>;
            output: import("zod").ZodObject<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodUnknown, import("zod").objectOutputType<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod").ZodUnknown, "strip">, import("zod").objectInputType<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod").ZodUnknown, "strip">>;
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
            }, "strip", import("zod").ZodTypeAny, {
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
        };
        roles: readonly ["admin", "lister", "asset"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/marketplace").Marketplace>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
    readonly "marketplace-v3": {
        name: "MarketplaceV3";
        contractType: "marketplace-v3";
        schema: {
            deploy: import("zod").ZodObject<{
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
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
                trusted_forwarders: string[];
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
                platform_fee_basis_points?: number | undefined;
                platform_fee_recipient?: string | undefined;
                trusted_forwarders?: string[] | undefined;
            }>;
            output: import("zod").ZodObject<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }, "strip", import("zod").ZodUnknown, import("zod").objectOutputType<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod").ZodUnknown, "strip">, import("zod").objectInputType<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
            }, import("zod").ZodUnknown, "strip">>;
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
            }, "strip", import("zod").ZodTypeAny, {
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
        };
        roles: readonly ["admin", "lister", "asset"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/marketplacev3").MarketplaceV3>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage, options?: SDKOptions) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[]>;
    };
    readonly multiwrap: {
        name: "Multiwrap";
        contractType: "multiwrap";
        schema: {
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
        roles: readonly ["admin", "transfer", "minter", "unwrap", "asset"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/multiwrap").Multiwrap>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
    readonly "nft-collection": {
        name: "TokenERC721";
        contractType: "nft-collection";
        schema: {
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
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
                primary_sale_recipient: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
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
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/nft-collection").NFTCollection>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            name?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly "nft-drop": {
        name: "DropERC721";
        contractType: "nft-drop";
        schema: {
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
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/nft-drop").NFTDrop>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            name?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            } | {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly pack: {
        name: "Pack";
        contractType: "pack";
        schema: {
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
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                symbol: string;
                name: string;
                seller_fee_basis_points: number;
                fee_recipient: string;
                platform_fee_basis_points: number;
                platform_fee_recipient: string;
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
        roles: readonly ["admin", "minter", "asset", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/pack").Pack>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<Abi>;
    };
    readonly "signature-drop": {
        name: "SignatureDrop";
        contractType: "signature-drop";
        schema: {
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
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/signature-drop").SignatureDrop>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            name: string;
            type: string;
            anonymous?: undefined;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            } | {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            type: string;
            outputs?: undefined;
            stateMutability?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly split: {
        name: "Split";
        contractType: "split";
        schema: {
            deploy: import("zod").ZodObject<{
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
                recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
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
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
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
            output: import("zod").ZodObject<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                recipients: import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    address: string;
                    sharesBps: number;
                }, {
                    address: string;
                    sharesBps: number;
                }>, "many">;
            }, "strip", import("zod").ZodUnknown, import("zod").objectOutputType<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                recipients: import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    address: string;
                    sharesBps: number;
                }, {
                    address: string;
                    sharesBps: number;
                }>, "many">;
            }, import("zod").ZodUnknown, "strip">, import("zod").objectInputType<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                recipients: import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
                    address: string;
                    sharesBps: number;
                }, {
                    address: string;
                    sharesBps: number;
                }>, "many">;
            }, import("zod").ZodUnknown, "strip">>;
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
                recipients: import("zod").ZodEffects<import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                    sharesBps: import("zod").ZodNumber;
                }, "strip", import("zod").ZodTypeAny, {
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
            }, "strip", import("zod").ZodTypeAny, {
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
        roles: readonly ["admin"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/split").Split>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[]>;
    };
    readonly "token-drop": {
        name: "DropERC20";
        contractType: "token-drop";
        schema: {
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
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
                primary_sale_recipient: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                symbol: string;
                name: string;
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
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                symbol: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                symbol: string;
                name: string;
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
                merkle: import("zod").ZodDefault<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                symbol: import("zod").ZodDefault<import("zod").ZodString>;
            }, "strip", import("zod").ZodTypeAny, {
                symbol: string;
                name: string;
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
                merkle?: Record<string, string> | undefined;
                symbol?: string | undefined;
            }>;
        };
        roles: readonly ["admin", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/token-drop").TokenDrop>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly token: {
        name: "TokenERC20";
        contractType: "token";
        schema: {
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
                platform_fee_basis_points: import("zod").ZodDefault<import("zod").ZodNumber>;
                platform_fee_recipient: import("zod").ZodDefault<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
                primary_sale_recipient: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                symbol: string;
                name: string;
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
        };
        roles: readonly ["admin", "minter", "transfer"];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/token").Token>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: ({
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            } | {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            })[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: ({
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            } | {
                internalType: string;
                name: string;
                type: string;
                components?: undefined;
            })[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[]>;
    };
    readonly vote: {
        name: "VoteERC20";
        contractType: "vote";
        schema: {
            deploy: import("zod").ZodObject<{
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
                voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_token_address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
                proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
                trusted_forwarders: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                trusted_forwarders: string[];
                voting_delay_in_blocks: number;
                voting_period_in_blocks: number;
                voting_token_address: string;
                voting_quorum_fraction: number;
                proposal_token_threshold: string;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                app_uri?: string | undefined;
                social_urls?: Record<string, string> | undefined;
            }, {
                name: string;
                voting_token_address: string;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                app_uri?: string | undefined;
                social_urls?: Record<string, string> | undefined;
                voting_delay_in_blocks?: number | undefined;
                voting_period_in_blocks?: number | undefined;
                voting_quorum_fraction?: number | undefined;
                proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
                trusted_forwarders?: string[] | undefined;
            }>;
            output: import("zod").ZodObject<{
                name: import("zod").ZodString;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                image: import("zod").ZodOptional<import("zod").ZodString>;
                external_link: import("zod").ZodOptional<import("zod").ZodString>;
                app_uri: import("zod").ZodOptional<import("zod").ZodString>;
                social_urls: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
                voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_token_address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
                proposal_token_threshold: import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                voting_delay_in_blocks: number;
                voting_period_in_blocks: number;
                voting_token_address: string;
                voting_quorum_fraction: number;
                proposal_token_threshold: import("ethers").BigNumber;
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                app_uri?: string | undefined;
                social_urls?: Record<string, string> | undefined;
            }, {
                name: string;
                voting_token_address: string;
                proposal_token_threshold: (string | number | bigint | import("ethers").BigNumber) & (string | number | bigint | import("ethers").BigNumber | undefined);
                description?: string | undefined;
                image?: string | undefined;
                external_link?: string | undefined;
                app_uri?: string | undefined;
                social_urls?: Record<string, string> | undefined;
                voting_delay_in_blocks?: number | undefined;
                voting_period_in_blocks?: number | undefined;
                voting_quorum_fraction?: number | undefined;
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
                voting_delay_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_period_in_blocks: import("zod").ZodDefault<import("zod").ZodNumber>;
                voting_token_address: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
                voting_quorum_fraction: import("zod").ZodDefault<import("zod").ZodNumber>;
                proposal_token_threshold: import("zod").ZodDefault<import("zod").ZodEffects<import("zod").ZodEffects<import("zod").ZodUnion<[import("zod").ZodString, import("zod").ZodNumber, import("zod").ZodBigInt, import("zod").ZodType<import("ethers").BigNumber, import("zod").ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>, string, string | number | bigint | import("ethers").BigNumber>>;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                voting_delay_in_blocks: number;
                voting_period_in_blocks: number;
                voting_token_address: string;
                voting_quorum_fraction: number;
                proposal_token_threshold: string;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                app_uri?: string | undefined;
                social_urls?: Record<string, string> | undefined;
            }, {
                name: string;
                voting_token_address: string;
                description?: string | undefined;
                image?: any;
                external_link?: string | undefined;
                app_uri?: string | undefined;
                social_urls?: Record<string, string> | undefined;
                voting_delay_in_blocks?: number | undefined;
                voting_period_in_blocks?: number | undefined;
                voting_quorum_fraction?: number | undefined;
                proposal_token_threshold?: string | number | bigint | import("ethers").BigNumber | undefined;
            }>;
        };
        roles: readonly [];
        initialize: (network: NetworkInput, address: string, storage: ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>, options?: {
            supportedChains?: {
                rpc: string[];
                chainId: number;
                nativeCurrency: {
                    symbol: string;
                    name: string;
                    decimals: number;
                };
                slug: string;
            }[] | undefined;
            clientId?: string | undefined;
            secretKey?: string | undefined;
            readonlySettings?: {
                rpcUrl: string;
                chainId?: number | undefined;
            } | undefined;
            gasSettings?: {
                maxPriceInGwei?: number | undefined;
                speed?: "standard" | "fast" | "fastest" | undefined;
            } | undefined;
            gasless?: {
                openzeppelin: {
                    relayerUrl: string;
                    relayerForwarderAddress?: string | undefined;
                    useEOAForwarder?: boolean | undefined;
                    domainName?: string | undefined;
                    domainVersion?: string | undefined;
                };
                experimentalChainlessSupport?: boolean | undefined;
            } | {
                biconomy: {
                    apiId: string;
                    apiKey: string;
                    deadlineSeconds?: number | undefined;
                };
            } | undefined;
            gatewayUrls?: string[] | undefined;
        } | undefined) => Promise<import("./prebuilt-implementations/vote").Vote>;
        getAbi: (address: Address, provider: providers.Provider, storage: ThirdwebStorage) => Promise<import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[] | ({
            inputs: never[];
            stateMutability: string;
            type: string;
            name?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            inputs: never[];
            name: string;
            type: string;
            stateMutability?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            inputs: never[];
            name: string;
            outputs: {
                components: {
                    internalType: string;
                    name: string;
                    type: string;
                }[];
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            anonymous?: undefined;
            outputs?: undefined;
        })[]>;
    };
};
/**
 * @internal
 */
export declare function getContractTypeForRemoteName(name: string): ContractType;
export declare function getContractName(type: PrebuiltContractType): string | undefined;
export type PrebuiltContractsMap = typeof PREBUILT_CONTRACTS_MAP;
export type PrebuiltContractsInstances = {
    [K in keyof PrebuiltContractsMap]: Awaited<ReturnType<(typeof PREBUILT_CONTRACTS_MAP)[K]["initialize"]>>;
};
export type ContractsMap = typeof CONTRACTS_MAP;
export type ValidContractInstance = Awaited<ReturnType<ContractsMap[keyof PrebuiltContractsMap]["initialize"]>> | SmartContractType;
export type SchemaForPrebuiltContractType<TContractType extends PrebuiltContractType> = PrebuiltContractsMap[TContractType]["schema"];
export type ContractForPrebuiltContractType<TContractType extends PrebuiltContractType> = PrebuiltContractsInstances[TContractType];
export type ContractType = keyof ContractsMap;
export type DeploySchemaForPrebuiltContractType<TContractType extends PrebuiltContractType> = SchemaForPrebuiltContractType<TContractType>["deploy"];
export {};
//# sourceMappingURL=index.d.ts.map