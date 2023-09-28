import { Signer, providers } from "ethers";
import { z } from "zod";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import type { PrebuiltContractType, DeploySchemaForPrebuiltContractType } from "../contracts";
/**
 *
 * @param contractType
 * @param metadata
 * @param contractURI
 * @returns
 * @internal
 */
export declare function getDeployArguments<TContractType extends PrebuiltContractType>(contractType: TContractType, metadata: z.input<DeploySchemaForPrebuiltContractType<TContractType>>, contractURI: string, signer: Signer, storage: ThirdwebStorage): Promise<any[]>;
export declare function getTrustedForwarders(provider: providers.Provider, storage: ThirdwebStorage, contractName?: string): Promise<string[]>;
//# sourceMappingURL=deploy.d.ts.map