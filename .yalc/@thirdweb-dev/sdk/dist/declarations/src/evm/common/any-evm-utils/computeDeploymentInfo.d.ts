import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { providers } from "ethers";
import { DeployedContractType } from "../../types/any-evm/deploy-data";
import { ContractOptions, DeploymentPreset } from "../../types/any-evm/deploy-data";
import { type BytesLike } from "ethers";
import { PreDeployMetadataFetched } from "../../schema/contracts/custom";
import { ConstructorParamMap } from "../../types/any-evm/deploy-data";
export declare function computeDeploymentInfo(contractType: DeployedContractType, provider: providers.Provider, storage: ThirdwebStorage, create2Factory: string, contractOptions?: ContractOptions, clientId?: string, secretKey?: string): Promise<DeploymentPreset>;
/**
 * @internal
 *
 * Determine constructor params required by an implementation contract.
 * Return abi-encoded params.
 */
export declare function encodeConstructorParamsForImplementation(compilerMetadata: PreDeployMetadataFetched, provider: providers.Provider, storage: ThirdwebStorage, create2Factory: string, constructorParamMap?: ConstructorParamMap, clientId?: string, secretKey?: string): Promise<BytesLike>;
//# sourceMappingURL=computeDeploymentInfo.d.ts.map