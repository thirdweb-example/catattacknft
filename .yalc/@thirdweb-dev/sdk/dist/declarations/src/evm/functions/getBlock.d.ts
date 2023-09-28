import type { NetworkInput } from "../core/types";
import type { SDKOptions } from "../schema/sdk-options";
import type { Block, BlockWithTransactions, BlockTag } from "@ethersproject/abstract-provider";
export type SharedBlockParams = {
    network: NetworkInput;
    sdkOptions?: SDKOptions;
};
export type GetBlockNumberParams = SharedBlockParams;
/**
 * Get the latest block number from a given network.
 *
 * @example
 * ```javascript
 * const block = await getBlockNumber({
 *  network: "ethereum"
 * });
 * ```
 * @returns the latest block number
 * @public
 */
export declare function getBlockNumber(params: GetBlockNumberParams): Promise<number>;
export type GetBlockParams = SharedBlockParams & {
    block: BlockTag;
};
/**
 * Get a specific block from a given network.
 *
 * @example
 * ```javascript
 * const block = await getBlock({
 *  network: "ethereum",
 *  block: 12345678
 * });
 * ```
 *
 * @returns the block for the given block number / block tag
 * @public
 */
export declare function getBlock(params: GetBlockParams): Promise<Block>;
export type GetBlockWithTransactionsParams = SharedBlockParams & {
    block: BlockTag;
};
/**
 * Get a specific block (with the transactions contained in it) from a given network.
 *
 * @example
 * ```javascript
 * const block = await getBlockWithTransactions({
 *  network: "ethereum",
 *  block: 12345678
 * });
 * ```
 *
 * @returns the block for the given block number / block tag
 * @public
 */
export declare function getBlockWithTransactions(params: GetBlockWithTransactionsParams): Promise<BlockWithTransactions>;
//# sourceMappingURL=getBlock.d.ts.map