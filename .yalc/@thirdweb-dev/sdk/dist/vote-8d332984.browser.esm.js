import ERC20Abi from '@thirdweb-dev/contracts-js/dist/abis/IERC20.json';
import { BigNumber, utils, Contract } from 'ethers';
import { ds as ContractWrapper, e as AbiSchema, ah as ContractMetadata, d$ as VoteContractSchema, b0 as ContractAppURI, ag as ContractEncoder, aQ as GasCostEstimator, aR as ContractEvents, aS as ContractInterceptor, cG as resolveAddress, bc as fetchCurrencyValue, bb as fetchCurrencyMetadata, dt as buildTransactionFunction, aW as Transaction } from './contract-publisher-da6d1b7a.browser.esm.js';
import { V as VoteType } from './Vote-3b66775c.browser.esm.js';
import './QueryParams-39bcad7a.browser.esm.js';
import 'bn.js';
import 'zod';
import 'tiny-invariant';
import 'uuid';
import '@thirdweb-dev/storage';
import '@thirdweb-dev/contracts-js/dist/abis/IERC165.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json';
import 'fast-deep-equal';
import 'merkletreejs';
import '@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json';
import '@thirdweb-dev/chains';
import 'bs58';
import '@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryLogic.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDrop.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC20Permit.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMulticall.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropERC721_V3.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721AQueryableUpgradeable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json';
import '@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721_V1.json';
import '@thirdweb-dev/contracts-js/dist/abis/LazyMintWithTier.json';
import '@thirdweb-dev/contracts-js/dist/abis/SharedMetadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/zora_IERC721Drop.json';
import '@thirdweb-dev/contracts-js/dist/abis/ILoyaltyCard.json';
import '@thirdweb-dev/contracts-js/dist/abis/INFTMetadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDrop1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropERC1155_V2.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155_V1.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155Supply.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IERC2771Context.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAppURI.json';
import '@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json';
import '@thirdweb-dev/contracts-js/dist/abis/IDirectListings.json';
import '@thirdweb-dev/contracts-js/dist/abis/IEnglishAuctions.json';
import '@thirdweb-dev/contracts-js/dist/abis/IOffers.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPermissions.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json';
import '@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json';
import '@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json';
import '@thirdweb-dev/contracts-js/dist/abis/Ownable.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAirdropERC20.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAirdropERC721.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAirdropERC1155.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAccountFactoryCore.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAccountPermissions.json';
import '@thirdweb-dev/contracts-js/dist/abis/IAccount.json';
import 'ethers/lib/utils';
import '@thirdweb-dev/contracts-js/dist/abis/Forwarder.json';
import 'cross-fetch';
import 'eventemitter3';

/**
 * Create a decentralized organization for token holders to vote on proposals.
 *
 * @example
 *
 * ```javascript
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk";
 *
 * const sdk = new ThirdwebSDK("{{chainName}}");
 * const contract = await sdk.getContract("{{contract_address}}", "vote");
 * ```
 *
 * @public
 */
class Vote {
  /**
   * @internal
   */

  get chainId() {
    return this._chainId;
  }
  constructor(network, address, storage) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    let abi = arguments.length > 4 ? arguments[4] : undefined;
    let chainId = arguments.length > 5 ? arguments[5] : undefined;
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new ContractWrapper(network, address, abi, options, storage);
    this._chainId = chainId;
    this.abi = AbiSchema.parse(abi || []);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new ContractMetadata(this.contractWrapper, VoteContractSchema, this.storage);
    this.app = new ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.encoder = new ContractEncoder(this.contractWrapper);
    this.estimator = new GasCostEstimator(this.contractWrapper);
    this.events = new ContractEvents(this.contractWrapper);
    this.interceptor = new ContractInterceptor(this.contractWrapper);
  }
  onNetworkUpdated(network) {
    this.contractWrapper.updateSignerOrProvider(network);
  }
  getAddress() {
    return this.contractWrapper.address;
  }

  /** ******************************
   * READ FUNCTIONS
   *******************************/

  /**
   * Get a proposal by id.
   *
   * @param proposalId - The proposal id to get.
   * @returns - The proposal.
   */
  async get(proposalId) {
    const all = await this.getAll();
    const proposals = all.filter(p => p.proposalId.eq(BigNumber.from(proposalId)));
    if (proposals.length === 0) {
      throw new Error("proposal not found");
    }
    return proposals[0];
  }

  /**
   * Get All Proposals
   *
   * @remarks Get all the proposals in this contract.
   *
   * @example
   * ```javascript
   * const proposals = await contract.getAll();
   * console.log(proposals);
   * ```
   *
   * @returns - All the proposals in the contract.
   */
  async getAll() {
    return Promise.all((await this.contractWrapper.read("getAllProposals", [])).map(async data => ({
      proposalId: data.proposalId,
      proposer: data.proposer,
      description: data.description,
      startBlock: data.startBlock,
      endBlock: data.endBlock,
      state: await this.contractWrapper.read("state", [data.proposalId]),
      votes: await this.getProposalVotes(data.proposalId),
      executions: data[3].map((c, i) => ({
        toAddress: data.targets[i],
        nativeTokenValue: c,
        transactionData: data.calldatas[i]
      }))
    })));
  }

  /**
   * Get the votes for a specific proposal
   * @param proposalId - the proposalId
   */
  async getProposalVotes(proposalId) {
    const votes = await this.contractWrapper.read("proposalVotes", [proposalId]);
    return [{
      type: VoteType.Against,
      label: "Against",
      count: votes.againstVotes
    }, {
      type: VoteType.For,
      label: "For",
      count: votes.forVotes
    }, {
      type: VoteType.Abstain,
      label: "Abstain",
      count: votes.abstainVotes
    }];
  }

  /**
   * Check If Wallet Voted
   *
   * @remarks Check if a specified wallet has voted a specific proposal
   *
   * @example
   * ```javascript
   * // The proposal ID of the proposal you want to check
   * const proposalId = "0";
   * // The address of the wallet you want to check to see if they voted
   * const address = "{{wallet_address}}";
   *
   * await contract.hasVoted(proposalId, address);
   * ```
   *
   * @param proposalId - The unique identifier of a proposal .
   * @param account - (optional) wallet account address. Defaults to connected signer.
   * @returns - True if the account has already voted on the proposal.
   */
  async hasVoted(proposalId, account) {
    if (!account) {
      account = await this.contractWrapper.getSignerAddress();
    }
    return this.contractWrapper.read("hasVoted", [proposalId, await resolveAddress(account)]);
  }

  /**
   * Can Execute
   *
   * @remarks Check if a proposal can be executed (if the proposal has succeeded).
   *
   * @example
   * ```javascript
   * // The proposal ID of the proposal you want to check
   * const proposalId = "0";
   * const canExecute = await contract.canExecute(proposalId);
   * console.log(canExecute);
   * ```
   *
   * @param proposalId - The proposal ID to check.
   * @returns - True if the proposal can be executed, false otherwise.
   */
  async canExecute(proposalId) {
    await this.ensureExists(proposalId);
    const proposal = await this.get(proposalId);
    const tos = proposal.executions.map(p => p.toAddress);
    const values = proposal.executions.map(p => p.nativeTokenValue);
    const datas = proposal.executions.map(p => p.transactionData);
    const descriptionHash = utils.id(proposal.description);
    try {
      await this.contractWrapper.callStatic().execute(tos, values, datas, descriptionHash);
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Check the balance of the project wallet in the native token of the chain
   *
   * @returns - The balance of the project in the native token of the chain
   */
  async balance() {
    const balance = await this.contractWrapper.getProvider().getBalance(this.contractWrapper.address);
    return {
      name: "",
      symbol: "",
      decimals: 18,
      value: balance,
      displayValue: utils.formatUnits(balance, 18)
    };
  }

  /**
   * Check the balance of the project wallet in a particular
   * ERC20 token contract
   *
   * @returns - The balance of the project in the native token of the chain
   */
  async balanceOfToken(tokenAddress) {
    const erc20 = new Contract(await resolveAddress(tokenAddress), ERC20Abi, this.contractWrapper.getProvider());
    return await fetchCurrencyValue(this.contractWrapper.getProvider(), tokenAddress, await erc20.balanceOf(this.contractWrapper.address));
  }

  /**
   * Find a proposal by its id.
   *
   * @internal
   * @param proposalId - Proposal to check for
   */
  async ensureExists(proposalId) {
    try {
      await this.contractWrapper.read("state", [proposalId]);
    } catch (e) {
      throw Error(`Proposal ${proposalId} not found`);
    }
  }

  /**
   * Get the Vote contract configuration
   */
  async settings() {
    const [votingDelay, votingPeriod, votingTokenAddress, votingQuorumFraction, proposalTokenThreshold] = await Promise.all([this.contractWrapper.read("votingDelay", []), this.contractWrapper.read("votingPeriod", []), this.contractWrapper.read("token", []), this.contractWrapper.read("quorumNumerator", []), this.contractWrapper.read("proposalThreshold", [])]);
    const votingTokenMetadata = await fetchCurrencyMetadata(this.contractWrapper.getProvider(), votingTokenAddress);
    return {
      votingDelay: votingDelay.toString(),
      votingPeriod: votingPeriod.toString(),
      votingTokenAddress,
      votingTokenMetadata,
      votingQuorumFraction: votingQuorumFraction.toString(),
      proposalTokenThreshold: proposalTokenThreshold.toString()
    };
  }

  /** ******************************
   * WRITE FUNCTIONS
   *******************************/

  /**
   * Create Proposal
   *
   * @remarks Create a new proposal for token holders to vote on.
   *
   * @example
   * ```javascript
   * // The description of the proposal you want to pass
   * const description = "This is a great proposal - vote for it!"
   * // You can (optionally) pass in contract calls that will get executed when the proposal is executed.
   * const executions = [
   *   {
   *     // The contract you want to make a call to
   *     toAddress: "0x...",
   *     // The amount of the native currency to send in this transaction
   *     nativeTokenValue: 0,
   *     // Transaction data that will be executed when the proposal is executed
   *     // This is an example transfer transaction with a token contract (which you would need to set up in code)
   *     transactionData: tokenContract.encoder.encode(
   *       "transfer", [
   *         fromAddress,
   *         amount,
   *       ]
   *     ),
   *   }
   * ]
   *
   * const proposal = await contract.propose(description, executions);
   * ```
   *
   * @param description - The description of the proposal.
   * @param executions - A set of executable transactions that will be run if the proposal is passed and executed.
   * @returns - The id of the created proposal and the transaction receipt.
   */
  propose = /* @__PURE__ */buildTransactionFunction(async (description, executions) => {
    if (!executions) {
      executions = [{
        toAddress: this.contractWrapper.address,
        nativeTokenValue: 0,
        transactionData: "0x"
      }];
    }
    const tos = executions.map(p => p.toAddress);
    const values = executions.map(p => p.nativeTokenValue);
    const datas = executions.map(p => p.transactionData);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "propose",
      args: [tos, values, datas, description],
      parse: receipt => {
        const event = this.contractWrapper.parseLogs("ProposalCreated", receipt?.logs);
        return {
          id: event[0].args.proposalId,
          receipt
        };
      }
    });
  });

  /**
   * Vote
   *
   * @remarks Vote on an active proposal
   *
   * @example
   * ```javascript
   * // The proposal ID of the proposal you want to vote on
   * const proposalId = "0";
   * // The vote type you want to cast, can be VoteType.Against, VoteType.For, or VoteType.Abstain
   * const voteType = VoteType.For;
   * // The (optional) reason for the vote
   * const reason = "I like this proposal!";
   *
   * await contract.vote(proposalId, voteType, reason);
   * ```
   * @param proposalId - The proposal to cast a vote on.
   * @param voteType - The position the voter is taking on their vote.
   * @param reason - (optional) The reason for the vote.
   */
  vote = /* @__PURE__ */buildTransactionFunction((() => {
    var _this = this;
    return async function (proposalId, voteType) {
      let reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      await _this.ensureExists(proposalId);
      return Transaction.fromContractWrapper({
        contractWrapper: _this.contractWrapper,
        method: "castVoteWithReason",
        args: [proposalId, voteType, reason]
      });
    };
  })());

  /**
   * Execute Proposal
   *
   * @remarks Execute the related transactions for a proposal if the proposal succeeded.
   *
   * @example
   * ```javascript
   * // The proposal ID of the proposal you want to execute
   * const proposalId = "0"
   * await contract.execute(proposalId);
   * ```
   *
   * @param proposalId - The proposal id to execute.
   */
  execute = /* @__PURE__ */buildTransactionFunction(async proposalId => {
    await this.ensureExists(proposalId);
    const proposal = await this.get(proposalId);
    const tos = proposal.executions.map(p => p.toAddress);
    const values = proposal.executions.map(p => p.nativeTokenValue);
    const datas = proposal.executions.map(p => p.transactionData);
    const descriptionHash = utils.id(proposal.description);
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "execute",
      args: [tos, values, datas, descriptionHash]
    });
  });

  /**
   * @internal
   */
  async prepare(method, args, overrides) {
    return Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method,
      args,
      overrides
    });
  }

  /**
   * @internal
   */
  async call(functionName, args, overrides) {
    return this.contractWrapper.call(functionName, args, overrides);
  }
}

export { Vote };
