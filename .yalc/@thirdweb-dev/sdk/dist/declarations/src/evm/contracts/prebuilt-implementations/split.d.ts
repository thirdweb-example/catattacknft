import type { Split as SplitContract } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, CallOverrides } from "ethers";
import { ContractAppURI } from "../../core/classes/contract-appuri";
import { ContractEncoder } from "../../core/classes/contract-encoder";
import { ContractEvents } from "../../core/classes/contract-events";
import { ContractInterceptor } from "../../core/classes/contract-interceptor";
import { ContractMetadata } from "../../core/classes/contract-metadata";
import { ContractRoles } from "../../core/classes/contract-roles";
import { ContractWrapper } from "../../core/classes/contract-wrapper";
import { GasCostEstimator } from "../../core/classes/gas-cost-estimator";
import { Transaction } from "../../core/classes/transactions";
import { UpdateableNetwork } from "../../core/interfaces/contract";
import { NetworkInput } from "../../core/types";
import { Abi, AbiInput } from "../../schema/contracts/custom";
import { SplitsContractSchema } from "../../schema/contracts/splits";
import { Address } from "../../schema/shared/Address";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import { SplitRecipient } from "../../types/SplitRecipient";
import { CurrencyValue } from "../../types/currency";
/**
 * Create custom royalty splits to distribute funds.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "split");
 * ```
 *
 * @public
 */
export declare class Split implements UpdateableNetwork {
    static contractRoles: readonly ["admin"];
    private contractWrapper;
    private storage;
    abi: Abi;
    metadata: ContractMetadata<SplitContract, typeof SplitsContractSchema>;
    app: ContractAppURI<SplitContract>;
    encoder: ContractEncoder<SplitContract>;
    estimator: GasCostEstimator<SplitContract>;
    events: ContractEvents<SplitContract>;
    roles: ContractRoles<SplitContract, (typeof Split.contractRoles)[number]>;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<SplitContract>;
    private _chainId;
    get chainId(): number;
    constructor(network: NetworkInput, address: string, storage: ThirdwebStorage, options: {
        supportedChains?: {
            rpc: string[];
            chainId: number;
            nativeCurrency: {
                symbol: string;
                name: string;
                decimals: number;
            };
            slug: string;
        }[] | undefined;
        clientId?: string | undefined;
        secretKey?: string | undefined;
        readonlySettings?: {
            rpcUrl: string;
            chainId?: number | undefined;
        } | undefined;
        gasSettings?: {
            maxPriceInGwei?: number | undefined;
            speed?: "standard" | "fast" | "fastest" | undefined;
        } | undefined;
        gasless?: {
            openzeppelin: {
                relayerUrl: string;
                relayerForwarderAddress?: string | undefined;
                useEOAForwarder?: boolean | undefined;
                domainName?: string | undefined;
                domainVersion?: string | undefined;
            };
            experimentalChainlessSupport?: boolean | undefined;
        } | {
            biconomy: {
                apiId: string;
                apiKey: string;
                deadlineSeconds?: number | undefined;
            };
        } | undefined;
        gatewayUrls?: string[] | undefined;
    } | undefined, abi: AbiInput, chainId: number, contractWrapper?: ContractWrapper<SplitContract>);
    onNetworkUpdated(network: NetworkInput): void;
    getAddress(): Address;
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get Recipients of this splits contract
     *
     * @remarks Get the data about the shares of every split recipient on the contract
     *
     * @example
     * ```javascript
     * const recipients = await contract.getAllRecipients();
     * console.log(recipients);
     * ```
     */
    getAllRecipients(): Promise<SplitRecipient[]>;
    /**
     * Returns all the recipients and their balances in the native currency.
     *
     * @returns A map of recipient addresses to their balances in the native currency.
     */
    balanceOfAllRecipients(): Promise<{
        [key: string]: BigNumber;
    }>;
    /**
     * Returns all the recipients and their balances in a non-native currency.
     *
     * @param tokenAddress - The address of the currency to check the balances in.
     * @returns A map of recipient addresses to their balances in the specified currency.
     */
    balanceOfTokenAllRecipients(tokenAddress: AddressOrEns): Promise<{
        [key: string]: {
            symbol: string;
            value: BigNumber;
            name: string;
            decimals: number;
            displayValue: string;
        };
    }>;
    /**
     * Get Funds owed to a particular wallet
     *
     * @remarks Get the amount of funds in the native currency held by the contract that is owed to a specific recipient.
     *
     * @example
     * ```javascript
     * // The address to check the funds of
     * const address = "{{wallet_address}}";
     * const funds = await contract.balanceOf(address);
     * console.log(funds);
     * ```
     */
    balanceOf(address: AddressOrEns): Promise<BigNumber>;
    /**
     * Get non-native Token Funds owed to a particular wallet
     *
     * @remarks Get the amount of funds in the non-native tokens held by the contract that is owed to a specific recipient.
     *
     * @example
     * ```javascript
     * // The address to check the funds of
     * const address = "{{wallet_address}}";
     * // The address of the currency to check the contracts funds of
     * const tokenAddress = "0x..."
     * const funds = await contract.balanceOfToken(address, tokenAddress);
     * console.log(funds);
     * ```
     */
    balanceOfToken(walletAddress: AddressOrEns, tokenAddress: AddressOrEns): Promise<CurrencyValue>;
    /**
     * Get the % of funds owed to a given address
     * @param address - the address to check percentage of
     */
    getRecipientSplitPercentage(address: AddressOrEns): Promise<SplitRecipient>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Withdraw Funds
     * @remarks Triggers a transfer to account of the amount of native currency they are owed.
     *
     * @example
     * ```javascript
     * // the wallet address that wants to withdraw their funds
     * const walletAddress = "{{wallet_address}}"
     * await contract.withdraw(walletAddress);
     * ```
     *
     * @param walletAddress - The address to distributes the amount to
     */
    withdraw: {
        (walletAddress: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (walletAddress: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Triggers a transfer to account of the amount of a given currency they are owed.
     *
     * @param walletAddress - The address to distributes the amount to
     * @param tokenAddress - The address of the currency contract to distribute funds
     */
    withdrawToken: {
        (walletAddress: string, tokenAddress: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (walletAddress: string, tokenAddress: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Distribute Funds
     *
     * @remarks Distribute funds held by the contract in the native currency to all recipients.
     *
     * @example
     * ```javascript
     * await contract.distribute();
     * ```
     */
    distribute: {
        (): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: () => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Distribute Funds
     *
     * @remarks Distribute funds held by the contract in the native currency to all recipients.
     *
     * @example
     * ```javascript
     * // The address of the currency to distribute funds
     * const tokenAddress = "0x..."
     * await contract.distributeToken(tokenAddress);
     * ```
     *
     * @param tokenAddress - The address of the currency contract to distribute funds
     */
    distributeToken: {
        (tokenAddress: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (tokenAddress: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    private _pendingPayment;
    /**
     * @internal
     */
    prepare<TMethod extends keyof SplitContract["functions"] = keyof SplitContract["functions"]>(method: string & TMethod, args: any[] & Parameters<SplitContract["functions"][TMethod]>, overrides?: CallOverrides): Promise<Transaction<Omit<{
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<unknown>;
    }, "data">>>;
    /**
     * @internal
     */
    call<TMethod extends keyof SplitContract["functions"] = keyof SplitContract["functions"]>(functionName: string & TMethod, args?: Parameters<SplitContract["functions"][TMethod]>, overrides?: CallOverrides): Promise<ReturnType<SplitContract["functions"][TMethod]>>;
}
//# sourceMappingURL=split.d.ts.map