import { BigNumber } from "ethers";
import { z } from "zod";
export declare const RawDateSchema: z.ZodUnion<[z.ZodEffects<z.ZodDate, BigNumber, Date>, z.ZodEffects<z.ZodNumber, BigNumber, number>]>;
/**
 * Default to now
 */
export declare const StartDateSchema: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, BigNumber, Date>, z.ZodEffects<z.ZodNumber, BigNumber, number>]>>;
/**
 * Default to 10 years from now
 */
export declare const EndDateSchema: z.ZodDefault<z.ZodUnion<[z.ZodEffects<z.ZodDate, BigNumber, Date>, z.ZodEffects<z.ZodNumber, BigNumber, number>]>>;
//# sourceMappingURL=RawDateSchema.d.ts.map