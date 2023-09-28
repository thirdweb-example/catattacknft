import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace ISignatureAction {
    type GenericRequestStruct = {
        validityStartTimestamp: BigNumberish;
        validityEndTimestamp: BigNumberish;
        uid: BytesLike;
        data: BytesLike;
    };
    type GenericRequestStructOutput = [
        BigNumber,
        BigNumber,
        string,
        string
    ] & {
        validityStartTimestamp: BigNumber;
        validityEndTimestamp: BigNumber;
        uid: string;
        data: string;
    };
}
export interface SignatureActionUpgradeableInterface extends utils.Interface {
    functions: {
        "verify((uint128,uint128,bytes32,bytes),bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "verify"): FunctionFragment;
    encodeFunctionData(functionFragment: "verify", values: [ISignatureAction.GenericRequestStruct, BytesLike]): string;
    decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;
    events: {
        "Initialized(uint8)": EventFragment;
        "RequestExecuted(address,address,tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RequestExecuted"): EventFragment;
}
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface RequestExecutedEventObject {
    user: string;
    signer: string;
    _req: ISignatureAction.GenericRequestStructOutput;
}
export type RequestExecutedEvent = TypedEvent<[
    string,
    string,
    ISignatureAction.GenericRequestStructOutput
], RequestExecutedEventObject>;
export type RequestExecutedEventFilter = TypedEventFilter<RequestExecutedEvent>;
export interface SignatureActionUpgradeable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SignatureActionUpgradeableInterface;
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
        verify(_req: ISignatureAction.GenericRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            signer: string;
        }>;
    };
    verify(_req: ISignatureAction.GenericRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
        success: boolean;
        signer: string;
    }>;
    callStatic: {
        verify(_req: ISignatureAction.GenericRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<[boolean, string] & {
            success: boolean;
            signer: string;
        }>;
    };
    filters: {
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "RequestExecuted(address,address,tuple)"(user?: string | null, signer?: string | null, _req?: null): RequestExecutedEventFilter;
        RequestExecuted(user?: string | null, signer?: string | null, _req?: null): RequestExecutedEventFilter;
    };
    estimateGas: {
        verify(_req: ISignatureAction.GenericRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        verify(_req: ISignatureAction.GenericRequestStruct, _signature: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SignatureActionUpgradeable.d.ts.map