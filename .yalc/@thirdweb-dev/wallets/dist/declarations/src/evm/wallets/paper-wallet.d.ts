import { PaperWalletAdditionalOptions as PaperWalletAdditionalOptions_, PaperWalletConnectionArgs } from "../connectors/paper/types";
import { ConnectParams, Connector } from "../interfaces/connector";
import { AbstractClientWallet, WalletOptions } from "./base";
export type { PaperWalletAdditionalOptions } from "../connectors/paper/types";
export type PaperWalletOptions = WalletOptions<PaperWalletAdditionalOptions_>;
export declare class PaperWallet extends AbstractClientWallet<PaperWalletAdditionalOptions_, PaperWalletConnectionArgs> {
    connector?: Connector;
    static id: string;
    static meta: {
        name: string;
        iconURL: string;
    };
    get walletName(): "Paper Wallet";
    paperClientId: string;
    chain: PaperWalletAdditionalOptions_["chain"];
    constructor(options: PaperWalletOptions);
    private isClientIdLegacyPaper;
    protected getConnector(): Promise<Connector>;
    getConnectParams(): ConnectParams<PaperWalletConnectionArgs> | undefined;
    getEmail(): Promise<string | undefined>;
    getPaperSDK(): Promise<import("@paperxyz/embedded-wallet-service-sdk").PaperEmbeddedWalletSdk<import("@paperxyz/embedded-wallet-service-sdk").RecoveryShareManagement.USER_MANAGED>>;
}
//# sourceMappingURL=paper-wallet.d.ts.map