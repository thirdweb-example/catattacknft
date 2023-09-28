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
export declare namespace IDrop {
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
export declare namespace IBurnToClaim {
    type BurnToClaimInfoStruct = {
        originContractAddress: string;
        tokenType: BigNumberish;
        tokenId: BigNumberish;
        mintPriceForNewToken: BigNumberish;
        currency: string;
    };
    type BurnToClaimInfoStructOutput = [
        string,
        number,
        BigNumber,
        BigNumber,
        string
    ] & {
        originContractAddress: string;
        tokenType: number;
        tokenId: BigNumber;
        mintPriceForNewToken: BigNumber;
        currency: string;
    };
}
export interface BurnToClaimDrop721LogicInterface extends utils.Interface {
    functions: {
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "burn(uint256)": FunctionFragment;
        "burnAndClaim(uint256,uint256)": FunctionFragment;
        "claim(address,uint256,address,uint256,(bytes32[],uint256,uint256,address),bytes)": FunctionFragment;
        "claimCondition()": FunctionFragment;
        "contractURI()": FunctionFragment;
        "encryptDecrypt(bytes,bytes)": FunctionFragment;
        "encryptedData(uint256)": FunctionFragment;
        "getActiveClaimConditionId()": FunctionFragment;
        "getApproved(uint256)": FunctionFragment;
        "getBaseURICount()": FunctionFragment;
        "getBatchIdAtIndex(uint256)": FunctionFragment;
        "getBurnToClaimInfo()": FunctionFragment;
        "getClaimConditionById(uint256)": FunctionFragment;
        "getDefaultRoyaltyInfo()": FunctionFragment;
        "getPlatformFeeInfo()": FunctionFragment;
        "getRevealURI(uint256,bytes)": FunctionFragment;
        "getRoyaltyInfoForToken(uint256)": FunctionFragment;
        "getSupplyClaimedByWallet(uint256,address)": FunctionFragment;
        "isApprovedForAll(address,address)": FunctionFragment;
        "isEncryptedBatch(uint256)": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "lazyMint(uint256,string,bytes)": FunctionFragment;
        "maxTotalSupply()": FunctionFragment;
        "name()": FunctionFragment;
        "nextTokenIdToClaim()": FunctionFragment;
        "nextTokenIdToMint()": FunctionFragment;
        "operatorRestriction()": FunctionFragment;
        "owner()": FunctionFragment;
        "ownerOf(uint256)": FunctionFragment;
        "primarySaleRecipient()": FunctionFragment;
        "reveal(uint256,bytes)": FunctionFragment;
        "royaltyInfo(uint256,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256)": FunctionFragment;
        "safeTransferFrom(address,address,uint256,bytes)": FunctionFragment;
        "setApprovalForAll(address,bool)": FunctionFragment;
        "setBurnToClaimInfo((address,uint8,uint256,uint256,address))": FunctionFragment;
        "setClaimConditions((uint256,uint256,uint256,uint256,bytes32,uint256,address,string)[],bool)": FunctionFragment;
        "setContractURI(string)": FunctionFragment;
        "setDefaultRoyaltyInfo(address,uint256)": FunctionFragment;
        "setMaxTotalSupply(uint256)": FunctionFragment;
        "setOperatorRestriction(bool)": FunctionFragment;
        "setOwner(address)": FunctionFragment;
        "setPlatformFeeInfo(address,uint256)": FunctionFragment;
        "setPrimarySaleRecipient(address)": FunctionFragment;
        "setRoyaltyInfoForToken(uint256,address,uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "symbol()": FunctionFragment;
        "tokenURI(uint256)": FunctionFragment;
        "totalMinted()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "verifyBurnToClaim(address,uint256,uint256)": FunctionFragment;
        "verifyClaim(uint256,address,uint256,address,uint256,(bytes32[],uint256,uint256,address))": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "approve" | "balanceOf" | "burn" | "burnAndClaim" | "claim" | "claimCondition" | "contractURI" | "encryptDecrypt" | "encryptedData" | "getActiveClaimConditionId" | "getApproved" | "getBaseURICount" | "getBatchIdAtIndex" | "getBurnToClaimInfo" | "getClaimConditionById" | "getDefaultRoyaltyInfo" | "getPlatformFeeInfo" | "getRevealURI" | "getRoyaltyInfoForToken" | "getSupplyClaimedByWallet" | "isApprovedForAll" | "isEncryptedBatch" | "isTrustedForwarder" | "lazyMint" | "maxTotalSupply" | "name" | "nextTokenIdToClaim" | "nextTokenIdToMint" | "operatorRestriction" | "owner" | "ownerOf" | "primarySaleRecipient" | "reveal" | "royaltyInfo" | "safeTransferFrom(address,address,uint256)" | "safeTransferFrom(address,address,uint256,bytes)" | "setApprovalForAll" | "setBurnToClaimInfo" | "setClaimConditions" | "setContractURI" | "setDefaultRoyaltyInfo" | "setMaxTotalSupply" | "setOperatorRestriction" | "setOwner" | "setPlatformFeeInfo" | "setPrimarySaleRecipient" | "setRoyaltyInfoForToken" | "supportsInterface" | "symbol" | "tokenURI" | "totalMinted" | "totalSupply" | "transferFrom" | "verifyBurnToClaim" | "verifyClaim"): FunctionFragment;
    encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "burn", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "burnAndClaim", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "claim", values: [
        string,
        BigNumberish,
        string,
        BigNumberish,
        IDrop.AllowlistProofStruct,
        BytesLike
    ]): string;
    encodeFunctionData(functionFragment: "claimCondition", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "encryptDecrypt", values: [BytesLike, BytesLike]): string;
    encodeFunctionData(functionFragment: "encryptedData", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getActiveClaimConditionId", values?: undefined): string;
    encodeFunctionData(functionFragment: "getApproved", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBaseURICount", values?: undefined): string;
    encodeFunctionData(functionFragment: "getBatchIdAtIndex", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getBurnToClaimInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getClaimConditionById", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getDefaultRoyaltyInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getPlatformFeeInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRevealURI", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoyaltyInfoForToken", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getSupplyClaimedByWallet", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "isApprovedForAll", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isEncryptedBatch", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [string]): string;
    encodeFunctionData(functionFragment: "lazyMint", values: [BigNumberish, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "maxTotalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextTokenIdToClaim", values?: undefined): string;
    encodeFunctionData(functionFragment: "nextTokenIdToMint", values?: undefined): string;
    encodeFunctionData(functionFragment: "operatorRestriction", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "ownerOf", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "primarySaleRecipient", values?: undefined): string;
    encodeFunctionData(functionFragment: "reveal", values: [BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "royaltyInfo", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256)", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "setApprovalForAll", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "setBurnToClaimInfo", values: [IBurnToClaim.BurnToClaimInfoStruct]): string;
    encodeFunctionData(functionFragment: "setClaimConditions", values: [IClaimCondition.ClaimConditionStruct[], boolean]): string;
    encodeFunctionData(functionFragment: "setContractURI", values: [string]): string;
    encodeFunctionData(functionFragment: "setDefaultRoyaltyInfo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setMaxTotalSupply", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "setOperatorRestriction", values: [boolean]): string;
    encodeFunctionData(functionFragment: "setOwner", values: [string]): string;
    encodeFunctionData(functionFragment: "setPlatformFeeInfo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setPrimarySaleRecipient", values: [string]): string;
    encodeFunctionData(functionFragment: "setRoyaltyInfoForToken", values: [BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "tokenURI", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "totalMinted", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "verifyBurnToClaim", values: [string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "verifyClaim", values: [
        BigNumberish,
        string,
        BigNumberish,
        string,
        BigNumberish,
        IDrop.AllowlistProofStruct
    ]): string;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "burnAndClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimCondition", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encryptDecrypt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "encryptedData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getActiveClaimConditionId", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getApproved", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBaseURICount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBatchIdAtIndex", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getBurnToClaimInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getClaimConditionById", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDefaultRoyaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRevealURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoyaltyInfoForToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getSupplyClaimedByWallet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isApprovedForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isEncryptedBatch", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "lazyMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "maxTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextTokenIdToClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "nextTokenIdToMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "operatorRestriction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "ownerOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "primarySaleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "reveal", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "royaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "safeTransferFrom(address,address,uint256,bytes)", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setApprovalForAll", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setBurnToClaimInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setClaimConditions", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setDefaultRoyaltyInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMaxTotalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOperatorRestriction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPrimarySaleRecipient", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRoyaltyInfoForToken", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "tokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalMinted", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyBurnToClaim", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyClaim", data: BytesLike): Result;
    events: {
        "Approval(address,address,uint256)": EventFragment;
        "ApprovalForAll(address,address,bool)": EventFragment;
        "ClaimConditionsUpdated(tuple[],bool)": EventFragment;
        "ContractURIUpdated(string,string)": EventFragment;
        "DefaultRoyalty(address,uint256)": EventFragment;
        "FlatPlatformFeeUpdated(address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "MaxTotalSupplyUpdated(uint256)": EventFragment;
        "OperatorRestriction(bool)": EventFragment;
        "OwnerUpdated(address,address)": EventFragment;
        "PlatformFeeInfoUpdated(address,uint256)": EventFragment;
        "PlatformFeeTypeUpdated(uint8)": EventFragment;
        "PrimarySaleRecipientUpdated(address)": EventFragment;
        "RoyaltyForToken(uint256,address,uint256)": EventFragment;
        "TokenURIRevealed(uint256,string)": EventFragment;
        "TokensBurnedAndClaimed(address,address,uint256,uint256)": EventFragment;
        "TokensClaimed(uint256,address,address,uint256,uint256)": EventFragment;
        "TokensLazyMinted(uint256,uint256,string,bytes)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
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
    getEvent(nameOrSignatureOrTopic: "RoyaltyForToken"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokenURIRevealed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensBurnedAndClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensClaimed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "TokensLazyMinted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}
export interface ApprovalEventObject {
    owner: string;
    approved: string;
    tokenId: BigNumber;
}
export type ApprovalEvent = TypedEvent<[
    string,
    string,
    BigNumber
], ApprovalEventObject>;
export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;
export interface ApprovalForAllEventObject {
    owner: string;
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
    claimConditions: IClaimCondition.ClaimConditionStructOutput[];
    resetEligibility: boolean;
}
export type ClaimConditionsUpdatedEvent = TypedEvent<[
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
    maxTotalSupply: BigNumber;
}
export type MaxTotalSupplyUpdatedEvent = TypedEvent<[
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
export interface TokenURIRevealedEventObject {
    index: BigNumber;
    revealedURI: string;
}
export type TokenURIRevealedEvent = TypedEvent<[
    BigNumber,
    string
], TokenURIRevealedEventObject>;
export type TokenURIRevealedEventFilter = TypedEventFilter<TokenURIRevealedEvent>;
export interface TokensBurnedAndClaimedEventObject {
    originContract: string;
    tokenOwner: string;
    burnTokenId: BigNumber;
    quantity: BigNumber;
}
export type TokensBurnedAndClaimedEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber
], TokensBurnedAndClaimedEventObject>;
export type TokensBurnedAndClaimedEventFilter = TypedEventFilter<TokensBurnedAndClaimedEvent>;
export interface TokensClaimedEventObject {
    claimConditionIndex: BigNumber;
    claimer: string;
    receiver: string;
    startTokenId: BigNumber;
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
export interface TransferEventObject {
    from: string;
    to: string;
    tokenId: BigNumber;
}
export type TransferEvent = TypedEvent<[
    string,
    string,
    BigNumber
], TransferEventObject>;
export type TransferEventFilter = TypedEventFilter<TransferEvent>;
export interface BurnToClaimDrop721Logic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BurnToClaimDrop721LogicInterface;
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
        approve(operator: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        burnAndClaim(_burnTokenId: BigNumberish, _quantity: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        claimCondition(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        contractURI(overrides?: CallOverrides): Promise<[string]>;
        encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            result: string;
        }>;
        encryptedData(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<[BigNumber]>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getBaseURICount(overrides?: CallOverrides): Promise<[BigNumber]>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;
        getBurnToClaimInfo(overrides?: CallOverrides): Promise<[IBurnToClaim.BurnToClaimInfoStructOutput]>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<[
            IClaimCondition.ClaimConditionStructOutput
        ] & {
            condition: IClaimCondition.ClaimConditionStructOutput;
        }>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getRevealURI(_batchId: BigNumberish, _key: BytesLike, overrides?: CallOverrides): Promise<[string] & {
            revealedURI: string;
        }>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
        getSupplyClaimedByWallet(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            supplyClaimedByWallet: BigNumber;
        }>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        isEncryptedBatch(_batchId: BigNumberish, overrides?: CallOverrides): Promise<[boolean]>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<[boolean]>;
        lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        maxTotalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        name(overrides?: CallOverrides): Promise<[string]>;
        nextTokenIdToClaim(overrides?: CallOverrides): Promise<[BigNumber]>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<[BigNumber]>;
        operatorRestriction(overrides?: CallOverrides): Promise<[boolean]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<[string]>;
        reveal(_index: BigNumberish, _key: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            receiver: string;
            royaltyAmount: BigNumber;
        }>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setBurnToClaimInfo(_burnToClaimInfo: IBurnToClaim.BurnToClaimInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setMaxTotalSupply(_maxTotalSupply: BigNumberish, overrides?: Overrides & {
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
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        symbol(overrides?: CallOverrides): Promise<[string]>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        totalMinted(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifyBurnToClaim(_tokenOwner: string, _tokenId: BigNumberish, _quantity: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<[boolean] & {
            isOverride: boolean;
        }>;
    };
    approve(operator: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
    burn(tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    burnAndClaim(_burnTokenId: BigNumberish, _quantity: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    claimCondition(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
    contractURI(overrides?: CallOverrides): Promise<string>;
    encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<string>;
    encryptedData(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getActiveClaimConditionId(overrides?: CallOverrides): Promise<BigNumber>;
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getBaseURICount(overrides?: CallOverrides): Promise<BigNumber>;
    getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    getBurnToClaimInfo(overrides?: CallOverrides): Promise<IBurnToClaim.BurnToClaimInfoStructOutput>;
    getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<IClaimCondition.ClaimConditionStructOutput>;
    getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
    getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
    getRevealURI(_batchId: BigNumberish, _key: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
    getSupplyClaimedByWallet(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    isEncryptedBatch(_batchId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
    lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    maxTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    name(overrides?: CallOverrides): Promise<string>;
    nextTokenIdToClaim(overrides?: CallOverrides): Promise<BigNumber>;
    nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
    operatorRestriction(overrides?: CallOverrides): Promise<boolean>;
    owner(overrides?: CallOverrides): Promise<string>;
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    primarySaleRecipient(overrides?: CallOverrides): Promise<string>;
    reveal(_index: BigNumberish, _key: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
        string,
        BigNumber
    ] & {
        receiver: string;
        royaltyAmount: BigNumber;
    }>;
    "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setBurnToClaimInfo(_burnToClaimInfo: IBurnToClaim.BurnToClaimInfoStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setContractURI(_uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setMaxTotalSupply(_maxTotalSupply: BigNumberish, overrides?: Overrides & {
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
    setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    symbol(overrides?: CallOverrides): Promise<string>;
    tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
    totalMinted(overrides?: CallOverrides): Promise<BigNumber>;
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
    transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifyBurnToClaim(_tokenOwner: string, _tokenId: BigNumberish, _quantity: BigNumberish, overrides?: CallOverrides): Promise<void>;
    verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        approve(operator: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        burnAndClaim(_burnTokenId: BigNumberish, _quantity: BigNumberish, overrides?: CallOverrides): Promise<void>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: CallOverrides): Promise<void>;
        claimCondition(overrides?: CallOverrides): Promise<[BigNumber, BigNumber]>;
        contractURI(overrides?: CallOverrides): Promise<string>;
        encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<string>;
        encryptedData(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getBaseURICount(overrides?: CallOverrides): Promise<BigNumber>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getBurnToClaimInfo(overrides?: CallOverrides): Promise<IBurnToClaim.BurnToClaimInfoStructOutput>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<IClaimCondition.ClaimConditionStructOutput>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getRevealURI(_batchId: BigNumberish, _key: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<[string, number]>;
        getSupplyClaimedByWallet(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        isEncryptedBatch(_batchId: BigNumberish, overrides?: CallOverrides): Promise<boolean>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
        lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        maxTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<string>;
        nextTokenIdToClaim(overrides?: CallOverrides): Promise<BigNumber>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
        operatorRestriction(overrides?: CallOverrides): Promise<boolean>;
        owner(overrides?: CallOverrides): Promise<string>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<string>;
        reveal(_index: BigNumberish, _key: BytesLike, overrides?: CallOverrides): Promise<string>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<[
            string,
            BigNumber
        ] & {
            receiver: string;
            royaltyAmount: BigNumber;
        }>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: CallOverrides): Promise<void>;
        setBurnToClaimInfo(_burnToClaimInfo: IBurnToClaim.BurnToClaimInfoStruct, overrides?: CallOverrides): Promise<void>;
        setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: CallOverrides): Promise<void>;
        setContractURI(_uri: string, overrides?: CallOverrides): Promise<void>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setMaxTotalSupply(_maxTotalSupply: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setOperatorRestriction(_restriction: boolean, overrides?: CallOverrides): Promise<void>;
        setOwner(_newOwner: string, overrides?: CallOverrides): Promise<void>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: CallOverrides): Promise<void>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        symbol(overrides?: CallOverrides): Promise<string>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;
        totalMinted(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        verifyBurnToClaim(_tokenOwner: string, _tokenId: BigNumberish, _quantity: BigNumberish, overrides?: CallOverrides): Promise<void>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "Approval(address,address,uint256)"(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        Approval(owner?: string | null, approved?: string | null, tokenId?: BigNumberish | null): ApprovalEventFilter;
        "ApprovalForAll(address,address,bool)"(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        ApprovalForAll(owner?: string | null, operator?: string | null, approved?: null): ApprovalForAllEventFilter;
        "ClaimConditionsUpdated(tuple[],bool)"(claimConditions?: null, resetEligibility?: null): ClaimConditionsUpdatedEventFilter;
        ClaimConditionsUpdated(claimConditions?: null, resetEligibility?: null): ClaimConditionsUpdatedEventFilter;
        "ContractURIUpdated(string,string)"(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        ContractURIUpdated(prevURI?: null, newURI?: null): ContractURIUpdatedEventFilter;
        "DefaultRoyalty(address,uint256)"(newRoyaltyRecipient?: string | null, newRoyaltyBps?: null): DefaultRoyaltyEventFilter;
        DefaultRoyalty(newRoyaltyRecipient?: string | null, newRoyaltyBps?: null): DefaultRoyaltyEventFilter;
        "FlatPlatformFeeUpdated(address,uint256)"(platformFeeRecipient?: null, flatFee?: null): FlatPlatformFeeUpdatedEventFilter;
        FlatPlatformFeeUpdated(platformFeeRecipient?: null, flatFee?: null): FlatPlatformFeeUpdatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "MaxTotalSupplyUpdated(uint256)"(maxTotalSupply?: null): MaxTotalSupplyUpdatedEventFilter;
        MaxTotalSupplyUpdated(maxTotalSupply?: null): MaxTotalSupplyUpdatedEventFilter;
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
        "RoyaltyForToken(uint256,address,uint256)"(tokenId?: BigNumberish | null, royaltyRecipient?: string | null, royaltyBps?: null): RoyaltyForTokenEventFilter;
        RoyaltyForToken(tokenId?: BigNumberish | null, royaltyRecipient?: string | null, royaltyBps?: null): RoyaltyForTokenEventFilter;
        "TokenURIRevealed(uint256,string)"(index?: BigNumberish | null, revealedURI?: null): TokenURIRevealedEventFilter;
        TokenURIRevealed(index?: BigNumberish | null, revealedURI?: null): TokenURIRevealedEventFilter;
        "TokensBurnedAndClaimed(address,address,uint256,uint256)"(originContract?: string | null, tokenOwner?: string | null, burnTokenId?: BigNumberish | null, quantity?: null): TokensBurnedAndClaimedEventFilter;
        TokensBurnedAndClaimed(originContract?: string | null, tokenOwner?: string | null, burnTokenId?: BigNumberish | null, quantity?: null): TokensBurnedAndClaimedEventFilter;
        "TokensClaimed(uint256,address,address,uint256,uint256)"(claimConditionIndex?: BigNumberish | null, claimer?: string | null, receiver?: string | null, startTokenId?: null, quantityClaimed?: null): TokensClaimedEventFilter;
        TokensClaimed(claimConditionIndex?: BigNumberish | null, claimer?: string | null, receiver?: string | null, startTokenId?: null, quantityClaimed?: null): TokensClaimedEventFilter;
        "TokensLazyMinted(uint256,uint256,string,bytes)"(startTokenId?: BigNumberish | null, endTokenId?: null, baseURI?: null, encryptedBaseURI?: null): TokensLazyMintedEventFilter;
        TokensLazyMinted(startTokenId?: BigNumberish | null, endTokenId?: null, baseURI?: null, encryptedBaseURI?: null): TokensLazyMintedEventFilter;
        "Transfer(address,address,uint256)"(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
        Transfer(from?: string | null, to?: string | null, tokenId?: BigNumberish | null): TransferEventFilter;
    };
    estimateGas: {
        approve(operator: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        burnAndClaim(_burnTokenId: BigNumberish, _quantity: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        claimCondition(overrides?: CallOverrides): Promise<BigNumber>;
        contractURI(overrides?: CallOverrides): Promise<BigNumber>;
        encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        encryptedData(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<BigNumber>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getBaseURICount(overrides?: CallOverrides): Promise<BigNumber>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getBurnToClaimInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getRevealURI(_batchId: BigNumberish, _key: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getSupplyClaimedByWallet(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<BigNumber>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        isEncryptedBatch(_batchId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<BigNumber>;
        lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        maxTotalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        nextTokenIdToClaim(overrides?: CallOverrides): Promise<BigNumber>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<BigNumber>;
        operatorRestriction(overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<BigNumber>;
        reveal(_index: BigNumberish, _key: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setBurnToClaimInfo(_burnToClaimInfo: IBurnToClaim.BurnToClaimInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setMaxTotalSupply(_maxTotalSupply: BigNumberish, overrides?: Overrides & {
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
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        symbol(overrides?: CallOverrides): Promise<BigNumber>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        totalMinted(overrides?: CallOverrides): Promise<BigNumber>;
        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifyBurnToClaim(_tokenOwner: string, _tokenId: BigNumberish, _quantity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        approve(operator: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        burn(tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        burnAndClaim(_burnTokenId: BigNumberish, _quantity: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claim(_receiver: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, _data: BytesLike, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        claimCondition(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encryptDecrypt(data: BytesLike, key: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        encryptedData(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getActiveClaimConditionId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBaseURICount(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBatchIdAtIndex(_index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getBurnToClaimInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getClaimConditionById(_conditionId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDefaultRoyaltyInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRevealURI(_batchId: BigNumberish, _key: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoyaltyInfoForToken(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getSupplyClaimedByWallet(_conditionId: BigNumberish, _claimer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isEncryptedBatch(_batchId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        lazyMint(_amount: BigNumberish, _baseURIForTokens: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        maxTotalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextTokenIdToClaim(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        nextTokenIdToMint(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        operatorRestriction(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        primarySaleRecipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        reveal(_index: BigNumberish, _key: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        royaltyInfo(tokenId: BigNumberish, salePrice: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256)"(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        "safeTransferFrom(address,address,uint256,bytes)"(from: string, to: string, tokenId: BigNumberish, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setApprovalForAll(operator: string, approved: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setBurnToClaimInfo(_burnToClaimInfo: IBurnToClaim.BurnToClaimInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setClaimConditions(_conditions: IClaimCondition.ClaimConditionStruct[], _resetClaimEligibility: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setDefaultRoyaltyInfo(_royaltyRecipient: string, _royaltyBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setMaxTotalSupply(_maxTotalSupply: BigNumberish, overrides?: Overrides & {
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
        setPrimarySaleRecipient(_saleRecipient: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setRoyaltyInfoForToken(_tokenId: BigNumberish, _recipient: string, _bps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        tokenURI(_tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalMinted(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        transferFrom(from: string, to: string, tokenId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifyBurnToClaim(_tokenOwner: string, _tokenId: BigNumberish, _quantity: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        verifyClaim(_conditionId: BigNumberish, _claimer: string, _quantity: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _allowlistProof: IDrop.AllowlistProofStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=BurnToClaimDrop721Logic.d.ts.map