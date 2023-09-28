import type { PackVRFDirect } from "@thirdweb-dev/contracts-js";
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { BigNumber, type BigNumberish } from "ethers";
import { SDKOptions } from "../../schema/sdk-options";
import { Address } from "../../schema/shared/Address";
import { AddressOrEns } from "../../schema/shared/AddressOrEnsSchema";
import { PackRewards } from "../../schema/tokens/pack";
import type { Amount, CurrencyValue } from "../../types/currency";
import { DetectableFeature } from "../interfaces/DetectableFeature";
import { UpdateableNetwork } from "../interfaces/contract";
import type { NetworkInput, TransactionResultWithId } from "../types";
import { ContractWrapper } from "./contract-wrapper";
import { Transaction } from "./transactions";
export declare class PackVRF implements UpdateableNetwork, DetectableFeature {
    featureName: "PackVRF";
    private contractWrapper;
    private storage;
    chainId: number;
    private events;
    constructor(network: NetworkInput, address: string, storage: ThirdwebStorage, options: SDKOptions, chainId: number, contractWrapper?: ContractWrapper<PackVRFDirect>);
    onNetworkUpdated(network: NetworkInput): void;
    getAddress(): Address;
    /**
     * Open pack
     *
     * @example
     * ```javascript
     * const tokenId = 0;
     * const amount = 1;
     * const receipt = await contract.pack.open(tokenId, amount);
     * ```
     *
     * @remarks Open a pack using Chainlink VRFs random number generation
     * @remarks This will return a transaction result with the requestId of the open request, NOT the contents of the pack
     * @remarks To get the contents of the pack, you must call claimRewards once the VRF request has been fulfilled
     * @remarks You can use the canClaimRewards method to check if the VRF request has been fulfilled
     * @param tokenId
     * @param amount
     * @returns
     * @twfeature PackVRF
     */
    open: {
        (tokenId: BigNumberish, amount?: BigNumberish | undefined, gasLimit?: any): Promise<TransactionResultWithId>;
        prepare: (tokenId: BigNumberish, amount?: BigNumberish | undefined, gasLimit?: any) => Promise<Transaction<TransactionResultWithId>>;
    };
    /**
     * Claim the rewards from an opened pack
     *
     * @example
     * ```javascript
     * const rewards = await contract.pack.claimRewards();
     * ```
     *
     * @remarks This will return the contents of the pack
     * @remarks Make sure to check if the VRF request has been fulfilled using canClaimRewards() before calling this method
     * @returns the random rewards from opening a pack
     * @twfeature PackVRF
     */
    claimRewards: {
        (gasLimit?: any): Promise<Promise<{
            erc20Rewards?: {
                contractAddress: string;
                quantityPerReward: string | number;
            }[] | undefined;
            erc721Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
            }[] | undefined;
            erc1155Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
                quantityPerReward: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            }[] | undefined;
        }>>;
        prepare: (gasLimit?: any) => Promise<Transaction<Promise<{
            erc20Rewards?: {
                contractAddress: string;
                quantityPerReward: string | number;
            }[] | undefined;
            erc721Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
            }[] | undefined;
            erc1155Rewards?: {
                tokenId: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
                contractAddress: string;
                quantityPerReward: (string | number | bigint | BigNumber) & (string | number | bigint | BigNumber | undefined);
            }[] | undefined;
        }>>>;
    };
    private parseRewards;
    /**
     * Setup a listener for when a pack is opened
     *
     * @example
     * ```javascript
     * const unsubscribe = await contract.pack.addPackOpenEventListener((packId, openerAddress, rewards) => {
     *  console.log(`Pack ${packId} was opened by ${openerAddress} and contained:`, rewards);
     * });
     * @param callback the listener to call when a pack is opened
     * @returns a unsubscribe function to cleanup the listener
     * @twfeature PackVRF
     */
    addPackOpenEventListener(callback: (packId: string, openerAddress: Address, rewards: PackRewards) => void): Promise<() => void>;
    /**
     * Check if a specific wallet can claim rewards after opening a pack
     *
     * @example
     * ```javascript
     * const canClaim = await contract.pack.canClaimRewards("{{wallet_address}}");
     * ```
     * @param claimerAddress Optional: the address to check if they can claim rewards, defaults to the connected address
     * @returns whether the connected address can claim rewards after opening a pack
     * @twfeature PackVRF
     */
    canClaimRewards(claimerAddress?: AddressOrEns): Promise<boolean>;
    /**
     * Open a pack and claim the rewards
     * @remarks This function will only start the flow of opening a pack, the rewards will be granted automatically to the connected address after VRF request is fulfilled
     *
     * @example
     * ```javascript
     * const packId = 0;
     * const amount = 1;
     * const { id } = await contract.pack.openAndClaim(packId, amount);
     * ```
     *
     * @param packId The id of the pack to open
     * @param amount Optional: the amount of packs to open, defaults to 1
     * @param gasLimit Optional: the gas limit to use for the VRF callback transaction, defaults to 500000
     * @returns
     * @twfeature PackVRF
     */
    openAndClaim(packId: BigNumberish, amount?: BigNumberish, gasLimit?: BigNumberish): Promise<TransactionResultWithId>;
    /**
     * Get the LINK balance of the contract
     *
     * @example
     * ```javascript
     * const balance = await contract.pack.getLinkBalance();
     * ```
     *
     * @returns the balance of LINK in the contract
     * @twfeature PackVRF
     */
    getLinkBalance(): Promise<CurrencyValue>;
    /**
     * Transfer LINK to this contract
     *
     * @example
     * ```javascript
     * const amount = 1;
     * await contract.pack.transferLink(amount);
     * ```
     *
     * @param amount the amount of LINK to transfer to the contract
     * @twfeature PackVRF
     */
    transferLink(amount: Amount): Promise<void>;
    private getLinkContract;
}
//# sourceMappingURL=pack-vrf.d.ts.map