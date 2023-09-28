import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC2771ContextUpgradeable, ERC2771ContextUpgradeableInterface } from "../ERC2771ContextUpgradeable.js";
export declare class ERC2771ContextUpgradeable__factory {
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
    static createInterface(): ERC2771ContextUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC2771ContextUpgradeable;
}
//# sourceMappingURL=ERC2771ContextUpgradeable__factory.d.ts.map