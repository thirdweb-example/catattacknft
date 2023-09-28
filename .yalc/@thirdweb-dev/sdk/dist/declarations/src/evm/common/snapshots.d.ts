import { SnapshotInfo, SnapshotInput } from "../types/claim-conditions/claim-conditions";
import { SnapshotFormatVersion } from "./sharded-merkle-tree";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { providers } from "ethers";
/**
 * Create a snapshot (merkle tree) from a list of addresses and uploads it to IPFS
 * @param snapshotInput - the list of addresses to hash
 * @param tokenDecimals - the token decimals
 * @param provider
 * @param storage - the storage to upload to
 * @param snapshotFormatVersion
 * @returns the generated snapshot and URI
 * @internal
 */
export declare function createSnapshot(snapshotInput: SnapshotInput, tokenDecimals: number, provider: providers.Provider, storage: ThirdwebStorage, snapshotFormatVersion: SnapshotFormatVersion): Promise<SnapshotInfo>;
//# sourceMappingURL=snapshots.d.ts.map