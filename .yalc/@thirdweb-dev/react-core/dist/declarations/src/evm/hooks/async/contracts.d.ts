import { RequiredParam } from "../../../core/query-utils/required-param";
import { ContractAddress } from "../../types";
import { UseMutationResult, UseQueryResult } from "@tanstack/react-query";
import type { ContractEvent, ContractForPrebuiltContractType, ContractType, EventQueryOptions, PrebuiltContractType, SmartContract, SUPPORTED_CHAIN_ID, ThirdwebSDK, ValidContractInstance, BaseContractForAddress, PublishedMetadata } from "@thirdweb-dev/sdk";
import type { CallOverrides, ContractInterface, providers } from "ethers";
import { ContractAddress as GeneratedContractAddress } from "@thirdweb-dev/generated-abis";
declare function fetchContractType(contractAddress: RequiredParam<ContractAddress>, sdk: RequiredParam<ThirdwebSDK>): Promise<"split" | "edition-drop" | "edition" | "marketplace" | "marketplace-v3" | "multiwrap" | "nft-collection" | "nft-drop" | "pack" | "signature-drop" | "token-drop" | "token" | "vote" | "custom" | null>;
export declare function useContractType(contractAddress: RequiredParam<ContractAddress>): UseQueryResult<"split" | "edition-drop" | "edition" | "marketplace" | "marketplace-v3" | "multiwrap" | "nft-collection" | "nft-drop" | "pack" | "signature-drop" | "token-drop" | "token" | "vote" | "custom" | null, unknown>;
export declare const contractType: {
    cacheKey: (contractAddress: RequiredParam<ContractAddress>, chainId: RequiredParam<SUPPORTED_CHAIN_ID>) => import("@tanstack/react-query").QueryKey;
    useQuery: typeof useContractType;
    fetchQuery: typeof fetchContractType;
};
declare function fetchCompilerMetadata(contractAddress: RequiredParam<ContractAddress>, sdk: RequiredParam<ThirdwebSDK>): Promise<PublishedMetadata> | null;
export declare function useCompilerMetadata(contractAddress: RequiredParam<ContractAddress>): UseQueryResult<PublishedMetadata | null>;
export declare const compilerMetadata: {
    cacheKey: (contractAddress: RequiredParam<ContractAddress>, chainId: RequiredParam<SUPPORTED_CHAIN_ID>) => import("@tanstack/react-query").QueryKey;
    useQuery: typeof useCompilerMetadata;
    fetchQuery: typeof fetchCompilerMetadata;
};
export type UseContractResult<TContract extends ValidContractInstance = SmartContract> = UseQueryResult<TContract | undefined> & {
    contract: TContract | undefined;
};
export declare function useContract<TContractAddress extends ContractAddress | GeneratedContractAddress>(contractAddress: RequiredParam<TContractAddress>): UseContractResult<TContractAddress extends GeneratedContractAddress ? SmartContract<BaseContractForAddress<TContractAddress>> : SmartContract>;
/**
 * Use this resolve a contract address to a smart contract instance.
 *
 * @example
 * ```javascript
 * const { contract, isLoading, error } = useContract("{{contract_address}}");
 * ```
 *
 * @param contractAddress - the address of the deployed contract
 * @returns a response object that includes the contract once it is resolved
 * @see {@link https://portal.thirdweb.com/react/react.usecontract?utm_source=sdk | Documentation}
 * @public
 */
export declare function useContract(contractAddress: RequiredParam<ContractAddress>): UseContractResult<SmartContract>;
/**
 * Use this resolve a contract address to a smart contract instance.
 *
 * @example
 * ```javascript
 * const { contract, isLoading, error } = useContract("{{contract_address}}", "nft-drop");
 * ```
 *
 * @param contractAddress - the address of the deployed contract
 * @param _contractType - the type of the contract
 * @returns a response object that includes the contract once it is resolved
 * @see {@link https://portal.thirdweb.com/react/react.usecontract?utm_source=sdk | Documentation}
 * @public
 */
export declare function useContract<TContractType extends ContractType>(contractAddress: RequiredParam<ContractAddress>, _contractType: TContractType): UseContractResult<TContractType extends PrebuiltContractType ? ContractForPrebuiltContractType<TContractType> : SmartContract>;
/**
 * Use this resolve a contract address to a smart contract instance.
 *
 * @example
 * ```javascript
 * const { contract, isLoading, error } = useContract("{{contract_address}}", ABI);
 * ```
 *
 * @param contractAddress - the address of the deployed contract
 * @param _abi - the ABI of the contract to use
 * @returns a response object that includes the contract once it is resolved
 * @see {@link https://portal.thirdweb.com/react/react.usecontract?utm_source=sdk | Documentation}
 * @public
 */
export declare function useContract(contractAddress: RequiredParam<ContractAddress>, _abi: ContractInterface): UseContractResult<SmartContract>;
/**
 * Get the metadata of this contract
 *
 * @example
 * ```javascript
 * const { data: contractMetadata, isLoading } = useContractMetadata(contract);
 * ```
 *
 * @param contract - the {@link ValidContractInstance} instance of the contract to get the metadata for
 * @returns a response object that includes the contract metadata of the deployed contract
 * @twfeature ContractMetadata
 * @beta
 */
export declare function useContractMetadata<TContract extends ValidContractInstance>(contract: RequiredParam<TContract>): UseQueryResult<RequiredParam<TContract> extends undefined ? undefined : Awaited<ReturnType<TContract["metadata"]["get"]>>, unknown>;
/**
 * Update the metadata of this contract
 *
 * @example
 * ```jsx
 * const Component = () => {
 *   const { contract } = useContract("{{contract_address}}");
 *   const {
 *     mutate: updateContractMetadata,
 *     isLoading,
 *     error,
 *   } = useContractMetadataUpdate(contract);
 *
 *   if (error) {
 *     console.error("failed to update contract metadata", error);
 *   }
 *
 *   return (
 *     <button
 *       disabled={isLoading}
 *       onClick={() => updateContractMetadata({ name: "New name", description: "New description" })}
 *     >
 *       Update contract metadata
 *     </button>
 *   );
 * };
 * ```
 *
 * @param contract - the {@link ValidContractInstance} instance of the contract to get the metadata for
 * @returns a response object that includes the contract metadata of the deployed contract
 * @twfeature ContractMetadata
 * @beta
 */
export declare function useContractMetadataUpdate(contract: RequiredParam<ValidContractInstance>): UseMutationResult<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<any>;
}, unknown, {
    name: string;
    description?: string | undefined;
    image?: any;
    external_link?: string | undefined;
    app_uri?: string | undefined;
}, unknown>;
/**
 * CONTRACT EVENTS
 */
/**
 * Get or subscribe to contract events
 *
 * @example
 * ```javascript
 * const { data: contractEvents, isLoading } = useContractEvents(contract);
 * ```
 *
 * @param contract - the {@link ValidContractInstance} instance of the contract to listen to events for
 * @param eventName - the name of the event to query for (omit this or pass `undefined` to query for all events)
 * @param options - options includes the filters ({@link QueryAllEvents}) for the query as well as if you want to subscribe to real-time updates (default: true)
 * @returns a response object that includes the contract events
 * @see {@link https://portal.thirdweb.com/react/react.usecontractevents?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useContractEvents(contract: RequiredParam<ValidContractInstance>, eventName?: string, options?: {
    queryFilter?: EventQueryOptions;
    subscribe?: boolean;
}): UseQueryResult<ContractEvent<Record<string, any>>[], unknown>;
/**
 * Get data from a contract read-function call
 *
 * @example
 * ```javascript
 * const { contract } = useContract("{{contract_address}}");
 * const { data, isLoading, error } = useContractRead(contract, "functionName", ...args);
 *```
 *
 * @param contract - the contract instance of the contract to call a function on
 * @param functionName - the name of the function to call
 * @param args - The arguments to pass to the function (if any), with optional call arguments as the last parameter
 * @returns a response object that includes the data returned by the function call
 * @see {@link https://portal.thirdweb.com/react/react.usecontractread?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useContractRead<TContractAddress extends GeneratedContractAddress | ContractAddress, TContract extends TContractAddress extends GeneratedContractAddress ? BaseContractForAddress<TContractAddress> : ValidContractInstance, TContractInstance extends TContractAddress extends GeneratedContractAddress ? SmartContract<BaseContractForAddress<TContractAddress>> : ValidContractInstance, TFunctionName extends TContractAddress extends GeneratedContractAddress ? TContract extends BaseContractForAddress<TContractAddress> ? keyof TContract["functions"] : never : Parameters<TContractInstance["call"]>[0], TArgs extends TContractAddress extends GeneratedContractAddress ? TContract extends BaseContractForAddress<TContractAddress> ? TFunctionName extends keyof TContract["functions"] ? Parameters<TContract["functions"][TFunctionName]> : unknown[] : unknown[] : unknown[], TReturnType extends TContractAddress extends GeneratedContractAddress ? TContract extends BaseContractForAddress<TContractAddress> ? TFunctionName extends keyof TContract["functions"] ? ReturnType<TContract["functions"][TFunctionName]> : any : any : any>(contract: TContractInstance extends ValidContractInstance ? RequiredParam<TContractInstance> | undefined : TContractAddress extends GeneratedContractAddress ? RequiredParam<SmartContract<BaseContractForAddress<TContractAddress>>> | undefined : RequiredParam<SmartContract> | undefined, functionName: RequiredParam<TFunctionName & string>, args?: TArgs, overrides?: CallOverrides): UseQueryResult<TReturnType, unknown>;
/**
 * Mke a write call to your contract
 *
 * @example
 * ```javascript
 * const { contract } = useContract("{{contract_address}}");
 * const { mutate: myFunction, isLoading, error } = useContractWrite(contract, "myFunction");
 *
 * // the function can be called as follows:
 * // myFunction(["param 1", "param 2", ...])
 *```
 *
 * @param contract - the contract instance of the contract to call a function on
 * @param functionName - the name of the function to call
 * @returns a response object that includes the write function to call
 * @see {@link https://portal.thirdweb.com/react/react.usecontractwrite?utm_source=sdk | Documentation}
 * @beta
 */
export declare function useContractWrite<TContractAddress extends GeneratedContractAddress | ContractAddress, TContract extends TContractAddress extends GeneratedContractAddress ? BaseContractForAddress<TContractAddress> : ValidContractInstance, TContractInstance extends TContractAddress extends GeneratedContractAddress ? SmartContract<BaseContractForAddress<TContractAddress>> : ValidContractInstance, TFunctionName extends TContractAddress extends GeneratedContractAddress ? TContract extends BaseContractForAddress<TContractAddress> ? keyof TContract["functions"] : never : Parameters<TContractInstance["call"]>[0], TArgs extends TContractAddress extends GeneratedContractAddress ? TContract extends BaseContractForAddress<TContractAddress> ? TFunctionName extends keyof TContract["functions"] ? Parameters<TContract["functions"][TFunctionName]> : unknown[] : unknown[] : any[]>(contract: TContractInstance extends ValidContractInstance ? RequiredParam<TContractInstance> | undefined : TContractAddress extends GeneratedContractAddress ? RequiredParam<SmartContract<BaseContractForAddress<TContractAddress>>> | undefined : RequiredParam<SmartContract> | undefined, functionName: RequiredParam<TFunctionName & string>): UseMutationResult<Omit<{
    receipt: providers.TransactionReceipt;
    data: () => Promise<unknown>;
}, "data">, unknown, {
    args?: TArgs | undefined;
    overrides?: CallOverrides | undefined;
}, unknown>;
export {};
//# sourceMappingURL=contracts.d.ts.map