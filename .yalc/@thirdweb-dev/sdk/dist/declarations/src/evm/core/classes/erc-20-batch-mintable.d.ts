import type { IMintableERC20, IMulticall } from "@thirdweb-dev/contracts-js";
import type { DetectableFeature } from "../interfaces/DetectableFeature";
import type { ContractWrapper } from "./contract-wrapper";
import type { Erc20 } from "./erc-20";
import { Transaction } from "./transactions";
/**
 * Mint Many ERC20 Tokens at once
 * @remarks Token batch minting functionality that handles unit parsing for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.token.mint.batch.to(walletAddress, [nftMetadata1, nftMetadata2, ...]);
 * ```
 * @public
 */
export declare class Erc20BatchMintable implements DetectableFeature {
    featureName: "ERC20BatchMintable";
    private contractWrapper;
    private erc20;
    constructor(erc20: Erc20, contractWrapper: ContractWrapper<IMintableERC20 & IMulticall>);
    /**
     * Mint Tokens To Many Wallets
     *
     * @remarks Mint tokens to many wallets in one transaction.
     *
     * @example
     * ```javascript
     * // Data of the tokens you want to mint
     * const data = [
     *   {
     *     toAddress: "{{wallet_address}}", // Address to mint tokens to
     *     amount: 0.2, // How many tokens to mint to specified address
     *   },
     *  {
     *    toAddress: "0x...",
     *    amount: 1.4,
     *  }
     * ]
     *
     * await contract.token.mint.batch(data);
     * ```
     */
    to: {
        (args: {
            amount: string | number;
            toAddress: string;
        }[]): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (args: {
            amount: string | number;
            toAddress: string;
        }[]) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
}
//# sourceMappingURL=erc-20-batch-mintable.d.ts.map