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
export declare namespace IDrop1155 {
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
export interface DropERC1155Interface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "balanceOf(address,uint256)": FunctionFragment;
        "balanceOfBatch(address[],uint256[])": FunctionFragment;
        "burnBatch(address,uint256[],uint256[])": FunctionFragment;
        "claim(address,uint256,uint256,address,uint256,(bytes32[],uint256,uint256,address),bytes)": FunctionFragment;
        "claimCondition(uint256)": FunctionFragment;
        "contractType()": FunctionFragment;
        "contractURI()": FunctionFragment;
        "contractVersion()": FunctionFragment;
        "getActiveClaimConditionId(uint256)": FunctionFragment;
        "getBaseURICount()": FunctionFragment;
        "getBatchIdAtIndex(uint256)": FunctionFragment;
        "getClaimConditionById(uint256,uint256)": FunctionFragment;
        "getDefaultRoyaltyInfo()": FunctionFragment;
        "getFlatPlatformFeeInfo()": FunctionFragment;
        "getPlatformFeeInfo()": FunctionFragment;
        "getPlatformFeeType()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "getRoyaltyInfoForToken(uint256)": FunctionFragment;
        "getSupplyClaimedByWallet(uint256,uint256,address)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "hasRoleWithSwitch(bytes32,address)": FunctionFragment;
        "initialize(address,string,string,string,address[],address,address,uint128,uint128,address)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "lazyMint(uint256,string,bytes)": FunctionFragment;
        "maxTotalSupply(uint256)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "name()": FunctionFragment;
        "nextTokenIdToMint()": FunctionFragment;
        "operatorRestriction()": FunctionFragment;
        "owner()": FunctionFragment;
        "primarySaleRecipient()": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "royaltyInfo(uint256,uint256)": FunctionFragment;
        "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
        "saleRecipient(uint256)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setClaimConditions(uint256,(uint256,uint256,uint256,uint256,bytes32,uint256,address,string)[],bool)": FunctionFragment;
        "setContractURI(string)": FunctionFragment;
        "setDefaultRoyaltyInfo(address,uint256)": FunctionFragment;
        "setFlatPlatformFeeInfo(address,uint256)": FunctionFragment;
        "setMaxTotalSupply(uint256,uint256)": FunctionFragment;
        "setOperatorRestriction(bool)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "setPlatformFeeInfo(address,uint256)": FunctionFragment;
        "setPlatformFeeType(uint8)": FunctionFragment;
        "setPrimarySaleRecipient(address)": FunctionFragment;
        "setRoyaltyInfoForToken(uint256,address,uint256)": FunctionFragment;
        "setSaleRecipientForToken(uint256,address)": FunctionFragment;
        "subscribeToRegistry(address)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply(uint256)": FunctionFragment;
        "uri(uint256)": FunctionFragment;
        "verifyClaim(uint256,address,uint256,uint256,address,uint256,(bytes32[],uint256,uint256,address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "balanceOf" | "balanceOfBatch" | "burnBatch" | "claim" | "claimCondition" | "contractType" | "contractURI" | "contractVersion" | "getActiveClaimConditionId" | "getBaseURICount" | "getBatchIdAtIndex" | "getClaimConditionById" | "getDefaultRoyaltyInfo" | "getFlatPlatformFeeInfo" | "getPlatformFeeInfo" | "getPlatformFeeType" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "getRoyaltyInfoForToken" | "getSupplyClaimedByWallet" | "grantRole" | "hasRole" | "hasRoleWithSwitch" | "initialize" | "isApprovedForAll" | "isTrustedForwarder" | "lazyMint" | "maxTotalSupply" | "multicall" | "name" | "nextTokenIdToMint" | "operatorRestriction" | "owner" | "primarySaleRecipient" | "renounceRole" | "revokeRole" | "royaltyInfo" | "safeBatchTransferFrom" | "safeTransferFrom" | "saleRecipient" | "setApprovalForAll" | "setClaimConditions" | "setContractURI" | "setDefaultRoyaltyInfo" | "setFlatPlatformFeeInfo" | "setMaxTotalSupply" | "setOperatorRestriction" | "setOwner" | "setPlatformFeeInfo" | "setPlatformFeeType" | "setPrimarySaleRecipient" | "setRoyaltyInfoForToken" | "setSaleRecipientForToken" | "subscribeToRegistry" | "supportsInterface" | "symbol" | "totalSupply" | "uri" | "verifyClaim"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOfBatch", values: [string[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "burnBatch", values: [string, BigNumberish[], BigNumberish[]]): string;
    encodeFunctionData(functionFragment: "claim", values: [
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        IDrop1155.AllowlistProofStruct,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "claimCondition", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "contractType", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "getActiveClaimConditionId", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBaseURICount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBatchIdAtIndex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getClaimConditionById", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDefaultRoyaltyInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getFlatPlatformFeeInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPlatformFeeInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPlatformFeeType", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoyaltyInfoForToken", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSupplyClaimedByWallet", values: [BigNumberish, BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRoleWithSwitch", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [
        string,
        string,
        string,
        string,
        string[],
        string,
        string,
        BigNumberish,
        BigNumberish,
        string
    ]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [string]): string;
    encodeFunctionData(functionFragment: "lazyMint", values: [BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "maxTotalSupply", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextTokenIdToMint", values?: undefined): string;
    encodeFunctionData(functionFragment: "operatorRestriction", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "primarySaleRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "royaltyInfo", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeBatchTransferFrom", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "saleRecipient", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setClaimConditions", values: [BigNumberish, IClaimCondition.ClaimConditionStruct[], boolean]): string;
    encodeFunctionData(functionFragment: "setContractURI", values: [string]): string;
    encodeFunctionData(functionFragment: "setDefaultRoyaltyInfo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setFlatPlatformFeeInfo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxTotalSupply", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setOperatorRestriction", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "setPlatformFeeInfo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPlatformFeeType", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPrimarySaleRecipient", values: [string]): string;
    encodeFunctionData(functionFragment: "setRoyaltyInfoForToken", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setSaleRecipientForToken", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "subscribeToRegistry", values: [string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "uri", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "verifyClaim", values: [
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        IDrop1155.AllowlistProofStruct
    ]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOfBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimCondition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getActiveClaimConditionId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBaseURICount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBatchIdAtIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimConditionById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDefaultRoyaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getFlatPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPlatformFeeType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoyaltyInfoForToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyClaimedByWallet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRoleWithSwitch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lazyMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextTokenIdToMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorRestriction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "primarySaleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "royaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeBatchTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "saleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimConditions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultRoyaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setFlatPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOperatorRestriction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPlatformFeeType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrimarySaleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoyaltyInfoForToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSaleRecipientForToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "subscribeToRegistry", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "uri", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyClaim", data: BytesLike): Result;
    events: {
        "ApprovalForAll(address,address,bool)": EventFragment;
        "ClaimConditionsUpdated(uint256,tuple[],bool)": EventFragment;
        "ContractURIUpdated(string,string)": EventFragment;
        "DefaultRoyalty(address,uint256)": EventFragment;
        "FlatPlatformFeeUpdated(address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "MaxTotalSupplyUpdated(uint256,uint256)": EventFragment;
        "OperatorRestriction(bool)": EventFragment;
        "OwnerUpdated(address,address)": EventFragment;
        "PlatformFeeInfoUpdated(address,uint256)": EventFragment;
        "PlatformFeeTypeUpdated(uint8)": EventFragment;
        "PrimarySaleRecipientUpdated(address)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
        "RoyaltyForToken(uint256,address,uint256)": EventFragment;
        "SaleRecipientForTokenUpdated(uint256,address)": EventFragment;
        "TokensClaimed(uint256,address,address,uint256,uint256)": EventFragment;
        "TokensLazyMinted(uint256,uint256,string,bytes)": EventFragment;
        "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
        "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
        "URI(string,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ClaimConditionsUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ContractURIUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "DefaultRoyalty"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlatPlatformFeeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MaxTotalSupplyUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OperatorRestriction"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlatformFeeInfoUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlatformFeeTypeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PrimarySaleRecipientUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoyaltyForToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SaleRecipientForTokenUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensLazyMinted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "URI"): EventFragment;
}
export interface ApprovalForAllEventObject {
    account: string;
    operator: string;
    approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<[
    string,
    string,
    boolean
], ApprovalForAllEventObject>;
export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;
export interface ClaimConditionsUpdatedEventObject {
    tokenId: BigNumber;
    claimConditions: IClaimCondition.ClaimConditionStructOutput[];
    resetEligibility: boolean;
}
export type ClaimConditionsUpdatedEvent = TypedEvent<[
    BigNumber,
    IClaimCondition.ClaimConditionStructOutput[],
    boolean
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
export interface DefaultRoyaltyEventObject {
    newRoyaltyRecipient: string;
    newRoyaltyBps: BigNumber;
}
export type DefaultRoyaltyEvent = TypedEvent<[
    string,
    BigNumber
], DefaultRoyaltyEventObject>;
export type DefaultRoyaltyEventFilter = TypedEventFilter<DefaultRoyaltyEvent>;
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
    tokenId: BigNumber;
    maxTotalSupply: BigNumber;
}
export type MaxTotalSupplyUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], MaxTotalSupplyUpdatedEventObject>;
export type MaxTotalSupplyUpdatedEventFilter = TypedEventFilter<MaxTotalSupplyUpdatedEvent>;
export interface OperatorRestrictionEventObject {
    restriction: boolean;
}
export type OperatorRestrictionEvent = TypedEvent<[
    boolean
], OperatorRestrictionEventObject>;
export type OperatorRestrictionEventFilter = TypedEventFilter<OperatorRestrictionEvent>;
export interface OwnerUpdatedEventObject {
    prevOwner: string;
    newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<[
    string,
    string
], OwnerUpdatedEventObject>;
export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;
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
export interface RoyaltyForTokenEventObject {
    tokenId: BigNumber;
    royaltyRecipient: string;
    royaltyBps: BigNumber;
}
export type RoyaltyForTokenEvent = TypedEvent<[
    BigNumber,
    string,
    BigNumber
], RoyaltyForTokenEventObject>;
export type RoyaltyForTokenEventFilter = TypedEventFilter<RoyaltyForTokenEvent>;
export interface SaleRecipientForTokenUpdatedEventObject {
    tokenId: BigNumber;
    saleRecipient: string;
}
export type SaleRecipientForTokenUpdatedEvent = TypedEvent<[
    BigNumber,
    string
], SaleRecipientForTokenUpdatedEventObject>;
export type SaleRecipientForTokenUpdatedEventFilter = TypedEventFilter<SaleRecipientForTokenUpdatedEvent>;
export interface TokensClaimedEventObject {
    claimConditionIndex: BigNumber;
    claimer: string;
    receiver: string;
    tokenId: BigNumber;
    quantityClaimed: BigNumber;
}
export type TokensClaimedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber
], TokensClaimedEventObject>;
export type TokensClaimedEventFilter = TypedEventFilter<TokensClaimedEvent>;
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
export interface TransferBatchEventObject {
    operator: string;
    from: string;
    to: string;
    ids: BigNumber[];
    values: BigNumber[];
}
export type TransferBatchEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber[],
    BigNumber[]
], TransferBatchEventObject>;
export type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;
export interface TransferSingleEventObject {
    operator: string;
    from: string;
    to: string;
    id: BigNumber;
    value: BigNumber;
}
export type TransferSingleEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], TransferSingleEventObject>;
export type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;
export interface URIEventObject {
    value: string;
    id: BigNumber;
}
export type URIEvent = TypedEvent<[string, BigNumber], URIEventObject>;
export type URIEventFilter = TypedEventFilter<URIEvent>;
export interface DropERC1155 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: DropERC1155Interface;
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
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<[BigNumber[]]>;
        burnBatch(account: string, ids: BigNumberish[], values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claim(_receiver: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop1155.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimCondition(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            currentStartId: BigNumber;
            count: BigNumber;
        }>;
        contractType(overrides?: CallOverrides): Promise<[string]>;
        contractURI(overrides?: CallOverrides): Promise<[string]>;
        contractVersion(overrides?: CallOverrides): Promise<[number]>;
        getActiveClaimConditionId(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getBaseURICount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getClaimConditionById(_tokenId: BigNumberish, _conditionId: BigNumberish, overrides?: CallOverrides): Promise<[
            IClaimCondition.ClaimConditionStructOutput
        ] & {
            condition: IClaimCondition.ClaimConditionStructOutput;
        }>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getFlatPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, BigNumber]>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getPlatformFeeType(overrides?: CallOverrides): Promise<[number]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string] & {
            member: string;
        }>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber] & {
            count: BigNumber;
        }>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
        getSupplyClaimedByWallet(_tokenId: BigNumberish, _conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            supplyClaimedByWallet: BigNumber;
        }>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, _platformFeeBps: BigNumberish, _platformFeeRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<[boolean]>;
        lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        maxTotalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<[BigNumber]>;
        operatorRestriction(overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<[string]>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            receiver: string;
            royaltyAmount: BigNumber;
        }>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        saleRecipient(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setClaimConditions(_tokenId: BigNumberish, _conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setFlatPlatformFeeInfo(_platformFeeRecipient: string, _flatFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxTotalSupply(_tokenId: BigNumberish, _maxTotalSupply: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOperatorRestriction(_restriction: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPlatformFeeType(_feeType: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSaleRecipientForToken(_tokenId: BigNumberish, _saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        subscribeToRegistry(_subscription: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        totalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        uri(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop1155.AllowlistProofStruct, overrides?: CallOverrides): Promise<[boolean] & {
            isOverride: boolean;
        }>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
    burnBatch(account: string, ids: BigNumberish[], values: BigNumberish[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claim(_receiver: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop1155.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimCondition(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        BigNumber
    ] & {
        currentStartId: BigNumber;
        count: BigNumber;
    }>;
    contractType(overrides?: CallOverrides): Promise<string>;
    contractURI(overrides?: CallOverrides): Promise<string>;
    contractVersion(overrides?: CallOverrides): Promise<number>;
    getActiveClaimConditionId(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getBaseURICount(overrides?: CallOverrides): Promise<BigNumber>;
    getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getClaimConditionById(_tokenId: BigNumberish, _conditionId: BigNumberish, overrides?: CallOverrides): Promise<IClaimCondition.ClaimConditionStructOutput>;
    getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
    getFlatPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, BigNumber]>;
    getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
    getPlatformFeeType(overrides?: CallOverrides): Promise<number>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
    getSupplyClaimedByWallet(_tokenId: BigNumberish, _conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, _platformFeeBps: BigNumberish, _platformFeeRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
    lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    maxTotalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
    operatorRestriction(overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    primarySaleRecipient(overrides?: CallOverrides): Promise<string>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        BigNumber
    ] & {
        receiver: string;
        royaltyAmount: BigNumber;
    }>;
    safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    saleRecipient(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setClaimConditions(_tokenId: BigNumberish, _conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setContractURI(_uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setFlatPlatformFeeInfo(_platformFeeRecipient: string, _flatFee: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxTotalSupply(_tokenId: BigNumberish, _maxTotalSupply: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOperatorRestriction(_restriction: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setOwner(_newOwner: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPlatformFeeType(_feeType: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSaleRecipientForToken(_tokenId: BigNumberish, _saleRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    subscribeToRegistry(_subscription: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    totalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    uri(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    verifyClaim(_conditionId: BigNumberish, _claimer: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop1155.AllowlistProofStruct, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber[]>;
        burnBatch(account: string, ids: BigNumberish[], values: BigNumberish[], overrides?: CallOverrides): Promise<void>;
        claim(_receiver: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop1155.AllowlistProofStruct, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        claimCondition(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            BigNumber
        ] & {
            currentStartId: BigNumber;
            count: BigNumber;
        }>;
        contractType(overrides?: CallOverrides): Promise<string>;
        contractURI(overrides?: CallOverrides): Promise<string>;
        contractVersion(overrides?: CallOverrides): Promise<number>;
        getActiveClaimConditionId(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getBaseURICount(overrides?: CallOverrides): Promise<BigNumber>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getClaimConditionById(_tokenId: BigNumberish, _conditionId: BigNumberish, overrides?: CallOverrides): Promise<IClaimCondition.ClaimConditionStructOutput>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getFlatPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, BigNumber]>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getPlatformFeeType(overrides?: CallOverrides): Promise<number>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
        getSupplyClaimedByWallet(_tokenId: BigNumberish, _conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, _platformFeeBps: BigNumberish, _platformFeeRecipient: string, overrides?: CallOverrides): Promise<void>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
        lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        maxTotalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        name(overrides?: CallOverrides): Promise<string>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
        operatorRestriction(overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<string>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            receiver: string;
            royaltyAmount: BigNumber;
        }>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: CallOverrides): Promise<void>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        saleRecipient(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        setClaimConditions(_tokenId: BigNumberish, _conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: CallOverrides): Promise<void>;
        setContractURI(_uri: string, overrides?: CallOverrides): Promise<void>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setFlatPlatformFeeInfo(_platformFeeRecipient: string, _flatFee: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxTotalSupply(_tokenId: BigNumberish, _maxTotalSupply: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setOperatorRestriction(_restriction: boolean, overrides?: CallOverrides): Promise<void>;
        setOwner(_newOwner: string, overrides?: CallOverrides): Promise<void>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPlatformFeeType(_feeType: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: CallOverrides): Promise<void>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setSaleRecipientForToken(_tokenId: BigNumberish, _saleRecipient: string, overrides?: CallOverrides): Promise<void>;
        subscribeToRegistry(_subscription: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        totalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        uri(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop1155.AllowlistProofStruct, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "ApprovalForAll(address,address,bool)"(account?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(account?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "ClaimConditionsUpdated(uint256,tuple[],bool)"(tokenId?: BigNumberish | null, claimConditions?: null, resetEligibility?: null): ClaimConditionsUpdatedEventFilter;
        ClaimConditionsUpdated(tokenId?: BigNumberish | null, claimConditions?: null, resetEligibility?: null): ClaimConditionsUpdatedEventFilter;
        "ContractURIUpdated(string,string)"(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        ContractURIUpdated(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        "DefaultRoyalty(address,uint256)"(newRoyaltyRecipient?: string | null, newRoyaltyBps?: null): DefaultRoyaltyEventFilter;
        DefaultRoyalty(newRoyaltyRecipient?: string | null, newRoyaltyBps?: null): DefaultRoyaltyEventFilter;
        "FlatPlatformFeeUpdated(address,uint256)"(platformFeeRecipient?: null, flatFee?: null): FlatPlatformFeeUpdatedEventFilter;
        FlatPlatformFeeUpdated(platformFeeRecipient?: null, flatFee?: null): FlatPlatformFeeUpdatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "MaxTotalSupplyUpdated(uint256,uint256)"(tokenId?: null, maxTotalSupply?: null): MaxTotalSupplyUpdatedEventFilter;
        MaxTotalSupplyUpdated(tokenId?: null, maxTotalSupply?: null): MaxTotalSupplyUpdatedEventFilter;
        "OperatorRestriction(bool)"(restriction?: null): OperatorRestrictionEventFilter;
        OperatorRestriction(restriction?: null): OperatorRestrictionEventFilter;
        "OwnerUpdated(address,address)"(prevOwner?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
        OwnerUpdated(prevOwner?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
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
        "RoyaltyForToken(uint256,address,uint256)"(tokenId?: BigNumberish | null, royaltyRecipient?: string | null, royaltyBps?: null): RoyaltyForTokenEventFilter;
        RoyaltyForToken(tokenId?: BigNumberish | null, royaltyRecipient?: string | null, royaltyBps?: null): RoyaltyForTokenEventFilter;
        "SaleRecipientForTokenUpdated(uint256,address)"(tokenId?: BigNumberish | null, saleRecipient?: null): SaleRecipientForTokenUpdatedEventFilter;
        SaleRecipientForTokenUpdated(tokenId?: BigNumberish | null, saleRecipient?: null): SaleRecipientForTokenUpdatedEventFilter;
        "TokensClaimed(uint256,address,address,uint256,uint256)"(claimConditionIndex?: BigNumberish | null, claimer?: string | null, receiver?: string | null, tokenId?: null, quantityClaimed?: null): TokensClaimedEventFilter;
        TokensClaimed(claimConditionIndex?: BigNumberish | null, claimer?: string | null, receiver?: string | null, tokenId?: null, quantityClaimed?: null): TokensClaimedEventFilter;
        "TokensLazyMinted(uint256,uint256,string,bytes)"(startTokenId?: BigNumberish | null, endTokenId?: null, baseURI?: null, encryptedBaseURI?: null): TokensLazyMintedEventFilter;
        TokensLazyMinted(startTokenId?: BigNumberish | null, endTokenId?: null, baseURI?: null, encryptedBaseURI?: null): TokensLazyMintedEventFilter;
        "TransferBatch(address,address,address,uint256[],uint256[])"(operator?: string | null, from?: string | null, to?: string | null, ids?: null, values?: null): TransferBatchEventFilter;
        TransferBatch(operator?: string | null, from?: string | null, to?: string | null, ids?: null, values?: null): TransferBatchEventFilter;
        "TransferSingle(address,address,address,uint256,uint256)"(operator?: string | null, from?: string | null, to?: string | null, id?: null, value?: null): TransferSingleEventFilter;
        TransferSingle(operator?: string | null, from?: string | null, to?: string | null, id?: null, value?: null): TransferSingleEventFilter;
        "URI(string,uint256)"(value?: null, id?: BigNumberish | null): URIEventFilter;
        URI(value?: null, id?: BigNumberish | null): URIEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;
        burnBatch(account: string, ids: BigNumberish[], values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claim(_receiver: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop1155.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimCondition(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        contractType(overrides?: CallOverrides): Promise<BigNumber>;
        contractURI(overrides?: CallOverrides): Promise<BigNumber>;
        contractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        getActiveClaimConditionId(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getBaseURICount(overrides?: CallOverrides): Promise<BigNumber>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getClaimConditionById(_tokenId: BigNumberish, _conditionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getFlatPlatformFeeInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getPlatformFeeType(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyClaimedByWallet(_tokenId: BigNumberish, _conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, _platformFeeBps: BigNumberish, _platformFeeRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<BigNumber>;
        lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        maxTotalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
        operatorRestriction(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        saleRecipient(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setClaimConditions(_tokenId: BigNumberish, _conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setFlatPlatformFeeInfo(_platformFeeRecipient: string, _flatFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxTotalSupply(_tokenId: BigNumberish, _maxTotalSupply: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOperatorRestriction(_restriction: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPlatformFeeType(_feeType: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSaleRecipientForToken(_tokenId: BigNumberish, _saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        subscribeToRegistry(_subscription: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        uri(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop1155.AllowlistProofStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOf(account: string, id: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        balanceOfBatch(accounts: string[], ids: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burnBatch(account: string, ids: BigNumberish[], values: BigNumberish[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claim(_receiver: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop1155.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimCondition(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getActiveClaimConditionId(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBaseURICount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getClaimConditionById(_tokenId: BigNumberish, _conditionId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getFlatPlatformFeeInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPlatformFeeType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyClaimedByWallet(_tokenId: BigNumberish, _conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        hasRoleWithSwitch(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_defaultAdmin: string, _name: string, _symbol: string, _contractURI: string, _trustedForwarders: string[], _saleRecipient: string, _royaltyRecipient: string, _royaltyBps: BigNumberish, _platformFeeBps: BigNumberish, _platformFeeRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isApprovedForAll(account: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        maxTotalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operatorRestriction(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        safeBatchTransferFrom(from: string, to: string, ids: BigNumberish[], amounts: BigNumberish[], data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        safeTransferFrom(from: string, to: string, id: BigNumberish, amount: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        saleRecipient(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setClaimConditions(_tokenId: BigNumberish, _conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setFlatPlatformFeeInfo(_platformFeeRecipient: string, _flatFee: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxTotalSupply(_tokenId: BigNumberish, _maxTotalSupply: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOperatorRestriction(_restriction: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setOwner(_newOwner: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPlatformFeeType(_feeType: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSaleRecipientForToken(_tokenId: BigNumberish, _saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        subscribeToRegistry(_subscription: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        uri(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _tokenId: BigNumberish, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop1155.AllowlistProofStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=DropERC1155.d.ts.map