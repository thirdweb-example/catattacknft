import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ReentrancyGuardInit, ReentrancyGuardInitInterface } from "../ReentrancyGuardInit.js";
type ReentrancyGuardInitConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ReentrancyGuardInit__factory extends ContractFactory {
    constructor(...args: ReentrancyGuardInitConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ReentrancyGuardInit>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ReentrancyGuardInit;
    connect(signer: Signer): ReentrancyGuardInit__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212208898083a376a58a363c7a3500c0386f7645c1b9d52ddf48dbceae80a77a4b6a464736f6c634300080c0033";
    static readonly abi: {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
    }[];
    static createInterface(): ReentrancyGuardInitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ReentrancyGuardInit;
}
export {};
//# sourceMappingURL=ReentrancyGuardInit__factory.d.ts.map