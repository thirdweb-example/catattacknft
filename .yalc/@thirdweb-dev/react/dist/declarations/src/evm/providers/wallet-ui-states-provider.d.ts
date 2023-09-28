/// <reference types="react" />
import { Theme } from "../../design-system";
import { WelcomeScreen } from "../../wallet/ConnectWallet/screens/types";
type BoolSetter = (value: boolean) => void;
export type ModalConfig = {
    title: string;
    theme: "light" | "dark" | Theme;
    data: any;
    modalSize: "wide" | "compact";
    termsOfServiceUrl?: string;
    privacyPolicyUrl?: string;
    welcomeScreen?: WelcomeScreen;
    titleIconUrl?: string;
};
export declare const ModalConfigCtx: import("react").Context<ModalConfig>;
export declare const SetModalConfigCtx: import("react").Context<import("react").Dispatch<import("react").SetStateAction<ModalConfig>>>;
export declare const WalletUIStatesProvider: (props: React.PropsWithChildren<{
    theme?: "light" | "dark" | Theme;
    modalSize?: "wide" | "compact";
    title?: string;
    titleIconUrl?: string;
    termsOfServiceUrl?: string;
    privacyPolicyUrl?: string;
    welcomeScreen?: WelcomeScreen;
}>) => import("react/jsx-runtime").JSX.Element;
export declare const useIsWalletModalOpen: () => boolean;
export declare const useSetIsWalletModalOpen: () => BoolSetter;
export {};
//# sourceMappingURL=wallet-ui-states-provider.d.ts.map