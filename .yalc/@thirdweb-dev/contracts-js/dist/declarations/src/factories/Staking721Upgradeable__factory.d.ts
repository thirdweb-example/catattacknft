import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Staking721Upgradeable, Staking721UpgradeableInterface } from "../Staking721Upgradeable.js";
export declare class Staking721Upgradeable__factory {
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
    static createInterface(): Staking721UpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Staking721Upgradeable;
}
//# sourceMappingURL=Staking721Upgradeable__factory.d.ts.map