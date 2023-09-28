import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { NFTMetadata, NFTMetadataInterface } from "../NFTMetadata.js";
export declare class NFTMetadata__factory {
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
    static createInterface(): NFTMetadataInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): NFTMetadata;
}
//# sourceMappingURL=NFTMetadata__factory.d.ts.map