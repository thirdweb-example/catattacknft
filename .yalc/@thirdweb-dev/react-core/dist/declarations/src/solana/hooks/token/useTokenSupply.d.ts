import { RequiredParam } from "../../../core/query-utils/required-param";
import { Token } from "@thirdweb-dev/sdk/solana";
export declare function tokenSupplyQuery(program: RequiredParam<Token>): {
    queryKey: readonly ["__tw__", "sol", RequiredParam<import("@thirdweb-dev/sdk/solana").Network>, "program", string | undefined, "totalSupply"];
    queryFn: () => Promise<{
        value: string;
        displayValue: string;
    }>;
    enabled: boolean;
};
/**
 * Get the total circulating supply of a token
 * @param program - The token program to get the supply of
 *
 * @example
 * ```jsx
 * import { useProgram, useMintToken } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: totalSupply, isLoading } = useTokenSupply(program);
 *
 *   return (
 *     <p>{totalSupply}</p>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useTokenSupply(program: RequiredParam<Token>): import("@tanstack/react-query").UseQueryResult<{
    value: string;
    displayValue: string;
}, unknown>;
//# sourceMappingURL=useTokenSupply.d.ts.map