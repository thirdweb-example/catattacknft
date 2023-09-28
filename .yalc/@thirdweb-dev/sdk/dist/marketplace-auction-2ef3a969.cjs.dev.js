'use strict';

var Erc1155Abi = require('@thirdweb-dev/contracts-js/dist/abis/IERC1155.json');
var ERC165Abi = require('@thirdweb-dev/contracts-js/dist/abis/IERC165.json');
var Erc721Abi = require('@thirdweb-dev/contracts-js/dist/abis/IERC721.json');
var ethers = require('ethers');
var invariant = require('tiny-invariant');
var contractPublisher = require('./contract-publisher-e9595070.cjs.dev.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var Erc1155Abi__default = /*#__PURE__*/_interopDefault(Erc1155Abi);
var ERC165Abi__default = /*#__PURE__*/_interopDefault(ERC165Abi);
var Erc721Abi__default = /*#__PURE__*/_interopDefault(Erc721Abi);
var invariant__default = /*#__PURE__*/_interopDefault(invariant);

let ListingType = /*#__PURE__*/function (ListingType) {
  ListingType[ListingType["Direct"] = 0] = "Direct";
  ListingType[ListingType["Auction"] = 1] = "Auction";
  return ListingType;
}({});

/**
 * Handles direct listings
 * @public
 */
class MarketplaceDirect {
  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get a direct listing by id
   *
   * @param listingId - the listing id
   * @returns the Direct listing object
   */
  async getListing(listingId) {
    const listing = await this.contractWrapper.read("listings", [listingId]);
    if (listing.assetContract === ethers.constants.AddressZero) {
      throw new contractPublisher.ListingNotFoundError(this.getAddress(), listingId.toString());
    }
    if (listing.listingType !== ListingType.Direct) {
      throw new contractPublisher.WrongListingTypeError(this.getAddress(), listingId.toString(), "Auction", "Direct");
    }
    return await this.mapListing(listing);
  }

  /**
   * Get the active offer on a listing
   * @param listingId - the listing id
   * @param address - the address that made the offer
   */
  async getActiveOffer(listingId, address) {
    await this.validateListing(ethers.BigNumber.from(listingId));
    invariant__default["default"](ethers.utils.isAddress(address), "Address must be a valid address");
    const offers = await this.contractWrapper.read("offers", [listingId, await contractPublisher.resolveAddress(address)]);
    if (offers.offeror === ethers.constants.AddressZero) {
      return undefined;
    }
    return await contractPublisher.mapOffer(this.contractWrapper.getProvider(), ethers.BigNumber.from(listingId), offers);
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create Direct Listing
   *
   * @remarks Create a new listing on the marketplace where people can buy an asset directly.
   *
   * @example
   * ```javascript
   * // Data of the listing you want to create
   * const listing = {
   *   // address of the contract the asset you want to list is on
   *   assetContractAddress: "0x...",
   *   // token ID of the asset you want to list
   *   tokenId: "0",
   *   // when should the listing open up for offers
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
   * const id = tx.id; // the id of the newly created listing
   * ```
   */
  createListing = /* @__PURE__ */contractPublisher.buildTransactionFunction(async listing => {
    contractPublisher.validateNewListingParam(listing);
    const resolvedAssetAddress = await contractPublisher.resolveAddress(listing.assetContractAddress);
    const resolvedCurrencyAddress = await contractPublisher.resolveAddress(listing.currencyContractAddress);
    await contractPublisher.handleTokenApproval(this.contractWrapper, this.getAddress(), resolvedAssetAddress, listing.tokenId, await this.contractWrapper.getSignerAddress());
    const normalizedPricePerToken = await contractPublisher.normalizePriceValue(this.contractWrapper.getProvider(), listing.buyoutPricePerToken, resolvedCurrencyAddress);
    let listingStartTime = Math.floor(listing.startTimestamp.getTime() / 1000);
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    if (listingStartTime < blockTime) {
      listingStartTime = blockTime;
    }
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "createListing",
      args: [{
        assetContract: resolvedAssetAddress,
        tokenId: listing.tokenId,
        buyoutPricePerToken: normalizedPricePerToken,
        currencyToAccept: contractPublisher.cleanCurrencyAddress(resolvedCurrencyAddress),
        listingType: ListingType.Direct,
        quantityToList: listing.quantity,
        reservePricePerToken: normalizedPricePerToken,
        secondsUntilEndTime: listing.listingDurationInSeconds,
        startTime: ethers.BigNumber.from(listingStartTime)
      }],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("ListingAdded", receipt?.logs);
        return {
          id: event[0].args.listingId,
          receipt
        };
      }
    });
  });

  /**
   * Create a batch of new listings
   *
   * @remarks Create a batch of new listings on the marketplace
   *
   * @example
   * ```javascript
   * const listings = [...];
   * const tx = await contract.direct.createListingsBatch(listings);
   * ```
   */
  createListingsBatch = /* @__PURE__ */contractPublisher.buildTransactionFunction(async listings => {
    const data = await Promise.all(listings.map(async listing => {
      const tx = await this.createListing.prepare(listing);
      return tx.encode();
    }));
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [data],
      parse: receipt => {
        const events = this.contractWrapper.parseLogs("ListingAdded", receipt?.logs);
        return events.map(event => {
          return {
            id: event.args.listingId,
            receipt
          };
        });
      }
    });
  });

  /**
   * Make an offer for a Direct Listing
   *
   * @remarks Make an offer on a direct listing
   *
   * @example
   * ```javascript
   * import { ChainId, NATIVE_TOKENS } from "@thirdweb-dev/sdk";
   *
   * // The listing ID of the asset you want to offer on
   * const listingId = 0;
   * // The price you are willing to offer per token
   * const pricePerToken = 1;
   * // The quantity of tokens you want to receive for this offer
   * const quantity = 1;
   * // The address of the currency you are making the offer in (must be ERC-20)
   * const currencyContractAddress = NATIVE_TOKENS[ChainId.Rinkeby].wrapped.address
   *
   * await contract.direct.makeOffer(
   *   listingId,
   *   quantity,
   *   currencyContractAddress,
   *   pricePerToken
   * );
   * ```
   */
  makeOffer = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (listingId, quantityDesired, currencyContractAddress, pricePerToken, expirationDate) => {
    if (contractPublisher.isNativeToken(currencyContractAddress)) {
      throw new Error("You must use the wrapped native token address when making an offer with a native token");
    }
    const normalizedPrice = await contractPublisher.normalizePriceValue(this.contractWrapper.getProvider(), pricePerToken, currencyContractAddress);
    try {
      await this.getListing(listingId);
    } catch (err) {
      console.error("Failed to get listing, err =", err);
      throw new Error(`Error getting the listing with id ${listingId}`);
    }
    const quantity = ethers.BigNumber.from(quantityDesired);
    const value = ethers.BigNumber.from(normalizedPrice).mul(quantity);
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await contractPublisher.setErc20Allowance(this.contractWrapper, value, currencyContractAddress, overrides);
    let expirationTimestamp = ethers.constants.MaxUint256;
    if (expirationDate) {
      expirationTimestamp = ethers.BigNumber.from(Math.floor(expirationDate.getTime() / 1000));
    }
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "offer",
      args: [listingId, quantityDesired, currencyContractAddress, normalizedPrice, expirationTimestamp],
      overrides
    });
  });

  /**
   * Accept an offer on a direct listing
   *
   * @remarks Accept an offer on a direct listing
   *
   * @example
   * ```javascript
   * // The listing ID of the asset you want to bid on
   * const listingId = 0;
   * // The price you are willing to bid for a single token of the listing
   * const offeror = "0x...";
   *
   * await contract.direct.acceptOffer(listingId, offeror);
   * ```
   */
  acceptOffer = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (listingId, addressOfOfferor) => {
    /**
     * TODO:
     * - Provide better error handling if offer is too low.
     */
    await this.validateListing(ethers.BigNumber.from(listingId));
    const resolvedAddress = await contractPublisher.resolveAddress(addressOfOfferor);
    const offer = await this.contractWrapper.read("offers", [listingId, resolvedAddress]);
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "acceptOffer",
      args: [listingId, resolvedAddress, offer.currency, offer.pricePerToken]
    });
  });

  /**
   * Buy a Listing
   *
   * @remarks Buy a specific direct listing from the marketplace.
   *
   * @example
   * ```javascript
   * // The listing ID of the asset you want to buy
   * const listingId = 0;
   * // Quantity of the asset you want to buy
   * const quantityDesired = 1;
   *
   * await contract.direct.buyoutListing(listingId, quantityDesired);
   * ```
   *
   * @param listingId - The listing id to buy
   * @param quantityDesired - the quantity to buy
   * @param receiver - optional receiver of the bought listing if different from the connected wallet
   */
  buyoutListing = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (listingId, quantityDesired, receiver) => {
    const listing = await this.validateListing(ethers.BigNumber.from(listingId));
    const {
      valid,
      error
    } = await this.isStillValidListing(listing, quantityDesired);
    if (!valid) {
      throw new Error(`Listing ${listingId} is no longer valid. ${error}`);
    }
    const buyFor = receiver ? receiver : await this.contractWrapper.getSignerAddress();
    const quantity = ethers.BigNumber.from(quantityDesired);
    const value = ethers.BigNumber.from(listing.buyoutPrice).mul(quantity);
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await contractPublisher.setErc20Allowance(this.contractWrapper, value, listing.currencyContractAddress, overrides);
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "buy",
      args: [listingId, buyFor, quantity, listing.currencyContractAddress, value],
      overrides
    });
  });

  /**
   * Update a Direct listing with new metadata.
   *
   * Note: cannot update a listing with a new quantity of 0. Use `cancelDirectListing` to remove a listing instead.
   *
   * @param listing - the new listing information
   */
  updateListing = /* @__PURE__ */contractPublisher.buildTransactionFunction(async listing => {
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "updateListing",
      args: [listing.id, listing.quantity, listing.buyoutPrice,
      // reserve price, doesn't matter for direct listing
      listing.buyoutPrice, await contractPublisher.resolveAddress(listing.currencyContractAddress), listing.startTimeInSeconds, listing.secondsUntilEnd]
    });
  });

  /**
   * Cancel Direct Listing
   *
   * @remarks Cancel a direct listing on the marketplace
   *
   * @example
   * ```javascript
   * // The listing ID of the direct listing you want to cancel
   * const listingId = "0";
   *
   * await contract.direct.cancelListing(listingId);
   * ```
   */
  cancelListing = /* @__PURE__ */contractPublisher.buildTransactionFunction(async listingId => {
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "cancelDirectListing",
      args: [listingId]
    });
  });

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Throws error if listing could not be found
   *
   * @param listingId - Listing to check for
   */
  async validateListing(listingId) {
    try {
      return await this.getListing(listingId);
    } catch (err) {
      console.error(`Error getting the listing with id ${listingId}`);
      throw err;
    }
  }

  /**
   * Helper method maps the auction listing to the direct listing interface.
   *
   * @internal
   * @param listing - The listing to map, as returned from the contract.
   * @returns - The mapped interface.
   */
  async mapListing(listing) {
    return {
      assetContractAddress: listing.assetContract,
      buyoutPrice: ethers.BigNumber.from(listing.buyoutPricePerToken),
      currencyContractAddress: listing.currency,
      buyoutCurrencyValuePerToken: await contractPublisher.fetchCurrencyValue(this.contractWrapper.getProvider(), listing.currency, listing.buyoutPricePerToken),
      id: listing.listingId.toString(),
      tokenId: listing.tokenId,
      quantity: listing.quantity,
      startTimeInSeconds: listing.startTime,
      asset: await contractPublisher.fetchTokenMetadataForContract(listing.assetContract, this.contractWrapper.getProvider(), listing.tokenId, this.storage),
      secondsUntilEnd: listing.endTime,
      sellerAddress: listing.tokenOwner,
      type: ListingType.Direct
    };
  }

  /**
   * Use this method to check if a direct listing is still valid.
   *
   * Ways a direct listing can become invalid:
   * 1. The asset holder transferred the asset to another wallet
   * 2. The asset holder burned the asset
   * 3. The asset holder removed the approval on the marketplace
   *
   * @internal
   * @param listing - The listing to check.
   * @returns - True if the listing is valid, false otherwise.
   */
  async isStillValidListing(listing, quantity) {
    const approved = await contractPublisher.isTokenApprovedForTransfer(this.contractWrapper.getProvider(), this.getAddress(), listing.assetContractAddress, listing.tokenId, listing.sellerAddress);
    if (!approved) {
      return {
        valid: false,
        error: `Token '${listing.tokenId}' from contract '${listing.assetContractAddress}' is not approved for transfer`
      };
    }
    const provider = this.contractWrapper.getProvider();
    const erc165 = new ethers.Contract(listing.assetContractAddress, ERC165Abi__default["default"], provider);
    const isERC721 = await erc165.supportsInterface(contractPublisher.InterfaceId_IERC721);
    const isERC1155 = await erc165.supportsInterface(contractPublisher.InterfaceId_IERC1155);
    if (isERC721) {
      const asset = new ethers.Contract(listing.assetContractAddress, Erc721Abi__default["default"], provider);

      // Handle reverts in case of non-existent tokens
      let owner;
      try {
        owner = await asset.ownerOf(listing.tokenId);
      } catch (e) {}
      const valid = owner?.toLowerCase() === listing.sellerAddress.toLowerCase();
      return {
        valid,
        error: valid ? undefined : `Seller is not the owner of Token '${listing.tokenId}' from contract '${listing.assetContractAddress} anymore'`
      };
    } else if (isERC1155) {
      const asset = new ethers.Contract(listing.assetContractAddress, Erc1155Abi__default["default"], provider);
      const balance = await asset.balanceOf(listing.sellerAddress, listing.tokenId);
      const valid = balance.gte(quantity || listing.quantity);
      return {
        valid,
        error: valid ? undefined : `Seller does not have enough balance of Token '${listing.tokenId}' from contract '${listing.assetContractAddress} to fulfill the listing`
      };
    } else {
      return {
        valid: false,
        error: "Contract does not implement ERC 1155 or ERC 721."
      };
    }
  }
}

/**
 * Handles auction listings
 * @public
 */
class MarketplaceAuction {
  constructor(contractWrapper, storage) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.encoder = new contractPublisher.ContractEncoder(contractWrapper);
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get an Auction listing by id
   *
   * @param listingId - the listing Id
   * @returns the Auction listing object
   */
  async getListing(listingId) {
    const listing = await this.contractWrapper.read("listings", [listingId]);
    if (listing.listingId.toString() !== listingId.toString()) {
      throw new contractPublisher.ListingNotFoundError(this.getAddress(), listingId.toString());
    }
    if (listing.listingType !== ListingType.Auction) {
      throw new contractPublisher.WrongListingTypeError(this.getAddress(), listingId.toString(), "Direct", "Auction");
    }
    return await this.mapListing(listing);
  }

  /**
   * Get Highest Bid
   *
   * @remarks Get the current highest bid of an active auction.
   *
   * @example
   * ```javascript
   * // The listing ID of the auction that closed
   * const listingId = 0;
   *
   * contract.auction.
   *   .getWinningBid(listingId)
   *   .then((offer) => console.log(offer))
   *   .catch((err) => console.error(err));
   * ```
   */
  async getWinningBid(listingId) {
    await this.validateListing(ethers.BigNumber.from(listingId));
    const offers = await this.contractWrapper.read("winningBid", [listingId]);
    if (offers.offeror === ethers.constants.AddressZero) {
      return undefined;
    }
    return await contractPublisher.mapOffer(this.contractWrapper.getProvider(), ethers.BigNumber.from(listingId), offers);
  }

  /**
   * Get Auction Winner
   *
   * @remarks Get the winner of the auction after an auction ends.
   *
   * @example
   * ```javascript
   * // The listing ID of the auction that closed
   * const listingId = 0;
   *
   * contract.auction.
   *   .getWinner(listingId)
   *   .then((auctionWinner) => console.log(auctionWinner))
   *   .catch((err) => console.error(err));
   * ```
   */
  async getWinner(listingId) {
    const listing = await this.validateListing(ethers.BigNumber.from(listingId));
    const offers = await this.contractWrapper.read("winningBid", [listingId]);
    const now = ethers.BigNumber.from(Math.floor(Date.now() / 1000));
    const endTime = ethers.BigNumber.from(listing.endTimeInEpochSeconds);

    // if we have a winner in the map and the current time is past the endtime of the auction return the address of the winner
    if (now.gt(endTime) && offers.offeror !== ethers.constants.AddressZero) {
      return offers.offeror;
    }
    // otherwise fall back to query filter things

    // TODO this should be via indexer or direct contract call
    const contractEvents = new contractPublisher.ContractEvents(this.contractWrapper);
    const closedAuctions = await contractEvents.getEvents("AuctionClosed");
    const auction = closedAuctions.find(a => a.data.listingId.eq(ethers.BigNumber.from(listingId)));
    if (!auction) {
      throw new Error(`Could not find auction with listingId ${listingId} in closed auctions`);
    }
    return auction.data.winningBidder;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create Auction
   *
   * @remarks Create a new auction where people can bid on an asset.
   *
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
   * const id = tx.id; // the id of the newly created listing
   * ```
   */
  createListing = /* @__PURE__ */contractPublisher.buildTransactionFunction(async listing => {
    contractPublisher.validateNewListingParam(listing);
    const resolvedAssetAddress = await contractPublisher.resolveAddress(listing.assetContractAddress);
    const resolvedCurrencyAddress = await contractPublisher.resolveAddress(listing.currencyContractAddress);
    await contractPublisher.handleTokenApproval(this.contractWrapper, this.getAddress(), resolvedAssetAddress, listing.tokenId, await this.contractWrapper.getSignerAddress());
    const normalizedPricePerToken = await contractPublisher.normalizePriceValue(this.contractWrapper.getProvider(), listing.buyoutPricePerToken, resolvedCurrencyAddress);
    const normalizedReservePrice = await contractPublisher.normalizePriceValue(this.contractWrapper.getProvider(), listing.reservePricePerToken, resolvedCurrencyAddress);
    let listingStartTime = Math.floor(listing.startTimestamp.getTime() / 1000);
    const block = await this.contractWrapper.getProvider().getBlock("latest");
    const blockTime = block.timestamp;
    if (listingStartTime < blockTime) {
      listingStartTime = blockTime;
    }
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "createListing",
      args: [{
        assetContract: resolvedAssetAddress,
        tokenId: listing.tokenId,
        buyoutPricePerToken: normalizedPricePerToken,
        currencyToAccept: contractPublisher.cleanCurrencyAddress(resolvedCurrencyAddress),
        listingType: ListingType.Auction,
        quantityToList: listing.quantity,
        reservePricePerToken: normalizedReservePrice,
        secondsUntilEndTime: listing.listingDurationInSeconds,
        startTime: ethers.BigNumber.from(listingStartTime)
      }],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("ListingAdded", receipt?.logs);
        return {
          id: event[0].args.listingId,
          receipt
        };
      }
    });
  });

  /**
   * Create a batch of new auctions
   *
   * @remarks Create a batch of new auctions on the marketplace
   *
   * @example
   * ```javascript
   * const auctions = [...];
   * const tx = await contract.auction.createListingsBatch(auctions);
   * ```
   */
  createListingsBatch = /* @__PURE__ */contractPublisher.buildTransactionFunction(async listings => {
    const data = await Promise.all(listings.map(async listing => {
      const tx = await this.createListing.prepare(listing);
      return tx.encode();
    }));
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "multicall",
      args: [data],
      parse: receipt => {
        const events = this.contractWrapper.parseLogs("ListingAdded", receipt?.logs);
        return events.map(event => {
          return {
            id: event.args.listingId,
            receipt
          };
        });
      }
    });
  });

  /**
   * Buyout Auction
   *
   * @remarks Buy a specific direct listing from the marketplace.
   *
   * @example
   * ```javascript
   * // The listing ID of the asset you want to buy
   * const listingId = 0;
   *
   * await contract.auction.buyoutListing(listingId);
   * ```
   */
  buyoutListing = /* @__PURE__ */contractPublisher.buildTransactionFunction(async listingId => {
    const listing = await this.validateListing(ethers.BigNumber.from(listingId));
    const currencyMetadata = await contractPublisher.fetchCurrencyMetadata(this.contractWrapper.getProvider(), listing.currencyContractAddress);
    return this.makeBid.prepare(listingId, ethers.utils.formatUnits(listing.buyoutPrice, currencyMetadata.decimals));
  });

  /**
   * Bid On Auction
   *
   * @remarks Make a bid on an auction listing
   *
   * @example
   * ```javascript
   * // The listing ID of the asset you want to bid on
   * const listingId = 0;
   * // The price you are willing to bid for a single token of the listing
   * const pricePerToken = 1;
   *
   * await contract.auction.makeBid(listingId, pricePerToken);
   * ```
   */
  makeBid = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (listingId, pricePerToken) => {
    const listing = await this.validateListing(ethers.BigNumber.from(listingId));
    const normalizedPrice = await contractPublisher.normalizePriceValue(this.contractWrapper.getProvider(), pricePerToken, listing.currencyContractAddress);
    if (normalizedPrice.eq(ethers.BigNumber.from(0))) {
      throw new Error("Cannot make a bid with 0 value");
    }
    const bidBuffer = await this.contractWrapper.read("bidBufferBps", []);
    const winningBid = await this.getWinningBid(listingId);
    if (winningBid) {
      const isWinner = contractPublisher.isWinningBid(winningBid.pricePerToken, normalizedPrice, bidBuffer);
      invariant__default["default"](isWinner, "Bid price is too low based on the current winning bid and the bid buffer");
    } else {
      const tokenPrice = normalizedPrice;
      const reservePrice = ethers.BigNumber.from(listing.reservePrice);
      invariant__default["default"](tokenPrice.gte(reservePrice), "Bid price is too low based on reserve price");
    }
    const quantity = ethers.BigNumber.from(listing.quantity);
    const value = normalizedPrice.mul(quantity);
    const overrides = (await this.contractWrapper.getCallOverrides()) || {};
    await contractPublisher.setErc20Allowance(this.contractWrapper, value, listing.currencyContractAddress, overrides);
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "offer",
      args: [listingId, listing.quantity, listing.currencyContractAddress, normalizedPrice, ethers.constants.MaxUint256],
      overrides
    });
  });

  /**
   * Cancel Auction Listing
   *
   * @remarks Cancel an auction listing on the marketplace
   *
   * @example
   * ```javascript
   * // The listing ID of the auction listing you want to cancel
   * const listingId = "0";
   *
   * await contract.auction.cancelListing(listingId);
   * ```
   */
  cancelListing = /* @__PURE__ */contractPublisher.buildTransactionFunction(async listingId => {
    const listing = await this.validateListing(ethers.BigNumber.from(listingId));
    const now = ethers.BigNumber.from(Math.floor(Date.now() / 1000));
    const startTime = ethers.BigNumber.from(listing.startTimeInEpochSeconds);
    const offers = await this.contractWrapper.read("winningBid", [listingId]);
    if (now.gt(startTime) && offers.offeror !== ethers.constants.AddressZero) {
      throw new contractPublisher.AuctionAlreadyStartedError(listingId.toString());
    }
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "closeAuction",
      args: [ethers.BigNumber.from(listingId), await this.contractWrapper.getSignerAddress()]
    });
  });

  /**
   * Close the Auction for the buyer or the seller
   *
   * @remarks Closes the Auction and executes the sale for the buyer or the seller.
   *
   * @example
   * ```javascript
   * // The listing ID of the auction listing you want to close
   * const listingId = "0";
   * await contract.auction.closeListing(listingId);
   * ```
   *
   * @param listingId - the auction  listing ud to close
   * @param closeFor - optionally pass the auction creator address or winning bid offeror address to close the auction on their behalf
   */
  closeListing = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (listingId, closeFor) => {
    if (!closeFor) {
      closeFor = await this.contractWrapper.getSignerAddress();
    }
    const listing = await this.validateListing(ethers.BigNumber.from(listingId));
    try {
      return contractPublisher.Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "closeAuction",
        args: [ethers.BigNumber.from(listingId), closeFor]
      });
    } catch (err) {
      if (err.message.includes("cannot close auction before it has ended")) {
        throw new contractPublisher.AuctionHasNotEndedError(listingId.toString(), listing.endTimeInEpochSeconds.toString());
      } else {
        throw err;
      }
    }
  });

  /**
   * Execute the Auction Sale
   *
   * @remarks Closes the Auction and executes the sale for both parties.
   *
   * @example
   * ```javascript
   * // The listing ID of the auction listing you want to close
   * const listingId = "0";
   * await contract.auction.executeSale(listingId);
   * ```
   *
   * @param listingId - the auction  listing ud to close
   */
  executeSale = /* @__PURE__ */contractPublisher.buildTransactionFunction(async listingId => {
    const listing = await this.validateListing(ethers.BigNumber.from(listingId));
    try {
      const winningBid = await this.getWinningBid(listingId);
      invariant__default["default"](winningBid, "No winning bid found");
      const closeForSeller = this.encoder.encode("closeAuction", [listingId, listing.sellerAddress]);
      const closeForBuyer = this.encoder.encode("closeAuction", [listingId, winningBid.buyerAddress]);
      return contractPublisher.Transaction.fromContractWrapper({
        contractWrapper: this.contractWrapper,
        method: "multicall",
        args: [closeForSeller, closeForBuyer]
      });
    } catch (err) {
      if (err.message.includes("cannot close auction before it has ended")) {
        throw new contractPublisher.AuctionHasNotEndedError(listingId.toString(), listing.endTimeInEpochSeconds.toString());
      } else {
        throw err;
      }
    }
  });

  /**
   * Update an Auction listing with new metadata
   * @param listing - the listing id to update
   */
  updateListing = /* @__PURE__ */contractPublisher.buildTransactionFunction(async listing => {
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "updateListing",
      args: [listing.id, listing.quantity, listing.reservePrice, listing.buyoutPrice, listing.currencyContractAddress, listing.startTimeInEpochSeconds, listing.endTimeInEpochSeconds]
    });
  });

  /**
   * Get the buffer in basis points between offers
   */
  async getBidBufferBps() {
    return this.contractWrapper.read("bidBufferBps", []);
  }

  /**
   * returns the minimum bid a user can place to outbid the previous highest bid
   * @param listingId - the listing id of the auction
   */
  async getMinimumNextBid(listingId) {
    // we can fetch all of these at the same time using promise.all
    const [currentBidBufferBps, winningBid, listing] = await Promise.all([this.getBidBufferBps(), this.getWinningBid(listingId), await this.validateListing(ethers.BigNumber.from(listingId))]);
    const currentBidOrReservePrice = winningBid ?
    // if there is a winning bid use the value of it
    winningBid.currencyValue.value :
    // if there is no winning bid use the reserve price
    listing.reservePrice;
    const minimumNextBid = currentBidOrReservePrice.add(
    // the addition of the current bid and the buffer
    // (have to divide by 10000 to get the fraction of the buffer (since it's in basis points))
    currentBidOrReservePrice.mul(currentBidBufferBps).div(10000));

    // it's more useful to return a currency value here
    return contractPublisher.fetchCurrencyValue(this.contractWrapper.getProvider(), listing.currencyContractAddress, minimumNextBid);
  }

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  /**
   * Throws error if listing could not be found
   *
   * @param listingId - Listing to check for
   */
  async validateListing(listingId) {
    try {
      return await this.getListing(listingId);
    } catch (err) {
      console.error(`Error getting the listing with id ${listingId}`);
      throw err;
    }
  }

  /**
   * Helper method maps the auction listing to the auction listing interface.
   *
   * @internal
   * @param listing - The listing to map, as returned from the contract.
   * @returns - The mapped interface.
   */
  async mapListing(listing) {
    return {
      assetContractAddress: listing.assetContract,
      buyoutPrice: ethers.BigNumber.from(listing.buyoutPricePerToken),
      currencyContractAddress: listing.currency,
      buyoutCurrencyValuePerToken: await contractPublisher.fetchCurrencyValue(this.contractWrapper.getProvider(), listing.currency, listing.buyoutPricePerToken),
      id: listing.listingId.toString(),
      tokenId: listing.tokenId,
      quantity: listing.quantity,
      startTimeInEpochSeconds: listing.startTime,
      asset: await contractPublisher.fetchTokenMetadataForContract(listing.assetContract, this.contractWrapper.getProvider(), listing.tokenId, this.storage),
      reservePriceCurrencyValuePerToken: await contractPublisher.fetchCurrencyValue(this.contractWrapper.getProvider(), listing.currency, listing.reservePricePerToken),
      reservePrice: ethers.BigNumber.from(listing.reservePricePerToken),
      endTimeInEpochSeconds: listing.endTime,
      sellerAddress: listing.tokenOwner,
      type: ListingType.Auction
    };
  }
}

exports.ListingType = ListingType;
exports.MarketplaceAuction = MarketplaceAuction;
exports.MarketplaceDirect = MarketplaceDirect;
