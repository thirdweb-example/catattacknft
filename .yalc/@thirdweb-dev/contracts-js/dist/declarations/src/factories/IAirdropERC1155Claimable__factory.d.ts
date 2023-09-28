import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAirdropERC1155Claimable, IAirdropERC1155ClaimableInterface } from "../IAirdropERC1155Claimable.js";
export declare class IAirdropERC1155Claimable__factory {
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
    static createInterface(): IAirdropERC1155ClaimableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAirdropERC1155Claimable;
}
//# sourceMappingURL=IAirdropERC1155Claimable__factory.d.ts.map