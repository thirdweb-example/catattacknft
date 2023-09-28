import { UseQueryResult } from "@tanstack/react-query";
import { PaperWallet, PaperWalletAdditionalOptions } from "@thirdweb-dev/wallets";
type PaperConfig = Omit<PaperWalletAdditionalOptions, "chain">;
export declare function usePaperWallet(): (options: {
    chainId?: number;
    email?: string;
} & PaperConfig) => Promise<PaperWallet>;
export declare function usePaperWalletUserEmail(): UseQueryResult<string | undefined, string>;
export {};
//# sourceMappingURL=usePaper.d.ts.map