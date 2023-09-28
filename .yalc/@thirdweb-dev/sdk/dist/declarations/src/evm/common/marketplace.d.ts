import { BigNumber, BigNumberish, ContractFunction, providers } from "ethers";
import { ContractWrapper } from "../core/classes/contract-wrapper";
import { NewAuctionListing, NewDirectListing, Offer, UnmappedOffer } from "../types/marketplace";
/**
 * This method checks if the given token is approved for the transferrerContractAddress contract.
 * This is particularly useful for contracts that need to transfer NFTs on the users' behalf
 *
 * @internal
 * @param provider - The connected provider
 * @param transferrerContractAddress - The address of the marketplace contract
 * @param assetContract - The address of the asset contract.
 * @param tokenId - The token id of the token.
 * @param owner - The address of the account that owns the token.
 * @returns - True if the transferrerContractAddress is approved on the token, false otherwise.
 */
export declare function isTokenApprovedForTransfer(provider: providers.Provider, transferrerContractAddress: string, assetContract: string, tokenId: BigNumberish, owner: string): Promise<boolean>;
/**
 * Checks if the marketplace is approved to make transfers on the assetContract
 * If not, it tries to set the approval.
 * @param contractWrapper
 * @param marketplaceAddress
 * @param assetContract
 * @param tokenId
 * @param from
 */
export declare function handleTokenApproval(contractWrapper: ContractWrapper<any>, marketplaceAddress: string, assetContract: string, tokenId: BigNumberish, from: string): Promise<void>;
/**
 * Used to verify fields in new listing.
 * @internal
 */
export declare function validateNewListingParam(param: NewDirectListing | NewAuctionListing): void;
/**
 * Maps a contract offer to the strict interface
 *
 * @internal
 * @param offer
 * @returns - An `Offer` object
 */
export declare function mapOffer(provider: providers.Provider, listingId: BigNumber, offer: UnmappedOffer): Promise<Offer>;
export declare function isWinningBid(winningPrice: BigNumberish, newBidPrice: BigNumberish, bidBuffer: BigNumberish): boolean;
export declare function getAllInBatches(start: number, end: number, fn: ContractFunction): Promise<any[]>;
//# sourceMappingURL=marketplace.d.ts.map