import { CurrencyValue } from "../../types/currency";
import { BigNumberish, providers } from "ethers";
/**
 *
 * @param providerOrSigner
 * @param asset
 * @param price
 * @returns
 * @internal
 */
export declare function fetchCurrencyValue(providerOrSigner: providers.Provider, asset: string, price: BigNumberish): Promise<CurrencyValue>;
//# sourceMappingURL=fetchCurrencyValue.d.ts.map