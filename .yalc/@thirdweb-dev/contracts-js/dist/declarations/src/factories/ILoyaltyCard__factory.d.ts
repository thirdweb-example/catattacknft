import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ILoyaltyCard, ILoyaltyCardInterface } from "../ILoyaltyCard.js";
export declare class ILoyaltyCard__factory {
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
    static createInterface(): ILoyaltyCardInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ILoyaltyCard;
}
//# sourceMappingURL=ILoyaltyCard__factory.d.ts.map