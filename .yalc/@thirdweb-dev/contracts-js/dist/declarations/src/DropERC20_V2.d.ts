import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IDropClaimCondition_V2 {
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
export declare namespace ERC20VotesUpgradeable {
    type CheckpointStruct = {
        fromBlock: BigNumberish;
        votes: BigNumberish;
    };
    type CheckpointStructOutput = [number, BigNumber] & {
        fromBlock: number;
        votes: BigNumber;
    };
}
export interface DropERC20_V2Interface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "DOMAIN_SEPARATOR()": FunctionFragment;
        "allowance(address,address)": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "burnFrom(address,uint256)": FunctionFragment;
        "checkpoints(address,uint32)": FunctionFragment;
        "claim(address,uint256,address,uint256,bytes32[],uint256)": FunctionFragment;
        "claimCondition()": FunctionFragment;
        "contractType()": FunctionFragment;
        "contractURI()": FunctionFragment;
        "contractVersion()": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "delegate(address)": FunctionFragment;
        "delegateBySig(address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "delegates(address)": FunctionFragment;
        "getActiveClaimConditionId()": FunctionFragment;
        "getClaimConditionById(uint256)": FunctionFragment;
        "getClaimTimestamp(uint256,address)": FunctionFragment;
        "getPastTotalSupply(uint256)": FunctionFragment;
        "getPastVotes(address,uint256)": FunctionFragment;
        "getPlatformFeeInfo()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "getVotes(address)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "initialize(address,string,string,string,address[],address,address,uint256)": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "maxTotalSupply()": FunctionFragment;
        "maxWalletClaimCount()": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "name()": FunctionFragment;
        "nonces(address)": FunctionFragment;
        "numCheckpoints(address)": FunctionFragment;
        "permit(address,address,uint256,uint256,uint8,bytes32,bytes32)": FunctionFragment;
        "primarySaleRecipient()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setClaimConditions((uint256,uint256,uint256,uint256,uint256,bytes32,uint256,address)[],bool)": FunctionFragment;
        "setContractURI(string)": FunctionFragment;
        "setMaxTotalSupply(uint256)": FunctionFragment;
        "setMaxWalletClaimCount(uint256)": FunctionFragment;
        "setPlatformFeeInfo(address,uint256)": FunctionFragment;
        "setPrimarySaleRecipient(address)": FunctionFragment;
        "setWalletClaimCount(address,uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "verifyClaim(uint256,address,uint256,address,uint256,bool)": FunctionFragment;
        "verifyClaimMerkleProof(uint256,address,uint256,bytes32[],uint256)": FunctionFragment;
        "walletClaimCount(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "DOMAIN_SEPARATOR" | "allowance" | "approve" | "balanceOf" | "burn" | "burnFrom" | "checkpoints" | "claim" | "claimCondition" | "contractType" | "contractURI" | "contractVersion" | "decimals" | "decreaseAllowance" | "delegate" | "delegateBySig" | "delegates" | "getActiveClaimConditionId" | "getClaimConditionById" | "getClaimTimestamp" | "getPastTotalSupply" | "getPastVotes" | "getPlatformFeeInfo" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "getVotes" | "grantRole" | "hasRole" | "increaseAllowance" | "initialize" | "isTrustedForwarder" | "maxTotalSupply" | "maxWalletClaimCount" | "multicall" | "name" | "nonces" | "numCheckpoints" | "permit" | "primarySaleRecipient" | "renounceRole" | "revokeRole" | "setClaimConditions" | "setContractURI" | "setMaxTotalSupply" | "setMaxWalletClaimCount" | "setPlatformFeeInfo" | "setPrimarySaleRecipient" | "setWalletClaimCount" | "supportsInterface" | "symbol" | "totalSupply" | "transfer" | "transferFrom" | "verifyClaim" | "verifyClaimMerkleProof" | "walletClaimCount"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
    encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "burnFrom", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "checkpoints", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claim", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        BytesLike[],
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "claimCondition", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractType", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(functionFragment: "decreaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "delegate", values: [string]): string;
    encodeFunctionData(functionFragment: "delegateBySig", values: [
        string,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "delegates", values: [string]): string;
    encodeFunctionData(functionFragment: "getActiveClaimConditionId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getClaimConditionById", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getClaimTimestamp", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "getPastTotalSupply", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPastVotes", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getPlatformFeeInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getVotes", values: [string]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "increaseAllowance", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        string,
        string,
        string,
        string,
        string[],
        string,
        string,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [string]): string;
    encodeFunctionData(functionFragment: "maxTotalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "maxWalletClaimCount", values?: undefined): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nonces", values: [string]): string;
    encodeFunctionData(functionFragment: "numCheckpoints", values: [string]): string;
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
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setClaimConditions", values: [IDropClaimCondition_V2.ClaimConditionStruct[], boolean]): string;
    encodeFunctionData(functionFragment: "setContractURI", values: [string]): string;
    encodeFunctionData(functionFragment: "setMaxTotalSupply", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxWalletClaimCount", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPlatformFeeInfo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPrimarySaleRecipient", values: [string]): string;
    encodeFunctionData(functionFragment: "setWalletClaimCount", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "verifyClaim", values: [BigNumberish, string, BigNumberish, string, BigNumberish, boolean]): string;
    encodeFunctionData(functionFragment: "verifyClaimMerkleProof", values: [BigNumberish, string, BigNumberish, BytesLike[], BigNumberish]): string;
    encodeFunctionData(functionFragment: "walletClaimCount", values: [string]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "checkpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimCondition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegateBySig", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getActiveClaimConditionId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimConditionById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimTimestamp", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPastTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPastVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxWalletClaimCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "numCheckpoints", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "primarySaleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimConditions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxWalletClaimCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrimarySaleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWalletClaimCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyClaimMerkleProof", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "walletClaimCount", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ClaimConditionsUpdated(tuple[])": EventFragment;
        "ContractURIUpdated(string,string)": EventFragment;
        "DelegateChanged(address,address,address)": EventFragment;
        "DelegateVotesChanged(address,uint256,uint256)": EventFragment;
        "FlatPlatformFeeUpdated(address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "MaxTotalSupplyUpdated(uint256)": EventFragment;
        "MaxWalletClaimCountUpdated(uint256)": EventFragment;
        "PlatformFeeInfoUpdated(address,uint256)": EventFragment;
        "PlatformFeeTypeUpdated(uint8)": EventFragment;
        "PrimarySaleRecipientUpdated(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "TokensClaimed(uint256,address,address,uint256)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
        "WalletClaimCountUpdated(address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimConditionsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractURIUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelegateChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DelegateVotesChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlatPlatformFeeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxTotalSupplyUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxWalletClaimCountUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlatformFeeInfoUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlatformFeeTypeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PrimarySaleRecipientUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "WalletClaimCountUpdated"): EventFragment;
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
export interface ClaimConditionsUpdatedEventObject {
    claimConditions: IDropClaimCondition_V2.ClaimConditionStructOutput[];
}
export type ClaimConditionsUpdatedEvent = TypedEvent<[
    IDropClaimCondition_V2.ClaimConditionStructOutput[]
], ClaimConditionsUpdatedEventObject>;
export type ClaimConditionsUpdatedEventFilter = TypedEventFilter<ClaimConditionsUpdatedEvent>;
export interface ContractURIUpdatedEventObject {
    prevURI: string;
    newURI: string;
}
export type ContractURIUpdatedEvent = TypedEvent<[
    string,
    string
], ContractURIUpdatedEventObject>;
export type ContractURIUpdatedEventFilter = TypedEventFilter<ContractURIUpdatedEvent>;
export interface DelegateChangedEventObject {
    delegator: string;
    fromDelegate: string;
    toDelegate: string;
}
export type DelegateChangedEvent = TypedEvent<[
    string,
    string,
    string
], DelegateChangedEventObject>;
export type DelegateChangedEventFilter = TypedEventFilter<DelegateChangedEvent>;
export interface DelegateVotesChangedEventObject {
    delegate: string;
    previousBalance: BigNumber;
    newBalance: BigNumber;
}
export type DelegateVotesChangedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], DelegateVotesChangedEventObject>;
export type DelegateVotesChangedEventFilter = TypedEventFilter<DelegateVotesChangedEvent>;
export interface FlatPlatformFeeUpdatedEventObject {
    platformFeeRecipient: string;
    flatFee: BigNumber;
}
export type FlatPlatformFeeUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], FlatPlatformFeeUpdatedEventObject>;
export type FlatPlatformFeeUpdatedEventFilter = TypedEventFilter<FlatPlatformFeeUpdatedEvent>;
export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;
export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;
export interface MaxTotalSupplyUpdatedEventObject {
    maxTotalSupply: BigNumber;
}
export type MaxTotalSupplyUpdatedEvent = TypedEvent<[
    BigNumber
], MaxTotalSupplyUpdatedEventObject>;
export type MaxTotalSupplyUpdatedEventFilter = TypedEventFilter<MaxTotalSupplyUpdatedEvent>;
export interface MaxWalletClaimCountUpdatedEventObject {
    count: BigNumber;
}
export type MaxWalletClaimCountUpdatedEvent = TypedEvent<[
    BigNumber
], MaxWalletClaimCountUpdatedEventObject>;
export type MaxWalletClaimCountUpdatedEventFilter = TypedEventFilter<MaxWalletClaimCountUpdatedEvent>;
export interface PlatformFeeInfoUpdatedEventObject {
    platformFeeRecipient: string;
    platformFeeBps: BigNumber;
}
export type PlatformFeeInfoUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], PlatformFeeInfoUpdatedEventObject>;
export type PlatformFeeInfoUpdatedEventFilter = TypedEventFilter<PlatformFeeInfoUpdatedEvent>;
export interface PlatformFeeTypeUpdatedEventObject {
    feeType: number;
}
export type PlatformFeeTypeUpdatedEvent = TypedEvent<[
    number
], PlatformFeeTypeUpdatedEventObject>;
export type PlatformFeeTypeUpdatedEventFilter = TypedEventFilter<PlatformFeeTypeUpdatedEvent>;
export interface PrimarySaleRecipientUpdatedEventObject {
    recipient: string;
}
export type PrimarySaleRecipientUpdatedEvent = TypedEvent<[
    string
], PrimarySaleRecipientUpdatedEventObject>;
export type PrimarySaleRecipientUpdatedEventFilter = TypedEventFilter<PrimarySaleRecipientUpdatedEvent>;
export interface RoleAdminChangedEventObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
}
export type RoleAdminChangedEvent = TypedEvent<[
    string,
    string,
    string
], RoleAdminChangedEventObject>;
export type RoleAdminChangedEventFilter = TypedEventFilter<RoleAdminChangedEvent>;
export interface RoleGrantedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleGrantedEvent = TypedEvent<[
    string,
    string,
    string
], RoleGrantedEventObject>;
export type RoleGrantedEventFilter = TypedEventFilter<RoleGrantedEvent>;
export interface RoleRevokedEventObject {
    role: string;
    account: string;
    sender: string;
}
export type RoleRevokedEvent = TypedEvent<[
    string,
    string,
    string
], RoleRevokedEventObject>;
export type RoleRevokedEventFilter = TypedEventFilter<RoleRevokedEvent>;
export interface TokensClaimedEventObject {
    claimConditionIndex: BigNumber;
    claimer: string;
    receiver: string;
    quantityClaimed: BigNumber;
}
export type TokensClaimedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
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
export interface WalletClaimCountUpdatedEventObject {
    wallet: string;
    count: BigNumber;
}
export type WalletClaimCountUpdatedEvent = TypedEvent<[
    string,
    BigNumber
], WalletClaimCountUpdatedEventObject>;
export type WalletClaimCountUpdatedEventFilter = TypedEventFilter<WalletClaimCountUpdatedEvent>;
export interface DropERC20_V2 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DropERC20_V2Interface;
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
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burnFrom(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        checkpoints(account: string, pos: BigNumberish, overrides?: CallOverrides): Promise<[ERC20VotesUpgradeable.CheckpointStructOutput]>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _proofs: BytesLike[], _proofMaxQuantityPerTransaction: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimCondition(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            currentStartId: BigNumber;
            count: BigNumber;
        }>;
        contractType(overrides?: CallOverrides): Promise<[string]>;
        contractURI(overrides?: CallOverrides): Promise<[string]>;
        contractVersion(overrides?: CallOverrides): Promise<[number]>;
        decimals(overrides?: CallOverrides): Promise<[number]>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        delegates(account: string, overrides?: CallOverrides): Promise<[string]>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<[
            IDropClaimCondition_V2.ClaimConditionStructOutput
        ] & {
            condition: IDropClaimCondition_V2.ClaimConditionStructOutput;
        }>;
        getClaimTimestamp(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            lastClaimTimestamp: BigNumber;
            nextValidClaimTimestamp: BigNumber;
        }>;
        getPastTotalSupply(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPastVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        getVotes(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _primarySaleRecipient: string, _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<[boolean]>;
        maxTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        maxWalletClaimCount(overrides?: CallOverrides): Promise<[BigNumber]>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nonces(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        numCheckpoints(account: string, overrides?: CallOverrides): Promise<[number]>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<[string]>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setClaimConditions(_phases: IDropClaimCondition_V2.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxTotalSupply(_maxTotalSupply: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxWalletClaimCount(_count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setWalletClaimCount(_claimer: string, _count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<[void]>;
        verifyClaimMerkleProof(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _proofs: BytesLike[], _proofMaxQuantityPerTransaction: BigNumberish, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            validMerkleProof: boolean;
            merkleProofIndex: BigNumber;
        }>;
        walletClaimCount(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
    allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
    approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burnFrom(account: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    checkpoints(account: string, pos: BigNumberish, overrides?: CallOverrides): Promise<ERC20VotesUpgradeable.CheckpointStructOutput>;
    claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _proofs: BytesLike[], _proofMaxQuantityPerTransaction: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimCondition(overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        currentStartId: BigNumber;
        count: BigNumber;
    }>;
    contractType(overrides?: CallOverrides): Promise<string>;
    contractURI(overrides?: CallOverrides): Promise<string>;
    contractVersion(overrides?: CallOverrides): Promise<number>;
    decimals(overrides?: CallOverrides): Promise<number>;
    decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegate(delegatee: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    delegates(account: string, overrides?: CallOverrides): Promise<string>;
    getActiveClaimConditionId(overrides?: CallOverrides): Promise<BigNumber>;
    getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<IDropClaimCondition_V2.ClaimConditionStructOutput>;
    getClaimTimestamp(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        lastClaimTimestamp: BigNumber;
        nextValidClaimTimestamp: BigNumber;
    }>;
    getPastTotalSupply(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getPastVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _primarySaleRecipient: string, _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
    maxTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    maxWalletClaimCount(overrides?: CallOverrides): Promise<BigNumber>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    numCheckpoints(account: string, overrides?: CallOverrides): Promise<number>;
    permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    primarySaleRecipient(overrides?: CallOverrides): Promise<string>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setClaimConditions(_phases: IDropClaimCondition_V2.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setContractURI(_uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxTotalSupply(_maxTotalSupply: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxWalletClaimCount(_count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setWalletClaimCount(_claimer: string, _count: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<void>;
    verifyClaimMerkleProof(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _proofs: BytesLike[], _proofMaxQuantityPerTransaction: BigNumberish, overrides?: CallOverrides): Promise<[
        boolean,
        BigNumber
    ] & {
        validMerkleProof: boolean;
        merkleProofIndex: BigNumber;
    }>;
    walletClaimCount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        burnFrom(account: string, amount: BigNumberish, overrides?: CallOverrides): Promise<void>;
        checkpoints(account: string, pos: BigNumberish, overrides?: CallOverrides): Promise<ERC20VotesUpgradeable.CheckpointStructOutput>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _proofs: BytesLike[], _proofMaxQuantityPerTransaction: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claimCondition(overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            currentStartId: BigNumber;
            count: BigNumber;
        }>;
        contractType(overrides?: CallOverrides): Promise<string>;
        contractURI(overrides?: CallOverrides): Promise<string>;
        contractVersion(overrides?: CallOverrides): Promise<number>;
        decimals(overrides?: CallOverrides): Promise<number>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        delegate(delegatee: string, overrides?: CallOverrides): Promise<void>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        delegates(account: string, overrides?: CallOverrides): Promise<string>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<BigNumber>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<IDropClaimCondition_V2.ClaimConditionStructOutput>;
        getClaimTimestamp(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            lastClaimTimestamp: BigNumber;
            nextValidClaimTimestamp: BigNumber;
        }>;
        getPastTotalSupply(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPastVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _primarySaleRecipient: string, _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
        maxTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        maxWalletClaimCount(overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        name(overrides?: CallOverrides): Promise<string>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        numCheckpoints(account: string, overrides?: CallOverrides): Promise<number>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: CallOverrides): Promise<void>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<string>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setClaimConditions(_phases: IDropClaimCondition_V2.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: CallOverrides): Promise<void>;
        setContractURI(_uri: string, overrides?: CallOverrides): Promise<void>;
        setMaxTotalSupply(_maxTotalSupply: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxWalletClaimCount(_count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: CallOverrides): Promise<void>;
        setWalletClaimCount(_claimer: string, _count: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<void>;
        verifyClaimMerkleProof(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _proofs: BytesLike[], _proofMaxQuantityPerTransaction: BigNumberish, overrides?: CallOverrides): Promise<[
            boolean,
            BigNumber
        ] & {
            validMerkleProof: boolean;
            merkleProofIndex: BigNumber;
        }>;
        walletClaimCount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        Approval(owner?: string | null, spender?: string | null, value?: null): ApprovalEventFilter;
        "ClaimConditionsUpdated(tuple[])"(claimConditions?: null): ClaimConditionsUpdatedEventFilter;
        ClaimConditionsUpdated(claimConditions?: null): ClaimConditionsUpdatedEventFilter;
        "ContractURIUpdated(string,string)"(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        ContractURIUpdated(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        "DelegateChanged(address,address,address)"(delegator?: string | null, fromDelegate?: string | null, toDelegate?: string | null): DelegateChangedEventFilter;
        DelegateChanged(delegator?: string | null, fromDelegate?: string | null, toDelegate?: string | null): DelegateChangedEventFilter;
        "DelegateVotesChanged(address,uint256,uint256)"(delegate?: string | null, previousBalance?: null, newBalance?: null): DelegateVotesChangedEventFilter;
        DelegateVotesChanged(delegate?: string | null, previousBalance?: null, newBalance?: null): DelegateVotesChangedEventFilter;
        "FlatPlatformFeeUpdated(address,uint256)"(platformFeeRecipient?: null, flatFee?: null): FlatPlatformFeeUpdatedEventFilter;
        FlatPlatformFeeUpdated(platformFeeRecipient?: null, flatFee?: null): FlatPlatformFeeUpdatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "MaxTotalSupplyUpdated(uint256)"(maxTotalSupply?: null): MaxTotalSupplyUpdatedEventFilter;
        MaxTotalSupplyUpdated(maxTotalSupply?: null): MaxTotalSupplyUpdatedEventFilter;
        "MaxWalletClaimCountUpdated(uint256)"(count?: null): MaxWalletClaimCountUpdatedEventFilter;
        MaxWalletClaimCountUpdated(count?: null): MaxWalletClaimCountUpdatedEventFilter;
        "PlatformFeeInfoUpdated(address,uint256)"(platformFeeRecipient?: string | null, platformFeeBps?: null): PlatformFeeInfoUpdatedEventFilter;
        PlatformFeeInfoUpdated(platformFeeRecipient?: string | null, platformFeeBps?: null): PlatformFeeInfoUpdatedEventFilter;
        "PlatformFeeTypeUpdated(uint8)"(feeType?: null): PlatformFeeTypeUpdatedEventFilter;
        PlatformFeeTypeUpdated(feeType?: null): PlatformFeeTypeUpdatedEventFilter;
        "PrimarySaleRecipientUpdated(address)"(recipient?: string | null): PrimarySaleRecipientUpdatedEventFilter;
        PrimarySaleRecipientUpdated(recipient?: string | null): PrimarySaleRecipientUpdatedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        "TokensClaimed(uint256,address,address,uint256)"(claimConditionIndex?: BigNumberish | null, claimer?: string | null, receiver?: string | null, quantityClaimed?: null): TokensClaimedEventFilter;
        TokensClaimed(claimConditionIndex?: BigNumberish | null, claimer?: string | null, receiver?: string | null, quantityClaimed?: null): TokensClaimedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, value?: null): TransferEventFilter;
        "WalletClaimCountUpdated(address,uint256)"(wallet?: string | null, count?: null): WalletClaimCountUpdatedEventFilter;
        WalletClaimCountUpdated(wallet?: string | null, count?: null): WalletClaimCountUpdatedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<BigNumber>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burnFrom(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        checkpoints(account: string, pos: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _proofs: BytesLike[], _proofMaxQuantityPerTransaction: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimCondition(overrides?: CallOverrides): Promise<BigNumber>;
        contractType(overrides?: CallOverrides): Promise<BigNumber>;
        contractURI(overrides?: CallOverrides): Promise<BigNumber>;
        contractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        decimals(overrides?: CallOverrides): Promise<BigNumber>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        delegates(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<BigNumber>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getClaimTimestamp(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
        getPastTotalSupply(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPastVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getVotes(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _primarySaleRecipient: string, _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<BigNumber>;
        maxTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        maxWalletClaimCount(overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nonces(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        numCheckpoints(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setClaimConditions(_phases: IDropClaimCondition_V2.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxTotalSupply(_maxTotalSupply: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxWalletClaimCount(_count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setWalletClaimCount(_claimer: string, _count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<BigNumber>;
        verifyClaimMerkleProof(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _proofs: BytesLike[], _proofMaxQuantityPerTransaction: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        walletClaimCount(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        allowance(owner: string, spender: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        approve(spender: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burnFrom(account: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        checkpoints(account: string, pos: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _proofs: BytesLike[], _proofMaxQuantityPerTransaction: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimCondition(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        decreaseAllowance(spender: string, subtractedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegate(delegatee: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegateBySig(delegatee: string, nonce: BigNumberish, expiry: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        delegates(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getClaimTimestamp(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPastTotalSupply(blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPastVotes(account: string, blockNumber: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getVotes(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        increaseAllowance(spender: string, addedValue: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _primarySaleRecipient: string, _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        maxWalletClaimCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nonces(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        numCheckpoints(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        permit(owner: string, spender: string, value: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setClaimConditions(_phases: IDropClaimCondition_V2.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxTotalSupply(_maxTotalSupply: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxWalletClaimCount(_count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setWalletClaimCount(_claimer: string, _count: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transfer(to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, amount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, verifyMaxQuantityPerTransaction: boolean, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyClaimMerkleProof(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _proofs: BytesLike[], _proofMaxQuantityPerTransaction: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        walletClaimCount(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=DropERC20_V2.d.ts.map