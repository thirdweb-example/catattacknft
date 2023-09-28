import { SnapshotEntryWithProof } from "../../schema/contracts/common/snapshots";
import { SnapshotFormatVersion } from "../sharded-merkle-tree";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import type { providers } from "ethers";
export declare function fetchSnapshotEntryForAddress(address: string, merkleRoot: string, merkleMetadata: Record<string, string> | undefined, provider: providers.Provider, storage: ThirdwebStorage, snapshotFormatVersion: SnapshotFormatVersion): Promise<SnapshotEntryWithProof | null>;
//# sourceMappingURL=fetchSnapshotEntryForAddress.d.ts.map