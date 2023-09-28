import type { PrebuiltContractType } from "../../contracts";
import { SUPPORTED_CHAIN_ID } from "../chains/SUPPORTED_CHAIN_ID";
/**
 * @internal
 * @param chainId
 * @param contractType
 */
export declare function getApprovedImplementation(chainId: SUPPORTED_CHAIN_ID, // TODO use SupportedChainId once we deploy to all chains
contractType: PrebuiltContractType): string | null;
//# sourceMappingURL=getApprovedImplementation.d.ts.map