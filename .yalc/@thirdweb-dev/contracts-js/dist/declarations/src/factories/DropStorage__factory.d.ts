import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DropStorage, DropStorageInterface } from "../DropStorage.js";
type DropStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DropStorage__factory extends ContractFactory {
    constructor(...args: DropStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DropStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DropStorage;
    connect(signer: Signer): DropStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80637cc37151146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017fbc63558797adc09ce5b77f3ca89acfccabdd075e03de61144467402677b956b260a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea264697066735822122054a9e7c6998442396cb5dc7ac498de0ae054b41c4ce1ffdca365c60768c6a02f64736f6c634300080c0033";
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
    static createInterface(): DropStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DropStorage;
}
export {};
//# sourceMappingURL=DropStorage__factory.d.ts.map