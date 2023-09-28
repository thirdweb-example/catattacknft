import { Chain } from "@thirdweb-dev/chains";
import { default as EventEmitter } from "eventemitter3";
export type WagmiConnectorData<Provider = any> = {
    account?: string;
    chain?: {
        id: number;
        unsupported: boolean;
    };
    provider?: Provider;
};
export interface WagmiConnectorEvents<Provider = any> {
    change(data: WagmiConnectorData<Provider>): void;
    connect(data: WagmiConnectorData<Provider>): void;
    message({ type, data }: {
        type: string;
        data?: unknown;
    }): void;
    disconnect(): void;
    error(error: Error): void;
}
export declare abstract class WagmiConnector<Provider = any, Options = any, Signer = any> extends EventEmitter<WagmiConnectorEvents<Provider>> {
    /** Unique connector id */
    abstract readonly id: string;
    /** Connector name */
    abstract readonly name: string;
    /** Chains connector supports */
    chains: Chain[];
    /** Options to use with connector */
    readonly options: Options;
    /** Whether connector is usable */
    abstract readonly ready: boolean;
    constructor({ chains, options, }: {
        chains?: Chain[];
        options: Options;
    });
    abstract connect(config?: {
        chainId?: number;
    }): Promise<Required<WagmiConnectorData>>;
    abstract disconnect(): Promise<void>;
    abstract getAccount(): Promise<string>;
    abstract getChainId(): Promise<number>;
    abstract getProvider(config?: {
        chainId?: number;
    }): Promise<Provider>;
    abstract getSigner(config?: {
        chainId?: number;
    }): Promise<Signer>;
    abstract isAuthorized(): Promise<boolean>;
    switchChain?(chainId: number): Promise<Chain>;
    protected abstract onAccountsChanged(accounts: string[]): void;
    protected abstract onChainChanged(chain: number | string): void;
    protected abstract onDisconnect(error: Error): void;
    protected getBlockExplorerUrls(chain: Chain): string[] | undefined;
    protected isChainUnsupported(chainId: number): boolean;
    abstract setupListeners(): Promise<void>;
    updateChains(chains: Chain[]): void;
}
//# sourceMappingURL=WagmiConnector.d.ts.map