import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { IERC1155Receiver, IERC1155ReceiverInterface } from "../IERC1155Receiver.js";
export declare class IERC1155Receiver__factory {
    static readonly abi: {
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
    }[];
    static createInterface(): IERC1155ReceiverInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): IERC1155Receiver;
}
//# sourceMappingURL=IERC1155Receiver__factory.d.ts.map