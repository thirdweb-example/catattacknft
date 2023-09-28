import { QueryClientProviderProps } from "../../core/providers/query-client";
import { RequiredParam } from "../../core/query-utils/required-param";
import { ComponentWithChildren } from "../../core/types/component";
import { ThirdwebAuthConfig } from "../contexts/thirdweb-auth";
import type { WalletContextState } from "@solana/wallet-adapter-react";
import { Network, ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
interface ThirdwebSDKProviderProps extends QueryClientProviderProps {
    network: RequiredParam<Network>;
    wallet?: WalletContextState;
    authConfig?: ThirdwebAuthConfig;
}
/**
 * Gives access to the ThirdwebSDK instance and other useful hooks to the rest of the app.
 * Requires to be wrapped with a ConnectionProvider and a WalletProvider from @solana/wallet-adapter-react.
 * @example
 * ```tsx
 * import { useWallet } from "@solana/wallet-adapter-react";
 * import { ThirdwebProvider } from "@thirdweb-dev/react/solana";
 *
 * const ThirdwebApp = () => {
 *  const wallet = useWallet();
 *  return (
 *    <ThirdwebSDKProvider network={"devnet"} wallet={wallet}>
 *      <YourApp />
 *    </ThirdwebSDKProvider>
 * )};
 * ```
 */
export declare const ThirdwebSDKProvider: ComponentWithChildren<ThirdwebSDKProviderProps>;
export declare function useSDK(): ThirdwebSDK | null;
export {};
//# sourceMappingURL=base.d.ts.map