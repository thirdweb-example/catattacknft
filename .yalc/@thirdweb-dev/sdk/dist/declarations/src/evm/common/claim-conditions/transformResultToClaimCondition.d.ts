import { AbstractClaimConditionContractStruct } from "../../schema/contracts/common/claim-conditions";
import type { ClaimCondition } from "../../types/claim-conditions/claim-conditions";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { providers } from "ethers";
/**
 * Transforms a contract model to local model
 * @param pm
 * @param tokenDecimals
 * @param provider
 * @param merkleMetadata
 * @param storage
 * @param shouldDownloadSnapshot
 * @internal
 */
export declare function transformResultToClaimCondition(pm: AbstractClaimConditionContractStruct, tokenDecimals: number, provider: providers.Provider, merkleMetadata: Record<string, string> | undefined, storage: ThirdwebStorage, shouldDownloadSnapshot: boolean): Promise<ClaimCondition>;
//# sourceMappingURL=transformResultToClaimCondition.d.ts.map