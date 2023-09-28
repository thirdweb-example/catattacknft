import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SenderCreator, SenderCreatorInterface } from "../SenderCreator.js";
type SenderCreatorConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class SenderCreator__factory extends ContractFactory {
    constructor(...args: SenderCreatorConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<SenderCreator>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): SenderCreator;
    connect(signer: Signer): SenderCreator__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50610233806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063570e1a3614610030575b600080fd5b61004361003e36600461011d565b610059565b604051610050919061018f565b60405180910390f35b60008061006960148285876101a3565b610072916101cd565b60601c90507f69164a0df9992ad714a1743f4bb075b0dcea5cd42298cf7d5abfc8e17799cf1a816040516100a6919061018f565b60405180910390a160006100bd84601481886101a3565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092018290525084519495509360209350849250905082850182875af1905060005193508061011457600093505b50505092915050565b6000806020838503121561013057600080fd5b823567ffffffffffffffff8082111561014857600080fd5b818501915085601f83011261015c57600080fd5b81358181111561016b57600080fd5b86602082850101111561017d57600080fd5b60209290920196919550909350505050565b6001600160a01b0391909116815260200190565b600080858511156101b357600080fd5b838611156101c057600080fd5b5050820193919092039150565b6001600160601b031981358181169160148510156101f55780818660140360031b1b83161692505b50509291505056fea26469706673582212203b741102fe912f388a3df92643cf915e1d157676eeaa7ee75a0d545eadd9a96e64736f6c634300080c0033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): SenderCreatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SenderCreator;
}
export {};
//# sourceMappingURL=SenderCreator__factory.d.ts.map