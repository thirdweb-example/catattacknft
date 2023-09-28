import type { Ownable } from "@thirdweb-dev/contracts-js";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * Encodes and decodes Contract functions
 * @public
 */
export declare class ContractOwner<TContract extends Ownable> implements DetectableFeature {
    featureName: "Ownable";
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<Ownable>);
    /**
     * Get the current owner of the contract
     * @example
     * ```javascript
     * await contract.owner.get();
     * console.log("Owner address: ", ownerAddress);
     * ```
     * @returns the owner address
     * @twfeature Ownable
     */
    get(): Promise<string>;
    /**
     * Set the new owner of the contract
     * @remarks Can only be called by the current owner.
     *
     * @param address - the address of the new owner
     *
     * @example
     * ```javascript
     * const newOwnerAddress = "{{wallet_address}}";
     * await contract.owner.set(newOwnerAddress);
     * ```
     * @twfeature Ownable
     */
    set: {
        (address: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (address: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
}
//# sourceMappingURL=contract-owner.d.ts.map