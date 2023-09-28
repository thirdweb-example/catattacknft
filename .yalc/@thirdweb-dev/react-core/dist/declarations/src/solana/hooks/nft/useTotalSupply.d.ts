import { RequiredParam } from "../../../core/query-utils/required-param";
import type { NFTCollection, NFTDrop } from "@thirdweb-dev/sdk/solana";
export declare function nftTotalSupplyQuery(program: RequiredParam<NFTCollection | NFTDrop>): {
    queryKey: readonly ["__tw__", "sol", RequiredParam<import("@thirdweb-dev/sdk/solana").Network>, "program", string | undefined, "supply"];
    queryFn: () => Promise<number>;
    enabled: boolean;
};
/**
 * Get the total supply of NFTs on the program
 * @param program - The NFT program to get the total supply of
 *
 * @example
 * ```jsx
 * import { useProgram, useTotalSupply } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: supply, isLoading } = useTotalSupply(program);
 *
 *   return (
 *     <pre>{JSON.stringify(supply)}</pre>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useTotalSupply(program: RequiredParam<NFTCollection | NFTDrop>): import("@tanstack/react-query").UseQueryResult<number, unknown>;
//# sourceMappingURL=useTotalSupply.d.ts.map