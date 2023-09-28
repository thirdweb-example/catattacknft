import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { SharedMetadataBatch, SharedMetadataBatchInterface } from "../SharedMetadataBatch.js";
export declare class SharedMetadataBatch__factory {
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
        inputs: never[];
        name: string;
        outputs: {
            components: ({
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
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
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
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): SharedMetadataBatchInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SharedMetadataBatch;
}
//# sourceMappingURL=SharedMetadataBatch__factory.d.ts.map