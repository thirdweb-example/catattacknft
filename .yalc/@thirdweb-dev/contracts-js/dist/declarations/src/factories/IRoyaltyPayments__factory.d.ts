import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IRoyaltyPayments, IRoyaltyPaymentsInterface } from "../IRoyaltyPayments.js";
export declare class IRoyaltyPayments__factory {
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
        inputs: {
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
        anonymous?: undefined;
    })[];
    static createInterface(): IRoyaltyPaymentsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IRoyaltyPayments;
}
//# sourceMappingURL=IRoyaltyPayments__factory.d.ts.map