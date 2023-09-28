import type { TokenERC1155 } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { NFT_BASE_CONTRACT_ROLES } from "../../contracts/contractRoles";
import { PayloadToSign1155, PayloadToSign1155WithTokenId, SignedPayload1155 } from "../../schema/contracts/common/signature";
import { BaseSignatureMintERC1155 } from "../../types/eips";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResultWithId } from "../types";
import { ContractRoles } from "./contract-roles";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * Enables generating dynamic ERC1155 NFTs with rules and an associated signature, which can then be minted by anyone securely
 * @public
 */
export declare class Erc1155SignatureMintable implements DetectableFeature {
    featureName: "ERC1155SignatureMintable";
    private contractWrapper;
    private storage;
    private roles;
    constructor(contractWrapper: ContractWrapper<BaseSignatureMintERC1155 | TokenERC1155>, storage: ThirdwebStorage, roles?: ContractRoles<TokenERC1155, (typeof NFT_BASE_CONTRACT_ROLES)[number]>);
    /**
     * Mint a dynamically generated NFT
     *
     * @remarks Mint a dynamic NFT with a previously generated signature.
     *
     * @example
     * ```javascript
     * // see how to craft a payload to sign in the `generate()` documentation
     * const signedPayload = contract.erc1155.signature.generate(payload);
     *
     * // now anyone can mint the NFT
     * const tx = contract.erc1155.signature.mint(signedPayload);
     * ```
     * @param signedPayload - the previously generated payload and signature with {@link Erc1155SignatureMintable.generate}
     * @twfeature ERC1155SignatureMintable
     */
    mint: {
        (signedPayload: SignedPayload1155): Promise<TransactionResultWithId>;
        prepare: (signedPayload: SignedPayload1155) => Promise<Transaction<TransactionResultWithId>>;
    };
    /**
     * Mint any number of dynamically generated NFT at once
     * @remarks Mint multiple dynamic NFTs in one transaction. Note that this is only possible for free mints (cannot batch mints with a price attached to it for security reasons)
     *
     * @example
     * ```javascript
     * // see how to craft a batch of payloads to sign in the `generateBatch()` documentation
     * const signedPayloads = contract.erc1155.signature.generateBatch(payloads);
     *
     * // now anyone can mint the NFT
     * const tx = contract.erc1155.signature.mintBatch(signedPayloads);
     * ```
     *
     * @param signedPayloads - the array of signed payloads to mint
     * @twfeature ERC1155SignatureMintable
     */
    mintBatch: {
        (signedPayloads: SignedPayload1155[]): Promise<TransactionResultWithId[]>;
        prepare: (signedPayloads: SignedPayload1155[]) => Promise<Transaction<TransactionResultWithId[]>>;
    };
    /**
     * Verify that a payload is correctly signed
     * @param signedPayload - the payload to verify
     * @twfeature ERC1155SignatureMintable
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
     * const signedPayload = contract.erc1155.signature.generate(payload);
     * // Now you can verify that the payload is valid
     * const isValid = await contract.erc1155.signature.verify(signedPayload);
     * ```
     */
    verify(signedPayload: SignedPayload1155): Promise<boolean>;
    /**
     * Generate a signature that can be used to mint an NFT dynamically.
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
     * const signedPayload = await contract.erc1155.signature.generate(payload);
     * // now anyone can use these to mint the NFT using `contract.erc1155.signature.mint(signedPayload)`
     * ```
     * @param payloadToSign - the payload to sign
     * @returns the signed payload and the corresponding signature
     * @twfeature ERC1155SignatureMintable
     */
    generate(payloadToSign: PayloadToSign1155): Promise<SignedPayload1155>;
    /**
     * Generate a signature that can be used to mint additionaly supply to an existing NFT.
     *
     * @remarks Takes in a payload with the token ID of an existing NFT, and signs it with your private key. The generated signature can then be used to mint additional supply to the NFT using the exact payload and signature generated.
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
     *   tokenId: 0, // Instead of metadata, we specificy the token ID of the NFT to mint supply to
     *   to: {{wallet_address}}, // Who will receive the NFT (or AddressZero for anyone)
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
     * const signedPayload = await contract.erc1155.signature.generateFromTokenId(payload);
     * // now anyone can use these to mint the NFT using `contract.erc1155.signature.mint(signedPayload)`
     * ```
     * @param payloadToSign - the payload to sign
     * @returns the signed payload and the corresponding signature
     * @twfeature ERC1155SignatureMintable
     */
    generateFromTokenId(payloadToSign: PayloadToSign1155WithTokenId): Promise<SignedPayload1155>;
    /**
     * Generate a batch of signatures that can be used to mint many new NFTs dynamically.
     *
     * @remarks See {@link Erc1155SignatureMintable.generate}
     *
     * @param payloadsToSign - the payloads to sign
     * @returns an array of payloads and signatures
     * @twfeature ERC1155SignatureMintable
     */
    generateBatch(payloadsToSign: PayloadToSign1155[]): Promise<SignedPayload1155[]>;
    /**
     * Genrate a batch of signatures that can be used to mint new NFTs or additionaly supply to existing NFTs dynamically.
     *
     * @remarks See {@link Erc1155SignatureMintable.generateFromTokenId}
     *
     * @param payloadsToSign - the payloads to sign with tokenIds specified
     * @returns an array of payloads and signatures
     * @twfeature ERC1155SignatureMintable
     */
    generateBatchFromTokenIds(payloadsToSign: PayloadToSign1155WithTokenId[]): Promise<SignedPayload1155[]>;
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
}
//# sourceMappingURL=erc-1155-signature-mintable.d.ts.map