import { Chain } from "@thirdweb-dev/chains";
import { ConnectParams, Connector } from "../../interfaces/connector";
import { SmartWalletConfig, SmartWalletConnectionArgs } from "./types";
import { EVMWallet } from "../../interfaces";
import { ERC4337EthersSigner } from "./lib/erc4337-signer";
import { providers } from "ethers";
import { SmartContract, Transaction, TransactionResult } from "@thirdweb-dev/sdk";
export declare class SmartWalletConnector extends Connector<SmartWalletConnectionArgs> {
    private config;
    private aaProvider;
    private accountApi;
    personalWallet?: EVMWallet;
    constructor(config: SmartWalletConfig);
    initialize(params: ConnectParams<SmartWalletConnectionArgs>): Promise<void>;
    connect(connectionArgs: ConnectParams<SmartWalletConnectionArgs>): Promise<string>;
    getProvider(): Promise<providers.Provider>;
    getSigner(): Promise<ERC4337EthersSigner>;
    getAddress(): Promise<string>;
    isConnected(): Promise<boolean>;
    disconnect(): Promise<void>;
    switchChain(chainId: number): Promise<void>;
    setupListeners(): Promise<void>;
    updateChains(chains: Chain[]): void;
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
    private defaultFactoryInfo;
    private defaultAccountInfo;
    private getChainSlug;
}
//# sourceMappingURL=index.d.ts.map