import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC721A, IERC721AInterface } from "../IERC721A.js";
export declare class IERC721A__factory {
    static readonly abi: ({
        inputs: never[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
    static createInterface(): IERC721AInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC721A;
}
//# sourceMappingURL=IERC721A__factory.d.ts.map