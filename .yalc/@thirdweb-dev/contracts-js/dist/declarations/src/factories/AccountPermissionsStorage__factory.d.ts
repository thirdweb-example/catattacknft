import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { AccountPermissionsStorage, AccountPermissionsStorageInterface } from "../AccountPermissionsStorage.js";
type AccountPermissionsStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AccountPermissionsStorage__factory extends ContractFactory {
    constructor(...args: AccountPermissionsStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<AccountPermissionsStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): AccountPermissionsStorage;
    connect(signer: Signer): AccountPermissionsStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806376a00512146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017ff2776159535489b2c8217c06dac58993e45cb245272f968642d4d3ef6aa7615060a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea26469706673582212206da5236309c999070d8657c1d8555584b37128492d9b7f27f13f83ed29a55d2464736f6c634300080c0033";
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
    static createInterface(): AccountPermissionsStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AccountPermissionsStorage;
}
export {};
//# sourceMappingURL=AccountPermissionsStorage__factory.d.ts.map