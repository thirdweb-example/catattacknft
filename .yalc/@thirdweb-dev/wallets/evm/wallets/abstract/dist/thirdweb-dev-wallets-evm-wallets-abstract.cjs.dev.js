'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var defineProperty = require('../../../../dist/defineProperty-21d22449.cjs.dev.js');
var ethers = require('ethers');
var EventEmitter = require('eventemitter3');
var sdk = require('@thirdweb-dev/sdk');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var EventEmitter__default = /*#__PURE__*/_interopDefault(EventEmitter);

const ERC20WithDecimalsAbi = [{
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "Approval",
  type: "event"
}, {
  anonymous: false,
  inputs: [{
    indexed: true,
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    indexed: true,
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    indexed: false,
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "Transfer",
  type: "event"
}, {
  inputs: [{
    internalType: "address",
    name: "owner",
    type: "address"
  }, {
    internalType: "address",
    name: "spender",
    type: "address"
  }],
  name: "allowance",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "spender",
    type: "address"
  }, {
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "approve",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "who",
    type: "address"
  }],
  name: "balanceOf",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [],
  name: "totalSupply",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "transfer",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address",
    name: "from",
    type: "address"
  }, {
    internalType: "address",
    name: "to",
    type: "address"
  }, {
    internalType: "uint256",
    name: "value",
    type: "uint256"
  }],
  name: "transferFrom",
  outputs: [{
    internalType: "bool",
    name: "",
    type: "bool"
  }],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "decimals",
  outputs: [{
    internalType: "uint8",
    name: "",
    type: "uint8"
  }],
  stateMutability: "view",
  type: "function"
}];

function createErc20(provider, currencyAddress) {
  return new ethers.Contract(currencyAddress, ERC20WithDecimalsAbi, provider);
}

// TODO improve this
function chainIdToThirdwebRpc(chainId, clientId) {
  return `https://${chainId}.rpc.thirdweb.com${clientId ? `/${clientId}` : ""}${typeof globalThis !== "undefined" && "APP_BUNDLE_ID" in globalThis ? `?bundleId=${globalThis.APP_BUNDLE_ID}` : ""}`;
}
const EIP1271_ABI = ["function isValidSignature(bytes32 _message, bytes _signature) public view returns (bytes4)"];
const EIP1271_MAGICVALUE = "0x1626ba7e";
async function checkContractWalletSignature(message, signature, address, chainId) {
  //TODO:  A provider should be passed in instead of creating a new one here.
  const provider = new ethers.providers.JsonRpcProvider(chainIdToThirdwebRpc(chainId));
  const walletContract = new ethers.Contract(address, EIP1271_ABI, provider);
  const _hashMessage = ethers.utils.hashMessage(message);
  try {
    const res = await walletContract.isValidSignature(_hashMessage, signature);
    return res === EIP1271_MAGICVALUE;
  } catch {
    return false;
  }
}
class AbstractWallet extends EventEmitter__default["default"] {
  constructor() {
    super(...arguments);
    defineProperty._defineProperty(this, "type", "evm");
  }
  /**
   * @returns the account address from connected wallet
   */
  async getAddress() {
    const signer = await this.getSigner();
    return signer.getAddress();
  }

  /**
   * @returns the native token balance of the connected wallet
   */
  async getBalance() {
    let currencyAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : sdk.NATIVE_TOKEN_ADDRESS;
    const signer = await this.getSigner();
    const address = await this.getAddress();
    if (!signer.provider) {
      throw new Error("Please connect a provider");
    }
    let balance;
    if (sdk.isNativeToken(currencyAddress)) {
      balance = await signer.provider.getBalance(address);
    } else {
      const erc20 = createErc20(signer, currencyAddress);
      balance = await erc20.balanceOf(address);
    }

    // Note: assumes that the native currency decimals is 18, which isn't always correct
    return await sdk.fetchCurrencyValue(signer.provider, currencyAddress, balance);
  }

  /**
   * @returns the chain id from connected wallet
   */
  async getChainId() {
    const signer = await this.getSigner();
    return signer.getChainId();
  }
  async transfer(to, amount) {
    let currencyAddress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : sdk.NATIVE_TOKEN_ADDRESS;
    const signer = await this.getSigner();
    const from = await this.getAddress();
    if (!signer.provider) {
      throw new Error("Please connect a provider");
    }
    const value = await sdk.normalizePriceValue(signer.provider, amount, currencyAddress);
    if (sdk.isNativeToken(currencyAddress)) {
      const tx = await signer.sendTransaction({
        from,
        to,
        value
      });
      return {
        receipt: await tx.wait()
      };
    } else {
      const erc20 = createErc20(signer, currencyAddress);
      const tx = await erc20.transfer(to, value);
      return {
        receipt: await tx.wait()
      };
    }
  }

  /**
   * @returns the signature of the message
   */
  async signMessage(message) {
    const signer = await this.getSigner();
    return await signer.signMessage(message);
  }

  /**
   * verify the signature of a message
   * @returns `true` if the signature is valid, `false` otherwise
   */
  async verifySignature(message, signature, address, chainId) {
    try {
      const messageHash = ethers.utils.hashMessage(message);
      const messageHashBytes = ethers.utils.arrayify(messageHash);
      const recoveredAddress = ethers.utils.recoverAddress(messageHashBytes, signature);
      if (recoveredAddress === address) {
        return true;
      }
    } catch {
      // no-op
    }

    // Check if the address is a smart contract wallet
    if (chainId !== undefined) {
      try {
        const isValid = await checkContractWalletSignature(message, signature, address, chainId || 1);
        return isValid;
      } catch {
        // no-op
      }
    }
    return false;
  }
}

exports.AbstractWallet = AbstractWallet;
exports.checkContractWalletSignature = checkContractWalletSignature;
