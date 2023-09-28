import type { DeployTransaction, Transaction } from "../core/classes/transactions";
import type { TransactionResult } from "../core/types";
export declare function buildDeployTransactionFunction<TArgs extends any[]>(fn: (...args: TArgs) => Promise<DeployTransaction>): {
    (...args: TArgs): Promise<string>;
    prepare: (...args: TArgs) => Promise<DeployTransaction>;
};
export declare function buildTransactionFunction<TArgs extends any[], TResult = TransactionResult>(fn: (...args: TArgs) => Promise<Transaction<TResult>>): {
    (...args: TArgs): Promise<TResult>;
    prepare: (...args: TArgs) => Promise<Transaction<TResult>>;
};
//# sourceMappingURL=transactions.d.ts.map