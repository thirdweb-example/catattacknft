import { WatchTransactionsParams } from "@thirdweb-dev/sdk/evm/functions";
import type { Transaction } from "ethers";
export type UseWatchTransactionsParams = Partial<Omit<WatchTransactionsParams, "onTransactions">> & {
    limit?: number;
};
/**
 * Hook that listens to transactions on a given chain for a given address.
 *
 * ```javascript
 * import { useWatchTransactions } from "@thirdweb-dev/react"
 * ```
 *
 * @example
 * ```js
 * const transactions = useWatchTransactions({
 *  address: "0x1234",
 *  network: "ethereum",
 * });
 * ```
 *
 * @returns an array of {@link Transaction} objects
 */
export declare function useWatchTransactions(watchTransactionParams: UseWatchTransactionsParams): Transaction[];
//# sourceMappingURL=useTransactions.d.ts.map