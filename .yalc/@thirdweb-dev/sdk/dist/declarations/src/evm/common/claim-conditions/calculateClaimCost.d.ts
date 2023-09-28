import { ContractWrapper } from "../../core/classes/contract-wrapper";
import { Address } from "../../schema/shared/Address";
import type { Price } from "../../types/currency";
import { BigNumberish, CallOverrides } from "ethers";
export declare function calculateClaimCost(contractWrapper: ContractWrapper<any>, pricePerToken: Price, quantity: BigNumberish, currencyAddress?: Address, checkERC20Allowance?: boolean): Promise<Promise<CallOverrides>>;
//# sourceMappingURL=calculateClaimCost.d.ts.map