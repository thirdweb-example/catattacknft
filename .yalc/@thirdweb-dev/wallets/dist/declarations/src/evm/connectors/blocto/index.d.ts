import { WagmiConnector, WagmiConnectorData } from "../../../lib/wagmi-connectors";
import type { EthereumProviderConfig, EthereumProviderInterface as BloctoProvider } from "@blocto/sdk";
import { providers } from "ethers";
import type { Chain } from "@thirdweb-dev/chains";
type BloctoSigner = providers.JsonRpcSigner;
type BloctoOptions = Partial<EthereumProviderConfig>;
export declare class BloctoConnector extends WagmiConnector<BloctoProvider, BloctoOptions, BloctoSigner> {
    #private;
    readonly id: string;
    readonly name = "Blocto";
    readonly ready = true;
    constructor({ chains, options, }: {
        chains?: Chain[];
        options?: BloctoOptions;
    });
    connect(config?: {
        chainId?: number;
    }): Promise<Required<WagmiConnectorData<BloctoProvider>>>;
    disconnect(): Promise<void>;
    getAccount(): Promise<string>;
    getChainId(): Promise<number>;
    getProvider({ chainId }?: {
        chainId?: number;
    }): Promise<BloctoProvider>;
    getSigner({ chainId, }?: {
        chainId?: number;
    }): Promise<BloctoSigner>;
    isAuthorized(): Promise<boolean>;
    switchChain(chainId: number): Promise<Chain>;
    protected onAccountsChanged(): void;
    protected onChainChanged(chain: string | number): Promise<void>;
    protected onDisconnect(): void;
    setupListeners(): Promise<void>;
    removeListeners(): Promise<void>;
}
export {};
//# sourceMappingURL=index.d.ts.map