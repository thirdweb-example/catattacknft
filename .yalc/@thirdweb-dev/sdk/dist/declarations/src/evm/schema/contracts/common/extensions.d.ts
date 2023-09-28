import { z } from "zod";
/**
 * @internal
 */
export declare const ExtensionMetadataInput: z.ZodObject<{
    name: z.ZodString;
    metadataURI: z.ZodString;
    implementation: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
}, "strip", z.ZodTypeAny, {
    name: string;
    metadataURI: string;
    implementation: string;
}, {
    name: string;
    metadataURI: string;
    implementation: string;
}>;
/**
 * @internal
 */
export declare const ExtensionFunctionInput: z.ZodObject<{
    functionSelector: z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>;
    functionSignature: z.ZodString;
}, "strip", z.ZodTypeAny, {
    functionSelector: (string | number[]) & (string | number[] | undefined);
    functionSignature: string;
}, {
    functionSelector: (string | number[]) & (string | number[] | undefined);
    functionSignature: string;
}>;
/**
 * @internal
 */
export declare const ExtensionInput: z.ZodObject<{
    metadata: z.ZodObject<{
        name: z.ZodString;
        metadataURI: z.ZodString;
        implementation: z.ZodUnion<[z.ZodType<string, z.ZodTypeDef, string>, z.ZodType<`0x${string}`, z.ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        metadataURI: string;
        implementation: string;
    }, {
        name: string;
        metadataURI: string;
        implementation: string;
    }>;
    functions: z.ZodArray<z.ZodObject<{
        functionSelector: z.ZodUnion<[z.ZodArray<z.ZodNumber, "many">, z.ZodString]>;
        functionSignature: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        functionSelector: (string | number[]) & (string | number[] | undefined);
        functionSignature: string;
    }, {
        functionSelector: (string | number[]) & (string | number[] | undefined);
        functionSignature: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    metadata: {
        name: string;
        metadataURI: string;
        implementation: string;
    };
    functions: {
        functionSelector: (string | number[]) & (string | number[] | undefined);
        functionSignature: string;
    }[];
}, {
    metadata: {
        name: string;
        metadataURI: string;
        implementation: string;
    };
    functions: {
        functionSelector: (string | number[]) & (string | number[] | undefined);
        functionSignature: string;
    }[];
}>;
//# sourceMappingURL=extensions.d.ts.map