import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OperatorFilterToggleStorage, OperatorFilterToggleStorageInterface } from "../OperatorFilterToggleStorage.js";
type OperatorFilterToggleStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class OperatorFilterToggleStorage__factory extends ContractFactory {
    constructor(...args: OperatorFilterToggleStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<OperatorFilterToggleStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): OperatorFilterToggleStorage;
    connect(signer: Signer): OperatorFilterToggleStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063c73bab18146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017f54378f4d3b8673acfc5119539edbb9597399240ea9418c2c01cf8d1dcb71133c60a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220223b4662a503fabff0dd0dd84e1c05e22a03d17743426a5b07081aad22b61e5864736f6c634300080c0033";
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
    static createInterface(): OperatorFilterToggleStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OperatorFilterToggleStorage;
}
export {};
//# sourceMappingURL=OperatorFilterToggleStorage__factory.d.ts.map