import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IStaking721, IStaking721Interface } from "../IStaking721.js";
export declare class IStaking721__factory {
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
    static createInterface(): IStaking721Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStaking721;
}
//# sourceMappingURL=IStaking721__factory.d.ts.map