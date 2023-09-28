import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DropSinglePhase_V1, DropSinglePhase_V1Interface } from "../DropSinglePhase_V1.js";
export declare class DropSinglePhase_V1__factory {
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): DropSinglePhase_V1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): DropSinglePhase_V1;
}
//# sourceMappingURL=DropSinglePhase_V1__factory.d.ts.map