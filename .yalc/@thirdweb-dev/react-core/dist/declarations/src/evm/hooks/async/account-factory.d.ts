import { RequiredParam } from "../../../core/query-utils/required-param";
import { WalletAddress } from "../../types";
import { UseQueryResult } from "@tanstack/react-query";
import type { SmartContract } from "@thirdweb-dev/sdk";
import type { BytesLike } from "ethers";
/** **********************/
/**       READ HOOKS    **/
/** **********************/
/**
 * Get all accounts
 *
 * @example
 * ```javascript
 * const { data: accounts, isLoading, error } = useAccounts(contract);
 * ```
 *
 * @param contract - an instance of a account factory contract
 * @returns a response object that includes an array of all accounts with their associated admin
 * @twfeature AccountFactory
 * @see {@link https://portal.thirdweb.com/react/react.useaccounts?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useAccounts(contract: RequiredParam<SmartContract>): UseQueryResult<string[]>;
/**
 * Get all accounts associated with the provided address
 *
 * @example
 * ```javascript
 * const { data: accountsForAddress, isLoading, error } = useAccountsForAddress(contract, "{{account_address}}");
 * ```
 *
 * @param contract - an instance of a account factory contract
 * @returns a response object that includes an array of all accounts associated with the adress
 * @twfeature AccountFactory
 * @see {@link https://portal.thirdweb.com/react/react.useaccountsforaddress?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useAccountsForAddress(contract: RequiredParam<SmartContract>, address: RequiredParam<WalletAddress>): UseQueryResult<string[]>;
/**
 * Check if a account has been deployed for the given admin
 *
 * @example
 * ```javascript
 * const { data: isAccountDeployed, isLoading, error } = useIsAccountDeployed(contract);
 * ```
 *
 * @param contract - an instance of a account factory contract
 * @returns a boolean indicating if a account has been deployed for the given admin
 * @twfeature AccountFactory
 * @see {@link https://portal.thirdweb.com/react/react.useisaccountdeployed?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useIsAccountDeployed(contract: RequiredParam<SmartContract>, admin: RequiredParam<WalletAddress>, extraData?: BytesLike): UseQueryResult<boolean>;
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Create a account
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: createAccount,
 *     isLoading,
 *     error,
 *   } = useCreateAccount(contract);
 *
 *   if (error) {
 *     console.error("failed to create account", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => createAccount("0x...")}
 *     >
 *       Create Account
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a account factory contract
 * @returns a mutation object that can be used to create a account
 * @twfeature AccountFactory
 * @see {@link https://portal.thirdweb.com/react/react.usecreateaccount?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useCreateAccount(contract: RequiredParam<SmartContract>): import("@tanstack/react-query").UseMutationResult<import("@thirdweb-dev/sdk").TransactionResultWithAddress, unknown, string, unknown>;
//# sourceMappingURL=account-factory.d.ts.map