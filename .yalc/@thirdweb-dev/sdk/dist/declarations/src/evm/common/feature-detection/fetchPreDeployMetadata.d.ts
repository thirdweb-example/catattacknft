import { PreDeployMetadataFetched } from "../../schema/contracts/custom";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
/**
 * Fetch the metadata coming from CLI, this is before deploying or releasing the contract.
 * @internal
 * @param publishMetadataUri
 * @param storage
 */
export declare function fetchPreDeployMetadata(publishMetadataUri: string, storage: ThirdwebStorage): Promise<PreDeployMetadataFetched>;
//# sourceMappingURL=fetchPreDeployMetadata.d.ts.map