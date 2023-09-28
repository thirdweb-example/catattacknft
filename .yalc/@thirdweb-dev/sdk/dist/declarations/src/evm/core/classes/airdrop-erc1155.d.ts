import type { AirdropERC1155, IAirdropERC1155 } from "@thirdweb-dev/contracts-js";
import { Address } from "../../schema";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * @public
 */
export declare class Airdrop1155<T extends IAirdropERC1155 | AirdropERC1155> implements DetectableFeature {
    featureName: "AirdropERC1155";
    protected contractWrapper: ContractWrapper<T>;
    constructor(contractWrapper: ContractWrapper<T>);
    /**
     * @internal
     */
    getAddress(): Address;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Perform airdrop of ERC1155 tokens
     *
     * @example
     * ```javascript
     * // Airdrop content array, with recipients and tokenIds
     * const contents = [
     *      {
     *        recipient: "0xabc...", // first recipient address
     *        tokenId: 0,
     *        amount: "10" // number of tokens
     *      },
     *      {
     *        recipient: "0x123...", // second recipient address
     *        tokenId: 0
     *        amount: "20" // number of tokens
     *      }
     *   ]
     *
     * const tokenAddress = "0x..." // Address of the ERC1155 token being airdropped
     * const tokenOwner = "0x..." // Address of the owner of the tokens being airdropped
     *
     * const output = await contract.airdrop1155.drop(tokenAddress, tokenOwner, contents);
     *
     * // the `output` return value above contains:
     * //     - count of successful and failed drops
     * //     - array containing failed drops, if any
     *
     * ```
     * @param tokenAddress
     * @param tokenOwner
     * @param contents
     *
     * @returns an array of recipients for who the airdrop failed (empty means all transfers were successful)
     * @twfeature AirdropERC1155
     */
    drop: {
        (tokenAddress: string, tokenOwner: string, contents: {
            tokenId: number;
            recipient: string;
            amount?: string | number | undefined;
        }[]): Promise<{
            successfulDropCount: number;
            failedDropCount: number;
            failedDrops: {
                tokenId: number;
                recipient: string;
                amount?: string | number | undefined;
            }[];
        }>;
        prepare: (tokenAddress: string, tokenOwner: string, contents: {
            tokenId: number;
            recipient: string;
            amount?: string | number | undefined;
        }[]) => Promise<Transaction<{
            successfulDropCount: number;
            failedDropCount: number;
            failedDrops: {
                tokenId: number;
                recipient: string;
                amount?: string | number | undefined;
            }[];
        }>>;
    };
}
//# sourceMappingURL=airdrop-erc1155.d.ts.map