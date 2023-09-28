import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IPluginMap {
    type PluginStruct = {
        functionSelector: BytesLike;
        functionSignature: string;
        pluginAddress: string;
    };
    type PluginStructOutput = [string, string, string] & {
        functionSelector: string;
        functionSignature: string;
        pluginAddress: string;
    };
}
export interface PluginMapInterface extends utils.Interface {
    functions: {
        "getAllFunctionsOfPlugin(address)": FunctionFragment;
        "getAllPlugins()": FunctionFragment;
        "getPluginForFunction(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAllFunctionsOfPlugin" | "getAllPlugins" | "getPluginForFunction"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAllFunctionsOfPlugin", values: [string]): string;
    encodeFunctionData(functionFragment: "getAllPlugins", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPluginForFunction", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "getAllFunctionsOfPlugin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllPlugins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPluginForFunction", data: BytesLike): Result;
    events: {
        "PluginSet(bytes4,string,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "PluginSet"): EventFragment;
}
export interface PluginSetEventObject {
    functionSelector: string;
    functionSignature: string;
    pluginAddress: string;
}
export type PluginSetEvent = TypedEvent<[
    string,
    string,
    string
], PluginSetEventObject>;
export type PluginSetEventFilter = TypedEventFilter<PluginSetEvent>;
export interface PluginMap extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PluginMapInterface;
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
        getAllFunctionsOfPlugin(_pluginAddress: string, overrides?: CallOverrides): Promise<[string[]] & {
            registered: string[];
        }>;
        getAllPlugins(overrides?: CallOverrides): Promise<[
            IPluginMap.PluginStructOutput[]
        ] & {
            _plugins: IPluginMap.PluginStructOutput[];
        }>;
        getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<[string]>;
    };
    getAllFunctionsOfPlugin(_pluginAddress: string, overrides?: CallOverrides): Promise<string[]>;
    getAllPlugins(overrides?: CallOverrides): Promise<IPluginMap.PluginStructOutput[]>;
    getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getAllFunctionsOfPlugin(_pluginAddress: string, overrides?: CallOverrides): Promise<string[]>;
        getAllPlugins(overrides?: CallOverrides): Promise<IPluginMap.PluginStructOutput[]>;
        getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "PluginSet(bytes4,string,address)"(functionSelector?: BytesLike | null, functionSignature?: string | null, pluginAddress?: string | null): PluginSetEventFilter;
        PluginSet(functionSelector?: BytesLike | null, functionSignature?: string | null, pluginAddress?: string | null): PluginSetEventFilter;
    };
    estimateGas: {
        getAllFunctionsOfPlugin(_pluginAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAllPlugins(overrides?: CallOverrides): Promise<BigNumber>;
        getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getAllFunctionsOfPlugin(_pluginAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllPlugins(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=PluginMap.d.ts.map