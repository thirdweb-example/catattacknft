import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDrop, IDropInterface } from "../IDrop.js";
export declare class IDrop__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        } | {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
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
    static createInterface(): IDropInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDrop;
}
//# sourceMappingURL=IDrop__factory.d.ts.map