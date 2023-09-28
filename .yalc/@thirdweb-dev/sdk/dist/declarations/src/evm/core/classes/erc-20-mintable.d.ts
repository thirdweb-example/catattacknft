import type { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import type { Amount } from "../../types/currency";
import type { DetectableFeature } from "../interfaces/DetectableFeature";
import type { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
import type { IMintableERC20 } from "@thirdweb-dev/contracts-js";
import type { Erc20 } from "./erc-20";
import { Erc20BatchMintable } from "./erc-20-batch-mintable";
/**
 * Mint ERC20 Tokens
 * @remarks Token minting functionality that handles unit parsing for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.mint.to(walletAddress, nftMetadata);
 * ```
 * @public
 */
export declare class Erc20Mintable implements DetectableFeature {
    featureName: "ERC20Mintable";
    private contractWrapper;
    private erc20;
    /**
     * Batch mint Tokens to many addresses
     */
    batch: Erc20BatchMintable | undefined;
    constructor(erc20: Erc20, contractWrapper: ContractWrapper<IMintableERC20>);
    /**
     * Mint Tokens
     *
     * @remarks Mint tokens to a specified address.
     *
     * @example
     * ```javascript
     * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
     * const amount = "1.5"; // The amount of this token you want to mint
     * await contract.token.mint.to(toAddress, amount);
     * ```
     */
    to: {
        (to: string, amount: string | number): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (to: string, amount: string | number) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * @deprecated Use `contract.erc20.mint.prepare(...args)` instead
     */
    getMintTransaction(to: AddressOrEns, amount: Amount): Promise<Transaction>;
    private detectErc20BatchMintable;
}
//# sourceMappingURL=erc-20-mintable.d.ts.map