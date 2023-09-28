import type { TWFactory } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, type ContractInterface } from "ethers";
import EventEmitter from "eventemitter3";
import { z } from "zod";
import { DeploySchemaForPrebuiltContractType, PrebuiltContractType } from "../../contracts";
import { SDKOptions } from "../../schema/sdk-options";
import type { DeployEvents, DeployOptions } from "../../types/deploy";
import { NetworkInput } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * @internal
 */
export declare class ContractFactory extends ContractWrapper<TWFactory> {
    storage: ThirdwebStorage;
    private DEFAULT_VERSION_MAP;
    constructor(factoryAddr: string, network: NetworkInput, storage: ThirdwebStorage, options?: SDKOptions);
    deploy: {
        (contractType: any, contractMetadata: any, eventEmitter: EventEmitter<DeployEvents, any>, version?: number | undefined, options?: DeployOptions | undefined, onExecute?: (() => void) | undefined): Promise<string>;
        prepare: (contractType: any, contractMetadata: any, eventEmitter: EventEmitter<DeployEvents, any>, version?: number | undefined, options?: DeployOptions | undefined, onExecute?: (() => void) | undefined) => Promise<Transaction<string>>;
    };
    deployProxyByImplementation: {
        (implementationAddress: string, implementationAbi: ContractInterface, initializerFunction: string, initializerArgs: any[], eventEmitter: EventEmitter<DeployEvents, any>, saltForProxyDeploy?: string | undefined, onExecute?: (() => void) | undefined): Promise<string>;
        prepare: (implementationAddress: string, implementationAbi: ContractInterface, initializerFunction: string, initializerArgs: any[], eventEmitter: EventEmitter<DeployEvents, any>, saltForProxyDeploy?: string | undefined, onExecute?: (() => void) | undefined) => Promise<Transaction<string>>;
    };
    /**
     *
     * @param contractType
     * @param metadata
     * @param contractURI
     * @returns
     * @internal
     */
    getDeployArguments<TContractType extends PrebuiltContractType>(contractType: TContractType, metadata: z.input<DeploySchemaForPrebuiltContractType<TContractType>>, contractURI: string): Promise<any[]>;
    private getDefaultTrustedForwarders;
    private getImplementation;
    getLatestVersion(contractType: PrebuiltContractType): Promise<BigNumber>;
}
//# sourceMappingURL=factory.d.ts.map