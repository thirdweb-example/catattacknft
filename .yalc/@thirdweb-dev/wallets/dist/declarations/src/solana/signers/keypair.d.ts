import { SolanaSigner } from "../interfaces";
import { Keypair, PublicKey } from "@solana/web3.js";
export declare class KeypairSigner implements SolanaSigner {
    #private;
    publicKey: PublicKey;
    constructor(keypair: Keypair);
    signMessage(message: Uint8Array): Promise<Uint8Array>;
}
//# sourceMappingURL=keypair.d.ts.map