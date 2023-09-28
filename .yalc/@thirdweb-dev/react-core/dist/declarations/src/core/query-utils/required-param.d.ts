/**
 * Makes a parameter required to be passed, but still allows it to be null or undefined.
 *
 * @beta
 */
export type RequiredParam<T> = T | null | undefined;
export declare function requiredParamInvariant<TValue>(condition: RequiredParam<TValue>, message?: string): asserts condition;
//# sourceMappingURL=required-param.d.ts.map