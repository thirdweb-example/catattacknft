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
export interface SharedMetadataInterface extends utils.Interface {
    functions: {
        "setSharedMetadata((string,string,string,string))": FunctionFragment;
        "sharedMetadata()": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "setSharedMetadata" | "sharedMetadata" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "setSharedMetadata", values: [ISharedMetadata.SharedMetadataInfoStruct]): string;
    encodeFunctionData(functionFragment: "sharedMetadata", values?: undefined): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "setSharedMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "sharedMetadata", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {
        "BatchMetadataUpdate(uint256,uint256)": EventFragment;
        "MetadataUpdate(uint256)": EventFragment;
        "SharedMetadataUpdated(string,string,string,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BatchMetadataUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MetadataUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SharedMetadataUpdated"): EventFragment;
}
export interface BatchMetadataUpdateEventObject {
    _fromTokenId: BigNumber;
    _toTokenId: BigNumber;
}
export type BatchMetadataUpdateEvent = TypedEvent<[
    BigNumber,
    BigNumber
], BatchMetadataUpdateEventObject>;
export type BatchMetadataUpdateEventFilter = TypedEventFilter<BatchMetadataUpdateEvent>;
export interface MetadataUpdateEventObject {
    _tokenId: BigNumber;
}
export type MetadataUpdateEvent = TypedEvent<[
    BigNumber
], MetadataUpdateEventObject>;
export type MetadataUpdateEventFilter = TypedEventFilter<MetadataUpdateEvent>;
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
export interface SharedMetadata extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SharedMetadataInterface;
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
        sharedMetadata(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            string
        ] & {
            name: string;
            description: string;
            imageURI: string;
            animationURI: string;
        }>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    setSharedMetadata(_metadata: ISharedMetadata.SharedMetadataInfoStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    sharedMetadata(overrides?: CallOverrides): Promise<[
        string,
        string,
        string,
        string
    ] & {
        name: string;
        description: string;
        imageURI: string;
        animationURI: string;
    }>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        setSharedMetadata(_metadata: ISharedMetadata.SharedMetadataInfoStruct, overrides?: CallOverrides): Promise<void>;
        sharedMetadata(overrides?: CallOverrides): Promise<[
            string,
            string,
            string,
            string
        ] & {
            name: string;
            description: string;
            imageURI: string;
            animationURI: string;
        }>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "BatchMetadataUpdate(uint256,uint256)"(_fromTokenId?: null, _toTokenId?: null): BatchMetadataUpdateEventFilter;
        BatchMetadataUpdate(_fromTokenId?: null, _toTokenId?: null): BatchMetadataUpdateEventFilter;
        "MetadataUpdate(uint256)"(_tokenId?: null): MetadataUpdateEventFilter;
        MetadataUpdate(_tokenId?: null): MetadataUpdateEventFilter;
        "SharedMetadataUpdated(string,string,string,string)"(name?: null, description?: null, imageURI?: null, animationURI?: null): SharedMetadataUpdatedEventFilter;
        SharedMetadataUpdated(name?: null, description?: null, imageURI?: null, animationURI?: null): SharedMetadataUpdatedEventFilter;
    };
    estimateGas: {
        setSharedMetadata(_metadata: ISharedMetadata.SharedMetadataInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        sharedMetadata(overrides?: CallOverrides): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        setSharedMetadata(_metadata: ISharedMetadata.SharedMetadataInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        sharedMetadata(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SharedMetadata.d.ts.map