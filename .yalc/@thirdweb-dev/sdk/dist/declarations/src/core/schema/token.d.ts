import { z } from "zod";
/**
 * @internal
 */
export declare const CommonTokenInputSchema: z.ZodObject<{
    name: z.ZodString;
    symbol: z.ZodString;
    decimals: z.ZodNumber;
    description: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodUnion<[z.ZodUnion<[z.ZodTypeAny, z.ZodObject<{
        data: z.ZodUnion<[z.ZodTypeAny, z.ZodString]>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
        data?: any;
    }, {
        name: string;
        data?: any;
    }>]>, z.ZodString]>>;
    external_link: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    symbol: string;
    name: string;
    decimals: number;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
}, {
    symbol: string;
    name: string;
    decimals: number;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
}>;
/**
 * @internal
 */
export declare const CurrencyValueSchema: z.ZodObject<{
    value: z.ZodString;
    displayValue: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    displayValue: string;
}, {
    value: string;
    displayValue: string;
}>;
/**
 * Currency value and display value
 * @public
 */
export type CurrencyValue = z.input<typeof CurrencyValueSchema>;
/**
 * @internal
 */
export declare const CommonTokenOutputSchema: z.ZodObject<{
    symbol: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    decimals: z.ZodNumber;
    external_link: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    supply: z.ZodObject<{
        value: z.ZodString;
        displayValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        displayValue: string;
    }, {
        value: string;
        displayValue: string;
    }>;
}, "strip", z.ZodUnknown, z.objectOutputType<{
    symbol: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    decimals: z.ZodNumber;
    external_link: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    supply: z.ZodObject<{
        value: z.ZodString;
        displayValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        displayValue: string;
    }, {
        value: string;
        displayValue: string;
    }>;
}, z.ZodUnknown, "strip">, z.objectInputType<{
    symbol: z.ZodString;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    decimals: z.ZodNumber;
    external_link: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    supply: z.ZodObject<{
        value: z.ZodString;
        displayValue: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        displayValue: string;
    }, {
        value: string;
        displayValue: string;
    }>;
}, z.ZodUnknown, "strip">>;
/**
 * Metadata for a token
 * @public
 */
export type TokenMetadata = z.output<typeof CommonTokenOutputSchema>;
//# sourceMappingURL=token.d.ts.map