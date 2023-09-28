import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { LazyMintWithTier, LazyMintWithTierInterface } from "../LazyMintWithTier.js";
export declare class LazyMintWithTier__factory {
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
    } | {
        inputs: never[];
        name: string;
        outputs: {
            components: ({
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
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): LazyMintWithTierInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LazyMintWithTier;
}
//# sourceMappingURL=LazyMintWithTier__factory.d.ts.map