import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC1155Supply, IERC1155SupplyInterface } from "../IERC1155Supply.js";
export declare class IERC1155Supply__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): IERC1155SupplyInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1155Supply;
}
//# sourceMappingURL=IERC1155Supply__factory.d.ts.map