import { RequiredParam } from "../../../core/query-utils/required-param";
import { UseMutationResult } from "@tanstack/react-query";
import { ValidContractInstance } from "@thirdweb-dev/sdk";
import type { providers } from "ethers";
/**
 * Get App URI
 *
 * @example
 * ```javascript
 * const { data: contractMetadata, isLoading, error } = useAppURI(contract);
 * ```
 *
 * @param contract - the {@link SmartContract} instance of the contract to get the appURI of
 * @returns a response object that includes the appURI of the contract
 * @twfeature AppURI
 * @beta
 */
export declare function useAppURI<TContract extends ValidContractInstance>(contract: RequiredParam<TContract>): import("@tanstack/react-query").UseQueryResult<string, unknown>;
/**
 * Set App URI
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const {
 *     mutate: useSetAppURI,
 *     isLoading,
 *     error,
 *   } = useSetAppURI(contract);
 *
 *   if (error) {
 *     console.error("failed to update appURI", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => useSetAppURI({ uri })}
 *     >
 *       Update App URI
 *     </button>
 *   );
 * };
 * ```
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to update the appURI of a contract
 * @twfeature AppUR
 * @beta
 */
export declare function useSetAppURI(contract: RequiredParam<ValidContractInstance>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, {
    uri: string;
}, unknown>;
//# sourceMappingURL=app.d.ts.map