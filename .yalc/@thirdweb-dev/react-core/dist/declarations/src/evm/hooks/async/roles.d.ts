import { RequiredParam } from "../../../core/query-utils/required-param";
import { WalletAddress } from "../../types";
import type { Role, ValidContractInstance } from "@thirdweb-dev/sdk";
import type { Vote } from "@thirdweb-dev/sdk";
import type { SmartContract } from "@thirdweb-dev/sdk";
/** **********************/
/**         UTILS       **/
/** **********************/
/**
 * @internal
 */
export type ContractWithRoles = Exclude<ValidContractInstance, Vote>;
/**
 * @internal
 */
export type RolesForContract<TContract extends ContractWithRoles> = TContract extends SmartContract ? // eslint-disable-next-line @typescript-eslint/ban-types
Role | (string & {}) : NonNullable<Exclude<TContract, SmartContract>["roles"]>["roles"][number];
/** **********************/
/**     READ  HOOKS     **/
/** **********************/
/**
 * Get all members of all roles
 *
 * @example
 * ```jsx
 * const { data: roles, isLoading, error } = useAllRoleMembers(contract);
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a list of addresses for all supported roles on the contract.
 * @twfeature PermissionsEnumerable
 * @see {@link https://portal.thirdweb.com/react/react.useallrolemembers?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useAllRoleMembers<TContract extends ContractWithRoles>(contract: RequiredParam<TContract>): import("@tanstack/react-query").UseQueryResult<Awaited<Record<RolesForContract<TContract>, string[]>>, unknown>;
/**
 * Get all members of a specific role
 *
 * @example
 * ```jsx
 * const { data: members, isLoading, error } = useRoleMembers(SmartContract, "admin");
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @param role - the role to get the members of, see {@link Role}
 * @returns a list of addresses that are members of the role
 * @twfeature Permissions
 * @see {@link https://portal.thirdweb.com/react/react.userolemembers?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useRoleMembers<TContract extends ContractWithRoles>(contract: RequiredParam<TContract>, role: RolesForContract<TContract>): import("@tanstack/react-query").UseQueryResult<string[], unknown>;
/**
 * Check if an address is a member of a specific role
 *
 * @example
 * ```jsx
 * const { data: isMember, isLoading, error } = useIsAddressRole(contract, "admin", "{{wallet_address}}");
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @param role - the role to check the member against, see {@link Role}
 * @param walletAddress - the address to check
 * @returns true if the address is a member of the role, or false if not
 * @twfeature PermissionsEnumerable
 * @see {@link https://portal.thirdweb.com/react/react.useisaddressrole?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useIsAddressRole<TContract extends ContractWithRoles>(contract: RequiredParam<TContract>, role: RolesForContract<TContract>, walletAddress: RequiredParam<WalletAddress>): boolean;
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Overwrite the list of members for specific roles
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: overwriteRoles,
 *     isLoading,
 *     error,
 *   } = useSetAllRoleMembers(contract);
 *
 *   if (error) {
 *     console.error("failed to overwrite roles", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => overwriteRoles({ rolesWithAddresses: { minter: ["{{wallet_address}"] } })}
 *     >
 *       Overwrite Roles
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to overwrite all roles on the contract
 * @twfeature Permissions
 * @beta
 */
export declare function useSetAllRoleMembers<TContract extends ContractWithRoles>(contract: RequiredParam<TContract>): import("@tanstack/react-query").UseMutationResult<void, unknown, { [role in RolesForContract<TContract>]: string[]; }, unknown>;
/**
 * Grant a role to a specific address
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: grantRole,
 *     isLoading,
 *     error,
 *   } = useGrantRole(contract);
 *
 *   if (error) {
 *     console.error("failed to grant role", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => grantRole({ role: "admin", address: {{wallet_address}} })}
 *     >
 *       Grant Role
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to grant a member of a role on the contract
 * @twfeature Permissions | PermissionsEnumerable
 * @see {@link https://portal.thirdweb.com/react/react.usegrantrole?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useGrantRole<TContract extends ContractWithRoles>(contract: RequiredParam<TContract>): import("@tanstack/react-query").UseMutationResult<void, unknown, {
    role: RolesForContract<TContract>;
    address: WalletAddress;
}, unknown>;
/**
 * Revoke a role from a specific address
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: revokeRole,
 *     isLoading,
 *     error,
 *   } = useRevokeRole(contract);
 *
 *   if (error) {
 *     console.error("failed to revoke role", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => revokeRole({ role: "admin", address: {{wallet_address}} })}
 *     >
 *       Revoke Role
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link SmartContract}
 * @returns a mutation object that can be used to revoke a role from a member on the contract
 * @twfeature Permissions | PermissionsEnumerable
 * @see {@link https://portal.thirdweb.com/react/react.userevokerole?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useRevokeRole<TContract extends ContractWithRoles>(contract: RequiredParam<TContract>): import("@tanstack/react-query").UseMutationResult<void, unknown, {
    role: RolesForContract<TContract>;
    address: WalletAddress;
}, unknown>;
//# sourceMappingURL=roles.d.ts.map