import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBurnableERC20, IBurnableERC20Interface } from "../IBurnableERC20.js";
export declare class IBurnableERC20__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IBurnableERC20Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBurnableERC20;
}
//# sourceMappingURL=IBurnableERC20__factory.d.ts.map