import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IAppURIInterface extends utils.Interface {
    functions: {
        "appURI()": FunctionFragment;
        "setAppURI(string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "appURI" | "setAppURI"): FunctionFragment;
    encodeFunctionData(functionFragment: "appURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "setAppURI", values: [string]): string;
    decodeFunctionResult(functionFragment: "appURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAppURI", data: BytesLike): Result;
    events: {
        "AppURIUpdated(string,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AppURIUpdated"): EventFragment;
}
export interface AppURIUpdatedEventObject {
    prevURI: string;
    newURI: string;
}
export type AppURIUpdatedEvent = TypedEvent<[
    string,
    string
], AppURIUpdatedEventObject>;
export type AppURIUpdatedEventFilter = TypedEventFilter<AppURIUpdatedEvent>;
export interface IAppURI extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAppURIInterface;
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
        appURI(overrides?: CallOverrides): Promise<[string]>;
        setAppURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    appURI(overrides?: CallOverrides): Promise<string>;
    setAppURI(_uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        appURI(overrides?: CallOverrides): Promise<string>;
        setAppURI(_uri: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AppURIUpdated(string,string)"(prevURI?: null, newURI?: null): AppURIUpdatedEventFilter;
        AppURIUpdated(prevURI?: null, newURI?: null): AppURIUpdatedEventFilter;
    };
    estimateGas: {
        appURI(overrides?: CallOverrides): Promise<BigNumber>;
        setAppURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        appURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setAppURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IAppURI.d.ts.map