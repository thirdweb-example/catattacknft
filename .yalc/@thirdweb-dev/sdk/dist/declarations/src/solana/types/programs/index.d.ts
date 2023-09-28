import { Creator } from "@metaplex-foundation/js";
import { z } from "zod";
/**
 * @internal
 */
export declare const CommonContractSchema: z.ZodObject<{
    name: z.ZodString;
    symbol: z.ZodOptional<z.ZodString>;
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
}, "strip", z.ZodTypeAny, {
    name: string;
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
}, {
    name: string;
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
}>;
/**
 * @internal
 */
export declare const CommonContractOutputSchema: z.ZodObject<{
    symbol: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    external_link: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodUnknown, z.objectOutputType<{
    symbol: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    external_link: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
}, z.ZodUnknown, "strip">, z.objectInputType<{
    symbol: z.ZodOptional<z.ZodString>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    external_link: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
}, z.ZodUnknown, "strip">>;
/**
 * @internal
 */
export declare const CreatorInputSchema: z.ZodObject<{
    address: z.ZodString;
    share: z.ZodNumber;
    verified: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    address: string;
    share: number;
    verified: boolean;
}, {
    address: string;
    share: number;
    verified?: boolean | undefined;
}>;
/**
 * @internal
 */
export declare const NFTCollectionMetadataInputSchema: z.ZodObject<{
    symbol: z.ZodOptional<z.ZodString>;
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
    creators: z.ZodDefault<z.ZodArray<z.ZodObject<{
        address: z.ZodString;
        share: z.ZodNumber;
        verified: z.ZodDefault<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        share: number;
        verified: boolean;
    }, {
        address: string;
        share: number;
        verified?: boolean | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: string;
    creators: {
        address: string;
        share: number;
        verified: boolean;
    }[];
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
}, {
    name: string;
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    creators?: {
        address: string;
        share: number;
        verified?: boolean | undefined;
    }[] | undefined;
}>;
/**
 * @internal
 */
export type NFTCollectionMetadataInput = z.input<typeof NFTCollectionMetadataInputSchema>;
/**
 * @internal
 */
export declare const TokenMetadataInputSchema: z.ZodObject<{
    symbol: z.ZodOptional<z.ZodString>;
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
    decimals: z.ZodDefault<z.ZodNumber>;
    initialSupply: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, string, string | number>;
}, "strip", z.ZodTypeAny, {
    name: string;
    decimals: number;
    initialSupply: string;
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
}, {
    name: string;
    initialSupply: string | number;
    symbol?: string | undefined;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    decimals?: number | undefined;
}>;
/**
 * @public
 */
export type TokenMetadataInput = z.input<typeof TokenMetadataInputSchema>;
/**
 * @public
 */
export type CreatorInput = z.input<typeof CreatorInputSchema>;
/**
 * @public
 */
export type UpdateCreatorInput = {
    creators: CreatorInput[];
    updateAll: boolean;
};
/**
 * @public
 */
export type UpdateRoyaltySettingsInput = {
    sellerFeeBasisPoints: number;
    updateAll: boolean;
};
/**
 * @public
 */
export type CreatorOutput = Omit<Creator, "address"> & {
    readonly address: string;
};
/**
 * @internal
 */
export type RegisteredProgram = {
    deployer: string;
    programAddress: string;
    programName: string;
    programType: string;
    visible: boolean;
};
//# sourceMappingURL=index.d.ts.map