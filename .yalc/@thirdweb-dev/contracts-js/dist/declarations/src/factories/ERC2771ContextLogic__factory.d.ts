import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC2771ContextLogic, ERC2771ContextLogicInterface } from "../ERC2771ContextLogic.js";
export declare class ERC2771ContextLogic__factory {
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
    static createInterface(): ERC2771ContextLogicInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC2771ContextLogic;
}
//# sourceMappingURL=ERC2771ContextLogic__factory.d.ts.map