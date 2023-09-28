import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RoyaltyInit, RoyaltyInitInterface } from "../RoyaltyInit.js";
type RoyaltyInitConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class RoyaltyInit__factory extends ContractFactory {
    constructor(...args: RoyaltyInitConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<RoyaltyInit>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): RoyaltyInit;
    connect(signer: Signer): RoyaltyInit__factory;
    static readonly bytecode = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212209e3bc4f073ac88e61841810b5ec9415e7206e704cfbfc703f939270b4c78a84964736f6c634300080c0033";
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
    static createInterface(): RoyaltyInitInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RoyaltyInit;
}
export {};
//# sourceMappingURL=RoyaltyInit__factory.d.ts.map