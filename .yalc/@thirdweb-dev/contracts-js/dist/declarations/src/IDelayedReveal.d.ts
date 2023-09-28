import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IDelayedRevealInterface extends utils.Interface {
    functions: {
        "encryptDecrypt(bytes,bytes)": FunctionFragment;
        "reveal(uint256,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "encryptDecrypt" | "reveal"): FunctionFragment;
    encodeFunctionData(functionFragment: "encryptDecrypt", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "reveal", values: [BigNumberish, BytesLike]): string;
    decodeFunctionResult(functionFragment: "encryptDecrypt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reveal", data: BytesLike): Result;
    events: {
        "TokenURIRevealed(uint256,string)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokenURIRevealed"): EventFragment;
}
export interface TokenURIRevealedEventObject {
    index: BigNumber;
    revealedURI: string;
}
export type TokenURIRevealedEvent = TypedEvent<[
    BigNumber,
    string
], TokenURIRevealedEventObject>;
export type TokenURIRevealedEventFilter = TypedEventFilter<TokenURIRevealedEvent>;
export interface IDelayedReveal extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDelayedRevealInterface;
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
        encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            result: string;
        }>;
        reveal(identifier: BigNumberish, key: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<string>;
    reveal(identifier: BigNumberish, key: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<string>;
        reveal(identifier: BigNumberish, key: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "TokenURIRevealed(uint256,string)"(index?: BigNumberish | null, revealedURI?: null): TokenURIRevealedEventFilter;
        TokenURIRevealed(index?: BigNumberish | null, revealedURI?: null): TokenURIRevealedEventFilter;
    };
    estimateGas: {
        encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        reveal(identifier: BigNumberish, key: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reveal(identifier: BigNumberish, key: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IDelayedReveal.d.ts.map