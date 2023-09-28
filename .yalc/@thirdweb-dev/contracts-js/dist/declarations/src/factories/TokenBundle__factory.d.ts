import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { TokenBundle, TokenBundleInterface } from "../TokenBundle.js";
export declare class TokenBundle__factory {
    static readonly abi: ({
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
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    })[];
    static createInterface(): TokenBundleInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): TokenBundle;
}
//# sourceMappingURL=TokenBundle__factory.d.ts.map