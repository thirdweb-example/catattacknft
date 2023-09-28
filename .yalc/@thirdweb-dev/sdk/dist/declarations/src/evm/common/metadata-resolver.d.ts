import { Abi, PublishedMetadata } from "../schema/contracts/custom";
import { Address } from "../schema/shared/Address";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { providers } from "ethers";
import { SDKOptions } from "../schema";
/**
 * @internal
 * @param address
 * @param provider
 * @param storage
 */
export declare function fetchContractMetadataFromAddress(address: Address, provider: providers.Provider, storage: ThirdwebStorage, sdkOptions?: SDKOptions): Promise<PublishedMetadata>;
/**
 * @internal
 * @param address
 * @param provider
 * @param storage
 * @returns
 */
export declare function fetchAbiFromAddress(address: Address, provider: providers.Provider, storage: ThirdwebStorage): Promise<Abi | undefined>;
//# sourceMappingURL=metadata-resolver.d.ts.map