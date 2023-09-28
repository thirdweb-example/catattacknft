import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace ISharedMetadata {
    type SharedMetadataInfoStruct = {
        name: string;
        description: string;
        imageURI: string;
        animationURI: string;
    };
    type SharedMetadataInfoStructOutput = [
        string,
        string,
        string,
        string
    ] & {
        name: string;
        description: string;
        imageURI: string;
        animationURI: string;
    };
}
export interface ISharedMetadataInterface extends utils.Interface {
    functions: {
        "setSharedMetadata((string,string,string,string))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "setSharedMetadata"): FunctionFragment;
    encodeFunctionData(functionFragment: "setSharedMetadata", values: [ISharedMetadata.SharedMetadataInfoStruct]): string;
    decodeFunctionResult(functionFragment: "setSharedMetadata", data: BytesLike): Result;
    events: {
        "SharedMetadataUpdated(string,string,string,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "SharedMetadataUpdated"): EventFragment;
}
export interface SharedMetadataUpdatedEventObject {
    name: string;
    description: string;
    imageURI: string;
    animationURI: string;
}
export type SharedMetadataUpdatedEvent = TypedEvent<[
    string,
    string,
    string,
    string
], SharedMetadataUpdatedEventObject>;
export type SharedMetadataUpdatedEventFilter = TypedEventFilter<SharedMetadataUpdatedEvent>;
export interface ISharedMetadata extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ISharedMetadataInterface;
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
        setSharedMetadata(_metadata: ISharedMetadata.SharedMetadataInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    setSharedMetadata(_metadata: ISharedMetadata.SharedMetadataInfoStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        setSharedMetadata(_metadata: ISharedMetadata.SharedMetadataInfoStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "SharedMetadataUpdated(string,string,string,string)"(name?: null, description?: null, imageURI?: null, animationURI?: null): SharedMetadataUpdatedEventFilter;
        SharedMetadataUpdated(name?: null, description?: null, imageURI?: null, animationURI?: null): SharedMetadataUpdatedEventFilter;
    };
    estimateGas: {
        setSharedMetadata(_metadata: ISharedMetadata.SharedMetadataInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        setSharedMetadata(_metadata: ISharedMetadata.SharedMetadataInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ISharedMetadata.d.ts.map