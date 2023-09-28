import { z } from "zod";
/**
 * @internal
 */
export declare const DEFAULT_QUERY_ALL_COUNT = 100;
export declare const QueryAllParamsSchema: z.ZodDefault<z.ZodObject<{
    start: z.ZodDefault<z.ZodNumber>;
    count: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    start: number;
    count: number;
}, {
    start?: number | undefined;
    count?: number | undefined;
}>>;
/**
 * Pagination Parameters
 * @public
 */
export type QueryAllParams = Exclude<z.input<typeof QueryAllParamsSchema>, undefined>;
//# sourceMappingURL=QueryParams.d.ts.map