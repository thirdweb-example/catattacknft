import { RequiredParam } from "../../../core/query-utils/required-param";
import { AcceptDirectOffer, BuyFromListingParams, BuyNowParams, ExecuteAuctionSale, MakeBidParams, MakeOfferParams } from "../../types";
import { UseMutationResult } from "@tanstack/react-query";
import type { AuctionListing, DirectListing, Marketplace, MarketplaceFilter, MarketplaceV3, NewAuctionListing, NewDirectListing } from "@thirdweb-dev/sdk";
import type { BigNumberish, providers } from "ethers";
import { BigNumber } from "ethers";
/** **********************/
/**     READ  HOOKS     **/
/** **********************/
/**
 * Get a listing
 *
 * @example
 * ```javascript
 * const listingId = 0; // the listing id to check
 * const { data: listing, isLoading, error } = useListing(contract, listingId);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param listingId - the listing id to check
 * @returns a response object that includes the desired listing
 * @see {@link https://portal.thirdweb.com/react/react.uselisting?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useListing(contract: RequiredParam<Marketplace>, listingId: RequiredParam<BigNumberish>): import("@tanstack/react-query").UseQueryResult<AuctionListing | DirectListing, unknown>;
/**
 * Get a direct listing
 *
 * @example
 * ```javascript
 * const listingId = 0; // the listing id to check
 * const { data: directListing, isLoading, error } = useListing(contract, listingId);
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @param listingId - the listing id to check
 * @returns a response object that includes the desired direct listing
 * @twfeature DirectListings
 * @see {@link https://portal.thirdweb.com/react/react.usedirectlisting?utm_source=sdk | Documentation}
 */
export declare function useDirectListing(contract: RequiredParam<MarketplaceV3>, listingId: RequiredParam<BigNumberish>): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk").DirectListingV3, unknown>;
/**
 * Get an english auction
 *
 * @example
 * ```javascript
 * const auctionId = 0; // the listing id to check
 * const { data: englishAuction, isLoading, error } = useEnglishAuction(contract, auctionId);
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @param auctionId - the auction id to check
 * @returns a response object that includes the desired english auction
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.useenglishauctions?utm_source=sdk | Documentation}
 */
export declare function useEnglishAuction(contract: RequiredParam<MarketplaceV3>, auctionId: RequiredParam<BigNumberish>): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk").EnglishAuction, unknown>;
/**
 * Get all listings
 *
 * @example
 * ```javascript
 * const { data: listings, isLoading, error } = useListings(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param filter - filter to pass to the query for the sake of pagination & filtering
 * @returns a response object that includes an array of listings
 * @see {@link https://portal.thirdweb.com/react/react.uselistings?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useListings(contract: RequiredParam<Marketplace>, filter?: MarketplaceFilter): import("@tanstack/react-query").UseQueryResult<(AuctionListing | DirectListing)[], unknown>;
/**
 * Get all direct listings
 *
 * @example
 * ```javascript
 * const { data: directListings, isLoading, error } = useDirectListings(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @param filter - filter to pass to the query for the sake of pagination & filtering
 * @returns a response object that includes an array of direct listings
 * @twfeature DirectListings
 * @see {@link https://portal.thirdweb.com/react/react.usedirectlistings?utm_source=sdk | Documentation}
 */
export declare function useDirectListings(contract: RequiredParam<MarketplaceV3>, filter?: MarketplaceFilter): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk").DirectListingV3[], unknown>;
/**
 * Get all valid direct listings
 *
 * @example
 * ```javascript
 * const { data: validDirectListings, isLoading, error } = useValidDirectListings(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @param filter - filter to pass to the query for the sake of pagination & filtering
 * @returns a response object that includes an array of direct listings
 * @twfeature DirectListings
 * @see {@link https://portal.thirdweb.com/react/react.usevaliddirectlistings?utm_source=sdk | Documentation}
 */
export declare function useValidDirectListings(contract: RequiredParam<MarketplaceV3>, filter?: MarketplaceFilter): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk").DirectListingV3[], unknown>;
/**
 * Get all english auctions
 *
 * @example
 * ```javascript
 * const { data: englishAuctions, isLoading, error } = useEnglishAuctions(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @param filter - filter to pass to the query for the sake of pagination & filtering
 * @returns a response object that includes an array of english auctions
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.useenglishauctions?utm_source=sdk | Documentation}
 */
export declare function useEnglishAuctions(contract: RequiredParam<MarketplaceV3>, filter?: MarketplaceFilter): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk").EnglishAuction[], unknown>;
/**
 * Get all valid english auctions
 *
 * @example
 * ```javascript
 * const { data: validEnglishAuctions, isLoading, error } = useValidEnglishAuctions(contract, { start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @param filter - filter to pass to the query for the sake of pagination & filtering
 * @returns a response object that includes an array of english auctions
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.usevalidenglishauctions?utm_source=sdk | Documentation}
 */
export declare function useValidEnglishAuctions(contract: RequiredParam<MarketplaceV3>, filter?: MarketplaceFilter): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk").EnglishAuction[], unknown>;
/**
 * Get the total count of listings
 *
 * @example
 * ```javascript
 * const { data: listingsCount, isLoading, error } = useListingsCount(contract);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @returns a response object that includes the listing count
 * @see {@link https://portal.thirdweb.com/react/react.uselistingscount?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useListingsCount(contract: RequiredParam<Marketplace>): import("@tanstack/react-query").UseQueryResult<BigNumber, unknown>;
/**
 * Get the total count of direct listings
 *
 * @example
 * ```javascript
 * const { data: directListingsCount, isLoading, error } = useDirectListingsCount(contract);
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @returns a response object that includes the direct listings count
 * @twfeature DirectListings
 * @see {@link https://portal.thirdweb.com/react/react.usedirectlistingscount?utm_source=sdk | Documentation}
 */
export declare function useDirectListingsCount(contract: RequiredParam<MarketplaceV3>): import("@tanstack/react-query").UseQueryResult<BigNumber, unknown>;
/**
 * Get the total count of english auctions
 *
 * @example
 * ```javascript
 * const { data: englishAuctionsCount, isLoading, error } = useEnglishAuctionsCount(contract);
 * ```
 *
 * @param contract - an instance of a marketplace v3 contract
 * @returns a response object that includes the direct english actions count
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.useenglishauctionscount?utm_source=sdk | Documentation}
 */
export declare function useEnglishAuctionsCount(contract: RequiredParam<MarketplaceV3>): import("@tanstack/react-query").UseQueryResult<BigNumber, unknown>;
/**
 * Get all active listings
 *
 * @example
 * ```javascript
 * const { data: listings, isLoading, error } = useActiveListings(contract, { seller: "{{wallet_adress}}", tokenContract: "0x...", tokenId: 1, start: 0, count: 100 });
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param filter - filter to pass to the query for the sake of pagination & filtering
 * @returns a response object that includes an array of listings
 * @see {@link https://portal.thirdweb.com/react/react.useactivelistings?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useActiveListings(contract: RequiredParam<Marketplace>, filter?: MarketplaceFilter): import("@tanstack/react-query").UseQueryResult<(AuctionListing | DirectListing)[], unknown>;
/**
 * Get the winning bid for an auction
 *
 * @example
 * ```javascript
 * const listingId = 0;
 * const { data: winningBid, isLoading, error } = useWinningBid(contract, listingId);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param listingId - the listing id to check
 * @returns a response object that includes the {@link Offer} that is winning the auction
 * @see {@link https://portal.thirdweb.com/react/react.usewinningbid?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useWinningBid(contract: RequiredParam<Marketplace>, listingId: RequiredParam<BigNumberish>): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk").Offer | undefined, unknown>;
/**
 * Get the winning bid for an english auction
 *
 * @example
 * ```javascript
 * const listingId = 0;
 * const { data: winningBid, isLoading, error } = useWinningBid(contract, listingId);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param auctionId - the auction id to check
 * @returns a response object that includes the {@link Bid} that is winning the auction
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.useenglishauctionwinningbid?utm_source=sdk | Documentation}
 */
export declare function useEnglishAuctionWinningBid(contract: RequiredParam<MarketplaceV3>, auctionId: RequiredParam<BigNumberish>): import("@tanstack/react-query").UseQueryResult<import("@thirdweb-dev/sdk").Bid | undefined, unknown>;
/**
 * Get the winner of an english auction
 *
 * @example
 * ```javascript
 * const listingId = 0;
 * const { data: auctionWinner, isLoading, error } = useAuctionWinner(contract, listingId);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param listingId - the listing id to check
 * @returns a response object that includes the address of the winner of the auction or undefined if there is no winner yet
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.useauctionwinner?utm_source=sdk | Documentation}
 */
export declare function useAuctionWinner(contract: RequiredParam<Marketplace | MarketplaceV3>, listingId: RequiredParam<BigNumberish>): import("@tanstack/react-query").UseQueryResult<string, unknown>;
/**
 * Get the bid buffer for an english auction
 *
 * @example
 * ```javascript
 * const { data: bidBuffer, isLoading, error } = useBidBuffer(contract);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param listingId - the listing id to check (only necessary for marketplace v3)

 * @returns a response object that includes an array of listings
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.usebidbuffer?utm_source=sdk | Documentation}
 */
export declare function useBidBuffer(contract: RequiredParam<Marketplace | MarketplaceV3>, listingId?: RequiredParam<BigNumberish>): import("@tanstack/react-query").UseQueryResult<BigNumber, unknown>;
/**
 * Get the minimum next bid for an english auction
 *
 * @example
 * ```javascript
 * const listingId = 0;
 * const { data: minimumNextBid, isLoading, error } = useMinimumNextBid(contract, listingId);
 * ```
 *
 * @param contract - an instance of a marketplace contract
 * @param listingId - the listing id to check
 * @returns a response object that includes the minimum next bid for the auction listing
 * @twfeature EnglishAucton
 * @see {@link https://portal.thirdweb.com/react/react.useminimumnextbid?utm_source=sdk | Documentation}
 */
export declare function useMinimumNextBid(contract: RequiredParam<Marketplace | MarketplaceV3>, listingId: RequiredParam<BigNumberish>): import("@tanstack/react-query").UseQueryResult<{
    symbol: string;
    value: BigNumber;
    name: string;
    decimals: number;
    displayValue: string;
}, unknown>;
/**
 * Get all the offers for a listing
 *
 * @remarks Fetch all the offers for a specified direct or auction listing.
 * @example
 * ```javascript
 * const listingId = 0;
 * const { data: offers, isLoading, error } = useOffers(contract, listingId);
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @param listingId - the id of the listing to fetch offers for
 * @see {@link https://portal.thirdweb.com/react/react.useoffers?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useOffers(contract: RequiredParam<Marketplace>, listingId: RequiredParam<BigNumberish>): {
    data: Record<string, any>[] | undefined;
    error: unknown;
    isError: true;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: true;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: unknown;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<import("@thirdweb-dev/sdk").ContractEvent<Record<string, any>>[], unknown>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
} | {
    data: Record<string, any>[] | undefined;
    error: null;
    isError: false;
    isLoading: false;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: true;
    status: "success";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: unknown;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<import("@thirdweb-dev/sdk").ContractEvent<Record<string, any>>[], unknown>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
} | {
    data: Record<string, any>[] | undefined;
    error: unknown;
    isError: true;
    isLoading: false;
    isLoadingError: true;
    isRefetchError: false;
    isSuccess: false;
    status: "error";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: unknown;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<import("@thirdweb-dev/sdk").ContractEvent<Record<string, any>>[], unknown>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
} | {
    data: Record<string, any>[] | undefined;
    error: null;
    isError: false;
    isLoading: true;
    isLoadingError: false;
    isRefetchError: false;
    isSuccess: false;
    status: "loading";
    dataUpdatedAt: number;
    errorUpdatedAt: number;
    failureCount: number;
    failureReason: unknown;
    errorUpdateCount: number;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isInitialLoading: boolean;
    isPaused: boolean;
    isPlaceholderData: boolean;
    isPreviousData: boolean;
    isRefetching: boolean;
    isStale: boolean;
    refetch: <TPageData>(options?: (import("@tanstack/react-query").RefetchOptions & import("@tanstack/react-query").RefetchQueryFilters<TPageData>) | undefined) => Promise<import("@tanstack/react-query").QueryObserverResult<import("@thirdweb-dev/sdk").ContractEvent<Record<string, any>>[], unknown>>;
    remove: () => void;
    fetchStatus: import("@tanstack/react-query").FetchStatus;
};
/** **********************/
/**     WRITE HOOKS     **/
/** **********************/
/**
 * Create a new direct listing
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: createDirectListing,
 *     isLoading,
 *     error,
 *   } = useCreateDirectListing(contract);
 *
 *   if (error) {
 *     console.error("failed to create direct listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => createDirectListing(directListingData)}
 *     >
 *       Create Direct Listing!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to create a new direct listing
 * @twfeature DirectListings
 * @see {@link https://portal.thirdweb.com/react/react.usecreatedirectlisting?utm_source=sdk | Documentation}
 */
export declare function useCreateDirectListing<TMarketplace extends Marketplace | MarketplaceV3>(contract: RequiredParam<TMarketplace>): UseMutationResult<import("@thirdweb-dev/sdk").TransactionResultWithId, unknown, TMarketplace extends Marketplace ? NewDirectListing : {
    tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
    pricePerToken: string | number;
    assetContractAddress: string;
    quantity?: string | number | bigint | BigNumber | undefined;
    currencyContractAddress?: string | undefined;
    startTimestamp?: number | Date | undefined;
    endTimestamp?: number | Date | undefined;
    isReservedListing?: boolean | undefined;
}, unknown>;
/**
 * Create a new english auction
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: createAuctionListing,
 *     isLoading,
 *     error,
 *   } = useCreateAuctionListing(contract);
 *
 *   if (error) {
 *     console.error("failed to create auction listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => createAuctionListing(auctionListingData)}
 *     >
 *       Create Auction Listing!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to create a new auction listing
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.usecreateauctionlisting?utm_source=sdk | Documentation}
 */
export declare function useCreateAuctionListing<TMarketplace extends Marketplace | MarketplaceV3>(contract: RequiredParam<TMarketplace>): UseMutationResult<import("@thirdweb-dev/sdk").TransactionResultWithId, unknown, TMarketplace extends Marketplace ? NewAuctionListing : {
    tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
    minimumBidAmount: string | number;
    buyoutBidAmount: string | number;
    assetContractAddress: string;
    quantity?: string | number | bigint | BigNumber | undefined;
    currencyContractAddress?: string | undefined;
    timeBufferInSeconds?: string | number | bigint | BigNumber | undefined;
    bidBufferBps?: string | number | bigint | BigNumber | undefined;
    startTimestamp?: number | Date | undefined;
    endTimestamp?: number | Date | undefined;
}, unknown>;
/**
 * Cancel a listing
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: cancelListing,
 *     isLoading,
 *     error,
 *   } = useCancelListing(contract);
 *
 *   if (error) {
 *     console.error("failed to cancel auction listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={cancelListing}
 *     >
 *       Cancel Auction Listing!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to cancel a listing
 * @see {@link https://portal.thirdweb.com/react/react.usecancellisting?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useCancelListing(contract: RequiredParam<Marketplace>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, Pick<AuctionListing | DirectListing, "type" | "id">, unknown>;
/**
 * Cancel a direct listing
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: cancelDirectListing,
 *     isLoading,
 *     error,
 *   } = useCancelDirectListing(contract);
 *
 *   if (error) {
 *     console.error("failed to cancel direct listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={cancelDirectListing}
 *     >
 *       Cancel Direct Listing
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace v3 contract
 * @returns a mutation object that can be used to cancel a direct listing
 * @twfeature DirectListings
 * @see {@link https://portal.thirdweb.com/react/react.usecanceldirectlisting?utm_source=sdk | Documentation}
 */
export declare function useCancelDirectListing(contract: RequiredParam<MarketplaceV3>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, BigNumberish, unknown>;
/**
 * Cancel an english auction
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: cancelEnglishAuction,
 *     isLoading,
 *     error,
 *   } = useCancelEnglishAuction(contract);
 *
 *   if (error) {
 *     console.error("failed to cancel english auction", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={cancelEnglishAuction}
 *     >
 *       Cancel English Auction
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace v3 contract
 * @returns a mutation object that can be used to cancel an english auction
 * @twfeature EnglishAuctions
 * @see {@link https://portal.thirdweb.com/react/react.usecancelenglishauction?utm_source=sdk | Documentation}
 */
export declare function useCancelEnglishAuction(contract: RequiredParam<MarketplaceV3>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, BigNumberish, unknown>;
/**
 * Make a bid on an auction listing
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: makeBid,
 *     isLoading,
 *     error,
 *   } = useMakeBid(contract);
 *
 *   if (error) {
 *     console.error("failed to make a bid", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => makeBid({ listingId: 1, bid: 2 })}
 *     >
 *       Bid!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to make a bid on an auction listing
 * @see {@link https://portal.thirdweb.com/react/react.usemakebid?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useMakeBid(contract: RequiredParam<Marketplace>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, MakeBidParams, unknown>;
/**
 * Nake an offer on a direct or auction listing
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: makeOffer,
 *     isLoading,
 *     error,
 *   } = useMakeOffer(contract);
 *
 *   if (error) {
 *     console.error("failed to make a bid", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => makeOffer({ listingId: 1, pricePerToken: 0.5, quantity: 1 })}
 *     >
 *       Bid!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to make a bid on an auction listing
 * @see {@link https://portal.thirdweb.com/react/react.usemakeoffer?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useMakeOffer(contract: RequiredParam<Marketplace>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, MakeOfferParams, unknown>;
/**
 * Accept a specific offer on a direct listing
 *
 * @remarks will accept the latest offer by the given offeror.
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: acceptOffer,
 *     isLoading,
 *     error,
 *   } = useAcceptDirectListingOffer(contract);
 *
 *   if (error) {
 *     console.error("failed to accept offer", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => acceptOffer({ listingId: 1, addressOfOfferor: "{{wallet_address}}" })}
 *     >
 *       Accept offer
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to accept an offer on a direct listing
 * @see {@link https://portal.thirdweb.com/react/react.useacceptdirectlistingoffer?utm_source=sdk | Documentation}
 */
export declare function useAcceptDirectListingOffer(contract: RequiredParam<Marketplace>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, AcceptDirectOffer, unknown>;
/**
 * Execute an auction sale. Can only be executed once the auction has ended and the auction has a winning bid.
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: executeAuctionSale,
 *     isLoading,
 *     error,
 *   } = useExecuteAuctionSale(contract);
 *
 *   if (error) {
 *     console.error("failed to execute sale", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => executeAuctionSale({ listingId: 1 })}
 *     >
 *       Execute sale
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to accept an offer on a direct listing
 * @see {@link https://portal.thirdweb.com/react/react.useexecuteauctionsale?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useExecuteAuctionSale(contract: RequiredParam<Marketplace>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, ExecuteAuctionSale, unknown>;
/**
 * Buy out an auction listing
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: buyNow,
 *     isLoading,
 *     error,
 *   } = useBuyNow(contract);
 *
 *   if (error) {
 *     console.error("failed to buyout listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => buyNow({listingId: 1, type: ListingType.Auction})}
 *     >
 *       Buy listing!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a Marketplace contract
 * @returns a mutation object that can be used to buy out an auction listing
 * @see {@link https://portal.thirdweb.com/react/react.usebuynow?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useBuyNow(contract: RequiredParam<Marketplace>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, BuyNowParams, unknown>;
/**
 * Buy a direct listing
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}", "marketplace-v3");
 *   const {
 *     mutate: buyNow,
 *     isLoading,
 *     error,
 *   } = useBuyDirectListing(contract);
 *
 *   if (error) {
 *     console.error("failed to buy direct listing", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => buyNow({listingId: 1, quantity: 1, buyer: "{{address}}"})}
 *     >
 *       Buy listing!
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - an instance of a MarketplaceV3 contract
 * @returns a mutation object that can be used to buy out a direct listing
 * @see {@link https://portal.thirdweb.com/react/react.useBuyDirectListing?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useBuyDirectListing(contract: RequiredParam<MarketplaceV3>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, BuyFromListingParams, unknown>;
//# sourceMappingURL=marketplace.d.ts.map