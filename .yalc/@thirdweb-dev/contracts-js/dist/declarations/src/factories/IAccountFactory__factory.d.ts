import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAccountFactory, IAccountFactoryInterface } from "../IAccountFactory.js";
export declare class IAccountFactory__factory {
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
    static createInterface(): IAccountFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAccountFactory;
}
//# sourceMappingURL=IAccountFactory__factory.d.ts.map