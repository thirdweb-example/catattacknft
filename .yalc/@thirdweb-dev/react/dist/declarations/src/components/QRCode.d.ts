import QRCodeUtil from "qrcode";
import React from "react";
export declare const QRCode: React.FC<{
    qrCodeUri?: string;
    QRIcon?: React.ReactNode;
    size?: number;
}>;
type Props = {
    ecl?: QRCodeUtil.QRCodeErrorCorrectionLevel;
    size?: number;
    uri: string;
    clearSize?: number;
    image?: React.ReactNode;
    imageBackground?: string;
};
export declare const PlaceholderKeyframes: import("@emotion/react").Keyframes;
export declare const QRPlaceholder: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
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
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare function QRCodeRenderer({ ecl, size: sizeProp, uri, clearSize, image, imageBackground, }: Props): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=QRCode.d.ts.map