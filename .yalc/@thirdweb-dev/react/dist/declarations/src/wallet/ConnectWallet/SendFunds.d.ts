import { SupportedTokens, TokenInfo } from "./defaultTokens";
export declare function SendFunds(props: {
    supportedTokens: SupportedTokens;
}): import("react/jsx-runtime").JSX.Element;
export declare function SendFundsForm(props: {
    onTokenSelect: () => void;
    token?: TokenInfo;
    receieverAddress: string;
    setReceieverAddress: (value: string) => void;
    amount: string;
    setAmount: (value: string) => void;
}): import("react/jsx-runtime").JSX.Element;
export declare function TokenSelector(props: {
    onTokenSelect: (token?: TokenInfo) => void;
    onBack: () => void;
    supportedTokens: SupportedTokens;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=SendFunds.d.ts.map