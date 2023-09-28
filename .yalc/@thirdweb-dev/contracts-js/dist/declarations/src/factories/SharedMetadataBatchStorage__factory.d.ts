import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SharedMetadataBatchStorage, SharedMetadataBatchStorageInterface } from "../SharedMetadataBatchStorage.js";
type SharedMetadataBatchStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SharedMetadataBatchStorage__factory extends ContractFactory {
    constructor(...args: SharedMetadataBatchStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SharedMetadataBatchStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SharedMetadataBatchStorage;
    connect(signer: Signer): SharedMetadataBatchStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063a361dc9a146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017f245e18f96214f626aaaf765d96037f1acb9d01181947dfdac9167552874d452560a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220c7b72c2d8edc140e8c43c16250009f474f8dbb85cbb02d426290012f6d13e94b64736f6c634300080c0033";
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
    static createInterface(): SharedMetadataBatchStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SharedMetadataBatchStorage;
}
export {};
//# sourceMappingURL=SharedMetadataBatchStorage__factory.d.ts.map