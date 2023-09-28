import { AbstractWallet } from "./abstract";
import { ethers } from "ethers";
import { ChainOrRpcUrl } from "@thirdweb-dev/sdk";
export declare class PrivateKeyWallet extends AbstractWallet {
    #private;
    constructor(privateKey: string, chain?: ChainOrRpcUrl, secretKey?: string);
    getSigner(): Promise<ethers.Signer>;
}
//# sourceMappingURL=private-key.d.ts.map