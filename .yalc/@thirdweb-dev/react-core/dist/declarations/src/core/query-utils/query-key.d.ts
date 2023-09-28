import { RequiredParam } from "./required-param";
import type { QueryKey } from "@tanstack/react-query";
import type { ValidContractInstance } from "@thirdweb-dev/sdk";
import type { Network, NFTCollection, NFTDrop, Token } from "@thirdweb-dev/sdk/solana";
export declare function ensureTWPrefix<TKey extends QueryKey>(key: TKey): readonly ["__tw__", ...Readonly<TKey>];
export declare function neverPersist<TKey extends QueryKey>(key: TKey): readonly [...TKey, {
    readonly persist: false;
}];
export declare function shouldNeverPersistQuery<TKey extends QueryKey>(key: TKey): boolean;
export declare function createEVMQueryKey<TKey extends QueryKey>(key: TKey): readonly ["__tw__", "evm", ...Readonly<TKey>];
export declare function createEVMQueryKeyWithChain<TKey extends QueryKey>(key: TKey, chainId: RequiredParam<number>): readonly ["__tw__", RequiredParam<number>, ...Readonly<TKey>];
export declare function createEVMContractQueryKey<TKey extends QueryKey>(contract: RequiredParam<ValidContractInstance>, key?: TKey): readonly ["__tw__", RequiredParam<number>, "contract", string | undefined, ...Readonly<TKey>];
export declare function createSOLQueryKey<TKey extends QueryKey>(key: TKey): readonly ["__tw__", "sol", ...Readonly<TKey>];
export declare function createSOLQueryKeyWithNetwork<TKey extends QueryKey>(key: TKey, network: RequiredParam<Network>): readonly ["__tw__", "sol", RequiredParam<Network>, ...Readonly<TKey>];
export declare function createSOLProgramQueryKey<TKey extends QueryKey>(program: RequiredParam<NFTCollection | NFTDrop | Token>, key?: TKey): readonly ["__tw__", "sol", RequiredParam<Network>, "program", string | undefined, ...Readonly<TKey>];
//# sourceMappingURL=query-key.d.ts.map