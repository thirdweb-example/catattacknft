import { SharedBlockParams } from "./getBlock";
import type { Block, BlockWithTransactions } from "@ethersproject/abstract-provider";
export type WatchBlockNumberParams = SharedBlockParams & {
    onBlockNumber: (blockNumber: number) => void;
};
/**
 * Watch for a new block number on a given network.
 *
 * @example
 * ```javascript
 * // this will log out the new block number every time a new block is finalized
 * const unsubscribe = watchBlockNumber({
 *   network: "ethereum",
 *   onBlockNumber: (blockNumber) => {
 *     console.log("new block number", blockNumber);
 *   }
 * });
 * // later on you can call unsubscribe to stop listening for new blocks
 * unsubscribe();
 * ```
 *
 * @returns an unsubscribe function that will stop listening for new blocks when called
 * @public
 */
export declare function watchBlockNumber(params: WatchBlockNumberParams): () => void;
export type WatchBlockParams = SharedBlockParams & {
    onBlock: (block: Block) => void;
};
/**
 * Watch for new blocks on a given network.
 *
 * @example
 * ```javascript
 * // this will log out the new block every time a new block is finalized
 * const unsubscribe = watchBlock({
 *   network: "ethereum",
 *   onBlock: (block) => {
 *     console.log("new block", block);
 *   }
 * });
 * // later on you can call unsubscribe to stop listening for new blocks
 * unsubscribe();
 * ```
 *
 * @returns an unsubscribe function that will stop listening for new blocks when called
 * @public
 */
export declare function watchBlock({ onBlock, ...sharedBlockParams }: WatchBlockParams): () => void;
export type WatchBlockWithTransactionsParams = SharedBlockParams & {
    onBlock: (block: BlockWithTransactions) => void;
};
/**
 * Watch for new blocks on a given network. (Includes parsed transactions)
 *
 * @example
 * ```javascript
 * // this will log out the new block every time a new block is finalized
 * const unsubscribe = watchBlockWithTransactions({
 *   network: "ethereum",
 *   onBlock: (block) => {
 *     console.log("new block", block);
 *     console.log("new transactions", block.transactions)
 *   }
 * });
 * // later on you can call unsubscribe to stop listening for new blocks
 * unsubscribe();
 *
 * @returns an unsubscribe function that will stop listening for new blocks when called
 * @public
 */
export declare function watchBlockWithTransactions({ onBlock, ...sharedBlockParams }: WatchBlockWithTransactionsParams): () => void;
//# sourceMappingURL=watchBlock.d.ts.map