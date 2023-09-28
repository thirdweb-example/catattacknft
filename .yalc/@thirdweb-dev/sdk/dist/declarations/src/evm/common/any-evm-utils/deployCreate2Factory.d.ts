import { Signer } from "ethers";
import type { DeployOptions } from "../../types/deploy";
/**
 * Deploy Nick's Create2 factory on a given network.
 * Deployment is keyless. Signer is needed to fund the keyless signer address.
 * Ref: https://github.com/Arachnid/deterministic-deployment-proxy
 *
 * @public
 * @param signer
 */
export declare function deployCreate2Factory(signer: Signer, options?: DeployOptions): Promise<string>;
//# sourceMappingURL=deployCreate2Factory.d.ts.map