import { ChainId } from "../constants/chains/ChainId";
import { BigNumber, providers } from "ethers";
type FeeData = {
    maxFeePerGas: null | BigNumber;
    maxPriorityFeePerGas: null | BigNumber;
};
export declare function getDefaultGasOverrides(provider: providers.Provider): Promise<{
    maxFeePerGas?: undefined;
    maxPriorityFeePerGas?: undefined;
    gasPrice?: undefined;
} | {
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    gasPrice?: undefined;
} | {
    gasPrice: BigNumber;
    maxFeePerGas?: undefined;
    maxPriorityFeePerGas?: undefined;
}>;
export declare function getDynamicFeeData(provider: providers.JsonRpcProvider): Promise<FeeData>;
export declare function getGasPrice(provider: providers.Provider): Promise<BigNumber>;
/**
 *
 * @returns the gas price
 * @internal
 */
export declare function getPolygonGasPriorityFee(chainId: ChainId.Polygon | ChainId.Mumbai): Promise<BigNumber>;
export {};
//# sourceMappingURL=gas-price.d.ts.map