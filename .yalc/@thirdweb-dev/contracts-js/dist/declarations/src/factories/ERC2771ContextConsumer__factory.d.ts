import { Signer } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { ERC2771ContextConsumer, ERC2771ContextConsumerInterface } from "../ERC2771ContextConsumer.js";
export declare class ERC2771ContextConsumer__factory {
    static readonly abi: {
        inputs: never[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
    }[];
    static createInterface(): ERC2771ContextConsumerInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ERC2771ContextConsumer;
}
//# sourceMappingURL=ERC2771ContextConsumer__factory.d.ts.map