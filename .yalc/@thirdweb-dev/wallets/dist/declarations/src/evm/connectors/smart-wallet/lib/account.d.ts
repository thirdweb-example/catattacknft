import { SmartContract, ThirdwebSDK } from "@thirdweb-dev/sdk";
import { BigNumberish, BigNumber, ethers } from "ethers";
import { AccountApiParams } from "../types";
import { BaseAccountAPI } from "./base-api";
export declare class AccountAPI extends BaseAccountAPI {
    sdk: ThirdwebSDK;
    params: AccountApiParams;
    accountContract?: SmartContract;
    factoryContract?: SmartContract;
    constructor(params: AccountApiParams, originalProvider: ethers.providers.Provider);
    getChainId(): Promise<number>;
    getAccountContract(): Promise<SmartContract>;
    getAccountInitCode(): Promise<string>;
    getFactoryContract(): Promise<SmartContract<ethers.BaseContract>>;
    getCounterFactualAddress(): Promise<string>;
    getNonce(): Promise<BigNumber>;
    encodeExecute(target: string, value: BigNumberish, data: string): Promise<string>;
    encodeExecuteBatch(targets: string[], values: BigNumberish[], datas: string[]): Promise<string>;
    signUserOpHash(userOpHash: string): Promise<string>;
    isAcountDeployed(): Promise<boolean>;
}
//# sourceMappingURL=account.d.ts.map