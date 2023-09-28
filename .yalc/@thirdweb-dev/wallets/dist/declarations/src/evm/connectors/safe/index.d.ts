import { ConnectParams, Connector } from "../../interfaces/connector";
import type { SafeConnectionArgs } from "./types";
import { ethers } from "ethers";
import type { Signer } from "ethers";
import { EVMWallet } from "../../interfaces";
export declare class SafeConnector extends Connector<SafeConnectionArgs> {
    static supportedChains: string[];
    supportedChains: string[];
    readonly id = "safe-wallet";
    ready: boolean;
    name: string;
    previousConnector?: EVMWallet;
    private safeSigner?;
    personalWallet?: EVMWallet;
    constructor();
    connect(args: ConnectParams<SafeConnectionArgs>): Promise<string>;
    private createSafeSigner;
    disconnect(): Promise<void>;
    getAddress(): Promise<string>;
    getChainId(): Promise<number>;
    getProvider(): Promise<ethers.providers.Provider>;
    getSigner(): Promise<Signer>;
    isConnected(): Promise<boolean>;
    protected onAccountsChanged(accounts: string[]): void;
    protected onDisconnect(): void;
    switchChain(): Promise<void>;
    updateChains(): void;
    setupListeners(): Promise<void>;
}
//# sourceMappingURL=index.d.ts.map