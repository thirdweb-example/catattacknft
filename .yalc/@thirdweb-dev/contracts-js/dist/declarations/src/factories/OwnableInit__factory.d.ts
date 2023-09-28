import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OwnableInit, OwnableInitInterface } from "../OwnableInit.js";
type OwnableInitConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OwnableInit__factory extends ContractFactory {
    constructor(...args: OwnableInitConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OwnableInit>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OwnableInit;
    connect(signer: Signer): OwnableInit__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220591920706530bbc30513716cdec479dbeec449798e8db625c80247b0640c4d9564736f6c634300080c0033";
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
    static createInterface(): OwnableInitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OwnableInit;
}
export {};
//# sourceMappingURL=OwnableInit__factory.d.ts.map