export declare class LocalStorage {
    protected isSupported: boolean;
    protected clientId: string;
    constructor({ clientId }: {
        clientId: string;
    });
    protected getItem(key: string): Promise<string | null>;
    protected setItem(key: string, value: string): Promise<void>;
    protected removeItem(key: string): Promise<boolean>;
    saveAuthCookie(cookie: string): Promise<void>;
    getAuthCookie(): Promise<string | null>;
    removeAuthCookie(): Promise<boolean>;
    saveDeviceShare(share: string, userId: string): Promise<void>;
    getDeviceShare(): Promise<string | null>;
    removeDeviceShare(): Promise<boolean>;
    getWalletUserId(): Promise<string | null>;
    saveWalletUserId(userId: string): Promise<void>;
    removeWalletUserId(): Promise<boolean>;
}
//# sourceMappingURL=LocalStorage.d.ts.map