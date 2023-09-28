import { providers } from "ethers";
/**
 * Get the CREATE2 Factory address for a network
 * Source code of the factory:
 * https://github.com/Arachnid/deterministic-deployment-proxy/blob/master/source/deterministic-deployment-proxy.yul
 *
 * @internal
 * @param provider
 */
export declare function getCreate2FactoryAddress(provider: providers.Provider): Promise<string>;
//# sourceMappingURL=getCreate2FactoryAddress.d.ts.map