import { AbiInput } from "../../schema/contracts/custom";
/**
 *
 * @param abi
 * @param functionName
 * @returns
 * @internal
 */
export declare function extractFunctionParamsFromAbi(abi: AbiInput, functionName: string): import("zod").objectOutputType<{
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
//# sourceMappingURL=extractFunctionParamsFromAbi.d.ts.map