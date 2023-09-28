import { Chain } from "@thirdweb-dev/chains";
import type { Signer, providers } from "ethers";
import { Connector } from "../../interfaces/connector";
import { EmbeddedWalletSdk } from "./implementations";
import { EmbeddedWalletConnectionArgs, EmbeddedWalletConnectorOptions } from "./types";
export declare class EmbeddedWalletConnector extends Connector<EmbeddedWalletConnectionArgs> {
    #private;
    readonly id: string;
    readonly name: string;
    ready: boolean;
    private user;
    private options;
    constructor(options: EmbeddedWalletConnectorOptions);
    getEmbeddedWalletSDK(): EmbeddedWalletSdk;
    connect(options?: EmbeddedWalletConnectionArgs): Promise<string>;
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