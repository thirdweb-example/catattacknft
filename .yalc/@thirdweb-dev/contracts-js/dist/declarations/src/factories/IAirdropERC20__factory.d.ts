import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAirdropERC20, IAirdropERC20Interface } from "../IAirdropERC20.js";
export declare class IAirdropERC20__factory {
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
        inputs: ({
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IAirdropERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAirdropERC20;
}
//# sourceMappingURL=IAirdropERC20__factory.d.ts.map