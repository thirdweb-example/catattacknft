import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IClaimCondition_V1 {
    type ClaimConditionStruct = {
        startTimestamp: BigNumberish;
        maxClaimableSupply: BigNumberish;
        supplyClaimed: BigNumberish;
        quantityLimitPerTransaction: BigNumberish;
        waitTimeInSecondsBetweenClaims: BigNumberish;
        merkleRoot: BytesLike;
        pricePerToken: BigNumberish;
        currency: string;
    };
    type ClaimConditionStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string
    ] & {
        startTimestamp: BigNumber;
        maxClaimableSupply: BigNumber;
        supplyClaimed: BigNumber;
        quantityLimitPerTransaction: BigNumber;
        waitTimeInSecondsBetweenClaims: BigNumber;
        merkleRoot: string;
        pricePerToken: BigNumber;
        currency: string;
    };
}
export declare namespace IDropSinglePhase_V1 {
    type AllowlistProofStruct = {
        proof: BytesLike[];
        maxQuantityInAllowlist: BigNumberish;
    };
    type AllowlistProofStructOutput = [string[], BigNumber] & {
        proof: string[];
        maxQuantityInAllowlist: BigNumber;
    };
}
export interface DropSinglePhase_V1Interface extends utils.Interface {
    functions: {
        "claim(address,uint256,address,uint256,(bytes32[],uint256),bytes)": FunctionFragment;
        "claimCondition()": FunctionFragment;
        "getClaimTimestamp(address)": FunctionFragment;
        "setClaimConditions((uint256,uint256,uint256,uint256,uint256,bytes32,uint256,address),bool)": FunctionFragment;
        "verifyClaim(address,uint256,address,uint256,bool)": FunctionFragment;
        "verifyClaimMerkleProof(address,uint256,(bytes32[],uint256))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "claim" | "claimCondition" | "getClaimTimestamp" | "setClaimConditions" | "verifyClaim" | "verifyClaimMerkleProof"): FunctionFragment;
    encodeFunctionData(functionFragment: "claim", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        IDropSinglePhase_V1.AllowlistProofStruct,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "claimCondition", values?: undefined): string;
    encodeFunctionData(functionFragment: "getClaimTimestamp", values: [string]): string;
    encodeFunctionData(functionFragment: "setClaimConditions", values: [IClaimCondition_V1.ClaimConditionStruct, boolean]): string;
    encodeFunctionData(functionFragment: "verifyClaim", values: [string, BigNumberish, string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "verifyClaimMerkleProof", values: [string, BigNumberish, IDropSinglePhase_V1.AllowlistProofStruct]): string;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimCondition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimConditions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyClaimMerkleProof", data: BytesLike): Result;
    events: {
        "ClaimConditionUpdated(tuple,bool)": EventFragment;
        "TokensClaimed(address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ClaimConditionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
}
export interface ClaimConditionUpdatedEventObject {
    condition: IClaimCondition_V1.ClaimConditionStructOutput;
    resetEligibility: boolean;
}
export type ClaimConditionUpdatedEvent = TypedEvent<[
    IClaimCondition_V1.ClaimConditionStructOutput,
    boolean
], ClaimConditionUpdatedEventObject>;
export type ClaimConditionUpdatedEventFilter = TypedEventFilter<ClaimConditionUpdatedEvent>;
export interface TokensClaimedEventObject {
    claimer: string;
    receiver: string;
    startTokenId: BigNumber;
    quantityClaimed: BigNumber;
}
export type TokensClaimedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], TokensClaimedEventObject>;
export type TokensClaimedEventFilter = TypedEventFilter<TokensClaimedEvent>;
export interface DropSinglePhase_V1 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DropSinglePhase_V1Interface;
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
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase_V1.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimCondition(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            BigNumber,
            string
        ] & {
            startTimestamp: BigNumber;
            maxClaimableSupply: BigNumber;
            supplyClaimed: BigNumber;
            quantityLimitPerTransaction: BigNumber;
            waitTimeInSecondsBetweenClaims: BigNumber;
            merkleRoot: string;
            pricePerToken: BigNumber;
            currency: string;
        }>;
        getClaimTimestamp(_claimer: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            lastClaimedAt: BigNumber;
            nextValidClaimTimestamp: BigNumber;
        }>;
        setClaimConditions(_condition: IClaimCondition_V1.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifyClaim(_claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<[void]>;
        verifyClaimMerkleProof(_claimer: string, _quantity: BigNumberish, _allowlistProof: IDropSinglePhase_V1.AllowlistProofStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            validMerkleProof: boolean;
            merkleProofIndex: BigNumber;
        }>;
    };
    claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase_V1.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimCondition(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        string
    ] & {
        startTimestamp: BigNumber;
        maxClaimableSupply: BigNumber;
        supplyClaimed: BigNumber;
        quantityLimitPerTransaction: BigNumber;
        waitTimeInSecondsBetweenClaims: BigNumber;
        merkleRoot: string;
        pricePerToken: BigNumber;
        currency: string;
    }>;
    getClaimTimestamp(_claimer: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        lastClaimedAt: BigNumber;
        nextValidClaimTimestamp: BigNumber;
    }>;
    setClaimConditions(_condition: IClaimCondition_V1.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifyClaim(_claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<void>;
    verifyClaimMerkleProof(_claimer: string, _quantity: BigNumberish, _allowlistProof: IDropSinglePhase_V1.AllowlistProofStruct, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber
    ] & {
        validMerkleProof: boolean;
        merkleProofIndex: BigNumber;
    }>;
    callStatic: {
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase_V1.AllowlistProofStruct, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        claimCondition(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            BigNumber,
            string
        ] & {
            startTimestamp: BigNumber;
            maxClaimableSupply: BigNumber;
            supplyClaimed: BigNumber;
            quantityLimitPerTransaction: BigNumber;
            waitTimeInSecondsBetweenClaims: BigNumber;
            merkleRoot: string;
            pricePerToken: BigNumber;
            currency: string;
        }>;
        getClaimTimestamp(_claimer: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            lastClaimedAt: BigNumber;
            nextValidClaimTimestamp: BigNumber;
        }>;
        setClaimConditions(_condition: IClaimCondition_V1.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: CallOverrides): Promise<void>;
        verifyClaim(_claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<void>;
        verifyClaimMerkleProof(_claimer: string, _quantity: BigNumberish, _allowlistProof: IDropSinglePhase_V1.AllowlistProofStruct, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            validMerkleProof: boolean;
            merkleProofIndex: BigNumber;
        }>;
    };
    filters: {
        "ClaimConditionUpdated(tuple,bool)"(condition?: null, resetEligibility?: null): ClaimConditionUpdatedEventFilter;
        ClaimConditionUpdated(condition?: null, resetEligibility?: null): ClaimConditionUpdatedEventFilter;
        "TokensClaimed(address,address,uint256,uint256)"(claimer?: string | null, receiver?: string | null, startTokenId?: BigNumberish | null, quantityClaimed?: null): TokensClaimedEventFilter;
        TokensClaimed(claimer?: string | null, receiver?: string | null, startTokenId?: BigNumberish | null, quantityClaimed?: null): TokensClaimedEventFilter;
    };
    estimateGas: {
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase_V1.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimCondition(overrides?: CallOverrides): Promise<BigNumber>;
        getClaimTimestamp(_claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
        setClaimConditions(_condition: IClaimCondition_V1.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifyClaim(_claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        verifyClaimMerkleProof(_claimer: string, _quantity: BigNumberish, _allowlistProof: IDropSinglePhase_V1.AllowlistProofStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase_V1.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimCondition(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getClaimTimestamp(_claimer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setClaimConditions(_condition: IClaimCondition_V1.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifyClaim(_claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyClaimMerkleProof(_claimer: string, _quantity: BigNumberish, _allowlistProof: IDropSinglePhase_V1.AllowlistProofStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=DropSinglePhase_V1.d.ts.map