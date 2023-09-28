import type { IERC721Supply } from "@thirdweb-dev/contracts-js";
import { BigNumber } from "ethers";
import type { QueryAllParams } from "../../../core/schema/QueryParams";
import type { NFT } from "../../../core/schema/nft";
import type { BaseERC721 } from "../../types/eips";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import type { ContractWrapper } from "./contract-wrapper";
import type { Erc721 } from "./erc-721";
import { Erc721Enumerable } from "./erc-721-enumerable";
import { Erc721AQueryable } from "./erc-721a-queryable";
/**
 * List ERC721 NFTs
 * @remarks Easily list all the NFTs in a ERC721 contract.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const nfts = await contract.nft.query.all();
 * ```
 * @public
 */
export declare class Erc721Supply implements DetectableFeature {
    featureName: "ERC721Supply";
    private contractWrapper;
    private erc721;
    owned: Erc721Enumerable | Erc721AQueryable | undefined;
    constructor(erc721: Erc721, contractWrapper: ContractWrapper<BaseERC721 & IERC721Supply>);
    /**
     * Get all NFTs
     *
     * @remarks Get all the data associated with every NFT in this contract.
     *
     * By default, returns the first 100 NFTs, use queryParams to fetch more.
     *
     * @example
     * ```javascript
     * const nfts = await contract.nft.query.all();
     * ```
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The NFT metadata for all NFTs queried.
     */
    all(queryParams?: QueryAllParams): Promise<NFT[]>;
    /**
     * Return all the owners of each token id in this contract
     * @returns
     */
    allOwners(): Promise<{
        tokenId: number;
        owner: string;
    }[]>;
    /**
     * Get the number of NFTs minted
     * @remarks This returns the total number of NFTs minted in this contract, **not** the total supply of a given token.
     *
     * @returns the total number of NFTs minted in this contract
     * @public
     */
    totalCount(): Promise<BigNumber>;
    /**
     * Get the number of NFTs of this contract currently owned by end users
     * @returns the total number of NFTs of this contract in circulation (minted & not burned)
     * @public
     */
    totalCirculatingSupply(): Promise<BigNumber>;
    private detectErc721Owned;
}
//# sourceMappingURL=erc-721-supply.d.ts.map