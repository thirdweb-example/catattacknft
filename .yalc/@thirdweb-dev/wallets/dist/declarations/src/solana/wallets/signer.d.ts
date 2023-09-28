import { SolanaSigner } from "../interfaces";
import { AbstractWallet } from "./base";
export declare class SignerWallet extends AbstractWallet {
    constructor(signer: SolanaSigner);
    getSigner(): Promise<SolanaSigner>;
}
//# sourceMappingURL=signer.d.ts.map