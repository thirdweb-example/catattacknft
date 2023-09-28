import ERC20Abi from '@thirdweb-dev/contracts-js/dist/abis/IERC20.json';
import { ds as ContractWrapper } from './contract-publisher-7ea04dd3.esm.js';

async function hasERC20Allowance(contractToApprove, currencyAddress, value) {
  const provider = contractToApprove.getProvider();
  const erc20 = new ContractWrapper(provider, currencyAddress, ERC20Abi, {}, contractToApprove.storage);
  const owner = await contractToApprove.getSignerAddress();
  const spender = contractToApprove.address;
  const allowance = await erc20.read("allowance", [owner, spender]);
  return allowance.gte(value);
}

export { hasERC20Allowance as h };
