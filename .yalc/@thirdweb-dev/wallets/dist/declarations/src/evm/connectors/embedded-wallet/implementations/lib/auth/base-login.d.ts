import type { AuthLoginReturnType } from "../../interfaces/auth";
import { AbstractLogin } from "./abstract-login";
export declare class BaseLogin extends AbstractLogin<{
    getRecoveryCode: (userWalletId: string) => Promise<string | undefined>;
}, {
    email: string;
}, {
    email: string;
    otp: string;
}> {
    private getGoogleLoginUrl;
    loginWithModal(): Promise<AuthLoginReturnType>;
    loginWithEmailOtp({ email, }: {
        email: string;
    }): Promise<AuthLoginReturnType>;
    private closeWindow;
    loginWithGoogle(args?: {
        openedWindow?: Window | null;
        closeOpenedWindow?: (openedWindow: Window) => void;
    }): Promise<AuthLoginReturnType>;
    verifyEmailLoginOtp({ email, otp, }: {
        email: string;
        otp: string;
    }): Promise<AuthLoginReturnType>;
}
//# sourceMappingURL=base-login.d.ts.map