import type { BaseContract, BigNumber, BytesLike, CallOverrides, ContractTransaction, Overrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common.js";
export interface IAccountFactoryInterface extends utils.Interface {
    functions: {
        "accountImplementation()": FunctionFragment;
        "createAccount(address,bytes)": FunctionFragment;
        "getAccountsOfSigner(address)": FunctionFragment;
        "getAddress(address,bytes)": FunctionFragment;
        "getAllAccounts()": FunctionFragment;
        "onSignerAdded(address,address,bytes)": FunctionFragment;
        "onSignerRemoved(address,address,bytes)": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "accountImplementation" | "createAccount" | "getAccountsOfSigner" | "getAddress" | "getAllAccounts" | "onSignerAdded" | "onSignerRemoved"): FunctionFragment;
    encodeFunctionData(functionFragment: "accountImplementation", values?: undefined): string;
    encodeFunctionData(functionFragment: "createAccount", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getAccountsOfSigner", values: [string]): string;
    encodeFunctionData(functionFragment: "getAddress", values: [string, BytesLike]): string;
    encodeFunctionData(functionFragment: "getAllAccounts", values?: undefined): string;
    encodeFunctionData(functionFragment: "onSignerAdded", values: [string, string, BytesLike]): string;
    encodeFunctionData(functionFragment: "onSignerRemoved", values: [string, string, BytesLike]): string;
    decodeFunctionResult(functionFragment: "accountImplementation", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "createAccount", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAccountsOfSigner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getAllAccounts", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onSignerAdded", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "onSignerRemoved", data: BytesLike): Result;
    events: {
        "AccountCreated(address,address)": EventFragment;
        "SignerAdded(address,address)": EventFragment;
        "SignerRemoved(address,address)": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "AccountCreated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignerAdded"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "SignerRemoved"): EventFragment;
}
export interface AccountCreatedEventObject {
    account: string;
    accountAdmin: string;
}
export type AccountCreatedEvent = TypedEvent<[
    string,
    string
], AccountCreatedEventObject>;
export type AccountCreatedEventFilter = TypedEventFilter<AccountCreatedEvent>;
export interface SignerAddedEventObject {
    account: string;
    signer: string;
}
export type SignerAddedEvent = TypedEvent<[
    string,
    string
], SignerAddedEventObject>;
export type SignerAddedEventFilter = TypedEventFilter<SignerAddedEvent>;
export interface SignerRemovedEventObject {
    account: string;
    signer: string;
}
export type SignerRemovedEvent = TypedEvent<[
    string,
    string
], SignerRemovedEventObject>;
export type SignerRemovedEventFilter = TypedEventFilter<SignerRemovedEvent>;
export interface IAccountFactory extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: IAccountFactoryInterface;
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
        accountImplementation(overrides?: CallOverrides): Promise<[string]>;
        createAccount(admin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        getAccountsOfSigner(signer: string, overrides?: CallOverrides): Promise<[string[]] & {
            accounts: string[];
        }>;
        getAddress(adminSigner: string, data: BytesLike, overrides?: CallOverrides): Promise<[string]>;
        getAllAccounts(overrides?: CallOverrides): Promise<[string[]]>;
        onSignerAdded(signer: string, creatorAdmin: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
        onSignerRemoved(signer: string, creatorAdmin: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<ContractTransaction>;
    };
    accountImplementation(overrides?: CallOverrides): Promise<string>;
    createAccount(admin: string, _data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    getAccountsOfSigner(signer: string, overrides?: CallOverrides): Promise<string[]>;
    getAddress(adminSigner: string, data: BytesLike, overrides?: CallOverrides): Promise<string>;
    getAllAccounts(overrides?: CallOverrides): Promise<string[]>;
    onSignerAdded(signer: string, creatorAdmin: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    onSignerRemoved(signer: string, creatorAdmin: string, data: BytesLike, overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        accountImplementation(overrides?: CallOverrides): Promise<string>;
        createAccount(admin: string, _data: BytesLike, overrides?: CallOverrides): Promise<string>;
        getAccountsOfSigner(signer: string, overrides?: CallOverrides): Promise<string[]>;
        getAddress(adminSigner: string, data: BytesLike, overrides?: CallOverrides): Promise<string>;
        getAllAccounts(overrides?: CallOverrides): Promise<string[]>;
        onSignerAdded(signer: string, creatorAdmin: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
        onSignerRemoved(signer: string, creatorAdmin: string, data: BytesLike, overrides?: CallOverrides): Promise<void>;
    };
    filters: {
        "AccountCreated(address,address)"(account?: string | null, accountAdmin?: string | null): AccountCreatedEventFilter;
        AccountCreated(account?: string | null, accountAdmin?: string | null): AccountCreatedEventFilter;
        "SignerAdded(address,address)"(account?: string | null, signer?: string | null): SignerAddedEventFilter;
        SignerAdded(account?: string | null, signer?: string | null): SignerAddedEventFilter;
        "SignerRemoved(address,address)"(account?: string | null, signer?: string | null): SignerRemovedEventFilter;
        SignerRemoved(account?: string | null, signer?: string | null): SignerRemovedEventFilter;
    };
    estimateGas: {
        accountImplementation(overrides?: CallOverrides): Promise<BigNumber>;
        createAccount(admin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        getAccountsOfSigner(signer: string, overrides?: CallOverrides): Promise<BigNumber>;
        getAddress(adminSigner: string, data: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;
        getAllAccounts(overrides?: CallOverrides): Promise<BigNumber>;
        onSignerAdded(signer: string, creatorAdmin: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
        onSignerRemoved(signer: string, creatorAdmin: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        accountImplementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        createAccount(admin: string, _data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        getAccountsOfSigner(signer: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAddress(adminSigner: string, data: BytesLike, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getAllAccounts(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        onSignerAdded(signer: string, creatorAdmin: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
        onSignerRemoved(signer: string, creatorAdmin: string, data: BytesLike, overrides?: Overrides & {
            from?: string | Promise<string>;
        }): Promise<PopulatedTransaction>;
    };
}
//# sourceMappingURL=IAccountFactory.d.ts.map