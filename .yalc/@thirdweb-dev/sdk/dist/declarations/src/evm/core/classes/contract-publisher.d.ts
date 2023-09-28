import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { AbiFunction, ContractParam, ContractSource, FullPublishMetadata, PreDeployMetadataFetched, ProfileMetadata, PublishedContract, PublishedContractFetched } from "../../schema/contracts/custom";
import { SDKOptions } from "../../schema/sdk-options";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import { NetworkInput } from "../types";
import { RPCConnectionHandler } from "./rpc-connection-handler";
import { Transaction } from "./transactions";
/**
 * Handles publishing contracts (EXPERIMENTAL)
 * @internal
 */
export declare class ContractPublisher extends RPCConnectionHandler {
    private storage;
    private publisher;
    constructor(network: NetworkInput, options: SDKOptions, storage: ThirdwebStorage);
    updateSignerOrProvider(network: NetworkInput): void;
    /**
     * @internal
     * @param metadataUri
     */
    extractConstructorParams(metadataUri: string): Promise<ContractParam[]>;
    /**
     * @internal
     * @param predeployMetadataUri
     */
    extractFunctions(predeployMetadataUri: string): Promise<AbiFunction[]>;
    /**
     * @internal
     * @param predeployUri
     */
    fetchCompilerMetadataFromPredeployURI(predeployUri: string): Promise<PreDeployMetadataFetched>;
    /**
     * @internal
     * @param prepublishUri
     * @param publisherAddress
     */
    fetchPrePublishMetadata(prepublishUri: string, publisherAddress: AddressOrEns): Promise<{
        preDeployMetadata: PreDeployMetadataFetched;
        latestPublishedContractMetadata?: PublishedContractFetched;
    }>;
    /**
     * @internal
     * @param address
     */
    fetchCompilerMetadataFromAddress(address: AddressOrEns): Promise<{
        name: string;
        metadata: Record<string, any>;
        abi: import("zod").objectOutputType<{
            type: import("zod").ZodString;
            name: import("zod").ZodDefault<import("zod").ZodString>;
            inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
            outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">[];
        info: {
            title?: string | undefined;
            author?: string | undefined;
            details?: string | undefined;
            notice?: string | undefined;
        };
        licenses: string[];
        isPartialAbi?: boolean | undefined;
    }>;
    /**
     * @internal
     * Get the full information about a published contract
     * @param contract
     */
    fetchPublishedContractInfo(contract: PublishedContract): Promise<PublishedContractFetched>;
    /**
     * @internal
     * @param publishedMetadataUri
     */
    fetchFullPublishMetadata(publishedMetadataUri: string): Promise<FullPublishMetadata>;
    /**
     * @internal
     * // TODO expose a resolvePublishMetadata(contractAddress, chainId) that handles the dual chain case
     * // TODO will be easy to do with the multichain pattern of 3.0
     * @param compilerMetadataUri
     */
    resolvePublishMetadataFromCompilerMetadata(compilerMetadataUri: string): Promise<FullPublishMetadata[]>;
    /**
     * @internal
     * TODO clean this up (see method above, too)
     */
    resolveContractUriFromAddress(address: AddressOrEns): Promise<string>;
    /**
     * @internal
     * @param address
     */
    fetchContractSourcesFromAddress(address: AddressOrEns): Promise<ContractSource[]>;
    /**
     * @internal
     * @param profileMetadata
     */
    updatePublisherProfile: {
        (profileMetadata: {
            name?: string | undefined;
            bio?: string | undefined;
            avatar?: any;
            website?: string | undefined;
            twitter?: string | undefined;
            telegram?: string | undefined;
            facebook?: string | undefined;
            github?: string | undefined;
            medium?: string | undefined;
            linkedin?: string | undefined;
            reddit?: string | undefined;
            discord?: string | undefined;
        }): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (profileMetadata: {
            name?: string | undefined;
            bio?: string | undefined;
            avatar?: any;
            website?: string | undefined;
            twitter?: string | undefined;
            telegram?: string | undefined;
            facebook?: string | undefined;
            github?: string | undefined;
            medium?: string | undefined;
            linkedin?: string | undefined;
            reddit?: string | undefined;
            discord?: string | undefined;
        }) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    /**
     * @internal
     * @param publisherAddress
     */
    getPublisherProfile(publisherAddress: AddressOrEns): Promise<ProfileMetadata>;
    /**
     * @internal
     * @param publisherAddress
     */
    getAll(publisherAddress: AddressOrEns): Promise<PublishedContract[]>;
    /**
     * @internal
     * @param publisherAddress
     * @param contractId
     */
    getAllVersions(publisherAddress: AddressOrEns, contractId: string): Promise<PublishedContract[]>;
    getVersion(publisherAddress: AddressOrEns, contractId: string, version?: string): Promise<PublishedContract | undefined>;
    getLatest(publisherAddress: AddressOrEns, contractId: string): Promise<PublishedContract | undefined>;
    publish: {
        (predeployUri: string, extraMetadata: import("zod").objectInputType<{
            version: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            displayName: import("zod").ZodOptional<import("zod").ZodString>;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            readme: import("zod").ZodOptional<import("zod").ZodString>;
            license: import("zod").ZodOptional<import("zod").ZodString>;
            changelog: import("zod").ZodOptional<import("zod").ZodString>;
            tags: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            audit: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                data?: any;
            }, {
                name: string;
                data?: any;
            }>]>, import("zod").ZodString]>>>;
            logo: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                data?: any;
            }, {
                name: string;
                data?: any;
            }>]>, import("zod").ZodString]>>>;
            isDeployableViaFactory: import("zod").ZodOptional<import("zod").ZodBoolean>;
            isDeployableViaProxy: import("zod").ZodOptional<import("zod").ZodBoolean>;
            factoryDeploymentData: import("zod").ZodOptional<import("zod").ZodObject<{
                implementationAddresses: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
                implementationInitializerFunction: import("zod").ZodDefault<import("zod").ZodString>;
                customFactoryInput: import("zod").ZodOptional<import("zod").ZodObject<{
                    factoryFunction: import("zod").ZodString;
                    params: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                        name: import("zod").ZodString;
                        type: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        type: string;
                        name: string;
                    }, {
                        type: string;
                        name: string;
                    }>, "many">>;
                    customFactoryAddresses: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    params: {
                        type: string;
                        name: string;
                    }[];
                    factoryFunction: string;
                    customFactoryAddresses: Record<string, string>;
                }, {
                    factoryFunction: string;
                    customFactoryAddresses: Record<string, string>;
                    params?: {
                        type: string;
                        name: string;
                    }[] | undefined;
                }>>;
                factoryAddresses: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }, "strip", import("zod").ZodTypeAny, {
                implementationAddresses: Record<string, string>;
                implementationInitializerFunction: string;
                customFactoryInput?: {
                    params: {
                        type: string;
                        name: string;
                    }[];
                    factoryFunction: string;
                    customFactoryAddresses: Record<string, string>;
                } | undefined;
                factoryAddresses?: Record<string, string> | undefined;
            }, {
                implementationAddresses: Record<string, string>;
                implementationInitializerFunction?: string | undefined;
                customFactoryInput?: {
                    factoryFunction: string;
                    customFactoryAddresses: Record<string, string>;
                    params?: {
                        type: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                factoryAddresses?: Record<string, string> | undefined;
            }>>;
            deployType: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"standard">, import("zod").ZodLiteral<"autoFactory">, import("zod").ZodLiteral<"customFactory">]>>;
            routerType: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"none">, import("zod").ZodLiteral<"plugin">, import("zod").ZodLiteral<"dynamic">]>>;
            defaultExtensions: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                extensionName: import("zod").ZodString;
                extensionVersion: import("zod").ZodDefault<import("zod").ZodString>;
                publisherAddress: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
            }, "strip", import("zod").ZodTypeAny, {
                extensionName: string;
                extensionVersion: string;
                publisherAddress: string;
            }, {
                extensionName: string;
                publisherAddress: string;
                extensionVersion?: string | undefined;
            }>, "many">>;
            networksForDeployment: import("zod").ZodOptional<import("zod").ZodObject<{
                allNetworks: import("zod").ZodOptional<import("zod").ZodBoolean>;
                networksEnabled: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                networksEnabled: number[];
                allNetworks?: boolean | undefined;
            }, {
                allNetworks?: boolean | undefined;
                networksEnabled?: number[] | undefined;
            }>>;
            constructorParams: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                displayName: import("zod").ZodOptional<import("zod").ZodString>;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                defaultValue: import("zod").ZodOptional<import("zod").ZodString>;
                hidden: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                displayName: import("zod").ZodOptional<import("zod").ZodString>;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                defaultValue: import("zod").ZodOptional<import("zod").ZodString>;
                hidden: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                displayName: import("zod").ZodOptional<import("zod").ZodString>;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                defaultValue: import("zod").ZodOptional<import("zod").ZodString>;
                hidden: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, import("zod").ZodAny, "strip">>>>;
            compositeAbi: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">>, "many">>;
                outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">>, "many">>;
                outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">>, "many">>;
                outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">): Promise<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<{
                id: string;
                timestamp: string;
                metadataUri: string;
            }>;
        }>;
        prepare: (predeployUri: string, extraMetadata: import("zod").objectInputType<{
            version: import("zod").ZodEffects<import("zod").ZodString, string, string>;
            displayName: import("zod").ZodOptional<import("zod").ZodString>;
            description: import("zod").ZodOptional<import("zod").ZodString>;
            readme: import("zod").ZodOptional<import("zod").ZodString>;
            license: import("zod").ZodOptional<import("zod").ZodString>;
            changelog: import("zod").ZodOptional<import("zod").ZodString>;
            tags: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>;
            audit: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                data?: any;
            }, {
                name: string;
                data?: any;
            }>]>, import("zod").ZodString]>>>;
            logo: import("zod").ZodOptional<import("zod").ZodNullable<import("zod").ZodUnion<[import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodObject<{
                data: import("zod").ZodUnion<[import("zod").ZodTypeAny, import("zod").ZodString]>;
                name: import("zod").ZodString;
            }, "strip", import("zod").ZodTypeAny, {
                name: string;
                data?: any;
            }, {
                name: string;
                data?: any;
            }>]>, import("zod").ZodString]>>>;
            isDeployableViaFactory: import("zod").ZodOptional<import("zod").ZodBoolean>;
            isDeployableViaProxy: import("zod").ZodOptional<import("zod").ZodBoolean>;
            factoryDeploymentData: import("zod").ZodOptional<import("zod").ZodObject<{
                implementationAddresses: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
                implementationInitializerFunction: import("zod").ZodDefault<import("zod").ZodString>;
                customFactoryInput: import("zod").ZodOptional<import("zod").ZodObject<{
                    factoryFunction: import("zod").ZodString;
                    params: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                        name: import("zod").ZodString;
                        type: import("zod").ZodString;
                    }, "strip", import("zod").ZodTypeAny, {
                        type: string;
                        name: string;
                    }, {
                        type: string;
                        name: string;
                    }>, "many">>;
                    customFactoryAddresses: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>;
                }, "strip", import("zod").ZodTypeAny, {
                    params: {
                        type: string;
                        name: string;
                    }[];
                    factoryFunction: string;
                    customFactoryAddresses: Record<string, string>;
                }, {
                    factoryFunction: string;
                    customFactoryAddresses: Record<string, string>;
                    params?: {
                        type: string;
                        name: string;
                    }[] | undefined;
                }>>;
                factoryAddresses: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodString>>;
            }, "strip", import("zod").ZodTypeAny, {
                implementationAddresses: Record<string, string>;
                implementationInitializerFunction: string;
                customFactoryInput?: {
                    params: {
                        type: string;
                        name: string;
                    }[];
                    factoryFunction: string;
                    customFactoryAddresses: Record<string, string>;
                } | undefined;
                factoryAddresses?: Record<string, string> | undefined;
            }, {
                implementationAddresses: Record<string, string>;
                implementationInitializerFunction?: string | undefined;
                customFactoryInput?: {
                    factoryFunction: string;
                    customFactoryAddresses: Record<string, string>;
                    params?: {
                        type: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                factoryAddresses?: Record<string, string> | undefined;
            }>>;
            deployType: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"standard">, import("zod").ZodLiteral<"autoFactory">, import("zod").ZodLiteral<"customFactory">]>>;
            routerType: import("zod").ZodOptional<import("zod").ZodUnion<[import("zod").ZodLiteral<"none">, import("zod").ZodLiteral<"plugin">, import("zod").ZodLiteral<"dynamic">]>>;
            defaultExtensions: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                extensionName: import("zod").ZodString;
                extensionVersion: import("zod").ZodDefault<import("zod").ZodString>;
                publisherAddress: import("zod").ZodUnion<[import("zod").ZodType<string, import("zod").ZodTypeDef, string>, import("zod").ZodType<`0x${string}`, import("zod").ZodTypeDef, `${string}.eth` | `${string}.cb.id`>]>;
            }, "strip", import("zod").ZodTypeAny, {
                extensionName: string;
                extensionVersion: string;
                publisherAddress: string;
            }, {
                extensionName: string;
                publisherAddress: string;
                extensionVersion?: string | undefined;
            }>, "many">>;
            networksForDeployment: import("zod").ZodOptional<import("zod").ZodObject<{
                allNetworks: import("zod").ZodOptional<import("zod").ZodBoolean>;
                networksEnabled: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodNumber, "many">>;
            }, "strip", import("zod").ZodTypeAny, {
                networksEnabled: number[];
                allNetworks?: boolean | undefined;
            }, {
                allNetworks?: boolean | undefined;
                networksEnabled?: number[] | undefined;
            }>>;
            constructorParams: import("zod").ZodOptional<import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodObject<{
                displayName: import("zod").ZodOptional<import("zod").ZodString>;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                defaultValue: import("zod").ZodOptional<import("zod").ZodString>;
                hidden: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                displayName: import("zod").ZodOptional<import("zod").ZodString>;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                defaultValue: import("zod").ZodOptional<import("zod").ZodString>;
                hidden: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                displayName: import("zod").ZodOptional<import("zod").ZodString>;
                description: import("zod").ZodOptional<import("zod").ZodString>;
                defaultValue: import("zod").ZodOptional<import("zod").ZodString>;
                hidden: import("zod").ZodOptional<import("zod").ZodBoolean>;
            }, import("zod").ZodAny, "strip">>>>;
            compositeAbi: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">>, "many">>;
                outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">>, "many">>;
                outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                type: import("zod").ZodString;
                name: import("zod").ZodDefault<import("zod").ZodString>;
                inputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">>, "many">>;
                outputs: import("zod").ZodDefault<import("zod").ZodArray<import("zod").ZodObject<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                    type: import("zod").ZodString;
                    name: import("zod").ZodDefault<import("zod").ZodString>;
                    stateMutability: import("zod").ZodOptional<import("zod").ZodString>;
                    components: import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodObject<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, "strip", import("zod").ZodAny, import("zod").objectOutputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">, import("zod").objectInputType<{
                        type: import("zod").ZodString;
                        name: import("zod").ZodDefault<import("zod").ZodString>;
                    }, import("zod").ZodAny, "strip">>, "many">>;
                }, import("zod").ZodAny, "strip">>, "many">>;
            }, import("zod").ZodAny, "strip">>, "many">>;
        }, import("zod").ZodAny, "strip">) => Promise<Transaction<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<{
                id: string;
                timestamp: string;
                metadataUri: string;
            }>;
        }>>;
    };
    unpublish: {
        (publisher: string, contractId: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (publisher: string, contractId: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    private toPublishedContract;
}
//# sourceMappingURL=contract-publisher.d.ts.map