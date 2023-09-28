export declare const darkThemeObj: {
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
};
export declare const lightThemeObj: {
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
};
export type Theme = typeof darkThemeObj;
export type ThemeObjectOrType = "light" | "dark" | Theme;
export type ThemeOverrides = {
    [key in Exclude<keyof Theme, "type">]?: Partial<Theme[key]>;
};
export declare const fontSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
export declare const spacing: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
};
export declare const radius: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
};
export declare const iconSize: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    xxl: string;
};
export declare const media: {
    mobile: string;
};
export declare const shadow: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
};
export declare function lightTheme(overrides: ThemeOverrides): Theme;
export declare function darkTheme(overrides: ThemeOverrides): Theme;
export declare function applyThemeOverrides(baseTheme: Theme, themeOverides: ThemeOverrides): Theme;
//# sourceMappingURL=index.d.ts.map