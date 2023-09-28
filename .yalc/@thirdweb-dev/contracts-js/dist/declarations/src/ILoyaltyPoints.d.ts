import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface ILoyaltyPointsInterface extends utils.Interface {
    functions: {
        "cancel(address,uint256)": FunctionFragment;
        "getTotalMintedInLifetime(address)": FunctionFragment;
        "mintTo(address,uint256)": FunctionFragment;
        "revoke(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cancel" | "getTotalMintedInLifetime" | "mintTo" | "revoke"): FunctionFragment;
    encodeFunctionData(functionFragment: "cancel", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getTotalMintedInLifetime", values: [string]): string;
    encodeFunctionData(functionFragment: "mintTo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "revoke", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getTotalMintedInLifetime", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;
    events: {
        "TokensMinted(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokensMinted"): EventFragment;
}
export interface TokensMintedEventObject {
    mintedTo: string;
    quantityMinted: BigNumber;
}
export type TokensMintedEvent = TypedEvent<[
    string,
    BigNumber
], TokensMintedEventObject>;
export type TokensMintedEventFilter = TypedEventFilter<TokensMintedEvent>;
export interface ILoyaltyPoints extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILoyaltyPointsInterface;
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
        cancel(owner: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getTotalMintedInLifetime(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        mintTo(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revoke(owner: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    cancel(owner: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getTotalMintedInLifetime(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    mintTo(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revoke(owner: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cancel(owner: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getTotalMintedInLifetime(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintTo(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        revoke(owner: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TokensMinted(address,uint256)"(mintedTo?: string | null, quantityMinted?: null): TokensMintedEventFilter;
        TokensMinted(mintedTo?: string | null, quantityMinted?: null): TokensMintedEventFilter;
    };
    estimateGas: {
        cancel(owner: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getTotalMintedInLifetime(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintTo(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revoke(owner: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cancel(owner: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getTotalMintedInLifetime(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintTo(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revoke(owner: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ILoyaltyPoints.d.ts.map