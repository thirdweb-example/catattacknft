import { DetectableFeature } from "../interfaces/DetectableFeature";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
import type { IBurnableERC1155 } from "@thirdweb-dev/contracts-js";
import { BigNumberish } from "ethers";
export declare class Erc1155Burnable implements DetectableFeature {
    featureName: "ERC1155Burnable";
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<IBurnableERC1155>);
    /**
     * Burn a specified amount of a NFTs
     *
     * @remarks Burn the specified NFTs from the connected wallet
     *
     * @param tokenId - the token Id to burn
     * @param amount - amount to burn
     *
     * @example
     * ```javascript
     * // The token ID to burn NFTs of
     * const tokenId = 0;
     * // The amount of the NFT you want to burn
     * const amount = 2;
     *
     * const result = await contract.edition.burn.tokens(tokenId, amount);
     * ```
     */
    tokens: {
        (tokenId: BigNumberish, amount: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (tokenId: BigNumberish, amount: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Burn a specified amount of a NFTs
     *
     * @remarks Burn the specified NFTs from a specified wallet
     *
     * @param account - the address to burn NFTs from
     * @param tokenId - the tokenId to burn
     * @param amount - amount to burn
     *
     * @example
     * ```javascript
     * // The address of the wallet to burn NFTS from
     * const account = "0x...";
     * // The token ID to burn NFTs of
     * const tokenId = 0;
     * // The amount of this NFT you want to burn
     * const amount = 2;
     *
     * const result = await contract.edition.burn.from(account, tokenId, amount);
     * ```
     */
    from: {
        (account: string, tokenId: BigNumberish, amount: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (account: string, tokenId: BigNumberish, amount: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Burn a batch of NFTs
     *
     * @remarks Burn the batch NFTs from the connected wallet
     *
     * @param tokenIds - the tokenIds to burn
     * @param amounts - amount of each token to burn
     *
     * @example
     * ```javascript
     * // The token IDs to burn NFTs of
     * const tokenIds = [0, 1];
     * // The amounts of each NFT you want to burn
     * const amounts = [2, 2];
     *
     * const result = await contract.edition.burn.batch(tokenIds, amounts);
     * ```
     */
    batch: {
        (tokenIds: BigNumberish[], amounts: BigNumberish[]): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (tokenIds: BigNumberish[], amounts: BigNumberish[]) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Burn a batch of NFTs
     *
     * @remarks Burn the batch NFTs from the specified wallet
     *
     * @param account - the address to burn NFTs from
     * @param tokenIds - the tokenIds to burn
     * @param amounts - amount of each token to burn
     *
     * @example
     * ```javascript
     * // The address of the wallet to burn NFTS from
     * const account = "0x...";
     * // The token IDs to burn NFTs of
     * const tokenIds = [0, 1];
     * // The amounts of each NFT you want to burn
     * const amounts = [2, 2];
     *
     * const result = await contract.edition.burn.batchFrom(account, tokenIds, amounts);
     * ```
     */
    batchFrom: {
        (account: string, tokenIds: BigNumberish[], amounts: BigNumberish[]): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (account: string, tokenIds: BigNumberish[], amounts: BigNumberish[]) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
}
//# sourceMappingURL=erc-1155-burnable.d.ts.map