import { CurrencyValue } from "../../core/schema/token";
import { WalletSigner } from "../types/common";
import { Metaplex, Signer } from "@metaplex-foundation/js";
import { SignaturesForAddressOptions, TransactionResponse } from "@solana/web3.js";
import EventEmitter from "eventemitter3";
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
    connected: [WalletSigner];
    /**
     * Emitted when `sdk.wallet.disconnect()` is called.
     */
    disconnected: void;
}
/**
 * Handle and view info about the wallet connected to the SDK.
 *
 * @example
 * ```jsx
 * // Connect a wallet to the SDK, pass in a keypair or browser wallet adapter
 * sdk.wallet.connect(signer)
 *
 * // Then you can read data about the connected wallet
 * const address = sdk.wallet.getAddress();
 * ```
 *
 * @public
 */
export declare class UserWallet {
    signer: Signer | undefined;
    events: EventEmitter<UserWalletEvents, any>;
    private metaplex;
    get network(): import("@metaplex-foundation/js").Cluster;
    constructor(metaplex: Metaplex);
    /**
     * Connect a signer to the SDK. Can pass in a keypair or browser wallet adapter
     * @param wallet - The signer to connect to the SDK
     *
     * @example
     * ```jsx
     * const signer = Keypair.generate();
     * sdk.wallet.connect(signer);
     * ```
     */
    connect(wallet: WalletSigner): void;
    /**
     * Disconnect the connected wallet from the SDK
     *
     * @example
     * ```jsx
     * sdk.wallet.disconnect();
     * ```
     */
    disconnect(): void;
    /**
     * Return whether a wallet is connected
     */
    isConnected(): boolean;
    /**
     * Get the address of the connected wallet
     * @returns the address of the connected wallet
     *
     * @example
     * ```jsx
     * const address = sdk.wallet.getAddress()
     * ```
     */
    getAddress(): string | undefined;
    /**
     * Get the connected signer
     * @returns the signer
     *
     * @example
     * ```jsx
     * const signer = sdk.wallet.getSigner()
     * ```
     */
    getSigner(): import("@metaplex-foundation/js").IdentityClient;
    sign(message: string): Promise<string>;
    verifySignature(message: string, signature: string, publicKey: string): boolean;
    /**
     * Get the native balance of the connected wallet
     * @returns the native balance currency value
     *
     * @example
     * ```jsx
     * const balance = await sdk.wallet.getBalance();
     * console.log(balance.displayValue);
     * ```
     */
    getBalance(): Promise<CurrencyValue>;
    /**
     * Get the all transactions for this program
     * @beta
     */
    getTransactions(options?: SignaturesForAddressOptions): Promise<TransactionResponse[]>;
    private connectToMetaplex;
}
//# sourceMappingURL=user-wallet.d.ts.map