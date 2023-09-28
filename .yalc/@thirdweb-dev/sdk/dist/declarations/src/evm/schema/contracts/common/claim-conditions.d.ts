import { BigNumber, BigNumberish } from "ethers";
import { z } from "zod";
/**
 * @internal
 */
export declare const ClaimConditionMetadataSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodUnknown, z.objectOutputType<{
    name: z.ZodOptional<z.ZodString>;
}, z.ZodUnknown, "strip">, z.objectInputType<{
    name: z.ZodOptional<z.ZodString>;
}, z.ZodUnknown, "strip">>;
/**
 * @internal
 */
export declare const ClaimConditionInputSchema: z.ZodObject<{
    startTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, BigNumber, Date>, z.ZodEffects<z.ZodNumber, BigNumber, number>]>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    maxClaimableSupply: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    maxClaimablePerWallet: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    waitInSeconds: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>;
    merkleRootHash: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>>;
    snapshot: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
        address: string;
        maxClaimable: string;
        price?: string | undefined;
        currencyAddress?: string | undefined;
    }[], string[]>, z.ZodArray<z.ZodObject<{
        address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        maxClaimable: z.ZodDefault<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
        price: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
        currencyAddress: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        maxClaimable: string;
        price?: string | undefined;
        currencyAddress?: string | undefined;
    }, {
        address: string;
        maxClaimable?: string | number | undefined;
        price?: string | number | undefined;
        currencyAddress?: string | undefined;
    }>, "many">]>>>;
    metadata: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodUnknown, z.objectOutputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip">>>;
}, "strip", z.ZodTypeAny, {
    maxClaimableSupply: string;
    startTime: BigNumber;
    price: string;
    currencyAddress: string;
    maxClaimablePerWallet: string;
    waitInSeconds: string;
    merkleRootHash: (string | number[]) & (string | number[] | undefined);
    snapshot?: {
        address: string;
        maxClaimable: string;
        price?: string | undefined;
        currencyAddress?: string | undefined;
    }[] | null | undefined;
    metadata?: z.objectOutputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip"> | undefined;
}, {
    startTime?: number | Date | undefined;
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    maxClaimableSupply?: string | number | undefined;
    maxClaimablePerWallet?: string | number | undefined;
    waitInSeconds?: string | number | bigint | BigNumber | undefined;
    merkleRootHash?: string | number[] | undefined;
    snapshot?: string[] | {
        address: string;
        maxClaimable?: string | number | undefined;
        price?: string | number | undefined;
        currencyAddress?: string | undefined;
    }[] | null | undefined;
    metadata?: z.objectInputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip"> | undefined;
}>;
/**
 * @internal
 */
export declare const ClaimConditionInputArray: z.ZodArray<z.ZodObject<{
    startTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, BigNumber, Date>, z.ZodEffects<z.ZodNumber, BigNumber, number>]>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    maxClaimableSupply: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    maxClaimablePerWallet: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    waitInSeconds: z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>;
    merkleRootHash: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>>;
    snapshot: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
        address: string;
        maxClaimable: string;
        price?: string | undefined;
        currencyAddress?: string | undefined;
    }[], string[]>, z.ZodArray<z.ZodObject<{
        address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        maxClaimable: z.ZodDefault<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
        price: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
        currencyAddress: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        maxClaimable: string;
        price?: string | undefined;
        currencyAddress?: string | undefined;
    }, {
        address: string;
        maxClaimable?: string | number | undefined;
        price?: string | number | undefined;
        currencyAddress?: string | undefined;
    }>, "many">]>>>;
    metadata: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodUnknown, z.objectOutputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip">>>;
}, "strip", z.ZodTypeAny, {
    maxClaimableSupply: string;
    startTime: BigNumber;
    price: string;
    currencyAddress: string;
    maxClaimablePerWallet: string;
    waitInSeconds: string;
    merkleRootHash: (string | number[]) & (string | number[] | undefined);
    snapshot?: {
        address: string;
        maxClaimable: string;
        price?: string | undefined;
        currencyAddress?: string | undefined;
    }[] | null | undefined;
    metadata?: z.objectOutputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip"> | undefined;
}, {
    startTime?: number | Date | undefined;
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    maxClaimableSupply?: string | number | undefined;
    maxClaimablePerWallet?: string | number | undefined;
    waitInSeconds?: string | number | bigint | BigNumber | undefined;
    merkleRootHash?: string | number[] | undefined;
    snapshot?: string[] | {
        address: string;
        maxClaimable?: string | number | undefined;
        price?: string | number | undefined;
        currencyAddress?: string | undefined;
    }[] | null | undefined;
    metadata?: z.objectInputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip"> | undefined;
}>, "many">;
/**
 * @internal
 */
export declare const PartialClaimConditionInputSchema: z.ZodObject<{
    startTime: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, BigNumber, Date>, z.ZodEffects<z.ZodNumber, BigNumber, number>]>>>;
    currencyAddress: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    price: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>>;
    maxClaimableSupply: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
    maxClaimablePerWallet: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
    waitInSeconds: z.ZodOptional<z.ZodDefault<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>>>;
    merkleRootHash: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>>>;
    snapshot: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
        address: string;
        maxClaimable: string;
        price?: string | undefined;
        currencyAddress?: string | undefined;
    }[], string[]>, z.ZodArray<z.ZodObject<{
        address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        maxClaimable: z.ZodDefault<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
        price: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
        currencyAddress: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        maxClaimable: string;
        price?: string | undefined;
        currencyAddress?: string | undefined;
    }, {
        address: string;
        maxClaimable?: string | number | undefined;
        price?: string | number | undefined;
        currencyAddress?: string | undefined;
    }>, "many">]>>>>;
    metadata: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodUnknown, z.objectOutputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip">>>>;
}, "strip", z.ZodTypeAny, {
    startTime?: BigNumber | undefined;
    currencyAddress?: string | undefined;
    price?: string | undefined;
    maxClaimableSupply?: string | undefined;
    maxClaimablePerWallet?: string | undefined;
    waitInSeconds?: string | undefined;
    merkleRootHash?: string | number[] | undefined;
    snapshot?: {
        address: string;
        maxClaimable: string;
        price?: string | undefined;
        currencyAddress?: string | undefined;
    }[] | null | undefined;
    metadata?: z.objectOutputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip"> | undefined;
}, {
    startTime?: number | Date | undefined;
    currencyAddress?: string | undefined;
    price?: string | number | undefined;
    maxClaimableSupply?: string | number | undefined;
    maxClaimablePerWallet?: string | number | undefined;
    waitInSeconds?: string | number | bigint | BigNumber | undefined;
    merkleRootHash?: string | number[] | undefined;
    snapshot?: string[] | {
        address: string;
        maxClaimable?: string | number | undefined;
        price?: string | number | undefined;
        currencyAddress?: string | undefined;
    }[] | null | undefined;
    metadata?: z.objectInputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip"> | undefined;
}>;
/**
 * @internal
 */
export declare const ClaimConditionOutputSchema: z.ZodObject<{
    maxClaimableSupply: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    metadata: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodUnknown, z.objectOutputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip">, z.objectInputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip">>>;
    currencyAddress: z.ZodDefault<z.ZodString>;
    maxClaimablePerWallet: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    merkleRootHash: z.ZodDefault<z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>>;
    availableSupply: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    currentMintSupply: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
    currencyMetadata: z.ZodDefault<z.ZodObject<{
        symbol: z.ZodString;
        name: z.ZodString;
        decimals: z.ZodNumber;
        value: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
        displayValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        symbol: string;
        value: BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    }, {
        symbol: string;
        value: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
        name: string;
        decimals: number;
        displayValue: string;
    }>>;
    price: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
    waitInSeconds: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
    startTime: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, Date, string | number | bigint | BigNumber>;
    snapshot: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
        address: string;
        maxClaimable: string;
        price?: string | undefined;
        currencyAddress?: string | undefined;
    }[], string[]>, z.ZodArray<z.ZodObject<{
        address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        maxClaimable: z.ZodDefault<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
        price: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
        currencyAddress: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
    }, "strip", z.ZodTypeAny, {
        address: string;
        maxClaimable: string;
        price?: string | undefined;
        currencyAddress?: string | undefined;
    }, {
        address: string;
        maxClaimable?: string | number | undefined;
        price?: string | number | undefined;
        currencyAddress?: string | undefined;
    }>, "many">]>>>;
}, "strip", z.ZodTypeAny, {
    maxClaimableSupply: string;
    startTime: Date;
    price: BigNumber;
    currencyAddress: string;
    maxClaimablePerWallet: string;
    waitInSeconds: BigNumber;
    merkleRootHash: (string | number[]) & (string | number[] | undefined);
    availableSupply: string;
    currentMintSupply: string;
    currencyMetadata: {
        symbol: string;
        value: BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    };
    metadata?: z.objectOutputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip"> | undefined;
    snapshot?: {
        address: string;
        maxClaimable: string;
        price?: string | undefined;
        currencyAddress?: string | undefined;
    }[] | null | undefined;
}, {
    startTime: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
    price: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
    waitInSeconds: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
    maxClaimableSupply?: string | number | undefined;
    metadata?: z.objectInputType<{
        name: z.ZodOptional<z.ZodString>;
    }, z.ZodUnknown, "strip"> | undefined;
    currencyAddress?: string | undefined;
    maxClaimablePerWallet?: string | number | undefined;
    merkleRootHash?: string | number[] | undefined;
    availableSupply?: string | number | undefined;
    currentMintSupply?: string | number | undefined;
    currencyMetadata?: {
        symbol: string;
        value: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
        name: string;
        decimals: number;
        displayValue: string;
    } | undefined;
    snapshot?: string[] | {
        address: string;
        maxClaimable?: string | number | undefined;
        price?: string | number | undefined;
        currencyAddress?: string | undefined;
    }[] | null | undefined;
}>;
export type AbstractClaimConditionContractStruct = {
    startTimestamp: BigNumberish;
    maxClaimableSupply: BigNumberish;
    supplyClaimed: BigNumberish;
    maxClaimablePerWallet: BigNumberish;
    merkleRoot: string;
    pricePerToken: BigNumberish;
    currency: string;
    waitTimeInSecondsBetweenClaims?: BigNumberish;
    metadata?: string;
};
//# sourceMappingURL=claim-conditions.d.ts.map