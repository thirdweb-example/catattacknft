import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { OperatorFiltererUpgradeable, OperatorFiltererUpgradeableInterface } from "../OperatorFiltererUpgradeable.js";
export declare class OperatorFiltererUpgradeable__factory {
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
    static createInterface(): OperatorFiltererUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): OperatorFiltererUpgradeable;
}
//# sourceMappingURL=OperatorFiltererUpgradeable__factory.d.ts.map