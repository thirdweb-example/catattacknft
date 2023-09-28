import { RequiredParam } from "../../../../core/query-utils/required-param";
import { NFTMetadataInput, UploadProgressEvent } from "@thirdweb-dev/sdk";
import type { NFTDrop } from "@thirdweb-dev/sdk/solana";
/**
 * Lazy mint NFTs on an NFT Drop program
 * @param program - The NFT Drop program instance to lazy mint on
 *
 * @example
 * ```jsx
 * import { useProgram, useLazyMintNFT } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: lazyMint, isLoading, error } = useLazyMintNFT(program);
 *
 *   return (
 *     <button onClick={() => lazyMint({ name: "My NFT", description: "..." })}>
 *       Claim
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useLazyMint(program: RequiredParam<NFTDrop>, onProgress?: (progress: UploadProgressEvent) => void): import("@tanstack/react-query").UseMutationResult<import("@thirdweb-dev/sdk/solana").TransactionResult[], unknown, {
    metadatas: NFTMetadataInput[];
}, unknown>;
//# sourceMappingURL=useLazyMint.d.ts.map