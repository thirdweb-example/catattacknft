import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
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
export interface MarketplaceV3Interface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "_getPluginForFunction(bytes4)": FunctionFragment;
        "addPlugin((bytes4,string,address))": FunctionFragment;
        "contractType()": FunctionFragment;
        "contractURI()": FunctionFragment;
        "contractVersion()": FunctionFragment;
        "getAllFunctionsOfPlugin(address)": FunctionFragment;
        "getAllPlugins()": FunctionFragment;
        "getPlatformFeeInfo()": FunctionFragment;
        "getPluginForFunction(bytes4)": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "getRoyalty(address,uint256,uint256)": FunctionFragment;
        "getRoyaltyEngineAddress()": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "hasRoleWithSwitch(bytes32,address)": FunctionFragment;
        "initialize(address,string,address[],address,uint16)": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "pluginMap()": FunctionFragment;
        "removePlugin(bytes4)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setContractURI(string)": FunctionFragment;
        "setPlatformFeeInfo(address,uint256)": FunctionFragment;
        "setRoyaltyEngine(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "updatePlugin((bytes4,string,address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "_getPluginForFunction" | "addPlugin" | "contractType" | "contractURI" | "contractVersion" | "getAllFunctionsOfPlugin" | "getAllPlugins" | "getPlatformFeeInfo" | "getPluginForFunction" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "getRoyalty" | "getRoyaltyEngineAddress" | "grantRole" | "hasRole" | "hasRoleWithSwitch" | "initialize" | "isTrustedForwarder" | "multicall" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "pluginMap" | "removePlugin" | "renounceRole" | "revokeRole" | "setContractURI" | "setPlatformFeeInfo" | "setRoyaltyEngine" | "supportsInterface" | "updatePlugin"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "_getPluginForFunction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "addPlugin", values: [IPluginMap.PluginStruct]): string;
    encodeFunctionData(functionFragment: "contractType", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllFunctionsOfPlugin", values: [string]): string;
    encodeFunctionData(functionFragment: "getAllPlugins", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPlatformFeeInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPluginForFunction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoyalty", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoyaltyEngineAddress", values?: undefined): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRoleWithSwitch", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [string]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "pluginMap", values?: undefined): string;
    encodeFunctionData(functionFragment: "removePlugin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setContractURI", values: [string]): string;
    encodeFunctionData(functionFragment: "setPlatformFeeInfo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setRoyaltyEngine", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "updatePlugin", values: [IPluginMap.PluginStruct]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_getPluginForFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "addPlugin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllFunctionsOfPlugin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllPlugins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPluginForFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoyalty", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoyaltyEngineAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRoleWithSwitch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "pluginMap", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "removePlugin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoyaltyEngine", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updatePlugin", data: BytesLike): Result;
    events: {
        "ContractURIUpdated(string,string)": EventFragment;
        "FlatPlatformFeeUpdated(address,uint256)": EventFragment;
        "PlatformFeeInfoUpdated(address,uint256)": EventFragment;
        "PlatformFeeTypeUpdated(uint8)": EventFragment;
        "PluginAdded(bytes4,address)": EventFragment;
        "PluginRemoved(bytes4,address)": EventFragment;
        "PluginSet(bytes4,string,address)": EventFragment;
        "PluginUpdated(bytes4,address,address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "RoyaltyEngineUpdated(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ContractURIUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlatPlatformFeeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlatformFeeInfoUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlatformFeeTypeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PluginAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PluginRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PluginSet"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PluginUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoyaltyEngineUpdated"): EventFragment;
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
export interface FlatPlatformFeeUpdatedEventObject {
    platformFeeRecipient: string;
    flatFee: BigNumber;
}
export type FlatPlatformFeeUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], FlatPlatformFeeUpdatedEventObject>;
export type FlatPlatformFeeUpdatedEventFilter = TypedEventFilter<FlatPlatformFeeUpdatedEvent>;
export interface PlatformFeeInfoUpdatedEventObject {
    platformFeeRecipient: string;
    platformFeeBps: BigNumber;
}
export type PlatformFeeInfoUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], PlatformFeeInfoUpdatedEventObject>;
export type PlatformFeeInfoUpdatedEventFilter = TypedEventFilter<PlatformFeeInfoUpdatedEvent>;
export interface PlatformFeeTypeUpdatedEventObject {
    feeType: number;
}
export type PlatformFeeTypeUpdatedEvent = TypedEvent<[
    number
], PlatformFeeTypeUpdatedEventObject>;
export type PlatformFeeTypeUpdatedEventFilter = TypedEventFilter<PlatformFeeTypeUpdatedEvent>;
export interface PluginAddedEventObject {
    functionSelector: string;
    pluginAddress: string;
}
export type PluginAddedEvent = TypedEvent<[
    string,
    string
], PluginAddedEventObject>;
export type PluginAddedEventFilter = TypedEventFilter<PluginAddedEvent>;
export interface PluginRemovedEventObject {
    functionSelector: string;
    pluginAddress: string;
}
export type PluginRemovedEvent = TypedEvent<[
    string,
    string
], PluginRemovedEventObject>;
export type PluginRemovedEventFilter = TypedEventFilter<PluginRemovedEvent>;
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
export interface PluginUpdatedEventObject {
    functionSelector: string;
    oldPluginAddress: string;
    newPluginAddress: string;
}
export type PluginUpdatedEvent = TypedEvent<[
    string,
    string,
    string
], PluginUpdatedEventObject>;
export type PluginUpdatedEventFilter = TypedEventFilter<PluginUpdatedEvent>;
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
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface RoyaltyEngineUpdatedEventObject {
    previousAddress: string;
    newAddress: string;
}
export type RoyaltyEngineUpdatedEvent = TypedEvent<[
    string,
    string
], RoyaltyEngineUpdatedEventObject>;
export type RoyaltyEngineUpdatedEventFilter = TypedEventFilter<RoyaltyEngineUpdatedEvent>;
export interface MarketplaceV3 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MarketplaceV3Interface;
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
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        _getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        addPlugin(_plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        contractType(overrides?: CallOverrides): Promise<[string]>;
        contractURI(overrides?: CallOverrides): Promise<[string]>;
        contractVersion(overrides?: CallOverrides): Promise<[number]>;
        getAllFunctionsOfPlugin(_pluginAddress: string, overrides?: CallOverrides): Promise<[string[]] & {
            registered: string[];
        }>;
        getAllPlugins(overrides?: CallOverrides): Promise<[
            IPluginMap.PluginStructOutput[]
        ] & {
            registered: IPluginMap.PluginStructOutput[];
        }>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            member: string;
        }>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            count: BigNumber;
        }>;
        getRoyalty(tokenAddress: string, tokenId: BigNumberish, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getRoyaltyEngineAddress(overrides?: CallOverrides): Promise<[string] & {
            royaltyEngineAddress: string;
        }>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<[boolean]>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        pluginMap(overrides?: CallOverrides): Promise<[string]>;
        removePlugin(_selector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRoyaltyEngine(_royaltyEngineAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        updatePlugin(_plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    _getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<string>;
    addPlugin(_plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    contractType(overrides?: CallOverrides): Promise<string>;
    contractURI(overrides?: CallOverrides): Promise<string>;
    contractVersion(overrides?: CallOverrides): Promise<number>;
    getAllFunctionsOfPlugin(_pluginAddress: string, overrides?: CallOverrides): Promise<string[]>;
    getAllPlugins(overrides?: CallOverrides): Promise<IPluginMap.PluginStructOutput[]>;
    getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
    getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getRoyalty(tokenAddress: string, tokenId: BigNumberish, value: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getRoyaltyEngineAddress(overrides?: CallOverrides): Promise<string>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
    pluginMap(overrides?: CallOverrides): Promise<string>;
    removePlugin(_selector: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setContractURI(_uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRoyaltyEngine(_royaltyEngineAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    updatePlugin(_plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        _getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<string>;
        addPlugin(_plugin: IPluginMap.PluginStruct, overrides?: CallOverrides): Promise<void>;
        contractType(overrides?: CallOverrides): Promise<string>;
        contractURI(overrides?: CallOverrides): Promise<string>;
        contractVersion(overrides?: CallOverrides): Promise<number>;
        getAllFunctionsOfPlugin(_pluginAddress: string, overrides?: CallOverrides): Promise<string[]>;
        getAllPlugins(overrides?: CallOverrides): Promise<IPluginMap.PluginStructOutput[]>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoyalty(tokenAddress: string, tokenId: BigNumberish, value: BigNumberish, overrides?: CallOverrides): Promise<[
            string[],
            BigNumber[]
        ] & {
            recipients: string[];
            amounts: BigNumber[];
        }>;
        getRoyaltyEngineAddress(overrides?: CallOverrides): Promise<string>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        pluginMap(overrides?: CallOverrides): Promise<string>;
        removePlugin(_selector: BytesLike, overrides?: CallOverrides): Promise<void>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setContractURI(_uri: string, overrides?: CallOverrides): Promise<void>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setRoyaltyEngine(_royaltyEngineAddress: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        updatePlugin(_plugin: IPluginMap.PluginStruct, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ContractURIUpdated(string,string)"(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        ContractURIUpdated(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        "FlatPlatformFeeUpdated(address,uint256)"(platformFeeRecipient?: null, flatFee?: null): FlatPlatformFeeUpdatedEventFilter;
        FlatPlatformFeeUpdated(platformFeeRecipient?: null, flatFee?: null): FlatPlatformFeeUpdatedEventFilter;
        "PlatformFeeInfoUpdated(address,uint256)"(platformFeeRecipient?: string | null, platformFeeBps?: null): PlatformFeeInfoUpdatedEventFilter;
        PlatformFeeInfoUpdated(platformFeeRecipient?: string | null, platformFeeBps?: null): PlatformFeeInfoUpdatedEventFilter;
        "PlatformFeeTypeUpdated(uint8)"(feeType?: null): PlatformFeeTypeUpdatedEventFilter;
        PlatformFeeTypeUpdated(feeType?: null): PlatformFeeTypeUpdatedEventFilter;
        "PluginAdded(bytes4,address)"(functionSelector?: BytesLike | null, pluginAddress?: string | null): PluginAddedEventFilter;
        PluginAdded(functionSelector?: BytesLike | null, pluginAddress?: string | null): PluginAddedEventFilter;
        "PluginRemoved(bytes4,address)"(functionSelector?: BytesLike | null, pluginAddress?: string | null): PluginRemovedEventFilter;
        PluginRemoved(functionSelector?: BytesLike | null, pluginAddress?: string | null): PluginRemovedEventFilter;
        "PluginSet(bytes4,string,address)"(functionSelector?: BytesLike | null, functionSignature?: string | null, pluginAddress?: string | null): PluginSetEventFilter;
        PluginSet(functionSelector?: BytesLike | null, functionSignature?: string | null, pluginAddress?: string | null): PluginSetEventFilter;
        "PluginUpdated(bytes4,address,address)"(functionSelector?: BytesLike | null, oldPluginAddress?: string | null, newPluginAddress?: string | null): PluginUpdatedEventFilter;
        PluginUpdated(functionSelector?: BytesLike | null, oldPluginAddress?: string | null, newPluginAddress?: string | null): PluginUpdatedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "RoyaltyEngineUpdated(address,address)"(previousAddress?: string | null, newAddress?: string | null): RoyaltyEngineUpdatedEventFilter;
        RoyaltyEngineUpdated(previousAddress?: string | null, newAddress?: string | null): RoyaltyEngineUpdatedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        _getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        addPlugin(_plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        contractType(overrides?: CallOverrides): Promise<BigNumber>;
        contractURI(overrides?: CallOverrides): Promise<BigNumber>;
        contractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getAllFunctionsOfPlugin(_pluginAddress: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAllPlugins(overrides?: CallOverrides): Promise<BigNumber>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoyalty(tokenAddress: string, tokenId: BigNumberish, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getRoyaltyEngineAddress(overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        pluginMap(overrides?: CallOverrides): Promise<BigNumber>;
        removePlugin(_selector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRoyaltyEngine(_royaltyEngineAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        updatePlugin(_plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        addPlugin(_plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        contractType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllFunctionsOfPlugin(_pluginAddress: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllPlugins(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPluginForFunction(_selector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoyalty(tokenAddress: string, tokenId: BigNumberish, value: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getRoyaltyEngineAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        pluginMap(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        removePlugin(_selector: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRoyaltyEngine(_royaltyEngineAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updatePlugin(_plugin: IPluginMap.PluginStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=MarketplaceV3.d.ts.map