import type { WalletConnectConnector as WalletConnectConnectorType } from "../connectors/wallet-connect";
import { Connector } from "../interfaces/connector";
import { AbstractClientWallet, WalletOptions } from "./base";
import type { PhantomConnector as PhantomConnectorType } from "../connectors/phantom";
type PhantomWalletOptions = WalletOptions;
export declare class PhantomWallet extends AbstractClientWallet {
    connector?: Connector;
    walletConnectConnector?: WalletConnectConnectorType;
    phantomConnector?: PhantomConnectorType;
    isInjected: boolean;
    static meta: {
        name: string;
        iconURL: string;
        urls: {
            chrome: string;
        };
    };
    static id: string;
    get walletName(): "Phantom";
    constructor(options: PhantomWalletOptions);
    protected getConnector(): Promise<Connector>;
}
export {};
//# sourceMappingURL=phantom.d.ts.map