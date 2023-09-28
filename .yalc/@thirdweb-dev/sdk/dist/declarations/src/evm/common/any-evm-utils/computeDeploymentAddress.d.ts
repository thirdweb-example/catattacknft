import { type BytesLike } from "ethers";
/**
 * Pre-compute a contract's deployment address for a CREATE2 deployment.
 *
 * @public
 * @param bytecode: Creation bytecode of the contract to deploy
 * @param encodedArgs: Abi-encoded constructor params
 * @param create2FactoryAddress
 */
export declare function computeDeploymentAddress(bytecode: string, encodedArgs: BytesLike, create2FactoryAddress: string, salt?: string): string;
//# sourceMappingURL=computeDeploymentAddress.d.ts.map