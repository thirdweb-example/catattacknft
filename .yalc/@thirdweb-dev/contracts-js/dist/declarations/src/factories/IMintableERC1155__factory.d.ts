import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IMintableERC1155, IMintableERC1155Interface } from "../IMintableERC1155.js";
export declare class IMintableERC1155__factory {
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
    static createInterface(): IMintableERC1155Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): IMintableERC1155;
}
//# sourceMappingURL=IMintableERC1155__factory.d.ts.map