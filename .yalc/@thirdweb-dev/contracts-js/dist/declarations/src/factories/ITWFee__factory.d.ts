import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITWFee, ITWFeeInterface } from "../ITWFee.js";
export declare class ITWFee__factory {
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
    static createInterface(): ITWFeeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITWFee;
}
//# sourceMappingURL=ITWFee__factory.d.ts.map