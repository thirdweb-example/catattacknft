import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IMarketplace {
    type ListingStruct = {
        listingId: BigNumberish;
        tokenOwner: string;
        assetContract: string;
        tokenId: BigNumberish;
        startTime: BigNumberish;
        endTime: BigNumberish;
        quantity: BigNumberish;
        currency: string;
        reservePricePerToken: BigNumberish;
        buyoutPricePerToken: BigNumberish;
        tokenType: BigNumberish;
        listingType: BigNumberish;
    };
    type ListingStructOutput = [
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        listingId: BigNumber;
        tokenOwner: string;
        assetContract: string;
        tokenId: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        quantity: BigNumber;
        currency: string;
        reservePricePerToken: BigNumber;
        buyoutPricePerToken: BigNumber;
        tokenType: number;
        listingType: number;
    };
    type ListingParametersStruct = {
        assetContract: string;
        tokenId: BigNumberish;
        startTime: BigNumberish;
        secondsUntilEndTime: BigNumberish;
        quantityToList: BigNumberish;
        currencyToAccept: string;
        reservePricePerToken: BigNumberish;
        buyoutPricePerToken: BigNumberish;
        listingType: BigNumberish;
    };
    type ListingParametersStructOutput = [
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        number
    ] & {
        assetContract: string;
        tokenId: BigNumber;
        startTime: BigNumber;
        secondsUntilEndTime: BigNumber;
        quantityToList: BigNumber;
        currencyToAccept: string;
        reservePricePerToken: BigNumber;
        buyoutPricePerToken: BigNumber;
        listingType: number;
    };
}
export interface MarketplaceInterface extends utils.Interface {
    functions: {
        "DEFAULT_ADMIN_ROLE()": FunctionFragment;
        "MAX_BPS()": FunctionFragment;
        "acceptOffer(uint256,address,address,uint256)": FunctionFragment;
        "bidBufferBps()": FunctionFragment;
        "buy(uint256,address,uint256,address,uint256)": FunctionFragment;
        "cancelDirectListing(uint256)": FunctionFragment;
        "closeAuction(uint256,address)": FunctionFragment;
        "contractType()": FunctionFragment;
        "contractURI()": FunctionFragment;
        "contractVersion()": FunctionFragment;
        "createListing((address,uint256,uint256,uint256,uint256,address,uint256,uint256,uint8))": FunctionFragment;
        "getPlatformFeeInfo()": FunctionFragment;
        "getRoleAdmin(bytes32)": FunctionFragment;
        "getRoleMember(bytes32,uint256)": FunctionFragment;
        "getRoleMemberCount(bytes32)": FunctionFragment;
        "grantRole(bytes32,address)": FunctionFragment;
        "hasRole(bytes32,address)": FunctionFragment;
        "initialize(address,string,address[],address,uint256)": FunctionFragment;
        "isTrustedForwarder(address)": FunctionFragment;
        "listings(uint256)": FunctionFragment;
        "multicall(bytes[])": FunctionFragment;
        "offer(uint256,uint256,address,uint256,uint256)": FunctionFragment;
        "offers(uint256,address)": FunctionFragment;
        "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
        "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
        "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
        "renounceRole(bytes32,address)": FunctionFragment;
        "revokeRole(bytes32,address)": FunctionFragment;
        "setAuctionBuffers(uint256,uint256)": FunctionFragment;
        "setContractURI(string)": FunctionFragment;
        "setPlatformFeeInfo(address,uint256)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
        "timeBuffer()": FunctionFragment;
        "totalListings()": FunctionFragment;
        "updateListing(uint256,uint256,uint256,uint256,address,uint256,uint256)": FunctionFragment;
        "winningBid(uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "DEFAULT_ADMIN_ROLE" | "MAX_BPS" | "acceptOffer" | "bidBufferBps" | "buy" | "cancelDirectListing" | "closeAuction" | "contractType" | "contractURI" | "contractVersion" | "createListing" | "getPlatformFeeInfo" | "getRoleAdmin" | "getRoleMember" | "getRoleMemberCount" | "grantRole" | "hasRole" | "initialize" | "isTrustedForwarder" | "listings" | "multicall" | "offer" | "offers" | "onERC1155BatchReceived" | "onERC1155Received" | "onERC721Received" | "renounceRole" | "revokeRole" | "setAuctionBuffers" | "setContractURI" | "setPlatformFeeInfo" | "supportsInterface" | "timeBuffer" | "totalListings" | "updateListing" | "winningBid"): FunctionFragment;
    encodeFunctionData(functionFragment: "DEFAULT_ADMIN_ROLE", values?: undefined): string;
    encodeFunctionData(functionFragment: "MAX_BPS", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptOffer", values: [BigNumberish, string, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "bidBufferBps", values?: undefined): string;
    encodeFunctionData(functionFragment: "buy", values: [BigNumberish, string, BigNumberish, string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "cancelDirectListing", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "closeAuction", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "contractType", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractURI", values?: undefined): string;
    encodeFunctionData(functionFragment: "contractVersion", values?: undefined): string;
    encodeFunctionData(functionFragment: "createListing", values: [IMarketplace.ListingParametersStruct]): string;
    encodeFunctionData(functionFragment: "getPlatformFeeInfo", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRoleAdmin", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getRoleMember", values: [BytesLike, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getRoleMemberCount", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "grantRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "hasRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "initialize", values: [string, string, string[], string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "isTrustedForwarder", values: [string]): string;
    encodeFunctionData(functionFragment: "listings", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "multicall", values: [BytesLike[]]): string;
    encodeFunctionData(functionFragment: "offer", values: [BigNumberish, BigNumberish, string, BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "offers", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "onERC1155BatchReceived", values: [string, string, BigNumberish[], BigNumberish[], BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC1155Received", values: [string, string, BigNumberish, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "onERC721Received", values: [string, string, BigNumberish, BytesLike]): string;
    encodeFunctionData(functionFragment: "renounceRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "revokeRole", values: [BytesLike, string]): string;
    encodeFunctionData(functionFragment: "setAuctionBuffers", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "setContractURI", values: [string]): string;
    encodeFunctionData(functionFragment: "setPlatformFeeInfo", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "timeBuffer", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalListings", values?: undefined): string;
    encodeFunctionData(functionFragment: "updateListing", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        string,
        BigNumberish,
        BigNumberish
    ]): string;
    encodeFunctionData(functionFragment: "winningBid", values: [BigNumberish]): string;
    decodeFunctionResult(functionFragment: "DEFAULT_ADMIN_ROLE", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "MAX_BPS", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "bidBufferBps", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelDirectListing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "closeAuction", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractType", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "contractVersion", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createListing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMember", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRoleMemberCount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isTrustedForwarder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "listings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "offer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "offers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155BatchReceived", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC1155Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onERC721Received", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setAuctionBuffers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setContractURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setPlatformFeeInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "timeBuffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalListings", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateListing", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "winningBid", data: BytesLike): Result;
    events: {
        "AuctionBuffersUpdated(uint256,uint256)": EventFragment;
        "AuctionClosed(uint256,address,bool,address,address)": EventFragment;
        "FlatPlatformFeeUpdated(address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "ListingAdded(uint256,address,address,tuple)": EventFragment;
        "ListingRemoved(uint256,address)": EventFragment;
        "ListingUpdated(uint256,address)": EventFragment;
        "NewOffer(uint256,address,uint8,uint256,uint256,address)": EventFragment;
        "NewSale(uint256,address,address,address,uint256,uint256)": EventFragment;
        "PlatformFeeInfoUpdated(address,uint256)": EventFragment;
        "PlatformFeeTypeUpdated(uint8)": EventFragment;
        "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
        "RoleGranted(bytes32,address,address)": EventFragment;
        "RoleRevoked(bytes32,address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AuctionBuffersUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "AuctionClosed"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FlatPlatformFeeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ListingAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ListingRemoved"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "ListingUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewOffer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewSale"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlatformFeeInfoUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "PlatformFeeTypeUpdated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
}
export interface AuctionBuffersUpdatedEventObject {
    timeBuffer: BigNumber;
    bidBufferBps: BigNumber;
}
export type AuctionBuffersUpdatedEvent = TypedEvent<[
    BigNumber,
    BigNumber
], AuctionBuffersUpdatedEventObject>;
export type AuctionBuffersUpdatedEventFilter = TypedEventFilter<AuctionBuffersUpdatedEvent>;
export interface AuctionClosedEventObject {
    listingId: BigNumber;
    closer: string;
    cancelled: boolean;
    auctionCreator: string;
    winningBidder: string;
}
export type AuctionClosedEvent = TypedEvent<[
    BigNumber,
    string,
    boolean,
    string,
    string
], AuctionClosedEventObject>;
export type AuctionClosedEventFilter = TypedEventFilter<AuctionClosedEvent>;
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
export interface ListingAddedEventObject {
    listingId: BigNumber;
    assetContract: string;
    lister: string;
    listing: IMarketplace.ListingStructOutput;
}
export type ListingAddedEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    IMarketplace.ListingStructOutput
], ListingAddedEventObject>;
export type ListingAddedEventFilter = TypedEventFilter<ListingAddedEvent>;
export interface ListingRemovedEventObject {
    listingId: BigNumber;
    listingCreator: string;
}
export type ListingRemovedEvent = TypedEvent<[
    BigNumber,
    string
], ListingRemovedEventObject>;
export type ListingRemovedEventFilter = TypedEventFilter<ListingRemovedEvent>;
export interface ListingUpdatedEventObject {
    listingId: BigNumber;
    listingCreator: string;
}
export type ListingUpdatedEvent = TypedEvent<[
    BigNumber,
    string
], ListingUpdatedEventObject>;
export type ListingUpdatedEventFilter = TypedEventFilter<ListingUpdatedEvent>;
export interface NewOfferEventObject {
    listingId: BigNumber;
    offeror: string;
    listingType: number;
    quantityWanted: BigNumber;
    totalOfferAmount: BigNumber;
    currency: string;
}
export type NewOfferEvent = TypedEvent<[
    BigNumber,
    string,
    number,
    BigNumber,
    BigNumber,
    string
], NewOfferEventObject>;
export type NewOfferEventFilter = TypedEventFilter<NewOfferEvent>;
export interface NewSaleEventObject {
    listingId: BigNumber;
    assetContract: string;
    lister: string;
    buyer: string;
    quantityBought: BigNumber;
    totalPricePaid: BigNumber;
}
export type NewSaleEvent = TypedEvent<[
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber
], NewSaleEventObject>;
export type NewSaleEventFilter = TypedEventFilter<NewSaleEvent>;
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
export interface Marketplace extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: MarketplaceInterface;
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
        MAX_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;
        acceptOffer(_listingId: BigNumberish, _offeror: string, _currency: string, _pricePerToken: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        bidBufferBps(overrides?: CallOverrides): Promise<[BigNumber]>;
        buy(_listingId: BigNumberish, _buyFor: string, _quantityToBuy: BigNumberish, _currency: string, _totalPrice: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelDirectListing(_listingId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        closeAuction(_listingId: BigNumberish, _closeFor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        contractType(overrides?: CallOverrides): Promise<[string]>;
        contractURI(overrides?: CallOverrides): Promise<[string]>;
        contractVersion(overrides?: CallOverrides): Promise<[number]>;
        createListing(_params: IMarketplace.ListingParametersStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<[boolean]>;
        initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<[boolean]>;
        listings(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            BigNumber,
            BigNumber,
            number,
            number
        ] & {
            listingId: BigNumber;
            tokenOwner: string;
            assetContract: string;
            tokenId: BigNumber;
            startTime: BigNumber;
            endTime: BigNumber;
            quantity: BigNumber;
            currency: string;
            reservePricePerToken: BigNumber;
            buyoutPricePerToken: BigNumber;
            tokenType: number;
            listingType: number;
        }>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        offer(_listingId: BigNumberish, _quantityWanted: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _expirationTimestamp: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        offers(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber,
            string,
            BigNumber,
            BigNumber
        ] & {
            listingId: BigNumber;
            offeror: string;
            quantityWanted: BigNumber;
            currency: string;
            pricePerToken: BigNumber;
            expirationTimestamp: BigNumber;
        }>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setAuctionBuffers(_timeBuffer: BigNumberish, _bidBufferBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
        timeBuffer(overrides?: CallOverrides): Promise<[BigNumber]>;
        totalListings(overrides?: CallOverrides): Promise<[BigNumber]>;
        updateListing(_listingId: BigNumberish, _quantityToList: BigNumberish, _reservePricePerToken: BigNumberish, _buyoutPricePerToken: BigNumberish, _currencyToAccept: string, _startTime: BigNumberish, _secondsUntilEndTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        winningBid(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber,
            string,
            BigNumber,
            BigNumber
        ] & {
            listingId: BigNumber;
            offeror: string;
            quantityWanted: BigNumber;
            currency: string;
            pricePerToken: BigNumber;
            expirationTimestamp: BigNumber;
        }>;
    };
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
    acceptOffer(_listingId: BigNumberish, _offeror: string, _currency: string, _pricePerToken: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    bidBufferBps(overrides?: CallOverrides): Promise<BigNumber>;
    buy(_listingId: BigNumberish, _buyFor: string, _quantityToBuy: BigNumberish, _currency: string, _totalPrice: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelDirectListing(_listingId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    closeAuction(_listingId: BigNumberish, _closeFor: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    contractType(overrides?: CallOverrides): Promise<string>;
    contractURI(overrides?: CallOverrides): Promise<string>;
    contractVersion(overrides?: CallOverrides): Promise<number>;
    createListing(_params: IMarketplace.ListingParametersStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
    getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
    getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    grantRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
    initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
    listings(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        listingId: BigNumber;
        tokenOwner: string;
        assetContract: string;
        tokenId: BigNumber;
        startTime: BigNumber;
        endTime: BigNumber;
        quantity: BigNumber;
        currency: string;
        reservePricePerToken: BigNumber;
        buyoutPricePerToken: BigNumber;
        tokenType: number;
        listingType: number;
    }>;
    multicall(data: BytesLike[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    offer(_listingId: BigNumberish, _quantityWanted: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _expirationTimestamp: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    offers(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber
    ] & {
        listingId: BigNumber;
        offeror: string;
        quantityWanted: BigNumber;
        currency: string;
        pricePerToken: BigNumber;
        expirationTimestamp: BigNumber;
    }>;
    onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
    renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setAuctionBuffers(_timeBuffer: BigNumberish, _bidBufferBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setContractURI(_uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    timeBuffer(overrides?: CallOverrides): Promise<BigNumber>;
    totalListings(overrides?: CallOverrides): Promise<BigNumber>;
    updateListing(_listingId: BigNumberish, _quantityToList: BigNumberish, _reservePricePerToken: BigNumberish, _buyoutPricePerToken: BigNumberish, _currencyToAccept: string, _startTime: BigNumberish, _secondsUntilEndTime: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    winningBid(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
        BigNumber,
        string,
        BigNumber,
        string,
        BigNumber,
        BigNumber
    ] & {
        listingId: BigNumber;
        offeror: string;
        quantityWanted: BigNumber;
        currency: string;
        pricePerToken: BigNumber;
        expirationTimestamp: BigNumber;
    }>;
    callStatic: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;
        MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        acceptOffer(_listingId: BigNumberish, _offeror: string, _currency: string, _pricePerToken: BigNumberish, overrides?: CallOverrides): Promise<void>;
        bidBufferBps(overrides?: CallOverrides): Promise<BigNumber>;
        buy(_listingId: BigNumberish, _buyFor: string, _quantityToBuy: BigNumberish, _currency: string, _totalPrice: BigNumberish, overrides?: CallOverrides): Promise<void>;
        cancelDirectListing(_listingId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        closeAuction(_listingId: BigNumberish, _closeFor: string, overrides?: CallOverrides): Promise<void>;
        contractType(overrides?: CallOverrides): Promise<string>;
        contractURI(overrides?: CallOverrides): Promise<string>;
        contractVersion(overrides?: CallOverrides): Promise<number>;
        createListing(_params: IMarketplace.ListingParametersStruct, overrides?: CallOverrides): Promise<void>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<boolean>;
        initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<boolean>;
        listings(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            string,
            BigNumber,
            BigNumber,
            BigNumber,
            BigNumber,
            string,
            BigNumber,
            BigNumber,
            number,
            number
        ] & {
            listingId: BigNumber;
            tokenOwner: string;
            assetContract: string;
            tokenId: BigNumber;
            startTime: BigNumber;
            endTime: BigNumber;
            quantity: BigNumber;
            currency: string;
            reservePricePerToken: BigNumber;
            buyoutPricePerToken: BigNumber;
            tokenType: number;
            listingType: number;
        }>;
        multicall(data: BytesLike[], overrides?: CallOverrides): Promise<string[]>;
        offer(_listingId: BigNumberish, _quantityWanted: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _expirationTimestamp: BigNumberish, overrides?: CallOverrides): Promise<void>;
        offers(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber,
            string,
            BigNumber,
            BigNumber
        ] & {
            listingId: BigNumber;
            offeror: string;
            quantityWanted: BigNumber;
            currency: string;
            pricePerToken: BigNumber;
            expirationTimestamp: BigNumber;
        }>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: CallOverrides): Promise<string>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<string>;
        renounceRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        revokeRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<void>;
        setAuctionBuffers(_timeBuffer: BigNumberish, _bidBufferBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        setContractURI(_uri: string, overrides?: CallOverrides): Promise<void>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        timeBuffer(overrides?: CallOverrides): Promise<BigNumber>;
        totalListings(overrides?: CallOverrides): Promise<BigNumber>;
        updateListing(_listingId: BigNumberish, _quantityToList: BigNumberish, _reservePricePerToken: BigNumberish, _buyoutPricePerToken: BigNumberish, _currencyToAccept: string, _startTime: BigNumberish, _secondsUntilEndTime: BigNumberish, overrides?: CallOverrides): Promise<void>;
        winningBid(arg0: BigNumberish, overrides?: CallOverrides): Promise<[
            BigNumber,
            string,
            BigNumber,
            string,
            BigNumber,
            BigNumber
        ] & {
            listingId: BigNumber;
            offeror: string;
            quantityWanted: BigNumber;
            currency: string;
            pricePerToken: BigNumber;
            expirationTimestamp: BigNumber;
        }>;
    };
    filters: {
        "AuctionBuffersUpdated(uint256,uint256)"(timeBuffer?: null, bidBufferBps?: null): AuctionBuffersUpdatedEventFilter;
        AuctionBuffersUpdated(timeBuffer?: null, bidBufferBps?: null): AuctionBuffersUpdatedEventFilter;
        "AuctionClosed(uint256,address,bool,address,address)"(listingId?: BigNumberish | null, closer?: string | null, cancelled?: boolean | null, auctionCreator?: null, winningBidder?: null): AuctionClosedEventFilter;
        AuctionClosed(listingId?: BigNumberish | null, closer?: string | null, cancelled?: boolean | null, auctionCreator?: null, winningBidder?: null): AuctionClosedEventFilter;
        "FlatPlatformFeeUpdated(address,uint256)"(platformFeeRecipient?: null, flatFee?: null): FlatPlatformFeeUpdatedEventFilter;
        FlatPlatformFeeUpdated(platformFeeRecipient?: null, flatFee?: null): FlatPlatformFeeUpdatedEventFilter;
        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;
        "ListingAdded(uint256,address,address,tuple)"(listingId?: BigNumberish | null, assetContract?: string | null, lister?: string | null, listing?: null): ListingAddedEventFilter;
        ListingAdded(listingId?: BigNumberish | null, assetContract?: string | null, lister?: string | null, listing?: null): ListingAddedEventFilter;
        "ListingRemoved(uint256,address)"(listingId?: BigNumberish | null, listingCreator?: string | null): ListingRemovedEventFilter;
        ListingRemoved(listingId?: BigNumberish | null, listingCreator?: string | null): ListingRemovedEventFilter;
        "ListingUpdated(uint256,address)"(listingId?: BigNumberish | null, listingCreator?: string | null): ListingUpdatedEventFilter;
        ListingUpdated(listingId?: BigNumberish | null, listingCreator?: string | null): ListingUpdatedEventFilter;
        "NewOffer(uint256,address,uint8,uint256,uint256,address)"(listingId?: BigNumberish | null, offeror?: string | null, listingType?: BigNumberish | null, quantityWanted?: null, totalOfferAmount?: null, currency?: null): NewOfferEventFilter;
        NewOffer(listingId?: BigNumberish | null, offeror?: string | null, listingType?: BigNumberish | null, quantityWanted?: null, totalOfferAmount?: null, currency?: null): NewOfferEventFilter;
        "NewSale(uint256,address,address,address,uint256,uint256)"(listingId?: BigNumberish | null, assetContract?: string | null, lister?: string | null, buyer?: null, quantityBought?: null, totalPricePaid?: null): NewSaleEventFilter;
        NewSale(listingId?: BigNumberish | null, assetContract?: string | null, lister?: string | null, buyer?: null, quantityBought?: null, totalPricePaid?: null): NewSaleEventFilter;
        "PlatformFeeInfoUpdated(address,uint256)"(platformFeeRecipient?: string | null, platformFeeBps?: null): PlatformFeeInfoUpdatedEventFilter;
        PlatformFeeInfoUpdated(platformFeeRecipient?: string | null, platformFeeBps?: null): PlatformFeeInfoUpdatedEventFilter;
        "PlatformFeeTypeUpdated(uint8)"(feeType?: null): PlatformFeeTypeUpdatedEventFilter;
        PlatformFeeTypeUpdated(feeType?: null): PlatformFeeTypeUpdatedEventFilter;
        "RoleAdminChanged(bytes32,bytes32,bytes32)"(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        RoleAdminChanged(role?: BytesLike | null, previousAdminRole?: BytesLike | null, newAdminRole?: BytesLike | null): RoleAdminChangedEventFilter;
        "RoleGranted(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        RoleGranted(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleGrantedEventFilter;
        "RoleRevoked(bytes32,address,address)"(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
        RoleRevoked(role?: BytesLike | null, account?: string | null, sender?: string | null): RoleRevokedEventFilter;
    };
    estimateGas: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;
        MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;
        acceptOffer(_listingId: BigNumberish, _offeror: string, _currency: string, _pricePerToken: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        bidBufferBps(overrides?: CallOverrides): Promise<BigNumber>;
        buy(_listingId: BigNumberish, _buyFor: string, _quantityToBuy: BigNumberish, _currency: string, _totalPrice: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelDirectListing(_listingId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        closeAuction(_listingId: BigNumberish, _closeFor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        contractType(overrides?: CallOverrides): Promise<BigNumber>;
        contractURI(overrides?: CallOverrides): Promise<BigNumber>;
        contractVersion(overrides?: CallOverrides): Promise<BigNumber>;
        createListing(_params: IMarketplace.ListingParametersStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<BigNumber>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<BigNumber>;
        initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<BigNumber>;
        listings(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        offer(_listingId: BigNumberish, _quantityWanted: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _expirationTimestamp: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        offers(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setAuctionBuffers(_timeBuffer: BigNumberish, _bidBufferBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        timeBuffer(overrides?: CallOverrides): Promise<BigNumber>;
        totalListings(overrides?: CallOverrides): Promise<BigNumber>;
        updateListing(_listingId: BigNumberish, _quantityToList: BigNumberish, _reservePricePerToken: BigNumberish, _buyoutPricePerToken: BigNumberish, _currencyToAccept: string, _startTime: BigNumberish, _secondsUntilEndTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        winningBid(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        MAX_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptOffer(_listingId: BigNumberish, _offeror: string, _currency: string, _pricePerToken: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        bidBufferBps(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        buy(_listingId: BigNumberish, _buyFor: string, _quantityToBuy: BigNumberish, _currency: string, _totalPrice: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelDirectListing(_listingId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        closeAuction(_listingId: BigNumberish, _closeFor: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        contractType(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        contractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createListing(_params: IMarketplace.ListingParametersStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getPlatformFeeInfo(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMember(role: BytesLike, index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRoleMemberCount(role: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        grantRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        hasRole(role: BytesLike, account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        initialize(_defaultAdmin: string, _contractURI: string, _trustedForwarders: string[], _platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isTrustedForwarder(forwarder: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        listings(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        multicall(data: BytesLike[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        offer(_listingId: BigNumberish, _quantityWanted: BigNumberish, _currency: string, _pricePerToken: BigNumberish, _expirationTimestamp: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        offers(arg0: BigNumberish, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onERC1155BatchReceived(arg0: string, arg1: string, arg2: BigNumberish[], arg3: BigNumberish[], arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC1155Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BigNumberish, arg4: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onERC721Received(arg0: string, arg1: string, arg2: BigNumberish, arg3: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        renounceRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        revokeRole(role: BytesLike, account: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setAuctionBuffers(_timeBuffer: BigNumberish, _bidBufferBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setContractURI(_uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setPlatformFeeInfo(_platformFeeRecipient: string, _platformFeeBps: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        timeBuffer(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        totalListings(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        updateListing(_listingId: BigNumberish, _quantityToList: BigNumberish, _reservePricePerToken: BigNumberish, _buyoutPricePerToken: BigNumberish, _currencyToAccept: string, _startTime: BigNumberish, _secondsUntilEndTime: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        winningBid(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Marketplace.d.ts.map