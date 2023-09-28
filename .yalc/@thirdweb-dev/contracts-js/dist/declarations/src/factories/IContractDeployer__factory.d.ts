import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IContractDeployer, IContractDeployerInterface } from "../IContractDeployer.js";
export declare class IContractDeployer__factory {
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
    static createInterface(): IContractDeployerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IContractDeployer;
}
//# sourceMappingURL=IContractDeployer__factory.d.ts.map