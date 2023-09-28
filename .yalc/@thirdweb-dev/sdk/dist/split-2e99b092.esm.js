import ERC20Abi from '@thirdweb-dev/contracts-js/dist/abis/IERC20.json';
import { BigNumber, Contract } from 'ethers';
import { dW as ADMIN_ROLE, ds as ContractWrapper, e as AbiSchema, ah as ContractMetadata, dX as SplitsContractSchema, b0 as ContractAppURI, ai as ContractRoles, ag as ContractEncoder, aQ as GasCostEstimator, aR as ContractEvents, aS as ContractInterceptor, cG as resolveAddress, bc as fetchCurrencyValue, dt as buildTransactionFunction, aW as Transaction } from './contract-publisher-7ea04dd3.esm.js';
import './QueryParams-a5ecb9ff.esm.js';
import 'bn.js';
import 'zod';
import 'tiny-invariant';
import 'uuid';
import '@thirdweb-dev/storage';
import '@thirdweb-dev/contracts-js/dist/abis/IERC165.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json';
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
  static contractRoles = ADMIN_ROLE;

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
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new ContractWrapper(network, address, abi, options, storage);
    this._chainId = chainId;
    this.abi = AbiSchema.parse(abi || []);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new ContractMetadata(this.contractWrapper, SplitsContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.roles = new ContractRoles(this.contractWrapper, Split.contractRoles);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
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
    let index = BigNumber.from(0);
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
    const resolvedToken = await resolveAddress(tokenAddress);
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
    const resolvedAddress = await resolveAddress(address);
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
    const resolvedToken = await resolveAddress(tokenAddress);
    const resolvedWallet = await resolveAddress(walletAddress);
    const erc20 = new Contract(resolvedToken, ERC20Abi, this.contractWrapper.getProvider());
    const walletBalance = await erc20.balanceOf(this.getAddress());
    const totalReleased = await this.contractWrapper.read("totalReleased", [resolvedToken]);
    const totalReceived = walletBalance.add(totalReleased);
    const value = await this._pendingPayment(resolvedWallet, totalReceived, await this.contractWrapper.read("released", [resolvedToken, resolvedWallet]));
    return await fetchCurrencyValue(this.contractWrapper.getProvider(), resolvedToken, value);
  }

  /**
   * Get the % of funds owed to a given address
   * @param address - the address to check percentage of
   */
  async getRecipientSplitPercentage(address) {
    const resolvedAddress = await resolveAddress(address);
    const [totalShares, walletsShares] = await Promise.all([this.contractWrapper.read("totalShares", []), this.contractWrapper.read("shares", [address])]);
    // We convert to basis points to avoid floating point loss of precision
    return {
      address: resolvedAddress,
      splitPercentage: walletsShares.mul(BigNumber.from(1e7)).div(totalShares).toNumber() / 1e5
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
  withdraw = /* @__PURE__ */buildTransactionFunction(async walletAddress => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "release(address)",
      args: [await resolveAddress(walletAddress)]
    });
  });

  /**
   * Triggers a transfer to account of the amount of a given currency they are owed.
   *
   * @param walletAddress - The address to distributes the amount to
   * @param tokenAddress - The address of the currency contract to distribute funds
   */
  withdrawToken = /* @__PURE__ */buildTransactionFunction(async (walletAddress, tokenAddress) => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "release(address,address)",
      args: [await resolveAddress(tokenAddress), await resolveAddress(walletAddress)]
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
  distribute = /* @__PURE__ */buildTransactionFunction(async () => {
    return Transaction.fromContractWrapper({
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
  distributeToken = /* @__PURE__ */buildTransactionFunction(async tokenAddress => {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "distribute(address)",
      args: [await resolveAddress(tokenAddress)]
    });
  });

  /** ******************************
   * PRIVATE FUNCTIONS
   *******************************/

  async _pendingPayment(address, totalReceived, alreadyReleased) {
    const addressReceived = totalReceived.mul(await this.contractWrapper.read("shares", [await resolveAddress(address)]));
    const totalRoyaltyAvailable = addressReceived.div(await this.contractWrapper.read("totalShares", []));
    return totalRoyaltyAvailable.sub(alreadyReleased);
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

export { Split };
