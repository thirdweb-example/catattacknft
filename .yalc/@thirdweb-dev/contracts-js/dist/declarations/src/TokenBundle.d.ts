import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace ITokenBundle {
    type TokenStruct = {
        assetContract: string;
        tokenType: BigNumberish;
        tokenId: BigNumberish;
        totalAmount: BigNumberish;
    };
    type TokenStructOutput = [string, number, BigNumber, BigNumber] & {
        assetContract: string;
        tokenType: number;
        tokenId: BigNumber;
        totalAmount: BigNumber;
    };
}
export interface TokenBundleInterface extends utils.Interface {
    functions: {
        "getTokenCountOfBundle(uint256)": FunctionFragment;
        "getTokenOfBundle(uint256,uint256)": FunctionFragment;
        "getUriOfBundle(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "getTokenCountOfBundle" | "getTokenOfBundle" | "getUriOfBundle"): FunctionFragment;
    encodeFunctionData(functionFragment: "getTokenCountOfBundle", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTokenOfBundle", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getUriOfBundle", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "getTokenCountOfBundle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTokenOfBundle", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getUriOfBundle", data: BytesLike): Result;
    events: {};
}
export interface TokenBundle extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: TokenBundleInterface;
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
        getTokenCountOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getTokenOfBundle(_bundleId: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<[ITokenBundle.TokenStructOutput]>;
        getUriOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
    };
    getTokenCountOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getTokenOfBundle(_bundleId: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<ITokenBundle.TokenStructOutput>;
    getUriOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    callStatic: {
        getTokenCountOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenOfBundle(_bundleId: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<ITokenBundle.TokenStructOutput>;
        getUriOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        getTokenCountOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getTokenOfBundle(_bundleId: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getUriOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        getTokenCountOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getTokenOfBundle(_bundleId: BigNumberish, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getUriOfBundle(_bundleId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=TokenBundle.d.ts.map