import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IPaymaster, IPaymasterInterface } from "../IPaymaster.js";
export declare class IPaymaster__factory {
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
    static createInterface(): IPaymasterInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IPaymaster;
}
//# sourceMappingURL=IPaymaster__factory.d.ts.map