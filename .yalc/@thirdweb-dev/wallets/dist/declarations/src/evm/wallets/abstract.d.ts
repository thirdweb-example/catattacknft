import { EVMWallet } from "../interfaces";
import type { Signer } from "ethers";
import { Bytes, BigNumber } from "ethers";
import EventEmitter from "eventemitter3";
import { Ecosystem, GenericAuthWallet } from "../../core/interfaces/auth";
import { Price, TransactionResult } from "@thirdweb-dev/sdk";
export type WalletData = {
    address?: string;
    chainId?: number;
};
export interface WalletEvents {
    connect(data: WalletData): void;
    change(data: WalletData): void;
    message({ type, data }: {
        type: string;
        data?: unknown;
    }): void;
    disconnect(): void;
    error(error: Error): void;
    display_uri(uri: string): void;
    wc_session_request_sent(): void;
    request(): void;
}
export declare function checkContractWalletSignature(message: string, signature: string, address: string, chainId: number): Promise<boolean>;
export declare abstract class AbstractWallet extends EventEmitter<WalletEvents> implements GenericAuthWallet, EVMWallet {
    type: Ecosystem;
    abstract getSigner(): Promise<Signer>;
    /**
     * @returns the account address from connected wallet
     */
    getAddress(): Promise<string>;
    /**
     * @returns the native token balance of the connected wallet
     */
    getBalance(currencyAddress?: string): Promise<{
        symbol: string;
        value: BigNumber;
        name: string;
        decimals: number;
        displayValue: string;
    }>;
    /**
     * @returns the chain id from connected wallet
     */
    getChainId(): Promise<number>;
    transfer(to: string, amount: Price, currencyAddress?: string): Promise<TransactionResult>;
    /**
     * @returns the signature of the message
     */
    signMessage(message: Bytes | string): Promise<string>;
    /**
     * verify the signature of a message
     * @returns `true` if the signature is valid, `false` otherwise
     */
    verifySignature(message: string, signature: string, address: string, chainId?: number): Promise<boolean>;
}
//# sourceMappingURL=abstract.d.ts.map