import { type UnsignedTransaction } from "ethers";
import { KeylessTransaction } from "../../types/any-evm/deploy-data";
/**
 * Generate a transaction to be sent with a keyless signer.
 *
 * @public
 * @param transaction: Unsigned transaction object
 * @param signature: Signature bytes
 */
export declare function getKeylessTxn(transaction: UnsignedTransaction, signature: string): KeylessTransaction;
//# sourceMappingURL=getKeylessTxn.d.ts.map