import type { PaperEmbeddedWalletSdk } from "@paperxyz/embedded-wallet-service-sdk";
import type { Chain } from "@thirdweb-dev/chains";
import type { Signer, providers } from "ethers";
import { Connector } from "../../interfaces/connector";
import { PaperWalletConnectionArgs, PaperWalletConnectorOptions } from "./types";
export declare class PaperWalletConnector extends Connector<Record<string, never>> {
    #private;
    readonly id: string;
    readonly name: string;
    ready: boolean;
    private user;
    paper?: Promise<PaperEmbeddedWalletSdk>;
    private options;
    constructor(options: PaperWalletConnectorOptions);
    getPaperSDK(): Promise<PaperEmbeddedWalletSdk>;
    connect(options?: {
        chainId?: number;
    } & PaperWalletConnectionArgs): Promise<string>;
    disconnect(): Promise<void>;
    getAddress(): Promise<string>;
    isConnected(): Promise<boolean>;
    getProvider(): Promise<providers.Provider>;
    getSigner(): Promise<Signer>;
    isAuthorized(): Promise<boolean>;
    switchChain(chainId: number): Promise<void>;
    setupListeners(): Promise<void>;
    updateChains(chains: Chain[]): void;
    protected onAccountsChanged: (accounts: string[]) => Promise<void>;
    protected onChainChanged: (chainId: number | string) => void;
    protected onDisconnect: () => Promise<void>;
    getEmail(): Promise<string | undefined>;
}
//# sourceMappingURL=index.d.ts.map