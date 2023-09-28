import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMintableERC20, IMintableERC20Interface } from "../IMintableERC20.js";
export declare class IMintableERC20__factory {
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
    static createInterface(): IMintableERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMintableERC20;
}
//# sourceMappingURL=IMintableERC20__factory.d.ts.map