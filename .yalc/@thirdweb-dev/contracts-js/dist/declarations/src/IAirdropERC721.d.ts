import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IAirdropERC721 {
    type AirdropContentStruct = {
        recipient: string;
        tokenId: BigNumberish;
    };
    type AirdropContentStructOutput = [string, BigNumber] & {
        recipient: string;
        tokenId: BigNumber;
    };
}
export interface IAirdropERC721Interface extends utils.Interface {
    functions: {
        "airdropERC721(address,address,(address,uint256)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "airdropERC721"): FunctionFragment;
    encodeFunctionData(functionFragment: "airdropERC721", values: [string, string, IAirdropERC721.AirdropContentStruct[]]): string;
    decodeFunctionResult(functionFragment: "airdropERC721", data: BytesLike): Result;
    events: {
        "AirdropFailed(address,address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AirdropFailed"): EventFragment;
}
export interface AirdropFailedEventObject {
    tokenAddress: string;
    tokenOwner: string;
    recipient: string;
    tokenId: BigNumber;
}
export type AirdropFailedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber
], AirdropFailedEventObject>;
export type AirdropFailedEventFilter = TypedEventFilter<AirdropFailedEvent>;
export interface IAirdropERC721 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAirdropERC721Interface;
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
        airdropERC721(tokenAddress: string, tokenOwner: string, contents: IAirdropERC721.AirdropContentStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    airdropERC721(tokenAddress: string, tokenOwner: string, contents: IAirdropERC721.AirdropContentStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        airdropERC721(tokenAddress: string, tokenOwner: string, contents: IAirdropERC721.AirdropContentStruct[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AirdropFailed(address,address,address,uint256)"(tokenAddress?: string | null, tokenOwner?: string | null, recipient?: string | null, tokenId?: null): AirdropFailedEventFilter;
        AirdropFailed(tokenAddress?: string | null, tokenOwner?: string | null, recipient?: string | null, tokenId?: null): AirdropFailedEventFilter;
    };
    estimateGas: {
        airdropERC721(tokenAddress: string, tokenOwner: string, contents: IAirdropERC721.AirdropContentStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        airdropERC721(tokenAddress: string, tokenOwner: string, contents: IAirdropERC721.AirdropContentStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IAirdropERC721.d.ts.map