import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISignatureMintERC721, ISignatureMintERC721Interface } from "../ISignatureMintERC721.js";
export declare class ISignatureMintERC721__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
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
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
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
    static createInterface(): ISignatureMintERC721Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISignatureMintERC721;
}
//# sourceMappingURL=ISignatureMintERC721__factory.d.ts.map