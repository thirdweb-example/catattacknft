import { RequiredParam } from "../../core/query-utils/required-param";
import { ContractAddress, WalletAddress } from "../types";
import { QueryClient, QueryKey } from "@tanstack/react-query";
import type { ClaimConditionFetchOptions, MarketplaceFilter, QueryAllParams, SUPPORTED_CHAIN_ID } from "@thirdweb-dev/sdk";
import { BigNumberish, CallOverrides } from "ethers";
/**
 * @internal
 */
export declare function createContractCacheKey(contractAddress?: string | null, input?: QueryKey): QueryKey;
/**
 @internal
 */
export declare function createCacheKeyWithNetwork(input: QueryKey, chainId: RequiredParam<SUPPORTED_CHAIN_ID>): QueryKey;
/**
 * @internal
 */
export declare function invalidateContractAndBalances(queryClient: QueryClient, contractAddress: RequiredParam<ContractAddress>, chainId: RequiredParam<SUPPORTED_CHAIN_ID>): Promise<unknown>;
/**
 @internal
 */
export declare const cacheKeys: {
    readonly auth: {
        readonly user: () => QueryKey;
    };
    readonly network: {
        readonly active: (chainId: RequiredParam<SUPPORTED_CHAIN_ID>) => QueryKey;
    };
    readonly wallet: {
        readonly balance: (chainId: number, walletAddress: RequiredParam<WalletAddress>, tokenAddress?: ContractAddress) => QueryKey;
    };
    readonly contract: {
        readonly read: (contractAddress: RequiredParam<ContractAddress>, fnIdentity: string) => QueryKey;
        readonly type: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        readonly compilerMetadata: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        readonly typeAndCompilerMetadata: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        readonly metadata: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        readonly extractFunctions: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        readonly call: (contractAddress: RequiredParam<ContractAddress>, functionName: RequiredParam<string>, args?: unknown[], overrides?: CallOverrides) => QueryKey;
        readonly accountFactory: {
            readonly getAll: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
            readonly isAccountDeployed: (contractAdress: RequiredParam<ContractAddress>, admin: RequiredParam<string>) => QueryKey;
            readonly getAllForAddress: (contractAdress: RequiredParam<ContractAddress>, address: RequiredParam<string>) => QueryKey;
        };
        readonly account: {
            readonly signers: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        };
        readonly app: {
            readonly get: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        };
        readonly events: {
            readonly getEvents: (contractAddress: RequiredParam<ContractAddress>, eventName: string) => QueryKey;
            readonly getAllEvents: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        };
        readonly nft: {
            readonly get: (contractAddress: RequiredParam<ContractAddress>, tokenId: RequiredParam<BigNumberish>) => QueryKey;
            readonly balanceOf: (contractAddress: RequiredParam<ContractAddress>, owner: RequiredParam<WalletAddress>, tokenId: RequiredParam<BigNumberish>) => QueryKey;
            readonly query: {
                readonly all: (contractAddress: RequiredParam<ContractAddress>, params?: QueryAllParams) => QueryKey;
                readonly totalCirculatingSupply: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
                readonly totalCount: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
                readonly owned: {
                    readonly all: (contractAddress: RequiredParam<ContractAddress>, owner: RequiredParam<WalletAddress>) => QueryKey;
                };
            };
            readonly sharedMetadata: {
                readonly get: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
            };
            readonly drop: {
                readonly getAllUnclaimed: (contractAddress: RequiredParam<ContractAddress>, params?: QueryAllParams) => QueryKey;
                readonly getAllClaimed: (contractAddress: RequiredParam<ContractAddress>, params?: QueryAllParams) => QueryKey;
                readonly totalUnclaimedSupply: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
                readonly totalClaimedSupply: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
                readonly revealer: {
                    readonly getBatchesToReveal: (contractAddress: RequiredParam<ContractAddress>, params?: QueryAllParams) => QueryKey;
                };
            };
        };
        readonly token: {
            readonly totalSupply: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
            readonly decimals: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
            readonly balanceOf: (contractAddress: RequiredParam<ContractAddress>, walletAddress: RequiredParam<ContractAddress>) => QueryKey;
        };
        readonly marketplace: {
            readonly getListing: (contractAddress: RequiredParam<ContractAddress>, listingId: RequiredParam<BigNumberish>) => QueryKey;
            readonly getAllListings: (contractAddress: RequiredParam<ContractAddress>, params?: MarketplaceFilter) => QueryKey;
            readonly getTotalCount: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
            readonly getActiveListings: (contractAddress: RequiredParam<ContractAddress>, params?: MarketplaceFilter) => QueryKey;
            readonly auction: {
                readonly getBidBufferBps: (contractAddress: RequiredParam<ContractAddress>, listingId: RequiredParam<BigNumberish>) => QueryKey;
                readonly getWinningBid: (contractAddress: RequiredParam<ContractAddress>, listingId: RequiredParam<BigNumberish>) => QueryKey;
                readonly getMinimumNextBid: (contractAddress: RequiredParam<ContractAddress>, listingId: RequiredParam<BigNumberish>) => QueryKey;
                readonly getWinner: (contractAddress: RequiredParam<ContractAddress>, listingId: RequiredParam<BigNumberish>) => QueryKey;
            };
            readonly directListings: {
                readonly getAll: (contractAddress: RequiredParam<ContractAddress>, params?: MarketplaceFilter) => QueryKey;
                readonly getAllValid: (contractAddress: RequiredParam<ContractAddress>, params?: MarketplaceFilter) => QueryKey;
                readonly getListing: (contractAddress: RequiredParam<ContractAddress>, listingId: RequiredParam<BigNumberish>) => QueryKey;
                readonly getTotalCount: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
            };
            readonly englishAuctions: {
                readonly getAll: (contractAddress: RequiredParam<ContractAddress>, params?: MarketplaceFilter) => QueryKey;
                readonly getAllValid: (contractAddress: RequiredParam<ContractAddress>, params?: MarketplaceFilter) => QueryKey;
                readonly getAuction: (contractAddress: RequiredParam<ContractAddress>, auctionId: RequiredParam<BigNumberish>) => QueryKey;
                readonly getWinningBid: (contractAddress: RequiredParam<ContractAddress>, auctionId: RequiredParam<BigNumberish>) => QueryKey;
                readonly getTotalCount: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
            };
        };
    };
    readonly extensions: {
        readonly claimConditions: {
            readonly getActive: (contractAddress: RequiredParam<ContractAddress>, tokenId?: BigNumberish, options?: ClaimConditionFetchOptions) => QueryKey;
            readonly getAll: (contractAddress: RequiredParam<ContractAddress>, tokenId?: BigNumberish, options?: ClaimConditionFetchOptions) => QueryKey;
            readonly getClaimerProofs: (contractAddress: RequiredParam<ContractAddress>, tokenId?: BigNumberish) => QueryKey;
            readonly getClaimIneligibilityReasons: (contractAddress: RequiredParam<ContractAddress>, params: {
                walletAddress?: WalletAddress;
                quantity: string | number;
            }, tokenId?: BigNumberish) => QueryKey;
            readonly useActiveClaimConditionForWallet: (contractAddress: RequiredParam<ContractAddress>, walletAddress: WalletAddress, tokenId?: BigNumberish) => QueryKey;
        };
        readonly sales: {
            readonly getRecipient: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        };
        readonly royalties: {
            readonly getDefaultRoyaltyInfo: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        };
        readonly platformFees: {
            readonly get: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        };
        readonly metadata: {
            readonly get: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
        };
        readonly roles: {
            readonly getAll: (contractAddress: RequiredParam<ContractAddress>) => QueryKey;
            readonly get: (contractAddress: RequiredParam<ContractAddress>, role: string) => QueryKey;
        };
    };
};
//# sourceMappingURL=cache-keys.d.ts.map