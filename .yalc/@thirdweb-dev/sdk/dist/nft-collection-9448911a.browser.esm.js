import { constants } from 'ethers';
import { dG as NFT_BASE_CONTRACT_ROLES, ds as ContractWrapper, e as AbiSchema, ah as ContractMetadata, dR as TokenErc721ContractSchema, b0 as ContractAppURI, ai as ContractRoles, aj as ContractRoyalty, ak as ContractPrimarySale, ag as ContractEncoder, aQ as GasCostEstimator, aR as ContractEvents, aT as ContractPlatformFee, aS as ContractInterceptor, aE as Erc721WithQuantitySignatureMintable, aV as ContractOwner, bI as getRoleHash, dt as buildTransactionFunction, aW as Transaction } from './contract-publisher-da6d1b7a.browser.esm.js';
import { S as StandardErc721 } from './erc-721-standard-c71f950e.browser.esm.js';
import './QueryParams-39bcad7a.browser.esm.js';
import 'bn.js';
import 'zod';
import 'tiny-invariant';
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
 * Create a collection of one-of-one NFTs.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "nft-collection");
 * ```
 *
 * @public
 */
class NFTCollection extends StandardErc721 {
  static contractRoles = NFT_BASE_CONTRACT_ROLES;

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
   * Signature Minting
   * @remarks Generate dynamic NFTs with your own signature, and let others mint them using that signature.
   * @example
   * ```javascript
   * // see how to craft a payload to sign in the `contract.signature.generate()` documentation
   * const signedPayload = contract.signature().generate(payload);
   *
   * // now anyone can mint the NFT
   * const tx = contract.signature.mint(signedPayload);
   * const receipt = tx.receipt; // the mint transaction receipt
   * const mintedId = tx.id; // the id of the NFT minted
   * ```
   */

  /**
   * @internal
   */

  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new ContractWrapper(network, address, abi, options, storage);
    super(contractWrapper, storage, chainId);
    this.abi = AbiSchema.parse(abi || []);
    this.metadata = new ContractMetadata(this.contractWrapper, TokenErc721ContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, NFTCollection.contractRoles);
    this.royalties = new ContractRoyalty(this.contractWrapper, this.metadata);
    this.sales = new ContractPrimarySale(this.contractWrapper);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.platformFees = new ContractPlatformFee(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
    this.signature = new Erc721WithQuantitySignatureMintable(this.contractWrapper, this.storage);
    this.owner = new ContractOwner(this.contractWrapper);
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
   * Get whether users can transfer NFTs from this contract
   */
  async isTransferRestricted() {
    const anyoneCanTransfer = await this.contractWrapper.read("hasRole", [getRoleHash("transfer"), constants.AddressZero]);
    return !anyoneCanTransfer;
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Mint a unique NFT
   *
   * @remarks Mint a unique NFT to a specified wallet.
   *
   * @example
   * ```javascript*
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const tx = await contract.mint(metadata);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   */
  mint = /* @__PURE__ */buildTransactionFunction(async metadata => {
    return this.erc721.mint.prepare(metadata);
  });

  /**
   * Mint a unique NFT
   *
   * @remarks Mint a unique NFT to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFT, note that you can fully customize this metadata with other properties.
   * const metadata = {
   *   name: "Cool NFT",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * };
   *
   * const tx = await contract.mintTo(walletAddress, metadata);
   * const receipt = tx.receipt; // the transaction receipt
   * const tokenId = tx.id; // the id of the NFT minted
   * const nft = await tx.data(); // (optional) fetch details of minted NFT
   * ```
   */
  mintTo = /* @__PURE__ */buildTransactionFunction(async (walletAddress, metadata) => {
    return this.erc721.mintTo.prepare(walletAddress, metadata);
  });

  /**
   * Construct a mint transaction without executing it.
   * This is useful for estimating the gas cost of a mint transaction, overriding transaction options and having fine grained control over the transaction execution.
   * @param receiver - Address you want to send the token to
   * @param metadata - The metadata of the NFT you want to mint
   *
   * @deprecated Use `contract.mint.prepare(...args)` instead
   */
  async getMintTransaction(receiver, metadata) {
    return this.erc721.getMintTransaction(receiver, metadata);
  }

  /**
   * Mint Many unique NFTs
   *
   * @remarks Mint many unique NFTs at once to the connected wallet
   *
   * @example
   * ```javascript*
   * // Custom metadata of the NFTs you want to mint.
   * const metadatas = [{
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT #2",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/other/image.png"),
   * }];
   *
   * const tx = await contract.mintBatch(metadatas);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   */
  mintBatch = /* @__PURE__ */buildTransactionFunction(async metadata => {
    return this.erc721.mintBatch.prepare(metadata);
  });

  /**
   * Mint Many unique NFTs
   *
   * @remarks Mint many unique NFTs at once to a specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to mint the NFT to
   * const walletAddress = "{{wallet_address}}";
   *
   * // Custom metadata of the NFTs you want to mint.
   * const metadatas = [{
   *   name: "Cool NFT #1",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/image.png"), // This can be an image url or file
   * }, {
   *   name: "Cool NFT #2",
   *   description: "This is a cool NFT",
   *   image: fs.readFileSync("path/to/other/image.png"),
   * }];
   *
   * const tx = await contract.mintBatchTo(walletAddress, metadatas);
   * const receipt = tx[0].receipt; // same transaction receipt for all minted NFTs
   * const firstTokenId = tx[0].id; // token id of the first minted NFT
   * const firstNFT = await tx[0].data(); // (optional) fetch details of the first minted NFT
   * ```
   */
  mintBatchTo = /* @__PURE__ */buildTransactionFunction(async (walletAddress, metadata) => {
    return this.erc721.mintBatchTo.prepare(walletAddress, metadata);
  });

  /**
   * Burn a single NFT
   * @param tokenId - the token Id to burn
   *
   * @example
   * ```javascript
   * const result = await contract.burnToken(tokenId);
   * ```
   */
  burn = /* @__PURE__ */buildTransactionFunction(tokenId => {
    return this.erc721.burn.prepare(tokenId);
  });

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

export { NFTCollection };
