import { Amount } from "../../core/schema/shared";
import { CurrencyValue, TokenMetadata } from "../../core/schema/token";
import { TransactionResult } from "../types/common";
import { Metaplex } from "@metaplex-foundation/js";
import { PublicKey } from "@solana/web3.js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
/**
 * Standard token or cryptocurrency.
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Get the interface for your token program
 * const program = await sdk.getProgram("{{program_address}}", "token");
 * ```
 *
 * @public
 */
export declare class Token {
    private connection;
    private metaplex;
    private storage;
    accountType: "token";
    publicKey: PublicKey;
    get network(): import("@metaplex-foundation/js").Cluster;
    constructor(tokenAddress: string, metaplex: Metaplex, storage: ThirdwebStorage);
    /**
     * Get the metadata for this token including the name, supply, and decimals.
     * @returns Token metadata
     *
     * @example
     * ```jsx
     * const metadata = await program.getMetadata();
     * console.log(metadata.supply);
     * console.log(metadata.decimals);
     * ```
     */
    getMetadata(): Promise<TokenMetadata>;
    /**
     * Get the total minted supply of this token
     * @returns the total supply
     *
     * @example
     * ```jsx
     * const supply = await program.totalSupply();
     * ```
     */
    totalSupply(): Promise<CurrencyValue>;
    /**
     * Mints the specified amount of new tokens to the connected wallet
     * @param amount - The amount of tokens to mint
     * @returns the transaction result of the mint
     *
     * @example
     * ```jsx
     * // Specify the amount of tokens to mint
     * const amount = 1;
     * // And then you can mint the tokens
     * const tx = await program.mint(amount);
     * ```
     */
    mint(amount: Amount): Promise<TransactionResult>;
    /**
     * Mints the specified amount of new tokens to a specific wallet
     * @param amount - The amount of tokens to mint
     * @returns the transaction result of the mint
     *
     * @example
     * ```jsx
     * // Specify the address to mint tokens to
     * const address = "{{wallet_address}}"";
     * // And the amount of tokens to mint
     * const amount = 1;
     * // And then you can make a mint transaction
     * const tx = await program.mintTo(address, 1);
     * ```
     */
    mintTo(receiverAddress: string, amount: Amount): Promise<TransactionResult>;
    /**
     * Transfer the specified amount of tokens to another wallet
     * @param receiverAddress - The address to send the tokens to
     * @param amount - The amount of tokens to send
     * @returns the transaction result of the transfer
     *
     * @example
     * ```jsx
     * // Specify the address to transfer tokens to
     * const to = "...";
     * // And the amount of tokens to transfer
     * const amount = 1;
     * // And then you can make the transfer transaction
     * const tx = await program.transfer(to, amount);
     * ```
     */
    transfer(receiverAddress: string, amount: Amount): Promise<TransactionResult>;
    /**
     * Get the token balance of the connected wallet
     * @returns the currency value balance
     *
     * @example
     * ```jsx
     * const balance = await program.balance();
     * console.log(balance.displayValue);
     * ```
     */
    balance(): Promise<CurrencyValue>;
    /**
     * Get the token balance of the specified wallet
     * @param walletAddress - the wallet address to get the balance of
     * @returns the currency value balance
     *
     * @example
     * ```jsx
     * const address = "..."
     * const balance = await program.balanceOf(address);
     * console.log(balance.displayValue);
     * ```
     */
    balanceOf(walletAddress: string): Promise<CurrencyValue>;
    private getMint;
}
//# sourceMappingURL=token.d.ts.map