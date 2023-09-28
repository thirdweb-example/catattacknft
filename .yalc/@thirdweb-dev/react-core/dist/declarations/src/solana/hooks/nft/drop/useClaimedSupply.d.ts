import { RequiredParam } from "../../../../core/query-utils/required-param";
import type { NFTDrop } from "@thirdweb-dev/sdk/solana";
export declare function dropTotalClaimedSupplyQuery(program: RequiredParam<NFTDrop>): {
    queryKey: readonly ["__tw__", "sol", RequiredParam<import("@thirdweb-dev/sdk/solana").Network>, "program", string | undefined, "totalClaimedSupply"];
    queryFn: () => Promise<number>;
    enabled: boolean;
};
/**
 * Get the total claimed supply of NFTs on an NFT Drop
 * @param program - The NFT Drop program to get the claimed supply on
 *
 * @example
 * ```jsx
 * import { useProgram, useDropTotalClaimedSupply } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: claimedSupply, isLoading } = useDropTotalClaimedSupply(program);
 *
 *   return (
 *     <p>{claimedSupply}</p>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useDropTotalClaimedSupply(program: RequiredParam<NFTDrop>): import("@tanstack/react-query").UseQueryResult<number, unknown>;
//# sourceMappingURL=useClaimedSupply.d.ts.map