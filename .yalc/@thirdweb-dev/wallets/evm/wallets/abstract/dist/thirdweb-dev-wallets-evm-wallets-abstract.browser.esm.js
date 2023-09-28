import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { Contract, providers, utils } from 'ethers';
import EventEmitter from 'eventemitter3';
import { isNativeToken, fetchCurrencyValue, normalizePriceValue, NATIVE_TOKEN_ADDRESS } from '@thirdweb-dev/sdk';

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
  return new Contract(currencyAddress, ERC20WithDecimalsAbi, provider);
}

// TODO improve this
function chainIdToThirdwebRpc(chainId, clientId) {
  return `https://${chainId}.rpc.thirdweb.com${clientId ? `/${clientId}` : ""}${typeof globalThis !== "undefined" && "APP_BUNDLE_ID" in globalThis ? `?bundleId=${globalThis.APP_BUNDLE_ID}` : ""}`;
}
const EIP1271_ABI = ["function isValidSignature(bytes32 _message, bytes _signature) public view returns (bytes4)"];
const EIP1271_MAGICVALUE = "0x1626ba7e";
async function checkContractWalletSignature(message, signature, address, chainId) {
  //TODO:  A provider should be passed in instead of creating a new one here.
  const provider = new providers.JsonRpcProvider(chainIdToThirdwebRpc(chainId));
  const walletContract = new Contract(address, EIP1271_ABI, provider);
  const _hashMessage = utils.hashMessage(message);
  try {
    const res = await walletContract.isValidSignature(_hashMessage, signature);
    return res === EIP1271_MAGICVALUE;
  } catch {
    return false;
  }
}
class AbstractWallet extends EventEmitter {
  constructor() {
    super(...arguments);
    _defineProperty(this, "type", "evm");
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
    let currencyAddress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NATIVE_TOKEN_ADDRESS;
    const signer = await this.getSigner();
    const address = await this.getAddress();
    if (!signer.provider) {
      throw new Error("Please connect a provider");
    }
    let balance;
    if (isNativeToken(currencyAddress)) {
      balance = await signer.provider.getBalance(address);
    } else {
      const erc20 = createErc20(signer, currencyAddress);
      balance = await erc20.balanceOf(address);
    }

    // Note: assumes that the native currency decimals is 18, which isn't always correct
    return await fetchCurrencyValue(signer.provider, currencyAddress, balance);
  }

  /**
   * @returns the chain id from connected wallet
   */
  async getChainId() {
    const signer = await this.getSigner();
    return signer.getChainId();
  }
  async transfer(to, amount) {
    let currencyAddress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NATIVE_TOKEN_ADDRESS;
    const signer = await this.getSigner();
    const from = await this.getAddress();
    if (!signer.provider) {
      throw new Error("Please connect a provider");
    }
    const value = await normalizePriceValue(signer.provider, amount, currencyAddress);
    if (isNativeToken(currencyAddress)) {
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
      const messageHash = utils.hashMessage(message);
      const messageHashBytes = utils.arrayify(messageHash);
      const recoveredAddress = utils.recoverAddress(messageHashBytes, signature);
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

export { AbstractWallet, checkContractWalletSignature };
