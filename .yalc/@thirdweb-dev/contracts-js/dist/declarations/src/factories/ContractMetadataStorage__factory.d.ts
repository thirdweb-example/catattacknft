import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ContractMetadataStorage, ContractMetadataStorageInterface } from "../ContractMetadataStorage.js";
type ContractMetadataStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ContractMetadataStorage__factory extends ContractFactory {
    constructor(...args: ContractMetadataStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractMetadataStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ContractMetadataStorage;
    connect(signer: Signer): ContractMetadataStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80637e837fbf146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017fa7d40346e44ca145e94a946aa34a7d4a67245577dc18699a626fe0ffc6ce328160a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220cf6aa50c3d50d80259abda3ea607145addd637c2ad05a9c7d0b436c1d9e8f49e64736f6c634300080c0033";
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
    static createInterface(): ContractMetadataStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ContractMetadataStorage;
}
export {};
//# sourceMappingURL=ContractMetadataStorage__factory.d.ts.map