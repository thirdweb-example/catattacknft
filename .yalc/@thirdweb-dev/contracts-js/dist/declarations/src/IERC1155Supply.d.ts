import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IERC1155SupplyInterface extends utils.Interface {
    functions: {
        "totalSupply(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "totalSupply"): FunctionFragment;
    encodeFunctionData(functionFragment: "totalSupply", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    events: {};
}
export interface IERC1155Supply extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IERC1155SupplyInterface;
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
        totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {};
    estimateGas: {
        totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        totalSupply(id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IERC1155Supply.d.ts.map