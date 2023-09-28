import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Staking1155Upgradeable, Staking1155UpgradeableInterface } from "../Staking1155Upgradeable.js";
export declare class Staking1155Upgradeable__factory {
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
    static createInterface(): Staking1155UpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Staking1155Upgradeable;
}
//# sourceMappingURL=Staking1155Upgradeable__factory.d.ts.map