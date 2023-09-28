import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PermissionsEnumerableStorage, PermissionsEnumerableStorageInterface } from "../PermissionsEnumerableStorage.js";
type PermissionsEnumerableStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PermissionsEnumerableStorage__factory extends ContractFactory {
    constructor(...args: PermissionsEnumerableStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PermissionsEnumerableStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PermissionsEnumerableStorage;
    connect(signer: Signer): PermissionsEnumerableStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063871ef69d146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017f0c4ba382c0009cf238e4c1ca1a52f51c61e6248a70bdfb34e5ed49d5578a5c0c60a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea26469706673582212205b52696b241082bd1d4d7fa270405921e4b2248c693eba117a6d1b9bd6542c6164736f6c634300080c0033";
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
    static createInterface(): PermissionsEnumerableStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PermissionsEnumerableStorage;
}
export {};
//# sourceMappingURL=PermissionsEnumerableStorage__factory.d.ts.map