import { type Signer } from "ethers";
import { PrecomputedDeploymentTransaction } from "../../types/any-evm/deploy-data";
import type { DeployOptions } from "../../types/deploy";
/**
 * Deploy a contract at a deterministic address, using Create2 method
 * Address depends on the Create2 factory address.
 *
 * @public
 *
 * @param signer
 * @param bytecode
 * @param encodedArgs
 * @param create2FactoryAddress
 */
export declare function deployContractDeterministic(signer: Signer, transaction: PrecomputedDeploymentTransaction, options?: DeployOptions, gasLimit?: number): Promise<void>;
//# sourceMappingURL=deployContractDeterministic.d.ts.map