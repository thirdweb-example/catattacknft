import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { SignatureMintERC20, SignatureMintERC20Interface } from "../SignatureMintERC20.js";
export declare class SignatureMintERC20__factory {
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
    static createInterface(): SignatureMintERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): SignatureMintERC20;
}
//# sourceMappingURL=SignatureMintERC20__factory.d.ts.map