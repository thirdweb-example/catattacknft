import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface ILoyaltyCardInterface extends utils.Interface {
    functions: {
        "cancel(uint256)": FunctionFragment;
        "mintTo(address,string)": FunctionFragment;
        "revoke(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cancel" | "mintTo" | "revoke"): FunctionFragment;
    encodeFunctionData(functionFragment: "cancel", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "mintTo", values: [string, string]): string;
    encodeFunctionData(functionFragment: "revoke", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;
    events: {
        "TokensMinted(address,uint256,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokensMinted"): EventFragment;
}
export interface TokensMintedEventObject {
    mintedTo: string;
    tokenIdMinted: BigNumber;
    uri: string;
}
export type TokensMintedEvent = TypedEvent<[
    string,
    BigNumber,
    string
], TokensMintedEventObject>;
export type TokensMintedEventFilter = TypedEventFilter<TokensMintedEvent>;
export interface ILoyaltyCard extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILoyaltyCardInterface;
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
        cancel(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        mintTo(to: string, uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revoke(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    cancel(tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    mintTo(to: string, uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revoke(tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cancel(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        mintTo(to: string, uri: string, overrides?: CallOverrides): Promise<BigNumber>;
        revoke(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TokensMinted(address,uint256,string)"(mintedTo?: string | null, tokenIdMinted?: BigNumberish | null, uri?: null): TokensMintedEventFilter;
        TokensMinted(mintedTo?: string | null, tokenIdMinted?: BigNumberish | null, uri?: null): TokensMintedEventFilter;
    };
    estimateGas: {
        cancel(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        mintTo(to: string, uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revoke(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cancel(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        mintTo(to: string, uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revoke(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ILoyaltyCard.d.ts.map