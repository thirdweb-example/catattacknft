import type { DropERC20, TokenERC20 } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, BigNumberish } from "ethers";
import type { Address } from "../../schema/shared/Address";
import type { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import type { ClaimOptions } from "../../types/claim-conditions/claim-conditions";
import type { Amount, Currency, CurrencyValue } from "../../types/currency";
import type { BaseDropERC20, BaseERC20, BaseSignatureMintERC20 } from "../../types/eips";
import type { DetectableFeature } from "../interfaces/DetectableFeature";
import { UpdateableNetwork } from "../interfaces/contract";
import type { NetworkInput } from "../types";
import type { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
import { Erc20SignatureMintable } from "./erc-20-signature-mintable";
/**
 * Standard ERC20 Token functions
 * @remarks Basic functionality for a ERC20 contract that handles all unit transformation for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc20.transfer(walletAddress, amount);
 * ```
 * @public
 */
export declare class Erc20<T extends TokenERC20 | DropERC20 | BaseERC20 = BaseERC20 | BaseSignatureMintERC20> implements UpdateableNetwork, DetectableFeature {
    featureName: "ERC20";
    /**
     * Mint tokens
     */
    private mintable;
    private burnable;
    private droppable;
    private signatureMintable;
    protected contractWrapper: ContractWrapper<T>;
    protected storage: ThirdwebStorage;
    private _chainId;
    get chainId(): number;
    constructor(contractWrapper: ContractWrapper<T>, storage: ThirdwebStorage, chainId: number);
    /**
     * @internal
     */
    onNetworkUpdated(network: NetworkInput): void;
    /**
     * @internal
     */
    getAddress(): Address;
    /**
     * Get the token metadata
     * @remarks name, symbol, etc...
     * @example
     * ```javascript
     * const token = await contract.erc20.get();
     * ```
     * @returns The token metadata
     * @twfeature ERC20
     */
    get(): Promise<Currency>;
    /**
     * Get token balance for the currently connected wallet
     *
     * @remarks Get a wallets token balance.
     *
     * @example
     * ```javascript
     * const balance = await contract.erc20.balance();
     * ```
     *
     * @returns The balance of a specific wallet.
     * @twfeature ERC20
     */
    balance(): Promise<CurrencyValue>;
    /**
     * Get token balance for a specific wallet
     *
     * @remarks Get a wallets token balance.
     *
     * @example
     * ```javascript
     * const walletAddress = "{{wallet_address}}";
     * const balance = await contract.erc20.balanceOf(walletAddress);
     * ```
     *
     * @returns The balance of a specific wallet.
     * @twfeature ERC20
     */
    balanceOf(address: AddressOrEns): Promise<CurrencyValue>;
    /**
     * Get the total supply for this token
     * @remarks Get how much supply has been minted
     * @example
     * ```javascript
     * const balance = await contract.erc20.totalSupply();
     * ```
     * @twfeature ERC20
     */
    totalSupply(): Promise<CurrencyValue>;
    /**
     * Get token allowance
     *
     * @remarks Get the allowance of a 'spender' wallet over the connected wallet's funds - the allowance of a different address for a token is the amount of tokens that the `spender` wallet is allowed to spend on behalf of the connected wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet to check token allowance
     * const spenderAddress = "0x...";
     * const allowance = await contract.erc20.allowance(spenderAddress);
     * ```
     *
     * @returns The allowance of one wallet over anothers funds.
     * @twfeature ERC20
     */
    allowance(spender: AddressOrEns): Promise<CurrencyValue>;
    /**
     * Get token allowance of a specific wallet
     *
     * @remarks Get the allowance of one wallet over another wallet's funds - the allowance of a different address for a token is the amount of tokens that the wallet is allowed to spend on behalf of the specified wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet who owns the funds
     * const owner = "{{wallet_address}}";
     * // Address of the wallet to check token allowance
     * const spender = "0x...";
     * const allowance = await contract.erc20.allowanceOf(owner, spender);
     * ```
     *
     * @returns The allowance of one wallet over anothers funds.
     * @twfeature ERC20
     */
    allowanceOf(owner: AddressOrEns, spender: AddressOrEns): Promise<CurrencyValue>;
    /**
     * Transfer tokens
     *
     * @remarks Transfer tokens from the connected wallet to another wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet you want to send the tokens to
     * const toAddress = "0x...";
     * // The amount of tokens you want to send
     * const amount = 0.1;
     * await contract.erc20.transfer(toAddress, amount);
     * ```
     * @twfeature ERC20
     */
    transfer: {
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
     * Transfer tokens from a specific address
     *
     * @remarks Transfer tokens from one wallet to another
     *
     * @example
     * ```javascript
     * // Address of the wallet sending the tokens
     * const fromAddress = "{{wallet_address}}";
     * // Address of the wallet you want to send the tokens to
     * const toAddress = "0x...";
     * // The number of tokens you want to send
     * const amount = 1.2
     * // Note that the connected wallet must have approval to transfer the tokens of the fromAddress
     * await contract.erc20.transferFrom(fromAddress, toAddress, amount);
     * ```
     * @twfeature ERC20
     */
    transferFrom: {
        (from: string, to: string, amount: string | number): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (from: string, to: string, amount: string | number) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Set token allowance
     * @remarks Allows the specified `spender` wallet to transfer the given `amount` of tokens to another wallet
     * @example
     * ```javascript
     * // Address of the wallet to allow transfers from
     * const spenderAddress = "0x...";
     * // The number of tokens to give as allowance
     * const amount = 100
     * await contract.erc20.setAllowance(spenderAddress, amount);
     * ```
     * @twfeature ERC20
     */
    setAllowance: {
        (spender: string, amount: string | number): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (spender: string, amount: string | number) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Transfer tokens to many wallets
     *
     * @remarks Mint tokens from the connected wallet to many wallets
     *
     * @example
     * ```javascript
     * // Data of the tokens you want to mint
     * const data = [
     *   {
     *     toAddress: "{{wallet_address}}", // Address to mint tokens to
     *     amount: 100, // How many tokens to mint to specified address
     *   },
     *  {
     *    toAddress: "0x...",
     *    amount: 100,
     *  }
     * ]
     *
     * await contract.erc20.transferBatch(data);
     * ```
     */
    transferBatch: {
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
     * Mint tokens
     *
     * @remarks Mint tokens to the connected wallet.
     *
     * @example
     * ```javascript
     * const amount = "1.5"; // The amount of this token you want to mint
     * await contract.erc20.mint(amount);
     * ```
     * @twfeature ERC20Mintable
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
     * Mint tokens to a specific wallet
     *
     * @remarks Mint tokens to a specified address.
     *
     * @example
     * ```javascript
     * const toAddress = "{{wallet_address}}"; // Address of the wallet you want to mint the tokens to
     * const amount = "1.5"; // The amount of this token you want to mint
     * await contract.erc20.mintTo(toAddress, amount);
     * ```
     * @twfeature ERC20Mintable
     */
    mintTo: {
        (receiver: string, amount: string | number): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (receiver: string, amount: string | number) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Construct a mint transaction without executing it
     * @remarks This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
     * @param receiver - Address you want to send the token to
     * @param amount - The amount of tokens you want to mint
     *
     * @deprecated Use `contract.erc20.mint.prepare(...args)` instead
     * @twfeature ERC20Mintable
     */
    getMintTransaction(receiver: AddressOrEns, amount: Amount): Promise<Transaction>;
    /**
     * Mint tokens to many wallets
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
     * @twfeature ERC20BatchMintable
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
     * Burn tokens
     *
     * @remarks Burn tokens held by the connected wallet
     *
     * @example
     * ```javascript
     * // The amount of this token you want to burn
     * const amount = 1.2;
     *
     * await contract.erc20.burn(amount);
     * ```
     * @twfeature ERC20Burnable
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
     * Burn tokens from a specific wallet
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
     * await contract.erc20.burnFrom(holderAddress, amount);
     * ```
     * @twfeature ERC20Burnable
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
     * Claim tokens
     *
     * @remarks Let the specified wallet claim Tokens.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const quantity = 42.69; // how many tokens you want to claim
     *
     * const tx = await contract.erc20.claim(address, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param amount - Quantity of the tokens you want to claim
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     * @param claimData
     * @returns - The transaction receipt
     * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1
     */
    claim: {
        (amount: string | number, options?: ClaimOptions | undefined): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (amount: string | number, options?: ClaimOptions | undefined) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Claim tokens to a specific wallet
     *
     * @remarks Let the specified wallet claim Tokens.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const quantity = 42.69; // how many tokens you want to claim
     *
     * const tx = await contract.erc20.claim(address, quantity);
     * const receipt = tx.receipt; // the transaction receipt
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param amount - Quantity of the tokens you want to claim
     * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
     * @param claimData
     * @returns - The transaction receipt
     * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1
     */
    claimTo: {
        (destinationAddress: string, amount: string | number, options?: ClaimOptions | undefined): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (destinationAddress: string, amount: string | number, options?: ClaimOptions | undefined) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Configure claim conditions
     * @remarks Define who can claim NFTs in the collection, when and how many.
     * @example
     * ```javascript
     * const presaleStartTime = new Date();
     * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
     * const claimConditions = [
     *   {
     *     startTime: presaleStartTime, // start the presale now
     *     maxClaimableSupply: 2, // limit how many mints for this presale
     *     price: 0.01, // presale price
     *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
     *   },
     *   {
     *     startTime: publicSaleStartTime, // 24h after presale, start public sale
     *     price: 0.08, // public sale price
     *   }
     * ]);
     * await contract.erc20.claimConditions.set(claimConditions);
     * ```
     * @twfeature ERC20ClaimPhasesV2 | ERC20ClaimPhasesV1 | ERC20ClaimConditionsV2 | ERC20ClaimConditionsV1
     */
    get claimConditions(): import("./drop-claim-conditions").DropClaimConditions<BaseDropERC20>;
    /**
     * Mint with signature
     * @remarks Generate dynamic tokens with your own signature, and let others mint them using that signature.
     * @example
     * ```javascript
     * // see how to craft a payload to sign in the `contract.erc20.signature.generate()` documentation
     * const signedPayload = contract.erc20.signature().generate(payload);
     *
     * // now the payload can be used to mint tokens
     * const tx = contract.erc20.signature.mint(signedPayload);
     * ```
     * @twfeature ERC20SignatureMintable
     */
    get signature(): Erc20SignatureMintable;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    /**
     * returns the wei amount from a token amount
     * @internal
     * @param amount
     */
    normalizeAmount(amount: Amount): Promise<BigNumber>;
    /**
     * @internal
     */
    getValue(value: BigNumberish): Promise<CurrencyValue>;
    private detectErc20Mintable;
    private detectErc20Burnable;
    private detectErc20Droppable;
    private detectErc20SignatureMintable;
}
//# sourceMappingURL=erc-20.d.ts.map