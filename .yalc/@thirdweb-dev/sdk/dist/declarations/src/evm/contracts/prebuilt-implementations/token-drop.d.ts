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
import { DropClaimConditions } from "../../core/classes/drop-claim-conditions";
import { StandardErc20 } from "../../core/classes/erc-20-standard";
import { GasCostEstimator } from "../../core/classes/gas-cost-estimator";
import { Transaction } from "../../core/classes/transactions";
import { NetworkInput } from "../../core/types";
import { Abi, AbiInput } from "../../schema/contracts/custom";
import { DropErc20ContractSchema } from "../../schema/contracts/drop-erc20";
import { Address } from "../../schema/shared/Address";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import type { CurrencyValue } from "../../types/currency";
import { PrebuiltTokenDrop } from "../../types/eips";
/**
 * Create a Drop contract for a standard crypto token or cryptocurrency.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "token-drop");
 * ```
 *
 */
export declare class TokenDrop extends StandardErc20<PrebuiltTokenDrop> {
    static contractRoles: readonly ["admin", "transfer"];
    abi: Abi;
    metadata: ContractMetadata<PrebuiltTokenDrop, typeof DropErc20ContractSchema>;
    app: ContractAppURI<PrebuiltTokenDrop>;
    roles: ContractRoles<PrebuiltTokenDrop, (typeof TokenDrop.contractRoles)[number]>;
    encoder: ContractEncoder<PrebuiltTokenDrop>;
    estimator: GasCostEstimator<PrebuiltTokenDrop>;
    sales: ContractPrimarySale;
    platformFees: ContractPlatformFee<PrebuiltTokenDrop>;
    events: ContractEvents<PrebuiltTokenDrop>;
    /**
     * Configure claim conditions
     * @remarks Define who can claim Tokens, when and how many.
     * @example
     * ```javascript
     * const presaleStartTime = new Date();
     * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
     * const claimConditions = [
     *   {
     *     startTime: presaleStartTime, // start the presale now
     *     maxQuantity: 3117.42, // limit how many tokens are released in this presale
     *     price: 0.001, // presale price per token
     *     snapshot: ['0x...', '0x...'], // limit claiming to only certain addresses
     *   },
     *   {
     *     startTime: publicSaleStartTime, // 24h after presale, start public sale
     *     price: 0.008, // public sale price per token
     *   }
     * ]);
     * await contract.claimConditions.set(claimConditions);
     * ```
     */
    claimConditions: DropClaimConditions<PrebuiltTokenDrop>;
    /**
     * @internal
     */
    interceptor: ContractInterceptor<PrebuiltTokenDrop>;
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
    } | undefined, abi: AbiInput, chainId: number, contractWrapper?: ContractWrapper<PrebuiltTokenDrop>);
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
     * Claim a certain amount of tokens
     * @remarks See {@link TokenDrop.claimTo}
     * @param amount - the amount of tokens to mint
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     */
    claim: {
        (amount: string | number, checkERC20Allowance?: any): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (amount: string | number, checkERC20Allowance?: any) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Claim a certain amount of tokens to a specific Wallet
     *
     * @remarks Let the specified wallet claim Tokens.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const quantity = 42.69; // how many tokens you want to claim
     *
     * const tx = await contract.claimTo(address, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param amount - Quantity of the tokens you want to claim
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     *
     * @returns - The transaction receipt
     */
    claimTo: {
        (destinationAddress: string, amount: string | number, checkERC20Allowance?: any): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (destinationAddress: string, amount: string | number, checkERC20Allowance?: any) => Promise<Transaction<Omit<{
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
    burnTokens: {
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
    prepare<TMethod extends keyof PrebuiltTokenDrop["functions"] = keyof PrebuiltTokenDrop["functions"]>(method: string & TMethod, args: any[] & Parameters<PrebuiltTokenDrop["functions"][TMethod]>, overrides?: CallOverrides): Promise<Transaction<Omit<{
        receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
        data: () => Promise<unknown>;
    }, "data">>>;
    /**
     * @internal
     */
    call<TMethod extends keyof PrebuiltTokenDrop["functions"] = keyof PrebuiltTokenDrop["functions"]>(functionName: string & TMethod, args?: Parameters<PrebuiltTokenDrop["functions"][TMethod]>, overrides?: CallOverrides): Promise<ReturnType<PrebuiltTokenDrop["functions"][TMethod]>>;
}
//# sourceMappingURL=token-drop.d.ts.map