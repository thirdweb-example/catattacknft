import { aL as Erc1155, dt as buildTransactionFunction } from './contract-publisher-da6d1b7a.browser.esm.js';

/**
 * Standard ERC1155 NFT functions
 * @remarks Basic functionality for a ERC1155 contract that handles IPFS storage for you.
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * await contract.edition.transfer(walletAddress, tokenId, quantity);
 * ```
 * @public
 */
class StandardErc1155 {
  get chainId() {
    return this._chainId;
  }
  constructor(contractWrapper, storage, chainId) {
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.erc1155 = new Erc1155(this.contractWrapper, this.storage, chainId);
    this._chainId = chainId;
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

  ////// Standard ERC1155 functions //////

  /**
   * Get a single NFT
   *
   * @example
   * ```javascript
   * const nft = await contract.get("0");
   * ```
   * @param tokenId - the tokenId of the NFT to retrieve
   * @returns The NFT metadata
   */
  async get(tokenId) {
    return this.erc1155.get(tokenId);
  }

  /**
   * Returns the total supply of a specific token
   * @param tokenId - The token ID to get the total supply of
   * @returns the total supply
   */
  async totalSupply(tokenId) {
    return this.erc1155.totalSupply(tokenId);
  }

  /**
   * Get NFT Balance
   *
   * @remarks Get a wallets NFT balance (number of NFTs in this contract owned by the wallet).
   *
   * @example
   * ```javascript
   * // Address of the wallet to check NFT balance
   * const walletAddress = "{{wallet_address}}";
   * const tokenId = 0; // Id of the NFT to check
   * const balance = await contract.balanceOf(walletAddress, tokenId);
   * ```
   */
  async balanceOf(address, tokenId) {
    return this.erc1155.balanceOf(address, tokenId);
  }

  /**
   * Get NFT Balance for the currently connected wallet
   */
  async balance(tokenId) {
    return this.erc1155.balance(tokenId);
  }

  /**
   * Get whether this wallet has approved transfers from the given operator
   * @param address - the wallet address
   * @param operator - the operator address
   */
  async isApproved(address, operator) {
    return this.erc1155.isApproved(address, operator);
  }

  /**
   * Transfer an NFT
   *
   * @remarks Transfer an NFT from the connected wallet to another wallet.
   *
   * @example
   * ```javascript
   * // Address of the wallet you want to send the NFT to
   * const toAddress = "{{wallet_address}}";
   * const tokenId = "0"; // The token ID of the NFT you want to send
   * const amount = 3; // How many copies of the NFTs to transfer
   * await contract.transfer(toAddress, tokenId, amount);
   * ```
   */
  transfer = /* @__PURE__ */buildTransactionFunction((() => {
    var _this = this;
    return async function (to, tokenId, amount) {
      let data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0];
      return _this.erc1155.transfer.prepare(to, tokenId, amount, data);
    };
  })());

  /**
   * Approve or remove operator as an operator for the caller. Operators can call transferFrom or safeTransferFrom for any token owned by the caller.
   * @param operator - the operator's address
   * @param approved - whether to approve or remove
   *
   * @internal
   */
  setApprovalForAll = /* @__PURE__ */buildTransactionFunction(async (operator, approved) => {
    return this.erc1155.setApprovalForAll.prepare(operator, approved);
  });

  /**
   * Airdrop multiple NFTs
   *
   * @remarks Airdrop one or multiple NFTs to the provided wallet addresses.
   * @twfeature ERC1155
   * @example
   * ```javascript
   * // The token ID of the NFT you want to airdrop
   * const tokenId = "0";
   * // Array of objects of addresses and quantities to airdrop NFTs to
   * const addresses = [
   *  {
   *    address: "0x...",
   *    quantity: 2,
   *  },
   *  {
   *   address: "0x...",
   *    quantity: 3,
   *  },
   * ];
   * await contract.airdrop(tokenId, addresses);
   *
   * // You can also pass an array of addresses, it will airdrop 1 NFT per address
   * const tokenId = "0";
   * const addresses = [
   *  "0x...", "0x...", "0x...",
   * ]
   * await contract.airdrop(tokenId, addresses);
   * ```
   */
  airdrop = /* @__PURE__ */buildTransactionFunction((() => {
    var _this2 = this;
    return async function (tokenId, addresses, fromAddress) {
      let data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [0];
      return _this2.erc1155.airdrop.prepare(tokenId, addresses, fromAddress, data);
    };
  })());
}

export { StandardErc1155 as S };
