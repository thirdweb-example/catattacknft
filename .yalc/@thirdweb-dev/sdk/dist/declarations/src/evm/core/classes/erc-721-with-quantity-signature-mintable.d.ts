import type { SignatureMintERC721, TokenERC721 } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { PayloadToSign721withQuantity, SignedPayload721WithQuantitySignature } from "../../schema/contracts/common/signature";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResultWithId } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * Enables generating dynamic ERC721 NFTs with rules and an associated signature, which can then be minted by anyone securely
 * @public
 */
export declare class Erc721WithQuantitySignatureMintable implements DetectableFeature {
    featureName: "ERC721SignatureMintV2";
    private contractWrapper;
    private storage;
    constructor(contractWrapper: ContractWrapper<SignatureMintERC721 | TokenERC721>, storage: ThirdwebStorage);
    /**
     * Mint a dynamically generated NFT
     *
     * @remarks Mint a dynamic NFT with a previously generated signature.
     *
     * @example
     * ```javascript
     * // see how to craft a payload to sign in the `generate()` documentation
     * const signedPayload = contract.erc721.signature.generate(payload);
     *
     * // now anyone can mint the NFT
     * const tx = contract.erc721.signature.mint(signedPayload);
     * const receipt = tx.receipt; // the mint transaction receipt
     * const mintedId = tx.id; // the id of the NFT minted
     * ```
     * @param signedPayload - the previously generated payload and signature with {@link Erc721WithQuantitySignatureMintable.generate}
     * @twfeature ERC721SignatureMint
     */
    mint: {
        (signedPayload: SignedPayload721WithQuantitySignature): Promise<TransactionResultWithId>;
        prepare: (signedPayload: SignedPayload721WithQuantitySignature) => Promise<Transaction<TransactionResultWithId>>;
    };
    /**
     * Mint any number of dynamically generated NFT at once
     * @remarks Mint multiple dynamic NFTs in one transaction. Note that this is only possible for free mints (cannot batch mints with a price attached to it for security reasons)
     * @param signedPayloads - the array of signed payloads to mint
     * @twfeature ERC721SignatureMint
     */
    mintBatch: {
        (signedPayloads: SignedPayload721WithQuantitySignature[]): Promise<TransactionResultWithId[]>;
        prepare: (signedPayloads: SignedPayload721WithQuantitySignature[]) => Promise<Transaction<TransactionResultWithId[]>>;
    };
    /**
     * Verify that a payload is correctly signed
     * @param signedPayload - the payload to verify
     * @twfeature ERC721SignatureMint
     *
     * @example
     * ```javascript
     * const nftMetadata = {
     *   name: "Cool NFT #1",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * };
     *
     * const startTime = new Date();
     * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
     * const payload = {
     *   metadata: nftMetadata, // The NFT to mint
     *   to: {{wallet_address}}, // Who will receive the NFT
     *   quantity: 2, // the quantity of NFTs to mint
     *   price: 0.5, // the price per NFT
     *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
     *   mintStartTime: startTime, // can mint anytime from now
     *   mintEndTime: endTime, // to 24h from now
     *   royaltyRecipient: "0x...", // custom royalty recipient for this NFT
     *   royaltyBps: 100, // custom royalty fees for this NFT (in bps)
     *   primarySaleRecipient: "0x...", // custom sale recipient for this NFT
     * };
     *
     * const signedPayload = await contract.erc721.signature.generate(payload);
     * // Now you can verify if the signed payload is valid
     * const isValid = await contract.erc721.signature.verify(signedPayload);
     * ```
     */
    verify(signedPayload: SignedPayload721WithQuantitySignature): Promise<boolean>;
    /**
     * Generate a signature that can be used to mint a dynamic NFT
     *
     * @remarks Takes in an NFT and some information about how it can be minted, uploads the metadata and signs it with your private key. The generated signature can then be used to mint an NFT using the exact payload and signature generated.
     *
     * @example
     * ```javascript
     * const nftMetadata = {
     *   name: "Cool NFT #1",
     *   description: "This is a cool NFT",
     *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
     * };
     *
     * const startTime = new Date();
     * const endTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
     * const payload = {
     *   metadata: nftMetadata, // The NFT to mint
     *   to: {{wallet_address}}, // Who will receive the NFT
     *   quantity: 2, // the quantity of NFTs to mint
     *   price: 0.5, // the price per NFT
     *   currencyAddress: NATIVE_TOKEN_ADDRESS, // the currency to pay with
     *   mintStartTime: startTime, // can mint anytime from now
     *   mintEndTime: endTime, // to 24h from now
     *   royaltyRecipient: "0x...", // custom royalty recipient for this NFT
     *   royaltyBps: 100, // custom royalty fees for this NFT (in bps)
     *   primarySaleRecipient: "0x...", // custom sale recipient for this NFT
     * };
     *
     * const signedPayload = await contract.erc721.signature.generate(payload);
     * // now anyone can use these to mint the NFT using `contract.erc721.signature.mint(signedPayload)`
     * ```
     * @param mintRequest - the payload to sign
     * @returns the signed payload and the corresponding signature
     * @twfeature ERC721SignatureMint
     */
    generate(mintRequest: PayloadToSign721withQuantity): Promise<SignedPayload721WithQuantitySignature>;
    /**
     * Genrate a batch of signatures that can be used to mint many dynamic NFTs.
     *
     * @remarks See {@link Erc721WithQuantitySignatureMintable.generate}
     *
     * @param payloadsToSign - the payloads to sign
     * @returns an array of payloads and signatures
     * @twfeature ERC721SignatureMint
     */
    generateBatch(payloadsToSign: PayloadToSign721withQuantity[]): Promise<SignedPayload721WithQuantitySignature[]>;
    /** ******************************
     * PRIVATE FUNCTIONS
     *******************************/
    /**
     * Maps a payload to the format expected by the contract
     *
     * @internal
     *
     * @param mintRequest - The payload to map.
     * @returns - The mapped payload.
     */
    private mapPayloadToContractStruct;
    private mapLegacyPayloadToContractStruct;
    private isLegacyNFTContract;
}
//# sourceMappingURL=erc-721-with-quantity-signature-mintable.d.ts.map