import type { WalletAdapter } from "@solana/wallet-adapter-base";
import { Network } from "@thirdweb-dev/sdk/solana";
import { PropsWithChildren } from "react";
interface ThirdwebProviderProps {
    network: Network;
    wallets?: WalletAdapter[];
    autoConnect?: boolean;
}
/**
 * Gives access to the ThirdwebSDK instance and other useful hooks to the rest of the app.
 * Requires to be wrapped with a ConnectionProvider and a WalletProvider from @solana/wallet-adapter-react.
 * @example
 * ```tsx
 * import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
 *
 * const App = () => {
 *  return (
 *     <ThirdwebProvider network="devnet">
 *       <YourApp />
 *     </ThirdwebProvider>
 * )};
 * ```
 * @beta
 */
export declare const ThirdwebProvider: React.FC<PropsWithChildren<ThirdwebProviderProps>>;
/**
 * @internal
 */
export declare const ThirdwebWrapperProvider: React.FC<PropsWithChildren<{
    network?: Network;
}>>;
export {};
//# sourceMappingURL=full.d.ts.map