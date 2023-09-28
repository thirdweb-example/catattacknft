import { RequiredParam } from "../../../core/query-utils/required-param";
import { NFTCollection, NFTDrop } from "@thirdweb-dev/sdk/solana";
export declare function nftRoyaltyQuery(program: RequiredParam<NFTCollection | NFTDrop>): {
    queryKey: readonly ["__tw__", "sol", RequiredParam<import("@thirdweb-dev/sdk/solana").Network>, "program", string | undefined, "royalty"];
    queryFn: () => Promise<number>;
    enabled: boolean;
};
/**
 * Get the royalty for an NFT program
 * @param program - The NFT program to get the royalty for
 *
 * @example
 * ```jsx
 * import { useProgram, useRoyalty } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: royalty, isLoading } = useRoyaltySettings(program);
 *
 *   return (
 *     <p>{royalty}</p>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useRoyaltySettings(program: RequiredParam<NFTCollection | NFTDrop>): import("@tanstack/react-query").UseQueryResult<number, unknown>;
//# sourceMappingURL=useRoyaltySettings.d.ts.map