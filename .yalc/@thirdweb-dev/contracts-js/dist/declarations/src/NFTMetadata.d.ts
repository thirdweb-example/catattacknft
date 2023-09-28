import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface NFTMetadataInterface extends utils.Interface {
    functions: {
        "setTokenURI(uint256,string)": FunctionFragment;
        "supportsInterface(bytes4)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "setTokenURI" | "supportsInterface"): FunctionFragment;
    encodeFunctionData(functionFragment: "setTokenURI", values: [BigNumberish, string]): string;
    encodeFunctionData(functionFragment: "supportsInterface", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "setTokenURI", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "supportsInterface", data: BytesLike): Result;
    events: {
        "BatchMetadataUpdate(uint256,uint256)": EventFragment;
        "MetadataUpdate(uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "BatchMetadataUpdate"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MetadataUpdate"): EventFragment;
}
export interface BatchMetadataUpdateEventObject {
    _fromTokenId: BigNumber;
    _toTokenId: BigNumber;
}
export type BatchMetadataUpdateEvent = TypedEvent<[
    BigNumber,
    BigNumber
], BatchMetadataUpdateEventObject>;
export type BatchMetadataUpdateEventFilter = TypedEventFilter<BatchMetadataUpdateEvent>;
export interface MetadataUpdateEventObject {
    _tokenId: BigNumber;
}
export type MetadataUpdateEvent = TypedEvent<[
    BigNumber
], MetadataUpdateEventObject>;
export type MetadataUpdateEventFilter = TypedEventFilter<MetadataUpdateEvent>;
export interface NFTMetadata extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: NFTMetadataInterface;
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
        setTokenURI(_tokenId: BigNumberish, _uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;
    };
    setTokenURI(_tokenId: BigNumberish, _uri: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    callStatic: {
        setTokenURI(_tokenId: BigNumberish, _uri: string, overrides?: CallOverrides): Promise<void>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "BatchMetadataUpdate(uint256,uint256)"(_fromTokenId?: null, _toTokenId?: null): BatchMetadataUpdateEventFilter;
        BatchMetadataUpdate(_fromTokenId?: null, _toTokenId?: null): BatchMetadataUpdateEventFilter;
        "MetadataUpdate(uint256)"(_tokenId?: null): MetadataUpdateEventFilter;
        MetadataUpdate(_tokenId?: null): MetadataUpdateEventFilter;
    };
    estimateGas: {
        setTokenURI(_tokenId: BigNumberish, _uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        setTokenURI(_tokenId: BigNumberish, _uri: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=NFTMetadata.d.ts.map