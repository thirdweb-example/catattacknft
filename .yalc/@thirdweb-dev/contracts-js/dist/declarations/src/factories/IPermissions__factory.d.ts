import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPermissions, IPermissionsInterface } from "../IPermissions.js";
export declare class IPermissions__factory {
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
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IPermissionsInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPermissions;
}
//# sourceMappingURL=IPermissions__factory.d.ts.map