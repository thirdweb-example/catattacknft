/// <reference types="node" />
import { providers, utils } from "ethers";
declare const DEFAULT_BATCH_OPTIONS: {
    timeLimitMs: number;
    sizeLimit: number;
};
export type BatchOptions = Partial<typeof DEFAULT_BATCH_OPTIONS>;
export declare class StaticJsonRpcBatchProvider extends providers.StaticJsonRpcProvider {
    private _timeLimitMs;
    private _sizeLimit;
    _pendingBatchAggregator: NodeJS.Timer | null;
    _pendingBatch: Array<{
        request: {
            method: string;
            params: Array<any>;
            id: number;
            jsonrpc: "2.0";
        };
        resolve: (result: any) => void;
        reject: (error: Error) => void;
    }> | null;
    constructor(url: string | utils.ConnectionInfo | undefined, network: providers.Networkish | undefined, batchOptions?: BatchOptions);
    private sendCurrentBatch;
    send(method: string, params: Array<any>): Promise<any>;
}
export {};
//# sourceMappingURL=static-batch-rpc.d.ts.map