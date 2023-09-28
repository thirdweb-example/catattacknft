import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IContext, IContextInterface } from "../IContext.js";
export declare class IContext__factory {
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
    static createInterface(): IContextInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IContext;
}
//# sourceMappingURL=IContext__factory.d.ts.map