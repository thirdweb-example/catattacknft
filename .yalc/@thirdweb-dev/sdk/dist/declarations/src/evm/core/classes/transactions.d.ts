import { SDKOptionsOutput } from "../../schema/sdk-options";
import type { DeployTransactionOptions, ParseTransactionReceipt, TransactionContextOptions, TransactionOptionsWithContract, TransactionOptionsWithContractInfo, TransactionOptionsWithContractWrapper } from "../../types/transactions";
import { GaslessTransaction, TransactionResult } from "../types";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BaseContract, CallOverrides, ContractFactory, ContractTransaction, providers, Signer } from "ethers";
import { BigNumber } from "ethers";
import EventEmitter from "eventemitter3";
import type { DeployEvents } from "../../types/deploy";
declare abstract class TransactionContext {
    protected args: any[];
    protected overrides: CallOverrides;
    protected provider: providers.Provider;
    protected signer: Signer;
    protected storage: ThirdwebStorage;
    protected gasMultiple?: number;
    constructor(options: TransactionContextOptions);
    get getSigner(): Signer;
    get getProvider(): providers.Provider;
    get getStorage(): ThirdwebStorage<import("@thirdweb-dev/storage").IpfsUploadBatchOptions>;
    getArgs(): any[];
    getOverrides(): CallOverrides;
    getValue(): import("ethers").BigNumberish | Promise<import("ethers").BigNumberish>;
    setArgs(args: any[]): TransactionContext;
    setOverrides(overrides: CallOverrides): TransactionContext;
    updateOverrides(overrides: CallOverrides): TransactionContext;
    setValue(value: CallOverrides["value"]): TransactionContext;
    setGasLimit(gasLimit: CallOverrides["gasLimit"]): TransactionContext;
    setGasPrice(gasPrice: CallOverrides["gasPrice"]): TransactionContext;
    setNonce(nonce: CallOverrides["nonce"]): TransactionContext;
    setMaxFeePerGas(maxFeePerGas: CallOverrides["maxFeePerGas"]): TransactionContext;
    setMaxPriorityFeePerGas(maxPriorityFeePerGas: CallOverrides["maxPriorityFeePerGas"]): TransactionContext;
    setType(type: CallOverrides["type"]): TransactionContext;
    setAccessList(accessList: CallOverrides["accessList"]): TransactionContext;
    setCustomData(customData: CallOverrides["customData"]): TransactionContext;
    setCcipReadEnabled(ccipReadEnabled: CallOverrides["ccipReadEnabled"]): TransactionContext;
    abstract estimateGasLimit(): Promise<BigNumber>;
    /**
     * Set a multiple to multiply the gas limit by
     *
     * @example
     * ```js
     * // Set the gas limit multiple to 1.2 (increase by 20%)
     * tx.setGasLimitMultiple(1.2)
     * ```
     */
    setGasLimitMultiple(factor: number): void;
    /**
     * Estimate the total gas cost of this transaction (in both ether and wei)
     */
    estimateGasCost(): Promise<{
        ether: string;
        wei: BigNumber;
    }>;
    /**
     * Calculates the gas price for transactions (adding a 10% tip buffer)
     */
    getGasPrice(): Promise<BigNumber>;
    /**
     * Get the address of the transaction signer
     */
    getSignerAddress(): Promise<string>;
    /**
     * Get gas overrides for the transaction
     */
    protected getGasOverrides(): Promise<{
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
        gasPrice?: undefined;
    } | {
        maxFeePerGas: BigNumber;
        maxPriorityFeePerGas: BigNumber;
        gasPrice?: undefined;
    } | {
        gasPrice: BigNumber;
        maxFeePerGas?: undefined;
        maxPriorityFeePerGas?: undefined;
    }>;
    /**
     * Calculates the priority fee per gas according (adding a 10% buffer)
     */
    private getPreferredPriorityFee;
}
export declare class Transaction<TResult = TransactionResult> extends TransactionContext {
    private method;
    private contract;
    private gaslessOptions?;
    private parse?;
    static fromContractWrapper<TContract extends BaseContract, TResult = TransactionResult>(options: TransactionOptionsWithContractWrapper<TContract, TResult>): Transaction<TResult>;
    static fromContractInfo<TResult = TransactionResult>(options: TransactionOptionsWithContractInfo<TResult>): Promise<Transaction<TResult>>;
    constructor(options: TransactionOptionsWithContract<TResult>);
    getTarget(): string;
    getMethod(): string;
    getGaslessOptions(): {
        openzeppelin: {
            relayerUrl: string;
            useEOAForwarder: boolean;
            domainName: string;
            domainVersion: string;
            relayerForwarderAddress?: string | undefined;
        };
        experimentalChainlessSupport: boolean;
    } | {
        biconomy: {
            apiId: string;
            apiKey: string;
            deadlineSeconds: number;
        };
    } | undefined;
    setGaslessOptions(options: SDKOptionsOutput["gasless"]): Transaction<TResult>;
    setParse(parse: ParseTransactionReceipt<TResult>): Transaction<TResult>;
    /**
     * Encode the function data for this transaction
     */
    encode(): string;
    /**
     * Get the signed transaction
     */
    sign(): Promise<string>;
    populateTransaction(): Promise<providers.TransactionRequest>;
    /**
     * Simulate the transaction on-chain without executing
     */
    simulate(): Promise<any>;
    /**
     * Estimate the gas limit of this transaction
     */
    estimateGasLimit(): Promise<BigNumber>;
    /**
     * Send the transaction without waiting for it to be mined.
     */
    send(): Promise<ContractTransaction>;
    /**
     * Send the transaction and wait for it to be mined
     */
    execute(): Promise<TResult>;
    /**
     * Execute the transaction with gasless
     */
    private sendGasless;
    /**
     * @internal
     * @returns
     */
    prepareGasless(): Promise<GaslessTransaction>;
    private functionError;
    /**
     * Create a nicely formatted error message with tx metadata and solidity stack trace
     */
    private transactionError;
}
export declare class DeployTransaction extends TransactionContext {
    factory: ContractFactory;
    events: EventEmitter<DeployEvents> | undefined;
    constructor(options: DeployTransactionOptions);
    encode(): string;
    getTarget(): string;
    getMethod(): string;
    sign(): Promise<string>;
    simulate(): Promise<string>;
    estimateGasLimit(): Promise<BigNumber>;
    send(): Promise<ContractTransaction>;
    execute(): Promise<string>;
    populateTransaction(): Promise<providers.TransactionRequest>;
    /**
     * Create a nicely formatted error message with tx metadata and solidity stack trace
     */
    private deployError;
}
export declare function defaultGaslessSendFunction(transaction: GaslessTransaction, signer: Signer, provider: providers.Provider, storage: ThirdwebStorage, gaslessOptions?: SDKOptionsOutput["gasless"]): Promise<string>;
export declare function biconomySendFunction(transaction: GaslessTransaction, signer: Signer, provider: providers.Provider, gaslessOptions?: SDKOptionsOutput["gasless"]): Promise<string>;
export declare function defenderSendFunction(transaction: GaslessTransaction, signer: Signer, provider: providers.Provider, storage: ThirdwebStorage, gaslessOptions?: SDKOptionsOutput["gasless"]): Promise<string>;
export declare function prepareGaslessRequest(tx: Transaction): Promise<{
    method: string;
    body: string;
    headers: {
        "x-api-key": string;
        "Content-Type": string;
    };
    url: string;
} | {
    method: string;
    body: string;
    url: string;
}>;
export {};
//# sourceMappingURL=transactions.d.ts.map