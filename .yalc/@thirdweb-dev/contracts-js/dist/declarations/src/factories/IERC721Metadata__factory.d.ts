import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC721Metadata, IERC721MetadataInterface } from "../IERC721Metadata.js";
export declare class IERC721Metadata__factory {
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
    static createInterface(): IERC721MetadataInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC721Metadata;
}
//# sourceMappingURL=IERC721Metadata__factory.d.ts.map