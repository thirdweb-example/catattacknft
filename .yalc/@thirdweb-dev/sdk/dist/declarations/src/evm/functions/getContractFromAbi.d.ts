import { SmartContract } from "../contracts/smart-contract";
import { NetworkInput } from "../core/types";
import { AddressOrEns } from "../schema/shared/AddressOrEnsSchema";
import { SDKOptions } from "../schema/sdk-options";
import type { ThirdwebStorage } from "@thirdweb-dev/storage";
import type { ContractInterface } from "ethers";
export type GetContractFromAbiParams = {
    address: AddressOrEns;
    abi: ContractInterface;
    network: NetworkInput;
    storage?: ThirdwebStorage;
    sdkOptions?: SDKOptions;
};
export declare function getContractFromAbi(params: GetContractFromAbiParams): Promise<SmartContract>;
//# sourceMappingURL=getContractFromAbi.d.ts.map