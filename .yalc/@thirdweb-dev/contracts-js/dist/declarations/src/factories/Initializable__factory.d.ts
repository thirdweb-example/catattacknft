import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Initializable, InitializableInterface } from "../Initializable.js";
export declare class Initializable__factory {
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
    static createInterface(): InitializableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Initializable;
}
//# sourceMappingURL=Initializable__factory.d.ts.map