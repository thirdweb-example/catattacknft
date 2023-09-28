import { NFTCollectionMetadataInput, TokenMetadataInput } from "../types/programs";
import { NFTDropContractInput } from "../types/programs/nft-drop";
import { Registry } from "./registry";
import { Metaplex } from "@metaplex-foundation/js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
/**
 * Deploy new programs
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * // Instantiate the SDK and pass in a signer
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Define the metadata for your program
 * const metadata = {
 *   name: "NFT Contract",
 *   image: readFileSync("files/image.jpg"),
 * };
 *
 * // And deploy a new program from the connected wallet
 * const address = await sdk.deployer.createNftCollection(metadata);
 * ```
 *
 * @public
 */
export declare class Deployer {
    private metaplex;
    private storage;
    private regsitry;
    constructor(registry: Registry, metaplex: Metaplex, storage: ThirdwebStorage);
    /**
     * Create a new token program
     * @param tokenMetadata - the metadata of the token program
     * @returns - the address of the new token program
     *
     * @example
     * ```jsx
     * const metadata = {
     *   name: "My Token",
     *   symbol: "TKN",
     *   initialSupply: 100,
     * };
     *
     * const address = await sdk.deployer.createToken(metadata);
     * ```
     */
    createToken(tokenMetadata: TokenMetadataInput): Promise<string>;
    /**
     * Create a new NFT collection program
     * @param collectionMetadata - the metadata of the nft collection program
     * @returns - the address of the new nft collection program
     *
     * @example
     * ```jsx
     * const metadata = {
     *   name: "My NFT Collection",
     *   symbol: "NFT",
     * };
     *
     * const address = await sdk.deployer.createNftCollection(metadata);
     * ```
     */
    createNftCollection(collectionMetadata: NFTCollectionMetadataInput): Promise<string>;
    /**
     * Create a new NFT drop program
     * @param metadata - the metadata of the nft drop program
     * @returns - the address of the new nft drop program
     *
     * @example
     * ```jsx
     * const metadata = {
     *   name: "My NFT Drop",
     *   symbol: "NFT",
     *   totalSupply: 5,
     * };
     *
     * const address = await sdk.deployer.createNftDrop(metadata);
     * ```
     */
    createNftDrop(metadata: NFTDropContractInput): Promise<string>;
}
//# sourceMappingURL=deployer.d.ts.map