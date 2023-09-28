import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC1271, ERC1271Interface } from "../ERC1271.js";
export declare class ERC1271__factory {
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
    static createInterface(): ERC1271Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC1271;
}
//# sourceMappingURL=ERC1271__factory.d.ts.map