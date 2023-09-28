import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC2771Context, IERC2771ContextInterface } from "../IERC2771Context.js";
export declare class IERC2771Context__factory {
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
    static createInterface(): IERC2771ContextInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC2771Context;
}
//# sourceMappingURL=IERC2771Context__factory.d.ts.map