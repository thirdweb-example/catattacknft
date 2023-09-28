import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { BurnToClaim, BurnToClaimInterface } from "../BurnToClaim.js";
export declare class BurnToClaim__factory {
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
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): BurnToClaimInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): BurnToClaim;
}
//# sourceMappingURL=BurnToClaim__factory.d.ts.map