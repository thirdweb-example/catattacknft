import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BaseContract, BigNumber, ContractTransaction, type BytesLike, type CallOverrides, type ContractFunction, type ContractInterface, type Signer, type providers } from "ethers";
import { SDKOptions } from "../../schema/sdk-options";
import { Address } from "../../schema/shared/Address";
import { NetworkInput } from "../types";
import { RPCConnectionHandler } from "./rpc-connection-handler";
/**
 * @internal
 */
export declare class ContractWrapper<TContract extends BaseContract> extends RPCConnectionHandler {
    storage: ThirdwebStorage;
    private isValidContract;
    private customOverrides;
    /**
     * @internal
     */
    writeContract: TContract;
    readContract: TContract;
    abi: ContractInterface;
    address: string;
    constructor(network: NetworkInput, contractAddress: string, contractAbi: ContractInterface, options: SDKOptions, storage: ThirdwebStorage);
    updateSignerOrProvider(network: NetworkInput): void;
    /**
     * @internal
     */
    getChainID(): Promise<number>;
    /**
     * @internal
     */
    getSignerAddress(): Promise<Address>;
    /**
     * @internal
     */
    callStatic(): {
        [name: string]: ContractFunction<any>;
    };
    /**
     * @internal
     */
    getCallOverrides(): Promise<CallOverrides>;
    /**
     * @internal
     */
    private emitTransactionEvent;
    /**
     * @internal
     */
    multiCall(encoded: string[]): Promise<providers.TransactionReceipt>;
    /**
     * @internal
     */
    estimateGas(fn: keyof TContract["functions"], args: any[]): Promise<BigNumber>;
    /**
     * @internal
     */
    withTransactionOverride(hook: () => CallOverrides): void;
    /**
     *
     * @param functionName The function name on the contract to call
     * @param args The arguments to be passed to the functionName
     * @returns The return value of the function call
     */
    read<OverrideContract extends BaseContract = TContract, FnName extends keyof OverrideContract["functions"] = keyof OverrideContract["functions"], Param extends Parameters<OverrideContract["functions"][FnName]> = Parameters<OverrideContract["functions"][FnName]>>(functionName: FnName, args: Param): Promise<Awaited<ReturnType<OverrideContract["functions"][FnName]>> extends {
        length: 1;
    } ? Awaited<ReturnType<OverrideContract["functions"][FnName]>>[0] : Awaited<ReturnType<OverrideContract["functions"][FnName]>>>;
    /**
     * @internal
     */
    call(functionName: string, args?: unknown[], overrides?: CallOverrides): Promise<any>;
    /**
     * @internal
     */
    sendTransaction(fn: keyof TContract["functions"] | (string & {}), args: any[], callOverrides?: CallOverrides): Promise<providers.TransactionReceipt>;
    /**
     * @internal
     */
    sendTransactionByFunction(fn: keyof TContract["functions"], args: any[], callOverrides: CallOverrides): Promise<ContractTransaction>;
    private formatError;
    /**
     * @internal
     */
    private sendGaslessTransaction;
    signTypedData(signer: Signer, domain: {
        name: string;
        version: string;
        chainId: number;
        verifyingContract: string;
    }, types: any, message: any): Promise<BytesLike>;
    parseLogs<T = any>(eventName: string, logs?: providers.Log[]): T[];
    private defaultGaslessSendFunction;
    private biconomySendFunction;
    private defenderSendFunction;
}
//# sourceMappingURL=contract-wrapper.d.ts.map