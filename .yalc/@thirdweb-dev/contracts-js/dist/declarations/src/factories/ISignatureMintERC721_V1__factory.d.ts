import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ISignatureMintERC721_V1, ISignatureMintERC721_V1Interface } from "../ISignatureMintERC721_V1.js";
export declare class ISignatureMintERC721_V1__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): ISignatureMintERC721_V1Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): ISignatureMintERC721_V1;
}
//# sourceMappingURL=ISignatureMintERC721_V1__factory.d.ts.map