import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReentrancyGuardStorage, ReentrancyGuardStorageInterface } from "../ReentrancyGuardStorage.js";
type ReentrancyGuardStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReentrancyGuardStorage__factory extends ContractFactory {
    constructor(...args: ReentrancyGuardStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ReentrancyGuardStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ReentrancyGuardStorage;
    connect(signer: Signer): ReentrancyGuardStorage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063984b83ff146038575b600080fd5b605e7fbbf78d3411d42a81effd97bb8c69faae4e77e75cec462245c1001191a0634c6f81565b60405190815260200160405180910390f3fea264697066735822122074ce1f01c9581e644769cbe8d0a94d66fcb38c8fca9adc10130f2ef75dd4134a64736f6c634300080c0033";
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
    static createInterface(): ReentrancyGuardStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReentrancyGuardStorage;
}
export {};
//# sourceMappingURL=ReentrancyGuardStorage__factory.d.ts.map