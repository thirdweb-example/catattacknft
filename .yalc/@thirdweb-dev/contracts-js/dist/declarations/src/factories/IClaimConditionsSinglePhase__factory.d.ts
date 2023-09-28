import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IClaimConditionsSinglePhase, IClaimConditionsSinglePhaseInterface } from "../IClaimConditionsSinglePhase.js";
export declare class IClaimConditionsSinglePhase__factory {
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
    static createInterface(): IClaimConditionsSinglePhaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IClaimConditionsSinglePhase;
}
//# sourceMappingURL=IClaimConditionsSinglePhase__factory.d.ts.map