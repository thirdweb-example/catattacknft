import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IDropSinglePhase, IDropSinglePhaseInterface } from "../IDropSinglePhase.js";
export declare class IDropSinglePhase__factory {
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
    static createInterface(): IDropSinglePhaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IDropSinglePhase;
}
//# sourceMappingURL=IDropSinglePhase__factory.d.ts.map