import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PrimarySaleStorage, PrimarySaleStorageInterface } from "../PrimarySaleStorage.js";
type PrimarySaleStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PrimarySaleStorage__factory extends ContractFactory {
    constructor(...args: PrimarySaleStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PrimarySaleStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PrimarySaleStorage;
    connect(signer: Signer): PrimarySaleStorage__factory;
    static readonly bytecode = "0x60fd610039600b82828239805160001a60731461002c57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063b5f4ee27146038575b600080fd5b603e6050565b60405190815260200160405180910390f35b607960017f52513acdf273074fe51c68a52514ea5eabc2d36eb91435d5799fc3f9adc3053060a3565b604051602001608a91815260200190565b6040516020818303038152906040528051906020012081565b60008282101560c257634e487b7160e01b600052601160045260246000fd5b50039056fea2646970667358221220db0719acadba26b98bce635737e7747bf4210974c74b90492b6d715e5afa617e64736f6c634300080c0033";
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
    static createInterface(): PrimarySaleStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PrimarySaleStorage;
}
export {};
//# sourceMappingURL=PrimarySaleStorage__factory.d.ts.map