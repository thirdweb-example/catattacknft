import { UserOperationStruct } from "@account-abstraction/contracts";
export declare function toJSON(op: Partial<UserOperationStruct>): Promise<any>;
export declare function printOp(op: Partial<UserOperationStruct>): Promise<string>;
export declare function getUserOpHashV06(userOp: UserOperationStruct, entryPoint: string, chainId: number): Promise<Promise<string>>;
//# sourceMappingURL=utils.d.ts.map