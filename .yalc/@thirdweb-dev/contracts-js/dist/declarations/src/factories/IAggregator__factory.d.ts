import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAggregator, IAggregatorInterface } from "../IAggregator.js";
export declare class IAggregator__factory {
    static readonly abi: ({
        inputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
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
    })[];
    static createInterface(): IAggregatorInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAggregator;
}
//# sourceMappingURL=IAggregator__factory.d.ts.map