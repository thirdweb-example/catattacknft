import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ContractMetadataLogic, ContractMetadataLogicInterface } from "../ContractMetadataLogic.js";
export declare class ContractMetadataLogic__factory {
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
    static createInterface(): ContractMetadataLogicInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ContractMetadataLogic;
}
//# sourceMappingURL=ContractMetadataLogic__factory.d.ts.map