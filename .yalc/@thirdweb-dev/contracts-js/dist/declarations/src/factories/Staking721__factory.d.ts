import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Staking721, Staking721Interface } from "../Staking721.js";
export declare class Staking721__factory {
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
    static createInterface(): Staking721Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Staking721;
}
//# sourceMappingURL=Staking721__factory.d.ts.map