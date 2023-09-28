import { Ecosystem, GenericAuthWallet } from "../../core";
import { SolanaSigner, SolanaWallet } from "../interfaces";
export declare abstract class AbstractWallet implements GenericAuthWallet, SolanaWallet {
    type: Ecosystem;
    protected signer: SolanaSigner | undefined;
    abstract getSigner(): Promise<SolanaSigner>;
    getAddress(): Promise<string>;
    signMessage(message: string): Promise<string>;
    verifySignature(message: string, signature: string, address: string): Promise<boolean>;
}
//# sourceMappingURL=base.d.ts.map