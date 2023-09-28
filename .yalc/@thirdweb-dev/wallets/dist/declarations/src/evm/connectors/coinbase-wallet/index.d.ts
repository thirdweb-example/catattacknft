import { WagmiConnector } from "../../../lib/wagmi-connectors";
import type { CoinbaseWalletProvider } from "@coinbase/wallet-sdk";
import type { CoinbaseWalletSDKOptions } from "@coinbase/wallet-sdk/dist/CoinbaseWalletSDK";
import type { Chain } from "@thirdweb-dev/chains";
import { providers } from "ethers";
type Options = CoinbaseWalletSDKOptions & {
    /**
     * Fallback Ethereum JSON RPC URL
     * @default ""
     */
    jsonRpcUrl?: string;
    /**
     * Fallback Ethereum Chain ID
     * @default 1
     */
    chainId?: number;
};
export declare class CoinbaseWalletConnector extends WagmiConnector<CoinbaseWalletProvider, Options, providers.JsonRpcSigner> {
    #private;
    readonly id: string;
    readonly name = "Coinbase Wallet";
    readonly ready = true;
    constructor({ chains, options }: {
        chains?: Chain[];
        options: Options;
    });
    connect({ chainId }?: {
        chainId?: number;
    }): Promise<{
        account: string;
        chain: {
            id: number;
            unsupported: boolean;
        };
        provider: providers.Web3Provider;
    }>;
    disconnect(): Promise<void>;
    getAccount(): Promise<string>;
    getChainId(): Promise<number>;
    getProvider(): Promise<CoinbaseWalletProvider>;
    getSigner({ chainId }?: {
        chainId?: number;
    }): Promise<providers.JsonRpcSigner>;
    isAuthorized(): Promise<boolean>;
    switchChain(chainId: number): Promise<Chain>;
    protected onAccountsChanged: (accounts: string[]) => void;
    protected onChainChanged: (chainId: number | string) => void;
    protected onDisconnect: () => void;
    setupListeners(): Promise<void>;
    getQrUrl(): Promise<string | null>;
}
export {};
//# sourceMappingURL=index.d.ts.map