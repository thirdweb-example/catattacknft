import { RequiredParam } from "../../../../core/query-utils/required-param";
import type { NFTDrop } from "@thirdweb-dev/sdk/solana";
/**
 * Set Claim Conditions to an NFT Drop program
 * @param program - The NFT Drop program to set claim conditions for
 *
 * @example
 * ```jsx
 * import { useProgram, useSetClaimConditions } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { mutateAsync: setClaimConditions, isLoading, error } = useSetClaimConditions(program);
 *
 *   return (
 *     <button onClick={() => setClaimConditions(metadata)}>
 *       Set Claim Conditions
 *     </button>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useSetClaimConditions(program: RequiredParam<NFTDrop>): import("@tanstack/react-query").UseMutationResult<import("@thirdweb-dev/sdk/solana").TransactionResult, unknown, {
    price?: string | number | undefined;
    currencyAddress?: string | null | undefined;
    primarySaleRecipient?: string | undefined;
    sellerFeeBasisPoints?: number | undefined;
    startTime?: Date | undefined;
    maxClaimable?: string | number | undefined;
}, unknown>;
//# sourceMappingURL=useSetClaimConditions.d.ts.map