import { RequiredParam } from "../../../core/query-utils/required-param";
import { NFTCollection, NFTDrop } from "@thirdweb-dev/sdk/solana";
export declare function nftCreatorsQuery(program: RequiredParam<NFTCollection | NFTDrop>): {
    queryKey: readonly ["__tw__", "sol", RequiredParam<import("@thirdweb-dev/sdk/solana").Network>, "program", string | undefined, "creators"];
    queryFn: () => Promise<import("@thirdweb-dev/sdk/solana").CreatorOutput[]>;
    enabled: boolean;
};
/**
 * Get the creators for an NFT program
 * @param program - The NFT program to get the creators for
 *
 * @example
 * ```jsx
 * import { useProgram, useCreators } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: creators, isLoading } = useCreators(program);
 *
 *   return (
 *     <pre>{JSON.stringify(creators)}</pre>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useCreators(program: RequiredParam<NFTCollection | NFTDrop>): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk/solana").CreatorOutput[], unknown>;
//# sourceMappingURL=useCreators.d.ts.map