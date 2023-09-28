'use strict';

var ERC20Abi = require('@thirdweb-dev/contracts-js/dist/abis/IERC20.json');
var ethers = require('ethers');
var contractPublisher = require('./contract-publisher-de532850.cjs.prod.js');
require('./QueryParams-bf2cbec1.cjs.prod.js');
require('bn.js');
require('zod');
require('tiny-invariant');
require('uuid');
require('@thirdweb-dev/storage');
require('@thirdweb-dev/contracts-js/dist/abis/IERC165.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json');
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

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var ERC20Abi__default = /*#__PURE__*/_interopDefault(ERC20Abi);

/**
 * Create custom royalty splits to distribute funds.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "split");
 * ```
 *
 * @public
 */
class Split {
  static contractRoles = contractPublisher.ADMIN_ROLE;

  /**
   * @internal
   */

  get chainId() {
    return this._chainId;
  }
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new contractPublisher.ContractWrapper(network, address, abi, options, storage);
    this._chainId = chainId;
    this.abi = contractPublisher.AbiSchema.parse(abi || []);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new contractPublisher.ContractMetadata(this.contractWrapper, contractPublisher.SplitsContractSchema, this.storage);
    this.app = new contractPublisher.ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new contractPublisher.ContractRoles(this.contractWrapper, Split.contractRoles);
    this.encoder = new contractPublisher.ContractEncoder(this.contractWrapper);
    this.estimator = new contractPublisher.GasCostEstimator(this.contractWrapper);
    this.events = new contractPublisher.ContractEvents(this.contractWrapper);
    this.interceptor = new contractPublisher.ContractInterceptor(this.contractWrapper);
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
   * Get Recipients of this splits contract
   *
   * @remarks Get the data about the shares of every split recipient on the contract
   *
   * @example
   * ```javascript
   * const recipients = await contract.getAllRecipients();
   * console.log(recipients);
   * ```
   */
  async getAllRecipients() {
    const recipients = [];
    let index = ethers.BigNumber.from(0);
    const totalRecipients = await this.contractWrapper.read("payeeCount", []);
    while (index.lt(totalRecipients)) {
      try {
        const recipientAddress = await this.contractWrapper.read("payee", [index]);
        recipients.push(await this.getRecipientSplitPercentage(recipientAddress));
        index = index.add(1);
      } catch (err) {
        // The only way we know how to detect that we've found all recipients
        // is if we get an error when trying to get the next recipient.
        if ("method" in err && err["method"].toLowerCase().includes("payee(uint256)")) {
          break;
        } else {
          throw err;
        }
      }
    }
    return recipients;
  }

  /**
   * Returns all the recipients and their balances in the native currency.
   *
   * @returns A map of recipient addresses to their balances in the native currency.
   */
  async balanceOfAllRecipients() {
    const recipients = await this.getAllRecipients();
    const balances = {};
    for (const recipient of recipients) {
      balances[recipient.address] = await this.balanceOf(recipient.address);
    }
    return balances;
  }

  /**
   * Returns all the recipients and their balances in a non-native currency.
   *
   * @param tokenAddress - The address of the currency to check the balances in.
   * @returns A map of recipient addresses to their balances in the specified currency.
   */
  async balanceOfTokenAllRecipients(tokenAddress) {
    const resolvedToken = await contractPublisher.resolveAddress(tokenAddress);
    const recipients = await this.getAllRecipients();
    const balances = {};
    for (const recipient of recipients) {
      balances[recipient.address] = await this.balanceOfToken(recipient.address, resolvedToken);
    }
    return balances;
  }

  /**
   * Get Funds owed to a particular wallet
   *
   * @remarks Get the amount of funds in the native currency held by the contract that is owed to a specific recipient.
   *
   * @example
   * ```javascript
   * // The address to check the funds of
   * const address = "{{wallet_address}}";
   * const funds = await contract.balanceOf(address);
   * console.log(funds);
   * ```
   */
  async balanceOf(address) {
    const resolvedAddress = await contractPublisher.resolveAddress(address);
    const walletBalance = await this.contractWrapper.getProvider().getBalance(this.getAddress());
    const totalReleased = await this.contractWrapper.read("totalReleased", []);
    const totalReceived = walletBalance.add(totalReleased);
    return this._pendingPayment(resolvedAddress, totalReceived, await this.contractWrapper.read("released", [resolvedAddress]));
  }

  /**
   * Get non-native Token Funds owed to a particular wallet
   *
   * @remarks Get the amount of funds in the non-native tokens held by the contract that is owed to a specific recipient.
   *
   * @example
   * ```javascript
   * // The address to check the funds of
   * const address = "{{wallet_address}}";
   * // The address of the currency to check the contracts funds of
   * const tokenAddress = "0x..."
   * const funds = await contract.balanceOfToken(address, tokenAddress);
   * console.log(funds);
   * ```
   */
  async balanceOfToken(walletAddress, tokenAddress) {
    const resolvedToken = await contractPublisher.resolveAddress(tokenAddress);
    const resolvedWallet = await contractPublisher.resolveAddress(walletAddress);
    const erc20 = new ethers.Contract(resolvedToken, ERC20Abi__default["default"], this.contractWrapper.getProvider());
    const walletBalance = await erc20.balanceOf(this.getAddress());
    const totalReleased = await this.contractWrapper.read("totalReleased", [resolvedToken]);
    const totalReceived = walletBalance.add(totalReleased);
    const value = await this._pendingPayment(resolvedWallet, totalReceived, await this.contractWrapper.read("released", [resolvedToken, resolvedWallet]));
    return await contractPublisher.fetchCurrencyValue(this.contractWrapper.getProvider(), resolvedToken, value);
  }

  /**
   * Get the % of funds owed to a given address
   * @param address - the address to check percentage of
   */
  async getRecipientSplitPercentage(address) {
    const resolvedAddress = await contractPublisher.resolveAddress(address);
    const [totalShares, walletsShares] = await Promise.all([this.contractWrapper.read("totalShares", []), this.contractWrapper.read("shares", [address])]);
    // We convert to basis points to avoid floating point loss of precision
    return {
      address: resolvedAddress,
      splitPercentage: walletsShares.mul(ethers.BigNumber.from(1e7)).div(totalShares).toNumber() / 1e5
    };
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Withdraw Funds
   * @remarks Triggers a transfer to account of the amount of native currency they are owed.
   *
   * @example
   * ```javascript
   * // the wallet address that wants to withdraw their funds
   * const walletAddress = "{{wallet_address}}"
   * await contract.withdraw(walletAddress);
   * ```
   *
   * @param walletAddress - The address to distributes the amount to
   */
  withdraw = /* @__PURE__ */contractPublisher.buildTransactionFunction(async walletAddress => {
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "release(address)",
      args: [await contractPublisher.resolveAddress(walletAddress)]
    });
  });

  /**
   * Triggers a transfer to account of the amount of a given currency they are owed.
   *
   * @param walletAddress - The address to distributes the amount to
   * @param tokenAddress - The address of the currency contract to distribute funds
   */
  withdrawToken = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (walletAddress, tokenAddress) => {
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "release(address,address)",
      args: [await contractPublisher.resolveAddress(tokenAddress), await contractPublisher.resolveAddress(walletAddress)]
    });
  });

  /**
   * Distribute Funds
   *
   * @remarks Distribute funds held by the contract in the native currency to all recipients.
   *
   * @example
   * ```javascript
   * await contract.distribute();
   * ```
   */
  distribute = /* @__PURE__ */contractPublisher.buildTransactionFunction(async () => {
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "distribute()",
      args: []
    });
  });

  /**
   * Distribute Funds
   *
   * @remarks Distribute funds held by the contract in the native currency to all recipients.
   *
   * @example
   * ```javascript
   * // The address of the currency to distribute funds
   * const tokenAddress = "0x..."
   * await contract.distributeToken(tokenAddress);
   * ```
   *
   * @param tokenAddress - The address of the currency contract to distribute funds
   */
  distributeToken = /* @__PURE__ */contractPublisher.buildTransactionFunction(async tokenAddress => {
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "distribute(address)",
      args: [await contractPublisher.resolveAddress(tokenAddress)]
    });
  });

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  async _pendingPayment(address, totalReceived, alreadyReleased) {
    const addressReceived = totalReceived.mul(await this.contractWrapper.read("shares", [await contractPublisher.resolveAddress(address)]));
    const totalRoyaltyAvailable = addressReceived.div(await this.contractWrapper.read("totalShares", []));
    return totalRoyaltyAvailable.sub(alreadyReleased);
  }

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

exports.Split = Split;
