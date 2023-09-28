import { AbstractClaimConditionContractStruct } from "../../schema/contracts/common/claim-conditions";
import type { ClaimConditionInput } from "../../types/claim-conditions/claim-conditions";
import { SnapshotFormatVersion } from "../sharded-merkle-tree";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, type providers } from "ethers";
/**
 * @internal
 * Decorates claim conditions with merkle roots from snapshots if present
 * @param claimConditionInputs
 * @param tokenDecimals
 * @param provider
 * @param storage
 * @param snapshotFormatVersion
 */
export declare function processSnapshotData(claimConditionInputs: ClaimConditionInput[], tokenDecimals: number, provider: providers.Provider, storage: ThirdwebStorage, snapshotFormatVersion: SnapshotFormatVersion): Promise<{
    inputsWithSnapshots: {
        startTime?: number | Date | undefined;
        currencyAddress?: string | undefined;
        price?: string | number | undefined;
        maxClaimableSupply?: string | number | undefined;
        maxClaimablePerWallet?: string | number | undefined;
        waitInSeconds?: string | number | bigint | BigNumber | undefined;
        merkleRootHash?: string | number[] | undefined;
        snapshot?: string[] | {
            address: string;
            maxClaimable?: string | number | undefined;
            price?: string | number | undefined;
            currencyAddress?: string | undefined;
        }[] | null | undefined;
        metadata?: import("zod").objectInputType<{
            name: import("zod").ZodOptional<import("zod").ZodString>;
        }, import("zod").ZodUnknown, "strip"> | undefined;
    }[];
    snapshotInfos: {
        merkleRoot: string;
        snapshotUri: string;
    }[];
}>;
/**
 * Create and uploads snapshots + converts claim conditions to contract format
 * @param claimConditionInputs
 * @param tokenDecimals
 * @param provider
 * @param storage
 * @param snapshotFormatVersion
 * @internal
 */
export declare function processClaimConditionInputs(claimConditionInputs: ClaimConditionInput[], tokenDecimals: number, provider: providers.Provider, storage: ThirdwebStorage, snapshotFormatVersion: SnapshotFormatVersion): Promise<{
    snapshotInfos: {
        merkleRoot: string;
        snapshotUri: string;
    }[];
    sortedConditions: AbstractClaimConditionContractStruct[];
}>;
//# sourceMappingURL=processClaimConditionInputs.d.ts.map