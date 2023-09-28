import type { LoginOptions, LoginPayload, LoginPayloadData } from "@thirdweb-dev/auth";
import { GenericAuthWallet } from "@thirdweb-dev/wallets";
export interface LoginConfig {
    /**
     * The URL to redirect to on login.
     */
    redirectTo?: string;
    /**
     * Function to run on error.
     */
    onError?: (error: string) => void;
}
/**
 * Hook to securely login to a backend with the connected wallet. The backend
 * authentication URL must be configured on the ThirdwebProvider.
 *
 * @param config - Configuration for the login.
 * @returns - A function to invoke to login with the connected wallet.
 *
 * @beta
 */
export declare function useLogin(): {
    login: () => Promise<void>;
    isLoading: boolean;
};
export declare function doLoginWithPayload(wallet: GenericAuthWallet, payload: LoginPayloadData): Promise<LoginPayload>;
export declare function doLogin(wallet: GenericAuthWallet, options?: LoginOptions): Promise<LoginPayload>;
//# sourceMappingURL=useLogin.d.ts.map