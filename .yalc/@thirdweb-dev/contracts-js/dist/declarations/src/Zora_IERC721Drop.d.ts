import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IERC721Drop {
    type AddressMintDetailsStruct = {
        totalMints: BigNumberish;
        presaleMints: BigNumberish;
        publicMints: BigNumberish;
    };
    type AddressMintDetailsStructOutput = [
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        totalMints: BigNumber;
        presaleMints: BigNumber;
        publicMints: BigNumber;
    };
    type SaleDetailsStruct = {
        publicSaleActive: boolean;
        presaleActive: boolean;
        publicSalePrice: BigNumberish;
        publicSaleStart: BigNumberish;
        publicSaleEnd: BigNumberish;
        presaleStart: BigNumberish;
        presaleEnd: BigNumberish;
        presaleMerkleRoot: BytesLike;
        maxSalePurchasePerAddress: BigNumberish;
        totalMinted: BigNumberish;
        maxSupply: BigNumberish;
    };
    type SaleDetailsStructOutput = [
        boolean,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        publicSaleActive: boolean;
        presaleActive: boolean;
        publicSalePrice: BigNumber;
        publicSaleStart: BigNumber;
        publicSaleEnd: BigNumber;
        presaleStart: BigNumber;
        presaleEnd: BigNumber;
        presaleMerkleRoot: string;
        maxSalePurchasePerAddress: BigNumber;
        totalMinted: BigNumber;
        maxSupply: BigNumber;
    };
}
export interface Zora_IERC721DropInterface extends utils.Interface {
    functions: {
        "adminMint(address,uint256)": FunctionFragment;
        "adminMintAirdrop(address[])": FunctionFragment;
        "isAdmin(address)": FunctionFragment;
        "mintedPerAddress(address)": FunctionFragment;
        "owner()": FunctionFragment;
        "purchase(uint256)": FunctionFragment;
        "purchasePresale(uint256,uint256,uint256,bytes32[])": FunctionFragment;
        "saleDetails()": FunctionFragment;
        "setMetadataRenderer(address,bytes)": FunctionFragment;
        "setSaleConfiguration(uint104,uint32,uint64,uint64,uint64,uint64,bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "adminMint" | "adminMintAirdrop" | "isAdmin" | "mintedPerAddress" | "owner" | "purchase" | "purchasePresale" | "saleDetails" | "setMetadataRenderer" | "setSaleConfiguration"): FunctionFragment;
    encodeFunctionData(functionFragment: "adminMint", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "adminMintAirdrop", values: [string[]]): string;
    encodeFunctionData(functionFragment: "isAdmin", values: [string]): string;
    encodeFunctionData(functionFragment: "mintedPerAddress", values: [string]): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "purchase", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "purchasePresale", values: [BigNumberish, BigNumberish, BigNumberish, BytesLike[]]): string;
    encodeFunctionData(functionFragment: "saleDetails", values?: undefined): string;
    encodeFunctionData(functionFragment: "setMetadataRenderer", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "setSaleConfiguration", values: [
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BigNumberish,
        BytesLike
    ]): string;
    decodeFunctionResult(functionFragment: "adminMint", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "adminMintAirdrop", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isAdmin", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintedPerAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "purchase", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "purchasePresale", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "saleDetails", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setMetadataRenderer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setSaleConfiguration", data: BytesLike): Result;
    events: {
        "FundsRecipientChanged(address,address)": EventFragment;
        "FundsWithdrawn(address,address,uint256,address,uint256)": EventFragment;
        "MintComment(address,address,uint256,uint256,string)": EventFragment;
        "MintFeePayout(uint256,address,bool)": EventFragment;
        "OpenMintFinalized(address,uint256)": EventFragment;
        "Sale(address,uint256,uint256,uint256)": EventFragment;
        "SalesConfigChanged(address)": EventFragment;
        "UpdatedMetadataRenderer(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FundsRecipientChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "FundsWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MintComment"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "MintFeePayout"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OpenMintFinalized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Sale"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SalesConfigChanged"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "UpdatedMetadataRenderer"): EventFragment;
}
export interface FundsRecipientChangedEventObject {
    newAddress: string;
    changedBy: string;
}
export type FundsRecipientChangedEvent = TypedEvent<[
    string,
    string
], FundsRecipientChangedEventObject>;
export type FundsRecipientChangedEventFilter = TypedEventFilter<FundsRecipientChangedEvent>;
export interface FundsWithdrawnEventObject {
    withdrawnBy: string;
    withdrawnTo: string;
    amount: BigNumber;
    feeRecipient: string;
    feeAmount: BigNumber;
}
export type FundsWithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    string,
    BigNumber
], FundsWithdrawnEventObject>;
export type FundsWithdrawnEventFilter = TypedEventFilter<FundsWithdrawnEvent>;
export interface MintCommentEventObject {
    sender: string;
    tokenContract: string;
    tokenId: BigNumber;
    quantity: BigNumber;
    comment: string;
}
export type MintCommentEvent = TypedEvent<[
    string,
    string,
    BigNumber,
    BigNumber,
    string
], MintCommentEventObject>;
export type MintCommentEventFilter = TypedEventFilter<MintCommentEvent>;
export interface MintFeePayoutEventObject {
    mintFeeAmount: BigNumber;
    mintFeeRecipient: string;
    success: boolean;
}
export type MintFeePayoutEvent = TypedEvent<[
    BigNumber,
    string,
    boolean
], MintFeePayoutEventObject>;
export type MintFeePayoutEventFilter = TypedEventFilter<MintFeePayoutEvent>;
export interface OpenMintFinalizedEventObject {
    sender: string;
    numberOfMints: BigNumber;
}
export type OpenMintFinalizedEvent = TypedEvent<[
    string,
    BigNumber
], OpenMintFinalizedEventObject>;
export type OpenMintFinalizedEventFilter = TypedEventFilter<OpenMintFinalizedEvent>;
export interface SaleEventObject {
    to: string;
    quantity: BigNumber;
    pricePerToken: BigNumber;
    firstPurchasedTokenId: BigNumber;
}
export type SaleEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber,
    BigNumber
], SaleEventObject>;
export type SaleEventFilter = TypedEventFilter<SaleEvent>;
export interface SalesConfigChangedEventObject {
    changedBy: string;
}
export type SalesConfigChangedEvent = TypedEvent<[
    string
], SalesConfigChangedEventObject>;
export type SalesConfigChangedEventFilter = TypedEventFilter<SalesConfigChangedEvent>;
export interface UpdatedMetadataRendererEventObject {
    sender: string;
    renderer: string;
}
export type UpdatedMetadataRendererEvent = TypedEvent<[
    string,
    string
], UpdatedMetadataRendererEventObject>;
export type UpdatedMetadataRendererEventFilter = TypedEventFilter<UpdatedMetadataRendererEvent>;
export interface Zora_IERC721Drop extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: Zora_IERC721DropInterface;
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
        adminMint(to: string, quantity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        adminMintAirdrop(to: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isAdmin(user: string, overrides?: CallOverrides): Promise<[boolean]>;
        mintedPerAddress(minter: string, overrides?: CallOverrides): Promise<[IERC721Drop.AddressMintDetailsStructOutput]>;
        owner(overrides?: CallOverrides): Promise<[string]>;
        purchase(quantity: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        purchasePresale(quantity: BigNumberish, maxQuantity: BigNumberish, pricePerToken: BigNumberish, merkleProof: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        saleDetails(overrides?: CallOverrides): Promise<[IERC721Drop.SaleDetailsStructOutput]>;
        setMetadataRenderer(newRenderer: string, setupRenderer: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        setSaleConfiguration(publicSalePrice: BigNumberish, maxSalePurchasePerAddress: BigNumberish, publicSaleStart: BigNumberish, publicSaleEnd: BigNumberish, presaleStart: BigNumberish, presaleEnd: BigNumberish, presaleMerkleRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    adminMint(to: string, quantity: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    adminMintAirdrop(to: string[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isAdmin(user: string, overrides?: CallOverrides): Promise<boolean>;
    mintedPerAddress(minter: string, overrides?: CallOverrides): Promise<IERC721Drop.AddressMintDetailsStructOutput>;
    owner(overrides?: CallOverrides): Promise<string>;
    purchase(quantity: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    purchasePresale(quantity: BigNumberish, maxQuantity: BigNumberish, pricePerToken: BigNumberish, merkleProof: BytesLike[], overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    saleDetails(overrides?: CallOverrides): Promise<IERC721Drop.SaleDetailsStructOutput>;
    setMetadataRenderer(newRenderer: string, setupRenderer: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    setSaleConfiguration(publicSalePrice: BigNumberish, maxSalePurchasePerAddress: BigNumberish, publicSaleStart: BigNumberish, publicSaleEnd: BigNumberish, presaleStart: BigNumberish, presaleEnd: BigNumberish, presaleMerkleRoot: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        adminMint(to: string, quantity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        adminMintAirdrop(to: string[], overrides?: CallOverrides): Promise<BigNumber>;
        isAdmin(user: string, overrides?: CallOverrides): Promise<boolean>;
        mintedPerAddress(minter: string, overrides?: CallOverrides): Promise<IERC721Drop.AddressMintDetailsStructOutput>;
        owner(overrides?: CallOverrides): Promise<string>;
        purchase(quantity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
        purchasePresale(quantity: BigNumberish, maxQuantity: BigNumberish, pricePerToken: BigNumberish, merkleProof: BytesLike[], overrides?: CallOverrides): Promise<BigNumber>;
        saleDetails(overrides?: CallOverrides): Promise<IERC721Drop.SaleDetailsStructOutput>;
        setMetadataRenderer(newRenderer: string, setupRenderer: BytesLike, overrides?: CallOverrides): Promise<void>;
        setSaleConfiguration(publicSalePrice: BigNumberish, maxSalePurchasePerAddress: BigNumberish, publicSaleStart: BigNumberish, publicSaleEnd: BigNumberish, presaleStart: BigNumberish, presaleEnd: BigNumberish, presaleMerkleRoot: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "FundsRecipientChanged(address,address)"(newAddress?: string | null, changedBy?: string | null): FundsRecipientChangedEventFilter;
        FundsRecipientChanged(newAddress?: string | null, changedBy?: string | null): FundsRecipientChangedEventFilter;
        "FundsWithdrawn(address,address,uint256,address,uint256)"(withdrawnBy?: string | null, withdrawnTo?: string | null, amount?: null, feeRecipient?: null, feeAmount?: null): FundsWithdrawnEventFilter;
        FundsWithdrawn(withdrawnBy?: string | null, withdrawnTo?: string | null, amount?: null, feeRecipient?: null, feeAmount?: null): FundsWithdrawnEventFilter;
        "MintComment(address,address,uint256,uint256,string)"(sender?: string | null, tokenContract?: string | null, tokenId?: BigNumberish | null, quantity?: null, comment?: null): MintCommentEventFilter;
        MintComment(sender?: string | null, tokenContract?: string | null, tokenId?: BigNumberish | null, quantity?: null, comment?: null): MintCommentEventFilter;
        "MintFeePayout(uint256,address,bool)"(mintFeeAmount?: null, mintFeeRecipient?: null, success?: null): MintFeePayoutEventFilter;
        MintFeePayout(mintFeeAmount?: null, mintFeeRecipient?: null, success?: null): MintFeePayoutEventFilter;
        "OpenMintFinalized(address,uint256)"(sender?: string | null, numberOfMints?: null): OpenMintFinalizedEventFilter;
        OpenMintFinalized(sender?: string | null, numberOfMints?: null): OpenMintFinalizedEventFilter;
        "Sale(address,uint256,uint256,uint256)"(to?: string | null, quantity?: BigNumberish | null, pricePerToken?: BigNumberish | null, firstPurchasedTokenId?: null): SaleEventFilter;
        Sale(to?: string | null, quantity?: BigNumberish | null, pricePerToken?: BigNumberish | null, firstPurchasedTokenId?: null): SaleEventFilter;
        "SalesConfigChanged(address)"(changedBy?: string | null): SalesConfigChangedEventFilter;
        SalesConfigChanged(changedBy?: string | null): SalesConfigChangedEventFilter;
        "UpdatedMetadataRenderer(address,address)"(sender?: null, renderer?: null): UpdatedMetadataRendererEventFilter;
        UpdatedMetadataRenderer(sender?: null, renderer?: null): UpdatedMetadataRendererEventFilter;
    };
    estimateGas: {
        adminMint(to: string, quantity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        adminMintAirdrop(to: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isAdmin(user: string, overrides?: CallOverrides): Promise<BigNumber>;
        mintedPerAddress(minter: string, overrides?: CallOverrides): Promise<BigNumber>;
        owner(overrides?: CallOverrides): Promise<BigNumber>;
        purchase(quantity: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        purchasePresale(quantity: BigNumberish, maxQuantity: BigNumberish, pricePerToken: BigNumberish, merkleProof: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        saleDetails(overrides?: CallOverrides): Promise<BigNumber>;
        setMetadataRenderer(newRenderer: string, setupRenderer: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        setSaleConfiguration(publicSalePrice: BigNumberish, maxSalePurchasePerAddress: BigNumberish, publicSaleStart: BigNumberish, publicSaleEnd: BigNumberish, presaleStart: BigNumberish, presaleEnd: BigNumberish, presaleMerkleRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        adminMint(to: string, quantity: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        adminMintAirdrop(to: string[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isAdmin(user: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        mintedPerAddress(minter: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        purchase(quantity: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        purchasePresale(quantity: BigNumberish, maxQuantity: BigNumberish, pricePerToken: BigNumberish, merkleProof: BytesLike[], overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        saleDetails(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setMetadataRenderer(newRenderer: string, setupRenderer: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        setSaleConfiguration(publicSalePrice: BigNumberish, maxSalePurchasePerAddress: BigNumberish, publicSaleStart: BigNumberish, publicSaleEnd: BigNumberish, presaleStart: BigNumberish, presaleEnd: BigNumberish, presaleMerkleRoot: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=Zora_IERC721Drop.d.ts.map