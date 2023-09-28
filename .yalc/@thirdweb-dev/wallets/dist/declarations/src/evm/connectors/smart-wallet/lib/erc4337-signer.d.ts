import { providers, utils } from "ethers";
import { Bytes, Signer } from "ethers";
import { ClientConfig } from "@account-abstraction/sdk";
import { BaseAccountAPI } from "./base-api";
import type { ERC4337EthersProvider } from "./erc4337-provider";
import { HttpRpcClient } from "./http-rpc-client";
export declare class ERC4337EthersSigner extends Signer {
    config: ClientConfig;
    originalSigner: Signer;
    erc4337provider: ERC4337EthersProvider;
    httpRpcClient: HttpRpcClient;
    smartAccountAPI: BaseAccountAPI;
    constructor(config: ClientConfig, originalSigner: Signer, erc4337provider: ERC4337EthersProvider, httpRpcClient: HttpRpcClient, smartAccountAPI: BaseAccountAPI);
    address?: string;
    sendTransaction(transaction: utils.Deferrable<providers.TransactionRequest>, batched?: boolean): Promise<providers.TransactionResponse>;
    unwrapError(errorIn: any): Error;
    verifyAllNecessaryFields(transactionRequest: providers.TransactionRequest): Promise<void>;
    connect(provider: providers.Provider): Signer;
    getAddress(): Promise<string>;
    signMessage(message: Bytes | string): Promise<string>;
    signTransaction(transaction: utils.Deferrable<providers.TransactionRequest>): Promise<string>;
}
//# sourceMappingURL=erc4337-signer.d.ts.map