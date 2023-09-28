import { QueryAllParams } from "../../core/schema/QueryParams";
import { NFT, NFTMetadata, NFTMetadataOrUri } from "../../core/schema/nft";
import { Amount } from "../../core/schema/shared";
import { TransactionResult } from "../types/common";
import { CreatorInput, CreatorOutput } from "../types/programs";
import { Metaplex } from "@metaplex-foundation/js";
import { PublicKey, SignaturesForAddressOptions, TransactionResponse } from "@solana/web3.js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
/**
 * A collection of associated NFTs
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Get the interface for your NFT collection program
 * const program = await sdk.getProgram("{{program_address}}", "nft-collection");
 * ```
 *
 * @public
 */
export declare class NFTCollection {
    private metaplex;
    private storage;
    private nft;
    publicKey: PublicKey;
    accountType: "nft-collection";
    get network(): import("@metaplex-foundation/js").Cluster;
    constructor(collectionAddress: string, metaplex: Metaplex, storage: ThirdwebStorage);
    /**
     * Get the metadata for this program.
     * @returns program metadata
     *
     * @example
     * ```jsx
     * const metadata = await program.getMetadata();
     * console.log(metadata);
     * ```
     */
    getMetadata(): Promise<NFTMetadata>;
    /**
     * Get the creators of this program.
     * @returns program metadata
     *
     * @example
     * ```jsx
     * const creators = await program.getCreators();
     * console.log(creators);
     * ```
     */
    getCreators(): Promise<CreatorOutput[]>;
    /**
     * Get the royalty basis points for this collection
     * @returns royalty basis points
     *
     * @example
     * ```jsx
     * const royalty = await program.getRoyalty();
     * console.log(royalty);
     * ```
     */
    getRoyalty(): Promise<number>;
    /**
     * Get the metadata for a specific NFT
     * @param nftAddress - the mint address of the NFT to get
     * @returns the metadata of the NFT
     *
     * @example
     * ```jsx
     * // Specify the mint address of the NFT to get the data of
     * const nftAddress = "...";
     * // And get the data for the NFT
     * const nft = await program.get(nftAddress);
     * console.log(nft.metadata.name);
     * console.log(nft.owner);
     * ```
     */
    get(nftAddress: string): Promise<NFT>;
    /**
     * Get the metadata for all NFTs on this collection
     * @remarks This method is paginated. Use the `start` and `count` properties of the queryParams object to control pagination. By default the first 100 NFTs are returned
     * @returns metadata for all minted NFTs
     *
     * @example
     * ```jsx
     * // Get all the NFTs that have been minted on this contract
     * const nfts = await program.getAll();
     * console.log(nfts[0].metadata.name);
     * console.log(nfts[0].owner);
     * ```
     */
    getAll(queryParams?: QueryAllParams): Promise<NFT[]>;
    /**
     * Get the all transactions for this program
     * @beta
     */
    getTransactions(options?: SignaturesForAddressOptions): Promise<TransactionResponse[]>;
    /**
     * Get the total number of nfts minted on this program
     * @returns the total number of NFTs minted on this program
     *
     * ```jsx
     * const totalSupply = await program.totalSupply();
     * ```
     */
    totalSupply(): Promise<number>;
    /**
     * Get the NFT balance of the connected wallet
     * @returns the NFT balance
     *
     * @example
     * ```jsx
     * // The mint address of the NFT to check the balance of
     * const nftAddress = "..."
     * // Get the NFT balance of the currently connected wallet
     * const balance = await program.balance(nftAddress);
     * console.log(balance);
     * ```
     */
    balance(nftAddress: string): Promise<number>;
    /**
     * Get the NFT balance of the specified wallet
     * @param walletAddress - the wallet address to get the balance of
     * @param nftAddress - the mint address of the NFT to get the balance of
     * @returns the NFT balance
     *
     * @example
     * ```jsx
     * // Specify the address of the wallet to get the balance of
     * const walletAddress = "..."
     * // Specify the mint address of the NFT to get the balance of
     * const nftAddress = "..."
     * const balance = await program.balanceOf(walletAddress, nftAddress);
     * ```
     */
    balanceOf(walletAddress: string, nftAddress: string): Promise<number>;
    /**
     * Get the current owner of the given NFT
     * @param nftAddress - the mint address of the NFT to get the owner of
     * @returns the owner of the NFT
     * @example
     * ```jsx
     * const nftAddress = "..."
     * const owner = await program.ownerOf(nftAddress);
     * console.log(owner);
     * ```
     */
    ownerOf(nftAddress: string): Promise<string | undefined>;
    /**
     * Get the supply of NFT editions minted from a specific NFT
     * @param nftAddress - the mint address of the NFT to check the supply of
     * @returns the supply of the specified NFT
     *
     * @example
     * ```jsx
     * const address = "...";
     * const supply = await program.supplyOf(address);
     * ```
     */
    supplyOf(nftAddress: string): Promise<string>;
    /**
     * Transfer the specified NFTs to another wallet
     * @param receiverAddress - The address to send the tokens to
     * @param nftAddress - The mint address of the NFT to transfer
     * @returns the transaction result of the transfer
     *
     * @example
     * ```jsx
     * // The wallet address to transfer the NFTs to
     * const to = "...";
     * // The mint address of the NFT to transfer
     * const nftAddress = "...";
     * const tx = await program.transfer(to, nftAddress);
     * ```
     */
    transfer(receiverAddress: string, nftAddress: string): Promise<TransactionResult>;
    /**
     * Mint NFTs to the connected wallet
     * @param metadata - the metadata of the NFT to mint
     * @returns the mint address of the minted NFT
     *
     * @example
     * ```jsx
     * // Add the metadata of your NFT
     * const metadata = {
     *   name: "NFT #1",
     *   description: "My first NFT!",
     *   image: readFileSync("files/image.jpg"),
     *   properties: [
     *     {
     *        name: "coolness",
     *        value: "very cool!"
     *     }
     *   ]
     * }
     *
     * // Then mint the new NFT and get its address
     * const address = await program.mint(metadata);
     * console.log(address);
     * ```
     */
    mint(metadata: NFTMetadataOrUri): Promise<string>;
    /**
     * Mint an NFT to the specified wallet
     * @param to - the address to mint the NFT to
     * @param metadata - the metadata of the NFT to mint
     * @returns the mint address of the minted NFT
     *
     * @example
     * ```jsx
     * // Specify who to mint the NFT to
     * const to = "...";
     *
     * // Add the metadata of your NFT
     * const metadata = {
     *   name: "NFT #1",
     *   description: "My first NFT!",
     *   image: readFileSync("files/image.jpg"),
     *   properties: [
     *     {
     *        name: "coolness",
     *        value: "very cool!"
     *     }
     *   ]
     * }
     *
     * // Then mint the new NFT and get its address
     * const address = await program.mintTo(to, metadata);
     * console.log(address);
     * ```
     */
    mintTo(to: string, metadata: NFTMetadataOrUri): Promise<string>;
    /**
     * Mint additional supply of an NFT to the connected wallet
     * @param nftAddress - the mint address to mint additional supply to
     * @param amount - the amount of additional NFTs to mint
     * @returns the mint address of the minted NFT
     *
     * @example
     * ```jsx
     * // The address of the already minted NFT
     * const nftAddress = "..."
     * // The amount of additional NFTs to mint
     * const amount = 1;
     * // Mint an additional NFT of the original NFT
     * const addresses = await program.mintAdditionalSupply(nftAddress, amount);
     * ```
     */
    mintAdditionalSupply(nftAddress: string, amount: Amount): Promise<string[]>;
    /**
     * Mint additional supply of an NFT to the specified wallet
     * @param to - the address to mint the NFT to
     * @param nftAddress - the mint address to mint additional supply to
     * @param amount - the amount of NFTs to mint
     * @returns the mint address of the minted NFT
     *
     * @example
     * ```jsx
     * // Specify who to mint the additional NFT to
     * const to = "..."
     * // The address of the already minted NFT
     * const nftAddress = "..."
     * * // The amount of additional NFTs to mint
     * const amount = 1;
     * // Mint an additional NFT of the original NFT
     * const addresses = await program.mintAdditionalSupplyTo(to, nftAddress, amount);
     * ```
     */
    mintAdditionalSupplyTo(to: string, nftAddress: string, amount: Amount): Promise<string[]>;
    /**
     * Burn an NFT
     * @param nftAddress - the mint address of the NFT to burn
     * @returns the transaction signature
     *
     * @example
     * ```jsx
     * // Specify the address of the NFT to burn
     * const nftAddress = "..."
     * // And send the actual burn transaction
     * const tx = await program.burn(nftAddress);
     * ```
     */
    burn(nftAddress: string): Promise<TransactionResult>;
    /**
     * Burn multiple NFTs
     * @param nftAddresses - the mint addresses of the NFT to burn
     * @returns the transaction signature
     *
     * @example
     * ```jsx
     * // Specify the address of the NFT to burn
     * const nftAddress1 = "..."
     * const nftAddress2 = "..."
     * // And send the actual burn transaction
     * const tx = await program.burnBatch([nftAddress1, nftAddress2]);
     * ```
     */
    burnBatch(nftAddresses: string[]): Promise<TransactionResult[]>;
    /**
     * SETTINGS
     */
    /**
     * Update the creators of the collection
     * @param creators - the creators to update
     * @param updateAll - whether or not to retroactively update the creators of all past NFTs
     */
    updateCreators(creators: CreatorInput[], updateAll?: boolean): Promise<TransactionResult[]>;
    /**
     * Update the royalty basis points of the collection
     * @param sellerFeeBasisPoints - the royalty basis points of the collection
     * @param updateAll - whether or not to retroactively update the royalty basis points of all past NFTs
     */
    updateRoyalty(sellerFeeBasisPoints: number, updateAll?: boolean): Promise<TransactionResult[]>;
    private getCollection;
}
//# sourceMappingURL=nft-collection.d.ts.map