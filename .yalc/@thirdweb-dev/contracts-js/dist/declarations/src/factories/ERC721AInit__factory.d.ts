import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { ERC721AInit, ERC721AInitInterface } from "../ERC721AInit.js";
type ERC721AInitConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class ERC721AInit__factory extends ContractFactory {
    constructor(...args: ERC721AInitConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<ERC721AInit>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): ERC721AInit;
    connect(signer: Signer): ERC721AInit__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220a5f579de9905d2babc25de05881ba59f34c4c716ab44186d2e7ce9f0db981ba464736f6c634300080c0033";
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
    static createInterface(): ERC721AInitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC721AInit;
}
export {};
//# sourceMappingURL=ERC721AInit__factory.d.ts.map