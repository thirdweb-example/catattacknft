import { UserWallet } from "../classes/user-wallet";
import { Cluster } from "@metaplex-foundation/js";
import { Idl } from "@project-serum/anchor";
import { Connection, PublicKey, Signer } from "@solana/web3.js";
/**
 * Dynamic interface for interacting with Solana programs.
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Get the interface for your program
 * const program = await sdk.getProgram("{{program_address}}");
 * ```
 *
 * @public
 */
export declare class Program {
    private program;
    publicKey: PublicKey;
    accountType: "program";
    network: Cluster;
    constructor(programAddress: string, idl: Idl, connection: Connection, wallet: UserWallet);
    /**
     * Call a function on this program
     * @param functionName - Name of the function to call
     * @param args - Arguments to pass to the function including accounts, data, and signers
     * @returns result of the contract call
     *
     * @example
     * ```jsx
     * const counterAccount = Keypair.generate();
     * await program.call("increment", {
     *   // We need to pass in the public keys of any accounts to interact with
     *   accounts: {
     *     counterAccount: counterAccount.publicKey.toBase58(),
     *   },
     *   // As well as the arguments to pass to the data parameters
     *   data: ["..."],
     *   // And the signer of the account that will be signing the message
     *   signers: [counterAccount]
     * })
     * ```
     */
    call(functionName: string, args: {
        accounts: Record<string, string>;
        data?: any[];
        signers?: Signer[];
    }): Promise<string>;
    prepareCall(functionName: string, args: {
        accounts: Record<string, string>;
        data?: any[];
        signers?: Signer[];
    }): import("@project-serum/anchor/dist/cjs/program/namespace/methods").MethodsBuilder<Idl, import("@project-serum/anchor/dist/cjs/idl").IdlInstruction & {
        name: string;
    }>;
    /**
     * Read account data associated with this program
     * @param accountName - The name of the account type to fetch the data of
     * @param address - The address of the specific account to fetch
     * @returns - The data of the requested account
     *
     * @example
     * ```jsx
     * const accountAddress = "...";
     * // Get the counterAccount at specified address
     * const counterAccount = await program.fetch("counterAccount", accountaddress);
     * ```
     */
    fetch(accountName: string, address: string): Promise<import("@project-serum/anchor/dist/cjs/program/namespace/types").TypeDef<import("@project-serum/anchor/dist/cjs/idl").IdlAccountDef, import("@project-serum/anchor").IdlTypes<Idl>>>;
    /**
     * Read multiple accounts data associated with this program
     * @param accountName - The name of the account type to fetch the data of
     * @param addresses - The addresses of the each account to fetch
     * @returns - The data of the requested accounts
     *
     * @example
     * ```jsx
     * const accountAddresses = ["...", "..."];
     * const counterAccounts = await program.fetchMultiple("counterAccount", accountAddresses);
     * ```
     */
    fetchMultiple(accountName: string, addresses: string[]): Promise<Record<string, unknown>[]>;
}
//# sourceMappingURL=program.d.ts.map