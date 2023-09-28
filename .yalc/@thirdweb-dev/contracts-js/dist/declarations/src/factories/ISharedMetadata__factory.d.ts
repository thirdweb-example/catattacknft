import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISharedMetadata, ISharedMetadataInterface } from "../ISharedMetadata.js";
export declare class ISharedMetadata__factory {
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
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
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
    static createInterface(): ISharedMetadataInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISharedMetadata;
}
//# sourceMappingURL=ISharedMetadata__factory.d.ts.map