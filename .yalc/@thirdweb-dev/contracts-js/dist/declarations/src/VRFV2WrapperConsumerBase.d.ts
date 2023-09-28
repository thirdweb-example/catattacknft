import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface VRFV2WrapperConsumerBaseInterface extends utils.Interface {
    functions: {
        "rawFulfillRandomWords(uint256,uint256[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "rawFulfillRandomWords"): FunctionFragment;
    encodeFunctionData(functionFragment: "rawFulfillRandomWords", values: [BigNumberish, BigNumberish[]]): string;
    decodeFunctionResult(functionFragment: "rawFulfillRandomWords", data: BytesLike): Result;
    events: {};
}
export interface VRFV2WrapperConsumerBase extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: VRFV2WrapperConsumerBaseInterface;
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
        rawFulfillRandomWords(_requestId: BigNumberish, _randomWords: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    rawFulfillRandomWords(_requestId: BigNumberish, _randomWords: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        rawFulfillRandomWords(_requestId: BigNumberish, _randomWords: BigNumberish[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        rawFulfillRandomWords(_requestId: BigNumberish, _randomWords: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        rawFulfillRandomWords(_requestId: BigNumberish, _randomWords: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=VRFV2WrapperConsumerBase.d.ts.map