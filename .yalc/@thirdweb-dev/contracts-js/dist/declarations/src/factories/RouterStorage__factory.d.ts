import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RouterStorage, RouterStorageInterface } from "../RouterStorage.js";
type RouterStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RouterStorage__factory extends ContractFactory {
    constructor(...args: RouterStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RouterStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RouterStorage;
    connect(signer: Signer): RouterStorage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80632be9b20e146038575b600080fd5b605e7f1a3e4131826bb378aa43abb34a33a366bc4a35b55ab18a884fa205b59285ec4581565b60405190815260200160405180910390f3fea2646970667358221220f94da041b33d0403b1c64d78055e48f5fb96ef672c6994450ef4bb9ff3df214c64736f6c634300080c0033";
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
    static createInterface(): RouterStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RouterStorage;
}
export {};
//# sourceMappingURL=RouterStorage__factory.d.ts.map