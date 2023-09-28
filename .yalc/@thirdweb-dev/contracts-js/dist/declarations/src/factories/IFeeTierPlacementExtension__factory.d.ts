import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IFeeTierPlacementExtension, IFeeTierPlacementExtensionInterface } from "../IFeeTierPlacementExtension.js";
export declare class IFeeTierPlacementExtension__factory {
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
    static createInterface(): IFeeTierPlacementExtensionInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IFeeTierPlacementExtension;
}
//# sourceMappingURL=IFeeTierPlacementExtension__factory.d.ts.map