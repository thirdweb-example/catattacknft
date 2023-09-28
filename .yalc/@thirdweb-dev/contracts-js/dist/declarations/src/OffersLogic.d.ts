import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IOffers {
    type OfferStruct = {
        offerId: BigNumberish;
        offeror: string;
        assetContract: string;
        tokenId: BigNumberish;
        quantity: BigNumberish;
        currency: string;
        totalPrice: BigNumberish;
        expirationTimestamp: BigNumberish;
        tokenType: BigNumberish;
        status: BigNumberish;
    };
    type OfferStructOutput = [
        BigNumber,
        string,
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        number,
        number
    ] & {
        offerId: BigNumber;
        offeror: string;
        assetContract: string;
        tokenId: BigNumber;
        quantity: BigNumber;
        currency: string;
        totalPrice: BigNumber;
        expirationTimestamp: BigNumber;
        tokenType: number;
        status: number;
    };
    type OfferParamsStruct = {
        assetContract: string;
        tokenId: BigNumberish;
        quantity: BigNumberish;
        currency: string;
        totalPrice: BigNumberish;
        expirationTimestamp: BigNumberish;
    };
    type OfferParamsStructOutput = [
        string,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber
    ] & {
        assetContract: string;
        tokenId: BigNumber;
        quantity: BigNumber;
        currency: string;
        totalPrice: BigNumber;
        expirationTimestamp: BigNumber;
    };
}
export interface OffersLogicInterface extends utils.Interface {
    functions: {
        "_msgData()": FunctionFragment;
        "_msgSender()": FunctionFragment;
        "acceptOffer(uint256)": FunctionFragment;
        "cancelOffer(uint256)": FunctionFragment;
        "getAllOffers(uint256,uint256)": FunctionFragment;
        "getAllValidOffers(uint256,uint256)": FunctionFragment;
        "getOffer(uint256)": FunctionFragment;
        "makeOffer((address,uint256,uint256,address,uint256,uint256))": FunctionFragment;
        "totalOffers()": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "_msgData" | "_msgSender" | "acceptOffer" | "cancelOffer" | "getAllOffers" | "getAllValidOffers" | "getOffer" | "makeOffer" | "totalOffers"): FunctionFragment;
    encodeFunctionData(functionFragment: "_msgData", values?: undefined): string;
    encodeFunctionData(functionFragment: "_msgSender", values?: undefined): string;
    encodeFunctionData(functionFragment: "acceptOffer", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "cancelOffer", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAllOffers", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getAllValidOffers", values: [BigNumberish, BigNumberish]): string;
    encodeFunctionData(functionFragment: "getOffer", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "makeOffer", values: [IOffers.OfferParamsStruct]): string;
    encodeFunctionData(functionFragment: "totalOffers", values?: undefined): string;
    decodeFunctionResult(functionFragment: "_msgData", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "_msgSender", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "acceptOffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "cancelOffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllOffers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllValidOffers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "makeOffer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalOffers", data: BytesLike): Result;
    events: {
        "AcceptedOffer(address,uint256,address,uint256,address,uint256,uint256)": EventFragment;
        "CancelledOffer(address,uint256)": EventFragment;
        "NewOffer(address,uint256,address,tuple)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AcceptedOffer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "CancelledOffer"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "NewOffer"): EventFragment;
}
export interface AcceptedOfferEventObject {
    offeror: string;
    offerId: BigNumber;
    assetContract: string;
    tokenId: BigNumber;
    seller: string;
    quantityBought: BigNumber;
    totalPricePaid: BigNumber;
}
export type AcceptedOfferEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber
], AcceptedOfferEventObject>;
export type AcceptedOfferEventFilter = TypedEventFilter<AcceptedOfferEvent>;
export interface CancelledOfferEventObject {
    offeror: string;
    offerId: BigNumber;
}
export type CancelledOfferEvent = TypedEvent<[
    string,
    BigNumber
], CancelledOfferEventObject>;
export type CancelledOfferEventFilter = TypedEventFilter<CancelledOfferEvent>;
export interface NewOfferEventObject {
    offeror: string;
    offerId: BigNumber;
    assetContract: string;
    offer: IOffers.OfferStructOutput;
}
export type NewOfferEvent = TypedEvent<[
    string,
    BigNumber,
    string,
    IOffers.OfferStructOutput
], NewOfferEventObject>;
export type NewOfferEventFilter = TypedEventFilter<NewOfferEvent>;
export interface OffersLogic extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: OffersLogicInterface;
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
        _msgData(overrides?: CallOverrides): Promise<[string]>;
        _msgSender(overrides?: CallOverrides): Promise<[string] & {
            sender: string;
        }>;
        acceptOffer(_offerId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        cancelOffer(_offerId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAllOffers(_startId: BigNumberish, _endId: BigNumberish, overrides?: CallOverrides): Promise<[
            IOffers.OfferStructOutput[]
        ] & {
            _allOffers: IOffers.OfferStructOutput[];
        }>;
        getAllValidOffers(_startId: BigNumberish, _endId: BigNumberish, overrides?: CallOverrides): Promise<[
            IOffers.OfferStructOutput[]
        ] & {
            _validOffers: IOffers.OfferStructOutput[];
        }>;
        getOffer(_offerId: BigNumberish, overrides?: CallOverrides): Promise<[
            IOffers.OfferStructOutput
        ] & {
            _offer: IOffers.OfferStructOutput;
        }>;
        makeOffer(_params: IOffers.OfferParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        totalOffers(overrides?: CallOverrides): Promise<[BigNumber]>;
    };
    _msgData(overrides?: CallOverrides): Promise<string>;
    _msgSender(overrides?: CallOverrides): Promise<string>;
    acceptOffer(_offerId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    cancelOffer(_offerId: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAllOffers(_startId: BigNumberish, _endId: BigNumberish, overrides?: CallOverrides): Promise<IOffers.OfferStructOutput[]>;
    getAllValidOffers(_startId: BigNumberish, _endId: BigNumberish, overrides?: CallOverrides): Promise<IOffers.OfferStructOutput[]>;
    getOffer(_offerId: BigNumberish, overrides?: CallOverrides): Promise<IOffers.OfferStructOutput>;
    makeOffer(_params: IOffers.OfferParamsStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    totalOffers(overrides?: CallOverrides): Promise<BigNumber>;
    callStatic: {
        _msgData(overrides?: CallOverrides): Promise<string>;
        _msgSender(overrides?: CallOverrides): Promise<string>;
        acceptOffer(_offerId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        cancelOffer(_offerId: BigNumberish, overrides?: CallOverrides): Promise<void>;
        getAllOffers(_startId: BigNumberish, _endId: BigNumberish, overrides?: CallOverrides): Promise<IOffers.OfferStructOutput[]>;
        getAllValidOffers(_startId: BigNumberish, _endId: BigNumberish, overrides?: CallOverrides): Promise<IOffers.OfferStructOutput[]>;
        getOffer(_offerId: BigNumberish, overrides?: CallOverrides): Promise<IOffers.OfferStructOutput>;
        makeOffer(_params: IOffers.OfferParamsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        totalOffers(overrides?: CallOverrides): Promise<BigNumber>;
    };
    filters: {
        "AcceptedOffer(address,uint256,address,uint256,address,uint256,uint256)"(offeror?: string | null, offerId?: BigNumberish | null, assetContract?: string | null, tokenId?: null, seller?: null, quantityBought?: null, totalPricePaid?: null): AcceptedOfferEventFilter;
        AcceptedOffer(offeror?: string | null, offerId?: BigNumberish | null, assetContract?: string | null, tokenId?: null, seller?: null, quantityBought?: null, totalPricePaid?: null): AcceptedOfferEventFilter;
        "CancelledOffer(address,uint256)"(offeror?: string | null, offerId?: BigNumberish | null): CancelledOfferEventFilter;
        CancelledOffer(offeror?: string | null, offerId?: BigNumberish | null): CancelledOfferEventFilter;
        "NewOffer(address,uint256,address,tuple)"(offeror?: string | null, offerId?: BigNumberish | null, assetContract?: string | null, offer?: null): NewOfferEventFilter;
        NewOffer(offeror?: string | null, offerId?: BigNumberish | null, assetContract?: string | null, offer?: null): NewOfferEventFilter;
    };
    estimateGas: {
        _msgData(overrides?: CallOverrides): Promise<BigNumber>;
        _msgSender(overrides?: CallOverrides): Promise<BigNumber>;
        acceptOffer(_offerId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        cancelOffer(_offerId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAllOffers(_startId: BigNumberish, _endId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getAllValidOffers(_startId: BigNumberish, _endId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        getOffer(_offerId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        makeOffer(_params: IOffers.OfferParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        totalOffers(overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        _msgData(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        _msgSender(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        acceptOffer(_offerId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        cancelOffer(_offerId: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAllOffers(_startId: BigNumberish, _endId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllValidOffers(_startId: BigNumberish, _endId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOffer(_offerId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        makeOffer(_params: IOffers.OfferParamsStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        totalOffers(overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=OffersLogic.d.ts.map