import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AccountCoreStorage, AccountCoreStorageInterface } from "../AccountCoreStorage.js";
type AccountCoreStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AccountCoreStorage__factory extends ContractFactory {
    constructor(...args: AccountCoreStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AccountCoreStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AccountCoreStorage;
    connect(signer: Signer): AccountCoreStorage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80633246e210146038575b600080fd5b605e7f78603d74dd787387002a0ebde2404195d07dd9588f0016ffe10a44a12946111581565b60405190815260200160405180910390f3fea2646970667358221220a23153b4a521ba4d432bb3ddd54f024f7903eb2b69a5fcd03734549d64f0e2b764736f6c634300080c0033";
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
    static createInterface(): AccountCoreStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AccountCoreStorage;
}
export {};
//# sourceMappingURL=AccountCoreStorage__factory.d.ts.map