import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OffersStorage, OffersStorageInterface } from "../OffersStorage.js";
type OffersStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OffersStorage__factory extends ContractFactory {
    constructor(...args: OffersStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OffersStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OffersStorage;
    connect(signer: Signer): OffersStorage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80634195eef1146038575b600080fd5b605e7fe4435c80c9874d455ad2136af47d67165644bb851fd208179d93e973f0624ca981565b60405190815260200160405180910390f3fea2646970667358221220be03e0e0681260d613e293ba53e34f0c3d3d710c019f3679a6af4bfaa94ccd4064736f6c634300080c0033";
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
    static createInterface(): OffersStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OffersStorage;
}
export {};
//# sourceMappingURL=OffersStorage__factory.d.ts.map