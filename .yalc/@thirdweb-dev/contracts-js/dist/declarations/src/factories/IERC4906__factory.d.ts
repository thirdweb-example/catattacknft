import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC4906, IERC4906Interface } from "../IERC4906.js";
export declare class IERC4906__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        anonymous?: undefined;
    })[];
    static createInterface(): IERC4906Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC4906;
}
//# sourceMappingURL=IERC4906__factory.d.ts.map