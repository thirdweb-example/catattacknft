import { type BytesLike, type Signer } from "ethers";
import type { DeployOptions } from "../../types/deploy";
/**
 * Deploy a contract at a deterministic address, using Create2 method
 * Address depends on the Create2 factory address.
 *
 * @public
 *
 * @param type signer
 * @param bytecode
 * @param encodedArgs
 * @param create2FactoryAddress
 */
export declare function deployContractDeterministicRaw(signer: Signer, bytecode: string, encodedArgs: BytesLike, create2FactoryAddress: string, options?: DeployOptions, predictedAddress?: string, gasLimit?: number): Promise<void>;
//# sourceMappingURL=deployContractDeterministicRaw.d.ts.map