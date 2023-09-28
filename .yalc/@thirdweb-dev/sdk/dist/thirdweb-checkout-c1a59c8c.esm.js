import { cM as ChainId } from './contract-publisher-7ea04dd3.esm.js';
import invariant from 'tiny-invariant';

const PAPER_API_BASE = `https://paper.xyz/api`;
const PAPER_API_VERSION = `2022-08-12`;

/**
 * @internal
 */
const PAPER_API_URL = `${PAPER_API_BASE}/${PAPER_API_VERSION}/platform/thirdweb`;
const PAPER_CHAIN_ID_MAP = {
  [ChainId.Mainnet]: "Ethereum",
  [ChainId.Goerli]: "Goerli",
  [ChainId.Polygon]: "Polygon",
  [ChainId.Mumbai]: "Mumbai",
  [ChainId.Avalanche]: "Avalanche"
};

/**
 * @internal
 */
function parseChainIdToPaperChain(chainId) {
  invariant(chainId in PAPER_CHAIN_ID_MAP, `chainId not supported by paper: ${chainId}`);
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
  invariant(json.result.id, "Contract is not registered with paper");
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
  invariant(json.checkoutLinkIntentUrl, "Failed to create checkout link intent");
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

export { PAPER_API_URL as P, PaperCheckout as a, createCheckoutLinkIntent as c, fetchRegisteredCheckoutId as f, parseChainIdToPaperChain as p };
