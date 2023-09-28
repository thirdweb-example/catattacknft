import { AsyncStorage } from "../../../core/AsyncStorage";
import { InjectedConnector, InjectedConnectorOptions } from "../injected";
import type { Chain } from "@thirdweb-dev/chains";
export type RainbowConnectorOptions = Pick<InjectedConnectorOptions, "shimDisconnect"> & {
    /**
     * While "disconnected" with `shimDisconnect`, allows user to select a different Rainbow account (than the currently connected account) when trying to connect.
     */
    UNSTABLE_shimOnConnectSelectAccount?: boolean;
};
type RainbowConnectorConstructorArg = {
    chains?: Chain[];
    connectorStorage: AsyncStorage;
    options?: RainbowConnectorOptions;
};
export declare class RainbowConnector extends InjectedConnector {
    #private;
    readonly id: string;
    constructor(arg: RainbowConnectorConstructorArg);
    /**
     * Connect to injected Rainbow provider
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
}
export {};
//# sourceMappingURL=index.d.ts.map