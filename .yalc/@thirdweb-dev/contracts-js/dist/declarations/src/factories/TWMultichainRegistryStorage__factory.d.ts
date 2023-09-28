import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TWMultichainRegistryStorage, TWMultichainRegistryStorageInterface } from "../TWMultichainRegistryStorage.js";
type TWMultichainRegistryStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class TWMultichainRegistryStorage__factory extends ContractFactory {
    constructor(...args: TWMultichainRegistryStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<TWMultichainRegistryStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): TWMultichainRegistryStorage;
    connect(signer: Signer): TWMultichainRegistryStorage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063a53a5e53146038575b600080fd5b605e7f76e06728d0dcf293a9eaf59ec8b2eedd2b5c467a2521e176b50617c0c2448e2681565b60405190815260200160405180910390f3fea2646970667358221220ad2ac5b14d0f481bfabee090f137882950bc69e910853ea8283a118c10901a1b64736f6c634300080c0033";
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
    static createInterface(): TWMultichainRegistryStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TWMultichainRegistryStorage;
}
export {};
//# sourceMappingURL=TWMultichainRegistryStorage__factory.d.ts.map