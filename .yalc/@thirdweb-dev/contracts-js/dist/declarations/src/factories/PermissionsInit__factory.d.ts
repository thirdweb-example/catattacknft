import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PermissionsInit, PermissionsInitInterface } from "../PermissionsInit.js";
type PermissionsInitConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PermissionsInit__factory extends ContractFactory {
    constructor(...args: PermissionsInitConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PermissionsInit>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PermissionsInit;
    connect(signer: Signer): PermissionsInit__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220e647c6533590e073aa4d24f34c2cdcb96454c0512b3b33b4bea953a44ff2437b64736f6c634300080c0033";
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
    static createInterface(): PermissionsInitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PermissionsInit;
}
export {};
//# sourceMappingURL=PermissionsInit__factory.d.ts.map