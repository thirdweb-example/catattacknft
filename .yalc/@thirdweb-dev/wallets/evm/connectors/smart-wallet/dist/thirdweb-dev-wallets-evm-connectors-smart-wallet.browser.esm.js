import { Celo, CeloAlfajoresTestnet, CeloBaklavaTestnet, getChainByChainId } from '@thirdweb-dev/chains';
import { C as Connector } from '../../../../dist/connector-05689d68.browser.esm.js';
import { PaymasterAPI, calcPreVerificationGas } from '@account-abstraction/sdk';
import { ethers, utils, Signer, providers, BigNumber } from 'ethers';
import fetch from 'cross-fetch';
import { i as isTwUrl } from '../../../../dist/url-bc88b2b6.browser.esm.js';
import { EntryPoint__factory } from '@account-abstraction/contracts';
import { _ as _defineProperty } from '../../../../dist/defineProperty-c8ecdc07.browser.esm.js';
import { deepHexlify, packUserOp } from '@account-abstraction/utils';
import { getDynamicFeeData, ThirdwebSDK, LOCAL_NODE_PKEY, getChainProvider } from '@thirdweb-dev/sdk';
import 'eventemitter3';

function toJSON(op) {
  return ethers.utils.resolveProperties(op).then(userOp => Object.keys(userOp).map(key => {
    let val = userOp[key];
    if (typeof val !== "string" || !val.startsWith("0x")) {
      val = ethers.utils.hexValue(val);
    }
    return [key, val];
  }).reduce((set, _ref) => {
    let [k, v] = _ref;
    return {
      ...set,
      [k]: v
    };
  }, {}));
}

// v0.6 userOpHash calculation
async function getUserOpHashV06(userOp, entryPoint, chainId) {
  const op = await utils.resolveProperties(userOp);
  const hashedUserOp = {
    sender: op.sender,
    nonce: op.nonce,
    initCodeHash: utils.keccak256(op.initCode),
    callDataHash: utils.keccak256(op.callData),
    callGasLimit: op.callGasLimit,
    verificationGasLimit: op.verificationGasLimit,
    preVerificationGas: op.preVerificationGas,
    maxFeePerGas: op.maxFeePerGas,
    maxPriorityFeePerGas: op.maxPriorityFeePerGas,
    paymasterAndDataHash: utils.keccak256(op.paymasterAndData)
  };
  const userOpType = {
    components: [{
      type: "address",
      name: "sender"
    }, {
      type: "uint256",
      name: "nonce"
    }, {
      type: "bytes32",
      name: "initCodeHash"
    }, {
      type: "bytes32",
      name: "callDataHash"
    }, {
      type: "uint256",
      name: "callGasLimit"
    }, {
      type: "uint256",
      name: "verificationGasLimit"
    }, {
      type: "uint256",
      name: "preVerificationGas"
    }, {
      type: "uint256",
      name: "maxFeePerGas"
    }, {
      type: "uint256",
      name: "maxPriorityFeePerGas"
    }, {
      type: "bytes32",
      name: "paymasterAndDataHash"
    }],
    name: "hashedUserOp",
    type: "tuple"
  };
  const encoded = utils.defaultAbiCoder.encode([userOpType], [{
    ...hashedUserOp
  }]);
  // remove leading word (total length) and trailing word (zero-length signature)

  const userOpHash = utils.keccak256(encoded);
  const enc = utils.defaultAbiCoder.encode(["bytes32", "address", "uint256"], [userOpHash, entryPoint, chainId]);
  return utils.keccak256(enc);
}

const SIG_SIZE = 65;
const DUMMY_PAYMASTER_AND_DATA = "0x0101010101010101010101010101010101010101000000000000000000000000000000000000000000000000000001010101010100000000000000000000000000000000000000000000000000000000000000000101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101";
class VerifyingPaymasterAPI extends PaymasterAPI {
  constructor(paymasterUrl, entryPoint, clientId, secretKey) {
    super();
    this.paymasterUrl = paymasterUrl;
    this.entryPoint = entryPoint;
    this.clientId = clientId;
    this.secretKey = secretKey;
  }
  async getPaymasterAndData(userOp) {
    const headers = {
      "Content-Type": "application/json"
    };
    if (isTwUrl(this.paymasterUrl)) {
      if (this.secretKey && this.clientId) {
        throw new Error("Cannot use both secret key and client ID. Please use secretKey for server-side applications and clientId for client-side applications.");
      }
      if (this.secretKey) {
        headers["x-secret-key"] = this.secretKey;
      } else if (this.clientId) {
        headers["x-client-id"] = this.clientId;
        if (typeof globalThis !== "undefined" && "APP_BUNDLE_ID" in globalThis) {
          headers["x-bundle-id"] = globalThis.APP_BUNDLE_ID;
        }
      }

      // Dashboard token.
      if (typeof globalThis !== "undefined" && "TW_AUTH_TOKEN" in globalThis && typeof globalThis.TW_AUTH_TOKEN === "string") {
        headers["authorization"] = `Bearer ${globalThis.TW_AUTH_TOKEN}`;
      }

      // CLI token.
      if (typeof globalThis !== "undefined" && "TW_CLI_AUTH_TOKEN" in globalThis && typeof globalThis.TW_CLI_AUTH_TOKEN === "string") {
        headers["authorization"] = `Bearer ${globalThis.TW_CLI_AUTH_TOKEN}`;
        headers["x-authorize-wallet"] = "true";
      }
    }

    // Ask the paymaster to sign the transaction and return a valid paymasterAndData value.
    const response = await fetch(this.paymasterUrl, {
      method: "POST",
      headers,
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "pm_sponsorUserOperation",
        params: [await toJSON(userOp), {
          entryPoint: this.entryPoint
        }]
      })
    });
    const res = await response.json();
    if (!response.ok) {
      const error = res.error || response.statusText;
      const code = res.code || "UNKNOWN";
      throw new Error(`Paymaster error: ${error}
Status: ${response.status}
Code: ${code}`);
    }
    if (res.result) {
      const result = res.result.paymasterAndData || res.result;
      return result.toString();
    } else {
      throw new Error(`Paymaster returned no result from ${this.paymasterUrl}`);
    }
  }
}
const getVerifyingPaymaster = (paymasterUrl, entryPoint, clientId, secretKey) => new VerifyingPaymasterAPI(paymasterUrl, entryPoint, clientId, secretKey);

/**
 * This class encapsulates Ethers.js listener function and necessary UserOperation details to
 * discover a TransactionReceipt for the operation.
 *
 * TODO refactor this to a simple event listener on the entry point
 */
class UserOperationEventListener {
  constructor(resolve, reject, entryPoint, sender, userOpHash, nonce, timeout) {
    this.resolve = resolve;
    this.reject = reject;
    this.entryPoint = entryPoint;
    this.sender = sender;
    this.userOpHash = userOpHash;
    this.nonce = nonce;
    this.timeout = timeout;
    _defineProperty(this, "resolved", false);
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.boundLisener = this.listenerCallback.bind(this);
  }
  start() {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    const filter = this.entryPoint.filters.UserOperationEvent(this.userOpHash);
    // listener takes time... first query directly:
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    setTimeout(async () => {
      const res = await this.entryPoint.queryFilter(filter, "latest");
      if (res.length > 0) {
        void this.listenerCallback(res[0]);
      } else {
        this.entryPoint.once(filter, this.boundLisener);
      }
    }, 100);
  }
  stop() {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    this.entryPoint.off("UserOperationEvent", this.boundLisener);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async listenerCallback() {
    for (var _len = arguments.length, param = new Array(_len), _key = 0; _key < _len; _key++) {
      param[_key] = arguments[_key];
    }
    // TODO clean this up..
    // eslint-disable-next-line prefer-rest-params
    const event = arguments[arguments.length - 1];
    if (!event.args) {
      console.error("got event without args", event);
      return;
    }
    // TODO: can this happen? we register to event by userOpHash..
    if (event.args.userOpHash !== this.userOpHash) {
      console.log(`== event with wrong userOpHash: sender/nonce: event.${event.args.sender}@${event.args.nonce.toString()}!= userOp.${this.sender}@${parseInt(this.nonce?.toString())}`);
      return;
    }
    const transactionReceipt = await event.getTransactionReceipt();

    // before returning the receipt, update the status from the event.
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (!event.args.success) {
      await this.extractFailureReason(transactionReceipt);
    }
    this.stop();
    this.resolve(transactionReceipt);
    this.resolved = true;
  }
  async extractFailureReason(receipt) {
    receipt.status = 0;
    const revertReasonEvents = await this.entryPoint.queryFilter(this.entryPoint.filters.UserOperationRevertReason(this.userOpHash, this.sender), receipt.blockHash);
    if (revertReasonEvents[0]) {
      let message = revertReasonEvents[0].args.revertReason;
      if (message.startsWith("0x08c379a0")) {
        // Error(string)
        message = utils.defaultAbiCoder.decode(["string"], "0x" + message.substring(10)).toString();
      }
      this.reject(new Error(`UserOp failed with reason: ${message}`));
    }
  }
}

class ERC4337EthersSigner extends Signer {
  // TODO: we have 'erc4337provider', remove shared dependencies or avoid two-way reference
  constructor(config, originalSigner, erc4337provider, httpRpcClient, smartAccountAPI) {
    super();
    utils.defineReadOnly(this, "provider", erc4337provider);
    this.config = config;
    this.originalSigner = originalSigner;
    this.erc4337provider = erc4337provider;
    this.httpRpcClient = httpRpcClient;
    this.smartAccountAPI = smartAccountAPI;
  }
  // This one is called by Contract. It signs the request and passes in to Provider to be sent.
  async sendTransaction(transaction) {
    let batched = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    const tx = await ethers.utils.resolveProperties(transaction);
    await this.verifyAllNecessaryFields(tx);
    const userOperation = await this.smartAccountAPI.createSignedUserOp({
      target: tx.to || "",
      data: tx.data?.toString() || "0x",
      value: tx.value,
      gasLimit: tx.gasLimit
    }, batched);
    const transactionResponse = await this.erc4337provider.constructUserOpTransactionResponse(userOperation);
    try {
      await this.httpRpcClient.sendUserOpToBundler(userOperation);
    } catch (error) {
      throw this.unwrapError(error);
    }
    // TODO: handle errors - transaction that is "rejected" by bundler is _not likely_ to ever resolve its "wait()"
    return transactionResponse;
  }
  unwrapError(errorIn) {
    try {
      let errorMsg = "Unknown Error";
      if (errorIn.error) {
        errorMsg = `The bundler has failed to include UserOperation in a batch: ${errorIn.error}`;
      } else if (errorIn.body && typeof errorIn.body === "string") {
        const errorBody = JSON.parse(errorIn.body);
        const errorStatus = errorIn.status || "UNKNOWN";
        const errorCode = errorBody?.code || "UNKNOWN";
        let failedOpMessage = errorBody?.error?.message || errorBody?.error?.data || errorBody?.error || errorIn.reason;
        if (failedOpMessage?.includes("FailedOp")) {
          let paymasterInfo = "";
          // TODO: better error extraction methods will be needed
          const matched = failedOpMessage.match(/FailedOp\((.*)\)/);
          if (matched) {
            const split = matched[1].split(",");
            paymasterInfo = `(paymaster address: ${split[1]})`;
            failedOpMessage = split[2];
          }
          errorMsg = `The bundler has failed to include UserOperation in a batch: ${failedOpMessage} ${paymasterInfo}`;
        } else {
          errorMsg = `RPC error: ${failedOpMessage}
Status: ${errorStatus}
Code: ${errorCode}`;
        }
      }
      const error = new Error(errorMsg);
      error.stack = errorIn.stack;
      return error;
    } catch (error) {}
    return errorIn;
  }
  async verifyAllNecessaryFields(transactionRequest) {
    if (!transactionRequest.to) {
      throw new Error("Missing call target");
    }
    if (!transactionRequest.data && !transactionRequest.value) {
      // TBD: banning no-op UserOps seems to make sense on provider level
      throw new Error("Missing call data or value");
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  connect(provider) {
    throw new Error("changing providers is not supported");
  }
  async getAddress() {
    if (!this.address) {
      this.address = await this.erc4337provider.getSenderAccountAddress();
    }
    return this.address;
  }
  async signMessage(message) {
    const isNotDeployed = await this.smartAccountAPI.checkAccountPhantom();
    if (isNotDeployed) {
      console.log("Account contract not deployed yet. Deploying account before signing message");
      const tx = await this.sendTransaction({
        to: await this.getAddress(),
        data: "0x"
      });
      await tx.wait();
    }
    return await this.originalSigner.signMessage(message);
  }
  async signTransaction(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transaction) {
    throw new Error("not implemented");
  }
}

class ERC4337EthersProvider extends providers.BaseProvider {
  constructor(chainId, config, originalSigner, originalProvider, httpRpcClient, entryPoint, smartAccountAPI) {
    super({
      name: "ERC-4337 Custom Network",
      chainId
    });
    this.chainId = chainId;
    this.config = config;
    this.originalSigner = originalSigner;
    this.originalProvider = originalProvider;
    this.httpRpcClient = httpRpcClient;
    this.entryPoint = entryPoint;
    this.smartAccountAPI = smartAccountAPI;
    this.signer = new ERC4337EthersSigner(config, originalSigner, this, httpRpcClient, smartAccountAPI);
  }

  /**
   * finish intializing the provider.
   * MUST be called after construction, before using the provider.
   */
  async init() {
    // await this.httpRpcClient.validateChainId()
    this.initializedBlockNumber = await this.originalProvider.getBlockNumber();
    await this.smartAccountAPI.init();
    // await this.signer.init()
    return this;
  }
  getSigner() {
    return this.signer;
  }
  async perform(method, params) {
    if (method === "sendTransaction" || method === "getTransactionReceipt") {
      // TODO: do we need 'perform' method to be available at all?
      // there is nobody out there to use it for ERC-4337 methods yet, we have nothing to override in fact.
      throw new Error("Should not get here. Investigate.");
    }
    if (method === "estimateGas") {
      // hijack this to estimate gas from the entrypoint instead
      const {
        callGasLimit
      } = await this.smartAccountAPI.encodeUserOpCallDataAndGasLimit({
        target: params.transaction.to,
        data: params.transaction.data,
        value: params.transaction.value,
        gasLimit: params.transaction.gasLimit
      }, false // TODO check this
      );

      return callGasLimit;
    }
    return await this.originalProvider.perform(method, params);
  }
  async getTransaction(transactionHash) {
    // TODO
    return await super.getTransaction(transactionHash);
  }
  async getTransactionReceipt(transactionHash) {
    const userOpHash = await transactionHash;
    const sender = await this.getSenderAccountAddress();
    return await new Promise((resolve, reject) => {
      new UserOperationEventListener(resolve, reject, this.entryPoint, sender, userOpHash).start();
    });
  }
  async getSenderAccountAddress() {
    return await this.smartAccountAPI.getAccountAddress();
  }
  async waitForTransaction(transactionHash, confirmations, timeout) {
    const sender = await this.getSenderAccountAddress();
    return await new Promise((resolve, reject) => {
      const listener = new UserOperationEventListener(resolve, reject, this.entryPoint, sender, transactionHash, undefined, timeout);
      listener.start();
    });
  }

  // fabricate a response in a format usable by ethers users...
  async constructUserOpTransactionResponse(userOp1) {
    const userOp = await utils.resolveProperties(userOp1);
    const userOpHash = await this.smartAccountAPI.getUserOpHash(userOp);
    const waitForUserOp = async () => await new Promise((resolve, reject) => {
      new UserOperationEventListener(resolve, reject, this.entryPoint, userOp.sender, userOpHash, userOp.nonce).start();
    });
    return {
      hash: userOpHash,
      confirmations: 0,
      from: userOp.sender,
      nonce: BigNumber.from(userOp.nonce).toNumber(),
      gasLimit: BigNumber.from(userOp.callGasLimit),
      // ??
      value: BigNumber.from(0),
      data: utils.hexValue(userOp.callData),
      // should extract the actual called method from this "execFromEntryPoint()" call
      chainId: this.chainId,
      wait: async confirmations => {
        const transactionReceipt = await waitForUserOp();
        if (userOp.initCode.length !== 0) {
          // checking if the wallet has been deployed by the transaction; it must be if we are here
          await this.smartAccountAPI.checkAccountPhantom();
        }
        return transactionReceipt;
      }
    };
  }
  async detectNetwork() {
    return this.originalProvider.detectNetwork();
  }
}

var pkg = {
	name: "@thirdweb-dev/wallets",
	version: "1.3.0",
	main: "dist/thirdweb-dev-wallets.cjs.js",
	module: "dist/thirdweb-dev-wallets.esm.js",
	types: "dist/thirdweb-dev-wallets.cjs.d.ts",
	browser: {
		"./dist/thirdweb-dev-wallets.esm.js": "./dist/thirdweb-dev-wallets.browser.esm.js"
	},
	exports: {
		".": {
			module: {
				browser: "./dist/thirdweb-dev-wallets.browser.esm.js",
				"default": "./dist/thirdweb-dev-wallets.esm.js"
			},
			"default": "./dist/thirdweb-dev-wallets.cjs.js"
		},
		"./evm": {
			module: {
				browser: "./evm/dist/thirdweb-dev-wallets-evm.browser.esm.js",
				"default": "./evm/dist/thirdweb-dev-wallets-evm.esm.js"
			},
			"default": "./evm/dist/thirdweb-dev-wallets-evm.cjs.js"
		},
		"./solana": {
			module: {
				browser: "./solana/dist/thirdweb-dev-wallets-solana.browser.esm.js",
				"default": "./solana/dist/thirdweb-dev-wallets-solana.esm.js"
			},
			"default": "./solana/dist/thirdweb-dev-wallets-solana.cjs.js"
		},
		"./evm/wallets/base": {
			module: {
				browser: "./evm/wallets/base/dist/thirdweb-dev-wallets-evm-wallets-base.browser.esm.js",
				"default": "./evm/wallets/base/dist/thirdweb-dev-wallets-evm-wallets-base.esm.js"
			},
			"default": "./evm/wallets/base/dist/thirdweb-dev-wallets-evm-wallets-base.cjs.js"
		},
		"./evm/wallets/safe": {
			module: {
				browser: "./evm/wallets/safe/dist/thirdweb-dev-wallets-evm-wallets-safe.browser.esm.js",
				"default": "./evm/wallets/safe/dist/thirdweb-dev-wallets-evm-wallets-safe.esm.js"
			},
			"default": "./evm/wallets/safe/dist/thirdweb-dev-wallets-evm-wallets-safe.cjs.js"
		},
		"./evm/wallets/frame": {
			module: {
				browser: "./evm/wallets/frame/dist/thirdweb-dev-wallets-evm-wallets-frame.browser.esm.js",
				"default": "./evm/wallets/frame/dist/thirdweb-dev-wallets-evm-wallets-frame.esm.js"
			},
			"default": "./evm/wallets/frame/dist/thirdweb-dev-wallets-evm-wallets-frame.cjs.js"
		},
		"./evm/wallets/magic": {
			module: {
				browser: "./evm/wallets/magic/dist/thirdweb-dev-wallets-evm-wallets-magic.browser.esm.js",
				"default": "./evm/wallets/magic/dist/thirdweb-dev-wallets-evm-wallets-magic.esm.js"
			},
			"default": "./evm/wallets/magic/dist/thirdweb-dev-wallets-evm-wallets-magic.cjs.js"
		},
		"./evm/wallets/trust": {
			module: {
				browser: "./evm/wallets/trust/dist/thirdweb-dev-wallets-evm-wallets-trust.browser.esm.js",
				"default": "./evm/wallets/trust/dist/thirdweb-dev-wallets-evm-wallets-trust.esm.js"
			},
			"default": "./evm/wallets/trust/dist/thirdweb-dev-wallets-evm-wallets-trust.cjs.js"
		},
		"./evm/wallets/blocto": {
			module: {
				browser: "./evm/wallets/blocto/dist/thirdweb-dev-wallets-evm-wallets-blocto.browser.esm.js",
				"default": "./evm/wallets/blocto/dist/thirdweb-dev-wallets-evm-wallets-blocto.esm.js"
			},
			"default": "./evm/wallets/blocto/dist/thirdweb-dev-wallets-evm-wallets-blocto.cjs.js"
		},
		"./evm/wallets/ethers": {
			module: {
				browser: "./evm/wallets/ethers/dist/thirdweb-dev-wallets-evm-wallets-ethers.browser.esm.js",
				"default": "./evm/wallets/ethers/dist/thirdweb-dev-wallets-evm-wallets-ethers.esm.js"
			},
			"default": "./evm/wallets/ethers/dist/thirdweb-dev-wallets-evm-wallets-ethers.cjs.js"
		},
		"./evm/wallets/zerion": {
			module: {
				browser: "./evm/wallets/zerion/dist/thirdweb-dev-wallets-evm-wallets-zerion.browser.esm.js",
				"default": "./evm/wallets/zerion/dist/thirdweb-dev-wallets-evm-wallets-zerion.esm.js"
			},
			"default": "./evm/wallets/zerion/dist/thirdweb-dev-wallets-evm-wallets-zerion.cjs.js"
		},
		"./evm/wallets/aws-kms": {
			module: {
				browser: "./evm/wallets/aws-kms/dist/thirdweb-dev-wallets-evm-wallets-aws-kms.browser.esm.js",
				"default": "./evm/wallets/aws-kms/dist/thirdweb-dev-wallets-evm-wallets-aws-kms.esm.js"
			},
			"default": "./evm/wallets/aws-kms/dist/thirdweb-dev-wallets-evm-wallets-aws-kms.cjs.js"
		},
		"./evm/wallets/gcp-kms": {
			module: {
				browser: "./evm/wallets/gcp-kms/dist/thirdweb-dev-wallets-evm-wallets-gcp-kms.browser.esm.js",
				"default": "./evm/wallets/gcp-kms/dist/thirdweb-dev-wallets-evm-wallets-gcp-kms.esm.js"
			},
			"default": "./evm/wallets/gcp-kms/dist/thirdweb-dev-wallets-evm-wallets-gcp-kms.cjs.js"
		},
		"./evm/wallets/phantom": {
			module: {
				browser: "./evm/wallets/phantom/dist/thirdweb-dev-wallets-evm-wallets-phantom.browser.esm.js",
				"default": "./evm/wallets/phantom/dist/thirdweb-dev-wallets-evm-wallets-phantom.esm.js"
			},
			"default": "./evm/wallets/phantom/dist/thirdweb-dev-wallets-evm-wallets-phantom.cjs.js"
		},
		"./solana/wallets/base": {
			module: {
				browser: "./solana/wallets/base/dist/thirdweb-dev-wallets-solana-wallets-base.browser.esm.js",
				"default": "./solana/wallets/base/dist/thirdweb-dev-wallets-solana-wallets-base.esm.js"
			},
			"default": "./solana/wallets/base/dist/thirdweb-dev-wallets-solana-wallets-base.cjs.js"
		},
		"./evm/wallets/abstract": {
			module: {
				browser: "./evm/wallets/abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.browser.esm.js",
				"default": "./evm/wallets/abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.esm.js"
			},
			"default": "./evm/wallets/abstract/dist/thirdweb-dev-wallets-evm-wallets-abstract.cjs.js"
		},
		"./evm/wallets/injected": {
			module: {
				browser: "./evm/wallets/injected/dist/thirdweb-dev-wallets-evm-wallets-injected.browser.esm.js",
				"default": "./evm/wallets/injected/dist/thirdweb-dev-wallets-evm-wallets-injected.esm.js"
			},
			"default": "./evm/wallets/injected/dist/thirdweb-dev-wallets-evm-wallets-injected.cjs.js"
		},
		"./evm/wallets/metamask": {
			module: {
				browser: "./evm/wallets/metamask/dist/thirdweb-dev-wallets-evm-wallets-metamask.browser.esm.js",
				"default": "./evm/wallets/metamask/dist/thirdweb-dev-wallets-evm-wallets-metamask.esm.js"
			},
			"default": "./evm/wallets/metamask/dist/thirdweb-dev-wallets-evm-wallets-metamask.cjs.js"
		},
		"./solana/wallets/signer": {
			module: {
				browser: "./solana/wallets/signer/dist/thirdweb-dev-wallets-solana-wallets-signer.browser.esm.js",
				"default": "./solana/wallets/signer/dist/thirdweb-dev-wallets-solana-wallets-signer.esm.js"
			},
			"default": "./solana/wallets/signer/dist/thirdweb-dev-wallets-solana-wallets-signer.cjs.js"
		},
		"./solana/wallets/keypair": {
			module: {
				browser: "./solana/wallets/keypair/dist/thirdweb-dev-wallets-solana-wallets-keypair.browser.esm.js",
				"default": "./solana/wallets/keypair/dist/thirdweb-dev-wallets-solana-wallets-keypair.esm.js"
			},
			"default": "./solana/wallets/keypair/dist/thirdweb-dev-wallets-solana-wallets-keypair.cjs.js"
		},
		"./evm/wallets/private-key": {
			module: {
				browser: "./evm/wallets/private-key/dist/thirdweb-dev-wallets-evm-wallets-private-key.browser.esm.js",
				"default": "./evm/wallets/private-key/dist/thirdweb-dev-wallets-evm-wallets-private-key.esm.js"
			},
			"default": "./evm/wallets/private-key/dist/thirdweb-dev-wallets-evm-wallets-private-key.cjs.js"
		},
		"./evm/wallets/local-wallet": {
			module: {
				browser: "./evm/wallets/local-wallet/dist/thirdweb-dev-wallets-evm-wallets-local-wallet.browser.esm.js",
				"default": "./evm/wallets/local-wallet/dist/thirdweb-dev-wallets-evm-wallets-local-wallet.esm.js"
			},
			"default": "./evm/wallets/local-wallet/dist/thirdweb-dev-wallets-evm-wallets-local-wallet.cjs.js"
		},
		"./evm/wallets/paper-wallet": {
			module: {
				browser: "./evm/wallets/paper-wallet/dist/thirdweb-dev-wallets-evm-wallets-paper-wallet.browser.esm.js",
				"default": "./evm/wallets/paper-wallet/dist/thirdweb-dev-wallets-evm-wallets-paper-wallet.esm.js"
			},
			"default": "./evm/wallets/paper-wallet/dist/thirdweb-dev-wallets-evm-wallets-paper-wallet.cjs.js"
		},
		"./evm/wallets/smart-wallet": {
			module: {
				browser: "./evm/wallets/smart-wallet/dist/thirdweb-dev-wallets-evm-wallets-smart-wallet.browser.esm.js",
				"default": "./evm/wallets/smart-wallet/dist/thirdweb-dev-wallets-evm-wallets-smart-wallet.esm.js"
			},
			"default": "./evm/wallets/smart-wallet/dist/thirdweb-dev-wallets-evm-wallets-smart-wallet.cjs.js"
		},
		"./evm/connectors/safe": {
			module: {
				browser: "./evm/connectors/safe/dist/thirdweb-dev-wallets-evm-connectors-safe.browser.esm.js",
				"default": "./evm/connectors/safe/dist/thirdweb-dev-wallets-evm-connectors-safe.esm.js"
			},
			"default": "./evm/connectors/safe/dist/thirdweb-dev-wallets-evm-connectors-safe.cjs.js"
		},
		"./evm/connectors/frame": {
			module: {
				browser: "./evm/connectors/frame/dist/thirdweb-dev-wallets-evm-connectors-frame.browser.esm.js",
				"default": "./evm/connectors/frame/dist/thirdweb-dev-wallets-evm-connectors-frame.esm.js"
			},
			"default": "./evm/connectors/frame/dist/thirdweb-dev-wallets-evm-connectors-frame.cjs.js"
		},
		"./evm/connectors/magic": {
			module: {
				browser: "./evm/connectors/magic/dist/thirdweb-dev-wallets-evm-connectors-magic.browser.esm.js",
				"default": "./evm/connectors/magic/dist/thirdweb-dev-wallets-evm-connectors-magic.esm.js"
			},
			"default": "./evm/connectors/magic/dist/thirdweb-dev-wallets-evm-connectors-magic.cjs.js"
		},
		"./evm/connectors/paper": {
			module: {
				browser: "./evm/connectors/paper/dist/thirdweb-dev-wallets-evm-connectors-paper.browser.esm.js",
				"default": "./evm/connectors/paper/dist/thirdweb-dev-wallets-evm-connectors-paper.esm.js"
			},
			"default": "./evm/connectors/paper/dist/thirdweb-dev-wallets-evm-connectors-paper.cjs.js"
		},
		"./evm/connectors/trust": {
			module: {
				browser: "./evm/connectors/trust/dist/thirdweb-dev-wallets-evm-connectors-trust.browser.esm.js",
				"default": "./evm/connectors/trust/dist/thirdweb-dev-wallets-evm-connectors-trust.esm.js"
			},
			"default": "./evm/connectors/trust/dist/thirdweb-dev-wallets-evm-connectors-trust.cjs.js"
		},
		"./evm/wallets/rainbow-wallet": {
			module: {
				browser: "./evm/wallets/rainbow-wallet/dist/thirdweb-dev-wallets-evm-wallets-rainbow-wallet.browser.esm.js",
				"default": "./evm/wallets/rainbow-wallet/dist/thirdweb-dev-wallets-evm-wallets-rainbow-wallet.esm.js"
			},
			"default": "./evm/wallets/rainbow-wallet/dist/thirdweb-dev-wallets-evm-wallets-rainbow-wallet.cjs.js"
		},
		"./evm/wallets/wallet-connect": {
			module: {
				browser: "./evm/wallets/wallet-connect/dist/thirdweb-dev-wallets-evm-wallets-wallet-connect.browser.esm.js",
				"default": "./evm/wallets/wallet-connect/dist/thirdweb-dev-wallets-evm-wallets-wallet-connect.esm.js"
			},
			"default": "./evm/wallets/wallet-connect/dist/thirdweb-dev-wallets-evm-wallets-wallet-connect.cjs.js"
		},
		"./solana/wallets/private-key": {
			module: {
				browser: "./solana/wallets/private-key/dist/thirdweb-dev-wallets-solana-wallets-private-key.browser.esm.js",
				"default": "./solana/wallets/private-key/dist/thirdweb-dev-wallets-solana-wallets-private-key.esm.js"
			},
			"default": "./solana/wallets/private-key/dist/thirdweb-dev-wallets-solana-wallets-private-key.cjs.js"
		},
		"./evm/connectors/blocto": {
			module: {
				browser: "./evm/connectors/blocto/dist/thirdweb-dev-wallets-evm-connectors-blocto.browser.esm.js",
				"default": "./evm/connectors/blocto/dist/thirdweb-dev-wallets-evm-connectors-blocto.esm.js"
			},
			"default": "./evm/connectors/blocto/dist/thirdweb-dev-wallets-evm-connectors-blocto.cjs.js"
		},
		"./evm/connectors/zerion": {
			module: {
				browser: "./evm/connectors/zerion/dist/thirdweb-dev-wallets-evm-connectors-zerion.browser.esm.js",
				"default": "./evm/connectors/zerion/dist/thirdweb-dev-wallets-evm-connectors-zerion.esm.js"
			},
			"default": "./evm/connectors/zerion/dist/thirdweb-dev-wallets-evm-connectors-zerion.cjs.js"
		},
		"./evm/wallets/coinbase-wallet": {
			module: {
				browser: "./evm/wallets/coinbase-wallet/dist/thirdweb-dev-wallets-evm-wallets-coinbase-wallet.browser.esm.js",
				"default": "./evm/wallets/coinbase-wallet/dist/thirdweb-dev-wallets-evm-wallets-coinbase-wallet.esm.js"
			},
			"default": "./evm/wallets/coinbase-wallet/dist/thirdweb-dev-wallets-evm-wallets-coinbase-wallet.cjs.js"
		},
		"./evm/wallets/embedded-wallet": {
			module: {
				browser: "./evm/wallets/embedded-wallet/dist/thirdweb-dev-wallets-evm-wallets-embedded-wallet.browser.esm.js",
				"default": "./evm/wallets/embedded-wallet/dist/thirdweb-dev-wallets-evm-wallets-embedded-wallet.esm.js"
			},
			"default": "./evm/wallets/embedded-wallet/dist/thirdweb-dev-wallets-evm-wallets-embedded-wallet.cjs.js"
		},
		"./evm/connectors/phantom": {
			module: {
				browser: "./evm/connectors/phantom/dist/thirdweb-dev-wallets-evm-connectors-phantom.browser.esm.js",
				"default": "./evm/connectors/phantom/dist/thirdweb-dev-wallets-evm-connectors-phantom.esm.js"
			},
			"default": "./evm/connectors/phantom/dist/thirdweb-dev-wallets-evm-connectors-phantom.cjs.js"
		},
		"./evm/connectors/rainbow": {
			module: {
				browser: "./evm/connectors/rainbow/dist/thirdweb-dev-wallets-evm-connectors-rainbow.browser.esm.js",
				"default": "./evm/connectors/rainbow/dist/thirdweb-dev-wallets-evm-connectors-rainbow.esm.js"
			},
			"default": "./evm/connectors/rainbow/dist/thirdweb-dev-wallets-evm-connectors-rainbow.cjs.js"
		},
		"./evm/connectors/injected": {
			module: {
				browser: "./evm/connectors/injected/dist/thirdweb-dev-wallets-evm-connectors-injected.browser.esm.js",
				"default": "./evm/connectors/injected/dist/thirdweb-dev-wallets-evm-connectors-injected.esm.js"
			},
			"default": "./evm/connectors/injected/dist/thirdweb-dev-wallets-evm-connectors-injected.cjs.js"
		},
		"./evm/connectors/metamask": {
			module: {
				browser: "./evm/connectors/metamask/dist/thirdweb-dev-wallets-evm-connectors-metamask.browser.esm.js",
				"default": "./evm/connectors/metamask/dist/thirdweb-dev-wallets-evm-connectors-metamask.esm.js"
			},
			"default": "./evm/connectors/metamask/dist/thirdweb-dev-wallets-evm-connectors-metamask.cjs.js"
		},
		"./evm/wallets/local-wallet-node": {
			module: {
				browser: "./evm/wallets/local-wallet-node/dist/thirdweb-dev-wallets-evm-wallets-local-wallet-node.browser.esm.js",
				"default": "./evm/wallets/local-wallet-node/dist/thirdweb-dev-wallets-evm-wallets-local-wallet-node.esm.js"
			},
			"default": "./evm/wallets/local-wallet-node/dist/thirdweb-dev-wallets-evm-wallets-local-wallet-node.cjs.js"
		},
		"./evm/wallets/wallet-connect-v1": {
			module: {
				browser: "./evm/wallets/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-wallets-wallet-connect-v1.browser.esm.js",
				"default": "./evm/wallets/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-wallets-wallet-connect-v1.esm.js"
			},
			"default": "./evm/wallets/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-wallets-wallet-connect-v1.cjs.js"
		},
		"./evm/wallets/aws-secrets-manager": {
			module: {
				browser: "./evm/wallets/aws-secrets-manager/dist/thirdweb-dev-wallets-evm-wallets-aws-secrets-manager.browser.esm.js",
				"default": "./evm/wallets/aws-secrets-manager/dist/thirdweb-dev-wallets-evm-wallets-aws-secrets-manager.esm.js"
			},
			"default": "./evm/wallets/aws-secrets-manager/dist/thirdweb-dev-wallets-evm-wallets-aws-secrets-manager.cjs.js"
		},
		"./evm/connectors/local-wallet": {
			module: {
				browser: "./evm/connectors/local-wallet/dist/thirdweb-dev-wallets-evm-connectors-local-wallet.browser.esm.js",
				"default": "./evm/connectors/local-wallet/dist/thirdweb-dev-wallets-evm-connectors-local-wallet.esm.js"
			},
			"default": "./evm/connectors/local-wallet/dist/thirdweb-dev-wallets-evm-connectors-local-wallet.cjs.js"
		},
		"./evm/connectors/smart-wallet": {
			module: {
				browser: "./evm/connectors/smart-wallet/dist/thirdweb-dev-wallets-evm-connectors-smart-wallet.browser.esm.js",
				"default": "./evm/connectors/smart-wallet/dist/thirdweb-dev-wallets-evm-connectors-smart-wallet.esm.js"
			},
			"default": "./evm/connectors/smart-wallet/dist/thirdweb-dev-wallets-evm-connectors-smart-wallet.cjs.js"
		},
		"./evm/connectors/wallet-connect": {
			module: {
				browser: "./evm/connectors/wallet-connect/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect.browser.esm.js",
				"default": "./evm/connectors/wallet-connect/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect.esm.js"
			},
			"default": "./evm/connectors/wallet-connect/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect.cjs.js"
		},
		"./evm/connectors/coinbase-wallet": {
			module: {
				browser: "./evm/connectors/coinbase-wallet/dist/thirdweb-dev-wallets-evm-connectors-coinbase-wallet.browser.esm.js",
				"default": "./evm/connectors/coinbase-wallet/dist/thirdweb-dev-wallets-evm-connectors-coinbase-wallet.esm.js"
			},
			"default": "./evm/connectors/coinbase-wallet/dist/thirdweb-dev-wallets-evm-connectors-coinbase-wallet.cjs.js"
		},
		"./evm/connectors/embedded-wallet": {
			module: {
				browser: "./evm/connectors/embedded-wallet/dist/thirdweb-dev-wallets-evm-connectors-embedded-wallet.browser.esm.js",
				"default": "./evm/connectors/embedded-wallet/dist/thirdweb-dev-wallets-evm-connectors-embedded-wallet.esm.js"
			},
			"default": "./evm/connectors/embedded-wallet/dist/thirdweb-dev-wallets-evm-connectors-embedded-wallet.cjs.js"
		},
		"./evm/connectors/wallet-connect-v1": {
			module: {
				browser: "./evm/connectors/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect-v1.browser.esm.js",
				"default": "./evm/connectors/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect-v1.esm.js"
			},
			"default": "./evm/connectors/wallet-connect-v1/dist/thirdweb-dev-wallets-evm-connectors-wallet-connect-v1.cjs.js"
		},
		"./evm/connectors/embedded-wallet/implementations": {
			module: {
				browser: "./evm/connectors/embedded-wallet/implementations/dist/thirdweb-dev-wallets-evm-connectors-embedded-wallet-implementations.browser.esm.js",
				"default": "./evm/connectors/embedded-wallet/implementations/dist/thirdweb-dev-wallets-evm-connectors-embedded-wallet-implementations.esm.js"
			},
			"default": "./evm/connectors/embedded-wallet/implementations/dist/thirdweb-dev-wallets-evm-connectors-embedded-wallet-implementations.cjs.js"
		},
		"./package.json": "./package.json"
	},
	repository: "https://github.com/thirdweb-dev/js/tree/main/packages/wallets",
	license: "Apache-2.0",
	bugs: {
		url: "https://github.com/thirdweb-dev/js/issues"
	},
	author: "thirdweb eng <eng@thirdweb.com>",
	files: [
		"dist/",
		"evm/",
		"solana/"
	],
	preconstruct: {
		entrypoints: [
			"index.ts",
			"evm/index.ts",
			"evm/connectors/*/index.ts",
			"evm/connectors/embedded-wallet/implementations/index.ts",
			"evm/wallets/**",
			"solana/index.ts",
			"solana/wallets/**"
		],
		exports: {
			envConditions: [
				"browser"
			]
		}
	},
	sideEffects: false,
	dependencies: {
		"@account-abstraction/contracts": "^0.5.0",
		"@account-abstraction/sdk": "^0.5.0",
		"@account-abstraction/utils": "^0.5.0",
		"@blocto/sdk": "^0.5.4",
		"@coinbase/wallet-sdk": "^3.7.1",
		"@magic-ext/connect": "^6.7.2",
		"@magic-ext/oauth": "^7.6.2",
		"@magic-sdk/provider": "^13.6.2",
		"@paperxyz/embedded-wallet-service-sdk": "^1.2.4",
		"@paperxyz/sdk-common-utilities": "^0.1.0",
		"@safe-global/safe-core-sdk": "^3.3.4",
		"@safe-global/safe-ethers-adapters": "0.1.0-alpha.17",
		"@safe-global/safe-ethers-lib": "^1.9.4",
		"@thirdweb-dev/chains": "workspace:*",
		"@thirdweb-dev/contracts-js": "workspace:*",
		"@thirdweb-dev/sdk": "workspace:*",
		"@walletconnect/core": "^2.9.1",
		"@walletconnect/ethereum-provider": "^2.9.1",
		"@walletconnect/jsonrpc-utils": "^1.0.8",
		"@walletconnect/modal": "^2.6.1",
		"@walletconnect/types": "^2.9.1",
		"@walletconnect/utils": "^2.9.1",
		"@walletconnect/web3wallet": "^1.8.7",
		buffer: "^6.0.3",
		"cross-fetch": "^3.1.8",
		"crypto-js": "^4.1.1",
		"eth-provider": "^0.13.6",
		eventemitter3: "^5.0.1",
		"magic-sdk": "^13.6.2",
		"web3-core": "1.5.2"
	},
	peerDependencies: {
		"@aws-sdk/client-secrets-manager": "^3.256.0",
		"@noble/ed25519": "^1.7.1",
		"@solana/web3.js": "^1.73.0",
		bs58: "^5.0.0",
		ethers: "^5.7.2",
		"ethers-aws-kms-signer": "^1.3.2",
		"ethers-gcp-kms-signer": "^1.1.6",
		tweetnacl: "^1.0.3"
	},
	peerDependenciesMeta: {
		tweetnacl: {
			optional: true
		},
		"@aws-sdk/client-secrets-manager": {
			optional: true
		},
		"ethers-aws-kms-signer": {
			optional: true
		},
		"@noble/ed25519": {
			optional: true
		},
		"@solana/web3.js": {
			optional: true
		},
		bs58: {
			optional: true
		},
		ethers: {
			optional: true
		}
	},
	devDependencies: {
		"@aws-sdk/client-secrets-manager": "^3.378.0",
		"@babel/plugin-proposal-class-properties": "7.18.6",
		"@babel/plugin-transform-flow-strip-types": "^7.22.5",
		"@babel/plugin-transform-private-methods": "7.22.5",
		"@noble/ed25519": "^1.7.1",
		"@preconstruct/cli": "2.7.0",
		"@solana/web3.js": "^1.62.0",
		"@thirdweb-dev/tsconfig": "workspace:*",
		"@types/crypto-js": "^4.1.1",
		abitype: "^0.2.5",
		"babel-plugin-transform-inline-environment-variables": "^0.4.4",
		bs58: "^5.0.0",
		"cross-env": "^7.0.3",
		"eslint-config-thirdweb": "workspace:*",
		"eslint-plugin-better-tree-shaking": "0.0.3",
		"ethereum-provider": "^0.7.7",
		ethers: "^5.7.2",
		"ethers-aws-kms-signer": "^1.3.2",
		"ethers-gcp-kms-signer": "^1.1.6",
		tweetnacl: "^1.0.3",
		typescript: "^5.1.6"
	},
	scripts: {
		format: "prettier --write 'src/**/*'",
		lint: "eslint src/",
		fix: "eslint src/ --fix",
		clean: "rm -rf dist/",
		build: "tsc && cross-env THIRDWEB_EWS_SDK_VERSION=$npm_package_version preconstruct build",
		"preconstruct:fix": "preconstruct fix",
		push: "yalc push"
	}
};

class HttpRpcClient {
  constructor(bundlerUrl, entryPointAddress, chainId, clientId, secretKey) {
    this.bundlerUrl = bundlerUrl;
    this.entryPointAddress = entryPointAddress;
    this.chainId = chainId;
    const headers = {};
    if (isTwUrl(this.bundlerUrl)) {
      const bundleId = typeof globalThis !== "undefined" && "APP_BUNDLE_ID" in globalThis ? globalThis.APP_BUNDLE_ID : undefined;
      if (secretKey) {
        headers["x-secret-key"] = secretKey;
      } else if (clientId) {
        headers["x-client-id"] = clientId;
        if (bundleId) {
          headers["x-bundle-id"] = bundleId;
        }
      }

      // Dashboard token
      if (typeof globalThis !== "undefined" && "TW_AUTH_TOKEN" in globalThis && typeof globalThis.TW_AUTH_TOKEN === "string") {
        headers["authorization"] = `Bearer ${globalThis.TW_AUTH_TOKEN}`;
      }

      // CLI token
      if (typeof globalThis !== "undefined" && "TW_CLI_AUTH_TOKEN" in globalThis && typeof globalThis.TW_CLI_AUTH_TOKEN === "string") {
        headers["authorization"] = `Bearer ${globalThis.TW_CLI_AUTH_TOKEN}`;
        headers["x-authorize-wallet"] = "true";
      }
      headers["x-sdk-version"] = pkg.version;
      headers["x-sdk-name"] = pkg.name;
      headers["x-sdk-platform"] = bundleId ? "react-native" : "browser" ;
    }
    this.userOpJsonRpcProvider = new providers.JsonRpcProvider({
      url: this.bundlerUrl,
      headers
    }, {
      name: "Connected bundler network",
      chainId
    });
    this.initializing = this.validateChainId();
  }
  async validateChainId() {
    // validate chainId is in sync with expected chainid
    const chain = await this.userOpJsonRpcProvider.send("eth_chainId", []);
    const bundlerChain = parseInt(chain);
    if (bundlerChain !== this.chainId) {
      throw new Error(`bundler ${this.bundlerUrl} is on chainId ${bundlerChain}, but provider is on chainId ${this.chainId}`);
    }
  }

  /**
   * send a UserOperation to the bundler
   * @param userOp1
   * @return userOpHash the id of this operation, for getUserOperationTransaction
   */
  async sendUserOpToBundler(userOp1) {
    await this.initializing;
    const hexifiedUserOp = deepHexlify(await utils.resolveProperties(userOp1));
    const jsonRequestData = [hexifiedUserOp, this.entryPointAddress];
    await this.printUserOperation("eth_sendUserOperation", jsonRequestData);
    return await this.userOpJsonRpcProvider.send("eth_sendUserOperation", [hexifiedUserOp, this.entryPointAddress]);
  }
  async estimateUserOpGas(userOp1) {
    await this.initializing;
    const hexifiedUserOp = deepHexlify(await utils.resolveProperties(userOp1));
    const jsonRequestData = [hexifiedUserOp, this.entryPointAddress];
    await this.printUserOperation("eth_estimateUserOperationGas", jsonRequestData);
    return await this.userOpJsonRpcProvider.send("eth_estimateUserOperationGas", [hexifiedUserOp, this.entryPointAddress]);
  }
  async printUserOperation(method, _ref) {
    {
      return;
    }
  }
}

/**
 * wrap an existing provider to tunnel requests through Account Abstraction.
 * @param originalProvider the normal provider
 * @param config see ClientConfig for more info
 * @param originalSigner use this signer as the owner. of this wallet. By default, use the provider's signer
 */
async function create4337Provider(config, accountApi, originalProvider) {
  const entryPoint = EntryPoint__factory.connect(config.entryPointAddress, originalProvider);
  const chainId = (await originalProvider.getNetwork()).chainId;
  const httpRpcClient = new HttpRpcClient(config.bundlerUrl, config.entryPointAddress, chainId, config.clientId, config.secretKey);
  return await new ERC4337EthersProvider(chainId, config, config.localSigner, originalProvider, httpRpcClient, entryPoint, accountApi).init();
}

const ENTRYPOINT_ADDRESS = "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789"; // v0.6

const MINIMAL_ACCOUNT_ABI = [{
  inputs: [{
    internalType: "address",
    name: "_target",
    type: "address"
  }, {
    internalType: "uint256",
    name: "_value",
    type: "uint256"
  }, {
    internalType: "bytes",
    name: "_calldata",
    type: "bytes"
  }],
  name: "execute",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [{
    internalType: "address[]",
    name: "_target",
    type: "address[]"
  }, {
    internalType: "uint256[]",
    name: "_value",
    type: "uint256[]"
  }, {
    internalType: "bytes[]",
    name: "_calldata",
    type: "bytes[]"
  }],
  name: "executeBatch",
  outputs: [],
  stateMutability: "nonpayable",
  type: "function"
}, {
  inputs: [],
  name: "getNonce",
  outputs: [{
    internalType: "uint256",
    name: "",
    type: "uint256"
  }],
  stateMutability: "view",
  type: "function"
}];

/**
 * Base class for all Smart Wallet ERC-4337 Clients to implement.
 * Subclass should inherit 5 methods to support a specific wallet contract:
 *
 * - getAccountInitCode - return the value to put into the "initCode" field, if the account is not yet deployed. should create the account instance using a factory contract.
 * - getNonce - return current account's nonce value
 * - encodeExecute - encode the call from entryPoint through our account to the target contract.
 * - signUserOpHash - sign the hash of a UserOp.
 *
 * The user can use the following APIs:
 * - createUnsignedUserOp - given "target" and "calldata", fill userOp to perform that operation from the account.
 * - createSignedUserOp - helper to call the above createUnsignedUserOp, and then extract the userOpHash and sign it
 */
class BaseAccountAPI {
  // entryPoint connected to "zero" address. allowed to make static calls (e.g. to getSenderAddress)

  /**
   * base constructor.
   * subclass SHOULD add parameters that define the owner (signer) of this wallet
   */
  constructor(params) {
    _defineProperty(this, "isPhantom", true);
    this.provider = params.provider;
    this.overheads = params.overheads;
    this.entryPointAddress = params.entryPointAddress;
    this.accountAddress = params.accountAddress;
    this.paymasterAPI = params.paymasterAPI;

    // factory "connect" define the contract address. the contract "connect" defines the "from" address.
    this.entryPointView = EntryPoint__factory.connect(params.entryPointAddress, params.provider).connect(ethers.constants.AddressZero);
  }
  async init() {
    if ((await this.provider.getCode(this.entryPointAddress)) === "0x") {
      throw new Error(`entryPoint not deployed at ${this.entryPointAddress}`);
    }
    await this.getAccountAddress();
    return this;
  }

  /**
   * return the value to put into the "initCode" field, if the contract is not yet deployed.
   * this value holds the "factory" address, followed by this account's information
   */

  /**
   * return current account's nonce.
   */

  /**
   * encode the call from entryPoint through our account to the target contract.
   * @param target
   * @param value
   * @param data
   */

  /**
   * sign a userOp's hash (userOpHash).
   * @param userOpHash
   */

  /**
   * check if the contract is already deployed.
   */
  async checkAccountPhantom() {
    if (!this.isPhantom) {
      // already deployed. no need to check anymore.
      return this.isPhantom;
    }
    const senderAddressCode = await this.provider.getCode(this.getAccountAddress());
    if (senderAddressCode.length > 2) {
      this.isPhantom = false;
    }
    return this.isPhantom;
  }

  /**
   * calculate the account address even before it is deployed
   */
  async getCounterFactualAddress() {
    const initCode = this.getAccountInitCode();
    // use entryPoint to query account address (factory can provide a helper method to do the same, but
    // this method attempts to be generic
    try {
      await this.entryPointView.callStatic.getSenderAddress(initCode);
    } catch (e) {
      return e.errorArgs.sender;
    }
    throw new Error("must handle revert");
  }

  /**
   * return initCode value to into the UserOp.
   * (either deployment code, or empty hex if contract already deployed)
   */
  async getInitCode() {
    if (await this.checkAccountPhantom()) {
      return await this.getAccountInitCode();
    }
    return "0x";
  }

  /**
   * return maximum gas used for verification.
   * NOTE: createUnsignedUserOp will add to this value the cost of creation, if the contract is not yet created.
   */
  async getVerificationGasLimit() {
    return 100000;
  }

  /**
   * should cover cost of putting calldata on-chain, and some overhead.
   * actual overhead depends on the expected bundle size
   */
  async getPreVerificationGas(userOp) {
    const p = await utils.resolveProperties(userOp);
    return calcPreVerificationGas(p, this.overheads);
  }

  /**
   * ABI-encode a user operation. used for calldata cost estimation
   */
  packUserOp(userOp) {
    return packUserOp(userOp, false);
  }
  async encodeUserOpCallDataAndGasLimit(detailsForUserOp, batched) {
    function parseNumber(a) {
      if (!a || a === "") {
        return null;
      }
      return BigNumber.from(a.toString());
    }
    const value = parseNumber(detailsForUserOp.value) ?? BigNumber.from(0);
    const callData = batched ? detailsForUserOp.data : await this.encodeExecute(detailsForUserOp.target, value, detailsForUserOp.data);
    let callGasLimit;
    const isPhantom = await this.checkAccountPhantom();
    if (isPhantom) {
      // when the account is not deployed yet, we simulate the call to the target contract directly
      callGasLimit = await this.provider.estimateGas({
        from: this.getAccountAddress(),
        to: detailsForUserOp.target,
        data: detailsForUserOp.data
      });
      callGasLimit = callGasLimit.mul(120).div(100); // add 20% overhead for entrypoint checks
      // if the estimation is too low, we use a fixed value of 500k
      if (callGasLimit.lt(30000)) {
        callGasLimit = BigNumber.from(500000);
      }
    } else {
      callGasLimit = parseNumber(detailsForUserOp.gasLimit) ?? (await this.provider.estimateGas({
        from: this.entryPointAddress,
        to: this.getAccountAddress(),
        data: callData
      }));
    }
    return {
      callData,
      callGasLimit
    };
  }

  /**
   * return userOpHash for signing.
   * This value matches entryPoint.getUserOpHash (calculated off-chain, to avoid a view call)
   * @param userOp userOperation, (signature field ignored)
   */
  async getUserOpHash(userOp) {
    const chainId = await this.provider.getNetwork().then(net => net.chainId);
    return getUserOpHashV06(userOp, this.entryPointAddress, chainId);
  }

  /**
   * return the account's address.
   * this value is valid even before deploying the contract.
   */
  async getAccountAddress() {
    if (!this.senderAddress) {
      if (this.accountAddress) {
        this.senderAddress = this.accountAddress;
      } else {
        this.senderAddress = await this.getCounterFactualAddress();
      }
    }
    return this.senderAddress;
  }
  async estimateCreationGas(initCode) {
    if (!initCode || initCode === "0x") {
      return 0;
    }
    const deployerAddress = initCode.substring(0, 42);
    const deployerCallData = "0x" + initCode.substring(42);
    return await this.provider.estimateGas({
      to: deployerAddress,
      data: deployerCallData
    });
  }

  /**
   * create a UserOperation, filling all details (except signature)
   * - if account is not yet created, add initCode to deploy it.
   * - if gas or nonce are missing, read them from the chain (note that we can't fill gaslimit before the account is created)
   * @param info
   */
  async createUnsignedUserOp(info, batched) {
    const {
      callData,
      callGasLimit
    } = await this.encodeUserOpCallDataAndGasLimit(info, batched);
    const initCode = await this.getInitCode();
    const initGas = await this.estimateCreationGas(initCode);
    const verificationGasLimit = BigNumber.from(await this.getVerificationGasLimit()).add(initGas);
    let {
      maxFeePerGas,
      maxPriorityFeePerGas
    } = info;
    if (!maxFeePerGas || !maxPriorityFeePerGas) {
      const feeData = await getDynamicFeeData(this.provider);
      if (!maxPriorityFeePerGas) {
        maxPriorityFeePerGas = feeData.maxPriorityFeePerGas ?? undefined;
      }
      if (!maxFeePerGas) {
        maxFeePerGas = feeData.maxFeePerGas ?? undefined;
        const network = await this.provider.getNetwork();
        const chainId = network.chainId;
        if (chainId === Celo.chainId || chainId === CeloAlfajoresTestnet.chainId || chainId === CeloBaklavaTestnet.chainId) {
          maxPriorityFeePerGas = maxFeePerGas;
        }
      }
    }
    const partialUserOp = {
      sender: this.getAccountAddress(),
      nonce: info.nonce ?? this.getNonce(),
      initCode,
      callData,
      callGasLimit,
      verificationGasLimit,
      maxFeePerGas,
      maxPriorityFeePerGas,
      paymasterAndData: "0x"
    };
    let paymasterAndData;
    let userOp = partialUserOp;
    if (this.paymasterAPI) {
      // fill (partial) preVerificationGas (all except the cost of the generated paymasterAndData)
      try {
        // userOp.preVerificationGas contains a promise that will resolve to an error.
        await ethers.utils.resolveProperties(userOp);
        // eslint-disable-next-line no-empty
      } catch (_) {}
      const pmOp = {
        sender: userOp.sender,
        nonce: userOp.nonce,
        initCode: userOp.initCode,
        callData: userOp.callData,
        callGasLimit: userOp.callGasLimit,
        verificationGasLimit: userOp.verificationGasLimit,
        maxFeePerGas: userOp.maxFeePerGas,
        maxPriorityFeePerGas: userOp.maxPriorityFeePerGas,
        // A dummy value here is required in order to calculate a correct preVerificationGas value.
        paymasterAndData: DUMMY_PAYMASTER_AND_DATA,
        signature: ethers.utils.hexlify(Buffer.alloc(SIG_SIZE, 1))
      };
      userOp = await ethers.utils.resolveProperties(pmOp);
      const preVerificationGas = calcPreVerificationGas(userOp);
      userOp.preVerificationGas = preVerificationGas;
      paymasterAndData = await this.paymasterAPI.getPaymasterAndData(userOp);
      if (paymasterAndData === "0x") {
        paymasterAndData = undefined;
      }
    }
    if (paymasterAndData) {
      userOp.paymasterAndData = paymasterAndData;
      return {
        ...userOp,
        signature: ""
      };
    } else {
      const modifiedOp = {
        ...userOp,
        paymasterAndData: "0x"
      };
      modifiedOp.preVerificationGas = await this.getPreVerificationGas(modifiedOp);
      return {
        ...modifiedOp,
        signature: ""
      };
    }
  }

  /**
   * Sign the filled userOp.
   * @param userOp the UserOperation to sign (with signature field ignored)
   */
  async signUserOp(userOp) {
    const userOpHash = await this.getUserOpHash(userOp);
    const signature = this.signUserOpHash(userOpHash);
    return {
      ...userOp,
      signature
    };
  }

  /**
   * helper method: create and sign a user operation.
   * @param info transaction details for the userOp
   */
  async createSignedUserOp(info, batched) {
    return await this.signUserOp(await this.createUnsignedUserOp(info, batched));
  }

  /**
   * get the transaction that has this userOpHash mined, or null if not found
   * @param userOpHash returned by sendUserOpToBundler (or by getUserOpHash..)
   * @param timeout stop waiting after this timeout
   * @param interval time to wait between polls.
   * @return the transactionHash this userOp was mined, or null if not found.
   */
  async getUserOpReceipt(userOpHash) {
    let timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30000;
    let interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
    const endtime = Date.now() + timeout;
    while (Date.now() < endtime) {
      const events = await this.entryPointView.queryFilter(this.entryPointView.filters.UserOperationEvent(userOpHash));
      if (events.length > 0) {
        return events[0].transactionHash;
      }
      await new Promise(resolve => setTimeout(resolve, interval));
    }
    return null;
  }
}

class AccountAPI extends BaseAccountAPI {
  constructor(params, originalProvider) {
    super({
      ...params,
      provider: originalProvider
    });
    this.params = params;
    // Technically dont need the signer here, but we need to encode/estimate gas with it so a signer is required
    // We don't want to use the localSigner directly since it might be connected to another chain
    // so we just use the public hardhat pkey instead
    this.sdk = ThirdwebSDK.fromPrivateKey(LOCAL_NODE_PKEY, params.chain, {
      clientId: params.clientId,
      secretKey: params.secretKey
    });
  }
  async getChainId() {
    return await this.provider.getNetwork().then(n => n.chainId);
  }
  async getAccountContract() {
    if (!this.accountContract) {
      if (this.params.accountInfo?.abi) {
        this.accountContract = await this.sdk.getContract(await this.getAccountAddress(), this.params.accountInfo.abi);
      } else {
        this.accountContract = await this.sdk.getContract(await this.getAccountAddress(), MINIMAL_ACCOUNT_ABI);
      }
    }
    return this.accountContract;
  }
  async getAccountInitCode() {
    const factory = await this.getFactoryContract();
    console.log("Deploying smart wallet via factory");
    const localSigner = await this.params.localSigner.getAddress();
    const tx = await this.params.factoryInfo.createAccount(factory, localSigner);
    try {
      console.log("Cost to deploy smart wallet: ", (await tx.estimateGasCost()).ether, "ETH");
    } catch (e) {
      console.error("Cost to deploy smart wallet: unknown", e);
    }
    return utils.hexConcat([factory.getAddress(), tx.encode()]);
  }
  async getFactoryContract() {
    if (this.factoryContract) {
      return this.factoryContract;
    }
    if (this.params.factoryInfo?.abi) {
      this.factoryContract = await this.sdk.getContract(this.params.factoryAddress, this.params.factoryInfo.abi);
    } else {
      this.factoryContract = await this.sdk.getContract(this.params.factoryAddress);
    }
    return this.factoryContract;
  }
  async getCounterFactualAddress() {
    if (this.params.accountAddress) {
      return this.params.accountAddress;
    }
    const factory = await this.getFactoryContract();
    const localSigner = await this.params.localSigner.getAddress();
    return this.params.factoryInfo.getAccountAddress(factory, localSigner);
  }
  async getNonce() {
    if (await this.checkAccountPhantom()) {
      return BigNumber.from(0);
    }
    const accountContract = await this.getAccountContract();
    return this.params.accountInfo.getNonce(accountContract);
  }
  async encodeExecute(target, value, data) {
    const accountContract = await this.getAccountContract();
    const tx = await this.params.accountInfo.execute(accountContract, target, value, data);
    return tx.encode();
  }
  async encodeExecuteBatch(targets, values, datas) {
    const accountContract = await this.getAccountContract();
    const tx = await accountContract.prepare("executeBatch", [targets, values, datas]);
    return tx.encode();
  }
  async signUserOpHash(userOpHash) {
    return await this.params.localSigner.signMessage(utils.arrayify(userOpHash));
  }
  async isAcountDeployed() {
    return !(await this.checkAccountPhantom());
  }
}

class SmartWalletConnector extends Connector {
  constructor(config) {
    super();
    this.config = config;
  }
  async initialize(params) {
    const config = this.config;
    const originalProvider = getChainProvider(config.chain, {
      clientId: config.clientId,
      secretKey: config.secretKey
    });
    const chainSlug = await this.getChainSlug(config.chain, originalProvider);
    const bundlerUrl = this.config.bundlerUrl || `https://${chainSlug}.bundler.thirdweb.com`;
    const paymasterUrl = this.config.paymasterUrl || `https://${chainSlug}.bundler.thirdweb.com`;
    const entryPointAddress = config.entryPointAddress || ENTRYPOINT_ADDRESS;
    const localSigner = await params.personalWallet.getSigner();
    const providerConfig = {
      chain: config.chain,
      localSigner,
      entryPointAddress,
      bundlerUrl,
      paymasterAPI: this.config.gasless ? this.config.paymasterAPI ? this.config.paymasterAPI : getVerifyingPaymaster(paymasterUrl, entryPointAddress, this.config.clientId, this.config.secretKey) : undefined,
      factoryAddress: config.factoryAddress,
      accountAddress: params.accountAddress,
      factoryInfo: config.factoryInfo || this.defaultFactoryInfo(),
      accountInfo: config.accountInfo || this.defaultAccountInfo(),
      clientId: config.clientId,
      secretKey: config.secretKey
    };
    this.personalWallet = params.personalWallet;
    const accountApi = new AccountAPI(providerConfig, originalProvider);
    this.aaProvider = await create4337Provider(providerConfig, accountApi, originalProvider);
    this.accountApi = accountApi;
  }
  async connect(connectionArgs) {
    await this.initialize(connectionArgs);
    return await this.getAddress();
  }
  getProvider() {
    if (!this.aaProvider) {
      throw new Error("Personal wallet not connected");
    }
    return Promise.resolve(this.aaProvider);
  }
  async getSigner() {
    if (!this.aaProvider) {
      throw new Error("Personal wallet not connected");
    }
    return Promise.resolve(this.aaProvider.getSigner());
  }
  async getAddress() {
    const signer = await this.getSigner();
    return signer.getAddress();
  }
  async isConnected() {
    try {
      const address = await this.getAddress();
      return !!address;
    } catch (e) {
      return false;
    }
  }
  async disconnect() {
    this.personalWallet = undefined;
    this.aaProvider = undefined;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  async switchChain(chainId) {
    // TODO implement chain switching
    const provider = await this.getProvider();
    const currentChainId = (await provider.getNetwork()).chainId;
    if (currentChainId !== chainId) {
      // only throw if actually trying to switch chains
      throw new Error("Not supported.");
    }
  }
  setupListeners() {
    return Promise.resolve();
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateChains(chains) {}

  /**
   * Check whether the connected signer can execute a given transaction using the smart wallet.
   * @param transaction the transaction to execute using the smart wallet.
   * @returns whether the connected signer can execute the transaction using the smart wallet.
   */
  async hasPermissionToExecute(transaction) {
    const accountContract = await this.getAccountContract();
    const signer = await this.getSigner();
    const signerAddress = await signer.getAddress();
    const restrictions = (await accountContract.account.getAllSigners()).filter(item => ethers.utils.getAddress(item.signer) === ethers.utils.getAddress(signerAddress))[0].permissions;
    return restrictions.approvedCallTargets.includes(transaction.getTarget());
  }

  /**
   * Execute a single transaction
   * @param transactions
   * @returns the transaction receipt
   */
  async execute(transaction) {
    const signer = await this.getSigner();
    const tx = await signer.sendTransaction({
      to: transaction.getTarget(),
      data: transaction.encode(),
      value: await transaction.getValue()
    });
    const receipt = await tx.wait();
    return {
      receipt
    };
  }

  /**
   * Execute multiple transactions in a single batch
   * @param transactions
   * @returns the transaction receipt
   */
  async executeBatch(transactions) {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    const signer = await this.getSigner();
    const targets = transactions.map(tx => tx.getTarget());
    const data = transactions.map(tx => tx.encode());
    const values = transactions.map(() => BigNumber.from(0)); // TODO check if we can handle multiple values
    const callData = await this.accountApi.encodeExecuteBatch(targets, values, data);
    const tx = await signer.sendTransaction({
      to: await signer.getAddress(),
      data: callData,
      value: 0
    }, true // batched tx flag
    );

    const receipt = await tx.wait();
    return {
      receipt
    };
  }

  /**
   * Manually deploy the smart wallet contract. If already deployed this will throw an error.
   * Note that this is not necessary as the smart wallet will be deployed automatically on the first transaction the user makes.
   * @returns the transaction receipt
   */
  async deploy() {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    if (await this.accountApi.isAcountDeployed()) {
      throw new Error("Smart wallet already deployed");
    }
    const signer = await this.getSigner();
    const tx = await signer.sendTransaction({
      to: await signer.getAddress(),
      data: "0x"
    });
    const receipt = await tx.wait();
    return {
      receipt
    };
  }

  /**
   * Check if the smart wallet contract is deployed
   * @returns true if the smart wallet contract is deployed
   */
  async isDeployed() {
    if (!this.accountApi) {
      throw new Error("Personal wallet not connected");
    }
    return await this.accountApi.isAcountDeployed();
  }

  /**
   * Get the underlying account contract of the smart wallet.
   * @returns the account contract of the smart wallet.
   */
  async getAccountContract() {
    const isDeployed = await this.isDeployed();
    if (!isDeployed) {
      throw new Error("Account contract is not deployed yet. You can deploy it manually using SmartWallet.deploy(), or by executing a transaction from this wallet.");
    }
    // getting a new instance everytime
    // to avoid caching issues pre/post deployment
    const sdk = ThirdwebSDK.fromSigner(await this.getSigner(), this.config.chain, {
      clientId: this.config.clientId,
      secretKey: this.config.secretKey
    });
    if (this.config.accountInfo?.abi) {
      return sdk.getContract(await this.getAddress(), this.config.accountInfo.abi);
    } else {
      return sdk.getContract(await this.getAddress());
    }
  }

  /**
   * Get the underlying account factory contract of the smart wallet.
   * @returns the account factory contract.
   */
  async getFactoryContract() {
    const sdk = ThirdwebSDK.fromSigner(await this.getSigner(), this.config.chain, {
      clientId: this.config.clientId,
      secretKey: this.config.secretKey
    });
    if (this.config.factoryInfo?.abi) {
      return sdk.getContract(this.config.factoryAddress, this.config.factoryInfo.abi);
    }
    return sdk.getContract(this.config.factoryAddress);
  }
  defaultFactoryInfo() {
    return {
      createAccount: async (factory, owner) => {
        return factory.prepare("createAccount", [owner, ethers.utils.toUtf8Bytes("")]);
      },
      getAccountAddress: async (factory, owner) => {
        try {
          return await factory.call("getAddress", [owner, ethers.utils.toUtf8Bytes("")]);
        } catch (e) {
          console.log("Falling back to old factory");
          // TODO remove after a few versions
          return factory.call("getAddress", [owner]);
        }
      }
    };
  }
  defaultAccountInfo() {
    return {
      execute: async (account, target, value, data) => {
        return account.prepare("execute", [target, value, data]);
      },
      getNonce: async account => {
        return account.call("getNonce", []);
      }
    };
  }
  async getChainSlug(chainOrRpc, provider) {
    if (typeof chainOrRpc === "object") {
      return chainOrRpc.slug;
    }
    if (typeof chainOrRpc === "number") {
      const chain = getChainByChainId(chainOrRpc);
      return chain.slug;
    }
    if (typeof chainOrRpc === "string") {
      if (chainOrRpc.startsWith("http") || chainOrRpc.startsWith("ws")) {
        // if it's a url, try to get the chain id from the provider
        const chainId = (await provider.getNetwork()).chainId;
        const chain = getChainByChainId(chainId);
        return chain.slug;
      }
      // otherwise its the network name
      return chainOrRpc;
    } else {
      throw new Error(`Invalid network: ${chainOrRpc}`);
    }
  }
}

export { SmartWalletConnector };
