import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC20Metadata, IERC20MetadataInterface } from "../IERC20Metadata.js";
export declare class IERC20Metadata__factory {
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
    static createInterface(): IERC20MetadataInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC20Metadata;
}
//# sourceMappingURL=IERC20Metadata__factory.d.ts.map