import { WCSession, WalletConnectHandler, WalletConnectReceiverConfig } from "../types/walletConnect";
import { AbstractWallet } from "../../evm/wallets/abstract";
type WalletConnectV2WalletConfig = Omit<WalletConnectReceiverConfig, "enableConnectApp">;
export declare class WalletConnectV2Handler extends WalletConnectHandler {
    #private;
    constructor(options: WalletConnectV2WalletConfig);
    init(): Promise<void>;
    connectApp(wcUri: string): Promise<void>;
    approveSession(wallet: AbstractWallet): Promise<void>;
    rejectSession(): Promise<void>;
    approveEIP155Request(wallet: AbstractWallet): Promise<void>;
    rejectEIP155Request(): Promise<void>;
    getActiveSessions(): WCSession[];
    disconnectSession(): Promise<void>;
}
export {};
//# sourceMappingURL=WalletConnectV2Handler.d.ts.map