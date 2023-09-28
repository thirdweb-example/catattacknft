import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBurnToClaim, IBurnToClaimInterface } from "../IBurnToClaim.js";
export declare class IBurnToClaim__factory {
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
    })[];
    static createInterface(): IBurnToClaimInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBurnToClaim;
}
//# sourceMappingURL=IBurnToClaim__factory.d.ts.map