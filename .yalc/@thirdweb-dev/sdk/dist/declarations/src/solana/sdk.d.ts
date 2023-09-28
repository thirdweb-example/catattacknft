import { Deployer } from "./classes/deployer";
import { Registry } from "./classes/registry";
import { UserWallet } from "./classes/user-wallet";
import { NFTCollection } from "./programs/nft-collection";
import { NFTDrop } from "./programs/nft-drop";
import type { Program } from "./programs/program";
import { Token } from "./programs/token";
import { PrebuiltProgramType, ProgramForPrebuiltProgramType, ProgramType } from "./programs/types";
import { Network } from "./types";
import type { Idl, Program as AnchorProgram } from "@project-serum/anchor";
import { Connection } from "@solana/web3.js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
/**
 * The main entry-point for the thirdweb Solana SDK.
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * // Create SDK on specified network, and then pass a signer
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * // Signer can be a keypair or browser wallet adapter
 * sdk.wallet.connect(signer);
 * ```
 *
 * @public
 */
export declare class ThirdwebSDK {
    /**
     * Create a new SDK instance for the specified network
     * @param network - The network to connect to
     * @param storage - The storage provider to use or IPFS by default
     * @returns an SDK instance
     */
    static fromNetwork(network: Network, storage?: ThirdwebStorage): ThirdwebSDK;
    /**
     * Create a new SDK instance connected with the given private key
     * @param network - The network to connect to
     * @param privateKey - The private key to use
     * @param storage - The storage provider to use or IPFS by default
     * @returns an SDK instance
     */
    static fromPrivateKey(network: Network, privateKey: string, storage?: ThirdwebStorage): ThirdwebSDK;
    private connection;
    private metaplex;
    private storage;
    /**
     * Handles getting data about accounts and programs associated with a wallet
     */
    registry: Registry;
    /**
     * Deploy new programs
     */
    deployer: Deployer;
    /**
     * Manage and get info about the connected wallet
     */
    wallet: UserWallet;
    /**
     * The currently connected network
     */
    get network(): import("@metaplex-foundation/js").Cluster;
    constructor(connection: Connection, storage?: ThirdwebStorage);
    get auth(): void;
    /**
     * Get an SDK interface for an NFT Collection program
     * @param address - Address of the program
     * @returns SDK interface for the program
     */
    getNFTCollection(address: string): Promise<NFTCollection>;
    /**
     * Get an SDK interface for an NFT Drop program
     * @param address - Address of the program
     * @returns SDK interface for the program
     */
    getNFTDrop(address: string): Promise<NFTDrop>;
    /**
     * Get an SDK interface for an Token program
     * @param address - Address of the program
     * @returns SDK interface for the program
     */
    getToken(address: string): Promise<Token>;
    /**
     * Get an SDK interface for a deployed program
     * @param address - Address of the program
     * @returns SDK interface for the program
     *
     * @example
     * ```jsx
     * // Get the interface for your anchor program
     * const program = await sdk.getProgram("{{program_address}}");
     * ```
     */
    getProgram(address: string): Promise<AnchorProgram>;
    /**
     * Get an SDK interface for a deployed program
     * @param address - Address of the program
     * @param programType - the type of program
     * @returns SDK interface for the program
     *
     * @example
     * ```jsx
     * // Get the interface a given program type
     * const program = await sdk.getProgram("{{program_address}}", "token");
     * ```
     */
    getProgram<TProgramType extends ProgramType>(address: string, programType: TProgramType): Promise<TProgramType extends PrebuiltProgramType ? ProgramForPrebuiltProgramType<TProgramType> : Program>;
    /**
     * Get an SDK interface for a deployed program
     * @param address - Address of the program
     * @param Idl - the IDL of the program
     * @returns SDK interface for the program
     *
     * @example
     * ```jsx
     * // Get the interface for your anchor program
     * const program = await sdk.getProgram("{{program_address}}", Idl);
     * ```
     */
    getProgram<TIdl extends Idl>(address: string, Idl: TIdl): Promise<AnchorProgram<TIdl>>;
    /**
     * Get an SDK interface for a deployed program
     * @param address - Address of the program
     * @param idl - The IDL of the program
     * @returns SDK interface for the program
     *
     * @example
     * ```jsx
     * import idl from "path/to/idl.json"
     *
     * // Alternatively, you can pass in your own IDL
     * const program = await sdk.getProgramWithIdl(address, idl);
     * ```
     */
    getProgramWithIdl(address: string, idl: Idl): Promise<Program>;
}
//# sourceMappingURL=sdk.d.ts.map