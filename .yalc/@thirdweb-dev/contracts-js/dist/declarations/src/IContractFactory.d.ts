import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IContractFactoryInterface extends utils.Interface {
    functions: {
        "deployProxyByImplementation(address,bytes,bytes32)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "deployProxyByImplementation"): FunctionFragment;
    encodeFunctionData(functionFragment: "deployProxyByImplementation", values: [string, BytesLike, BytesLike]): string;
    decodeFunctionResult(functionFragment: "deployProxyByImplementation", data: BytesLike): Result;
    events: {};
}
export interface IContractFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IContractFactoryInterface;
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
        deployProxyByImplementation(implementation: string, data: BytesLike, salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    deployProxyByImplementation(implementation: string, data: BytesLike, salt: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        deployProxyByImplementation(implementation: string, data: BytesLike, salt: BytesLike, overrides?: CallOverrides): Promise<string>;
    };
    filters: {};
    estimateGas: {
        deployProxyByImplementation(implementation: string, data: BytesLike, salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        deployProxyByImplementation(implementation: string, data: BytesLike, salt: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IContractFactory.d.ts.map