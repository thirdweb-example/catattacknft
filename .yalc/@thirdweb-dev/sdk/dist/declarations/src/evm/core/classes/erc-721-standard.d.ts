import type { DropERC721, SignatureDrop, TokenERC721 } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, BigNumberish } from "ethers";
import { QueryAllParams } from "../../../core/schema/QueryParams";
import { NFT } from "../../../core/schema/nft";
import { Address } from "../../schema/shared/Address";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import { BaseERC721 } from "../../types/eips";
import { UpdateableNetwork } from "../interfaces/contract";
import { NetworkInput } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { Erc721 } from "./erc-721";
import { Transaction } from "./transactions";
/**
 * Standard ERC721 NFT functions
 * @remarks Basic functionality for a ERC721 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.nft.transfer(walletAddress, tokenId);
 * ```
 * @public
 */
export declare class StandardErc721<T extends SignatureDrop | DropERC721 | TokenERC721 | BaseERC721 = BaseERC721> implements UpdateableNetwork {
    protected contractWrapper: ContractWrapper<T>;
    protected storage: ThirdwebStorage;
    erc721: Erc721<T>;
    private _chainId;
    get chainId(): number;
    constructor(contractWrapper: ContractWrapper<T>, storage: ThirdwebStorage, chainId: number);
    /**
     * @internal
     */
    onNetworkUpdated(network: NetworkInput): void;
    getAddress(): Address;
    /**
     * Get all NFTs
     *
     * @remarks Get all the data associated with every NFT in this contract.
     *
     * By default, returns the first 100 NFTs, use queryParams to fetch more.
     *
     * @example
     * ```javascript
     * const nfts = await contract.getAll();
     * console.log(nfts);
     * ```
     * @param queryParams - optional filtering to only fetch a subset of results.
     * @returns The NFT metadata for all NFTs queried.
     */
    getAll(queryParams?: QueryAllParams): Promise<NFT[]>;
    /**
     * Get all NFTs owned by a specific wallet
     *
     * @remarks Get all the data associated with the NFTs owned by a specific wallet.
     *
     * @example
     * ```javascript
     * // Address of the wallet to get the NFTs of
     * const address = "{{wallet_address}}";
     * const nfts = await contract.getOwned(address);
     * console.log(nfts);
     * ```
     * @param walletAddress - the wallet address to query, defaults to the connected wallet
     * @returns The NFT metadata for all NFTs in the contract.
     */
    getOwned(walletAddress?: AddressOrEns): Promise<NFT[]>;
    /**
     * Get Owned Token Ids
     * @remarks Get all the token ids of NFTs owned by a specific wallet (no metadata)
     */
    getOwnedTokenIds(walletAddress?: AddressOrEns): Promise<BigNumber[]>;
    /**
     * Get total minted supply count
     */
    totalSupply(): Promise<BigNumber>;
    /**
     * Get a single NFT
     *
     * @example
     * ```javascript
     * const tokenId = 0;
     * const nft = await contract.get(tokenId);
     * ```
     * @param tokenId - the tokenId of the NFT to retrieve
     * @returns The NFT metadata
     */
    get(tokenId: BigNumberish): Promise<NFT>;
    /**
     * Get the current owner of a given NFT within this Contract
     *
     * @param tokenId - the tokenId of the NFT
     * @returns the address of the owner
     */
    ownerOf(tokenId: BigNumberish): Promise<string>;
    /**
     * Get NFT Balance
     *
     * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
     *
     * @example
     * ```javascript
     * const walletAddress = "{{wallet_address}}";
     * const balance = await contract.balanceOf(walletAddress);
     * console.log(balance);
     * ```
     */
    balanceOf(address: AddressOrEns): Promise<BigNumber>;
    /**
     * Get NFT Balance for the currently connected wallet
     */
    balance(): Promise<BigNumber>;
    /**
     * Get whether this wallet has approved transfers from the given operator
     * @param address - the wallet address
     * @param operator - the operator address
     */
    isApproved(address: AddressOrEns, operator: AddressOrEns): Promise<boolean>;
    /**
     * Transfer an NFT
     *
     * @remarks Transfer an NFT from the connected wallet to another wallet.
     *
     * @example
     * ```javascript
     * const walletAddress = "{{wallet_address}}";
     * const tokenId = 0;
     * await contract.transfer(walletAddress, tokenId);
     * ```
     */
    transfer: {
        (to: string, tokenId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (to: string, tokenId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
     * @param operator - the operator's address
     * @param approved - whether to approve or remove
     *
     * @internal
     */
    setApprovalForAll: {
        (operator: string, approved: boolean): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (operator: string, approved: boolean) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Approve an operator for the NFT owner. Operators can call transferFrom or safeTransferFrom for the specified token.
     * @param operator - the operator's address
     * @param tokenId - the tokenId to give approval for
     *
     * @internal
     */
    setApprovalForToken: {
        (operator: string, tokenId: BigNumberish): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (operator: string, tokenId: BigNumberish) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
}
//# sourceMappingURL=erc-721-standard.d.ts.map