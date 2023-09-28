import { ContractAddress } from "../types";
import { Chain } from "@thirdweb-dev/chains";
/**
 * A hook to get the native or (optional) ERC20 token balance of the connected wallet.
 *
 * @param tokenAddress - the address of the token contract, if empty will use the chain's native token
 * @returns the balance of the connected wallet (native or ERC20)
 * @beta
 */
export declare function useBalance(tokenAddress?: ContractAddress): import("@tanstack/react-query").UseQueryResult<{
    symbol: string;
    value: import("ethers").BigNumber;
    name: string;
    decimals: number;
    displayValue: string;
} | undefined, unknown>;
/**
 * @internal
 */
export declare function useConnectedWallet(): import("ethers").Signer | undefined;
/**
 * Hook for accessing the address of the connected wallet
 *
 * ```javascript
 * import { useAddress } from "@thirdweb-dev/react"
 * ```
 *
 *
 * @example
 * To get the address of the connected wallet, you can use the hook as follows:
 *
 * ```javascript
 * import { useAddress } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const address = useAddress()
 *
 *   return <div>{address}</div>
 * }
 * ```
 *
 * The `address` variable will hold the address of the connected wallet if a user has connected using one of the supported wallet connection hooks.
 *
 * @see {@link https://portal.thirdweb.com/react/react.useaddress?utm_source=sdk | Documentation}
 *
 * @public
 */
export declare function useAddress(): string | undefined;
/**
 * Hook for accessing the chain ID of the network the current wallet is connected to
 *
 * ```javascript
 * import { useChainId } from "@thirdweb-dev/react"
 * ```
 *
 * @example
 * You can get the chain ID of the connected wallet by using the hook as follows:
 * ```javascript
 * import { useChainId } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const chainId = useChainId()
 *
 *   return <div>{chainId}</div>
 * }
 * ```
 * @see {@link https://portal.thirdweb.com/react/react.usechainid?utm_source=sdk | Documentation}
 * @public
 */
export declare function useChainId(): number | undefined;
/**
 * Hook for accessing the active Chain the current wallet is connected to
 *
 * ```javascript
 * import { useChain } from "@thirdweb-dev/react-core"
 * ```
 *
 * @example
 * You can get the chain of the connected wallet by using the hook as follows:
 * ```javascript
 * import { useChain } from "@thirdweb-dev/react-core"
 *
 * const App = () => {
 *   const chain = useChain()
 *
 *   return <div>{chain.chainId}</div>
 * }
 * ```
 * @see {@link https://portal.thirdweb.com/react/react.useActiveChain?utm_source=sdk | Documentation}
 * @public
 */
export declare function useChain(): Chain | undefined;
/**
 * @deprecated
 *
 * This hook is renamed to `useChain`
 *
 * use the `useChain` hook instead
 */
export declare function useActiveChain(): Chain | undefined;
//# sourceMappingURL=wallet.d.ts.map