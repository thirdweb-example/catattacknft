import { AbiInput } from "../../schema/contracts/custom";
/**
 *
 * @param abi
 * @returns
 * @internal
 */
export declare function extractConstructorParamsFromAbi(abi: AbiInput): import("zod").objectOutputType<{
    type: import("zod").ZodString;
    name: import("zod").ZodDefault<import("zod").ZodString>;
    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
        type: import("zod").ZodString;
        name: import("zod").ZodDefault<import("zod").ZodString>;
    }, import("zod").ZodAny, "strip">>, "many">>;
}, import("zod").ZodAny, "strip">[];
//# sourceMappingURL=extractConstructorParamsFromAbi.d.ts.map