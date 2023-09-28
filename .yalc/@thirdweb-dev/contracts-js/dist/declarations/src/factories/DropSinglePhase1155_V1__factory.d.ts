import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DropSinglePhase1155_V1, DropSinglePhase1155_V1Interface } from "../DropSinglePhase1155_V1.js";
export declare class DropSinglePhase1155_V1__factory {
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
    static createInterface(): DropSinglePhase1155_V1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): DropSinglePhase1155_V1;
}
//# sourceMappingURL=DropSinglePhase1155_V1__factory.d.ts.map