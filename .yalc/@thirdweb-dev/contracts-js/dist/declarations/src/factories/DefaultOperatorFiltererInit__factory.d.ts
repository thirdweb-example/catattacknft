import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DefaultOperatorFiltererInit, DefaultOperatorFiltererInitInterface } from "../DefaultOperatorFiltererInit.js";
type DefaultOperatorFiltererInitConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class DefaultOperatorFiltererInit__factory extends ContractFactory {
    constructor(...args: DefaultOperatorFiltererInitConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<DefaultOperatorFiltererInit>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): DefaultOperatorFiltererInit;
    connect(signer: Signer): DefaultOperatorFiltererInit__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220c2c4c24702796d1d4384b310d88bad1b856deb7cee7bcb960a64eeac62a58dd464736f6c634300080c0033";
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
    static createInterface(): DefaultOperatorFiltererInitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DefaultOperatorFiltererInit;
}
export {};
//# sourceMappingURL=DefaultOperatorFiltererInit__factory.d.ts.map