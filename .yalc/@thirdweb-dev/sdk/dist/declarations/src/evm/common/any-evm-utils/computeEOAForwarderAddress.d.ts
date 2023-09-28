import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { providers } from "ethers";
/**
 *
 * @internal
 * @param provider
 * @param storage
 * @param create2Factory
 */
export declare function computeEOAForwarderAddress(provider: providers.Provider, storage: ThirdwebStorage, create2Factory?: string, clientId?: string, secretKey?: string): Promise<string>;
//# sourceMappingURL=computeEOAForwarderAddress.d.ts.map