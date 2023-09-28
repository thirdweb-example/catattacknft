import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface SenderCreatorInterface extends utils.Interface {
    functions: {
        "createSender(bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createSender"): FunctionFragment;
    encodeFunctionData(functionFragment: "createSender", values: [BytesLike]): string;
    decodeFunctionResult(functionFragment: "createSender", data: BytesLike): Result;
    events: {
        "FactoryAddress(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "FactoryAddress"): EventFragment;
}
export interface FactoryAddressEventObject {
    factory: string;
}
export type FactoryAddressEvent = TypedEvent<[
    string
], FactoryAddressEventObject>;
export type FactoryAddressEventFilter = TypedEventFilter<FactoryAddressEvent>;
export interface SenderCreator extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SenderCreatorInterface;
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
        createSender(initCode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    createSender(initCode: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createSender(initCode: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {
        "FactoryAddress(address)"(factory?: null): FactoryAddressEventFilter;
        FactoryAddress(factory?: null): FactoryAddressEventFilter;
    };
    estimateGas: {
        createSender(initCode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createSender(initCode: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=SenderCreator.d.ts.map