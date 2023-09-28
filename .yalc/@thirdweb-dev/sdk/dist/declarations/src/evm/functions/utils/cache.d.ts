import { ValidContractInstance } from "../../contracts";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
export declare function inContractCache(address: string, chainId: number): boolean;
export declare function getCachedContract(address: string, chainId: number): ValidContractInstance;
export declare function cacheContract(contract: ValidContractInstance, address: string, chainId: number): void;
export declare function getCachedStorage(storage?: ThirdwebStorage): ThirdwebStorage;
export declare function cacheStorage(storage: ThirdwebStorage): void;
//# sourceMappingURL=cache.d.ts.map