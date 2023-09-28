import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IBurnableERC1155, IBurnableERC1155Interface } from "../IBurnableERC1155.js";
export declare class IBurnableERC1155__factory {
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
    static createInterface(): IBurnableERC1155Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IBurnableERC1155;
}
//# sourceMappingURL=IBurnableERC1155__factory.d.ts.map