import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export declare namespace IStakeManager {
    type DepositInfoStruct = {
        deposit: BigNumberish;
        staked: boolean;
        stake: BigNumberish;
        unstakeDelaySec: BigNumberish;
        withdrawTime: BigNumberish;
    };
    type DepositInfoStructOutput = [
        BigNumber,
        boolean,
        BigNumber,
        number,
        number
    ] & {
        deposit: BigNumber;
        staked: boolean;
        stake: BigNumber;
        unstakeDelaySec: number;
        withdrawTime: number;
    };
}
export interface StakeManagerInterface extends utils.Interface {
    functions: {
        "addStake(uint32)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "depositTo(address)": FunctionFragment;
        "deposits(address)": FunctionFragment;
        "getDepositInfo(address)": FunctionFragment;
        "unlockStake()": FunctionFragment;
        "withdrawStake(address)": FunctionFragment;
        "withdrawTo(address,uint256)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "addStake" | "balanceOf" | "depositTo" | "deposits" | "getDepositInfo" | "unlockStake" | "withdrawStake" | "withdrawTo"): FunctionFragment;
    encodeFunctionData(functionFragment: "addStake", values: [BigNumberish]): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
    encodeFunctionData(functionFragment: "depositTo", values: [string]): string;
    encodeFunctionData(functionFragment: "deposits", values: [string]): string;
    encodeFunctionData(functionFragment: "getDepositInfo", values: [string]): string;
    encodeFunctionData(functionFragment: "unlockStake", values?: undefined): string;
    encodeFunctionData(functionFragment: "withdrawStake", values: [string]): string;
    encodeFunctionData(functionFragment: "withdrawTo", values: [string, BigNumberish]): string;
    decodeFunctionResult(functionFragment: "addStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "depositTo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "deposits", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getDepositInfo", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "unlockStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawStake", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "withdrawTo", data: BytesLike): Result;
    events: {
        "Deposited(address,uint256)": EventFragment;
        "StakeLocked(address,uint256,uint256)": EventFragment;
        "StakeUnlocked(address,uint256)": EventFragment;
        "StakeWithdrawn(address,address,uint256)": EventFragment;
        "Withdrawn(address,address,uint256)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeLocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeUnlocked"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "StakeWithdrawn"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}
export interface DepositedEventObject {
    account: string;
    totalDeposit: BigNumber;
}
export type DepositedEvent = TypedEvent<[
    string,
    BigNumber
], DepositedEventObject>;
export type DepositedEventFilter = TypedEventFilter<DepositedEvent>;
export interface StakeLockedEventObject {
    account: string;
    totalStaked: BigNumber;
    unstakeDelaySec: BigNumber;
}
export type StakeLockedEvent = TypedEvent<[
    string,
    BigNumber,
    BigNumber
], StakeLockedEventObject>;
export type StakeLockedEventFilter = TypedEventFilter<StakeLockedEvent>;
export interface StakeUnlockedEventObject {
    account: string;
    withdrawTime: BigNumber;
}
export type StakeUnlockedEvent = TypedEvent<[
    string,
    BigNumber
], StakeUnlockedEventObject>;
export type StakeUnlockedEventFilter = TypedEventFilter<StakeUnlockedEvent>;
export interface StakeWithdrawnEventObject {
    account: string;
    withdrawAddress: string;
    amount: BigNumber;
}
export type StakeWithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], StakeWithdrawnEventObject>;
export type StakeWithdrawnEventFilter = TypedEventFilter<StakeWithdrawnEvent>;
export interface WithdrawnEventObject {
    account: string;
    withdrawAddress: string;
    amount: BigNumber;
}
export type WithdrawnEvent = TypedEvent<[
    string,
    string,
    BigNumber
], WithdrawnEventObject>;
export type WithdrawnEventFilter = TypedEventFilter<WithdrawnEvent>;
export interface StakeManager extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: StakeManagerInterface;
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
        addStake(unstakeDelaySec: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;
        depositTo(account: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        deposits(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean,
            BigNumber,
            number,
            number
        ] & {
            deposit: BigNumber;
            staked: boolean;
            stake: BigNumber;
            unstakeDelaySec: number;
            withdrawTime: number;
        }>;
        getDepositInfo(account: string, overrides?: CallOverrides): Promise<[
            IStakeManager.DepositInfoStructOutput
        ] & {
            info: IStakeManager.DepositInfoStructOutput;
        }>;
        unlockStake(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawStake(withdrawAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        withdrawTo(withdrawAddress: string, withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    addStake(unstakeDelaySec: BigNumberish, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
    depositTo(account: string, overrides?: PayableOverrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    deposits(arg0: string, overrides?: CallOverrides): Promise<[
        BigNumber,
        boolean,
        BigNumber,
        number,
        number
    ] & {
        deposit: BigNumber;
        staked: boolean;
        stake: BigNumber;
        unstakeDelaySec: number;
        withdrawTime: number;
    }>;
    getDepositInfo(account: string, overrides?: CallOverrides): Promise<IStakeManager.DepositInfoStructOutput>;
    unlockStake(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawStake(withdrawAddress: string, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    withdrawTo(withdrawAddress: string, withdrawAmount: BigNumberish, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        addStake(unstakeDelaySec: BigNumberish, overrides?: CallOverrides): Promise<void>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        depositTo(account: string, overrides?: CallOverrides): Promise<void>;
        deposits(arg0: string, overrides?: CallOverrides): Promise<[
            BigNumber,
            boolean,
            BigNumber,
            number,
            number
        ] & {
            deposit: BigNumber;
            staked: boolean;
            stake: BigNumber;
            unstakeDelaySec: number;
            withdrawTime: number;
        }>;
        getDepositInfo(account: string, overrides?: CallOverrides): Promise<IStakeManager.DepositInfoStructOutput>;
        unlockStake(overrides?: CallOverrides): Promise<void>;
        withdrawStake(withdrawAddress: string, overrides?: CallOverrides): Promise<void>;
        withdrawTo(withdrawAddress: string, withdrawAmount: BigNumberish, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "Deposited(address,uint256)"(account?: string | null, totalDeposit?: null): DepositedEventFilter;
        Deposited(account?: string | null, totalDeposit?: null): DepositedEventFilter;
        "StakeLocked(address,uint256,uint256)"(account?: string | null, totalStaked?: null, unstakeDelaySec?: null): StakeLockedEventFilter;
        StakeLocked(account?: string | null, totalStaked?: null, unstakeDelaySec?: null): StakeLockedEventFilter;
        "StakeUnlocked(address,uint256)"(account?: string | null, withdrawTime?: null): StakeUnlockedEventFilter;
        StakeUnlocked(account?: string | null, withdrawTime?: null): StakeUnlockedEventFilter;
        "StakeWithdrawn(address,address,uint256)"(account?: string | null, withdrawAddress?: null, amount?: null): StakeWithdrawnEventFilter;
        StakeWithdrawn(account?: string | null, withdrawAddress?: null, amount?: null): StakeWithdrawnEventFilter;
        "Withdrawn(address,address,uint256)"(account?: string | null, withdrawAddress?: null, amount?: null): WithdrawnEventFilter;
        Withdrawn(account?: string | null, withdrawAddress?: null, amount?: null): WithdrawnEventFilter;
    };
    estimateGas: {
        addStake(unstakeDelaySec: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        depositTo(account: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        deposits(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
        getDepositInfo(account: string, overrides?: CallOverrides): Promise<BigNumber>;
        unlockStake(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawStake(withdrawAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        withdrawTo(withdrawAddress: string, withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        addStake(unstakeDelaySec: BigNumberish, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        balanceOf(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        depositTo(account: string, overrides?: PayableOverrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        deposits(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getDepositInfo(account: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        unlockStake(overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawStake(withdrawAddress: string, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        withdrawTo(withdrawAddress: string, withdrawAmount: BigNumberish, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=StakeManager.d.ts.map