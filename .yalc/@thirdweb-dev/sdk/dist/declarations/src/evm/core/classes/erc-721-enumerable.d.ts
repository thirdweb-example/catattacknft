import type { IERC721Enumerable } from "@thirdweb-dev/contracts-js";
import { BigNumber } from "ethers";
import type { NFT } from "../../../core/schema/nft";
import type { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import type { BaseERC721 } from "../../types/eips";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import type { ContractWrapper } from "./contract-wrapper";
import type { Erc721 } from "./erc-721";
/**
 * List owned ERC721 NFTs
 * @remarks Easily list all the NFTs from a ERC721 contract, owned by a certain wallet.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const walletAddress = "0x...";
 * const ownedNFTs = await contract.nft.query.owned.all(walletAddress);
 * ```
 * @public
 */
export declare class Erc721Enumerable implements DetectableFeature {
    featureName: "ERC721Enumerable";
    private contractWrapper;
    private erc721;
    constructor(erc721: Erc721, contractWrapper: ContractWrapper<BaseERC721 & IERC721Enumerable>);
    /**
     * Get all NFTs owned by a specific wallet
     *
     * @remarks Get all the data associated with the NFTs owned by a specific wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet to get the NFTs of
     * const address = "{{wallet_address}}";
     * const nfts = await contract.nft.query.owned.all(address);
     * ```
     * @param walletAddress - the wallet address to query, defaults to the connected wallet
     * @returns The NFT metadata for all NFTs in the contract.
     */
    all(walletAddress?: AddressOrEns): Promise<NFT[]>;
    /**
     * Get all token ids of NFTs owned by a specific wallet.
     * @param walletAddress - the wallet address to query, defaults to the connected wallet
     */
    tokenIds(walletAddress?: AddressOrEns): Promise<BigNumber[]>;
}
//# sourceMappingURL=erc-721-enumerable.d.ts.map