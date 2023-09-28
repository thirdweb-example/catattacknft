/// <reference types="react" />
export declare const Modal: React.FC<{
    trigger?: React.ReactNode;
    open?: boolean;
    setOpen?: (open: boolean) => void;
    children: React.ReactNode;
    style?: React.CSSProperties;
    hideCloseIcon?: boolean;
    size: "wide" | "compact";
}>;
export declare const CrossContainer: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
}, import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
//# sourceMappingURL=Modal.d.ts.map