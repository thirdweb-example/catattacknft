import { z } from "zod";
export declare const AddressOrEnsSchema: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
export type AddressOrEns = z.input<typeof AddressOrEnsSchema>;
//# sourceMappingURL=AddressOrEnsSchema.d.ts.map