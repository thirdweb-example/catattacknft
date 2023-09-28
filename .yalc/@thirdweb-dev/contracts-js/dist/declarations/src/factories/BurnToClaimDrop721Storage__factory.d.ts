import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { BurnToClaimDrop721Storage, BurnToClaimDrop721StorageInterface } from "../BurnToClaimDrop721Storage.js";
type BurnToClaimDrop721StorageConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class BurnToClaimDrop721Storage__factory extends ContractFactory {
    constructor(...args: BurnToClaimDrop721StorageConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<BurnToClaimDrop721Storage>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): BurnToClaimDrop721Storage;
    connect(signer: Signer): BurnToClaimDrop721Storage__factory;
    static readonly bytecode = "0x60a6610038600b82828239805160001a607314602b57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c8063506488a6146038575b600080fd5b605e7f1910f49fec91b8db01a74019f3be20d8ae8a33debc54bfae6c4fdbf79e8d59d481565b60405190815260200160405180910390f3fea2646970667358221220c34eaa2624790185a38710e8468ec9a8944429c36d29d6a448980caf6364f65f64736f6c634300080c0033";
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
    static createInterface(): BurnToClaimDrop721StorageInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BurnToClaimDrop721Storage;
}
export {};
//# sourceMappingURL=BurnToClaimDrop721Storage__factory.d.ts.map