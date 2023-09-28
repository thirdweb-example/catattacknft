import type { BaseContract, BigNumber, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IERC1155EnumerableInterface extends utils.Interface {
    functions: {
        "nextTokenIdToMint()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "nextTokenIdToMint"): FunctionFragment;
    encodeFunctionData(functionFragment: "nextTokenIdToMint", values?: undefined): string;
    decodeFunctionResult(functionFragment: "nextTokenIdToMint", data: BytesLike): Result;
    events: {};
}
export interface IERC1155Enumerable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC1155EnumerableInterface;
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
        nextTokenIdToMint(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        nextTokenIdToMint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IERC1155Enumerable.d.ts.map