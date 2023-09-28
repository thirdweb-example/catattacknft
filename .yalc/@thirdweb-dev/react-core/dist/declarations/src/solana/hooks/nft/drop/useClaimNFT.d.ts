import { RequiredParam } from "../../../../core/query-utils/required-param";
import { ClaimNFTParams } from "../../../types";
import type { NFTDrop } from "@thirdweb-dev/sdk/solana";
/**
 * Claim NFTs from an NFT Drop program
 * @param program - The NFT Drop program instance to claim from
 *
 * @example
 * ```jsx
 * import { useProgram, useClaimNFT } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: claim, isLoading, error } = useClaimNFT(program);
 *
 *   return (
 *     <button onClick={() => claim({amount: 1})}>
 *       Claim
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useClaimNFT(program: RequiredParam<NFTDrop>): import("@tanstack/react-query").UseMutationResult<string[], unknown, ClaimNFTParams, unknown>;
//# sourceMappingURL=useClaimNFT.d.ts.map