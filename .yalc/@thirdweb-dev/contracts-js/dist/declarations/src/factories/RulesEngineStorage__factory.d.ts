import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RulesEngineStorage, RulesEngineStorageInterface } from "../RulesEngineStorage.js";
type RulesEngineStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RulesEngineStorage__factory extends ContractFactory {
    constructor(...args: RulesEngineStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RulesEngineStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RulesEngineStorage;
    connect(signer: Signer): RulesEngineStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063ac93ae44146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017f06343399fe112adbefbb500137c8946b0202962fdcbce169cfc105e7138fde9e60a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220fd54dd969cc72e121b4f8232b08ffbd8c1f0315914e739da8741cf42d7f41a3664736f6c634300080c0033";
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
    static createInterface(): RulesEngineStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RulesEngineStorage;
}
export {};
//# sourceMappingURL=RulesEngineStorage__factory.d.ts.map