import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IStaking20, IStaking20Interface } from "../IStaking20.js";
export declare class IStaking20__factory {
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
    static createInterface(): IStaking20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStaking20;
}
//# sourceMappingURL=IStaking20__factory.d.ts.map