'use strict';

var ethers = require('ethers');

/**
 * Manages history for Edition Drop contracts
 * @public
 */
class DropErc1155History {
  constructor(events) {
    this.events = events;
  }

  /**
   * Get all claimer addresses
   *
   * @remarks Get a list of all the addresses that have claimed a token
   * @param tokenId - the tokenId of the NFT to get the addresses of*
   * @returns - A unique list of addresses that claimed the token
   * @example
   * ```javascript
   * const tokenId = "0";
   * const allClaimerAddresses = await contract.history.getAllClaimerAddresses(tokenId);
   * ```
   */
  async getAllClaimerAddresses(tokenId) {
    const a = (await this.events.getEvents("TokensClaimed")).filter(e => e.data && ethers.BigNumber.isBigNumber(e.data.tokenId) ? e.data.tokenId.eq(tokenId) : false);
    return Array.from(new Set(a.filter(b => typeof b.data?.claimer === "string").map(b => b.data.claimer)));
  }
}

exports.DropErc1155History = DropErc1155History;
