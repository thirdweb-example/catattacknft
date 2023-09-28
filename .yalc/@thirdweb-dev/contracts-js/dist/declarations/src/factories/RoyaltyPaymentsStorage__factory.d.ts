import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RoyaltyPaymentsStorage, RoyaltyPaymentsStorageInterface } from "../RoyaltyPaymentsStorage.js";
type RoyaltyPaymentsStorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RoyaltyPaymentsStorage__factory extends ContractFactory {
    constructor(...args: RoyaltyPaymentsStorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RoyaltyPaymentsStorage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RoyaltyPaymentsStorage;
    connect(signer: Signer): RoyaltyPaymentsStorage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80638fbd80b4146038575b600080fd5b605e7f17ec2627eb32e0c3a5722cf50101ec0f1d5211bb579b516415b50d4ac1f525db81565b60405190815260200160405180910390f3fea2646970667358221220076a3c6525c972dd300aab67723c5a885b04b42eb0729efd0b04e2b55fd96dff64736f6c634300080c0033";
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
    static createInterface(): RoyaltyPaymentsStorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RoyaltyPaymentsStorage;
}
export {};
//# sourceMappingURL=RoyaltyPaymentsStorage__factory.d.ts.map