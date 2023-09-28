import { Connector } from "../interfaces/connector";
import { AbstractClientWallet, WalletOptions } from "./base";
export declare class FrameWallet extends AbstractClientWallet {
    connector?: Connector;
    static id: string;
    get walletName(): string;
    constructor(options?: WalletOptions);
    protected getConnector(): Promise<Connector>;
}
//# sourceMappingURL=frame.d.ts.map