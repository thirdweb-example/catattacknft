import { AbstractClientWallet, WalletOptions } from "./base";
import type { ConnectParams } from "../interfaces/connector";
import type { SmartWalletConfig, SmartWalletConnectionArgs } from "../connectors/smart-wallet/types";
import type { SmartWalletConnector as SmartWalletConnectorType } from "../connectors/smart-wallet";
import { Transaction, TransactionResult, SmartContract } from "@thirdweb-dev/sdk";
import { WCSession, IWalletConnectReceiver } from "../../core/types/walletConnect";
export * from "../connectors/smart-wallet/types";
export * from "../connectors/smart-wallet/utils";
export type { PaymasterAPI } from "@account-abstraction/sdk";
export declare class SmartWallet extends AbstractClientWallet<SmartWalletConfig, SmartWalletConnectionArgs> implements IWalletConnectReceiver {
    #private;
    connector?: SmartWalletConnectorType;
    enableConnectApp: boolean;
    static meta: {
        name: string;
        iconURL: string;
    };
    static id: string;
    get walletName(): "Smart Wallet";
    constructor(options: WalletOptions<SmartWalletConfig>);
    getConnector(): Promise<SmartWalletConnectorType>;
    getPersonalWallet(): import("..").EVMWallet | undefined;
    /**
     * Check whether the connected signer can execute a given transaction using the smart wallet.
     * @param transaction the transaction to execute using the smart wallet.
     * @returns whether the connected signer can execute the transaction using the smart wallet.
     */
    hasPermissionToExecute(transaction: Transaction): Promise<boolean>;
    /**
     * Execute a single transaction
     * @param transactions
     * @returns the transaction receipt
     */
    execute(transaction: Transaction): Promise<TransactionResult>;
    /**
     * Execute multiple transactions in a single batch
     * @param transactions
     * @returns the transaction receipt
     */
    executeBatch(transactions: Transaction[]): Promise<TransactionResult>;
    /**
     * Manually deploy the smart wallet contract. If already deployed this will throw an error.
     * Note that this is not necessary as the smart wallet will be deployed automatically on the first transaction the user makes.
     * @returns the transaction receipt
     */
    deploy(): Promise<TransactionResult>;
    /**
     * Check if the smart wallet contract is deployed
     * @returns true if the smart wallet contract is deployed
     */
    isDeployed(): Promise<boolean>;
    /**
     * Get the underlying account contract of the smart wallet.
     * @returns the account contract of the smart wallet.
     */
    getAccountContract(): Promise<SmartContract>;
    /**
     * Get the underlying account factory contract of the smart wallet.
     * @returns the account factory contract.
     */
    getFactoryContract(): Promise<SmartContract>;
    autoConnect(params: ConnectParams<SmartWalletConnectionArgs>): Promise<string>;
    connectApp(uri: string): Promise<void>;
    approveSession(): Promise<void>;
    rejectSession(): Promise<void>;
    approveRequest(): Promise<void>;
    rejectRequest(): Promise<void>;
    getActiveSessions(): WCSession[];
    disconnectSession(): Promise<void>;
    isWCReceiverEnabled(): boolean;
}
//# sourceMappingURL=smart-wallet.d.ts.map