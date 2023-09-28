import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface ILazyMintInterface extends utils.Interface {
    functions: {
        "lazyMint(uint256,string,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "lazyMint"): FunctionFragment;
    encodeFunctionData(functionFragment: "lazyMint", values: [BigNumberish, string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "lazyMint", data: BytesLike): Result;
    events: {
        "TokensLazyMinted(uint256,uint256,string,bytes)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokensLazyMinted"): EventFragment;
}
export interface TokensLazyMintedEventObject {
    startTokenId: BigNumber;
    endTokenId: BigNumber;
    baseURI: string;
    encryptedBaseURI: string;
}
export type TokensLazyMintedEvent = TypedEvent<[
    BigNumber,
    BigNumber,
    string,
    string
], TokensLazyMintedEventObject>;
export type TokensLazyMintedEventFilter = TypedEventFilter<TokensLazyMintedEvent>;
export interface ILazyMint extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ILazyMintInterface;
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
        lazyMint(amount: BigNumberish, baseURIForTokens: string, extraData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    lazyMint(amount: BigNumberish, baseURIForTokens: string, extraData: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        lazyMint(amount: BigNumberish, baseURIForTokens: string, extraData: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "TokensLazyMinted(uint256,uint256,string,bytes)"(startTokenId?: BigNumberish | null, endTokenId?: null, baseURI?: null, encryptedBaseURI?: null): TokensLazyMintedEventFilter;
        TokensLazyMinted(startTokenId?: BigNumberish | null, endTokenId?: null, baseURI?: null, encryptedBaseURI?: null): TokensLazyMintedEventFilter;
    };
    estimateGas: {
        lazyMint(amount: BigNumberish, baseURIForTokens: string, extraData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        lazyMint(amount: BigNumberish, baseURIForTokens: string, extraData: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ILazyMint.d.ts.map