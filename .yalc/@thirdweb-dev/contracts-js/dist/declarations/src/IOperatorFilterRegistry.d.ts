import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IOperatorFilterRegistryInterface extends utils.Interface {
    functions: {
        "codeHashOf(address)": FunctionFragment;
        "copyEntriesOf(address,address)": FunctionFragment;
        "filteredCodeHashAt(address,uint256)": FunctionFragment;
        "filteredCodeHashes(address)": FunctionFragment;
        "filteredOperatorAt(address,uint256)": FunctionFragment;
        "filteredOperators(address)": FunctionFragment;
        "isCodeHashFiltered(address,bytes32)": FunctionFragment;
        "isCodeHashOfFiltered(address,address)": FunctionFragment;
        "isOperatorAllowed(address,address)": FunctionFragment;
        "isOperatorFiltered(address,address)": FunctionFragment;
        "isRegistered(address)": FunctionFragment;
        "register(address)": FunctionFragment;
        "registerAndCopyEntries(address,address)": FunctionFragment;
        "registerAndSubscribe(address,address)": FunctionFragment;
        "subscribe(address,address)": FunctionFragment;
        "subscriberAt(address,uint256)": FunctionFragment;
        "subscribers(address)": FunctionFragment;
        "subscriptionOf(address)": FunctionFragment;
        "unregister(address)": FunctionFragment;
        "unsubscribe(address,bool)": FunctionFragment;
        "updateCodeHash(address,bytes32,bool)": FunctionFragment;
        "updateCodeHashes(address,bytes32[],bool)": FunctionFragment;
        "updateOperator(address,address,bool)": FunctionFragment;
        "updateOperators(address,address[],bool)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "codeHashOf" | "copyEntriesOf" | "filteredCodeHashAt" | "filteredCodeHashes" | "filteredOperatorAt" | "filteredOperators" | "isCodeHashFiltered" | "isCodeHashOfFiltered" | "isOperatorAllowed" | "isOperatorFiltered" | "isRegistered" | "register" | "registerAndCopyEntries" | "registerAndSubscribe" | "subscribe" | "subscriberAt" | "subscribers" | "subscriptionOf" | "unregister" | "unsubscribe" | "updateCodeHash" | "updateCodeHashes" | "updateOperator" | "updateOperators"): FunctionFragment;
    encodeFunctionData(functionFragment: "codeHashOf", values: [string]): string;
    encodeFunctionData(functionFragment: "copyEntriesOf", values: [string, string]): string;
    encodeFunctionData(functionFragment: "filteredCodeHashAt", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "filteredCodeHashes", values: [string]): string;
    encodeFunctionData(functionFragment: "filteredOperatorAt", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "filteredOperators", values: [string]): string;
    encodeFunctionData(functionFragment: "isCodeHashFiltered", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "isCodeHashOfFiltered", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isOperatorAllowed", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isOperatorFiltered", values: [string, string]): string;
    encodeFunctionData(functionFragment: "isRegistered", values: [string]): string;
    encodeFunctionData(functionFragment: "register", values: [string]): string;
    encodeFunctionData(functionFragment: "registerAndCopyEntries", values: [string, string]): string;
    encodeFunctionData(functionFragment: "registerAndSubscribe", values: [string, string]): string;
    encodeFunctionData(functionFragment: "subscribe", values: [string, string]): string;
    encodeFunctionData(functionFragment: "subscriberAt", values: [string, BigNumberish]): string;
    encodeFunctionData(functionFragment: "subscribers", values: [string]): string;
    encodeFunctionData(functionFragment: "subscriptionOf", values: [string]): string;
    encodeFunctionData(functionFragment: "unregister", values: [string]): string;
    encodeFunctionData(functionFragment: "unsubscribe", values: [string, boolean]): string;
    encodeFunctionData(functionFragment: "updateCodeHash", values: [string, BytesLike, boolean]): string;
    encodeFunctionData(functionFragment: "updateCodeHashes", values: [string, BytesLike[], boolean]): string;
    encodeFunctionData(functionFragment: "updateOperator", values: [string, string, boolean]): string;
    encodeFunctionData(functionFragment: "updateOperators", values: [string, string[], boolean]): string;
    decodeFunctionResult(functionFragment: "codeHashOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "copyEntriesOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "filteredCodeHashAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "filteredCodeHashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "filteredOperatorAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "filteredOperators", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCodeHashFiltered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isCodeHashOfFiltered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperatorAllowed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isOperatorFiltered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "isRegistered", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "register", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerAndCopyEntries", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "registerAndSubscribe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "subscribe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "subscriberAt", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "subscribers", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "subscriptionOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unregister", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unsubscribe", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCodeHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateCodeHashes", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOperator", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "updateOperators", data: BytesLike): Result;
    events: {};
}
export interface IOperatorFilterRegistry extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IOperatorFilterRegistryInterface;
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
        codeHashOf(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        copyEntriesOf(registrant: string, registrantToCopy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        filteredCodeHashAt(registrant: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        filteredCodeHashes(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        filteredOperatorAt(registrant: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        filteredOperators(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isCodeHashFiltered(registrant: string, codeHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isCodeHashOfFiltered(registrant: string, operatorWithCode: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isOperatorAllowed(registrant: string, operator: string, overrides?: CallOverrides): Promise<[boolean]>;
        isOperatorFiltered(registrant: string, operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        isRegistered(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        register(registrant: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        registerAndCopyEntries(registrant: string, registrantToCopy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        registerAndSubscribe(registrant: string, subscription: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        subscribe(registrant: string, registrantToSubscribe: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        subscriberAt(registrant: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        subscribers(registrant: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        subscriptionOf(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unregister(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        unsubscribe(registrant: string, copyExistingEntries: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateCodeHash(registrant: string, codehash: BytesLike, filtered: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateCodeHashes(registrant: string, codeHashes: BytesLike[], filtered: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateOperator(registrant: string, operator: string, filtered: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        updateOperators(registrant: string, operators: string[], filtered: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    codeHashOf(addr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    copyEntriesOf(registrant: string, registrantToCopy: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    filteredCodeHashAt(registrant: string, index: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    filteredCodeHashes(addr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    filteredOperatorAt(registrant: string, index: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    filteredOperators(addr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isCodeHashFiltered(registrant: string, codeHash: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isCodeHashOfFiltered(registrant: string, operatorWithCode: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isOperatorAllowed(registrant: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
    isOperatorFiltered(registrant: string, operator: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    isRegistered(addr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    register(registrant: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    registerAndCopyEntries(registrant: string, registrantToCopy: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    registerAndSubscribe(registrant: string, subscription: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    subscribe(registrant: string, registrantToSubscribe: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    subscriberAt(registrant: string, index: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    subscribers(registrant: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    subscriptionOf(addr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unregister(addr: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    unsubscribe(registrant: string, copyExistingEntries: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateCodeHash(registrant: string, codehash: BytesLike, filtered: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateCodeHashes(registrant: string, codeHashes: BytesLike[], filtered: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateOperator(registrant: string, operator: string, filtered: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    updateOperators(registrant: string, operators: string[], filtered: boolean, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        codeHashOf(addr: string, overrides?: CallOverrides): Promise<string>;
        copyEntriesOf(registrant: string, registrantToCopy: string, overrides?: CallOverrides): Promise<void>;
        filteredCodeHashAt(registrant: string, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        filteredCodeHashes(addr: string, overrides?: CallOverrides): Promise<string[]>;
        filteredOperatorAt(registrant: string, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        filteredOperators(addr: string, overrides?: CallOverrides): Promise<string[]>;
        isCodeHashFiltered(registrant: string, codeHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;
        isCodeHashOfFiltered(registrant: string, operatorWithCode: string, overrides?: CallOverrides): Promise<boolean>;
        isOperatorAllowed(registrant: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        isOperatorFiltered(registrant: string, operator: string, overrides?: CallOverrides): Promise<boolean>;
        isRegistered(addr: string, overrides?: CallOverrides): Promise<boolean>;
        register(registrant: string, overrides?: CallOverrides): Promise<void>;
        registerAndCopyEntries(registrant: string, registrantToCopy: string, overrides?: CallOverrides): Promise<void>;
        registerAndSubscribe(registrant: string, subscription: string, overrides?: CallOverrides): Promise<void>;
        subscribe(registrant: string, registrantToSubscribe: string, overrides?: CallOverrides): Promise<void>;
        subscriberAt(registrant: string, index: BigNumberish, overrides?: CallOverrides): Promise<string>;
        subscribers(registrant: string, overrides?: CallOverrides): Promise<string[]>;
        subscriptionOf(addr: string, overrides?: CallOverrides): Promise<string>;
        unregister(addr: string, overrides?: CallOverrides): Promise<void>;
        unsubscribe(registrant: string, copyExistingEntries: boolean, overrides?: CallOverrides): Promise<void>;
        updateCodeHash(registrant: string, codehash: BytesLike, filtered: boolean, overrides?: CallOverrides): Promise<void>;
        updateCodeHashes(registrant: string, codeHashes: BytesLike[], filtered: boolean, overrides?: CallOverrides): Promise<void>;
        updateOperator(registrant: string, operator: string, filtered: boolean, overrides?: CallOverrides): Promise<void>;
        updateOperators(registrant: string, operators: string[], filtered: boolean, overrides?: CallOverrides): Promise<void>;
    };
    filters: {};
    estimateGas: {
        codeHashOf(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        copyEntriesOf(registrant: string, registrantToCopy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        filteredCodeHashAt(registrant: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        filteredCodeHashes(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        filteredOperatorAt(registrant: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        filteredOperators(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isCodeHashFiltered(registrant: string, codeHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isCodeHashOfFiltered(registrant: string, operatorWithCode: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isOperatorAllowed(registrant: string, operator: string, overrides?: CallOverrides): Promise<BigNumber>;
        isOperatorFiltered(registrant: string, operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        isRegistered(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        register(registrant: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        registerAndCopyEntries(registrant: string, registrantToCopy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        registerAndSubscribe(registrant: string, subscription: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        subscribe(registrant: string, registrantToSubscribe: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        subscriberAt(registrant: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        subscribers(registrant: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        subscriptionOf(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unregister(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        unsubscribe(registrant: string, copyExistingEntries: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateCodeHash(registrant: string, codehash: BytesLike, filtered: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateCodeHashes(registrant: string, codeHashes: BytesLike[], filtered: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateOperator(registrant: string, operator: string, filtered: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        updateOperators(registrant: string, operators: string[], filtered: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        codeHashOf(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        copyEntriesOf(registrant: string, registrantToCopy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        filteredCodeHashAt(registrant: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        filteredCodeHashes(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        filteredOperatorAt(registrant: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        filteredOperators(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isCodeHashFiltered(registrant: string, codeHash: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isCodeHashOfFiltered(registrant: string, operatorWithCode: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isOperatorAllowed(registrant: string, operator: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        isOperatorFiltered(registrant: string, operator: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        isRegistered(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        register(registrant: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        registerAndCopyEntries(registrant: string, registrantToCopy: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        registerAndSubscribe(registrant: string, subscription: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        subscribe(registrant: string, registrantToSubscribe: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        subscriberAt(registrant: string, index: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        subscribers(registrant: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        subscriptionOf(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unregister(addr: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        unsubscribe(registrant: string, copyExistingEntries: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateCodeHash(registrant: string, codehash: BytesLike, filtered: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateCodeHashes(registrant: string, codeHashes: BytesLike[], filtered: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateOperator(registrant: string, operator: string, filtered: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        updateOperators(registrant: string, operators: string[], filtered: boolean, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IOperatorFilterRegistry.d.ts.map