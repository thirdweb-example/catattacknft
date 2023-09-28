import { RequiredParam } from "../../../core/query-utils/required-param";
import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
export declare function balanceQuery(sdk: RequiredParam<ThirdwebSDK>): {
    queryKey: readonly ["__tw__", "sol", RequiredParam<import("@thirdweb-dev/sdk/solana").Network>, "wallet-balance", {
        readonly address: string | undefined;
    }];
    queryFn: () => Promise<{
        value: string;
        displayValue: string;
    }>;
    enabled: boolean;
};
/**
 * Get the currently connected wallet balance
 *
 * @returns the balance of the connected wallet
 */
export declare function useBalance(): import("@tanstack/react-query").UseQueryResult<{
    value: string;
    displayValue: string;
}, unknown>;
//# sourceMappingURL=useBalance.d.ts.map