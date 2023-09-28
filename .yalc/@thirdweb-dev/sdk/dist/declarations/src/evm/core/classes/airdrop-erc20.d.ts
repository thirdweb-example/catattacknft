import type { AirdropERC20, IAirdropERC20 } from "@thirdweb-dev/contracts-js";
import { Address } from "../../schema";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * @public
 */
export declare class Airdrop20<T extends IAirdropERC20 | AirdropERC20> implements DetectableFeature {
    featureName: "AirdropERC20";
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
     * Perform airdrop of ERC20 tokens
     *
     * @example
     * ```javascript
     * // Airdrop content array, with recipients and token amounts
     * const contents = [
     *      {
     *        recipient: "0xabc...", // first recipient address
     *        amount: "10" // number of tokens in wei units
     *      },
     *      {
     *        recipient: "0x123...", // second recipient address
     *        amount: "20" // number of tokens in wei units
     *      }
     *   ]
     *
     * const tokenAddress = "0x..." // Address of the ERC20 token being airdropped
     * const tokenOwner = "0x..." // Address of the owner of the tokens being airdropped
     *
     * const output = await contract.airdrop20.drop(tokenAddress, tokenOwner, contents);
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
     * @twfeature AirdropERC20
     */
    drop: {
        (tokenAddress: string, tokenOwner: string, contents: {
            recipient: string;
            amount?: string | number | undefined;
        }[]): Promise<{
            successfulDropCount: number;
            failedDropCount: number;
            failedDrops: {
                recipient: string;
                amount?: string | number | undefined;
            }[];
        }>;
        prepare: (tokenAddress: string, tokenOwner: string, contents: {
            recipient: string;
            amount?: string | number | undefined;
        }[]) => Promise<Transaction<{
            successfulDropCount: number;
            failedDropCount: number;
            failedDrops: {
                recipient: string;
                amount?: string | number | undefined;
            }[];
        }>>;
    };
}
//# sourceMappingURL=airdrop-erc20.d.ts.map