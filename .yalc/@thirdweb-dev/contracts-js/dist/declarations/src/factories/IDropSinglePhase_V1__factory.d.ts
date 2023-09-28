import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDropSinglePhase_V1, IDropSinglePhase_V1Interface } from "../IDropSinglePhase_V1.js";
export declare class IDropSinglePhase_V1__factory {
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
    static createInterface(): IDropSinglePhase_V1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDropSinglePhase_V1;
}
//# sourceMappingURL=IDropSinglePhase_V1__factory.d.ts.map