import { z } from "zod";
/**
 * @internal
 */
export declare const PluginMapInput: z.ZodObject<{
    functionSelector: z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>;
    functionSignature: z.ZodString;
    pluginAddress: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
}, "strip", z.ZodTypeAny, {
    functionSelector: (string | number[]) & (string | number[] | undefined);
    pluginAddress: string;
    functionSignature: string;
}, {
    functionSelector: (string | number[]) & (string | number[] | undefined);
    pluginAddress: string;
    functionSignature: string;
}>;
//# sourceMappingURL=plugins.d.ts.map