export interface AsyncStorage {
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(key: string): Promise<void>;
}
export type CreateAsyncStorage = (name: string) => AsyncStorage;
export declare class AsyncLocalStorage implements AsyncStorage {
    name: string;
    constructor(name: string);
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(key: string): Promise<void>;
}
export declare function createAsyncLocalStorage(name: string): AsyncLocalStorage;
//# sourceMappingURL=AsyncStorage.d.ts.map