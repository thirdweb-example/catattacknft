import { type BytesLike } from "ethers";
/**
 *
 * Construct init-bytecode, packed with salthash.
 * This hex data is intended to be sent to the CREATE2 factory address
 *
 * @internal
 * @param bytecode: Creation bytecode of the contract to deploy
 * @param encodedArgs: Abi-encoded constructor params
 */
export declare function getInitBytecodeWithSalt(bytecode: string, encodedArgs: BytesLike, salt?: string): string;
//# sourceMappingURL=getInitBytecodeWithSalt.d.ts.map