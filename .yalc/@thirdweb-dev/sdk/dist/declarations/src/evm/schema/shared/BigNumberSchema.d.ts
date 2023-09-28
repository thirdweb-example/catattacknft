import { BigNumber } from "ethers";
import { z } from "zod";
export declare const BigNumberSchema: z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>;
export declare const BigNumberishSchema: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, BigNumber, string | number | bigint | BigNumber>, string, string | number | bigint | BigNumber>;
export declare const BigNumberTransformSchema: z.ZodEffects<z.ZodUnion<[z.ZodBigInt, z.ZodType<BigNumber, z.ZodTypeDef, BigNumber>]>, string, bigint | BigNumber>;
//# sourceMappingURL=BigNumberSchema.d.ts.map