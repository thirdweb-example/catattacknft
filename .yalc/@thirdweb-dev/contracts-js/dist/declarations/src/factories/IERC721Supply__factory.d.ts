import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC721Supply, IERC721SupplyInterface } from "../IERC721Supply.js";
export declare class IERC721Supply__factory {
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
    static createInterface(): IERC721SupplyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC721Supply;
}
//# sourceMappingURL=IERC721Supply__factory.d.ts.map