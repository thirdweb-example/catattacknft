'use strict';

var QueryParams = require('./QueryParams-012ec906.cjs.dev.js');
var zod = require('zod');
var web3_js = require('@solana/web3.js');
var js = require('@metaplex-foundation/js');
var mplTokenMetadata = require('@metaplex-foundation/mpl-token-metadata');
var anchor = require('@project-serum/anchor');
var _ = require('buffer/');
var BN = require('bn.js');
var splToken = require('@solana/spl-token');
var bs58 = require('bs58');
var EventEmitter = require('eventemitter3');
var invariant = require('tiny-invariant');
var nacl = require('tweetnacl');
var urls = require('./urls-102978cd.cjs.dev.js');
var storage = require('@thirdweb-dev/storage');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var BN__default = /*#__PURE__*/_interopDefault(BN);
var bs58__default = /*#__PURE__*/_interopDefault(bs58);
var EventEmitter__default = /*#__PURE__*/_interopDefault(EventEmitter);
var invariant__default = /*#__PURE__*/_interopDefault(invariant);
var nacl__default = /*#__PURE__*/_interopDefault(nacl);

/**
 * @internal
 */
function toCurrencyValue(amount) {
  return {
    value: amount.basisPoints.toString(),
    displayValue: toDisplayValue(amount)
  };
}
const toDisplayValue = value => {
  if (value.currency.decimals === 0) {
    return `${value.currency.symbol} ${value.basisPoints.toString()}`;
  }
  const power = new BN__default["default"](10).pow(new BN__default["default"](value.currency.decimals));
  const basisPoints = value.basisPoints;
  const {
    div,
    mod
  } = basisPoints.divmod(power);
  const units = `${div.toString()}.${mod.abs().toString(10, value.currency.decimals)}`;
  return `${units}`;
};

/**
 * @internal
 */
const METAPLEX_PROGRAM_ID = "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s";

/**
 * @internal
 */
const CANDYMACHINE_PROGRAM_ID = "cndy3Z4yapfJBmL3ShUp5exZKqR3z33thTzeNMm2gRZ";

/**
 * @internal
 */
const TWREGISTRY_PROGRAM_ID = "twregzGdRmyFeAKjPgbPMkRkzgFNy8BHrB4HzwjyH14";

/**
 * @internal
 */
function enforceCreator() {
  let creators = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  let owner = arguments.length > 1 ? arguments[1] : undefined;
  if (creators.length === 0) {
    // If no creators are specified, we assume the owner is the creator
    creators = creators.concat({
      address: owner.toBase58(),
      share: 100,
      verified: true
    });
  }
  return creators.map(creator => ({
    verified: creator.verified || false,
    address: new web3_js.PublicKey(creator.address),
    share: creator.share
  }));
}

/**
 * @internal
 */
function parseCreators(creators) {
  return creators.map(creator => ({
    ...creator,
    address: creator.address.toBase58()
  }));
}

/**
 * @internal
 */
class NFTHelper {
  constructor(metaplex) {
    this.metaplex = metaplex;
    this.connection = metaplex.connection;
  }
  async getRaw(nftAddress) {
    return await this.metaplex.nfts().findByMint({
      mintAddress: new web3_js.PublicKey(nftAddress)
    });
  }
  async get(nftAddress) {
    const meta = await this.getRaw(nftAddress);
    return await this.toNFTMetadata(meta);
  }
  async transfer(receiverAddress, nftAddress) {
    let quantity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    const result = await this.metaplex.nfts().transfer({
      nftOrSft: {
        address: new web3_js.PublicKey(nftAddress),
        tokenStandard: mplTokenMetadata.TokenStandard.NonFungible
      },
      toOwner: new web3_js.PublicKey(receiverAddress),
      amount: js.token(quantity, 0)
    });
    return {
      signature: result.response.signature
    };
  }
  async creatorsOf(nftAddress) {
    const meta = await this.getRaw(nftAddress);
    return parseCreators(meta.creators);
  }
  async balanceOf(walletAddress, nftAddress) {
    const address = await splToken.getAssociatedTokenAddress(new web3_js.PublicKey(nftAddress), new web3_js.PublicKey(walletAddress));
    try {
      const account = await splToken.getAccount(this.connection, address);
      return Number(account.amount);
    } catch (e) {
      return 0;
    }
  }
  async ownerOf(nftAddress) {
    try {
      const largestAccounts = await this.connection.getTokenLargestAccounts(new web3_js.PublicKey(nftAddress));
      const largestAccountInfo = await this.connection.getParsedAccountInfo(largestAccounts.value[0].address);
      const parsedData = largestAccountInfo?.value?.data;
      const owner = parsedData ? parsedData.parsed.info.owner : undefined;
      return owner;
    } catch (err) {
      return undefined;
    }
  }
  async supplyOf(nftAddress) {
    let originalEdition;
    const originalEditionAccount = await this.metaplex.rpc().getAccount(js.findMasterEditionV2Pda(new web3_js.PublicKey(nftAddress)));
    if (originalEditionAccount.exists) {
      originalEdition = js.toNftOriginalEdition(js.toOriginalEditionAccount(originalEditionAccount));
    } else {
      return "0";
    }

    // Add one to supply to account for the master edition
    return originalEdition.supply.add(new BN__default["default"](1)).toString();
  }
  async totalSupply(collectionAddress) {
    const metadataAddresses = await this.getAllMetadataAddresses(collectionAddress);
    return metadataAddresses.length;
  }
  async getAll(collectionAddress, queryParams) {
    const {
      start,
      count
    } = QueryParams.QueryAllParamsSchema.parse(queryParams);
    const metadataAddresses = await this.getAllMetadataAddresses(collectionAddress);

    // Metaplex GmaBuilder has a weird thing where they always start at 1 not 0
    // so we workaround it by adding an extra address, and shifting the count to get the actual count we want
    const fixedMetadataAddresses = (start === 0 ? [web3_js.PublicKey.default] : []).concat(metadataAddresses);
    const metadataInfos = await js.GmaBuilder.make(this.metaplex, fixedMetadataAddresses).getBetween(start, start === 0 ? count + 1 : start + count);

    // Parse each account into a metadata account
    const metadataParsed = [];
    for (const metadataInfo of metadataInfos) {
      if (metadataInfo.exists) {
        try {
          metadataParsed.push(js.toMetadata(js.toMetadataAccount(metadataInfo)));
        } catch (error) {
          // no-op
        }
      }
    }

    // Finally, fetch the metadata + mint for each in parallel
    const nfts = await Promise.all(metadataParsed.map(m => this.toNFTMetadata(m)));
    return nfts;
  }
  async getTransactions(collectionAddress, options) {
    const collectionKey = new web3_js.PublicKey(collectionAddress);
    // TODO cache signatures <> transactions mapping in memory so pagination doesn't re-request this everytime
    const allSignatures = [];
    if (options) {
      // only fetch the specified options
      allSignatures.push(...(await this.metaplex.connection.getSignaturesForAddress(collectionKey, options)));
    } else {
      // fetch everything
      // This returns the first 1000, so we need to loop through until we run out of signatures to get.
      let signatures = await this.metaplex.connection.getSignaturesForAddress(collectionKey);
      allSignatures.push(...signatures);
      do {
        signatures = await this.metaplex.connection.getSignaturesForAddress(collectionKey, {
          before: signatures[signatures.length - 1]?.signature
        });
        allSignatures.push(...signatures);
      } while (signatures.length > 0);
    }
    let txns = [];
    // TODO RPC's will throttle this, need to do some optimizations here
    const batchSize = 1000; // alchemy RPC batch limit
    for (let i = 0; i < allSignatures.length; i += batchSize) {
      const batch = allSignatures.slice(i, Math.min(allSignatures.length, i + batchSize));
      txns = [...txns, ...(await this.metaplex.connection.getTransactions(batch.map(s => s.signature))).filter(tx => !!tx)];
    }
    return txns;
  }
  async getAllMetadataAddresses(collectionAddress) {
    const txns = (await this.getTransactions(collectionAddress)).reverse();
    return txns.map(tx => {
      if (tx) {
        const programIds = tx.transaction.message.programIds().map(p => p.toString());
        const accountKeys = tx.transaction.message.accountKeys.map(p => p.toString());
        // Only look in transactions that call the Metaplex token metadata program
        if (programIds.includes(METAPLEX_PROGRAM_ID)) {
          // Go through all instructions in a given transaction
          for (const ix of tx.transaction.message.instructions) {
            // Filter for setAndVerify or verify instructions in the Metaplex token metadata program
            if ((ix.data === "K" || ix.data === "S" || ix.data === "X") && accountKeys[ix.programIdIndex] === METAPLEX_PROGRAM_ID) {
              const metadataAddressIndex = ix.accounts[0];
              return tx.transaction.message.accountKeys[metadataAddressIndex];
            }
          }
        } else if (programIds.includes(CANDYMACHINE_PROGRAM_ID)) {
          for (const ix of tx.transaction.message.instructions) {
            // filter for SetCollectionDuringMint from CandyMachineV2
            if (accountKeys[ix.programIdIndex] === CANDYMACHINE_PROGRAM_ID && ix.data === "JEuNFGs7wrU") {
              const metadataAddressIndex = ix.accounts[1];
              return tx.transaction.message.accountKeys[metadataAddressIndex];
            }
          }
        }
      }
    }).filter(a => !!a);
  }
  async toNFTMetadata(meta) {
    let mint = "mint" in meta ? meta.mint : undefined;
    let fullModel = meta;
    if (meta.model === "metadata") {
      fullModel = await this.getRaw(meta.mintAddress.toBase58());
      mint = fullModel.mint;
    }
    if (!mint) {
      throw new Error("No mint found for NFT");
    }
    const [owner, supply] = await Promise.all([this.ownerOf(mint.address.toBase58()), this.supplyOf(mint.address.toBase58())]);
    return this.toNFTMetadataResolved(mint, owner, supply, fullModel);
  }
  async toNFTMetadataResolved(mint, owner, supply, fullModel) {
    return {
      metadata: {
        id: mint.address.toBase58(),
        uri: fullModel.uri,
        name: fullModel.name,
        symbol: fullModel.symbol,
        ...fullModel.json
      },
      owner: owner || web3_js.PublicKey.default.toBase58(),
      supply,
      type: "metaplex"
    };
  }
}

/**
 *
 * {@link UserWallet} events that you can subscribe to using `sdk.wallet.events`.
 *
 * @public
 */

/**
 * Handle and view info about the wallet connected to the SDK.
 *
 * @example
 * ```jsx
 * // Connect a wallet to the SDK, pass in a keypair or browser wallet adapter
 * sdk.wallet.connect(signer)
 *
 * // Then you can read data about the connected wallet
 * const address = sdk.wallet.getAddress();
 * ```
 *
 * @public
 */
class UserWallet {
  events = new EventEmitter__default["default"]();
  get network() {
    const url = new URL(this.metaplex.connection.rpcEndpoint);
    // try this first to avoid hitting `custom` network for alchemy urls
    if (url.hostname.includes("devnet")) {
      return "devnet";
    }
    if (url.hostname.includes("mainnet")) {
      return "mainnet-beta";
    }
    return this.metaplex.cluster;
  }
  constructor(metaplex) {
    this.metaplex = metaplex;
  }

  /**
   * Connect a signer to the SDK. Can pass in a keypair or browser wallet adapter
   * @param wallet - The signer to connect to the SDK
   *
   * @example
   * ```jsx
   * const signer = Keypair.generate();
   * sdk.wallet.connect(signer);
   * ```
   */
  connect(wallet) {
    this.connectToMetaplex(wallet);
    this.events.emit("connected", wallet);
  }

  /**
   * Disconnect the connected wallet from the SDK
   *
   * @example
   * ```jsx
   * sdk.wallet.disconnect();
   * ```
   */
  disconnect() {
    // TODO implement our own read only identity plugin with our own error messages
    this.metaplex.use(js.guestIdentity());
    this.events.emit("disconnected");
  }

  /**
   * Return whether a wallet is connected
   */
  isConnected() {
    return this.metaplex.identity().publicKey !== web3_js.PublicKey.default;
  }

  /**
   * Get the address of the connected wallet
   * @returns the address of the connected wallet
   *
   * @example
   * ```jsx
   * const address = sdk.wallet.getAddress()
   * ```
   */
  getAddress() {
    return this.isConnected() ? this.metaplex.identity().publicKey.toBase58() : undefined;
  }

  /**
   * Get the connected signer
   * @returns the signer
   *
   * @example
   * ```jsx
   * const signer = sdk.wallet.getSigner()
   * ```
   */
  getSigner() {
    return this.metaplex.identity();
  }
  async sign(message) {
    const signer = this.getSigner();
    const encodedMessage = new TextEncoder().encode(message);
    const signedMessage = await signer.signMessage(encodedMessage);
    const signature = bs58__default["default"].encode(signedMessage);
    return signature;
  }
  verifySignature(message, signature, publicKey) {
    return nacl__default["default"].sign.detached.verify(new TextEncoder().encode(message), bs58__default["default"].decode(signature), bs58__default["default"].decode(publicKey));
  }

  /**
   * Get the native balance of the connected wallet
   * @returns the native balance currency value
   *
   * @example
   * ```jsx
   * const balance = await sdk.wallet.getBalance();
   * console.log(balance.displayValue);
   * ```
   */
  async getBalance() {
    const value = await this.metaplex.connection.getBalance(this.metaplex.identity().publicKey);
    return toCurrencyValue(js.amount(value, js.SOL));
  }

  /**
   * Get the all transactions for this program
   * @beta
   */
  async getTransactions(options) {
    const helper = new NFTHelper(this.metaplex);
    return helper.getTransactions(this.metaplex.identity().publicKey.toBase58(), options);
  }
  connectToMetaplex(signer) {
    invariant__default["default"](signer, "Wallet is not connected");
    const plugin = js.isKeypairSigner(signer) ? js.keypairIdentity(web3_js.Keypair.fromSecretKey(signer.secretKey)) : js.isIdentitySigner(signer) ? js.walletAdapterIdentity(signer) : undefined;
    invariant__default["default"](plugin, "Wallet is not compatible with Metaplex");
    this.metaplex.use(plugin);
  }
}

/**
 * @internal
 */
const CommonContractSchema = /* @__PURE__ */(() => zod.z.object({
  name: zod.z.string(),
  symbol: zod.z.string().optional(),
  description: zod.z.string().optional(),
  image: QueryParams.FileOrBufferOrStringSchema.optional(),
  external_link: zod.z.string().url().optional()
}))();

/**
 * @internal
 */
const CommonContractOutputSchema = /* @__PURE__ */(() => CommonContractSchema.extend({
  image: zod.z.string().optional()
}).catchall(zod.z.unknown()))();

/// NFT ///

/**
 * @internal
 */
const CreatorInputSchema = /* @__PURE__ */(() => zod.z.object({
  address: zod.z.string(),
  share: QueryParams.PercentSchema,
  verified: zod.z.boolean().default(false)
}))();

/**
 * @internal
 */
const NFTCollectionMetadataInputSchema = /* @__PURE__ */(() => CommonContractSchema.extend({
  creators: zod.z.array(CreatorInputSchema).default([])
}))();

/**
 * @internal
 */

/// TOKEN ///
/**
 * @internal
 */
const TokenMetadataInputSchema = /* @__PURE__ */(() => CommonContractSchema.extend({
  decimals: zod.z.number().default(9),
  initialSupply: QueryParams.AmountSchema.superRefine((val, context) => {
    // TODO remove this limitation when metaplex fixes https://github.com/metaplex-foundation/js/issues/421
    if (Number(val) > 9999999) {
      context.addIssue({
        code: zod.z.ZodIssueCode.custom,
        message: `Initial supply must less than 10M, additional supply can be minted after deployment.`,
        path: ["initialSupply"]
      });
    }
  })
}))();

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * @internal
 */

/**
 * @internal
 */
const CurrencyValueSchema = /* @__PURE__ */(() => zod.z.object({
  value: zod.z.string(),
  displayValue: zod.z.string()
}))();

/**
 * Metadata for a token
 * @public
 */

/**
 * @internal
 */
const NFTDropInitialConditionsInputSchema = /* @__PURE__ */zod.z.object({
  totalSupply: QueryParams.AmountSchema
});

/**
 * @internal
 */
// TODO: Handle allow lists and end times
const NFTDropUpdatableConditionsInputSchema = /* @__PURE__ */(() => zod.z.object({
  price: QueryParams.AmountSchema.optional(),
  currencyAddress: zod.z.string().nullable().optional(),
  primarySaleRecipient: zod.z.string().optional(),
  sellerFeeBasisPoints: QueryParams.BasisPointsSchema.optional(),
  startTime: zod.z.date().optional(),
  maxClaimable: QueryParams.QuantitySchema.optional()
}))();

/**
 * @internal
 */
const NFTDropUpdatableConditionsOutputSchema = /* @__PURE__ */(() => zod.z.object({
  price: CurrencyValueSchema,
  currencyAddress: zod.z.string().nullable(),
  primarySaleRecipient: zod.z.string(),
  sellerFeeBasisPoints: QueryParams.BasisPointsSchema,
  startTime: zod.z.date().nullable(),
  totalAvailableSupply: zod.z.number(),
  lazyMintedSupply: zod.z.number(),
  claimedSupply: zod.z.number(),
  maxClaimable: QueryParams.QuantitySchema,
  isReadyToClaim: zod.z.boolean()
}))();

/**
 * @internal
 */
const NFTDropContractInputSchema = /* @__PURE__ */NFTCollectionMetadataInputSchema.merge(NFTDropInitialConditionsInputSchema);

/**
 * @public
 */

/**
 * @public
 */

/**
 * @public
 */

/**
 * Deploy new programs
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * // Instantiate the SDK and pass in a signer
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Define the metadata for your program
 * const metadata = {
 *   name: "NFT Contract",
 *   image: readFileSync("files/image.jpg"),
 * };
 *
 * // And deploy a new program from the connected wallet
 * const address = await sdk.deployer.createNftCollection(metadata);
 * ```
 *
 * @public
 */
class Deployer {
  constructor(registry, metaplex, storage) {
    this.metaplex = metaplex;
    this.storage = storage;
    this.regsitry = registry;
  }

  /**
   * Create a new token program
   * @param tokenMetadata - the metadata of the token program
   * @returns - the address of the new token program
   *
   * @example
   * ```jsx
   * const metadata = {
   *   name: "My Token",
   *   symbol: "TKN",
   *   initialSupply: 100,
   * };
   *
   * const address = await sdk.deployer.createToken(metadata);
   * ```
   */
  async createToken(tokenMetadata) {
    const tokenMetadataParsed = await TokenMetadataInputSchema.parseAsync(tokenMetadata);
    const uri = await this.storage.upload(tokenMetadataParsed);
    const mint = web3_js.Keypair.generate();
    const owner = this.metaplex.identity().publicKey;
    const mintTx = await this.metaplex.tokens().builders().createTokenWithMint({
      decimals: tokenMetadataParsed.decimals,
      initialSupply: js.token(tokenMetadataParsed.initialSupply, tokenMetadataParsed.decimals),
      mint
    });
    const name = tokenMetadataParsed.name;
    const data = {
      name,
      symbol: tokenMetadataParsed.symbol || "",
      sellerFeeBasisPoints: 0,
      uri,
      creators: enforceCreator([], this.metaplex.identity().publicKey),
      collection: null,
      uses: null
    };
    const metadata = this.metaplex.nfts().pdas().metadata({
      mint: mint.publicKey
    });
    const metaTx = mplTokenMetadata.createCreateMetadataAccountV3Instruction({
      metadata,
      mint: mint.publicKey,
      mintAuthority: owner,
      payer: owner,
      updateAuthority: owner
    }, {
      createMetadataAccountArgsV3: {
        isMutable: true,
        data,
        collectionDetails: null
      }
    });
    const registryInstructions = await this.regsitry.getAddToRegistryInstructions(mint.publicKey, name, "token");
    await mintTx.add({
      instruction: metaTx,
      signers: [this.metaplex.identity()]
    }).append(...registryInstructions).sendAndConfirm(this.metaplex);
    return mint.publicKey.toBase58();
  }

  /**
   * Create a new NFT collection program
   * @param collectionMetadata - the metadata of the nft collection program
   * @returns - the address of the new nft collection program
   *
   * @example
   * ```jsx
   * const metadata = {
   *   name: "My NFT Collection",
   *   symbol: "NFT",
   * };
   *
   * const address = await sdk.deployer.createNftCollection(metadata);
   * ```
   */
  async createNftCollection(collectionMetadata) {
    const parsed = await NFTCollectionMetadataInputSchema.parseAsync(collectionMetadata);
    const uri = await this.storage.upload(parsed);
    const collectionMint = web3_js.Keypair.generate();
    const name = parsed.name;
    const collectionTx = await this.metaplex.nfts().builders().create({
      useNewMint: collectionMint,
      name,
      symbol: parsed.symbol,
      sellerFeeBasisPoints: 0,
      uri,
      isCollection: true,
      creators: enforceCreator(parsed.creators, this.metaplex.identity().publicKey)
    });
    const registryInstructions = await this.regsitry.getAddToRegistryInstructions(collectionMint.publicKey, name, "nft-collection");
    const result = await collectionTx.append(...registryInstructions).sendAndConfirm(this.metaplex);
    if (!result.response.signature) {
      throw new Error("Transaction failed");
    }
    return collectionMint.publicKey.toBase58();
  }

  /**
   * Create a new NFT drop program
   * @param metadata - the metadata of the nft drop program
   * @returns - the address of the new nft drop program
   *
   * @example
   * ```jsx
   * const metadata = {
   *   name: "My NFT Drop",
   *   symbol: "NFT",
   *   totalSupply: 5,
   * };
   *
   * const address = await sdk.deployer.createNftDrop(metadata);
   * ```
   */
  async createNftDrop(metadata) {
    const collectionInfo = await NFTCollectionMetadataInputSchema.parseAsync(metadata);
    const candyMachineInfo = await NFTDropInitialConditionsInputSchema.parseAsync(metadata);
    const uri = await this.storage.upload(collectionInfo);
    const collectionMint = web3_js.Keypair.generate();
    const name = collectionInfo.name;
    const collectionTx = await this.metaplex.nfts().builders().create({
      useNewMint: collectionMint,
      name,
      symbol: collectionInfo.symbol,
      sellerFeeBasisPoints: 0,
      uri,
      isCollection: true,
      creators: enforceCreator(collectionInfo.creators, this.metaplex.identity().publicKey)
    });
    const candyMachineKeypair = web3_js.Keypair.generate();
    // initialize candy machine with default config
    // final claim conditions can be updated later
    const candyMachineTx = await this.metaplex.candyMachinesV2().builders().create({
      itemsAvailable: js.toBigNumber(candyMachineInfo.totalSupply),
      price: js.sol(0),
      sellerFeeBasisPoints: 0,
      endSettings: {
        endSettingType: 1,
        number: js.toBigNumber(0)
      },
      candyMachine: candyMachineKeypair,
      collection: collectionMint.publicKey,
      creators: enforceCreator(collectionInfo.creators, this.metaplex.identity().publicKey)
    });
    const registryInstructions = await this.regsitry.getAddToRegistryInstructions(candyMachineKeypair.publicKey, name, "nft-drop");

    // Have to split transactions here because it goes over the single transaction size limit
    // We use `signAllTransactions` to sign all the transactions at once so the user only has to sign once
    const block = await this.metaplex.connection.getLatestBlockhash();
    const dropTx = collectionTx.add(candyMachineTx).setFeePayer(this.metaplex.identity());
    const regTransaction = js.TransactionBuilder.make().add(...registryInstructions).setFeePayer(this.metaplex.identity()).toTransaction({
      blockhash: block.blockhash,
      lastValidBlockHeight: block.lastValidBlockHeight
    });
    const dropSigners = [this.metaplex.identity(), ...dropTx.getSigners()];
    const {
      keypairs
    } = js.getSignerHistogram(dropSigners);
    const dropTransaction = dropTx.toTransaction({
      blockhash: block.blockhash,
      lastValidBlockHeight: block.lastValidBlockHeight
    });
    // partially sign with the PDA keypairs
    if (keypairs.length > 0) {
      dropTransaction.partialSign(...keypairs);
    }
    // make the connected wallet sign both candyMachine + registry transactions
    const signedTx = await this.metaplex.identity().signAllTransactions([dropTransaction, regTransaction]);

    // send the signed transactions *sequentially* the drop creation needs to succeed first before adding to registry
    const signatures = [];
    for (const tx of signedTx) {
      signatures.push(await this.metaplex.connection.sendRawTransaction(tx.serialize()));
    }

    // wait for confirmations in parallel
    const confirmations = await Promise.all(signatures.map(sig => {
      return this.metaplex.rpc().confirmTransaction(sig, {
        blockhash: block.blockhash,
        lastValidBlockHeight: block.lastValidBlockHeight
      });
    }));
    if (confirmations.length === 0) {
      throw new Error("Transaction failed");
    }
    return candyMachineKeypair.publicKey.toBase58();
  }
}

async function sendMultipartTransaction(builders, metaplex) {
  const block = await metaplex.connection.getLatestBlockhash();
  const txns = builders.map(builder => {
    const builderTx = builder.setFeePayer(metaplex.identity());
    const dropSigners = [metaplex.identity(), ...builderTx.getSigners()];
    const {
      keypairs
    } = js.getSignerHistogram(dropSigners);
    const tx = builderTx.toTransaction({
      blockhash: block.blockhash,
      lastValidBlockHeight: block.lastValidBlockHeight
    });
    if (keypairs.length > 0) {
      tx.partialSign(...keypairs);
    }
    return tx;
  });

  // make the connected wallet sign all transactions
  const signedTx = await metaplex.identity().signAllTransactions(txns);

  // send the signed transactions in batches
  const batchSize = 200; // sends 200 raw tx in parallel
  const batches = [];
  for (let i = 0; i < signedTx.length; i += batchSize) {
    batches.push(signedTx.slice(i, i + batchSize));
  }
  const signatures = [];
  for (const txs of batches) {
    const signature = await Promise.all(txs.map(tx => metaplex.connection.sendRawTransaction(tx.serialize())));
    signatures.push(signature);
  }

  // wait for confirmations in parallel batches
  const confirmations = [];
  for (let i = 0; i < signatures.length; i += 1) {
    await delay(1000); // add delay to avoid rate limiting
    const sigs = signatures[i];
    const confirmationBatch = await Promise.all(sigs.map(sig => {
      return metaplex.rpc().confirmTransaction(sig, {
        blockhash: block.blockhash,
        lastValidBlockHeight: block.lastValidBlockHeight
      });
    }));
    confirmations.push(...confirmationBatch);
  }
  if (confirmations.length === 0) {
    throw new Error("Transaction failed");
  }
  return signatures.flatMap(sig => sig).map(signature => ({
    signature
  }));
}
async function delay(delayMs) {
  await new Promise(resolve => setTimeout(resolve, delayMs));
}

/**
 * @internal
 */
function getUrlForNetwork(network) {
  switch (network) {
    case "localnet":
      return "http://127.0.0.1:8899";
    case "testnet":
      return web3_js.clusterApiUrl(network);
    case "mainnet-beta":
      return urls.getRpcUrl("solana");
    case "devnet":
      return urls.getRpcUrl("solana-devnet");
    default:
      return network;
  }
}
function getNework(metaplex) {
  const url = new URL(metaplex.connection.rpcEndpoint);
  // try this first to avoid hitting `custom` network for alchemy urls
  if (url.hostname.includes("devnet")) {
    return "devnet";
  }
  if (url.hostname.includes("mainnet")) {
    return "mainnet-beta";
  }
  return metaplex.cluster;
}
function getPublicRpc(metaplex) {
  const url = new URL(metaplex.connection.rpcEndpoint);
  if (url.hostname.includes("devnet")) {
    return "https://api.devnet.solana.com";
  }
  if (url.hostname.includes("mainnet")) {
    return "https://api.mainnet-beta.solana.com";
  }
  return url.toString();
}

/**
 * A collection of associated NFTs
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Get the interface for your NFT collection program
 * const program = await sdk.getProgram("{{program_address}}", "nft-collection");
 * ```
 *
 * @public
 */
class NFTCollection {
  accountType = "nft-collection";
  get network() {
    return getNework(this.metaplex);
  }
  constructor(collectionAddress, metaplex, storage) {
    this.storage = storage;
    this.metaplex = metaplex;
    this.nft = new NFTHelper(metaplex);
    this.publicKey = new web3_js.PublicKey(collectionAddress);
  }

  /**
   * Get the metadata for this program.
   * @returns program metadata
   *
   * @example
   * ```jsx
   * const metadata = await program.getMetadata();
   * console.log(metadata);
   * ```
   */
  async getMetadata() {
    const metadata = await this.getCollection();
    return (await this.nft.toNFTMetadata(metadata)).metadata;
  }

  /**
   * Get the creators of this program.
   * @returns program metadata
   *
   * @example
   * ```jsx
   * const creators = await program.getCreators();
   * console.log(creators);
   * ```
   */
  async getCreators() {
    const metadata = await this.getCollection();
    return parseCreators(metadata.creators);
  }

  /**
   * Get the royalty basis points for this collection
   * @returns royalty basis points
   *
   * @example
   * ```jsx
   * const royalty = await program.getRoyalty();
   * console.log(royalty);
   * ```
   */
  async getRoyalty() {
    const metadata = await this.getCollection();
    return metadata.sellerFeeBasisPoints;
  }

  /**
   * Get the metadata for a specific NFT
   * @param nftAddress - the mint address of the NFT to get
   * @returns the metadata of the NFT
   *
   * @example
   * ```jsx
   * // Specify the mint address of the NFT to get the data of
   * const nftAddress = "...";
   * // And get the data for the NFT
   * const nft = await program.get(nftAddress);
   * console.log(nft.metadata.name);
   * console.log(nft.owner);
   * ```
   */
  async get(nftAddress) {
    return this.nft.get(nftAddress);
  }

  /**
   * Get the metadata for all NFTs on this collection
   * @remarks This method is paginated. Use the `start` and `count` properties of the queryParams object to control pagination. By default the first 100 NFTs are returned
   * @returns metadata for all minted NFTs
   *
   * @example
   * ```jsx
   * // Get all the NFTs that have been minted on this contract
   * const nfts = await program.getAll();
   * console.log(nfts[0].metadata.name);
   * console.log(nfts[0].owner);
   * ```
   */
  async getAll(queryParams) {
    return this.nft.getAll(this.publicKey.toBase58(), queryParams);
  }

  /**
   * Get the all transactions for this program
   * @beta
   */
  async getTransactions(options) {
    return this.nft.getTransactions(this.publicKey.toBase58(), options);
  }

  /**
   * Get the total number of nfts minted on this program
   * @returns the total number of NFTs minted on this program
   *
   * ```jsx
   * const totalSupply = await program.totalSupply();
   * ```
   */
  async totalSupply() {
    return this.nft.totalSupply(this.publicKey.toBase58());
  }

  /**
   * Get the NFT balance of the connected wallet
   * @returns the NFT balance
   *
   * @example
   * ```jsx
   * // The mint address of the NFT to check the balance of
   * const nftAddress = "..."
   * // Get the NFT balance of the currently connected wallet
   * const balance = await program.balance(nftAddress);
   * console.log(balance);
   * ```
   */
  async balance(nftAddress) {
    const address = this.metaplex.identity().publicKey.toBase58();
    return this.balanceOf(address, nftAddress);
  }

  /**
   * Get the NFT balance of the specified wallet
   * @param walletAddress - the wallet address to get the balance of
   * @param nftAddress - the mint address of the NFT to get the balance of
   * @returns the NFT balance
   *
   * @example
   * ```jsx
   * // Specify the address of the wallet to get the balance of
   * const walletAddress = "..."
   * // Specify the mint address of the NFT to get the balance of
   * const nftAddress = "..."
   * const balance = await program.balanceOf(walletAddress, nftAddress);
   * ```
   */
  async balanceOf(walletAddress, nftAddress) {
    return this.nft.balanceOf(walletAddress, nftAddress);
  }

  /**
   * Get the current owner of the given NFT
   * @param nftAddress - the mint address of the NFT to get the owner of
   * @returns the owner of the NFT
   * @example
   * ```jsx
   * const nftAddress = "..."
   * const owner = await program.ownerOf(nftAddress);
   * console.log(owner);
   * ```
   */
  async ownerOf(nftAddress) {
    return this.nft.ownerOf(nftAddress);
  }

  /**
   * Get the supply of NFT editions minted from a specific NFT
   * @param nftAddress - the mint address of the NFT to check the supply of
   * @returns the supply of the specified NFT
   *
   * @example
   * ```jsx
   * const address = "...";
   * const supply = await program.supplyOf(address);
   * ```
   */
  async supplyOf(nftAddress) {
    return this.nft.supplyOf(nftAddress);
  }

  /**
   * Transfer the specified NFTs to another wallet
   * @param receiverAddress - The address to send the tokens to
   * @param nftAddress - The mint address of the NFT to transfer
   * @returns the transaction result of the transfer
   *
   * @example
   * ```jsx
   * // The wallet address to transfer the NFTs to
   * const to = "...";
   * // The mint address of the NFT to transfer
   * const nftAddress = "...";
   * const tx = await program.transfer(to, nftAddress);
   * ```
   */
  async transfer(receiverAddress, nftAddress) {
    return this.nft.transfer(receiverAddress, nftAddress);
  }

  /**
   * Mint NFTs to the connected wallet
   * @param metadata - the metadata of the NFT to mint
   * @returns the mint address of the minted NFT
   *
   * @example
   * ```jsx
   * // Add the metadata of your NFT
   * const metadata = {
   *   name: "NFT #1",
   *   description: "My first NFT!",
   *   image: readFileSync("files/image.jpg"),
   *   properties: [
   *     {
   *        name: "coolness",
   *        value: "very cool!"
   *     }
   *   ]
   * }
   *
   * // Then mint the new NFT and get its address
   * const address = await program.mint(metadata);
   * console.log(address);
   * ```
   */
  async mint(metadata) {
    const address = this.metaplex.identity().publicKey.toBase58();
    return this.mintTo(address, metadata);
  }

  /**
   * Mint an NFT to the specified wallet
   * @param to - the address to mint the NFT to
   * @param metadata - the metadata of the NFT to mint
   * @returns the mint address of the minted NFT
   *
   * @example
   * ```jsx
   * // Specify who to mint the NFT to
   * const to = "...";
   *
   * // Add the metadata of your NFT
   * const metadata = {
   *   name: "NFT #1",
   *   description: "My first NFT!",
   *   image: readFileSync("files/image.jpg"),
   *   properties: [
   *     {
   *        name: "coolness",
   *        value: "very cool!"
   *     }
   *   ]
   * }
   *
   * // Then mint the new NFT and get its address
   * const address = await program.mintTo(to, metadata);
   * console.log(address);
   * ```
   */
  async mintTo(to, metadata) {
    // TODO add options param for initial/maximum supply
    const uri = typeof metadata === "string" ? metadata : await this.storage.upload(metadata);
    const name = typeof metadata === "string" ? "" : metadata.name?.toString() || "";
    const collection = await this.getCollection();
    const {
      nft
    } = await this.metaplex.nfts().create({
      name,
      uri,
      creators: collection.creators,
      sellerFeeBasisPoints: collection.sellerFeeBasisPoints,
      collection: this.publicKey,
      collectionAuthority: this.metaplex.identity(),
      tokenOwner: new web3_js.PublicKey(to),
      // Always sets max supply to unlimited so editions can be minted
      maxSupply: null
    });
    return nft.address.toBase58();
  }

  /**
   * Mint additional supply of an NFT to the connected wallet
   * @param nftAddress - the mint address to mint additional supply to
   * @param amount - the amount of additional NFTs to mint
   * @returns the mint address of the minted NFT
   *
   * @example
   * ```jsx
   * // The address of the already minted NFT
   * const nftAddress = "..."
   * // The amount of additional NFTs to mint
   * const amount = 1;
   * // Mint an additional NFT of the original NFT
   * const addresses = await program.mintAdditionalSupply(nftAddress, amount);
   * ```
   */
  async mintAdditionalSupply(nftAddress, amount) {
    const address = this.metaplex.identity().publicKey.toBase58();
    return this.mintAdditionalSupplyTo(address, nftAddress, amount);
  }

  /**
   * Mint additional supply of an NFT to the specified wallet
   * @param to - the address to mint the NFT to
   * @param nftAddress - the mint address to mint additional supply to
   * @param amount - the amount of NFTs to mint
   * @returns the mint address of the minted NFT
   *
   * @example
   * ```jsx
   * // Specify who to mint the additional NFT to
   * const to = "..."
   * // The address of the already minted NFT
   * const nftAddress = "..."
   * * // The amount of additional NFTs to mint
   * const amount = 1;
   * // Mint an additional NFT of the original NFT
   * const addresses = await program.mintAdditionalSupplyTo(to, nftAddress, amount);
   * ```
   */
  async mintAdditionalSupplyTo(to, nftAddress, amount) {
    // need to coerce amount to number always (to make the Array(<number>) work)
    amount = typeof amount === "string" ? parseInt(amount) : amount;
    // ensure that whatever got passed actually is a number now
    invariant__default["default"](isNaN(amount) === false, "amount must be possible to convert to a number");

    // Better to use metaplex functions directly then our supplyOf function for types/consistency
    const originalEditionAccount = await this.metaplex.rpc().getAccount(js.findMasterEditionV2Pda(new web3_js.PublicKey(nftAddress)));
    const originalEdition = js.toNftOriginalEdition(js.toOriginalEditionAccount(originalEditionAccount));
    const builders = await Promise.all([...Array(amount).keys()].map(async (_, i) => {
      return await this.metaplex.nfts().builders().printNewEdition({
        originalSupply: js.toBigNumber(originalEdition.supply.add(js.toBigNumber(i))),
        originalMint: new web3_js.PublicKey(nftAddress),
        newOwner: new web3_js.PublicKey(to)
      });
    }));
    const mintAddresses = builders.map(builder => builder.getContext().mintSigner.publicKey.toBase58());
    await sendMultipartTransaction(builders, this.metaplex);
    return mintAddresses;
  }

  /**
   * Burn an NFT
   * @param nftAddress - the mint address of the NFT to burn
   * @returns the transaction signature
   *
   * @example
   * ```jsx
   * // Specify the address of the NFT to burn
   * const nftAddress = "..."
   * // And send the actual burn transaction
   * const tx = await program.burn(nftAddress);
   * ```
   */
  async burn(nftAddress) {
    return this.burnBatch([nftAddress]).then(txs => txs[0]);
  }

  /**
   * Burn multiple NFTs
   * @param nftAddresses - the mint addresses of the NFT to burn
   * @returns the transaction signature
   *
   * @example
   * ```jsx
   * // Specify the address of the NFT to burn
   * const nftAddress1 = "..."
   * const nftAddress2 = "..."
   * // And send the actual burn transaction
   * const tx = await program.burnBatch([nftAddress1, nftAddress2]);
   * ```
   */
  async burnBatch(nftAddresses) {
    const txs = [];
    for (const nftAddress of nftAddresses) {
      txs.push(this.metaplex.nfts().builders().delete({
        mintAddress: new web3_js.PublicKey(nftAddress),
        collection: this.publicKey
      }));
    }
    return await sendMultipartTransaction(txs, this.metaplex);
  }

  /**
   * SETTINGS
   */

  /**
   * Update the creators of the collection
   * @param creators - the creators to update
   * @param updateAll - whether or not to retroactively update the creators of all past NFTs
   */
  async updateCreators(creators) {
    let updateAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (updateAll) {
      const txs = [];
      txs.push(this.metaplex.nfts().builders().update({
        nftOrSft: await this.getCollection(),
        creators: enforceCreator(creators, this.metaplex.identity().publicKey)
      }));

      // TODO: Don't use a get all here, all we need is mint addresses :(
      const allNfts = await this.nft.getAll(this.publicKey.toBase58());
      await Promise.all(allNfts.map(async nft => {
        const metaplexNft = await this.metaplex.nfts().findByMint({
          mintAddress: new web3_js.PublicKey(nft.metadata.id)
        });
        txs.push(this.metaplex.nfts().builders().update({
          nftOrSft: metaplexNft,
          creators: enforceCreator(creators, this.metaplex.identity().publicKey)
        }));
      }));
      return await sendMultipartTransaction(txs, this.metaplex);
    } else {
      const tx = await this.metaplex.nfts().update({
        nftOrSft: await this.getCollection(),
        creators: enforceCreator(creators, this.metaplex.identity().publicKey)
      });
      return [{
        signature: tx.response.signature
      }];
    }
  }

  /**
   * Update the royalty basis points of the collection
   * @param sellerFeeBasisPoints - the royalty basis points of the collection
   * @param updateAll - whether or not to retroactively update the royalty basis points of all past NFTs
   */
  async updateRoyalty(sellerFeeBasisPoints) {
    let updateAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (updateAll) {
      const txs = [];
      txs.push(this.metaplex.nfts().builders().update({
        nftOrSft: await this.getCollection(),
        sellerFeeBasisPoints
      }));

      // TODO: Don't use a get all here, all we need is mint addresses :(
      const allNfts = await this.nft.getAll(this.publicKey.toBase58());
      await Promise.all(allNfts.map(async nft => {
        const metaplexNft = await this.metaplex.nfts().findByMint({
          mintAddress: new web3_js.PublicKey(nft.metadata.id)
        });
        txs.push(this.metaplex.nfts().builders().update({
          nftOrSft: metaplexNft,
          sellerFeeBasisPoints
        }));
      }));
      return await sendMultipartTransaction(txs, this.metaplex);
    } else {
      const tx = await this.metaplex.nfts().update({
        nftOrSft: await this.getCollection(),
        sellerFeeBasisPoints
      });
      return [{
        signature: tx.response.signature
      }];
    }
  }
  async getCollection() {
    return await this.metaplex.nfts().findByMint({
      mintAddress: this.publicKey
    });
  }
}

/**
 * Set the claim conditions for your NFT Drop to control how people can claim NFTs
 *
 * @example
 * ```jsx
 * const program = await sdk.getProgram("{{program_address}}", "nft-drop");
 *
 * // Get the data of the claim condition on the drop
 * const claimCondition = await program.claimConditions.get();
 * // View the price of the drop
 * console.log(claimCondition.price);
 * // View the date when the drop will go live
 * console.log(claimCondition.goLiveDate);
 * ```
 *
 * @public
 */
class ClaimConditions {
  constructor(dropAddress, metaplex) {
    this.dropMintAddress = new web3_js.PublicKey(dropAddress);
    this.metaplex = metaplex;
  }

  /**
   * Get the claim condition for this contract
   * @returns - The claim condition data for this NFT Drop
   *
   * @example
   * ```jsx
   * // Get the data of the claim condition on the drop
   * const claimCondition = await program.claimConditions.get();
   * // View the price of the drop
   * console.log(claimCondition.price);
   * // View the date when the drop will go live
   * console.log(claimCondition.goLiveDate);
   * ```
   */
  async get() {
    const candyMachine = await this.getCandyMachine();
    const totalAvailableSupply = candyMachine.itemsAvailable.toNumber();
    const lazyMintedSupply = candyMachine.itemsLoaded.toNumber();
    const goLiveDate = candyMachine.goLiveDate ? new Date(candyMachine.goLiveDate.toNumber() * 1000) : null;
    const isWithinGoLiveDate = goLiveDate ? goLiveDate <= new Date() : true;
    const maxClaimable = candyMachine.endSettings && candyMachine.endSettings.endSettingType === 1 ? candyMachine.endSettings.number.toNumber() : "unlimited";
    const claimedSupply = candyMachine.itemsMinted.toNumber();
    const isBelowMaxClaimable = maxClaimable !== "unlimited" ? claimedSupply < maxClaimable : claimedSupply < lazyMintedSupply;

    // TODO add allowlist/hidden settings here
    return {
      price: toCurrencyValue(candyMachine.price),
      currencyAddress: candyMachine.tokenMintAddress?.toBase58() || null,
      primarySaleRecipient: candyMachine.walletAddress.toBase58(),
      sellerFeeBasisPoints: candyMachine.sellerFeeBasisPoints,
      startTime: goLiveDate,
      totalAvailableSupply,
      lazyMintedSupply,
      claimedSupply,
      maxClaimable: maxClaimable.toString(),
      isReadyToClaim: candyMachine.isFullyLoaded && isWithinGoLiveDate && isBelowMaxClaimable
    };
  }
  async assertCanClaimable(quantity) {
    const conditions = await this.get();
    if (!conditions.isReadyToClaim) {
      if (conditions.lazyMintedSupply < conditions.totalAvailableSupply) {
        throw new Error(`NFT Drop is not fully loaded yet. Only ${conditions.lazyMintedSupply} out of ${conditions.totalAvailableSupply} NFTs have been lazy minted.`);
      }
      if (conditions.maxClaimable === "0") {
        throw new Error(`Max Claimable is 0. No NFTs can be claimed. Set your claim conditions to enable claiming.`);
      }
      const maxClaimable = conditions.maxClaimable === "unlimited" ? null : parseInt(conditions.maxClaimable);
      if (maxClaimable !== null && conditions.claimedSupply + quantity > maxClaimable || conditions.claimedSupply + quantity > conditions.lazyMintedSupply) {
        throw new Error(`Max claimable reached - ${conditions.claimedSupply} out of ${conditions.maxClaimable !== null ? conditions.maxClaimable : conditions.lazyMintedSupply} NFTs have been claimed.`);
      }
      if (conditions.startTime && conditions.startTime > new Date()) {
        throw new Error(`Drop is not to ready be claimed yet, start date is ${conditions.startTime}`);
      }
    }
  }

  /**
   * Set the claim condition settings to configure how people can claim your NFT Drop
   * @param metadata - The settings to use for the claim condition of this program
   * @returns - The transaction result of setting the claim condition
   *
   * @example
   * ```jsx
   * // Specify the settings for your claim condition
   * const claimCondition = {
   *   // The price of each NFT in this drop (in SOL or SPL tokens)
   *   price: 0.1,
   *   // The date for this drop to start
   *   goLiveDate: new Date(),
   *   // ...
   * };
   *
   * const tx = await program.claimConditions.set(claimCondition);
   * ```
   */
  async set(metadata) {
    const parsed = await NFTDropUpdatableConditionsInputSchema.parseAsync(metadata);

    // recipients
    let wallet = parsed.primarySaleRecipient ? new web3_js.PublicKey(parsed.primarySaleRecipient) : undefined;
    const sellerFeeBasisPoints = parsed.sellerFeeBasisPoints;

    // price
    let price = parsed.price ? js.sol(Number(parsed.price)) : undefined;
    let tokenMint = undefined;
    if (parsed.currencyAddress) {
      const fetchedToken = await this.metaplex.tokens().findMintByAddress({
        address: new web3_js.PublicKey(parsed.currencyAddress)
      });
      price = js.token(Number(parsed.price || 0), fetchedToken.decimals);
      tokenMint = fetchedToken.address;
      wallet = this.metaplex.tokens().pdas().associatedTokenAccount({
        mint: tokenMint,
        owner: wallet ? wallet : this.metaplex.identity().publicKey
      });
    }

    // dates
    const goLiveDate = parsed.startTime ? js.toDateTime(parsed.startTime) : undefined;

    // max claimable
    const endSettings = parsed.maxClaimable ? parsed.maxClaimable === "unlimited" ? null : {
      endSettingType: 1,
      number: js.toBigNumber(parsed.maxClaimable)
    } : undefined;

    // TODO add allowlist/hidden settings here

    const data = {
      ...(wallet && {
        wallet
      }),
      ...(tokenMint ? {
        tokenMint
      } :
      // if passing currencyAddress explicitly as null we need to honor that!
      parsed.currencyAddress === null ? {
        tokenMint: null
      } : {}),
      ...(price && {
        price
      }),
      ...(goLiveDate && {
        goLiveDate
      }),
      ...(sellerFeeBasisPoints && {
        sellerFeeBasisPoints
      }),
      ...(endSettings !== undefined && {
        endSettings
      })
    };
    const result = await this.metaplex.candyMachinesV2().update({
      candyMachine: await this.getCandyMachine(),
      ...data
    });
    return {
      signature: result.response.signature
    };
  }
  async getCandyMachine() {
    return this.metaplex.candyMachinesV2().findByAddress({
      address: this.dropMintAddress
    });
  }
}

const LAZY_MINT_BATCH_SIZE = 5;

/**
 * A collection of NFTs that can be lazy minted and claimed
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Get the interface for your NFT Drop program
 * const program = await sdk.getProgram("{{program_address}}", "nft-drop");
 * ```
 *
 * @public
 */
class NFTDrop {
  accountType = "nft-drop";
  get network() {
    return getNework(this.metaplex);
  }

  /**
   * Manage the claim conditions for this drop
   *
   * @example
   * ```jsx
   * // set your claim conditions
   * await program.claimConditions.set({
   *  maxClaimable: 100,
   *  price: 0.5,
   *  startTime: new Date(),
   * });
   *
   * // get your claim conditions
   * const conditions = await program.claimConditions.get();
   * console.log(conditions.maxClaimable);
   * console.log(conditions.claimedSupply);
   * ```
   */

  constructor(dropAddress, metaplex, storage) {
    this.storage = storage;
    this.metaplex = metaplex;
    this.nft = new NFTHelper(metaplex);
    this.publicKey = new web3_js.PublicKey(dropAddress);
    this.claimConditions = new ClaimConditions(dropAddress, metaplex);
  }

  /**
   * Get the metadata for this program.
   * @returns program metadata
   *
   * @example
   * ```jsx
   * const metadata = await program.getMetadata();
   * console.log(metadata.name);
   * ```
   */
  async getMetadata() {
    const info = await this.getCandyMachine();
    invariant__default["default"](info.collectionMintAddress, "Collection mint address not found");
    const metadata = await this.metaplex.nfts().findByMint({
      mintAddress: info.collectionMintAddress
    });
    return (await this.nft.toNFTMetadata(metadata)).metadata;
  }

  /**
   * Get the creators of this program.
   * @returns program metadata
   *
   * @example
   * ```jsx
   * const creators = await program.getCreators();
   * console.log(creators);
   * ```
   */
  async getCreators() {
    const info = await this.getCandyMachine();
    return parseCreators(info.creators);
  }

  /**
   * Get the royalty basis points for this collection
   * @returns royalty basis points
   *
   * @example
   * ```jsx
   * const royalty = await program.getRoyalty();
   * console.log(royalty);
   * ```
   */
  async getRoyalty() {
    const info = await this.getCandyMachine();
    return info.sellerFeeBasisPoints;
  }

  /**
   * Get the metadata for a specific NFT
   * @param nftAddress - the mint address of the NFT to get
   * @returns the metadata of the NFT
   *
   * @example
   * ```jsx
   * // Specify the mint address of the NFT to get the data of
   * const nftAddress = "...";
   * // And get the data for the NFT
   * const nft = await program.get(nftAddress);
   *
   * console.log(nft.name);
   * ```
   */
  async get(nftAddress) {
    return this.nft.get(nftAddress);
  }

  /**
   * Get the metadata for all NFTs on this drop
   * @returns metadata for all minted NFTs
   *
   * @example
   * ```jsx
   * // Get all the NFTs that have been minted on this contract
   * const nfts = await program.getAll();
   *
   * console.log(nfts[0].metadata.name);
   * ```
   */
  async getAll(queryParams) {
    const parsedQueryParams = QueryParams.QueryAllParamsSchema.parse(queryParams);
    const info = await this.getCandyMachine();

    // First, get all the claimed NFTs within the query params range
    const claimedNfts = await this.getAllClaimed(parsedQueryParams);
    const totalClaimed = await this.totalClaimedSupply();

    // Then filter out all claimed NFTs from items to leave only unclaimed remaining
    const unclaimedItems = [];
    info.items.forEach(item => {
      const isClaimed = claimedNfts.filter(nft => nft.metadata.name === item.name && nft.metadata.uri === item.uri).length > 0;
      if (!isClaimed) {
        unclaimedItems.push(item);
      }
    });

    // Only fill the remaining count left over after claimed NFTs with unclaimed NFTs
    const startIndex = Math.max(0, parsedQueryParams.start - totalClaimed);
    const endIndex = Math.max(0, startIndex + parsedQueryParams.count - claimedNfts.length);
    const unclaimedNfts = await Promise.all(unclaimedItems.slice(startIndex, endIndex).map(async item => {
      const metadata = await this.storage.downloadJSON(item.uri);
      return {
        metadata: {
          ...metadata,
          id: web3_js.PublicKey.default.toBase58(),
          uri: item.uri
        },
        owner: web3_js.PublicKey.default.toBase58(),
        supply: "0",
        type: "metaplex"
      };
    }));

    // Always return claimed NFTs first, and then fill remaining query count with unclaimed NFTs
    return [...claimedNfts, ...unclaimedNfts];
  }

  /**
   * Get the all transactions for this program
   * @beta
   */
  async getTransactions(options) {
    return this.nft.getTransactions(this.publicKey.toBase58(), options);
  }

  /**
   * Get the metadata for all the claimed NFTs on this drop
   * @returns metadata for all claimed NFTs
   *
   * @example
   * ```jsx
   * // Get all the NFTs that have already been claimed from this drop
   * const nfts = await program.getAllClaimed();
   * console.log(nfts[0].name)
   * ```
   */
  async getAllClaimed(queryParams) {
    // using getAll from collection here because candy machin findAllMinted doesn't return anything
    const candy = await this.getCandyMachine();
    invariant__default["default"](candy.collectionMintAddress, "Collection mint address not found");
    return await this.nft.getAll(candy.collectionMintAddress.toBase58(), queryParams);
  }

  /**
   * Get the NFT balance of the connected wallet
   * @returns the NFT balance
   *
   * @example
   * ```jsx
   * // The mint address of the NFT to check the balance of
   * const nftAddress = "..."
   * // Get the NFT balance of the currently connected wallet
   * const balance = await program.balance(nftAddress);
   * console.log(balance);
   * ```
   */
  async balance(nftAddress) {
    const address = this.metaplex.identity().publicKey.toBase58();
    return this.balanceOf(address, nftAddress);
  }

  /**
   * Get the NFT balance of the specified wallet
   * @param walletAddress - the wallet address to get the balance of
   * @param nftAddress - the mint address of the NFT to get the balance of
   * @returns the NFT balance
   *
   * @example
   * ```jsx
   * // The address of the wallet to check the balance of
   * const walletAddress = "..."
   * // The mint address of the NFT to check the balance of
   * const nftAddress = "..."
   * // Get the actual NFT balance of the specified wallet
   * const balance = await program.balanceOf(walletAddress, nftAddress);
   * ```
   */
  async balanceOf(walletAddress, nftAddress) {
    return this.nft.balanceOf(walletAddress, nftAddress);
  }

  /**
   * Get the current owner of the given NFT
   * @param nftAddress - the mint address of the NFT to get the owner of
   * @returns the owner of the NFT
   * @example
   * ```jsx
   * const nftAddress = "..."
   * const owner = await program.ownerOf(nftAddress);
   * console.log(owner);
   * ```
   */
  async ownerOf(nftAddress) {
    return this.nft.ownerOf(nftAddress);
  }

  /**
   * Get the total minted supply of this drop
   * @returns the total supply
   *
   * @example
   * ```jsx
   * // Get the total number of NFTs that have been minted on this drop
   * const supply = await program.totalSupply();
   * ```
   */
  async totalSupply() {
    const info = await this.getCandyMachine();
    return info.itemsLoaded.toNumber();
  }

  /**
   * Get the total unclaimed supply of this drop
   * @returns the total supply
   *
   * @example
   * ```jsx
   * // Get the total number of lazy minted NFTs that aren't yet claimed
   * const supply = await program.totalUnclaimedSupply();
   * ```
   */
  async totalUnclaimedSupply() {
    const info = await this.getCandyMachine();
    return Math.min(info.itemsLoaded.toNumber(), info.itemsRemaining.toNumber());
  }

  /**
   * Get the total claimed supply of this drop
   * @returns the total supply
   *
   * @example
   * ```jsx
   * // Get the total number of lazy minted NFTs that have already been claimed
   * const supply = await program.totalClaimedSupply();
   * ```
   */
  async totalClaimedSupply() {
    const info = await this.getCandyMachine();
    return info.itemsMinted.toNumber();
  }

  /**
   * Transfer the specified NFTs to another wallet
   * @param receiverAddress - The address to send the tokens to
   * @param nftAddress - The mint address of the NFT to transfer
   * @returns the transaction result of the transfer
   *
   * @example
   * ```jsx
   * // The wallet address to transfer the NFTs to
   * const to = "...";
   * // The mint address of the NFT to transfer
   * const nftAddress = "...";
   * const tx = await program.transfer(to, nftAddress);
   * ```
   */
  async transfer(receiverAddress, nftAddress) {
    return this.nft.transfer(receiverAddress, nftAddress);
  }

  /**
   * Lazy mint NFTs to be claimed later
   * @param metadatas - The metadata of the NFTs to lazy mint
   * @param options
   * @returns the transaction result of the lazy mint
   *
   * @example
   * ```jsx
   * // Add the metadata of your NFTs
   * const metadata = [
   *   {
   *     name: "NFT #1",
   *     description: "My first NFT!",
   *     image: readFileSync("files/image.jpg"),
   *     properties: [
   *       {
   *         name: "coolness",
   *         value: "very cool!"
   *       }
   *     ]
   *   }
   * ];
   *
   * // And lazy mint NFTs to your program
   * const tx = await program.lazyMint(metadatas);
   * ```
   */
  async lazyMint(metadatas, options) {
    const candyMachine = await this.getCandyMachine();
    const parsedMetadatas = metadatas.map(metadata => QueryParams.CommonNFTInput.parse(metadata));
    const uris = await this.storage.uploadBatch(parsedMetadatas, options);
    const items = uris.map((uri, i) => ({
      name: parsedMetadatas[i].name?.toString() || "",
      uri
    }));

    // turn items into batches of $LAZY_MINT_BATCH_SIZE
    const batches = [];
    while (items.length) {
      batches.push(items.splice(0, LAZY_MINT_BATCH_SIZE));
    }
    const builders = batches.map((batch, i) => this.metaplex.candyMachinesV2().builders().insertItems({
      candyMachine,
      authority: this.metaplex.identity(),
      items: batch,
      index: js.toBigNumber(i * LAZY_MINT_BATCH_SIZE + candyMachine.itemsLoaded.toNumber())
    }));
    return await sendMultipartTransaction(builders, this.metaplex);
  }

  /**
   * Claim an NFT from the drop with connected wallet
   * @returns - the mint address of the claimed NFT
   *
   * @example
   * ```jsx
   * // Specify the quantity of NFTs to claim
   * const quantity = 1;
   * // Claim NFTs and get their mint addresses
   * const claimedAddresses = await program.claim(quantity);
   * console.log("Claimed NFT at address", claimedAddresses[0]);
   * ```
   */
  async claim(amount) {
    const address = this.metaplex.identity().publicKey.toBase58();
    return this.claimTo(address, amount);
  }

  /**
   * Claim an NFT from the drop for the specified wallet
   * @returns - the mint address of the claimed NFT
   *
   * @example
   * ```jsx
   * // Specify which address to claim the NFTs to
   * const receiverAddress =  "...";
   * // Claim the NFTs to the specified wallet and get the mint addresses of the NFTs
   * const claimedAddresses = await program.claimTo(receiverAddress, 1);
   * console.log("Claimed NFT at address", claimedAddresses[0]);
   * ```
   */
  async claimTo(receiverAddress, amount) {
    const candyMachine = await this.getCandyMachine();
    await this.claimConditions.assertCanClaimable(Number(amount));
    const builders = await Promise.all([...Array(Number(amount)).keys()].map(async () => {
      return await this.metaplex.candyMachinesV2().builders().mint({
        candyMachine,
        newOwner: new web3_js.PublicKey(receiverAddress)
      });
    }));
    const mintAddresses = builders.map(builder => builder.getContext().mintSigner.publicKey.toBase58());
    await sendMultipartTransaction(builders, this.metaplex);
    return mintAddresses;
  }

  /**
   * Burn an NFT
   * @param nftAddress - the mint address of the NFT to burn
   * @returns the transaction signature
   *
   * @example
   * ```jsx
   * // Specify the address of the NFT to burn
   * const nftAddress = "..."
   * // And send the actual burn transaction
   * const tx = await program.burn(nftAddress);
   * ```
   */
  async burn(nftAddress) {
    return this.burnBatch([nftAddress]).then(txs => txs[0]);
  }

  /**
   * Burn multiple NFTs
   * @param nftAddresses - the mint addresses of the NFT to burn
   * @returns the transaction signature
   *
   * @example
   * ```jsx
   * // Specify the address of the NFT to burn
   * const nftAddress1 = "..."
   * const nftAddress2 = "..."
   * // And send the actual burn transaction
   * const tx = await program.burnBatch([nftAddress1, nftAddress2]);
   * ```
   */
  async burnBatch(nftAddresses) {
    const candyMachine = await this.getCandyMachine();
    const collection = candyMachine.collectionMintAddress ? candyMachine.collectionMintAddress : undefined;
    const txs = [];
    for (const nftAddress of nftAddresses) {
      txs.push(this.metaplex.nfts().builders().delete({
        mintAddress: new web3_js.PublicKey(nftAddress),
        collection
      }));
    }
    return await sendMultipartTransaction(txs, this.metaplex);
  }

  /**
   * Update the creators of the collection
   * @param creators - the creators to update
   * @param updateAll - whether or not to retroactively update the creators of all past NFTs
   */
  async updateCreators(creators) {
    let updateAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (updateAll) {
      const txs = [];
      const candyMachine = await this.getCandyMachine();
      const collectionAddress = candyMachine.collectionMintAddress;
      invariant__default["default"](collectionAddress, "Collection mint address not found");

      // We need to find the candy machine creator PDA which is auto populated onto NFTs
      // minted with the candy machine, and add it to the list of creators for each NFT
      const candyMachineCreatorPda = js.findCandyMachineV2CreatorPda(candyMachine.address);
      const nftCreators = [{
        address: candyMachineCreatorPda.toBase58(),
        share: 0
      }, ...creators];
      const allNfts = await this.nft.getAll(collectionAddress.toBase58());
      await Promise.all(allNfts.map(async nft => {
        const metaplexNft = await this.metaplex.nfts().findByMint({
          mintAddress: new web3_js.PublicKey(nft.metadata.id)
        });
        txs.push(this.metaplex.nfts().builders().update({
          nftOrSft: metaplexNft,
          creators: enforceCreator(nftCreators, this.metaplex.identity().publicKey)
        }));
      }));
      const results = await sendMultipartTransaction(txs, this.metaplex);
      const tx = await this.metaplex.candyMachinesV2().update({
        candyMachine: await this.getCandyMachine(),
        creators: enforceCreator(creators, this.metaplex.identity().publicKey)
      });
      return [{
        signature: tx.response.signature
      }, ...results];
    } else {
      const tx = await this.metaplex.candyMachinesV2().update({
        candyMachine: await this.getCandyMachine(),
        creators: enforceCreator(creators, this.metaplex.identity().publicKey)
      });
      return [{
        signature: tx.response.signature
      }];
    }
  }

  /**
   * Update the royalty basis points of the collection
   * @param sellerFeeBasisPoints - the royalty basis points of the collection
   * @param updateAll - whether or not to retroactively update the royalty basis points of all past NFTs
   */
  async updateRoyalty(sellerFeeBasisPoints) {
    let updateAll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (updateAll) {
      const txs = [];
      const candyMachine = await this.getCandyMachine();
      const collectionAddress = candyMachine.collectionMintAddress;
      invariant__default["default"](collectionAddress, "Collection mint address not found");
      const allNfts = await this.nft.getAll(collectionAddress.toBase58());
      await Promise.all(allNfts.map(async nft => {
        const metaplexNft = await this.metaplex.nfts().findByMint({
          mintAddress: new web3_js.PublicKey(nft.metadata.id)
        });
        txs.push(this.metaplex.nfts().builders().update({
          nftOrSft: metaplexNft,
          sellerFeeBasisPoints
        }));
      }));
      const results = await sendMultipartTransaction(txs, this.metaplex);
      const tx = await this.metaplex.candyMachinesV2().update({
        candyMachine: await this.getCandyMachine(),
        sellerFeeBasisPoints
      });
      return [{
        signature: tx.response.signature
      }, ...results];
    } else {
      const tx = await this.metaplex.candyMachinesV2().update({
        candyMachine: await this.getCandyMachine(),
        sellerFeeBasisPoints
      });
      return {
        signature: tx.response.signature
      };
    }
  }
  async getCandyMachine() {
    return this.metaplex.candyMachinesV2().findByAddress({
      address: this.publicKey
    });
  }
}

/**
 * Dynamic interface for interacting with Solana programs.
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Get the interface for your program
 * const program = await sdk.getProgram("{{program_address}}");
 * ```
 *
 * @public
 */
class Program {
  accountType = "program";
  constructor(programAddress, idl, connection, wallet) {
    this.publicKey = new web3_js.PublicKey(programAddress);
    this.network = js.resolveClusterFromConnection(connection);
    anchor.setProvider(new anchor.AnchorProvider(connection, wallet.getSigner(), {}));
    this.program = new anchor.Program(idl, programAddress);
    wallet.events.on("connected", () => {
      anchor.setProvider(new anchor.AnchorProvider(connection, wallet.getSigner(), {}));
    });
    wallet.events.on("disconnected", () => {
      // identity will be guest in this case
      anchor.setProvider(new anchor.AnchorProvider(connection, wallet.getSigner(), {}));
    });
  }

  /**
   * Call a function on this program
   * @param functionName - Name of the function to call
   * @param args - Arguments to pass to the function including accounts, data, and signers
   * @returns result of the contract call
   *
   * @example
   * ```jsx
   * const counterAccount = Keypair.generate();
   * await program.call("increment", {
   *   // We need to pass in the public keys of any accounts to interact with
   *   accounts: {
   *     counterAccount: counterAccount.publicKey.toBase58(),
   *   },
   *   // As well as the arguments to pass to the data parameters
   *   data: ["..."],
   *   // And the signer of the account that will be signing the message
   *   signers: [counterAccount]
   * })
   * ```
   */
  async call(functionName, args) {
    return await this.prepareCall(functionName, args).rpc();
  }
  prepareCall(functionName, args) {
    const fn = this.program.methods[functionName];
    if (!fn) {
      throw new Error(`Function ${functionName} not found`);
    }
    const fnWithArgs = args.data ? fn(...args.data) : fn();
    return fnWithArgs.accounts(args.accounts).signers(args.signers || []);
  }

  /**
   * Read account data associated with this program
   * @param accountName - The name of the account type to fetch the data of
   * @param address - The address of the specific account to fetch
   * @returns - The data of the requested account
   *
   * @example
   * ```jsx
   * const accountAddress = "...";
   * // Get the counterAccount at specified address
   * const counterAccount = await program.fetch("counterAccount", accountaddress);
   * ```
   */
  async fetch(accountName, address) {
    const account = this.program.account[accountName];
    if (!account) {
      throw new Error(`Account ${account} not found`);
    }
    return await account.fetch(address);
  }

  /**
   * Read multiple accounts data associated with this program
   * @param accountName - The name of the account type to fetch the data of
   * @param addresses - The addresses of the each account to fetch
   * @returns - The data of the requested accounts
   *
   * @example
   * ```jsx
   * const accountAddresses = ["...", "..."];
   * const counterAccounts = await program.fetchMultiple("counterAccount", accountAddresses);
   * ```
   */
  async fetchMultiple(accountName, addresses) {
    const account = this.program.account[accountName];
    if (!account) {
      throw new Error(`Account ${account} not found`);
    }
    return (await account.fetchMultiple(addresses)).filter(a => a !== null);
  }
}

var program = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Program: Program
});

/**
 * Standard token or cryptocurrency.
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * sdk.wallet.connect(signer);
 *
 * // Get the interface for your token program
 * const program = await sdk.getProgram("{{program_address}}", "token");
 * ```
 *
 * @public
 */
class Token {
  accountType = "token";
  get network() {
    return getNework(this.metaplex);
  }
  constructor(tokenAddress, metaplex, storage) {
    this.storage = storage;
    this.metaplex = metaplex;
    this.connection = metaplex.connection;
    this.publicKey = new web3_js.PublicKey(tokenAddress);
  }

  /**
   * Get the metadata for this token including the name, supply, and decimals.
   * @returns Token metadata
   *
   * @example
   * ```jsx
   * const metadata = await program.getMetadata();
   * console.log(metadata.supply);
   * console.log(metadata.decimals);
   * ```
   */
  async getMetadata() {
    const mint = await this.getMint();
    const meta = await this.metaplex.nfts().findByMint({
      mintAddress: mint.address
    });
    return {
      ...meta.json,
      id: meta.address.toBase58(),
      uri: meta.uri,
      name: meta.name,
      symbol: meta.symbol,
      decimals: mint.decimals,
      supply: toCurrencyValue(mint.supply)
    };
  }

  /**
   * Get the total minted supply of this token
   * @returns the total supply
   *
   * @example
   * ```jsx
   * const supply = await program.totalSupply();
   * ```
   */
  async totalSupply() {
    const info = await this.getMint();
    return toCurrencyValue(info.supply);
  }

  /**
   * Mints the specified amount of new tokens to the connected wallet
   * @param amount - The amount of tokens to mint
   * @returns the transaction result of the mint
   *
   * @example
   * ```jsx
   * // Specify the amount of tokens to mint
   * const amount = 1;
   * // And then you can mint the tokens
   * const tx = await program.mint(amount);
   * ```
   */
  async mint(amount) {
    return this.mintTo(this.metaplex.identity().publicKey.toBase58(), amount);
  }

  /**
   * Mints the specified amount of new tokens to a specific wallet
   * @param amount - The amount of tokens to mint
   * @returns the transaction result of the mint
   *
   * @example
   * ```jsx
   * // Specify the address to mint tokens to
   * const address = "{{wallet_address}}"";
   * // And the amount of tokens to mint
   * const amount = 1;
   * // And then you can make a mint transaction
   * const tx = await program.mintTo(address, 1);
   * ```
   */
  async mintTo(receiverAddress, amount) {
    const amountParsed = QueryParams.AmountSchema.parse(amount);
    const info = await this.getMint();
    const result = await this.metaplex.tokens().mint({
      amount: js.token(amountParsed, info.decimals),
      mintAddress: this.publicKey,
      toOwner: new web3_js.PublicKey(receiverAddress)
    });
    return {
      signature: result.response.signature
    };
  }

  /**
   * Transfer the specified amount of tokens to another wallet
   * @param receiverAddress - The address to send the tokens to
   * @param amount - The amount of tokens to send
   * @returns the transaction result of the transfer
   *
   * @example
   * ```jsx
   * // Specify the address to transfer tokens to
   * const to = "...";
   * // And the amount of tokens to transfer
   * const amount = 1;
   * // And then you can make the transfer transaction
   * const tx = await program.transfer(to, amount);
   * ```
   */
  async transfer(receiverAddress, amount) {
    const info = await this.getMint();
    const result = await this.metaplex.tokens().send({
      mintAddress: this.publicKey,
      amount: js.token(amount, info.decimals),
      toOwner: new web3_js.PublicKey(receiverAddress)
    });
    return {
      signature: result.response.signature
    };
  }

  /**
   * Get the token balance of the connected wallet
   * @returns the currency value balance
   *
   * @example
   * ```jsx
   * const balance = await program.balance();
   * console.log(balance.displayValue);
   * ```
   */
  async balance() {
    return this.balanceOf(this.metaplex.identity().publicKey.toBase58());
  }

  /**
   * Get the token balance of the specified wallet
   * @param walletAddress - the wallet address to get the balance of
   * @returns the currency value balance
   *
   * @example
   * ```jsx
   * const address = "..."
   * const balance = await program.balanceOf(address);
   * console.log(balance.displayValue);
   * ```
   */
  async balanceOf(walletAddress) {
    const mint = await this.getMint();
    const addr = await splToken.getAssociatedTokenAddress(this.publicKey, new web3_js.PublicKey(walletAddress));
    try {
      const account = await splToken.getAccount(this.connection, addr);
      return toCurrencyValue({
        basisPoints: js.toBigNumber(account.amount.toString()),
        currency: {
          symbol: "",
          decimals: mint.decimals,
          namespace: "spl-token"
        }
      });
    } catch (e) {
      throw Error(`No balance found for address '${walletAddress}' - ${e}`);
    }
  }
  async getMint() {
    return await this.metaplex.tokens().findMintByAddress({
      address: this.publicKey
    });
  }
}

var TWRegistryIDL = {
	version: "0.1.0",
	name: "tw_registry",
	instructions: [
		{
			name: "initializeRegistrar",
			accounts: [
				{
					name: "registrarAccount",
					isMut: true,
					isSigner: false
				},
				{
					name: "authority",
					isMut: true,
					isSigner: true
				},
				{
					name: "systemProgram",
					isMut: false,
					isSigner: false
				}
			],
			args: [
			]
		},
		{
			name: "register",
			accounts: [
				{
					name: "registrarAccount",
					isMut: true,
					isSigner: false
				},
				{
					name: "registeredProgramAccount",
					isMut: true,
					isSigner: false
				},
				{
					name: "authority",
					isMut: true,
					isSigner: true
				},
				{
					name: "systemProgram",
					isMut: false,
					isSigner: false
				}
			],
			args: [
				{
					name: "programAddress",
					type: "publicKey"
				},
				{
					name: "programName",
					type: "string"
				},
				{
					name: "programType",
					type: "string"
				}
			]
		},
		{
			name: "setVisibility",
			accounts: [
				{
					name: "registeredProgramAccount",
					isMut: true,
					isSigner: false
				},
				{
					name: "authority",
					isMut: false,
					isSigner: true
				}
			],
			args: [
				{
					name: "programIndex",
					type: "u64"
				},
				{
					name: "visible",
					type: "bool"
				}
			]
		}
	],
	accounts: [
		{
			name: "RegistrarAccount",
			type: {
				kind: "struct",
				fields: [
					{
						name: "count",
						type: "u64"
					},
					{
						name: "authority",
						type: "publicKey"
					},
					{
						name: "bump",
						type: "u8"
					}
				]
			}
		},
		{
			name: "RegisteredProgramAccount",
			type: {
				kind: "struct",
				fields: [
					{
						name: "authority",
						type: "publicKey"
					},
					{
						name: "programAddress",
						type: "publicKey"
					},
					{
						name: "programName",
						type: "string"
					},
					{
						name: "programType",
						type: "string"
					},
					{
						name: "visible",
						type: "bool"
					},
					{
						name: "bump",
						type: "u8"
					}
				]
			}
		}
	],
	events: [
		{
			name: "RegistrarInitializedEvent",
			fields: [
				{
					name: "authority",
					type: "publicKey",
					index: false
				}
			]
		},
		{
			name: "ProgramRegisteredEvent",
			fields: [
				{
					name: "authority",
					type: "publicKey",
					index: false
				},
				{
					name: "programAddress",
					type: "publicKey",
					index: false
				},
				{
					name: "programName",
					type: "string",
					index: false
				},
				{
					name: "programType",
					type: "string",
					index: false
				}
			]
		}
	],
	metadata: {
		address: "twregzGdRmyFeAKjPgbPMkRkzgFNy8BHrB4HzwjyH14"
	}
};

/**
 * @internal
 */
class Registry {
  constructor(metaplex, userWallet) {
    this.metaplex = metaplex;
    this.twRegistry = new Program(TWREGISTRY_PROGRAM_ID, TWRegistryIDL, this.metaplex.connection, userWallet);
  }
  async getProgramType(address) {
    try {
      const candyMachine = await this.metaplex.candyMachinesV2().findByAddress({
        address: new web3_js.PublicKey(address)
      });
      if (candyMachine) {
        return "nft-drop";
      }
    } catch (err) {
      // ignore and try next
    }
    const metadata = await this.metaplex.nfts().findByMint({
      mintAddress: new web3_js.PublicKey(address)
    });
    if (metadata) {
      if (metadata.collectionDetails) {
        return "nft-collection";
      } else {
        if (metadata.tokenStandard === mplTokenMetadata.TokenStandard.Fungible) {
          return "token";
        }
      }
    }
    throw new Error("Unknown account type");
  }
  async getDeployedPrograms(walletAddress) {
    const wallet = new web3_js.PublicKey(walletAddress);
    const count = await this.getTotalProgramsRegistered(wallet);
    const programAddresses = [];
    for (let i = 0; i < count; i++) {
      programAddresses.push(this.getRegisteredProgramAddress(wallet, i).toBase58());
    }
    const programsRaw = await this.twRegistry.fetchMultiple("registeredProgramAccount", programAddresses);
    return programsRaw.map(raw => this.toRegisteredProgram(raw));
  }
  async getTotalProgramsRegistered(wallet) {
    const accountExists = await this.registrarAccountExists(wallet);
    if (!accountExists) {
      return 0;
    }
    const registrarPda = this.getRegistrarAddress(wallet);
    const data = await this.twRegistry.fetch("registrarAccount", registrarPda.toBase58());
    return data.count.toNumber();
  }
  async getProgramAt(walletAddress, index) {
    const wallet = new web3_js.PublicKey(walletAddress);
    const pda = this.getRegisteredProgramAddress(wallet, index);
    const data = await this.twRegistry.fetch("registeredProgramAccount", pda.toBase58());
    return this.toRegisteredProgram(data);
  }
  getRegistrarAddress(wallet) {
    return js.Pda.find(new web3_js.PublicKey(TWREGISTRY_PROGRAM_ID), [_.Buffer.from("registrar", "utf8"), wallet.toBuffer()]);
  }
  getRegisteredProgramAddress(wallet, index) {
    return js.Pda.find(new web3_js.PublicKey(TWREGISTRY_PROGRAM_ID), [_.Buffer.from("registered_program"), wallet.toBuffer(), _.Buffer.from(index.toString())]);
  }

  /**
   * @internal
   */
  async getAddToRegistryInstructions(programToAdd, programName, programType) {
    const wallet = this.metaplex.identity().publicKey;
    const instructions = [];
    const registrarAccountExists = await this.registrarAccountExists(wallet);
    if (!registrarAccountExists) {
      instructions.push({
        instruction: (await this.getInitializeRegistrarTransaction(wallet)).instructions[0],
        signers: [this.metaplex.identity()]
      });
    }
    instructions.push({
      instruction: (await this.getRegisterProgramTransaction(wallet, programToAdd, programName, programType)).instructions[0],
      signers: [this.metaplex.identity()]
    });
    return instructions;
  }
  async getInitializeRegistrarTransaction(wallet) {
    const registrarPda = this.getRegistrarAddress(wallet);
    return this.twRegistry.prepareCall("initializeRegistrar", {
      accounts: {
        authority: wallet.toBase58(),
        registrarAccount: registrarPda.toBase58()
      }
    }).transaction();
  }
  async getRegisterProgramTransaction(wallet, programAddress, programName, programType) {
    const registrarPda = this.getRegistrarAddress(wallet);
    const registeredProgramAddress = this.getRegisteredProgramAddress(wallet, await this.getTotalProgramsRegistered(wallet));
    return this.twRegistry.prepareCall("register", {
      accounts: {
        authority: wallet.toBase58(),
        registrarAccount: registrarPda.toBase58(),
        registeredProgramAccount: registeredProgramAddress.toBase58()
      },
      data: [programAddress, programName, programType]
    }).transaction();
  }
  async registrarAccountExists(wallet) {
    const registrarPda = this.getRegistrarAddress(wallet);
    const account = await this.metaplex.rpc().getAccount(registrarPda);
    return account.exists;
  }
  getDropForCollection(candyMachines, meta) {
    return candyMachines.find(candyMachine => candyMachine.collectionMintAddress?.toBase58() === meta.mintAddress.toBase58());
  }

  // TODO probably don't need this anymore, rely on registry instead
  async getOwnedTokenAccounts(walletAddress) {
    const mints = await this.getOwnedTokenAddreses(walletAddress);
    const metadatas = await this.metaplex.nfts().findAllByMintList({
      mints
    });
    const candyMachines = await this.metaplex.candyMachinesV2().findAllBy({
      type: "authority",
      publicKey: new web3_js.PublicKey(walletAddress)
    });
    return metadatas.map(mintMetadata => {
      const meta = mintMetadata;
      if (!meta) {
        return undefined;
      }
      if (meta?.collectionDetails) {
        // check if it's part of a candy machine
        const drop = this.getDropForCollection(candyMachines, meta);
        if (drop) {
          return {
            type: "nft-drop",
            address: drop.address.toBase58(),
            name: meta.name
          };
        } else {
          return {
            type: "nft-collection",
            address: meta.mintAddress.toBase58(),
            name: meta.name
          };
        }
      } else {
        if (meta.tokenStandard === mplTokenMetadata.TokenStandard.Fungible) {
          return {
            type: "token",
            address: meta.mintAddress.toBase58(),
            name: meta.name
          };
        }
      }
    }).filter(account => account !== undefined);
  }
  async getOwnedTokenAddreses(walletAddress) {
    return await new js.TokenGpaBuilder(this.metaplex).selectMint().whereOwner(new web3_js.PublicKey(walletAddress)).getDataAsPublicKeys();
  }
  toRegisteredProgram(data) {
    return {
      deployer: data.authority.toBase58(),
      programAddress: data.programAddress.toBase58(),
      programName: data.programName.toString(),
      programType: data.programType.toString(),
      visible: data.visible
    };
  }
}

/**
 * The main entry-point for the thirdweb Solana SDK.
 *
 * @example
 * ```jsx
 * import { ThirdwebSDK } from "@thirdweb-dev/sdk/solana";
 *
 * // Create SDK on specified network, and then pass a signer
 * const sdk = ThirdwebSDK.fromNetwork("devnet");
 * // Signer can be a keypair or browser wallet adapter
 * sdk.wallet.connect(signer);
 * ```
 *
 * @public
 */
class ThirdwebSDK {
  /**
   * Create a new SDK instance for the specified network
   * @param network - The network to connect to
   * @param storage - The storage provider to use or IPFS by default
   * @returns an SDK instance
   */
  static fromNetwork(network, storage) {
    return new ThirdwebSDK(new web3_js.Connection(getUrlForNetwork(network), {
      disableRetryOnRateLimit: true,
      commitment: "confirmed"
    }), storage);
  }

  /**
   * Create a new SDK instance connected with the given private key
   * @param network - The network to connect to
   * @param privateKey - The private key to use
   * @param storage - The storage provider to use or IPFS by default
   * @returns an SDK instance
   */
  static fromPrivateKey(network, privateKey, storage) {
    const sdk = ThirdwebSDK.fromNetwork(network, storage);
    const keypair = web3_js.Keypair.fromSecretKey(bs58__default["default"].decode(privateKey));
    sdk.wallet.connect(keypair);
    return sdk;
  }

  /**
   * Handles getting data about accounts and programs associated with a wallet
   */

  /**
   * Deploy new programs
   */

  /**
   * Manage and get info about the connected wallet
   */

  /**
   * The currently connected network
   */
  get network() {
    const url = new URL(this.connection.rpcEndpoint);
    // try this first to avoid hitting `custom` network for alchemy urls
    if (url.hostname.includes("devnet")) {
      return "devnet";
    }
    if (url.hostname.includes("mainnet")) {
      return "mainnet-beta";
    }
    return this.metaplex.cluster;
  }
  constructor(connection) {
    let storage$1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new storage.ThirdwebStorage({
      uploader: new storage.IpfsUploader({
        uploadWithGatewayUrl: true
      })
    });
    this.connection = connection;
    this.storage = storage$1;
    this.metaplex = js.Metaplex.make(this.connection);
    this.wallet = new UserWallet(this.metaplex);
    this.registry = new Registry(this.metaplex, this.wallet);
    this.deployer = new Deployer(this.registry, this.metaplex, this.storage);
  }
  get auth() {
    throw new Error(`The sdk.auth namespace has been moved to the @thirdweb-dev/auth package and is no longer available after @thirdweb-dev/sdk >= 3.7.0.
      Please visit https://portal.thirdweb.com/auth for instructions on how to switch to using the new auth package (@thirdweb-dev/auth@3.0.0).

      If you still want to use the old @thirdweb-dev/auth@2.0.0 package, you can downgrade the SDK to version 3.6.0.`);
  }

  /**
   * Get an SDK interface for an NFT Collection program
   * @param address - Address of the program
   * @returns SDK interface for the program
   */
  async getNFTCollection(address) {
    return this.getProgram(address, "nft-collection");
  }

  /**
   * Get an SDK interface for an NFT Drop program
   * @param address - Address of the program
   * @returns SDK interface for the program
   */
  async getNFTDrop(address) {
    return this.getProgram(address, "nft-drop");
  }

  /**
   * Get an SDK interface for an Token program
   * @param address - Address of the program
   * @returns SDK interface for the program
   */
  async getToken(address) {
    return this.getProgram(address, "token");
  }

  /**
   * Get an SDK interface for a deployed program
   * @param address - Address of the program
   * @returns SDK interface for the program
   *
   * @example
   * ```jsx
   * // Get the interface for your anchor program
   * const program = await sdk.getProgram("{{program_address}}");
   * ```
   */

  /**
   * Get an SDK interface for a deployed program
   * @param address - Address of the program
   * @param programType - the type of program
   * @returns SDK interface for the program
   *
   * @example
   * ```jsx
   * // Get the interface a given program type
   * const program = await sdk.getProgram("{{program_address}}", "token");
   * ```
   */

  /**
   * Get an SDK interface for a deployed program
   * @param address - Address of the program
   * @param Idl - the IDL of the program
   * @returns SDK interface for the program
   *
   * @example
   * ```jsx
   * // Get the interface for your anchor program
   * const program = await sdk.getProgram("{{program_address}}", Idl);
   * ```
   */

  async getProgram(address, programTypeOrIdl) {
    // if we have a programType or IDL
    if (programTypeOrIdl) {
      // if it's a prebuilt program type
      if (typeof programTypeOrIdl === "string") {
        switch (programTypeOrIdl) {
          case "nft-collection":
            return new NFTCollection(address, this.metaplex, this.storage);
          case "nft-drop":
            return new NFTDrop(address, this.metaplex, this.storage);
          case "token":
            return new Token(address, this.metaplex, this.storage);
          default:
            throw new Error("Invalid program type");
        }
      }
      // otherwise, it's an IDL, so return a program with that IDL
      return this.getProgramWithIdl(address, programTypeOrIdl);
    }
    const anchor = await Promise.resolve().then(function () { return /*#__PURE__*/_interopNamespace(require('@project-serum/anchor')); });
    const idl = await anchor.Program.fetchIdl(address, new anchor.AnchorProvider(this.connection, this.metaplex.identity(), {}));
    if (!idl) {
      throw new Error(`Could not fetch IDL for program at address '${address}'`);
    }
    return this.getProgramWithIdl(address, idl);
  }

  /**
   * Get an SDK interface for a deployed program
   * @param address - Address of the program
   * @param idl - The IDL of the program
   * @returns SDK interface for the program
   *
   * @example
   * ```jsx
   * import idl from "path/to/idl.json"
   *
   * // Alternatively, you can pass in your own IDL
   * const program = await sdk.getProgramWithIdl(address, idl);
   * ```
   */
  async getProgramWithIdl(address, idl) {
    const program$1 = await Promise.resolve().then(function () { return program; });
    return new program$1.Program(address, idl, this.connection, this.wallet);
  }
}

exports.CommonContractOutputSchema = CommonContractOutputSchema;
exports.CommonContractSchema = CommonContractSchema;
exports.CreatorInputSchema = CreatorInputSchema;
exports.Deployer = Deployer;
exports.NFTCollection = NFTCollection;
exports.NFTCollectionMetadataInputSchema = NFTCollectionMetadataInputSchema;
exports.NFTDrop = NFTDrop;
exports.NFTDropContractInputSchema = NFTDropContractInputSchema;
exports.NFTDropInitialConditionsInputSchema = NFTDropInitialConditionsInputSchema;
exports.NFTDropUpdatableConditionsInputSchema = NFTDropUpdatableConditionsInputSchema;
exports.NFTDropUpdatableConditionsOutputSchema = NFTDropUpdatableConditionsOutputSchema;
exports.Program = Program;
exports.ThirdwebSDK = ThirdwebSDK;
exports.Token = Token;
exports.TokenMetadataInputSchema = TokenMetadataInputSchema;
exports.UserWallet = UserWallet;
exports.getNework = getNework;
exports.getPublicRpc = getPublicRpc;
exports.getUrlForNetwork = getUrlForNetwork;
