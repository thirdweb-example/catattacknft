import { RequiredParam } from "../../../core/query-utils/required-param";
import type { NFTCollection, NFTDrop, UpdateRoyaltySettingsInput } from "@thirdweb-dev/sdk/solana";
/**
 * Update the royalty for an NFT program
 * @param program - The NFT program instance to update the royalty for
 *
 * @example
 * ```jsx
 * import { useProgram, useUpdateRoyaltySettings } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: updateRoyalties, isLoading, error } = useUpdateRoyaltySettings(program);
 *
 *   return (
 *     <button
 *       onClick={() => updateRoyalties(300)}
 *     >
 *       Update Royalties
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useUpdateRoyaltySettings(program: RequiredParam<NFTCollection | NFTDrop>): import("@tanstack/react-query").UseMutationResult<import("@thirdweb-dev/sdk/solana").TransactionResult[] | {
    signature: string;
}, unknown, UpdateRoyaltySettingsInput, unknown>;
//# sourceMappingURL=useUpdateRoyaltySettings.d.ts.map