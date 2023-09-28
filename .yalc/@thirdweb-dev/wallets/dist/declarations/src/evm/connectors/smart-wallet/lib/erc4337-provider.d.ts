import { providers, Signer } from "ethers";
import { EntryPoint, UserOperationStruct } from "@account-abstraction/contracts";
import { ClientConfig } from "@account-abstraction/sdk";
import { BaseAccountAPI } from "./base-api";
import { ERC4337EthersSigner } from "./erc4337-signer";
import { HttpRpcClient } from "./http-rpc-client";
export declare class ERC4337EthersProvider extends providers.BaseProvider {
    readonly chainId: number;
    readonly config: ClientConfig;
    readonly originalSigner: Signer;
    readonly originalProvider: providers.BaseProvider;
    readonly httpRpcClient: HttpRpcClient;
    readonly entryPoint: EntryPoint;
    readonly smartAccountAPI: BaseAccountAPI;
    initializedBlockNumber: number;
    readonly signer: ERC4337EthersSigner;
    constructor(chainId: number, config: ClientConfig, originalSigner: Signer, originalProvider: providers.BaseProvider, httpRpcClient: HttpRpcClient, entryPoint: EntryPoint, smartAccountAPI: BaseAccountAPI);
    /**
     * finish intializing the provider.
     * MUST be called after construction, before using the provider.
     */
    init(): Promise<this>;
    getSigner(): ERC4337EthersSigner;
    perform(method: string, params: any): Promise<any>;
    getTransaction(transactionHash: string | Promise<string>): Promise<providers.TransactionResponse>;
    getTransactionReceipt(transactionHash: string | Promise<string>): Promise<providers.TransactionReceipt>;
    getSenderAccountAddress(): Promise<string>;
    waitForTransaction(transactionHash: string, confirmations?: number, timeout?: number): Promise<providers.TransactionReceipt>;
    constructUserOpTransactionResponse(userOp1: UserOperationStruct): Promise<providers.TransactionResponse>;
    detectNetwork(): Promise<any>;
}
//# sourceMappingURL=erc4337-provider.d.ts.map