import { AbstractWallet } from "./abstract";
import { ethers } from "ethers";
export declare class EthersWallet extends AbstractWallet {
    #private;
    constructor(signer: ethers.Signer);
    getSigner(): Promise<ethers.Signer>;
}
//# sourceMappingURL=ethers.d.ts.map