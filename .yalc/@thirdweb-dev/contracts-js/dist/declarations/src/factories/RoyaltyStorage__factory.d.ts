import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RoyaltyStorage, RoyaltyStorageInterface } from "../RoyaltyStorage.js";
type RoyaltyStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RoyaltyStorage__factory extends ContractFactory {
    constructor(...args: RoyaltyStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RoyaltyStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RoyaltyStorage;
    connect(signer: Signer): RoyaltyStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806316b1da1e146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017f995f01bd2df7283cdccde6ac870b4e9dc366a11c2005b318f39305029bc84a2360a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220e2890e78407cc00b58fad5e54637324d34e7529a49f15899ac48e2a3d386a26e64736f6c634300080c0033";
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
    static createInterface(): RoyaltyStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RoyaltyStorage;
}
export {};
//# sourceMappingURL=RoyaltyStorage__factory.d.ts.map