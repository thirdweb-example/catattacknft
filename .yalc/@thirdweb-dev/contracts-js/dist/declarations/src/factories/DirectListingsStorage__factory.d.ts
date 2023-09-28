import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DirectListingsStorage, DirectListingsStorageInterface } from "../DirectListingsStorage.js";
type DirectListingsStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DirectListingsStorage__factory extends ContractFactory {
    constructor(...args: DirectListingsStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DirectListingsStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DirectListingsStorage;
    connect(signer: Signer): DirectListingsStorage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80635475fd43146038575b600080fd5b605e7fbde2ebd6fd7bed2358dd7ed448613644a3349ac97dd3e0ae2ccd1f11b3ebe61381565b60405190815260200160405180910390f3fea2646970667358221220fe7d18ea1ffc4494cc05efe0e950b7a0c0dc598a080c3ed6604545b5cfe6148664736f6c634300080c0033";
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
    static createInterface(): DirectListingsStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DirectListingsStorage;
}
export {};
//# sourceMappingURL=DirectListingsStorage__factory.d.ts.map