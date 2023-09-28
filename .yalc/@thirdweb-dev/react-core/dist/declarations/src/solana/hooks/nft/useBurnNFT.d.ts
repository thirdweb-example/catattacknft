import { RequiredParam } from "../../../core/query-utils/required-param";
import type { NFTCollection, NFTDrop } from "@thirdweb-dev/sdk/solana";
/**
 * Burn an NFT owned by the connected wallet
 * @param program - The NFT program instance to burn NFTs on
 *
 * @example
 * ```jsx
 * import { useProgram, useBurnNFT } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: burn, isLoading, error } = useBurnNFT(program);
 *
 *   return (
 *     <button
 *       onClick={() => burn("...")}
 *     >
 *       Burn
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useBurnNFT(program: RequiredParam<NFTCollection | NFTDrop>): import("@tanstack/react-query").UseMutationResult<import("@thirdweb-dev/sdk/solana").TransactionResult, unknown, string, unknown>;
//# sourceMappingURL=useBurnNFT.d.ts.map