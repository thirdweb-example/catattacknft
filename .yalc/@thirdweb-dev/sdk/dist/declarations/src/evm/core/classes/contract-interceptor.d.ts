import { ContractWrapper } from "./contract-wrapper";
import { BaseContract, CallOverrides } from "ethers";
/**
 * Allows overriding transaction behavior for this contract
 * @public
 */
export declare class ContractInterceptor<TContract extends BaseContract> {
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    /**
     * The next transaction executed will add/replace any overrides passed via the passed in hook.
     * @remarks Overridden values will be applied to the next transaction executed.
     * @example
     * ```javascript
     * contract.interceptor.overrideNextTransaction(() => ({
     *   gasLimit: 3000000,
     * }));
     * ```
     * @param hook - the hook to add or replace any CallOverrides (gas limit, gas price, nonce, from, value, etc...)
     * @public
     */
    overrideNextTransaction(hook: () => CallOverrides): void;
}
//# sourceMappingURL=contract-interceptor.d.ts.map