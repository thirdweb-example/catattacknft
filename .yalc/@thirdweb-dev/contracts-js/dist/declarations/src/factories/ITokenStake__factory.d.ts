import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITokenStake, ITokenStakeInterface } from "../ITokenStake.js";
export declare class ITokenStake__factory {
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
    static createInterface(): ITokenStakeInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenStake;
}
//# sourceMappingURL=ITokenStake__factory.d.ts.map