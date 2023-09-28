import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IClaimableERC1155, IClaimableERC1155Interface } from "../IClaimableERC1155.js";
export declare class IClaimableERC1155__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IClaimableERC1155Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IClaimableERC1155;
}
//# sourceMappingURL=IClaimableERC1155__factory.d.ts.map