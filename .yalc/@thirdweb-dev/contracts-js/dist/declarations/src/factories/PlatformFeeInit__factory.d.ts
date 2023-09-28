import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PlatformFeeInit, PlatformFeeInitInterface } from "../PlatformFeeInit.js";
type PlatformFeeInitConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PlatformFeeInit__factory extends ContractFactory {
    constructor(...args: PlatformFeeInitConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<PlatformFeeInit>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): PlatformFeeInit;
    connect(signer: Signer): PlatformFeeInit__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea264697066735822122073e0eb391eed7cb1127554a1c2f3858bf2a425078f21a862c026eab69ef629c864736f6c634300080c0033";
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
    static createInterface(): PlatformFeeInitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PlatformFeeInit;
}
export {};
//# sourceMappingURL=PlatformFeeInit__factory.d.ts.map