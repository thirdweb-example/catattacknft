import { SnapshotEntry } from "../../schema/contracts/common/snapshots";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
/**
 * @internal
 * @param merkleRoot
 * @param merkleMetadata
 * @param storage
 */
export declare function fetchSnapshot(merkleRoot: string, merkleMetadata: Record<string, string> | undefined, storage: ThirdwebStorage): Promise<SnapshotEntry[] | null>;
//# sourceMappingURL=fetchSnapshot.d.ts.map