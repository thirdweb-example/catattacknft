'use strict';

var ethers = require('ethers');
var QueryParams = require('./QueryParams-bf2cbec1.cjs.prod.js');
var contractPublisher = require('./contract-publisher-de532850.cjs.prod.js');
var erc721Standard = require('./erc-721-standard-1b7482af.cjs.prod.js');
var thirdwebCheckout = require('./thirdweb-checkout-b5d28e13.cjs.prod.js');
require('bn.js');
require('zod');
require('tiny-invariant');
require('uuid');
require('@thirdweb-dev/storage');
require('@thirdweb-dev/contracts-js/dist/abis/IERC165.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json');
require('fast-deep-equal');
require('merkletreejs');
require('@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json');
require('@thirdweb-dev/chains');
require('bs58');
require('@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryLogic.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDrop.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20Permit.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMulticall.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC721_V3.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721AQueryableUpgradeable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json');
require('@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/LazyMintWithTier.json');
require('@thirdweb-dev/contracts-js/dist/abis/SharedMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/zora_IERC721Drop.json');
require('@thirdweb-dev/contracts-js/dist/abis/ILoyaltyCard.json');
require('@thirdweb-dev/contracts-js/dist/abis/INFTMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDrop1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC1155_V2.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Supply.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC2771Context.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAppURI.json');
require('@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDirectListings.json');
require('@thirdweb-dev/contracts-js/dist/abis/IEnglishAuctions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IOffers.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPermissions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json');
require('@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json');
require('@thirdweb-dev/contracts-js/dist/abis/Ownable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAirdropERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAirdropERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAirdropERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAccountFactoryCore.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAccountPermissions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAccount.json');
require('ethers/lib/utils');
require('@thirdweb-dev/contracts-js/dist/abis/Forwarder.json');
require('cross-fetch');
require('eventemitter3');

/**
 * Setup a collection of NFTs where when it comes to minting, you can authorize
 * some external party to mint tokens on your contract, and specify what exactly
 * will be minted by that external party..
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "signature-drop");
 * ```
 *
 * @public
 */
class SignatureDrop extends erc721Standard.StandardErc721 {
  static contractRoles = contractPublisher.NFT_BASE_CONTRACT_ROLES;

  /**
   * @internal
   */

  /**
   * Configure royalties
   * @remarks Set your own royalties for the entire contract or per token
   * @example
   * ```javascript
   * // royalties on the whole contract
   * contract.royalties.setDefaultRoyaltyInfo({
   *   seller_fee_basis_points: 100, // 1%
   *   fee_recipient: "0x..."
   * });
   * // override royalty for a particular token
   * contract.royalties.setTokenRoyaltyInfo(tokenId, {
   *   seller_fee_basis_points: 500, // 5%
   *   fee_recipient: "0x..."
   * });
   * ```
   */

  /**
   * Configure claim conditions
   * @remarks Define who can claim NFTs in the collection, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const claimCondition = {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   * };
   * await contract.claimConditions.set([claimCondition]);
   * ```
   */

  /**
   * Delayed reveal
   * @remarks Create a batch of encrypted NFTs that can be revealed at a later time.
   * @example
   * ```javascript
   * // the real NFTs, these will be encrypted until you reveal them
   * const realNFTs = [{
   *   name: "Common NFT #1",
   *   description: "Common NFT, one of many.",
   *   image: fs.readFileSync("path/to/image.png"),
   * }, {
   *   name: "Super Rare NFT #2",
   *   description: "You got a Super Rare NFT!",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   * // A placeholder NFT that people will get immediately in their wallet, and will be converted to the real NFT at reveal time
   * const placeholderNFT = {
   *   name: "Hidden NFT",
   *   description: "Will be revealed next week!"
   * };
   * // Create and encrypt the NFTs
   * await contract.revealer.createDelayedRevealBatch(
   *   placeholderNFT,
   *   realNFTs,
   *   "my secret password",
   * );
   * // Whenever you're ready, reveal your NFTs at any time
   * const batchId = 0; // the batch to reveal
   * await contract.revealer.reveal(batchId, "my secret password");
   * ```
   */

  /**
   * Signature Minting
   * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
   * const signedPayload = contract.signature.generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
   */

  /**
   * Checkout
   * @remarks Create a FIAT currency checkout for your NFT drop.
   */

  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new contractPublisher.ContractWrapper(network, address, abi, options, storage);
    super(contractWrapper, storage, chainId);
    this.abi = contractPublisher.AbiSchema.parse(abi || []);
    this.metadata = new contractPublisher.ContractMetadata(this.contractWrapper, contractPublisher.DropErc721ContractSchema, this.storage);
    this.app = new contractPublisher.ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new contractPublisher.ContractRoles(this.contractWrapper, SignatureDrop.contractRoles);
    this.royalties = new contractPublisher.ContractRoyalty(this.contractWrapper, this.metadata);
    this.sales = new contractPublisher.ContractPrimarySale(this.contractWrapper);
    this.encoder = new contractPublisher.ContractEncoder(this.contractWrapper);
    this.estimator = new contractPublisher.GasCostEstimator(this.contractWrapper);
    this.events = new contractPublisher.ContractEvents(this.contractWrapper);
    this.platformFees = new contractPublisher.ContractPlatformFee(this.contractWrapper);
    this.interceptor = new contractPublisher.ContractInterceptor(this.contractWrapper);
    this.claimConditions = new contractPublisher.DropClaimConditions(this.contractWrapper, this.metadata, this.storage);
    this.signature = new contractPublisher.Erc721WithQuantitySignatureMintable(this.contractWrapper, this.storage);
    this.revealer = new contractPublisher.DelayedReveal(this.contractWrapper, this.storage, contractPublisher.FEATURE_NFT_REVEALABLE.name, () => this.erc721.nextTokenIdToMint());
    this.signature = new contractPublisher.Erc721WithQuantitySignatureMintable(this.contractWrapper, this.storage);
    this.owner = new contractPublisher.ContractOwner(this.contractWrapper);
    this.checkout = new thirdwebCheckout.PaperCheckout(this.contractWrapper);
  }

  /**
   * @internal
   */
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
   * Get the total count NFTs in this drop contract, both claimed and unclaimed
   */
  async totalSupply() {
    const claimed = await this.totalClaimedSupply();
    const unclaimed = await this.totalUnclaimedSupply();
    return claimed.add(unclaimed);
  }

  /**
   * Get All Claimed NFTs
   *
   * @remarks Fetch all the NFTs (and their owners) that have been claimed in this Drop.
   *
   * * @example
   * ```javascript
   * const claimedNFTs = await contract.getAllClaimed();
   * const firstOwner = claimedNFTs[0].owner;
   * ```
   *
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata and their ownersfor all NFTs queried.
   */
  async getAllClaimed(queryParams) {
    const start = ethers.BigNumber.from(queryParams?.start || 0).toNumber();
    const count = ethers.BigNumber.from(queryParams?.count || QueryParams.DEFAULT_QUERY_ALL_COUNT).toNumber();
    const maxId = Math.min((await this.totalClaimedSupply()).toNumber(), start + count);
    return await Promise.all(Array.from(Array(maxId).keys()).map(i => this.get(i.toString())));
  }

  /**
   * Get All Unclaimed NFTs
   *
   * @remarks Fetch all the NFTs that have been not been claimed yet in this Drop.
   *
   * * @example
   * ```javascript
   * const unclaimedNFTs = await contract.getAllUnclaimed();
   * const firstUnclaimedNFT = unclaimedNFTs[0].name;
   * ```
   *
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */
  async getAllUnclaimed(queryParams) {
    const start = ethers.BigNumber.from(queryParams?.start || 0).toNumber();
    const count = ethers.BigNumber.from(queryParams?.count || QueryParams.DEFAULT_QUERY_ALL_COUNT).toNumber();
    const firstTokenId = ethers.BigNumber.from(Math.max((await this.totalClaimedSupply()).toNumber(), start));
    const maxId = ethers.BigNumber.from(Math.min((await this.contractWrapper.read("nextTokenIdToMint", [])).toNumber(), firstTokenId.toNumber() + count));
    return await Promise.all(Array.from(Array(maxId.sub(firstTokenId).toNumber()).keys()).map(i => this.erc721.getTokenMetadata(firstTokenId.add(i).toString())));
  }

  /**
   * Get the claimed supply
   *
   * @remarks Get the number of claimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const claimedNFTCount = await contract.totalClaimedSupply();
   * console.log(`NFTs claimed so far: ${claimedNFTCount}`);
   * ```
   * @returns the claimed supply
   */
  async totalClaimedSupply() {
    return this.erc721.totalClaimedSupply();
  }

  /**
   * Get the unclaimed supply
   *
   * @remarks Get the number of unclaimed NFTs in this Drop.
   *
   * * @example
   * ```javascript
   * const unclaimedNFTCount = await contract.totalUnclaimedSupply();
   * console.log(`NFTs left to claim: ${unclaimedNFTCount}`);
   * ```
   * @returns the unclaimed supply
   */
  async totalUnclaimedSupply() {
    return this.erc721.totalUnclaimedSupply();
  }

  /**
   * Get whether users can transfer NFTs from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.read("hasRole", [contractPublisher.getRoleHash("transfer"), ethers.constants.AddressZero]);
    return !anyoneCanTransfer;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create a batch of unique NFTs to be claimed in the future
   *
   * @remarks Create batch allows you to create a batch of many unique NFTs in one transaction.
   *
   * @example
   * ```javascript
   * // Custom metadata of the NFTs to create
   * const metadatas = [{
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"),
   * }];
   *
   * const results = await contract.createBatch(metadatas); // uploads and creates the NFTs on chain
   * const firstTokenId = results[0].id; // token id of the first created NFT
   * const firstNFT = await results[0].data(); // (optional) fetch details of the first created NFT
   * ```
   *
   * @param metadatas - The metadata to include in the batch.
   * @param options - optional upload progress callback
   */
  createBatch = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (metadatas, options) => {
    return this.erc721.lazyMint.prepare(metadatas, options);
  });

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress
   * @param quantity
   * @param checkERC20Allowance
   *
   * @deprecated Use `contract.erc721.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, quantity, options) {
    return this.erc721.getClaimTransaction(destinationAddress, quantity, options);
  }

  /**
   * Claim unique NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const quantity = 1; // how many unique NFTs you want to claim
   *
   * const tx = await contract.claimTo(address, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * const claimedTokenId = tx.id; // the id of the NFT claimed
   * const claimedNFT = await tx.data(); // (optional) get the claimed NFT metadata
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   *
   * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   */
  claimTo = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (destinationAddress, quantity, options) => {
    return this.erc721.claimTo.prepare(destinationAddress, quantity, options);
  });

  /**
   * Claim NFTs to the connected wallet.
   *
   * @remarks See {@link NFTDrop.claimTo}
   *
   * @returns - an array of results containing the id of the token claimed, the transaction receipt and a promise to optionally fetch the nft metadata
   */
  claim = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (quantity, options) => {
    return this.erc721.claim.prepare(quantity, options);
  });

  /**
   * Burn a single NFT
   * @param tokenId - the token Id to burn
   * @example
   * ```javascript
   * const result = await contract.burnToken(tokenId);
   * ```
   */
  burn = /* @__PURE__ */contractPublisher.buildTransactionFunction(async tokenId => {
    return this.erc721.burn.prepare(tokenId);
  });

  /**
   * @internal
   */
  async prepare(method, args, overrides) {
    return contractPublisher.Transaction.fromContractWrapper({
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

exports.SignatureDrop = SignatureDrop;
