import { AsyncStorage } from "./AsyncStorage";
export declare class CredentialsStorage implements AsyncStorage {
    getItem(): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(): Promise<void>;
}
//# sourceMappingURL=CredentialsStorage.d.ts.map