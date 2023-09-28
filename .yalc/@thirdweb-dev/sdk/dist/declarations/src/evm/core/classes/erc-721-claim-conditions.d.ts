import type { NFT } from "../../../core/schema/nft";
import type { ClaimOptions } from "../../types/claim-conditions/claim-conditions";
import type { BaseClaimConditionERC721 } from "../../types/eips";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import type { TransactionResultWithId } from "../types";
import type { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
import type { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumberish } from "ethers";
import { DropClaimConditions } from "./drop-claim-conditions";
import type { Erc721 } from "./erc-721";
/**
 * Configure and claim ERC721 NFTs
 * @remarks Manage claim phases and claim ERC721 NFTs that have been lazily minted.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.erc721.claim(quantity);
 * await contract.erc721.claimConditions.getActive();
 * ```
 */
export declare class Erc721ClaimableWithConditions implements DetectableFeature {
    featureName: "ERC721ClaimConditionsV2";
    /**
     * Configure claim conditions
     * @remarks Define who can claim NFTs in the collection, when and how many.
     * @example
     * ```javascript
     * const presaleStartTime = new Date();
     * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
     * const claimConditions = [
     *   {
     *     startTime: presaleStartTime, // start the presale now
     *     maxClaimableSupply: 2, // limit how many mints for this presale
     *     price: 0.01, // presale price
     *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
     *   },
     *   {
     *     startTime: publicSaleStartTime, // 24h after presale, start public sale
     *     price: 0.08, // public sale price
     *   }
     * ]);
     * await contract.erc721.claimConditions.set(claimConditions);
     * ```
     */
    conditions: DropClaimConditions<BaseClaimConditionERC721>;
    private contractWrapper;
    private erc721;
    private storage;
    constructor(erc721: Erc721, contractWrapper: ContractWrapper<BaseClaimConditionERC721>, storage: ThirdwebStorage);
    /**
     * Claim unique NFTs to a specific Wallet
     *
     * @remarks Let the specified wallet claim NFTs.
     *
     * @example
     * ```javascript
     * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
     * const quantity = 1; // how many unique NFTs you want to claim
     *
     * const tx = await contract.erc721.claimTo(address, quantity);
     * const receipt = tx[0].receipt; // the transaction receipt
     * const claimedTokenId = tx[0].id; // the id of the first NFT claimed
     * const claimedNFT = await tx[0].data(); // (optional) get the first claimed NFT metadata
     * ```
     *
     * @param destinationAddress - Address you want to send the token to
     * @param quantity - Quantity of the tokens you want to claim
     * @param options
     * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
     */
    to: {
        (destinationAddress: string, quantity: BigNumberish, options?: ClaimOptions | undefined): Promise<TransactionResultWithId<NFT>[]>;
        prepare: (destinationAddress: string, quantity: BigNumberish, options?: ClaimOptions | undefined) => Promise<Transaction<TransactionResultWithId<NFT>[]>>;
    };
}
//# sourceMappingURL=erc-721-claim-conditions.d.ts.map