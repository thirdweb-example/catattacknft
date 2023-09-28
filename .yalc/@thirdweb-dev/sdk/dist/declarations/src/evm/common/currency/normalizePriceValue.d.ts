import { Price } from "../../types/currency";
import { providers } from "ethers";
/**
 *
 * @param provider
 * @param inputPrice
 * @param currencyAddress
 * @returns
 * @internal
 */
export declare function normalizePriceValue(provider: providers.Provider, inputPrice: Price, currencyAddress: string): Promise<import("ethers").BigNumber>;
//# sourceMappingURL=normalizePriceValue.d.ts.map