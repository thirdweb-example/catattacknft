import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAirdropERC1155, IAirdropERC1155Interface } from "../IAirdropERC1155.js";
export declare class IAirdropERC1155__factory {
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
    static createInterface(): IAirdropERC1155Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAirdropERC1155;
}
//# sourceMappingURL=IAirdropERC1155__factory.d.ts.map