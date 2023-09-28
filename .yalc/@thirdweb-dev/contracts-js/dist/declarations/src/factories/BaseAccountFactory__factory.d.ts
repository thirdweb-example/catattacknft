import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BaseAccountFactory, BaseAccountFactoryInterface } from "../BaseAccountFactory.js";
export declare class BaseAccountFactory__factory {
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
    static createInterface(): BaseAccountFactoryInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BaseAccountFactory;
}
//# sourceMappingURL=BaseAccountFactory__factory.d.ts.map