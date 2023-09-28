import { AsyncStorage } from "../../../core/AsyncStorage";
import { InjectedConnector, InjectedConnectorOptions } from "../injected";
import type { Chain } from "@thirdweb-dev/chains";
export type MetaMaskConnectorOptions = Pick<InjectedConnectorOptions, "shimDisconnect"> & {
    /**
     * While "disconnected" with `shimDisconnect`, allows user to select a different MetaMask account (than the currently connected account) when trying to connect.
     */
    UNSTABLE_shimOnConnectSelectAccount?: boolean;
};
type MetamaskConnectorConstructorArg = {
    chains?: Chain[];
    connectorStorage: AsyncStorage;
    options?: MetaMaskConnectorOptions;
};
export declare class MetaMaskConnector extends InjectedConnector {
    #private;
    readonly id: string;
    constructor(arg: MetamaskConnectorConstructorArg);
    /**
     * Connect to injected MetaMask provider
     */
    connect(options?: {
        chainId?: number;
    }): Promise<{
        chain: {
            id: number;
            unsupported: boolean;
        };
        provider: import("../injected/types").Ethereum;
        account: string;
    }>;
    switchAccount(): Promise<void>;
}
export {};
//# sourceMappingURL=index.d.ts.map