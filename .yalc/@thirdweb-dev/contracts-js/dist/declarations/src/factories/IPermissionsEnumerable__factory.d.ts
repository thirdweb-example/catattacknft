import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPermissionsEnumerable, IPermissionsEnumerableInterface } from "../IPermissionsEnumerable.js";
export declare class IPermissionsEnumerable__factory {
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
    static createInterface(): IPermissionsEnumerableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPermissionsEnumerable;
}
//# sourceMappingURL=IPermissionsEnumerable__factory.d.ts.map