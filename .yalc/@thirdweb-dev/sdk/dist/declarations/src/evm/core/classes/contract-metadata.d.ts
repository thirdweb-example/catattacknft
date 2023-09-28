import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BaseContract } from "ethers";
import { z } from "zod";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { TransactionResult } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
/**
 * @internal
 */
export interface IGenericSchemaType {
    deploy: z.AnyZodObject;
    input: z.AnyZodObject;
    output: z.AnyZodObject;
}
/**
 * Handles metadata for a Contract
 * @remarks Read and update metadata for this contract
 * @example
 * ```javascript
 * const contract = await sdk.getContract("{{contract_address}}");
 * const metadata = await contract.metadata.get();
 * await contract.metadata.set({
 *   name: "My Contract",
 *   description: "My contract description"
 * })
 * ```
 * @public
 */
export declare class ContractMetadata<TContract extends BaseContract, TSchema extends IGenericSchemaType> implements DetectableFeature {
    featureName: "ContractMetadata";
    private contractWrapper;
    private schema;
    private storage;
    constructor(contractWrapper: ContractWrapper<TContract>, schema: TSchema, storage: ThirdwebStorage);
    /**
     * @internal
     */
    parseOutputMetadata(metadata: any): Promise<z.output<TSchema["output"]>>;
    /**
     * @internal
     */
    parseInputMetadata(metadata: any): Promise<z.input<TSchema["input"]>>;
    /**
     * Get the metadata of this contract
     * @remarks Get the metadata of a contract
     * @example
     * ```javascript
     * const metadata = await contract.metadata.get();
     * console.log(metadata);
     * ```
     * @public
     * @returns the metadata of the given contract
     * @twfeature ContractMetadata
     */
    get(): Promise<z.output<TSchema["output"]>>;
    /**
     * Set the metadata of this contract
     * @remarks OVERWRITE the metadata of a contract
     * @example
     * ```javascript
     * await contract.metadata.set({
     *   name: "My Contract",
     *   description: "My contract description"
     * })
     * ```
     * @public
     * @param metadata - the metadata to set
     * @twfeature ContractMetadata
     */
    set: {
        (metadata: z.input<TSchema["input"]>): Promise<TransactionResult<z.output<TSchema["output"]>>>;
        prepare: (metadata: z.input<TSchema["input"]>) => Promise<Transaction<TransactionResult<z.output<TSchema["output"]>>>>;
    };
    /**
     * Update the metadata of a contract
     * @remarks Update the metadata of a contract
     * @example
     * ```javascript
     * await contract.metadata.update({
     *   description: "My new contract description"
     * })
     * ```
     * @public
     * @param metadata - the metadata to update
     * @twfeature ContractMetadata
     * */
    update: {
        (metadata: Partial<z.input<TSchema["input"]>>): Promise<TransactionResult<z.output<TSchema["output"]>>>;
        prepare: (metadata: Partial<z.input<TSchema["input"]>>) => Promise<Transaction<TransactionResult<z.output<TSchema["output"]>>>>;
    };
    /**
     *
     * @internal
     * @param metadata - the metadata to set
     * @returns
     */
    _parseAndUploadMetadata(metadata: z.input<TSchema["input"]>): Promise<string>;
    private supportsContractMetadata;
}
//# sourceMappingURL=contract-metadata.d.ts.map