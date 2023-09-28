import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ITokenERC20, ITokenERC20Interface } from "../ITokenERC20.js";
export declare class ITokenERC20__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
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
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
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
    static createInterface(): ITokenERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ITokenERC20;
}
//# sourceMappingURL=ITokenERC20__factory.d.ts.map