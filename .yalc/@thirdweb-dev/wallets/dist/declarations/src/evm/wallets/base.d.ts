import { Chain } from "@thirdweb-dev/chains";
import { AsyncStorage } from "../../core/AsyncStorage";
import type { DAppMetaData } from "../../core/types/dAppMeta";
import { EVMWallet } from "../interfaces";
import { ConnectParams, Connector } from "../interfaces/connector";
import { AbstractWallet } from "./abstract";
export type WalletOptions<TOpts extends Record<string, any> = {}> = {
    chains?: Chain[];
    walletId?: string;
    walletStorage?: AsyncStorage;
    dappMetadata?: DAppMetaData;
    clientId?: string;
} & TOpts;
export type WalletMeta = {
    name: string;
    iconURL: string;
    urls?: {
        android?: string;
        ios?: string;
        chrome?: string;
        firefox?: string;
    };
};
export declare abstract class AbstractClientWallet<TAdditionalOpts extends Record<string, any> = {}, TConnectParams extends Record<string, any> = {}> extends AbstractWallet {
    #private;
    walletId: string;
    protected walletStorage: AsyncStorage;
    protected chains: Chain[];
    protected dappMetadata: DAppMetaData;
    protected options?: WalletOptions<TAdditionalOpts>;
    static meta: WalletMeta;
    getMeta(): WalletMeta;
    constructor(walletId: string, options?: WalletOptions<TAdditionalOpts>);
    protected abstract getConnector(): Promise<Connector<TConnectParams>>;
    /**
     * tries to auto connect to the wallet
     */
    autoConnect(connectOptions?: ConnectParams<TConnectParams>): Promise<string>;
    /**
     * connect to the wallet
     */
    connect(connectOptions?: ConnectParams<TConnectParams>): Promise<string>;
    getConnectParams(): ConnectParams<TConnectParams> | undefined;
    getSigner(): Promise<import("ethers").Signer>;
    disconnect(): Promise<void>;
    switchChain(chainId: number): Promise<void>;
    updateChains(chains: Chain[]): Promise<void>;
    /**
     * If the wallet uses a personal wallet under the hood, return it
     */
    getPersonalWallet(): EVMWallet | undefined;
}
//# sourceMappingURL=base.d.ts.map