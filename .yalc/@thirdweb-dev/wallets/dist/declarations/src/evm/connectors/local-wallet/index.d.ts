import { ConnectParams, Connector } from "../../interfaces/connector";
import type { LocalWalletConnectionArgs } from "../../wallets/local-wallet";
import type { Chain } from "@thirdweb-dev/chains";
import type { Signer } from "ethers";
import { providers } from "ethers";
import type { Wallet } from "ethers";
export type LocalWalletConnectorOptions = {
    chain: Chain;
    ethersWallet: Wallet;
    chains: Chain[];
    clientId?: string;
    secretKey?: string;
};
export declare class LocalWalletConnector extends Connector<LocalWalletConnectionArgs> {
    #private;
    readonly id: string;
    readonly name: string;
    options: LocalWalletConnectorOptions;
    protected shimDisconnectKey: string;
    constructor(options: LocalWalletConnectorOptions);
    connect(args: ConnectParams<LocalWalletConnectionArgs>): Promise<string>;
    disconnect(): Promise<void>;
    getAddress(): Promise<string>;
    isConnected(): Promise<boolean>;
    getProvider(): Promise<providers.Provider>;
    getSigner(): Promise<Signer>;
    switchChain(chainId: number): Promise<void>;
    protected onChainChanged: (chainId: number | string) => void;
    setupListeners(): Promise<void>;
    updateChains(chains: Chain[]): void;
}
//# sourceMappingURL=index.d.ts.map