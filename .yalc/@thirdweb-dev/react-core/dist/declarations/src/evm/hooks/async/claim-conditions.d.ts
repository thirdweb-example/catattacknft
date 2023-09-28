import { RequiredParam } from "../../../core/query-utils/required-param";
import { DropContract, WalletAddress } from "../../types";
import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { ClaimCondition, ClaimConditionFetchOptions, ClaimConditionInput } from "@thirdweb-dev/sdk";
import type { BigNumberish, providers } from "ethers";
/**
 * The options to be passed as the second parameter to the {@link useClaimIneligibilityReasons}` hook.
 *
 * @beta
 */
export type ClaimIneligibilityParams = {
    walletAddress: WalletAddress;
    quantity: string | number;
};
/**
 * The params for the {@link useSetClaimConditions} hook mutation.
 *
 * @beta
 */
export type SetClaimConditionsParams = {
    phases: ClaimConditionInput[];
    reset?: boolean;
};
/** **********************/
/**     READ  HOOKS     **/
/** **********************/
/**
 * Get the active claim condition
 *
 * @example
 * ```javascript
 * const { data: activeClaimCondition, isLoading, error } = useActiveClaimCondition(contract);
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC721, ERC1155 or ERC20 spec and implements the `claimConditions` extension.
 * @param tokenId - the id of the token to fetch the claim conditions for (if the contract is an ERC1155 contract)
 * @returns a response object with the currently active claim condition
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1 | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.useactiveclaimcondition?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useActiveClaimCondition(contract: RequiredParam<DropContract>, tokenId?: BigNumberish, options?: ClaimConditionFetchOptions): UseQueryResult<ClaimCondition | undefined>;
/**
 * Get claimer proofs
 *
 * @example
 * ```javascript
 * const { data: claimerProofs, isLoading, error } = useClaimerProofs(contract);
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC721, ERC1155 or ERC20 spec and implements the `claimConditions` extension.
 * @param claimerAddress - the address of the claimer to fetch the claimer proofs for
 * @param tokenId - the id of the token to fetch the claimer proofs for (if the contract is an ERC1155 contract)
 * @param claimConditionId - optional the claim condition id to get the proofs for
 * @returns a response object with the snapshot for the provided address
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1 | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.useclaimerproofs?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useClaimerProofs(contract: RequiredParam<DropContract>, claimerAddress: string, tokenId?: BigNumberish, claimConditionId?: BigNumberish): UseQueryResult<{
    address: string;
    proof: string[];
    maxClaimable: string;
    price?: string | undefined;
    currencyAddress?: string | undefined;
} | null, unknown>;
/**
 * Get all claim conditions
 *
 * @example
 * ```javascript
 * const { data: claimConditions, isLoading, error } = useClaimConditions(contract);
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC721, ERC1155 or ERC20 spec and implements the `claimConditions` extension.
 * @param tokenId - the id of the token to fetch the claim conditions for (if the contract is an ERC1155 contract)
 * @returns a response object with the list of claim conditions
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1 | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.useclaimconditions?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useClaimConditions(contract: RequiredParam<DropContract>, tokenId?: BigNumberish, options?: ClaimConditionFetchOptions): UseQueryResult<ClaimCondition[]>;
/**
 * Get the reasons why a specific wallet can't claim
 *
 * @example
 * ```javascript
 * const { data: claimIneligibilityReasons, isLoading, error } = useClaimIneligibilityReasons(contract, { walletAddress: "{{wallet_address}}" });
 * ```
 *
 * @param contract - an instance of a contract that extends the  ERC20, ERC721 or ERC1155 spec and implements the `claimConditions` extension.
 * @param eligibilityParams - the parameters for the eligibility check, see: {@link ClaimIneligibilityParams}
 * @param tokenId - the id of the token to fetch the claim conditions for (if the contract is an ERC1155 contract)
 * @returns a response object with the reasons for the claim ineligibility
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1 | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.useclaimineligibilityreasons?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useClaimIneligibilityReasons(contract: RequiredParam<DropContract>, params: ClaimIneligibilityParams, tokenId?: BigNumberish): UseQueryResult<import("@thirdweb-dev/sdk").ClaimEligibility[], unknown>;
/**
 * Get the active claim condition for a specific wallet
 *
 * @example
 * ```javascript
 * const { data: activeClaimConditionForWallet, isLoading, error } = useActiveClaimConditionForWallet(contract, "{{wallet_address}}");
 * ```
 *
 * @param contract - an instance of a contract that extends the  ERC20, ERC721 or ERC1155 spec and implements the `claimConditions` extension.
 * @param walletAddress - the wallet address to check the active claim condition for
 * @param tokenId - the id of the token to fetch the claim conditions for (if the contract is an ERC1155 contract)
 * @returns the active claim conditon for the wallet address or null if there is no active claim condition
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1 | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.useactiveclaimconditionforwallet?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useActiveClaimConditionForWallet(contract: RequiredParam<DropContract>, walletAddress: RequiredParam<WalletAddress>, tokenId?: BigNumberish): UseQueryResult<ClaimCondition | null>;
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Set claim conditions
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: setClaimConditions,
 *     isLoading,
 *     error,
 *   } = useSetClaimConditions(contract);
 *
 *   if (error) {
 *     console.error("failed to set claim conditions", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => setClaimConditions({ phases: [{ price: 2, maxClaimableSupply: 100 }] })}
 *     >
 *       Set Claim Conditions!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link DropContract}
 * @returns a mutation object that can be used to set claim conditions
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1 | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.usesetclaimconditions?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useSetClaimConditions(contract: RequiredParam<DropContract>, tokenId?: BigNumberish): UseMutationResult<{
    receipt: providers.TransactionReceipt;
}, unknown, SetClaimConditionsParams, unknown>;
/**
 * Reset claim conditions
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: resetClaimConditions,
 *     isLoading,
 *     error,
 *   } = useResetClaimConditions(contract);
 *
 *   if (error) {
 *     console.error("failed to reset claim conditions", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={resetClaimConditions}
 *     >
 *       Reset Claim Conditions
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link DropContract}
 * @returns a mutation object that can be used to reset claim conditions
 * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1 | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @beta
 */
export declare function useResetClaimConditions(contract: RequiredParam<DropContract>, tokenId?: BigNumberish): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, void, unknown>;
//# sourceMappingURL=claim-conditions.d.ts.map