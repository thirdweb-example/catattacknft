import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DelayedRevealStorage, DelayedRevealStorageInterface } from "../DelayedRevealStorage.js";
type DelayedRevealStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DelayedRevealStorage__factory extends ContractFactory {
    constructor(...args: DelayedRevealStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DelayedRevealStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DelayedRevealStorage;
    connect(signer: Signer): DelayedRevealStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80631c46bf9c146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017f5a931efe29bc5aac3b2104f3d22aa57ffd5882b744fbcd4ab53728e57cea156360a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220b0fe87fdad91878195e7784e17f66557909392f702cb75b8a842feac2cd7c45164736f6c634300080c0033";
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
    static createInterface(): DelayedRevealStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DelayedRevealStorage;
}
export {};
//# sourceMappingURL=DelayedRevealStorage__factory.d.ts.map