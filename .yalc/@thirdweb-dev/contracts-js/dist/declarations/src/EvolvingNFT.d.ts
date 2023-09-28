import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IExtension {
    type ExtensionMetadataStruct = {
        name: string;
        metadataURI: string;
        implementation: string;
    };
    type ExtensionMetadataStructOutput = [string, string, string] & {
        name: string;
        metadataURI: string;
        implementation: string;
    };
    type ExtensionFunctionStruct = {
        functionSelector: BytesLike;
        functionSignature: string;
    };
    type ExtensionFunctionStructOutput = [string, string] & {
        functionSelector: string;
        functionSignature: string;
    };
    type ExtensionStruct = {
        metadata: IExtension.ExtensionMetadataStruct;
        functions: IExtension.ExtensionFunctionStruct[];
    };
    type ExtensionStructOutput = [
        IExtension.ExtensionMetadataStructOutput,
        IExtension.ExtensionFunctionStructOutput[]
    ] & {
        metadata: IExtension.ExtensionMetadataStructOutput;
        functions: IExtension.ExtensionFunctionStructOutput[];
    };
}
export interface EvolvingNFTInterface extends utils.Interface {
    functions: {
        "_disableFunctionInExtension(string,bytes4)": FunctionFragment;
        "addExtension(((string,string,address),(bytes4,string)[]))": FunctionFragment;
        "defaultExtensions()": FunctionFragment;
        "disableFunctionInExtension(string,bytes4)": FunctionFragment;
        "enableFunctionInExtension(string,(bytes4,string))": FunctionFragment;
        "getAllExtensions()": FunctionFragment;
        "getExtension(string)": FunctionFragment;
        "getImplementationForFunction(bytes4)": FunctionFragment;
        "getMetadataForFunction(bytes4)": FunctionFragment;
        "initialize(address,string,string,string,address[],address,address,uint128)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "removeExtension(string)": FunctionFragment;
        "replaceExtension(((string,string,address),(bytes4,string)[]))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_disableFunctionInExtension" | "addExtension" | "defaultExtensions" | "disableFunctionInExtension" | "enableFunctionInExtension" | "getAllExtensions" | "getExtension" | "getImplementationForFunction" | "getMetadataForFunction" | "initialize" | "multicall" | "removeExtension" | "replaceExtension"): FunctionFragment;
    encodeFunctionData(functionFragment: "_disableFunctionInExtension", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "addExtension", values: [IExtension.ExtensionStruct]): string;
    encodeFunctionData(functionFragment: "defaultExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "disableFunctionInExtension", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "enableFunctionInExtension", values: [string, IExtension.ExtensionFunctionStruct]): string;
    encodeFunctionData(functionFragment: "getAllExtensions", values?: undefined): string;
    encodeFunctionData(functionFragment: "getExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "getImplementationForFunction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getMetadataForFunction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        string,
        string,
        string,
        string,
        string[],
        string,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "removeExtension", values: [string]): string;
    encodeFunctionData(functionFragment: "replaceExtension", values: [IExtension.ExtensionStruct]): string;
    decodeFunctionResult(functionFragment: "_disableFunctionInExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "defaultExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "disableFunctionInExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "enableFunctionInExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllExtensions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getImplementationForFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getMetadataForFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removeExtension", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "replaceExtension", data: BytesLike): Result;
    events: {
        "ContractURIUpdated(string,string)": EventFragment;
        "DefaultRoyalty(address,uint256)": EventFragment;
        "ExtensionAdded(string,address,tuple)": EventFragment;
        "ExtensionRemoved(string,tuple)": EventFragment;
        "ExtensionReplaced(string,address,tuple)": EventFragment;
        "FunctionDisabled(string,bytes4,tuple)": EventFragment;
        "FunctionEnabled(string,bytes4,tuple,tuple)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OperatorRestriction(bool)": EventFragment;
        "OwnerUpdated(address,address)": EventFragment;
        "PrimarySaleRecipientUpdated(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ContractURIUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DefaultRoyalty"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExtensionAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExtensionRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ExtensionReplaced"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FunctionDisabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FunctionEnabled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OperatorRestriction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PrimarySaleRecipientUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
}
export interface ContractURIUpdatedEventObject {
    prevURI: string;
    newURI: string;
}
export type ContractURIUpdatedEvent = TypedEvent<[
    string,
    string
], ContractURIUpdatedEventObject>;
export type ContractURIUpdatedEventFilter = TypedEventFilter<ContractURIUpdatedEvent>;
export interface DefaultRoyaltyEventObject {
    newRoyaltyRecipient: string;
    newRoyaltyBps: BigNumber;
}
export type DefaultRoyaltyEvent = TypedEvent<[
    string,
    BigNumber
], DefaultRoyaltyEventObject>;
export type DefaultRoyaltyEventFilter = TypedEventFilter<DefaultRoyaltyEvent>;
export interface ExtensionAddedEventObject {
    name: string;
    implementation: string;
    extension: IExtension.ExtensionStructOutput;
}
export type ExtensionAddedEvent = TypedEvent<[
    string,
    string,
    IExtension.ExtensionStructOutput
], ExtensionAddedEventObject>;
export type ExtensionAddedEventFilter = TypedEventFilter<ExtensionAddedEvent>;
export interface ExtensionRemovedEventObject {
    name: string;
    extension: IExtension.ExtensionStructOutput;
}
export type ExtensionRemovedEvent = TypedEvent<[
    string,
    IExtension.ExtensionStructOutput
], ExtensionRemovedEventObject>;
export type ExtensionRemovedEventFilter = TypedEventFilter<ExtensionRemovedEvent>;
export interface ExtensionReplacedEventObject {
    name: string;
    implementation: string;
    extension: IExtension.ExtensionStructOutput;
}
export type ExtensionReplacedEvent = TypedEvent<[
    string,
    string,
    IExtension.ExtensionStructOutput
], ExtensionReplacedEventObject>;
export type ExtensionReplacedEventFilter = TypedEventFilter<ExtensionReplacedEvent>;
export interface FunctionDisabledEventObject {
    name: string;
    functionSelector: string;
    extMetadata: IExtension.ExtensionMetadataStructOutput;
}
export type FunctionDisabledEvent = TypedEvent<[
    string,
    string,
    IExtension.ExtensionMetadataStructOutput
], FunctionDisabledEventObject>;
export type FunctionDisabledEventFilter = TypedEventFilter<FunctionDisabledEvent>;
export interface FunctionEnabledEventObject {
    name: string;
    functionSelector: string;
    extFunction: IExtension.ExtensionFunctionStructOutput;
    extMetadata: IExtension.ExtensionMetadataStructOutput;
}
export type FunctionEnabledEvent = TypedEvent<[
    string,
    string,
    IExtension.ExtensionFunctionStructOutput,
    IExtension.ExtensionMetadataStructOutput
], FunctionEnabledEventObject>;
export type FunctionEnabledEventFilter = TypedEventFilter<FunctionEnabledEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface OperatorRestrictionEventObject {
    restriction: boolean;
}
export type OperatorRestrictionEvent = TypedEvent<[
    boolean
], OperatorRestrictionEventObject>;
export type OperatorRestrictionEventFilter = TypedEventFilter<OperatorRestrictionEvent>;
export interface OwnerUpdatedEventObject {
    prevOwner: string;
    newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<[
    string,
    string
], OwnerUpdatedEventObject>;
export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;
export interface PrimarySaleRecipientUpdatedEventObject {
    recipient: string;
}
export type PrimarySaleRecipientUpdatedEvent = TypedEvent<[
    string
], PrimarySaleRecipientUpdatedEventObject>;
export type PrimarySaleRecipientUpdatedEventFilter = TypedEventFilter<PrimarySaleRecipientUpdatedEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface EvolvingNFT extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: EvolvingNFTInterface;
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
        _disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        addExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        defaultExtensions(overrides?: CallOverrides): Promise<[string]>;
        disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        enableFunctionInExtension(_extensionName: string, _function: IExtension.ExtensionFunctionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAllExtensions(overrides?: CallOverrides): Promise<[
            IExtension.ExtensionStructOutput[]
        ] & {
            allExtensions: IExtension.ExtensionStructOutput[];
        }>;
        getExtension(extensionName: string, overrides?: CallOverrides): Promise<[IExtension.ExtensionStructOutput]>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getMetadataForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<[IExtension.ExtensionMetadataStructOutput]>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        removeExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        replaceExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    _disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    addExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    defaultExtensions(overrides?: CallOverrides): Promise<string>;
    disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    enableFunctionInExtension(_extensionName: string, _function: IExtension.ExtensionFunctionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAllExtensions(overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput[]>;
    getExtension(extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput>;
    getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<string>;
    getMetadataForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<IExtension.ExtensionMetadataStructOutput>;
    initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    removeExtension(_extensionName: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    replaceExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        _disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: CallOverrides): Promise<void>;
        addExtension(_extension: IExtension.ExtensionStruct, overrides?: CallOverrides): Promise<void>;
        defaultExtensions(overrides?: CallOverrides): Promise<string>;
        disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: CallOverrides): Promise<void>;
        enableFunctionInExtension(_extensionName: string, _function: IExtension.ExtensionFunctionStruct, overrides?: CallOverrides): Promise<void>;
        getAllExtensions(overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput[]>;
        getExtension(extensionName: string, overrides?: CallOverrides): Promise<IExtension.ExtensionStructOutput>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<string>;
        getMetadataForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<IExtension.ExtensionMetadataStructOutput>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        removeExtension(_extensionName: string, overrides?: CallOverrides): Promise<void>;
        replaceExtension(_extension: IExtension.ExtensionStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ContractURIUpdated(string,string)"(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        ContractURIUpdated(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        "DefaultRoyalty(address,uint256)"(newRoyaltyRecipient?: string | null, newRoyaltyBps?: null): DefaultRoyaltyEventFilter;
        DefaultRoyalty(newRoyaltyRecipient?: string | null, newRoyaltyBps?: null): DefaultRoyaltyEventFilter;
        "ExtensionAdded(string,address,tuple)"(name?: string | null, implementation?: string | null, extension?: null): ExtensionAddedEventFilter;
        ExtensionAdded(name?: string | null, implementation?: string | null, extension?: null): ExtensionAddedEventFilter;
        "ExtensionRemoved(string,tuple)"(name?: string | null, extension?: null): ExtensionRemovedEventFilter;
        ExtensionRemoved(name?: string | null, extension?: null): ExtensionRemovedEventFilter;
        "ExtensionReplaced(string,address,tuple)"(name?: string | null, implementation?: string | null, extension?: null): ExtensionReplacedEventFilter;
        ExtensionReplaced(name?: string | null, implementation?: string | null, extension?: null): ExtensionReplacedEventFilter;
        "FunctionDisabled(string,bytes4,tuple)"(name?: string | null, functionSelector?: BytesLike | null, extMetadata?: null): FunctionDisabledEventFilter;
        FunctionDisabled(name?: string | null, functionSelector?: BytesLike | null, extMetadata?: null): FunctionDisabledEventFilter;
        "FunctionEnabled(string,bytes4,tuple,tuple)"(name?: string | null, functionSelector?: BytesLike | null, extFunction?: null, extMetadata?: null): FunctionEnabledEventFilter;
        FunctionEnabled(name?: string | null, functionSelector?: BytesLike | null, extFunction?: null, extMetadata?: null): FunctionEnabledEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "OperatorRestriction(bool)"(restriction?: null): OperatorRestrictionEventFilter;
        OperatorRestriction(restriction?: null): OperatorRestrictionEventFilter;
        "OwnerUpdated(address,address)"(prevOwner?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
        OwnerUpdated(prevOwner?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
        "PrimarySaleRecipientUpdated(address)"(recipient?: string | null): PrimarySaleRecipientUpdatedEventFilter;
        PrimarySaleRecipientUpdated(recipient?: string | null): PrimarySaleRecipientUpdatedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
    };
    estimateGas: {
        _disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        addExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        defaultExtensions(overrides?: CallOverrides): Promise<BigNumber>;
        disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        enableFunctionInExtension(_extensionName: string, _function: IExtension.ExtensionFunctionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAllExtensions(overrides?: CallOverrides): Promise<BigNumber>;
        getExtension(extensionName: string, overrides?: CallOverrides): Promise<BigNumber>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getMetadataForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        removeExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        replaceExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        _disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        addExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        defaultExtensions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        disableFunctionInExtension(_extensionName: string, _functionSelector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        enableFunctionInExtension(_extensionName: string, _function: IExtension.ExtensionFunctionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAllExtensions(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getExtension(extensionName: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getMetadataForFunction(functionSelector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        removeExtension(_extensionName: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        replaceExtension(_extension: IExtension.ExtensionStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=EvolvingNFT.d.ts.map