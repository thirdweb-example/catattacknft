import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IAirdropERC1155 {
    type AirdropContentStruct = {
        recipient: string;
        tokenId: BigNumberish;
        amount: BigNumberish;
    };
    type AirdropContentStructOutput = [string, BigNumber, BigNumber] & {
        recipient: string;
        tokenId: BigNumber;
        amount: BigNumber;
    };
}
export interface IAirdropERC1155Interface extends utils.Interface {
    functions: {
        "airdropERC1155(address,address,(address,uint256,uint256)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "airdropERC1155"): FunctionFragment;
    encodeFunctionData(functionFragment: "airdropERC1155", values: [string, string, IAirdropERC1155.AirdropContentStruct[]]): string;
    decodeFunctionResult(functionFragment: "airdropERC1155", data: BytesLike): Result;
    events: {
        "AirdropFailed(address,address,address,uint256,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AirdropFailed"): EventFragment;
}
export interface AirdropFailedEventObject {
    tokenAddress: string;
    tokenOwner: string;
    recipient: string;
    tokenId: BigNumber;
    amount: BigNumber;
}
export type AirdropFailedEvent = TypedEvent<[
    string,
    string,
    string,
    BigNumber,
    BigNumber
], AirdropFailedEventObject>;
export type AirdropFailedEventFilter = TypedEventFilter<AirdropFailedEvent>;
export interface IAirdropERC1155 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAirdropERC1155Interface;
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
        airdropERC1155(tokenAddress: string, tokenOwner: string, contents: IAirdropERC1155.AirdropContentStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    airdropERC1155(tokenAddress: string, tokenOwner: string, contents: IAirdropERC1155.AirdropContentStruct[], overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        airdropERC1155(tokenAddress: string, tokenOwner: string, contents: IAirdropERC1155.AirdropContentStruct[], overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AirdropFailed(address,address,address,uint256,uint256)"(tokenAddress?: string | null, tokenOwner?: string | null, recipient?: string | null, tokenId?: null, amount?: null): AirdropFailedEventFilter;
        AirdropFailed(tokenAddress?: string | null, tokenOwner?: string | null, recipient?: string | null, tokenId?: null, amount?: null): AirdropFailedEventFilter;
    };
    estimateGas: {
        airdropERC1155(tokenAddress: string, tokenOwner: string, contents: IAirdropERC1155.AirdropContentStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        airdropERC1155(tokenAddress: string, tokenOwner: string, contents: IAirdropERC1155.AirdropContentStruct[], overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IAirdropERC1155.d.ts.map