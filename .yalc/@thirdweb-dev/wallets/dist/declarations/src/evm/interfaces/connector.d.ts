import type { Chain } from "@thirdweb-dev/chains";
import type { Signer, providers } from "ethers";
import EventEmitter from "eventemitter3";
import { WagmiConnector } from "../../lib/wagmi-core";
export declare abstract class Connector<TConnectParams extends Record<string, any> = {}> extends EventEmitter {
    abstract connect(args?: ConnectParams<TConnectParams>): Promise<string>;
    abstract disconnect(): Promise<void>;
    abstract getAddress(): Promise<string>;
    abstract getSigner(): Promise<Signer>;
    abstract getProvider(): Promise<providers.Provider>;
    abstract switchChain(chainId: number): Promise<void>;
    abstract isConnected(): Promise<boolean>;
    abstract setupListeners(): Promise<void>;
    abstract updateChains(chains: Chain[]): void;
}
export type ConnectParams<TOpts extends Record<string, any> = {}> = {
    chainId?: number;
} & TOpts;
export declare class WagmiAdapter<TConnectParams extends Record<string, any> = {}> extends Connector<TConnectParams> {
    wagmiConnector: WagmiConnector<any, any, any>;
    constructor(wagmiConnector: WagmiConnector);
    connect(args?: ConnectParams<TConnectParams>): Promise<string>;
    disconnect(): Promise<void>;
    isConnected(): Promise<boolean>;
    getAddress(): Promise<string>;
    getSigner(): Promise<Signer>;
    getProvider(): Promise<providers.Provider>;
    switchChain(chainId: number): Promise<void>;
    setupConnectorListeners(): void;
    setupListeners(): Promise<void>;
    updateChains(chains: Chain[]): void;
}
//# sourceMappingURL=connector.d.ts.map