'use strict';

var ERC20Abi = require('@thirdweb-dev/contracts-js/dist/abis/IERC20.json');
var ethers = require('ethers');
var contractPublisher = require('./contract-publisher-de532850.cjs.prod.js');
var Vote$1 = require('./Vote-1624e0dd.cjs.prod.js');
require('./QueryParams-bf2cbec1.cjs.prod.js');
require('bn.js');
require('zod');
require('tiny-invariant');
require('uuid');
require('@thirdweb-dev/storage');
require('@thirdweb-dev/contracts-js/dist/abis/IERC165.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Metadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20Metadata.json');
require('fast-deep-equal');
require('merkletreejs');
require('@thirdweb-dev/contracts-js/dist/abis/IThirdwebContract.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDelayedRevealDeprecated.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/ContractPublisher.json');
require('@thirdweb-dev/chains');
require('bs58');
require('@thirdweb-dev/contracts-js/dist/abis/TWMultichainRegistryLogic.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDrop.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC20_V2.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC20Permit.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMulticall.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDelayedReveal.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC721_V3.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Enumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721AQueryableUpgradeable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC721Supply.json');
require('@thirdweb-dev/contracts-js/dist/abis/ILazyMint.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC721_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/LazyMintWithTier.json');
require('@thirdweb-dev/contracts-js/dist/abis/SharedMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/zora_IERC721Drop.json');
require('@thirdweb-dev/contracts-js/dist/abis/ILoyaltyCard.json');
require('@thirdweb-dev/contracts-js/dist/abis/INFTMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IBurnableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IClaimableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDrop1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropERC1155_V2.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDropSinglePhase1155_V1.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Supply.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC1155Enumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IMintableERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/ISignatureMintERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IERC2771Context.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAppURI.json');
require('@thirdweb-dev/contracts-js/dist/abis/IContractMetadata.json');
require('@thirdweb-dev/contracts-js/dist/abis/IDirectListings.json');
require('@thirdweb-dev/contracts-js/dist/abis/IEnglishAuctions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IOffers.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPackVRFDirect.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPermissions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPermissionsEnumerable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPlatformFee.json');
require('@thirdweb-dev/contracts-js/dist/abis/IPrimarySale.json');
require('@thirdweb-dev/contracts-js/dist/abis/IRoyalty.json');
require('@thirdweb-dev/contracts-js/dist/abis/Ownable.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAirdropERC20.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAirdropERC721.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAirdropERC1155.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAccountFactoryCore.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAccountPermissions.json');
require('@thirdweb-dev/contracts-js/dist/abis/IAccount.json');
require('ethers/lib/utils');
require('@thirdweb-dev/contracts-js/dist/abis/Forwarder.json');
require('cross-fetch');
require('eventemitter3');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var ERC20Abi__default = /*#__PURE__*/_interopDefault(ERC20Abi);

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
    let contractWrapper = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : new contractPublisher.ContractWrapper(network, address, abi, options, storage);
    this._chainId = chainId;
    this.abi = contractPublisher.AbiSchema.parse(abi || []);
    this.contractWrapper = contractWrapper;
    this.storage = storage;
    this.metadata = new contractPublisher.ContractMetadata(this.contractWrapper, contractPublisher.VoteContractSchema, this.storage);
    this.app = new contractPublisher.ContractAppURI(this.contractWrapper, this.metadata, this.storage);
    this.encoder = new contractPublisher.ContractEncoder(this.contractWrapper);
    this.estimator = new contractPublisher.GasCostEstimator(this.contractWrapper);
    this.events = new contractPublisher.ContractEvents(this.contractWrapper);
    this.interceptor = new contractPublisher.ContractInterceptor(this.contractWrapper);
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
    const proposals = all.filter(p => p.proposalId.eq(ethers.BigNumber.from(proposalId)));
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
      type: Vote$1.VoteType.Against,
      label: "Against",
      count: votes.againstVotes
    }, {
      type: Vote$1.VoteType.For,
      label: "For",
      count: votes.forVotes
    }, {
      type: Vote$1.VoteType.Abstain,
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
    return this.contractWrapper.read("hasVoted", [proposalId, await contractPublisher.resolveAddress(account)]);
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
    const descriptionHash = ethers.utils.id(proposal.description);
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
      displayValue: ethers.utils.formatUnits(balance, 18)
    };
  }

  /**
   * Check the balance of the project wallet in a particular
   * ERC20 token contract
   *
   * @returns - The balance of the project in the native token of the chain
   */
  async balanceOfToken(tokenAddress) {
    const erc20 = new ethers.Contract(await contractPublisher.resolveAddress(tokenAddress), ERC20Abi__default["default"], this.contractWrapper.getProvider());
    return await contractPublisher.fetchCurrencyValue(this.contractWrapper.getProvider(), tokenAddress, await erc20.balanceOf(this.contractWrapper.address));
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
    const votingTokenMetadata = await contractPublisher.fetchCurrencyMetadata(this.contractWrapper.getProvider(), votingTokenAddress);
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
  propose = /* @__PURE__ */contractPublisher.buildTransactionFunction(async (description, executions) => {
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
    return contractPublisher.Transaction.fromContractWrapper({
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
  vote = /* @__PURE__ */contractPublisher.buildTransactionFunction((() => {
    var _this = this;
    return async function (proposalId, voteType) {
      let reason = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
      await _this.ensureExists(proposalId);
      return contractPublisher.Transaction.fromContractWrapper({
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
  execute = /* @__PURE__ */contractPublisher.buildTransactionFunction(async proposalId => {
    await this.ensureExists(proposalId);
    const proposal = await this.get(proposalId);
    const tos = proposal.executions.map(p => p.toAddress);
    const values = proposal.executions.map(p => p.nativeTokenValue);
    const datas = proposal.executions.map(p => p.transactionData);
    const descriptionHash = ethers.utils.id(proposal.description);
    return contractPublisher.Transaction.fromContractWrapper({
      contractWrapper: this.contractWrapper,
      method: "execute",
      args: [tos, values, datas, descriptionHash]
    });
  });

  /**
   * @internal
   */
  async prepare(method, args, overrides) {
    return contractPublisher.Transaction.fromContractWrapper({
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

exports.Vote = Vote;
