import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IContractPublisher {
    type CustomContractInstanceStruct = {
        contractId: string;
        publishTimestamp: BigNumberish;
        publishMetadataUri: string;
        bytecodeHash: BytesLike;
        implementation: string;
    };
    type CustomContractInstanceStructOutput = [
        string,
        BigNumber,
        string,
        string,
        string
    ] & {
        contractId: string;
        publishTimestamp: BigNumber;
        publishMetadataUri: string;
        bytecodeHash: string;
        implementation: string;
    };
}
export interface MockContractPublisherInterface extends utils.Interface {
    functions: {
        "getAllPublishedContracts(address)": FunctionFragment;
        "getPublishedContract(address,string)": FunctionFragment;
        "getPublishedContractVersions(address,string)": FunctionFragment;
        "getPublishedUriFromCompilerUri(string)": FunctionFragment;
        "getPublisherProfileUri(address)": FunctionFragment;
        "publishContract(address,string,string,string,bytes32,address)": FunctionFragment;
        "setPublisherProfileUri(address,string)": FunctionFragment;
        "unpublishContract(address,string)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getAllPublishedContracts" | "getPublishedContract" | "getPublishedContractVersions" | "getPublishedUriFromCompilerUri" | "getPublisherProfileUri" | "publishContract" | "setPublisherProfileUri" | "unpublishContract"): FunctionFragment;
    encodeFunctionData(functionFragment: "getAllPublishedContracts", values: [string]): string;
    encodeFunctionData(functionFragment: "getPublishedContract", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getPublishedContractVersions", values: [string, string]): string;
    encodeFunctionData(functionFragment: "getPublishedUriFromCompilerUri", values: [string]): string;
    encodeFunctionData(functionFragment: "getPublisherProfileUri", values: [string]): string;
    encodeFunctionData(functionFragment: "publishContract", values: [string, string, string, string, BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setPublisherProfileUri", values: [string, string]): string;
    encodeFunctionData(functionFragment: "unpublishContract", values: [string, string]): string;
    decodeFunctionResult(functionFragment: "getAllPublishedContracts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPublishedContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPublishedContractVersions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPublishedUriFromCompilerUri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPublisherProfileUri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "publishContract", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPublisherProfileUri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unpublishContract", data: BytesLike): Result;
    events: {
        "ContractPublished(address,address,tuple)": EventFragment;
        "ContractUnpublished(address,address,string)": EventFragment;
        "Paused(bool)": EventFragment;
        "PublisherProfileUpdated(address,string,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ContractPublished"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractUnpublished"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PublisherProfileUpdated"): EventFragment;
}
export interface ContractPublishedEventObject {
    operator: string;
    publisher: string;
    publishedContract: IContractPublisher.CustomContractInstanceStructOutput;
}
export type ContractPublishedEvent = TypedEvent<[
    string,
    string,
    IContractPublisher.CustomContractInstanceStructOutput
], ContractPublishedEventObject>;
export type ContractPublishedEventFilter = TypedEventFilter<ContractPublishedEvent>;
export interface ContractUnpublishedEventObject {
    operator: string;
    publisher: string;
    contractId: string;
}
export type ContractUnpublishedEvent = TypedEvent<[
    string,
    string,
    string
], ContractUnpublishedEventObject>;
export type ContractUnpublishedEventFilter = TypedEventFilter<ContractUnpublishedEvent>;
export interface PausedEventObject {
    isPaused: boolean;
}
export type PausedEvent = TypedEvent<[boolean], PausedEventObject>;
export type PausedEventFilter = TypedEventFilter<PausedEvent>;
export interface PublisherProfileUpdatedEventObject {
    publisher: string;
    prevURI: string;
    newURI: string;
}
export type PublisherProfileUpdatedEvent = TypedEvent<[
    string,
    string,
    string
], PublisherProfileUpdatedEventObject>;
export type PublisherProfileUpdatedEventFilter = TypedEventFilter<PublisherProfileUpdatedEvent>;
export interface MockContractPublisher extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MockContractPublisherInterface;
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
        getAllPublishedContracts(arg0: string, overrides?: CallOverrides): Promise<[
            IContractPublisher.CustomContractInstanceStructOutput[]
        ] & {
            published: IContractPublisher.CustomContractInstanceStructOutput[];
        }>;
        getPublishedContract(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[
            IContractPublisher.CustomContractInstanceStructOutput
        ] & {
            published: IContractPublisher.CustomContractInstanceStructOutput;
        }>;
        getPublishedContractVersions(arg0: string, arg1: string, overrides?: CallOverrides): Promise<[
            IContractPublisher.CustomContractInstanceStructOutput[]
        ] & {
            published: IContractPublisher.CustomContractInstanceStructOutput[];
        }>;
        getPublishedUriFromCompilerUri(arg0: string, overrides?: CallOverrides): Promise<[string[]] & {
            publishedMetadataUris: string[];
        }>;
        getPublisherProfileUri(arg0: string, overrides?: CallOverrides): Promise<[string] & {
            uri: string;
        }>;
        publishContract(publisher: string, contractId: string, publishMetadataUri: string, compilerMetadataUri: string, bytecodeHash: BytesLike, implementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPublisherProfileUri(arg0: string, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unpublishContract(publisher: string, contractId: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    getAllPublishedContracts(arg0: string, overrides?: CallOverrides): Promise<IContractPublisher.CustomContractInstanceStructOutput[]>;
    getPublishedContract(arg0: string, arg1: string, overrides?: CallOverrides): Promise<IContractPublisher.CustomContractInstanceStructOutput>;
    getPublishedContractVersions(arg0: string, arg1: string, overrides?: CallOverrides): Promise<IContractPublisher.CustomContractInstanceStructOutput[]>;
    getPublishedUriFromCompilerUri(arg0: string, overrides?: CallOverrides): Promise<string[]>;
    getPublisherProfileUri(arg0: string, overrides?: CallOverrides): Promise<string>;
    publishContract(publisher: string, contractId: string, publishMetadataUri: string, compilerMetadataUri: string, bytecodeHash: BytesLike, implementation: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPublisherProfileUri(arg0: string, arg1: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unpublishContract(publisher: string, contractId: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        getAllPublishedContracts(arg0: string, overrides?: CallOverrides): Promise<IContractPublisher.CustomContractInstanceStructOutput[]>;
        getPublishedContract(arg0: string, arg1: string, overrides?: CallOverrides): Promise<IContractPublisher.CustomContractInstanceStructOutput>;
        getPublishedContractVersions(arg0: string, arg1: string, overrides?: CallOverrides): Promise<IContractPublisher.CustomContractInstanceStructOutput[]>;
        getPublishedUriFromCompilerUri(arg0: string, overrides?: CallOverrides): Promise<string[]>;
        getPublisherProfileUri(arg0: string, overrides?: CallOverrides): Promise<string>;
        publishContract(publisher: string, contractId: string, publishMetadataUri: string, compilerMetadataUri: string, bytecodeHash: BytesLike, implementation: string, overrides?: CallOverrides): Promise<void>;
        setPublisherProfileUri(arg0: string, arg1: string, overrides?: CallOverrides): Promise<void>;
        unpublishContract(publisher: string, contractId: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ContractPublished(address,address,tuple)"(operator?: string | null, publisher?: string | null, publishedContract?: null): ContractPublishedEventFilter;
        ContractPublished(operator?: string | null, publisher?: string | null, publishedContract?: null): ContractPublishedEventFilter;
        "ContractUnpublished(address,address,string)"(operator?: string | null, publisher?: string | null, contractId?: string | null): ContractUnpublishedEventFilter;
        ContractUnpublished(operator?: string | null, publisher?: string | null, contractId?: string | null): ContractUnpublishedEventFilter;
        "Paused(bool)"(isPaused?: null): PausedEventFilter;
        Paused(isPaused?: null): PausedEventFilter;
        "PublisherProfileUpdated(address,string,string)"(publisher?: string | null, prevURI?: null, newURI?: null): PublisherProfileUpdatedEventFilter;
        PublisherProfileUpdated(publisher?: string | null, prevURI?: null, newURI?: null): PublisherProfileUpdatedEventFilter;
    };
    estimateGas: {
        getAllPublishedContracts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPublishedContract(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPublishedContractVersions(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPublishedUriFromCompilerUri(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPublisherProfileUri(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        publishContract(publisher: string, contractId: string, publishMetadataUri: string, compilerMetadataUri: string, bytecodeHash: BytesLike, implementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPublisherProfileUri(arg0: string, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unpublishContract(publisher: string, contractId: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        getAllPublishedContracts(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPublishedContract(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPublishedContractVersions(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPublishedUriFromCompilerUri(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPublisherProfileUri(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        publishContract(publisher: string, contractId: string, publishMetadataUri: string, compilerMetadataUri: string, bytecodeHash: BytesLike, implementation: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPublisherProfileUri(arg0: string, arg1: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unpublishContract(publisher: string, contractId: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MockContractPublisher.d.ts.map