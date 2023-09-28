import { type AuthAndWalletRpcReturnType, type AuthLoginReturnType } from "../../interfaces/auth";
import type { ClientIdWithQuerierType, LogoutReturnType, SendEmailOtpReturnType } from "../../interfaces/embedded-wallets/embedded-wallets";
import { LocalStorage } from "../../utils/Storage/LocalStorage";
import type { EmbeddedWalletIframeCommunicator } from "../../utils/iFrameCommunication/EmbeddedWalletIframeCommunicator";
import { BaseLogin } from "./base-login";
export type AuthQuerierTypes = {
    logout: void;
    initIframe: {
        clientId: string;
        authCookie: string;
        walletUserId: string;
        deviceShareStored: string;
    };
};
export declare class Auth {
    protected clientId: string;
    protected AuthQuerier: EmbeddedWalletIframeCommunicator<AuthQuerierTypes>;
    protected localStorage: LocalStorage;
    protected onAuthSuccess: (authResults: AuthAndWalletRpcReturnType) => Promise<AuthLoginReturnType>;
    private BaseLogin;
    /**
     * Used to manage the user's auth states. This should not be instantiated directly.
     * Call {@link EmbeddedWalletSdk.auth} instead.
     *
     * @param {string} params.clientId the clientId from your thirdweb dashboard
     */
    constructor({ clientId, querier, onAuthSuccess, }: ClientIdWithQuerierType & {
        onAuthSuccess: (authDetails: AuthAndWalletRpcReturnType) => Promise<AuthLoginReturnType>;
    });
    private preLogin;
    private postLogin;
    /**
     * @description
     * Used to log the user into their thirdweb wallet on your platform via a myriad of auth providers
     *
     * @example
     * const thirdwebEmbeddedWallet = new EmbeddedWalletSdk({clientId: "YOUR_CLIENT_ID", chain: "Polygon"})
     * try {
     *   const user = await thirdwebEmbeddedWallet.auth.loginWithModal();
     *   // user is now logged in
     * } catch (e) {
     *   // User closed modal or something else went wrong during the authentication process
     *   console.error(e)
     * }
     *
     * @param {(userWalletId: string) => Promise<string | undefined>} args.getRecoveryCode Only present when using RecoveryShareManagement.USER_MANAGED recovery share management. A function that returns the recovery code for a given userWalletId.
     *
     * @returns {{user: InitializedUser}} An InitializedUser object. See {@link EmbeddedWalletSdk.getUser} for more
     */
    loginWithModal(): Promise<AuthLoginReturnType>;
    /**
     * @description
     * Used to log the user into their thirdweb wallet using email OTP
     *
     * @example
     *  // Basic Flow
     *  const thirdwebEmbeddedWallet = new EmbeddedWalletSdk({clientId: "", chain: "Polygon"});
     *  try {
     *    // prompts user to enter the code they received
     *    const user = await thirdwebEmbeddedWallet.auth.loginWithThirdwebEmailOtp({ email : "you@example.com" });
     *    // user is now logged in
     *  } catch (e) {
     *    // User closed the OTP modal or something else went wrong during the authentication process
     *    console.error(e)
     *  }
     *
     * @param {string} props.email We will send the email an OTP that needs to be entered in order for them to be logged in.
     * @returns {{user: InitializedUser}} An InitializedUser object. See {@link EmbeddedWalletSdk.getUser} for more
     */
    loginWithEmailOtp(args: Parameters<BaseLogin["loginWithEmailOtp"]>[0]): Promise<AuthLoginReturnType>;
    loginWithGoogle(args?: Parameters<BaseLogin["loginWithGoogle"]>[0]): Promise<AuthLoginReturnType>;
    /**
     * A headless way to initiate login with google.
     * @returns {{user: InitializedUser}} An InitializedUser object. See {@link EmbeddedWalletSdk.getUser} for more
  
     */
    /**
     * @description
     * A headless way to send the users at {email} an OTP code.
     * You need to then call {@link Auth.verifyEmailLoginOtp} in order to complete the login process
     *
     * @example
     *  const thirdwebEmbeddedWallet = new EmbeddedWalletSdk({clientId: "", chain: "Polygon"});
     *  // sends user an OTP code
     * try {
     *    await thirdwebEmbeddedWallet.auth.sendEmailLoginOtp({ email : "you@example.com" });
     * } catch(e) {
     *    // Error Sending user's email an OTP code
     *    console.error(e);
     * }
     *
     * // Then when your user is ready to verify their OTP
     * try {
     *    const user = await thirdwebEmbeddedWallet.auth.verifyEmailLoginOtp({ email: "you@example.com", otp: "6-DIGIT_CODE_HERE" });
     * } catch(e) {
     *    // Error verifying the OTP code
     *    console.error(e)
     * }
     *
     * @param {string} props.email We will send the email an OTP that needs to be entered in order for them to be logged in.
     * @returns {{ isNewUser: boolean }} IsNewUser indicates if the user is a new user to your platform
     */
    sendEmailLoginOtp({ email, }: Parameters<BaseLogin["sendEmailLoginOtp"]>[0]): Promise<SendEmailOtpReturnType>;
    /**
     *  @description
     * Used to verify the otp that the user receives from thirdweb
     *
     * See {@link Auth.sendEmailLoginOtp} for how the headless call flow looks like. Simply swap out the calls to `loginWithThirdwebEmailOtp` with `verifyThirdwebEmailLoginOtp`
     *
     * @param {string} props.email We will send the email an OTP that needs to be entered in order for them to be logged in.
     * @param {string} props.otp The code that the user received in their email
     * @returns {{user: InitializedUser}} An InitializedUser object containing the user's status, wallet, authDetails, and more
     */
    verifyEmailLoginOtp(args: Parameters<BaseLogin["verifyEmailLoginOtp"]>[0]): Promise<AuthLoginReturnType>;
    /**
     * @description
     * Logs any existing user out of their wallet.
     * @returns {{success: boolean}} true if a user is successfully logged out. false if there's no user currently logged in.
     */
    logout(): Promise<LogoutReturnType>;
}
//# sourceMappingURL=index.d.ts.map