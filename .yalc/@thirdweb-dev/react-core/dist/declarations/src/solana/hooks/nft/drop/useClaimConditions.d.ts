import { RequiredParam } from "../../../../core/query-utils/required-param";
import type { NFTDrop } from "@thirdweb-dev/sdk/solana";
export declare function claimConditionsQuery(program: RequiredParam<NFTDrop>): {
    queryKey: readonly ["__tw__", "sol", RequiredParam<import("@thirdweb-dev/sdk/solana").Network>, "program", string | undefined, "claimConditions"];
    queryFn: () => Promise<{
        primarySaleRecipient: string;
        startTime: Date | null;
        price: {
            value: string;
            displayValue: string;
        };
        currencyAddress: string | null;
        maxClaimable: string;
        sellerFeeBasisPoints: number;
        totalAvailableSupply: number;
        lazyMintedSupply: number;
        claimedSupply: number;
        isReadyToClaim: boolean;
    }>;
    enabled: boolean;
};
/**
 * Get the current claim conditions on an NFT Drop
 * @param program - The NFT Drop program to get the claim conditions for
 *
 * @example
 * ```jsx
 * import { useProgram, useClaimConditions } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: claimConditions, isLoading } = useClaimConditions(program);
 *
 *   return (
 *     <p>{claimConditions?.price.displayValue}</p>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useClaimConditions(program: RequiredParam<NFTDrop>): import("@tanstack/react-query").UseQueryResult<{
    primarySaleRecipient: string;
    startTime: Date | null;
    price: {
        value: string;
        displayValue: string;
    };
    currencyAddress: string | null;
    maxClaimable: string;
    sellerFeeBasisPoints: number;
    totalAvailableSupply: number;
    lazyMintedSupply: number;
    claimedSupply: number;
    isReadyToClaim: boolean;
}, unknown>;
//# sourceMappingURL=useClaimConditions.d.ts.map