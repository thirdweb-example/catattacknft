import type { providers } from "ethers";
import { RequiredParam } from "../../../core/query-utils/required-param";
import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import type { SignerWithPermissions, PermissionSnapshotInput, SmartContract } from "@thirdweb-dev/sdk";
import { WalletAddress } from "../../types";
/** **********************/
/**       READ HOOKS    **/
/** **********************/
/**
 * Get all signers of account
 *
 * @example
 * ```javascript
 * const { data: accounts, isLoading, error } = useAccountSigners(contract);
 * ```
 *
 * @param contract - an instance of a account
 * @returns a response object that includes an array of all signers of the provided account
 * @twfeature Account
 * @see {@link https://portal.thirdweb.com/react/react.useaccountsigners?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useAccountSigners(contract: RequiredParam<SmartContract>): UseQueryResult<SignerWithPermissions[]>;
/**
 * Get all admins of account
 *
 * @example
 * ```javascript
 * const { data: accounts, isLoading, error } = useAccountSigners(contract);
 * ```
 *
 * @param contract - an instance of a account
 * @returns a response object that includes an array of all admins of the provided account
 * @twfeature Account
 * @see {@link https://portal.thirdweb.com/react/react.useaccountadmins?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useAccountAdmins(contract: RequiredParam<SmartContract>): UseQueryResult<WalletAddress[]>;
/**
 * Get all signers and admins of account
 *
 * @example
 * ```javascript
 * const { data: accounts, isLoading, error } = useAccountSigners(contract);
 * ```
 *
 * @param contract - an instance of a account
 * @returns a response object that includes an array of all admins of the provided account
 * @twfeature Account
 * @see {@link https://portal.thirdweb.com/react/react.useaccountadmins?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useAccountAdminsAndSigners(contract: RequiredParam<SmartContract>): UseQueryResult<SignerWithPermissions[]>;
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Set the account's entire snapshot of permissions
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: setAccountSigners,
 *     isLoading,
 *     error,
 *   } = useSetAccountSigners(contract);
 *
 *   if (error) {
 *     console.error("failed to set account signers", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => setAccountSigners("0x...")}
 *     >
 *       Set Account Signers
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a account contract
 * @returns a mutation object that can be used to set the account signers
 * @twfeature Account
 * @see {@link https://portal.thirdweb.com/react/react.usesetaccountsigners?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useSetAccountSigners(contract: RequiredParam<SmartContract>): UseMutationResult<{
    receipt: providers.TransactionReceipt;
}, unknown, PermissionSnapshotInput, unknown>;
//# sourceMappingURL=account.d.ts.map