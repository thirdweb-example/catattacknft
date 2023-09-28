import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DropSinglePhase1155, DropSinglePhase1155Interface } from "../DropSinglePhase1155.js";
export declare class DropSinglePhase1155__factory {
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
    static createInterface(): DropSinglePhase1155Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): DropSinglePhase1155;
}
//# sourceMappingURL=DropSinglePhase1155__factory.d.ts.map