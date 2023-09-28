import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IEditionStake, IEditionStakeInterface } from "../IEditionStake.js";
export declare class IEditionStake__factory {
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
    static createInterface(): IEditionStakeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IEditionStake;
}
//# sourceMappingURL=IEditionStake__factory.d.ts.map