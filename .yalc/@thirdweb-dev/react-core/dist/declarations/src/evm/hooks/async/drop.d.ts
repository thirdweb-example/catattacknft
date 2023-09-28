import { RequiredParam } from "../../../core/query-utils/required-param";
import { ClaimNFTParams, ClaimNFTReturnType, DelayedRevealLazyMintInput, DropContract, RevealLazyMintInput, RevealableContract } from "../../types";
import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import type { NFT, QueryAllParams, UploadProgressEvent } from "@thirdweb-dev/sdk";
import type { NFTDrop } from "@thirdweb-dev/sdk";
import type { SignatureDrop } from "@thirdweb-dev/sdk";
import type { SmartContract } from "@thirdweb-dev/sdk";
import type { providers } from "ethers";
/** **********************/
/**       READ HOOKS    **/
/** **********************/
/**
 * Get all unclaimed NFTs
 *
 * @example
 * ```javascript
 * const { data: unclaimedNfts, isLoading, error } = useUnclaimedNFTs(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC721 spec (NFT drop, Signature Drop, or any custom contract that extends the ERC721 spec)
 * @param queryParams - query params to pass to the query for the sake of pagination
 * @returns a response object that includes an array of NFTs that are unclaimed
 * @twfeature ERC721LazyMintable
 * @see {@link https://portal.thirdweb.com/react/react.useunclaimednfts?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useUnclaimedNFTs(contract: RequiredParam<NFTDrop>, queryParams?: QueryAllParams): UseQueryResult<NFT[]>;
/**
 * Get all claimed NFTs
 *
 * @remarks Equivalent to using {@link useNFTs}.
 *
 * @example
 * ```javascript
 * const { data: claimedNFTs, isLoading, error } = useClaimedNFTs(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a contract that extends the ERC721 spec (NFT drop, Signature Drop, or any custom contract that extends the ERC721 spec)
 * @param queryParams - query params to pass to the query for the sake of pagination
 * @returns a response object that includes an array of NFTs that are claimed
 * @twfeature ERC721LazyMintable
 * @see {@link https://portal.thirdweb.com/react/react.useclaimednfts?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useClaimedNFTs(contract: RequiredParam<NFTDrop>, queryParams?: QueryAllParams): UseQueryResult<NFT[], unknown>;
/**
 *
 * @param contract - an instance of a contract that extends the ERC721 spec (NFT drop, Signature Drop, or any custom contract that extends the ERC721 spec)
 * @returns a response object that includes the number of NFTs that are unclaimed
 * @twfeature ERC721LazyMintable
 * @see {@link https://portal.thirdweb.com/react/react.useunclaimednftsupply?utm_source=sdk | Documentation}
 */
export declare function useUnclaimedNFTSupply(contract: RequiredParam<NFTDrop | SignatureDrop | SmartContract | null>): UseQueryResult<import("ethers").BigNumber, unknown>;
/**
 * Get the total number of claimed NFTs
 *
 * @param contract - an instance of a contract that extends the ERC721 spec (NFT drop, Signature Drop, or any custom contract that extends the ERC721 spec)
 * @returns a response object that includes the number of NFTs that are claimed
 * @twfeature ERC721LazyMintable
 * @see {@link https://portal.thirdweb.com/react/react.useclaimednftsupply?utm_source=sdk | Documentation}
 */
export declare function useClaimedNFTSupply(contract: RequiredParam<NFTDrop | SignatureDrop | SmartContract | null>): UseQueryResult<import("ethers").BigNumber, unknown>;
/**
 * Get all unrevealed batches
 *
 * @param contract - an instance of a {@link RevealableContract}
 * @returns a response object that gets the batches to still be revealed
 * @twfeature ERC721Revealable | ERC1155Revealable
 * @see {@link https://portal.thirdweb.com/react/react.usebatchestoreveal?utm_source=sdk | Documentation}
 */
export declare function useBatchesToReveal<TContract extends RevealableContract>(contract: RequiredParam<TContract>): UseQueryResult<import("@thirdweb-dev/sdk").BatchToReveal[], unknown>;
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Claim an NFT to a specific wallet
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: claimNFT,
 *     isLoading,
 *     error,
 *   } = useClaimNFT(contract);
 *
 *   if (error) {
 *     console.error("failed to claim nft", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => claimNFT({ to: "{{wallet_address}}", quantity: 1 })}
 *     >
 *       Claim NFT!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link DropContract}
 * @returns a mutation object that can be used to claim a NFT to the wallet specificed in the params
 * @twfeature ERC721Claimable | ERC1155Claimable | ERC721ClaimPhasesV2 | ERC721ClaimPhasesV1 | ERC721ClaimConditionsV2 | ERC721ClaimConditionsV1 | ERC1155ClaimPhasesV2 | ERC1155ClaimPhasesV1 | ERC1155ClaimConditionsV2 | ERC1155ClaimConditionsV1
 * @see {@link https://portal.thirdweb.com/react/react.useclaimnft?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useClaimNFT<TContract extends DropContract>(contract: RequiredParam<TContract>): UseMutationResult<ClaimNFTReturnType, unknown, ClaimNFTParams, unknown>;
/**
 * Lazy mint NFTs
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: lazyMint,
 *     isLoading,
 *     error,
 *   } = useLazyMint(contract);
 *
 *   if (error) {
 *     console.error("failed to lazy mint NFT", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => lazyMint({ metadatas: [{ name: "My NFT!"}] })}
 *     >
 *       Lazy mint NFT!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link NFTContract} with the drop extension
 * @param onProgress - an optional callback that will be called with the progress of the upload
 * @returns a mutation object that can be used to lazy mint a batch of NFTs
 * @twfeature ERC721LazyMintable | ERC1155LazyMintable
 * @see {@link https://portal.thirdweb.com/react/react.uselazymint?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useLazyMint<TContract extends DropContract>(contract: RequiredParam<TContract>, onProgress?: (progress: UploadProgressEvent) => void): UseMutationResult<any, unknown, any, unknown>;
/**
 * Lazy mint NFTs with delayed reveal
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: delayedRevealLazyMint,
 *     isLoading,
 *     error,
 *   } = useDelayedRevealLazyMint(contract);
 *
 *   if (error) {
 *     console.error("failed to lazy mint NFT", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => delayedRevealLazyMint({ metadatas: [{ name: "My NFT!"}] })}
 *     >
 *       Delayed Reveal Lazy mint NFT!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link DropContract}
 * @param onProgress - an optional callback that will be called with the progress of the upload
 * @returns a mutation object that can be used to lazy mint a batch of NFTs
 * @twfeature ERC721Revealable | ERC1155Revealable
 * @see {@link https://portal.thirdweb.com/react/react.usedelayedreveallazymint?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useDelayedRevealLazyMint<TContract extends RevealableContract>(contract: RequiredParam<TContract>, onProgress?: (progress: UploadProgressEvent) => void): UseMutationResult<import("@thirdweb-dev/sdk").TransactionResultWithId[], unknown, DelayedRevealLazyMintInput, unknown>;
/**
 * Reveal a batch of delayed reveal NFTs
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: revealLazyMint,
 *     isLoading,
 *     error,
 *   } = useRevealLazyMint(contract);
 *
 *   if (error) {
 *     console.error("failed to reveal batch", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => revealLazyMint({ batchId: "0", password: "my-password" })}
 *     >
 *       Reveal batch!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a {@link RevealableContract}
 * @returns a mutation object that can be used to reveal a batch of delayed reveal NFTs
 * @twfeature ERC721Revealable | ERC1155Revealable
 * @see {@link https://portal.thirdweb.com/react/react.usereveallazymint?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useRevealLazyMint<TContract extends RevealableContract>(contract: RequiredParam<TContract>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, RevealLazyMintInput, unknown>;
//# sourceMappingURL=drop.d.ts.map