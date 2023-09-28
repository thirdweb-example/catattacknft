import { RequiredParam } from "../../../core/query-utils/required-param";
import { Token } from "@thirdweb-dev/sdk/solana";
export declare function tokenBalanceQuery(program: RequiredParam<Token>, walletAddress: RequiredParam<string>): {
    queryKey: readonly ["__tw__", "sol", RequiredParam<import("@thirdweb-dev/sdk/solana").Network>, "program", string | undefined, "balanceOf", {
        readonly walletAddress: RequiredParam<string>;
    }];
    queryFn: () => Promise<{
        value: string;
        displayValue: string;
    }>;
    enabled: boolean;
};
/**
 * Get the token balance of a specified wallet
 * @param program - The token program to get the balance on
 * @param walletAddress - The address of the wallet to get the balance of
 *
 * @example
 * ```jsx
 * import { useProgram, useTokenBalance } from "@thirdweb-dev/react/solana";
 *
 * export default function Component() {
 *   const { program } = useProgram("{{program_address}}");
 *   const { data: balance, isLoading } = useTokenBalance(program, "{{wallet_address}}");
 *
 *   return (
 *     <p>{balance}</p>
 *   )
 * }
 * ```
 *
 * @public
 */
export declare function useTokenBalance(program: RequiredParam<Token>, walletAddress: RequiredParam<string>): import("@tanstack/react-query").UseQueryResult<{
    value: string;
    displayValue: string;
}, unknown>;
//# sourceMappingURL=useTokenBalance.d.ts.map