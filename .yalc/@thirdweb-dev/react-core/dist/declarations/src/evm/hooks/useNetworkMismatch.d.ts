/**
 * Hook for checking whether the connected wallet is on the correct network specified by the `network` passed to the `<ThirdwebProvider />`.
 *
 * ```javascript
 * import { useNetworkMismatch } from "@thirdweb-dev/react"
 * ```
 *
 * @returns `true` if the chainId of the connected wallet is different from the chainId of the network passed into <ThirdwebProvider />
 *
 * @see {@link https://portal.thirdweb.com/react/react.usenetworkmismatch?utm_source=sdk | Documentation}
 *
 * @example
 * You can check if a users wallet is connected to the correct chain ID as follows:
 * ```javascript
 * import { useNetworkMismatch } from "@thirdweb-dev/react"
 *
 * const App = () => {
 *   const isMismatched = useNetworkMismatch()
 *
 *   return <div>{isMismatched}</div>
 * }
 * ```
 *
 * From here, you can prompt users to switch their network using the `useNetwork` hook.
 *
 * @public
 */
export declare function useNetworkMismatch(): boolean;
//# sourceMappingURL=useNetworkMismatch.d.ts.map