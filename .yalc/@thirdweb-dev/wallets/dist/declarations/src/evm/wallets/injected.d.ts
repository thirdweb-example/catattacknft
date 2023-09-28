import { Connector } from "../interfaces/connector";
import { AbstractClientWallet, WalletOptions } from "./base";
export declare class InjectedWallet extends AbstractClientWallet {
    connector?: Connector;
    static id: "injected";
    get walletName(): string;
    constructor(options?: WalletOptions);
    protected getConnector(): Promise<Connector>;
}
//# sourceMappingURL=injected.d.ts.map