import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC2771ContextStorage, ERC2771ContextStorageInterface } from "../ERC2771ContextStorage.js";
type ERC2771ContextStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC2771ContextStorage__factory extends ContractFactory {
    constructor(...args: ERC2771ContextStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC2771ContextStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC2771ContextStorage;
    connect(signer: Signer): ERC2771ContextStorage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063b41fd635146038575b600080fd5b605e7fa140e363058a6cf3ca062c5e378319d7ddd21cedfbdca620f1c65b05028f156c81565b60405190815260200160405180910390f3fea2646970667358221220cd0005dc2d1447c3ddd28b10f9685784633aef6799f389cbffb361f0d0333b2964736f6c634300080c0033";
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ERC2771ContextStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC2771ContextStorage;
}
export {};
//# sourceMappingURL=ERC2771ContextStorage__factory.d.ts.map