import { FullPublishMetadata } from "../../schema/contracts/custom";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
/**
 * Fetch and parse the full metadata AFTER publishing a contract, with all the extra information (version, readme, etc)
 * @internal
 * @param publishMetadataUri
 * @param storage
 */
export declare function fetchExtendedReleaseMetadata(publishMetadataUri: string, storage: ThirdwebStorage): Promise<FullPublishMetadata>;
//# sourceMappingURL=fetchExtendedReleaseMetadata.d.ts.map