import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BytesLike } from "ethers";
import { ConstructorParamMap } from "../../types/any-evm/deploy-data";
/**
 *
 * @internal
 * @param contractName
 * @param chainId
 * @param storage
 */
export declare function getEncodedConstructorParamsForThirdwebContract(contractName: string, chainId: number, storage: ThirdwebStorage, contractVersion?: string, clientId?: string, secretKey?: string, constructorParamMap?: ConstructorParamMap): Promise<BytesLike | undefined>;
//# sourceMappingURL=getEncodedConstructorParamsForThirdwebContract.d.ts.map