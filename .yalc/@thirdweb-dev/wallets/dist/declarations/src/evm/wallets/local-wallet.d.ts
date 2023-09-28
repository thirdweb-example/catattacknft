import { AsyncStorage } from "../../core";
import { Connector } from "../interfaces/connector";
import { AbstractClientWallet, WalletOptions } from "./base";
import { Chain } from "@thirdweb-dev/chains";
import { Wallet } from "ethers";
export type LocalWalletOptions = {
    chain?: Chain;
    storage?: AsyncStorage;
    secretKey?: string;
};
export type WalletData = {
    address: string;
    strategy: "mnemonic" | "privateKey" | "encryptedJson";
    data: string;
    isEncrypted: boolean;
};
export type LocalWalletConnectionArgs = {};
export declare class LocalWallet extends AbstractClientWallet<LocalWalletOptions, LocalWalletConnectionArgs> {
    #private;
    connector?: Connector;
    options: WalletOptions<LocalWalletOptions>;
    ethersWallet?: Wallet;
    static id: string;
    static meta: {
        name: string;
        iconURL: string;
    };
    get walletName(): "Local Wallet";
    constructor(options?: WalletOptions<LocalWalletOptions>);
    protected getConnector(): Promise<Connector>;
    /**
     * load saved wallet data from storage or generate a new one and save it.
     */
    loadOrCreate(options: LoadOrCreateOptions): Promise<void>;
    /**
     * creates a new random wallet
     * @returns the address of the newly created wallet
     */
    generate(): Promise<string>;
    /**
     * create local wallet from an "encryptedJson", "privateKey" or "mnemonic"
     * @returns
     */
    import(options: ImportOptions): Promise<string>;
    /**
     * initialize the wallet from saved data on storage
     * @param password - password used for encrypting the wallet
     */
    load(options: LoadOptions): Promise<string>;
    /**
     * Save the wallet data to storage
     */
    save(options: SaveOptions): Promise<void>;
    /**
     * @returns true if initialized wallet's data is saved in storage
     */
    isSaved(): Promise<boolean>;
    /**
     * deletes the saved wallet data from storage
     */
    deleteSaved(): Promise<void>;
    /**
     * encrypts the wallet with given password and returns the encrypted wallet
     * @param password - password for encrypting the wallet data
     */
    export(options: ExportOptions): Promise<string>;
    /**
     * Get the saved wallet data from storage
     */
    getSavedData(storage?: AsyncStorage): Promise<WalletData | null>;
    disconnect(): Promise<void>;
}
type DecryptOptions = {
    decrypt?: (message: string, password: string) => Promise<string>;
    password: string;
} | false;
type EncryptOptions = {
    encrypt?: (message: string, password: string) => Promise<string>;
    password: string;
} | false;
type ImportOptions = {
    privateKey: string;
    encryption: DecryptOptions;
} | {
    mnemonic: string;
    encryption: DecryptOptions;
} | {
    encryptedJson: string;
    password: string;
};
type LoadOptions = {
    strategy: "encryptedJson";
    password: string;
    storage?: AsyncStorage;
} | {
    strategy: "privateKey";
    storage?: AsyncStorage;
    encryption: DecryptOptions;
} | {
    strategy: "mnemonic";
    storage?: AsyncStorage;
    encryption: DecryptOptions;
};
type LoadOrCreateOptions = {
    strategy: "encryptedJson";
    password: string;
    storage?: AsyncStorage;
} | {
    strategy: "privateKey";
    storage?: AsyncStorage;
    encryption: DecryptOptions;
};
type SaveOptions = {
    strategy: "encryptedJson";
    password: string;
    storage?: AsyncStorage;
} | {
    strategy: "privateKey";
    encryption: EncryptOptions;
    storage?: AsyncStorage;
} | {
    strategy: "mnemonic";
    encryption: EncryptOptions;
    storage?: AsyncStorage;
};
type ExportOptions = {
    strategy: "encryptedJson";
    password: string;
} | {
    strategy: "privateKey";
    encryption: EncryptOptions;
} | {
    strategy: "mnemonic";
    encryption: EncryptOptions;
};
export declare function isValidPrivateKey(value: string): boolean;
export {};
//# sourceMappingURL=local-wallet.d.ts.map