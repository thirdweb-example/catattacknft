import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IClaimCondition {
    type ClaimConditionStruct = {
        startTimestamp: BigNumberish;
        maxClaimableSupply: BigNumberish;
        supplyClaimed: BigNumberish;
        quantityLimitPerWallet: BigNumberish;
        merkleRoot: BytesLike;
        pricePerToken: BigNumberish;
        currency: string;
        metadata: string;
    };
    type ClaimConditionStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string,
        string
    ] & {
        startTimestamp: BigNumber;
        maxClaimableSupply: BigNumber;
        supplyClaimed: BigNumber;
        quantityLimitPerWallet: BigNumber;
        merkleRoot: string;
        pricePerToken: BigNumber;
        currency: string;
        metadata: string;
    };
}
export declare namespace IDropSinglePhase1155 {
    type AllowlistProofStruct = {
        proof: BytesLike[];
        quantityLimitPerWallet: BigNumberish;
        pricePerToken: BigNumberish;
        currency: string;
    };
    type AllowlistProofStructOutput = [
        string[],
        BigNumber,
        BigNumber,
        string
    ] & {
        proof: string[];
        quantityLimitPerWallet: BigNumber;
        pricePerToken: BigNumber;
        currency: string;
    };
}
export interface IDropSinglePhase1155Interface extends utils.Interface {
    functions: {
        "claim(address,uint256,uint256,address,uint256,(bytes32[],uint256,uint256,address),bytes)": FunctionFragment;
        "setClaimConditions(uint256,(uint256,uint256,uint256,uint256,bytes32,uint256,address,string),bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claim" | "setClaimConditions"): FunctionFragment;
    encodeFunctionData(functionFragment: "claim", values: [
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        IDropSinglePhase1155.AllowlistProofStruct,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "setClaimConditions", values: [BigNumberish, IClaimCondition.ClaimConditionStruct, boolean]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimConditions", data: BytesLike): Result;
    events: {
        "ClaimConditionUpdated(uint256,tuple,bool)": EventFragment;
        "TokensClaimed(address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimConditionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
}
export interface ClaimConditionUpdatedEventObject {
    tokenId: BigNumber;
    condition: IClaimCondition.ClaimConditionStructOutput;
    resetEligibility: boolean;
}
export type ClaimConditionUpdatedEvent = TypedEvent<[
    BigNumber,
    IClaimCondition.ClaimConditionStructOutput,
    boolean
], ClaimConditionUpdatedEventObject>;
export type ClaimConditionUpdatedEventFilter = TypedEventFilter<ClaimConditionUpdatedEvent>;
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
export interface IDropSinglePhase1155 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IDropSinglePhase1155Interface;
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
        claim(receiver: string, tokenId: BigNumberish, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setClaimConditions(tokenId: BigNumberish, phase: IClaimCondition.ClaimConditionStruct, resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    claim(receiver: string, tokenId: BigNumberish, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setClaimConditions(tokenId: BigNumberish, phase: IClaimCondition.ClaimConditionStruct, resetClaimEligibility: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        claim(receiver: string, tokenId: BigNumberish, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setClaimConditions(tokenId: BigNumberish, phase: IClaimCondition.ClaimConditionStruct, resetClaimEligibility: boolean, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "ClaimConditionUpdated(uint256,tuple,bool)"(tokenId?: BigNumberish | null, condition?: null, resetEligibility?: null): ClaimConditionUpdatedEventFilter;
        ClaimConditionUpdated(tokenId?: BigNumberish | null, condition?: null, resetEligibility?: null): ClaimConditionUpdatedEventFilter;
        "TokensClaimed(address,address,uint256,uint256)"(claimer?: string | null, receiver?: string | null, tokenId?: BigNumberish | null, quantityClaimed?: null): TokensClaimedEventFilter;
        TokensClaimed(claimer?: string | null, receiver?: string | null, tokenId?: BigNumberish | null, quantityClaimed?: null): TokensClaimedEventFilter;
    };
    estimateGas: {
        claim(receiver: string, tokenId: BigNumberish, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setClaimConditions(tokenId: BigNumberish, phase: IClaimCondition.ClaimConditionStruct, resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(receiver: string, tokenId: BigNumberish, quantity: BigNumberish, currency: string, pricePerToken: BigNumberish, allowlistProof: IDropSinglePhase1155.AllowlistProofStruct, data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setClaimConditions(tokenId: BigNumberish, phase: IClaimCondition.ClaimConditionStruct, resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IDropSinglePhase1155.d.ts.map