import type { EmbeddedWalletConstructorType, GetUser } from "../interfaces/embedded-wallets/embedded-wallets";
import { EmbeddedWalletIframeCommunicator } from "../utils/iFrameCommunication/EmbeddedWalletIframeCommunicator";
import type { AuthQuerierTypes } from "./auth";
import { Auth } from "./auth";
export declare class EmbeddedWalletSdk {
    protected clientId: string;
    protected querier: EmbeddedWalletIframeCommunicator<AuthQuerierTypes>;
    private wallet;
    /**
     * Used to manage the Auth state of the user.
     */
    auth: Auth;
    private isClientIdLegacyPaper;
    /**
     * @example
     * const thirdwebEmbeddedWallet = new EmbeddedWalletSdk({ clientId: "", chain: "Goerli" });
     * @param {string} initParams.clientId the clientId found on the {@link https://thirdweb.com/dashboard/settings dashboard settings}
     * @param {Chain} initParams.chain sets the default chain that the EmbeddedWallet will live on.
     * @param {CustomizationOptionsType} initParams.styles sets the default style override for any modal that pops up asking for user's details when creating wallet or logging in.
     */
    constructor({ clientId, chain, styles }: EmbeddedWalletConstructorType);
    /**
     * Gets the usr if they are logged in
     * @example
     *  const user = await thirdwebEmbeddedWallet.getUser();
     *  switch (user.status) {
     *     case UserStatus.LOGGED_OUT: {
     *       // User is logged out, call one of the auth methods on thirdwebEmbeddedWallet.auth to authenticate the user
     *       break;
     *     }
     *     case UserStatus.LOGGED_IN_WALLET_INITIALIZED: {
     *       // user is logged in and wallet is all set up.
     *       // You have access to:
     *       user.status;
     *       user.authDetails;
     *       user.walletAddress;
     *       user.wallet;
     *       break;
     *     }
     *}
     * @returns {GetUser} an object to containing various information on the user statuses
     */
    getUser(): Promise<GetUser>;
}
//# sourceMappingURL=embedded-wallet.d.ts.map