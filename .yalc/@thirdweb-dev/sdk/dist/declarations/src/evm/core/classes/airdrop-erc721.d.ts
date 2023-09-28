import type { AirdropERC721, IAirdropERC721 } from "@thirdweb-dev/contracts-js";
import { Address } from "../../schema";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * @public
 */
export declare class Airdrop721<T extends IAirdropERC721 | AirdropERC721> implements DetectableFeature {
    featureName: "AirdropERC721";
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
     * Perform airdrop of ERC721 tokens
     *
     * @example
     * ```javascript
     * // Airdrop content array, with recipients and tokenIds
     * const contents = [
     *      {
     *        recipient: "0xabc...", // first recipient address
     *        tokenId: 0
     *      },
     *      {
     *        recipient: "0x123...", // second recipient address
     *        tokenId: 2
     *      }
     *   ]
     *
     * const tokenAddress = "0x..." // Address of the ERC721 token being airdropped
     * const tokenOwner = "0x..." // Address of the owner of the tokens being airdropped
     *
     * const output = await contract.airdrop721.drop(tokenAddress, tokenOwner, contents);
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
     * @twfeature AirdropERC721
     */
    drop: {
        (tokenAddress: string, tokenOwner: string, contents: {
            tokenId: number;
            recipient: string;
        }[]): Promise<{
            successfulDropCount: number;
            failedDropCount: number;
            failedDrops: {
                tokenId: number;
                recipient: string;
            }[];
        }>;
        prepare: (tokenAddress: string, tokenOwner: string, contents: {
            tokenId: number;
            recipient: string;
        }[]) => Promise<Transaction<{
            successfulDropCount: number;
            failedDropCount: number;
            failedDrops: {
                tokenId: number;
                recipient: string;
            }[];
        }>>;
    };
}
//# sourceMappingURL=airdrop-erc721.d.ts.map