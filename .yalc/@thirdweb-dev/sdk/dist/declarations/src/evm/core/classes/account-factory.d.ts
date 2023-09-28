import type { IAccountFactory } from "@thirdweb-dev/contracts-js";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { utils, type BytesLike } from "ethers";
import { TransactionResultWithAddress } from "../types";
import { ContractEvents } from "./contract-events";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
export declare class AccountFactory<TContract extends IAccountFactory> implements DetectableFeature {
    featureName: "AccountFactory";
    private contractWrapper;
    events: ContractEvents<IAccountFactory>;
    constructor(contractWrapper: ContractWrapper<IAccountFactory>);
    getAddress(): string;
    /*********************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get the deterministic address of the account that will be created
     *
     * @example
     * ```javascript
     * const accountAddress = await contract.accountFactory.predictAccountAddress(admin);
     * ```
     * @param admin - The admin of the account.
     * @param extraData - (Optional) Extra data to be passed to the account on creation.
     * @returns the deterministic address of the account that will be created for the given admin.
     *
     * @twfeature AccountFactory
     */
    predictAccountAddress(admin: string, extraData?: BytesLike): Promise<string>;
    /**
     * Get all accounts on which the given signer has authority
     *
     * @example
     * ```javascript
     * const allAccounts = await contract.accountFactory.getAssociatedAccounts(admin);
     * ```
     * @param signer - The account address.
     * @returns all accounts on which the given signer has authority.
     *
     * @twfeature AccountFactory
     */
    getAssociatedAccounts(signer: string): Promise<string[]>;
    /**
     * Get all accounts
     *
     * @example
     * ```javascript
     * const allAccounts = await contract.accountFactory.getAllAccounts();
     * ```
     *
     * @returns all accounts created via the account factory.
     *
     * @twfeature AccountFactory
     */
    getAllAccounts(): Promise<string[]>;
    /**
     * Check if a account has been deployed for the given admin
     *
     * @param admin - The admin of the account.
     * @param extraData - (Optional) Extra data to be passed to the account on creation.
     * @returns whether the account has been deployed for the given admin.
     */
    isAccountDeployed(admin: string, extraData?: BytesLike): Promise<boolean>;
    /*********************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Create a account
     *
     * @remarks Create a account for an admin. The admin will have complete authority over the account.
     *
     * @param admin - The admin of the account.
     * @param extraData - (Optional) Extra data to be passed to the account on creation.
     *
     * @example
     *  ```javascript
     * const tx = await contract.accountFactory.createAccount(admin, extraData);
     * const receipt = tx.receipt();
     * const accountAddress = tx.address;
     * ```
     *
     * @twfeature AccountFactory
     */
    createAccount: {
        (accountAdmin: string, extraData?: utils.BytesLike | undefined): Promise<TransactionResultWithAddress>;
        prepare: (accountAdmin: string, extraData?: utils.BytesLike | undefined) => Promise<Transaction<TransactionResultWithAddress>>;
    };
}
//# sourceMappingURL=account-factory.d.ts.map