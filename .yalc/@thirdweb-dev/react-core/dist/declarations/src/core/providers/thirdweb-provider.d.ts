import { ThirdwebSDKProviderProps } from "../../evm/providers/types";
import { WalletConfig } from "../types/wallet";
import { Chain } from "@thirdweb-dev/chains";
import { CreateAsyncStorage, DAppMetaData } from "@thirdweb-dev/wallets";
import React from "react";
/**
 * The possible props for the ThirdwebProvider.
 */
export interface ThirdwebProviderCoreProps<TChains extends Chain[]> extends ThirdwebSDKProviderProps<TChains> {
    /**
     * An array of wallets that the dApp supports
     * If not provided, will default to Metamask (injected), Coinbase wallet and Device wallet
     *
     * @example
     * You can Import the wallets you want to support from `@thirdweb-dev/wallets` and pass them to `supportedWallets`
     *
     * ```jsx title="App.jsx"
     * import { ThirdwebProvider } from "@thirdweb-dev/react";
     *
     * const App = () => {
     *   return (
     *     <ThirdwebProvider>
     *       <YourApp />
     *     </ThirdwebProvider>
     *   );
     * };
     * ```
     */
    supportedWallets: WalletConfig[];
    /**
     * Metadata to pass to wallet connect and walletlink wallet connect. (Used to show *which* dApp is being connected to in mobile wallets that support it)
     * Defaults to just the name being passed as `thirdweb powered dApp`.
     */
    dAppMeta?: DAppMetaData;
    /**
     * Whether or not to attempt auto-connect to a wallet.
     */
    autoConnect?: boolean;
    theme?: "light" | "dark";
    createWalletStorage?: CreateAsyncStorage;
    /**
     * Whether or not to automatically switch to wallet's network to active chain
     */
    autoSwitch?: boolean;
    /**
     * Timeout for auto-connecting wallet in milliseconds
     *
     * If wallet fails to connect in this time, it will stop trying to connect and user will have to manually connect
     *
     * @defaultValue 15000
     */
    autoConnectTimeout?: number;
}
export declare const ThirdwebProviderCore: <TChains extends Chain[]>({ createWalletStorage, ...props }: React.PropsWithChildren<ThirdwebProviderCoreProps<TChains>>) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=thirdweb-provider.d.ts.map