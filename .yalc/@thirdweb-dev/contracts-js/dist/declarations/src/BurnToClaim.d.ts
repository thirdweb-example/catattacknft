import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
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
export interface BurnToClaimInterface extends utils.Interface {
    functions: {
        "setBurnToClaimInfo((address,uint8,uint256,uint256,address))": FunctionFragment;
        "verifyBurnToClaim(address,uint256,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "setBurnToClaimInfo" | "verifyBurnToClaim"): FunctionFragment;
    encodeFunctionData(functionFragment: "setBurnToClaimInfo", values: [IBurnToClaim.BurnToClaimInfoStruct]): string;
    encodeFunctionData(functionFragment: "verifyBurnToClaim", values: [string, BigNumberish, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "setBurnToClaimInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "verifyBurnToClaim", data: BytesLike): Result;
    events: {
        "TokensBurnedAndClaimed(address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "TokensBurnedAndClaimed"): EventFragment;
}
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
export interface BurnToClaim extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: BurnToClaimInterface;
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
        setBurnToClaimInfo(_burnToClaimInfo: IBurnToClaim.BurnToClaimInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        verifyBurnToClaim(_tokenOwner: string, _tokenId: BigNumberish, _quantity: BigNumberish, overrides?: CallOverrides): Promise<[void]>;
    };
    setBurnToClaimInfo(_burnToClaimInfo: IBurnToClaim.BurnToClaimInfoStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    verifyBurnToClaim(_tokenOwner: string, _tokenId: BigNumberish, _quantity: BigNumberish, overrides?: CallOverrides): Promise<void>;
    callStatic: {
        setBurnToClaimInfo(_burnToClaimInfo: IBurnToClaim.BurnToClaimInfoStruct, overrides?: CallOverrides): Promise<void>;
        verifyBurnToClaim(_tokenOwner: string, _tokenId: BigNumberish, _quantity: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "TokensBurnedAndClaimed(address,address,uint256,uint256)"(originContract?: string | null, tokenOwner?: string | null, burnTokenId?: BigNumberish | null, quantity?: null): TokensBurnedAndClaimedEventFilter;
        TokensBurnedAndClaimed(originContract?: string | null, tokenOwner?: string | null, burnTokenId?: BigNumberish | null, quantity?: null): TokensBurnedAndClaimedEventFilter;
    };
    estimateGas: {
        setBurnToClaimInfo(_burnToClaimInfo: IBurnToClaim.BurnToClaimInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        verifyBurnToClaim(_tokenOwner: string, _tokenId: BigNumberish, _quantity: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
    };
    populateTransaction: {
        setBurnToClaimInfo(_burnToClaimInfo: IBurnToClaim.BurnToClaimInfoStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        verifyBurnToClaim(_tokenOwner: string, _tokenId: BigNumberish, _quantity: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=BurnToClaim.d.ts.map