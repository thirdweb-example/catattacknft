import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PermissionsEnumerableInit, PermissionsEnumerableInitInterface } from "../PermissionsEnumerableInit.js";
type PermissionsEnumerableInitConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PermissionsEnumerableInit__factory extends ContractFactory {
    constructor(...args: PermissionsEnumerableInitConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PermissionsEnumerableInit>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PermissionsEnumerableInit;
    connect(signer: Signer): PermissionsEnumerableInit__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220232953cdcb10d53d7bb532928245ccb7676bfaea3168cb29ee94c2e10f640e2f64736f6c634300080c0033";
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): PermissionsEnumerableInitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PermissionsEnumerableInit;
}
export {};
//# sourceMappingURL=PermissionsEnumerableInit__factory.d.ts.map