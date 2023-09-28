import { BigNumberish, providers } from "ethers";
import { EntryPoint } from "@account-abstraction/contracts";
/**
 * This class encapsulates Ethers.js listener function and necessary UserOperation details to
 * discover a TransactionReceipt for the operation.
 *
 * TODO refactor this to a simple event listener on the entry point
 */
export declare class UserOperationEventListener {
    readonly resolve: (t: providers.TransactionReceipt) => void;
    readonly reject: (reason?: any) => void;
    readonly entryPoint: EntryPoint;
    readonly sender: string;
    readonly userOpHash: string;
    readonly nonce?: BigNumberish | undefined;
    readonly timeout?: number | undefined;
    resolved: boolean;
    boundLisener: (this: any, ...param: any) => void;
    constructor(resolve: (t: providers.TransactionReceipt) => void, reject: (reason?: any) => void, entryPoint: EntryPoint, sender: string, userOpHash: string, nonce?: BigNumberish | undefined, timeout?: number | undefined);
    start(): void;
    stop(): void;
    listenerCallback(this: any, ...param: any): Promise<void>;
    extractFailureReason(receipt: providers.TransactionReceipt): Promise<void>;
}
//# sourceMappingURL=userop-event.d.ts.map