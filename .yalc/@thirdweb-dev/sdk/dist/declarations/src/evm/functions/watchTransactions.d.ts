import type { SharedBlockParams } from "./getBlock";
import type { Transaction } from "ethers";
export type WatchTransactionsParams = SharedBlockParams & {
    onTransactions: (transactions: Transaction[]) => void;
} & {
    address: string;
};
/**
 * Watch for transactions to or from a given address.
 *
 * @example
 * ```javascript
 * // this will log out the new transactions every time a new block is finalized
 * const unsubscribe = watchTransactions({
 *   network: "ethereum",
 *   address: "0x1234",
 *   onTransactions: (transactions) => {
 *     console.log("new transactions", transactions);
 *   }
 * });
 * // later on you can call unsubscribe to stop listening for new transactions
 * unsubscribe();
 * ```
 *
 * @returns an unsubscribe function that will stop listening for new transactions when called
 * @public
 */
export declare function watchTransactions({ address, onTransactions, ...sharedBlockParams }: WatchTransactionsParams): () => void;
//# sourceMappingURL=watchTransactions.d.ts.map