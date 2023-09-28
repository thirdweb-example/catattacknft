'use strict';

var contractPublisher = require('./contract-publisher-de532850.cjs.prod.js');

/**
 * Standard ERC20 Token functions
 * @remarks Basic functionality for a ERC20 contract that handles all unit transformation for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.token.transfer(walletAddress, amount);
 * ```
 * @public
 */
class StandardErc20 {
  get chainId() {
    return this._chainId;
  }
  constructor(contractWrapper, storage, chainId) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.erc20 = new contractPublisher.Erc20(this.contractWrapper, this.storage, chainId);
    this._chainId = chainId;
  }

  /**
   * @internal
   */
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }

  /**
   * @internal
   */
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get the token Metadata (name, symbol, etc...)
   *
   * @example
   * ```javascript
   * const token = await contract.get();
   * ```
   * @returns The token metadata
   */
  async get() {
    return this.erc20.get();
  }

  /**
   * Get Token Balance for the currently connected wallet
   *
   * @remarks Get a wallets token balance.
   *
   * @example
   * ```javascript
   * const balance = await contract.balance();
   * ```
   *
   * @returns The balance of a specific wallet.
   */
  async balance() {
    return await this.erc20.balance();
  }

  /**
   * Get Token Balance
   *
   * @remarks Get a wallets token balance.
   *
   * @example
   * ```javascript
   * // Address of the wallet to check token balance
   * const walletAddress = "{{wallet_address}}";
   * const balance = await contract.balanceOf(walletAddress);
   * ```
   *
   * @returns The balance of a specific wallet.
   */
  async balanceOf(address) {
    return this.erc20.balanceOf(address);
  }

  /**
   * The total supply for this token
   * @remarks Get how much supply has been minted
   * @example
   * ```javascript
   * const balance = await contract.totalSupply();
   * ```
   */
  async totalSupply() {
    return await this.erc20.totalSupply();
  }

  /**
   * Get Token Allowance
   *
   * @remarks Get the allowance of a 'spender' wallet over the connected wallet's funds - the allowance of a different address for a token is the amount of tokens that the `spender` wallet is allowed to spend on behalf of the connected wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet to check token allowance
   * const spenderAddress = "0x...";
   * const allowance = await contract.allowance(spenderAddress);
   * ```
   *
   * @returns The allowance of one wallet over anothers funds.
   */
  async allowance(spender) {
    return await this.erc20.allowance(spender);
  }

  /**
   * Get Token Allowance
   *
   * @remarks Get the allowance of one wallet over another wallet's funds - the allowance of a different address for a token is the amount of tokens that the wallet is allowed to spend on behalf of the specified wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet who owns the funds
   * const owner = "{{wallet_address}}";
   * // Address of the wallet to check token allowance
   * const spender = "0x...";
   * const allowance = await contract.allowanceOf(owner, spender);
   * ```
   *
   * @returns The allowance of one wallet over anothers funds.
   */
  async allowanceOf(owner, spender) {
    return await this.erc20.allowanceOf(owner, spender);
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Transfer Tokens
   *
   * @remarks Transfer tokens from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to send the tokens to
   * const toAddress = "0x...";
   * // The amount of tokens you want to send
   * const amount = 0.1;
   * await contract.transfer(toAddress, amount);
   * ```
   */
  transfer = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (to, amount) => {
    return this.erc20.transfer.prepare(to, amount);
  });

  /**
   * Transfer Tokens From Address
   *
   * @remarks Transfer tokens from one wallet to another
   *
   * @example
   * ```javascript
   * // Address of the wallet sending the tokens
   * const fromAddress = "{{wallet_address}}";
   * // Address of the wallet you want to send the tokens to
   * const toAddress = "0x...";
   * // The number of tokens you want to send
   * const amount = 1.2
   * // Note that the connected wallet must have approval to transfer the tokens of the fromAddress
   * await contract.transferFrom(fromAddress, toAddress, amount);
   * ```
   */
  transferFrom = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (from, to, amount) => {
    return this.erc20.transferFrom.prepare(from, to, amount);
  });

  /**
   * Allows the specified `spender` wallet to transfer the given `amount` of tokens to another wallet
   *
   * @example
   * ```javascript
   * // Address of the wallet to allow transfers from
   * const spenderAddress = "0x...";
   * // The number of tokens to give as allowance
   * const amount = 100
   * await contract.setAllowance(spenderAddress, amount);
   * ```
   */
  setAllowance = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (spender, amount) => {
    return this.erc20.setAllowance.prepare(spender, amount);
  });

  /**
   * Transfer Tokens To Many Wallets
   *
   * @remarks Mint tokens from the connected wallet to many wallets
   *
   * @example
   * ```javascript
   * // Data of the tokens you want to mint
   * const data = [
   *   {
   *     toAddress: "{{wallet_address}}", // Address to mint tokens to
   *     amount: 100, // How many tokens to mint to specified address
   *   },
   *  {
   *    toAddress: "0x...",
   *    amount: 100,
   *  }
   * ]
   *
   * await contract.transferBatch(data);
   * ```
   */
  transferBatch = /* @__PURE__ */contractPublisher.buildTransactionFunction(async args => {
    return this.erc20.transferBatch.prepare(args);
  });
}

exports.StandardErc20 = StandardErc20;
