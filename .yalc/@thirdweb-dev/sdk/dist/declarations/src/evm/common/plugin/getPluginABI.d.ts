import { Address } from "../../schema/shared/Address";
import { Abi } from "../../schema/contracts/custom";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { providers } from "ethers";
/**
 * @internal
 */
export declare function getPluginABI(addresses: Address[], provider: providers.Provider, storage: ThirdwebStorage): Promise<Abi[]>;
//# sourceMappingURL=getPluginABI.d.ts.map