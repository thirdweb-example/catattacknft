import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC721AQueryableUpgradeable, IERC721AQueryableUpgradeableInterface } from "../IERC721AQueryableUpgradeable.js";
export declare class IERC721AQueryableUpgradeable__factory {
    static readonly abi: ({
        inputs: never[];
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
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): IERC721AQueryableUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC721AQueryableUpgradeable;
}
//# sourceMappingURL=IERC721AQueryableUpgradeable__factory.d.ts.map