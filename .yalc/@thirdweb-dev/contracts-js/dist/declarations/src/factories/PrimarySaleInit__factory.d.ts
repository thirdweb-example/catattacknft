import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PrimarySaleInit, PrimarySaleInitInterface } from "../PrimarySaleInit.js";
type PrimarySaleInitConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PrimarySaleInit__factory extends ContractFactory {
    constructor(...args: PrimarySaleInitConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PrimarySaleInit>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PrimarySaleInit;
    connect(signer: Signer): PrimarySaleInit__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220e5e3dc817aac6b9a2f1c9c7f086eadc819fee4efa35d020c06d51168cf32103064736f6c634300080c0033";
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
    static createInterface(): PrimarySaleInitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PrimarySaleInit;
}
export {};
//# sourceMappingURL=PrimarySaleInit__factory.d.ts.map