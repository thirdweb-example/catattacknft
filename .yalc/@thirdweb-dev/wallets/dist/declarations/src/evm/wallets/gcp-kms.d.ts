import { Signer } from "ethers";
import { AbstractWallet } from "./abstract";
import { GcpKmsSignerCredentials } from "ethers-gcp-kms-signer";
export declare class GcpKmsWallet extends AbstractWallet {
    #private;
    constructor(options: GcpKmsSignerCredentials);
    getSigner(): Promise<Signer>;
}
//# sourceMappingURL=gcp-kms.d.ts.map