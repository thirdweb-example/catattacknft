import { RequiredParam } from "../../../core/query-utils/required-param";
import type { NFTCollection, NFTDrop } from "@thirdweb-dev/sdk/solana";
export type TransferNFTMutationParams = {
    receiverAddress: string;
    tokenAddress: string;
};
/**
 * Transfer NFTs from the connected wallet to another wallet
 * @param program - The NFT program instance to transfer NFTs on
 *
 * @example
 * ```jsx
 * import { useProgram, useTransferNFT } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: transfer, isLoading, error } = useTransferNFT(program);
 *
 *   return (
 *     <button
 *       onClick={() => transfer({
 *         receiverAddress: "{{wallet_address}}",
 *         tokenAddress: "..."
 *       })}
 *     >
 *       Transfer
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useTransferNFT(program: RequiredParam<NFTCollection | NFTDrop>): import("@tanstack/react-query").UseMutationResult<import("@thirdweb-dev/sdk/solana").TransactionResult, unknown, TransferNFTMutationParams, unknown>;
//# sourceMappingURL=useTransferNFT.d.ts.map