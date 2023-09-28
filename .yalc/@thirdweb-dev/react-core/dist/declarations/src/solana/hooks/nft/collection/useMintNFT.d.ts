import { RequiredParam } from "../../../../core/query-utils/required-param";
import { MintNFTParams } from "../../../types";
import type { NFTCollection } from "@thirdweb-dev/sdk/solana";
/**
 * Mint NFTs on your NFT program
 * @param program - The NFT program to mint NFTs to
 *
 * @example
 * ```jsx
 * import { useProgram, useMintNFT } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: mintNFT, isLoading, error } = useMintNFT(program);
 *
 *   return (
 *     <button onClick={() => mintNFT({ metadata: { name: "First NFT" } })}>
 *       Mint
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useMintNFT(program: RequiredParam<NFTCollection>): import("@tanstack/react-query").UseMutationResult<string, unknown, MintNFTParams, unknown>;
//# sourceMappingURL=useMintNFT.d.ts.map