/// <reference types="react" />
import { Theme, spacing } from "../design-system";
export declare const ScreenBottomContainer: import("@emotion/styled").StyledComponent<{
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
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare const noScrollBar = "\nscrollbar-width: none;\n&::-webkit-scrollbar {\n  width: 0px;\n  display: none;\n}\n";
export declare function ModalHeader(props: {
    onBack?: () => void;
    title: React.ReactNode;
    imgSrc?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare const Line: import("@emotion/styled").StyledComponent<{
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
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export declare function Container(props: {
    animate?: "fadein" | "floatup" | "floatdown";
    fullHeight?: boolean;
    flex?: "row" | "column";
    expand?: boolean;
    center?: "x" | "y" | "both";
    gap?: keyof typeof spacing;
    children: React.ReactNode;
    style?: React.CSSProperties;
    p?: keyof typeof spacing;
    px?: keyof typeof spacing;
    relative?: boolean;
    scrollY?: boolean;
    color?: keyof Theme["colors"];
    debug?: boolean;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=basic.d.ts.map