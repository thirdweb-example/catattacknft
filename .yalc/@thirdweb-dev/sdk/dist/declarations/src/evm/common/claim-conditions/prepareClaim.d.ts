import { ContractWrapper } from "../../core/classes/contract-wrapper";
import type { ClaimCondition, ClaimVerification } from "../../types/claim-conditions/claim-conditions";
import { SnapshotFormatVersion } from "../sharded-merkle-tree";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { type BigNumberish } from "ethers";
/**
 * Returns proofs and the overrides required for the transaction.
 * @internal
 * @returns - `overrides` and `proofs` as an object.
 */
export declare function prepareClaim(addressToClaim: string, quantity: BigNumberish, activeClaimCondition: ClaimCondition, merkleMetadataFetcher: () => Promise<Record<string, string>>, tokenDecimals: number, contractWrapper: ContractWrapper<any>, storage: ThirdwebStorage, checkERC20Allowance: boolean, snapshotFormatVersion: SnapshotFormatVersion): Promise<ClaimVerification>;
//# sourceMappingURL=prepareClaim.d.ts.map