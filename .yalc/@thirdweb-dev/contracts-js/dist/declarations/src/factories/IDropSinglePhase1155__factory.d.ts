import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDropSinglePhase1155, IDropSinglePhase1155Interface } from "../IDropSinglePhase1155.js";
export declare class IDropSinglePhase1155__factory {
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
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IDropSinglePhase1155Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDropSinglePhase1155;
}
//# sourceMappingURL=IDropSinglePhase1155__factory.d.ts.map