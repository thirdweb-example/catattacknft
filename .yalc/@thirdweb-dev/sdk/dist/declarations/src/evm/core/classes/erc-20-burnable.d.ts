import type { DetectableFeature } from "../interfaces/DetectableFeature";
import type { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
import type { IBurnableERC20 } from "@thirdweb-dev/contracts-js";
import type { Erc20 } from "./erc-20";
export declare class Erc20Burnable implements DetectableFeature {
    featureName: "ERC20Burnable";
    private erc20;
    private contractWrapper;
    constructor(erc20: Erc20, contractWrapper: ContractWrapper<IBurnableERC20>);
    /**
     * Burn Tokens
     *
     * @remarks Burn tokens held by the connected wallet
     *
     * @example
     * ```javascript
     * // The amount of this token you want to burn
     * const amount = 1.2;
     *
     * await contract.token.burn.tokens(amount);
     * ```
     */
    tokens: {
        (amount: string | number): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (amount: string | number) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Burn Tokens
     *
     * @remarks Burn tokens held by the specified wallet
     *
     * @example
     * ```javascript
     * // Address of the wallet sending the tokens
     * const holderAddress = "{{wallet_address}}";
     *
     * // The amount of this token you want to burn
     * const amount = 1.2;
     *
     * await contract.token.burn.from(holderAddress, amount);
     * ```
     */
    from: {
        (holder: string, amount: string | number): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (holder: string, amount: string | number) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
}
//# sourceMappingURL=erc-20-burnable.d.ts.map