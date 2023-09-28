import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { DefaultOperatorFiltererUpgradeable, DefaultOperatorFiltererUpgradeableInterface } from "../DefaultOperatorFiltererUpgradeable.js";
export declare class DefaultOperatorFiltererUpgradeable__factory {
    static readonly abi: ({
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
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
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
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
    static createInterface(): DefaultOperatorFiltererUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): DefaultOperatorFiltererUpgradeable;
}
//# sourceMappingURL=DefaultOperatorFiltererUpgradeable__factory.d.ts.map