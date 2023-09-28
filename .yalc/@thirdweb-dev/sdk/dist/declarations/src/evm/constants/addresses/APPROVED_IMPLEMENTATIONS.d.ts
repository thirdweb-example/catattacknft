import type { PrebuiltContractType } from "../../contracts";
import { SUPPORTED_CHAIN_ID } from "../chains/SUPPORTED_CHAIN_ID";
type DropContract = Extract<PrebuiltContractType, "nft-drop" | "token-drop" | "edition-drop" | "signature-drop">;
export declare const APPROVED_IMPLEMENTATIONS: Record<SUPPORTED_CHAIN_ID, Record<DropContract, string>>;
export {};
//# sourceMappingURL=APPROVED_IMPLEMENTATIONS.d.ts.map