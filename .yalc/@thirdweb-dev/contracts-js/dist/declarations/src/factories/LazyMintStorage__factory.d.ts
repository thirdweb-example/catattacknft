import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LazyMintStorage, LazyMintStorageInterface } from "../LazyMintStorage.js";
type LazyMintStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LazyMintStorage__factory extends ContractFactory {
    constructor(...args: LazyMintStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<LazyMintStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): LazyMintStorage;
    connect(signer: Signer): LazyMintStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063806dca6a146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017f92537d05302af3ef54893b12b582cebc030ae5040232486c845548650ed2a83160a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220df328a917a60d7d866e53b3c41a0089ab3a83167d69582c53017a7d114c0af8064736f6c634300080c0033";
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
    static createInterface(): LazyMintStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LazyMintStorage;
}
export {};
//# sourceMappingURL=LazyMintStorage__factory.d.ts.map