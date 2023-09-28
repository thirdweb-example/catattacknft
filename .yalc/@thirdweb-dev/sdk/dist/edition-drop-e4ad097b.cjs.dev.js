'use strict';

var ethers = require('ethers');
var contractPublisher = require('./contract-publisher-e9595070.cjs.dev.js');
var dropErc1155History = require('./drop-erc1155-history-03f56b87.cjs.dev.js');
var erc1155Standard = require('./erc-1155-standard-7802a550.cjs.dev.js');
var thirdwebCheckout = require('./thirdweb-checkout-3071d3bb.cjs.dev.js');
require('./QueryParams-012ec906.cjs.dev.js');
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
 * Setup a collection of NFTs with a customizable number of each NFT that are minted as users claim them.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "edition-drop");
 * ```
 *
 * @public
 */
class EditionDrop extends erc1155Standard.StandardErc1155 {
  static contractRoles = contractPublisher.NFT_BASE_CONTRACT_ROLES;

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
   * Configure claim conditions for each NFT
   * @remarks Define who can claim each NFT in the edition, when and how many.
   * @example
   * ```javascript
   * const presaleStartTime = new Date();
   * const publicSaleStartTime = new Date(Date.now() + 60 * 60 * 24 * 1000);
   * const claimConditions = [
   *   {
   *     startTime: presaleStartTime, // start the presale now
   *     maxClaimableSupply: 2, // limit how many mints for this presale
   *     price: 0.01, // presale price
   *     snapshot: ['0x...', '0x...'], // limit minting to only certain addresses
   *   },
   *   {
   *     startTime: publicSaleStartTime, // 24h after presale, start public sale
   *     price: 0.08, // public sale price
   *   }
   * ]);
   *
   * const tokenId = 0; // the id of the NFT to set claim conditions on
   * await contract.claimConditions.set(tokenId, claimConditions);
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
    this.abi = contractPublisher.AbiSchema.parse(abi);
    this.metadata = new contractPublisher.ContractMetadata(this.contractWrapper, contractPublisher.DropErc1155ContractSchema, this.storage);
    this.app = new contractPublisher.ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new contractPublisher.ContractRoles(this.contractWrapper, EditionDrop.contractRoles);
    this.royalties = new contractPublisher.ContractRoyalty(this.contractWrapper, this.metadata);
    this.sales = new contractPublisher.ContractPrimarySale(this.contractWrapper);
    this.claimConditions = new contractPublisher.DropErc1155ClaimConditions(this.contractWrapper, this.metadata, this.storage);
    this.events = new contractPublisher.ContractEvents(this.contractWrapper);
    this.history = new dropErc1155History.DropErc1155History(this.events);
    this.encoder = new contractPublisher.ContractEncoder(this.contractWrapper);
    this.estimator = new contractPublisher.GasCostEstimator(this.contractWrapper);
    this.platformFees = new contractPublisher.ContractPlatformFee(this.contractWrapper);
    this.interceptor = new contractPublisher.ContractInterceptor(this.contractWrapper);
    this.checkout = new thirdwebCheckout.PaperCheckout(this.contractWrapper);
    this.owner = new contractPublisher.ContractOwner(this.contractWrapper);
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

  // TODO getAllClaimerAddresses() - should be done via an indexer

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
   * ```
   * @param queryParams - optional filtering to only fetch a subset of results.
   * @returns The NFT metadata for all NFTs queried.
   */
  async getAll(queryParams) {
    return this.erc1155.getAll(queryParams);
  }

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
   * ```
   *
   * @returns The NFT metadata for all NFTs in the contract.
   */
  async getOwned(walletAddress) {
    return this.erc1155.getOwned(walletAddress);
  }

  /**
   * Get the number of NFTs minted
   * @returns the total number of NFTs minted in this contract
   * @public
   */
  async getTotalCount() {
    return this.erc1155.totalCount();
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
   * Create a batch of NFTs to be claimed in the future
   *
   * @remarks Create batch allows you to create a batch of many NFTs in one transaction.
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
    return this.erc1155.lazyMint.prepare(metadatas, options);
  });

  /**
   * Construct a claim transaction without executing it.
   * This is useful for estimating the gas cost of a claim transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param claimData - Optional claim verification data (e.g. price, allowlist proof, etc...)
   *
   * @deprecated Use `contract.erc1155.claim.prepare(...args)` instead
   */
  async getClaimTransaction(destinationAddress, tokenId, quantity) {
    let checkERC20Allowance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    return this.erc1155.getClaimTransaction(destinationAddress, tokenId, quantity, {
      checkERC20Allowance
    });
  }

  /**
   * Claim NFTs to a specific Wallet
   *
   * @remarks Let the specified wallet claim NFTs.
   *
   * @example
   * ```javascript
   * const address = "{{wallet_address}}"; // address of the wallet you want to claim the NFTs
   * const tokenId = 0; // the id of the NFT you want to claim
   * const quantity = 1; // how many NFTs you want to claim
   *
   * const tx = await contract.claimTo(address, tokenId, quantity);
   * const receipt = tx.receipt; // the transaction receipt
   * ```
   *
   * @param destinationAddress - Address you want to send the token to
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param proofs - Array of proofs
   *
   * @returns - Receipt for the transaction
   */
  claimTo = /* @__PURE__ */contractPublisher.buildTransactionFunction((() => {
    var _this = this;
    return async function (destinationAddress, tokenId, quantity) {
      let checkERC20Allowance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      return _this.erc1155.claimTo.prepare(destinationAddress, tokenId, quantity, {
        checkERC20Allowance
      });
    };
  })());

  /**
   * Claim a token to the connected wallet
   *
   * @remarks See {@link EditionDrop.claimTo}
   *
   * @param tokenId - Id of the token you want to claim
   * @param quantity - Quantity of the tokens you want to claim
   * @param checkERC20Allowance - Optional, check if the wallet has enough ERC20 allowance to claim the tokens, and if not, approve the transfer
   * @param proofs - Array of proofs
   *
   * @returns - Receipt for the transaction
   */
  claim = /* @__PURE__ */contractPublisher.buildTransactionFunction((() => {
    var _this2 = this;
    return async function (tokenId, quantity) {
      let checkERC20Allowance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      const address = await _this2.contractWrapper.getSignerAddress();
      return _this2.claimTo.prepare(address, tokenId, quantity, checkERC20Allowance);
    };
  })());

  /**
   * Burn a specified amount of a NFT
   *
   * @param tokenId - the token Id to burn
   * @param amount - amount to burn
   *
   * @example
   * ```javascript
   * const result = await contract.burnTokens(tokenId, amount);
   * ```
   */
  burnTokens = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (tokenId, amount) => {
    return this.erc1155.burn.prepare(tokenId, amount);
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

exports.EditionDrop = EditionDrop;
