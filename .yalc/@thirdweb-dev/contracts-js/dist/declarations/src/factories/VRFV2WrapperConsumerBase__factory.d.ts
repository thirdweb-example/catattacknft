import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { VRFV2WrapperConsumerBase, VRFV2WrapperConsumerBaseInterface } from "../VRFV2WrapperConsumerBase.js";
export declare class VRFV2WrapperConsumerBase__factory {
    static readonly abi: {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: never[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): VRFV2WrapperConsumerBaseInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): VRFV2WrapperConsumerBase;
}
//# sourceMappingURL=VRFV2WrapperConsumerBase__factory.d.ts.map