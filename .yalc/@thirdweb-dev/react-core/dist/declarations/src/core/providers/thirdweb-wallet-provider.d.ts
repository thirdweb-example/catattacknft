import { DAppMetaData } from "../types/dAppMeta";
import type { WalletConfig, WalletInstance } from "../types/wallet";
import { Chain } from "@thirdweb-dev/chains";
import { ConnectParams, CreateAsyncStorage } from "@thirdweb-dev/wallets";
import { Signer } from "ethers";
import { PropsWithChildren } from "react";
type NonNullable<T> = T extends null | undefined ? never : T;
type WalletConnectParams<I extends WalletInstance> = Parameters<I["connect"]>[0];
type ConnectionStatus = "unknown" | "connected" | "disconnected" | "connecting";
type ConnectFnArgs<I extends WalletInstance> = undefined extends WalletConnectParams<I> ? [
    wallet: WalletConfig<I>,
    connectParams?: NonNullable<WalletConnectParams<I>>
] : [
    wallet: WalletConfig<I>,
    connectParams: NonNullable<WalletConnectParams<I>>
];
type ThirdwebWalletContextData = {
    wallets: WalletConfig[];
    signer?: Signer;
    activeWallet?: WalletInstance;
    activeWalletConfig?: WalletConfig;
    connect: <I extends WalletInstance>(...args: ConnectFnArgs<I>) => Promise<I>;
    disconnect: () => Promise<void>;
    connectionStatus: ConnectionStatus;
    setConnectionStatus: (status: ConnectionStatus) => void;
    createWalletInstance: <I extends WalletInstance>(Wallet: WalletConfig<I>) => I;
    createdWalletInstance?: WalletInstance;
    createWalletStorage: CreateAsyncStorage;
    switchChain: (chain: number) => Promise<void>;
    chainToConnect?: Chain;
    activeChain: Chain;
    setConnectedWallet: (wallet: WalletInstance, params?: ConnectParams<Record<string, any>>) => void;
    /**
     * Get wallet config object from wallet instance
     */
    getWalletConfig: (walletInstance: WalletInstance) => WalletConfig | undefined;
    activeChainSetExplicitly: boolean;
    clientId?: string;
};
export declare function ThirdwebWalletProvider(props: PropsWithChildren<{
    activeChain: Chain;
    supportedWallets: WalletConfig[];
    shouldAutoConnect?: boolean;
    createWalletStorage: CreateAsyncStorage;
    dAppMeta?: DAppMetaData;
    chains: Chain[];
    autoSwitch?: boolean;
    autoConnectTimeout?: number;
    clientId?: string;
    activeChainSetExplicitly: boolean;
}>): import("react/jsx-runtime").JSX.Element;
export declare function useWalletContext(): ThirdwebWalletContextData;
export {};
//# sourceMappingURL=thirdweb-wallet-provider.d.ts.map