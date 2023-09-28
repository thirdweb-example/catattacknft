import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IRulesEngine {
    type RuleWithIdStruct = {
        ruleId: BytesLike;
        token: string;
        tokenType: BigNumberish;
        tokenId: BigNumberish;
        balance: BigNumberish;
        score: BigNumberish;
        ruleType: BigNumberish;
    };
    type RuleWithIdStructOutput = [
        string,
        string,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        number
    ] & {
        ruleId: string;
        token: string;
        tokenType: number;
        tokenId: BigNumber;
        balance: BigNumber;
        score: BigNumber;
        ruleType: number;
    };
    type RuleTypeMultiplicativeStruct = {
        token: string;
        tokenType: BigNumberish;
        tokenId: BigNumberish;
        scorePerOwnedToken: BigNumberish;
    };
    type RuleTypeMultiplicativeStructOutput = [
        string,
        number,
        BigNumber,
        BigNumber
    ] & {
        token: string;
        tokenType: number;
        tokenId: BigNumber;
        scorePerOwnedToken: BigNumber;
    };
    type RuleTypeThresholdStruct = {
        token: string;
        tokenType: BigNumberish;
        tokenId: BigNumberish;
        balance: BigNumberish;
        score: BigNumberish;
    };
    type RuleTypeThresholdStructOutput = [
        string,
        number,
        BigNumber,
        BigNumber,
        BigNumber
    ] & {
        token: string;
        tokenType: number;
        tokenId: BigNumber;
        balance: BigNumber;
        score: BigNumber;
    };
}
export interface RulesEngineInterface extends utils.Interface {
    functions: {
        "createRuleMultiplicative((address,uint8,uint256,uint256))": FunctionFragment;
        "createRuleThreshold((address,uint8,uint256,uint256,uint256))": FunctionFragment;
        "deleteRule(bytes32)": FunctionFragment;
        "getAllRules()": FunctionFragment;
        "getRulesEngineOverride()": FunctionFragment;
        "getScore(address)": FunctionFragment;
        "setRulesEngineOverride(address)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "createRuleMultiplicative" | "createRuleThreshold" | "deleteRule" | "getAllRules" | "getRulesEngineOverride" | "getScore" | "setRulesEngineOverride"): FunctionFragment;
    encodeFunctionData(functionFragment: "createRuleMultiplicative", values: [IRulesEngine.RuleTypeMultiplicativeStruct]): string;
    encodeFunctionData(functionFragment: "createRuleThreshold", values: [IRulesEngine.RuleTypeThresholdStruct]): string;
    encodeFunctionData(functionFragment: "deleteRule", values: [BytesLike]): string;
    encodeFunctionData(functionFragment: "getAllRules", values?: undefined): string;
    encodeFunctionData(functionFragment: "getRulesEngineOverride", values?: undefined): string;
    encodeFunctionData(functionFragment: "getScore", values: [string]): string;
    encodeFunctionData(functionFragment: "setRulesEngineOverride", values: [string]): string;
    decodeFunctionResult(functionFragment: "createRuleMultiplicative", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createRuleThreshold", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deleteRule", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllRules", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getRulesEngineOverride", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getScore", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setRulesEngineOverride", data: BytesLike): Result;
    events: {
        "RuleCreated(bytes32,tuple)": EventFragment;
        "RuleDeleted(bytes32)": EventFragment;
        "RulesEngineOverriden(address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "RuleCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RuleDeleted"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "RulesEngineOverriden"): EventFragment;
}
export interface RuleCreatedEventObject {
    ruleId: string;
    rule: IRulesEngine.RuleWithIdStructOutput;
}
export type RuleCreatedEvent = TypedEvent<[
    string,
    IRulesEngine.RuleWithIdStructOutput
], RuleCreatedEventObject>;
export type RuleCreatedEventFilter = TypedEventFilter<RuleCreatedEvent>;
export interface RuleDeletedEventObject {
    ruleId: string;
}
export type RuleDeletedEvent = TypedEvent<[string], RuleDeletedEventObject>;
export type RuleDeletedEventFilter = TypedEventFilter<RuleDeletedEvent>;
export interface RulesEngineOverridenEventObject {
    newRulesEngine: string;
}
export type RulesEngineOverridenEvent = TypedEvent<[
    string
], RulesEngineOverridenEventObject>;
export type RulesEngineOverridenEventFilter = TypedEventFilter<RulesEngineOverridenEvent>;
export interface RulesEngine extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: RulesEngineInterface;
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
        createRuleMultiplicative(rule: IRulesEngine.RuleTypeMultiplicativeStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        createRuleThreshold(rule: IRulesEngine.RuleTypeThresholdStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deleteRule(_ruleId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAllRules(overrides?: CallOverrides): Promise<[
            IRulesEngine.RuleWithIdStructOutput[]
        ] & {
            rules: IRulesEngine.RuleWithIdStructOutput[];
        }>;
        getRulesEngineOverride(overrides?: CallOverrides): Promise<[string] & {
            rulesEngineAddress: string;
        }>;
        getScore(_tokenOwner: string, overrides?: CallOverrides): Promise<[BigNumber] & {
            score: BigNumber;
        }>;
        setRulesEngineOverride(_rulesEngineAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    createRuleMultiplicative(rule: IRulesEngine.RuleTypeMultiplicativeStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    createRuleThreshold(rule: IRulesEngine.RuleTypeThresholdStruct, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deleteRule(_ruleId: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAllRules(overrides?: CallOverrides): Promise<IRulesEngine.RuleWithIdStructOutput[]>;
    getRulesEngineOverride(overrides?: CallOverrides): Promise<string>;
    getScore(_tokenOwner: string, overrides?: CallOverrides): Promise<BigNumber>;
    setRulesEngineOverride(_rulesEngineAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        createRuleMultiplicative(rule: IRulesEngine.RuleTypeMultiplicativeStruct, overrides?: CallOverrides): Promise<string>;
        createRuleThreshold(rule: IRulesEngine.RuleTypeThresholdStruct, overrides?: CallOverrides): Promise<string>;
        deleteRule(_ruleId: BytesLike, overrides?: CallOverrides): Promise<void>;
        getAllRules(overrides?: CallOverrides): Promise<IRulesEngine.RuleWithIdStructOutput[]>;
        getRulesEngineOverride(overrides?: CallOverrides): Promise<string>;
        getScore(_tokenOwner: string, overrides?: CallOverrides): Promise<BigNumber>;
        setRulesEngineOverride(_rulesEngineAddress: string, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "RuleCreated(bytes32,tuple)"(ruleId?: BytesLike | null, rule?: null): RuleCreatedEventFilter;
        RuleCreated(ruleId?: BytesLike | null, rule?: null): RuleCreatedEventFilter;
        "RuleDeleted(bytes32)"(ruleId?: BytesLike | null): RuleDeletedEventFilter;
        RuleDeleted(ruleId?: BytesLike | null): RuleDeletedEventFilter;
        "RulesEngineOverriden(address)"(newRulesEngine?: string | null): RulesEngineOverridenEventFilter;
        RulesEngineOverriden(newRulesEngine?: string | null): RulesEngineOverridenEventFilter;
    };
    estimateGas: {
        createRuleMultiplicative(rule: IRulesEngine.RuleTypeMultiplicativeStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        createRuleThreshold(rule: IRulesEngine.RuleTypeThresholdStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deleteRule(_ruleId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAllRules(overrides?: CallOverrides): Promise<BigNumber>;
        getRulesEngineOverride(overrides?: CallOverrides): Promise<BigNumber>;
        getScore(_tokenOwner: string, overrides?: CallOverrides): Promise<BigNumber>;
        setRulesEngineOverride(_rulesEngineAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        createRuleMultiplicative(rule: IRulesEngine.RuleTypeMultiplicativeStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        createRuleThreshold(rule: IRulesEngine.RuleTypeThresholdStruct, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deleteRule(_ruleId: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAllRules(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getRulesEngineOverride(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getScore(_tokenOwner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        setRulesEngineOverride(_rulesEngineAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=RulesEngine.d.ts.map