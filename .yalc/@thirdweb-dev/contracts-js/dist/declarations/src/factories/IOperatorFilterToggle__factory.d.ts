import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IOperatorFilterToggle, IOperatorFilterToggleInterface } from "../IOperatorFilterToggle.js";
export declare class IOperatorFilterToggle__factory {
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
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
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
    static createInterface(): IOperatorFilterToggleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IOperatorFilterToggle;
}
//# sourceMappingURL=IOperatorFilterToggle__factory.d.ts.map