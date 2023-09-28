import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface ERC2771ContextStorageInterface extends utils.Interface {
    functions: {
        "ERC2771_CONTEXT_STORAGE_POSITION()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "ERC2771_CONTEXT_STORAGE_POSITION"): FunctionFragment;
    encodeFunctionData(functionFragment: "ERC2771_CONTEXT_STORAGE_POSITION", values?: undefined): string;
    decodeFunctionResult(functionFragment: "ERC2771_CONTEXT_STORAGE_POSITION", data: BytesLike): Result;
    events: {};
}
export interface ERC2771ContextStorage extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC2771ContextStorageInterface;
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
        ERC2771_CONTEXT_STORAGE_POSITION(overrides?: CallOverrides): Promise<[string]>;
    };
    ERC2771_CONTEXT_STORAGE_POSITION(overrides?: CallOverrides): Promise<string>;
    callStatic: {
        ERC2771_CONTEXT_STORAGE_POSITION(overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        ERC2771_CONTEXT_STORAGE_POSITION(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        ERC2771_CONTEXT_STORAGE_POSITION(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ERC2771ContextStorage.d.ts.map