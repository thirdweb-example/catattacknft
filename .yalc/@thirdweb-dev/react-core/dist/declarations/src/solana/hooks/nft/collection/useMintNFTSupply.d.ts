import { RequiredParam } from "../../../../core/query-utils/required-param";
import { MintNFTSupplyParams } from "../../../types";
import type { NFTCollection } from "@thirdweb-dev/sdk/solana";
/**
 * Mint additional supply for an NFT on your NFT program
 * @param program - The NFT program to mint additional NFTs to
 *
 * @example
 * ```jsx
 * import { useProgram, useMintNFTSupply } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: mintSupply, isLoading, error } = useMintNFTSupply(program);
 *
 *   return (
 *     <button onClick={() => mintSupply({ nftAddress: "111...", amount: 10 })}>
 *       Mint Additional Supply
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useMintNFTSupply(program: RequiredParam<NFTCollection>): import("@tanstack/react-query").UseMutationResult<string[], unknown, MintNFTSupplyParams, unknown>;
//# sourceMappingURL=useMintNFTSupply.d.ts.map