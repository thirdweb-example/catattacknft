import { PaymasterAPI } from "@account-abstraction/sdk";
import { UserOperationStruct } from "@account-abstraction/contracts";
export declare const SIG_SIZE = 65;
export declare const DUMMY_PAYMASTER_AND_DATA = "0x0101010101010101010101010101010101010101000000000000000000000000000000000000000000000000000001010101010100000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101";
declare class VerifyingPaymasterAPI extends PaymasterAPI {
    private paymasterUrl;
    private entryPoint;
    private clientId?;
    private secretKey?;
    constructor(paymasterUrl: string, entryPoint: string, clientId?: string, secretKey?: string);
    getPaymasterAndData(userOp: Partial<UserOperationStruct>): Promise<string>;
}
export declare const getVerifyingPaymaster: (paymasterUrl: string, entryPoint: string, clientId?: string, secretKey?: string) => VerifyingPaymasterAPI;
export {};
//# sourceMappingURL=paymaster.d.ts.map