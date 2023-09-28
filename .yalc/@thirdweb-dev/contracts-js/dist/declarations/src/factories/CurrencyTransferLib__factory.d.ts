import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CurrencyTransferLib, CurrencyTransferLibInterface } from "../CurrencyTransferLib.js";
type CurrencyTransferLibConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class CurrencyTransferLib__factory extends ContractFactory {
    constructor(...args: CurrencyTransferLibConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<CurrencyTransferLib>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): CurrencyTransferLib;
    connect(signer: Signer): CurrencyTransferLib__factory;
    static readonly bytecode = "0x60a4610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806331f7d964146038575b600080fd5b605273eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee81565b6040516001600160a01b03909116815260200160405180910390f3fea2646970667358221220d04ed5550d578836c100913c9c7c01fef431a021ca90653a51dd5ebfb55cf3e464736f6c634300080c0033";
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
    static createInterface(): CurrencyTransferLibInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): CurrencyTransferLib;
}
export {};
//# sourceMappingURL=CurrencyTransferLib__factory.d.ts.map