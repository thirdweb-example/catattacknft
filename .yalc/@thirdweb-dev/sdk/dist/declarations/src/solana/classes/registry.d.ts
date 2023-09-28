import { ProgramType } from "../programs/types";
import { RegisteredProgram } from "../types/programs";
import { UserWallet } from "./user-wallet";
import { InstructionWithSigners, Metaplex, Pda } from "@metaplex-foundation/js";
import { PublicKey } from "@solana/web3.js";
/**
 * @internal
 */
export declare class Registry {
    private metaplex;
    private twRegistry;
    constructor(metaplex: Metaplex, userWallet: UserWallet);
    getProgramType(address: string): Promise<"token" | "nft-collection" | "nft-drop">;
    getDeployedPrograms(walletAddress: string): Promise<RegisteredProgram[]>;
    getTotalProgramsRegistered(wallet: PublicKey): Promise<number>;
    getProgramAt(walletAddress: string, index: number): Promise<RegisteredProgram>;
    getRegistrarAddress(wallet: PublicKey): Pda;
    getRegisteredProgramAddress(wallet: PublicKey, index: number): Pda;
    /**
     * @internal
     */
    getAddToRegistryInstructions(programToAdd: PublicKey, programName: string, programType: ProgramType): Promise<InstructionWithSigners[]>;
    private getInitializeRegistrarTransaction;
    private getRegisterProgramTransaction;
    private registrarAccountExists;
    private getDropForCollection;
    private getOwnedTokenAccounts;
    private getOwnedTokenAddreses;
    private toRegisteredProgram;
}
//# sourceMappingURL=registry.d.ts.map