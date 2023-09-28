import { Connector } from "../interfaces/connector";
import { AbstractClientWallet, WalletMeta, WalletOptions } from "./base";
import { Chain } from "@thirdweb-dev/chains";
type BloctoOptions = {
    appId?: string;
    chain?: Chain;
};
export declare class BloctoWallet extends AbstractClientWallet<BloctoOptions> {
    connector?: Connector;
    name: string;
    static id: string;
    static meta: WalletMeta;
    constructor(options?: WalletOptions<BloctoOptions>);
    protected initConnector(): Promise<Connector>;
    protected getConnector(): Promise<Connector>;
}
export {};
//# sourceMappingURL=blocto.d.ts.map