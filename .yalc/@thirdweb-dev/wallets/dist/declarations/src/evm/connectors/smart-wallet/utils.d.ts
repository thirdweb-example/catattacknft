import { ChainOrRpcUrl } from "@thirdweb-dev/sdk";
export type AccessibleSmartWallets = {
    owned: string;
    hasSignerRole: string[];
};
/**
 * Get all the signers added to the given smart wallet (excluding owner)
 * @param chain
 * @param factoryAddress
 * @param smartWalletAddress
 * @returns
 */
export declare function getAllSigners(chain: ChainOrRpcUrl, factoryAddress: string, smartWalletAddress: string): Promise<any>;
/**
 * Get all the smart wallets associated with a personal wallet address
 * @param chain
 * @param factoryAddress
 * @param personalWalletAddress
 * @returns
 */
export declare function getAllSmartWallets(chain: ChainOrRpcUrl, factoryAddress: string, personalWalletAddress: string): Promise<AccessibleSmartWallets>;
/**
 * Check if a smart wallet is deployed for a given personal wallet address
 * @param chain
 * @param factoryAddress
 * @param personalWalletAddress
 * @returns
 */
export declare function isSmartWalletDeployed(chain: ChainOrRpcUrl, factoryAddress: string, personalWalletAddress: string): Promise<boolean>;
/**
 * Get the associated smart wallet address for a given personal wallet address
 * @param chain
 * @param factoryAddress
 * @param personalWalletAddress
 * @returns
 */
export declare function getSmartWalletAddress(chain: ChainOrRpcUrl, factoryAddress: string, personalWalletAddress: string): Promise<string>;
//# sourceMappingURL=utils.d.ts.map