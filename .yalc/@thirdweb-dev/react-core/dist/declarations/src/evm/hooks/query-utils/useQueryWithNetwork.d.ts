import { QueryFunction, QueryKey, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
/** @internal */
export declare function useQueryWithNetwork<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(queryKey: TQueryKey, queryFn: QueryFunction<TQueryFnData, TQueryKey>, options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, "queryKey" | "queryFn">): UseQueryResult<TData, TError>;
//# sourceMappingURL=useQueryWithNetwork.d.ts.map