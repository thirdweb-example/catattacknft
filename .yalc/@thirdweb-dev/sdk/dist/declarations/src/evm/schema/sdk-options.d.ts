import { z } from "zod";
/**
 * @public
 */
export declare const SDKOptionsSchema: z.ZodDefault<z.ZodObject<{
    supportedChains: z.ZodDefault<z.ZodArray<z.ZodObject<{
        rpc: z.ZodArray<z.ZodString, "many">;
        chainId: z.ZodNumber;
        nativeCurrency: z.ZodObject<{
            name: z.ZodString;
            symbol: z.ZodString;
            decimals: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            symbol: string;
            name: string;
            decimals: number;
        }, {
            symbol: string;
            name: string;
            decimals: number;
        }>;
        slug: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        rpc: string[];
        chainId: number;
        nativeCurrency: {
            symbol: string;
            name: string;
            decimals: number;
        };
        slug: string;
    }, {
        rpc: string[];
        chainId: number;
        nativeCurrency: {
            symbol: string;
            name: string;
            decimals: number;
        };
        slug: string;
    }>, "many">>;
    clientId: z.ZodOptional<z.ZodString>;
    secretKey: z.ZodOptional<z.ZodString>;
    readonlySettings: z.ZodOptional<z.ZodObject<{
        rpcUrl: z.ZodString;
        chainId: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        rpcUrl: string;
        chainId?: number | undefined;
    }, {
        rpcUrl: string;
        chainId?: number | undefined;
    }>>;
    gasSettings: z.ZodDefault<z.ZodObject<{
        maxPriceInGwei: z.ZodDefault<z.ZodNumber>;
        speed: z.ZodDefault<z.ZodEnum<["standard", "fast", "fastest"]>>;
    }, "strip", z.ZodTypeAny, {
        maxPriceInGwei: number;
        speed: "standard" | "fast" | "fastest";
    }, {
        maxPriceInGwei?: number | undefined;
        speed?: "standard" | "fast" | "fastest" | undefined;
    }>>;
    gasless: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
        openzeppelin: z.ZodObject<{
            relayerUrl: z.ZodString;
            relayerForwarderAddress: z.ZodOptional<z.ZodString>;
            useEOAForwarder: z.ZodDefault<z.ZodBoolean>;
            domainName: z.ZodDefault<z.ZodString>;
            domainVersion: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            relayerUrl: string;
            useEOAForwarder: boolean;
            domainName: string;
            domainVersion: string;
            relayerForwarderAddress?: string | undefined;
        }, {
            relayerUrl: string;
            relayerForwarderAddress?: string | undefined;
            useEOAForwarder?: boolean | undefined;
            domainName?: string | undefined;
            domainVersion?: string | undefined;
        }>;
        experimentalChainlessSupport: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        openzeppelin: {
            relayerUrl: string;
            useEOAForwarder: boolean;
            domainName: string;
            domainVersion: string;
            relayerForwarderAddress?: string | undefined;
        };
        experimentalChainlessSupport: boolean;
    }, {
        openzeppelin: {
            relayerUrl: string;
            relayerForwarderAddress?: string | undefined;
            useEOAForwarder?: boolean | undefined;
            domainName?: string | undefined;
            domainVersion?: string | undefined;
        };
        experimentalChainlessSupport?: boolean | undefined;
    }>, z.ZodObject<{
        biconomy: z.ZodObject<{
            apiId: z.ZodString;
            apiKey: z.ZodString;
            deadlineSeconds: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            apiId: string;
            apiKey: string;
            deadlineSeconds: number;
        }, {
            apiId: string;
            apiKey: string;
            deadlineSeconds?: number | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        biconomy: {
            apiId: string;
            apiKey: string;
            deadlineSeconds: number;
        };
    }, {
        biconomy: {
            apiId: string;
            apiKey: string;
            deadlineSeconds?: number | undefined;
        };
    }>]>>;
    gatewayUrls: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    supportedChains: {
        rpc: string[];
        chainId: number;
        nativeCurrency: {
            symbol: string;
            name: string;
            decimals: number;
        };
        slug: string;
    }[];
    gasSettings: {
        maxPriceInGwei: number;
        speed: "standard" | "fast" | "fastest";
    };
    clientId?: string | undefined;
    secretKey?: string | undefined;
    readonlySettings?: {
        rpcUrl: string;
        chainId?: number | undefined;
    } | undefined;
    gasless?: {
        openzeppelin: {
            relayerUrl: string;
            useEOAForwarder: boolean;
            domainName: string;
            domainVersion: string;
            relayerForwarderAddress?: string | undefined;
        };
        experimentalChainlessSupport: boolean;
    } | {
        biconomy: {
            apiId: string;
            apiKey: string;
            deadlineSeconds: number;
        };
    } | undefined;
    gatewayUrls?: string[] | undefined;
}, {
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
}>>;
/**
 * @public
 * All these configuration options are optional with sane defaults:
 * @example
 * ```javascript
 * {
 *   readonlySettings: {
 *     rpcUrl, // force read calls to go through your own RPC url
 *     chainId, // reduce RPC calls by sepcifying your chain ID
 *   },
 *   gasSettings: {
 *     maxPriceInGwei, // Maximum gas price for transactions (default 300 gwei)
 *     speed, // the tx speed setting: 'standard'|'fast|'fastest' (default: 'fastest')
 *   },
 *   gasless: {
 *     // By specifying a gasless configuration - all transactions will get forwarded to enable gasless transactions
 *     openzeppelin: {
 *       relayerUrl, // your OZ Defender relayer URL
 *       relayerForwarderAddress, // the OZ defender relayer address (defaults to the standard one)
 *     },
 *     biconomy: {
 *       apiId, // your Biconomy API Id
 *       apiKey, // your Biconomy API Key
 *       deadlineSeconds, // your Biconomy timeout preference
 *     },
 *   },
 * }
 * ```
 */
export type SDKOptions = z.input<typeof SDKOptionsSchema>;
/**
 * @internal
 */
export type SDKOptionsOutput = z.output<typeof SDKOptionsSchema>;
/**
 * @public
 */
//# sourceMappingURL=sdk-options.d.ts.map