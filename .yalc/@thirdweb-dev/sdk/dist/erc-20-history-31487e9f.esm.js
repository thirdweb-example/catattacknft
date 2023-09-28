import { constants, BigNumber } from 'ethers';
import { bc as fetchCurrencyValue } from './contract-publisher-7ea04dd3.esm.js';

/**
 * Manages history for Token contracts
 * @public
 */
class TokenERC20History {
  constructor(contractWrapper, events) {
    this.contractWrapper = contractWrapper;
    this.events = events;
  }

  /**
   * Get all holder balances
   *
   * @remarks Lets you get all token holders and their corresponding balances
   * @returns - A JSON object of all token holders and their corresponding balances
   * @example
   * ```javascript
   * const allHolderBalances = await contract.history.getAllHolderBalances();
   * ```
   */
  async getAllHolderBalances() {
    const a = await this.events.getEvents("Transfer");
    const txns = a.map(b => b.data);
    const balances = {};
    txns.forEach(item => {
      const from = item?.from;
      const to = item?.to;
      const amount = item?.value;
      if (!(from === constants.AddressZero)) {
        if (!(from in balances)) {
          balances[from] = BigNumber.from(0);
        }
        balances[from] = balances[from].sub(amount);
      }
      if (!(to === constants.AddressZero)) {
        if (!(to in balances)) {
          balances[to] = BigNumber.from(0);
        }
        balances[to] = balances[to].add(amount);
      }
    });
    return Promise.all(Object.keys(balances).map(async addr => ({
      holder: addr,
      balance: await fetchCurrencyValue(this.contractWrapper.getProvider(), this.contractWrapper.address, balances[addr])
    })));
  }
}

export { TokenERC20History as T };
