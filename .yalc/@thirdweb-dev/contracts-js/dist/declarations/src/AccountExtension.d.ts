import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IAccountPermissions {
    type SignerPermissionRequestStruct = {
        signer: string;
        approvedTargets: string[];
        nativeTokenLimitPerTransaction: BigNumberish;
        permissionStartTimestamp: BigNumberish;
        permissionEndTimestamp: BigNumberish;
        reqValidityStartTimestamp: BigNumberish;
        reqValidityEndTimestamp: BigNumberish;
        uid: BytesLike;
    };
    type SignerPermissionRequestStructOutput = [
        string,
        string[],
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string
    ] & {
        signer: string;
        approvedTargets: string[];
        nativeTokenLimitPerTransaction: BigNumber;
        permissionStartTimestamp: BigNumber;
        permissionEndTimestamp: BigNumber;
        reqValidityStartTimestamp: BigNumber;
        reqValidityEndTimestamp: BigNumber;
        uid: string;
    };
    type SignerPermissionsStruct = {
        signer: string;
        approvedTargets: string[];
        nativeTokenLimitPerTransaction: BigNumberish;
        startTimestamp: BigNumberish;
        endTimestamp: BigNumberish;
    };
    type SignerPermissionsStructOutput = [
        string,
        string[],
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        signer: string;
        approvedTargets: string[];
        nativeTokenLimitPerTransaction: BigNumber;
        startTimestamp: BigNumber;
        endTimestamp: BigNumber;
    };
}
export interface AccountExtensionInterface extends utils.Interface {
    functions: {
        "contractURI()": FunctionFragment;
        "execute(address,uint256,bytes)": FunctionFragment;
        "executeBatch(address[],uint256[],bytes[])": FunctionFragment;
        "getAllActiveSigners()": FunctionFragment;
        "getAllAdmins()": FunctionFragment;
        "getAllSigners()": FunctionFragment;
        "getPermissionsForSigner(address)": FunctionFragment;
        "isActiveSigner(address)": FunctionFragment;
        "isAdmin(address)": FunctionFragment;
        "isValidSignature(bytes32,bytes)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "setAdmin(address,bool)": FunctionFragment;
        "setContractURI(string)": FunctionFragment;
        "setPermissionsForSigner((address,address[],uint256,uint128,uint128,uint128,uint128,bytes32),bytes)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "verifySignerPermissionRequest((address,address[],uint256,uint128,uint128,uint128,uint128,bytes32),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "contractURI" | "execute" | "executeBatch" | "getAllActiveSigners" | "getAllAdmins" | "getAllSigners" | "getPermissionsForSigner" | "isActiveSigner" | "isAdmin" | "isValidSignature" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "setAdmin" | "setContractURI" | "setPermissionsForSigner" | "supportsInterface" | "verifySignerPermissionRequest"): FunctionFragment;
    encodeFunctionData(functionFragment: "contractURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "execute", values: [string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "executeBatch", values: [string[], BigNumberish[], BytesLike[]]): string;
    encodeFunctionData(functionFragment: "getAllActiveSigners", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllAdmins", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllSigners", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPermissionsForSigner", values: [string]): string;
    encodeFunctionData(functionFragment: "isActiveSigner", values: [string]): string;
    encodeFunctionData(functionFragment: "isAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "isValidSignature", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setAdmin", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setContractURI", values: [string]): string;
    encodeFunctionData(functionFragment: "setPermissionsForSigner", values: [IAccountPermissions.SignerPermissionRequestStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "verifySignerPermissionRequest", values: [IAccountPermissions.SignerPermissionRequestStruct, BytesLike]): string;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "executeBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllActiveSigners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAdmins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllSigners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPermissionsForSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isActiveSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidSignature", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPermissionsForSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifySignerPermissionRequest", data: BytesLike): Result;
    events: {
        "AdminUpdated(address,bool)": EventFragment;
        "ContractURIUpdated(string,string)": EventFragment;
        "SignerPermissionsUpdated(address,address,tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractURIUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignerPermissionsUpdated"): EventFragment;
}
export interface AdminUpdatedEventObject {
    signer: string;
    isAdmin: boolean;
}
export type AdminUpdatedEvent = TypedEvent<[
    string,
    boolean
], AdminUpdatedEventObject>;
export type AdminUpdatedEventFilter = TypedEventFilter<AdminUpdatedEvent>;
export interface ContractURIUpdatedEventObject {
    prevURI: string;
    newURI: string;
}
export type ContractURIUpdatedEvent = TypedEvent<[
    string,
    string
], ContractURIUpdatedEventObject>;
export type ContractURIUpdatedEventFilter = TypedEventFilter<ContractURIUpdatedEvent>;
export interface SignerPermissionsUpdatedEventObject {
    authorizingSigner: string;
    targetSigner: string;
    permissions: IAccountPermissions.SignerPermissionRequestStructOutput;
}
export type SignerPermissionsUpdatedEvent = TypedEvent<[
    string,
    string,
    IAccountPermissions.SignerPermissionRequestStructOutput
], SignerPermissionsUpdatedEventObject>;
export type SignerPermissionsUpdatedEventFilter = TypedEventFilter<SignerPermissionsUpdatedEvent>;
export interface AccountExtension extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: AccountExtensionInterface;
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
        contractURI(overrides?: CallOverrides): Promise<[string]>;
        execute(_target: string, _value: BigNumberish, _calldata: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        executeBatch(_target: string[], _value: BigNumberish[], _calldata: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAllActiveSigners(overrides?: CallOverrides): Promise<[
            IAccountPermissions.SignerPermissionsStructOutput[]
        ] & {
            signers: IAccountPermissions.SignerPermissionsStructOutput[];
        }>;
        getAllAdmins(overrides?: CallOverrides): Promise<[string[]]>;
        getAllSigners(overrides?: CallOverrides): Promise<[
            IAccountPermissions.SignerPermissionsStructOutput[]
        ] & {
            signers: IAccountPermissions.SignerPermissionsStructOutput[];
        }>;
        getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<[IAccountPermissions.SignerPermissionsStructOutput]>;
        isActiveSigner(signer: string, overrides?: CallOverrides): Promise<[boolean]>;
        isAdmin(_account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            magicValue: string;
        }>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAdmin(_account: string, _isAdmin: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            signer: string;
        }>;
    };
    contractURI(overrides?: CallOverrides): Promise<string>;
    execute(_target: string, _value: BigNumberish, _calldata: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    executeBatch(_target: string[], _value: BigNumberish[], _calldata: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAllActiveSigners(overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput[]>;
    getAllAdmins(overrides?: CallOverrides): Promise<string[]>;
    getAllSigners(overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput[]>;
    getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput>;
    isActiveSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
    isAdmin(_account: string, overrides?: CallOverrides): Promise<boolean>;
    isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<string>;
    onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAdmin(_account: string, _isAdmin: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setContractURI(_uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
        success: boolean;
        signer: string;
    }>;
    callStatic: {
        contractURI(overrides?: CallOverrides): Promise<string>;
        execute(_target: string, _value: BigNumberish, _calldata: BytesLike, overrides?: CallOverrides): Promise<void>;
        executeBatch(_target: string[], _value: BigNumberish[], _calldata: BytesLike[], overrides?: CallOverrides): Promise<void>;
        getAllActiveSigners(overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput[]>;
        getAllAdmins(overrides?: CallOverrides): Promise<string[]>;
        getAllSigners(overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput[]>;
        getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput>;
        isActiveSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
        isAdmin(_account: string, overrides?: CallOverrides): Promise<boolean>;
        isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        setAdmin(_account: string, _isAdmin: boolean, overrides?: CallOverrides): Promise<void>;
        setContractURI(_uri: string, overrides?: CallOverrides): Promise<void>;
        setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            signer: string;
        }>;
    };
    filters: {
        "AdminUpdated(address,bool)"(signer?: string | null, isAdmin?: null): AdminUpdatedEventFilter;
        AdminUpdated(signer?: string | null, isAdmin?: null): AdminUpdatedEventFilter;
        "ContractURIUpdated(string,string)"(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        ContractURIUpdated(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        "SignerPermissionsUpdated(address,address,tuple)"(authorizingSigner?: string | null, targetSigner?: string | null, permissions?: null): SignerPermissionsUpdatedEventFilter;
        SignerPermissionsUpdated(authorizingSigner?: string | null, targetSigner?: string | null, permissions?: null): SignerPermissionsUpdatedEventFilter;
    };
    estimateGas: {
        contractURI(overrides?: CallOverrides): Promise<BigNumber>;
        execute(_target: string, _value: BigNumberish, _calldata: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        executeBatch(_target: string[], _value: BigNumberish[], _calldata: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAllActiveSigners(overrides?: CallOverrides): Promise<BigNumber>;
        getAllAdmins(overrides?: CallOverrides): Promise<BigNumber>;
        getAllSigners(overrides?: CallOverrides): Promise<BigNumber>;
        getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        isActiveSigner(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        isAdmin(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAdmin(_account: string, _isAdmin: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        execute(_target: string, _value: BigNumberish, _calldata: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        executeBatch(_target: string[], _value: BigNumberish[], _calldata: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAllActiveSigners(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllAdmins(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllSigners(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isActiveSigner(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAdmin(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValidSignature(_hash: BytesLike, _signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAdmin(_account: string, _isAdmin: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=AccountExtension.d.ts.map