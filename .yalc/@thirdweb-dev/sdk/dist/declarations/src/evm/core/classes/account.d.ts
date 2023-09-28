import { DetectableFeature } from "../interfaces/DetectableFeature";
import { ContractWrapper } from "./contract-wrapper";
import type { IAccountCore } from "@thirdweb-dev/contracts-js";
import { AddressOrEns } from "../../schema";
import { SignerWithPermissions } from "../../types";
export declare class Account<TContract extends IAccountCore> implements DetectableFeature {
    featureName: "Account";
    private contractWrapper;
    private accountPermissions;
    constructor(contractWrapper: ContractWrapper<IAccountCore>);
    private detectAccountPermissions;
    getAddress(): string;
    /*********************************
     * READ FUNCTIONS
     ********************************/
    /**
     * Get whether a signer is an admin on the account.
     *
     * @example
     * ```javascript
     * const isAdmin = await contract.account.isAdmin(signer);
     * ```
     * @param signer - The address of a signer of the account.
     * @returns whether a signer is an admin on the account.
     *
     * @twfeature AccountPermissions
     */
    isAdmin(signerAddress: AddressOrEns): Promise<boolean>;
    /**
     * Get whether a signer has permissions to use the account.
     *
     * @example
     * ```javascript
     * const isAdmin = await contract.account.isSigner(signer);
     * ```
     * @param signer - The address of a signer of the account.
     * @returns whether a signer has permissions to use the account.
     *
     * @twfeature AccountPermissions
     */
    isSigner(signerAddress: AddressOrEns): Promise<boolean>;
    /**
     * Get all admins of the account.
     *
     * @example
     * ```javascript
     * const allAdmins = await contract.account.getAllAdmins();
     * ```
     *
     * @returns all admins of the account.
     *
     * @twfeature AccountPermissions
     */
    getAllAdmins(): Promise<string[]>;
    /**
     * Get all (non-admin) signers with permissions to use the account.
     *
     * @example
     * ```javascript
     * const allSigners = await contract.account.getAllSigners();
     * ```
     *
     * @returns all (non-admin) signers with permissions to use the account.
     *
     * @twfeature AccountPermissions
     */
    getAllSigners(): Promise<SignerWithPermissions[]>;
    /**
     * Get all admins and non-admin signers with permissions to use the account.
     *
     * @example
     * ```javascript
     * const allAdminsAndSigners = await contract.account.getAllAdminsAndSigners();
     * ```
     *
     * @returns all admins and non-admin signers with permissions to use the account.
     *
     * @twfeature AccountPermissions
     */
    getAllAdminsAndSigners(): Promise<SignerWithPermissions[]>;
    /*********************************
     * WRITE FUNCTIONS
     ********************************/
    /**
     * Grant an address admin access to the account.
     *
     * @remarks Grants an address admin access to the account. The admin will have complete authority over the account.
     *
     * @param signer - The address to be granted admin access to the account.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.grantAdminAccess(signer);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    grantAdminPermissions: {
        (signerAddress: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (signerAddress: string) => Promise<import("./transactions").Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Revoke an address' admin access to the account.
     *
     * @remarks Revokes an address' admin access to the account.
     *
     * @param signer - The address of an admin of the account.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.revokeAdminAccess(signer);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    revokeAdminPermissions: {
        (signerAddress: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (signerAddress: string) => Promise<import("./transactions").Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Grant a signer permissions to use the account.
     *
     * @remarks Grants a signer permissions to use the account.
     *
     * @param signer - The signer to be granted permissions to use the account.
     * @param permissions - The permissions to be applied to the signer's use of the account.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.grantPermissions(signer, permissions);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    grantPermissions: {
        (signerAddress: string, permissions: {
            approvedCallTargets: string[];
            startDate?: number | Date | undefined;
            expirationDate?: number | Date | undefined;
            nativeTokenLimitPerTransaction?: string | number | undefined;
        }): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (signerAddress: string, permissions: {
            approvedCallTargets: string[];
            startDate?: number | Date | undefined;
            expirationDate?: number | Date | undefined;
            nativeTokenLimitPerTransaction?: string | number | undefined;
        }) => Promise<import("./transactions").Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Update the permissions of a signer for using the account.
     *
     * @remarks Updates the permissions of a signer for using the account.
     *
     * @param signer - The signer whose permissions to use the account are to be updated.
     * @param permissions - The permissions to be applied to the signer's use of the account.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.updateAccess(signer, restrictions);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    updatePermissions: {
        (signerAddress: string, permissions: {
            approvedCallTargets: string[];
            startDate?: number | Date | undefined;
            expirationDate?: number | Date | undefined;
            nativeTokenLimitPerTransaction?: string | number | undefined;
        }): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (signerAddress: string, permissions: {
            approvedCallTargets: string[];
            startDate?: number | Date | undefined;
            expirationDate?: number | Date | undefined;
            nativeTokenLimitPerTransaction?: string | number | undefined;
        }) => Promise<import("./transactions").Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Revoke a scoped access address to the account
     *
     * @remarks Revokes an address' access to the account.
     *
     * @param signer - The address whose access to the account is to be revoked.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.revokeAccess(signer);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    revokeAccess: {
        (signerAddress: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (signerAddress: string) => Promise<import("./transactions").Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Approve an address as a call target for a given signer on the account
     *
     * @remarks Approves an address as a call target for a given signer on the account.
     *
     * @param signer - A signer with restricted access to the account.
     * @param target - The address to approve as a call target for the signer.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.approveTargetForSigner(signer, target);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    approveTargetForSigner: {
        (signerAddress: string, target: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (signerAddress: string, target: string) => Promise<import("./transactions").Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Disapprove an address as a call target for a given signer on the account
     *
     * @remarks Disapprove an address as a call target for a given signer on the account.
     *
     * @param signer - A signer with restricted access to the account.
     * @param target - The address to disapprove as a call target for the signer.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.disapproveTargetForSigner(signer, target);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    disapproveTargetForSigner: {
        (signerAddress: string, target: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (signerAddress: string, target: string) => Promise<import("./transactions").Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Set the account's entire snapshot of permissions.
     *
     * @remarks Sets the account's entire snapshot of permissions.
     *
     * @param permissionSnapshot - the snapshot to set as the account's entire permission snapshot.
     *
     * @example
     * ```javascript
     * const tx = await contract.account.setAccess(permissionSnapshot);
     * const receipt = tx.receipt();
     * ```
     *
     * @twfeature AccountPermissions
     */
    resetAllPermissions: {
        (permissionSnapshot: {
            signer: string;
            permissions: {
                approvedCallTargets: string[];
                startDate?: number | Date | undefined;
                expirationDate?: number | Date | undefined;
                nativeTokenLimitPerTransaction?: string | number | undefined;
            };
            makeAdmin: boolean;
        }[]): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (permissionSnapshot: {
            signer: string;
            permissions: {
                approvedCallTargets: string[];
                startDate?: number | Date | undefined;
                expirationDate?: number | Date | undefined;
                nativeTokenLimitPerTransaction?: string | number | undefined;
            };
            makeAdmin: boolean;
        }[]) => Promise<import("./transactions").Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
}
//# sourceMappingURL=account.d.ts.map