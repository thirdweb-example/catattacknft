import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAirdropERC721, IAirdropERC721Interface } from "../IAirdropERC721.js";
export declare class IAirdropERC721__factory {
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
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IAirdropERC721Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAirdropERC721;
}
//# sourceMappingURL=IAirdropERC721__factory.d.ts.map