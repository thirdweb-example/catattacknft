import { RequiredParam } from "../../../../core/query-utils/required-param";
import type { NFTDrop } from "@thirdweb-dev/sdk/solana";
export declare function dropUnclaimedSupplyQuery(program: RequiredParam<NFTDrop>): {
    queryKey: readonly ["__tw__", "sol", RequiredParam<import("@thirdweb-dev/sdk/solana").Network>, "program", string | undefined, "totalUnclaimedSupply"];
    queryFn: () => Promise<number>;
    enabled: boolean;
};
/**
 * Get the total unclaimed supply of NFTs on an NFT Drop
 * @param program - The NFT Drop program to get the unclaimed supply on
 *
 * @example
 * ```jsx
 * import { useProgram, useDropTotalUnclaimedSupply } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: unclaimedSupply, isLoading } = useDropTotalUnclaimedSupply(program);
 *
 *   return (
 *     <p>{unclaimedSupply}</p>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useDropUnclaimedSupply(program: RequiredParam<NFTDrop>): import("@tanstack/react-query").UseQueryResult<number, unknown>;
//# sourceMappingURL=useUnclaimedSupply.d.ts.map