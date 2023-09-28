import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OwnableStorage, OwnableStorageInterface } from "../OwnableStorage.js";
type OwnableStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OwnableStorage__factory extends ContractFactory {
    constructor(...args: OwnableStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OwnableStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OwnableStorage;
    connect(signer: Signer): OwnableStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063f8f20d63146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017ffa02b2ade2dba28b48a24f204a68d8c0005ca2ccfd58c765cdddd023319a9b3f60a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220d3820c1d9708d02505779fad3201cef643fcdf825343be9aea8d7816fb14fb1a64736f6c634300080c0033";
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
    static createInterface(): OwnableStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OwnableStorage;
}
export {};
//# sourceMappingURL=OwnableStorage__factory.d.ts.map