import BN from "bn.js";
import { BigNumber } from "ethers";
import { z } from "zod";
/**
 * @internal
 */
export declare const isBrowser: () => boolean;
/**
 * @internal
 */
export declare const FileOrBufferUnionSchema: z.ZodTypeAny;
/**
 * @internal
 */
export declare const FileOrBufferSchema: z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
    data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    data?: any;
}, {
    name: string;
    data?: any;
}>]>;
/**
 * @internal
 */
export declare const FileOrBufferOrStringSchema: z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
    data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    data?: any;
}, {
    name: string;
    data?: any;
}>]>, z.ZodString]>;
export declare const MAX_BPS = 10000;
export declare const BytesLikeSchema: z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>;
export declare const BigNumberSchema: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>, z.ZodType<BN, z.ZodTypeDef, BN>]>, BigNumber, string | number | bigint | BigNumber | BN>;
export declare const BigNumberishSchema: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>, z.ZodType<BN, z.ZodTypeDef, BN>]>, BigNumber, string | number | bigint | BigNumber | BN>, string, string | number | bigint | BigNumber | BN>;
export declare const BigNumberTransformSchema: z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>, z.ZodType<BN, z.ZodTypeDef, BN>]>, string, bigint | BigNumber | BN>;
export declare const BasisPointsSchema: z.ZodNumber;
export declare const PercentSchema: z.ZodNumber;
export declare const HexColor: z.ZodUnion<[z.ZodString, z.ZodEffects<z.ZodString, string, string>, z.ZodString]>;
export declare const AmountSchema: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>;
/**
 * @internal
 */
export type Amount = z.input<typeof AmountSchema>;
/**
 * @internal
 */
export declare const QuantitySchema: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber]>, string, string | number>, z.ZodLiteral<"unlimited">]>>;
export type Quantity = z.output<typeof QuantitySchema>;
export declare const RawDateSchema: z.ZodEffects<z.ZodDate, BigNumber, Date>;
/**
 * Default to now
 */
export declare const StartDateSchema: z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>;
/**
 * Default to 10 years from now
 */
export declare const EndDateSchema: z.ZodDefault<z.ZodEffects<z.ZodDate, BigNumber, Date>>;
//# sourceMappingURL=shared.d.ts.map