import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IStaking1155, IStaking1155Interface } from "../IStaking1155.js";
export declare class IStaking1155__factory {
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
    static createInterface(): IStaking1155Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IStaking1155;
}
//# sourceMappingURL=IStaking1155__factory.d.ts.map