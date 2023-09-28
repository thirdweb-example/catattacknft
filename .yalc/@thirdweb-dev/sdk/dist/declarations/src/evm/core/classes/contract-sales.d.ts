import type { IPrimarySale } from "@thirdweb-dev/contracts-js";
import { Address } from "../../schema/shared/Address";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * Handle primary sales recipients
 * @remarks Configure primary sale recipients for an entire contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const salesRecipient = await contract.sales.getRecipient();
 * await contract.sales.setRecipient(recipientWalletAddress);
 * ```
 * @public
 */
export declare class ContractPrimarySale implements DetectableFeature {
    featureName: "PrimarySale";
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<IPrimarySale>);
    /**
     * Get the primary sale recipient
     * @returns the wallet address.
     * @example
     * ```javascript
     * const salesRecipient = await contract.sales.getRecipient();
     * ```
     * @public
     * @twfeature PrimarySale
     */
    getRecipient(): Promise<Address>;
    /**
     * Set the primary sale recipient
     * @param recipient - the wallet address
     * @example
     * ```javascript
     * await contract.sales.setRecipient(recipientWalletAddress);
     * ```
     * @public
     * @twfeature PrimarySale
     */
    setRecipient: {
        (recipient: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (recipient: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
}
//# sourceMappingURL=contract-sales.d.ts.map