import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ContractMetadataInit, ContractMetadataInitInterface } from "../ContractMetadataInit.js";
type ContractMetadataInitConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ContractMetadataInit__factory extends ContractFactory {
    constructor(...args: ContractMetadataInitConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ContractMetadataInit>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ContractMetadataInit;
    connect(signer: Signer): ContractMetadataInit__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220c3944bdf59de7156764edc7e955916d8588258b7b1f870cca2372179a7af563864736f6c634300080c0033";
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
    static createInterface(): ContractMetadataInitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ContractMetadataInit;
}
export {};
//# sourceMappingURL=ContractMetadataInit__factory.d.ts.map