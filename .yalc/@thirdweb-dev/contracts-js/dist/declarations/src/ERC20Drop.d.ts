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
export declare namespace IDropSinglePhase {
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
export interface ERC20DropInterface extends utils.Interface {
    functions: {
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "burnFrom(address,uint256)": FunctionFragment;
        "claim(address,uint256,address,uint256,(bytes32[],uint256,uint256,address),bytes)": FunctionFragment;
        "claimCondition()": FunctionFragment;
        "contractURI()": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "getSupplyClaimedByWallet(address)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "primarySaleRecipient()": FunctionFragment;
        "setClaimConditions((uint256,uint256,uint256,uint256,bytes32,uint256,address,string),bool)": FunctionFragment;
        "setContractURI(string)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "setPrimarySaleRecipient(address)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "verifyClaim(address,uint256,address,uint256,(bytes32[],uint256,uint256,address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "burn" | "burnFrom" | "claim" | "claimCondition" | "contractURI" | "decimals" | "decreaseAllowance" | "getSupplyClaimedByWallet" | "increaseAllowance" | "multicall" | "name" | "nonces" | "owner" | "permit" | "primarySaleRecipient" | "setClaimConditions" | "setContractURI" | "setOwner" | "setPrimarySaleRecipient" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "verifyClaim"): FunctionFragment;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "burnFrom", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claim", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        IDropSinglePhase.AllowlistProofStruct,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "claimCondition", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSupplyClaimedByWallet", values: [string]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "permit", values: [
        string,
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "primarySaleRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "setClaimConditions", values: [IClaimCondition.ClaimConditionStruct, boolean]): string;
    encodeFunctionData(functionFragment: "setContractURI", values: [string]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "setPrimarySaleRecipient", values: [string]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "verifyClaim", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        IDropSinglePhase.AllowlistProofStruct
    ]): string;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimCondition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyClaimedByWallet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "primarySaleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimConditions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrimarySaleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyClaim", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ClaimConditionUpdated(tuple,bool)": EventFragment;
        "ContractURIUpdated(string,string)": EventFragment;
        "OwnerUpdated(address,address)": EventFragment;
        "PrimarySaleRecipientUpdated(address)": EventFragment;
        "TokensClaimed(address,address,uint256,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimConditionUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractURIUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PrimarySaleRecipientUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ClaimConditionUpdatedEventObject {
    condition: IClaimCondition.ClaimConditionStructOutput;
    resetEligibility: boolean;
}
export type ClaimConditionUpdatedEvent = TypedEvent<[
    IClaimCondition.ClaimConditionStructOutput,
    boolean
], ClaimConditionUpdatedEventObject>;
export type ClaimConditionUpdatedEventFilter = TypedEventFilter<ClaimConditionUpdatedEvent>;
export interface ContractURIUpdatedEventObject {
    prevURI: string;
    newURI: string;
}
export type ContractURIUpdatedEvent = TypedEvent<[
    string,
    string
], ContractURIUpdatedEventObject>;
export type ContractURIUpdatedEventFilter = TypedEventFilter<ContractURIUpdatedEvent>;
export interface OwnerUpdatedEventObject {
    prevOwner: string;
    newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<[
    string,
    string
], OwnerUpdatedEventObject>;
export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;
export interface PrimarySaleRecipientUpdatedEventObject {
    recipient: string;
}
export type PrimarySaleRecipientUpdatedEvent = TypedEvent<[
    string
], PrimarySaleRecipientUpdatedEventObject>;
export type PrimarySaleRecipientUpdatedEventFilter = TypedEventFilter<PrimarySaleRecipientUpdatedEvent>;
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
export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface ERC20Drop extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: ERC20DropInterface;
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
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burnFrom(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimCondition(overrides?: CallOverrides): Promise<[
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
        }>;
        contractURI(overrides?: CallOverrides): Promise<[string]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getSupplyClaimedByWallet(_claimer: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<[string]>;
        setClaimConditions(_condition: IClaimCondition.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifyClaim(_claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase.AllowlistProofStruct, overrides?: CallOverrides): Promise<[boolean] & {
            isOverride: boolean;
        }>;
    };
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(_amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burnFrom(_account: string, _amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimCondition(overrides?: CallOverrides): Promise<[
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
    }>;
    contractURI(overrides?: CallOverrides): Promise<string>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getSupplyClaimedByWallet(_claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    owner(overrides?: CallOverrides): Promise<string>;
    permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    primarySaleRecipient(overrides?: CallOverrides): Promise<string>;
    setClaimConditions(_condition: IClaimCondition.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setContractURI(_uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(_newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifyClaim(_claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase.AllowlistProofStruct, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        burnFrom(_account: string, _amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase.AllowlistProofStruct, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        claimCondition(overrides?: CallOverrides): Promise<[
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
        }>;
        contractURI(overrides?: CallOverrides): Promise<string>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        getSupplyClaimedByWallet(_claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<string>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<string>;
        setClaimConditions(_condition: IClaimCondition.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: CallOverrides): Promise<void>;
        setContractURI(_uri: string, overrides?: CallOverrides): Promise<void>;
        setOwner(_newOwner: string, overrides?: CallOverrides): Promise<void>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: CallOverrides): Promise<void>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        verifyClaim(_claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase.AllowlistProofStruct, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "ClaimConditionUpdated(tuple,bool)"(condition?: null, resetEligibility?: null): ClaimConditionUpdatedEventFilter;
        ClaimConditionUpdated(condition?: null, resetEligibility?: null): ClaimConditionUpdatedEventFilter;
        "ContractURIUpdated(string,string)"(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        ContractURIUpdated(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        "OwnerUpdated(address,address)"(prevOwner?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
        OwnerUpdated(prevOwner?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
        "PrimarySaleRecipientUpdated(address)"(recipient?: string | null): PrimarySaleRecipientUpdatedEventFilter;
        PrimarySaleRecipientUpdated(recipient?: string | null): PrimarySaleRecipientUpdatedEventFilter;
        "TokensClaimed(address,address,uint256,uint256)"(claimer?: string | null, receiver?: string | null, startTokenId?: BigNumberish | null, quantityClaimed?: null): TokensClaimedEventFilter;
        TokensClaimed(claimer?: string | null, receiver?: string | null, startTokenId?: BigNumberish | null, quantityClaimed?: null): TokensClaimedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
    };
    estimateGas: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burnFrom(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimCondition(overrides?: CallOverrides): Promise<BigNumber>;
        contractURI(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getSupplyClaimedByWallet(_claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        setClaimConditions(_condition: IClaimCondition.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifyClaim(_claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase.AllowlistProofStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(_amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burnFrom(_account: string, _amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimCondition(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getSupplyClaimedByWallet(_claimer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setClaimConditions(_condition: IClaimCondition.ClaimConditionStruct, _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifyClaim(_claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDropSinglePhase.AllowlistProofStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=ERC20Drop.d.ts.map