import { RequiredParam } from "../../../core/query-utils/required-param";
import type { NFTCollection, NFTDrop, UpdateCreatorInput } from "@thirdweb-dev/sdk/solana";
/**
 * Update the creators for an NFT program
 * @param program - The NFT program instance to update the creators for
 *
 * @example
 * ```jsx
 * import { useProgram, useUpdateCreators } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: updateCreators, isLoading, error } = useUpdateCreators(program);
 *
 *   return (
 *     <button
 *       onClick={() => updateCreators([{ address: "0x...", share: 10 }])}
 *     >
 *       Update Creators
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useUpdateCreators(program: RequiredParam<NFTCollection | NFTDrop>): import("@tanstack/react-query").UseMutationResult<import("@thirdweb-dev/sdk/solana").TransactionResult[], unknown, UpdateCreatorInput, unknown>;
//# sourceMappingURL=useUpdateCreators.d.ts.map