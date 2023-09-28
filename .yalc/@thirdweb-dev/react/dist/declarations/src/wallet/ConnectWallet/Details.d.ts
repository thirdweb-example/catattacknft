/// <reference types="react" />
import { Theme } from "../../design-system";
import { type NetworkSelectorProps } from "./NetworkSelector";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { SupportedTokens } from "./defaultTokens";
export type DropDownPosition = {
    side: "top" | "bottom" | "left" | "right";
    align: "start" | "center" | "end";
};
export declare const ConnectedWalletDetails: React.FC<{
    dropdownPosition?: DropDownPosition;
    onDisconnect: () => void;
    style?: React.CSSProperties;
    networkSelector?: Omit<NetworkSelectorProps, "theme" | "onClose" | "chains">;
    className?: string;
    detailsBtn?: () => JSX.Element;
    hideTestnetFaucet?: boolean;
    theme: "light" | "dark" | Theme;
    supportedTokens: SupportedTokens;
    displayBalanceToken?: Record<number, string>;
}>;
export declare const DropdownMenuItem: import("@emotion/styled").StyledComponent<DropdownMenu.DropdownMenuItemProps & import("react").RefAttributes<HTMLDivElement> & {
    theme?: import("@emotion/react").Theme | undefined;
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
}, {}, {}>;
export declare const StyledChevronRightIcon: import("@emotion/styled").StyledComponent<import("@radix-ui/react-icons/dist/types").IconProps & import("react").RefAttributes<SVGSVGElement> & {
    theme?: import("@emotion/react").Theme | undefined;
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
}, {}, {}>;
//# sourceMappingURL=Details.d.ts.map