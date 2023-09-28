import { UserWallet } from "@thirdweb-dev/sdk";
import { Signer } from "ethers";
import React, { PropsWithChildren } from "react";
interface ThirdwebConnectedWalletContext {
    wallet: UserWallet | undefined;
    address: string | undefined;
    chainId: number | undefined;
    signer: Signer | undefined;
}
export declare const ThirdwebConnectedWalletContext: React.Context<ThirdwebConnectedWalletContext | undefined>;
export declare const ThirdwebConnectedWalletProvider: React.FC<PropsWithChildren<{
    signer?: Signer;
}>>;
export declare function useThirdwebConnectedWalletContext(): ThirdwebConnectedWalletContext;
export {};
//# sourceMappingURL=thirdweb-wallet.d.ts.map