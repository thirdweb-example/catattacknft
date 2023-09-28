import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface TWMultichainRegistryStorageInterface extends utils.Interface {
    functions: {
        "MULTICHAIN_REGISTRY_STORAGE_POSITION()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "MULTICHAIN_REGISTRY_STORAGE_POSITION"): FunctionFragment;
    encodeFunctionData(functionFragment: "MULTICHAIN_REGISTRY_STORAGE_POSITION", values?: undefined): string;
    decodeFunctionResult(functionFragment: "MULTICHAIN_REGISTRY_STORAGE_POSITION", data: BytesLike): Result;
    events: {};
}
export interface TWMultichainRegistryStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TWMultichainRegistryStorageInterface;
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
        MULTICHAIN_REGISTRY_STORAGE_POSITION(overrides?: CallOverrides): Promise<[string]>;
    };
    MULTICHAIN_REGISTRY_STORAGE_POSITION(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        MULTICHAIN_REGISTRY_STORAGE_POSITION(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        MULTICHAIN_REGISTRY_STORAGE_POSITION(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        MULTICHAIN_REGISTRY_STORAGE_POSITION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=TWMultichainRegistryStorage.d.ts.map