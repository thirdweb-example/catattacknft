import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC721, IERC721Interface } from "../IERC721.js";
export declare class IERC721__factory {
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
    static createInterface(): IERC721Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC721;
}
//# sourceMappingURL=IERC721__factory.d.ts.map