import { UserOperationStruct } from "@account-abstraction/contracts";
export declare class HttpRpcClient {
    private readonly userOpJsonRpcProvider;
    initializing: Promise<void>;
    bundlerUrl: string;
    entryPointAddress: string;
    chainId: number;
    constructor(bundlerUrl: string, entryPointAddress: string, chainId: number, clientId?: string, secretKey?: string);
    validateChainId(): Promise<void>;
    /**
     * send a UserOperation to the bundler
     * @param userOp1
     * @return userOpHash the id of this operation, for getUserOperationTransaction
     */
    sendUserOpToBundler(userOp1: UserOperationStruct): Promise<string>;
    estimateUserOpGas(userOp1: Partial<UserOperationStruct>): Promise<string>;
    private printUserOperation;
}
//# sourceMappingURL=http-rpc-client.d.ts.map