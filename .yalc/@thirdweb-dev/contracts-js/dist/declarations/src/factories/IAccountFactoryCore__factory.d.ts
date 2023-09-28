import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAccountFactoryCore, IAccountFactoryCoreInterface } from "../IAccountFactoryCore.js";
export declare class IAccountFactoryCore__factory {
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
    static createInterface(): IAccountFactoryCoreInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAccountFactoryCore;
}
//# sourceMappingURL=IAccountFactoryCore__factory.d.ts.map