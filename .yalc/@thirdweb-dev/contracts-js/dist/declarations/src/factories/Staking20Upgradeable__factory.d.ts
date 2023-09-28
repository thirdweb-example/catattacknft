import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Staking20Upgradeable, Staking20UpgradeableInterface } from "../Staking20Upgradeable.js";
export declare class Staking20Upgradeable__factory {
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
    static createInterface(): Staking20UpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): Staking20Upgradeable;
}
//# sourceMappingURL=Staking20Upgradeable__factory.d.ts.map