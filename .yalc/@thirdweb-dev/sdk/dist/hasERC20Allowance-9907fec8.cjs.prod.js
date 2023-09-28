'use strict';

var ERC20Abi = require('@thirdweb-dev/contracts-js/dist/abis/IERC20.json');
var contractPublisher = require('./contract-publisher-de532850.cjs.prod.js');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var ERC20Abi__default = /*#__PURE__*/_interopDefault(ERC20Abi);

async function hasERC20Allowance(contractToApprove, currencyAddress, value) {
  const provider = contractToApprove.getProvider();
  const erc20 = new contractPublisher.ContractWrapper(provider, currencyAddress, ERC20Abi__default["default"], {}, contractToApprove.storage);
  const owner = await contractToApprove.getSignerAddress();
  const spender = contractToApprove.address;
  const allowance = await erc20.read("allowance", [owner, spender]);
  return allowance.gte(value);
}

exports.hasERC20Allowance = hasERC20Allowance;
