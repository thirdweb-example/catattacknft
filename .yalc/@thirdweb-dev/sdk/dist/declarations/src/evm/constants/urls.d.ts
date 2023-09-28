import type { ChainOrRpcUrl, NetworkInput } from "../core/types";
import type { SDKOptions, SDKOptionsOutput } from "../schema/sdk-options";
import type { ChainInfo } from "../schema/shared/ChainInfo";
import type { Chain } from "@thirdweb-dev/chains";
import { providers } from "ethers";
import type { Signer } from "ethers";
/**
 * Get an ethers provider for the specified network
 *
 * @internal
 */
export declare function getChainProvider(network: ChainOrRpcUrl, sdkOptions: SDKOptions): providers.Provider;
export declare function getChainIdFromNetwork(network: ChainOrRpcUrl, options: SDKOptionsOutput): number;
export declare function getChainIdOrName(network: NetworkInput): Promise<number | string>;
/**
 * Check whether a NetworkInput value is a Chain config (naively, without parsing)
 */
export declare function isChainConfig(network: NetworkInput): network is Chain | ChainInfo;
/**
 * Get an ethers provider based on the specified RPC URL
 *
 * @param rpcUrl - The RPC URL
 * @param chainId - The optional chain ID
 * @returns The provider for the specified RPC URL
 *
 * @internal
 */
export declare function getProviderFromRpcUrl(rpcUrl: string, sdkOptions: SDKOptions, chainId?: number): providers.BaseProvider;
/**
 * @internal
 */
export declare function getSignerAndProvider(network: NetworkInput, options?: SDKOptions): [Signer | undefined, providers.Provider];
//# sourceMappingURL=urls.d.ts.map