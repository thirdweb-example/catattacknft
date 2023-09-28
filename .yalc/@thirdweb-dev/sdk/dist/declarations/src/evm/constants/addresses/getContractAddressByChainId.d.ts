import { CONTRACT_ADDRESSES } from "./CONTRACT_ADDRESSES";
import { ChainId } from "../chains/ChainId";
import { SUPPORTED_CHAIN_ID } from "../chains/SUPPORTED_CHAIN_ID";
/**
 * @internal
 */
export declare function getContractAddressByChainId(chainId: SUPPORTED_CHAIN_ID | ChainId.Hardhat, contractName: keyof (typeof CONTRACT_ADDRESSES)[SUPPORTED_CHAIN_ID]): string | undefined;
//# sourceMappingURL=getContractAddressByChainId.d.ts.map