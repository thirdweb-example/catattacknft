import { AsyncStorage } from "./AsyncStorage";
export declare class AsyncJsonFileStorage implements AsyncStorage {
    filePath: string;
    constructor(filePath: string);
    getItem(key: string): Promise<string | null>;
    setItem(key: string, value: string): Promise<void>;
    removeItem(key: string): Promise<void>;
}
//# sourceMappingURL=AsyncJsonFileStorage.d.ts.map