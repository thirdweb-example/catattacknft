import type { DropERC1155, TokenERC1155 } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, BigNumberish, BytesLike } from "ethers";
import { NFT } from "../../../core/schema/nft";
import { Address } from "../../schema/shared/Address";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import { BaseERC1155, BaseSignatureMintERC1155 } from "../../types/eips";
import { UpdateableNetwork } from "../interfaces/contract";
import { NetworkInput } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { Erc1155 } from "./erc-1155";
/**
 * Standard ERC1155 NFT functions
 * @remarks Basic functionality for a ERC1155 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.transfer(walletAddress, tokenId, quantity);
 * ```
 * @public
 */
export declare class StandardErc1155<T extends DropERC1155 | TokenERC1155 | BaseERC1155 = BaseERC1155 | BaseSignatureMintERC1155> implements UpdateableNetwork {
    protected contractWrapper: ContractWrapper<T>;
    protected storage: ThirdwebStorage;
    erc1155: Erc1155;
    private _chainId;
    get chainId(): number;
    constructor(contractWrapper: ContractWrapper<T>, storage: ThirdwebStorage, chainId: number);
    /**
     * @internal
     */
    onNetworkUpdated(network: NetworkInput): void;
    getAddress(): Address;
    /**
     * Get a single NFT
     *
     * @example
     * ```javascript
     * const nft = await contract.get("0");
     * ```
     * @param tokenId - the tokenId of the NFT to retrieve
     * @returns The NFT metadata
     */
    get(tokenId: BigNumberish): Promise<NFT>;
    /**
     * Returns the total supply of a specific token
     * @param tokenId - The token ID to get the total supply of
     * @returns the total supply
     */
    totalSupply(tokenId: BigNumberish): Promise<BigNumber>;
    /**
     * Get NFT Balance
     *
     * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
     *
     * @example
     * ```javascript
     * // Address of the wallet to check NFT balance
     * const walletAddress = "{{wallet_address}}";
     * const tokenId = 0; // Id of the NFT to check
     * const balance = await contract.balanceOf(walletAddress, tokenId);
     * ```
     */
    balanceOf(address: AddressOrEns, tokenId: BigNumberish): Promise<BigNumber>;
    /**
     * Get NFT Balance for the currently connected wallet
     */
    balance(tokenId: BigNumberish): Promise<BigNumber>;
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
     * // Address of the wallet you want to send the NFT to
     * const toAddress = "{{wallet_address}}";
     * const tokenId = "0"; // The token ID of the NFT you want to send
     * const amount = 3; // How many copies of the NFTs to transfer
     * await contract.transfer(toAddress, tokenId, amount);
     * ```
     */
    transfer: {
        (to: string, tokenId: BigNumberish, amount: BigNumberish, data?: BytesLike | undefined): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (to: string, tokenId: BigNumberish, amount: BigNumberish, data?: BytesLike | undefined) => Promise<import("./transactions").Transaction<Omit<{
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
        prepare: (operator: string, approved: boolean) => Promise<import("./transactions").Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * Airdrop multiple NFTs
     *
     * @remarks Airdrop one or multiple NFTs to the provided wallet addresses.
     * @twfeature ERC1155
     * @example
     * ```javascript
     * // The token ID of the NFT you want to airdrop
     * const tokenId = "0";
     * // Array of objects of addresses and quantities to airdrop NFTs to
     * const addresses = [
     *  {
     *    address: "0x...",
     *    quantity: 2,
     *  },
     *  {
     *   address: "0x...",
     *    quantity: 3,
     *  },
     * ];
     * await contract.airdrop(tokenId, addresses);
     *
     * // You can also pass an array of addresses, it will airdrop 1 NFT per address
     * const tokenId = "0";
     * const addresses = [
     *  "0x...", "0x...", "0x...",
     * ]
     * await contract.airdrop(tokenId, addresses);
     * ```
     */
    airdrop: {
        (tokenId: BigNumberish, addresses: string[] | {
            address: string;
            quantity?: string | number | undefined;
        }[], fromAddress?: string | undefined, data?: BytesLike | undefined): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (tokenId: BigNumberish, addresses: string[] | {
            address: string;
            quantity?: string | number | undefined;
        }[], fromAddress?: string | undefined, data?: BytesLike | undefined) => Promise<import("./transactions").Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
}
//# sourceMappingURL=erc-1155-standard.d.ts.map