/// <reference types="react" />
export declare const GetStartedScreen: React.FC<{
    onBack?: () => void;
    walletName: string;
    walletIconURL: string;
    chromeExtensionLink?: string;
    googlePlayStoreLink?: string;
    appleStoreLink?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    showBack?: boolean;
}>;
export declare const ButtonLink: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & {
    theme?: {
        type: "dark" | "light";
        colors: {
            primaryText: string;
            secondaryText: string;
            accentText: string;
            danger: string;
            success: string;
            modalOverlayBg: string;
            accentButtonBg: string;
            accentButtonText: string;
            primaryButtonBg: string;
            primaryButtonText: string;
            secondaryButtonBg: string;
            secondaryButtonText: string;
            secondaryButtonHoverBg: string;
            modalBg: string;
            dropdownBg: string;
            tooltipBg: string;
            tooltipText: string;
            inputAutofillBg: string;
            scrollbarBg: string;
            walletSelectorButtonHoverBg: string;
            separatorLine: string;
            secondaryIconColor: string;
            secondaryIconHoverBg: string;
            secondaryIconHoverColor: string;
            borderColor: string;
            skeletonBg: string;
            selectedTextColor: string;
            selectedTextBg: string;
            connectedButtonBg: string;
            connectedButtonBgHover: string;
        };
        fontFamily: string;
    } | undefined;
}, import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
//# sourceMappingURL=GetStartedScreen.d.ts.map