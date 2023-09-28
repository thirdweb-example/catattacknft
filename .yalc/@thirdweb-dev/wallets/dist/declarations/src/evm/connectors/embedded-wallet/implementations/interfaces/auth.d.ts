import type { AuthDetails, InitializedUser, SetUpWalletRpcReturnType } from "./embedded-wallets/embedded-wallets";
export declare enum RecoveryShareManagement {
    USER_MANAGED = "USER_MANAGED",
    AWS_MANAGED = "AWS_MANAGED"
}
export declare enum AuthProvider {
    COGNITO = "Cognito"
}
export type GetHeadlessLoginLinkReturnType = {
    loginLink: string;
};
export type StoredTokenType = {
    jwtToken: string;
    authProvider: AuthProvider;
    authDetails: AuthDetails;
    developerClientId: string;
};
export type AuthStoredTokenWithCookieReturnType = {
    storedToken: StoredTokenType & {
        cookieString: string;
        shouldStoreCookieString: boolean;
        isNewUser: boolean;
    };
};
export type AuthAndWalletRpcReturnType = AuthStoredTokenWithCookieReturnType & {
    walletDetails: SetUpWalletRpcReturnType;
};
export type AuthLoginReturnType = {
    user: InitializedUser;
};
//# sourceMappingURL=auth.d.ts.map