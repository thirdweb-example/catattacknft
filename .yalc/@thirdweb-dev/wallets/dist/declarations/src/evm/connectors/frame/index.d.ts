import { providers } from "ethers";
import type Provider from "ethereum-provider";
import type { Address } from "abitype";
import type { Chain } from "@thirdweb-dev/chains";
import { WagmiConnector } from "../../../lib/wagmi-connectors";
import { Ethereum } from "../injected/types";
import { AsyncStorage } from "../../../core";
export type FrameConnectorOptions = {
    /**
     * eth-provider and the Frame Companion injected provider do not support programmatic disconnect.
     * This flag simulates the disconnect behavior by keeping track of connection status in storage.
     * @default true
     */
    shimDisconnect?: boolean;
};
export type FrameInjectedProvider = Provider & {
    providers: Ethereum[];
    isFrame: true;
};
export declare class FrameConnector extends WagmiConnector<Provider | Ethereum | undefined, Required<FrameConnectorOptions>, providers.JsonRpcSigner> {
    #private;
    readonly id = "frame";
    readonly name = "Frame";
    readonly ready = true;
    protected shimDisconnectKey: string;
    connectorStorage: AsyncStorage;
    constructor({ chains, options: suppliedOptions, connectorStorage, }: {
        chains?: Chain[];
        connectorStorage: AsyncStorage;
        options?: FrameConnectorOptions;
    });
    connect(config?: {
        chainId?: number;
    } | undefined): Promise<{
        account: string;
        provider: Provider;
        chain: {
            id: number;
            unsupported: boolean;
        };
    }>;
    disconnect(): Promise<void>;
    getAccount(): Promise<string>;
    getChainId(): Promise<number>;
    getProvider(): Promise<Provider>;
    /**
     * get a `signer` for given `chainId`
     */
    getSigner({ chainId }?: {
        chainId?: number;
    }): Promise<providers.JsonRpcSigner>;
    isAuthorized(): Promise<boolean>;
    switchChain(chainId: number): Promise<Chain>;
    watchAsset({ address, decimals, image, symbol, }: {
        address: Address;
        decimals?: number;
        image?: string;
        symbol: string;
    }): Promise<unknown>;
    setupListeners(): Promise<void>;
    protected onAccountsChanged: (accounts: string[]) => void;
    protected onChainChanged: (chainId: number | string) => void;
    protected onDisconnect: () => void;
    protected isUserRejectedRequestError(error: unknown): boolean;
    private injectedProvider;
    private isInjected;
    private createProvider;
}
//# sourceMappingURL=index.d.ts.map