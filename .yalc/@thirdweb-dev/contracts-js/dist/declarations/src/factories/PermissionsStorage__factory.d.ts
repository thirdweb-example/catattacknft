import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PermissionsStorage, PermissionsStorageInterface } from "../PermissionsStorage.js";
type PermissionsStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PermissionsStorage__factory extends ContractFactory {
    constructor(...args: PermissionsStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PermissionsStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PermissionsStorage;
    connect(signer: Signer): PermissionsStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80630998ed3b146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017fd0ebebe8e6445c62babf8fef767eb39f1002bb957bb5b83258275a4e46428ed560a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220046ab3570d7b6bab6df418c759ebd3a3a14851e80a1b6be9fcf93241d88ac44864736f6c634300080c0033";
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
    static createInterface(): PermissionsStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PermissionsStorage;
}
export {};
//# sourceMappingURL=PermissionsStorage__factory.d.ts.map