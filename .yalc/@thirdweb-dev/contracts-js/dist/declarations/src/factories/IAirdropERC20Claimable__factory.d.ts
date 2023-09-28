import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IAirdropERC20Claimable, IAirdropERC20ClaimableInterface } from "../IAirdropERC20Claimable.js";
export declare class IAirdropERC20Claimable__factory {
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
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IAirdropERC20ClaimableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IAirdropERC20Claimable;
}
//# sourceMappingURL=IAirdropERC20Claimable__factory.d.ts.map