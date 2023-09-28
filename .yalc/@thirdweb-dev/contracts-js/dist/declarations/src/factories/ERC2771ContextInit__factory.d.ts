import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC2771ContextInit, ERC2771ContextInitInterface } from "../ERC2771ContextInit.js";
type ERC2771ContextInitConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC2771ContextInit__factory extends ContractFactory {
    constructor(...args: ERC2771ContextInitConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC2771ContextInit>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC2771ContextInit;
    connect(signer: Signer): ERC2771ContextInit__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220da5721472e31c003cacf2b4f72134638106f20f3a636868d8be41ef61228c19d64736f6c634300080c0033";
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
    static createInterface(): ERC2771ContextInitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC2771ContextInit;
}
export {};
//# sourceMappingURL=ERC2771ContextInit__factory.d.ts.map