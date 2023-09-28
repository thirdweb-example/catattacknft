import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { providers } from "ethers";
/**
 *
 * @internal
 * @param provider
 * @param storage
 * @param create2Factory
 */
export declare function computeNativeTokenAddress(provider: providers.Provider, storage: ThirdwebStorage, create2Factory?: string, clientId?: string, secretKey?: string): Promise<string>;
//# sourceMappingURL=computeNativeTokenAddress.d.ts.map