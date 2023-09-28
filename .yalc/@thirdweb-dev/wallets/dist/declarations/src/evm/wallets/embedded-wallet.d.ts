import { EmbeddedWalletAdditionalOptions, EmbeddedWalletConnectionArgs } from "../connectors/embedded-wallet/types";
import { ConnectParams, Connector } from "../interfaces/connector";
import { AbstractClientWallet, WalletOptions } from "./base";
export type EmbeddedWalletOptions = WalletOptions<EmbeddedWalletAdditionalOptions>;
export type { EmbeddedWalletAdditionalOptions } from "../connectors/embedded-wallet/types";
export declare class EmbeddedWallet extends AbstractClientWallet<EmbeddedWalletAdditionalOptions, EmbeddedWalletConnectionArgs> {
    connector?: Connector;
    static id: string;
    static meta: {
        name: string;
        iconURL: string;
    };
    get walletName(): "Embedded Wallet";
    chain: EmbeddedWalletAdditionalOptions["chain"];
    constructor(options: EmbeddedWalletOptions);
    protected getConnector(): Promise<Connector>;
    getConnectParams(): ConnectParams<EmbeddedWalletConnectionArgs> | undefined;
    getEmail(): Promise<string | undefined>;
    getEmbeddedWalletSDK(): Promise<import("..").EmbeddedWalletSdk>;
}
//# sourceMappingURL=embedded-wallet.d.ts.map