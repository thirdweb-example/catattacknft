import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMintableERC721, IMintableERC721Interface } from "../IMintableERC721.js";
export declare class IMintableERC721__factory {
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
    static createInterface(): IMintableERC721Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMintableERC721;
}
//# sourceMappingURL=IMintableERC721__factory.d.ts.map