import { SmartContract } from "../contracts/smart-contract";
import { AddressOrEns } from "../schema/shared/AddressOrEnsSchema";
import { SDKOptions } from "../schema/sdk-options";
import { ContractPublisher } from "./classes/contract-publisher";
import { MultichainRegistry } from "./classes/multichain-registry";
import { RPCConnectionHandler } from "./classes/rpc-connection-handler";
import type { ContractForPrebuiltContractType, ContractType, PrebuiltContractType } from "../contracts";
import type { NetworkInput, ChainOrRpcUrl } from "./types";
import { UserWallet } from "./wallet/user-wallet";
import { Chain } from "@thirdweb-dev/chains";
import { ContractAddress } from "@thirdweb-dev/generated-abis";
import { IThirdwebStorage, ThirdwebStorage } from "@thirdweb-dev/storage";
import type { ContractInterface, Signer, BaseContract } from "ethers";
import { utils as ethersUtils } from "ethers";
import { BaseContractForAddress } from "../types/contract";
import { ContractVerifier } from "./classes/contract-verifier";
import type { CurrencyValue } from "../types/currency";
import type { NFTContractDeployMetadata, MultiwrapContractDeployMetadata, TokenContractDeployMetadata, MarketplaceContractDeployMetadata, MarketplaceV3ContractDeployMetadata, SplitContractDeployMetadata, VoteContractDeployMetadata, DeployOptions, DeployMetadata, DeployEvent, OpenEditionContractDeployMetadata, AirdropContractDeployMetadata } from "../types/deploy";
import type { ContractWithMetadata } from "../types/registry";
import { ContractRegistry } from "./classes/registry";
import { DeployTransaction, Transaction } from "./classes/transactions";
import { DeploymentTransaction } from "../types/any-evm/deploy-data";
/**
 * The main entry point for the thirdweb SDK
 * @public
 */
export declare class ThirdwebSDK extends RPCConnectionHandler {
    /**
     * Get an instance of the thirdweb SDK based on an AbstractWallet
     *
     * @example
     * ```javascript
     * import { ThirdwebSDK } from "@thirdweb-dev/sdk"
     *
     * const wallet = new AbstractWalletImplementation();
     * const sdk = await ThirdwebSDK.fromWallet(wallet, "mainnet");
     * ```
     *
     * @param wallet - the implementation of the AbstractWallet class to use for signing
     * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
     * @param options - the SDK options to use
     * @param storage - optional storage implementation to use
     * @returns an instance of the SDK
     *
     * @beta
     */
    static fromWallet(wallet: {
        getSigner: () => Promise<Signer>;
    }, network: ChainOrRpcUrl, options?: SDKOptions, storage?: ThirdwebStorage): Promise<ThirdwebSDK>;
    /**
     * Get an instance of the thirdweb SDK based on an existing ethers signer
     *
     * @example
     * ```javascript
     * // get a signer from somewhere (createRandom is being used purely for example purposes)
     * const signer = Wallet.createRandom();
     *
     * // get an instance of the SDK with the signer already setup
     * const sdk = ThirdwebSDK.fromSigner(signer, "mainnet");
     * ```
     *
     * @param signer - a ethers Signer to be used for transactions
     * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
     * @param options - the SDK options to use
     * @param storage - optional storage implementation to use
     * @returns an instance of the SDK
     *
     * @beta
     */
    static fromSigner(signer: Signer, network?: ChainOrRpcUrl, options?: SDKOptions, storage?: ThirdwebStorage): ThirdwebSDK;
    /**
     * Get an instance of the thirdweb SDK based on a private key.
     *
     * @remarks
     * This should only be used for backend services or scripts, with the private key stored in a secure way.
     * **NEVER** expose your private key to the public in any way.
     *
     * @example
     * ```javascript
     * const sdk = ThirdwebSDK.fromPrivateKey("SecretPrivateKey", "mainnet");
     * ```
     *
     * @param privateKey - the private key - **DO NOT EXPOSE THIS TO THE PUBLIC**
     * @param network - the network (chain) to connect to (e.g. "mainnet", "rinkeby", "polygon", "mumbai"...) or a fully formed RPC url
     * @param options - the SDK options to use
     * @param storage - optional storage implementation to use
     * @returns an instance of the SDK
     *
     * @public
     */
    static fromPrivateKey(privateKey: string, network: ChainOrRpcUrl, options?: SDKOptions, storage?: ThirdwebStorage): ThirdwebSDK;
    /**
     * @internal
     * the cache of contracts that we have already seen
     */
    private contractCache;
    /**
     * @internal
     * should never be accessed directly, use {@link ThirdwebSDK.getPublisher} instead
     */
    private _publisher;
    /**
     * Internal handler for uploading and downloading files
     */
    private storageHandler;
    /**
     * New contract deployer
     */
    deployer: ContractDeployer;
    /**
     * Contract verifier
     */
    verifier: ContractVerifier;
    /**
     * The registry of deployed contracts
     */
    multiChainRegistry: MultichainRegistry;
    /**
     * Interact with the connected wallet
     */
    wallet: UserWallet;
    /**
     * Upload and download files from IPFS or from your own storage service
     */
    storage: ThirdwebStorage;
    constructor(network: NetworkInput, options?: SDKOptions, storage?: IThirdwebStorage);
    get auth(): void;
    /**
     * Get an instance of a NFT Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const dropContract = await sdk.getDropContract("0x1234...");
     * + const dropContract = await sdk.getContract("0x1234...", "nft-drop");
     * ```
     */
    getNFTDrop(contractAddress: AddressOrEns): Promise<import("..").NFTDrop>;
    /**
     * Get an instance of a Signature Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const signatureDrop = await sdk.getSignatureDrop("0x1234...");
     * + const signatureDrop = await sdk.getContract("0x1234...", "signature-drop");
     * ```
     */
    getSignatureDrop(contractAddress: AddressOrEns): Promise<import("..").SignatureDrop>;
    /**
     * Get an instance of a NFT Collection Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const signatureDrop = await sdk.getNFTCollection("0x1234...");
     * + const signatureDrop = await sdk.getContract("0x1234...", "nft-collection");
     * ```
     */
    getNFTCollection(contractAddress: AddressOrEns): Promise<import("..").NFTCollection>;
    /**
     * Get an instance of a Edition Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const editionDrop = await sdk.getEditionDrop("0x1234...");
     * + const editionDrop = await sdk.getContract("0x1234...", "edition-drop");
     * ```
     */
    getEditionDrop(contractAddress: AddressOrEns): Promise<import("..").EditionDrop>;
    /**
     * Get an instance of a Edition contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const edition = await sdk.getEdition("0x1234...");
     * + const edition = await sdk.getContract("0x1234...", "edition");
     * ```
     */
    getEdition(contractAddress: AddressOrEns): Promise<import("..").Edition>;
    /**
     * Get an instance of a Token Drop contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const tokenDrop = await sdk.getTokenDrop("0x1234...");
     * + const tokenDrop = await sdk.getContract("0x1234...", "token-drop");
     * ```
     */
    getTokenDrop(contractAddress: AddressOrEns): Promise<import("..").TokenDrop>;
    /**
     * Get an instance of a Token contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const token = await sdk.getToken("0x1234...");
     * + const token = await sdk.getContract("0x1234...", "token");
     * ```
     */
    getToken(contractAddress: AddressOrEns): Promise<import("..").Token>;
    /**
     * Get an instance of a Vote contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const vote = await sdk.getVote("0x1234...");
     * + const vote = await sdk.getContract("0x1234...", "vote");
     * ```
     */
    getVote(contractAddress: AddressOrEns): Promise<import("..").Vote>;
    /**
     * Get an instance of a Split contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const split = await sdk.getSplit("0x1234...");
     * + const split = await sdk.getContract("0x1234...", "split");
     * ```
     */
    getSplit(contractAddress: AddressOrEns): Promise<import("..").Split>;
    /**
     * Get an instance of a Marketplace contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const marketplace = await sdk.getMarketplace("0x1234...");
     * + const marketplace = await sdk.getContract("0x1234...", "marketplace");
     * ```
     */
    getMarketplace(contractAddress: AddressOrEns): Promise<import("..").Marketplace>;
    /**
     * Get an instance of a Marketplace contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const marketplace = await sdk.getMarketplaceV3("0x1234...");
     * + const marketplace = await sdk.getContract("0x1234...", "marketplace-v3");
     * ```
     */
    getMarketplaceV3(contractAddress: AddressOrEns): Promise<import("..").MarketplaceV3>;
    /**
     * Get an instance of a Pack contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const pack = await sdk.getPack("0x1234...");
     * + const pack = await sdk.getContract("0x1234...", "pack");
     * ```
     */
    getPack(contractAddress: AddressOrEns): Promise<import("..").Pack>;
    /**
     * Get an instance of a Pack contract
     * @param contractAddress - the address of the deployed contract
     * @deprecated
     * This method is deprecated and will be removed in a future major version. You should use {@link getContract} instead.
     * ```diff
     * - const multiWrap = await sdk.getMultiwrap("0x1234...");
     * + const multiWrap = await sdk.getContract("0x1234...", "multiwrap");
     * ```
     */
    getMultiwrap(contractAddress: AddressOrEns): Promise<import("..").Multiwrap>;
    /**
     * Get an instance of a Custom ThirdwebContract
     * @param address - the address of the deployed contract
     * @returns the contract
     * @public
     * @example
     * ```javascript
     * const contract = await sdk.getContract("{{contract_address}}");
     * ```
     */
    getContract<TContractAddress extends AddressOrEns | ContractAddress>(address: TContractAddress): Promise<TContractAddress extends ContractAddress ? SmartContract<BaseContractForAddress<TContractAddress>> : SmartContract<BaseContract>>;
    /**
     * Get an instance of a Custom ThirdwebContract
     * @param address - the address of the deployed contract
     * @param contractType - the {@link ContractType} of the contract to load
     * @returns the contract
     * @public
     * @example
     * ```javascript
     * const contract = await sdk.getContract("{{contract_address}}", "nft-drop");
     * ```
     */
    getContract<TContractType extends ContractType>(address: AddressOrEns, contractType: TContractType): Promise<TContractType extends PrebuiltContractType ? ContractForPrebuiltContractType<TContractType> : SmartContract>;
    /**
     * Get an instance of a Custom ThirdwebContract
     * @param address - the address of the deployed contract
     * @param abi - the ABI ({@link ContractInterface}) of the contract to load
     * @returns the contract
     * @public
     * @example
     * ```javascript
     * const contract = await sdk.getContract("{{contract_address}}", ABI);
     * ```
     */
    getContract(address: AddressOrEns, abi: ContractInterface): Promise<SmartContract>;
    /**
     * @internal
     * @deprecated use {@link getContract} directly instead
     */
    getBuiltInContract<TContractType extends PrebuiltContractType>(address: AddressOrEns, contractType: TContractType): Promise<ContractForPrebuiltContractType<TContractType>>;
    /**
     * @param contractAddress - the address of the contract to attempt to resolve the contract type for
     * @returns the {@link ContractType} for the given contract address
     *
     */
    resolveContractType(contractAddress: AddressOrEns): Promise<ContractType>;
    /**
     * Return all the contracts deployed by the specified address
     * @param walletAddress - the deployed address
     * @example
     * ```javascript
     * const contracts = sdk.getContractList("{{wallet_address}}");
     * ```
     */
    getContractList(walletAddress: AddressOrEns): Promise<ContractWithMetadata[]>;
    getMultichainContractList(walletAddress: AddressOrEns, chains?: Chain[]): Promise<ContractWithMetadata[]>;
    /**
     * Update the active signer or provider for all contracts
     * @param network - the new signer or provider
     */
    updateSignerOrProvider(network: NetworkInput): void;
    private updateContractSignerOrProvider;
    /**
     * Get an instance of a Custom contract from a json ABI
     * @param address - the address of the deployed contract
     * @param abi - the JSON abi
     * @returns the contract
     * @beta
     * @example
     * ```javascript
     * // Import your ABI from a JSON file
     * import myABI from "./path/to/myABI.json";
     *
     * const contract = sdk.getContractFromAbi(
     *   "{{contract_address}}",
     *   // Pass in the "abi" field from the JSON file
     *   myABI.abi
     * );
     * ```
     */
    getContractFromAbi(address: AddressOrEns, abi: ContractInterface): Promise<SmartContract<BaseContract>>;
    /**
     * Get the native balance of a given address (wallet or contract)
     * @example
     * ```javascript
     * const balance = await sdk.getBalance("0x...");
     * console.log(balance.displayValue);
     * ```
     * @param address - the address to check the balance for
     */
    getBalance(address: AddressOrEns): Promise<CurrencyValue>;
    /**
     * @internal
     */
    getPublisher(): ContractPublisher;
}
/**
 * Handles deploying new contracts
 * @public
 */
export declare class ContractDeployer extends RPCConnectionHandler {
    /**
     * @internal
     * should never be accessed directly, use {@link ContractDeployer.getFactory} instead
     */
    private _factory;
    /**
     * @internal
     * should never be accessed directly, use {@link ContractDeployer.getRegistry} instead
     */
    private _registry;
    private storage;
    private events;
    private transactionListener;
    constructor(network: NetworkInput, options: SDKOptions, storage: ThirdwebStorage);
    /**
     * Deploys an NFT Collection contract
     *
     * @remarks Deploys an NFT Collection contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployNFTCollection({
     *   name: "My Collection",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployNFTCollection: {
        (metadata: NFTContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: NFTContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new NFTDrop contract
     *
     * @remarks Deploys an NFT Drop contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployNFTDrop({
     *   name: "My Drop",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployNFTDrop: {
        (metadata: NFTContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: NFTContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new LoyaltyCard contract
     *
     * @remarks Deploys a LoyaltyCard contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployLoyaltyCard({
     *   name: "My Loyalty Program",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployLoyaltyCard: {
        (metadata: NFTContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: NFTContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new OpenEditionERC721 contract
     *
     * @remarks Deploys a OpenEdition contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployOpenEdition({
     *   name: "My Open Edition",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployOpenEdition: {
        (metadata: OpenEditionContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: OpenEditionContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new SignatureDrop contract
     *
     * @remarks Deploys a SignatureDrop contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deploySignatureDrop({
     *   name: "My Signature Drop",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deploySignatureDrop: {
        (metadata: NFTContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: NFTContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new Multiwrap contract
     *
     * @remarks Deploys a Multiwrap contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployMultiwrap({
     *   name: "My Multiwrap",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     * @beta
     */
    deployMultiwrap: {
        (metadata: MultiwrapContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: MultiwrapContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new Edition contract
     *
     * @remarks Deploys an Edition contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployEdition({
     *   name: "My Edition",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployEdition: {
        (metadata: NFTContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: NFTContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new EditionDrop contract
     *
     * @remarks Deploys an Edition Drop contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployEditionDrop({
     *   name: "My Edition Drop",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployEditionDrop: {
        (metadata: NFTContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: NFTContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new Token contract
     *
     * @remarks Deploys a Token contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployToken({
     *   name: "My Token",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployToken: {
        (metadata: TokenContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: TokenContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new Token Drop contract
     *
     * @remarks Deploys a Token Drop contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployTokenDrop({
     *   name: "My Token Drop",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployTokenDrop: {
        (metadata: TokenContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: TokenContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new Marketplace contract
     *
     * @remarks Deploys a Marketplace contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployMarketplace({
     *   name: "My Marketplace",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployMarketplace: {
        (metadata: MarketplaceContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: MarketplaceContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new Marketplace-V3 contract
     *
     * @remarks Deploys a Marketplace-V3 contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployMarketplaceV3({
     *   name: "My Marketplace",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployMarketplaceV3: {
        (metadata: MarketplaceV3ContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: MarketplaceV3ContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new Pack contract
     *
     * @remarks Deploys a Pack contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployPack({
     *   name: "My Pack",
     *   primary_sale_recipient: "your-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployPack: {
        (metadata: NFTContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: NFTContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new Split contract
     *
     * @remarks Deploys a Split contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deploySplit({
     *   name: "My Split",
     *   primary_sale_recipient: "your-address",
     *   recipients: [
     *    {
     *      address: "your-address",
     *      sharesBps: 80 * 100, // 80%
     *    },
     *    {
     *      address: "another-address",
     *      sharesBps: 20 * 100, // 20%
     *    },
     *   ],
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deploySplit: {
        (metadata: SplitContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: SplitContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new Vote contract
     *
     * @remarks Deploys an Vote contract and returns the address of the deployed contract
     *
     * @example
     * ```javascript
     * const contractAddress = await sdk.deployer.deployVote({
     *   name: "My Vote",
     *   primary_sale_recipient: "your-address",
     *   voting_token_address: "your-token-contract-address",
     * });
     * ```
     * @param metadata - the contract metadata
     * @returns the address of the deployed contract
     */
    deployVote: {
        (metadata: VoteContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: VoteContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    deployAirdropERC20: {
        (metadata: AirdropContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: AirdropContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    deployAirdropERC721: {
        (metadata: AirdropContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: AirdropContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    deployAirdropERC1155: {
        (metadata: AirdropContractDeployMetadata, options?: DeployOptions | undefined): Promise<string>;
        prepare: (metadata: AirdropContractDeployMetadata, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploys a new contract
     *
     * @internal
     * @param contractType - the type of contract to deploy
     * @param contractMetadata - the metadata to deploy the contract with
     * @param version
     * @returns a promise of the address of the newly deployed contract
     */
    deployBuiltInContract: {
        (contractType: any, contractMetadata: any, version?: string | undefined, options?: DeployOptions | undefined): Promise<string>;
        prepare: (contractType: any, contractMetadata: any, version?: string | undefined, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * @internal
     * @param contractType
     */
    getLatestBuiltInContractVersion<TContractType extends PrebuiltContractType>(contractType: TContractType): Promise<import("ethers").BigNumber>;
    /**
     * Deploy any published contract by its name
     * @param publisherAddress the address of the publisher
     * @param contractName the name of the contract to deploy
     * @param constructorParams the constructor params to pass to the contract
     *
     * @deprecated use deployPublishedContract instead
     */
    deployReleasedContract: {
        (publisherAddress: string, contractName: string, constructorParams: any[], version?: any, options?: DeployOptions | undefined): Promise<string>;
        prepare: (publisherAddress: string, contractName: string, constructorParams: any[], version?: any, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploy any published contract by its name
     * @param publisherAddress the address of the publisher
     * @param contractName the name of the contract to deploy
     * @param constructorParams the constructor params to pass to the contract
     * @param version Optional: the version of the contract to deploy or "latest"
     * @param options Optional: the deploy options
     */
    deployPublishedContract: {
        (publisherAddress: string, contractName: string, constructorParams: any[], version?: any, options?: DeployOptions | undefined): Promise<string>;
        prepare: (publisherAddress: string, contractName: string, constructorParams: any[], version?: any, options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploy any published contract by its name
     * @param contractName the name of the contract to deploy
     * @param constructorParams the constructor params to pass to the contract
     * @param publisherAddress the address of the publisher
     * @param version Optional: the version of the contract to deploy or "latest"
     * @param saltForCreate2 Optional: salt for create2 deployment, will determine deployment address
     */
    deployPublishedContractDeterministic(contractName: string, constructorParams: any[], publisherAddress?: string, contractVersion?: string, saltForCreate2?: string): Promise<string>;
    /**
     * Predict Create2 address of a contract
     * @param contractName the name of the contract
     * @param constructorParams the constructor params to pass to the contract
     * @param publisherAddress the address of the publisher
     * @param version Optional: the version of the contract to deploy or "latest"
     * @param saltForCreate2 Optional: salt for create2 deployment, will determine deployment address
     */
    predictAddressDeterministic(contractName: string, constructorParams: any[], publisherAddress?: string, contractVersion?: string, saltForCreate2?: string): Promise<string>;
    /**
     * Deploy a proxy contract of a given implementation via the given factory
     * @param factoryAddress
     * @param implementationAddress
     * @param implementationAbi
     * @param initializerFunction
     * @param initializerArgs
     */
    deployViaFactory: {
        (factoryAddress: string, implementationAddress: string, implementationAbi: ContractInterface, initializerFunction: string, initializerArgs: any[], saltForProxyDeploy?: string | undefined): Promise<string>;
        prepare: (factoryAddress: string, implementationAddress: string, implementationAbi: ContractInterface, initializerFunction: string, initializerArgs: any[], saltForProxyDeploy?: string | undefined) => Promise<Transaction<string>>;
    };
    /**
     * Deploy a proxy contract of a given implementation directly
     * @param implementationAddress
     * @param implementationAbi
     * @param initializerFunction
     * @param initializerArgs
     */
    deployProxy: {
        (implementationAddress: string, implementationAbi: ContractInterface, initializerFunction: string, initializerArgs: any[]): Promise<string>;
        prepare: (implementationAddress: string, implementationAbi: ContractInterface, initializerFunction: string, initializerArgs: any[]) => Promise<DeployTransaction>;
    };
    /**
     * Deploy a proxy contract of a given implementation via thirdweb's Clone factory
     * @param publishMetadataUri
     * @param constructorParamValues
     * @param deployMetadata
     * @param signer
     * @param options
     */
    deployViaAutoFactory: {
        (publishMetadataUri: string, deployMetadata: DeployMetadata, signer: Signer, initializerFunction: string, paramValues: any[], options?: DeployOptions | undefined): Promise<string>;
        prepare: (publishMetadataUri: string, deployMetadata: DeployMetadata, signer: Signer, initializerFunction: string, paramValues: any[], options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * Deploy a proxy contract of a given implementation via a custom factory
     * @param constructorParamValues
     * @param deployMetadata
     * @param signer
     * @param chainId
     */
    deployViaCustomFactory: {
        (constructorParamValues: any[], deployMetadata: DeployMetadata, signer: Signer, chainId: number): Promise<string>;
        prepare: (constructorParamValues: any[], deployMetadata: DeployMetadata, signer: Signer, chainId: number) => Promise<DeployTransaction>;
    };
    /**
     * @internal
     */
    getRegistry(): Promise<ContractRegistry | undefined>;
    private getFactory;
    updateSignerOrProvider(network: NetworkInput): void;
    private updateContractSignerOrProvider;
    /**
     * @internal
     * @param publishMetadataUri
     * @param constructorParamValues
     * @param options
     */
    deployContractFromUri: {
        (publishMetadataUri: string, constructorParamValues: any[], options?: DeployOptions | undefined): Promise<string>;
        prepare: (publishMetadataUri: string, constructorParamValues: any[], options?: DeployOptions | undefined) => Promise<DeployTransaction>;
    };
    /**
     * @internal
     * @param abi
     * @param bytecode
     * @param constructorParams
     */
    deployContractWithAbi: {
        (abi: ContractInterface, bytecode: ethersUtils.BytesLike | {
            object: string;
        }, constructorParams: any[]): Promise<string>;
        prepare: (abi: ContractInterface, bytecode: ethersUtils.BytesLike | {
            object: string;
        }, constructorParams: any[]) => Promise<DeployTransaction>;
    };
    /**
     * @public
     * @param publishMetadataUri
     * @param options
     */
    getTransactionsForDeploy(publishMetadataUri: string, options?: DeployOptions): Promise<DeploymentTransaction[]>;
    /**
     * Listen to all deploy transactions from this deployer
     * @param listener the listener to add
     */
    addDeployListener(listener: (event: DeployEvent) => void): void;
    /**
     * Remove a deploy listener
     * @param listener the listener to remove
     */
    removeDeployListener(listener: (event: DeployEvent) => void): void;
    /**
     * Remove all deploy listeners
     */
    removeAllDeployListeners(): void;
    private fetchPublishedContractFromPolygon;
    private hasLocalFactory;
}
//# sourceMappingURL=sdk.d.ts.map