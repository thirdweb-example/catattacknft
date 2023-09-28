import { RequiredParam } from "../../../core/query-utils/required-param";
import { QueryAllParams } from "@thirdweb-dev/sdk";
import type { NFTCollection, NFTDrop } from "@thirdweb-dev/sdk/solana";
export declare function nftGetAllQuery(program: RequiredParam<NFTCollection | NFTDrop>, queryParams?: QueryAllParams): {
    queryKey: readonly ["__tw__", "sol", RequiredParam<import("@thirdweb-dev/sdk/solana").Network>, "program", string | undefined, "getAll", {
        start?: number | undefined;
        count?: number | undefined;
    } | undefined];
    queryFn: () => Promise<import("@thirdweb-dev/sdk").NFT[]>;
    enabled: boolean;
};
/**
 * Get the metadata for every NFT on an NFT program
 * @param program - The NFT program to get NFTs metadata from
 *
 * @example
 * ```jsx
 * import { useProgram, useNFTs } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: metadata, isLoading } = useNFTs(program);
 *
 *   return (
 *     <pre>{JSON.stringify(metadata)}</pre>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useNFTs(program: RequiredParam<NFTCollection | NFTDrop>, queryParams?: QueryAllParams): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk").NFT[], unknown>;
//# sourceMappingURL=useNFTs.d.ts.map