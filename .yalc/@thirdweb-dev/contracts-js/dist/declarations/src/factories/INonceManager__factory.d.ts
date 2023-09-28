import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { INonceManager, INonceManagerInterface } from "../INonceManager.js";
export declare class INonceManager__factory {
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
    static createInterface(): INonceManagerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): INonceManager;
}
//# sourceMappingURL=INonceManager__factory.d.ts.map