import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BurnToClaimStorage, BurnToClaimStorageInterface } from "../BurnToClaimStorage.js";
type BurnToClaimStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BurnToClaimStorage__factory extends ContractFactory {
    constructor(...args: BurnToClaimStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BurnToClaimStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BurnToClaimStorage;
    connect(signer: Signer): BurnToClaimStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80638670809d146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017fbd73abf3566bad3a8b3162594ba9fca3ad3c2a2e9b650442ad3741177cc9233e60a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea264697066735822122045aca5f588aac20aad4ba2fa66e72bedd798b743be61c8aec69cede7dec6220e64736f6c634300080c0033";
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
    static createInterface(): BurnToClaimStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BurnToClaimStorage;
}
export {};
//# sourceMappingURL=BurnToClaimStorage__factory.d.ts.map