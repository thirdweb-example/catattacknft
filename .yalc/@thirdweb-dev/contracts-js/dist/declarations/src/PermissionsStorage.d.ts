import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface PermissionsStorageInterface extends utils.Interface {
    functions: {
        "PERMISSIONS_STORAGE_POSITION()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "PERMISSIONS_STORAGE_POSITION"): FunctionFragment;
    encodeFunctionData(functionFragment: "PERMISSIONS_STORAGE_POSITION", values?: undefined): string;
    decodeFunctionResult(functionFragment: "PERMISSIONS_STORAGE_POSITION", data: BytesLike): Result;
    events: {};
}
export interface PermissionsStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: PermissionsStorageInterface;
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
        PERMISSIONS_STORAGE_POSITION(overrides?: CallOverrides): Promise<[string]>;
    };
    PERMISSIONS_STORAGE_POSITION(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        PERMISSIONS_STORAGE_POSITION(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        PERMISSIONS_STORAGE_POSITION(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        PERMISSIONS_STORAGE_POSITION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=PermissionsStorage.d.ts.map