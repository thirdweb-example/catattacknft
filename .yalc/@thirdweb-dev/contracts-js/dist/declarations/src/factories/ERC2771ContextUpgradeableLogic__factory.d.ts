import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC2771ContextUpgradeableLogic, ERC2771ContextUpgradeableLogicInterface } from "../ERC2771ContextUpgradeableLogic.js";
export declare class ERC2771ContextUpgradeableLogic__factory {
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
    static createInterface(): ERC2771ContextUpgradeableLogicInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC2771ContextUpgradeableLogic;
}
//# sourceMappingURL=ERC2771ContextUpgradeableLogic__factory.d.ts.map