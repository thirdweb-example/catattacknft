import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { SignatureMintERC1155Upgradeable, SignatureMintERC1155UpgradeableInterface } from "../SignatureMintERC1155Upgradeable.js";
export declare class SignatureMintERC1155Upgradeable__factory {
    static readonly abi: ({
        anonymous: boolean;
        inputs: ({
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        } | {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        })[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: ({
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        } | {
            internalType: string;
            name: string;
            type: string;
            components?: undefined;
        })[];
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
    static createInterface(): SignatureMintERC1155UpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): SignatureMintERC1155Upgradeable;
}
//# sourceMappingURL=SignatureMintERC1155Upgradeable__factory.d.ts.map