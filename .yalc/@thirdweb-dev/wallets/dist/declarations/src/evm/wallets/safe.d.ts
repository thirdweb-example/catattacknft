import { ConnectParams, Connector } from "../interfaces/connector";
import { AbstractClientWallet, WalletOptions } from "./base";
import type { Chain } from "@thirdweb-dev/chains";
import type { SafeConnectionArgs } from "../connectors/safe/types";
import type { SafeConnector as SafeConnectorType } from "../connectors/safe";
export { SafeSupportedChainsSet } from "../connectors/safe/constants";
export type { SafeConnectionArgs } from "../connectors/safe/types";
export type SafeWalletOptions = WalletOptions;
export declare class SafeWallet extends AbstractClientWallet<object, SafeConnectionArgs> {
    connector?: SafeConnectorType;
    static meta: {
        name: string;
        iconURL: string;
    };
    static id: string;
    get walletName(): "Safe Wallet";
    constructor(options?: SafeWalletOptions);
    protected getConnector(): Promise<Connector>;
    updateChains(chains: Chain[]): Promise<void>;
    getPersonalWallet(): import("..").EVMWallet | undefined;
    autoConnect(params: ConnectParams<SafeConnectionArgs>): Promise<string>;
}
//# sourceMappingURL=safe.d.ts.map