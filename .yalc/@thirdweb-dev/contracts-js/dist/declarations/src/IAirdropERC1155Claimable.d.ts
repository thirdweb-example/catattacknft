import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IAirdropERC1155ClaimableInterface extends utils.Interface {
    functions: {
        "claim(address,uint256,uint256,bytes32[],uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claim"): FunctionFragment;
    encodeFunctionData(functionFragment: "claim", values: [string, BigNumberish, BigNumberish, BytesLike[], BigNumberish]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    events: {
        "TokensClaimed(address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
}
export interface TokensClaimedEventObject {
    claimer: string;
    receiver: string;
    tokenId: BigNumber;
    quantityClaimed: BigNumber;
}
export type TokensClaimedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], TokensClaimedEventObject>;
export type TokensClaimedEventFilter = TypedEventFilter<TokensClaimedEvent>;
export interface IAirdropERC1155Claimable extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAirdropERC1155ClaimableInterface;
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
        claim(receiver: string, quantity: BigNumberish, tokenId: BigNumberish, proofs: BytesLike[], proofMaxQuantityForWallet: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    claim(receiver: string, quantity: BigNumberish, tokenId: BigNumberish, proofs: BytesLike[], proofMaxQuantityForWallet: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claim(receiver: string, quantity: BigNumberish, tokenId: BigNumberish, proofs: BytesLike[], proofMaxQuantityForWallet: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TokensClaimed(address,address,uint256,uint256)"(claimer?: string | null, receiver?: string | null, tokenId?: BigNumberish | null, quantityClaimed?: null): TokensClaimedEventFilter;
        TokensClaimed(claimer?: string | null, receiver?: string | null, tokenId?: BigNumberish | null, quantityClaimed?: null): TokensClaimedEventFilter;
    };
    estimateGas: {
        claim(receiver: string, quantity: BigNumberish, tokenId: BigNumberish, proofs: BytesLike[], proofMaxQuantityForWallet: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(receiver: string, quantity: BigNumberish, tokenId: BigNumberish, proofs: BytesLike[], proofMaxQuantityForWallet: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IAirdropERC1155Claimable.d.ts.map