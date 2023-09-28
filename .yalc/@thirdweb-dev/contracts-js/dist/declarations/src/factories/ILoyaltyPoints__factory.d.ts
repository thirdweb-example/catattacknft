import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILoyaltyPoints, ILoyaltyPointsInterface } from "../ILoyaltyPoints.js";
export declare class ILoyaltyPoints__factory {
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
    static createInterface(): ILoyaltyPointsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILoyaltyPoints;
}
//# sourceMappingURL=ILoyaltyPoints__factory.d.ts.map