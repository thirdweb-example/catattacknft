import { Chain } from "@thirdweb-dev/chains";
type SwitchNetwork = (chainId: number) => Promise<{
    data: Chain | undefined;
    error: undefined;
} | {
    data: undefined;
    error: Error;
}>;
type NetworkMetadata = {
    data: {
        chain: Chain | {
            chainId: number;
            unsupported: true;
        } | undefined;
        chains: Chain[];
    };
    error: Error | undefined;
    loading: boolean | undefined;
};
/**
 *
 * @deprecated - use `useChain`, `useSwitchChain`, `useChainId` instead
 *
 * Hook for getting metadata about the network the current wallet is connected to and switching networks
 *
 * @example
 * ```javascript
 * import { useNetwork } from "@thirdweb-dev/react";
 *
 * const App = () => {
 *   const [, switchNetwork] = useNetwork();
 *   return (
 *      // switchNetwork is undefined if the wallet does not support programmatic network switching
 *      // 137 is the chainId for Polygon in this example
 *     <button onClick={() => switchNetwork(137)}>
 *        Switch Network
 *     </button>
 *   );
 * };
```
 *
 * It's important to note that some wallet apps do not support programmatic network switching and switchNetwork will be undefined.
 * For those situations, you can typically switch networks in the wallet app this hook will still work.
 *
 * @public
 */
export declare function useNetwork(): [NetworkMetadata, SwitchNetwork | undefined];
export {};
//# sourceMappingURL=useNetwork.d.ts.map