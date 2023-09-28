import { AbstractWallet } from "../../evm/wallets/abstract";
import { WCSession, WalletConnectHandler } from "../types/walletConnect";
export declare class NoOpWalletConnectHandler extends WalletConnectHandler {
    init(): Promise<void>;
    connectApp(uri: string): Promise<void>;
    approveSession(wallet: AbstractWallet): Promise<void>;
    rejectSession(): Promise<void>;
    approveEIP155Request(wallet: AbstractWallet): Promise<void>;
    rejectEIP155Request(): Promise<void>;
    getActiveSessions(): WCSession[];
    disconnectSession(): Promise<void>;
}
//# sourceMappingURL=constants.d.ts.map