import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface RulesEngineStorageInterface extends utils.Interface {
    functions: {
        "RULES_ENGINE_STORAGE_POSITION()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "RULES_ENGINE_STORAGE_POSITION"): FunctionFragment;
    encodeFunctionData(functionFragment: "RULES_ENGINE_STORAGE_POSITION", values?: undefined): string;
    decodeFunctionResult(functionFragment: "RULES_ENGINE_STORAGE_POSITION", data: BytesLike): Result;
    events: {};
}
export interface RulesEngineStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RulesEngineStorageInterface;
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
        RULES_ENGINE_STORAGE_POSITION(overrides?: CallOverrides): Promise<[string]>;
    };
    RULES_ENGINE_STORAGE_POSITION(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        RULES_ENGINE_STORAGE_POSITION(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        RULES_ENGINE_STORAGE_POSITION(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        RULES_ENGINE_STORAGE_POSITION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=RulesEngineStorage.d.ts.map