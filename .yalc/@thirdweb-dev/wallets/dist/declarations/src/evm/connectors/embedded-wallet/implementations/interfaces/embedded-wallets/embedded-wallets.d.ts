import type { Chain, CustomizationOptionsType } from "@paperxyz/sdk-common-utilities";
import type { EmbeddedWallet } from "../../lib/core/embedded-wallet";
import type { EmbeddedWalletIframeCommunicator } from "../../utils/iFrameCommunication/EmbeddedWalletIframeCommunicator";
import { RecoveryShareManagement } from "../auth";
export type ClientIdConstructorType = {
    clientId: string;
};
export type EmbeddedWalletConstructorType = ClientIdConstructorType & {
    chain: Chain;
    styles?: CustomizationOptionsType;
};
export type ClientIdWithQuerierType = ClientIdConstructorType & {
    querier: EmbeddedWalletIframeCommunicator<any>;
};
export type ClientIdWithQuerierAndChainType = ClientIdWithQuerierType & {
    chain: Chain;
};
export type AuthDetails = {
    email?: string;
    userWalletId: string;
    recoveryCode?: string;
};
export type InitializedUser = {
    status: UserStatus.LOGGED_IN_WALLET_INITIALIZED;
    wallet: EmbeddedWallet;
    walletAddress: string;
    authDetails: AuthDetails;
};
export declare enum UserStatus {
    LOGGED_OUT = "Logged Out",
    LOGGED_IN_WALLET_INITIALIZED = "Logged In, Wallet Initialized"
}
export declare enum UserWalletStatus {
    LOGGED_OUT = "Logged Out",
    LOGGED_IN_WALLET_UNINITIALIZED = "Logged In, Wallet Uninitialized",
    LOGGED_IN_NEW_DEVICE = "Logged In, New Device",
    LOGGED_IN_WALLET_INITIALIZED = "Logged In, Wallet Initialized"
}
export type WalletAddressObjectType = {
    walletAddress: string;
};
export type SetUpWalletRpcReturnType = WalletAddressObjectType & {
    deviceShareStored: string;
    isIframeStorageEnabled: boolean;
};
export type SendEmailOtpReturnType = {
    isNewUser: boolean;
    isNewDevice: boolean;
    recoveryShareManagement: RecoveryShareManagement;
};
export type LogoutReturnType = {
    success: boolean;
};
export type GetAuthDetailsReturnType = {
    authDetails?: AuthDetails;
};
export type GetUserWalletStatusRpcReturnType = {
    status: UserWalletStatus.LOGGED_OUT;
    user: undefined;
} | {
    status: UserWalletStatus.LOGGED_IN_WALLET_UNINITIALIZED;
    user: {
        authDetails: AuthDetails;
    };
} | {
    status: UserWalletStatus.LOGGED_IN_NEW_DEVICE;
    user: {
        authDetails: AuthDetails;
        walletAddress: string;
    };
} | {
    status: UserWalletStatus.LOGGED_IN_WALLET_INITIALIZED;
    user: Omit<InitializedUser, "wallet" | "status">;
};
export type GetUserWalletStatusFnReturnType = {
    status: UserWalletStatus.LOGGED_OUT;
    user: undefined;
} | {
    status: UserWalletStatus.LOGGED_IN_WALLET_UNINITIALIZED;
    user: {
        authDetails: AuthDetails;
    };
} | {
    status: UserWalletStatus.LOGGED_IN_NEW_DEVICE;
    user: {
        authDetails: AuthDetails;
        walletAddress: string;
    };
} | {
    status: UserWalletStatus.LOGGED_IN_WALLET_INITIALIZED;
    user: Omit<InitializedUser, "status">;
};
export type GetUser = {
    status: UserStatus.LOGGED_OUT;
} | InitializedUser;
//# sourceMappingURL=embedded-wallets.d.ts.map