import { type Signer, type providers } from "ethers";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { AbiInput } from "../../schema";
/**
 * Direct deploy a contract at a deterministic address, using Create2 method
 * Address depends on the Create2 factory address and salt (if provided).
 *
 * @public
 *
 * @param bytecode
 * @param abi
 * @param signer
 * @param constructorArgs
 * @param saltForCreate2
 */
export declare function directDeployDeterministic(bytecode: string, abi: AbiInput, signer: Signer, constructorArgs: any[], saltForCreate2?: string, gasLimit?: number): Promise<string>;
/**
 * Direct deploy a contract at a deterministic address, using Create2 method
 * Address depends on the Create2 factory address and salt (if provided).
 *
 * @public
 *
 * @param publishMetadataUri
 * @param signer
 * @param storage
 * @param constructorArgs
 * @param saltForCreate2
 */
export declare function directDeployDeterministicWithUri(publishMetadataUri: string, signer: Signer, storage: ThirdwebStorage, constructorArgs: any[], saltForCreate2?: string, gasLimit?: number): Promise<string>;
/**
 * Direct deploy a contract at a deterministic address, using Create2 method
 * Address depends on the Create2 factory address and salt (if provided).
 *
 * @public
 *
 * @param contractName
 * @param publisherAddress
 * @param contractVersion
 * @param constructorArgs
 * @param signer
 * @param storage
 * @param clientId
 * @param secretKey
 * @param constructorArgs
 * @param saltForCreate2
 */
export declare function directDeployDeterministicPublished(contractName: string, publisherAddress: string, contractVersion: string | undefined, constructorArgs: any[], signer: Signer, storage: ThirdwebStorage, clientId?: string, secretKey?: string, saltForCreate2?: string, gasLimit?: number): Promise<string>;
export declare function predictAddressDeterministic(bytecode: string, abi: AbiInput, provider: providers.Provider, constructorArgs: any[], saltForCreate2?: string): Promise<string>;
export declare function predictAddressDeterministicWithUri(publishMetadataUri: string, provider: providers.Provider, storage: ThirdwebStorage, constructorArgs: any[], saltForCreate2?: string): Promise<string>;
export declare function predictAddressDeterministicPublished(contractName: string, publisherAddress: string, contractVersion: string | undefined, constructorArgs: any[], provider: providers.Provider, storage: ThirdwebStorage, clientId?: string, secretKey?: string, saltForCreate2?: string): Promise<string>;
//# sourceMappingURL=deployDirectDeterministic.d.ts.map