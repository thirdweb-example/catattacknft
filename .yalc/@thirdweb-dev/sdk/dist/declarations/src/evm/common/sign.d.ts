import type { Signer, TypedDataField } from "ethers";
/**
 * @internal
 */
export interface EIP712StandardDomain {
    name: string;
    version: string;
    chainId?: number;
    verifyingContract: string;
}
/**
 * @internal
 */
export interface EIP712PolygonDomain {
    name: string;
    version: string;
    verifyingContract: string;
    salt: string;
}
/**
 * @internal
 */
export type EIP712Domain = EIP712StandardDomain | EIP712PolygonDomain;
/**
 * eip712 sign typed data with different wallet handling including ledger live
 * @internal
 */
export declare function signTypedDataInternal(signerInput: Signer, domain: EIP712Domain, types: Record<string, Array<TypedDataField>>, message: Record<string, any>): Promise<{
    payload: any;
    signature: string;
}>;
//# sourceMappingURL=sign.d.ts.map