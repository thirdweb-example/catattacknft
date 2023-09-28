'use strict';

var contractPublisher = require('./contract-publisher-de532850.cjs.prod.js');
var invariant = require('tiny-invariant');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var invariant__default = /*#__PURE__*/_interopDefault(invariant);

const PAPER_API_BASE = `https://paper.xyz/api`;
const PAPER_API_VERSION = `2022-08-12`;

/**
 * @internal
 */
const PAPER_API_URL = `${PAPER_API_BASE}/${PAPER_API_VERSION}/platform/thirdweb`;
const PAPER_CHAIN_ID_MAP = {
  [contractPublisher.ChainId.Mainnet]: "Ethereum",
  [contractPublisher.ChainId.Goerli]: "Goerli",
  [contractPublisher.ChainId.Polygon]: "Polygon",
  [contractPublisher.ChainId.Mumbai]: "Mumbai",
  [contractPublisher.ChainId.Avalanche]: "Avalanche"
};

/**
 * @internal
 */
function parseChainIdToPaperChain(chainId) {
  invariant__default["default"](chainId in PAPER_CHAIN_ID_MAP, `chainId not supported by paper: ${chainId}`);
  return PAPER_CHAIN_ID_MAP[chainId];
}
/**
 *
 * @param contractAddress
 * @param chainId
 * @internal
 * @returns the paper xyz contract id
 * @throws if the contract is not registered on paper xyz
 */
async function fetchRegisteredCheckoutId(contractAddress, chainId) {
  const paperChain = parseChainIdToPaperChain(chainId);
  const res = await fetch(`${PAPER_API_URL}/register-contract?contractAddress=${contractAddress}&chain=${paperChain}`);
  const json = await res.json();
  invariant__default["default"](json.result.id, "Contract is not registered with paper");
  return json.result.id;
}

/**
 * The parameters for creating a paper.xyz checkout link.
 * @public
 */

/**
 * @internal
 */

/**
 * @internal
 */

const DEFAULT_PARAMS = {
  expiresInMinutes: 15,
  feeBearer: "BUYER",
  sendEmailOnSuccess: true,
  redirectAfterPayment: false
};

/**
 * @internal
 */
async function createCheckoutLinkIntent(contractId, params) {
  const res = await fetch(`${PAPER_API_URL}/checkout-link-intent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      contractId,
      ...DEFAULT_PARAMS,
      ...params,
      metadata: {
        ...params.metadata,
        via_platform: "thirdweb"
      },
      // overrides that are hard coded
      hideNativeMint: true,
      hidePaperWallet: !!params.walletAddress,
      hideExternalWallet: true,
      hidePayWithCrypto: true,
      usePaperKey: false
    })
  });
  const json = await res.json();
  invariant__default["default"](json.checkoutLinkIntentUrl, "Failed to create checkout link intent");
  return json.checkoutLinkIntentUrl;
}

/**
 * @internal
 */
class PaperCheckout {
  constructor(contractWrapper) {
    this.contractWrapper = contractWrapper;
  }
  async getCheckoutId() {
    return fetchRegisteredCheckoutId(this.contractWrapper.address, await this.contractWrapper.getChainID());
  }
  async isEnabled() {
    try {
      return !!(await this.getCheckoutId());
    } catch (err) {
      return false;
    }
  }
  async createLinkIntent(params) {
    return await createCheckoutLinkIntent(await this.getCheckoutId(), params);
  }
}

exports.PAPER_API_URL = PAPER_API_URL;
exports.PaperCheckout = PaperCheckout;
exports.createCheckoutLinkIntent = createCheckoutLinkIntent;
exports.fetchRegisteredCheckoutId = fetchRegisteredCheckoutId;
exports.parseChainIdToPaperChain = parseChainIdToPaperChain;
