import type { TokenERC20 } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { CallOverrides } from "ethers";
import { ContractAppURI } from "../../core/classes/contract-appuri";
import { ContractEncoder } from "../../core/classes/contract-encoder";
import { ContractEvents } from "../../core/classes/contract-events";
import { ContractInterceptor } from "../../core/classes/contract-interceptor";
import { ContractMetadata } from "../../core/classes/contract-metadata";
import { ContractPlatformFee } from "../../core/classes/contract-platform-fee";
import { ContractRoles } from "../../core/classes/contract-roles";
import { ContractPrimarySale } from "../../core/classes/contract-sales";
import { ContractWrapper } from "../../core/classes/contract-wrapper";
import { TokenERC20History } from "../../core/classes/erc-20-history";
import { Erc20SignatureMintable } from "../../core/classes/erc-20-signature-mintable";
import { StandardErc20 } from "../../core/classes/erc-20-standard";
import { GasCostEstimator } from "../../core/classes/gas-cost-estimator";
import { Transaction } from "../../core/classes/transactions";
import { NetworkInput } from "../../core/types";
import { Abi, AbiInput } from "../../schema/contracts/custom";
import { TokenErc20ContractSchema } from "../../schema/contracts/token-erc20";
import { Address } from "../../schema/shared/Address";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import type { Amount, CurrencyValue } from "../../types/currency";
/**
 * Create a standard crypto token or cryptocurrency.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "token");
 * ```
 *
 * @public
 */
export declare class Token extends StandardErc20<TokenERC20> {
    static contractRoles: readonly ["admin", "minter", "transfer"];
    abi: Abi;
    metadata: ContractMetadata<TokenERC20, typeof TokenErc20ContractSchema>;
    app: ContractAppURI<TokenERC20>;
    roles: ContractRoles<TokenERC20, (typeof Token.contractRoles)[number]>;
    encoder: ContractEncoder<TokenERC20>;
    estimator: GasCostEstimator<TokenERC20>;
    history: TokenERC20History;
    events: ContractEvents<TokenERC20>;
    platformFees: ContractPlatformFee<TokenERC20>;
    sales: ContractPrimarySale;
    /**
     * Signature Minting
     * @remarks Generate tokens that can be minted only with your own signature, attaching your own set of mint conditions.
     * @example
     * ```javascript
     * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
     * const signedPayload = contract.signature.generate(payload);
     *
     * // now anyone can mint the tokens
     * const tx = contract.signature.mint(signedPayload);
     * const receipt = tx.receipt; // the mint transaction receipt
     * ```
     */
    signature: Erc20SignatureMintable;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<TokenERC20>;
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
    } | undefined, abi: AbiInput, chainId: number, contractWrapper?: ContractWrapper<TokenERC20>);
    /** ******************************
     * READ FUNCTIONS
     *******************************/
    /**
     * Get your wallet voting power for the current checkpoints
     *
     * @returns the amount of voting power in tokens
     */
    getVoteBalance(): Promise<CurrencyValue>;
    getVoteBalanceOf(account: AddressOrEns): Promise<CurrencyValue>;
    /**
     * Get your voting delegatee address
     *
     * @returns the address of your vote delegatee
     */
    getDelegation(): Promise<Address>;
    /**
     * Get a specific address voting delegatee address
     *
     * @returns the address of your vote delegatee
     */
    getDelegationOf(account: AddressOrEns): Promise<Address>;
    /**
     * Get whether users can transfer tokens from this contract
     */
    isTransferRestricted(): Promise<boolean>;
    /** ******************************
     * WRITE FUNCTIONS
     *******************************/
    /**
     * Mint Tokens for the connected wallet
     *
     * @remarks See {@link Token.mintTo}
     */
    mint: {
        (amount: string | number): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (amount: string | number) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Mint Tokens
     *
     * @remarks Mint tokens to a specified address.
     *
     * @example
     * ```javascript
     * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
     * const amount = "1.5"; // The amount of this token you want to mint
     *
     * await contract.mintTo(toAddress, amount);
     * ```
     */
    mintTo: {
        (to: string, amount: string | number): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (to: string, amount: string | number) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Construct a mint transaction without executing it.
     * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
     * @param receiver - Address you want to send the token to
     * @param amount - The amount of tokens you want to mint
     *
     * @deprecated Use `contract.mint.prepare(...args)` instead
     */
    getMintTransaction(to: AddressOrEns, amount: Amount): Promise<Transaction>;
    /**
     * Mint Tokens To Many Wallets
     *
     * @remarks Mint tokens to many wallets in one transaction.
     *
     * @example
     * ```javascript
     * // Data of the tokens you want to mint
     * const data = [
     *   {
     *     toAddress: "{{wallet_address}}", // Address to mint tokens to
     *     amount: 0.2, // How many tokens to mint to specified address
     *   },
     *  {
     *    toAddress: "0x...",
     *    amount: 1.4,
     *  }
     * ]
     *
     * await contract.mintBatchTo(data);
     * ```
     */
    mintBatchTo: {
        (args: {
            amount: string | number;
            toAddress: string;
        }[]): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (args: {
            amount: string | number;
            toAddress: string;
        }[]) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Lets you delegate your voting power to the delegateeAddress
     *
     * @param delegateeAddress - delegatee wallet address
     * @alpha
     */
    delegateTo: {
        (delegateeAddress: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (delegateeAddress: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Burn Tokens
     *
     * @remarks Burn tokens held by the connected wallet
     *
     * @example
     * ```javascript
     * // The amount of this token you want to burn
     * const amount = 1.2;
     *
     * await contract.burnTokens(amount);
     * ```
     */
    burn: {
        (amount: string | number): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (amount: string | number) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Burn Tokens
     *
     * @remarks Burn tokens held by the specified wallet
     *
     * @example
     * ```javascript
     * // Address of the wallet sending the tokens
     * const holderAddress = "{{wallet_address}}";
     *
     * // The amount of this token you want to burn
     * const amount = 1.2;
     *
     * await contract.burnFrom(holderAddress, amount);
     * ```
     */
    burnFrom: {
        (holder: string, amount: string | number): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (holder: string, amount: string | number) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * @internal
     */
    prepare<TMethod extends keyof TokenERC20["functions"] = keyof TokenERC20["functions"]>(method: string & TMethod, args: any[] & Parameters<TokenERC20["functions"][TMethod]>, overrides?: CallOverrides): Promise<Transaction<Omit<{
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<unknown>;
    }, "data">>>;
    /**
     * @internal
     */
    call<TMethod extends keyof TokenERC20["functions"] = keyof TokenERC20["functions"]>(functionName: string & TMethod, args?: Parameters<TokenERC20["functions"][TMethod]>, overrides?: CallOverrides): Promise<ReturnType<TokenERC20["functions"][TMethod]>>;
}
//# sourceMappingURL=token.d.ts.map