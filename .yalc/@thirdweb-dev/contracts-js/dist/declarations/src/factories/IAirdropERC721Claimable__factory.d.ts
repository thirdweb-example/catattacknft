import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAirdropERC721Claimable, IAirdropERC721ClaimableInterface } from "../IAirdropERC721Claimable.js";
export declare class IAirdropERC721Claimable__factory {
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
    static createInterface(): IAirdropERC721ClaimableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAirdropERC721Claimable;
}
//# sourceMappingURL=IAirdropERC721Claimable__factory.d.ts.map