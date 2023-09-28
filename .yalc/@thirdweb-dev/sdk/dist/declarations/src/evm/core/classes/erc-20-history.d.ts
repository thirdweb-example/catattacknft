import type { TokenERC20 } from "@thirdweb-dev/contracts-js";
import type { TokenHolderBalance } from "../../types/currency";
import { ContractEvents } from "./contract-events";
import { ContractWrapper } from "./contract-wrapper";
/**
 * Manages history for Token contracts
 * @public
 */
export declare class TokenERC20History {
    private events;
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TokenERC20>, events: ContractEvents<TokenERC20>);
    /**
     * Get all holder balances
     *
     * @remarks Lets you get all token holders and their corresponding balances
     * @returns - A JSON object of all token holders and their corresponding balances
     * @example
     * ```javascript
     * const allHolderBalances = await contract.history.getAllHolderBalances();
     * ```
     */
    getAllHolderBalances(): Promise<TokenHolderBalance[]>;
}
//# sourceMappingURL=erc-20-history.d.ts.map