import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { NonceManager, NonceManagerInterface } from "../NonceManager.js";
type NonceManagerConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class NonceManager__factory extends ContractFactory {
    constructor(...args: NonceManagerConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<NonceManager>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): NonceManager;
    connect(signer: Signer): NonceManager__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506101f7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80630bd28e3b146100465780631b2e01b81461005b57806335567e1a14610095575b600080fd5b610059610054366004610135565b6100e4565b005b610083610069366004610157565b600060208181529281526040808220909352908152205481565b60405190815260200160405180910390f35b6100836100a3366004610157565b6001600160a01b03919091166000908152602081815260408083206001600160c01b0385168452909152908190205491901b67ffffffffffffffff19161790565b336000908152602081815260408083206001600160c01b0385168452909152812080549161011183610198565b919050555050565b80356001600160c01b038116811461013057600080fd5b919050565b60006020828403121561014757600080fd5b61015082610119565b9392505050565b6000806040838503121561016a57600080fd5b82356001600160a01b038116811461018157600080fd5b915061018f60208401610119565b90509250929050565b60006000198214156101ba57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220ca0f2f074999113236e8f0af64bb6e1904df04eafa7f00bd6acf8773c1dbf25164736f6c634300080c0033";
    static readonly abi: {
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
    }[];
    static createInterface(): NonceManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NonceManager;
}
export {};
//# sourceMappingURL=NonceManager__factory.d.ts.map