import type { NetworkInput } from "../core/types";
import type { SDKOptions } from "../schema/sdk-options";
export type GetChainIdParams = {
    network: NetworkInput;
    sdkOptions?: SDKOptions;
};
/**
 * A function that returns the chainId for a given network input + sdk options combination.
 * This function will cache the promise for the chainId so that it can be reused.
 * You can call this function multiple times with the same params and it will only make one request to the provider.
 *
 * @returns the ChainId
 * @internal
 */
export declare function getChainId(params: GetChainIdParams): Promise<number>;
//# sourceMappingURL=getChainId.d.ts.map