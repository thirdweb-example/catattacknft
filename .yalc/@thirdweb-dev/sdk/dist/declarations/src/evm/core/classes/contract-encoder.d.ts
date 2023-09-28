import { ContractWrapper } from "./contract-wrapper";
import { BaseContract, utils } from "ethers";
/**
 * Encodes and decodes Contract functions
 * @public
 */
export declare class ContractEncoder<TContract extends BaseContract> {
    private contractWrapper;
    constructor(contractWrapper: ContractWrapper<TContract>);
    /**
     * Encodes the given contract function with argument
     * @returns the encoded data
     */
    encode(fn: keyof TContract["functions"], args: Parameters<TContract["functions"][typeof fn]>): string;
    /**
     * Decode encoded call data for a given function
     * @param fn - the function to decode
     * @param encodedArgs - the encoded arguments
     */
    decode(fn: keyof TContract["functions"], encodedArgs: string): utils.Result;
}
//# sourceMappingURL=contract-encoder.d.ts.map