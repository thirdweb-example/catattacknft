import type { BlockTag } from "@ethersproject/abstract-provider";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { type BigNumberish, type Signer, type TypedDataField, type providers } from "ethers";
import EventEmitter from "eventemitter3";
import { EIP712Domain } from "../../common/sign";
import { SDKOptions } from "../../schema/sdk-options";
import { Address } from "../../schema/shared/Address";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import type { Amount, CurrencyValue } from "../../types/currency";
import { NetworkInput, TransactionResult } from "../types";
/**
 *
 * {@link UserWallet} events that you can subscribe to using `sdk.wallet.events`.
 *
 * @public
 */
export interface UserWalletEvents {
    /**
     * Emitted when `sdk.wallet.connect()` is called.
     */
    signerChanged: [Signer | undefined];
}
/**
 * Connect and Interact with a user wallet
 * @example
 * ```javascript
 * const balance = await sdk.wallet.balance();
 * ```
 * @public
 */
export declare class UserWallet {
    private connection;
    private options;
    events: EventEmitter<UserWalletEvents, any>;
    storage: ThirdwebStorage;
    constructor(network: NetworkInput, options: SDKOptions, storage: ThirdwebStorage);
    connect(network: NetworkInput): void;
    /**
     * Transfer native or ERC20 tokens from this wallet to another wallet
     * @example
     * ```javascript
     *  // transfer 0.8 ETH
     * await sdk.wallet.transfer("0x...", 0.8);
     *  // transfer 0.8 tokens of `tokenContractAddress`
     * await sdk.wallet.transfer("0x...", 0.8, tokenContractAddress);
     * ```
     * @param to - the account to send funds to
     * @param amount - the amount in tokens
     * @param currencyAddress - Optional - ERC20 contract address of the token to transfer
     */
    transfer(to: AddressOrEns, amount: Amount, currencyAddress?: AddressOrEns): Promise<TransactionResult>;
    /**
     * Fetch the native or ERC20 token balance of this wallet
     * @example
     * ```javascript
     * // native currency balance
     * const balance = await sdk.wallet.balance();
     * // ERC20 token balance
     * const erc20balance = await sdk.wallet.balance(tokenContractAddress);
     *
     * ```
     */
    balance(currencyAddress?: AddressOrEns): Promise<CurrencyValue>;
    /**
     * Get the currently connected address
     * @example
     * ```javascript
     * const address = await sdk.wallet.getAddress();
     * ```
     */
    getAddress(): Promise<Address>;
    /**
     * Get the currently connected wallet's chainId
     * @internal
     */
    getChainId(): Promise<number>;
    /**
     * Get the number of transactions sent from this address.
     * @param blockTag - Optional - the block tag to read the nonce from
     */
    getNonce(blockTag?: BlockTag): Promise<BigNumberish>;
    /**
     * Checks whether there's a signer connected with the SDK
     * @internal
     */
    isConnected(): boolean;
    /**
     * Sign any message with the connected wallet private key
     * @param message - the message to sign
     * @returns the signed message
     *
     * @example
     * ```javascript
     * // This is the message to be signed
     * const message = "Sign this message...";
     *
     * // Now we can sign the message with the connected wallet
     * const signature = await sdk.wallet.sign(message);
     * ```
     */
    sign(message: string): Promise<string>;
    /**
     * Sign a typed data structure (EIP712) with the connected wallet private key
     * @param domain - the domain as EIP712 standard
     * @param types - the structure and data types as defined by the EIP712 standard
     * @param message - the data to sign
     * @returns the payload and its associated signature
     *
     * @example
     * ```javascript
     * // This is the message to be signed
     * // Now we can sign the message with the connected wallet
     * const { payload, signature } = await sdk.wallet.signTypedData(
     *   {
            name: "MyEIP721Domain",
            version: "1",
            chainId: 1,
            verifyingContract: "0x...",
          },
          { MyStruct: [ { name: "to", type: "address" }, { name: "quantity", type: "uint256" } ] },
          { to: "0x...", quantity: 1 },
     * );
     * ```
     */
    signTypedData(domain: EIP712Domain, types: Record<string, Array<TypedDataField>>, message: Record<string, any>): Promise<{
        payload: any;
        signature: string;
    }>;
    /**
     * Recover the signing address from a signed message
     * @param message - the original message that was signed
     * @param signature - the signature to recover the address from
     * @returns the address that signed the message
     *
     * @example
     * ```javascript
     * const message = "Sign this message...";
     * const signature = await sdk.wallet.sign(message);
     *
     * // Now we can recover the signing address
     * const address = sdk.wallet.recoverAddress(message, signature);
     * ```
     */
    recoverAddress(message: string, signature: string): Address;
    /**
     * Send a raw transaction to the blockchain from the connected wallet
     * @param transactionRequest - raw transaction data to send to the blockchain
     */
    sendRawTransaction(transactionRequest: providers.TransactionRequest): Promise<providers.TransactionResponse>;
    /**
     * Execute a raw transaction to the blockchain from the connected wallet and wait for it to be mined
     * @param transactionRequest - raw transaction data to send to the blockchain
     */
    executeRawTransaction(transactionRequest: providers.TransactionRequest): Promise<TransactionResult>;
    /**
     * Request funds from a running local node to the currently connected wallet
     * @param amount the amount in native currency (in ETH) to request
     */
    requestFunds(amount: Amount): Promise<TransactionResult>;
    /** ***********************
     * PRIVATE FUNCTIONS
     * ***********************/
    private requireWallet;
    private createErc20;
}
//# sourceMappingURL=user-wallet.d.ts.map