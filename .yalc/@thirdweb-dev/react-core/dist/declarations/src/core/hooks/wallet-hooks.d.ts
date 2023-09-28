/**
 * @returns the current active wallet instance
 */
export declare function useWallet(): import("../..").WalletInstance | undefined;
/**
 * @returns the current active wallet's configuration object
 */
export declare function useWalletConfig(): import("../..").WalletConfig | undefined;
/**
 *
 * @returns `supportedWallets` configured in the `<ThirdwebProvider/>`
 */
export declare function useWallets(): import("../..").WalletConfig[];
/**
 *
 * @returns a method to connect to a wallet class
 */
export declare function useConnect(): <I extends import("../..").WalletInstance>(...args: undefined extends Parameters<I["connect"]>[0] ? [wallet: import("../..").WalletConfig<I>, connectParams?: (Parameters<I["connect"]>[0] extends infer T ? T extends Parameters<I["connect"]>[0] ? T extends null | undefined ? never : T : never : never) | undefined] : [wallet: import("../..").WalletConfig<I>, connectParams: Parameters<I["connect"]>[0] extends infer T_1 ? T_1 extends Parameters<I["connect"]>[0] ? T_1 extends null | undefined ? never : T_1 : never : never]) => Promise<I>;
/**
 *
 * @returns a method to disconnect from the current active wallet
 */
export declare function useDisconnect(): () => Promise<void>;
/**
 *
 * @returns the connection status of the wallet
 *
 * It can be one of the following:
 * 1. `unknown` - when wallet connection status is not yet known
 * 2. `connecting` - when wallet is connecting
 * 3. `connected` - when wallet is connected
 * 4. `disconnected` - when wallet is disconnected
 *
 */
export declare function useConnectionStatus(): "unknown" | "connected" | "disconnected" | "connecting";
/**
 *
 * @returns a method to create an instance of given wallet class
 */
export declare function useSetConnectionStatus(): (status: "unknown" | "connected" | "disconnected" | "connecting") => void;
/**
 *
 * @returns a method to create an instance of given wallet class
 */
export declare function useCreateWalletInstance(): <I extends import("../..").WalletInstance>(Wallet: import("../..").WalletConfig<I>) => I;
/**
 *
 * @returns a method to connect the wallet to network/chain with given chainId
 */
export declare function useSwitchChain(): (chain: number) => Promise<void>;
/**
 *
 * @returns a method to set a connected wallet instance
 */
export declare function useSetConnectedWallet(): (wallet: import("../..").WalletInstance, params?: import("@thirdweb-dev/wallets").ConnectParams<Record<string, any>> | undefined) => void;
//# sourceMappingURL=wallet-hooks.d.ts.map