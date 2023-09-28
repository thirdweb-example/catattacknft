import { z } from "zod";
/**
 * @internal
 */
export declare const MerkleSchema: z.ZodObject<{
    merkle: z.ZodDefault<z.ZodRecord<z.ZodString, z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    merkle: Record<string, string>;
}, {
    merkle?: Record<string, string> | undefined;
}>;
export declare const SnapshotEntryInput: z.ZodObject<{
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
}>;
export type SnapshotEntry = z.output<typeof SnapshotEntryInput>;
export type ShardData = {
    proofs: string[];
    entries: SnapshotEntry[];
};
export type ShardedMerkleTreeInfo = {
    merkleRoot: string;
    baseUri: string;
    originalEntriesUri: string;
    shardNybbles: number;
    tokenDecimals: number;
    isShardedMerkleTree: true;
};
export type ShardedSnapshot = {
    shardedMerkleInfo: ShardedMerkleTreeInfo;
    uri: string;
};
/**
 * @internal
 */
export declare const SnapshotInputSchema: z.ZodUnion<[z.ZodEffects<z.ZodArray<z.ZodString, "many">, {
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
}>, "many">]>;
export declare const SnapshotEntryWithProofSchema: z.ZodObject<{
    address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    price: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
    currencyAddress: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
    maxClaimable: z.ZodDefault<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
    proof: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    address: string;
    proof: string[];
    maxClaimable: string;
    price?: string | undefined;
    currencyAddress?: string | undefined;
}, {
    address: string;
    proof: string[];
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    maxClaimable?: string | number | undefined;
}>;
/**
 * @internal
 */
export declare const SnapshotSchema: z.ZodObject<{
    /**
     * The merkle root
     */
    merkleRoot: z.ZodString;
    claims: z.ZodArray<z.ZodObject<{
        address: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
        price: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
        currencyAddress: z.ZodOptional<z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>>;
        maxClaimable: z.ZodDefault<z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>>;
        proof: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        address: string;
        proof: string[];
        maxClaimable: string;
        price?: string | undefined;
        currencyAddress?: string | undefined;
    }, {
        address: string;
        proof: string[];
        price?: string | number | undefined;
        currencyAddress?: string | undefined;
        maxClaimable?: string | number | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    merkleRoot: string;
    claims: {
        address: string;
        proof: string[];
        maxClaimable: string;
        price?: string | undefined;
        currencyAddress?: string | undefined;
    }[];
}, {
    merkleRoot: string;
    claims: {
        address: string;
        proof: string[];
        price?: string | number | undefined;
        currencyAddress?: string | undefined;
        maxClaimable?: string | number | undefined;
    }[];
}>;
/**
 * @internal
 */
export type SnapshotEntryWithProof = z.output<typeof SnapshotEntryWithProofSchema>;
/**
 * @internal
 */
export declare const SnapshotInfoSchema: z.ZodObject<{
    merkleRoot: z.ZodString;
    snapshotUri: z.ZodString;
}, "strip", z.ZodTypeAny, {
    merkleRoot: string;
    snapshotUri: string;
}, {
    merkleRoot: string;
    snapshotUri: string;
}>;
//# sourceMappingURL=snapshots.d.ts.map