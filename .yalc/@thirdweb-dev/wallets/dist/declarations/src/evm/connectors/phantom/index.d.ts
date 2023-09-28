import { AsyncStorage } from "../../../core/AsyncStorage";
import { InjectedConnector, InjectedConnectorOptions } from "../injected";
import type { Chain } from "@thirdweb-dev/chains";
export type PhantomConnectorOptions = Pick<InjectedConnectorOptions, "shimDisconnect"> & {
    /**
     * While "disconnected" with `shimDisconnect`, allows user to select a different Phantom account (than the currently connected account) when trying to connect.
     */
    UNSTABLE_shimOnConnectSelectAccount?: boolean;
};
type PhantomConnectorConstructorArg = {
    chains?: Chain[];
    connectorStorage: AsyncStorage;
    options?: PhantomConnectorOptions;
};
export declare class PhantomConnector extends InjectedConnector {
    #private;
    readonly id: string;
    constructor(arg: PhantomConnectorConstructorArg);
    /**
     * Connect to injected Phantom provider
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