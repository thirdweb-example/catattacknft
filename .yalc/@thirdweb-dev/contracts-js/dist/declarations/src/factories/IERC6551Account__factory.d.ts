import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC6551Account, IERC6551AccountInterface } from "../IERC6551Account.js";
export declare class IERC6551Account__factory {
    static readonly abi: ({
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
    } | {
        stateMutability: string;
        type: string;
        inputs?: undefined;
        name?: undefined;
        outputs?: undefined;
    })[];
    static createInterface(): IERC6551AccountInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC6551Account;
}
//# sourceMappingURL=IERC6551Account__factory.d.ts.map