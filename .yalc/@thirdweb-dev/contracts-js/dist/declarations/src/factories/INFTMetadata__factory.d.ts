import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { INFTMetadata, INFTMetadataInterface } from "../INFTMetadata.js";
export declare class INFTMetadata__factory {
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
    static createInterface(): INFTMetadataInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): INFTMetadata;
}
//# sourceMappingURL=INFTMetadata__factory.d.ts.map