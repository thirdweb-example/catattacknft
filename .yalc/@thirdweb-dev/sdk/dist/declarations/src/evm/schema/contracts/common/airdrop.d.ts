import { z } from "zod";
/**
 * @internal
 */
export declare const AirdropAddressInput: z.ZodObject<{
    address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    quantity: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
}, "strip", z.ZodTypeAny, {
    address: string;
    quantity: string;
}, {
    address: string;
    quantity?: string | number | undefined;
}>;
/**
 * @internal
 */
export declare const AirdropInputSchema: z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
    address: string;
    quantity: string;
}[], string[]>, z.ZodArray<z.ZodObject<{
    address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    quantity: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
}, "strip", z.ZodTypeAny, {
    address: string;
    quantity: string;
}, {
    address: string;
    quantity?: string | number | undefined;
}>, "many">]>;
/**
 * @internal
 */
export declare const Airdrop20ContentInput: z.ZodObject<{
    recipient: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    amount: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
}, "strip", z.ZodTypeAny, {
    recipient: string;
    amount: string;
}, {
    recipient: string;
    amount?: string | number | undefined;
}>;
/**
 * @internal
 */
export declare const Airdrop20OutputSchema: z.ZodObject<{
    successfulDropCount: z.ZodNumber;
    failedDropCount: z.ZodNumber;
    failedDrops: z.ZodArray<z.ZodObject<{
        recipient: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        amount: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    }, "strip", z.ZodTypeAny, {
        recipient: string;
        amount: string;
    }, {
        recipient: string;
        amount?: string | number | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    successfulDropCount: number;
    failedDropCount: number;
    failedDrops: {
        recipient: string;
        amount: string;
    }[];
}, {
    successfulDropCount: number;
    failedDropCount: number;
    failedDrops: {
        recipient: string;
        amount?: string | number | undefined;
    }[];
}>;
/**
 * @internal
 */
export declare const Airdrop721ContentInput: z.ZodObject<{
    recipient: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    tokenId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    tokenId: number;
    recipient: string;
}, {
    tokenId: number;
    recipient: string;
}>;
/**
 * @internal
 */
export declare const Airdrop721OutputSchema: z.ZodObject<{
    successfulDropCount: z.ZodNumber;
    failedDropCount: z.ZodNumber;
    failedDrops: z.ZodArray<z.ZodObject<{
        recipient: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        tokenId: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        tokenId: number;
        recipient: string;
    }, {
        tokenId: number;
        recipient: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    successfulDropCount: number;
    failedDropCount: number;
    failedDrops: {
        tokenId: number;
        recipient: string;
    }[];
}, {
    successfulDropCount: number;
    failedDropCount: number;
    failedDrops: {
        tokenId: number;
        recipient: string;
    }[];
}>;
/**
 * @internal
 */
export declare const Airdrop1155ContentInput: z.ZodObject<{
    recipient: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    tokenId: z.ZodNumber;
    amount: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
}, "strip", z.ZodTypeAny, {
    tokenId: number;
    recipient: string;
    amount: string;
}, {
    tokenId: number;
    recipient: string;
    amount?: string | number | undefined;
}>;
/**
 * @internal
 */
export declare const Airdrop1155OutputSchema: z.ZodObject<{
    successfulDropCount: z.ZodNumber;
    failedDropCount: z.ZodNumber;
    failedDrops: z.ZodArray<z.ZodObject<{
        recipient: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        tokenId: z.ZodNumber;
        amount: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    }, "strip", z.ZodTypeAny, {
        tokenId: number;
        recipient: string;
        amount: string;
    }, {
        tokenId: number;
        recipient: string;
        amount?: string | number | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    successfulDropCount: number;
    failedDropCount: number;
    failedDrops: {
        tokenId: number;
        recipient: string;
        amount: string;
    }[];
}, {
    successfulDropCount: number;
    failedDropCount: number;
    failedDrops: {
        tokenId: number;
        recipient: string;
        amount?: string | number | undefined;
    }[];
}>;
//# sourceMappingURL=airdrop.d.ts.map