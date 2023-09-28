import { type Signer } from "ethers";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import type { DeployOptions } from "../types/deploy";
import { DeploymentTransaction } from "../types/any-evm/deploy-data";
export declare function zkDeployContractFromUri(publishMetadataUri: string, constructorParamValues: any[], signer: Signer, storage: ThirdwebStorage, chainId: number, options?: DeployOptions): Promise<string>;
export declare function getZkTransactionsForDeploy(): Promise<DeploymentTransaction[]>;
//# sourceMappingURL=zksync-deploy-utils.d.ts.map