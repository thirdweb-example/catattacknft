import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { LazyMint, LazyMintInterface } from "../LazyMint.js";
export declare class LazyMint__factory {
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
    static createInterface(): LazyMintInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LazyMint;
}
//# sourceMappingURL=LazyMint__factory.d.ts.map