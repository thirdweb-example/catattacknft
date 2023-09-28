import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { RoyaltyPaymentsLogic, RoyaltyPaymentsLogicInterface } from "../RoyaltyPaymentsLogic.js";
export declare class RoyaltyPaymentsLogic__factory {
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
    static createInterface(): RoyaltyPaymentsLogicInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): RoyaltyPaymentsLogic;
}
//# sourceMappingURL=RoyaltyPaymentsLogic__factory.d.ts.map