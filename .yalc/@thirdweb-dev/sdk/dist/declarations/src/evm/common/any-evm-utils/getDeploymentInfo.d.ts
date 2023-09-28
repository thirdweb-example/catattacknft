import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { providers } from "ethers";
import { DeploymentPreset } from "../../types/any-evm/deploy-data";
/**
 *
 * Returns txn data for keyless deploys as well as signer deploys.
 * Also provides a list of infra contracts to deploy.
 *
 * @internal
 *
 * @param metadataUri
 * @param storage
 * @param provider
 * @param create2Factory
 */
export declare function getDeploymentInfo(metadataUri: string, storage: ThirdwebStorage, provider: providers.Provider, create2Factory?: string, clientId?: string, secretKey?: string): Promise<DeploymentPreset[]>;
//# sourceMappingURL=getDeploymentInfo.d.ts.map