import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface ForwarderConsumerInterface extends utils.Interface {
    functions: {
        "caller()": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "setCaller()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "caller" | "isTrustedForwarder" | "setCaller"): FunctionFragment;
    encodeFunctionData(functionFragment: "caller", values?: undefined): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [string]): string;
    encodeFunctionData(functionFragment: "setCaller", values?: undefined): string;
    decodeFunctionResult(functionFragment: "caller", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setCaller", data: BytesLike): Result;
    events: {};
}
export interface ForwarderConsumer extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ForwarderConsumerInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        caller(overrides?: CallOverrides): Promise<[string]>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<[boolean]>;
        setCaller(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    caller(overrides?: CallOverrides): Promise<string>;
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
    setCaller(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        caller(overrides?: CallOverrides): Promise<string>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
        setCaller(overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        caller(overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<BigNumber>;
        setCaller(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        caller(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setCaller(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ForwarderConsumer.d.ts.map