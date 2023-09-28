import { RequiredParam } from "../../../core/query-utils/required-param";
import type { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
export declare function programAccountTypeQuery(sdk: RequiredParam<ThirdwebSDK>, address: RequiredParam<string>): {
    queryKey: readonly ["__tw__", "sol", RequiredParam<import("@thirdweb-dev/sdk/solana").Network>, "program", RequiredParam<string>, "type"];
    queryFn: () => Promise<"nft-collection" | "nft-drop" | "token">;
    enabled: boolean;
    cacheTime: number;
    staleTime: number;
};
/**
 * @internal
 */
export declare function useProgramAccountType(address: RequiredParam<string>): import("@tanstack/react-query").UseQueryResult<"nft-collection" | "nft-drop" | "token", unknown>;
//# sourceMappingURL=useProgramAccountType.d.ts.map