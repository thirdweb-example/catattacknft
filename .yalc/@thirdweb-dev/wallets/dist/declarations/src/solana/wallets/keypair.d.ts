import { SolanaSigner } from "../interfaces";
import { AbstractWallet } from "./base";
import { Keypair } from "@solana/web3.js";
export declare class KeypairWallet extends AbstractWallet {
    constructor(keypair: Keypair);
    getSigner(): Promise<SolanaSigner>;
}
//# sourceMappingURL=keypair.d.ts.map