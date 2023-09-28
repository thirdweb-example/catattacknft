import type { CoinbaseWalletConnector } from "../connectors/coinbase-wallet";
import { Connector } from "../interfaces/connector";
import { AbstractClientWallet, WalletOptions } from "./base";
export type CoinbaseWalletOptions = WalletOptions<{
    headlessMode?: boolean;
    theme?: "dark" | "light";
}>;
export declare class CoinbaseWallet extends AbstractClientWallet {
    connector?: Connector;
    coinbaseConnector?: CoinbaseWalletConnector;
    static meta: {
        iconURL: string;
        name: string;
        urls: {
            chrome: string;
            android: string;
            ios: string;
        };
    };
    static id: string;
    get walletName(): "Coinbase Wallet";
    headlessMode: boolean;
    theme: "dark" | "light";
    constructor(options?: CoinbaseWalletOptions);
    protected getConnector(): Promise<Connector>;
    getQrUrl(): Promise<string | null>;
}
//# sourceMappingURL=coinbase-wallet.d.ts.map