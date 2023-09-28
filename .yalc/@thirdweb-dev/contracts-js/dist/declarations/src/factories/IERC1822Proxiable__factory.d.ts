import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC1822Proxiable, IERC1822ProxiableInterface } from "../IERC1822Proxiable.js";
export declare class IERC1822Proxiable__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): IERC1822ProxiableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1822Proxiable;
}
//# sourceMappingURL=IERC1822Proxiable__factory.d.ts.map