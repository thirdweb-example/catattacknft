import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOperatorFilterRegistry, IOperatorFilterRegistryInterface } from "../IOperatorFilterRegistry.js";
export declare class IOperatorFilterRegistry__factory {
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
    static createInterface(): IOperatorFilterRegistryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOperatorFilterRegistry;
}
//# sourceMappingURL=IOperatorFilterRegistry__factory.d.ts.map