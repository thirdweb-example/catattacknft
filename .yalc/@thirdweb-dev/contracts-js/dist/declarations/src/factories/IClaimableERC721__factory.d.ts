import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IClaimableERC721, IClaimableERC721Interface } from "../IClaimableERC721.js";
export declare class IClaimableERC721__factory {
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
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IClaimableERC721Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IClaimableERC721;
}
//# sourceMappingURL=IClaimableERC721__factory.d.ts.map