import { AsyncStorage } from "../../../core/AsyncStorage";
import { WagmiConnector } from "../../../lib/wagmi-connectors";
import { Ethereum } from "./types";
import { type Chain } from "@thirdweb-dev/chains";
import { providers } from "ethers";
export type InjectedConnectorOptions = {
    /** Name of connector */
    name?: string | ((detectedName: string | string[]) => string);
    /**
     * [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193) Ethereum Provider to target
     *
     * @default
     * () => typeof window !== 'undefined' ? window.ethereum : undefined
     */
    getProvider?: () => Ethereum | undefined;
    /**
     * MetaMask and other injected providers do not support programmatic disconnect.
     * This flag simulates the disconnect behavior by keeping track of connection status in storage. See [GitHub issue](https://github.com/MetaMask/metamask-extension/issues/10353) for more info.
     * @default true
     */
    shimDisconnect?: boolean;
};
type ConnectorOptions = InjectedConnectorOptions & Required<Pick<InjectedConnectorOptions, "getProvider">>;
type InjectedConnectorConstructorArg = {
    chains?: Chain[];
    connectorStorage: AsyncStorage;
    options?: InjectedConnectorOptions;
};
export declare class InjectedConnector extends WagmiConnector<Ethereum, ConnectorOptions, providers.JsonRpcSigner> {
    #private;
    readonly id: string;
    /**
     * Name of the injected connector
     */
    readonly name: string;
    /**
     * Whether the connector is ready to be used
     *
     * `true` if the injected provider is found
     */
    readonly ready: boolean;
    connectorStorage: AsyncStorage;
    protected shimDisconnectKey: string;
    constructor(arg: InjectedConnectorConstructorArg);
    /**
     * * Connect to the injected provider
     * * switch to the given chain if `chainId` is specified as an argument
     */
    connect(options?: {
        chainId?: number;
    }): Promise<{
        account: string;
        chain: {
            id: number;
            unsupported: boolean;
        };
        provider: Ethereum;
    }>;
    /**
     * disconnect from the injected provider
     */
    disconnect(): Promise<void>;
    /**
     * @returns The first account address from the injected provider
     */
    getAccount(): Promise<string>;
    /**
     * @returns The `chainId` of the currently connected chain from injected provider normalized to a `number`
     */
    getChainId(): Promise<number>;
    /**
     * get the injected provider
     */
    getProvider(): Promise<Ethereum>;
    /**
     * get a `signer` for given `chainId`
     */
    getSigner({ chainId }?: {
        chainId?: number;
    }): Promise<providers.JsonRpcSigner>;
    /**
     *
     * @returns `true` if the connector is connected and address is available, else `false`
     */
    isAuthorized(): Promise<boolean>;
    /**
     * switch to given chain
     */
    switchChain(chainId: number): Promise<Chain>;
    setupListeners(): Promise<void>;
    /**
     * handles the `accountsChanged` event from the provider
     * * emits `change` event if connected to a different account
     * * emits `disconnect` event if no accounts available
     */
    protected onAccountsChanged: (accounts: string[]) => Promise<void>;
    /**
     * handles the `chainChanged` event from the provider
     * * emits `change` event if connected to a different chain
     */
    protected onChainChanged: (chainId: number | string) => void;
    /**
     * handles the `disconnect` event from the provider
     * * emits `disconnect` event
     */
    protected onDisconnect: (error: Error) => Promise<void>;
    protected isUserRejectedRequestError(error: unknown): boolean;
}
export {};
//# sourceMappingURL=index.d.ts.map