import { AsyncStorage } from "../../../core";
import { DAppMetaData } from "../../../core/types/dAppMeta";
import { WagmiConnector } from "../../../lib/wagmi-core";
import { type Chain } from "@thirdweb-dev/chains";
import type WalletConnectProvider from "@walletconnect/ethereum-provider";
import { providers } from "ethers";
import { QRModalOptions } from "./qrModalOptions";
type WalletConnectOptions = {
    qrModalOptions?: QRModalOptions;
    projectId: string;
    qrcode?: boolean;
    dappMetadata: DAppMetaData;
    storage: AsyncStorage;
    /**
     * If a new chain is added to a previously existing configured connector `chains`, this flag
     * will determine if that chain should be considered as stale. A stale chain is a chain that
     * WalletConnect has yet to establish a relationship with (ie. the user has not approved or
     * rejected the chain).
     * Defaults to `true`.
     *
     * Preface: Whereas WalletConnect v1 supported dynamic chain switching, WalletConnect v2 requires
     * the user to pre-approve a set of chains up-front. This comes with consequent UX nuances (see below) when
     * a user tries to switch to a chain that they have not approved.
     *
     * This flag mainly affects the behavior when a wallet does not support dynamic chain authorization
     * with WalletConnect v2.
     *
     * If `true` (default), the new chain will be treated as a stale chain. If the user
     * has yet to establish a relationship (approved/rejected) with this chain in their WalletConnect
     * session, the connector will disconnect upon the dapp auto-connecting, and the user will have to
     * reconnect to the dapp (revalidate the chain) in order to approve the newly added chain.
     * This is the default behavior to avoid an unexpected error upon switching chains which may
     * be a confusing user experience (ie. the user will not know they have to reconnect
     * unless the dapp handles these types of errors).
     *
     * If `false`, the new chain will be treated as a validated chain. This means that if the user
     * has yet to establish a relationship with the chain in their WalletConnect session, wagmi will successfully
     * auto-connect the user. This comes with the trade-off that the connector will throw an error
     * when attempting to switch to the unapproved chain. This may be useful in cases where a dapp constantly
     * modifies their configured chains, and they do not want to disconnect the user upon
     * auto-connecting. If the user decides to switch to the unapproved chain, it is important that the
     * dapp handles this error and prompts the user to reconnect to the dapp in order to approve
     * the newly added chain.
     *
     */
    isNewChainsStale?: boolean;
};
type WalletConnectSigner = providers.JsonRpcSigner;
type ConnectConfig = {
    /** Target chain to connect to. */
    chainId?: number;
    /** If provided, will attempt to connect to an existing pairing. */
    pairingTopic?: string;
};
export declare class WalletConnectConnector extends WagmiConnector<WalletConnectProvider, WalletConnectOptions, WalletConnectSigner> {
    #private;
    readonly id: string;
    readonly name = "WalletConnect";
    readonly ready = true;
    filteredChains: Chain[];
    constructor(config: {
        chains?: Chain[];
        options: WalletConnectOptions;
    });
    connect({ chainId: chainIdP, pairingTopic }?: ConnectConfig): Promise<{
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
    getProvider({ chainId }?: {
        chainId?: number;
    }): Promise<WalletConnectProvider>;
    getSigner({ chainId }?: {
        chainId?: number;
    }): Promise<providers.JsonRpcSigner>;
    isAuthorized(): Promise<boolean>;
    switchChain(chainId: number): Promise<Chain>;
    setupListeners(): Promise<void>;
    protected onAccountsChanged: (accounts: string[]) => void;
    protected onChainChanged: (chainId: number | string) => Promise<void>;
    protected onDisconnect: () => Promise<void>;
    protected onDisplayUri: (uri: string) => void;
    protected onConnect: () => void;
}
export {};
//# sourceMappingURL=index.d.ts.map