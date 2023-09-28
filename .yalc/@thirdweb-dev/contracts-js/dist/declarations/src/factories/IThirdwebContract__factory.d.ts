import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IThirdwebContract, IThirdwebContractInterface } from "../IThirdwebContract.js";
export declare class IThirdwebContract__factory {
    static readonly abi: ({
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
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
    })[];
    static createInterface(): IThirdwebContractInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IThirdwebContract;
}
//# sourceMappingURL=IThirdwebContract__factory.d.ts.map