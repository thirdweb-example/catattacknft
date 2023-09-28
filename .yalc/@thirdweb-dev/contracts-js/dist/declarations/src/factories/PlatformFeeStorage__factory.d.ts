import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PlatformFeeStorage, PlatformFeeStorageInterface } from "../PlatformFeeStorage.js";
type PlatformFeeStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PlatformFeeStorage__factory extends ContractFactory {
    constructor(...args: PlatformFeeStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PlatformFeeStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PlatformFeeStorage;
    connect(signer: Signer): PlatformFeeStorage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806327789ec8146038575b600080fd5b605e7f4aeb3f25cc46659cf4e4966e5c48b11e9400e6e4bfafae7e3dc6cc3fbc858deb81565b60405190815260200160405180910390f3fea26469706673582212207b84ce94e961eb6cf786bd2ea6a14fa5aaf71ad44d7c553e857b3906173a672164736f6c634300080c0033";
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
    static createInterface(): PlatformFeeStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PlatformFeeStorage;
}
export {};
//# sourceMappingURL=PlatformFeeStorage__factory.d.ts.map