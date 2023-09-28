import { constants, BigNumber } from 'ethers';
import invariant from 'tiny-invariant';
import { D as DEFAULT_QUERY_ALL_COUNT } from './QueryParams-39bcad7a.browser.esm.js';
import { dJ as MARKETPLACE_CONTRACT_ROLES, ds as ContractWrapper, e as AbiSchema, ah as ContractMetadata, dK as MarketplaceContractSchema, b0 as ContractAppURI, ai as ContractRoles, ag as ContractEncoder, aQ as GasCostEstimator, aR as ContractEvents, aT as ContractPlatformFee, aS as ContractInterceptor, bx as ListingNotFoundError, bI as getRoleHash, dA as mapOffer, dt as buildTransactionFunction, aW as Transaction, b8 as isNativeToken, cS as NATIVE_TOKENS } from './contract-publisher-da6d1b7a.browser.esm.js';
import { M as MarketplaceDirect, a as MarketplaceAuction, L as ListingType } from './marketplace-auction-3992b387.browser.esm.js';
import 'bn.js';
import 'zod';
import 'uuid';
import '@thirdweb-dev/storage';
import '@thirdweb-dev/contracts-js/dist/abis/IERC165.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json';
import 'fast-deep-equal';
import 'merkletreejs';
import '@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json';
import '@thirdweb-dev/chains';
import 'bs58';
import '@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryLogic.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDrop.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC20Permit.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMulticall.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropERC721_V3.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721AQueryableUpgradeable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json';
import '@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721_V1.json';
import '@thirdweb-dev/contracts-js/dist/abis/LazyMintWithTier.json';
import '@thirdweb-dev/contracts-js/dist/abis/SharedMetadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/zora_IERC721Drop.json';
import '@thirdweb-dev/contracts-js/dist/abis/ILoyaltyCard.json';
import '@thirdweb-dev/contracts-js/dist/abis/INFTMetadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDrop1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropERC1155_V2.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155_V1.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155Supply.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC2771Context.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAppURI.json';
import '@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDirectListings.json';
import '@thirdweb-dev/contracts-js/dist/abis/IEnglishAuctions.json';
import '@thirdweb-dev/contracts-js/dist/abis/IOffers.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPermissions.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json';
import '@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json';
import '@thirdweb-dev/contracts-js/dist/abis/Ownable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAirdropERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAirdropERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAirdropERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAccountFactoryCore.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAccountPermissions.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAccount.json';
import 'ethers/lib/utils';
import '@thirdweb-dev/contracts-js/dist/abis/Forwarder.json';
import 'cross-fetch';
import 'eventemitter3';

/**
 * Create your own whitelabel marketplace that enables users to buy and sell any digital assets.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "marketplace");
 * ```
 *
 * @public
 */
class Marketplace {
  static contractRoles = MARKETPLACE_CONTRACT_ROLES;

  /**
   * @internal
   */

  /**
   * Direct listings
   * @remarks Create and manage direct listings in your marketplace.
   * @example
   * ```javascript
   * // Data of the listing you want to create
   * const listing = {
   *   // address of the NFT contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *  // when should the listing open up for offers
   *   startTimestamp: new Date(),
   *   // how long the listing will be open for
   *   listingDurationInSeconds: 86400,
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // how much the asset will be sold for
   *   buyoutPricePerToken: "1.5",
   * }
   *
   * const tx = await contract.direct.createListing(listing);
   * const receipt = tx.receipt; // the transaction receipt
   * const listingId = tx.id; // the id of the newly created listing
   *
   * // And on the buyers side:
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   * await contract.direct.buyoutListing(listingId, quantityDesired);
   * ```
   */

  /**
   * Auctions
   * @remarks Create and manage auctions in your marketplace.
   * @example
   * ```javascript
   * // Data of the auction you want to create
   * const auction = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *  // when should the listing open up for offers
   *   startTimestamp: new Date(),
   *   // how long the listing will be open for
   *   listingDurationInSeconds: 86400,
   *   // how many of the asset you want to list
   *   quantity: 1,
   *   // address of the currency contract that will be used to pay for the listing
   *   currencyContractAddress: NATIVE_TOKEN_ADDRESS,
   *   // how much people would have to bid to instantly buy the asset
   *   buyoutPricePerToken: "10",
   *   // the minimum bid that will be accepted for the token
   *   reservePricePerToken: "1.5",
   * }
   *
   * const tx = await contract.auction.createListing(auction);
   * const receipt = tx.receipt; // the transaction receipt
   * const listingId = tx.id; // the id of the newly created listing
   *
   * // And on the buyers side:
   * // The price you are willing to bid for a single token of the listing
   * const pricePerToken = 2.6;
   * await contract.auction.makeBid(listingId, pricePerToken);
   * ```
   */

  get chainId() {
    return this._chainId;
  }
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new ContractWrapper(network, address, abi, options, storage);
    this._chainId = chainId;
    this.abi = AbiSchema.parse(abi || []);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new ContractMetadata(this.contractWrapper, MarketplaceContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, Marketplace.contractRoles);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.direct = new MarketplaceDirect(this.contractWrapper, this.storage);
    this.auction = new MarketplaceAuction(this.contractWrapper, this.storage);
    this.events = new ContractEvents(this.contractWrapper);
    this.platformFees = new ContractPlatformFee(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
  }
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Convenience function to get either a direct or auction listing
   *
   * @param listingId - the listing id
   * @returns either a direct or auction listing
   *
   * @remarks Get a listing by its listing id
   * @example
   * ```javascript
   * const listingId = 0;
   * const listing = await contract.getListing(listingId);
   * ```
   */
  async getListing(listingId) {
    const listing = await this.contractWrapper.read("listings", [listingId]);
    if (listing.assetContract === constants.AddressZero) {
      throw new ListingNotFoundError(this.getAddress(), listingId.toString());
    }
    switch (listing.listingType) {
      case ListingType.Auction:
        {
          return await this.auction.mapListing(listing);
        }
      case ListingType.Direct:
        {
          return await this.direct.mapListing(listing);
        }
      default:
        {
          throw new Error(`Unknown listing type: ${listing.listingType}`);
        }
    }
  }

  /**
   * Get all active listings
   *
   * @remarks Fetch all the active listings from this marketplace contract. An active listing means it can be bought or bid on.
   * @example
   * ```javascript
   * const listings = await contract.getActiveListings();
   * const priceOfFirstActiveListing = listings[0].price;
   * ```
   * @param filter - optional filter parameters
   */
  async getActiveListings(filter) {
    const rawListings = await this.getAllListingsNoFilter(true);
    const filtered = this.applyFilter(rawListings, filter);
    const now = BigNumber.from(Math.floor(Date.now() / 1000));
    return filtered.filter(l => {
      return l.type === ListingType.Auction && BigNumber.from(l.endTimeInEpochSeconds).gt(now) && BigNumber.from(l.startTimeInEpochSeconds).lte(now) || l.type === ListingType.Direct && BigNumber.from(l.quantity).gt(0);
    });
  }

  /**
   * Get all the listings
   *
   * @remarks Fetch all the listings from this marketplace contract, including sold ones.
   * @example
   * ```javascript
   * const listings = await contract.getAllListings();
   * const priceOfFirstListing = listings[0].price;
   * ```
   *
   * @param filter - optional filter parameters
   */
  async getAllListings(filter) {
    const rawListings = await this.getAllListingsNoFilter(false);
    return this.applyFilter(rawListings, filter);
  }

  /**
   * @internal
   */
  getAll = this.getAllListings;

  /**
   * Get the total number of Listings
   * @returns the total number listings on the marketplace
   * @public
   */
  async getTotalCount() {
    return await this.contractWrapper.read("totalListings", []);
  }

  /**
   * Get whether listing is restricted only to addresses with the Lister role
   */
  async isRestrictedToListerRoleOnly() {
    const anyoneCanList = await this.contractWrapper.read("hasRole", [getRoleHash("lister"), constants.AddressZero]);
    return !anyoneCanList;
  }

  /**
   * Get the buffer in basis points between offers
   */
  async getBidBufferBps() {
    return this.contractWrapper.read("bidBufferBps", []);
  }

  /**
   * get the buffer time in seconds between offers
   */
  async getTimeBufferInSeconds() {
    return this.contractWrapper.read("timeBuffer", []);
  }

  /**
   * Get all the offers for a listing
   *
   * @remarks Fetch all the offers for a specified direct or auction listing.
   * @example
   * ```javascript
   * const offers = await marketplaceContract.getOffers(listingId);
   * const firstOffer = offers[0];
   * ```
   *
   * @param listingId - the id of the listing to fetch offers for
   */
  async getOffers(listingId) {
    // get all new offer events from this contract
    const listingEvents = await this.events.getEvents("NewOffer", {
      order: "desc",
      filters: {
        listingId
      }
    });
    // derive the offers from the events
    return await Promise.all(listingEvents.map(async e => {
      return await mapOffer(this.contractWrapper.getProvider(), BigNumber.from(listingId), {
        quantityWanted: e.data.quantityWanted,
        pricePerToken: e.data.quantityWanted.gt(0) ? e.data.totalOfferAmount.div(e.data.quantityWanted) : e.data.totalOfferAmount,
        currency: e.data.currency,
        offeror: e.data.offeror
      });
    }));
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Purchase NFTs
   * @remarks Buy a Direct or Auction listing on your marketplace.
   * @example
   * ```javascript
   * // The listing ID of the asset you want to buy
   * const listingId = 0;
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   *
   * await contract.buyoutListing(listingId, quantityDesired);
   * ```
   * @param listingId - the listing ID of the listing you want to buy
   * @param quantityDesired - the quantity that you want to buy (for ERC1155 tokens)
   * @param receiver - optional receiver of the bought listing if different from the connected wallet (for direct listings only)
   */
  buyoutListing = /* @__PURE__ */buildTransactionFunction(async (listingId, quantityDesired, receiver) => {
    const listing = await this.contractWrapper.read("listings", [listingId]);
    if (listing.listingId.toString() !== listingId.toString()) {
      throw new ListingNotFoundError(this.getAddress(), listingId.toString());
    }
    switch (listing.listingType) {
      case ListingType.Direct:
        {
          invariant(quantityDesired !== undefined, "quantityDesired is required when buying out a direct listing");
          return await this.direct.buyoutListing.prepare(listingId, quantityDesired, receiver);
        }
      case ListingType.Auction:
        {
          return await this.auction.buyoutListing.prepare(listingId);
        }
      default:
        throw Error(`Unknown listing type: ${listing.listingType}`);
    }
  });

  /**
   * Make an offer for a Direct or Auction Listing
   *
   * @remarks Make an offer on a direct or auction listing
   *
   * @example
   * ```javascript
   * // The listing ID of the asset you want to offer on
   * const listingId = 0;
   * // The price you are willing to offer per token
   * const pricePerToken = 0.5;
   * // The quantity of tokens you want to receive for this offer
   * const quantity = 1;
   *
   * await contract.makeOffer(
   *   listingId,
   *   pricePerToken,
   *   quantity,
   * );
   * ```
   */
  makeOffer = /* @__PURE__ */buildTransactionFunction(async (listingId, pricePerToken, quantity) => {
    const listing = await this.contractWrapper.read("listings", [listingId]);
    if (listing.listingId.toString() !== listingId.toString()) {
      throw new ListingNotFoundError(this.getAddress(), listingId.toString());
    }
    const chainId = await this.contractWrapper.getChainID();
    switch (listing.listingType) {
      case ListingType.Direct:
        {
          invariant(quantity, "quantity is required when making an offer on a direct listing");
          return await this.direct.makeOffer.prepare(listingId, quantity, isNativeToken(listing.currency) ? NATIVE_TOKENS[chainId].wrapped.address : listing.currency, pricePerToken);
        }
      case ListingType.Auction:
        {
          return await this.auction.makeBid.prepare(listingId, pricePerToken);
        }
      default:
        throw Error(`Unknown listing type: ${listing.listingType}`);
    }
  });

  /**
   * Set the Auction bid buffer
   * @remarks A percentage (e.g. 5%) in basis points (5% = 500, 100% = 10000). A new bid is considered to be a winning bid only if its bid amount is at least the bid buffer (e.g. 5%) greater than the previous winning bid. This prevents buyers from making very slightly higher bids to win the auctioned items.
   * @example
   * ```javascript
   * // the bid buffer in basis points
   * const bufferBps = 5_00; // 5%
   * await contract.setBidBufferBps(bufferBps);
   * ```
   * @param bufferBps - the bps value
   */
  setBidBufferBps = /* @__PURE__ */buildTransactionFunction(async bufferBps => {
    await this.roles.verify(["admin"], await this.contractWrapper.getSignerAddress());
    const timeBuffer = await this.getTimeBufferInSeconds();
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setAuctionBuffers",
      args: [timeBuffer, BigNumber.from(bufferBps)]
    });
  });

  /**
   * Set the Auction Time buffer:
   * @remarks Measured in seconds (e.g. 15 minutes or 900 seconds). If a winning bid is made within the buffer of the auction closing (e.g. 15 minutes within the auction closing), the auction's closing time is increased by the buffer to prevent buyers from making last minute winning bids, and to give time to other buyers to make a higher bid if they wish to.
   * @example
   * ```javascript
   * // the time buffer in seconds
   * const bufferInSeconds = 60;
   * await contract.setTimeBufferInSeconds(bufferInSeconds);
   * ```
   * @param bufferInSeconds - the seconds value
   */
  setTimeBufferInSeconds = /* @__PURE__ */buildTransactionFunction(async bufferInSeconds => {
    await this.roles.verify(["admin"], await this.contractWrapper.getSignerAddress());
    const bidBuffer = await this.getBidBufferBps();
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "setAuctionBuffers",
      args: [BigNumber.from(bufferInSeconds), bidBuffer]
    });
  });

  /**
   * Restrict listing NFTs only from the specified NFT contract address.
   * It is possible to allow listing from multiple contract addresses.
   * @param contractAddress - the NFT contract address
   */
  allowListingFromSpecificAssetOnly = /* @__PURE__ */buildTransactionFunction(async contractAddress => {
    const encoded = [];
    const members = await this.roles.get("asset");
    if (members.includes(constants.AddressZero)) {
      encoded.push(this.encoder.encode("revokeRole", [getRoleHash("asset"), constants.AddressZero]));
    }
    encoded.push(this.encoder.encode("grantRole", [getRoleHash("asset"), contractAddress]));
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [encoded]
    });
  });

  /**
   * Allow listings from any NFT contract
   */
  allowListingFromAnyAsset = /* @__PURE__ */buildTransactionFunction(async () => {
    const encoded = [];
    const members = await this.roles.get("asset");
    for (const addr in members) {
      encoded.push(this.encoder.encode("revokeRole", [getRoleHash("asset"), addr]));
    }
    encoded.push(this.encoder.encode("grantRole", [getRoleHash("asset"), constants.AddressZero]));
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [encoded]
    });
  });

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  async getAllListingsNoFilter(filterInvalidListings) {
    const listings = await Promise.all(Array.from(Array((await this.contractWrapper.read("totalListings", [])).toNumber()).keys()).map(async i => {
      let listing;
      try {
        listing = await this.getListing(i);
      } catch (err) {
        if (err instanceof ListingNotFoundError) {
          return undefined;
        } else {
          console.warn(`Failed to get listing ${i}' - skipping. Try 'marketplace.getListing(${i})' to get the underlying error.`);
          return undefined;
        }
      }
      if (listing.type === ListingType.Auction) {
        return listing;
      }
      if (filterInvalidListings) {
        const {
          valid
        } = await this.direct.isStillValidListing(listing);
        if (!valid) {
          return undefined;
        }
      }
      return listing;
    }));
    return listings.filter(l => l !== undefined);
  }
  applyFilter(listings, filter) {
    let rawListings = [...listings];
    const start = BigNumber.from(filter?.start || 0).toNumber();
    const count = BigNumber.from(filter?.count || DEFAULT_QUERY_ALL_COUNT).toNumber();
    if (filter) {
      if (filter.seller) {
        rawListings = rawListings.filter(seller => seller.sellerAddress.toString().toLowerCase() === filter?.seller?.toString().toLowerCase());
      }
      if (filter.tokenContract) {
        rawListings = rawListings.filter(tokenContract => tokenContract.assetContractAddress.toString().toLowerCase() === filter?.tokenContract?.toString().toLowerCase());
      }
      if (filter.tokenId !== undefined) {
        rawListings = rawListings.filter(tokenContract => tokenContract.tokenId.toString() === filter?.tokenId?.toString());
      }
      rawListings = rawListings.filter((_, index) => index >= start);
      rawListings = rawListings.slice(0, count);
    }
    return rawListings;
  }

  /**
   * @internal
   */
  async prepare(method, args, overrides) {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method,
      args,
      overrides
    });
  }

  /**
   * @internal
   */
  async call(functionName, args, overrides) {
    return this.contractWrapper.call(functionName, args, overrides);
  }
}

export { Marketplace };
