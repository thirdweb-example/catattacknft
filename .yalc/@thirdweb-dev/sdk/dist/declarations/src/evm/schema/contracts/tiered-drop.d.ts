import { z } from "zod";
/**
 * @internal
 */
export declare const TieredDropPayloadSchema: z.ZodObject<{
    to: z.ZodEffects<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>, string, string>;
    primarySaleRecipient: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    uid: z.ZodEffects<z.ZodOptional<z.ZodString>, string, string | undefined>;
    price: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>>;
    currencyAddress: z.ZodDefault<z.ZodType<string, z.ZodTypeDef, string>>;
    mintStartTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    mintEndTime: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, import("ethers").BigNumber, Date>, z.ZodEffects<z.ZodNumber, import("ethers").BigNumber, number>]>>;
    tierPriority: z.ZodArray<z.ZodString, "many">;
    royaltyRecipient: z.ZodDefault<z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>>;
    royaltyBps: z.ZodDefault<z.ZodNumber>;
    quantity: z.ZodDefault<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<import("ethers").BigNumber, z.ZodTypeDef, import("ethers").BigNumber>]>, import("ethers").BigNumber, string | number | bigint | import("ethers").BigNumber>>;
}, "strip", z.ZodTypeAny, {
    royaltyRecipient: string;
    royaltyBps: number;
    to: string;
    primarySaleRecipient: string;
    quantity: import("ethers").BigNumber;
    uid: string;
    price: string;
    currencyAddress: string;
    mintStartTime: import("ethers").BigNumber;
    mintEndTime: import("ethers").BigNumber;
    tierPriority: string[];
}, {
    to: string;
    tierPriority: string[];
    primarySaleRecipient?: string | undefined;
    uid?: string | undefined;
    price?: string | number | undefined;
    currencyAddress?: string | undefined;
    mintStartTime?: number | Date | undefined;
    mintEndTime?: number | Date | undefined;
    royaltyRecipient?: string | undefined;
    royaltyBps?: number | undefined;
    quantity?: string | number | bigint | import("ethers").BigNumber | undefined;
}>;
/**
 * @public
 */
export type TieredDropPayloadInput = z.input<typeof TieredDropPayloadSchema>;
/**
 * @internal
 */
export type TieredDropPayloadOutput = z.output<typeof TieredDropPayloadSchema>;
/**
 * @internal
 */
export type TieredDropPayloadWithSignature = {
    payload: TieredDropPayloadOutput;
    signature: string;
};
export declare const GenericRequest: {
    name: string;
    type: string;
}[];
//# sourceMappingURL=tiered-drop.d.ts.map