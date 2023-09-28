import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC1155Enumerable, IERC1155EnumerableInterface } from "../IERC1155Enumerable.js";
export declare class IERC1155Enumerable__factory {
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
    static createInterface(): IERC1155EnumerableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1155Enumerable;
}
//# sourceMappingURL=IERC1155Enumerable__factory.d.ts.map