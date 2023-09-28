import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BatchMintMetadataStorage, BatchMintMetadataStorageInterface } from "../BatchMintMetadataStorage.js";
type BatchMintMetadataStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BatchMintMetadataStorage__factory extends ContractFactory {
    constructor(...args: BatchMintMetadataStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BatchMintMetadataStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BatchMintMetadataStorage;
    connect(signer: Signer): BatchMintMetadataStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063ff774135146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017f2b9315c4a5504b910af96088bc63fb8f61ff2bb46e94fb4b0cb67ad1915c33ac60a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220ec414f5398e0c81598d6e07782e17e3403df8d94fa627223d0dfe570e5783c7364736f6c634300080c0033";
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
    static createInterface(): BatchMintMetadataStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BatchMintMetadataStorage;
}
export {};
//# sourceMappingURL=BatchMintMetadataStorage__factory.d.ts.map