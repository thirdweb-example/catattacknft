import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { INFTStake, INFTStakeInterface } from "../INFTStake.js";
export declare class INFTStake__factory {
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
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): INFTStakeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): INFTStake;
}
//# sourceMappingURL=INFTStake__factory.d.ts.map