import type { BasicNFTInput } from "@thirdweb-dev/sdk";
import { RequiredParam } from "../../../core/query-utils/required-param";
import { AirdropNFTParams, BurnNFTParams, MintNFTParams, MintNFTReturnType, MintNFTSupplyParams, TransferNFTParams, WalletAddress, NFTContract } from "../../types";
import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import { Erc1155, QueryAllParams, NFT } from "@thirdweb-dev/sdk";
import { BigNumber, BigNumberish, providers } from "ethers";
/** **********************/
/**     READ  HOOKS     **/
/** **********************/
/**
 * Get a single NFT
 *
 * @example
 * ```javascript
 * const tokenId = 0; // the tokenId to look up
 * const { data: nft, isLoading, error } = useNFT(contract, tokenId);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @param tokenId - the tokenId to look up
 * @returns a response object that includes the metadata for the given tokenId
 * @beta
 * @twfeature ERC721 | ERC1155
 * @see {@link https://portal.thirdweb.com/react/react.usenft?utm_source=sdk | Documentation}
 */
export declare function useNFT<TContract extends NFTContract>(contract: RequiredParam<TContract>, tokenId: RequiredParam<BigNumberish>): UseQueryResult<NFT, unknown>;
/**
 * Get all NFTs
 *
 * @example
 * ```javascript
 * const { data: nfts, isLoading, error } = useNFTs(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @param queryParams - query params to pass to the query for pagination
 * @returns a response object that includes an array of NFTs
 * @twfeature ERC721Supply | ERC721Enumerable | ERC1155Enumerable
 * @beta
 * @see {@link https://portal.thirdweb.com/react/react.usenfts?utm_source=sdk | Documentation}
 */
export declare function useNFTs<TContract extends NFTContract>(contract: RequiredParam<TContract>, queryParams?: QueryAllParams): UseQueryResult<NFT[], unknown>;
/**
 * Get total supply count
 *
 * @example
 * ```javascript
 * const { contract } = useContract("{{contract_address}}");
 * const { data: count, isLoading, error } = useTotalCount(contract);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a response object that includes the total count of NFTs
 * @beta
 * @twfeature ERC721Supply | ERC1155Enumerable
 * @see {@link https://portal.thirdweb.com/react/react.usetotalcount?utm_source=sdk | Documentation}
 */
export declare function useTotalCount<TContract extends NFTContract>(contract: RequiredParam<TContract>): UseQueryResult<BigNumber, unknown>;
/**
 * Get total minted supply count
 *
 * @example
 * ```javascript
 * const { contract } = useContract("{{contract_address}}");
 * const { data: totalCirculatingSupply, isLoading, error } = useTotalCirculatingSupply(contract);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @param tokenId - required for ERC1155, the tokenId to look up
 * @returns a response object that includes the total minted supply
 * @beta
 * @twfeature ERC721Supply | ERC1155Enumerable
 * @see {@link https://portal.thirdweb.com/react/react.usetotalcirculatingsupply?utm_source=sdk | Documentation}
 */
export declare function useTotalCirculatingSupply(contract: RequiredParam<NFTContract>, tokenId?: RequiredParam<BigNumberish>): UseQueryResult<BigNumber, unknown>;
/**
 * Get all NFTs owned by a specific wallet
 *
 * @example
 * ```javascript
 * const { data: ownedNFTs, isLoading, error } = useOwnedNFTs(contract, "{{wallet_address}}");
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @param ownerWalletAddress - the wallet address to get owned tokens for
 * @returns a response object that includes the list of owned tokens
 * @beta
 * @twfeature ERC721Enumerable | ERC1155Enumerable | ERC721Supply
 * @see {@link https://portal.thirdweb.com/react/react.useownednfts?utm_source=sdk | Documentation}
 */
export declare function useOwnedNFTs<TContract extends NFTContract>(contract: RequiredParam<TContract>, ownerWalletAddress: RequiredParam<WalletAddress>): UseQueryResult<NFT[], unknown>;
/**
 * Get NFT balance of a specific wallet
 *
 * @example
 * ```javascript
 * const { data: ownerBalance, isLoading, error } = useNFTBalance(contract, "{{wallet_address}}");
 * // for ERC1155 contracts, you can also pass a tokenId
 * const tokenId = 0;
 * const { data: ownerBalance, isLoading, error } = useNFTBalance(contract, "{{wallet_address}}", tokenId);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @param ownerWalletAddress - the wallet address to check the balance of
 * @param tokenId - required for ERC1155, the tokenId to look up
 * @returns a response object that includes the total balance of the owner
 * @twfeature ERC721 | ERC1155
 * @see {@link https://portal.thirdweb.com/react/react.usenftbalance?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useNFTBalance(contract: RequiredParam<NFTContract>, ownerWalletAddress: RequiredParam<WalletAddress>, tokenId?: RequiredParam<BigNumberish>): UseQueryResult<BigNumber, unknown>;
/**
 * Get the shared metadata of an Open Edition NFT contract
 *
 * @example
 * ```javascript
 * const { data: sharedMetadata, isLoading, error } = useSharedMetadata(contract);
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a response object that includes the shared metadata of the contract
 * @twfeature ERC721SharedMetadata
 * @see {@link https://portal.thirdweb.com/react/react.usesharedmetadata?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useSharedMetadata(contract: RequiredParam<NFTContract>): UseQueryResult<BasicNFTInput | undefined>;
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Mint an NFT to a specific wallet
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: mintNft,
 *     isLoading,
 *     error,
 *   } = useMintNFT(contract);
 *
 *   if (error) {
 *     console.error("failed to mint NFT", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => mintNft({ name: "My awesome NFT!", to: "{{wallet_address}}" })}
 *     >
 *       Mint!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a mutation object that can be used to mint a new NFT token to the connected wallet
 * @beta
 * @twfeature ERC721Mintable | ERC1155Mintable
 * @see {@link https://portal.thirdweb.com/react/react.usemintnft?utm_source=sdk | Documentation}
 */
export declare function useMintNFT<TContract extends NFTContract>(contract: RequiredParam<TContract>): UseMutationResult<MintNFTReturnType<TContract>, unknown, MintNFTParams, unknown>;
/**
 * Increase the supply of an existing NFT
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: mintNftSupply,
 *     isLoading,
 *     error,
 *   } = useMintNFTSupply(contract);
 *
 *   if (error) {
 *     console.error("failed to mint additional supply", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => mintNftSupply({ tokenId: 0, additionalSupply: 100, to: "{{wallet_address}}"})}
 *     >
 *       Mint Additional Supply!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link Erc1155}
 * @returns a mutation object that can be used to mint a more supply of a token id to the provided wallet
 * @beta
 * @twfeature ERC1155Mintable
 * @see {@link https://portal.thirdweb.com/react/react.usemintnftsupply?utm_source=sdk | Documentation}
 */
export declare function useMintNFTSupply(contract: Erc1155): UseMutationResult<import("@thirdweb-dev/sdk").TransactionResultWithId<NFT>, unknown, MintNFTSupplyParams, unknown>;
/**
 * Transfer an NFT
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: transferNFT,
 *     isLoading,
 *     error,
 *   } = useTransferNFT(contract);
 *
 *   if (error) {
 *     console.error("failed to transfer NFT", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => transferNFT({
 *         to: "{{wallet_address}}",
 *         tokenId: 2
 *       })}
 *     >
 *       Transfer
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a mutation object that can be used to transfer NFTs
 * @beta
 * @twfeature ERC721 | ERC1155
 * @see {@link https://portal.thirdweb.com/react/react.usetransfernft?utm_source=sdk | Documentation}
 */
export declare function useTransferNFT<TContract extends NFTContract>(contract: RequiredParam<TContract>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, TransferNFTParams, unknown>;
/**
 * Airdrop NFTs to a list of wallets
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: airdropNFT,
 *     isLoading,
 *     error,
 *   } = useAirdropNFT(contract);
 *
 *   if (error) {
 *     console.error("failed to transfer batch NFTs", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => airdropNFT({
 *          tokenId: 2,
 *          addresses: [
 *            { address: "{{wallet_address}}", quantity: 2 },
 *            { address: "{{wallet_address}}", quantity: 4 } }
 *          ]
 *       )}
 *     >
 *       Airdrop NFT
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link Erc1155}
 * @returns a mutation object that can be used to transfer batch NFTs
 * @twfeature ERC1155
 * @see {@link https://portal.thirdweb.com/react/react.useairdropnft?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useAirdropNFT(contract: Erc1155): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, AirdropNFTParams, unknown>;
/**
 * Burn an NFT
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: burnNFT,
 *     isLoading,
 *     error,
 *   } = useBurnNFT(contract);
 *
 *   if (error) {
 *     console.error("failed to burn NFT", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => burnNFT({ tokenId: 0, amount: 1 })}
 *     >
 *       Burn!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link NFTContract}
 * @returns a mutation object that can be used to burn an NFT token from the connected wallet
 * @twfeature ERC721Burnable | ERC1155Burnable
 * @see {@link https://portal.thirdweb.com/react/react.useburnnft?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useBurnNFT<TContract extends NFTContract>(contract: RequiredParam<TContract>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, BurnNFTParams, unknown>;
/**
 * Set shared metadata
 * TODO add docs
 * @private
 */
export declare function useSetSharedMetadata<TContract extends NFTContract>(contract: RequiredParam<TContract>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, {
    name?: string | number | null | undefined;
    description?: string | null | undefined;
    image?: any;
    animation_url?: any;
}, unknown>;
//# sourceMappingURL=nft.d.ts.map