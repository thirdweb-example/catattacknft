export interface SyncStorage {
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
export declare class LocalStorage implements SyncStorage {
    name: string;
    constructor(name: string);
    getItem(key: string): string | null;
    setItem(key: string, value: string): void;
    removeItem(key: string): void;
}
export declare function createLocalStorage(name: string): LocalStorage;
//# sourceMappingURL=SyncStorage.d.ts.map