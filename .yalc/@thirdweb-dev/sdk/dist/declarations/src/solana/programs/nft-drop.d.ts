import { QueryAllParams } from "../../core/schema/QueryParams";
import { NFT, NFTMetadata, NFTMetadataInput } from "../../core/schema/nft";
import { Amount } from "../../core/schema/shared";
import { ClaimConditions } from "../classes/claim-conditions";
import { TransactionResult } from "../types/common";
import { CreatorInput, CreatorOutput } from "../types/programs";
import { Metaplex } from "@metaplex-foundation/js";
import { PublicKey, SignaturesForAddressOptions, TransactionResponse } from "@solana/web3.js";
import { ThirdwebStorage, UploadProgressEvent } from "@thirdweb-dev/storage";
/**
 * A collection of NFTs that can be lazy minted and claimed
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Get the interface for your NFT Drop program
 * const program = await sdk.getProgram("{{program_address}}", "nft-drop");
 * ```
 *
 * @public
 */
export declare class NFTDrop {
    private metaplex;
    private storage;
    private nft;
    accountType: "nft-drop";
    publicKey: PublicKey;
    get network(): import("@metaplex-foundation/js").Cluster;
    /**
     * Manage the claim conditions for this drop
     *
     * @example
     * ```jsx
     * // set your claim conditions
     * await program.claimConditions.set({
     *  maxClaimable: 100,
     *  price: 0.5,
     *  startTime: new Date(),
     * });
     *
     * // get your claim conditions
     * const conditions = await program.claimConditions.get();
     * console.log(conditions.maxClaimable);
     * console.log(conditions.claimedSupply);
     * ```
     */
    claimConditions: ClaimConditions;
    constructor(dropAddress: string, metaplex: Metaplex, storage: ThirdwebStorage);
    /**
     * Get the metadata for this program.
     * @returns program metadata
     *
     * @example
     * ```jsx
     * const metadata = await program.getMetadata();
     * console.log(metadata.name);
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
     *
     * console.log(nft.name);
     * ```
     */
    get(nftAddress: string): Promise<NFT>;
    /**
     * Get the metadata for all NFTs on this drop
     * @returns metadata for all minted NFTs
     *
     * @example
     * ```jsx
     * // Get all the NFTs that have been minted on this contract
     * const nfts = await program.getAll();
     *
     * console.log(nfts[0].metadata.name);
     * ```
     */
    getAll(queryParams?: QueryAllParams): Promise<NFT[]>;
    /**
     * Get the all transactions for this program
     * @beta
     */
    getTransactions(options?: SignaturesForAddressOptions): Promise<TransactionResponse[]>;
    /**
     * Get the metadata for all the claimed NFTs on this drop
     * @returns metadata for all claimed NFTs
     *
     * @example
     * ```jsx
     * // Get all the NFTs that have already been claimed from this drop
     * const nfts = await program.getAllClaimed();
     * console.log(nfts[0].name)
     * ```
     */
    getAllClaimed(queryParams?: QueryAllParams): Promise<NFT[]>;
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
     * // The address of the wallet to check the balance of
     * const walletAddress = "..."
     * // The mint address of the NFT to check the balance of
     * const nftAddress = "..."
     * // Get the actual NFT balance of the specified wallet
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
     * Get the total minted supply of this drop
     * @returns the total supply
     *
     * @example
     * ```jsx
     * // Get the total number of NFTs that have been minted on this drop
     * const supply = await program.totalSupply();
     * ```
     */
    totalSupply(): Promise<number>;
    /**
     * Get the total unclaimed supply of this drop
     * @returns the total supply
     *
     * @example
     * ```jsx
     * // Get the total number of lazy minted NFTs that aren't yet claimed
     * const supply = await program.totalUnclaimedSupply();
     * ```
     */
    totalUnclaimedSupply(): Promise<number>;
    /**
     * Get the total claimed supply of this drop
     * @returns the total supply
     *
     * @example
     * ```jsx
     * // Get the total number of lazy minted NFTs that have already been claimed
     * const supply = await program.totalClaimedSupply();
     * ```
     */
    totalClaimedSupply(): Promise<number>;
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
     * Lazy mint NFTs to be claimed later
     * @param metadatas - The metadata of the NFTs to lazy mint
     * @param options
     * @returns the transaction result of the lazy mint
     *
     * @example
     * ```jsx
     * // Add the metadata of your NFTs
     * const metadata = [
     *   {
     *     name: "NFT #1",
     *     description: "My first NFT!",
     *     image: readFileSync("files/image.jpg"),
     *     properties: [
     *       {
     *         name: "coolness",
     *         value: "very cool!"
     *       }
     *     ]
     *   }
     * ];
     *
     * // And lazy mint NFTs to your program
     * const tx = await program.lazyMint(metadatas);
     * ```
     */
    lazyMint(metadatas: NFTMetadataInput[], options?: {
        onProgress: (event: UploadProgressEvent) => void;
    }): Promise<TransactionResult[]>;
    /**
     * Claim an NFT from the drop with connected wallet
     * @returns - the mint address of the claimed NFT
     *
     * @example
     * ```jsx
     * // Specify the quantity of NFTs to claim
     * const quantity = 1;
     * // Claim NFTs and get their mint addresses
     * const claimedAddresses = await program.claim(quantity);
     * console.log("Claimed NFT at address", claimedAddresses[0]);
     * ```
     */
    claim(amount: Amount): Promise<string[]>;
    /**
     * Claim an NFT from the drop for the specified wallet
     * @returns - the mint address of the claimed NFT
     *
     * @example
     * ```jsx
     * // Specify which address to claim the NFTs to
     * const receiverAddress =  "...";
     * // Claim the NFTs to the specified wallet and get the mint addresses of the NFTs
     * const claimedAddresses = await program.claimTo(receiverAddress, 1);
     * console.log("Claimed NFT at address", claimedAddresses[0]);
     * ```
     */
    claimTo(receiverAddress: string, amount: Amount): Promise<string[]>;
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
    updateRoyalty(sellerFeeBasisPoints: number, updateAll?: boolean): Promise<TransactionResult[] | {
        signature: string;
    }>;
    private getCandyMachine;
}
//# sourceMappingURL=nft-drop.d.ts.map