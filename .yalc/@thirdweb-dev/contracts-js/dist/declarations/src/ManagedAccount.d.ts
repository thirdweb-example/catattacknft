import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export type UserOperationStruct = {
    sender: string;
    nonce: BigNumberish;
    initCode: BytesLike;
    callData: BytesLike;
    callGasLimit: BigNumberish;
    verificationGasLimit: BigNumberish;
    preVerificationGas: BigNumberish;
    maxFeePerGas: BigNumberish;
    maxPriorityFeePerGas: BigNumberish;
    paymasterAndData: BytesLike;
    signature: BytesLike;
};
export type UserOperationStructOutput = [
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    sender: string;
    nonce: BigNumber;
    initCode: string;
    callData: string;
    callGasLimit: BigNumber;
    verificationGasLimit: BigNumber;
    preVerificationGas: BigNumber;
    maxFeePerGas: BigNumber;
    maxPriorityFeePerGas: BigNumber;
    paymasterAndData: string;
    signature: string;
};
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
export interface ManagedAccountInterface extends utils.Interface {
    functions: {
        "addDeposit()": FunctionFragment;
        "entryPoint()": FunctionFragment;
        "factory()": FunctionFragment;
        "getAllActiveSigners()": FunctionFragment;
        "getAllAdmins()": FunctionFragment;
        "getAllSigners()": FunctionFragment;
        "getDeposit()": FunctionFragment;
        "getImplementationForFunction(bytes4)": FunctionFragment;
        "getNonce()": FunctionFragment;
        "getPermissionsForSigner(address)": FunctionFragment;
        "initialize(address,bytes)": FunctionFragment;
        "isActiveSigner(address)": FunctionFragment;
        "isAdmin(address)": FunctionFragment;
        "isValidSigner(address,(address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes))": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "setAdmin(address,bool)": FunctionFragment;
        "setEntrypointOverride(address)": FunctionFragment;
        "setPermissionsForSigner((address,address[],uint256,uint128,uint128,uint128,uint128,bytes32),bytes)": FunctionFragment;
        "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
        "verifySignerPermissionRequest((address,address[],uint256,uint128,uint128,uint128,uint128,bytes32),bytes)": FunctionFragment;
        "withdrawDepositTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addDeposit" | "entryPoint" | "factory" | "getAllActiveSigners" | "getAllAdmins" | "getAllSigners" | "getDeposit" | "getImplementationForFunction" | "getNonce" | "getPermissionsForSigner" | "initialize" | "isActiveSigner" | "isAdmin" | "isValidSigner" | "multicall" | "setAdmin" | "setEntrypointOverride" | "setPermissionsForSigner" | "validateUserOp" | "verifySignerPermissionRequest" | "withdrawDepositTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "addDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "entryPoint", values?: undefined): string;
    encodeFunctionData(functionFragment: "factory", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllActiveSigners", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllAdmins", values?: undefined): string;
    encodeFunctionData(functionFragment: "getAllSigners", values?: undefined): string;
    encodeFunctionData(functionFragment: "getDeposit", values?: undefined): string;
    encodeFunctionData(functionFragment: "getImplementationForFunction", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getNonce", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPermissionsForSigner", values: [string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "isActiveSigner", values: [string]): string;
    encodeFunctionData(functionFragment: "isAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "isValidSigner", values: [string, UserOperationStruct]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "setAdmin", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setEntrypointOverride", values: [string]): string;
    encodeFunctionData(functionFragment: "setPermissionsForSigner", values: [IAccountPermissions.SignerPermissionRequestStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "validateUserOp", values: [UserOperationStruct, BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "verifySignerPermissionRequest", values: [IAccountPermissions.SignerPermissionRequestStruct, BytesLike]): string;
    encodeFunctionData(functionFragment: "withdrawDepositTo", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllActiveSigners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAdmins", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllSigners", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDeposit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getImplementationForFunction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPermissionsForSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isActiveSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isValidSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setEntrypointOverride", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPermissionsForSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validateUserOp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifySignerPermissionRequest", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawDepositTo", data: BytesLike): Result;
    events: {
        "AdminUpdated(address,bool)": EventFragment;
        "EntrypointOverride(address)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "SignerPermissionsUpdated(address,address,tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AdminUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "EntrypointOverride"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
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
export interface EntrypointOverrideEventObject {
    entrypointOverride: string;
}
export type EntrypointOverrideEvent = TypedEvent<[
    string
], EntrypointOverrideEventObject>;
export type EntrypointOverrideEventFilter = TypedEventFilter<EntrypointOverrideEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
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
export interface ManagedAccount extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ManagedAccountInterface;
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
        addDeposit(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<[string]>;
        factory(overrides?: CallOverrides): Promise<[string]>;
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
        getDeposit(overrides?: CallOverrides): Promise<[BigNumber]>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getNonce(overrides?: CallOverrides): Promise<[BigNumber]>;
        getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<[IAccountPermissions.SignerPermissionsStructOutput]>;
        initialize(_defaultAdmin: string, arg1: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isActiveSigner(signer: string, overrides?: CallOverrides): Promise<[boolean]>;
        isAdmin(_account: string, overrides?: CallOverrides): Promise<[boolean]>;
        isValidSigner(_signer: string, _userOp: UserOperationStruct, overrides?: CallOverrides): Promise<[boolean]>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAdmin(_account: string, _isAdmin: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setEntrypointOverride(_entrypointOverride: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            signer: string;
        }>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addDeposit(overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    entryPoint(overrides?: CallOverrides): Promise<string>;
    factory(overrides?: CallOverrides): Promise<string>;
    getAllActiveSigners(overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput[]>;
    getAllAdmins(overrides?: CallOverrides): Promise<string[]>;
    getAllSigners(overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput[]>;
    getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
    getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<string>;
    getNonce(overrides?: CallOverrides): Promise<BigNumber>;
    getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput>;
    initialize(_defaultAdmin: string, arg1: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isActiveSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
    isAdmin(_account: string, overrides?: CallOverrides): Promise<boolean>;
    isValidSigner(_signer: string, _userOp: UserOperationStruct, overrides?: CallOverrides): Promise<boolean>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAdmin(_account: string, _isAdmin: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setEntrypointOverride(_entrypointOverride: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
        success: boolean;
        signer: string;
    }>;
    withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addDeposit(overrides?: CallOverrides): Promise<void>;
        entryPoint(overrides?: CallOverrides): Promise<string>;
        factory(overrides?: CallOverrides): Promise<string>;
        getAllActiveSigners(overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput[]>;
        getAllAdmins(overrides?: CallOverrides): Promise<string[]>;
        getAllSigners(overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput[]>;
        getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<string>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<IAccountPermissions.SignerPermissionsStructOutput>;
        initialize(_defaultAdmin: string, arg1: BytesLike, overrides?: CallOverrides): Promise<void>;
        isActiveSigner(signer: string, overrides?: CallOverrides): Promise<boolean>;
        isAdmin(_account: string, overrides?: CallOverrides): Promise<boolean>;
        isValidSigner(_signer: string, _userOp: UserOperationStruct, overrides?: CallOverrides): Promise<boolean>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        setAdmin(_account: string, _isAdmin: boolean, overrides?: CallOverrides): Promise<void>;
        setEntrypointOverride(_entrypointOverride: string, overrides?: CallOverrides): Promise<void>;
        setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<void>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            signer: string;
        }>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AdminUpdated(address,bool)"(signer?: string | null, isAdmin?: null): AdminUpdatedEventFilter;
        AdminUpdated(signer?: string | null, isAdmin?: null): AdminUpdatedEventFilter;
        "EntrypointOverride(address)"(entrypointOverride?: null): EntrypointOverrideEventFilter;
        EntrypointOverride(entrypointOverride?: null): EntrypointOverrideEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "SignerPermissionsUpdated(address,address,tuple)"(authorizingSigner?: string | null, targetSigner?: string | null, permissions?: null): SignerPermissionsUpdatedEventFilter;
        SignerPermissionsUpdated(authorizingSigner?: string | null, targetSigner?: string | null, permissions?: null): SignerPermissionsUpdatedEventFilter;
    };
    estimateGas: {
        addDeposit(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        entryPoint(overrides?: CallOverrides): Promise<BigNumber>;
        factory(overrides?: CallOverrides): Promise<BigNumber>;
        getAllActiveSigners(overrides?: CallOverrides): Promise<BigNumber>;
        getAllAdmins(overrides?: CallOverrides): Promise<BigNumber>;
        getAllSigners(overrides?: CallOverrides): Promise<BigNumber>;
        getDeposit(overrides?: CallOverrides): Promise<BigNumber>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getNonce(overrides?: CallOverrides): Promise<BigNumber>;
        getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_defaultAdmin: string, arg1: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isActiveSigner(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        isAdmin(_account: string, overrides?: CallOverrides): Promise<BigNumber>;
        isValidSigner(_signer: string, _userOp: UserOperationStruct, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAdmin(_account: string, _isAdmin: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setEntrypointOverride(_entrypointOverride: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addDeposit(overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllActiveSigners(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllAdmins(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllSigners(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getImplementationForFunction(_functionSelector: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getNonce(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPermissionsForSigner(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_defaultAdmin: string, arg1: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isActiveSigner(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isAdmin(_account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isValidSigner(_signer: string, _userOp: UserOperationStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAdmin(_account: string, _isAdmin: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setEntrypointOverride(_entrypointOverride: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPermissionsForSigner(_req: IAccountPermissions.SignerPermissionRequestStruct, _signature: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        validateUserOp(userOp: UserOperationStruct, userOpHash: BytesLike, missingAccountFunds: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifySignerPermissionRequest(req: IAccountPermissions.SignerPermissionRequestStruct, signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        withdrawDepositTo(withdrawAddress: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ManagedAccount.d.ts.map