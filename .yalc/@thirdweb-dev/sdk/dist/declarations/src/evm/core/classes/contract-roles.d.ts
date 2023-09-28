import type { IPermissions } from "@thirdweb-dev/contracts-js";
import { Role } from "../../common/role";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * Handle contract permissions
 * @remarks Configure roles and permissions for a contract, to restrict certain actions.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const rolesAndMembers = await contract.roles.getAll();
 * await contract.roles.grantRole("admin", "0x...");
 * ```
 * @public
 */
export declare class ContractRoles<TContract extends IPermissions, TRole extends Role> implements DetectableFeature {
    featureName: "Permissions";
    private contractWrapper;
    /**
     * @internal
     * @remarks This is used for typing inside react hooks which is why it has to be public.
     */
    readonly roles: readonly TRole[];
    constructor(contractWrapper: ContractWrapper<IPermissions>, roles: readonly TRole[]);
    /** **************************
     * READ FUNCTIONS
     ****************************/
    /**
     * Get all members of all roles
     * @remarks See {@link ContractRoles.get} to get a list of addresses that are members of a specific role.
     * @example
     * ```javascript
     * const rolesAndMembers = await contract.roles.getAll();
     * ```
     * @returns A record of {@link Role}s to lists of addresses that are members of the given role.
     * @throws If the contract does not support roles this will throw an error.
     *
     * @public
     * @twfeature PermissionsEnumerable
     */
    getAll(): Promise<Record<TRole, string[]>>;
    /**
     * Get all members of a specific role
     * @remarks See {@link ContractRoles.getAll} to get get a list of addresses for all supported roles on the contract.
     * @param role - The Role to to get a memberlist for.
     * @returns The list of addresses that are members of the specific role.
     * @throws If you are requesting a role that does not exist on the contract this will throw an error.
     *
     * @example Say you want to get the list of addresses that are members of the minter role.
     * ```javascript
     * const minterAddresses = await contract.roles.get("minter");
     * ```
     *
     * @public
     * @twfeature Permissions
     */
    get(role: TRole): Promise<string[]>;
    /**
     * Overwrite the list of members for specific roles
     *
     * @remarks Every role in the list will be overwritten with the new list of addresses provided with them.
     * If you want to add or remove addresses for a single address use {@link ContractRoles.grant} and {@link ContractRoles.revoke} respectively instead.
     * @param rolesWithAddresses - A record of {@link Role}s to lists of addresses that should be members of the given role.
     * @throws If you are requesting a role that does not exist on the contract this will throw an error.
     * @example Say you want to overwrite the list of addresses that are members of the minter role.
     * ```javascript
     * const minterAddresses = await contract.roles.get("minter");
     * await contract.roles.setAll({
     *  minter: []
     * });
     * console.log(await contract.roles.get("minter")); // No matter what members had the role before, the new list will be set to []
     * ```
     * @public
     * @twfeature Permissions
     *
     * */
    setAll: {
        (rolesWithAddresses: { [key in TRole]?: string[] | undefined; }): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (rolesWithAddresses: { [key in TRole]?: string[] | undefined; }) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Throws an error if an address is missing the roles specified.
     *
     * @param roles - The roles to check
     * @param address - The address to check
     *
     * @internal
     */
    verify(roles: TRole[], address: AddressOrEns): Promise<void>;
    /** **************************
     * WRITE FUNCTIONS
     ****************************/
    /**
     * Grant a role to a specific address
     *
     * @remarks Make sure you are sure you want to grant the role to the address.
     *
     * @example
     * ```javascript
     * await contract.roles.grant("minter", "{{wallet_address}}");
     * ```
     *
     * @param role - The {@link Role} to grant to the address
     * @param address - The address to grant the role to
     * @returns The transaction receipt
     * @throws If you are trying to grant does not exist on the contract this will throw an error.
     *
     * @public
     * @twfeature Permissions
     */
    grant: {
        (role: TRole, address: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (role: TRole, address: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Revoke a role from a specific address
     *
     * @remarks
     *
     * -- Caution --
     *
     * This will let you remove yourself from the role, too.
     * If you remove yourself from the admin role, you will no longer be able to administer the contract.
     * There is no way to recover from this.
     *
     * @example
     * ```javascript
     * await contract.roles.revoke("minter", "{{wallet_address}}");
     * ```
     *
     * @param role - The {@link Role} to revoke
     * @param address - The address to revoke the role from
     * @returns The transaction receipt
     * @throws If you are trying to revoke does not exist on the module this will throw an error.
     *
     * @public
     * @twfeature Permissions
     */
    revoke: {
        (role: TRole, address: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (role: TRole, address: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /** **************************
     * PRIVATE FUNCTIONS
     ****************************/
    private getRevokeRoleFunctionName;
}
//# sourceMappingURL=contract-roles.d.ts.map