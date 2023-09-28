import type { TWRegistry } from "@thirdweb-dev/contracts-js";
import type { ThirdwebStorage } from "@thirdweb-dev/storage";
import { SDKOptions } from "../../schema/sdk-options";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import type { NetworkInput } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * @internal
 */
export declare class ContractRegistry extends ContractWrapper<TWRegistry> {
    constructor(registryAddress: string, network: NetworkInput, storage: ThirdwebStorage, options?: SDKOptions);
    getContractAddresses(walletAddress: AddressOrEns): Promise<string[]>;
    addContract: {
        (contractAddress: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (contractAddress: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    addContracts: {
        (contractAddresses: string[]): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (contractAddresses: string[]) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    removeContract: {
        (contractAddress: string): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (contractAddress: string) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
    removeContracts: {
        (contractAddresses: string[]): Promise<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>;
        prepare: (contractAddresses: string[]) => Promise<Transaction<Omit<{
            receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
            data: () => Promise<unknown>;
        }, "data">>>;
    };
}
//# sourceMappingURL=registry.d.ts.map