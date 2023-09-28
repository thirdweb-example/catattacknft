import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Staking20, Staking20Interface } from "../Staking20.js";
export declare class Staking20__factory {
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
    static createInterface(): Staking20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): Staking20;
}
//# sourceMappingURL=Staking20__factory.d.ts.map